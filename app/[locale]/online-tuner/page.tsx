import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TunerPage } from "@/app/components/TunerPage";
import { absoluteUrl } from "@/app/lib/site";
import { getTunerLocale, tunerLocales, tunerPath } from "@/app/lib/tuner-locales";

export const dynamicParams = false;
export function generateStaticParams() { return tunerLocales.filter(({ slug }) => slug !== "zh" && slug !== "en").map(({ slug }) => ({ locale: slug })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = getTunerLocale(locale);
  if (!copy) return {};
  const languages = Object.fromEntries(tunerLocales.map((item) => [item.htmlLang, absoluteUrl(tunerPath(item.slug))]));
  const canonical = absoluteUrl(tunerPath(locale));
  return { title: copy.title, description: copy.description, alternates: { canonical, languages: { ...languages, "x-default": absoluteUrl(tunerPath("en")) } }, openGraph: { title: copy.title, description: copy.description, url: canonical, type: "website" } };
}

export default async function LocalizedOnlineTuner({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getTunerLocale(locale);
  if (!copy || locale === "zh" || locale === "en") notFound();
  return <TunerPage copy={copy} />;
}
