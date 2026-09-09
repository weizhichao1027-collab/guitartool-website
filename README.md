# GuitarTool — guitar & ukulele practice with offline core tools

Tune your instrument, set a beat, find the exact chord shape, then play. GuitarTool brings a tuner, metronome and chord library together on iPhone and iPad, with an Apple Watch metronome and Home Screen widgets. The app is free to download, with no ads or account requirement; its core practice tools work offline.

[Download on the App Store](https://apps.apple.com/app/apple-store/id6761914163?pt=128747267&ct=organic_github&mt=8) · [English website](https://weizhichao1027-collab.github.io/guitartool-website/en/?utm_source=github) · [中文官网](https://weizhichao1027-collab.github.io/guitartool-website/?utm_source=github)

![GuitarTool metronome, tuner and chord library](https://weizhichao1027-collab.github.io/guitartool-website/og.png)

## What you can do

- **Tune privately:** common guitar tunings, GCEA and chromatic mode, reference tones and adjustable A4. Microphone audio is analyzed on-device, never saved or uploaded.
- **Build steadier rhythm:** 20–500 BPM, tap tempo, accents, subdivisions, swing, presets and progressive tempo training.
- **Share the exact chord:** 19,244 guitar and ukulele fingerings, multiple voicings, audio previews and chord cards that can be saved or sent as ordinary images.
- **Keep practice close:** adaptive iPhone/iPad layouts, Apple Watch audible beats, interactive widgets and 13 languages.

All practice features are free; only optional complete visual themes are paid. Coming in version 1.0.12, the Theme Gallery adds five premium designs: Morning Mist Studio, Lunar Radio, Paper Ensemble, Pocket Synth and Vinyl Afterhours. Preview each theme first; every theme is a separate one-time App Store purchase with permanent unlock and no subscription. Downloaded themes work offline, and more themes will be added over time. Version 1.0.8 introduced rear-flash beat cues on compatible iPhones. [Flash Beat guide](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/visual-metronome/?utm_source=github).

## Try the free browser tools

No installation is needed to try the [online tuner](https://weizhichao1027-collab.github.io/guitartool-website/en/online-tuner/?utm_source=github), [online metronome](https://weizhichao1027-collab.github.io/guitartool-website/en/online-metronome/?utm_source=github), [guitar chord diagrams](https://weizhichao1027-collab.github.io/guitartool-website/chords/guitar/?utm_source=github) or [ukulele chord diagrams](https://weizhichao1027-collab.github.io/guitartool-website/chords/ukulele/?utm_source=github). The browser tuner needs microphone permission; audio is processed locally.

Teachers can [send a specific chord shape to a student](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/chord-diagrams-for-students/?utm_source=github). Writers and creators can use the [screenshots, videos and localized media kit](https://weizhichao1027-collab.github.io/guitartool-website/press/?utm_source=github).

## 中文介绍

GuitarTool（吉他工具）的全部练习功能均免费，核心工具离线可用、无广告、无需账户。调音、节拍训练、和弦查找和指法卡片分享集中在一起，支持 iPhone、iPad、Apple Watch 与主屏幕小组件；仅可选完整视觉主题为付费内容。即将推出的 1.0.12 会新增五套付费完整主题：每套可先预览、单独一次购买、永久解锁且无订阅，下载后可离线使用；后续还会持续增加新主题。

[观看 B 站介绍](https://www.bilibili.com/video/BV1bY4d6GEkw/) · [中文支持](https://weizhichao1027-collab.github.io/guitartool-website/support/) · [English support](https://weizhichao1027-collab.github.io/guitartool-website/en/support/) · [Privacy policy](https://weizhichao1027-collab.github.io/GuitarTool-Privacy/)

## Website development

This repository contains the public marketing website, not the native app source. GitHub Pages is the canonical public site; OpenAI Sites hosts a second deployment. The website includes 13 language homepages, browser tools, bilingual practice guides and chord diagrams.

```bash
npm install
npm run dev
npm run lint
npm run build:pages
npm run audit:pages
npm run build
```

`npm run generate:chords` refreshes the popular-chord data. Successful Pages deployments notify IndexNow automatically. See [MARKETING_HANDOFF.md](./MARKETING_HANDOFF.md) for verified release, distribution and deployment records.
