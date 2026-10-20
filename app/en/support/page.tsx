import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Support | 1.1.3 Voice, BPM & Widget Help",
  description: "GuitarTool 1.1.3 help for offline Chinese voice counting, BPM Done/Cancel, iOS 27+ portrait widgets, practice preset target recovery, Watch tuning and purchases, plus upcoming 1.1.4 analytics choices and deletion requests.",
  alternates: { canonical: absoluteUrl("/en/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool Support", description: "Get help with GuitarTool 1.1.3 voice counting, BPM input, widgets, practice presets, Watch tuning, paid themes and upcoming 1.1.4 privacy choices.", url: absoluteUrl("/en/support/"), type: "website" },
};

export default function EnglishSupportPage() { return <SupportPage language="en" />; }
