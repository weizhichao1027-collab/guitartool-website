import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const script = readFileSync(new URL("../public/campaign-links.js", import.meta.url), "utf8");
const store = "https://apps.apple.com/app/apple-store/id6761914163?pt=128747267&ct=site_metronome&mt=8&ppid=ad230a27-b902-4645-b00d-3f2a5c3e3558";
function visit(page, links, base = "/guitartool-website/") {
  const anchors = links.map((link) => ({
    href: typeof link === "string" ? link : link.href,
    dataset: {},
    getAttribute() { return this.href; },
    hasAttribute(name) { return name === "download" && Boolean(link.download); },
  }));
  runInNewContext(script, {
    URL,
    window: { location: { href: page } },
    document: {
      currentScript: { src: new URL(`${base}campaign-links.js`, page).href },
      querySelectorAll: () => anchors,
    },
  });
  return anchors;
}

test("social download keeps the approved metronome product page", () => {
  const [link] = visit("https://example.com/guitartool-website/?utm_source=bilibili&utm_campaign=private-value", [store]);
  const url = new URL(link.href);
  assert.equal(url.searchParams.get("ct"), "organic_bilibili");
  assert.equal(url.searchParams.get("pt"), "128747267");
  assert.equal(url.searchParams.get("ppid"), "ad230a27-b902-4645-b00d-3f2a5c3e3558");
  assert.equal(url.href.includes("private-value"), false);
});

test("channel survives language and guide navigation on both hosts", () => {
  for (const base of ["/guitartool-website/", "/"]) {
    const [guide] = visit(`https://example.com${base}?utm_source=twitter`, [`${base}en/guides/visual-metronome/`], base);
    assert.equal(new URL(guide.href).searchParams.get("utm_source"), "x");
    const [download] = visit(guide.href, [store], base);
    assert.equal(new URL(download.href).searchParams.get("ct"), "organic_x");
  }
});

test("organic search and arbitrary source values keep the existing download campaigns", () => {
  for (const query of ["", "?utm_source=someone@example.com", "?utm_source=__proto__", "?utm_source=constructor"]) {
    assert.equal(visit(`https://example.com/guitartool-website/${query}`, [store])[0].href, store);
  }
});

test("other apps, unrelated sites, media, downloads and anchors are not rewritten", () => {
  const originals = [
    "https://apps.apple.com/app/id123456",
    "https://apps.apple.com.evil.example/app/id6761914163",
    "https://elsewhere.example/",
    "/GuitarTool-Privacy/",
    "/guitartool-website/media-kit/video/demo.mp4",
    "#practice",
    "mailto:hello@example.com",
  ];
  const result = visit("https://example.com/guitartool-website/?utm_source=x", [...originals, { href: "/guitartool-website/kit/", download: true }]);
  assert.deepEqual(result.map((link) => link.href), [...originals, "/guitartool-website/kit/"]);
});
