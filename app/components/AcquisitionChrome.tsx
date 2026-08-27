import Image from "next/image";
import { SiteLink as Link } from "@/app/components/SiteLink";
import { APP_STORE_LINKS, GITHUB_URL, PRIVACY_URL, assetPath } from "@/app/lib/site";

type Locale = "zh" | "en" | "zh-hant" | "es" | "pt-br" | "fr" | "de" | "it" | "ja" | "ko" | "ru" | "tr" | "ar";

type ChromeCopy = {
  home: string;
  navigation: string;
  tools: string;
  chords: string;
  press: string;
  download: string;
  privacy: string;
  contact: string;
  promise: string;
};

const chromeCopy: Record<Locale, ChromeCopy> = {
  zh: { home: "GuitarTool 首页", navigation: "资源导航", tools: "练习工具", chords: "热门和弦", press: "媒体资料", download: "下载", privacy: "隐私政策", contact: "联系", promise: "完全离线 · 无广告 · 无需账户" },
  en: { home: "GuitarTool home", navigation: "Resource navigation", tools: "Practice tools", chords: "Popular chords", press: "Press kit", download: "Download", privacy: "Privacy", contact: "Contact", promise: "Fully offline · No ads · No account" },
  "zh-hant": { home: "GuitarTool 首頁", navigation: "資源導覽", tools: "練習工具", chords: "熱門和弦", press: "媒體資料", download: "下載", privacy: "隱私政策", contact: "聯絡", promise: "完全離線 · 無廣告 · 無需帳戶" },
  es: { home: "Inicio de GuitarTool", navigation: "Navegación de recursos", tools: "Herramientas", chords: "Acordes populares", press: "Kit de prensa", download: "Descargar", privacy: "Privacidad", contact: "Contacto", promise: "Sin conexión · Sin anuncios · Sin cuenta" },
  "pt-br": { home: "Início do GuitarTool", navigation: "Navegação de recursos", tools: "Ferramentas", chords: "Acordes populares", press: "Kit de imprensa", download: "Baixar", privacy: "Privacidade", contact: "Contato", promise: "Offline · Sem anúncios · Sem conta" },
  fr: { home: "Accueil GuitarTool", navigation: "Navigation des ressources", tools: "Outils", chords: "Accords populaires", press: "Dossier de presse", download: "Télécharger", privacy: "Confidentialité", contact: "Contact", promise: "Hors ligne · Sans publicité · Sans compte" },
  de: { home: "GuitarTool Startseite", navigation: "Ressourcennavigation", tools: "Übungswerkzeuge", chords: "Beliebte Akkorde", press: "Pressebereich", download: "Laden", privacy: "Datenschutz", contact: "Kontakt", promise: "Offline · Werbefrei · Ohne Konto" },
  it: { home: "Home di GuitarTool", navigation: "Navigazione risorse", tools: "Strumenti", chords: "Accordi popolari", press: "Kit stampa", download: "Scarica", privacy: "Privacy", contact: "Contatti", promise: "Offline · Senza pubblicità · Senza account" },
  ja: { home: "GuitarTool ホーム", navigation: "リソースナビゲーション", tools: "練習ツール", chords: "人気コード", press: "プレスキット", download: "ダウンロード", privacy: "プライバシー", contact: "お問い合わせ", promise: "オフライン · 広告なし · アカウント不要" },
  ko: { home: "GuitarTool 홈", navigation: "리소스 탐색", tools: "연습 도구", chords: "인기 코드", press: "미디어 자료", download: "다운로드", privacy: "개인정보", contact: "문의", promise: "오프라인 · 광고 없음 · 계정 불필요" },
  ru: { home: "Главная GuitarTool", navigation: "Навигация по ресурсам", tools: "Инструменты", chords: "Популярные аккорды", press: "Пресс-кит", download: "Скачать", privacy: "Конфиденциальность", contact: "Контакты", promise: "Офлайн · Без рекламы · Без аккаунта" },
  tr: { home: "GuitarTool ana sayfa", navigation: "Kaynak gezintisi", tools: "Çalışma araçları", chords: "Popüler akorlar", press: "Basın kiti", download: "İndir", privacy: "Gizlilik", contact: "İletişim", promise: "Çevrimdışı · Reklamsız · Hesapsız" },
  ar: { home: "الصفحة الرئيسية لـ GuitarTool", navigation: "تصفح الموارد", tools: "أدوات التدريب", chords: "الأوتار الشائعة", press: "المواد الصحفية", download: "تنزيل", privacy: "الخصوصية", contact: "اتصال", promise: "دون اتصال · بلا إعلانات · بلا حساب" },
};

function normalizedLocale(locale?: string): Locale {
  return locale && locale in chromeCopy ? locale as Locale : "en";
}

function localeHome(locale: Locale) {
  return locale === "zh" ? "/" : `/${locale}/`;
}

export function AcquisitionHeader({ language, locale }: { language?: "zh" | "en"; locale?: string }) {
  const resolved = normalizedLocale(locale ?? language);
  const copy = chromeCopy[resolved];
  const tools = resolved === "zh" ? "/guides/guitar-tuner/" : resolved === "en" ? "/en/guides/guitar-tuner/" : `/${resolved}/online-tuner/`;

  return (
    <header className="acqHeader shell">
      <Link className="brand" href={localeHome(resolved)} aria-label={copy.home}>
        <Image src={assetPath("/app-icon-224.png")} alt="" width={42} height={42} priority />
        <span translate="no">GuitarTool</span>
      </Link>
      <nav aria-label={copy.navigation}>
        <Link href={tools}>{copy.tools}</Link>
        <Link href="/chords/guitar/">{copy.chords}</Link>
        <Link href="/press/">{copy.press}</Link>
        <a className="acqDownload" href={APP_STORE_LINKS.navigation}>{copy.download}</a>
      </nav>
    </header>
  );
}

export function AcquisitionFooter({ language, locale }: { language?: "zh" | "en"; locale?: string }) {
  const copy = chromeCopy[normalizedLocale(locale ?? language)];
  return (
    <footer className="acqFooter shell">
      <p>© 2026 Zhichao Wei · {copy.promise}</p>
      <div>
        <a href={PRIVACY_URL}>{copy.privacy}</a>
        <a href="mailto:weizhichao1027@gmail.com">{copy.contact}</a>
        <a href={GITHUB_URL}>GitHub</a>
      </div>
    </footer>
  );
}
