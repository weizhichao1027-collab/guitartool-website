import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = resolve(scriptDir, "..");
const catalogPath = resolve(siteRoot, "../GuitarToolbox/ChordCatalogData.bin");
const outputPath = resolve(siteRoot, "app/data/popular-chords.json");

const selected = {
  guitar: [
    "C", "C7", "Cmaj7", "Cm", "Cadd9",
    "D", "D7", "Dmaj7", "Dm", "Dsus2", "Dsus4",
    "E", "E7", "Emaj7", "Em",
    "F", "Fmaj7", "Fm",
    "G", "G7", "Gmaj7",
    "A", "A7", "Am", "Bm",
  ],
  ukulele: [
    "C", "C7", "Cmaj7", "Cm",
    "D", "D7", "Dm",
    "E", "E7", "Em",
    "F", "F7", "Fmaj7", "Fm",
    "G", "G7", "Gmaj7", "Gm",
    "A", "A7", "Am",
    "Bb", "B", "B7", "Bm",
  ],
};

const suffixSlugs = new Map([
  ["", ""],
  ["m", "minor"],
  ["7", "7"],
  ["maj7", "major-7"],
  ["m7", "minor-7"],
  ["add9", "add9"],
  ["sus2", "sus2"],
  ["sus4", "sus4"],
]);

function slugFor(name) {
  const match = /^([A-G])([#b]?)(.*)$/.exec(name);
  if (!match) throw new Error(`Unsupported chord name: ${name}`);
  const [, letter, accidental, suffix] = match;
  const root = `${letter.toLowerCase()}${accidental === "#" ? "-sharp" : accidental === "b" ? "-flat" : ""}`;
  const suffixSlug = suffixSlugs.get(suffix) ?? suffix.toLowerCase().replaceAll("/", "-");
  return suffixSlug ? `${root}-${suffixSlug}` : root;
}

function decodeCatalog(buffer) {
  let offset = 0;
  const byte = () => buffer[offset++];
  const uint16 = () => {
    const value = buffer.readUInt16LE(offset);
    offset += 2;
    return value;
  };
  const text = (length) => {
    const value = buffer.toString("utf8", offset, offset + length);
    offset += length;
    return value;
  };

  if (text(4) !== "GTCD") throw new Error("Unexpected chord catalog header");
  const version = byte();
  if (version !== 1) throw new Error(`Unsupported chord catalog version: ${version}`);

  const instrument = () => {
    const chords = new Map();
    const chordCount = uint16();
    for (let chordIndex = 0; chordIndex < chordCount; chordIndex += 1) {
      const name = text(byte());
      const voicingCount = byte();
      const voicings = [];
      for (let voicingIndex = 0; voicingIndex < voicingCount; voicingIndex += 1) {
        const points = [];
        const pointCount = byte();
        for (let pointIndex = 0; pointIndex < pointCount; pointIndex += 1) {
          points.push([byte(), byte()]);
        }
        const mutedStrings = [];
        const mutedCount = byte();
        for (let mutedIndex = 0; mutedIndex < mutedCount; mutedIndex += 1) {
          mutedStrings.push(byte());
        }
        voicings.push({ points, mutedStrings });
      }
      chords.set(name, voicings);
    }
    return chords;
  };

  const guitar = instrument();
  const ukulele = instrument();
  if (offset !== buffer.length) throw new Error(`Unexpected trailing bytes: ${buffer.length - offset}`);
  return { guitar, ukulele };
}

const decoded = decodeCatalog(await readFile(catalogPath));
const result = Object.fromEntries(Object.entries(selected).map(([instrument, names]) => {
  const library = decoded[instrument];
  const records = names.map((name) => {
    const voicings = library.get(name);
    if (!voicings?.length) throw new Error(`Missing ${instrument} chord: ${name}`);
    return {
      name,
      slug: slugFor(name),
      voicingCount: voicings.length,
      voicings: voicings.slice(0, 3),
    };
  });
  return [instrument, records];
}));

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`);
console.log(`Generated ${outputPath} with ${result.guitar.length + result.ukulele.length} chord pages.`);
