import type { Metadata } from "next";
import Image from "next/image";
import { SiteLink as Link } from "@/app/components/SiteLink";
import { JsonLd } from "@/app/components/JsonLd";
import { APP_STORE_LINKS, GOOGLE_PLAY_URL, RELEASE_VERSION, RELEASE_UPDATED, absoluteUrl, assetPath, localeAlternates, supportedLanguageCodes } from "@/app/lib/site";
import { paidThemes, themeImage } from "@/app/lib/theme-gallery";

const appStoreUrl = APP_STORE_LINKS.home;
const privacyUrl = "https://weizhichao1027-collab.github.io/GuitarTool-Privacy/en/";
const githubUrl = "https://github.com/weizhichao1027-collab/guitartool-website";
const basePath = process.env.GITHUB_PAGES === "true" ? "/guitartool-website" : "";

export const metadata: Metadata = {
  title: "GuitarTool | Tuner, Metronome & Chords",
  description: "GuitarTool’s public App Store version is 1.1.5. Kinetic Garden and Pocket Jazz Theater are separate one-time purchases. Google Play still lists Android and Wear OS 1.1.4. Core tools are free and offline, with no ads or subscription.",
  alternates: { canonical: absoluteUrl("/en/"), languages: localeAlternates },
  openGraph: {
    title: "GuitarTool | Leave room for practice.",
    description: "GuitarTool’s public App Store version is 1.1.5. Kinetic Garden and Pocket Jazz Theater are separate one-time purchases. Google Play still lists Android and Wear OS 1.1.4. Core tools are free and offline, with no ads or subscription.",
    url: absoluteUrl("/en/"),
    locale: "en_US",
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
    description: "GuitarTool’s public App Store version is 1.1.5. Kinetic Garden and Pocket Jazz Theater are separate one-time purchases. Google Play still lists Android and Wear OS 1.1.4. Core tools are free and offline, with no ads or subscription.",
    images: [absoluteUrl("/og.png")],
  },
};

const features = [
  {
    number: "01",
    kicker: "Flexible Metronome",
    title: "More than a click.\nA rhythm trainer that grows with you.",
    copy: "Set 20–500 BPM, time signatures, note values, accents and subdivisions. Combine timers, swing, progressive tempo and rear-flash beat cues into a routine that is truly yours.",
    points: ["Tap tempo and practice presets", "Four subdivisions and eighth-note swing", "Flash all main beats or accents only, with three intensities"],
    image: "/release-1.1.4/en-metronome.webp",
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
    image: "/release-1.1.4/en-chords.webp",
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
  ["Where can I download GuitarTool, and which version is public?", "GuitarTool is a tuner, metronome and chord library for guitar and ukulele practice. Checked on 18 November 2026, the public App Store lookup returns 1.1.5 in the United States and China for iPhone, iPad and Apple Watch. The public Google Play page still shows Android and Wear OS 1.1.4. Core tools are free, work offline and need no ads, account or subscription."],
  ["What is new in App Store version 1.1.5?", "Version 1.1.5 adds Kinetic Garden and Pocket Jazz Theater. Preview each before a separate one-time purchase. Purchase, restoration and cancellation handling is improved. Text in 13 languages and layouts across screen sizes are refined. An extra-large landscape iPad Home Screen widget is available when the system and device offer that size. Usage analytics stays disabled."],
  ["Does voice counting need a microphone or use my interface language?", "No microphone or connection is needed. The bundled voice counts in Chinese regardless of the interface language, starting again each bar; subdivisions remain light clicks. Voice counting is available in the iPhone/iPad app. Watch and browser metronomes do not include it."],
  ["Do I need an internet connection, account or subscription?", "The tuner, metronome, chord libraries and four basic looks work offline without an account or subscription. The twelve complete themes in App Store 1.1.5 are bundled and work offline after purchase. Purchasing or restoring may need a connection. The store shows the current price."],
  ["How do paid themes work, and is Kinetic Garden on Google Play?", "On App Store 1.1.5, twelve complete themes are separate one-time purchases, including Kinetic Garden and Pocket Jazz Theater. Artwork is bundled, with no theme backend. The public Google Play 1.1.4 listing still has the earlier ten paid themes; those two new themes are not described as purchasable there. Store purchases are managed separately. Four basic looks remain free."],
  ["Does the tuner save my audio?", "Never. Microphone audio is used only for live, on-device pitch detection. It is not saved as a file or uploaded to a server."],
  ["Can I tune on Apple Watch?", "Yes. Version 1.1.1 adds guitar, ukulele, bass and chromatic tuning on Apple Watch. Microphone capture starts only when you tap Start and ends when you stop, change pages or leave the app. Audio is processed on the watch."],
  ["Which devices are supported?", "The App Store release supports iPhone, iPad and Apple Watch, plus small, medium and large Home Screen widgets. iOS 27+ can add an extra-large portrait widget when the system offers it. Version 1.1.5 also adds an extra-large landscape iPad widget when the system and device offer that size. Google Play publicly offers Android and Wear OS 1.1.4. Watch audio can continue on an approved background route; foreground speaker fallback stops when inactive."],
  ["Does it support ukulele?", "Yes. The tuner includes GCEA modes, and the chord library includes a complete set of ukulele chord names and multiple fingerings."],
  ["Can I send a chord shape to a teacher or friend?", "Yes. Preview the current chord card, then save it to Photos or send it with the system share sheet. The image does not force an App Store link."],
  ["Does Flash Beat take photos?", "No. On compatible iPhones it uses the rear flash for all main beats or accents only, without capturing images. It turns off when playback stops, you leave the screen or the app enters the background."],
] as const;

export default function EnglishHome() {
  return (
    <main lang="en">
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "GuitarTool", softwareVersion: RELEASE_VERSION, dateModified: RELEASE_UPDATED, description: "A tuner, metronome and chord library for guitar and ukulele practice. Public App Store version 1.1.5; public Google Play version Android and Wear OS 1.1.4. Core tools are free and offline, with no ads, account or subscription.", url: absoluteUrl("/en/"), downloadUrl: appStoreUrl, installUrl: [appStoreUrl, GOOGLE_PLAY_URL], applicationCategory: "MusicApplication", operatingSystem: "iOS 17+, iPadOS 17+, watchOS 10+, Android, Wear OS", inLanguage: supportedLanguageCodes, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, additionalProperty: [{ "@type": "PropertyValue", name: "App Store version", value: "1.1.5" }, { "@type": "PropertyValue", name: "Google Play version", value: "1.1.4" }], featureList: ["Real-time tuner with three-second pitch hold", "Apple Watch guitar, ukulele, bass and chromatic tuner", "20–500 BPM metronome with offline Chinese voice counting and BPM preview", "Extra-large portrait widget on iOS 27+ when supported by the system", "Extra-large landscape iPad widget in 1.1.5 when the system and device offer it", "Silent bars and up to six tempo stages saved with presets", "Rear-flash beat cues for all main beats or accents only, with three intensities", "19,244 guitar and ukulele fingerings", "Preview, save and share chord cards", "Apple Watch metronome: approved background route continues; foreground fallback stops when inactive", "Large Home Screen widget subdivisions and Swing", "Twelve one-time visual themes on the App Store, including Kinetic Garden and Pocket Jazz Theater"] },
        { "@context": "https://schema.org", "@type": "WebSite", name: "GuitarTool", url: absoluteUrl("/en/"), inLanguage: "en", description: "Official GuitarTool website: where to download the practice app, what is free, how one-time themes work, and where to read the privacy policy.", publisher: { "@type": "Organization", name: "Shanghai Qishan Cultural Communication Co., Ltd.", email: "weizhichao1027@gmail.com" } },
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
          <p className="heroLead">GuitarTool is a tuner, metronome and chord library for guitar and ukulele practice. The public App Store version is 1.1.5. The public Google Play version remains Android and Wear OS 1.1.4. Core tools are free, work offline and need no ads, account or subscription.</p>
          <div className="heroActions">
            <a className="primaryButton" href={appStoreUrl}>Download free on the App Store <span>↗</span></a>
            <a className="textButton" href={GOOGLE_PLAY_URL}>Google Play <span>↗</span></a>
            <a className="textButton" href="#features">Explore the tools <span>↓</span></a>
          </div>
          <div className="heroProof" aria-label="Product qualities"><span>Offline core tools</span><i /><span>No ads</span><i /><span>No account</span></div>
        </div>

        <div className="heroVisual" aria-label="GuitarTool metronome interface">
          <div className="orb orbOne" /><div className="orb orbTwo" />
          <div className="visualCard">
            <div className="visualTopline"><span>20–500 BPM</span><span>13 LANGUAGES</span></div>
            <Image className="heroShot" src={assetPath("/release-1.1.4/en-metronome.webp")} alt="GuitarTool metronome in English" width={833} height={1800} priority />
          </div>
          <div className="floatingNote noteOne"><b>01</b><span>Precise rhythm<br /><small>Steady from the first beat</small></span></div>
          <div className="floatingNote noteTwo"><b>♪</b><span>Your sound<br /><small>Stays on your device</small></span></div>
        </div>
      </section>

      <section className="releaseWatch shell sectionPad" aria-labelledby="release114-heading">
        <div>
          <p className="eyebrow"><span /> APP STORE 1.1.5 · 16 NOVEMBER 2026</p>
          <h2 id="release114-heading">A new scene.<br />Your next song.</h2>
          <p>Preview Kinetic Garden and Pocket Jazz Theater, then buy each once if you want it. Four basic looks and the core tools stay free. There is no subscription. The image beside this text is 1.1.4 store artwork and does not show the two new themes.</p>
          <p>Version 1.1.5 also improves purchase, restore and cancellation handling, and refines text and layouts. Usage analytics stays off, and practice audio stays on the device. Google Play’s public version remains 1.1.4.</p>
          <Link className="textCta" href="/en/guides/guitartool-1-1-5/">Read the 1.1.5 release and download notes →</Link>
        </div>
        <Image src={assetPath("/release-1.1.4/en-themes.webp")} alt="GuitarTool 1.1.4 English theme App Store artwork" width={660} height={1434} sizes="(max-width: 700px) 85vw, 416px" />
      </section>

      <section className="ticker" aria-label="Key features"><div><span>GUITAR</span><i>✦</i><span>UKULELE</span><i>✦</i><span>TUNER</span><i>✦</i><span>METRONOME</span><i>✦</i><span>CHORDS</span><i>✦</i><span>BASIC THEMES</span></div></section>

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
        <div className="introVideoCopy"><p className="eyebrow"><span /> Full product tour in 36 seconds</p><h2>See how the tools fit into practice before choosing where to begin.</h2><p>The landscape edit is designed for desktop and larger screens; mobile automatically receives the English portrait edit. It covers the core tuning, rhythm, chord-card, widget and multi-device experience. This earlier tour does not show later voice controls, newer widget sizes, or the themes added in 1.1.4 and 1.1.5. The training image below is 1.1.4 store artwork.</p></div>
        <div className="introVideoFrame"><video controls playsInline preload="metadata" aria-label="GuitarTool full English introduction"><source src={assetPath("/media-kit/video/GuitarTool-Full-Intro-en-480x854.mp4")} media="(max-width: 700px)" type="video/mp4" /><source src={assetPath("/media-kit/video/GuitarTool-Full-Intro-en-854x480.mp4")} type="video/mp4" /></video></div>
      </section>

      <section className="releaseWatch shell sectionPad" aria-labelledby="training-heading">
        <div>
          <p className="eyebrow"><span /> FREE RHYTHM PRACTICE · VOICE AND TRAINING</p>
          <h2 id="training-heading">The click stops.<br />Your timing continues.</h2>
          <p>Stop playback, then choose Voice in Metronome → Settings → Metronome Sound to hear Chinese counting at your current BPM, entirely offline. <Link href="/en/guides/voice-counting-metronome/">Voice-counting guide →</Link></p>
          <p>Open Metronome → Presets → Rhythm Training. Alternate audible and silent bars to check your internal beat, or arrange up to six tempo stages by bar count.</p>
          <p>Set 20–500 BPM and 1–64 bars per stage, then save the setup as a custom preset. Training is free and works offline on iPhone and iPad.</p>
          <Link className="textCta" href="/en/guides/silent-bar-metronome/">Practise with silent bars →</Link><br />
          <Link className="textCta" href="/en/guides/staged-tempo-training/">Set up tempo stages →</Link>
          <p>Training artwork supplied for the 1.1.4 App Store listing. Voice controls are explained in the guide.</p>
        </div>
        <Image src={assetPath("/release-1.1.4/en-training.webp")} alt="GuitarTool 1.1.4 rhythm training App Store artwork" width={660} height={1434} sizes="(max-width: 700px) 85vw, 416px" />
      </section>

      <section className="extras shell sectionPad">
        <div className="sectionHeading compact"><p className="eyebrow"><span /> Across your devices · themes & widgets</p><h2>Practice should fit you,<br />not the other way around.</h2></div>
        <div className="extraGrid">
          <article className="extraCard themeCard">
            <div className="extraText"><p className="cardLabel">Theme Gallery · App Store 1.1.5</p><h3>Twelve one-time themes.<br />The new two are garden and jazz.</h3><p>App Store 1.1.5 adds Kinetic Garden and Pocket Jazz Theater to the earlier ten. Each is a separate purchase and changes appearance only. Purchased themes work offline without an asset download. Four basic looks stay free. The public Google Play 1.1.4 listing still has the earlier ten.</p><div className="swatches" aria-label="Four free basic looks and twelve one-time themes on the App Store"><span className="day" /><span className="night" /><span className="pine" /><span className="graphite" /><b>12 ON APP STORE</b></div></div>
            <Image src={assetPath("/en-luthier-atlas.webp")} alt="GuitarTool 1.1.0 Luthier Atlas complete theme metronome screen" width={833} height={1809} sizes="(max-width: 700px) 86vw, 460px" />
          </article>
          <article className="extraCard widgetCard">
            <div className="extraText"><p className="cardLabel">Home Screen widgets</p><h3>Keep the beat<br />without opening the app.</h3><p>Small, medium and large widgets control tempo and playback; medium and large also offer meter and tap tempo. The large widget can switch beat, eighth, triplet, sixteenth and Swing. iOS 27+ can add an extra-large portrait widget. Version 1.1.5 adds an extra-large landscape iPad widget when the system and device offer that size.</p></div>
            <Image src={assetPath("/release-1.1.1/en-large-widget.png")} alt="GuitarTool 1.1.1 large metronome widget with beat, eighth, triplet, sixteenth and Swing controls" width={1146} height={1262} sizes="(max-width: 700px) 86vw, 460px" />
          </article>
        </div>
        <div className="updatePromise"><span>AVAILABLE NOW · APP STORE 1.1.5</span><p><strong>Kinetic Garden and Pocket Jazz Theater.</strong> Preview each, then buy it once if you want that look. Purchases, restores and cancellations are more reliable, and iPad can add an extra-large landscape widget when the system offers it. <Link href="/en/guides/guitartool-1-1-5/">1.1.5 release and download notes →</Link></p><b aria-hidden="true">↗</b></div>
      </section>

      <section className="themeGallery sectionPad" id="paid-themes" aria-labelledby="paid-themes-heading">
        <div className="shell themeGalleryIntro">
          <p className="eyebrow"><span /> Theme Gallery · Ten interfaces with screenshots</p>
          <h2 id="paid-themes-heading">One metronome.<br />Ten looks already pictured.</h2>
          <p>These are the ten paid themes that already have interface screenshots. App Store 1.1.5 also adds Kinetic Garden and Pocket Jazz Theater, which are not in this older set of images. Each theme is a separate purchase. Four basic looks remain free.</p>
        </div>
        <div className="shell themeGalleryGrid">
          {paidThemes.map((theme, index) => (
            <figure className={`themeTile themeTile-${theme.slug}`} key={theme.slug}>
              <div className="themeTileImage"><Image src={assetPath(themeImage(theme))} alt={`Full GuitarTool metronome screen in the ${theme.en} paid theme`} width={1320} height={2868} sizes="(max-width: 600px) 85vw, (max-width: 900px) 45vw, 30vw" loading="lazy" /></div>
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{theme.en}</h3><p>{theme.enMood}</p></div><b>Separate purchase</b></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="releaseWatch shell sectionPad" aria-labelledby="watch-tuner-heading">
        <div>
          <p className="eyebrow"><span /> SINCE 1.1.1 · APPLE WATCH TUNER</p>
          <h2 id="watch-tuner-heading">Raise your wrist.<br />Start tuning.</h2>
          <p>Choose guitar, ukulele, bass or chromatic mode on your watch. Tap Start to see note and cents feedback, with a haptic cue in tune. Capture ends when you stop, change pages or leave the app; audio stays on the watch.</p>
          <Link className="textButton" href="/en/guides/apple-watch-tuner/">Explore the Watch tuner <span>↗</span></Link>
        </div>
        <Image src={assetPath("/en-watch-tuner.jpg")} alt="GuitarTool 1.1.1 Apple Watch tuner App Store preview showing the manual Start Tuning control" width={416} height={496} sizes="(max-width: 700px) 85vw, 416px" />
      </section>

      <section className="devices sectionPad" id="devices">
        <div className="shell devicesGrid">
          <div className="devicesCopy"><div className="sectionIndex light">04 / EVERYWHERE</div><h2>Your practice<br />travels with you.</h2><p>Reach for iPhone, see more on iPad, or start a beat or tune from Apple Watch. Android phones and Wear OS use the public Google Play release, version 1.1.4. The Watch tuner covers guitar, ukulele, bass and chromatic modes; metronome audio can continue when the wrist lowers on an approved background route.</p><div className="devicePills"><span>iPhone</span><span>iPad</span><span>Apple Watch</span><span>Android</span><span>Wear OS</span></div></div>
          <div className="devicesMedia"><Image src={assetPath("/release-1.1.4/en-devices.webp")} alt="GuitarTool on iPhone, iPad and Apple Watch in English" width={833} height={1800} sizes="(max-width: 850px) 90vw, 520px" /></div>
        </div>
      </section>

      <section className="privacy sectionPad" id="privacy">
        <div className="privacyGlow" />
        <div className="shell privacyGrid">
          <div><p className="eyebrow inverted"><span /> Privacy by design</p><h2>Your practice audio<br /><em>stays on your device.</em></h2></div>
          <div className="privacyCopy"><p>GuitarTool 1.1.5 needs no account and has no ads, subscription or cross-app tracking. Tuner audio is processed only on your device, never saved or uploaded. Four basic looks are free. The twelve paid themes on the App Store have bundled artwork and work offline after purchase.</p><p>Usage analytics stays disabled in 1.1.5. There is no analytics switch; the app does not initialize PostHog or send usage or diagnostic analytics events. Historical test data is not automatically deleted. The privacy policy was last updated on 18 November 2026 and explains requests about that data and website hosting.</p><ul><li><b>01</b><span><strong>No account</strong>No registration, sign-in or cloud profile.</span></li><li><b>02</b><span><strong>No audio uploads</strong>No recordings saved or sent to us or a third party.</span></li><li><b>03</b><span><strong>No ads or tracking</strong>No advertising or cross-app tracking. Usage analytics stays disabled in 1.1.5.</span></li></ul><a className="lightButton" href={privacyUrl}>Read the full privacy policy <span>↗</span></a></div>
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
          <Link href="/en/guides/apple-watch-metronome/"><span>07</span><h3>Apple Watch metronome</h3><p>Control tempo and meter from your wrist; sound can continue on an approved background audio route.</p><b>Explore the watch metronome →</b></Link>
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
        <div className="ctaGlow" /><Image className="ctaIcon" src={assetPath("/app-icon-224.png")} alt="GuitarTool app icon" width={112} height={112} /><p>iPhone · iPad · Apple Watch · Android · Wear OS</p><h2>Make your next practice<br />a more focused one.</h2><a className="primaryButton coral" href={appStoreUrl}>Download free on the App Store <span>↗</span></a><a className="textButton" href={GOOGLE_PLAY_URL}>Google Play 1.1.4 <span>↗</span></a><small>Offline core tools · No ads · No account · No subscription</small>
      </section>

      <footer className="footer shell"><a className="brand" href="#top"><Image src={assetPath("/app-icon-224.png")} alt="" width={36} height={36} /><span>GuitarTool</span></a><p>© 2026 Zhichao Wei. Practise with care. Progress quietly.</p><div><Link href="/en/support/">Support</Link><a href={privacyUrl}>Privacy</a><a href={GOOGLE_PLAY_URL}>Google Play</a><a href="mailto:weizhichao1027@gmail.com">Contact</a><a href={githubUrl}>GitHub</a></div></footer>
    </main>
  );
}
