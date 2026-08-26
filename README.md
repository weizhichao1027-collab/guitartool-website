# GuitarTool Marketing Site

GuitarTool 官方营销与自然搜索获客网站。除中英文产品首页外，还包括在线节拍器、24 个高意图指南、50 个热门和弦页面、13 种语言入口和媒体资料中心。

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
# 从主 App 的离线和弦数据重新生成 50 个热门和弦页面数据
npm run generate:chords

# GitHub Pages 发布完成后向 IndexNow 通知 sitemap 中的全部 URL
npm run notify:indexnow
```

The site is built with Next.js-compatible Vinext and deployed with OpenAI Sites.

## Links

- [Download GuitarTool on the App Store](https://apps.apple.com/app/id6761914163)
- [Privacy policy](https://weizhichao1027-collab.github.io/GuitarTool-Privacy/)
