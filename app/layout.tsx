import type { Metadata } from "next";
import "./globals.css";
import "./acquisition.css";
import { APP_STORE_LINKS, APP_STORE_URL, SITE_URL, absoluteUrl, localeAlternates } from "@/app/lib/site";

const basePath = process.env.GITHUB_PAGES === "true" ? "/guitartool-website" : "";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: "GuitarTool｜调音、节拍与和弦练习",
  description: "全部练习功能免费且核心工具离线可用；1.1.0 即将带来可预览、单套一次购买永久解锁的可选付费主题。",
  applicationName: "GuitarTool",
  category: "music",
  keywords: ["吉他调音器", "尤克里里调音器", "节拍器", "吉他和弦", "ukulele chords", "guitar tuner"],
  alternates: { canonical: absoluteUrl("/"), languages: localeAlternates },
  appleWebApp: { capable: true, title: "GuitarTool", statusBarStyle: "default" },
  appLinks: { ios: { url: APP_STORE_URL, app_store_id: "6761914163", app_name: "GuitarTool" } },
  other: { "apple-itunes-app": `app-id=6761914163, app-argument=${APP_STORE_LINKS.smartBanner}` },
  verification: { google: "8ZJPCPf4ZDXOyR88ShC7PA1WEXwOOsnh5gwaEaTg8Bg" },
  icons: { icon: `${basePath}/app-icon-224.png`, apple: `${basePath}/app-icon-224.png` },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    title: "GuitarTool｜练琴时，只留下专注。",
    description: "全部练习功能免费，调音、节拍与和弦核心工具离线可用；1.1.0 即将带来五套可选付费主题。",
    type: "website",
    images: [{
      url: absoluteUrl("/og.png"),
      width: 1200,
      height: 630,
      alt: "GuitarTool — 练琴时，只留下专注。",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuitarTool｜练琴时，只留下专注。",
    description: "全部练习功能免费，调音、节拍与和弦核心工具离线可用；1.1.0 即将带来五套可选付费主题。",
    images: [absoluteUrl("/og.png")],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; base-uri 'self'; connect-src 'self'; font-src 'self' data:; form-action 'none'; img-src 'self' data: https:; media-src 'self'; object-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; upgrade-insecure-requests" />
      </head>
      <body>
        <a className="skipLink" href="#main-content">跳到正文 / Skip to content</a>
        <div id="main-content" tabIndex={-1}>{children}</div>
        <script src={`${basePath}/campaign-links.js`} defer />
        <script dangerouslySetInnerHTML={{ __html: "(()=>{const main=document.querySelector('main[lang]');if(!main)return;document.documentElement.lang=main.lang||'zh-CN';document.documentElement.dir=main.dir||'ltr';})();" }} />
      </body>
    </html>
  );
}
