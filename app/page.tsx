import Image from "next/image";
import { SiteLink as Link } from "@/app/components/SiteLink";
import { JsonLd } from "@/app/components/JsonLd";
import { APP_STORE_LINKS, MEDIA_RELEASE_URL, absoluteUrl, supportedLanguageCodes } from "@/app/lib/site";

const appStoreUrl = APP_STORE_LINKS.home;
const privacyUrl = "https://weizhichao1027-collab.github.io/GuitarTool-Privacy/";
const githubUrl = "https://github.com/weizhichao1027-collab/guitartool-website";
const basePath = process.env.GITHUB_PAGES === "true" ? "/guitartool-website" : "";
const assetPath = (path: string) => `${basePath}${path}`;

const features = [
  {
    number: "01",
    kicker: "Flexible Metronome",
    title: "不是只会响的节拍器，\n而是能陪你进步的训练器。",
    copy: "从 20 到 500 BPM，自定义拍号、拍值、强弱拍与细分。把计时、Swing、渐进加速和后置闪光灯节拍组合成属于你的练习方式。",
    points: ["TAP 测速与练习预设", "四种细分与八分 Swing", "闪光灯跟随全部主拍或仅重音，三档强度"],
    image: "/hero-metronome.webp",
    alt: "GuitarTool 节拍器功能展示",
    tone: "aqua",
  },
  {
    number: "02",
    kicker: "Real-time Tuner",
    title: "看清每一分音准，\n也听见自己的进步。",
    copy: "七类乐器与多种特殊调弦，配合音分、信号强度和稳定度反馈。音频只在设备上实时计算，不保存，也不上传。",
    points: ["标准、Drop D、DADGAD 与开放调弦", "A4 基准音 430–446 Hz", "参考音与稳定度反馈"],
    image: "/tuner.webp",
    alt: "GuitarTool 精准调音器功能展示",
    tone: "sky",
  },
  {
    number: "03",
    kicker: "Chord Library",
    title: "一个和弦，不止一种答案。",
    copy: "吉他与尤克里里各 855 个和弦名称，共收录 19,244 个指法。切换、编辑、识别和试听后，还能把当前按法保存或分享成清晰卡片。",
    points: ["固定五品视窗，纵览完整 20 品", "交互编辑、识别与真实试听", "和弦卡片预览、保存与系统分享"],
    image: "/chords.webp",
    alt: "GuitarTool 吉他与尤克里里和弦库展示",
    tone: "blush",
  },
  {
    number: "04",
    kicker: "Chord Cards",
    title: "先看到最终卡片，\n再保存或发给需要的人。",
    copy: "真实预览会保留当前和弦、静音弦、按弦点与高把位起始品位。确认无误后保存到相册，或通过系统分享发送图片。",
    points: ["吉他与尤克里里分别排版", "覆盖开放把位与高把位", "分享纯图片，不强制附下载链接"],
    image: "/chord-card-share.webp",
    alt: "GuitarTool 和弦卡片预览、保存和分享界面",
    tone: "aqua",
  },
] as const;

const faqs = [
  ["需要联网或注册账号吗？", "不需要。GuitarTool 的核心功能完全离线运行，无需注册、登录或云端同步。"],
  ["调音器会保存我的声音吗？", "不会。麦克风音频只用于设备端实时音高检测，不会保存为文件，也不会上传到任何服务器。"],
  ["支持哪些设备？", "支持 iPhone 与 iPad 自适应界面，附带 Apple Watch 节拍器和三种尺寸的主屏幕交互式小组件；Watch 落腕或屏幕变暗后声音节拍仍可继续。"],
  ["支持尤克里里吗？", "支持。调音器提供 GCEA 模式，和弦库也包含完整的尤克里里和弦名称与多种指法。"],
  ["可以把和弦指法发给老师或朋友吗？", "可以。先预览当前指法卡片，再保存到相册或通过系统分享发送；图片不会强制附带下载链接。"],
  ["后置闪光灯节拍会拍照吗？", "不会。它只在兼容 iPhone 上用后置闪光灯提示全部主拍或仅重音，不采集画面；停止、离开页面或进入后台时会自动关闭。"],
] as const;

export default function Home() {
  return (
    <main lang="zh-CN">
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "GuitarTool", softwareVersion: "1.0.8", description: "面向吉他与尤克里里演奏者的离线调音器、节拍器与可保存分享的交互式和弦库。", url: absoluteUrl("/"), downloadUrl: appStoreUrl, applicationCategory: "MusicApplication", operatingSystem: "iOS, iPadOS, watchOS", inLanguage: supportedLanguageCodes, offers: { "@type": "Offer", price: "0", priceCurrency: "CNY" }, featureList: ["实时弦乐调音器", "20–500 BPM 节拍器", "后置闪光灯节拍：全部主拍或仅重音、三档强度", "19,244 个吉他与尤克里里指法", "和弦卡片预览、保存与分享", "支持后台音频的 Apple Watch 节拍器", "主屏幕交互式小组件"] },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
        { "@context": "https://schema.org", "@type": "VideoObject", name: "GuitarTool 中文完整介绍（横屏）", description: "36 秒介绍 GuitarTool 调音器、节拍器、和弦卡片、小组件与多设备体验。", thumbnailUrl: absoluteUrl("/og.png"), uploadDate: "2026-08-28", duration: "PT36S", contentUrl: `${MEDIA_RELEASE_URL}/GuitarTool-Full-Intro-zh-Hans-854x480.mp4` },
        { "@context": "https://schema.org", "@type": "VideoObject", name: "GuitarTool 中文完整介绍（竖屏）", description: "为移动端优化的 36 秒 GuitarTool 中文完整介绍。", thumbnailUrl: absoluteUrl("/media-kit/social/guitartool-chord-cards-zh-Hans-1080x1350.png"), uploadDate: "2026-08-28", duration: "PT36S", contentUrl: `${MEDIA_RELEASE_URL}/GuitarTool-Full-Intro-zh-Hans-480x854.mp4` },
      ]} />
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="GuitarTool 首页">
          <Image src={assetPath("/app-icon-224.png")} alt="" width={42} height={42} priority />
          <span>GuitarTool</span>
        </a>
        <div className="navLinks">
          <a href="#features">功能</a>
          <Link href="/online-tuner/">在线调音器</Link>
          <Link href="/online-metronome/">在线节拍器</Link>
          <Link href="/chords/guitar/">热门和弦</Link>
          <Link href="/press/">媒体资料</Link>
          <Link href="/support/">技术支持</Link>
          <a className="languageSwitch" href={`${basePath}/en/`} aria-label="Switch to English">EN</a>
          <a className="navCta" href={appStoreUrl}>App Store 下载</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> 为每一次认真练习而做</p>
          <h1>练琴时，<br /><em>只留下专注。</em></h1>
          <p className="heroLead">
            调音、跟拍、查和弦，一款就够。GuitarTool 把专业练习工具收进安静、顺手的界面里。
          </p>
          <div className="heroActions">
            <a className="primaryButton" href={appStoreUrl}>在 App Store 下载 <span>↗</span></a>
            <a className="textButton" href="#features">探索功能 <span>↓</span></a>
          </div>
          <div className="heroProof" aria-label="产品特性">
            <span>完全离线</span><i />
            <span>无广告</span><i />
            <span>无需账户</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="GuitarTool 节拍器界面展示">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="visualCard">
            <div className="visualTopline"><span>20–500 BPM</span><span>13 种语言</span></div>
            <Image
              className="heroShot"
              src={assetPath("/hero-metronome.webp")}
              alt="GuitarTool 节拍器，支持预设、计时、Swing 与渐进加速"
              width={833}
              height={1800}
              priority
            />
          </div>
          <div className="floatingNote noteOne"><b>01</b><span>精准节拍<br /><small>稳定，从第一拍开始</small></span></div>
          <div className="floatingNote noteTwo"><b>♪</b><span>你的声音<br /><small>只留在设备上</small></span></div>
        </div>
      </section>

      <section className="ticker" aria-label="主要功能">
        <div>
          <span>GUITAR</span><i>✦</i><span>UKULELE</span><i>✦</i><span>TUNER</span><i>✦</i><span>METRONOME</span><i>✦</i><span>CHORDS</span><i>✦</i><span>OFFLINE</span>
        </div>
      </section>

      <section className="manifesto shell sectionPad">
        <div className="sectionIndex">00 / WHY</div>
        <div className="manifestoBody">
          <h2 className="manifestoTitle">工具应该帮你进入状态，<br />而不是成为新的干扰。</h2>
          <div className="manifestoGrid">
            <p>所以我们把调音、节拍和和弦放进同一套清晰的练习流程里。没有广告，没有动态，没有登录墙——打开，就开始练。</p>
            <div className="miniStats">
              <div><strong>3</strong><span>核心练习工具</span></div>
              <div><strong>13</strong><span>种界面语言</span></div>
              <div><strong>0</strong><span>广告与追踪</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="features sectionPad" id="features">
        <div className="shell sectionHeading">
          <p className="eyebrow"><span /> 三个核心工具，一套完整练习</p>
          <h2>从第一根弦，<br />到最后一拍。</h2>
        </div>
        <div className="featureStack shell">
          {features.map((feature, index) => (
            <article className={`featureCard ${feature.tone}`} key={feature.number}>
              <div className="featureCopy">
                <div className="featureMeta"><span>{feature.number}</span><i />{feature.kicker}</div>
                <h3>{feature.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{feature.copy}</p>
                <ul>
                  {feature.points.map((point) => <li key={point}><span>✓</span>{point}</li>)}
                </ul>
              </div>
              <div className={`featureMedia ${index === 1 ? "tiltLeft" : ""}`}>
                <span className="mediaLabel">真实 App 界面</span>
                <Image src={assetPath(feature.image)} alt={feature.alt} width={833} height={1800} sizes="(max-width: 800px) 80vw, 420px" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="numbers">
        <div className="shell numbersGrid">
          <div><strong>20–500</strong><span>BPM 精准节拍</span></div>
          <div><strong>430–446</strong><span>Hz 基准音校准</span></div>
          <div><strong>19,244</strong><span>吉他与尤克里里指法</span></div>
          <div><strong>1–12</strong><span>拍 / 小节自由设置</span></div>
        </div>
      </section>

      <section className="introVideoSection shell sectionPad">
        <div className="introVideoCopy">
          <p className="eyebrow"><span /> 36 秒完整介绍</p>
          <h2>先看它如何融入练习，<br />再决定从哪里开始。</h2>
          <p>横屏版适合桌面与大屏观看，移动端会自动使用中文竖屏版。视频展示调音、节拍、和弦卡片、Widget 与多设备体验；1.0.8 新增的后置闪光灯节拍详见下方版本说明。</p>
        </div>
        <div className="introVideoFrame">
          <video controls playsInline preload="metadata" aria-label="GuitarTool 中文完整介绍视频">
            <source src={`${MEDIA_RELEASE_URL}/GuitarTool-Full-Intro-zh-Hans-480x854.mp4`} media="(max-width: 700px)" type="video/mp4" />
            <source src={`${MEDIA_RELEASE_URL}/GuitarTool-Full-Intro-zh-Hans-854x480.mp4`} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="extras shell sectionPad">
        <div className="sectionHeading compact">
          <p className="eyebrow"><span /> 多端体验 · 外观与小组件</p>
          <h2>让练习适应你，<br />不是反过来。</h2>
        </div>
        <div className="extraGrid">
          <article className="extraCard themeCard">
            <div className="extraText">
              <p className="cardLabel">主题与装饰</p>
              <h3>四种免费外观，<br />选择你的练习氛围。</h3>
              <p>晴空、星夜、松林与石墨均随 APP 提供。外观选择只保存在设备上，不需要账户或云端个人资料。</p>
              <div className="swatches" aria-label="晴空、星夜、松林、石墨四种主题">
                <span className="day" /><span className="night" /><span className="pine" /><span className="graphite" />
                <b>4 INCLUDED</b>
              </div>
            </div>
            <Image src={assetPath("/themes.webp")} alt="GuitarTool 晴空、星夜、松林和石墨四种主题" width={833} height={1800} sizes="(max-width: 700px) 86vw, 460px" />
          </article>
          <article className="extraCard widgetCard">
            <div className="extraText">
              <p className="cardLabel">主屏幕小组件</p>
              <h3>不用打开 App，<br />节拍就在主屏幕。</h3>
              <p>小、中、大三种尺寸。调速、拍号、播放暂停与 TAP 定速，抬手即可练。</p>
            </div>
            <Image src={assetPath("/widgets.webp")} alt="GuitarTool 三种尺寸的主屏幕节拍器小组件" width={833} height={1800} sizes="(max-width: 700px) 86vw, 460px" />
          </article>
        </div>
        <div className="updatePromise">
          <span>VERSION 1.0.8 · BUILD 8</span>
          <p><strong>让节拍不仅能听见，也能看见。</strong> 兼容 iPhone 可用后置闪光灯提示全部主拍或仅重音，并提供三档强度；设置与预设结构也更清晰，调音、Watch、Widget 与多设备同步更可靠。</p>
          <b aria-hidden="true">↗</b>
        </div>
      </section>

      <section className="devices sectionPad" id="devices">
        <div className="shell devicesGrid">
          <div className="devicesCopy">
            <div className="sectionIndex light">04 / EVERYWHERE</div>
            <h2>你的练习，<br />跟着你走。</h2>
            <p>在 iPhone 上随手练，在 iPad 上看得更清楚，在 Apple Watch 上从手腕启动节拍。落腕或屏幕变暗后，声音仍可继续，让双手回到乐器上。</p>
            <div className="devicePills"><span>iPhone</span><span>iPad</span><span>Apple Watch</span></div>
          </div>
          <div className="devicesMedia">
            <Image src={assetPath("/devices.webp")} alt="GuitarTool 在 iPhone、iPad 与 Apple Watch 上运行" width={833} height={1800} sizes="(max-width: 850px) 90vw, 520px" />
          </div>
        </div>
      </section>

      <section className="privacy sectionPad" id="privacy">
        <div className="privacyGlow" />
        <div className="shell privacyGrid">
          <div>
            <p className="eyebrow inverted"><span /> Privacy by design</p>
            <h2>你的练习声音，<br /><em>只留在你的设备上。</em></h2>
          </div>
          <div className="privacyCopy">
            <p>GuitarTool 不收集、出售或分享个人信息。调音器的麦克风音频只在设备上实时处理，停止调音后即释放。</p>
            <ul>
              <li><b>01</b><span><strong>无需账户</strong>没有注册、登录或云端个人资料。</span></li>
              <li><b>02</b><span><strong>音频不上传</strong>不保存录音，不发送到开发者或第三方。</span></li>
              <li><b>03</b><span><strong>无广告与追踪</strong>不集成广告、分析或第三方追踪 SDK。</span></li>
            </ul>
            <a className="lightButton" href={privacyUrl}>阅读完整隐私政策 <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="languages sectionPad">
        <div className="shell languagesIntro">
          <div className="sectionIndex">05 / LANGUAGES</div>
          <div>
            <h2>用熟悉的语言，<br />专注练习本身。</h2>
            <p>跟随系统，或在 App 内随时选择。</p>
          </div>
        </div>
        <div className="languageCloud shell" aria-label="支持的十三种语言">
          {[
            ["简体中文", "/"], ["English", "/en/"], ["繁體中文", "/zh-hant/"], ["日本語", "/ja/"], ["한국어", "/ko/"], ["Deutsch", "/de/"], ["Français", "/fr/"], ["Italiano", "/it/"], ["Español", "/es/"], ["Português", "/pt-br/"], ["Русский", "/ru/"], ["Türkçe", "/tr/"], ["العربية", "/ar/"]
          ].map(([language, href], index) => <Link href={href} className={index === 0 ? "accent" : ""} aria-current={index === 0 ? "page" : undefined} key={language}>{language}</Link>)}
        </div>
      </section>

      <section className="discoverySection shell sectionPad">
        <div><p className="eyebrow"><span /> 免费练习资源</p><h2>先解决眼前这一拍、这一弦、这一个和弦。</h2></div>
        <div className="discoveryGrid">
          <Link href="/online-tuner/"><span>01</span><h3>在线调音器</h3><p>麦克风声音只在浏览器本地处理，实时查看音名、频率与音分。</p><b>打开工具 →</b></Link>
          <Link href="/online-metronome/"><span>02</span><h3>在线节拍器</h3><p>20–500 BPM、TAP 测速与 1–12 拍，浏览器里直接开始。</p><b>打开工具 →</b></Link>
          <Link href="/guides/guitar-tuner/"><span>03</span><h3>离线吉他调音</h3><p>了解标准、Drop D、DADGAD 与开放调弦的完整使用方式。</p><b>阅读指南 →</b></Link>
          <Link href="/chords/guitar/"><span>04</span><h3>热门吉他和弦</h3><p>从 50 个高频和弦开始，查看多个把位与清楚指法图。</p><b>浏览和弦 →</b></Link>
          <Link href="/chords/ukulele/"><span>05</span><h3>热门尤克里里和弦</h3><p>按标准 High-G GCEA 查看 50 个常用和弦和多种按法。</p><b>浏览和弦 →</b></Link>
          <Link href="/guides/share-chord-diagrams/"><span>06</span><h3>保存与分享和弦图</h3><p>把当前吉他或尤克里里按法生成卡片，预览后保存或发送。</p><b>了解和弦卡片 →</b></Link>
          <Link href="/guides/apple-watch-metronome/"><span>07</span><h3>Apple Watch 节拍器</h3><p>从手腕控制速度与拍号，落腕或屏幕变暗后声音仍可继续。</p><b>了解手表节拍器 →</b></Link>
          <Link href="/guides/chord-diagrams-for-students/"><span>08</span><h3>把指法图发给学生</h3><p>从选择准确把位、检查高把位，到安排课后练习的一套教师流程。</p><b>阅读教学指南 →</b></Link>
          <Link href="/guides/apple-watch-metronome-audio-design/"><span>09</span><h3>Watch 音频工程复盘</h3><p>声音采样时钟、暗屏生命周期和音频路线恢复如何协同。</p><b>阅读工程复盘 →</b></Link>
        </div>
      </section>

      <section className="faq shell sectionPad">
        <div className="faqIntro">
          <p className="eyebrow"><span /> 常见问题</p>
          <h2>下载之前，<br />你可能还想知道。</h2>
        </div>
        <div className="faqList">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>＋</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="finalCta shell">
        <div className="ctaGlow" />
        <Image className="ctaIcon" src={assetPath("/app-icon-224.png")} alt="GuitarTool App 图标" width={112} height={112} />
        <p>GuitarTool for iPhone · iPad · Apple Watch</p>
        <h2>下一次练习，<br />从更好的工具开始。</h2>
        <a className="primaryButton coral" href={appStoreUrl}>在 App Store 下载 <span>↗</span></a>
        <small>完全离线 · 无广告 · 无需账户</small>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top">
          <Image src={assetPath("/app-icon-224.png")} alt="" width={36} height={36} />
          <span>GuitarTool</span>
        </a>
        <p>© 2026 Zhichao Wei. 用心练习，安静进步。</p>
        <div><Link href="/support/">技术支持</Link><a href={privacyUrl}>隐私政策</a><a href="mailto:weizhichao1027@gmail.com">联系开发者</a><a href={githubUrl}>GitHub</a></div>
      </footer>
    </main>
  );
}
