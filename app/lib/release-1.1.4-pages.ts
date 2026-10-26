import type { LandingPage } from "@/app/lib/landing-pages";

export const RELEASE_1_1_4_GUIDE_SLUGS = ["guitartool-1-1-4", "themes-and-purchases"] as const;

export const zhRelease114Pages: LandingPage[] = [
  {
    "slug": "guitartool-1-1-4",
    "title": "GuitarTool 1.1.4：新主题、更新内容与设备支持",
    "description": "了解已上架的 GuitarTool 1.1.4：三款新主题、调音与节拍稳定性、和弦分享、iPhone/iPad/Watch 支持，以及免费功能与隐私范围。",
    "eyebrow": "GUITARTOOL 1.1.4 · 2026-10-26",
    "lead": "GuitarTool 1.1.4 已上架。布偶练习室、怪兽排练室和失重马戏团带来三种新外观；核心调音器、节拍器和和弦库依然免费、离线。十套完整主题分别一次性购买，四款基础主题免费。本版停用使用分析。",
    "proof": [
      "iOS / iPadOS 17+",
      "watchOS 10+",
      "13 种界面语言"
    ],
    "showcase": {
      "image": "/release-1.1.4/zh-themes.webp",
      "alt": "GuitarTool 1.1.4 中文商店主题预览，布偶、纸上乐队与黑胶主题",
      "caption": "本次上架使用的主题制作图；完整主题分别购买。",
      "width": 660,
      "height": 1434
    },
    "sections": [
      {
        "title": "这次更新改善了哪些练习环节？",
        "body": "新增三款完整主题，同时改善音高检测稳定性、音频输入中断后的恢复、节拍速度变化与练习倒计时、和弦选择试听分享，以及启动时恢复已选主题。实际表现仍取决于乐器输入、环境噪声、系统与音频设备。",
        "points": [
          "先在主题展厅预览，再选择购买",
          "手机、iPad 窗口和大字号布局同步调整",
          "免费工具不要求购买主题"
        ]
      },
      {
        "title": "不同设备可以做什么？",
        "body": "iPhone 和 iPad 提供调音、20–500 BPM 节拍、节奏训练、和弦编辑试听分享及完整主题。Apple Watch 提供专用调音器与节拍器，不提供手机同款主题界面或完整和弦编辑器。主屏幕小组件用于节拍控制，能显示的尺寸由系统决定。",
        "points": [
          "iOS / iPadOS 17 起；Watch 需 watchOS 10 起",
          "超大竖排小组件需 iOS 27+，并由系统按设备和空间提供",
          "内置中文人声数拍仅在 iPhone/iPad 提供；13 种界面语言不等于 13 种人声"
        ]
      },
      {
        "title": "免费、内购和离线使用如何区分？",
        "body": "核心练习工具和晴空、星夜、松林、石墨四款基础主题免费。十套完整主题各自通过 App Store 非消耗型内购解锁，没有主题订阅。素材在安装包中，解锁后无需下载主题即可离线使用；购买、恢复与获取商店商品信息可能需要联网。",
        "points": [
          "价格以你的 App Store 地区实时显示为准",
          "一笔购买只解锁对应主题",
          "同一 Apple 账户可从主题展厅恢复已购买权益"
        ]
      },
      {
        "title": "发布与隐私范围",
        "body": "本次上架时间为北京时间 2026 年 10 月 26 日 06:14，依据 Apple 美国区公开商店信息。地区可用性以本地 App Store 为准。1.1.4 不提供使用分析开关，不初始化 PostHog，不发送使用或诊断分析事件；调音声音只在设备上处理。",
        "points": [
          "Android / Wear OS 尚无公开上架确认",
          "网站托管所需网络信息见隐私政策",
          "历史测试版数据不会随更新自动删除，申请方式见隐私政策"
        ]
      }
    ],
    "faq": [
      [
        "升级后以前购买的主题还在吗？",
        "仍使用原有独立商品。请使用购买时的 Apple 账户；若仍显示锁定，在主题展厅联网恢复购买。新主题需要分别购买。"
      ],
      [
        "三款新主题会改变免费工具范围吗？",
        "不会。调音器、节拍器和和弦工具继续免费，购买仅解锁对应完整主题外观。"
      ],
      [
        "1.1.4 会上传练习音频吗？",
        "不会。麦克风输入只用于本机实时调音，不保存或上传；使用分析在本版停用。"
      ]
    ],
    "related": [
      "themes-and-purchases",
      "offline-guitar-tools",
      "voice-counting-metronome",
      "apple-watch-tuner"
    ]
  },
  {
    "slug": "themes-and-purchases",
    "title": "GuitarTool 十款主题：预览、购买与恢复",
    "description": "GuitarTool 1.1.4 主题说明：四款免费外观、十款独立一次性购买主题，新主题预览、离线使用、恢复购买与等待批准排查。",
    "eyebrow": "主题展厅 · 购买帮助",
    "lead": "先在“个性化 → 主题展厅”预览完整界面，再选择需要的主题。四款基础外观永久免费；十款完整主题各自一次性购买。购买一款不会解锁其余主题，也不影响免费的调音、节拍和和弦工具。",
    "proof": [
      "四款基础主题免费",
      "十款独立一次性购买",
      "解锁后离线使用"
    ],
    "sections": [
      {
        "title": "十款完整主题有哪些？",
        "body": "晨雾琴房、月面电台、纸上乐队、口袋合成器、黑胶夜场、琴匠测绘、玄玉声场、怪兽排练室、失重马戏团和布偶练习室。最后三款在 1.1.4 加入。完整主题用于 iPhone/iPad 的工具界面和和弦卡片；Watch 与小组件有专用布局。",
        "points": [
          "布偶练习室：布面、刺绣与猫咪",
          "怪兽排练室：黏土角色与节拍舞台",
          "失重马戏团：木偶、木框与马戏场景"
        ]
      },
      {
        "title": "预览与购买",
        "body": "更新到 1.1.4，打开个性化和主题展厅，查看主题预览后选择对应商品。最终价格与币种以 App Store 购买确认界面为准。每套为独立非消耗型商品，无需订阅；以前购买其他主题不会包含新商品。",
        "points": [
          "确认主题名称后再购买",
          "加载商品及购买时保持联网",
          "等待家长批准时不要反复发起付款"
        ]
      },
      {
        "title": "已买过却仍显示锁定",
        "body": "使用购买时的 Apple 账户，连接网络后在主题展厅点“恢复购买”。等待系统同步，再重新打开主题。若购买仍待批准，应等待 Apple 返回结果。退款或撤销购买后，权益状态可能变化。",
        "points": [
          "不要把 iOS 购买当作 Google Play 权益",
          "支持邮件附主题名、版本、错误文案与复现步骤",
          "不要发送银行卡资料、账号密码或完整付款凭证"
        ]
      },
      {
        "title": "离线使用与更新后恢复",
        "body": "十套主题素材均随 App 安装包提供，完成解锁后无需连接主题服务器或另行下载素材。1.1.4 改善启动时恢复所选主题；重装后若未解锁，先联网恢复购买，再离线使用。",
        "points": [
          "四款基础主题随时可用",
          "核心练习不依赖主题购买",
          "主题问题可通过本页导航进入技术支持"
        ]
      }
    ],
    "faq": [
      [
        "主题是订阅吗？",
        "不是。每套完整主题为独立一次性非消耗型购买。当前价格以所在地区 App Store 为准。"
      ],
      [
        "为什么购买晨雾琴房后布偶练习室仍锁定？",
        "它们是两个独立商品。购买一套不会解锁其他主题；可以继续使用已购主题和四款免费基础外观。"
      ],
      [
        "恢复购买需要互联网吗？",
        "通常需要。恢复由 Apple StoreKit 同步权益；主题素材已内置，解锁后可以离线使用。"
      ]
    ],
    "related": [
      "guitartool-1-1-4",
      "offline-guitar-tools",
      "share-chord-diagrams"
    ]
  }
];

export const enRelease114Pages: LandingPage[] = [
  {
    "slug": "guitartool-1-1-4",
    "title": "GuitarTool 1.1.4: new themes, release notes and device support",
    "description": "Explore released GuitarTool 1.1.4: three optional themes, tuning and timing improvements, chord sharing, Apple device support, free tools and privacy.",
    "eyebrow": "GUITARTOOL 1.1.4 · 26 OCTOBER 2026",
    "lead": "GuitarTool 1.1.4 is available. Plush Practice Room, Oddball Rehearsal and Zero Gravity Circus add three new looks. The tuner, metronome and chord library remain free and offline. Ten complete themes are separate one-time purchases; four basic looks are free. Usage analytics is disabled.",
    "proof": [
      "iOS / iPadOS 17+",
      "watchOS 10+",
      "13 interface languages"
    ],
    "showcase": {
      "image": "/release-1.1.4/en-themes.webp",
      "alt": "GuitarTool 1.1.4 English theme artwork with Plush, Paper and Vinyl screens",
      "caption": "Theme artwork supplied for this App Store release; complete themes are separate purchases.",
      "width": 660,
      "height": 1434
    },
    "sections": [
      {
        "title": "What is better in this release?",
        "body": "Alongside the three themes, 1.1.4 improves pitch detection stability and recovery after audio-input interruptions, tempo changes and countdowns, chord selection, playback and sharing, and restoration of the selected theme at launch. Real performance still depends on the instrument, room, system and audio route.",
        "points": [
          "Preview a theme before deciding to buy",
          "Refined iPhone, iPad window and large-text layouts",
          "No theme purchase needed for core practice"
        ]
      },
      {
        "title": "Which features are on each device?",
        "body": "iPhone and iPad offer tuning, a 20–500 BPM metronome, rhythm training, chord editing, playback and sharing, and complete themes. Apple Watch has a dedicated tuner and metronome, without the phone theme layouts or full chord editor. Home Screen widgets control the metronome, with sizes offered by the system.",
        "points": [
          "iOS / iPadOS 17 or later; watchOS 10 or later",
          "Extra-large portrait widget requires iOS 27+ and system support for the device and available space",
          "Bundled Chinese voice counting is for iPhone/iPad; 13 interface languages do not mean 13 spoken languages"
        ]
      },
      {
        "title": "What is free, paid or offline?",
        "body": "Core tools and Clear Sky, Starry Night, Pine Forest and Graphite are free. Ten complete themes unlock through separate non-consumable App Store purchases, without a theme subscription. Artwork is bundled and works offline after unlock. Buying, restoring and loading product information may require internet access.",
        "points": [
          "Current pricing follows your App Store region",
          "One purchase unlocks its own theme",
          "Restore existing purchases with the same Apple Account"
        ]
      },
      {
        "title": "Release and privacy scope",
        "body": "Apple’s public US storefront reports release at 06:14 on 26 October 2026, China time. Check your local App Store for regional availability. Version 1.1.4 has no usage-analytics switch, does not initialize PostHog and sends no usage or diagnostic analytics events. Tuning audio stays on-device.",
        "points": [
          "A public Android / Wear OS release has not been confirmed",
          "Website hosting network information is covered in the privacy policy",
          "Historical test-build data is not automatically deleted by updating; see the policy for requests"
        ]
      }
    ],
    "faq": [
      [
        "Will my existing theme purchases remain?",
        "The existing product purchases remain separate. Use the purchasing Apple Account and restore in the Theme Gallery if locked. New themes require separate purchases."
      ],
      [
        "Do the new themes change which tools are free?",
        "No. Tuning, metronome and chord tools stay free. A theme purchase unlocks the corresponding complete appearance."
      ],
      [
        "Does 1.1.4 upload practice audio?",
        "No. Microphone input is used for real-time on-device tuning, never saved or uploaded. Usage analytics is disabled in this release."
      ]
    ],
    "related": [
      "themes-and-purchases",
      "offline-guitar-tools",
      "voice-counting-metronome",
      "apple-watch-tuner"
    ]
  },
  {
    "slug": "themes-and-purchases",
    "title": "GuitarTool themes: preview, buy and restore purchases",
    "description": "GuitarTool 1.1.4 purchase help: four free looks, ten separate one-time themes, new theme previews, offline use, restoration and pending approval.",
    "eyebrow": "THEME GALLERY · PURCHASE HELP",
    "lead": "Open Personalization → Theme Gallery to preview the full interface before choosing a theme. Four basic looks stay free. Ten complete themes are separate one-time purchases. Buying one does not unlock the others or restrict the free tuner, metronome and chords.",
    "proof": [
      "Four free basic looks",
      "Ten separate one-time purchases",
      "Offline after unlock"
    ],
    "sections": [
      {
        "title": "Which ten complete themes are available?",
        "body": "Morning Mist Studio, Lunar Radio, Paper Ensemble, Pocket Synth, Vinyl Afterhours, Luthier Atlas, Jade Resonance, Oddball Rehearsal, Zero Gravity Circus and Plush Practice Room. The last three arrive in 1.1.4. Complete themes style iPhone/iPad tools and chord cards; Watch and widgets use dedicated layouts.",
        "points": [
          "Plush Practice Room: fabric, embroidery and a kitten",
          "Oddball Rehearsal: clay characters and a beat stage",
          "Zero Gravity Circus: puppets and a wooden circus scene"
        ]
      },
      {
        "title": "Preview and purchase",
        "body": "Install 1.1.4, open Personalization and Theme Gallery, preview the theme and choose its product. Final price and currency are shown in the App Store confirmation. Each theme is an independent non-consumable purchase, not a subscription. Earlier purchases do not include new products.",
        "points": [
          "Check the theme name before purchase",
          "Stay online while loading or buying products",
          "For Ask to Buy, wait for approval instead of repeating payment attempts"
        ]
      },
      {
        "title": "A purchased theme is still locked",
        "body": "Use the Apple Account that made the purchase. Connect to the internet and tap Restore Purchases in the Theme Gallery. Wait for Apple to sync, then reopen the theme. A pending purchase needs Apple approval. Refunds or revoked purchases can change entitlement status.",
        "points": [
          "iOS purchases are not Google Play entitlements",
          "Email the theme name, app version, error text and reproduction steps",
          "Do not send card details, passwords or full payment receipts"
        ]
      },
      {
        "title": "Offline use and restoring after updates",
        "body": "All ten themes have artwork bundled in the app. Once unlocked they need no theme server or extra asset download. Version 1.1.4 improves restoration of the selected theme at launch. If a reinstall leaves a theme locked, restore online before using it offline.",
        "points": [
          "The four free basic looks remain available",
          "Core practice does not depend on purchases",
          "Use the support link in the navigation for unresolved issues"
        ]
      }
    ],
    "faq": [
      [
        "Are themes subscriptions?",
        "No. Each complete theme is a separate one-time non-consumable purchase. Current pricing is shown by your local App Store."
      ],
      [
        "Why is Plush Practice Room locked after buying Morning Mist Studio?",
        "They are independent products. One purchase does not unlock other themes. Your purchased theme and four free basic looks remain available."
      ],
      [
        "Does Restore Purchases need internet access?",
        "Usually yes. Apple StoreKit syncs entitlements. Theme artwork is already included, so it works offline after unlock."
      ]
    ],
    "related": [
      "guitartool-1-1-4",
      "offline-guitar-tools",
      "share-chord-diagrams"
    ]
  }
];
