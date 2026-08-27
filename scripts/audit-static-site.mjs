import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const outputRoot = path.resolve(process.argv[2] ?? "out");
const deploymentBasePath = "/guitartool-website";
const checkedTargets = new Set();
const externalTargets = new Set();
const failures = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  }));
  return files.flat();
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function routeForHtml(filePath) {
  const relative = path.relative(outputRoot, filePath).split(path.sep).join("/");
  if (relative === "index.html") return "/";
  if (relative.endsWith("/index.html")) return `/${relative.slice(0, -"index.html".length)}`;
  return `/${relative}`;
}

function decodeAttribute(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"');
}

function candidateFiles(urlPath) {
  let normalizedPath = decodeURIComponent(urlPath);
  if (normalizedPath === deploymentBasePath) normalizedPath = "/";
  if (normalizedPath.startsWith(`${deploymentBasePath}/`)) {
    normalizedPath = normalizedPath.slice(deploymentBasePath.length);
  }

  const relative = normalizedPath.replace(/^\/+/, "");
  if (!relative) return [path.join(outputRoot, "index.html")];
  if (normalizedPath.endsWith("/")) return [path.join(outputRoot, relative, "index.html")];
  return [
    path.join(outputRoot, relative),
    path.join(outputRoot, `${relative}.html`),
    path.join(outputRoot, relative, "index.html"),
  ];
}

const allFiles = await walk(outputRoot);
const htmlFiles = allFiles.filter((filePath) => filePath.endsWith(".html"));
const attributePattern = /\b(?:href|src|poster)=(?:"([^"]+)"|'([^']+)')/gi;

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  const sourceRoute = routeForHtml(htmlFile);

  for (const match of html.matchAll(attributePattern)) {
    const rawTarget = decodeAttribute(match[1] ?? match[2]);
    if (!rawTarget || rawTarget.startsWith("#") || /^(?:mailto|tel|data|javascript):/i.test(rawTarget)) continue;

    if (/^(?:https?:)?\/\//i.test(rawTarget)) {
      externalTargets.add(rawTarget);
      continue;
    }

    const targetUrl = new URL(rawTarget, `https://audit.local${deploymentBasePath}${sourceRoute}`);
    const targetKey = targetUrl.pathname;
    if (checkedTargets.has(targetKey)) continue;
    checkedTargets.add(targetKey);

    const candidates = candidateFiles(targetUrl.pathname);
    const found = (await Promise.all(candidates.map(exists))).some(Boolean);
    if (!found) failures.push(`${sourceRoute} -> ${rawTarget}`);
  }
}

if (failures.length > 0) {
  console.error(`Static site audit failed with ${failures.length} unresolved local target(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Static site audit passed: ${htmlFiles.length} HTML pages, ${checkedTargets.size} local targets, ${externalTargets.size} external targets.`);
}
