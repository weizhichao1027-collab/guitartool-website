import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.GITHUB_PAGES === "true" ? "/guitartool-website" : "";

export const metadata: Metadata = {
  title: "GuitarTool｜调音、节拍与和弦练习",
  description: "为吉他与尤克里里演奏者打造的离线练习工具：精准调音、灵活节拍、丰富和弦，一款就够。",
  icons: { icon: `${basePath}/app-icon.png`, apple: `${basePath}/app-icon.png` },
  openGraph: {
    title: "GuitarTool｜练琴时，只留下专注。",
    description: "调音、节拍、和弦，一款完全离线的吉他与尤克里里练习工具。",
    type: "website",
    images: [{
      url: "https://raw.githubusercontent.com/weizhichao1027-collab/guitartool-website/main/public/og.png",
      width: 1200,
      height: 630,
      alt: "GuitarTool — 练琴时，只留下专注。",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuitarTool｜练琴时，只留下专注。",
    description: "调音、节拍、和弦，一款完全离线的吉他与尤克里里练习工具。",
    images: ["https://raw.githubusercontent.com/weizhichao1027-collab/guitartool-website/main/public/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
