/* Only public channel labels travel to the App Store. No cookies, storage or requests. */
(() => {
  const channels = new Map([
    ["bilibili", "bilibili"], ["b站", "bilibili"],
    ["x", "x"], ["twitter", "x"],
    ["xiaohongshu", "xiaohongshu"], ["xhs", "xiaohongshu"],
    ["youtube", "youtube"], ["instagram", "instagram"],
    ["tiktok", "tiktok"], ["douyin", "douyin"],
    ["wechat", "wechat"], ["zhihu", "zhihu"],
    ["reddit", "reddit"], ["producthunt", "producthunt"],
    ["alternativeto", "alternativeto"], ["github", "github"],
  ]);
  const pageUrl = new URL(window.location.href);
  const source = channels.get((pageUrl.searchParams.get("utm_source") || "").toLowerCase());
  if (!source || !document.currentScript) return;

  const sitePath = new URL(document.currentScript.src).pathname.replace(/campaign-links\.js$/, "");
  const campaign = `organic_${source}`;

  for (const anchor of document.querySelectorAll("a[href]")) {
    const original = anchor.getAttribute("href");
    if (!original || original.startsWith("#") || anchor.hasAttribute("download")) continue;
    let url;
    try { url = new URL(original, pageUrl); } catch { continue; }

    if (url.protocol === "https:" && url.hostname === "apps.apple.com" && /\/id6761914163\/?$/.test(url.pathname)) {
      // Keep the feature-specific product page (ppid) and all other destination settings.
      url.searchParams.set("pt", "128747267");
      url.searchParams.set("ct", campaign);
      url.searchParams.set("mt", "8");
      anchor.href = url.href;
      anchor.dataset.campaign = campaign;
    } else if (url.origin === pageUrl.origin && url.pathname.startsWith(sitePath) && url.pathname.endsWith("/")) {
      // Native internal navigation retains the channel without storing a visitor identifier.
      url.searchParams.set("utm_source", source);
      anchor.href = url.href;
    }
  }
})();
