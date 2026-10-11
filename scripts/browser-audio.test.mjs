import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

// Compile the actual production modules without a browser, network, or copied implementation.
async function moduleURL(name, imports = {}) {
  const source = await readFile(new URL(`../app/lib/${name}.ts`, import.meta.url), "utf8");
  let { outputText } = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2022 },
  });
  for (const [path, url] of Object.entries(imports)) outputText = outputText.replace(`"${path}"`, `"${url}"`);
  return `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`;
}
const sessionURL = await moduleURL("browser-audio-session");
const { BrowserAudioSession } = await import(sessionURL);
const { BrowserMetronome } = await import(await moduleURL("browser-metronome", { "./browser-audio-session": sessionURL }));

function deferred() {
  let resolve, reject;
  const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}
function stream() {
  const track = { stops: 0, stop() { this.stops += 1; } };
  return { track, getTracks: () => [track] };
}
function context(resumeGate) {
  return {
    state: "suspended", currentTime: 0, closes: 0, destination: {}, oscillators: [],
    async resume() { if (resumeGate) await resumeGate.promise; this.state = "running"; },
    async close() { this.closes += 1; this.state = "closed"; },
    createMediaStreamSource() { return { connect() {} }; },
    createOscillator() {
      const oscillator = { frequency: { value: 0 }, connect() {}, disconnect() {},
        start(time) { this.startTime = time; }, stop(time) { this.endTime = time; } };
      this.oscillators.push(oscillator);
      return oscillator;
    },
    createGain() { return { gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {}, disconnect() {} }; },
  };
}
function timers() {
  let id = 0;
  const intervals = new Map(), timeouts = new Map();
  return { intervals, timeouts,
    setInterval(callback) { intervals.set(++id, callback); return id; },
    clearInterval(value) { intervals.delete(value); },
    setTimeout(callback) { timeouts.set(++id, callback); return id; },
    clearTimeout(value) { timeouts.delete(value); },
  };
}
const tick = () => new Promise((resolve) => setImmediate(resolve));

test("cancel during resume never asks for a microphone", async () => {
  const gate = deferred(), audio = context(gate);
  let prompts = 0;
  const session = new BrowserAudioSession({ createContext: () => audio, getMicrophone: async () => { prompts += 1; return stream(); } });
  const pending = session.start(true);
  session.stop();
  gate.resolve();
  assert.equal(await pending, null);
  assert.equal(prompts, 0);
  assert.equal(audio.closes, 1);
});

test("late microphone approval disposes its tracks after stop", async () => {
  const permission = deferred(), audio = context(), microphone = stream();
  const session = new BrowserAudioSession({ createContext: () => audio, getMicrophone: () => permission.promise });
  const pending = session.start(true);
  await tick();
  session.stop();
  permission.resolve(microphone);
  assert.equal(await pending, null);
  assert.equal(microphone.track.stops, 1);
  assert.equal(audio.closes, 1);
});

test("overlapping approvals only retain the newest microphone", async () => {
  const first = deferred(), second = deferred(), contexts = [context(), context()];
  const permissions = [first, second];
  const session = new BrowserAudioSession({ createContext: () => contexts.shift(), getMicrophone: () => permissions.shift().promise });
  const old = session.start(true);
  await tick();
  const fresh = session.start(true);
  await tick();
  const newStream = stream(), oldStream = stream();
  second.resolve(newStream);
  const current = await fresh;
  first.resolve(oldStream);
  assert.equal(await old, null);
  assert.equal(session.isCurrent(current), true);
  assert.equal(oldStream.track.stops, 1);
  assert.equal(newStream.track.stops, 0);
  session.stop();
  assert.equal(newStream.track.stops, 1);
});

test("stale failure cannot close a newer successful session", async () => {
  const permission = deferred(), contexts = [context(), context()];
  const session = new BrowserAudioSession({ createContext: () => contexts.shift(), getMicrophone: () => permission.promise });
  const old = session.start(true);
  await tick();
  const current = await session.start();
  permission.reject(new Error("old permission denied"));
  assert.equal(await old, null);
  assert.equal(session.isCurrent(current), true);
  assert.equal(current.closes, 0);
  session.stop();
});

test("microphone is owned before graph construction can fail", async () => {
  const audio = context(), microphone = stream();
  audio.createMediaStreamSource = () => { throw new Error("graph failed"); };
  const session = new BrowserAudioSession({ createContext: () => audio, getMicrophone: async () => microphone });
  await session.start(true);
  assert.throws(() => session.connectMicrophone(audio, {}), /graph failed/);
  session.stop(); // The component's failure cleanup must own even an unpublished stream.
  assert.equal(microphone.track.stops, 1);
  assert.equal(audio.closes, 1);
});

test("current start failure releases resources and remains attributable to its request", async () => {
  const audio = context();
  audio.resume = async () => { throw new Error("resume failed"); };
  const session = new BrowserAudioSession({ createContext: () => audio });
  const request = session.start(), requestID = session.requestID;
  await assert.rejects(request, /resume failed/);
  assert.equal(session.requestID, requestID);
  assert.equal(audio.closes, 1);
  assert.equal(session.isCurrent(audio), false);
});

test("metronome overlapping starts cannot orphan a scheduler", async () => {
  const first = deferred(), second = deferred(), audio = [context(first), context(second)], clock = timers();
  const session = new BrowserAudioSession({ createContext: () => audio.shift() });
  const engine = new BrowserMetronome(() => {}, session, clock);
  const old = engine.start(), fresh = engine.start();
  second.resolve();
  const current = await fresh;
  first.resolve();
  assert.equal(await old, null);
  assert.equal(engine.isCurrent(current), true);
  assert.equal(clock.intervals.size, 1);
  engine.stop();
  assert.equal(clock.intervals.size, 0);
  assert.equal(clock.timeouts.size, 0);
});

test("stop closes queued sound and rejects already queued display callbacks", async () => {
  const audio = context(), clock = timers(), beats = [];
  const engine = new BrowserMetronome((beat) => beats.push(beat), new BrowserAudioSession({ createContext: () => audio }), clock);
  await engine.start();
  assert.equal(audio.oscillators.length, 1);
  const stale = [...clock.timeouts.values()];
  engine.stop();
  stale.forEach((callback) => callback());
  assert.equal(audio.closes, 1);
  assert.equal(clock.intervals.size, 0);
  assert.equal(clock.timeouts.size, 0);
  assert.deepEqual(beats, []);
});

test("one-hour scheduler gap skips history with bounded future work", async () => {
  const audio = context(), clock = timers();
  const engine = new BrowserMetronome(() => {}, new BrowserAudioSession({ createContext: () => audio }), clock);
  engine.setTempo(500);
  await engine.start();
  audio.currentTime = 3600;
  const before = audio.oscillators.length;
  [...clock.intervals.values()][0]();
  const added = audio.oscillators.slice(before);
  assert.ok(added.length <= 2);
  assert.ok(added.every((oscillator) => oscillator.startTime >= 3600));
  engine.stop();
});

test("signature changes invalidate queued beat displays", async () => {
  const audio = context(), clock = timers(), beats = [];
  const engine = new BrowserMetronome((beat) => beats.push(beat), new BrowserAudioSession({ createContext: () => audio }), clock);
  await engine.start();
  const stale = [...clock.timeouts.values()];
  engine.setBeats(3);
  stale.forEach((callback) => callback());
  assert.deepEqual(beats, [0]);
  assert.equal(clock.timeouts.size, 0);
  engine.stop();
});

test("scheduling failure releases context and lets its caller show the error", async () => {
  const audio = context(), clock = timers();
  audio.createOscillator = () => { throw new Error("node failed"); };
  const engine = new BrowserMetronome(() => {}, new BrowserAudioSession({ createContext: () => audio }), clock);
  const pending = engine.start(), requestID = engine.requestID;
  await assert.rejects(pending, /node failed/);
  assert.equal(engine.requestID, requestID);
  assert.equal(audio.closes, 1);
  assert.equal(clock.intervals.size, 0);
});
