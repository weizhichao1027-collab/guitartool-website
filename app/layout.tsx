import type { Metadata } from "next";
import "./globals.css";
import "./acquisition.css";
import { APP_STORE_LINKS, APP_STORE_URL, SITE_URL, absoluteUrl, localeAlternates } from "@/app/lib/site";

const basePath = process.env.GITHUB_PAGES === "true" ? "/guitartool-website" : "";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: "GuitarTool｜调音、节拍与和弦练习",
  description: "为吉他与尤克里里演奏者打造的离线练习工具：精准调音、灵活节拍、丰富和弦，一款就够。",
  applicationName: "GuitarTool",
  category: "music",
  keywords: ["吉他调音器", "尤克里里调音器", "节拍器", "吉他和弦", "ukulele chords", "guitar tuner"],
  alternates: { canonical: absoluteUrl("/"), languages: localeAlternates },
  appleWebApp: { capable: true, title: "GuitarTool", statusBarStyle: "default" },
  appLinks: { ios: { url: APP_STORE_URL, app_store_id: "6761914163", app_name: "GuitarTool" } },
  other: { "apple-itunes-app": `app-id=6761914163, app-argument=${APP_STORE_LINKS.smartBanner}` },
  verification: { google: "8ZJPCPf4ZDXOyR88ShC7PA1WEXwOOsnh5gwaEaTg8Bg" },
  icons: { icon: `${basePath}/app-icon.png`, apple: `${basePath}/app-icon.png` },
  openGraph: {
    title: "GuitarTool｜练琴时，只留下专注。",
    description: "调音、节拍、和弦，一款完全离线的吉他与尤克里里练习工具。",
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
    description: "调音、节拍、和弦，一款完全离线的吉他与尤克里里练习工具。",
    images: [absoluteUrl("/og.png")],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
