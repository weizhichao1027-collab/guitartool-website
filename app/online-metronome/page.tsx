import type { Metadata } from "next";
import { MetronomePage } from "@/app/components/MetronomePage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "免费在线节拍器｜20–500 BPM｜GuitarTool",
  description: "无需登录的免费在线节拍器，支持 20–500 BPM、1–12 拍和 TAP 测速。浏览器本地发声，打开即可练习。",
  alternates: { canonical: absoluteUrl("/online-metronome/"), languages: { "zh-CN": absoluteUrl("/online-metronome/"), en: absoluteUrl("/en/online-metronome/"), "x-default": absoluteUrl("/en/online-metronome/") } },
  openGraph: { title: "免费在线节拍器｜20–500 BPM", description: "无需登录，支持 TAP 测速与 1–12 拍。", url: absoluteUrl("/online-metronome/"), type: "website" },
};

export default function ChineseOnlineMetronome() { return <MetronomePage language="zh" />; }
