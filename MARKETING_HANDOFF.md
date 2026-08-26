# GuitarTool 市场推广与网站交接

最后更新：2026-08-27

本文件是 `marketing-site` 独立仓库的运营与技术交接入口。App 工程发布、Watch、Widget 和主题架构的完整记录见上级目录 `APP交接文档.md`；本文件只维护营销页面、免费推广和搜索收录事实。

## 1. 平台与职责

| 平台 | 职责 | 地址或标识 | 访问状态 |
| --- | --- | --- | --- |
| GitHub Pages | 面向普通访客与搜索引擎的公开主站、canonical 来源 | https://weizhichao1027-collab.github.io/guitartool-website/ | 公开 |
| GitHub | 源码、版本历史、Pages 自动部署 | https://github.com/weizhichao1027-collab/guitartool-website | 仓库权限控制 |
| OpenAI Sites | 第二套生产部署、托管备份/预览 | https://guitartool-studio.weizhichao1027.chatgpt.site | Version 9 已部署；仅站点所有者可访问 |
| App Store Connect | App 产品页、三个自定产品页、精选提名 | App ID `6761914163` | Apple 账号权限控制 |
| Google Search Console | Google 所有权、sitemap、索引请求 | GitHub Pages URL-prefix 资源 | Google 账号权限控制 |
| IndexNow | 主动通知支持该协议的搜索引擎 | GitHub Actions 自动调用 | 自动 |

没有使用 Vercel、Netlify 或 Cloudflare Pages。对外分享、SEO canonical 和 App Store 营销网址均应使用 GitHub Pages，不使用 owner-only 的 Sites 地址。

OpenAI Sites 项目 ID：`appgprj_6a8a503888348191be812170e152a86c`。项目配置位于 `.openai/hosting.json`。

## 2. 当前内容库存

- 中文产品首页与英文产品首页。
- 11 个其他语言入口；与中英文合计 13 种语言。
- 在线调音器：13 种语言各一页；音频只在浏览器本地分析，支持十二平均律、吉他 EADGBE 与尤克里里 GCEA 参考模式。
- 在线节拍器：中文与英文各一页。
- 高意图练习与版本功能页：36 页，即 18 个主题的中英文版本。
- 热门和弦目录与详情：吉他 50 页、尤克里里 50 页，共 100 个详情页，另有两个目录页。
- Press Kit / 媒体资料中心。
- `robots.txt`、`sitemap.xml`、Web App manifest、Open Graph 图片、IndexNow 验证文件。
- 本轮构建生成 172 个静态页面/路由；sitemap 包含 167 个公开 URL。

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
- `app/lib/feature-pages.ts`：1.0.7 和弦卡片分享与 Watch 后台声音的 4 个双语页面。
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
- 1.0.7 Build 7 当前正在等待审核。
- 主产品页当前使用 7 张截图，顺序为：节拍器、调音器、和弦库、和弦分享、四套主题、Widget、多设备。
- 1.0.7 推广文本、完整描述和更新说明均已加入和弦卡片预览/保存/分享；网站、Press Kit 与归档文案使用同一事实口径。
- App 审核备注中仍有一处旧说明，错误写成 Watch 离开前台会停止；需要在用户确认后改为“仅暂停界面与触觉刷新，声音继续播放”。

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
| Tuner Search Page | `cf763d83-4b2f-4897-86b1-42d9175c24dc` | `guitartool://tuner` | 调音器、音高 | 正在审核 |
| Metronome Search Page | `ad230a27-b902-4645-b00d-3f2a5c3e3558` | `guitartool://metronome` | 节拍器、练习、节奏 | 正在审核 |
| Chord Library Search Page | `67d874cf-ac10-412d-929b-b883f2039444` | `guitartool://chords` | 吉他、和弦、尤克里里 | 正在审核 |

三个页面均有 13 种语言推广文本，并分别把对应功能截图放到第一位。它们已合并到同一提交并正式提交；审核期间不要重复创建。Chord 页面当前未提及卡片分享，Metronome 页面当前未提及 Watch 后台声音，待审核完成、页面重新开放编辑后补充，不为此打断当前审核。

非主要语言的自定产品页关键词在操作时被 App Store Connect 禁用。1.0.7 批准后需要再次检查是否解锁，并按相应语言主 ASO 词组补选；这是 Apple 的版本依赖限制，不是推广文本缺失。

### 下载归因与页面分流

- 已在 App Store Connect Analytics 创建 Campaign Link，Provider Token 为 `128747267`。
- 网站首页、导航、Smart App Banner、Press Kit、调音器、节拍器和和弦页面分别使用 `site_home`、`site_nav`、`site_smart_banner`、`site_press`、`site_tuner`、`site_metronome`、`site_chords`。
- 调音器、节拍器和和弦入口同时携带对应自定产品页 `ppid`。Apple 批准前会安全回退到默认产品页，批准后同一链接自动展示相应页面。
- App 内和弦卡片采用“预览 → 保存到相册 / 分享图片”的流程，系统分享只发送图片，不附带 App Store 链接，因此不使用 `app_chord_share` Campaign。卡片的品牌名、创建署名、乐器、功能标签与高把位起始品位覆盖全部 13 种语言；中文品牌名为“吉他工具”，左上角乐器标题为“吉他和弦指法”或“尤克里里和弦指法”，和弦名称居中放在和弦图正上方，高把位示例为中文“5 品”、英文“5fr”。此功能已经包含在当前等待审核的 1.0.7 Build 7 中。
- 2026-08-26 核对 Analytics 概览时显示 65 次首次下载、795 次展示、81 次产品页浏览、12.6% 转化率。该数值是当时界面所选 90 天范围的快照，不应当作永久累计值。

## 4. 搜索引擎状态

- Google Search Console 的 URL-prefix 资源已完成 HTML meta 所有权验证。
- 验证 meta 在 `app/layout.tsx`，保持验证状态必须保留。
- `/sitemap.xml` 已于 2026-08-26 提交；2026-08-27 的 Search Console 实况仍为“无法抓取”，已发现网页 0、视频 0。
- 同一公开 sitemap 已从终端实测为 HTTP 200、`application/xml` 且 XML 校验通过，当前更像新资源的处理延迟，而不是公开文件不可用。新版本部署后只重新提交一次，然后等待 Google 重试；不要反复删除或重建资源。
- 首页已通过“网址检查”提交“请求编入索引”。Google 是否收录和排名由其系统决定。
- GitHub Pages 每次成功部署后都会运行 `notify-search-engines`；新版本部署后应以 GitHub Actions 记录确认当前 sitemap 的 167 个 URL 已进入 IndexNow 通知流程。

建议在部署后 24–72 小时检查：

1. sitemap 状态是否成功；
2. 已发现网页数量是否开始增加；
3. 首页、在线节拍器、调音器指南和和弦目录是否进入索引；
4. 是否出现 canonical、移动可用性或结构化数据错误。

新版本部署后，重新提交 `/sitemap.xml` 属于对外提交操作，需要账号持有人明确确认；提交后记录实际时间与结果。

## 5. 构建与发布

```bash
npm install
npm run lint
npm run build:pages
npm run build
git push github main
```

- `build:pages` 生成 GitHub Pages 的静态 `out/`。
- `build` 验证 Vinext/OpenAI Sites 生产构建。
- 推送 `main` 后，GitHub Actions 自动执行 build、deploy、notify-search-engines。
- OpenAI Sites 是独立部署目标；修改可部署站点时仍需保存并部署新的 Sites version。
- Google 验证功能提交：`7022c8a Add Google Search Console verification`。
- SEO 内容功能提交：`88db729 Expand tuning guides for organic search`。
- 第二轮自然获客与 Campaign 分流提交：`b03358c Expand organic acquisition and campaign tracking`。
- 在线调音器移动端启动与指针修正：`423f162 Harden online tuner startup`。
- 和弦目录扩容后的 metadata 数字校正：`1245450 Align chord hub metadata with expanded catalog`。
- 1.0.7 推广与 SEO 更新提交：`6c82b99 Refresh 1.0.7 marketing and SEO content`，已推送到 GitHub `main` 和 Sites 源仓库。
- GitHub Actions 工作流 `32998815386` 的 build、deploy、notify-search-engines 三个 Job 全部成功；公开主站、新功能页、Press Kit 与 sitemap 均抽样返回 HTTP 200，167 个 URL 已进入 IndexNow 通知流程。
- OpenAI Sites Version 10 已从 `6c82b99` 部署成功，访问策略仍为 owner-only。
- `423f162` 已推送到 GitHub `main`。部署时曾遇到 GitHub 官方 Actions 重大中断与 Pages 性能下降，服务恢复后工作流 `32984543950` 的 build、deploy、notify-search-engines 三个 Job 全部成功；公开主站已更新，163 个 sitemap URL 已提交 IndexNow。

## 6. 内容与 SEO 维护规则

1. 新增搜索主题时必须提供真正独立、有用的正文，不批量制造只替换关键词的薄页面。
2. 新的指南至少提供中文与英文版本，并保持相同 slug。
3. 同时维护 title、description、canonical、hreflang、FAQ、BreadcrumbList、相关页面链接和 sitemap。
4. 产品数字必须来自当前 App 事实：吉他 855 个和弦名称/12,415 个指法，尤克里里 855 个名称/6,829 个指法，合计 19,244；节拍器 20–500 BPM；A4 430–446 Hz。
5. 不声明尚未上线的主题购买、订阅、云同步或社区功能。
6. 1.0.7 可以推广和弦卡片分享与 Watch 后台声音；必须说明 Watch 仅继续声音，界面和触觉刷新会暂停，部分旧型号可能需要蓝牙音频路线。
7. Release 中隐藏、仅供开发预览的 Morning Mist/完整主题画廊不得出现在商店、网站或渠道文案中。
8. 不移除 Google verification meta、IndexNow key 文件或 sitemap/robots 路由。
9. 不改变公开 canonical 域名，除非同时迁移 App Store 营销 URL、Search Console、sitemap、robots、hreflang 和全部绝对链接。

## 7. 明确不做与当前边界

- 暂不做付费广告或付费媒体投放。
- 暂不做完成操作后的自动评分邀请；该交互被认为会干扰练习体验。
- 暂不做 App Store A/B 测试。
- 当前没有社交媒体、论坛、社区或邮件的持续人工运营流程；可直接执行的账号型渠道、中文/英文模板、归因命名与 30 天节奏统一维护在上级目录的 `GuitarTool-1.0.7推广内容与渠道总表.md`。
- 个性化页面原有“分享 APP”入口继续保留，没有重复增加。和弦库新增的是用户主动点击后分享当前指法卡片，不自动弹出、不打断练习。
- App Store 精选提名已提交，但 Apple 是否推荐不可控。
- Google sitemap 和索引请求已提交，但不保证即时收录和排名。
- `guitartool-social-preview.png` 是仓库中已有的未跟踪用户文件；在确认用途前不得删除、覆盖或随意提交。

### 免费目录与媒体渠道结论

- Product Hunt 需要个人账号、完成账号 onboarding，并要求发布后参与首条评论与社区互动；它不符合“完全不需要账号持有人参与运营”的约束，本轮未代建账号或发布。
- AlternativeTo 要求注册并验证邮箱后才能提交；本轮未使用开发者个人邮箱创建第三方账号。
- AppleVis 适合突出 VoiceOver、Large Text 等辅助功能，但提交目录内容同样需要网站账号；在没有现成登录态时不代建账号。
- BetaList 已取消免费提交，且不接受免费托管子域作为产品主域，因此按“暂不付费”要求排除。
- AppAdvice 等聚合站通过 App Store 数据接口自动生成页面，不需要也没有必要重复人工提交。
- Press Kit、公开营销站、结构化数据、sitemap、IndexNow 和 13 种语言在线工具已经覆盖无需账号、无需持续人工运营且能长期积累的站外获客路径。

## 8. 下一位维护者检查清单

1. 先读本文件和上级 `APP交接文档.md` 第 23 节。
2. 使用 `git status --short`，保留未跟踪的 `guitartool-social-preview.png`。
3. 检查 App Store 1.0.7、三个自定产品页和精选提名状态。
4. 1.0.7 批准后复查非主要语言的自定产品页关键词。
5. 检查 Search Console sitemap 与索引报告；Google 仍在初次处理时先等待，不反复重建资源。
6. 修改站点后运行三项门禁并验证线上 URL，再更新本文件的日期、内容库存、sitemap URL 数、Git 提交和 Sites 版本。
7. 在 App Store Analytics 按各 `site_*` Campaign 比较点击后的下载表现；图片分享不附带商店链接，不能用 Campaign 直接归因，不要为了归因重新强制添加下载链接。
8. 审核完成后更新 Chord 与 Metronome 自定产品页文案；提交完成后不得创建重复精选提名。
