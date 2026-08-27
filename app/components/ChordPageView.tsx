import { SiteLink as Link } from "@/app/components/SiteLink";
import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { ChordDiagram } from "@/app/components/ChordDiagram";
import { JsonLd } from "@/app/components/JsonLd";
import { APP_STORE_LINKS, absoluteUrl } from "@/app/lib/site";
import { Instrument, PopularChord, chordQuality, popularChords, routeForChord } from "@/app/lib/chords";

export function ChordPageView({ instrument, chord }: { instrument: Instrument; chord: PopularChord }) {
  const isGuitar = instrument === "guitar";
  const instrumentName = isGuitar ? "guitar" : "ukulele";
  const instrumentZh = isGuitar ? "吉他" : "尤克里里";
  const quality = chordQuality(chord.name);
  const canonical = absoluteUrl(routeForChord(instrument, chord.slug));
  const neighbors = popularChords[instrument].filter((item) => item.slug !== chord.slug).slice(0, 6);
  const description = `Learn the ${chord.name} ${instrumentName} chord with clear fretboard diagrams and ${chord.voicingCount} positions in GuitarTool. ${chord.name} ${instrumentZh}和弦指法。`;

  return (
    <main className="acqPage chordPage" lang="en">
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "Article", headline: `${chord.name} ${instrumentName} chord`, description, url: canonical, inLanguage: ["en", "zh-CN"], about: [chord.name, `${instrumentName} chord`, `${instrumentZh}和弦`] },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "GuitarTool", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: `${instrumentName} chords`, item: absoluteUrl(`/chords/${instrument}/`) },
          { "@type": "ListItem", position: 3, name: chord.name, item: canonical },
        ] },
      ]} />
      <AcquisitionHeader language="en" />
      <article className="chordArticle shell">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">GuitarTool</Link><span>/</span><Link href={`/chords/${instrument}/`}>{instrumentName} chords</Link><span>/</span><span>{chord.name}</span></nav>
        <header className="chordHero">
          <div>
            <p className="acqEyebrow">{instrumentName.toUpperCase()} CHORD · {chord.voicingCount} POSITIONS IN THE APP</p>
            <h1>{chord.name} <span>{instrumentName} chord</span></h1>
            <p>Learn three playable {chord.name} positions below, then explore all {chord.voicingCount} voicings on an interactive 20-fret board in GuitarTool.</p>
            <p className="chordChinese" lang="zh-CN">{chord.name} {instrumentZh}和弦：下方展示三种可用按法，APP 内可查看全部 {chord.voicingCount} 种指法、自由编辑并试听。</p>
            <a className="primaryButton" href={APP_STORE_LINKS.chords}>Open every voicing in GuitarTool <span>↗</span></a>
          </div>
          <ChordDiagram instrument={instrument} voicing={chord.voicings[0]} label={`${chord.name} ${instrumentName} chord · position 1`} />
        </header>

        <section className="diagramSection">
          <div className="diagramIntro">
            <p className="acqEyebrow">THREE POSITIONS</p>
            <h2>Choose the shape that fits the music around it.</h2>
            <p>Read strings from left to right: {isGuitar ? "low E to high E" : "G to A in standard high-G GCEA"}. A circle means an open string; × means mute that string. The fret number appears when a shape starts above the first position.</p>
          </div>
          <div className="diagramGrid">
            {chord.voicings.map((voicing, index) => <ChordDiagram key={index} instrument={instrument} voicing={voicing} label={`Position ${index + 1}`} />)}
          </div>
        </section>

        <section className="chordAdvice">
          <div><p className="acqEyebrow">HOW IT SOUNDS</p><h2>What makes {chord.name} sound like {chord.name}?</h2></div>
          <div><p>{quality.en}</p><p lang="zh-CN">{quality.zh}</p></div>
        </section>

        <section className="appChordCta">
          <div><p>855 chord names · 19,244 guitar and ukulele fingerings</p><h2>Turn the diagram into an instrument.</h2><span>Edit any fret, mute a string, identify the result and hear the exact visible voicing—all offline.</span></div>
          <a className="primaryButton coral" href={APP_STORE_LINKS.chords}>Download GuitarTool free <span>↗</span></a>
        </section>

        <section className="moreChords">
          <p className="acqEyebrow">MORE POPULAR {instrumentName.toUpperCase()} CHORDS</p>
          <div>{neighbors.map((item) => <Link href={routeForChord(instrument, item.slug)} key={item.slug}><strong>{item.name}</strong><span>{item.voicingCount} voicings →</span></Link>)}</div>
        </section>
      </article>
      <AcquisitionFooter language="en" />
    </main>
  );
}
