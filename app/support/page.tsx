import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool 技术支持｜1.1.5 安装、主题与恢复购买",
  description: "GuitarTool 官方支持：App Store 1.1.5 与 Google Play 1.1.4 的安装、无账户、一次性主题、恢复购买、调音、节拍和小组件。使用分析保持关闭。",
  alternates: { canonical: absoluteUrl("/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool 技术支持", description: "GuitarTool 官方支持：App Store 1.1.5 与 Google Play 1.1.4 的安装、无账户、一次性主题、恢复购买、调音、节拍和小组件。使用分析保持关闭。", url: absoluteUrl("/support/"), type: "website" },
};

export default function ChineseSupportPage() { return <SupportPage language="zh" />; }
