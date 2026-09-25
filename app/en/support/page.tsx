import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Support | Version 1.1.0 Help",
  description: "GuitarTool 1.1.0 support: buying and restoring six separately purchased themes, tuning, metronome, widgets, Apple Watch and chord cards.",
  alternates: { canonical: absoluteUrl("/en/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool Support", description: "Get help with basic and paid offline themes and GuitarTool 1.1.0 features.", url: absoluteUrl("/en/support/"), type: "website" },
};

export default function EnglishSupportPage() { return <SupportPage language="en" />; }
