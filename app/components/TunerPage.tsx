import Link from "next/link";
import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { TunerTool } from "@/app/components/TunerTool";
import { APP_STORE_LINKS, absoluteUrl } from "@/app/lib/site";
import { TunerLocale, tunerPath } from "@/app/lib/tuner-locales";

export function TunerPage({ copy }: { copy: TunerLocale }) {
  const canonical = absoluteUrl(tunerPath(copy.slug));
  const headerLanguage = copy.slug === "zh" ? "zh" : copy.slug === "en" ? "en" : "other";
  const home = copy.slug === "zh" ? "/" : copy.slug === "en" ? "/en/" : `/${copy.slug}/`;
  return (
    <main className="acqPage tunerPage" lang={copy.htmlLang} dir={copy.dir}>
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "WebApplication", name: copy.title, description: copy.description, url: canonical, applicationCategory: "MusicApplication", operatingSystem: "Any modern browser", browserRequirements: "Microphone access", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "GuitarTool", item: absoluteUrl(home) },
          { "@type": "ListItem", position: 2, name: copy.title, item: canonical },
        ] },
      ]} />
      <AcquisitionHeader language={headerLanguage} />
      <section className="tunerHero shell">
        <div className="toolIntro">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href={home}>GuitarTool</Link><span>/</span><span>{copy.eyebrow}</span></nav>
          <p className="acqEyebrow">{copy.eyebrow}</p>
          <h1>{copy.title.split("|")[0].split("｜")[0]}</h1>
          <p>{copy.lead}</p>
          <div className="toolProof"><span>440 Hz</span><span>±50 cents</span><span>{copy.privacy}</span></div>
        </div>
        <TunerTool copy={copy} />
      </section>
      <section className="tunerGuide shell">
        <div><p className="acqEyebrow">01 · PITCH</p><h2>{copy.guideTitle}</h2></div>
        <ol>{copy.tips.map((tip, index) => <li key={tip}><span>{String(index + 1).padStart(2, "0")}</span><p>{tip}</p></li>)}</ol>
      </section>
      <section className="resourceCta shell tunerDownload">
        <p>GuitarTool · iPhone · iPad</p>
        <h2>{copy.download}</h2>
        <a className="primaryButton coral" href={APP_STORE_LINKS.tuner}>{copy.download}<span>↗</span></a>
      </section>
      <AcquisitionFooter language={headerLanguage} />
    </main>
  );
}
