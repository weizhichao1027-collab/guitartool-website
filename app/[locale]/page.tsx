import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { getLocalePage, localePages } from "@/app/lib/locales";
import { APP_STORE_URL, absoluteUrl, assetPath, localeAlternates } from "@/app/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return localePages.map(({ slug }) => ({ locale: slug })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const page = getLocalePage(locale);
  if (!page) return {};
  const canonical = absoluteUrl(`/${locale}/`);
  return { title: page.title, description: page.description, alternates: { canonical, languages: localeAlternates }, openGraph: { title: page.title, description: page.description, url: canonical, type: "website" } };
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const page = getLocalePage(locale);
  if (!page) notFound();
  const canonical = absoluteUrl(`/${locale}/`);
  return (
    <main className="acqPage localePage" lang={page.htmlLang} dir={page.dir}>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "GuitarTool", description: page.description, url: canonical, downloadUrl: APP_STORE_URL, applicationCategory: "MusicApplication", operatingSystem: "iOS, iPadOS, watchOS", inLanguage: page.htmlLang, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }} />
      <AcquisitionHeader language="other" />
      <section className="localeHero shell">
        <div>
          <p className="acqEyebrow">{page.eyebrow}</p>
          <h1>{page.headline}</h1>
          <p>{page.lead}</p>
          <a className="primaryButton" href={APP_STORE_URL}>{page.download}<span>↗</span></a>
          <div className="localeTrust">{page.trust.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="localeVisual"><Image src={assetPath("/en-devices.png")} alt="GuitarTool on iPhone, iPad and Apple Watch" width={833} height={1800} priority /></div>
      </section>
      <section className="localeFeatures shell">{page.features.map((feature, index) => <article key={feature.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{feature.title}</h2><p>{feature.body}</p></article>)}</section>
      <section className="localeClosing shell"><Image src={assetPath("/app-icon.png")} alt="GuitarTool" width={92} height={92} /><h2>{page.closing}</h2><a className="primaryButton coral" href={APP_STORE_URL}>{page.download}<span>↗</span></a></section>
      <nav className="languageDirectory shell" aria-label="Languages"><Link href="/">简体中文</Link><Link href="/en/">English</Link>{localePages.map((item) => <Link className={item.slug === locale ? "active" : ""} href={`/${item.slug}/`} key={item.slug}>{item.htmlLang}</Link>)}</nav>
      <AcquisitionFooter language="en" />
    </main>
  );
}
