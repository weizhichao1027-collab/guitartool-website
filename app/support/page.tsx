import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool 技术支持｜1.0.12 主题购买与使用预览",
  description: "即将推出的 GuitarTool 1.0.12 技术支持：付费主题购买与恢复、调音器、节拍器、Widget、Apple Watch 与和弦卡片常见问题。",
  alternates: { canonical: absoluteUrl("/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool 技术支持", description: "预览即将推出的 GuitarTool 1.0.12 主题购买、恢复与常见问题。", url: absoluteUrl("/support/"), type: "website" },
};

export default function ChineseSupportPage() { return <SupportPage language="zh" />; }
