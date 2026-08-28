import { enTuningPages, zhTuningPages } from "@/app/lib/tuning-pages";
import { enPracticePages, zhPracticePages } from "@/app/lib/practice-pages";
import { enFeaturePages, zhFeaturePages } from "@/app/lib/feature-pages";

export type LandingLanguage = "zh" | "en";

export type LandingPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  proof: string[];
  showcase?: { image: string; alt: string; caption: string; width?: number; height?: number };
  sections: Array<{ title: string; body: string; points: string[] }>;
  faq: Array<[string, string]>;
  related: string[];
};

const en: LandingPage[] = [
  {
    slug: "guitar-tuner",
    title: "Offline Guitar Tuner for iPhone",
    description: "Tune guitar accurately with standard, Drop D, DADGAD and open tunings. GuitarTool works offline, saves no audio and includes a metronome and chord library.",
    eyebrow: "GUITAR TUNER · iPHONE & iPAD",
    lead: "A clear, private guitar tuner that shows the note, cents offset, input strength and stability—without an account, ads or an internet connection.",
    proof: ["Standard and alternate tunings", "A4 calibration from 430–446 Hz", "Audio stays on your device"],
    sections: [
      {
        title: "Tune the instrument you actually play",
        body: "Choose automatic chromatic detection or lock onto a target string. GuitarTool covers standard EADGBE, half-step and whole-step down, Drop D through Drop B, DADGAD, Low C and Open D, E, G, A and C. Reference tones help when the room is noisy or you want to tune by ear.",
        points: ["Cents and frequency readouts", "Signal-strength and stability feedback", "Guitar, bass, violin-family and mandolin modes"],
      },
      {
        title: "Built for a quick practice start",
        body: "The tuner is one part of a focused offline toolkit. Move straight from tuning to a 20–500 BPM metronome or look up a chord without signing in, waiting for a feed or dismissing an ad. Microphone input is processed live and is never saved or uploaded.",
        points: ["No registration or cloud profile", "No advertising or tracking SDK", "Works on iPhone and iPad"],
      },
    ],
    faq: [
      ["Does the tuner need internet access?", "No. Pitch detection and every core practice tool work entirely offline."],
      ["Does GuitarTool record my guitar?", "No. Microphone audio is analyzed in real time on the device and is not stored or transmitted."],
      ["Can I tune to something other than A4 = 440 Hz?", "Yes. The calibration range is 430–446 Hz."],
    ],
    related: ["drop-d-tuning", "dadgad-tuning", "open-g-tuning", "half-step-down-tuning", "chromatic-tuner", "ukulele-gcea-tuning"],
  },
  {
    slug: "ukulele-tuner",
    title: "Offline Ukulele Tuner and GCEA Chords",
    description: "Tune high-G or Low-G ukulele in GCEA, then explore 855 chord names and thousands of fingerings in one private, offline iPhone app.",
    eyebrow: "UKULELE TUNER · HIGH G & LOW G",
    lead: "Tune GCEA with clear cents feedback, then move directly into a deep, interactive ukulele chord library.",
    proof: ["High-G and Low-G GCEA", "855 ukulele chord names", "Fully offline and ad-free"],
    sections: [
      {
        title: "GCEA tuning without guesswork",
        body: "Select high-G or Low-G GCEA and let the tuner identify the nearest target string, or lock a string manually. Input strength and stability indicators make it easier to tell whether a jumping reading comes from the instrument, the room or an unsteady note.",
        points: ["Automatic and manual target modes", "Reference tones for tuning by ear", "A4 calibration from 430–446 Hz"],
      },
      {
        title: "A chord library made for four strings",
        body: "GuitarTool includes 855 ukulele chord names and 6,829 fingerings. Browse multiple positions, edit any shape on a full 20-fret board and hear the current voicing. The library is built for standard re-entrant GCEA rather than recycled guitar diagrams.",
        points: ["Multiple voicings for the same chord", "Interactive editing and identification", "Open, fretted and muted string states"],
      },
    ],
    faq: [
      ["Does it support Low-G ukulele?", "Yes. The tuner supports both high-G and Low-G GCEA."],
      ["Are ukulele chords separate from guitar chords?", "Yes. Ukulele shapes use four-string GCEA tuning and have their own fingering library."],
      ["Can I hear a chord before playing it?", "Yes. The app can play the currently displayed or edited voicing."],
    ],
    related: ["ukulele-chords", "guitar-tuner", "offline-guitar-tools"],
  },
  {
    slug: "online-metronome",
    title: "Free Online Metronome for Focused Practice",
    description: "Use a free browser metronome from 20–500 BPM, then continue with accents, subdivisions, swing, timers and progressive tempo training in GuitarTool.",
    eyebrow: "ONLINE METRONOME · 20–500 BPM",
    lead: "Set a tempo and start immediately. The browser tool handles the basic pulse; the free iPhone app adds the practice structure around it.",
    proof: ["20–500 BPM", "Tap tempo", "No sign-in"],
    sections: [
      {
        title: "A pulse you can start in seconds",
        body: "Choose a tempo, set one to twelve beats per bar and mark the first beat with a clear accent. Tap in a tempo when you know the feel but not the number. The online tool runs locally in your browser and does not require an account.",
        points: ["Keyboard and touch friendly", "Visual beat indicator", "Adjustable beats per bar"],
      },
      {
        title: "When basic timekeeping is not enough",
        body: "GuitarTool expands the metronome with subdivisions, eighth-note swing, per-beat accents, custom practice presets, countdown timers and progressive tempo training. Home Screen widgets and an Apple Watch companion keep the beat close; watch audio can continue when the wrist lowers or the display dims.",
        points: ["Quarter, eighth, triplet and sixteenth subdivisions", "Custom accents and ten sound profiles", "Interactive widgets and Apple Watch background audio"],
      },
    ],
    faq: [
      ["Is the online metronome free?", "Yes. The browser metronome and the core GuitarTool app are free to use."],
      ["What tempo range is supported?", "The online tool and the app support 20–500 BPM."],
      ["Can the app increase tempo automatically?", "Yes. Progressive tempo training can raise BPM by a chosen amount after a chosen number of bars."],
    ],
    related: ["visual-metronome", "rhythm-practice", "offline-guitar-tools", "guitar-tuner"],
  },
  {
    slug: "guitar-chords",
    title: "Guitar Chord Library with Multiple Voicings",
    description: "Explore 855 guitar chord names and 12,415 fingerings across 20 frets. Edit shapes, mute strings, identify chords and hear each voicing offline.",
    eyebrow: "GUITAR CHORDS · 12,415 FINGERINGS",
    lead: "One chord name rarely has only one useful answer. GuitarTool keeps multiple positions together and makes every diagram editable.",
    proof: ["855 chord names", "12,415 guitar fingerings", "Full 20-fret navigation"],
    sections: [
      {
        title: "Move beyond the first open shape",
        body: "Search by name, key or list and move through alternate voicings with one tap. The five-fret viewport stays readable while the full board scrolls from fret 1 through 20, so an open C and a higher-position C belong to the same learning flow.",
        points: ["Sharps, flats and familiar chord symbols", "Multiple positions for each chord", "Guitar and ukulele libraries in one place"],
      },
      {
        title: "Turn a diagram into a working fretboard",
        body: "Tap a fret to change a note, mute or restore individual strings and listen to the resulting voicing. If the edited notes match a known chord, GuitarTool identifies it. This makes the library useful for checking a remembered shape as well as discovering a new one.",
        points: ["Interactive editing and recognition", "Playback follows the exact visible voicing", "Preview, save and share a chord-card image"],
      },
    ],
    faq: [
      ["How many guitar chords are included?", "The library contains 855 chord names and 12,415 deduplicated guitar fingerings."],
      ["Can I view chords above the fifth fret?", "Yes. A readable five-fret window scrolls across the complete 20-fret board."],
      ["Can GuitarTool identify a shape I enter?", "Yes. It first checks exact fingerings and then compares the sounding pitch classes."],
      ["Can I save or share a guitar chord diagram?", "Yes. Preview the current chord card, then save it to Photos or send the image through the system share sheet."],
    ],
    related: ["ukulele-chords", "guitar-tuner", "offline-guitar-tools"],
  },
  {
    slug: "ukulele-chords",
    title: "Ukulele Chord Library for GCEA Tuning",
    description: "Find 855 ukulele chord names and 6,829 GCEA fingerings, with multiple positions, interactive editing and audio playback—all offline.",
    eyebrow: "UKULELE CHORDS · 6,829 FINGERINGS",
    lead: "A four-string chord library designed around standard re-entrant GCEA, from essential open shapes to higher positions.",
    proof: ["855 chord names", "6,829 ukulele fingerings", "Interactive GCEA fretboard"],
    sections: [
      {
        title: "Find a playable position, not just a name",
        body: "Search common symbols, sharps and flats, then switch between several fingerings for the same chord. Higher voicings remain easy to read because the diagram presents five frets at a time while retaining access to the full 20-fret board.",
        points: ["Common open shapes prioritized", "Several positions per chord", "Audio preview for the current shape"],
      },
      {
        title: "Explore what changes when one finger moves",
        body: "Edit any string and fret directly. GuitarTool recalculates the sounding notes and looks for a matching chord name, making it useful for learning the relationship between a familiar shape and nearby variations such as sevenths, suspended chords and added notes.",
        points: ["Direct four-string editing", "Automatic name recognition and playback", "Save or share the current chord card"],
      },
    ],
    faq: [
      ["Which ukulele tuning does the chord library use?", "The chord library uses standard high-G GCEA re-entrant tuning."],
      ["How many fingerings are included?", "There are 6,829 deduplicated ukulele fingerings across 855 chord names."],
      ["Does the app also include a ukulele tuner?", "Yes. The tuner supports both high-G and Low-G GCEA."],
      ["Can I send a ukulele chord shape to a student or friend?", "Yes. The app can turn the current voicing into an image you can preview, save or share."],
    ],
    related: ["ukulele-tuner", "guitar-chords", "offline-guitar-tools"],
  },
  {
    slug: "offline-guitar-tools",
    title: "Offline Guitar Practice Tools Without Ads",
    description: "A private iPhone and iPad toolkit combining tuner, metronome, guitar and ukulele chords, widgets and Apple Watch—without ads, accounts or tracking.",
    eyebrow: "OFFLINE PRACTICE TOOLKIT",
    lead: "Tune, keep time and look up chords in one calm workflow that works without a connection and does not ask you to create an account.",
    proof: ["No ads", "No account", "No third-party tracking SDK"],
    sections: [
      {
        title: "Three essential tools, one practice flow",
        body: "GuitarTool combines a real-time tuner, a flexible 20–500 BPM metronome and separate guitar and ukulele chord libraries. Every core function is available offline, so a poor connection in a rehearsal room never interrupts the task in front of you.",
        points: ["Seven tuner instrument families", "Practice presets and progressive tempo", "19,244 guitar and ukulele fingerings"],
      },
      {
        title: "Designed to stay out of the way",
        body: "There is no feed, login wall, advertising layer or analytics SDK. Tuner audio is processed on the device and is not stored. Chord cards can be saved or shared without an account, while Home Screen widgets and Apple Watch background audio reduce the steps between picking up an instrument and starting a focused session.",
        points: ["iPhone and iPad layouts", "Three interactive widget sizes", "Shareable chord cards and Apple Watch metronome"],
      },
    ],
    faq: [
      ["Is GuitarTool really usable offline?", "Yes. The tuner, metronome, chord libraries and saved settings work without an internet connection."],
      ["Does the app contain advertising?", "No. GuitarTool has no ads and no third-party tracking SDK."],
      ["Which devices are supported?", "The app supports iPhone and iPad, with Home Screen widgets and an Apple Watch metronome whose audio can continue when the display dims."],
    ],
    related: ["guitar-tuner", "online-metronome", "guitar-chords"],
  },
];

const zh: LandingPage[] = [
  {
    slug: "guitar-tuner",
    title: "iPhone 离线吉他调音器",
    description: "支持标准、Drop D、DADGAD 与开放调弦的离线吉他调音器，显示音分、频率、输入强度与稳定度，不保存或上传录音。",
    eyebrow: "吉他调音器 · iPHONE 与 iPAD",
    lead: "无需账户、广告和网络连接，用清楚的音分与稳定度反馈完成每一次调弦。",
    proof: ["标准与多种特殊调弦", "A4 430–446 Hz 校准", "声音只在设备端处理"],
    sections: [
      {
        title: "覆盖真正会用到的吉他调弦",
        body: "可以自动识别最近的目标弦，也可以手动锁定琴弦。除标准 EADGBE 外，还支持降半音、降全音、Drop D 到 Drop B、DADGAD、Low C，以及 Open D、E、G、A、C。环境嘈杂时可以播放参考音，按听觉辅助调弦。",
        points: ["同时显示音分与实时频率", "输入强度和稳定度提示", "兼顾吉他、贝斯与其他弦乐器"],
      },
      {
        title: "调好以后，直接开始练习",
        body: "调音器与 20–500 BPM 节拍器、吉他和尤克里里和弦库位于同一个离线工具箱中。无需注册，不会出现信息流或广告。麦克风输入只用于当前音高分析，既不保存成录音，也不会上传。",
        points: ["无注册和云端个人资料", "无广告和第三方追踪 SDK", "适配 iPhone 与 iPad"],
      },
    ],
    faq: [["调音器需要联网吗？", "不需要。音高检测和全部核心练习工具都可离线运行。"], ["会保存我的琴声吗？", "不会。麦克风音频只在设备端实时分析，不保存、不传输。"], ["可以使用 440 Hz 以外的基准音吗？", "可以，A4 可在 430–446 Hz 之间校准。"]],
    related: ["drop-d-tuning", "dadgad-tuning", "open-g-tuning", "half-step-down-tuning", "chromatic-tuner", "ukulele-gcea-tuning"],
  },
  {
    slug: "ukulele-tuner",
    title: "尤克里里 GCEA 离线调音器",
    description: "支持 High-G 与 Low-G GCEA 的尤克里里调音器，并提供 855 个和弦名称、6,829 个指法和试听功能。",
    eyebrow: "尤克里里调音器 · HIGH G 与 LOW G",
    lead: "先用稳定的音分反馈完成 GCEA 调弦，再进入为四弦乐器单独制作的交互式和弦库。",
    proof: ["High-G 与 Low-G GCEA", "855 个尤克里里和弦名称", "完全离线且无广告"],
    sections: [
      { title: "看清每根弦是否真正稳定", body: "选择 High-G 或 Low-G GCEA 后，可以自动识别目标弦，也可以手动锁弦。输入强度与稳定度会帮助判断读数跳动究竟来自环境噪音、拨弦过轻，还是音高本身尚未稳定。", points: ["自动与手动目标模式", "用于听觉调弦的参考音", "A4 430–446 Hz 校准"] },
      { title: "不是把吉他图硬套到四根弦上", body: "和弦库按标准高 G 的 GCEA 重新生成，包含 855 个名称和 6,829 个指法。可以切换同名和弦的不同把位，在 20 品范围内自由编辑，并试听当前画面上的真实组合。", points: ["同名和弦多种按法", "自由编辑与自动识别", "空弦、按弦和静音状态清楚可见"] },
    ],
    faq: [["支持 Low-G 尤克里里吗？", "支持。调音器包含 High-G 和 Low-G 两种 GCEA。"], ["尤克里里和弦是否独立？", "是。四弦 GCEA 使用独立的指法库。"], ["可以试听和弦吗？", "可以，APP 会播放当前显示或编辑后的指法。"]],
    related: ["ukulele-chords", "guitar-tuner", "offline-guitar-tools"],
  },
  {
    slug: "online-metronome",
    title: "免费在线节拍器：20–500 BPM",
    description: "无需登录即可使用的在线节拍器，支持 20–500 BPM、TAP 测速和 1–12 拍；APP 另有细分、Swing、计时器与渐进加速。",
    eyebrow: "在线节拍器 · 20–500 BPM",
    lead: "浏览器里先获得清晰稳定的基础拍点；需要完整训练能力时，再在免费 APP 中继续。",
    proof: ["20–500 BPM", "TAP 测速", "无需登录"],
    sections: [
      { title: "几秒内开始跟拍", body: "设置速度与每小节拍数，第一拍会使用更清楚的重音。只知道音乐感觉、不知道具体数字时，可以连续点击 TAP 计算速度。在线工具在浏览器本地运行，无需创建账户。", points: ["适合键盘和触屏", "当前拍视觉提示", "每小节 1–12 拍"] },
      { title: "从跟拍进入系统训练", body: "GuitarTool APP 在基础节拍之外提供四种细分、八分 Swing、逐拍重音、练习预设、倒计时和渐进加速。主屏幕小组件与 Apple Watch 伴随节拍器还能减少打开 APP 和寻找设置的步骤；手表落腕或屏幕变暗后，声音仍可继续。", points: ["四分、八分、三连音与十六分", "自定义重音和十套声音", "交互式小组件与 Apple Watch 后台音频"] },
    ],
    faq: [["在线节拍器免费吗？", "免费，浏览器工具和 GuitarTool 核心功能均可免费使用。"], ["支持多大的速度范围？", "在线版和 APP 均支持 20–500 BPM。"], ["APP 可以自动加速吗？", "可以，可按指定小节数和增量逐步提高 BPM。"]],
    related: ["visual-metronome", "rhythm-practice", "offline-guitar-tools", "guitar-tuner"],
  },
  {
    slug: "guitar-chords",
    title: "吉他和弦库：855 个名称与 12,415 个指法",
    description: "在完整 20 品范围内查看吉他和弦的多个把位，自由编辑、静音、自动识别并试听当前指法，全部离线使用。",
    eyebrow: "吉他和弦 · 12,415 个指法",
    lead: "一个和弦名称通常不只有一种答案。GuitarTool 把不同把位放在一起，并让每一张指法图都可以直接编辑。",
    proof: ["855 个和弦名称", "12,415 个吉他指法", "完整 20 品浏览"],
    sections: [
      { title: "不止停留在第一个开放按法", body: "可以按名称、调性或列表查找和弦，并快速切换同名和弦的其他把位。固定五品高的窗口保持易读，同时能够滚动访问 1–20 品，让开放 C 与高把位 C 自然地出现在同一条学习路径中。", points: ["支持升降号和常见和弦符号", "同名和弦多种把位", "吉他与尤克里里独立曲库"] },
      { title: "把静态图变成真正可操作的指板", body: "点击任意品位改变音符，也可以逐弦静音或恢复发声。GuitarTool 会根据当前声音尝试识别和弦名称，试听严格按照画面上的点位与静音状态播放；当前按法还可生成卡片，预览后保存或分享。", points: ["自由编辑与自动识别", "试听与当前指法完全一致", "和弦卡片预览、保存与分享"] },
    ],
    faq: [["一共有多少吉他和弦？", "包含 855 个名称和 12,415 个去重后的吉他指法。"], ["可以查看五品以上吗？", "可以，五品高窗口能够滚动浏览完整 20 品。"], ["能识别我输入的指法吗？", "可以，系统会先匹配完整指法，再按实际发声音级进行判断。"], ["可以保存或分享吉他和弦图吗？", "可以。先预览当前和弦卡片，再保存到相册或通过系统分享发送图片。"]],
    related: ["ukulele-chords", "guitar-tuner", "offline-guitar-tools"],
  },
  {
    slug: "ukulele-chords",
    title: "尤克里里和弦库：6,829 个 GCEA 指法",
    description: "查找 855 个尤克里里和弦名称和 6,829 个 GCEA 指法，支持多个把位、自由编辑、自动识别与离线试听。",
    eyebrow: "尤克里里和弦 · 6,829 个指法",
    lead: "从常用开放按法到高把位，为标准高 G 的 GCEA 单独制作的四弦和弦库。",
    proof: ["855 个和弦名称", "6,829 个尤克里里指法", "交互式 GCEA 指板"],
    sections: [
      { title: "找到真正适合当前歌曲的把位", body: "搜索常见符号、升号或降号后，可以切换同一和弦的多种指法。高把位仍采用易读的五品窗口呈现，同时保留完整 20 品范围，既适合初学开放按法，也方便寻找更顺手的连接。", points: ["常用开放按法优先", "每个和弦提供多个把位", "当前按法可直接试听"] },
      { title: "移动一根手指，理解和弦如何变化", body: "直接修改任意琴弦与品位，系统会重新计算实际发声音，并寻找可能的和弦名称。这样可以从熟悉的形状出发观察和弦变化，也可以把当前按法生成卡片保存或发送。", points: ["四根弦独立编辑", "自动识别并按 High-G GCEA 试听", "保存或分享当前和弦卡片"] },
    ],
    faq: [["和弦库使用什么调弦？", "使用标准高 G 的 GCEA re-entrant 调弦。"], ["包含多少个指法？", "855 个名称下共有 6,829 个去重指法。"], ["也有尤克里里调音器吗？", "有，调音器支持 High-G 与 Low-G GCEA。"], ["可以把尤克里里按法发给学生或朋友吗？", "可以。APP 会把当前按法生成图片，预览后可保存或分享。"]],
    related: ["ukulele-tuner", "guitar-chords", "offline-guitar-tools"],
  },
  {
    slug: "offline-guitar-tools",
    title: "无广告、无需账户的离线练琴工具",
    description: "把调音器、节拍器、吉他与尤克里里和弦库、小组件和 Apple Watch 整合在一个私密的离线 iPhone APP 中。",
    eyebrow: "离线练琴工具箱",
    lead: "调音、跟拍、查和弦集中在同一个安静流程里，无需网络和账户，也不会被广告打断。",
    proof: ["无广告", "无需账户", "无第三方追踪 SDK"],
    sections: [
      { title: "三个高频工具，一条练习流程", body: "GuitarTool 将实时调音器、20–500 BPM 节拍器，以及吉他与尤克里里和弦库放在一起。所有核心功能均可离线运行，即使排练室网络不稳定，也不会中断眼前的任务。", points: ["七类乐器调音模式", "练习预设与渐进加速", "吉他和尤克里里共 19,244 个指法"] },
      { title: "工具应该退到练习之后", body: "这里没有信息流、登录墙、广告层或统计 SDK。调音声音只在设备端处理，不会保存；和弦卡片无需账户即可保存或分享。三种尺寸的主屏幕小组件与 Apple Watch 后台节拍，也让拿起乐器到开始练习之间少几步。", points: ["iPhone 与 iPad 自适应界面", "三种交互式小组件", "和弦卡片与 Apple Watch 节拍器"] },
    ],
    faq: [["真的可以完全离线使用吗？", "可以，调音器、节拍器、和弦库和本地设置均不依赖网络。"], ["APP 中有广告吗？", "没有广告，也没有第三方追踪 SDK。"], ["支持哪些设备？", "支持 iPhone、iPad、主屏幕小组件，以及落腕或屏幕变暗后仍可继续声音的 Apple Watch 节拍器。"]],
    related: ["guitar-tuner", "online-metronome", "guitar-chords"],
  },
];

export const landingPages = {
  en: [...en, ...enFeaturePages, ...enTuningPages, ...(enPracticePages as LandingPage[])],
  zh: [...zh, ...zhFeaturePages, ...zhTuningPages, ...(zhPracticePages as LandingPage[])],
} as const;

export function getLandingPage(language: LandingLanguage, slug: string) {
  return landingPages[language].find((page) => page.slug === slug);
}
