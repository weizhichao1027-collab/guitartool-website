import { AcquisitionFooter, AcquisitionHeader } from "@/app/components/AcquisitionChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { APP_STORE_LINKS, APP_STORE_URL, PRIVACY_URL, absoluteUrl } from "@/app/lib/site";

const email = "weizhichao1027@gmail.com";

const content = {
  zh: {
    lang: "zh-CN",
    eyebrow: "GUITARTOOL 技术支持",
    title: "先解决练习中的问题，\n再回到音乐里。",
    lead: "这里汇总 GuitarTool 当前 App Store 版本的设备要求、常见问题与联系入口。核心功能无需账户，并可离线使用。",
    contact: "联系技术支持",
    appStore: "前往 App Store",
    status: [
      ["文档范围", "App Store 当前可用版本"],
      ["支持设备", "iPhone · iPad · Apple Watch"],
      ["系统要求", "iOS / iPadOS 17 或更高版本"],
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
      { title: "调音器没有声音输入", body: "首次使用时允许麦克风权限，并确认没有其他 App 独占音频输入。调音器只在设备上实时分析音高，不保存或上传声音。若电平没有变化，请检查系统麦克风权限并重新进入调音器。" },
      { title: "节拍器没有声音或节拍中断", body: "检查设备音量、静音状态和当前蓝牙／AirPlay 音频路线。停止后重新开始一次；若切换过输出设备，请重新打开节拍器，让音频会话恢复到当前路线。" },
      { title: "Widget 没有同步最新速度", body: "先在 iPhone 上打开 GuitarTool 一次，确认主 App 和 Widget 已同步；随后返回主屏幕再操作。必要时移除并重新添加 Widget。小、中、大三种尺寸都支持速度、拍号、播放和 TAP 操作。" },
      { title: "Apple Watch 没有声音或状态不同步", body: "确认 Watch App 已安装，并先在 iPhone 上打开 GuitarTool。Watch 落腕或屏幕变暗后，声音节拍可以继续，但界面与触觉刷新会暂停。实际声音输出取决于手表型号和当前音频路线，部分设备需要蓝牙耳机或扬声器。" },
      { title: "和弦卡片无法保存到照片", body: "在系统设置中允许 GuitarTool 添加照片。保存前会显示最终卡片预览；系统分享只发送图片，不强制附带下载链接，也不会把图片上传到 GuitarTool 服务器。" },
    ],
    privacyTitle: "关于隐私与权限",
    privacyBody: "GuitarTool 不要求注册，不包含广告或第三方统计 SDK。麦克风只用于本机实时调音；照片权限只在你主动保存和弦卡片时使用。",
    privacyLink: "阅读完整隐私政策",
    emailTitle: "需要进一步帮助？",
    emailBody: "邮件中请附上设备型号、系统版本、GuitarTool 版本以及清晰的复现步骤。这样最容易定位问题。",
    emailAction: "发送邮件",
  },
  en: {
    lang: "en",
    eyebrow: "GUITARTOOL SUPPORT",
    title: "Solve the interruption.\nGet back to the music.",
    lead: "Device requirements, troubleshooting and direct support for the version of GuitarTool currently available on the App Store. Core features need no account and work offline.",
    contact: "Contact support",
    appStore: "View on the App Store",
    status: [
      ["Documentation", "Current App Store release"],
      ["Devices", "iPhone · iPad · Apple Watch"],
      ["System requirement", "iOS / iPadOS 17 or later"],
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
      { title: "The tuner shows no input", body: "Allow microphone access when asked and make sure another app is not holding the audio input. Pitch is analysed live on the device and is never saved or uploaded. If the input meter does not move, check the system microphone permission and reopen the tuner." },
      { title: "The metronome is silent or stops", body: "Check device volume, silent mode and the active Bluetooth or AirPlay route. Stop and start the metronome once. If the output device changed, reopen the tool so its audio session can follow the current route." },
      { title: "A widget shows an older tempo", body: "Open GuitarTool on iPhone once so the app and widget can refresh shared state, then return to the Home Screen. If needed, remove and add the widget again. Small, medium and large widgets support tempo, meter, play/pause and tap tempo." },
      { title: "Apple Watch audio or state is different", body: "Confirm that the Watch app is installed, then open GuitarTool on iPhone once. Metronome audio can continue when the wrist lowers or the display dims, while visual and haptic refresh pauses. The actual output depends on the Watch model and active audio route; some devices need Bluetooth headphones or a speaker." },
      { title: "A chord card will not save to Photos", body: "Allow GuitarTool to add photos in system settings. The final card is shown before saving. System sharing sends only the image, with no forced download link, and GuitarTool does not upload the card to a server." },
    ],
    privacyTitle: "Privacy and permissions",
    privacyBody: "GuitarTool needs no registration and contains no ads or third-party analytics SDKs. The microphone is used only for live on-device tuning; Photos access is used only when you choose to save a chord card.",
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
        { "@context": "https://schema.org", "@type": "ContactPage", name: language === "zh" ? "GuitarTool 技术支持" : "GuitarTool Support", url: absoluteUrl(path), inLanguage: copy.lang, mainEntity: { "@type": "SoftwareApplication", name: "GuitarTool", downloadUrl: APP_STORE_URL, operatingSystem: "iOS, iPadOS, watchOS" } },
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
        <div className="assetHeading"><p className="acqEyebrow">02 / TROUBLESHOOTING</p><h2>{language === "zh" ? "按功能排查常见问题。" : "Troubleshoot by feature."}</h2><p>{language === "zh" ? "说明以你所在地区 App Store 当前可下载的版本为准。" : "Answers follow the release currently available in your App Store region."}</p></div>
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
