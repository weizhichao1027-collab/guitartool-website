import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const width = 1080;
const height = 1920;
const outputDir = path.resolve("../资料归档/03-市场研究/03-推广素材/平台社交内容包/封面");
const appIcon = path.resolve("public/app-icon-224.png");

await mkdir(outputDir, { recursive: true });
const appIconBuffer = await sharp(appIcon).resize(96, 96).png().toBuffer();

const covers = [
  {
    file: "01-闪光灯节拍-1080x1920.png",
    screenshot: path.resolve("public/hero-metronome.webp"),
    eyebrow: "FLASH BEAT · GUITARTOOL 1.0.8",
    title: ["节拍不只听见", "也能看见"],
    body: "兼容 iPhone · 全部主拍 / 仅重音 · 三档强度",
    accent: "#00AFA6",
    glow: "#b6fff3",
  },
  {
    file: "02-离线调音-1080x1920.png",
    screenshot: path.resolve("public/tuner.webp"),
    eyebrow: "PRIVATE TUNER · AUDIO STAYS LOCAL",
    title: ["调音时的声音", "只留在设备上"],
    body: "完全离线 · 不保存录音 · 不上传音频",
    accent: "#1688C8",
    glow: "#c8efff",
  },
  {
    file: "03-和弦卡片-1080x1920.png",
    screenshot: path.resolve("public/chord-card-share.webp"),
    eyebrow: "CHORD CARDS · 19,244 FINGERINGS",
    title: ["把当前和弦", "发给学生或朋友"],
    body: "先预览 · 再保存或分享 · 接收者无需安装 App",
    accent: "#D94E88",
    glow: "#ffe0ed",
  },
];

for (const cover of covers) {
  const mask = Buffer.from(`<svg width="620" height="1341"><rect width="620" height="1341" rx="50" fill="#fff"/></svg>`);
  const screenshot = await sharp(cover.screenshot)
    .resize({ width: 620, height: 1341, fit: "cover", position: "top" })
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();

  const background = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#F5FFFD"/>
          <stop offset="0.52" stop-color="#EEF8F6"/>
          <stop offset="1" stop-color="#FFF2F8"/>
        </linearGradient>
        <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(860 690) rotate(120) scale(720)">
          <stop offset="0" stop-color="${cover.glow}" stop-opacity="0.92"/>
          <stop offset="1" stop-color="${cover.glow}" stop-opacity="0"/>
        </radialGradient>
        <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="36" stdDeviation="36" flood-color="#163B3E" flood-opacity="0.18"/></filter>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      <rect width="${width}" height="${height}" fill="url(#glow)"/>
      <circle cx="90" cy="1510" r="320" fill="${cover.glow}" opacity="0.4"/>
      <rect x="52" y="52" width="976" height="1816" rx="58" fill="none" stroke="#FFFFFF" stroke-opacity="0.86" stroke-width="2"/>
      <text x="188" y="120" fill="#18383C" font-family="Avenir Next, PingFang SC, sans-serif" font-size="31" font-weight="800">GuitarTool</text>
      <text x="70" y="216" fill="${cover.accent}" font-family="Avenir Next, PingFang SC, sans-serif" font-size="24" font-weight="800" letter-spacing="2">${cover.eyebrow}</text>
      <text x="70" y="310" fill="#16383C" font-family="Avenir Next, PingFang SC, sans-serif" font-size="76" font-weight="800" letter-spacing="-4">
        <tspan x="70" dy="0">${cover.title[0]}</tspan>
        <tspan x="70" dy="92">${cover.title[1]}</tspan>
      </text>
      <text x="70" y="498" fill="#557276" font-family="Avenir Next, PingFang SC, sans-serif" font-size="28" font-weight="650">${cover.body}</text>
      <rect x="222" y="545" width="636" height="1375" rx="58" fill="#FFFFFF" opacity="0.72" filter="url(#shadow)"/>
    </svg>`);

  await sharp(background)
    .composite([
      { input: appIconBuffer, left: 70, top: 62 },
      { input: screenshot, left: 230, top: 560 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(path.join(outputDir, cover.file));
}

console.log(`Built ${covers.length} covers in ${outputDir}`);
