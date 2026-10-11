"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BrowserMetronome } from "@/app/lib/browser-metronome";

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
  const [starting, setStarting] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const engineRef = useRef<BrowserMetronome | null>(null);
  const tapTimesRef = useRef<number[]>([]);

  const stop = useCallback(() => {
    engineRef.current?.stop();
    setIsPlaying(false);
    setStarting(false);
    setCurrentBeat(0);
  }, []);

  useEffect(() => {
    window.addEventListener("pagehide", stop);
    return () => {
      window.removeEventListener("pagehide", stop);
      stop();
    };
  }, [stop]);

  async function start() {
    stop();
    setError(null);
    setStarting(true);
    const engine = engineRef.current ??= new BrowserMetronome(setCurrentBeat);
    engine.setTempo(bpm);
    engine.setBeats(beatsPerBar);
    const request = engine.start();
    const requestID = engine.requestID;
    try {
      const context = await request;
      if (!context || !engine.isCurrent(context)) return;
      setStarting(false);
      setIsPlaying(true);
    } catch {
      if (engine.requestID !== requestID) return;
      stop();
      setError(copy.error);
    }
  }

  function changeBpm(value: number) {
    const nextBpm = Number.isFinite(value) ? Math.min(500, Math.max(20, value)) : bpm;
    engineRef.current?.setTempo(nextBpm);
    setBpm(nextBpm);
    setBpmInput(String(nextBpm));
  }

  function editBpm(rawValue: string) {
    setBpmInput(rawValue);
    const value = Number(rawValue);
    if (rawValue !== "" && Number.isFinite(value) && value >= 20 && value <= 500) {
      engineRef.current?.setTempo(value);
      setBpm(value);
    }
  }

  function changeBeatsPerBar(value: number) {
    engineRef.current?.setBeats(value);
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
        <button className="playButton" type="button" onClick={isPlaying || starting ? stop : start}>{isPlaying || starting ? copy.stop : copy.start}</button>
      </div>
      {error ? <p className="metronomeError" role="alert">{error}</p> : null}
      <p>{copy.hint}</p>
    </section>
  );
}
