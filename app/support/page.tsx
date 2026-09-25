import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool 技术支持｜1.1.0 使用与购买帮助",
  description: "GuitarTool 1.1.0 技术支持：六套独立付费主题的购买与恢复、调音器、节拍器、Widget、Apple Watch 和和弦卡片排障。",
  alternates: { canonical: absoluteUrl("/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool 技术支持", description: "查看 GuitarTool 1.1.0 六套主题与常见问题。", url: absoluteUrl("/support/"), type: "website" },
};

export default function ChineseSupportPage() { return <SupportPage language="zh" />; }
