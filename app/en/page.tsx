import type { Metadata } from "next";
import Image from "next/image";
import { SiteLink as Link } from "@/app/components/SiteLink";
import { JsonLd } from "@/app/components/JsonLd";
import { APP_STORE_LINKS, absoluteUrl, localeAlternates, supportedLanguageCodes } from "@/app/lib/site";

const appStoreUrl = APP_STORE_LINKS.home;
const privacyUrl = "https://weizhichao1027-collab.github.io/GuitarTool-Privacy/";
const githubUrl = "https://github.com/weizhichao1027-collab/guitartool-website";
const basePath = process.env.GITHUB_PAGES === "true" ? "/guitartool-website" : "";
const assetPath = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: "GuitarTool | Tuner, Metronome & Chords",
  description: "A focused, offline practice toolkit for guitar and ukulele: precise tuning, flexible rhythm training, and a deep chord library.",
  alternates: { canonical: absoluteUrl("/en/"), languages: localeAlternates },
  openGraph: {
    title: "GuitarTool | Leave room for practice.",
    description: "Tuner, metronome and chords in one private, offline practice toolkit.",
    type: "website",
    images: [{
      url: absoluteUrl("/og.png"),
      width: 1200,
      height: 630,
      alt: "GuitarTool — Leave room for practice.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuitarTool | Leave room for practice.",
    description: "Tuner, metronome and chords in one private, offline practice toolkit.",
    images: [absoluteUrl("/og.png")],
  },
};

const features = [
  {
    number: "01",
    kicker: "Flexible Metronome",
    title: "More than a click.\nA rhythm trainer that grows with you.",
    copy: "Set 20–500 BPM, time signatures, note values, accents and subdivisions. Combine timers, swing, progressive tempo and practice presets into a routine that is truly yours.",
    points: ["Tap tempo and practice presets", "Four subdivisions and eighth-note swing", "Timers and progressive tempo training"],
    image: "/en-metronome.webp",
    alt: "GuitarTool metronome with presets, timer, swing and progressive tempo",
    tone: "aqua",
  },
  {
    number: "02",
    kicker: "Real-time Tuner",
    title: "See every cent of pitch.\nHear the progress it creates.",
    copy: "Seven instrument families and a wide range of alternate tunings, with cents, signal strength and stability feedback. Audio is processed live on your device—never saved or uploaded.",
    points: ["Standard, Drop D, DADGAD and open tunings", "Calibrate A4 from 430–446 Hz", "Reference tones and stability feedback"],
    image: "/en-tuner.webp",
    alt: "GuitarTool precision tuner interface",
    tone: "sky",
  },
  {
    number: "03",
    kicker: "Chord Library",
    title: "One chord can have\nmore than one answer.",
    copy: "Explore 855 chord names for both guitar and ukulele, with 19,244 fingerings in total. Move, edit, identify and hear a voicing, then save or share the exact shape as a clear chord card.",
    points: ["Five-fret viewport across all 20 frets", "Interactive editing, recognition and playback", "Preview, save and system-share chord cards"],
    image: "/en-chords.webp",
    alt: "GuitarTool guitar and ukulele chord library",
    tone: "blush",
  },
  {
    number: "04",
    kicker: "Chord Cards",
    title: "See the final card first.\nThen save it or send it.",
    copy: "The real preview keeps the visible chord, muted strings, fretted notes and higher-position starting fret. Once it looks right, save to Photos or share the image.",
    points: ["Layouts for guitar and ukulele", "Open and higher-position voicings", "A clean image with no forced download link"],
    image: "/en-chord-card-share.webp",
    alt: "GuitarTool chord card preview with save and share actions",
    tone: "aqua",
  },
] as const;

const faqs = [
  ["Do I need an internet connection or account?", "No. GuitarTool’s core features work entirely offline, with no registration, sign-in or cloud profile."],
  ["Does the tuner save my audio?", "Never. Microphone audio is used only for live, on-device pitch detection. It is not saved as a file or uploaded to a server."],
  ["Which devices are supported?", "GuitarTool adapts to iPhone and iPad, and includes an Apple Watch metronome plus three sizes of interactive Home Screen widgets. Watch audio can continue when the wrist lowers or the display dims."],
  ["Does it support ukulele?", "Yes. The tuner includes GCEA modes, and the chord library includes a complete set of ukulele chord names and multiple fingerings."],
  ["Can I send a chord shape to a teacher or friend?", "Yes. Preview the current chord card, then save it to Photos or send it with the system share sheet. The image does not force an App Store link."],
] as const;

export default function EnglishHome() {
  return (
    <main lang="en">
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "GuitarTool", description: "An offline tuner, metronome and interactive chord library with saveable, shareable guitar and ukulele diagrams.", url: absoluteUrl("/en/"), downloadUrl: appStoreUrl, applicationCategory: "MusicApplication", operatingSystem: "iOS, iPadOS, watchOS", inLanguage: supportedLanguageCodes, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, featureList: ["Real-time string instrument tuner", "20–500 BPM metronome", "19,244 guitar and ukulele fingerings", "Preview, save and share chord cards", "Apple Watch metronome with background audio", "Interactive Home Screen widgets"] },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
        { "@context": "https://schema.org", "@type": "VideoObject", name: "GuitarTool full introduction (landscape)", description: "A 36-second introduction to GuitarTool's tuner, metronome, chord cards, widgets and multi-device experience.", thumbnailUrl: absoluteUrl("/og.png"), uploadDate: "2026-08-28", duration: "PT36S", contentUrl: absoluteUrl("/media-kit/video/GuitarTool-Full-Intro-en-854x480.mp4") },
        { "@context": "https://schema.org", "@type": "VideoObject", name: "GuitarTool full introduction (portrait)", description: "A mobile-first 36-second English introduction to GuitarTool.", thumbnailUrl: absoluteUrl("/media-kit/social/guitartool-chord-cards-en-1080x1350.png"), uploadDate: "2026-08-28", duration: "PT36S", contentUrl: absoluteUrl("/media-kit/video/GuitarTool-Full-Intro-en-480x854.mp4") },
      ]} />
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="GuitarTool home">
          <Image src={assetPath("/app-icon-224.png")} alt="" width={42} height={42} priority />
          <span>GuitarTool</span>
        </a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <Link href="/en/online-tuner/">Online tuner</Link>
          <Link href="/en/online-metronome/">Online metronome</Link>
          <Link href="/chords/guitar/">Popular chords</Link>
          <Link href="/press/">Press kit</Link>
          <Link href="/en/support/">Support</Link>
          <a className="languageSwitch" href={`${basePath}/`} aria-label="切换到中文">中文</a>
          <a className="navCta" href={appStoreUrl}>Download</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> Made for every focused practice</p>
          <h1>When you practise,<br /><em>leave room for focus.</em></h1>
          <p className="heroLead">Tune, keep time and find chords in one place. GuitarTool brings professional practice essentials into a calm, intuitive interface.</p>
          <div className="heroActions">
            <a className="primaryButton" href={appStoreUrl}>Download free on the App Store <span>↗</span></a>
            <a className="textButton" href="#features">Explore the tools <span>↓</span></a>
          </div>
          <div className="heroProof" aria-label="Product qualities"><span>Fully offline</span><i /><span>No ads</span><i /><span>No account</span></div>
        </div>

        <div className="heroVisual" aria-label="GuitarTool metronome interface">
          <div className="orb orbOne" /><div className="orb orbTwo" />
          <div className="visualCard">
            <div className="visualTopline"><span>20–500 BPM</span><span>13 LANGUAGES</span></div>
            <Image className="heroShot" src={assetPath("/en-metronome.webp")} alt="GuitarTool metronome in English" width={833} height={1800} priority />
          </div>
          <div className="floatingNote noteOne"><b>01</b><span>Precise rhythm<br /><small>Steady from the first beat</small></span></div>
          <div className="floatingNote noteTwo"><b>♪</b><span>Your sound<br /><small>Stays on your device</small></span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Key features"><div><span>GUITAR</span><i>✦</i><span>UKULELE</span><i>✦</i><span>TUNER</span><i>✦</i><span>METRONOME</span><i>✦</i><span>CHORDS</span><i>✦</i><span>OFFLINE</span></div></section>

      <section className="manifesto shell sectionPad">
        <div className="sectionIndex">00 / WHY</div>
        <div className="manifestoBody">
          <h2 className="manifestoTitle">A tool should help you find your flow,<br />not become another distraction.</h2>
          <div className="manifestoGrid">
            <p>That is why tuning, rhythm and chords live in one clear practice flow. No ads, no feeds, no login wall—open the app and start playing.</p>
            <div className="miniStats"><div><strong>3</strong><span>essential tools</span></div><div><strong>13</strong><span>interface languages</span></div><div><strong>0</strong><span>ads or trackers</span></div></div>
          </div>
        </div>
      </section>

      <section className="features sectionPad" id="features">
        <div className="shell sectionHeading"><p className="eyebrow"><span /> Three core tools, one complete flow</p><h2>From the first string<br />to the final beat.</h2></div>
        <div className="featureStack shell">
          {features.map((feature, index) => (
            <article className={`featureCard ${feature.tone}`} key={feature.number}>
              <div className="featureCopy">
                <div className="featureMeta"><span>{feature.number}</span><i />{feature.kicker}</div>
                <h3>{feature.title.split("\n").map(line => <span key={line}>{line}</span>)}</h3>
                <p>{feature.copy}</p>
                <ul>{feature.points.map(point => <li key={point}><span>✓</span>{point}</li>)}</ul>
              </div>
              <div className={`featureMedia ${index === 1 ? "tiltLeft" : ""}`}><span className="mediaLabel">REAL APP INTERFACE</span><Image src={assetPath(feature.image)} alt={feature.alt} width={833} height={1800} sizes="(max-width: 800px) 80vw, 420px" /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="numbers"><div className="shell numbersGrid"><div><strong>20–500</strong><span>precise BPM range</span></div><div><strong>430–446</strong><span>Hz calibration</span></div><div><strong>19,244</strong><span>guitar & ukulele fingerings</span></div><div><strong>1–12</strong><span>beats per bar</span></div></div></section>

      <section className="introVideoSection shell sectionPad">
        <div className="introVideoCopy"><p className="eyebrow"><span /> Full product tour in 36 seconds</p><h2>See how the tools fit into practice before choosing where to begin.</h2><p>The landscape edit is designed for desktop and larger screens; mobile automatically receives the English portrait edit. It covers tuning, rhythm, chord cards, widgets and the multi-device experience.</p></div>
        <div className="introVideoFrame"><video controls playsInline preload="metadata" aria-label="GuitarTool full English introduction"><source src={assetPath("/media-kit/video/GuitarTool-Full-Intro-en-480x854.mp4")} media="(max-width: 700px)" type="video/mp4" /><source src={assetPath("/media-kit/video/GuitarTool-Full-Intro-en-854x480.mp4")} type="video/mp4" /></video></div>
      </section>

      <section className="extras shell sectionPad">
        <div className="sectionHeading compact"><p className="eyebrow"><span /> Across your devices · themes & widgets</p><h2>Practice should fit you,<br />not the other way around.</h2></div>
        <div className="extraGrid">
          <article className="extraCard themeCard">
            <div className="extraText"><p className="cardLabel">Themes & appearance</p><h3>Four free looks.<br />Choose your practice atmosphere.</h3><p>Sky, Night, Forest and Graphite are included with the app. Your choice stays on the device and needs no account or cloud profile.</p><div className="swatches" aria-label="Sky, Night, Forest and Graphite themes"><span className="day" /><span className="night" /><span className="pine" /><span className="graphite" /><b>4 INCLUDED</b></div></div>
            <Image src={assetPath("/en-themes.webp")} alt="Four GuitarTool themes in English" width={833} height={1800} sizes="(max-width: 700px) 86vw, 460px" />
          </article>
          <article className="extraCard widgetCard">
            <div className="extraText"><p className="cardLabel">Home Screen widgets</p><h3>Keep the beat<br />without opening the app.</h3><p>Small, medium and large. Change tempo and time signature, play, pause or tap in a tempo—right from your Home Screen.</p></div>
            <Image src={assetPath("/en-widgets.webp")} alt="Three GuitarTool metronome widget sizes in English" width={833} height={1800} sizes="(max-width: 700px) 86vw, 460px" />
          </article>
        </div>
        <div className="updatePromise"><span>ONE TOOLKIT · ONE FOCUSED PRACTICE</span><p><strong>Tune, keep time and find chords without switching apps.</strong> GuitarTool brings live tuning, flexible rhythm training, chord cards, Apple Watch and Home Screen widgets into one fully offline practice flow.</p><b aria-hidden="true">↗</b></div>
      </section>

      <section className="devices sectionPad" id="devices">
        <div className="shell devicesGrid">
          <div className="devicesCopy"><div className="sectionIndex light">04 / EVERYWHERE</div><h2>Your practice<br />travels with you.</h2><p>Reach for iPhone, see more on iPad, or start the beat from Apple Watch. Audio can keep going when the wrist lowers or the display dims, so your hands return to the instrument.</p><div className="devicePills"><span>iPhone</span><span>iPad</span><span>Apple Watch</span></div></div>
          <div className="devicesMedia"><Image src={assetPath("/en-devices.webp")} alt="GuitarTool on iPhone, iPad and Apple Watch in English" width={833} height={1800} sizes="(max-width: 850px) 90vw, 520px" /></div>
        </div>
      </section>

      <section className="privacy sectionPad" id="privacy">
        <div className="privacyGlow" />
        <div className="shell privacyGrid">
          <div><p className="eyebrow inverted"><span /> Privacy by design</p><h2>Your practice audio<br /><em>stays on your device.</em></h2></div>
          <div className="privacyCopy"><p>GuitarTool does not collect, sell or share personal information. Tuner audio is processed live on your device and released when tuning stops.</p><ul><li><b>01</b><span><strong>No account</strong>No registration, sign-in or cloud profile.</span></li><li><b>02</b><span><strong>No audio uploads</strong>No recordings saved or sent to us or a third party.</span></li><li><b>03</b><span><strong>No ads or tracking</strong>No advertising, analytics or third-party tracking SDKs.</span></li></ul><a className="lightButton" href={privacyUrl}>Read the full privacy policy <span>↗</span></a></div>
        </div>
      </section>

      <section className="languages sectionPad">
        <div className="shell languagesIntro"><div className="sectionIndex">05 / LANGUAGES</div><div><h2>Use familiar words.<br />Focus on the music.</h2><p>Follow your system language or choose anytime in the app.</p></div></div>
        <div className="languageCloud shell" aria-label="Thirteen supported languages">{[["简体中文","/"],["English","/en/"],["繁體中文","/zh-hant/"],["日本語","/ja/"],["한국어","/ko/"],["Deutsch","/de/"],["Français","/fr/"],["Italiano","/it/"],["Español","/es/"],["Português","/pt-br/"],["Русский","/ru/"],["Türkçe","/tr/"],["العربية","/ar/"]].map(([language, href], index) => <Link href={href} className={index === 1 ? "accent" : ""} aria-current={index === 1 ? "page" : undefined} key={language}>{language}</Link>)}</div>
      </section>

      <section className="discoverySection shell sectionPad">
        <div><p className="eyebrow"><span /> Free practice resources</p><h2>Solve the next beat, string or chord first.</h2></div>
        <div className="discoveryGrid">
          <Link href="/en/online-tuner/"><span>01</span><h3>Online tuner</h3><p>Use your microphone for private, real-time note, frequency and cents feedback.</p><b>Open the tool →</b></Link>
          <Link href="/en/online-metronome/"><span>02</span><h3>Online metronome</h3><p>Start with 20–500 BPM, tap tempo and one to twelve beats per bar.</p><b>Open the tool →</b></Link>
          <Link href="/en/guides/guitar-tuner/"><span>03</span><h3>Offline guitar tuner</h3><p>Explore standard, Drop D, DADGAD and open tunings with private on-device audio.</p><b>Read the guide →</b></Link>
          <Link href="/chords/guitar/"><span>04</span><h3>Popular guitar chords</h3><p>Begin with 50 essential chords, each with several clear positions.</p><b>Browse chords →</b></Link>
          <Link href="/chords/ukulele/"><span>05</span><h3>Popular ukulele chords</h3><p>Learn 50 common shapes in standard high-G GCEA tuning.</p><b>Browse chords →</b></Link>
          <Link href="/en/guides/share-chord-diagrams/"><span>06</span><h3>Save and share chord diagrams</h3><p>Turn the current guitar or ukulele voicing into a card you can preview, save or send.</p><b>Explore chord cards →</b></Link>
          <Link href="/en/guides/apple-watch-metronome/"><span>07</span><h3>Apple Watch metronome</h3><p>Control tempo and meter from your wrist while audio continues when the display dims.</p><b>Explore the watch metronome →</b></Link>
          <Link href="/en/guides/chord-diagrams-for-students/"><span>08</span><h3>Chord cards for students</h3><p>A teacher-ready workflow for choosing, checking and sending one exact voicing.</p><b>Read the teaching guide →</b></Link>
          <Link href="/en/guides/apple-watch-metronome-audio-design/"><span>09</span><h3>Watch audio case study</h3><p>How sample-clock timing, display lifecycle and route recovery work together.</p><b>Read the engineering story →</b></Link>
          <Link href="/en/guides/tap-tempo-bpm/"><span>10</span><h3>Tap tempo BPM finder</h3><p>Tap the main pulse, reject uneven input and check half-time or double-time results.</p><b>Read the guide →</b></Link>
          <Link href="/en/guides/swing-metronome/"><span>11</span><h3>Swing metronome practice</h3><p>Move from straight eighths to swing and shuffle while gradually removing click support.</p><b>Read the guide →</b></Link>
          <Link href="/en/guides/progressive-tempo-training/"><span>12</span><h3>Progressive tempo training</h3><p>Increase speed with small BPM steps, clean repetitions and a clear fallback rule.</p><b>Read the guide →</b></Link>
          <Link href="/en/guides/how-to-tune-a-guitar/"><span>13</span><h3>How to tune a guitar</h3><p>Tune all six EADGBE strings and make sense of cents, attack and stable sustain.</p><b>Read the guide →</b></Link>
          <Link href="/en/guides/guitar-chord-fingering-finder/"><span>14</span><h3>Chord fingering finder</h3><p>Compare open and higher voicings, then edit, identify and hear the exact shape.</p><b>Find a fingering →</b></Link>
        </div>
      </section>

      <section className="faq shell sectionPad">
        <div className="faqIntro"><p className="eyebrow"><span /> Common questions</p><h2>Before you download,<br />you may want to know.</h2></div>
        <div className="faqList">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>＋</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="finalCta shell">
        <div className="ctaGlow" /><Image className="ctaIcon" src={assetPath("/app-icon-224.png")} alt="GuitarTool app icon" width={112} height={112} /><p>GuitarTool for iPhone · iPad · Apple Watch</p><h2>Make your next practice<br />a more focused one.</h2><a className="primaryButton coral" href={appStoreUrl}>Download free on the App Store <span>↗</span></a><small>Fully offline · No ads · No account</small>
      </section>

      <footer className="footer shell"><a className="brand" href="#top"><Image src={assetPath("/app-icon-224.png")} alt="" width={36} height={36} /><span>GuitarTool</span></a><p>© 2026 Zhichao Wei. Practise with care. Progress quietly.</p><div><Link href="/en/support/">Support</Link><a href={privacyUrl}>Privacy</a><a href="mailto:weizhichao1027@gmail.com">Contact</a><a href={githubUrl}>GitHub</a></div></footer>
    </main>
  );
}
