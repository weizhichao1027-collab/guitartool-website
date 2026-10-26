import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool 技术支持｜1.1.4 调音、主题与恢复购买",
  description: "GuitarTool 1.1.4 官方支持：十款主题与恢复购买、调音故障、节拍训练、人声数拍、和弦分享、iPad、Apple Watch 和小组件帮助。本版已停用使用分析。",
  alternates: { canonical: absoluteUrl("/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool 技术支持", description: "GuitarTool 1.1.4 官方支持：十款主题与恢复购买、调音故障、节拍训练、人声数拍、和弦分享、iPad、Apple Watch 和小组件帮助。本版已停用使用分析。", url: absoluteUrl("/support/"), type: "website" },
};

export default function ChineseSupportPage() { return <SupportPage language="zh" />; }
