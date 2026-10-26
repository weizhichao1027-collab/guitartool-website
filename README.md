# GuitarTool — guitar & ukulele practice with offline core tools

Tune your instrument, set a beat, find the exact chord shape, then play. GuitarTool brings a tuner, metronome and chord library together on iPhone and iPad, with an Apple Watch tuner and metronome plus Home Screen widgets. The app is free to download, with no ads or account requirement; its core practice tools work offline.

[Download on the App Store](https://apps.apple.com/app/apple-store/id6761914163?pt=128747267&ct=organic_github&mt=8) · [English website](https://weizhichao1027-collab.github.io/guitartool-website/en/?utm_source=github) · [中文官网](https://weizhichao1027-collab.github.io/guitartool-website/?utm_source=github)

![GuitarTool metronome, tuner and chord library](https://weizhichao1027-collab.github.io/guitartool-website/og.png)

## What you can do

- **Tune privately:** common guitar tunings, GCEA and chromatic mode, reference tones and adjustable A4. Microphone audio is analyzed on-device, never saved or uploaded.
- **Build steadier rhythm:** 20–500 BPM, tap tempo, accents, subdivisions, swing, presets and progressive tempo training.
- **Share the exact chord:** 19,244 guitar and ukulele fingerings, multiple voicings, audio previews and chord cards that can be saved or sent as ordinary images.
- **Keep practice close:** adaptive iPhone/iPad layouts, Apple Watch tuning and audible beats, interactive widgets and 13 languages.

Version **1.1.4 is available**, released October 26, 2026 at 06:14 China time, verified through Apple's public US storefront. It adds Plush Practice Room, Oddball Rehearsal and Zero Gravity Circus as separate one-time theme purchases. Tuning and input recovery, metronome tempo changes and countdowns, chords and sharing, and theme restoration at launch are improved. Core tools and four basic looks stay free; ten complete themes are separate purchases with bundled artwork. Usage analytics is disabled, and microphone audio stays on-device.

[1.1.4 release and device guide](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/guitartool-1-1-4/) · [Theme and purchase help](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/themes-and-purchases/)

Requires iOS/iPadOS 17+; the Watch companion requires watchOS 10+. Chinese voice counting is for iPhone/iPad only. The extra-large portrait widget requires iOS 27+ and system availability. No public Android/Wear OS release has been confirmed.
[Voice-counting guide](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/voice-counting-metronome/) · [BPM and widget guide](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/metronome-bpm-widget/)

[Silent-bar guide](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/silent-bar-metronome/) · [Tempo-stage guide](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/staged-tempo-training/)

The Apple Watch tuner, introduced in 1.1.1, remains available alongside the Watch metronome and interactive Home Screen widgets. Microphone audio stays on-device. Limited rating-prompt eligibility state stays local and is not uploaded; see the [privacy policy](https://weizhichao1027-collab.github.io/GuitarTool-Privacy/en/).

## Try the free browser tools

No installation is needed to try the [online tuner](https://weizhichao1027-collab.github.io/guitartool-website/en/online-tuner/?utm_source=github), [online metronome](https://weizhichao1027-collab.github.io/guitartool-website/en/online-metronome/?utm_source=github), [guitar chord diagrams](https://weizhichao1027-collab.github.io/guitartool-website/chords/guitar/?utm_source=github) or [ukulele chord diagrams](https://weizhichao1027-collab.github.io/guitartool-website/chords/ukulele/?utm_source=github). The browser tuner needs microphone permission; audio is processed locally.

Teachers can [send a specific chord shape to a student](https://weizhichao1027-collab.github.io/guitartool-website/en/guides/chord-diagrams-for-students/?utm_source=github). Writers and creators can use the [screenshots, videos and localized media kit](https://weizhichao1027-collab.github.io/guitartool-website/press/?utm_source=github).

## 中文介绍

GuitarTool（吉他工具）1.1.4 已上架。新增布偶练习室、怪兽排练室、失重马戏团，十套完整主题分别一次性购买、素材内置；四款基础主题和调音、节拍、和弦工具免费离线。改善调音稳定性与中断恢复、节拍变速与倒计时、和弦选择试听分享及启动主题恢复。本版停用使用分析，无广告、无需账户、音频不上传。Android/Wear OS 暂无公开上线确认。

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

## Release maintenance

The public policy now describes released 1.1.4. Earlier analytics opt-in preparation is superseded: this release has no analytics entry, does not initialize PostHog and sends no usage or diagnostic analytics. Historical test data is not automatically deleted. See the policy for requests and website-hosting scope.

Run `npm test`, `npm run lint`, `npm run audit:dependencies`, `npm run build:pages`, `npm run audit:pages` and `npm run audit:release` before publishing. `public/release-1.1.4/sources.json` records source paths and SHA-256 for 35 current web images. Original artwork and capture inputs are retained in the companion App repository. Search notifications and deployment are not evidence of indexing or rankings.
