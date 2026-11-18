import { SiteLink as Link } from "@/app/components/SiteLink";
import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { APP_STORE_LINKS, APP_STORE_URL, GOOGLE_PLAY_URL, PRIVACY_URL, PRIVACY_EN_URL, RELEASE_UPDATED, RELEASE_VERSION, absoluteUrl } from "@/app/lib/site";

const email = "weizhichao1027@gmail.com";

const content = {
  zh: {
    lang: "zh-CN",
    eyebrow: "GUITARTOOL 技术支持",
    title: "解决练习问题，\n回到音乐里。",
    lead: "这里说明已经可以下载的 GuitarTool。App Store 公开版本是 1.1.5，Google Play 公开版本是 Android 与 Wear OS 1.1.4。核心功能无需账户、没有订阅，可以离线使用。主题为单独的一次性购买。",
    contact: "联系技术支持",
    appStore: "前往 App Store",
    status: [
      ["公开版本", "App Store 1.1.5 · Google Play 1.1.4"],
      ["支持设备", "iPhone · iPad · Apple Watch · Android · Wear OS"],
      ["系统要求", "iOS / iPadOS 17、watchOS 10 或更高；Android 以 Google Play 显示为准"],
      ["账号与购买", "无需账户 · 无订阅 · 主题一次性购买"],
    ],
    quickTitle: "先试这几个快速步骤",
    quick: [
      "在 App Store 确认已更新到你所在地区当前可用的最新版本。",
      "完全退出 GuitarTool 后重新打开；涉及 Watch 或 Widget 时，也请先打开一次 iPhone App。",
      "在“设置 → 隐私与安全性”中检查麦克风或照片权限。",
      "仍未解决时，来信说明设备型号、系统版本、问题发生在哪个工具，以及复现步骤。请勿发送私人录音。",
    ],
    sections: [
      { title: "怎样安装或更新？", body: "iPhone、iPad 和 Apple Watch 从 App Store 搜索 GuitarTool，或使用本页的 App Store 链接，Apple ID 为 6761914163。Android 手机和 Wear OS 使用包名 com.guitar123.toolbox 的 Google Play 链接。安装后打开一次主 App，再检查 Watch 或小组件。两个商店的版本不必相同：当前公开的分别是 App Store 1.1.5 和 Google Play 1.1.4。" },
      { title: "需要注册账号或订阅吗？", body: "不需要。调音、节拍、和弦和四款基础外观不要求账户，也没有订阅或自动续费。付费内容只有外观主题，每套单独一次性购买。价格以你打开购买确认时商店显示的金额为准，本页不列出固定标价。" },
      { title: "App Store 1.1.5 新增了什么？", body: "新增机械花园和口袋爵士剧场，可先预览再分别一次性购买。购买、恢复购买和取消的处理有改进，已购主题的同步更可靠。13 种语言的文字和不同屏幕布局经过调整。系统和设备提供该尺寸时，可以添加 iPad 横向超大号主屏幕小组件。使用分析仍然关闭。" },
      { title: "如何恢复购买，取消后怎么办？", body: "使用购买时的同一商店账户并保持联网。在 App 的“个性化 → 主题展厅”点“恢复购买”，等待商店同步后再打开主题。如果你在付款前取消，主题不会解锁，可以稍后重新购买。家长批准尚未完成时，请等待商店结果，不要反复发起付款。退款或撤销后，对应主题可能重新锁定。App Store 的购买不能在 Google Play 恢复，反过来也一样。" },
      { title: "新主题找不到或显示等待购买？", body: "在 App Store 确认已安装 1.1.5，打开“个性化 → 主题展厅”。机械花园和口袋爵士剧场不是以前购买主题的附赠内容。商品加载需要联网，能否购买以所在地区商店为准。若正在等待家长批准，请等待结果。若已完成购买仍未解锁，按恢复购买步骤处理。" },
      { title: "iPad 或横屏上为什么需要滚动？", body: "工具会根据实际可用窗口宽度调整布局；分屏、窄窗口或放大字体可能使用纵向滚动。和弦指板保留五品可视窗口，可独立滚动到第 20 品。完整主题用于 iPhone/iPad；Watch 和小组件提供各自的专用布局。遇到遮挡请提供设备、窗口方向、文字大小及截图。" },
      { title: "Android 或 Wear OS 已经可以下载吗？", body: "可以。2026 年 11 月 18 日核对，Google Play 公开页面仍显示 Android 与 Wear OS 1.1.4，包名 com.guitar123.toolbox。Android 手机提供调音、节拍、和弦库及该版本的十套独立付费主题；Wear OS 提供独立节拍器和调音器。机械花园和口袋爵士剧场属于 App Store 1.1.5，不要把它们当成当前 Google Play 版本已经可购买的内容。两个商店的主题权益分别管理。" },

      { title: "如何开启人声数拍和试听？", body: "在 iPhone、iPad 更新到 1.1.3 或更新版本，停止播放后进入“节拍器 → 设置”，点当前音色行，在“节拍器声音”选择“人声”。会按当前 BPM 试听中文“一、二、三、四”；再点已选音色可重新试听。正常播放按每小节主拍报数，最多一到十二，每小节从一开始；细分位置仍用点击声。声音素材内置、离线播放，不使用麦克风，也不随界面语言改变。Watch 与网页节拍器不提供这款音色。" },
      { title: "BPM 输入后如何确认或取消？", body: "1.1.3 在各主题中统一使用独立输入面板。点 BPM 数字，替换原数字，再点顶部“完成”保存；点“取消”或下滑关闭会丢弃草稿，保留原速度和训练设置。空值或非数字输入不能确认，有效数字会限制到 20–500 BPM；本地化十进制数字也可输入。播放中确认会继续播放并保留倒计时原期限，同时沿用手动调速规则，退出分段训练。" },
      { title: "为什么找不到超大竖排或 iPad 横向超大号小组件？", body: "1.1.3 起的超大竖排尺寸需要 iOS 27 或更新系统，是否可添加由系统按设备和可用空间决定。1.1.5 另增加 iPad 横向超大号，同样只有系统和设备提供该尺寸时才会出现。这些布局提供播放暂停、±5 BPM、TAP、60／80／100／120 快捷速度、拍号、细分与 Swing；Swing 只与八分细分搭配。较早系统继续支持原有小、中、大号尺寸。" },
      { title: "静音小节怎么设置？", body: "在 iPhone/iPad 的节拍器打开“预设 → 节奏训练”，开启“静音小节”，分别设置 1–64 个有声和静音小节。可从有声 2 小节、静音 2 小节开始；静音阶段内部节拍仍继续。若出现规律性的无声小节，先检查此开关。配置可保存为自定义预设。" },
      { title: "如何分段提速，为什么训练会退出？", body: "在同一“节奏训练”区域开启“分段训练”，添加最多六个阶段，每阶段设置 20–500 BPM 和 1–64 小节。开启“循环阶段”会重复；关闭后保持最后阶段速度。手动调速、确认 BPM 输入或 TAP 会退出分段训练；取消 BPM 输入不改变训练。播放中修改训练参数会从第 1 小节重新开始。训练编辑器属于 iPhone、iPad 原生 App，Watch、小组件和网页不提供同样的编辑器。训练设置随自定义预设保存，不要求购买主题。" },
      { title: "预设目标、渐进加速与大字号有哪些修复？", body: "1.1.3 修复了练习预设目标速度同步，切换或重开预设时，旧输入草稿不再覆盖新目标；渐进加速目标不能低于当前 BPM、最高 500 BPM。音频中断后恢复会保留已完成的小节和渐进加速进度；主动开始新练习仍从零开始。预设、训练参数与细分选项改善了大字号换行布局，倒计时稳定性也已改进。如仍有问题，请来信说明字号、预设设置、音频路线和复现步骤。" },
      { title: "如何找到玄玉声场？", body: "先更新到 1.1.2 或更新版本，再进入“个性化 → 主题展厅”。玄玉声场可以先预览，再单独一次性购买；以前购买的主题不包含此商品。价格以你所在地区 App Store 实时显示为准。" },
      { title: "为什么偶尔出现系统评分提示？", body: "App 仅在练习结束且界面空闲时尝试请求 Apple 系统评分提示，系统决定是否显示。资格计数和提示记录只保存在本机，不上传给开发者，也不记录你给出的星级或评价。可直接关闭提示，不影响功能。" },
      { title: "如何使用基础与付费主题", body: "晴空、星夜、松林、石墨四款基础主题免费。App Store 1.1.5 有十二套独立一次性购买的完整主题，其中包括 1.1.4 的布偶练习室、怪兽排练室、失重马戏团，以及 1.1.5 的机械花园和口袋爵士剧场。在“个性化 → 主题展厅”先预览，再按商店显示的当地价格购买。素材随安装包提供，解锁后可离线使用。购买一套不会解锁其他主题。Google Play 公开的 1.1.4 仍是十套。" },
      { title: "购买后主题仍显示未解锁", body: "先确认使用的是购买时的商店账户，并连接网络。在主题展厅点按“恢复购买”，等待同步后再打开主题。每一套完整主题都是独立的非消耗型购买，购买一套不会解锁其他主题。如仍失败，请附上主题名称、App 版本、商店和错误提示联系支持，无需发送付款资料。" },
      { title: "调音器没有声音输入", body: "首次使用时允许麦克风权限，并确认没有其他 App 独占音频输入。调音器只在设备上实时分析音高，不保存或上传声音。若电平没有变化，请检查系统麦克风权限并重新进入调音器。" },
      { title: "Apple Watch 调音器如何开始或停止？", body: "更新至 1.1.2 或更新版本，在 Watch App 的节拍器旁切到调音页，选择吉他、尤克里里、贝斯或半音阶模式，再点“开始调音”。首次使用需允许手表麦克风权限。调准时会有触觉提示；点“停止调音”、切换页面或离开 App 即结束收音。若没有输入，请在手表系统设置检查 GuitarTool 的麦克风权限，并确认当前没有其他音频任务占用输入。声音只在手表本地分析，不录音或上传。" },
      { title: "调音读数跳动或太快消失", body: "一次只拨一根弦，轻触其他弦抑制共振，并在起音过后查看读数。1.1.1 优化基频与余音跟踪；余音结束后上次读数会保留约 3 秒，再次拨弦会立即更新。距离和环境噪声也会影响读数。" },
      { title: "节拍器没有声音或节拍中断", body: "检查设备音量、静音状态和当前蓝牙／AirPlay 音频路线。停止后重新开始一次；若切换过输出设备，请重新打开节拍器，让音频会话恢复到当前路线。" },
      { title: "练习时屏幕会保持常亮吗？", body: "1.1.1 中，iPhone 或 iPad 前台播放节拍器或收音调音时默认保持屏幕亮起；停止或离开相应功能后恢复系统熄屏行为。如希望练习中也按系统时间熄屏，在“个性化”中打开“运行时可熄屏”。" },
      { title: "后置闪光灯节拍没有出现", body: "闪光灯节拍只会在具备后置闪光灯的兼容 iPhone 上显示。首次开启前请阅读频闪、耗电与发热提示。它可跟随全部主拍或仅重音，提供三档强度，不跟随细分音符；停止、离开页面或进入后台会自动关闭，也不会拍照或采集画面。" },
      { title: "Widget 没有同步最新速度或细分", body: "先打开主 App 一次，再返回主屏幕；刷新时机由系统管理，必要时移除并重新添加 Widget。原有小、中、大号均支持调速和播放暂停，中号和大号支持拍号与 TAP，大号支持单拍、八分、三连、十六分与 Swing。1.1.3 的 iOS 27+ 超大竖排布局集中提供这些控制，设置通过本机共享状态与 App 双向同步。" },
      { title: "Apple Watch 没有声音或状态不同步", body: "确认 Watch App 已安装，并先在 iPhone 上打开 GuitarTool。播放成功开始且已启用支持的后台音频路线后，落腕或屏幕变暗时声音可继续，界面与触觉刷新会暂停。如果系统改用仅限前台的扬声器回退路线，界面非活跃时会停止节拍，需要回到 Watch App 再主动开始。实际输出取决于手表型号、系统和当前路线，部分设备需要蓝牙耳机或扬声器。" },
      { title: "和弦卡片无法保存到照片", body: "在系统设置中允许 GuitarTool 添加照片。保存前会显示最终卡片预览；系统分享只发送图片，不强制附带下载链接，也不会把图片上传到 GuitarTool 服务器。" },
    ],
    privacyTitle: "关于隐私与权限",
    privacyBody: "App Store 1.1.5 无需注册，无广告、订阅或跨应用追踪。中文人声数拍使用包内音频、离线播放，不需要麦克风或语音识别。调音只在你主动开始时使用麦克风并在设备本地分析，声音不保存或上传；照片权限仅在主动保存和弦卡片时使用。四款基础主题免费。Apple 端十二套付费主题素材内置。",
    privacyAnalytics: "1.1.5 继续停用使用分析，不提供“帮助改进 GuitarTool”入口，不初始化 PostHog，也不发送使用、购买结果或诊断分析事件。曾明确开启分析的测试版本所上传的数据不会自动删除；相关申请方式见 2026 年 11 月 18 日更新的隐私政策。支持邮箱是 weizhichao1027@gmail.com。",
    privacyLink: "阅读完整隐私政策",
    emailTitle: "需要进一步帮助？",
    emailBody: "邮件中请附上设备型号、系统版本、GuitarTool 版本以及清晰的复现步骤。这样最容易定位问题。",
    emailAction: "发送邮件",
  },
  en: {
    lang: "en",
    eyebrow: "GUITARTOOL SUPPORT",
    title: "Solve the interruption.\nGet back to the music.",
    lead: "Help for GuitarTool as it can be downloaded now. The public App Store version is 1.1.5. The public Google Play version is Android and Wear OS 1.1.4. Core tools need no account or subscription and work offline. Themes are separate one-time purchases.",
    contact: "Contact support",
    appStore: "View on the App Store",
    status: [
      ["Public versions", "App Store 1.1.5 · Google Play 1.1.4"],
      ["Devices", "iPhone · iPad · Apple Watch · Android · Wear OS"],
      ["System requirement", "iOS / iPadOS 17; watchOS 10 or later. Android follows Google Play."],
      ["Account and purchases", "No account · No subscription · One-time themes"],
    ],
    quickTitle: "Try these quick steps first",
    quick: [
      "Confirm that the latest version currently available in your region is installed from the App Store.",
      "Quit and reopen GuitarTool. For Watch or widget issues, open the iPhone app once first.",
      "Check Microphone or Photos access under Settings → Privacy & Security.",
      "If the issue continues, email the device model, OS version, affected tool and exact steps. Please do not send private recordings.",
    ],
    sections: [
      { title: "How do I install or update?", body: "For iPhone, iPad and Apple Watch, search GuitarTool on the App Store or use the App Store link on this page. The Apple ID is 6761914163. For Android and Wear OS, use the Google Play link for package com.guitar123.toolbox. Open the phone app once before checking Watch or widgets. The public versions do not have to match: they are currently App Store 1.1.5 and Google Play 1.1.4." },
      { title: "Do I need an account or a subscription?", body: "No. Tuning, the metronome, chords and four basic looks need no account. There is no subscription or automatic renewal. Paid content is appearance themes only, each a separate one-time purchase. The price is whatever the store shows in the confirmation sheet. This page does not publish a fixed price." },
      { title: "What changed in App Store 1.1.5?", body: "Kinetic Garden and Pocket Jazz Theater can be previewed and then purchased once, separately. Purchase, restoration and cancellation handling is improved, including more reliable syncing of purchased themes. Text in 13 languages and layouts across screen sizes are refined. An extra-large landscape iPad Home Screen widget appears when the system and device offer that size. Usage analytics stays disabled." },
      { title: "How do I restore a purchase, and what if I cancel?", body: "Use the same store account that paid, and stay online. In Personalization → Theme Gallery, tap Restore Purchases, wait for the store to sync, then open the theme. If you cancel before payment, the theme stays locked and you can buy it later. For Ask to Buy, wait for the store result instead of repeating payment. A refund or revocation can lock that theme again. An App Store purchase cannot be restored on Google Play, or the other way around." },
      { title: "A new theme is missing or a purchase is pending", body: "On the App Store, install 1.1.5 and open Personalization → Theme Gallery. Kinetic Garden and Pocket Jazz Theater are not included with earlier purchases. Product loading needs a connection, and availability follows your store region. For Ask to Buy, wait for the result. If a completed purchase remains locked, follow the restore steps." },
      { title: "Why do iPad or landscape layouts sometimes scroll?", body: "Layout follows the available window width. Split View, narrow windows or larger text can use vertical scrolling. The chord board keeps five frets visible and scrolls separately through all 20 frets. Complete themes apply to iPhone/iPad; Watch and widgets have dedicated layouts. For clipping, include device, orientation, text size and a screenshot." },
      { title: "Is Android or Wear OS available to download?", body: "Yes. Checked on 18 November 2026, the public Google Play page still shows Android and Wear OS 1.1.4, package com.guitar123.toolbox. Android phones offer tuning, a metronome, chords and that version’s ten separately purchased themes; Wear OS offers a standalone metronome and tuner. Kinetic Garden and Pocket Jazz Theater belong to App Store 1.1.5 and are not described as purchasable on the current Play listing. Theme purchases are managed separately on each store." },

      { title: "How do I use Voice counting and preview it?", body: "Update the iPhone or iPad app to 1.1.3 or later. Stop playback, open Metronome → Settings, tap the current sound row and choose Voice in Metronome Sound. It previews Chinese one, two, three and four at the current BPM; tap the selected sound to preview again. Playback counts the main beats in each bar, up to twelve, restarting at one each bar; subdivisions use clicks. Bundled audio works offline, needs no microphone and remains Chinese in every interface language. Watch and the browser metronome do not offer this sound." },
      { title: "How do I confirm or cancel a BPM input?", body: "Version 1.1.3 uses the same separate input panel across themes. Tap the BPM number, replace it and tap Done at the top to save. Cancel or swiping the panel away discards the draft and retains the previous tempo and training settings. Empty or non-digit input cannot be confirmed; valid numeric input is clamped to 20–500 BPM, including localized decimal digits. Confirming during playback keeps it running and preserves the countdown deadline, while applying the manual tempo rule that exits staged training." },
      { title: "Why is an extra-large widget missing?", body: "The extra-large portrait size from 1.1.3 requires iOS 27 or later. The system decides whether it fits the device and the space. Version 1.1.5 adds an extra-large landscape iPad widget, and that size appears only when the system and device offer it. These layouts include play/pause, ±5 BPM, TAP, quick tempos at 60/80/100/120, meter, subdivisions and Swing. Earlier systems keep the small, medium and large widgets." },
      { title: "How do I set up silent bars?", body: "On iPhone or iPad, open Metronome → Presets → Rhythm Training and enable Silent Bars. Set 1–64 audible bars and 1–64 silent bars; try two of each first. The internal beat continues during silence. If sound disappears in a regular pattern, check this setting before troubleshooting audio. Save the setup as a custom preset." },
      { title: "How do tempo stages work, and why did training exit?", body: "Enable Staged practice in Rhythm Training. Add up to six stages, each with 20–500 BPM and 1–64 bars. Loop Stages repeats the sequence; disabling it holds the final tempo. Manual tempo changes, confirming BPM input or TAP exit staged training; Cancel leaves it unchanged. Editing training parameters during playback restarts from bar one. This editor is in the native iPhone/iPad app; Watch, widgets and the browser do not provide it. Save the configuration with a custom preset; no theme purchase is needed." },
      { title: "What changed for preset targets, tempo progress and large text?", body: "Version 1.1.3 fixes practice preset target syncing so an older input draft does not overwrite a newly loaded target when you switch or reopen presets. Progressive tempo targets stay between the current BPM and 500. Recovery after an audio interruption retains completed bars and progressive tempo progress; starting a new practice still resets progress. Presets, training parameters and subdivision choices have improved wrapping at larger text sizes, and the countdown is more reliable. If a problem continues, send the text size, preset settings, audio route and reproduction steps." },
      { title: "Where can I find Jade Resonance?", body: "Update to 1.1.2 or later, then open Personalization → Theme Gallery. Preview Jade Resonance before its separate one-time purchase. Earlier theme purchases do not include it. The App Store displays the current price for your region." },
      { title: "Why might I see a system rating prompt?", body: "The app may request an Apple rating prompt after practice ends and the interface is idle. Apple decides whether it appears. Eligibility counters and request records stay on your device, are not uploaded to the developer and do not record your rating or review. Dismissing the prompt does not restrict any feature." },
      { title: "Use basic and paid themes", body: "Clear Sky, Starlight, Pine and Graphite remain free. App Store 1.1.5 has twelve separate one-time themes, including the 1.1.4 themes Plush Practice Room, Oddball Rehearsal and Zero Gravity Circus, plus Kinetic Garden and Pocket Jazz Theater. Preview them in Personalization → Theme Gallery, then use the price shown by the store. Artwork is bundled for offline use after unlock. One purchase does not unlock other themes. The public Google Play 1.1.4 listing still has ten paid themes." },
      { title: "A purchased theme is still locked", body: "Use the same store account that made the purchase and connect to the internet. In the Theme Gallery, tap Restore Purchases, wait for the store to sync, then reopen the theme. Each complete theme is a separate non-consumable purchase; buying one does not unlock the others. If it still fails, email the theme name, app version, store and error message, but no payment details." },
      { title: "The tuner shows no input", body: "Allow microphone access when asked and make sure another app is not holding the audio input. Pitch is analysed live on the device and is never saved or uploaded. If the input meter does not move, check the system microphone permission and reopen the tuner." },
      { title: "How do I start or stop the Apple Watch tuner?", body: "Update to 1.1.2 or later, swipe from the metronome to the tuner in the Watch app, choose guitar, ukulele, bass or chromatic mode, then tap Start Tuning. Allow microphone access on first use. An in-tune note gives haptic feedback. Tap Stop Tuning, change pages or leave the app to end capture. If input is missing, check GuitarTool's microphone permission in Watch settings and make sure another audio task is not using the input. Audio is analysed only on the watch, never recorded or uploaded." },
      { title: "The pitch reading jumps or disappears too soon", body: "Pluck one string at a time and mute the others. Read after the initial attack. Version 1.1.1 improves fundamental-pitch and note-decay tracking, holds the last reading for about three seconds after a note ends, and updates immediately with a new pluck. Distance and room noise can also affect a reading." },
      { title: "The metronome is silent or stops", body: "Check device volume, silent mode and the active Bluetooth or AirPlay route. Stop and start the metronome once. If the output device changed, reopen the tool so its audio session can follow the current route." },
      { title: "Will the screen stay awake while I practise?", body: "In 1.1.1, the iPhone or iPad screen stays awake by default while the metronome plays or the tuner listens in the foreground. Normal system sleep returns when you stop or leave the tool. To allow the display to sleep during active practice, enable Allow Sleep During Use in Personalization." },
      { title: "Flash Beat is not available", body: "Flash Beat appears only on compatible iPhones with a rear flash. Read the strobe, battery and heat notice before first use. It can follow all main beats or accents only, offers three intensity levels, and does not follow subdivisions. It turns off automatically when playback stops, you leave the screen or the app enters the background. It never captures images." },
      { title: "A widget shows an older tempo or subdivision", body: "Open the main app once, then return to the Home Screen; refresh timing is managed by the system. If needed, remove and add the widget again. Small, medium and large all support tempo and play/pause; medium and large add meter and TAP; large adds beat, eighth, triplet, sixteenth and Swing. The 1.1.3 extra-large portrait layout on iOS 27+ groups these controls together. Settings sync both ways with the app through shared local state." },
      { title: "Apple Watch audio or state is different", body: "Confirm that the Watch app is installed, then open GuitarTool on iPhone once. Once playback has started successfully with an activated background audio route, sound can continue when the wrist lowers or the display dims, while visual and haptic refresh pauses. If the system uses the foreground-only speaker fallback, the metronome stops when the interface becomes inactive; return to the Watch app and start it again. Output depends on the Watch model, system and active route; some devices need Bluetooth headphones or a speaker." },
      { title: "A chord card will not save to Photos", body: "Allow GuitarTool to add photos in system settings. The final card is shown before saving. System sharing sends only the image, with no forced download link, and GuitarTool does not upload the card to a server." },
    ],
    privacyTitle: "Privacy and permissions",
    privacyBody: "App Store 1.1.5 needs no account and has no ads, subscription or cross-app tracking. Chinese voice counting uses bundled audio offline, without microphone or speech recognition. Tuning uses the microphone only after you start it and processes audio on-device without saving or uploading it. Photos access is only for saving a chord card. Four basic looks are free. Twelve paid themes on Apple have bundled artwork.",
    privacyAnalytics: "Version 1.1.5 keeps usage analytics disabled. There is no Help improve GuitarTool entry; PostHog is not initialized and no usage, purchase-result or diagnostic analytics events are sent. Data uploaded by earlier analytics-enabled test builds is not automatically deleted. The privacy policy was last updated on 18 November 2026. Support email is weizhichao1027@gmail.com.",
    privacyLink: "Read the full privacy policy",
    emailTitle: "Still need help?",
    emailBody: "Include the device model, OS version, GuitarTool version and clear reproduction steps. Those details make an issue much easier to diagnose.",
    emailAction: "Email support",
  },
} as const;

export function SupportPage({ language }: { language: keyof typeof content }) {
  const copy = content[language];
  const path = language === "zh" ? "/support/" : "/en/support/";
  const faq = copy.sections.map((item) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: { "@type": "Answer", text: item.body },
  }));

  return (
    <main className="acqPage supportPage" lang={copy.lang}>
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "ContactPage", name: language === "zh" ? "GuitarTool 技术支持" : "GuitarTool Support", url: absoluteUrl(path), inLanguage: copy.lang, dateModified: RELEASE_UPDATED, mainEntity: { "@type": "SoftwareApplication", name: "GuitarTool", softwareVersion: RELEASE_VERSION, downloadUrl: APP_STORE_URL, operatingSystem: "iOS, iPadOS, watchOS, Android, Wear OS" } },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq },
      ]} />
      <AcquisitionHeader language={language} />

      <section className="supportHero shell">
        <p className="acqEyebrow">{copy.eyebrow}</p>
        <h1>{copy.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
        <p>{copy.lead}</p>
        <div>
          <a className="primaryButton" href={`mailto:${email}`}>{copy.contact} <span>→</span></a>
          <a className="textCta" href={APP_STORE_LINKS.support}>{copy.appStore} <span>↗</span></a>
          <a className="textCta" href={GOOGLE_PLAY_URL}>Google Play · Android / Wear OS <span>↗</span></a>
        </div>
      </section>

      <section className="supportStatus shell" aria-label={language === "zh" ? "版本与兼容性" : "Version and compatibility"}>
        {copy.status.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
      </section>

      <section className="supportQuick shell">
        <div><p className="acqEyebrow">01 / QUICK CHECK</p><h2>{copy.quickTitle}</h2></div>
        <ol>{copy.quick.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
      </section>

      <section className="supportTopics shell">
        <div className="assetHeading"><p className="acqEyebrow">02 / TROUBLESHOOTING</p><h2>{language === "zh" ? "按功能排查常见问题。" : "Troubleshoot by feature."}</h2><p>{language === "zh" ? "说明以 App Store 1.1.5 和 Google Play 1.1.4 为当前公开范围，并注明功能所在设备与系统条件。" : "Answers use public App Store 1.1.5 and Google Play 1.1.4 as the current scope, and state the device and system for each feature."}</p></div>
        <div className="supportGrid">{copy.sections.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </section>

      <section className="supportPrivacy shell">
        <div><p className="acqEyebrow">03 / PRIVACY</p><h2>{copy.privacyTitle}</h2></div>
        <div><p>{copy.privacyBody}</p><p>{copy.privacyAnalytics}</p><a className="textCta" href={language === "zh" ? PRIVACY_URL : PRIVACY_EN_URL}>{copy.privacyLink} <span>↗</span></a></div>
      </section>

      <section className="supportContact shell">
        <p><Link href={language === "zh" ? "/guides/voice-counting-metronome/" : "/en/guides/voice-counting-metronome/"}>{language === "zh" ? "人声数拍设置指南" : "Voice counting setup guide"}</Link> · <Link href={language === "zh" ? "/guides/metronome-bpm-widget/" : "/en/guides/metronome-bpm-widget/"}>{language === "zh" ? "BPM 输入与小组件指南" : "BPM input and widget guide"}</Link></p>
        <p><Link href={language === "zh" ? "/guides/silent-bar-metronome/" : "/en/guides/silent-bar-metronome/"}>{language === "zh" ? "静音小节练习指南" : "Silent-bar practice guide"}</Link> · <Link href={language === "zh" ? "/guides/staged-tempo-training/" : "/en/guides/staged-tempo-training/"}>{language === "zh" ? "分段速度训练指南" : "Staged tempo training guide"}</Link></p>
        <p><Link href={language === "zh" ? "/guides/guitartool-1-1-5/" : "/en/guides/guitartool-1-1-5/"}>{language === "zh" ? "1.1.5 更新与下载说明" : "1.1.5 release and download notes"}</Link> · <Link href={language === "zh" ? "/guides/themes-and-purchases/" : "/en/guides/themes-and-purchases/"}>{language === "zh" ? "主题、价格与恢复购买" : "Themes, price and restoring purchases"}</Link></p>
        <p className="acqEyebrow">04 / DIRECT SUPPORT</p>
        <h2>{copy.emailTitle}</h2>
        <p>{copy.emailBody}</p>
        <a className="primaryButton coral" href={`mailto:${email}`}>{copy.emailAction} <span>↗</span></a>
        <small>{email}</small>
      </section>
      <AcquisitionFooter language={language} />
    </main>
  );
}
