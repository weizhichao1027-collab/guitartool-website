const key = "bd234145ef4890c9c5b5baa9f42191b9";
const host = "weizhichao1027-collab.github.io";
const siteBase = `https://${host}/guitartool-website`;
const sitemapUrl = `${siteBase}/sitemap.xml`;

const sitemapResponse = await fetch(sitemapUrl, { headers: { "user-agent": "GuitarTool-Website-Deployment/1.0" } });
if (!sitemapResponse.ok) throw new Error(`Unable to read live sitemap: ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!urlList.length) throw new Error("The live sitemap contains no URLs");

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `${siteBase}/${key}.txt`, urlList }),
});
if (![200, 202].includes(response.status)) throw new Error(`IndexNow returned ${response.status}: ${await response.text()}`);
console.log(`Submitted ${urlList.length} URLs to IndexNow (${response.status}).`);
