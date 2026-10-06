import type { Metadata } from "next";
import { GuideIndexView } from "@/app/components/GuideIndexView";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "吉他练习指南：调音排障、节拍器与和弦转换｜GuitarTool",
  description: "按具体问题查找吉他与尤克里里练习方法：调音器读数不稳、跟不上节拍器、和弦转换停顿，以及标准调弦、拍号和和弦卡片。",
  alternates: { canonical: absoluteUrl("/guides/"), languages: { "zh-CN": absoluteUrl("/guides/"), en: absoluteUrl("/en/guides/"), "x-default": absoluteUrl("/en/guides/") } },
};
export default function Page() { return <GuideIndexView language="zh" />; }

