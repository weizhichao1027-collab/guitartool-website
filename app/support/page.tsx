import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool 技术支持｜1.1.0 主题购买与使用预览",
  description: "GuitarTool 的全部练习功能均免费；查看即将推出的 1.1.0 可选付费主题购买与恢复，以及调音器、节拍器、Widget、Apple Watch 与和弦卡片帮助。",
  alternates: { canonical: absoluteUrl("/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool 技术支持", description: "预览即将推出的 GuitarTool 1.1.0 主题购买、恢复与常见问题。", url: absoluteUrl("/support/"), type: "website" },
};

export default function ChineseSupportPage() { return <SupportPage language="zh" />; }
