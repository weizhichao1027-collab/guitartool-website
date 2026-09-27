import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { APP_STORE_LINKS, APP_STORE_URL, PRIVACY_URL, RELEASE_VERSION, absoluteUrl } from "@/app/lib/site";

const email = "weizhichao1027@gmail.com";

const content = {
  zh: {
    lang: "zh-CN",
    eyebrow: "GUITARTOOL 技术支持",
    title: "先解决练习中的问题，\n再回到音乐里。",
    lead: "这里汇总已上架的 GuitarTool 1.1.1 及更早版本的设备要求、Watch 调音、购买恢复、常见问题与联系入口。核心功能无需账户，并可离线使用。",
    contact: "联系技术支持",
    appStore: "前往 App Store",
    status: [
      ["文档版本", "1.1.1 已上架"],
      ["支持设备", "iPhone · iPad · Apple Watch"],
      ["系统要求", "iOS / iPadOS 17、watchOS 10 或更高版本"],
      ["数据方式", "无需账户 · 核心功能离线运行"],
    ],
    quickTitle: "先试这几个快速步骤",
    quick: [
      "在 App Store 确认已更新到你所在地区当前可用的最新版本。",
      "完全退出 GuitarTool 后重新打开；涉及 Watch 或 Widget 时，也请先打开一次 iPhone App。",
      "在“设置 → 隐私与安全性”中检查麦克风或照片权限。",
      "仍未解决时，来信说明设备型号、系统版本、问题发生在哪个工具，以及复现步骤。请勿发送私人录音。",
    ],
    sections: [
      { title: "如何使用基础与付费主题", body: "四款基础主题免费且继续可见。1.1.0 已内置六套完整付费主题素材，可在主题展厅预览并分别通过 App Store 购买；购买后无需下载素材即可离线使用。恢复购买可能需要联网。" },
      { title: "购买后主题仍显示未解锁", body: "先确认使用的是购买时的 Apple 账户，并连接网络。在 App 的主题展厅点按“恢复购买”，等待 App Store 同步权益后重新打开主题。六套完整主题是六笔独立的非消耗型购买；购买一套不会解锁其他主题。如仍失败，请附上主题名称、App 版本和错误提示联系支持，无需发送付款资料。" },
      { title: "调音器没有声音输入", body: "首次使用时允许麦克风权限，并确认没有其他 App 独占音频输入。调音器只在设备上实时分析音高，不保存或上传声音。若电平没有变化，请检查系统麦克风权限并重新进入调音器。" },
      { title: "Apple Watch 调音器如何开始或停止？", body: "更新至 1.1.1，在 Watch App 的节拍器旁切到调音页，选择吉他、尤克里里、贝斯或半音阶模式，再点“开始调音”。首次使用需允许手表麦克风权限。调准时会有触觉提示；点“停止调音”、切换页面或离开 App 即结束收音。若没有输入，请在手表系统设置检查 GuitarTool 的麦克风权限，并确认当前没有其他音频任务占用输入。声音只在手表本地分析，不录音或上传。" },
      { title: "调音读数跳动或太快消失", body: "一次只拨一根弦，轻触其他弦抑制共振，并在起音过后查看读数。1.1.1 优化基频与余音跟踪；余音结束后上次读数会保留约 3 秒，再次拨弦会立即更新。距离和环境噪声也会影响读数。" },
      { title: "节拍器没有声音或节拍中断", body: "检查设备音量、静音状态和当前蓝牙／AirPlay 音频路线。停止后重新开始一次；若切换过输出设备，请重新打开节拍器，让音频会话恢复到当前路线。" },
      { title: "练习时屏幕会保持常亮吗？", body: "1.1.1 中，iPhone 或 iPad 前台播放节拍器或收音调音时默认保持屏幕亮起；停止或离开相应功能后恢复系统熄屏行为。如希望练习中也按系统时间熄屏，在“个性化”中打开“运行时可熄屏”。" },
      { title: "后置闪光灯节拍没有出现", body: "闪光灯节拍只会在具备后置闪光灯的兼容 iPhone 上显示。首次开启前请阅读频闪、耗电与发热提示。它可跟随全部主拍或仅重音，提供三档强度，不跟随细分音符；停止、离开页面或进入后台会自动关闭，也不会拍照或采集画面。" },
      { title: "Widget 没有同步最新速度或细分", body: "先在 iPhone 上打开 GuitarTool 一次，确认主 App 和 Widget 已同步；随后返回主屏幕再操作。必要时移除并重新添加 Widget。小、中、大三种尺寸支持速度、拍号、播放和 TAP 操作；1.1.1 的大号 Widget 还可切换单拍、八分、三连、十六分与 Swing，并与 App 双向同步。" },
      { title: "Apple Watch 没有声音或状态不同步", body: "确认 Watch App 已安装，并先在 iPhone 上打开 GuitarTool。Watch 落腕或屏幕变暗后，声音节拍可以继续，但界面与触觉刷新会暂停。实际声音输出取决于手表型号和当前音频路线，部分设备需要蓝牙耳机或扬声器。" },
      { title: "和弦卡片无法保存到照片", body: "在系统设置中允许 GuitarTool 添加照片。保存前会显示最终卡片预览；系统分享只发送图片，不强制附带下载链接，也不会把图片上传到 GuitarTool 服务器。" },
    ],
    privacyTitle: "关于隐私与权限",
    privacyBody: "GuitarTool 不要求注册，不包含广告或第三方统计 SDK。iPhone、iPad 和 Apple Watch 麦克风只在你主动开始调音时用于设备端实时分析，不保存或上传声音；照片权限只在主动保存和弦卡片时使用。四款基础主题免费，六套付费主题素材内置；App 不采集功能使用分析数据。",
    privacyLink: "阅读完整隐私政策",
    emailTitle: "需要进一步帮助？",
    emailBody: "邮件中请附上设备型号、系统版本、GuitarTool 版本以及清晰的复现步骤。这样最容易定位问题。",
    emailAction: "发送邮件",
  },
  en: {
    lang: "en",
    eyebrow: "GUITARTOOL SUPPORT",
    title: "Solve the interruption.\nGet back to the music.",
    lead: "Device requirements, Apple Watch tuning, purchase restores and troubleshooting for GuitarTool 1.1.1 and earlier releases. Core features need no account and work offline.",
    contact: "Contact support",
    appStore: "View on the App Store",
    status: [
      ["Documentation", "1.1.1 available now"],
      ["Devices", "iPhone · iPad · Apple Watch"],
      ["System requirement", "iOS / iPadOS 17; watchOS 10 or later"],
      ["Data model", "No account · Core features work offline"],
    ],
    quickTitle: "Try these quick steps first",
    quick: [
      "Confirm that the latest version currently available in your region is installed from the App Store.",
      "Quit and reopen GuitarTool. For Watch or widget issues, open the iPhone app once first.",
      "Check Microphone or Photos access under Settings → Privacy & Security.",
      "If the issue continues, email the device model, OS version, affected tool and exact steps. Please do not send private recordings.",
    ],
    sections: [
      { title: "Use basic and paid themes", body: "The four basic looks remain free. Version 1.1.0 bundles artwork for six complete themes, each sold separately through the App Store. Preview them in the Theme Gallery; once purchased, they work offline without an asset download. Restoring purchases may require a connection." },
      { title: "A purchased theme is still locked", body: "Use the same Apple Account used for the purchase and connect to the internet. In the Theme Gallery, tap Restore Purchases, wait for the App Store to sync the entitlement, then reopen the theme. The six complete themes are separate non-consumable purchases; buying one does not unlock the others. If it still fails, send support the theme name, app version and error message, but no payment details." },
      { title: "The tuner shows no input", body: "Allow microphone access when asked and make sure another app is not holding the audio input. Pitch is analysed live on the device and is never saved or uploaded. If the input meter does not move, check the system microphone permission and reopen the tuner." },
      { title: "How do I start or stop the Apple Watch tuner?", body: "Update to 1.1.1, swipe from the metronome to the tuner in the Watch app, choose guitar, ukulele, bass or chromatic mode, then tap Start Tuning. Allow microphone access on first use. An in-tune note gives haptic feedback. Tap Stop Tuning, change pages or leave the app to end capture. If input is missing, check GuitarTool's microphone permission in Watch settings and make sure another audio task is not using the input. Audio is analysed only on the watch, never recorded or uploaded." },
      { title: "The pitch reading jumps or disappears too soon", body: "Pluck one string at a time and mute the others. Read after the initial attack. Version 1.1.1 improves fundamental-pitch and note-decay tracking, holds the last reading for about three seconds after a note ends, and updates immediately with a new pluck. Distance and room noise can also affect a reading." },
      { title: "The metronome is silent or stops", body: "Check device volume, silent mode and the active Bluetooth or AirPlay route. Stop and start the metronome once. If the output device changed, reopen the tool so its audio session can follow the current route." },
      { title: "Will the screen stay awake while I practise?", body: "In 1.1.1, the iPhone or iPad screen stays awake by default while the metronome plays or the tuner listens in the foreground. Normal system sleep returns when you stop or leave the tool. To allow the display to sleep during active practice, enable Allow Sleep During Use in Personalization." },
      { title: "Flash Beat is not available", body: "Flash Beat appears only on compatible iPhones with a rear flash. Read the strobe, battery and heat notice before first use. It can follow all main beats or accents only, offers three intensity levels, and does not follow subdivisions. It turns off automatically when playback stops, you leave the screen or the app enters the background. It never captures images." },
      { title: "A widget shows an older tempo or subdivision", body: "Open GuitarTool on iPhone once so the app and widget can refresh shared state, then return to the Home Screen. If needed, remove and add the widget again. Small, medium and large widgets support tempo, meter, play/pause and tap tempo. In 1.1.1, the large widget also offers beat, eighth, triplet, sixteenth and Swing choices that sync both ways with the app." },
      { title: "Apple Watch audio or state is different", body: "Confirm that the Watch app is installed, then open GuitarTool on iPhone once. Metronome audio can continue when the wrist lowers or the display dims, while visual and haptic refresh pauses. The actual output depends on the Watch model and active audio route; some devices need Bluetooth headphones or a speaker." },
      { title: "A chord card will not save to Photos", body: "Allow GuitarTool to add photos in system settings. The final card is shown before saving. System sharing sends only the image, with no forced download link, and GuitarTool does not upload the card to a server." },
    ],
    privacyTitle: "Privacy and permissions",
    privacyBody: "GuitarTool needs no registration and contains no ads or third-party analytics SDKs. The iPhone, iPad and Apple Watch microphones are used only after you start live on-device tuning; audio is never saved or uploaded. Photos access is used only when you save a chord card. Four basic looks are free, six paid complete themes are bundled, and the app collects no usage analytics.",
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
        { "@context": "https://schema.org", "@type": "ContactPage", name: language === "zh" ? "GuitarTool 技术支持" : "GuitarTool Support", url: absoluteUrl(path), inLanguage: copy.lang, mainEntity: { "@type": "SoftwareApplication", name: "GuitarTool", softwareVersion: RELEASE_VERSION, downloadUrl: APP_STORE_URL, operatingSystem: "iOS, iPadOS, watchOS" } },
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
        <div className="assetHeading"><p className="acqEyebrow">02 / TROUBLESHOOTING</p><h2>{language === "zh" ? "按功能排查常见问题。" : "Troubleshoot by feature."}</h2><p>{language === "zh" ? "说明以 1.1.1 为基线，并覆盖仍在使用的更早版本。" : "Answers use 1.1.1 as the baseline and also cover earlier releases still in use."}</p></div>
        <div className="supportGrid">{copy.sections.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </section>

      <section className="supportPrivacy shell">
        <div><p className="acqEyebrow">03 / PRIVACY</p><h2>{copy.privacyTitle}</h2></div>
        <div><p>{copy.privacyBody}</p><a className="textCta" href={PRIVACY_URL}>{copy.privacyLink} <span>↗</span></a></div>
      </section>

      <section className="supportContact shell">
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
