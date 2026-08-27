import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = process.argv[2] ?? "out";

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
  }));
  return files.flat();
}

const files = await htmlFiles(outputDirectory);
for (const file of files) {
  const source = await readFile(file, "utf8");
  const main = source.match(/<main\b[^>]*\blang="([^"]+)"[^>]*>/i);
  const direction = main?.[0].match(/\bdir="([^"]+)"/i)?.[1] ?? "ltr";
  if (!main) continue;
  let localized = source.replace(/<html\b[^>]*>/i, (html) => {
    const withLanguage = html.replace(/\blang="[^"]*"/i, `lang="${main[1]}"`);
    return /\bdir=/i.test(withLanguage)
      ? withLanguage.replace(/\bdir="[^"]*"/i, `dir="${direction}"`)
      : withLanguage.replace(/>$/, ` dir="${direction}">`);
  });

  const needsClientRuntime = /[/\\]online-(?:tuner|metronome)[/\\]index\.html$/i.test(file);
  if (!needsClientRuntime) {
    localized = localized
      .replace(/<link\b(?=[^>]*\brel="preload")(?=[^>]*\bas="script")[^>]*\/?\s*>/gi, "")
      .replace(/<script\b[^>]*\bsrc="[^"]*\/_next\/static\/chunks\/[^"]+\.js"[^>]*><\/script>/gi, "")
      .replace(/<script>([\s\S]*?)<\/script>/gi, (script, content) => content.includes("self.__next_f") ? "" : script);
  }

  if (localized !== source) await writeFile(file, localized);
}

console.log(`Finalized document language for ${files.length} HTML files.`);
