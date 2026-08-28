# GuitarTool Marketing Site

GuitarTool 官方营销、技术支持与自然搜索获客网站。除中英文产品首页外，还包括双语支持页、13 种语言在线调音器、在线节拍器、32 个高意图指南、100 个热门和弦页面、13 种语言入口，以及提供中英文横竖屏完整介绍的媒体资料中心。

线上地址：https://weizhichao1027-collab.github.io/guitartool-website/

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Content utilities

```bash
# 从主 App 的离线和弦数据重新生成 100 个热门和弦页面数据
npm run generate:chords

# GitHub Pages 发布完成后向 IndexNow 通知 sitemap 中的全部 URL
npm run notify:indexnow
```

The site is built with Next.js-compatible Vinext and deployed with OpenAI Sites.

## Links

- [Download GuitarTool on the App Store](https://apps.apple.com/app/id6761914163)
- [Chinese support](https://weizhichao1027-collab.github.io/guitartool-website/support/)
- [English support](https://weizhichao1027-collab.github.io/guitartool-website/en/support/)
- [Privacy policy](https://weizhichao1027-collab.github.io/GuitarTool-Privacy/)
- [Marketing and deployment handoff](./MARKETING_HANDOFF.md)
