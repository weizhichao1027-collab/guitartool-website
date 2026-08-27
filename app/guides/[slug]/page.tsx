import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPageView } from "@/app/components/LandingPageView";
import { getLandingPage, landingPages } from "@/app/lib/landing-pages";
import { absoluteUrl } from "@/app/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.zh.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage("zh", slug);
  if (!page) return {};
  const canonical = absoluteUrl(`/guides/${slug}/`);
  return {
    title: `${page.title}｜GuitarTool`,
    description: page.description,
    alternates: {
      canonical,
      languages: { "zh-CN": canonical, en: absoluteUrl(`/en/guides/${slug}/`), "x-default": absoluteUrl(`/en/guides/${slug}/`) },
    },
    openGraph: { title: page.title, description: page.description, url: canonical, type: "website", images: page.showcase ? [{ url: absoluteUrl(page.showcase.image), width: 833, height: 1800, alt: page.showcase.alt }] : [] },
    twitter: { card: page.showcase ? "summary_large_image" : "summary", title: page.title, description: page.description, images: page.showcase ? [absoluteUrl(page.showcase.image)] : [] },
  };
}

export default async function ChineseGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLandingPage("zh", slug);
  if (!page) notFound();
  return <LandingPageView page={page} language="zh" />;
}
