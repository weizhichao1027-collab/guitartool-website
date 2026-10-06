import type { Metadata } from "next";
import { GuideIndexView } from "@/app/components/GuideIndexView";
import { absoluteUrl } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Guitar Practice Guides: Tuning, Timing and Chord Changes | GuitarTool",
  description: "Find practical help with unstable tuner readings, playing to a metronome and smoother chord changes, plus tunings, time signatures and chord cards.",
  alternates: { canonical: absoluteUrl("/en/guides/"), languages: { "zh-CN": absoluteUrl("/guides/"), en: absoluteUrl("/en/guides/"), "x-default": absoluteUrl("/en/guides/") } },
};
export default function Page() { return <GuideIndexView language="en" />; }

