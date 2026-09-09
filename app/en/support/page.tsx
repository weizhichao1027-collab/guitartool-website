import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Support | Version 1.1.0 Theme Preview",
  description: "All GuitarTool practice features are free. Preview help for version 1.1.0 optional theme purchases and restores, tuner, metronome, widgets, Apple Watch and chord cards.",
  alternates: { canonical: absoluteUrl("/en/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool Support", description: "Preview theme purchase, restore and troubleshooting help for the upcoming GuitarTool 1.1.0.", url: absoluteUrl("/en/support/"), type: "website" },
};

export default function EnglishSupportPage() { return <SupportPage language="en" />; }
