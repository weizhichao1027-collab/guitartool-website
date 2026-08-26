import type { Metadata } from "next";
import Image from "next/image";
import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { APP_STORE_LINKS, APP_STORE_URL, GITHUB_URL, PRIVACY_URL, absoluteUrl, assetPath } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Press Kit | Product Facts, Images & Contact",
  description: "Official GuitarTool press kit with product facts, downloadable app icon, screenshots, privacy details and developer contact information.",
  alternates: { canonical: absoluteUrl("/press/") },
  openGraph: { title: "GuitarTool Official Press Kit", description: "Product facts, downloadable visuals and official contact information for GuitarTool.", url: absoluteUrl("/press/"), type: "website" },
};

const assets = [
  { title: "App icon", file: "/app-icon.png", preview: "/app-icon.png", detail: "PNG · square icon", width: 1024, height: 1024 },
  { title: "Social preview", file: "/og.png", preview: "/og.png", detail: "PNG · 1200 × 630", width: 1200, height: 630 },
  { title: "Metronome interface", file: "/en-metronome.webp", preview: "/en-metronome.webp", detail: "WebP · English UI", width: 833, height: 1800 },
  { title: "Tuner interface", file: "/en-tuner.webp", preview: "/en-tuner.webp", detail: "WebP · English UI", width: 833, height: 1800 },
  { title: "Chord library", file: "/en-chords.webp", preview: "/en-chords.webp", detail: "WebP · English UI", width: 833, height: 1800 },
  { title: "Devices", file: "/en-devices.webp", preview: "/en-devices.webp", detail: "WebP · iPhone, iPad & Watch", width: 833, height: 1800 },
] as const;

export default function PressKitPage() {
  return (
    <main className="acqPage pressPage" lang="en">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "GuitarTool", description: "An offline tuner, metronome and chord library for guitar and ukulele.", url: absoluteUrl("/"), downloadUrl: APP_STORE_URL, applicationCategory: "MusicApplication", operatingSystem: "iOS, iPadOS, watchOS", author: { "@type": "Person", name: "Zhichao Wei" }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }} />
      <AcquisitionHeader language="en" />
      <section className="pressHero shell">
        <p className="acqEyebrow">OFFICIAL PRESS KIT · UPDATED AUGUST 2026</p>
        <h1>GuitarTool keeps practice tools <em>focused, private and offline.</em></h1>
        <p>Verified product facts, downloadable visual assets and direct links for journalists, educators, reviewers and creators.</p>
        <div><a className="primaryButton" href={APP_STORE_LINKS.press}>View on the App Store <span>↗</span></a><a className="textCta" href="mailto:weizhichao1027@gmail.com">Contact the developer <span>→</span></a></div>
      </section>

      <section className="pressFacts shell">
        <div><p className="acqEyebrow">ONE-SENTENCE DESCRIPTION</p><h2>GuitarTool is a free, ad-free iPhone and iPad practice toolkit combining a real-time tuner, advanced metronome and interactive guitar and ukulele chord libraries, with Apple Watch and Home Screen companions.</h2></div>
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
        <div><p className="acqEyebrow">PRODUCT STORY</p><h2>Less setup. More time with the instrument.</h2></div>
        <div><p>GuitarTool was created around a simple observation: the tools used before and during practice should not become another source of interruption. Tuning, timekeeping and chord lookup belong in one dependable flow, without advertising, feeds or a login wall.</p><p>The app works offline and contains no third-party SDKs. Microphone audio is used only for live pitch analysis on the device; it is not saved or uploaded. The same focus extends across iPhone, iPad, three interactive Home Screen widget sizes and an Apple Watch metronome.</p></div>
      </section>

      <section className="assetSection shell">
        <div className="assetHeading"><p className="acqEyebrow">DOWNLOADABLE ASSETS</p><h2>Ready-to-use product visuals.</h2><p>Assets may be used in editorial coverage of GuitarTool. Please do not alter the app icon or imply an endorsement.</p></div>
        <div className="assetGrid">{assets.map((asset) => <article key={asset.title}><div><Image src={assetPath(asset.preview)} alt={asset.title} width={asset.width} height={asset.height} /></div><h3>{asset.title}</h3><p>{asset.detail}</p><a href={assetPath(asset.file)} download>Download original <span>↓</span></a></article>)}</div>
      </section>

      <section className="pressLinks shell">
        <h2>Official links</h2>
        <div><a href={APP_STORE_LINKS.press}><span>App Store</span><b>Download page ↗</b></a><a href={PRIVACY_URL}><span>Privacy</span><b>Privacy policy ↗</b></a><a href={GITHUB_URL}><span>Website source</span><b>GitHub ↗</b></a><a href="mailto:weizhichao1027@gmail.com"><span>Press contact</span><b>weizhichao1027@gmail.com ↗</b></a></div>
      </section>
      <AcquisitionFooter language="en" />
    </main>
  );
}
