# GuitarTool — guitar & ukulele practice with offline core tools

Tune your instrument, set a beat, find the exact chord shape, then play. GuitarTool brings a tuner, metronome and chord library together on iPhone and iPad, with an Apple Watch tuner and metronome plus Home Screen widgets. The app is free to download, with no ads or account requirement; its core practice tools work offline.

[Download on the App Store](https://apps.apple.com/app/apple-store/id6761914163?pt=128747267&ct=organic_github&mt=8) · [English website](https://weizhichao1027-collab.github.io/guitartool-website/en/?utm_source=github) · [中文官网](https://weizhichao1027-collab.github.io/guitartool-website/?utm_source=github)

![GuitarTool metronome, tuner and chord library](https://weizhichao1027-collab.github.io/guitartool-website/og.png)

## What you can do

- **Tune privately:** common guitar tunings, GCEA and chromatic mode, reference tones and adjustable A4. Microphone audio is analyzed on-device, never saved or uploaded.
- **Build steadier rhythm:** 20–500 BPM, tap tempo, accents, subdivisions, swing, presets and progressive tempo training.
- **Share the exact chord:** 19,244 guitar and ukulele fingerings, multiple voicings, audio previews and chord cards that can be saved or sent as ordinary images.
- **Keep practice close:** adaptive iPhone/iPad layouts, Apple Watch tuning and audible beats, interactive widgets and 13 languages.

Version **1.1.2 is available**. Alternate audible and silent bars, create up to six tempo stages (20–500 BPM, 1–64 bars each) and save training settings as a custom preset on iPhone and iPad. This release improves audio interruptions, stopping playback, device changes, large text and right-to-left layouts. Jade Resonance joins the six existing complete themes; all seven are separate one-time purchases, with bundled assets and offline use after purchase. Four basic looks and all practice tools remain free.

[Silent-bar guide](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/silent-bar-metronome/) · [Tempo-stage guide](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/staged-tempo-training/)

The Apple Watch tuner, introduced in 1.1.1, remains available alongside the Watch metronome and interactive Home Screen widgets. Microphone audio stays on-device. Limited rating-prompt eligibility state stays local and is not uploaded; see the [privacy policy](https://weizhichao1027-collab.github.io/GuitarTool-Privacy/en/).

## Try the free browser tools

No installation is needed to try the [online tuner](https://weizhichao1027-collab.github.io/guitartool-website/en/online-tuner/?utm_source=github), [online metronome](https://weizhichao1027-collab.github.io/guitartool-website/en/online-metronome/?utm_source=github), [guitar chord diagrams](https://weizhichao1027-collab.github.io/guitartool-website/chords/guitar/?utm_source=github) or [ukulele chord diagrams](https://weizhichao1027-collab.github.io/guitartool-website/chords/ukulele/?utm_source=github). The browser tuner needs microphone permission; audio is processed locally.

Teachers can [send a specific chord shape to a student](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/chord-diagrams-for-students/?utm_source=github). Writers and creators can use the [screenshots, videos and localized media kit](https://weizhichao1027-collab.github.io/guitartool-website/press/?utm_source=github).

## 中文介绍

GuitarTool（吉他工具）1.1.2 已上架。新增有声与静音小节交替、按小节设置分段速度并保存为自定义方案，改善音频中断、停止、设备切换、大字号与从右向左界面。玄玉声场加入主题展厅，七套完整主题各自一次性购买，素材内置，已购后可离线使用；四款基础主题与全部练习功能保持免费。支持 iPhone、iPad、Apple Watch 与主屏幕小组件，无广告、无需账户，核心工具离线可用。

[观看 B 站介绍](https://www.bilibili.com/video/BV1bY4d6GEkw/) · [中文支持](https://weizhichao1027-collab.github.io/guitartool-website/support/) · [English support](https://weizhichao1027-collab.github.io/guitartool-website/en/support/) · [Privacy policy](https://weizhichao1027-collab.github.io/GuitarTool-Privacy/)

## Website development

This repository contains the public marketing website, not the native app source. GitHub Pages is the sole publishing target. The website includes 13 language homepages, browser tools, bilingual practice guides and chord diagrams.

```bash
npm ci
npm run dev
npm run lint
npm run build:pages
npm run audit:pages
```

`npm run generate:chords` refreshes the popular-chord data. Successful Pages deployments notify IndexNow automatically. See [MARKETING_HANDOFF.md](./MARKETING_HANDOFF.md) for verified release, distribution and deployment records.
