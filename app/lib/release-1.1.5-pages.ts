import type { LandingPage } from "@/app/lib/landing-pages";

export const RELEASE_1_1_5_GUIDE_SLUGS = ["guitartool-1-1-5"] as const;

export const zhRelease115Pages: LandingPage[] = [
  {
    slug: "guitartool-1-1-5",
    title: "GuitarTool 1.1.5：已上架的更新、主题与设备支持",
    description: "GuitarTool 的 App Store 公开版本是 1.1.5：机械花园与口袋爵士剧场可预览后一次性购买。Google Play 公开版本仍是 Android 与 Wear OS 1.1.4。核心工具免费、离线，无订阅。",
    eyebrow: "GUITARTOOL 1.1.5 · APP STORE",
    lead: "GuitarTool 是给吉他和尤克里里练习者使用的调音器、节拍器与和弦库。App Store 公开版本是 1.1.5，可在 iPhone、iPad 和 Apple Watch 下载。Google Play 公开版本仍是 Android 与 Wear OS 1.1.4。核心工具免费、可离线使用，没有广告、账户或订阅。",
    proof: ["App Store 1.1.5", "Google Play 1.1.4", "无订阅"],
    showcase: {
      image: "/release-1.1.4/zh-themes.webp",
      alt: "GuitarTool 1.1.4 中文主题商店图，尚未包含 1.1.5 的机械花园和口袋爵士剧场",
      caption: "这张图来自 1.1.4 的商店素材。1.1.5 新增的机械花园和口袋爵士剧场没有出现在这张较早的图里。",
      width: 660,
      height: 1434,
    },
    sections: [
      {
        title: "1.1.5 在 App Store 改变了什么？",
        body: "公开的更新说明包括：新增机械花园和口袋爵士剧场，两套外观可先预览，再分别一次性购买；改进购买、恢复购买和取消的处理，并让已购主题的同步更可靠；调整 13 种语言的文字和不同屏幕尺寸的布局；在系统和设备提供该尺寸时，增加 iPad 横向超大号主屏幕小组件。",
        points: ["主题只改变外观，不改变免费工具", "价格以你的 App Store 购买确认界面为准", "没有自动续费或主题订阅"],
      },
      {
        title: "免费功能和付费主题怎么分？",
        body: "调音、节拍器、和弦库、节奏训练和四款基础外观继续免费，并可离线使用。App Store 的 1.1.5 有十二套独立的一次性完整主题，素材在安装包里，解锁后不必再下载。Google Play 当前公开的 1.1.4 仍是此前的十套付费主题，不把机械花园和口袋爵士剧场写成已经可以在 Google Play 购买。两个商店的购买分开管理。",
        points: ["晴空、星夜、松林、石墨免费", "买一套不会解锁其他主题", "购买或恢复通常需要联网"],
      },
      {
        title: "在哪里下载，如何联系支持？",
        body: "iPhone、iPad 和 Apple Watch 从 App Store 下载，Apple ID 为 6761914163。Android 手机和 Wear OS 从 Google Play 下载，包名是 com.guitar123.toolbox。支持邮箱是 weizhichao1027@gmail.com。隐私政策说明本机音频、StoreKit、Google Play Billing 和已停用的使用分析。",
        points: ["iOS / iPadOS 17 起，watchOS 10 起", "竖排超大号小组件仍需 iOS 27+ 且由系统提供", "不要在支持邮件里附上付款资料或私人录音"],
      },
    ],
    faq: [
      ["现在哪个版本可以下载？", "2026 年 11 月 18 日核对：App Store 美国区和中国区公开查询都返回 1.1.5。同一天的 Google Play 公开页面仍显示 1.1.4。"],
      ["机械花园需要订阅吗？", "不需要。机械花园和口袋爵士剧场都是单独的一次性购买，可以先预览。调音、节拍和和弦工具不因未购买主题而锁定。"],
      ["1.1.5 会上传练习音频或使用分析吗？", "不会。麦克风只用于设备上的实时调音，不保存或上传。1.1.5 不初始化 PostHog，也不发送使用或诊断分析事件。"],
    ],
    related: ["themes-and-purchases", "guitartool-1-1-4", "offline-guitar-tools", "apple-watch-tuner"],
  },
];

export const enRelease115Pages: LandingPage[] = [
  {
    slug: "guitartool-1-1-5",
    title: "GuitarTool 1.1.5: the released update, themes and devices",
    description: "GuitarTool’s public App Store version is 1.1.5, with Kinetic Garden and Pocket Jazz Theater as separate one-time purchases. Google Play’s public version remains Android and Wear OS 1.1.4. Core tools are free and offline, with no subscription.",
    eyebrow: "GUITARTOOL 1.1.5 · APP STORE",
    lead: "GuitarTool is a tuner, metronome and chord library for guitar and ukulele practice. The public App Store version is 1.1.5 for iPhone, iPad and Apple Watch. The public Google Play version remains Android and Wear OS 1.1.4. Core tools are free, work offline and need no ads, account or subscription.",
    proof: ["App Store 1.1.5", "Google Play 1.1.4", "No subscription"],
    showcase: {
      image: "/release-1.1.4/en-themes.webp",
      alt: "GuitarTool 1.1.4 theme artwork, which does not include Kinetic Garden or Pocket Jazz Theater from 1.1.5",
      caption: "This image is 1.1.4 store artwork. Kinetic Garden and Pocket Jazz Theater, added in 1.1.5, are not shown here.",
      width: 660,
      height: 1434,
    },
    sections: [
      {
        title: "What changed in App Store version 1.1.5?",
        body: "The public release notes add Kinetic Garden and Pocket Jazz Theater, two optional looks you can preview before a separate one-time purchase. Purchase, restoration and cancellation handling is improved, including more reliable syncing of purchased themes. Text in 13 languages and layouts across screen sizes are refined. An extra-large landscape iPad Home Screen widget is available when the system and device offer that size.",
        points: ["Themes change appearance only", "The store shows the current local price", "There is no renewal or theme subscription"],
      },
      {
        title: "What stays free, and what is purchased?",
        body: "Tuning, the metronome, chords, rhythm training and four basic looks stay free and work offline. App Store 1.1.5 has twelve separate one-time complete themes. Their artwork is bundled and needs no extra download after unlock. The current Google Play listing, version 1.1.4, still describes the earlier set of ten paid themes. Kinetic Garden and Pocket Jazz Theater are not described as available for purchase on that Play listing. App Store and Google Play purchases are managed separately.",
        points: ["Clear Sky, Starlight, Pine and Graphite remain free", "One purchase unlocks one theme", "Buying or restoring usually needs a connection"],
      },
      {
        title: "Where do I download it, and how do I get support?",
        body: "Download for iPhone, iPad and Apple Watch from the App Store, Apple ID 6761914163. Download Android and Wear OS from Google Play, package name com.guitar123.toolbox. Support email is weizhichao1027@gmail.com. The privacy policy explains on-device audio, StoreKit, Google Play Billing and disabled usage analytics.",
        points: ["iOS / iPadOS 17 or later; watchOS 10 or later", "The extra-large portrait widget still needs iOS 27+ and system availability", "Do not email payment details or private recordings"],
      },
    ],
    faq: [
      ["Which version can I download now?", "Checked on 18 November 2026: the public App Store lookup returns 1.1.5 in both the United States and China. The public Google Play page still shows 1.1.4."],
      ["Is Kinetic Garden a subscription?", "No. Kinetic Garden and Pocket Jazz Theater are separate one-time purchases, and each can be previewed. Tuning, the metronome and chords stay available without a theme purchase."],
      ["Does 1.1.5 upload practice audio or usage analytics?", "No. The microphone is used only for live on-device tuning and is not saved or uploaded. Version 1.1.5 does not initialize PostHog or send usage or diagnostic analytics events."],
    ],
    related: ["themes-and-purchases", "guitartool-1-1-4", "offline-guitar-tools", "apple-watch-tuner"],
  },
];
