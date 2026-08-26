import type { Metadata } from "next";
import { TunerPage } from "@/app/components/TunerPage";
import { absoluteUrl } from "@/app/lib/site";
import { getTunerLocale, tunerLocales, tunerPath } from "@/app/lib/tuner-locales";

const copy = getTunerLocale("en")!;
const languages = Object.fromEntries(tunerLocales.map((item) => [item.htmlLang, absoluteUrl(tunerPath(item.slug))]));

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  alternates: { canonical: absoluteUrl(tunerPath(copy.slug)), languages: { ...languages, "x-default": absoluteUrl(tunerPath("en")) } },
  openGraph: { title: copy.title, description: copy.description, url: absoluteUrl(tunerPath(copy.slug)), type: "website" },
};

export default function EnglishOnlineTuner() { return <TunerPage copy={copy} />; }
