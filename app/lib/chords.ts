import popularChordData from "@/app/data/popular-chords.json";

export type Instrument = "guitar" | "ukulele";
export type ChordVoicing = { points: number[][]; mutedStrings: number[] };
export type PopularChord = { name: string; slug: string; voicingCount: number; voicings: ChordVoicing[] };

export const popularChords = popularChordData as Record<Instrument, PopularChord[]>;

export function getPopularChord(instrument: Instrument, slug: string) {
  return popularChords[instrument].find((chord) => chord.slug === slug);
}

export function chordQuality(name: string) {
  if (name.includes("maj7")) return {
    en: "A major-seventh chord adds a smooth leading tone above the major triad. Let every listed string ring cleanly and listen for the close relationship between the root and major seventh.",
    zh: "大七和弦在大三和弦上加入大七度音，色彩明亮而柔和。按下后逐弦检查，特别留意根音与大七度音之间紧密的声音关系。",
  };
  if (name.includes("m7")) return {
    en: "A minor-seventh chord combines a minor triad with a minor seventh. Its warm, open colour works well in soul, jazz, funk and gentler pop progressions; check each string so the added seventh stays clear.",
    zh: "小七和弦在小三和弦上加入小七度，声音温暖而开放，常见于 Soul、爵士、Funk 与流行和声。逐弦检查，让加入的七度音保持清楚。",
  };
  if (/m$/.test(name)) return {
    en: "A minor chord replaces the major third with a minor third, creating a darker, more reflective colour. Keep unused fingers relaxed so open and fretted strings can ring evenly.",
    zh: "小三和弦把大三度改为小三度，听感更内敛。保持未使用手指放松，避免碰到需要发声的空弦或按弦。",
  };
  if (name.includes("7")) return {
    en: "A dominant-seventh chord adds a minor seventh to the major triad. Its tension naturally wants to move to another chord, which is why this shape appears often in blues, rock and cadences.",
    zh: "属七和弦在大三和弦上加入小七度，天然带有向下一个和弦解决的张力，因此常见于布鲁斯、摇滚与终止式。",
  };
  if (name.includes("sus")) return {
    en: "A suspended chord replaces the third, leaving the sound open and unresolved. Compare this shape with the nearby major chord to hear how one note changes the whole character.",
    zh: "挂留和弦暂时移除三度音，让声音保持开放和未解决。可以与附近的大三和弦对比，体会一处音符变化如何改变整体色彩。",
  };
  if (name.includes("add9")) return {
    en: "An add-nine chord keeps the major triad and adds the ninth without adding a seventh. Aim for even pressure so the extra colour note is as clear as the familiar triad underneath.",
    zh: "add9 和弦保留大三和弦并加入九度音，但不加入七度音。注意按弦力度均匀，让附加音与原本三和弦同样清楚。",
  };
  if (name.includes("6")) return {
    en: "A sixth chord adds the major sixth to a major triad, creating a settled colour that can sound both bright and nostalgic. Balance the added note with the root instead of letting one string dominate.",
    zh: "六和弦在大三和弦上加入大六度，既明亮又带有柔和复古感。弹奏时让附加音与根音保持平衡，避免某一根弦过度突出。",
  };
  return {
    en: "This major chord combines a root, major third and perfect fifth. Play each string separately first, fix any buzz or accidental muting, then strum the full shape with an even motion.",
    zh: "这个大三和弦由根音、大三度与纯五度组成。先逐弦检查杂音与误触，再用均匀动作完整扫弦。",
  };
}

export function routeForChord(instrument: Instrument, slug: string) {
  return `/chords/${instrument}/${slug}/`;
}
