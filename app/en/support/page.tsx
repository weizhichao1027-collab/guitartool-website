import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Support | Version 1.1.2 Training & Theme Help",
  description: "GuitarTool 1.1.2 help for silent bars, staged tempo training, Jade Resonance purchase restores, Watch microphone permission, widgets and audio troubleshooting.",
  alternates: { canonical: absoluteUrl("/en/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool Support", description: "Get help with GuitarTool 1.1.2 Apple Watch tuning, widgets, audio and paid themes.", url: absoluteUrl("/en/support/"), type: "website" },
};

export default function EnglishSupportPage() { return <SupportPage language="en" />; }
