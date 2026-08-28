import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Support | Version 1.0.8 Help & Troubleshooting",
  description: "Support for GuitarTool 1.0.8: tuner, metronome, Flash Beat, widgets, Apple Watch and chord-card troubleshooting.",
  alternates: { canonical: absoluteUrl("/en/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool Support", description: "Troubleshooting and direct support for GuitarTool 1.0.8.", url: absoluteUrl("/en/support/"), type: "website" },
};

export default function EnglishSupportPage() { return <SupportPage language="en" />; }
