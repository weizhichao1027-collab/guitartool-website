import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { MetronomeTool } from "@/app/components/MetronomeTool";
import { APP_STORE_URL, absoluteUrl } from "@/app/lib/site";

export function MetronomePage({ language }: { language: "zh" | "en" }) {
  const isZh = language === "zh";
  const canonical = absoluteUrl(isZh ? "/online-metronome/" : "/en/online-metronome/");
  const copy = isZh ? {
    start: "开始", stop: "停止", tempo: "速度", beats: "每小节拍数", tap: "TAP 测速", slower: "降低速度", faster: "提高速度",
    hint: "第一次点击开始时，浏览器会启用本地音频。离开页面后声音会自动停止。",
  } : {
    start: "Start", stop: "Stop", tempo: "Tempo", beats: "Beats per bar", tap: "Tap tempo", slower: "Decrease tempo", faster: "Increase tempo",
    hint: "Your browser enables local audio when you press Start. Playback stops automatically when you leave the page.",
  };
  const faq = isZh ? [
    ["支持多大的速度范围？", "20–500 BPM，覆盖慢速基本功、常规歌曲和高速训练。"],
    ["为什么第一拍声音不同？", "每小节第一拍使用更高的声音，帮助辨认小节起点。"],
    ["怎样使用 TAP 测速？", "按照听到或想到的节奏连续点击 TAP，工具会根据最近几次间隔计算 BPM。"],
  ] : [
    ["What tempo range is available?", "20–500 BPM, covering slow technique work, everyday repertoire and high-speed practice."],
    ["Why does the first beat sound different?", "The first beat uses a higher accent so the start of each bar is easy to recognize."],
    ["How do I use tap tempo?", "Tap repeatedly with the pulse you hear or imagine. The tool averages the latest intervals into a BPM value."],
  ];

  return (
    <main className="acqPage metronomePage" lang={isZh ? "zh-CN" : "en"}>
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "WebApplication", name: isZh ? "GuitarTool 在线节拍器" : "GuitarTool Online Metronome", url: canonical, applicationCategory: "MusicApplication", operatingSystem: "Any modern browser", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      ]} />
      <AcquisitionHeader language={language} />
      <section className="toolHero shell">
        <div className="toolIntro">
          <p className="acqEyebrow">{isZh ? "免费在线节拍器" : "FREE ONLINE METRONOME"}</p>
          <h1>{isZh ? "先稳住这一拍。" : "Hold the pulse."}</h1>
          <p>{isZh ? "20–500 BPM、1–12 拍与 TAP 测速。无需登录，打开即可练。" : "20–500 BPM, one to twelve beats per bar and tap tempo. No sign-in—just press Start."}</p>
          <div className="toolProof"><span>20–500 BPM</span><span>{isZh ? "本地音频" : "Local audio"}</span><span>{isZh ? "无需账户" : "No account"}</span></div>
        </div>
        <MetronomeTool copy={copy} />
      </section>
      <section className="toolDetails shell">
        <div><p className="acqEyebrow">{isZh ? "更完整的练习" : "GO FURTHER IN THE APP"}</p><h2>{isZh ? "节拍，不只是滴答声。" : "A metronome can be more than a click."}</h2></div>
        <div>
          <p>{isZh ? "GuitarTool APP 增加四种细分、八分 Swing、逐拍重音、十套声音、自定义预设、倒计时与渐进加速，并可在主屏幕小组件和 Apple Watch 上直接控制。" : "The GuitarTool app adds four subdivisions, eighth-note swing, per-beat accents, ten sounds, custom presets, timers and progressive tempo training—with direct control from Home Screen widgets and Apple Watch."}</p>
          <a className="primaryButton coral" href={APP_STORE_URL}>{isZh ? "免费下载完整 APP" : "Download the full app free"}<span>↗</span></a>
        </div>
      </section>
      <section className="acqFaq shell">
        <div><p className="acqEyebrow">FAQ</p><h2>{isZh ? "使用说明" : "How it works"}</h2></div>
        <div className="faqList">{faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>＋</b></summary><p>{answer}</p></details>)}</div>
      </section>
      <AcquisitionFooter language={language} />
    </main>
  );
}
