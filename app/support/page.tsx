import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool 技术支持｜1.1.2 节奏训练、主题与使用帮助",
  description: "GuitarTool 1.1.2 技术支持：静音小节与分段训练设置、玄玉声场购买恢复、Apple Watch 调音权限、Widget 同步与音频排障。",
  alternates: { canonical: absoluteUrl("/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool 技术支持", description: "查看 GuitarTool 1.1.2 Apple Watch 调音、节拍器、小组件与购买帮助。", url: absoluteUrl("/support/"), type: "website" },
};

export default function ChineseSupportPage() { return <SupportPage language="zh" />; }
