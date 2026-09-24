import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool 技术支持｜1.1.0 免费主题与使用帮助",
  description: "GuitarTool 1.1.0 将五套完整主题内置并免费开放；查看离线主题、调音器、节拍器、Widget、Apple Watch 与和弦卡片帮助。",
  alternates: { canonical: absoluteUrl("/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool 技术支持", description: "查看即将推出的 GuitarTool 1.1.0 免费主题与常见问题。", url: absoluteUrl("/support/"), type: "website" },
};

export default function ChineseSupportPage() { return <SupportPage language="zh" />; }
