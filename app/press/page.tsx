import type { Metadata } from "next";
import Image from "next/image";
import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { APP_STORE_LINKS, APP_STORE_URL, GITHUB_URL, PRIVACY_URL, absoluteUrl, assetPath } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Press Kit | Product Facts, Images & Contact",
  description: "Official GuitarTool press kit with version 1.0.8 highlights, verified product facts, four full introduction videos, downloadable visuals and developer contact information.",
  alternates: { canonical: absoluteUrl("/press/") },
  openGraph: { title: "GuitarTool Official Press Kit", description: "Version 1.0.8 facts, downloadable visuals, four full introduction videos and official contact information.", url: absoluteUrl("/press/"), type: "website", images: [{ url: absoluteUrl("/en-chord-card-share.webp"), width: 833, height: 1800, alt: "GuitarTool chord card preview" }] },
  twitter: { card: "summary_large_image", title: "GuitarTool Official Press Kit", description: "Verified version 1.0.8 facts, downloadable product images and videos.", images: [absoluteUrl("/en-chord-card-share.webp")] },
};

const assets = [
  { title: "App icon", file: "/app-icon.png", preview: "/app-icon.png", detail: "PNG · square icon", width: 1024, height: 1024 },
  { title: "Social preview", file: "/og.png", preview: "/og.png", detail: "PNG · 1200 × 630", width: 1200, height: 630 },
  { title: "Metronome interface", file: "/en-metronome.webp", preview: "/en-metronome.webp", detail: "WebP · English UI", width: 833, height: 1800 },
  { title: "Tuner interface", file: "/en-tuner.webp", preview: "/en-tuner.webp", detail: "WebP · English UI", width: 833, height: 1800 },
  { title: "Chord library", file: "/en-chords.webp", preview: "/en-chords.webp", detail: "WebP · English UI", width: 833, height: 1800 },
  { title: "Chord card preview", file: "/en-chord-card-share.webp", preview: "/en-chord-card-share.webp", detail: "WebP · English UI · save & share flow", width: 833, height: 1800 },
  { title: "Devices", file: "/en-devices.webp", preview: "/en-devices.webp", detail: "WebP · iPhone, iPad & Watch", width: 833, height: 1800 },
  { title: "Chord cards · English social", file: "/media-kit/social/guitartool-chord-cards-en-1200x630.png", preview: "/media-kit/social/guitartool-chord-cards-en-1200x630.png", detail: "PNG · 1200 × 630 · English", width: 1200, height: 630 },
  { title: "Chord cards · Chinese social", file: "/media-kit/social/guitartool-chord-cards-zh-Hans-1200x630.png", preview: "/media-kit/social/guitartool-chord-cards-zh-Hans-1200x630.png", detail: "PNG · 1200 × 630 · 简体中文", width: 1200, height: 630 },
] as const;

const fullVideos = [
  { title: "English full introduction · landscape", file: "/media-kit/video/GuitarTool-Full-Intro-en-854x480.mp4", detail: "MP4 · H.264 · 854 × 480 · 36 seconds · web edition", orientation: "landscape" },
  { title: "English full introduction · portrait", file: "/media-kit/video/GuitarTool-Full-Intro-en-480x854.mp4", detail: "MP4 · H.264 · 480 × 854 · 36 seconds · web edition", orientation: "portrait" },
  { title: "Simplified Chinese full introduction · landscape", file: "/media-kit/video/GuitarTool-Full-Intro-zh-Hans-854x480.mp4", detail: "MP4 · H.264 · 854 × 480 · 36 seconds · web edition", orientation: "landscape" },
  { title: "Simplified Chinese full introduction · portrait", file: "/media-kit/video/GuitarTool-Full-Intro-zh-Hans-480x854.mp4", detail: "MP4 · H.264 · 480 × 854 · 36 seconds · web edition", orientation: "portrait" },
] as const;

export default function PressKitPage() {
  return (
    <main className="acqPage pressPage" lang="en">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "GuitarTool", softwareVersion: "1.0.8", description: "An offline tuner, metronome and interactive chord library for guitar and ukulele, with rear-flash beat cues, shareable chord cards, Apple Watch and Home Screen widgets.", url: absoluteUrl("/"), downloadUrl: APP_STORE_URL, applicationCategory: "MusicApplication", operatingSystem: "iOS, iPadOS, watchOS", featureList: ["Real-time tuner for seven instrument families", "20–500 BPM practice metronome", "Rear-flash beat cues for all main beats or accents only, with three intensities", "19,244 guitar and ukulele fingerings", "Chord-card preview, Photos save and system sharing", "Apple Watch metronome with background audio", "Three interactive Home Screen widget sizes", "13 interface languages"], author: { "@type": "Person", name: "Zhichao Wei" }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }} />
      <JsonLd data={[
        ...fullVideos.map((video) => ({ "@context": "https://schema.org", "@type": "VideoObject", name: video.title, description: "A 36-second full introduction to GuitarTool's tuner, metronome, chord cards, widgets and multi-device experience.", thumbnailUrl: absoluteUrl("/media-kit/social/guitartool-chord-cards-en-1200x630.png"), uploadDate: "2026-08-28", duration: "PT36S", contentUrl: absoluteUrl(video.file) })),
        { "@context": "https://schema.org", "@type": "VideoObject", name: "GuitarTool 24-second social preview", description: "A concise vertical preview of GuitarTool's offline metronome, tuner, chord library and shareable chord cards.", thumbnailUrl: absoluteUrl("/media-kit/social/guitartool-chord-cards-en-1200x630.png"), uploadDate: "2026-08-27", duration: "PT24S", contentUrl: absoluteUrl("/media-kit/video/GuitarTool-Social-Preview-en-1080x1920.mp4") },
        { "@context": "https://schema.org", "@type": "ImageObject", name: "GuitarTool chord-card social preview", contentUrl: absoluteUrl("/media-kit/social/guitartool-chord-cards-en-1200x630.png"), width: 1200, height: 630, caption: "GuitarTool chord-card preview, Photos save and image sharing.", creator: { "@type": "Person", name: "Zhichao Wei" }, creditText: "GuitarTool official media kit", acquireLicensePage: absoluteUrl("/press/") },
      ]} />
      <AcquisitionHeader language="en" />
      <section className="pressHero shell">
        <p className="acqEyebrow">OFFICIAL PRESS KIT · UPDATED AUGUST 2026</p>
        <h1>GuitarTool keeps practice tools <em>focused, private and offline.</em></h1>
        <p>Verified product facts, downloadable visual assets and direct links for journalists, educators, reviewers and creators.</p>
        <div><a className="primaryButton" href={APP_STORE_LINKS.press}>View on the App Store <span>↗</span></a><a className="textCta" href="mailto:weizhichao1027@gmail.com">Contact the developer <span>→</span></a></div>
      </section>

      <section className="pressFacts shell">
        <div><p className="acqEyebrow">ONE-SENTENCE DESCRIPTION</p><h2>GuitarTool is a free, ad-free iPhone and iPad practice toolkit combining a real-time tuner, advanced metronome and 19,244 interactive guitar and ukulele fingerings, with shareable chord cards, Apple Watch and Home Screen companions.</h2></div>
        <dl>
          <div><dt>Platforms</dt><dd>iPhone, iPad, Apple Watch</dd></div>
          <div><dt>Price</dt><dd>Free</dd></div>
          <div><dt>Languages</dt><dd>13 interface languages</dd></div>
          <div><dt>Privacy</dt><dd>No account, ads, analytics or audio uploads</dd></div>
          <div><dt>Developer</dt><dd>Zhichao Wei</dd></div>
          <div><dt>App Store ID</dt><dd>6761914163</dd></div>
        </dl>
      </section>

      <section className="pressNumbers shell">
        <div><strong>20–500</strong><span>BPM range</span></div><div><strong>19,244</strong><span>guitar & ukulele fingerings</span></div><div><strong>7</strong><span>tuner instrument families</span></div><div><strong>13</strong><span>interface languages</span></div>
      </section>

      <section className="pressStory shell">
        <div><p className="acqEyebrow">VERSION 1.0.8 · BUILD 8</p><h2>A beat you can hear, see and shape around the way you practise.</h2></div>
        <div><p>On compatible iPhones, Flash Beat can cue every main beat or accents only with the rear flash at three intensity levels. It follows main beats rather than subdivisions, carries into custom practice presets, and turns off automatically when playback stops, the screen is left or the app enters the background. It never captures images. A first-use notice explains strobe sensitivity, battery use and heat.</p><p>Version 1.0.8 also reorganises metronome settings and presets, strengthens tuner feedback and confirmation-tone reliability, improves app/widget/Watch synchronisation and background audio, refines Apple Watch layouts, and applies safer full-screen backgrounds plus accessibility and localisation fixes. Shareable chord cards remain part of the current product.</p></div>
      </section>

      <figure className="pressFeatureImage shell">
        <Image src={assetPath("/en-chord-card-share.webp")} alt="GuitarTool chord card preview, Save to Photos and Share Image interface" width={833} height={1800} sizes="(max-width: 700px) 88vw, 620px" />
        <figcaption>Official product image · English chord-card interface · available for editorial coverage.</figcaption>
      </figure>

      <section className="pressStory shell">
        <div><p className="acqEyebrow">PRODUCT STORY</p><h2>Less setup. More time with the instrument.</h2></div>
        <div><p>GuitarTool was created around a simple observation: the tools used before and during practice should not become another source of interruption. Tuning, timekeeping and chord lookup belong in one dependable flow, without advertising, feeds or a login wall.</p><p>The app works offline and contains no third-party SDKs. Microphone audio is used only for live pitch analysis on the device; it is not saved or uploaded. The same focus extends across iPhone, iPad, three interactive Home Screen widget sizes, shareable chord cards and an Apple Watch metronome with background audio.</p></div>
      </section>

      <section className="assetSection shell">
        <div className="assetHeading"><p className="acqEyebrow">DOWNLOADABLE ASSETS</p><h2>Ready-to-use product visuals.</h2><p>Assets may be used in editorial coverage of GuitarTool. Please do not alter the app icon or imply an endorsement.</p></div>
        <div className="assetGrid">{assets.map((asset) => <article className={asset.width > asset.height ? "isLandscape" : undefined} key={asset.title}><div><Image src={assetPath(asset.preview)} alt={asset.title} width={asset.width} height={asset.height} /></div><h3>{asset.title}</h3><p>{asset.detail}</p><a href={assetPath(asset.file)} download>Download original <span>↓</span></a></article>)}</div>
        <div className="mediaPackCallout"><div><p className="acqEyebrow">EVERGREEN CHORD-CARD SOCIAL KIT</p><h3>52 images, 13 languages, four platform-ready sizes.</h3><p>Created for the chord-card launch and still accurate for the current product. The ZIP includes landscape, portrait-feed, story and video-thumbnail formats, plus localized captions and landing pages.</p></div><a className="primaryButton" href={assetPath("/media-kit/GuitarTool-1.0.7-social-kit-13-locales.zip")} download>Download the 13-language kit <span>↓</span></a></div>
      </section>

      <section className="pressVideoSection shell">
        <div className="assetHeading"><p className="acqEyebrow">FULL INTRODUCTION VIDEOS</p><h2>Four edits for websites, editorial embeds and social publishing.</h2><p>Use landscape for articles, desktop landing pages and presentations; use portrait for Shorts, Reels, Stories and mobile-first embeds. Both English and Simplified Chinese editions include audio and real product screens.</p></div>
        <div className="pressFullVideoGrid">{fullVideos.map((video) => <article className={video.orientation} key={video.file}><video controls playsInline preload="metadata"><source src={assetPath(video.file)} type="video/mp4" /></video><div><h3>{video.title}</h3><p>{video.detail}</p><a href={assetPath(video.file)} download>Download full video ↓</a></div></article>)}</div>
      </section>

      <section className="pressVideoSection shell">
        <div className="assetHeading"><p className="acqEyebrow">24-SECOND VERTICAL CUTDOWNS</p><h2>Shorter edits for fast social and App Preview evaluation.</h2><p>English and Simplified Chinese versions use official localized product screens. The 886 × 1920 files remain candidates only and should receive a fresh App Store specification and metadata review before any upload for version 1.0.8.</p></div>
        <div className="pressVideoGrid">
          <article><video controls playsInline preload="metadata" poster={assetPath("/media-kit/social/guitartool-chord-cards-en-1080x1350.png")}><source src={assetPath("/media-kit/video/GuitarTool-Social-Preview-en-1080x1920.mp4")} type="video/mp4" /></video><div><h3>English social preview</h3><p>MP4 · H.264 · 1080 × 1920 · 24 seconds</p><a href={assetPath("/media-kit/video/GuitarTool-Social-Preview-en-1080x1920.mp4")} download>Download social video ↓</a><a href={assetPath("/media-kit/video/GuitarTool-App-Preview-en-886x1920.mp4")} download>Download App Preview candidate ↓</a></div></article>
          <article><video controls playsInline preload="metadata" poster={assetPath("/media-kit/social/guitartool-chord-cards-zh-Hans-1080x1350.png")}><source src={assetPath("/media-kit/video/GuitarTool-Social-Preview-zh-Hans-1080x1920.mp4")} type="video/mp4" /></video><div><h3>Simplified Chinese social preview</h3><p>MP4 · H.264 · 1080 × 1920 · 24 seconds</p><a href={assetPath("/media-kit/video/GuitarTool-Social-Preview-zh-Hans-1080x1920.mp4")} download>Download social video ↓</a><a href={assetPath("/media-kit/video/GuitarTool-App-Preview-zh-Hans-886x1920.mp4")} download>Download App Preview candidate ↓</a></div></article>
        </div>
      </section>

      <section className="pressResourceSection shell">
        <p className="acqEyebrow">EDITORIAL RESOURCES</p><h2>Two deeper stories for educators and product teams.</h2>
        <div className="pressResourceGrid"><a href={assetPath("/en/guides/chord-diagrams-for-students/")}><span>TEACHER WORKFLOW</span><strong>How to send students clear, reusable chord diagrams.</strong><b>Read the guide →</b></a><a href={assetPath("/en/guides/apple-watch-metronome-audio-design/")}><span>ENGINEERING STORY</span><strong>How GuitarTool separates audio timing from Watch UI refresh.</strong><b>Read the article →</b></a></div>
      </section>

      <section className="pressLinks shell">
        <h2>Official links</h2>
        <div><a href={APP_STORE_LINKS.press}><span>App Store</span><b>Download page ↗</b></a><a href={absoluteUrl("/en/support/")}><span>Support</span><b>Troubleshooting ↗</b></a><a href={PRIVACY_URL}><span>Privacy</span><b>Privacy policy ↗</b></a><a href={GITHUB_URL}><span>Website source</span><b>GitHub ↗</b></a><a href="mailto:weizhichao1027@gmail.com"><span>Press contact</span><b>weizhichao1027@gmail.com ↗</b></a></div>
      </section>
      <AcquisitionFooter language="en" />
    </main>
  );
}
