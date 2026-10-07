// Run from marketing-site with the companion App checkout one directory above.
// Only resize/re-encode retained, real App screenshots; never synthesize UI.
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
const base = '../docs/release/app-store-screenshots-1.1.2';
const locales = { zh: '简体中文', en: '英语', 'zh-hant': '繁体中文', es: '西班牙语', 'pt-br': '巴西葡萄牙语', fr: '法语', de: '德语', it: '意大利语', ja: '日语', ko: '韩语', ru: '俄语', tr: '土耳其语', ar: '阿拉伯语' };
const target = 'public/release-1.1.2';
await mkdir(target, { recursive: true });
const manifest = [];
async function convert(source, name, width) {
  const output = `${target}/${name}.webp`;
  await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 85 }).toFile(output);
  const { width: w, height: h } = await sharp(output).metadata();
  manifest.push({ source, output, width: w, height: h, sourceSha256: createHash('sha256').update(await readFile(source)).digest('hex') });
}
for (const [locale, name] of Object.entries(locales)) {
  await convert(`${base}/成品预览图/苹果手机/${name}/04-practice-training.png`, `${locale}-training`, 660);
}
await convert('../docs/design/design-sources/jade-resonance/qa/health-fixes-20261004/metronome.png', 'jade-resonance-zh', 660);
await writeFile(`${target}/sources.json`, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${manifest.length} verified-source screenshots`);
