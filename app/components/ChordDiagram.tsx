import type { CSSProperties } from "react";
import type { ChordVoicing, Instrument } from "@/app/lib/chords";

export function ChordDiagram({ instrument, voicing, label }: { instrument: Instrument; voicing: ChordVoicing; label: string }) {
  const stringCount = instrument === "guitar" ? 6 : 4;
  const stringLabels = instrument === "guitar" ? ["E", "A", "D", "G", "B", "E"] : ["G", "C", "E", "A"];
  const frets = voicing.points.map((point) => point[1]);
  const minFret = Math.min(...frets, 1);
  const maxFret = Math.max(...frets, 1);
  const startFret = maxFret <= 5 ? 1 : minFret;
  const fretCount = Math.max(5, Math.min(7, maxFret - startFret + 1));
  const pointForString = new Map(voicing.points.map((point) => [point[0], point[1]]));
  const style = { "--strings": stringCount, "--frets": fretCount } as CSSProperties;

  return (
    <figure className="chordDiagram" aria-label={label}>
      <div className="stringMarkers" style={{ gridTemplateColumns: `repeat(${stringCount}, 1fr)` }}>
        {Array.from({ length: stringCount }, (_, string) => (
          <span key={string}>{voicing.mutedStrings.includes(string) ? "×" : pointForString.has(string) ? "" : "○"}</span>
        ))}
      </div>
      <div className="fretboard" style={style}>
        {startFret > 1 ? <b className="fretNumber">{startFret}fr</b> : null}
        {Array.from({ length: stringCount }, (_, string) => <i className="stringLine" style={{ left: `${string / (stringCount - 1) * 100}%` }} key={`s-${string}`} />)}
        {Array.from({ length: fretCount + 1 }, (_, fret) => <i className="fretLine" style={{ top: `${fret / fretCount * 100}%` }} key={`f-${fret}`} />)}
        {voicing.points.map(([string, fret]) => {
          const row = fret - startFret;
          if (row < 0 || row >= fretCount) return null;
          return <span className="fingerDot" style={{ left: `${string / (stringCount - 1) * 100}%`, top: `${(row + 0.5) / fretCount * 100}%` }} key={`${string}-${fret}`}><span className="srOnly">{stringLabels[string]} string fret {fret}</span></span>;
        })}
      </div>
      <div className="stringLabels" style={{ gridTemplateColumns: `repeat(${stringCount}, 1fr)` }}>{stringLabels.map((string, index) => <span key={`${string}-${index}`}>{string}</span>)}</div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
