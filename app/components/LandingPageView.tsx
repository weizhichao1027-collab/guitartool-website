import Link from "next/link";
import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { LandingLanguage, LandingPage, getLandingPage } from "@/app/lib/landing-pages";
import { APP_STORE_URL, APP_NAME, absoluteUrl } from "@/app/lib/site";

export function LandingPageView({ page, language }: { page: LandingPage; language: LandingLanguage }) {
  const isZh = language === "zh";
  const prefix = isZh ? "/guides" : "/en/guides";
  const canonical = absoluteUrl(`${prefix}/${page.slug}/`);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: canonical,
      inLanguage: isZh ? "zh-CN" : "en",
      isPartOf: { "@type": "WebSite", name: APP_NAME, url: absoluteUrl("/") },
      about: { "@type": "SoftwareApplication", name: APP_NAME, operatingSystem: "iOS, iPadOS, watchOS", url: APP_STORE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isZh ? "GuitarTool 首页" : "GuitarTool home", item: absoluteUrl(isZh ? "/" : "/en/") },
        { "@type": "ListItem", position: 2, name: page.title, item: canonical },
      ],
    },
  ];

  return (
    <main className="acqPage" lang={isZh ? "zh-CN" : "en"}>
      <JsonLd data={structuredData} />
      <AcquisitionHeader language={language} />
      <article>
        <header className="acqHero shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href={isZh ? "/" : "/en/"}>{isZh ? "首页" : "Home"}</Link>
            <span>/</span>
            <span>{isZh ? "练习指南" : "Practice guides"}</span>
          </nav>
          <p className="acqEyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="acqLead">{page.lead}</p>
          <div className="acqActions">
            {page.slug === "online-metronome" ? (
              <Link className="primaryButton" href={isZh ? "/online-metronome/" : "/en/online-metronome/"}>
                {isZh ? "打开在线节拍器" : "Open the online metronome"}<span>→</span>
              </Link>
            ) : null}
            <a className={page.slug === "online-metronome" ? "textCta" : "primaryButton"} href={APP_STORE_URL}>
              {isZh ? "在 App Store 免费下载" : "Download free on the App Store"}<span>↗</span>
            </a>
          </div>
          <ul className="proofStrip">
            {page.proof.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </header>

        <div className="acqBody shell">
          {page.sections.map((section, index) => (
            <section className="contentBlock" key={section.title}>
              <span className="contentIndex">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </section>
          ))}

          <section className="resourceCta">
            <p>{isZh ? "一个 APP，覆盖整段练习流程" : "One app for the full practice flow"}</p>
            <h2>{isZh ? "先调准，再跟拍，然后找到下一个和弦。" : "Tune first. Keep time. Find the next chord."}</h2>
            <a className="primaryButton coral" href={APP_STORE_URL}>{isZh ? "免费下载 GuitarTool" : "Download GuitarTool free"}<span>↗</span></a>
          </section>

          <section className="acqFaq">
            <div><p className="acqEyebrow">FAQ</p><h2>{isZh ? "常见问题" : "Common questions"}</h2></div>
            <div className="faqList">
              {page.faq.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>＋</b></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="relatedResources">
            <p className="acqEyebrow">{isZh ? "继续了解" : "KEEP EXPLORING"}</p>
            <div>
              {page.related.map((slug) => {
                const related = getLandingPage(language, slug);
                return related ? <Link key={slug} href={`${prefix}/${slug}/`}><span>↗</span><strong>{related.title}</strong><small>{related.description}</small></Link> : null;
              })}
            </div>
          </section>
        </div>
      </article>
      <AcquisitionFooter language={language} />
    </main>
  );
}
