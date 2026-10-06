import type { LandingPage } from "@/app/lib/landing-pages";

// Original troubleshooting articles; dates refer to content edits, not indexing.
export const TROUBLESHOOTING_UPDATED = "2026-09-29T09:00:00Z";
export const zhTroubleshootingPages: LandingPage[] = [
  {
    "slug": "guitar-tuner-jumping",
    "title": "吉他调音器一直跳怎么办？先检查这五件事",
    "description": "吉他调音器忽高忽低、不出读数或跳到别的音名时，按权限、输入设备、单弦发声、拨弦力度与目标音逐项检查。",
    "eyebrow": "调音排障",
    "lead": "先停下弦钮。读数跳动时，先确认调音器听到了哪根弦，再根据稳定的一段声音调整；不要追着每一次瞬间变化拧。",
    "proof": [
      "逐项排除输入问题",
      "先确认音名与八度",
      "再看音分偏差"
    ],
    "sections": [
      {
        "title": "没有读数：先看权限和输入",
        "body": "先确认已允许麦克风访问，并在调音页面主动开始调音。检查当前输入设备：连接蓝牙耳机或外置音频设备后，收音位置可能改变。轻拨一根空弦，观察输入强度是否变化；如果完全没有变化，优先检查权限、输入路线和麦克风是否被遮挡。",
        "points": [
          "先看输入强度，再判断音准",
          "在系统设置中检查麦克风权限",
          "用当前选定的输入设备收音"
        ]
      },
      {
        "title": "音名来回变：让调音器只听一根弦",
        "body": "暂停伴奏与参考音播放，用手轻触其他琴弦止音，只拨目标空弦。不要同时扫六根弦。靠近乐器、减小环境干扰，再观察音名是否稳定。自动识别仍在目标之间切换时，可以在 GuitarTool 中点按目标琴弦锁定；参考音播放结束后再判断麦克风输入。",
        "points": [
          "一根弦一次",
          "其余琴弦止音",
          "确认目标后可锁定琴弦"
        ]
      },
      {
        "title": "刚拨时偏高：看声音稳定后的读数",
        "body": "强力拨弦的起音和随后延音可能出现不同读数。改用适中的力度，让声音自然延续，读取相对稳定的一段。每次只小幅调整弦钮，再重新拨弦；如果超过目标，可先略微放低，再慢慢升到目标。余音很弱时重新拨弦，不必一直等待旧读数。",
        "points": [
          "不要用大力拨弦测试稳定性",
          "小幅调整后重新检查",
          "读数保留不等于仍在持续收音"
        ]
      },
      {
        "title": "显示 E 也不一定调对：确认弦号、八度和基准",
        "body": "标准吉他从最粗第六弦到最细第一弦是 E2、A2、D3、G3、B3、E4。两根 E 弦的音区不同，不能只认字母。没有特殊合奏要求时，可先使用 A4 = 440 Hz。GuitarTool 会显示音名、音分、输入强度和稳定度，麦克风音频在设备本地处理。",
        "points": [
          "先选正确乐器与调弦模式",
          "零音分取决于当前目标与 A4 基准",
          "调完六根弦后再完整复查一次"
        ]
      }
    ],
    "faq": [
      [
        "指针必须始终停在零吗？",
        "不必追求每一瞬间都不动。确认目标正确后，以正常拨弦的稳定延音判断，避免频繁来回拧弦钮。"
      ],
      [
        "为什么电吉他不接音箱时难以识别？",
        "手机麦克风接收到的声音可能太弱。先看输入强度，缩短合理收音距离，或使用合适的音频输入设备。"
      ],
      [
        "这些步骤能解决所有跑音问题吗？",
        "不能。如果稳定空弦已经调准，按弦后仍明显不准，可能还涉及按弦力度、琴弦或乐器设置，需要进一步检查。"
      ],
      [
        "调音器要付费吗？",
        "GuitarTool 的调音、节拍器与和弦库免费，四款基础外观免费；六套可选主题单独购买。"
      ]
    ],
    "related": [
      "how-to-tune-a-guitar",
      "guitar-string-frequencies",
      "guitar-tuner"
    ]
  },
  {
    "slug": "metronome-for-beginners",
    "title": "一开节拍器就不会弹？吉他新手跟拍的四步练法",
    "description": "跟不上节拍器时，从听拍、拍手、闷弦到每小节换一次和弦逐步练习，分清 BPM、每拍音数与何时应该降速。",
    "eyebrow": "新手跟拍练习",
    "lead": "先把动作减到你能听见拍点的程度。只听、拍手、闷弦、换和弦，一次加一项，比同时处理整首歌更容易发现卡点。",
    "proof": [
      "从单一动作开始",
      "拍号与细分分别设置",
      "速度以能重复完成为准"
    ],
    "sections": [
      {
        "title": "先把设置变简单",
        "body": "选择 4/4 拍和四分音符细分，让每一下点击对应一个数：1、2、3、4。第一拍设为重音，其余三拍保持清楚。可以从 60 BPM 试起，但这只是练习起点；如果等待拍点太难或动作赶不上，都可以调整到更容易稳定跟随的速度。",
        "points": [
          "4/4 每小节数四拍",
          "先关闭额外细分与 Swing",
          "起始 BPM 不是能力评分"
        ]
      },
      {
        "title": "放下琴，先跟四个小节",
        "body": "只听一轮，再用拍手或轻点桌面跟随。不要在每次点击之后才急着补一个动作；先听出连续脉冲，再让动作与拍点靠拢。连续数四个小节，留意自己是越来越快、越来越慢，还是只在某一拍犹豫。",
        "points": [
          "先听，再加入动作",
          "数拍时保持均匀",
          "一次只观察一个问题"
        ]
      },
      {
        "title": "加回吉他：先闷弦，再按一个和弦",
        "body": "轻触琴弦让它发出短促的闷音，每拍只做一下下拨。稳定后按一个已经熟悉的和弦，保持同样节奏。此时先不加入复杂扫弦、唱歌或和弦转换；如果一加左手就乱，退回闷弦，把新增动作单独练清楚。",
        "points": [
          "每拍一下下拨",
          "先用一个熟悉的和弦",
          "把复杂扫弦留到下一步"
        ]
      },
      {
        "title": "最后才加入换和弦",
        "body": "选两个熟悉的和弦，每小节第一拍弹一次，其余三拍继续数拍并准备下一次转换。能够重复完成后，再逐步增加每小节的拨弦次数。加速和增加动作难度分开做；GuitarTool 支持强弱拍、细分与渐进加速，但是否提速仍要由实际演奏状态决定。",
        "points": [
          "先每四拍换一次",
          "先稳住节奏，再增加拨弦",
          "卡住时降速或减少动作"
        ]
      }
    ],
    "faq": [
      [
        "60 BPM 是不是太慢？",
        "没有适合所有人的固定起点。速度要同时允许你听清拍点并完成动作，太慢时也可能难以感知连续脉冲。"
      ],
      [
        "BPM 变成两倍，是不是弹得更快了？",
        "要同时看每拍弹几个音。120 BPM 每拍一个音，与 60 BPM 每拍两个均匀音，在单位时间的音数上相同。"
      ],
      [
        "应该一开始就开八分音符吗？",
        "可以先用四分音符掌握主拍。练每拍两个均匀音时，再开启八分细分帮助听清拍内位置。"
      ],
      [
        "一错就重新开始吗？",
        "先停下来确认是节拍没听稳、换和弦太慢还是动作太多，再降低对应难度，不必只反复从头弹整首歌。"
      ]
    ],
    "related": [
      "rhythm-practice",
      "time-signatures",
      "progressive-tempo-training",
      "smooth-chord-changes"
    ]
  },
  {
    "slug": "smooth-chord-changes",
    "title": "吉他换和弦总是停顿？把按法和节奏分开练",
    "description": "用两个和弦的小循环检查按法、规划手指移动，再加入每四拍一次的转换。附 C 到 Am 的标准调弦示例和慢速练习步骤。",
    "eyebrow": "和弦转换练习",
    "lead": "会分别按出两个和弦，不代表已经能按时从一个移动到另一个。把“声音是否清楚”和“转换是否准时”分开检查，卡点会更具体。",
    "proof": [
      "一次只练两个和弦",
      "先清楚，再准时",
      "记录自己能重复的速度"
    ],
    "sections": [
      {
        "title": "先确认两个和弦都能单独弹清楚",
        "body": "选择歌曲里最容易卡住的一组和弦，分别慢慢拨响应发声的每根弦。检查是否碰到邻弦、是否漏按，以及指法图里的叉号和空弦标记。先解决单个和弦的问题，再进入转换练习，不要靠加速掩盖闷音。",
        "points": [
          "叉号表示该弦不发声",
          "空圈表示空弦",
          "用相同调弦模式理解指法"
        ]
      },
      {
        "title": "以 C 到 Am 为例，找出真正需要移动的手指",
        "body": "标准调弦下，常见开放 C 为 x32010，Am 为 x02210；数字从第六弦到第一弦读取，x 表示不弹。使用常见指法时，食指可留在第二弦第一品，中指可留在第四弦第二品，无名指从第五弦第三品移到第三弦第二品。这个例子帮助观察动作，不要求所有人的指法完全相同。",
        "points": [
          "C：x32010",
          "Am：x02210",
          "保持手部放松，不强行固定手指"
        ]
      },
      {
        "title": "先慢慢移动，再把转换放进四拍",
        "body": "先不计时地重复两个形状之间的移动，确认落点后再拨弦。随后打开节拍器，每四拍换一次：第一拍弹响，第二到第四拍继续数拍，在下一小节第一拍进入另一个和弦。如果经常迟到，就降速或先减少拨弦动作。",
        "points": [
          "先找落点，不抢速度",
          "每小节只弹一下也可以",
          "逐步减少多余抬手动作"
        ]
      },
      {
        "title": "用一小段循环记录进展",
        "body": "记录今天能够连续完成几个循环的速度，以及具体卡住的位置。下一次先从这个速度复查，再尝试小幅提高。GuitarTool 可比较同名和弦的不同按法、试听并保存和弦卡片；节拍器可以提供稳定拍点，但不会自动判断你弹得是否正确。",
        "points": [
          "固定同一组和弦再比较速度",
          "同时记录节奏与声音是否清楚",
          "别用一次最快成绩代替稳定表现"
        ]
      }
    ],
    "faq": [
      [
        "一分钟换多少次才算合格？",
        "没有适合所有歌曲与学习阶段的统一次数。先明确按法是否清楚、转换是否准时，再比较同一练习下自己的变化。"
      ],
      [
        "是不是必须所有手指一起落下？",
        "可以把它作为逐步练习的方向，但初学时先确认落点和声音。不要为追求外观整齐而用力僵住。"
      ],
      [
        "可以随便换成另一个同名和弦按法吗？",
        "可以比较，但需要注意音区、最低音和前后连接是否适合歌曲；同名和弦的听感可能不同。"
      ],
      [
        "App 能判断我换和弦是否正确吗？",
        "当前和弦识别基于你在屏幕指板上输入的音，不等于麦克风实时评判。可以查图和试听对照，再由自己或老师检查演奏。"
      ]
    ],
    "related": [
      "guitar-chord-fingering-finder",
      "guitar-chords",
      "metronome-for-beginners",
      "share-chord-diagrams"
    ]
  }
];

export const enTroubleshootingPages: LandingPage[] = [
  {
    "slug": "guitar-tuner-jumping",
    "title": "Guitar Tuner Jumping Around? Five Checks Before Turning the Peg",
    "description": "Troubleshoot unstable guitar tuner readings by checking microphone access, the active input, single-string sound, plucking strength and the correct target note.",
    "eyebrow": "TUNER TROUBLESHOOTING",
    "lead": "Pause the tuning peg first. Confirm which string the tuner is hearing, then adjust using a stable part of the note rather than chasing every instant of movement.",
    "proof": [
      "Check the input first",
      "Confirm note and octave",
      "Then read the cents offset"
    ],
    "sections": [
      {
        "title": "No reading: check permission and the selected input",
        "body": "Allow microphone access and start tuning in the app. Check the active input device: Bluetooth headphones or external audio hardware may change where sound is captured. Pluck one open string and watch the input level. If it does not move, check permission, routing and anything covering the microphone before judging pitch.",
        "points": [
          "Look for input-level activity",
          "Check microphone permission in Settings",
          "Use the currently selected input"
        ]
      },
      {
        "title": "Changing note names: isolate one string",
        "body": "Pause backing tracks and reference-tone playback. Lightly mute the other strings and pluck only the target open string. Move to a quieter position and check whether the note name settles. If automatic detection still switches targets, select and lock the intended string in GuitarTool. Let its reference tone finish before checking the microphone reading.",
        "points": [
          "One string at a time",
          "Mute the other strings",
          "Lock a target when needed"
        ]
      },
      {
        "title": "Sharp at the attack: use a moderate pluck",
        "body": "A hard attack and the sustain that follows can produce different readings. Use normal playing strength, let the sound settle and read a stable portion. Adjust the peg a little, then pluck again. If you overshoot, lower the pitch slightly and approach the target from below. Pluck again when the sound becomes too weak to judge.",
        "points": [
          "Avoid testing with an unusually hard pluck",
          "Recheck after small adjustments",
          "A held reading is not evidence of ongoing input"
        ]
      },
      {
        "title": "An E is not enough: check string, octave and calibration",
        "body": "Standard guitar tuning from the thickest sixth string is E2, A2, D3, G3, B3, E4. The two E strings are in different octaves. Start with A4 = 440 Hz unless your musical setting requires another reference. GuitarTool shows the note, cents, input level and stability, with microphone audio processed on the device.",
        "points": [
          "Select the correct instrument and tuning",
          "Zero cents depends on the selected target and calibration",
          "Recheck all six strings after the first pass"
        ]
      }
    ],
    "faq": [
      [
        "Must the needle stay exactly at zero?",
        "Do not chase every small movement. Confirm the target and use the stable sustain from a normal pluck."
      ],
      [
        "Why is an unplugged electric guitar hard to detect?",
        "The microphone may receive too little sound. Check input strength and recording position, or use a suitable audio input device."
      ],
      [
        "Will this fix every tuning problem?",
        "No. If open strings are stable but fretted notes sound wrong, fretting pressure, strings or instrument setup may need checking."
      ],
      [
        "Is the tuner paid?",
        "The tuner, metronome and chord library are free. Four basic appearances are free; six optional themes are sold separately."
      ]
    ],
    "related": [
      "how-to-tune-a-guitar",
      "guitar-string-frequencies",
      "guitar-tuner"
    ]
  },
  {
    "slug": "metronome-for-beginners",
    "title": "How to Practise Guitar with a Metronome When You Keep Losing the Beat",
    "description": "Start with listening and clapping, then add muted strings and one chord change per bar. Learn when to change BPM, simplify the pattern or add subdivisions.",
    "eyebrow": "BEGINNER METRONOME PRACTICE",
    "lead": "Reduce the task until you can hear the pulse clearly. Add listening, clapping, muted strings and chord changes one at a time so you can identify what breaks the timing.",
    "proof": [
      "Start with one action",
      "Set meter and subdivision separately",
      "Choose a repeatable tempo"
    ],
    "sections": [
      {
        "title": "Start with simple settings",
        "body": "Choose 4/4 and quarter-note subdivision so each click matches one count: 1, 2, 3, 4. Accent the first beat and keep the others audible. You can try 60 BPM as a starting point, then adjust if the gaps are hard to follow or the movement feels rushed. That number is an example, not a grade.",
        "points": [
          "Count four beats per bar",
          "Leave extra subdivision and swing off at first",
          "Choose a useful starting BPM"
        ]
      },
      {
        "title": "Put the guitar down and follow four bars",
        "body": "Listen for one round before clapping or tapping along. Hear the continuing pulse instead of reacting late to each individual click. Count through four bars and notice whether you drift faster, drift slower or hesitate on one particular beat.",
        "points": [
          "Listen before adding movement",
          "Keep the counting even",
          "Observe one difficulty at a time"
        ]
      },
      {
        "title": "Add muted strums, then one chord",
        "body": "Lightly touch the strings to create a short muted sound and make one downstroke per beat. Once this is steady, hold a familiar chord and keep the same motion. Leave complex strumming, singing and chord changes for later. If adding the fretting hand breaks the pulse, return to muted strums and practise the new action separately.",
        "points": [
          "One downstroke per beat",
          "Use one familiar chord",
          "Add more complex strumming later"
        ]
      },
      {
        "title": "Bring in chord changes last",
        "body": "Choose two familiar chords. Strum once on beat one of each bar, count the remaining three beats and prepare for the next change. When this repeats comfortably, add more strums per bar. Increase tempo and movement complexity separately. GuitarTool offers accents, subdivisions and progressive tempo, but you decide whether the playing is ready to speed up.",
        "points": [
          "Change once every four beats first",
          "Add strums after the pulse is secure",
          "Lower tempo or simplify if needed"
        ]
      }
    ],
    "faq": [
      [
        "Is 60 BPM too slow?",
        "No single starting speed suits everyone. Choose a tempo that lets you feel a continuous pulse and perform the movement."
      ],
      [
        "Does twice the BPM mean twice as many notes?",
        "Only if notes per beat stay the same. One note per beat at 120 BPM and two evenly spaced notes per beat at 60 BPM give the same number of notes per minute."
      ],
      [
        "Should I turn on eighth-note clicks immediately?",
        "Start with quarter-note clicks to establish the main beat. Add eighth-note subdivision when practising two even notes per beat."
      ],
      [
        "Should I restart the whole song after every mistake?",
        "First identify whether the problem is hearing the beat, moving between chords or handling too many actions. Simplify that part before repeating the whole song."
      ]
    ],
    "related": [
      "rhythm-practice",
      "time-signatures",
      "progressive-tempo-training",
      "smooth-chord-changes"
    ]
  },
  {
    "slug": "smooth-chord-changes",
    "title": "Smoother Guitar Chord Changes: Separate the Shape from the Timing",
    "description": "Practise a two-chord loop, check each shape, plan the finger movement and add one change every four beats. Includes a standard-tuning C to Am example.",
    "eyebrow": "CHORD CHANGE PRACTICE",
    "lead": "Playing two chords separately and moving between them on time are different tasks. Check clean notes and punctual changes separately to make the difficulty easier to locate.",
    "proof": [
      "Work on two chords",
      "Check clarity before timing",
      "Record a repeatable tempo"
    ],
    "sections": [
      {
        "title": "Check that each chord sounds clearly on its own",
        "body": "Choose a pair that interrupts your song. Pick each intended string slowly and check for accidental muting or missed notes. Read muted-string and open-string marks carefully. Resolve the individual shapes before adding a timing target.",
        "points": [
          "X means do not sound the string",
          "An open circle means an open string",
          "Use the tuning the diagram assumes"
        ]
      },
      {
        "title": "C to Am: identify which fingers actually move",
        "body": "In standard tuning, common open shapes are C: x32010 and Am: x02210, written from string six to string one. With common fingering, the index can remain on string two, fret one, and the middle finger on string four, fret two. The ring finger moves from string five, fret three, to string three, fret two. This illustrates the movement; it is not a requirement to force one fingering on every player.",
        "points": [
          "C: x32010",
          "Am: x02210",
          "Keep the hand relaxed"
        ]
      },
      {
        "title": "Move slowly before placing the change in four beats",
        "body": "Repeat the movement without a timer and check each landing before strumming. Then start the metronome and change once every four beats: strum on beat one, keep counting and enter the other chord on the next bar's first beat. Lower the tempo or reduce the strumming if changes repeatedly arrive late.",
        "points": [
          "Find the landing positions first",
          "One strum per bar is enough to begin",
          "Gradually reduce unnecessary lifting"
        ]
      },
      {
        "title": "Track a short repeatable loop",
        "body": "Record the tempo where you can repeat several loops and the exact point that needs attention. Recheck it next time before raising the speed slightly. GuitarTool lets you compare voicings, hear them and save chord cards. Its metronome supplies a pulse, but it does not automatically judge your playing.",
        "points": [
          "Compare the same pair of chords",
          "Observe timing and note clarity",
          "Use repeatable performance, not one fastest attempt"
        ]
      }
    ],
    "faq": [
      [
        "How many changes per minute should I achieve?",
        "There is no single number for every song and learning stage. Check clarity and timing, then compare your own performance on the same exercise."
      ],
      [
        "Must every finger land together?",
        "You can work toward coordinated movement gradually. Start with accurate positions and clean sound without tensing up."
      ],
      [
        "Can I replace a shape with another voicing of the same chord?",
        "Compare the register, bass note and surrounding changes. Chords with the same name can still sound different."
      ],
      [
        "Can the app tell whether I changed chords correctly?",
        "Chord identification uses notes entered on the on-screen fretboard. It is not live microphone assessment of your playing. Use diagrams and playback as references."
      ]
    ],
    "related": [
      "guitar-chord-fingering-finder",
      "guitar-chords",
      "metronome-for-beginners",
      "share-chord-diagrams"
    ]
  }
];

