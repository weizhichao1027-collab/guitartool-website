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
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), `Noindex: ${url}`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.ok(schemas.length, `Missing structured data: ${url}`);
  for (const match of schemas) {
    const value = JSON.parse(match[1]);
    for (const item of Array.isArray(value) ? value : [value]) {
      if (item['@type'] === 'SoftwareApplication' && item.softwareVersion) assert.equal(item.softwareVersion, '1.1.2', url);
    }
  }
}
for (const locale of locales) {
  const html = await readFile(path.join(root, locale, 'index.html'), 'utf8');
  assert.ok(html.includes('1.1.2'), `Missing release: ${locale}`);
  assert.ok(html.includes(`/release-1.1.2/${locale || 'zh'}-training.webp`), `Missing localized screenshot: ${locale}`);
  assert.equal([...html.matchAll(/<link rel="alternate" hrefLang=/g)].length, 14, `Expected 13 languages + x-default: ${locale}`);
}
for (const prefix of ['', '/en']) {
  for (const slug of ['silent-bar-metronome', 'staged-tempo-training']) {
    const url = `${base}${prefix}/guides/${slug}/`;
    assert.ok(urls.includes(url), `Missing new guide: ${url}`);
    const html = await readFile(path.join(root, prefix, 'guides', slug, 'index.html'), 'utf8');
    assert.ok(html.includes('FAQPage') && html.includes('BreadcrumbList'), `Missing guide schema: ${url}`);
    assert.ok(html.includes(prefix ? '20–500' : '20–500'), `Missing limits: ${url}`);
    assert.ok(html.includes('ppid=ad230a27-b902-4645-b00d-3f2a5c3e3558'), `Wrong download destination: ${url}`);
  }
}
const imageMap = await readFile(path.join(root, 'image-sitemap.xml'), 'utf8');
const images = [...imageMap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map(m => m[1]);
for (const url of images) await access(path.join(root, url.slice(base.length)));
assert.ok(images.some(url => url.includes('jade-resonance')), 'Missing Jade image');
console.log(`Release SEO audit passed: ${urls.length} canonical pages, 13 localized release pages, 4 training guides, ${images.length} image entries.`);
