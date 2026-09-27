import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool 技术支持｜1.1.1 Watch 调音与使用帮助",
  description: "GuitarTool 1.1.1 技术支持：Apple Watch 调音器启停与权限、读数保留、屏幕常亮、大号 Widget 细分节奏、主题恢复购买和音频排障。",
  alternates: { canonical: absoluteUrl("/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool 技术支持", description: "查看 GuitarTool 1.1.1 Apple Watch 调音、节拍器、小组件与购买帮助。", url: absoluteUrl("/support/"), type: "website" },
};

export default function ChineseSupportPage() { return <SupportPage language="zh" />; }
