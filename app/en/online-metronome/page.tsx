import type { Metadata } from "next";
import { MetronomePage } from "@/app/components/MetronomePage";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Free Online Metronome | 20–500 BPM | GuitarTool",
  description: "A free online metronome with 20–500 BPM, one to twelve beats per bar and tap tempo. Local browser audio, no sign-in required.",
  alternates: { canonical: absoluteUrl("/en/online-metronome/"), languages: { en: absoluteUrl("/en/online-metronome/"), "zh-CN": absoluteUrl("/online-metronome/"), "x-default": absoluteUrl("/en/online-metronome/") } },
  openGraph: { title: "Free Online Metronome | 20–500 BPM", description: "Tap tempo, one to twelve beats per bar and local browser audio—no sign-in required.", url: absoluteUrl("/en/online-metronome/"), type: "website" },
};

export default function EnglishOnlineMetronome() { return <MetronomePage language="en" />; }
