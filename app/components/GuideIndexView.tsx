import { SiteLink as Link } from "@/app/components/SiteLink";
import { AcquisitionHeader, AcquisitionFooter } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { landingPages, type LandingLanguage } from "@/app/lib/landing-pages";
import { absoluteUrl, appStoreDestinationForGuide } from "@/app/lib/site";
import { zhTroubleshootingPages } from "@/app/lib/troubleshooting-pages";

export function GuideIndexView({ language }: { language: LandingLanguage }) {
  const zh = language === "zh";
  const prefix = zh ? "/guides" : "/en/guides";
  const recent = new Set(["silent-bar-metronome", "staged-tempo-training", ...zhTroubleshootingPages.map(p => p.slug)]);
  const pages = landingPages[language];
  const groups = [
    { title: zh ? "先解决眼前的卡点" : "Start with the problem in front of you", pages: pages.filter(p => recent.has(p.slug)) },
    ...(["tuner", "metronome", "chords"] as const).map(kind => ({
      title: ({ tuner: zh ? "调音与输入检查" : "Tuning and input",
        metronome: zh ? "节拍与速度练习" : "Timing and tempo",
        chords: zh ? "和弦、指法与教学" : "Chords, voicings and teaching" })[kind],
      pages: pages.filter(p => !recent.has(p.slug) && appStoreDestinationForGuide(p.slug) === kind),
    })),
  ];
  return <main className="acqPage" lang={zh ? "zh-CN" : "en"}>
    <AcquisitionHeader language={language} />
    <JsonLd data={{
      "@context": "https://schema.org", "@type": "CollectionPage",
      name: zh ? "吉他练习指南" : "Guitar practice guides", url: absoluteUrl(prefix + "/"),
      inLanguage: zh ? "zh-CN" : "en",
      mainEntity: { "@type": "ItemList", itemListElement: pages.map((p, i) => ({
        "@type": "ListItem", position: i + 1, name: p.title, url: absoluteUrl(prefix + "/" + p.slug + "/"),
      })) },
    }} />
    <header className="acqHero shell">
      <p className="acqEyebrow">{zh ? "吉他与尤克里里练习指南" : "GUITAR & UKULELE PRACTICE GUIDES"}</p>
      <h1>{zh ? "练琴遇到的小问题，一步步解决。" : "Work through the small things that interrupt practice."}</h1>
      <p className="acqLead">{zh ? "从调音器没有读数，到换和弦总是慢一拍。先找到你的问题，再跟着步骤检查和练习。" : "From a tuner that cannot hear the string to a chord change that arrives late. Find your question, then follow a practical sequence."}</p>
      <div className="acqActions">
        <Link className="primaryButton" href={zh ? "/online-tuner/" : "/en/online-tuner/"}>{zh ? "打开在线调音器" : "Open the online tuner"}<span>→</span></Link>
        <Link className="textCta" href={zh ? "/online-metronome/" : "/en/online-metronome/"}>{zh ? "打开在线节拍器" : "Open the online metronome"}<span>→</span></Link>
      </div>
    </header>
    <div className="acqBody shell">
      {groups.map(group => <section className="relatedResources" key={group.title}>
        <h2>{group.title}</h2>
        <div>{group.pages.map(p => <Link href={prefix + "/" + p.slug + "/"} key={p.slug}>
          <span>↗</span><strong>{p.title}</strong><small>{p.description}</small>
        </Link>)}</div>
      </section>)}
    </div>
    <AcquisitionFooter language={language} />
  </main>;
}

