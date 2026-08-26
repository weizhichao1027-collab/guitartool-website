import Link from "next/link";
import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { Instrument, popularChords, routeForChord } from "@/app/lib/chords";
import { APP_STORE_URL, absoluteUrl } from "@/app/lib/site";

export function ChordHub({ instrument }: { instrument: Instrument }) {
  const isGuitar = instrument === "guitar";
  const label = isGuitar ? "Guitar" : "Ukulele";
  const zh = isGuitar ? "吉他" : "尤克里里";
  const total = isGuitar ? "12,415" : "6,829";
  const canonical = absoluteUrl(`/chords/${instrument}/`);
  return (
    <main className="acqPage chordHub" lang="en">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: `Popular ${label} Chords`, description: `Clear ${label.toLowerCase()} chord diagrams with multiple positions from GuitarTool's ${total}-fingering library.`, url: canonical, inLanguage: ["en", "zh-CN"] }} />
      <AcquisitionHeader language="en" />
      <section className="hubHero shell">
        <p className="acqEyebrow">POPULAR {label.toUpperCase()} CHORDS · {zh}和弦</p>
        <h1>{label} chords,<br /><em>more than one answer.</em></h1>
        <p>Start with 25 essential chord pages. Each one includes three readable positions; GuitarTool adds all {total} {label.toLowerCase()} fingerings, editing, identification and playback.</p>
      </section>
      <section className="chordDirectory shell">
        {popularChords[instrument].map((chord, index) => (
          <Link href={routeForChord(instrument, chord.slug)} key={chord.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{chord.name}</strong><small>{chord.voicingCount} positions in the app</small><b>↗</b>
          </Link>
        ))}
      </section>
      <section className="hubCta shell">
        <div><p>855 names for {label.toLowerCase()}</p><h2>Search, edit and hear every shape offline.</h2></div>
        <a className="primaryButton coral" href={APP_STORE_URL}>Download GuitarTool free <span>↗</span></a>
      </section>
      <AcquisitionFooter language="en" />
    </main>
  );
}
