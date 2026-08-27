import Image from "next/image";
import { SiteLink as Link } from "@/app/components/SiteLink";
import { APP_STORE_LINKS, GITHUB_URL, PRIVACY_URL, assetPath } from "@/app/lib/site";

type Language = "zh" | "en" | "other";

export function AcquisitionHeader({ language = "en" }: { language?: Language }) {
  const home = language === "zh" ? "/" : "/en/";
  const labels = language === "zh"
    ? { tools: "练习工具", chords: "热门和弦", press: "媒体资料", download: "下载" }
    : { tools: "Practice tools", chords: "Popular chords", press: "Press kit", download: "Download" };

  return (
    <header className="acqHeader shell">
      <Link className="brand" href={home} aria-label="GuitarTool home">
        <Image src={assetPath("/app-icon.png")} alt="" width={42} height={42} priority />
        <span>GuitarTool</span>
      </Link>
      <nav aria-label="Resource navigation">
        <Link href={language === "zh" ? "/guides/guitar-tuner/" : "/en/guides/guitar-tuner/"}>{labels.tools}</Link>
        <Link href="/chords/guitar/">{labels.chords}</Link>
        <Link href="/press/">{labels.press}</Link>
        <a className="acqDownload" href={APP_STORE_LINKS.navigation}>{labels.download}</a>
      </nav>
    </header>
  );
}

export function AcquisitionFooter({ language = "en" }: { language?: Language }) {
  const copy = language === "zh"
    ? "完全离线 · 无广告 · 无需账户"
    : "Fully offline · No ads · No account";
  return (
    <footer className="acqFooter shell">
      <p>© 2026 Zhichao Wei · {copy}</p>
      <div>
        <a href={PRIVACY_URL}>{language === "zh" ? "隐私政策" : "Privacy"}</a>
        <a href="mailto:weizhichao1027@gmail.com">{language === "zh" ? "联系" : "Contact"}</a>
        <a href={GITHUB_URL}>GitHub</a>
      </div>
    </footer>
  );
}
