import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool 技术支持｜1.1.3 人声数拍、BPM 与小组件帮助",
  description: "GuitarTool 1.1.3 技术支持：离线中文人声数拍、BPM 完成与取消、iOS 27+ 超大竖排小组件、练习预设目标恢复、Watch 调音与购买恢复。",
  alternates: { canonical: absoluteUrl("/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool 技术支持", description: "查看 GuitarTool 1.1.3 人声数拍、BPM 输入、小组件、练习预设、Apple Watch 调音与购买帮助。", url: absoluteUrl("/support/"), type: "website" },
};

export default function ChineseSupportPage() { return <SupportPage language="zh" />; }
