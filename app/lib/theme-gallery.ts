export const paidThemes = [
  { slug: "morning-mist", zh: "晨雾琴房", en: "Morning Mist Studio", zhMood: "温润木纹与清晨光线", enMood: "Warm wood and morning light", ext: "jpg" },
  { slug: "lunar-radio", zh: "月面电台", en: "Lunar Radio", zhMood: "深蓝夜空与月面刻度", enMood: "Deep blue and lunar markings", ext: "jpg" },
  { slug: "paper-ensemble", zh: "纸上乐队", en: "Paper Ensemble", zhMood: "纸张肌理与拼贴色块", enMood: "Paper texture and bold shapes", ext: "jpg" },
  { slug: "pocket-synth", zh: "口袋合成器", en: "Pocket Synth", zhMood: "复古旋钮与电子屏", enMood: "Retro knobs and an LCD display", ext: "jpg" },
  { slug: "vinyl-afterhours", zh: "黑胶夜场", en: "Vinyl Afterhours", zhMood: "黑胶唱片与暖金细节", enMood: "A vinyl record with warm brass", ext: "jpg" },
  { slug: "luthier-atlas", zh: "琴匠测绘", en: "Luthier Atlas", zhMood: "制琴图纸与精密刻度", enMood: "Luthier drawings and fine scales", ext: "webp" },
  { slug: "jade-resonance", zh: "玄玉声场", en: "Jade Resonance", zhMood: "深绿玉石与温润金属", enMood: "Deep jade and brushed metal · Chinese UI shown", ext: "webp" },
] as const;

export function themeImage(theme: (typeof paidThemes)[number], language: "zh" | "en") {
  return theme.slug === "jade-resonance" ? "/release-1.1.2/jade-resonance-zh.webp" : `/release-1.1.1/themes/${language}-${theme.slug}.${theme.ext}`;
}
