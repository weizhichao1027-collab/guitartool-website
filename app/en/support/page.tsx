import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Support | 1.1.4 Tuning, Themes & Purchases",
  description: "Official GuitarTool 1.1.4 help: ten themes, restore purchases, tuning, rhythm practice, voice counting, chords, iPad, Watch and widgets. Usage analytics is disabled.",
  alternates: { canonical: absoluteUrl("/en/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool Support", description: "Official GuitarTool 1.1.4 help: ten themes, restore purchases, tuning, rhythm practice, voice counting, chords, iPad, Watch and widgets. Usage analytics is disabled.", url: absoluteUrl("/en/support/"), type: "website" },
};

export default function EnglishSupportPage() { return <SupportPage language="en" />; }
