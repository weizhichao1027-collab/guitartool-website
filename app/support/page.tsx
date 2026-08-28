import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool 技术支持｜使用帮助与常见问题",
  description: "GuitarTool 技术支持：调音器、节拍器、Widget、Apple Watch 与和弦卡片常见问题。",
  alternates: { canonical: absoluteUrl("/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool 技术支持", description: "查看 GuitarTool 常见问题与联系入口。", url: absoluteUrl("/support/"), type: "website" },
};

export default function ChineseSupportPage() { return <SupportPage language="zh" />; }
