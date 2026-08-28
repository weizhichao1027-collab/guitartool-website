import type { MetadataRoute } from "next";
import { landingPages } from "@/app/lib/landing-pages";
import { localePages } from "@/app/lib/locales";
import { popularChords, routeForChord } from "@/app/lib/chords";
import { absoluteUrl } from "@/app/lib/site";
import { tunerLocales, tunerPath } from "@/app/lib/tuner-locales";

export const dynamic = "force-static";

const lastModified = new Date("2026-08-28T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    ["/", 1, "weekly"], ["/en/", 1, "weekly"],
    ["/online-metronome/", 0.9, "weekly"], ["/en/online-metronome/", 0.9, "weekly"],
    ["/chords/guitar/", 0.9, "weekly"], ["/chords/ukulele/", 0.9, "weekly"],
    ["/press/", 0.6, "monthly"],
    ["/support/", 0.7, "monthly"], ["/en/support/", 0.7, "monthly"],
  ] as const;
  const entries: MetadataRoute.Sitemap = core.map(([path, priority, changeFrequency]) => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority }));

  for (const page of localePages) entries.push({ url: absoluteUrl(`/${page.slug}/`), lastModified, changeFrequency: "monthly", priority: 0.8 });
  for (const locale of tunerLocales) entries.push({ url: absoluteUrl(tunerPath(locale.slug)), lastModified, changeFrequency: "monthly", priority: 0.9 });
  for (const page of landingPages.zh) entries.push({ url: absoluteUrl(`/guides/${page.slug}/`), lastModified, changeFrequency: "monthly", priority: 0.85 });
  for (const page of landingPages.en) entries.push({ url: absoluteUrl(`/en/guides/${page.slug}/`), lastModified, changeFrequency: "monthly", priority: 0.85 });
  for (const instrument of ["guitar", "ukulele"] as const) {
    for (const chord of popularChords[instrument]) entries.push({ url: absoluteUrl(routeForChord(instrument, chord.slug)), lastModified, changeFrequency: "monthly", priority: 0.75 });
  }
  return entries;
}
