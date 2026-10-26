import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
const root = path.resolve(process.argv[2] ?? 'out');
const base = 'https://weizhichao1027-collab.github.io/guitartool-website';
const locales = ['', 'en', 'zh-hant', 'es', 'pt-br', 'fr', 'de', 'it', 'ja', 'ko', 'ru', 'tr', 'ar'];
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
for (const url of urls) {
  assert.ok(url.startsWith(base + '/'), `Unexpected canonical host: ${url}`);
  const file = path.join(root, url.slice(base.length), 'index.html');
  const html = await readFile(file, 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(canonical, url, `Canonical mismatch: ${url}`);
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `Expected one H1: ${url}`);
  for (const stale of ['Upcoming 1.1.4 offers optional', 'Upcoming version 1.1.4 introduces optional', '准备中的 1.1.4', '正在准备的 1.1.4', '1.1.4 is not yet released', '1.1.4 尚未发布']) assert.ok(!html.includes(stale), `Obsolete launch/privacy claim: ${url}: ${stale}`);
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), `Noindex: ${url}`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.ok(schemas.length, `Missing structured data: ${url}`);
  for (const match of schemas) {
    const value = JSON.parse(match[1]);
    for (const item of Array.isArray(value) ? value : [value]) {
      if (item['@type'] === 'SoftwareApplication' && item.softwareVersion) assert.equal(item.softwareVersion, '1.1.4', url);
    }
  }
}
for (const locale of locales) {
  const html = await readFile(path.join(root, locale, 'index.html'), 'utf8');
  assert.ok(/<meta name="description" content="[^"]*1\.1\.4/.test(html), `Stale release description: ${locale}`);
  assert.ok(html.includes('iOS 27'), `Missing widget system limit: ${locale}`);
  assert.ok(html.includes('1.1.4'), `Missing release: ${locale}`);
  assert.ok(html.includes(`/release-1.1.4/${locale || 'zh'}-themes.webp`), `Missing localized screenshot: ${locale}`);
  assert.equal([...html.matchAll(/<link rel="alternate" hrefLang=/g)].length, 14, `Expected 13 languages + x-default: ${locale}`);
}
for (const prefix of ['', '/en']) {
  for (const slug of ['silent-bar-metronome', 'staged-tempo-training', 'voice-counting-metronome', 'metronome-bpm-widget']) {
    const url = `${base}${prefix}/guides/${slug}/`;
    assert.ok(urls.includes(url), `Missing new guide: ${url}`);
    const html = await readFile(path.join(root, prefix, 'guides', slug, 'index.html'), 'utf8');
    assert.ok(html.includes('2026-10-26'), `Stale guide modification date: ${url}`);
    assert.ok(html.includes('FAQPage') && html.includes('BreadcrumbList'), `Missing guide schema: ${url}`);
    assert.ok(html.includes('20–500'), `Missing limits: ${url}`);
    assert.ok(html.includes('ppid=ad230a27-b902-4645-b00d-3f2a5c3e3558'), `Wrong download destination: ${url}`);
  }
}
for (const prefix of ['', '/en']) {
  const support = await readFile(path.join(root, prefix, 'support', 'index.html'), 'utf8');
  assert.ok(support.includes('1.1.4') && support.includes('iOS 27') && support.includes('voice-counting-metronome') && support.includes('metronome-bpm-widget'), `Incomplete support: ${prefix}`);
}
const imageMap = await readFile(path.join(root, 'image-sitemap.xml'), 'utf8');
const images = [...imageMap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map(m => m[1]);
for (const url of images) await access(path.join(root, url.slice(base.length)));
assert.ok(images.some(url => url.includes('jade-resonance')), 'Missing Jade image');
for (const prefix of ['', '/en']) {
  for (const slug of ['guitartool-1-1-4', 'themes-and-purchases']) {
    const url = `${base}${prefix}/guides/${slug}/`;
    assert.ok(urls.includes(url), `Missing release guide: ${url}`);
    const html = await readFile(path.join(root, prefix, 'guides', slug, 'index.html'), 'utf8');
    assert.ok(html.includes('2026-10-26') && html.includes('FAQPage') && html.includes('BreadcrumbList'), url);
    assert.ok(html.includes(prefix ? 'ten' : '十'), `Missing theme scope: ${url}`);
    assert.ok(!html.includes('ppid='), `Release/purchase guide must use main product listing: ${url}`);
  }
  const home = await readFile(path.join(root, prefix, 'index.html'), 'utf8');
  assert.equal((home.match(/class="themeTile themeTile-/g) ?? []).length, 10, 'Expected ten real theme previews');
  for (const slug of ['plush-practice-room', 'oddball-rehearsal', 'zero-gravity-circus']) assert.ok(home.includes(`/release-1.1.4/zh-${slug}.webp`), slug);
  const support = await readFile(path.join(root, prefix, 'support', 'index.html'), 'utf8');
  assert.ok(support.includes('themes-and-purchases') && support.includes('Android') && support.includes('PostHog'), 'Incomplete support scope');
}
console.log(`Release SEO audit passed: ${urls.length} canonical pages, 13 localized release pages, 12 release guides, ${images.length} image entries.`);
