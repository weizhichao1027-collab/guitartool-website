export const APP_NAME = "GuitarTool";
export const APP_STORE_URL = "https://apps.apple.com/app/id6761914163";
export const PRIVACY_URL = "https://weizhichao1027-collab.github.io/GuitarTool-Privacy/";
export const GITHUB_URL = "https://github.com/weizhichao1027-collab/guitartool-website";
export const SITE_ORIGIN = "https://weizhichao1027-collab.github.io";
export const SITE_BASE_PATH = "/guitartool-website";
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH}`;
export const RUNTIME_BASE_PATH = process.env.GITHUB_PAGES === "true" ? SITE_BASE_PATH : "";

export const assetPath = (path: string) => `${RUNTIME_BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

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
