import type { MetadataRoute } from "next";
import { landingPages } from "@/app/lib/landing-pages";
import { localePages } from "@/app/lib/locales";
import { popularChords, routeForChord } from "@/app/lib/chords";
import { absoluteUrl } from "@/app/lib/site";
import { tunerLocales, tunerPath } from "@/app/lib/tuner-locales";
import { TROUBLESHOOTING_UPDATED, zhTroubleshootingPages } from "@/app/lib/troubleshooting-pages";

export const dynamic = "force-static";

const lastModified = new Date("2026-08-28T00:00:00Z");
const themeReleasePublished = new Date("2026-09-25T16:00:00Z");
const releasePublished = new Date("2026-09-27T23:40:00Z");
const homepageUpdated = new Date("2026-09-28T01:50:00Z");
const guidesUpdated = new Date(TROUBLESHOOTING_UPDATED);
const newGuides = new Set(zhTroubleshootingPages.map(page => page.slug));

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    ["/", 1, "weekly"], ["/en/", 1, "weekly"],
    ["/online-metronome/", 0.9, "weekly"], ["/en/online-metronome/", 0.9, "weekly"],
    ["/chords/guitar/", 0.9, "weekly"], ["/chords/ukulele/", 0.9, "weekly"],
    ["/press/", 0.6, "monthly"],
    ["/guides/", 0.85, "monthly"], ["/en/guides/", 0.85, "monthly"],
    ["/support/", 0.7, "monthly"], ["/en/support/", 0.7, "monthly"],
  ] as const;
  const releasePages = new Set(["/", "/en/", "/press/", "/support/", "/en/support/"]);
  const entries: MetadataRoute.Sitemap = core.map(([path, priority, changeFrequency]) => ({ url: absoluteUrl(path), lastModified: path === "/guides/" || path === "/en/guides/" ? guidesUpdated : path === "/" || path === "/en/" ? homepageUpdated : releasePages.has(path) ? releasePublished : lastModified, changeFrequency, priority }));

  for (const page of localePages) entries.push({ url: absoluteUrl(`/${page.slug}/`), lastModified: releasePublished, changeFrequency: "monthly", priority: 0.8 });
  for (const locale of tunerLocales) entries.push({ url: absoluteUrl(tunerPath(locale.slug)), lastModified, changeFrequency: "monthly", priority: 0.9 });
  for (const page of landingPages.zh) entries.push({ url: absoluteUrl(`/guides/${page.slug}/`), lastModified: newGuides.has(page.slug) ? guidesUpdated : page.slug === "apple-watch-tuner" ? releasePublished : page.slug === "visual-metronome" ? themeReleasePublished : lastModified, changeFrequency: "monthly", priority: 0.85 });
  for (const page of landingPages.en) entries.push({ url: absoluteUrl(`/en/guides/${page.slug}/`), lastModified: newGuides.has(page.slug) ? guidesUpdated : page.slug === "apple-watch-tuner" ? releasePublished : page.slug === "visual-metronome" ? themeReleasePublished : lastModified, changeFrequency: "monthly", priority: 0.85 });
  for (const instrument of ["guitar", "ukulele"] as const) {
    for (const chord of popularChords[instrument]) entries.push({ url: absoluteUrl(routeForChord(instrument, chord.slug)), lastModified, changeFrequency: "monthly", priority: 0.75 });
  }
  return entries;
}
