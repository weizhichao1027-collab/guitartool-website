import type { Metadata } from "next";
import { SupportPage } from "@/app/components/SupportPage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "GuitarTool Support | Install 1.1.5, themes and restore purchases",
  description: "Official GuitarTool help for App Store 1.1.5 and Google Play 1.1.4: install, no account, one-time themes, restore purchases, tuning, rhythm and widgets. Usage analytics stays disabled.",
  alternates: { canonical: absoluteUrl("/en/support/"), languages: { "zh-CN": absoluteUrl("/support/"), en: absoluteUrl("/en/support/"), "x-default": absoluteUrl("/en/support/") } },
  openGraph: { title: "GuitarTool Support", description: "Official GuitarTool help for App Store 1.1.5 and Google Play 1.1.4: install, no account, one-time themes, restore purchases, tuning, rhythm and widgets. Usage analytics stays disabled.", url: absoluteUrl("/en/support/"), type: "website" },
};

export default function EnglishSupportPage() { return <SupportPage language="en" />; }
