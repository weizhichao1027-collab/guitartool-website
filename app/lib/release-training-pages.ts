import type { LandingPage } from "@/app/lib/landing-pages";

// Source: the shipped 1.1.2 MetronomeTrainingConfiguration and TrainingSection.
export const TRAINING_UPDATED = "2026-10-08T00:10:00+08:00";
export const enReleaseTrainingPages: LandingPage[] = [
  {
    slug: "silent-bar-metronome",
    title: "Practise with a silent-bar metronome on iPhone and iPad",
    description: "Use GuitarTool 1.1.2 to alternate audible and silent bars. Set a two-on, two-off exercise, save it as a preset and check your internal timing offline.",
    eyebrow: "GUITARTOOL 1.1.2 · SILENT BARS",
    lead: "Keep playing when the clicks disappear, then listen for whether you land with the returning beat. GuitarTool alternates audible and silent bars while its internal beat continues.",
    proof: ["1–64 audible and silent bars", "Free on iPhone and iPad", "Saved locally with custom presets"],
    showcase: { image: "/release-1.1.2/en-training.webp", alt: "GuitarTool 1.1.2 rhythm training controls", caption: "Real 1.1.2 App Store preview: silent bars and staged tempo settings.", width: 660, height: 1434 },
    sections: [
      { title: "Start with two audible bars and two silent bars", body: "Open Metronome → Presets → Rhythm Training on iPhone or iPad. Enable Silent Bars, choose two audible bars and two silent bars, then use a comfortable tempo such as 60 BPM in 4/4. Each audible and silent interval accepts 1–64 bars. This is a native app feature; the website metronome does not include these training controls.", points: ["Choose a comfortable tempo first", "Set audible and silent bar counts independently", "Keep the pulse during the silent interval"] },
      { title: "Listen to the return, then adjust the exercise", body: "Play a simple strum or one note per beat. Keep counting through the gap. When the clicks return, compare your next note with the beat. If you repeatedly arrive early or late, shorten the silent interval or lower the tempo before making the exercise longer.", points: ["Use a familiar movement", "Check timing when sound returns", "Increase difficulty one setting at a time"] },
      { title: "Save the setup and understand deliberate silence", body: "Save the configuration as a custom preset for next time. During playback, editing training settings restarts the exercise from bar one. If your metronome becomes silent at regular bar boundaries, check Silent Bars before changing permissions or audio routes. Turn it off for a continuous click.", points: ["Custom presets keep the training configuration", "Parameter changes restart from bar one", "No microphone or account required for training"] },
    ],
    faq: [
      ["Does the metronome stop during a silent bar?", "No. Its internal beat continues; the exercise suppresses the click so you can maintain timing yourself."],
      ["Do silent bars require a subscription or paid theme?", "No. Rhythm training is free and works offline on iPhone and iPad. Visual themes are separate optional purchases."],
      ["Does the browser metronome have silent bars?", "No. The instructions here describe the native GuitarTool 1.1.2 app, not the free browser metronome."],
      ["How long can each interval be?", "Set 1–64 audible bars and 1–64 silent bars independently in Rhythm Training."],
    ],
    related: ["staged-tempo-training", "metronome-for-beginners", "rhythm-practice", "online-metronome"],
  },
  {
    slug: "staged-tempo-training",
    title: "Set up staged tempo training by bar count",
    description: "Create up to six GuitarTool tempo stages, each at 20–500 BPM for 1–64 bars. Loop your routine or hold the final tempo, then save it as a custom preset.",
    eyebrow: "GUITARTOOL 1.1.2 · TEMPO STAGES",
    lead: "Build a repeatable practice routine with a tempo and bar count for each stage. GuitarTool changes tempo at stage boundaries so you can keep your hands on the instrument.",
    proof: ["Up to six stages", "20–500 BPM · 1–64 bars per stage", "Loop or hold the final tempo"],
    showcase: { image: "/release-1.1.2/en-training.webp", alt: "GuitarTool preset controls for staged tempo training", caption: "The native iPhone and iPad app saves training settings with custom presets.", width: 660, height: 1434 },
    sections: [
      { title: "Choose stages that your hands can already play cleanly", body: "Open Metronome → Presets → Rhythm Training and enable Staged practice. Try four bars at 60 BPM, four at 65 BPM and four at 70 BPM. These are example practice values, not fixed presets. Add or remove stages to fit the phrase; the app supports one to six stages, each at 20–500 BPM for 1–64 bars.", points: ["Set BPM and bars for each stage", "Use small increases for a new movement", "Save a custom preset to reuse the routine"] },
      { title: "Decide what happens at the end", body: "Loop Stages repeats the sequence. With looping disabled, the metronome keeps the final stage’s tempo rather than stopping. This makes it possible to warm up slowly, work through a short progression and stay at a comfortable target speed.", points: ["Loop for repeated passes", "Disable looping to hold the last tempo", "Stop playback when you finish"] },
      { title: "Know which actions change the plan", body: "Manually changing BPM or using TAP exits staged training. Editing training parameters while playing restarts from bar one. Stop first if you want to revise the exercise without a mid-phrase restart. These controls belong to the native iPhone/iPad app; Watch, widgets and the browser tool do not provide this training editor.", points: ["Manual tempo or TAP exits stages", "Training edits restart from bar one", "A theme purchase is never required"] },
    ],
    faq: [
      ["How many tempo stages can I create?", "One to six. Each stage accepts 20–500 BPM and 1–64 bars."],
      ["Will playback stop after the last stage?", "No. With looping off, playback continues at the final tempo. With looping on, the sequence repeats."],
      ["Why did staged training turn off after TAP?", "Manual tempo changes and TAP intentionally exit staged training so your new tempo takes control."],
      ["Can I save stages for my next practice?", "Yes. Save the configuration as a custom preset. It stays on your device and works offline."],
    ],
    related: ["silent-bar-metronome", "progressive-tempo-training", "smooth-chord-changes", "tap-tempo-bpm"],
  },
];

export const zhReleaseTrainingPages: LandingPage[] = [
  {
    slug: "silent-bar-metronome",
    title: "用静音小节节拍器练习内在节奏",
    description: "在 GuitarTool 1.1.2 设置有声与静音小节交替，从有声两小节、静音两小节开始，在声音回来时检查稳拍。iPhone、iPad 免费离线使用。",
    eyebrow: "GUITARTOOL 1.1.2 · 静音小节",
    lead: "点击声暂时消失，心里的拍点继续。让有声与静音小节交替，在声音回来时听听自己有没有对齐，而不是一直依赖每一声提示。",
    proof: ["有声、静音各 1–64 小节", "iPhone 与 iPad 免费使用", "训练配置随自定义预设保存在本机"],
    showcase: { image: "/release-1.1.2/zh-training.webp", alt: "GuitarTool 1.1.2 静音小节与分段训练设置", caption: "1.1.2 真实商店预览：从预设打开节奏训练。", width: 660, height: 1434 },
    sections: [
      { title: "先从有声两小节、静音两小节开始", body: "在 iPhone 或 iPad 打开“节拍器 → 预设 → 节奏训练”，开启“静音小节”，设置有声 2 小节、静音 2 小节。可以先用 60 BPM、4/4 拍尝试；有声和静音各可设置 1–64 小节。此功能属于原生 App，网页节拍器目前没有这些训练控件。", points: ["先选择容易跟上的速度", "分别设置有声与静音长度", "声音消失时保持数拍"] },
      { title: "听声音回来时有没有对齐", body: "选择熟悉的扫弦或每拍一个音，静音时继续演奏和数拍。点击声回来后，比较自己的落点与拍点。如果总是提前或落后，先缩短静音段或降低速度，再逐步延长练习。", points: ["动作简单，专注拍点", "用声音回归检查时值", "每次只增加一个难度"] },
      { title: "保存方案，分清训练静音与音频故障", body: "将配置保存为自定义预设，下次可以继续使用。播放中修改训练参数会从第 1 小节重新开始。如果节拍器每隔固定小节就无声，先检查“静音小节”开关；关闭后恢复连续点击，不必先改音频权限。", points: ["自定义预设保存训练配置", "修改参数从第 1 小节重启", "训练无需麦克风或账户"] },
    ],
    faq: [
      ["静音小节里节拍器会停下来吗？", "不会。内部节拍继续推进，只是省略点击声，让你自己保持节奏。"],
      ["静音训练要订阅或购买主题吗？", "不需要。iPhone、iPad 的节奏训练免费且离线可用，主题是独立的可选外观购买。"],
      ["网页节拍器也能设置静音小节吗？", "目前不能。此页说明的是原生 GuitarTool 1.1.2 App 的训练功能。"],
      ["每次有声和静音可以持续多久？", "有声和静音分别可设置 1–64 小节。"],
    ],
    related: ["staged-tempo-training", "metronome-for-beginners", "rhythm-practice", "online-metronome"],
  },
  {
    slug: "staged-tempo-training",
    title: "按小节设置分段速度训练，稳步练习提速",
    description: "GuitarTool 1.1.2 支持最多六个速度阶段，每段 20–500 BPM、1–64 小节。可循环或保持末段速度，并保存为自定义预设。",
    eyebrow: "GUITARTOOL 1.1.2 · 分段速度",
    lead: "为每个阶段设置速度和小节数，让节拍器按阶段切换。双手留在乐器上，按照自己能干净完成的速度推进练习。",
    proof: ["最多六个速度阶段", "每段 20–500 BPM、1–64 小节", "循环阶段或保持最后速度"],
    showcase: { image: "/release-1.1.2/zh-training.webp", alt: "GuitarTool 预设内的分段速度训练真实界面", caption: "iPhone、iPad 原生 App 可将训练配置保存为自定义预设。", width: 660, height: 1434 },
    sections: [
      { title: "从能干净演奏的速度安排阶段", body: "进入“节拍器 → 预设 → 节奏训练”，开启“分段训练”。可以尝试 60 BPM 四小节、65 BPM 四小节、70 BPM 四小节；这是练习示例，不是固定预设。按乐句需要增删阶段，可保留 1–6 个阶段，每段 20–500 BPM、1–64 小节。", points: ["每段分别设置速度和小节数", "新动作使用较小的提速幅度", "保存自定义预设便于复用"] },
      { title: "选择练完后循环还是保持速度", body: "开启“循环阶段”会重复整个阶段序列；关闭后，节拍器继续保持最后阶段的速度，不会自动停止。你可以从慢速热身，经过几个阶段，再留在适合自己的目标速度继续演奏。", points: ["循环适合重复多轮", "不循环会保持最后速度", "结束时主动停止播放"] },
      { title: "了解哪些操作会改变训练", body: "手动调速或 TAP 定速会退出分段训练，以你刚设置的速度为准。播放中修改训练参数会从第 1 小节重新开始；如不想在乐句中途重启，可先停止再修改。这套编辑功能在 iPhone、iPad 原生 App 中提供，Watch、小组件与网页工具不提供同样的训练编辑器。", points: ["手动调速或 TAP 退出分段训练", "修改训练参数从第 1 小节重启", "无需购买主题"] },
    ],
    faq: [
      ["最多可以添加多少个速度阶段？", "支持 1–6 个阶段，每段 20–500 BPM、1–64 小节。"],
      ["最后一个阶段结束后会停止吗？", "不会。关闭循环后保持最后速度；开启循环则重新执行整个阶段序列。"],
      ["为什么 TAP 后分段训练关闭了？", "手动调速和 TAP 会主动退出分段训练，让新设置的速度接管播放。"],
      ["可以保存训练，下次直接使用吗？", "可以。保存为自定义预设后，配置保存在本机，离线也能使用。"],
    ],
    related: ["silent-bar-metronome", "progressive-tempo-training", "smooth-chord-changes", "tap-tempo-bpm"],
  },
];
