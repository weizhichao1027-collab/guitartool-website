import type { LandingPage } from "@/app/lib/landing-pages";

export const enFeaturePages: LandingPage[] = [
  {
    slug: "share-chord-diagrams",
    title: "Save and Share Guitar or Ukulele Chord Diagrams",
    description: "Turn any GuitarTool guitar or ukulele voicing into a clear chord card, preview it, save it to Photos or share the image from iPhone or iPad.",
    eyebrow: "CHORD CARDS · GUITAR & UKULELE",
    lead: "A useful voicing should be easy to keep, teach and send. GuitarTool turns the exact chord on screen into a clean image card without adding an account or upload step.",
    proof: ["Preview before sharing", "Save to Photos", "No account or upload"],
    showcase: {
      image: "/en-chord-card-share.webp",
      alt: "GuitarTool chord card preview with Save to Photos and Share Image actions",
      caption: "The real version 1.0.7 interface: create the current voicing, inspect the final card, then save or share it.",
    },
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
  {
    slug: "chord-diagrams-for-students",
    title: "How to Share Chord Diagrams with Guitar or Ukulele Students",
    description: "A practical lesson workflow for choosing an exact guitar or ukulele voicing, checking higher positions and sending a readable chord card a student can keep.",
    eyebrow: "TEACHING WORKFLOW · CHORD CARDS",
    lead: "A chord name is not enough when a lesson depends on one exact fingering. Use a clear, repeatable workflow to capture the position you taught and give the student something useful after the call or class ends.",
    proof: ["Exact voicing, not only a chord name", "Readable higher positions", "A file the student can keep"],
    showcase: {
      image: "/en-chord-card-share.webp",
      alt: "GuitarTool chord-card workflow for sharing an exact guitar fingering with a student",
      caption: "Choose the exact position, inspect the final card and send the image through the system share sheet.",
    },
    sections: [
      {
        title: "Decide what the student needs to reproduce",
        body: "Start with the musical job of the chord: an open shape for a beginner, a compact higher voicing for a band arrangement, or a ukulele shape that matches the lesson tuning. Select that exact position before creating the card so the image records the fingering you demonstrated rather than a generic first result.",
        points: ["Choose guitar or standard high-G GCEA ukulele", "Switch among several positions for the same chord", "Play the visible voicing before sending it"],
      },
      {
        title: "Check the diagram as a standalone instruction",
        body: "A student may open the image days later without the lesson conversation beside it. Confirm the chord name, muted and open strings, finger dots and starting-fret label are all readable. GuitarTool uses the same five-fret window in the library and the exported card, so a higher-position shape does not shift between teaching and sharing.",
        points: ["Muted and open strings remain explicit", "High positions include a localized starting fret", "The preview shows the final exported image"],
      },
      {
        title: "Send one useful artifact after the lesson",
        body: "Save the card to a lesson folder or share the image through Messages, Mail or another app chosen by the teacher. The recipient does not need a GuitarTool account and the card does not force an App Store link, which keeps the handoff focused on the fingering rather than promotion.",
        points: ["Save to Photos for lesson folders", "Use the native iOS share sheet", "No account, cloud upload or forced download link"],
      },
      {
        title: "Build a small practice sequence, not an image pile",
        body: "For a progression, send only the shapes needed for the next practice block and name the message by song section or exercise. Ask the student to compare transitions at a slow tempo, then raise the BPM once every change is clean. The cards document the harmony; the metronome defines the practice step.",
        points: ["Group cards by exercise or song section", "Pair the shapes with a starting BPM", "Update only the voicing that changed"],
      },
    ],
    faq: [
      ["Does the student need GuitarTool to read the card?", "No. The shared result is a normal image that can be viewed and saved without installing the app."],
      ["Can the card show a barre or another higher-position shape?", "Yes. The five-fret window follows the selected voicing and adds a starting-fret label when the shape begins above the first fret."],
      ["Should I send every possible fingering?", "Usually no. Send the exact fingering taught for the current exercise, then add alternatives only when the musical context requires them."],
    ],
    related: ["share-chord-diagrams", "rhythm-practice", "guitar-chords", "ukulele-chords"],
  },
  {
    slug: "apple-watch-metronome-audio-design",
    title: "Designing an Apple Watch Metronome That Keeps Audio Running",
    description: "A first-hand engineering case study on separating Apple Watch metronome audio timing from screen and haptic refresh, with route and interruption recovery.",
    eyebrow: "ENGINEERING CASE STUDY · WATCH AUDIO",
    lead: "A musician lowers their wrist precisely when the metronome needs to become less visible and remain audible. GuitarTool 1.0.7 treats audio timing, interface refresh and haptics as separate responsibilities so the beat can continue through the real practice lifecycle.",
    proof: ["Audio sample-clock timing", "UI and haptics can pause", "Route and interruption recovery"],
    showcase: {
      image: "/en-devices.webp",
      alt: "GuitarTool running across iPhone, iPad and Apple Watch",
      caption: "The Apple Watch companion keeps the audible timing path independent from visual refresh work.",
      width: 832,
      height: 1800,
    },
    sections: [
      {
        title: "Treat wrist-down as a normal state, not an error",
        body: "A watch interface becomes inactive when the display dims or the wrist lowers. Stopping the entire metronome at that boundary makes the product fail during the exact moment a player returns both hands to the instrument. The updated design pauses view and haptic work while preserving the user’s explicit intent to keep playback running.",
        points: ["Playback intent survives display dimming", "Visual updates stop when they are not useful", "Haptics do not pretend to be background audio"],
      },
      {
        title: "Schedule beats on the audio sample clock",
        body: "The render path uses a 44.1 kHz audio timeline and calculates each beat position in frames. Accent and regular click samples are prepared ahead of time, while the real-time callback advances beat state without allocating new audio voices. At the 500 BPM maximum, the interval remains longer than the short click, so clicks never need to overlap.",
        points: ["Frame-based beat positions", "Precomputed accent and regular click samples", "A render path designed to avoid real-time allocation"],
      },
      {
        title: "Apply changes at a musical boundary",
        body: "Tempo or meter changes are armed and applied at the next beat boundary rather than spliced unpredictably into the active buffer. The engine publishes a compact beat position back to the interface, letting the visual layer follow the audio clock instead of becoming the clock itself.",
        points: ["Configuration changes align to a beat", "The audio engine owns timing", "The interface observes a published position"],
      },
      {
        title: "Recover without replaying stale beats",
        body: "Audio routes and interruptions can move the hardware timestamp forward. On recovery, the renderer skips historical beat positions instead of firing a burst of delayed clicks. The product still states an important boundary: output depends on the watch model and connected route, so older devices may require Bluetooth audio.",
        points: ["Skip stale beats after route recovery", "React to interruption and route changes", "Describe supported output honestly"],
      },
    ],
    faq: [
      ["Why not use the screen timer to drive audio?", "The display lifecycle is allowed to pause when the wrist lowers. Audio timing must therefore live on an audio clock that can continue independently."],
      ["Does background audio mean background haptics continue?", "No. GuitarTool promises continuing sound; interface and haptic refresh work can pause when the app is inactive."],
      ["Will every Apple Watch use its built-in speaker?", "No. The active output route depends on the watch model and connected devices; older models may need Bluetooth audio."],
    ],
    related: ["apple-watch-metronome", "online-metronome", "rhythm-practice", "offline-guitar-tools"],
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
    showcase: {
      image: "/chord-card-share.webp",
      alt: "GuitarTool 和弦卡片预览、保存到相册与分享图片界面",
      caption: "1.0.7 真实界面：生成当前按法，先查看最终卡片，再保存到相册或分享图片。",
    },
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
  {
    slug: "chord-diagrams-for-students",
    title: "如何把和弦指法图清楚地发给学生",
    description: "从选择准确吉他或尤克里里按法、检查高把位，到把学生可长期保存的和弦卡片发出去，一套可重复的教学流程。",
    eyebrow: "教学流程 · 和弦卡片",
    lead: "一堂课真正需要传达的是某一个准确按法，而不只是和弦名称。把本次讲解使用的把位固定下来，学生在课后才有一张可以直接照着练的图。",
    proof: ["记录准确按法", "高把位仍然清楚", "学生无需安装即可查看"],
    showcase: {
      image: "/chord-card-share.webp",
      alt: "使用 GuitarTool 把准确吉他和弦按法生成卡片并分享给学生",
      caption: "选好本次教学使用的把位，检查最终卡片，再通过系统分享发送图片。",
    },
    sections: [
      {
        title: "先确定学生需要复现的那个按法",
        body: "先从音乐场景出发：初学者需要开放和弦，乐队编配可能需要紧凑的高把位，尤克里里课程则要确认标准 High-G GCEA 的四弦按法。生成卡片前先切换到课堂上实际示范的位置，不让学生只看到默认的第一个答案。",
        points: ["选择吉他或标准 High-G GCEA 尤克里里", "在同名和弦的多个把位间切换", "发送前先试听当前按法"],
      },
      {
        title: "把图片当成一份独立说明来检查",
        body: "学生可能几天后才再次打开图片，届时不会有课堂对话在旁边解释。检查和弦名称、空弦、闷弦、按弦点与起始品位是否一眼可读。GuitarTool 的和弦库与导出卡片共用五品窗口，高把位不会在分享时发生偏移。",
        points: ["空弦与闷弦状态明确保留", "高把位显示本地化起始品位", "预览页就是最终导出结果"],
      },
      {
        title: "课后只发一份真正有用的材料",
        body: "可以保存到相册中的课程文件夹，也可以通过信息、邮件或老师选择的其他 App 发送。接收者不需要 GuitarTool 账户，图片也不会强制附加 App Store 链接，交接重点始终是指法本身。",
        points: ["保存到相册整理课程", "使用原生 iOS 分享菜单", "无需账户、云端上传或强制下载链接"],
      },
      {
        title: "组合成练习步骤，而不是堆一串图片",
        body: "如果是和弦进行，只发送下一阶段练习真正需要的几张卡片，并在消息里标注歌曲段落或练习编号。让学生先用较慢 BPM 比较转换，再在动作干净后逐步提速：卡片负责记录和声，节拍器负责定义练习进度。",
        points: ["按练习或歌曲段落分组", "为这组按法给出起始 BPM", "只更新发生变化的那个按法"],
      },
    ],
    faq: [
      ["学生必须安装 GuitarTool 才能看吗？", "不需要。分享结果是普通图片，学生无需安装 App 就能查看和保存。"],
      ["横按和其他高把位也能清楚显示吗？", "可以。五品窗口会跟随当前按法，高于第一品时还会显示起始品位。"],
      ["应该一次把所有可能按法都发过去吗？", "通常不需要。先发送本次练习实际使用的按法，只有音乐场景需要时再补充替代把位。"],
    ],
    related: ["share-chord-diagrams", "rhythm-practice", "guitar-chords", "ukulele-chords"],
  },
  {
    slug: "apple-watch-metronome-audio-design",
    title: "Apple Watch 节拍器落腕后继续发声的设计",
    description: "GuitarTool 1.0.7 工程复盘：把 Watch 节拍器的声音时钟、界面与触觉刷新分开，并处理音频路线和中断恢复。",
    eyebrow: "工程复盘 · WATCH 音频",
    lead: "演奏者放下手腕，正是节拍器应该减少视觉存在、继续稳定发声的时刻。GuitarTool 1.0.7 将声音时钟、界面刷新和触觉反馈拆成不同职责，让节拍跟随真实练习生命周期。",
    proof: ["采样时钟驱动", "界面与触觉可暂停", "音频路线与中断恢复"],
    showcase: {
      image: "/devices.webp",
      alt: "GuitarTool 在 iPhone、iPad 与 Apple Watch 上的多设备界面",
      caption: "Apple Watch 伴随 App 让声音计时路径独立于屏幕刷新。",
      width: 832,
      height: 1800,
    },
    sections: [
      {
        title: "把落腕视为正常状态，而不是异常",
        body: "手表屏幕变暗或落腕时，界面会进入非活跃状态。如果整个节拍器也在这里停止，产品恰好会在演奏者把双手放回乐器时失效。新版设计保留用户主动开始播放的意图，只暂停暂时没有价值的界面与触觉刷新。",
        points: ["播放意图不随暗屏消失", "无用的视觉刷新及时停止", "不把触觉伪装成后台音频"],
      },
      {
        title: "在声音采样时钟上安排每一拍",
        body: "渲染路径使用 44.1 kHz 音频时间线，把每一拍的位置换算成帧。重拍与普通拍的短促声音样本提前准备，实时回调只推进拍点状态，不临时创建新的音频声部。即使在最高 500 BPM 下，拍点间隔仍长于点击声本身，因此无需让两次点击重叠。",
        points: ["按音频帧计算拍点位置", "预先生成重拍与普通拍样本", "实时路径避免临时分配"],
      },
      {
        title: "在音乐边界应用速度与拍号变化",
        body: "速度或拍号调整先进入待应用状态，再在下一个拍点边界生效，避免把变化随意切进当前缓冲区。声音引擎把精简的拍点位置发布给界面，让视觉层跟随音频时钟，而不是反过来用屏幕定时器驱动声音。",
        points: ["配置变化与拍点对齐", "声音引擎拥有计时职责", "界面只观察已发布位置"],
      },
      {
        title: "恢复时跳过过期拍点，不补打一串旧声音",
        body: "音频路线切换或系统中断可能让硬件时间戳向前跳。恢复时渲染器会跳过已经过去的拍点，而不是瞬间补打一串延迟点击。产品仍保留真实边界：输出路线取决于手表型号和连接设备，较旧型号可能需要蓝牙音频。",
        points: ["路线恢复后跳过过期拍点", "响应系统中断与音频路线变化", "对支持范围保持准确表述"],
      },
    ],
    faq: [
      ["为什么不能用屏幕定时器驱动声音？", "屏幕生命周期在落腕后可以暂停，因此声音必须由能够独立继续的音频时钟负责。"],
      ["后台发声是否意味着后台触觉也继续？", "不是。GuitarTool 承诺继续的是声音；App 非活跃时界面与触觉刷新可以暂停。"],
      ["所有 Apple Watch 都会从内置扬声器输出吗？", "不会。实际路线取决于型号和连接设备，较旧型号可能需要蓝牙音频。"],
    ],
    related: ["apple-watch-metronome", "online-metronome", "rhythm-practice", "offline-guitar-tools"],
  },
];
