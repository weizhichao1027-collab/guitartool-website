# GuitarTool 市场推广与网站交接

最后更新：2026-08-28

本文件是 `marketing-site` 独立仓库的运营与技术交接入口。App 工程发布、Watch、Widget 和主题架构的完整记录见上级目录 `APP交接文档.md`；本文件只维护营销页面、免费推广和搜索收录事实。

## 1. 平台与职责

| 平台 | 职责 | 地址或标识 | 访问状态 |
| --- | --- | --- | --- |
| GitHub Pages | 面向普通访客与搜索引擎的公开主站、canonical 来源 | https://weizhichao1027-collab.github.io/guitartool-website/ | 公开 |
| GitHub | 源码、版本历史、Pages 自动部署 | https://github.com/weizhichao1027-collab/guitartool-website | 仓库权限控制 |
| OpenAI Sites | 第二套生产部署、托管备份/预览 | https://guitartool-studio.weizhichao1027.chatgpt.site | 既有 Version 17 在线；当前访问策略为公开，本轮未部署新版 |
| App Store Connect | App 产品页、三个自定产品页、精选提名 | App ID `6761914163` | Apple 账号权限控制 |
| Google Search Console | Google 所有权、sitemap、索引请求 | GitHub Pages URL-prefix 资源 | Google 账号权限控制 |
| IndexNow | 主动通知支持该协议的搜索引擎 | GitHub Actions 自动调用 | 自动 |

没有使用 Vercel、Netlify 或 Cloudflare Pages。对外分享、SEO canonical、App Store 营销网址和技术支持网址均应使用 GitHub Pages。OpenAI Sites 当前虽为公开访问，但不是 canonical，也不作为本轮 App Store URL；以后部署新 Sites 版本前必须重新确认公开发布授权。

OpenAI Sites 项目 ID：`appgprj_6a8a503888348191be812170e152a86c`。项目配置位于 `.openai/hosting.json`。

## 2. 当前内容库存

- 中文产品首页与英文产品首页。
- 11 个其他语言入口；与中英文合计 13 种语言。
- 在线调音器：13 种语言各一页；音频只在浏览器本地分析，支持十二平均律、吉他 EADGBE 与尤克里里 GCEA 参考模式。
- 在线节拍器：中文与英文各一页。
- 高意图练习、教学与工程内容页：42 页，即 21 个主题的中英文版本。
- 热门和弦目录与详情：吉他 50 页、尤克里里 50 页，共 100 个详情页，另有两个目录页。
- Press Kit / 媒体资料中心，内含单图下载、13 语言完整素材包、视频预览与深度内容入口。
- 中英文技术支持页：`/support/` 与 `/en/support/`，覆盖 1.0.8 版本、权限、调音器、节拍器、后置闪光灯节拍、Widget、Apple Watch 和和弦卡片排障。
- 13 张本地化“和弦卡片－保存与分享”真实 App Store 预览图；中英文首页、其余 11 个语言首页、双语和弦分享指南与 Press Kit 均使用对应素材。
- 52 张本地化社交推广图：13 种语言 × 横版、信息流竖版、Story/Reels、视频缩略图四种规格；完整 ZIP 与 CSV/JSON manifest 已进入 Press Kit。
- 4 支 36 秒完整介绍：GitHub Pages 网页分发版为中英文各一支 854 × 480 横屏与 480 × 854 竖屏，均含音频；中英文首页按屏幕方向自动选择，Press Kit 提供四支在线播放与下载，公开 Media Kit Release `media-kit-1.0.8` 另作下载备份。1080p 原片保留在项目资料归档中，网页压缩版不得覆盖原片。
- 4 支 24 秒短版：中英文各一支 886 × 1920 App Preview 候选与 1080 × 1920 社交版；App Preview 仅作为候选，上传前必须按当期规格复核。
- `robots.txt`、`sitemap.xml`、`image-sitemap.xml`、Web App manifest、Open Graph 图片、IndexNow 验证文件。
- 当前构建生成 181 个静态页面/路由与 178 个 HTML 页面；主 sitemap 包含 175 个公开 URL，图片 sitemap 包含 22 个图片条目。

2026-08-28 为 1.0.8 新增或更新：

1. 兼容 iPhone 的后置闪光灯节拍：全部主拍或仅重音、三档强度、预设保留、自动关闭、不拍照，并包含频闪/耗电/发热安全说明。
2. 中英文首页、11 个其他语言首页与 Press Kit 统一为 1.0.8；13 种语言均有当前版本更新说明。
3. 中英文独立技术支持页面与 `site_support` App Store Campaign。
4. 中英文横屏/竖屏 36 秒完整介绍接入首页和 Press Kit；截图与原有 24 秒短版保持不动。
5. 13 个 App Store 本地化的支持网址已经逐语言保存并回读：简体中文、繁体中文使用 `/support/`，其余 11 个语言使用 `/en/support/`。
6. 30 天推广看板、1.0.8 渠道总表、B 站发布文案与 13 语言常青社交文案已经同步当前审核和上线状态。
7. 新增“视觉节拍器 / Visual Metronome”中英文常青页面，覆盖全部主拍/仅重音、三档强度、主拍与细分边界、自动关闭、不拍照与频闪安全说明，并导向 Metronome 自定产品页。

2026-08-27 本轮再新增的两个双语内容主题：

1. 给吉他/尤克里里学生分享准确和弦图的教学流程
2. Apple Watch 节拍器将声音时钟与界面刷新分离的工程复盘

2026-08-27 为 1.0.7 新增的两个双语功能主题：

1. 和弦卡片预览、保存到照片与系统分享
2. Apple Watch 落腕、屏幕变暗或 App 非活跃后继续播放声音节拍

2026-08-26 新增的 6 个双语主题：

1. Drop D tuning
2. DADGAD tuning
3. Open G tuning
4. Half-step down / 吉他降半音
5. Chromatic tuner / 十二平均律调音器
6. Ukulele High-G 与 Low-G GCEA

2026-08-26 第二轮新增的 4 个双语主题：

1. 吉他六根弦标准、Drop D 与降半音频率表
2. 变调夹移调表与和弦换算
3. 节拍器渐进提速与节奏训练方法
4. 4/4、3/4、6/8 等拍号与数拍方法

主要文件：

- `app/lib/landing-pages.ts`：原有高意图页面数据与聚合入口。
- `app/lib/tuning-pages.ts`：本轮新增的 12 个双语调弦页面。
- `app/lib/practice-pages.ts`：频率、变调夹、节奏训练和拍号的 8 个双语页面。
- `app/lib/feature-pages.ts`：和弦卡片、Watch 后台声音、教学流程、工程复盘与视觉节拍器共 10 个中英文常青页面；页面正文使用当前事实口径，不硬编码已经过时的发布状态。
- `app/components/SupportPage.tsx`、`app/support/page.tsx`、`app/en/support/page.tsx`：双语技术支持与结构化 FAQ。
- `app/image-sitemap.xml/route.ts`：13 张本地化和弦分享图与 9 个编辑素材的图片 sitemap。
- `public/media-kit/`：公开媒体包、精选社交预览与网站轻量视频；高码率视频原片在上级目录 `资料归档/03-市场研究/03-推广素材/视频/`。
- `public/media-kit/video/GuitarTool-Full-Intro-{zh-Hans,en}-{854x480,480x854}.mp4`：四支 GitHub Pages 网页分发版；横屏/竖屏、语言和分辨率都写入文件名。对应 1080p 原片只在上级资料归档维护。
- `public/media-kit/GuitarTool-1.0.7-social-kit-13-locales.zip`：历史文件名保留以避免破坏既有链接；包内标题、清单和文案已改为不绑定 1.0.7 的常青口径。
- `public/*-chord-card-share.webp` 与 `public/chord-card-share.webp`：从 13 种语言真实上传截图生成的站点优化版素材；不要用单一语言图片覆盖其他语言。
- `app/lib/tuner-locales.ts`：13 种语言在线调音器文案与 metadata。
- `app/components/TunerTool.tsx`：浏览器本地音高检测、模式切换和麦克风生命周期。
- `app/lib/site.ts`：App Store Campaign 与三个自定产品页的下载链接分流。
- `app/components/LandingPageView.tsx`：指南页面、FAQ 和结构化数据。
- `app/sitemap.ts`、`app/robots.ts`：搜索引擎入口。
- `app/layout.tsx`：全局 metadata、App Links、Open Graph 与 Google 所有权验证。
- `scripts/submit-indexnow.mjs`：读取线上 sitemap 并提交全部 URL。
- `.github/workflows/pages.yml`：Pages 构建、部署和 IndexNow 通知。

## 3. App Store 免费推广状态

### 主 ASO

- 13 种商店语言的名称、副标题、关键词、描述、推广文本、更新说明和 URL 已完成。
- 关键词已覆盖调音器、节拍器、节奏、练习、吉他、尤克里里与和弦。
- 1.0.7 已于 2026-08-28 通过 Apple 公共目录确认上线；1.0.8 Build 8 已关联版本，13 种语言文案、审核备注与 7 张复用截图均已保存，App Store Connect 当前显示“正在等待审核”。不要为更新网站或支持 URL 撤回版本。
- 主产品页当前使用 7 张截图，顺序为：节拍器、调音器、和弦库、和弦分享、四套主题、Widget、多设备。
- 1.0.8 推广文本、完整描述和更新说明均按当前完整改动更新；网站、Press Kit、支持页与归档推广文案统一使用后置闪光灯节拍及可靠性改进的事实口径。
- 1.0.8 继续复用 1.0.7 的 7 张截图，本轮不替换、不移动截图。
- App Preview 当前为 0；四支 36 秒完整介绍没有上传到 App Store。
- 2026-08-28 已保存并回读审核备注：除 Watch 后台声音说明外，中英文备注还包含 Flash Beat 的真机路径、后置闪光灯硬件条件、全部主拍/仅重音、三档强度、预设保留、停止/离页/后台自动关闭以及不拍照的安全边界。
- 简体中文与繁体中文的技术支持网址为 `https://weizhichao1027-collab.github.io/guitartool-website/support/`；英语、阿拉伯语、德语、俄语、法语、韩语、葡萄牙语（巴西）、日语、土耳其语、西班牙语（西班牙）和意大利语均为 `https://weizhichao1027-collab.github.io/guitartool-website/en/support/`。13 个语言已逐项回读，保存按钮最终为禁用态。

### 精选提名

- 已提交，Nomination ID：`bbacdffa-7dd1-4efd-9ecc-b7d7a2f73ecd`。
- 标题：`GuitarTool 1.0.7｜离线练习工具全面升级`。
- 类型：App 增强；建议日期：2026-09-01 GMT+8。
- 覆盖 iPhone、iPad、watchOS、全部地区和 13 种语言。
- 补充资料：https://weizhichao1027-collab.github.io/guitartool-website/press/
- 已提交的提名不能直接编辑；其更多操作只有导出、复制和归档。不要创建重复提名，功能材料变化统一通过上面的 Press Kit 补充网址更新。

### 自定产品页

| 页面 | ID | 深度链接 | 简体中文关键词 | 状态 |
| --- | --- | --- | --- | --- |
| Tuner Search Page | `cf763d83-4b2f-4897-86b1-42d9175c24dc` | `guitartool://tuner` | 调音器、音高 | 已批准 |
| Metronome Search Page | `ad230a27-b902-4645-b00d-3f2a5c3e3558` | `guitartool://metronome` | BPM、TAP、细分、拍号、三连音、Swing、渐进加速、速度训练 | 现有版本已批准；新版本正在审核 |
| Chord Library Search Page | `67d874cf-ac10-412d-929b-b883f2039444` | `guitartool://chords` | 指板、指法图、和弦库、查询、多种按法、和弦卡片、分享、相册 | 现有版本已批准；新版本正在审核 |

2026-08-28 已登录 App Store Connect 回读，三个页面全部进入“已批准”分组。它们均有 13 种语言推广文本，并分别把对应功能截图放到第一位；网站的 `ppid` 深链现已直接展示对应页面。当天 17:02 又为 Chord 与 Metronome 创建替代版本，更新简体中文、英语（美国）的推广文本和页面意图关键词，其他 11 种本地化与原截图继续继承，并在同一审核单中提交。当天稍后再次回读时，App Store Connect 已把两个项目列入“正在审核”；现有获批版本和公开链接在替代版本获批前继续有效。

Chord 新版本的简体中文关键词为“指板、指法图、和弦库、查询、多种按法、和弦卡片、分享、相册”，英语关键词为 `fretboard`、`fingering`、`chord card`、`share`、`photos`。Metronome 新版本的简体中文关键词为“BPM、TAP、细分、拍号、三连音、Swing、渐进加速、速度训练”，英语关键词为 `tempo`、`bpm`、`rhythm`、`tap`、`swing`、`meter`。Tuner 保持调弦、稳定度与本机处理主线，不创建替代版本。

### 产品页面优化与 App Preview

- 产品页面优化当前只有“创建测试”入口，没有正在运行或历史测试。
- 1.0.8 正在等待审核；三个自定产品页的现有版本均已批准，Chord 与 Metronome 的替代版本正在审核。当前下载样本仍不足以支撑稳定显著性，因此本轮不创建 A/B 测试、不撤回任何审核提交。
- 中英文 24 秒 App Preview 候选与四支 36 秒完整介绍均已归档。36 秒横竖屏完整介绍用于官网、Press Kit、媒体嵌入和社交；App Store 只评估 24 秒 886 × 1920 候选，并在上传前按当期规范复核。

### 下载归因与页面分流

- 已在 App Store Connect Analytics 创建 Campaign Link，Provider Token 为 `128747267`。
- 网站首页、导航、Smart App Banner、Press Kit、调音器、节拍器和和弦页面分别使用 `site_home`、`site_nav`、`site_smart_banner`、`site_press`、`site_tuner`、`site_metronome`、`site_chords`。
- 调音器、节拍器和和弦入口同时携带对应自定产品页 `ppid`；三个页面已经批准，因此同一链接现在直接展示相应产品页。
- App 内和弦卡片采用“预览 → 保存到相册 / 分享图片”的流程，系统分享只发送图片，不附带 App Store 链接，因此不使用 `app_chord_share` Campaign。卡片的品牌名、乐器、功能标签与高把位起始品位覆盖全部 13 种语言；中文品牌名为“吉他工具”，乐器标题为“吉他和弦指法”或“尤克里里和弦指法”，和弦名称居中放在和弦图正上方，高把位示例为中文“5 品”、英文“5fr”。此功能最初在 1.0.7 公开，并继续包含在 1.0.8 中。
- 网站 `site_support` Campaign 已用于双语支持页；App Store Connect 的 13 个支持网址已按上方语言映射更新并回读，隐私政策继续使用独立隐私页 `https://weizhichao1027-collab.github.io/GuitarTool-Privacy/`。
- 2026-08-28 核对 Analytics 概览时，界面所选 90 天范围（数据更新至 8 月 26 日）显示 68 次首次下载、1,070 次展示、98 次产品页浏览和 9.3% 日均转化率；营销活动维度仍为“数据不足”。这些数值是时间范围快照，不应当作永久累计值。

## 4. 搜索引擎状态

- Google Search Console 的 URL-prefix 资源已完成 HTML meta 所有权验证。
- 验证 meta 在 `app/layout.tsx`，保持验证状态必须保留。
- `/sitemap.xml` 已于 2026-08-27 在 Search Console 重新提交一次，界面明确显示“已成功提交站点地图”；提交后即时状态仍为“无法抓取”，已发现网页 0、视频 0，属于等待 Google 异步处理的观察期。
- 新增 `/image-sitemap.xml`，已由 `robots.txt` 宣告并在线返回 HTTP 200；它不需要在同一天反复手动提交，先让 Google 随 robots 与主 sitemap 发现。
- 同一公开 sitemap 已从终端实测为 HTTP 200、`application/xml` 且 XML 校验通过。未来 24–72 小时只复查状态，不再次提交、删除或重建资源；只有 Google 返回稳定且可复现的具体错误时才排查站点实现。
- 首页已通过“网址检查”提交“请求编入索引”。Google 是否收录和排名由其系统决定。
- GitHub Pages 每次成功部署后都会运行 `notify-search-engines`；上次工作流的 `notify-search-engines` Job 已成功。本次新增双语页面后，主 sitemap 包含 175 个公开 URL。

建议在部署后 24–72 小时检查：

1. sitemap 状态是否成功；
2. 已发现网页数量是否开始增加；
3. 首页、在线节拍器、调音器指南和和弦目录是否进入索引；
4. 是否出现 canonical、移动可用性或结构化数据错误。

本轮重新提交已经完成，不要再次操作；后续只记录 Google 的抓取结果和已发现网页数量。

## 5. 构建与发布

```bash
npm install
npm run lint
npm run build:pages
npm run audit:pages
npm run build
git push github main
```

- `build:pages` 生成 GitHub Pages 的静态 `out/`。
- `audit:pages` 检查静态导出的全部 HTML 页面及其本地链接、图片、脚本和媒体目标。
- `build` 验证 Vinext/OpenAI Sites 生产构建。
- 推送 `main` 后，GitHub Actions 自动执行 build、deploy、notify-search-engines。

### 2026-08-28 当前发布基线

- 当前网站内容发布基线为 Git 提交 `340a79f3624cdca841ee5a25a0000a2db468500f`，包含“视觉节拍器 / Visual Metronome”中英文自然获客页与在线节拍器反向内链；交接文档后续提交只改变事实记录，不改变这条内容基线。
- GitHub Actions 工作流 `33155440462` 的 build、deploy、notify-search-engines 三个 Job 全部成功。
- 当前 Pages 工作流会对部分固定版本的 `actions/checkout`、`actions/setup-node`、`actions/configure-pages`、`actions/upload-artifact` 与 `actions/deploy-pages` 给出 Node.js 20 已弃用、由运行器强制使用 Node.js 24 的 annotation；这次不影响三个 Job 成功，但后续应在单独维护提交中升级到官方支持 Node.js 24 的 Action 版本并复跑完整门禁。
- 本次视觉节拍器双语页面的本地门禁全部通过：181 个静态路由、178 个 HTML、226 个本地目标、184 个外部目标；主 sitemap 175 个 URL，图片 sitemap 22 个图片条目；`lint`、`build:pages`、`audit:pages`、`build` 与 `git diff --check` 均无错误。
- 中英文视觉节拍器页面、主 sitemap 与带 `site_metronome` Campaign/Metronome `ppid` 的下载链接均已在线回读：两个页面返回 HTTP 200 `text/html`，sitemap 返回 HTTP 200 `application/xml` 并包含两个新增 URL。
- 中文首页、英文首页、Press Kit、中英文支持页以及四个网页视频均在线返回 HTTP 200；视频响应类型为 `video/mp4`，浏览器直接打开识别为媒体文档。
- 四支 36 秒网页视频为 H.264/AAC，分别是 854 × 480 与 480 × 854。向 GitHub 直接推送 1080p 大文件曾连续遭遇网络失败，因此 Pages 只保留小于约 0.7 MB 的网页分发版；不得把 1080p 原片加入 Pages 历史，也不得用网页版覆盖资料归档原片。
- 四支网页视频另备份在公开 GitHub Release [`media-kit-1.0.8`](https://github.com/weizhichao1027-collab/guitartool-website/releases/tag/media-kit-1.0.8)。网页主播放源使用同源 Pages MP4，以确保 MIME 类型和嵌入播放稳定。
- OpenAI Sites 是独立部署目标。当前线上为 Version 17，访问策略实测为公开；Sites 源仓库已同步至提交 `7485f170b40e68884fd119951f6b612e0d22b106`，但本轮没有保存或部署新版本。约 24 MB 的源码归档上传连续两次因网络失败，且公开生产部署必须取得明确授权；不要把“源码已同步”写成“新版已上线”。

### 历史发布记录

- 托管站全站导航修正：GitHub 提交 `ad547b7 Fix hosted site navigation`；Sites 源提交 `ea2d58b`。内部导航改用带部署路径适配的原生链接，避开 Vinext 的 RSC 预取异常。
- Google 验证、SEO 内容、自然获客与 Campaign 分流、在线调音器修正、和弦目录 metadata 校正对应提交依次为 `7022c8a`、`88db729`、`b03358c`、`423f162`、`1245450`。
- 1.0.7 推广与 SEO、本地化和弦卡片、媒体包与图片 SEO、完整素材包和网站视频优化对应提交依次为 `6c82b99`、`6a6dfb6`、`5debd82`、`9e4ed6b`、`5a646f1`。
- 工作流 `32984543950`、`32998815386`、`33026951090`、`33029409289`、`33029963848`、`33030157035`、`33031442573` 均曾完整通过。其路由与 sitemap 数量是当时快照，以“当前发布基线”的数字为准。
- OpenAI Sites Version 10、11、13、14 是历史部署记录；当时的 owner-only/custom 权限快照已经被当前 Version 17 的公开访问状态覆盖，不能据此判断现状。

## 6. 内容与 SEO 维护规则

1. 新增搜索主题时必须提供真正独立、有用的正文，不批量制造只替换关键词的薄页面。
2. 新的指南至少提供中文与英文版本，并保持相同 slug。
3. 同时维护 title、description、canonical、hreflang、FAQ、BreadcrumbList、相关页面链接和 sitemap。
4. 产品数字必须来自当前 App 事实：吉他 855 个和弦名称/12,415 个指法，尤克里里 855 个名称/6,829 个指法，合计 19,244；节拍器 20–500 BPM；A4 430–446 Hz。
5. 不声明尚未上线的主题购买、订阅、云同步或社区功能。
6. 1.0.8 可以推广后置闪光灯节拍、和弦卡片分享与 Watch 后台声音。闪光灯必须说明仅限兼容 iPhone、全部主拍/仅重音、三档强度、不跟随细分、自动关闭且不拍照；Watch 必须说明仅继续声音，界面和触觉刷新会暂停，部分旧型号可能需要蓝牙音频路线。
7. Release 中隐藏、仅供开发预览的 Morning Mist/完整主题画廊不得出现在商店、网站或渠道文案中。
8. 不移除 Google verification meta、IndexNow key 文件或 sitemap/robots 路由。
9. 不改变公开 canonical 域名，除非同时迁移 App Store 营销 URL、Search Console、sitemap、robots、hreflang 和全部绝对链接。
10. 1080p 视频只在上级资料归档保存；Pages 只使用文件名含语言与分辨率的四个网页版，并在每次发布后确认 HTTP 200、`video/mp4` 和浏览器可播放。公开 Release 是下载备份，不替代同源网页播放地址。
11. 每次公开发布后，在本文件同步日期、内容提交、交接提交、Actions 工作流、页面/链接/sitemap 数量、线上抽样结果与 OpenAI Sites 的真实版本及权限；不要沿用历史快照。

## 7. 明确不做与当前边界

- 暂不做付费广告或付费媒体投放。
- 暂不做完成操作后的自动评分邀请；该交互被认为会干扰练习体验。
- 暂不做 App Store A/B 测试；三个自定产品页虽已批准，但当前仍没有足够样本支撑稳定显著性，不是素材缺失。
- 已完成 20 个教师、媒体、创作者、社区与目录的定向对象清单和逐对象联系稿；在上级目录 `资料归档/03-市场研究/03-推广素材/联络包/`。没有冒充账号持有人群发、建号或绕过社区规则。
- 社交与视频素材已经齐备，但持续发布、评论回复、邮箱/私信发送与个人账号型目录提交仍需要账号持有人本人执行。中文/英文模板、归因命名与 30 天节奏维护在上级目录的 `GuitarTool-1.0.8推广内容与渠道总表.md`。
- 个性化页面原有“分享 APP”入口继续保留，没有重复增加。和弦库新增的是用户主动点击后分享当前指法卡片，不自动弹出、不打断练习。
- App Store 精选提名已提交，但 Apple 是否推荐不可控。
- Google sitemap 和索引请求已提交，但不保证即时收录和排名。
- OpenAI Sites 当前 Version 17 已公开，但本轮 1.0.8 新内容没有部署到 Sites。以后保存或公开部署新版本前必须重新取得明确确认；源码同步、版本保存和生产部署是三个不同状态。
- 四支 36 秒视频只用于官网、Press Kit、媒体嵌入和社交，不是 App Preview；App Store 当前 App Preview 为 0，只有 24 秒 886 × 1920 文件可作为规格复核后的候选。
- 社交预览图以已跟踪的 `public/og.png` 为唯一来源；曾存在的根目录同内容副本已在项目归档整理时移除。

### 免费目录与媒体渠道结论

- Product Hunt 需要个人账号、完成账号 onboarding，并要求发布后参与首条评论与社区互动；它不符合“完全不需要账号持有人参与运营”的约束，本轮未代建账号或发布。
- AlternativeTo 要求注册并验证邮箱后才能提交；本轮未使用开发者个人邮箱创建第三方账号。
- AppleVis 适合突出 VoiceOver、Large Text 等辅助功能，但提交目录内容同样需要网站账号；在没有现成登录态时不代建账号。
- BetaList 已取消免费提交，且不接受免费托管子域作为产品主域，因此按“暂不付费”要求排除。
- AppAdvice 等聚合站通过 App Store 数据接口自动生成页面，不需要也没有必要重复人工提交。
- Press Kit、公开营销站、结构化数据、sitemap、IndexNow 和 13 种语言在线工具已经覆盖无需账号、无需持续人工运营且能长期积累的站外获客路径。

## 8. 下一位维护者检查清单

1. 先读本文件和上级 `APP交接文档.md` 第 33 节；较早章节保留为历史与阶段记录，状态冲突时以第 33 节和本文件“当前发布基线”为准。
2. 使用 `git status --short`，确认没有重复的根目录社交预览图或构建产物混入提交。
3. 跟踪 App Store 1.0.8 的审核状态；13 种语言、Build 8、审核联系人、版本说明、13 个支持网址与 7 张复用截图已回读通过，App Preview 为 0，不为小幅文案调整撤回审核。
4. Chord 与 Metronome 的替代版本已经进入“正在审核”；跟踪审核结果，不撤回、不重复创建，现有获批版本与公开链接继续保持启用。
5. 检查 Search Console sitemap 与索引报告；Google 仍在初次处理时先等待，不反复重建资源。
6. 修改站点后依次运行 `npm run lint`、`npm run build:pages`、`npm run audit:pages`、`npm run build` 与 `git diff --check`；推送后确认 Actions 三个 Job、核心页面和四个视频，再更新日期、库存、两类 sitemap 数、提交、工作流以及 Sites 的真实状态。
7. 在 App Store Analytics 按各 `site_*` Campaign 比较点击后的下载表现；图片分享不附带商店链接，不能用 Campaign 直接归因，不要为了归因重新强制添加下载链接。
8. Chord 与 Metronome 审核状态变化后同步本文件和渠道总表；获批后回读公开 `ppid` 页面，若被拒则先记录 Apple 的具体原因再修订，不创建重复精选提名。
9. 对外联系时从 `联络包/20个定向推广对象.csv` 逐条选择，不把 20 份个性化稿合并成群发；Product Hunt、AlternativeTo 和社区发布必须由真实个人账号参与。
10. 核对上级目录的 30 天推广看板、1.0.8 渠道总表、B 站文案与 13 语言社交文案；审核或上线状态变化时四处同步，避免渠道继续使用旧口径。
