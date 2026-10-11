import type { LandingPage } from "@/app/lib/landing-pages";
import { RELEASE_PUBLISHED } from "@/app/lib/site";

// Source: shipped iOS 1.1.3 controls and bundled audio; images remain labelled by their actual release.
export const RELEASE_1_1_3_UPDATED = RELEASE_PUBLISHED;
export const RELEASE_1_1_3_GUIDE_SLUGS = ["voice-counting-metronome", "metronome-bpm-widget"] as const;

export const enRelease113Pages: LandingPage[] = [
  {
    slug: "voice-counting-metronome",
    title: "Use offline Chinese voice counting in GuitarTool",
    description: "Set up GuitarTool 1.1.3 voice counting on iPhone and iPad. Preview Chinese counts at your current BPM, combine them with subdivisions and practise offline.",
    eyebrow: "GUITARTOOL 1.1.3 · VOICE COUNTING",
    lead: "Set 20–500 BPM. Hear the beat number as you play. GuitarTool's Voice sound counts main beats in Chinese from one to twelve, restarting at one each bar. The audio is bundled and works offline, including when the app interface uses English.",
    proof: ["Chinese counts 1–12", "Preview at your current BPM", "Offline on iPhone and iPad"],
    sections: [
      { title: "Choose Voice in the metronome settings", body: "Update the native iPhone or iPad app to 1.1.3 or later. Stop playback, choose a comfortable tempo such as 60 BPM and open Metronome → Settings. Tap the current sound row, then choose Voice in Metronome Sound. With playback stopped, choosing Voice previews Chinese one, two, three and four at your current BPM. Tapping the selected sound previews it again. Tap Done in the sound picker, then Done in settings to return to the metronome.", points: ["Choose the sound row inside Settings", "Stop playback to hear the four-count preview", "The selected sound is saved locally"] },
      { title: "Start with four main beats, then add subdivisions", body: "Use 4/4 with one note or strum per main beat. Voice counts one through four and starts again at one in the next bar. With another meter it counts the number of main beats in the bar, up to twelve. Eighth notes, triplets and sixteenth notes add clicks between the spoken main beats; they do not add spoken subdivision syllables. Eighth-note Swing changes those subdivision timings.", points: ["Spoken numbers identify the main beat", "Subdivisions use clicks between counts", "Swing is available with eighth-note subdivision"] },
      { title: "Keep counting through a silent-bar exercise", body: "Voice can be used with the native app's Silent Bars training. In Metronome → Presets → Rhythm Training, try two audible bars followed by two silent bars. Both the spoken counts and subdivision clicks are silent in the silent interval, while the internal beat keeps going. Count for yourself and compare your landing with the voice when the audible bars return. The sound-picker preview plays its four counts independently of the training silence setting.", points: ["Silent bars suppress voice and clicks", "The internal beat continues", "Begin with a short silent interval"] },
      { title: "Check the sound route if you cannot hear the count", body: "Confirm Voice is selected, check device volume and the current Bluetooth or AirPlay route, then stop and restart playback. Check Silent Bars if the silence repeats at regular bar boundaries. Voice is playback of bundled Chinese audio: it needs no microphone, speech-recognition permission or internet connection. These instructions describe the native iPhone/iPad app. The Watch companion and the website metronome do not offer this Voice sound.", points: ["Chinese voice is independent of interface language", "No audio download or microphone access", "Check deliberate training silence first"] },
    ],
    faq: [
      ["Does English interface language produce English counts?", "No. Version 1.1.3 includes Chinese spoken counts regardless of the interface language. In English, the sound is labelled Voice."],
      ["Can I preview the voice at a different tempo?", "Yes. Change BPM in the metronome, stop playback and tap Voice in the sound picker. Its one-to-four preview uses the current BPM."],
      ["Does Voice count every subdivision?", "No. It speaks main beat numbers, from one to the bar's beat count, up to twelve. Subdivisions between main beats use clicks."],
      ["Is voice counting a paid feature or online service?", "No. It is a free core metronome feature using bundled audio, so it works offline. Optional themes are separate purchases."],
      ["Is voice counting available on Apple Watch or in the browser?", "No. This guide covers the native iPhone and iPad feature; the Watch companion and browser metronome do not provide this Voice sound."],
    ],
    related: ["metronome-bpm-widget", "silent-bar-metronome", "metronome-for-beginners", "rhythm-practice"],
  },
  {
    slug: "metronome-bpm-widget",
    title: "Confirm BPM changes and use the metronome widget",
    description: "Change BPM with Done or Cancel in GuitarTool 1.1.3, then use Home Screen controls. Learn which widgets offer TAP, meter, subdivisions and the iOS 27 portrait layout.",
    eyebrow: "GUITARTOOL 1.1.3 · BPM & WIDGETS",
    lead: "Type a tempo, confirm the change and return to practice. GuitarTool 1.1.3 gives every theme the same BPM input panel and adds an extra-large portrait widget on iOS 27 or later, where the system offers that size.",
    proof: ["20–500 BPM", "Done saves · Cancel discards", "Extra-large portrait on iOS 27+"],
    sections: [
      { title: "Tap the BPM number and confirm your new tempo", body: "In the native iPhone/iPad metronome, tap the displayed BPM number to open the input panel. Replace the existing number, then tap Done at the top. The panel closes and the tempo is saved. Cancel, or swiping the panel away, discards the draft and keeps the previous tempo. An empty value or text containing non-digit characters disables Done. Numeric values outside the range are clamped to 20–500 BPM; decimal digits such as ١٨٠ and ２１０ are accepted.", points: ["Done and Cancel stay in the panel's top bar", "The same input flow works across themes", "Enter whole-number BPM"] },
      { title: "Understand how manual tempo changes affect practice", body: "Confirming a BPM value follows the app's manual tempo rule: it exits staged tempo training so the newly entered tempo takes control. Cancel leaves the training settings unchanged. If the metronome is already playing, confirming keeps playback running and preserves the existing countdown deadline. To revise the stage sequence itself, use Presets → Rhythm Training; editing training parameters during playback restarts the exercise from bar one.", points: ["Confirming is a manual tempo change", "Cancel does not change training", "The countdown keeps its existing deadline"] },
      { title: "Add the widget size that fits your Home Screen", body: "Open GuitarTool once, then use the system's Home Screen widget picker to add GuitarTool. Small, medium and large sizes are available on supported iOS/iPadOS 17 or later devices. All three provide tempo and play/pause controls; medium and large add meter and TAP, and large adds subdivision and Swing. On iOS 27 or later, GuitarTool also registers an extra-large portrait size. Whether it appears in the picker depends on the device and the space the system makes available.", points: ["Open the main app before the first widget session", "Choose sizes in the system widget picker", "Extra-large portrait requires iOS 27 or later"] },
      { title: "Use portrait controls and refresh shared state", body: "The extra-large portrait widget groups play/pause, ±5 BPM, TAP, quick tempos at 60/80/100/120, meter choices, subdivisions and Swing in a vertical layout. Swing works with eighth notes and turns off when you choose another subdivision. Tapping the BPM or widget background opens the app's metronome; it does not open the input panel directly. App and widget settings sync through shared local state, while widget refresh timing is managed by the system. If an old value remains, open the app once, return to the Home Screen and, if necessary, remove and add the widget again.", points: ["Portrait layout includes tempo, meter and rhythm controls", "Tap BPM to open the metronome", "Watch and browser have their own controls"] },
    ],
    faq: [
      ["What happens if I enter 999 or a value below 20?", "A valid numeric input is clamped to the supported 20–500 BPM range. Empty or non-digit input cannot be confirmed."],
      ["Why did staged training switch off after Done?", "Done applies a manual tempo change, which exits staged training. Cancel or dismissing the draft leaves training unchanged."],
      ["Why can I not find the extra-large portrait widget?", "It requires iOS 27 or later, and the system decides whether that size is available for your device and Home Screen space. Existing small, medium and large widgets remain supported."],
      ["Does tapping widget BPM open the keyboard?", "No. It opens GuitarTool's metronome. Tap the BPM number in the app to open the Done/Cancel input panel."],
      ["Can I edit tempo stages from the widget?", "No. The training editor is in the native iPhone/iPad app under Presets → Rhythm Training. Widgets, Apple Watch and the browser tool do not provide that editor."],
    ],
    related: ["voice-counting-metronome", "staged-tempo-training", "visual-metronome", "tap-tempo-bpm"],
  },
];

export const zhRelease113Pages: LandingPage[] = [
  {
    slug: "voice-counting-metronome",
    title: "用离线中文人声数拍，听清每一拍的位置",
    description: "在 GuitarTool 1.1.3 的 iPhone、iPad 节拍器选择人声，按当前 BPM 试听中文数拍，搭配细分与静音小节练习。无需网络或麦克风。",
    eyebrow: "GUITARTOOL 1.1.3 · 人声数拍",
    lead: "节拍器支持 20–500 BPM。演奏时听见拍号位置。GuitarTool 的“人声”音色用中文报出每小节的主拍，一到十二，每小节重新从一开始。声音素材内置，可离线使用；即使界面切到英文，报数仍是中文。",
    proof: ["中文报数 1–12", "按当前 BPM 试听", "iPhone、iPad 离线使用"],
    sections: [
      { title: "从节拍器设置选择“人声”", body: "将 iPhone、iPad 原生 App 更新到 1.1.3 或更新版本。先停止播放，设置容易跟上的速度，例如 60 BPM，再进入“节拍器 → 设置”。点当前音色所在行，在“节拍器声音”中选择“人声”。停止播放时，选择会按当前 BPM 试听中文“一、二、三、四”；再点已选中的音色可重新试听。点音色面板的“完成”，再点设置页的“完成”，返回节拍器。", points: ["在设置中点当前音色行", "停止播放后听四拍试听", "所选音色保存在本机"] },
      { title: "先跟四拍，再加入细分点击", body: "先用 4/4 拍，每个主拍弹一个音或扫弦一次。人声依次报“一、二、三、四”，下一小节重新从“一”开始；换用其他拍号时，按该小节的主拍数报数，最多到十二。八分、三连音和十六分细分在主拍之间增加点击声，不会额外说出细分口令。八分 Swing 会改变这些细分点击的时值。", points: ["数字指出当前主拍", "细分位置使用点击声", "Swing 与八分细分搭配"] },
      { title: "在人声消失的小节自己保持数拍", body: "人声音色可与原生 App 的静音小节训练一起使用。进入“节拍器 → 预设 → 节奏训练”，先尝试有声 2 小节、静音 2 小节。静音段里人声和细分点击都会静音，内部节拍继续推进；自己继续数拍，在声音回来时检查是否对齐。音色面板的四拍试听独立于训练静音设置，仍可完整播放。", points: ["静音段同时省略人声与点击", "内部节拍不停", "先用短静音段练习"] },
      { title: "听不到人声时检查音色和输出路线", body: "确认已选择“人声”，检查设备音量与当前蓝牙／AirPlay 输出，再停止并重新播放。若固定间隔无声，先检查“静音小节”。人声是内置中文音频的本机播放，不需要麦克风、语音识别权限或联网下载。此页说明 iPhone、iPad 原生 App 的功能；Apple Watch 伴随 App 和网页节拍器不提供这款人声音色。", points: ["中文报数不随界面语言改变", "无需下载或开启麦克风", "先排除训练中的主动静音"] },
    ],
    faq: [
      ["切换英文界面会改用英文报数吗？", "不会。1.1.3 的人声素材是中文，独立于界面语言；英文界面中的音色名称为 Voice。"],
      ["可以按不同速度试听吗？", "可以。先在节拍器调整 BPM，停止播放，再到音色面板点“人声”；一到四的试听使用当前 BPM。"],
      ["人声会读出所有细分音符吗？", "不会。人声报出每小节的主拍数字，最多一到十二；主拍之间的细分位置使用点击声。"],
      ["人声数拍需要付费或网络吗？", "不需要。它属于免费核心节拍器功能，音频素材内置，离线可用；主题是另外的可选购买。"],
      ["Apple Watch 和网页节拍器也有这款人声吗？", "没有。此页说明 iPhone、iPad 原生功能，Watch 伴随 App 与浏览器节拍器不提供这款人声音色。"],
    ],
    related: ["metronome-bpm-widget", "silent-bar-metronome", "metronome-for-beginners", "rhythm-practice"],
  },
  {
    slug: "metronome-bpm-widget",
    title: "确认 BPM 输入，用主屏幕小组件控制节拍器",
    description: "GuitarTool 1.1.3 的 BPM 输入支持完成与取消。了解主屏幕小组件的调速、TAP、拍号、细分，以及 iOS 27+ 超大竖排尺寸要求。",
    eyebrow: "GUITARTOOL 1.1.3 · BPM 与小组件",
    lead: "输入速度，确认后继续练习。GuitarTool 1.1.3 在各主题中提供统一的 BPM 输入面板，并在 iOS 27 或更新系统加入超大竖排小组件；能否添加该尺寸由系统按设备与可用空间决定。",
    proof: ["20–500 BPM", "完成保存 · 取消丢弃草稿", "iOS 27+ 超大竖排尺寸"],
    sections: [
      { title: "点 BPM 数字，在面板顶部确认", body: "在 iPhone、iPad 原生节拍器点当前 BPM 数字，打开输入面板。替换原有数字，再点顶部“完成”，面板关闭并保存新速度。点“取消”或下滑关闭面板会丢弃草稿，保留原速度。空输入或含非数字字符时“完成”不可用；有效数字超出范围时会限制到 20–500 BPM。١٨٠、２１０ 等本地化十进制数字也可输入。", points: ["完成与取消固定在面板顶部", "各主题使用同一输入流程", "输入整数 BPM"] },
      { title: "分清手动调速和修改训练计划", body: "点“完成”沿用手动调速规则：退出分段速度训练，以刚输入的速度接管播放。“取消”不改变训练设置。节拍器正在运行时，确认后继续播放，现有倒计时截止时间也保持不变。如果要修改阶段序列，进入“预设 → 节奏训练”；播放中修改训练参数会从第 1 小节重新开始。", points: ["完成会应用手动调速", "取消不改变训练", "倒计时保留原期限"] },
      { title: "在系统小组件列表选择合适尺寸", body: "先打开 GuitarTool 一次，再从系统主屏幕小组件列表添加 GuitarTool。支持 iOS／iPadOS 17 或更新系统的设备可使用小、中、大号：三者都有调速和播放暂停，中号与大号增加拍号和 TAP，大号再提供细分与 Swing。iOS 27 或更新系统还注册了超大竖排尺寸；是否出现在添加列表中，取决于设备和系统提供的可用空间。", points: ["首次使用先打开主 App", "从系统列表选择尺寸", "超大竖排需要 iOS 27 或更新系统"] },
      { title: "使用竖排控件，检查 App 与小组件同步", body: "超大竖排小组件集中显示播放暂停、±5 BPM、TAP、60／80／100／120 快捷速度、拍号、细分与 Swing。Swing 只用于八分细分，切换其他细分时会自动关闭。点 BPM 或小组件背景会进入 App 的节拍器，不会直接打开输入面板。App 与小组件通过本机共享状态同步，刷新时机由系统管理；若仍显示旧值，先打开 App 再回主屏幕，必要时移除并重新添加小组件。", points: ["竖排布局集中显示速度与节奏控件", "点 BPM 进入节拍器", "Watch 与网页使用各自的控件"] },
    ],
    faq: [
      ["输入 999 或小于 20 的数字会怎样？", "有效数字会限制到支持的 20–500 BPM 范围。空输入或含非数字字符时不能点完成。"],
      ["为什么点完成后分段训练关闭了？", "完成会应用手动调速，主动退出分段训练；取消或关闭草稿面板不会改变训练设置。"],
      ["为什么找不到超大竖排尺寸？", "需要 iOS 27 或更新系统，且系统会按你的设备和主屏幕空间决定是否提供该尺寸。原有小、中、大号继续支持。"],
      ["点小组件的 BPM 会直接打开键盘吗？", "不会，只会进入 GuitarTool 节拍器。再点 App 内的 BPM 数字，才会打开有完成与取消的输入面板。"],
      ["小组件能编辑分段速度训练吗？", "不能。训练编辑器位于 iPhone、iPad 原生 App 的“预设 → 节奏训练”；小组件、Apple Watch 与网页工具不提供同样的编辑器。"],
    ],
    related: ["voice-counting-metronome", "staged-tempo-training", "visual-metronome", "tap-tempo-bpm"],
  },
];
