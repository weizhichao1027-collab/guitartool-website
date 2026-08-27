"use client";

import { useEffect, useRef, useState } from "react";

type MetronomeCopy = {
  label: string;
  start: string;
  stop: string;
  tempo: string;
  beats: string;
  tap: string;
  slower: string;
  faster: string;
  hint: string;
  error: string;
};

export function MetronomeTool({ copy }: { copy: MetronomeCopy }) {
  const [bpm, setBpm] = useState(80);
  const [bpmInput, setBpmInput] = useState("80");
  const [beatsPerBar, setBeatsPerBar] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const nextNoteTimeRef = useRef(0);
  const beatRef = useRef(0);
  const bpmRef = useRef(bpm);
  const beatsRef = useRef(beatsPerBar);
  const tapTimesRef = useRef<number[]>([]);

  useEffect(() => () => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    void audioContextRef.current?.close();
  }, []);

  function scheduleClick(context: AudioContext, time: number, beat: number) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = beat === 0 ? 1320 : 880;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(beat === 0 ? 0.5 : 0.3, time + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.055);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(time);
    oscillator.stop(time + 0.06);
    window.setTimeout(() => setCurrentBeat(beat), Math.max(0, (time - context.currentTime) * 1000));
  }

  function scheduler() {
    const context = audioContextRef.current;
    if (!context) return;
    while (nextNoteTimeRef.current < context.currentTime + 0.1) {
      const beat = beatRef.current;
      scheduleClick(context, nextNoteTimeRef.current, beat);
      beatRef.current = (beat + 1) % beatsRef.current;
      nextNoteTimeRef.current += 60 / bpmRef.current;
    }
  }

  async function start() {
    setError(null);
    try {
      const context = audioContextRef.current ?? new AudioContext();
      audioContextRef.current = context;
      await context.resume();
      if (context.state !== "running") throw new Error("Audio context did not start");
      beatRef.current = 0;
      nextNoteTimeRef.current = context.currentTime + 0.05;
      scheduler();
      timerRef.current = window.setInterval(scheduler, 25);
      setIsPlaying(true);
    } catch {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
      timerRef.current = null;
      void audioContextRef.current?.close();
      audioContextRef.current = null;
      setIsPlaying(false);
      setError(copy.error);
    }
  }

  function stop() {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    timerRef.current = null;
    setIsPlaying(false);
    setCurrentBeat(0);
  }

  function changeBpm(value: number) {
    const nextBpm = Math.min(500, Math.max(20, value));
    bpmRef.current = nextBpm;
    setBpm(nextBpm);
    setBpmInput(String(nextBpm));
  }

  function editBpm(rawValue: string) {
    setBpmInput(rawValue);
    const value = Number(rawValue);
    if (rawValue !== "" && Number.isFinite(value) && value >= 20 && value <= 500) {
      bpmRef.current = value;
      setBpm(value);
    }
  }

  function changeBeatsPerBar(value: number) {
    beatsRef.current = value;
    beatRef.current = 0;
    setCurrentBeat(0);
    setBeatsPerBar(value);
  }

  function tapTempo() {
    const now = performance.now();
    const recent = tapTimesRef.current.filter((time) => now - time < 2000);
    recent.push(now);
    tapTimesRef.current = recent.slice(-5);
    if (tapTimesRef.current.length < 2) return;
    const intervals = tapTimesRef.current.slice(1).map((time, index) => time - tapTimesRef.current[index]);
    const average = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length;
    changeBpm(Math.round(60000 / average));
  }

  return (
    <section className="metronomeTool" aria-label={copy.label}>
      <div className="beatLights" aria-live="polite" aria-label={`${currentBeat + 1} / ${beatsPerBar}`}>
        {Array.from({ length: beatsPerBar }, (_, beat) => (
          <span className={isPlaying && currentBeat === beat ? "active" : ""} key={beat} aria-hidden="true" />
        ))}
      </div>
      <div className="tempoReadout">
        <button type="button" onClick={() => changeBpm(bpm - 1)} aria-label={copy.slower}>−</button>
        <label>
          <span>{copy.tempo}</span>
          <input type="number" name="tempo" min="20" max="500" inputMode="numeric" autoComplete="off" value={bpmInput} onChange={(event) => editBpm(event.target.value)} onBlur={() => changeBpm(Number(bpmInput) || bpm)} onKeyDown={(event) => { if (event.key === "Enter") event.currentTarget.blur(); }} />
          <small>BPM</small>
        </label>
        <button type="button" onClick={() => changeBpm(bpm + 1)} aria-label={copy.faster}>＋</button>
      </div>
      <input className="tempoRange" type="range" name="tempo-slider" min="20" max="500" value={bpm} onChange={(event) => changeBpm(Number(event.target.value))} aria-label={copy.tempo} />
      <div className="metronomeControls">
        <label>{copy.beats}<select name="beats-per-bar" value={beatsPerBar} onChange={(event) => changeBeatsPerBar(Number(event.target.value))}>{Array.from({ length: 12 }, (_, index) => <option value={index + 1} key={index + 1}>{index + 1}</option>)}</select></label>
        <button className="tapButton" type="button" onClick={tapTempo}>{copy.tap}</button>
        <button className="playButton" type="button" onClick={isPlaying ? stop : start}>{isPlaying ? copy.stop : copy.start}</button>
      </div>
      {error ? <p className="metronomeError" role="alert">{error}</p> : null}
      <p>{copy.hint}</p>
    </section>
  );
}
