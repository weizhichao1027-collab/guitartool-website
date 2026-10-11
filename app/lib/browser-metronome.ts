import { BrowserAudioSession } from "./browser-audio-session";

type Timers = {
  setInterval: (callback: () => void, milliseconds: number) => number;
  clearInterval: (id: number) => void;
  setTimeout: (callback: () => void, milliseconds: number) => number;
  clearTimeout: (id: number) => void;
};

/** The audio clock schedules sound; timers only refill a bounded look-ahead window. */
export class BrowserMetronome {
  private readonly session: BrowserAudioSession;
  private readonly timers: Timers;
  private readonly onBeat: (beat: number) => void;
  private interval: number | null = null;
  private displays = new Set<number>();
  private nextNoteTime = 0;
  private beat = 0;
  private generation = 0;
  private bpm = 80;
  private beatsPerBar = 4;

  constructor(onBeat: (beat: number) => void, session = new BrowserAudioSession(), timers: Timers = {
    setInterval: (callback, milliseconds) => window.setInterval(callback, milliseconds),
    clearInterval: (id) => window.clearInterval(id),
    setTimeout: (callback, milliseconds) => window.setTimeout(callback, milliseconds),
    clearTimeout: (id) => window.clearTimeout(id),
  }) {
    this.onBeat = onBeat;
    this.session = session;
    this.timers = timers;
  }

  get requestID(): number { return this.generation; }
  isCurrent(context: AudioContext): boolean { return this.session.isCurrent(context); }

  setTempo(bpm: number): void {
    if (Number.isFinite(bpm)) this.bpm = Math.min(500, Math.max(20, bpm));
  }

  setBeats(beats: number): void {
    if (!Number.isInteger(beats) || beats < 1 || beats > 12) return;
    this.beatsPerBar = beats;
    this.beat = 0;
    this.clearDisplays();
    this.onBeat(0);
  }

  async start(): Promise<AudioContext | null> {
    this.stop();
    const context = await this.session.start();
    if (!context || !this.session.isCurrent(context)) return null;
    this.beat = 0;
    this.nextNoteTime = context.currentTime + 0.05;
    try {
      this.schedule(context);
      this.interval = this.timers.setInterval(() => this.schedule(context), 25);
      return context;
    } catch (error) {
      // Release sound/timers without superseding this request's error notification.
      this.session.stop();
      this.clearScheduledWork();
      throw error;
    }
  }

  stop(): void {
    this.generation += 1;
    this.session.stop(); // Closing cancels clicks already scheduled on the audio clock.
    this.clearScheduledWork();
  }

  private clearScheduledWork(): void {
    if (this.interval !== null) this.timers.clearInterval(this.interval);
    this.interval = null;
    this.clearDisplays();
  }

  private clearDisplays(): void {
    this.displays.forEach((id) => this.timers.clearTimeout(id));
    this.displays.clear();
  }

  private schedule(context: AudioContext): void {
    if (!this.session.isCurrent(context)) return;
    const now = context.currentTime;
    const interval = 60 / this.bpm;
    // A throttled tab must skip missed beats, never allocate a click per missed beat.
    if (this.nextNoteTime < now) {
      const missed = Math.ceil((now - this.nextNoteTime) / interval);
      this.nextNoteTime += missed * interval;
      this.beat = (this.beat + missed) % this.beatsPerBar;
    }
    for (let count = 0; count < 2 && this.nextNoteTime < now + 0.1; count += 1) {
      this.scheduleClick(context, this.nextNoteTime, this.beat);
      this.beat = (this.beat + 1) % this.beatsPerBar;
      this.nextNoteTime += interval;
    }
  }

  private scheduleClick(context: AudioContext, time: number, beat: number): void {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = beat === 0 ? 1320 : 880;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(beat === 0 ? 0.5 : 0.3, time + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.055);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    oscillator.start(time);
    oscillator.stop(time + 0.06);
    const id = this.timers.setTimeout(() => {
      // clearTimeout need not remove a callback already queued by the event loop.
      if (!this.displays.delete(id) || !this.session.isCurrent(context)) return;
      this.onBeat(beat);
    }, Math.max(0, (time - context.currentTime) * 1000));
    this.displays.add(id);
  }
}
