import type { Metadata } from "next";
import Image from "next/image";
import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { APP_STORE_LINKS, APP_STORE_URL, GITHUB_URL, PRIVACY_URL, absoluteUrl, assetPath } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Press Kit | Product Facts, Images & Contact",
  description: "Official GuitarTool press kit with version 1.0.7 highlights, verified product facts, downloadable visuals, privacy details and developer contact information.",
  alternates: { canonical: absoluteUrl("/press/") },
  openGraph: { title: "GuitarTool Official Press Kit", description: "Product facts, downloadable visuals and official contact information for GuitarTool.", url: absoluteUrl("/press/"), type: "website", images: [{ url: absoluteUrl("/en-chord-card-share.webp"), width: 833, height: 1800, alt: "GuitarTool 1.0.7 chord card preview" }] },
  twitter: { card: "summary_large_image", title: "GuitarTool Official Press Kit", description: "Verified version 1.0.7 facts and downloadable product images.", images: [absoluteUrl("/en-chord-card-share.webp")] },
};

const assets = [
  { title: "App icon", file: "/app-icon.png", preview: "/app-icon.png", detail: "PNG · square icon", width: 1024, height: 1024 },
  { title: "Social preview", file: "/og.png", preview: "/og.png", detail: "PNG · 1200 × 630", width: 1200, height: 630 },
  { title: "Metronome interface", file: "/en-metronome.webp", preview: "/en-metronome.webp", detail: "WebP · English UI", width: 833, height: 1800 },
  { title: "Tuner interface", file: "/en-tuner.webp", preview: "/en-tuner.webp", detail: "WebP · English UI", width: 833, height: 1800 },
  { title: "Chord library", file: "/en-chords.webp", preview: "/en-chords.webp", detail: "WebP · English UI", width: 833, height: 1800 },
  { title: "Chord card preview", file: "/en-chord-card-share.webp", preview: "/en-chord-card-share.webp", detail: "WebP · English 1.0.7 UI", width: 833, height: 1800 },
  { title: "Devices", file: "/en-devices.webp", preview: "/en-devices.webp", detail: "WebP · iPhone, iPad & Watch", width: 833, height: 1800 },
  { title: "Chord cards · English social", file: "/media-kit/social/guitartool-chord-cards-en-1200x630.png", preview: "/media-kit/social/guitartool-chord-cards-en-1200x630.png", detail: "PNG · 1200 × 630 · English", width: 1200, height: 630 },
  { title: "Chord cards · Chinese social", file: "/media-kit/social/guitartool-chord-cards-zh-Hans-1200x630.png", preview: "/media-kit/social/guitartool-chord-cards-zh-Hans-1200x630.png", detail: "PNG · 1200 × 630 · 简体中文", width: 1200, height: 630 },
] as const;

export default function PressKitPage() {
  return (
    <main className="acqPage pressPage" lang="en">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "GuitarTool", softwareVersion: "1.0.7", description: "An offline tuner, metronome and interactive chord library for guitar and ukulele, with shareable chord cards, Apple Watch and Home Screen widgets.", url: absoluteUrl("/"), downloadUrl: APP_STORE_URL, applicationCategory: "MusicApplication", operatingSystem: "iOS, iPadOS, watchOS", featureList: ["Real-time tuner for seven instrument families", "20–500 BPM practice metronome", "19,244 guitar and ukulele fingerings", "Chord-card preview, Photos save and system sharing", "Apple Watch metronome with background audio", "Three interactive Home Screen widget sizes", "13 interface languages"], author: { "@type": "Person", name: "Zhichao Wei" }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }} />
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "VideoObject", name: "GuitarTool 1.0.7 product preview", description: "A 24-second preview of GuitarTool's offline metronome, tuner, chord library and shareable chord cards.", thumbnailUrl: absoluteUrl("/media-kit/social/guitartool-chord-cards-en-1200x630.png"), uploadDate: "2026-08-27", duration: "PT24S", contentUrl: absoluteUrl("/media-kit/video/GuitarTool-Social-Preview-en-1080x1920.mp4") },
        { "@context": "https://schema.org", "@type": "ImageObject", name: "GuitarTool chord-card social preview", contentUrl: absoluteUrl("/media-kit/social/guitartool-chord-cards-en-1200x630.png"), width: 1200, height: 630, caption: "GuitarTool 1.0.7 chord-card preview, Photos save and image sharing.", creator: { "@type": "Person", name: "Zhichao Wei" }, creditText: "GuitarTool official media kit", acquireLicensePage: absoluteUrl("/press/") },
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
        <div><p className="acqEyebrow">VERSION 1.0.7 HIGHLIGHTS</p><h2>Useful chord shapes can now leave the screen without turning into an ad.</h2></div>
        <div><p>Any visible guitar or ukulele voicing can be previewed as a localized image card, saved to Photos or sent through the system share sheet. The card follows the exact five-fret window, muted strings and higher-position starting fret shown in the app. It contains no forced App Store link, so a student, teacher or bandmate can use it immediately.</p><p>The Apple Watch companion now keeps metronome audio running when the wrist lowers or the display dims. Its timing is driven by the audio sample clock, while screen and haptic refresh work can pause independently. Version 1.0.7 also continues the app’s fully offline, account-free and ad-free approach.</p></div>
      </section>

      <figure className="pressFeatureImage shell">
        <Image src={assetPath("/en-chord-card-share.webp")} alt="GuitarTool 1.0.7 chord card preview, Save to Photos and Share Image interface" width={833} height={1800} sizes="(max-width: 700px) 88vw, 620px" />
        <figcaption>Official version 1.0.7 product image · English interface · available for editorial coverage.</figcaption>
      </figure>

      <section className="pressStory shell">
        <div><p className="acqEyebrow">PRODUCT STORY</p><h2>Less setup. More time with the instrument.</h2></div>
        <div><p>GuitarTool was created around a simple observation: the tools used before and during practice should not become another source of interruption. Tuning, timekeeping and chord lookup belong in one dependable flow, without advertising, feeds or a login wall.</p><p>The app works offline and contains no third-party SDKs. Microphone audio is used only for live pitch analysis on the device; it is not saved or uploaded. The same focus extends across iPhone, iPad, three interactive Home Screen widget sizes, shareable chord cards and an Apple Watch metronome with background audio.</p></div>
      </section>

      <section className="assetSection shell">
        <div className="assetHeading"><p className="acqEyebrow">DOWNLOADABLE ASSETS</p><h2>Ready-to-use product visuals.</h2><p>Assets may be used in editorial coverage of GuitarTool. Please do not alter the app icon or imply an endorsement.</p></div>
        <div className="assetGrid">{assets.map((asset) => <article className={asset.width > asset.height ? "isLandscape" : undefined} key={asset.title}><div><Image src={assetPath(asset.preview)} alt={asset.title} width={asset.width} height={asset.height} /></div><h3>{asset.title}</h3><p>{asset.detail}</p><a href={assetPath(asset.file)} download>Download original <span>↓</span></a></article>)}</div>
        <div className="mediaPackCallout"><div><p className="acqEyebrow">COMPLETE SOCIAL KIT</p><h3>52 images, 13 languages, four platform-ready sizes.</h3><p>The ZIP includes landscape, portrait-feed, story and video-thumbnail formats, plus a CSV manifest with localized captions and landing pages.</p></div><a className="primaryButton" href={assetPath("/media-kit/GuitarTool-1.0.7-social-kit-13-locales.zip")} download>Download the 13-language kit <span>↓</span></a></div>
      </section>

      <section className="pressVideoSection shell">
        <div className="assetHeading"><p className="acqEyebrow">24-SECOND VIDEO PREVIEWS</p><h2>Real product screens, ready for editorial and social use.</h2><p>English and Simplified Chinese versions use official localized screenshots. App Store-sized candidates are also available for final metadata review after version 1.0.7 clears review.</p></div>
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
        <div><a href={APP_STORE_LINKS.press}><span>App Store</span><b>Download page ↗</b></a><a href={PRIVACY_URL}><span>Privacy</span><b>Privacy policy ↗</b></a><a href={GITHUB_URL}><span>Website source</span><b>GitHub ↗</b></a><a href="mailto:weizhichao1027@gmail.com"><span>Press contact</span><b>weizhichao1027@gmail.com ↗</b></a></div>
      </section>
      <AcquisitionFooter language="en" />
    </main>
  );
}
