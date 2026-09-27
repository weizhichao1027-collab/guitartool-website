import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Support | Version 1.1.1 Watch Tuner Help",
  description: "GuitarTool 1.1.1 help for Apple Watch tuner controls and microphone permission, stable pitch readings, screen wake, large-widget subdivisions, purchases and audio.",
  alternates: { canonical: absoluteUrl("/en/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool Support", description: "Get help with GuitarTool 1.1.1 Apple Watch tuning, widgets, audio and paid themes.", url: absoluteUrl("/en/support/"), type: "website" },
};

export default function EnglishSupportPage() { return <SupportPage language="en" />; }
