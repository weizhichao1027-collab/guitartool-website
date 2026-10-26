// Resize retained production artwork and native captures. Never redraw app UI.
// Run in marketing-site with the companion App checkout one directory above.
import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const target = 'public/release-1.1.4';
const sourceRoot = '../docs/design/app-store-localized-2026-10-20/phone/exports';
const locales = { zh: 'zh-Hans', en: 'en-US', 'zh-hant': 'zh-Hant', es: 'es-ES', 'pt-br': 'pt-BR', fr: 'fr-FR', de: 'de-DE', it: 'it', ja: 'ja', ko: 'ko', ru: 'ru', tr: 'tr', ar: 'ar-SA' };
await mkdir(target, { recursive: true });
const manifest = [];
async function convert(source, name, width, provenance) {
  const output = `${target}/${name}.webp`;
  await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 85 }).toFile(output);
  const { width: w, height: h } = await sharp(output).metadata();
  const hash = async file => createHash('sha256').update(await readFile(file)).digest('hex');
  manifest.push({ source, output, width: w, height: h, provenance, sourceSha256: await hash(source), outputSha256: await hash(output) });
}
for (const [locale, native] of Object.entries(locales)) {
  await convert(`${sourceRoot}/${native}/themes.png`, `${locale}-themes`, 660, '1.1.4 localized App Store artwork, refreshed 2026-10-25; native screens with editorial device composition');
}
for (const [locale, native] of [['zh', 'zh-Hans'], ['en', 'en-US']]) {
  for (const name of ['hero', 'training', 'devices', 'metronome', 'chords', 'widgets']) {
    await convert(`${sourceRoot}/${native}/${name}.png`, `${locale}-${name}`, 660, 'Artwork supplied for 1.1.4; retained native inputs may predate this release. See original source-manifest.json');
  }
}
for (const slug of ['morning-mist','lunar-radio','paper-ensemble','pocket-synth','vinyl-afterhours','luthier-atlas','jade-resonance','oddball-rehearsal','zero-gravity-circus','plush-practice-room']) {
  await convert(`../资料归档/08-验证证据/2026-10-26/android-fidelity/ios-current/studio.${slug}-0.png`, `zh-${slug}`, 660, 'Native iOS 1.1.4 current-source simulator metronome capture, 2026-10-26. Chinese interface; no simulated purchase claim.');
}
await writeFile(`${target}/sources.json`, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${manifest.length} source-attributed web images.`);
