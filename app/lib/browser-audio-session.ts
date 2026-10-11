type AudioDependencies = {
  createContext: () => AudioContext;
  getMicrophone: () => Promise<MediaStream>;
};

/** Owns both pending and active resources. Every await must still belong to this request. */
export class BrowserAudioSession {
  private generation = 0;
  private context: AudioContext | null = null;
  private stream: MediaStream | null = null;
  private readonly dependencies: AudioDependencies;

  constructor(dependencies: AudioDependencies = {
    createContext: () => new AudioContext(),
    getMicrophone: () => navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, autoGainControl: false, noiseSuppression: false },
    }),
  }) {
    this.dependencies = dependencies;
  }

  isCurrent(context: AudioContext): boolean {
    return this.context === context;
  }

  get requestID(): number { return this.generation; }

  async start(microphone = false): Promise<AudioContext | null> {
    this.stop();
    const generation = this.generation;
    try {
      // Create/resume before the first await to retain Safari's user-gesture authorization.
      const context = this.dependencies.createContext();
      this.context = context;
      await context.resume();
      if (generation !== this.generation) return null;
      if (context.state !== "running") throw new Error("Audio context did not start");
      if (microphone) {
        const stream = await this.dependencies.getMicrophone();
        if (generation !== this.generation) {
          stream.getTracks().forEach((track) => track.stop());
          return null;
        }
        // Own the stream before any analyser/source construction can throw.
        this.stream = stream;
      }
      return context;
    } catch (error) {
      if (generation !== this.generation) return null;
      this.releaseResources();
      throw error;
    }
  }

  connectMicrophone(context: AudioContext, destination: AudioNode): void {
    if (!this.isCurrent(context) || !this.stream) throw new Error("Microphone session ended");
    context.createMediaStreamSource(this.stream).connect(destination);
  }

  stop(): void {
    this.generation += 1;
    this.releaseResources();
  }

  private releaseResources(): void {
    const context = this.context;
    const stream = this.stream;
    this.context = null;
    this.stream = null;
    stream?.getTracks().forEach((track) => track.stop());
    if (context && context.state !== "closed") void context.close().catch(() => {});
  }
}
