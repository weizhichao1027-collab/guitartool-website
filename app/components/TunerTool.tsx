"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TunerLocale } from "@/app/lib/tuner-locales";

type Reading = {
  note: string;
  octave: number;
  frequency: number;
  cents: number;
  stable: boolean;
};

const NOTE_NAMES = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"];

function detectPitch(samples: Float32Array, sampleRate: number) {
  let energy = 0;
  for (const sample of samples) energy += sample * sample;
  const rms = Math.sqrt(energy / samples.length);
  if (rms < 0.012) return null;

  const minimumLag = Math.floor(sampleRate / 1200);
  const maximumLag = Math.min(Math.floor(sampleRate / 45), samples.length - 2);
  let bestLag = -1;
  let bestCorrelation = 0;

  for (let lag = minimumLag; lag <= maximumLag; lag += 1) {
    let correlation = 0;
    let leftEnergy = 0;
    let rightEnergy = 0;
    const count = samples.length - lag;
    for (let index = 0; index < count; index += 1) {
      const left = samples[index];
      const right = samples[index + lag];
      correlation += left * right;
      leftEnergy += left * left;
      rightEnergy += right * right;
    }
    const normalized = correlation / Math.sqrt(leftEnergy * rightEnergy || 1);
    if (normalized > bestCorrelation) {
      bestCorrelation = normalized;
      bestLag = lag;
    }
  }

  if (bestLag < 0 || bestCorrelation < 0.72) return null;
  return sampleRate / bestLag;
}

function readingFor(frequency: number, recentCents: number[]): Reading {
  const midi = Math.round(69 + 12 * Math.log2(frequency / 440));
  const target = 440 * 2 ** ((midi - 69) / 12);
  const cents = 1200 * Math.log2(frequency / target);
  const nextHistory = [...recentCents.slice(-4), cents];
  const spread = Math.max(...nextHistory) - Math.min(...nextHistory);
  return {
    note: NOTE_NAMES[((midi % 12) + 12) % 12],
    octave: Math.floor(midi / 12) - 1,
    frequency,
    cents,
    stable: nextHistory.length >= 4 && spread < 5,
  };
}

export function TunerTool({ copy }: { copy: TunerLocale }) {
  const [running, setRunning] = useState(false);
  const [error, setError] = useState(false);
  const [reading, setReading] = useState<Reading | null>(null);
  const [preset, setPreset] = useState<"chromatic" | "guitar" | "ukulele">("chromatic");
  const contextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastSampleRef = useRef(0);
  const centsHistoryRef = useRef<number[]>([]);
  const frequencyRef = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    streamRef.current?.getTracks().forEach((track) => track.stop());
    void contextRef.current?.close();
    animationRef.current = null;
    streamRef.current = null;
    contextRef.current = null;
    frequencyRef.current = null;
    centsHistoryRef.current = [];
    setRunning(false);
    setReading(null);
  }, []);

  useEffect(() => stop, [stop]);

  const start = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError(true);
      return;
    }
    setError(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, autoGainControl: false, noiseSuppression: false },
      });
      const context = new AudioContext();
      const analyser = context.createAnalyser();
      analyser.fftSize = 4096;
      analyser.smoothingTimeConstant = 0;
      context.createMediaStreamSource(stream).connect(analyser);
      const samples = new Float32Array(analyser.fftSize);
      streamRef.current = stream;
      contextRef.current = context;
      setRunning(true);

      const sample = (time: number) => {
        if (time - lastSampleRef.current >= 80) {
          lastSampleRef.current = time;
          analyser.getFloatTimeDomainData(samples);
          const detected = detectPitch(samples, context.sampleRate);
          if (detected) {
            const smoothed = frequencyRef.current === null ? detected : frequencyRef.current * 0.72 + detected * 0.28;
            frequencyRef.current = smoothed;
            const next = readingFor(smoothed, centsHistoryRef.current);
            centsHistoryRef.current = [...centsHistoryRef.current.slice(-4), next.cents];
            setReading(next);
          } else {
            frequencyRef.current = null;
            centsHistoryRef.current = [];
            setReading(null);
          }
        }
        animationRef.current = requestAnimationFrame(sample);
      };
      animationRef.current = requestAnimationFrame(sample);
    } catch {
      stop();
      setError(true);
    }
  }, [stop]);

  const cents = Math.max(-50, Math.min(50, reading?.cents ?? 0));
  const tuningLabel = !reading ? copy.noSignal : Math.abs(reading.cents) <= 5 && reading.stable ? copy.inTune : reading.cents < 0 ? copy.flat : copy.sharp;

  return (
    <div className="tunerTool">
      <div className="tunerPresets" aria-label="Tuning mode">
        {(["chromatic", "guitar", "ukulele"] as const).map((item) => (
          <button className={preset === item ? "active" : ""} type="button" onClick={() => setPreset(item)} key={item}>
            {copy[item]}
          </button>
        ))}
      </div>
      <div className={`tunerDisplay ${reading && Math.abs(reading.cents) <= 5 && reading.stable ? "tuned" : ""}`} aria-live="polite">
        <p>{running ? copy.listening : copy.noSignal}</p>
        <div className="detectedNote">{reading ? <>{reading.note}<sup>{reading.octave}</sup></> : "—"}</div>
        <strong>{reading ? `${reading.frequency.toFixed(1)} Hz` : "— Hz"}</strong>
        <div className="centsScale" aria-label={`${reading?.cents.toFixed(1) ?? 0} cents`}>
          <span className="scaleLeft">−50</span><span className="scaleCenter">0</span><span className="scaleRight">+50</span>
          <i style={{ transform: `translateX(calc(${cents}% - 1px)) rotate(${cents * 0.18}deg)` }} />
        </div>
        <b>{tuningLabel}{reading ? ` · ${reading.cents > 0 ? "+" : ""}${reading.cents.toFixed(1)} ¢` : ""}</b>
      </div>
      <div className="tunerReference" aria-live="polite">
        {preset === "guitar" ? "E2 · A2 · D3 · G3 · B3 · E4" : preset === "ukulele" ? "G4 · C4 · E4 · A4" : "A4 = 440 Hz"}
      </div>
      <button className="tunerStart" type="button" onClick={running ? stop : start}>{running ? copy.stop : copy.start}</button>
      {error ? <p className="tunerError" role="alert">{copy.permissionError}</p> : null}
      <p className="tunerPrivacy">⌁ {copy.privacy}</p>
    </div>
  );
}
