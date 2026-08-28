export const APP_NAME = "GuitarTool";
export const APP_STORE_URL = "https://apps.apple.com/app/id6761914163";
const APP_STORE_PROVIDER_TOKEN = "128747267";

const CUSTOM_PRODUCT_PAGE_IDS = {
  tuner: "cf763d83-4b2f-4897-86b1-42d9175c24dc",
  metronome: "ad230a27-b902-4645-b00d-3f2a5c3e3558",
  chords: "67d874cf-ac10-412d-929b-b883f2039444",
} as const;

type AppStoreDestination = keyof typeof CUSTOM_PRODUCT_PAGE_IDS | "home" | "press" | "support" | "navigation" | "smartBanner";

/**
 * Campaign links are generated from the provider token returned by App Store
 * Connect Analytics. Feature-specific links also select the matching custom
 * product page. Before Apple approves a page, the App Store safely falls back
 * to the default product page; the same URL starts showing the tailored page
 * automatically after approval.
 */
export function appStoreLink(destination: AppStoreDestination, campaignOverride?: string) {
  const defaultCampaign = {
    home: "site_home",
    press: "site_press",
    support: "site_support",
    navigation: "site_nav",
    smartBanner: "site_smart_banner",
    tuner: "site_tuner",
    metronome: "site_metronome",
    chords: "site_chords",
  }[destination];
  const campaign = campaignOverride ?? defaultCampaign;
  if (new TextEncoder().encode(campaign).length > 40) {
    throw new Error(`App Store campaign token exceeds 40 bytes: ${campaign}`);
  }
  const params = new URLSearchParams({
    pt: APP_STORE_PROVIDER_TOKEN,
    ct: campaign,
    mt: "8",
  });
  if (destination === "tuner" || destination === "metronome" || destination === "chords") {
    params.set("ppid", CUSTOM_PRODUCT_PAGE_IDS[destination]);
  }
  return `https://apps.apple.com/app/apple-store/id6761914163?${params.toString()}`;
}

export const APP_STORE_LINKS = {
  home: appStoreLink("home"),
  press: appStoreLink("press"),
  support: appStoreLink("support"),
  navigation: appStoreLink("navigation"),
  smartBanner: appStoreLink("smartBanner"),
  tuner: appStoreLink("tuner"),
  metronome: appStoreLink("metronome"),
  chords: appStoreLink("chords"),
} as const;

const GUIDE_CAMPAIGNS: Record<string, string> = {
  "tap-tempo-bpm": "seo_tap_tempo",
  "swing-metronome": "seo_swing",
  "progressive-tempo-training": "seo_tempo_training",
  "how-to-tune-a-guitar": "seo_guitar_tuning",
  "guitar-chord-fingering-finder": "seo_chord_finder",
};

export function appStoreDestinationForGuide(slug: string): "tuner" | "metronome" | "chords" {
  if (slug.includes("chord") || slug.includes("capo")) return "chords";
  if (
    slug.includes("metronome") ||
    slug.includes("rhythm") ||
    slug.includes("time-signature") ||
    slug.includes("tempo-training") ||
    slug === "tap-tempo-bpm"
  ) return "metronome";
  return "tuner";
}

export function appStoreCampaignForGuide(slug: string) {
  const destination = appStoreDestinationForGuide(slug);
  return GUIDE_CAMPAIGNS[slug] ?? `site_${destination}`;
}

export function appStoreLinkForGuide(slug: string) {
  const destination = appStoreDestinationForGuide(slug);
  return appStoreLink(destination, appStoreCampaignForGuide(slug));
}
export const PRIVACY_URL = "https://weizhichao1027-collab.github.io/GuitarTool-Privacy/";
export const GITHUB_URL = "https://github.com/weizhichao1027-collab/guitartool-website";
export const SITE_ORIGIN = "https://weizhichao1027-collab.github.io";
export const SITE_BASE_PATH = "/guitartool-website";
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH}`;
export const RUNTIME_BASE_PATH = process.env.GITHUB_PAGES === "true" ? SITE_BASE_PATH : "";

export const assetPath = (path: string) => `${RUNTIME_BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
export const SUPPORT_URL = absoluteUrl("/support/");

export const localeAlternates = {
  "zh-CN": absoluteUrl("/"),
  en: absoluteUrl("/en/"),
  "zh-TW": absoluteUrl("/zh-hant/"),
  es: absoluteUrl("/es/"),
  "pt-BR": absoluteUrl("/pt-br/"),
  fr: absoluteUrl("/fr/"),
  de: absoluteUrl("/de/"),
  it: absoluteUrl("/it/"),
  ja: absoluteUrl("/ja/"),
  ko: absoluteUrl("/ko/"),
  ru: absoluteUrl("/ru/"),
  tr: absoluteUrl("/tr/"),
  ar: absoluteUrl("/ar/"),
  "x-default": absoluteUrl("/en/"),
};

export const supportedLanguageCodes = [
  "zh-Hans", "en", "zh-Hant", "es", "pt-BR", "fr", "de", "it", "ja", "ko", "ru", "tr", "ar",
];
