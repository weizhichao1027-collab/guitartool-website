import type { Metadata } from "next";
import Image from "next/image";
import { SiteLink as Link } from "@/app/components/SiteLink";
import { notFound } from "next/navigation";
import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { getLocalePage, localePages } from "@/app/lib/locales";
import { APP_STORE_LINKS, APP_STORE_URL, absoluteUrl, assetPath, localeAlternates } from "@/app/lib/site";
import { getTunerLocale } from "@/app/lib/tuner-locales";

const chordCardPreviewByLocale: Record<string, string> = {
  "zh-hant": "/zh-hant-chord-card-share.webp",
  es: "/es-chord-card-share.webp",
  "pt-br": "/pt-br-chord-card-share.webp",
  fr: "/fr-chord-card-share.webp",
  de: "/de-chord-card-share.webp",
  it: "/it-chord-card-share.webp",
  ja: "/ja-chord-card-share.webp",
  ko: "/ko-chord-card-share.webp",
  ru: "/ru-chord-card-share.webp",
  tr: "/tr-chord-card-share.webp",
  ar: "/ar-chord-card-share.webp",
};

export const dynamicParams = false;
export function generateStaticParams() { return localePages.map(({ slug }) => ({ locale: slug })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const page = getLocalePage(locale);
  if (!page) return {};
  const canonical = absoluteUrl(`/${locale}/`);
  const previewImage = chordCardPreviewByLocale[locale] ?? "/en-chord-card-share.webp";
  const previewAlt = `${page.features.at(-1)?.title ?? "GuitarTool"} · GuitarTool 1.0.7`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical, languages: localeAlternates },
    openGraph: { title: page.title, description: page.description, url: canonical, type: "website", images: [{ url: absoluteUrl(previewImage), width: 833, height: 1800, alt: previewAlt }] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [absoluteUrl(previewImage)] },
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const page = getLocalePage(locale);
  if (!page) notFound();
  const tunerCopy = getTunerLocale(locale)!;
  const canonical = absoluteUrl(`/${locale}/`);
  const previewImage = chordCardPreviewByLocale[locale] ?? "/en-chord-card-share.webp";
  return (
    <main className="acqPage localePage" lang={page.htmlLang} dir={page.dir}>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "GuitarTool", description: page.description, url: canonical, downloadUrl: APP_STORE_URL, applicationCategory: "MusicApplication", operatingSystem: "iOS, iPadOS, watchOS", inLanguage: page.htmlLang, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }} />
      <AcquisitionHeader language="other" />
      <section className="localeHero shell">
        <div>
          <p className="acqEyebrow">{page.eyebrow}</p>
          <h1>{page.headline}</h1>
          <p>{page.lead}</p>
          <a className="primaryButton" href={APP_STORE_LINKS.home}>{page.download}<span>↗</span></a>
          <div className="localeTrust">{page.trust.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="localeVisual"><Image src={assetPath(previewImage)} alt={`${page.features.at(-1)?.title ?? "GuitarTool"} · GuitarTool 1.0.7`} width={833} height={1800} priority /></div>
      </section>
      <section className="localizedToolCta shell">
        <p className="acqEyebrow">{tunerCopy.eyebrow}</p>
        <h2>{tunerCopy.title.split("|")[0].split("｜")[0]}</h2>
        <p>{tunerCopy.lead}</p>
        <Link className="primaryButton" href={`/${locale}/online-tuner/`}>{tunerCopy.start}<span>→</span></Link>
      </section>
      <section className="localeFeatures shell">{page.features.map((feature, index) => <article key={feature.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{feature.title}</h2><p>{feature.body}</p></article>)}</section>
      <section className="localeClosing shell"><Image src={assetPath("/app-icon.png")} alt="GuitarTool" width={92} height={92} /><h2>{page.closing}</h2><a className="primaryButton coral" href={APP_STORE_LINKS.home}>{page.download}<span>↗</span></a></section>
      <nav className="languageDirectory shell" aria-label="Languages"><Link href="/">简体中文</Link><Link href="/en/">English</Link>{localePages.map((item) => <Link className={item.slug === locale ? "active" : ""} href={`/${item.slug}/`} key={item.slug}>{item.htmlLang}</Link>)}</nav>
      <AcquisitionFooter language="en" />
    </main>
  );
}
