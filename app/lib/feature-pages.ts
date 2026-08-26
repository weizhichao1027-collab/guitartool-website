import type { LandingPage } from "@/app/lib/landing-pages";

export const enFeaturePages: LandingPage[] = [
  {
    slug: "share-chord-diagrams",
    title: "Save and Share Guitar or Ukulele Chord Diagrams",
    description: "Turn any GuitarTool guitar or ukulele voicing into a clear chord card, preview it, save it to Photos or share the image from iPhone or iPad.",
    eyebrow: "CHORD CARDS · GUITAR & UKULELE",
    lead: "A useful voicing should be easy to keep, teach and send. GuitarTool turns the exact chord on screen into a clean image card without adding an account or upload step.",
    proof: ["Preview before sharing", "Save to Photos", "No account or upload"],
    sections: [
      {
        title: "Share the voicing you are actually using",
        body: "Choose a guitar or ukulele chord, move to the position you want and open the chord-card preview. The exported image follows the visible strings, muted notes, fretted notes and five-fret window, including a clear starting-fret label for higher positions.",
        points: ["Guitar and ukulele layouts", "Open and higher-position voicings", "The same fret-window logic as the app"],
      },
      {
        title: "Useful for lessons without becoming an ad",
        body: "Save the card to Photos for a practice folder, or send the image through the iOS share sheet to a student, teacher, bandmate or friend. The recipient can read and keep the diagram without installing GuitarTool, and the image contains no forced download link.",
        points: ["Preview before the final action", "Native Photos and system sharing", "Localized card labels in 13 languages"],
      },
    ],
    faq: [
      ["Does the shared image include an App Store link?", "No. GuitarTool shares the chord image itself, so the recipient can use it without being pushed to a download page."],
      ["Can I share a higher-position chord?", "Yes. The card keeps the correct five-fret window and shows the starting fret beside the diagram."],
      ["Does saving a chord card require an account?", "No. The preview, Photos save and system share flow run on your device without a GuitarTool account."],
    ],
    related: ["guitar-chords", "ukulele-chords", "offline-guitar-tools"],
  },
  {
    slug: "apple-watch-metronome",
    title: "Apple Watch Metronome for Practice Away from Your Phone",
    description: "Control tempo, time signature and playback from Apple Watch. GuitarTool keeps the audible beat running when the wrist lowers or the display dims.",
    eyebrow: "APPLE WATCH METRONOME",
    lead: "Start a dependable pulse from your wrist, then keep playing. GuitarTool separates the audible beat from the screen refresh so lowering your wrist does not end the practice session.",
    proof: ["Tempo and meter controls", "Background audio", "No phone screen required"],
    sections: [
      {
        title: "Keep the pulse while your hands return to the instrument",
        body: "Set the BPM, choose a common time signature and start or pause from Apple Watch. When the watch display dims or the wrist moves down, the visual updates can rest while the metronome audio continues through a supported output route.",
        points: ["BPM, playback and time-signature controls", "Audio-clock-driven timing", "Interruption and route-change recovery"],
      },
      {
        title: "Part of the same private practice toolkit",
        body: "The watch companion follows the language selected on iPhone and sits alongside GuitarTool's iPhone, iPad and Home Screen widget experiences. It does not add an account, analytics SDK or cloud profile to the practice flow.",
        points: ["13 interface languages", "Companion to the iPhone app", "No ads, account or tracking SDK"],
      },
    ],
    faq: [
      ["Does the beat stop when I lower my wrist?", "No. In the updated watch app, lowering the wrist or dimming the display pauses visual refresh work while the audible metronome continues."],
      ["Can I change the tempo on Apple Watch?", "Yes. You can adjust BPM, start or pause playback and switch among common time signatures from the watch."],
      ["Do all Apple Watch models play through the built-in speaker?", "Audio routing depends on the watch model and connected devices. Supported watches can use the built-in speaker; older models may require Bluetooth audio."],
    ],
    related: ["online-metronome", "rhythm-practice", "offline-guitar-tools"],
  },
];

export const zhFeaturePages: LandingPage[] = [
  {
    slug: "share-chord-diagrams",
    title: "保存与分享吉他、尤克里里和弦图",
    description: "把 GuitarTool 中的任意吉他或尤克里里指法生成清晰卡片，预览后保存到相册，或从 iPhone、iPad 分享图片。",
    eyebrow: "和弦卡片 · 吉他与尤克里里",
    lead: "一个真正顺手的指法，应该容易保存、讲解和转发。GuitarTool 会把屏幕上的当前和弦生成清晰图片，不需要账户，也不需要上传。",
    proof: ["分享前先预览", "一键保存到相册", "无需账户或上传"],
    sections: [
      {
        title: "分享你正在使用的那个按法",
        body: "选择吉他或尤克里里和弦，切换到需要的把位，再打开和弦卡片预览。生成图片会准确保留当前琴弦、静音、按弦点与五品窗口；高把位还会在指板旁清楚标出起始品位。",
        points: ["分别适配吉他与尤克里里", "覆盖开放把位和高把位", "与 APP 主界面共用五品窗口规则"],
      },
      {
        title: "适合教学与交流，不把分享变成广告",
        body: "可以把卡片保存到相册建立练习文件夹，也可以通过 iOS 系统分享发给学生、老师、乐队成员或朋友。接收者无需安装 GuitarTool 就能直接查看和保存，图片中也不会强制附带下载链接。",
        points: ["执行前查看最终卡片", "原生相册与系统分享", "卡片文字覆盖 13 种语言"],
      },
    ],
    faq: [
      ["分享图片会附带 App Store 链接吗？", "不会。GuitarTool 只分享和弦图片本身，接收者可以直接使用，不会被强制跳转下载。"],
      ["高把位和弦也能分享吗？", "可以。卡片会保持正确的五品窗口，并在指板旁显示起始品位。"],
      ["保存和弦卡片需要注册吗？", "不需要。预览、保存到相册和系统分享都在设备上完成，无需 GuitarTool 账户。"],
    ],
    related: ["guitar-chords", "ukulele-chords", "offline-guitar-tools"],
  },
  {
    slug: "apple-watch-metronome",
    title: "不用一直亮屏的 Apple Watch 节拍器",
    description: "在 Apple Watch 上控制速度、拍号和播放；落腕或屏幕变暗后，GuitarTool 仍可继续输出声音节拍。",
    eyebrow: "APPLE WATCH 节拍器",
    lead: "从手腕启动稳定拍点，然后把双手还给乐器。GuitarTool 将声音节拍与屏幕刷新分开处理，落腕不会结束正在进行的练习。",
    proof: ["速度与拍号控制", "后台音频持续播放", "无需一直查看手机"],
    sections: [
      {
        title: "手回到乐器上，拍点继续",
        body: "可以在 Apple Watch 上设置 BPM、切换常用拍号并开始或暂停。手表屏幕变暗或落腕后，界面与触觉刷新会休息，节拍声音则通过可用音频路线继续播放。",
        points: ["BPM、播放与拍号控制", "采样时钟驱动节拍", "支持中断与音频路线恢复"],
      },
      {
        title: "仍然属于同一套私密练习流程",
        body: "Watch 伴随 APP 会接收 iPhone 端选择的语言，并与 iPhone、iPad 和主屏幕小组件体验保持一致。它不会为了跨设备练习增加账户、统计 SDK 或云端个人资料。",
        points: ["支持 13 种界面语言", "作为 iPhone APP 的伴随工具", "无广告、无账户、无追踪 SDK"],
      },
    ],
    faq: [
      ["落腕后节拍会停止吗？", "不会。新版 Watch APP 在落腕或屏幕变暗时暂停界面刷新，但声音节拍继续。"],
      ["可以直接在手表上调速度吗？", "可以。可在 Apple Watch 上调整 BPM、开始或暂停，并切换常用拍号。"],
      ["所有 Apple Watch 都能用内置扬声器播放吗？", "音频路线取决于手表型号和连接设备。支持的型号可使用内置扬声器，较旧型号可能需要蓝牙音频。"],
    ],
    related: ["online-metronome", "rhythm-practice", "offline-guitar-tools"],
  },
];
