import type { LandingPage } from "@/app/lib/landing-pages";

export const enIntentPages: LandingPage[] = [
  {
    slug: "tap-tempo-bpm",
    title: "Tap Tempo: Find a Song's BPM by Tapping",
    description: "Use tap tempo to estimate a song's BPM, learn how many taps produce a stable result, and continue with a 20–500 BPM metronome in GuitarTool.",
    eyebrow: "TAP TEMPO · BPM FINDER",
    lead: "Tap along with the pulse you hear, then use the resulting BPM as a starting point—not as a number you have to force onto every performance.",
    proof: ["Find tempo without guessing", "Average several recent taps", "Continue in a 20–500 BPM metronome"],
    sections: [
      {
        title: "Tap the main pulse, not every note",
        body: "Choose the steady beat that makes you nod or move your foot, then tap at least four times with one finger. Ignore fills, pickup notes and subdivisions. A longer run of even taps makes the average less sensitive to one early or late touch; if the readout keeps moving, pause and start a fresh group.",
        points: ["Use one consistent finger", "Tap 4–8 steady beats", "Restart after a missed beat"],
      },
      {
        title: "Check whether the tempo is doubled or halved",
        body: "The same music can often be counted at 70 or 140 BPM. Test both interpretations with the metronome and keep the one that matches the musical phrase and useful subdivision. In GuitarTool, TAP sets the tempo directly, after which you can add meter, accents, subdivisions or a saved practice preset.",
        points: ["Compare half-time and double-time", "Listen for the bar's first beat", "Save the useful result as a preset"],
      },
    ],
    faq: [
      ["How many taps are needed to find BPM?", "Four taps can give a rough estimate; six to eight even taps are usually more stable."],
      ["Why does tap tempo jump between two values?", "One uneven tap can move a short average, and you may also be alternating between the main beat and a subdivision."],
      ["Can I use TAP in GuitarTool?", "Yes. TAP sets the metronome tempo, which you can then refine from 20 to 500 BPM."],
    ],
    related: ["online-metronome", "swing-metronome", "progressive-tempo-training", "time-signatures"],
  },
  {
    slug: "swing-metronome",
    title: "Swing Metronome Practice: From Straight Eighths to Shuffle",
    description: "Learn how to practise eighth-note swing and shuffle with a metronome, choose a useful pulse, and avoid turning swing into a rigid mathematical ratio.",
    eyebrow: "SWING METRONOME · EIGHTH-NOTE FEEL",
    lead: "Swing is a relationship between notes, pulse and articulation. Use the click to protect the beat while your phrasing remains musical.",
    proof: ["Straight and swung eighths", "Quarter-note or backbeat clicks", "Adjustable eighth-note swing in the app"],
    sections: [
      {
        title: "Start by making the subdivision audible",
        body: "At a slow tempo, count each beat as a long-short pair and play a simple scale or muted-string pattern. Keep the quarter-note pulse steady while the second eighth arrives later than it would in straight time. The goal is not to imitate a fixed percentage, but to hear the two levels at once: stable beat and flexible subdivision.",
        points: ["Count a long-short pair", "Use one simple repeating phrase", "Keep accents independent from note length"],
      },
      {
        title: "Remove clicks as the feel becomes secure",
        body: "Once the pattern is even, let the metronome click only quarter notes, then try treating clicks as beats 2 and 4. GuitarTool provides eighth-note Swing alongside accents, subdivisions and presets, so you can move from explicit guidance to a sparser time check without rebuilding the exercise.",
        points: ["Begin with clear subdivision support", "Move to quarter-note clicks", "Test time with clicks on 2 and 4"],
      },
    ],
    faq: [
      ["Is swing always a triplet ratio?", "No. A triplet model is a useful starting exercise, but real swing changes with tempo, style and performer."],
      ["What tempo should I use for swing practice?", "Begin where you can keep the main pulse relaxed and make the long-short relationship consistent, then increase gradually."],
      ["Does GuitarTool include Swing?", "Yes. The metronome includes adjustable eighth-note Swing together with subdivisions, accents and practice presets."],
    ],
    related: ["tap-tempo-bpm", "online-metronome", "progressive-tempo-training", "rhythm-practice"],
  },
  {
    slug: "progressive-tempo-training",
    title: "Progressive Tempo Training: Increase BPM Without Losing Control",
    description: "Build a progressive tempo practice routine with repeat counts, small BPM increases and a clear fallback rule when timing, tone or relaxation breaks down.",
    eyebrow: "PROGRESSIVE TEMPO · SPEED TRAINING",
    lead: "Useful speed comes from repeating the same clean, relaxed motion at slightly faster tempos—not from surviving one rushed attempt.",
    proof: ["Automatic BPM increases", "Small, repeatable steps", "A clear rule for backing off"],
    sections: [
      {
        title: "Define success before you start",
        body: "Choose a short phrase and a tempo where it is easy to play in time with clean notes and no extra tension. Decide how many bars count as one repetition and require two or three clean repetitions before moving on. This turns 'play faster' into an observable practice loop.",
        points: ["Use a short difficult passage", "Require 2–3 clean repetitions", "Watch timing, tone and tension"],
      },
      {
        title: "Increase in small steps and keep a fallback",
        body: "Raise the tempo by 2–5 BPM after a successful block. If two attempts fail in a row, return to the last clean tempo or reduce the phrase. GuitarTool can increase BPM after a chosen number of bars, so your hands stay on the instrument and the progression remains consistent.",
        points: ["Add 2–5 BPM at a time", "Back off after two failed attempts", "Stop before fatigue changes the motion"],
      },
    ],
    faq: [
      ["How much should I increase the metronome each time?", "Two to five BPM is a practical range; use smaller steps when the movement is close to its current limit."],
      ["Should I restart if I make one mistake?", "One isolated mistake is information. Repeated loss of time, tone or relaxation means the tempo should come down."],
      ["Can GuitarTool increase tempo automatically?", "Yes. Progressive tempo can raise BPM by a chosen amount after a selected number of bars."],
    ],
    related: ["rhythm-practice", "online-metronome", "tap-tempo-bpm", "swing-metronome"],
  },
  {
    slug: "how-to-tune-a-guitar",
    title: "How to Tune a Guitar: A Clear Six-String Guide",
    description: "Tune a six-string guitar to standard EADGBE, read cents correctly, reduce unstable tuner readings and finish with a reliable cross-check.",
    eyebrow: "GUITAR TUNING GUIDE · EADGBE",
    lead: "Tune one string at a time from a clean attack into a stable sustain, approaching the target from below whenever practical.",
    proof: ["Standard E2 A2 D3 G3 B3 E4", "Cents and stability explained", "Audio stays on the device"],
    sections: [
      {
        title: "Work from the sixth string to the first",
        body: "Standard tuning from the thickest string is E2, A2, D3, G3, B3, E4. Select the standard-guitar preset, pluck one open string near its normal playing position and let the first transient settle. Turn the correct machine head in small movements until the note name matches and the cents reading stays close to zero.",
        points: ["6th to 1st: E A D G B E", "Let the initial attack settle", "Turn the tuner in small movements"],
      },
      {
        title: "Finish by checking the strings again",
        body: "Changing one string can slightly redistribute neck and bridge tension, especially after restringing. Recheck all six strings, listen to a familiar chord and confirm that no string was tuned to the correct letter in the wrong octave. GuitarTool shows cents, frequency, input strength and stability without saving or uploading microphone audio.",
        points: ["Approach pitch from below", "Recheck after all six strings", "Use a familiar chord as a final check"],
      },
    ],
    faq: [
      ["What is standard guitar tuning?", "From the lowest, thickest string to the highest it is E2, A2, D3, G3, B3 and E4."],
      ["What does 0 cents mean on a tuner?", "It means the detected pitch matches the selected target according to the current A4 calibration."],
      ["Why does the tuner reading move after I pluck?", "The attack contains changing harmonics. Use a moderate pluck and judge the more stable sustain that follows."],
    ],
    related: ["guitar-tuner", "guitar-string-frequencies", "drop-d-tuning", "chromatic-tuner"],
  },
  {
    slug: "guitar-chord-fingering-finder",
    title: "Guitar Chord Fingering Finder: Search, Compare and Hear Voicings",
    description: "Find guitar chord fingerings by name, compare open and higher-position voicings, edit the fretboard and hear the exact shape before you practise it.",
    eyebrow: "CHORD FINGERING FINDER · 12,415 SHAPES",
    lead: "A chord name describes a set of notes, not one mandatory hand shape. Compare voicings and choose the one that fits the musical line and your current reach.",
    proof: ["855 guitar chord names", "12,415 distinct fingerings", "Browse the full 20-fret range"],
    sections: [
      {
        title: "Search the name, then compare positions",
        body: "Look up the root and chord quality, then move through the available fingerings instead of stopping at the first result. Check muted and open strings, the starting fret, the bass note and how far the hand must move from the previous chord. GuitarTool keeps each diagram in a readable five-fret window while covering all 20 frets.",
        points: ["Open and movable shapes", "Muted and open strings shown clearly", "Choose by transition, range and bass note"],
      },
      {
        title: "Edit a shape and verify what it becomes",
        body: "Touch any string and fret to test a variation, mute a string or restore an open note. GuitarTool identifies likely names from the sounding notes and plays the exact visible voicing. When you have the right shape, preview it as a chord card before saving or sharing the image.",
        points: ["Edit every string directly", "Identify and audition the result", "Preview, save or share a chord card"],
      },
    ],
    faq: [
      ["How many guitar fingerings are included?", "GuitarTool contains 12,415 deduplicated guitar fingerings across 855 chord names."],
      ["Can I find chords above the fifth fret?", "Yes. The readable five-fret viewport moves across the full 20-fret range."],
      ["Can I hear or share a fingering?", "Yes. You can hear the exact visible voicing and preview it as an image card to save or share."],
    ],
    related: ["guitar-chords", "capo-transposition", "share-chord-diagrams", "chord-diagrams-for-students"],
  },
];

export const zhIntentPages: LandingPage[] = [
  {
    slug: "tap-tempo-bpm",
    title: "Tap Tempo 测速：跟着音乐点出 BPM",
    description: "用 Tap Tempo 根据音乐脉冲估算 BPM，了解需要点几次、如何排除误触，并在 GuitarTool 的 20–500 BPM 节拍器中继续练习。",
    eyebrow: "TAP TEMPO · BPM 测速",
    lead: "跟着你自然点头或跺脚的主拍连续点击，把测得的 BPM 当作起点，而不是必须强加给整首音乐的固定数字。",
    proof: ["不用猜测速度", "根据最近多次点击取平均", "可直接进入 20–500 BPM 节拍器"],
    sections: [
      {
        title: "点击主拍，不要追着每个音符点",
        body: "先找到让身体自然跟随的稳定脉冲，再用同一根手指至少连续点击四次。不要跟随过门、弱起或细分音符。点击次数越多，一次偏早或偏晚对平均值的影响越小；读数持续漂移时，停下来重新开始一组。",
        points: ["使用同一根手指", "连续点 4–8 个稳定拍点", "漏拍后重新开始"],
      },
      {
        title: "检查结果是否快了一倍或慢了一半",
        body: "同一段音乐有时既能数成 70 BPM，也能数成 140 BPM。分别用节拍器试一下，选择更符合乐句和细分需要的数法。GuitarTool 的 TAP 会直接设定速度，随后可继续加入拍号、重音、细分或保存为练习预设。",
        points: ["比较半速与倍速", "听清每小节第一拍", "把合适结果保存为预设"],
      },
    ],
    faq: [
      ["测 BPM 需要点几次？", "四次可以得到粗略结果；连续六到八次均匀点击通常更稳定。"],
      ["为什么 Tap Tempo 会在两个数字间跳动？", "短平均值容易被一次不均匀点击影响，也可能是你在主拍与细分之间切换。"],
      ["GuitarTool 支持 TAP 测速吗？", "支持。TAP 可直接设置节拍器速度，之后可在 20–500 BPM 范围内微调。"],
    ],
    related: ["online-metronome", "swing-metronome", "progressive-tempo-training", "time-signatures"],
  },
  {
    slug: "swing-metronome",
    title: "Swing 节拍器练习：从直八分到 Shuffle",
    description: "学习如何用节拍器练八分 Swing 和 Shuffle，选择合适的拍点，并避免把 Swing 误解成僵硬不变的数学比例。",
    eyebrow: "SWING 节拍器 · 八分音符律动",
    lead: "Swing 是音符、脉冲和触弦之间的关系。用点击守住主拍，同时保留真正有弹性的乐句。",
    proof: ["直八分与 Swing 对比", "四分音符或反拍点击", "APP 支持八分 Swing 调整"],
    sections: [
      {
        title: "先把细分清楚地唱出来",
        body: "从慢速开始，把每一拍数成一长一短两个音，用音阶或闷弦重复简单型。四分音符主拍必须保持稳定，第二个八分音符则比直八分更晚出现。重点不是复制一个固定百分比，而是同时听见稳定主拍和弹性细分。",
        points: ["数出一长一短", "只使用一个简单重复乐句", "把重音与音符长短分开处理"],
      },
      {
        title: "稳定后逐步减少点击提示",
        body: "型已经均匀后，让节拍器只点四分音符，再尝试把点击理解成第 2、4 拍。GuitarTool 把八分 Swing、重音、细分和预设置于同一训练流程，可从明确提示过渡到稀疏拍点，而不必重建整套练习。",
        points: ["先用清楚的细分辅助", "过渡到四分音符点击", "把点击当作第 2、4 拍测试内在拍感"],
      },
    ],
    faq: [
      ["Swing 一定等于三连音比例吗？", "不一定。三连音模型适合作为入门练习，但真实 Swing 会随速度、风格和演奏者改变。"],
      ["Swing 练习应该从多少 BPM 开始？", "从能够放松保持主拍，并稳定演奏一长一短关系的速度开始，再逐步提高。"],
      ["GuitarTool 有 Swing 吗？", "有。节拍器支持八分 Swing，并可搭配细分、重音和练习预设。"],
    ],
    related: ["tap-tempo-bpm", "online-metronome", "progressive-tempo-training", "rhythm-practice"],
  },
  {
    slug: "progressive-tempo-training",
    title: "渐进加速训练：提高 BPM 但不牺牲控制",
    description: "用重复次数、小幅 BPM 增量和明确退档规则建立渐进加速练习，在节奏、音色或放松度失控前及时调整。",
    eyebrow: "渐进加速 · 速度训练",
    lead: "真正可用的速度，来自稍快一点时仍能复制同一套干净、放松的动作，而不是勉强完成一次。",
    proof: ["自动提高 BPM", "小步幅、可重复", "明确的失败退档规则"],
    sections: [
      {
        title: "开始前先定义什么叫成功",
        body: "选一小段困难乐句，从能够轻松合拍、音符清楚且没有额外紧张的速度开始。规定几个小节算一次，并要求连续两到三次干净完成后才前进。这样，“弹快一点”就会变成可以观察和复盘的训练循环。",
        points: ["截取一小段困难连接", "连续 2–3 次干净再前进", "同时观察节奏、音色和紧张度"],
      },
      {
        title: "小幅提高，并保留退回上一档的规则",
        body: "成功完成一组后提高 2–5 BPM。连续两次失控时，退回最后一个干净速度，或缩短练习片段。GuitarTool 可以在指定小节数后自动增加 BPM，让双手留在乐器上，也让每一轮增量保持一致。",
        points: ["每次增加 2–5 BPM", "连续失败两次就退档", "疲劳改变动作前结束"],
      },
    ],
    faq: [
      ["每次应该增加多少 BPM？", "2–5 BPM 是实用范围；动作接近当前极限时使用更小步幅。"],
      ["错一个音就应该重来吗？", "一次孤立错误是信息；如果节奏、音色或放松度反复失控，就应该降低速度。"],
      ["GuitarTool 可以自动加速吗？", "可以。渐进加速可在选定小节数后，按指定增量自动提高 BPM。"],
    ],
    related: ["rhythm-practice", "online-metronome", "tap-tempo-bpm", "swing-metronome"],
  },
  {
    slug: "how-to-tune-a-guitar",
    title: "吉他怎么调音：六根弦 EADGBE 完整指南",
    description: "按标准 EADGBE 为六弦吉他调音，正确理解音分、减少跳动读数，并用复查流程确认每根弦处在正确音名和八度。",
    eyebrow: "吉他调音指南 · EADGBE",
    lead: "一次只处理一根弦，从清楚的起音等到稳定延音；条件允许时从偏低位置向目标音高接近。",
    proof: ["标准 E2 A2 D3 G3 B3 E4", "解释音分与稳定度", "声音只在设备端处理"],
    sections: [
      {
        title: "从第六弦依次调到第一弦",
        body: "标准调弦从最粗弦开始是 E2、A2、D3、G3、B3、E4。选择标准吉他预设，在平常拨弦位置弹一根空弦，等最初瞬态稍微稳定。确认音名正确后，小幅转动对应弦钮，直到音分接近 0 且读数保持稳定。",
        points: ["第六到第一弦：E A D G B E", "等待起音后的稳定延音", "小幅转动正确弦钮"],
      },
      {
        title: "全部完成后再检查一轮",
        body: "改变一根弦会轻微重新分配琴颈与琴桥张力，刚换弦时尤其明显。重新检查六根弦，再弹一个熟悉和弦，并确认没有把正确音名调到错误八度。GuitarTool 同时显示音分、频率、输入强度和稳定度，麦克风声音不会保存或上传。",
        points: ["尽量从偏低位置向上调准", "六根弦完成后重新检查", "用熟悉和弦做最终听觉核对"],
      },
    ],
    faq: [
      ["吉他标准调弦是什么？", "从最粗、最低的第六弦到最高的第一弦依次是 E2、A2、D3、G3、B3、E4。"],
      ["调音器显示 0 音分是什么意思？", "表示当前检测音高与所选目标音在当前 A4 校准下相同。"],
      ["为什么拨弦后读数会移动？", "起音包含不断变化的泛音。用中等力度拨弦，并以随后较稳定的延音为准。"],
    ],
    related: ["guitar-tuner", "guitar-string-frequencies", "drop-d-tuning", "chromatic-tuner"],
  },
  {
    slug: "guitar-chord-fingering-finder",
    title: "吉他和弦指法查询：比较把位、编辑并试听",
    description: "按名称查询吉他和弦指法，比较开放与高把位按法，编辑指板并试听当前组合，再选择真正适合乐句连接的按法。",
    eyebrow: "和弦指法查询 · 12,415 个按法",
    lead: "和弦名称描述的是一组声音，不是唯一手型。比较不同把位，再根据乐句、音域与手的跨度做选择。",
    proof: ["855 个吉他和弦名称", "12,415 个去重指法", "覆盖完整 20 品"],
    sections: [
      {
        title: "先按名称搜索，再比较不同把位",
        body: "查找根音与和弦类型后，继续切换可用指法，不要只停在第一个结果。检查空弦与静音弦、起始品位、最低音，以及从前一个和弦移动过来的距离。GuitarTool 用易读的五品窗口显示每个图，同时覆盖完整 20 品。",
        points: ["开放与可移动把位", "清楚显示空弦和静音弦", "按连接、音域与最低音选择"],
      },
      {
        title: "修改一根弦，验证它变成什么和弦",
        body: "直接点击任意弦和品位测试变化，也可以静音或恢复空弦。GuitarTool 会根据实际发声音寻找可能名称，并严格试听画面上的组合。选好按法后，可先预览和弦卡片，再把图片保存或分享。",
        points: ["逐弦直接编辑", "识别并试听当前结果", "预览、保存或分享和弦卡片"],
      },
    ],
    faq: [
      ["包含多少个吉他指法？", "GuitarTool 在 855 个和弦名称下包含 12,415 个去重后的吉他指法。"],
      ["可以查找五品以上的和弦吗？", "可以。五品高的易读窗口能够移动并覆盖完整 20 品范围。"],
      ["可以试听或分享一个指法吗？", "可以。APP 会试听当前画面上的真实组合，也能把它预览成卡片后保存或分享。"],
    ],
    related: ["guitar-chords", "capo-transposition", "share-chord-diagrams", "chord-diagrams-for-students"],
  },
];
