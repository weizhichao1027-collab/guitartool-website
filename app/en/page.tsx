import type { Metadata } from "next";
import Image from "next/image";

const appStoreUrl = "https://apps.apple.com/app/id6761914163";
const privacyUrl = "https://weizhichao1027-collab.github.io/GuitarTool-Privacy/";
const githubUrl = "https://github.com/weizhichao1027-collab/guitartool-website";
const basePath = process.env.GITHUB_PAGES === "true" ? "/guitartool-website" : "";
const assetPath = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: "GuitarTool | Tuner, Metronome & Chords",
  description: "A focused, offline practice toolkit for guitar and ukulele: precise tuning, flexible rhythm training, and a deep chord library.",
  openGraph: {
    title: "GuitarTool | Leave room for practice.",
    description: "Tuner, metronome and chords in one private, offline practice toolkit.",
    type: "website",
    images: [{
      url: "https://raw.githubusercontent.com/weizhichao1027-collab/guitartool-website/main/public/og.png",
      width: 1200,
      height: 630,
      alt: "GuitarTool — Leave room for practice.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuitarTool | Leave room for practice.",
    description: "Tuner, metronome and chords in one private, offline practice toolkit.",
    images: ["https://raw.githubusercontent.com/weizhichao1027-collab/guitartool-website/main/public/og.png"],
  },
};

const features = [
  {
    number: "01",
    kicker: "Flexible Metronome",
    title: "More than a click.\nA rhythm trainer that grows with you.",
    copy: "Set 20–500 BPM, time signatures, note values, accents and subdivisions. Combine timers, swing and progressive tempo training into a routine that is truly yours.",
    points: ["Tap tempo and practice presets", "Four subdivisions and eighth-note swing", "Custom accents and progressive tempo"],
    image: "/hero-metronome.png",
    alt: "GuitarTool metronome with presets, timer, swing and progressive tempo",
    tone: "aqua",
  },
  {
    number: "02",
    kicker: "Real-time Tuner",
    title: "See every cent of pitch.\nHear the progress it creates.",
    copy: "Seven instrument families and a wide range of alternate tunings, with cents, signal strength and stability feedback. Audio is processed live on your device—never saved or uploaded.",
    points: ["Standard, Drop D, DADGAD and open tunings", "Calibrate A4 from 430–446 Hz", "Reference tones and stability feedback"],
    image: "/tuner.png",
    alt: "GuitarTool precision tuner interface",
    tone: "sky",
  },
  {
    number: "03",
    kicker: "Chord Library",
    title: "One chord can have\nmore than one answer.",
    copy: "Explore 855 chord names for both guitar and ukulele, with 19,244 fingerings in total. Move between voicings, edit a shape, identify it and hear it instantly.",
    points: ["Sharps, flats and familiar chord symbols", "Five-fret viewport across all 20 frets", "Interactive editing and realistic playback"],
    image: "/chords.png",
    alt: "GuitarTool guitar and ukulele chord library",
    tone: "blush",
  },
] as const;

const faqs = [
  ["Do I need an internet connection or account?", "No. GuitarTool’s core features work entirely offline, with no registration, sign-in or cloud profile."],
  ["Does the tuner save my audio?", "Never. Microphone audio is used only for live, on-device pitch detection. It is not saved as a file or uploaded to a server."],
  ["Which devices are supported?", "GuitarTool adapts to iPhone and iPad, and includes an Apple Watch metronome plus three sizes of interactive Home Screen widgets."],
  ["Does it support ukulele?", "Yes. The tuner includes GCEA modes, and the chord library includes a complete set of ukulele chord names and multiple fingerings."],
] as const;

export default function EnglishHome() {
  return (
    <main lang="en">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="GuitarTool home">
          <Image src={assetPath("/app-icon.png")} alt="" width={42} height={42} priority />
          <span>GuitarTool</span>
        </a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#devices">Devices</a>
          <a href="#privacy">Privacy</a>
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
            <a className="primaryButton" href={appStoreUrl}>Download on the App Store <span>↗</span></a>
            <a className="textButton" href="#features">Explore the tools <span>↓</span></a>
          </div>
          <div className="heroProof" aria-label="Product qualities"><span>Fully offline</span><i /><span>No ads</span><i /><span>No account</span></div>
        </div>

        <div className="heroVisual" aria-label="GuitarTool metronome interface">
          <div className="orb orbOne" /><div className="orb orbTwo" />
          <div className="visualCard">
            <div className="visualTopline"><span>20–500 BPM</span><span>13 LANGUAGES</span></div>
            <Image className="heroShot" src={assetPath("/hero-metronome.png")} alt="GuitarTool metronome" width={833} height={1800} priority />
          </div>
          <div className="floatingNote noteOne"><b>01</b><span>Precise rhythm<br /><small>Steady from the first beat</small></span></div>
          <div className="floatingNote noteTwo"><b>♪</b><span>Your sound<br /><small>Stays on your device</small></span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Key features"><div><span>GUITAR</span><i>✦</i><span>UKULELE</span><i>✦</i><span>TUNER</span><i>✦</i><span>METRONOME</span><i>✦</i><span>CHORDS</span><i>✦</i><span>OFFLINE</span></div></section>

      <section className="manifesto shell sectionPad">
        <div className="sectionIndex">00 / WHY</div>
        <div className="manifestoBody">
          <p className="manifestoTitle">A tool should help you find your flow,<br />not become another distraction.</p>
          <div className="manifestoGrid">
            <p>That is why tuning, rhythm and chords live in one clear practice flow. No ads, no feeds, no login wall—open the app and start playing.</p>
            <div className="miniStats"><div><strong>3</strong><span>essential tools</span></div><div><strong>13</strong><span>interface languages</span></div><div><strong>0</strong><span>ads or trackers</span></div></div>
          </div>
        </div>
      </section>

      <section className="features sectionPad" id="features">
        <div className="shell sectionHeading"><p className="eyebrow"><span /> Three tools, one practice flow</p><h2>From the first string<br />to the final beat.</h2></div>
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

      <section className="extras shell sectionPad">
        <div className="sectionHeading compact"><p className="eyebrow"><span /> More than three tools · always evolving</p><h2>Practice should fit you,<br />not the other way around.</h2></div>
        <div className="extraGrid">
          <article className="extraCard themeCard">
            <div className="extraText"><p className="cardLabel">Themes & decoration</p><h3>Choose a favourite now.<br />There is more to come.</h3><p>Sky, Night, Forest and Graphite are only the beginning. More themes, decoration and personal details will arrive in future updates.</p><div className="swatches" aria-label="Sky, Night, Forest and Graphite themes"><span className="day" /><span className="night" /><span className="pine" /><span className="graphite" /><b>MORE SOON</b></div></div>
            <Image src={assetPath("/themes.png")} alt="Four GuitarTool themes" width={833} height={1800} sizes="(max-width: 700px) 86vw, 460px" />
          </article>
          <article className="extraCard widgetCard">
            <div className="extraText"><p className="cardLabel">Home Screen widgets</p><h3>Keep the beat<br />without opening the app.</h3><p>Small, medium and large. Change tempo and time signature, play, pause or tap in a tempo—right from your Home Screen.</p></div>
            <Image src={assetPath("/widgets.png")} alt="Three GuitarTool metronome widget sizes" width={833} height={1800} sizes="(max-width: 700px) 86vw, 460px" />
          </article>
        </div>
        <div className="updatePromise"><span>ONGOING UPDATES</span><p><strong>Useful is the starting point; fresh over time is where we are headed.</strong> More themes, decoration and practice experiences will keep arriving.</p><b aria-hidden="true">↗</b></div>
      </section>

      <section className="devices sectionPad" id="devices">
        <div className="shell devicesGrid">
          <div className="devicesCopy"><div className="sectionIndex light">04 / EVERYWHERE</div><h2>Your practice<br />travels with you.</h2><p>Reach for iPhone, see more on iPad, or raise your wrist to keep time on Apple Watch. Every screen gets an experience shaped for it.</p><div className="devicePills"><span>iPhone</span><span>iPad</span><span>Apple Watch</span></div></div>
          <div className="devicesMedia"><Image src={assetPath("/devices.png")} alt="GuitarTool on iPhone, iPad and Apple Watch" width={833} height={1800} sizes="(max-width: 850px) 90vw, 520px" /></div>
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
        <div className="languageCloud shell" aria-label="Thirteen supported languages">{["简体中文","English","繁體中文","日本語","한국어","Deutsch","Français","Italiano","Español","Português","Русский","Türkçe","العربية"].map((language, index) => <span className={index % 4 === 0 ? "accent" : ""} key={language}>{language}</span>)}</div>
      </section>

      <section className="faq shell sectionPad">
        <div className="faqIntro"><p className="eyebrow"><span /> Common questions</p><h2>Before you download,<br />you may want to know.</h2></div>
        <div className="faqList">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>＋</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="finalCta shell">
        <div className="ctaGlow" /><Image className="ctaIcon" src={assetPath("/app-icon.png")} alt="GuitarTool app icon" width={112} height={112} /><p>GuitarTool for iPhone · iPad · Apple Watch</p><h2>Make your next practice<br />a more focused one.</h2><a className="primaryButton coral" href={appStoreUrl}>Download on the App Store <span>↗</span></a><small>Fully offline · No ads · No account</small>
      </section>

      <footer className="footer shell"><a className="brand" href="#top"><Image src={assetPath("/app-icon.png")} alt="" width={36} height={36} /><span>GuitarTool</span></a><p>© 2026 Zhichao Wei. Practise with care. Progress quietly.</p><div><a href={privacyUrl}>Privacy</a><a href="mailto:weizhichao1027@gmail.com">Contact</a><a href={githubUrl}>GitHub</a></div></footer>
    </main>
  );
}
