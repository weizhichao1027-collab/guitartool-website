import { absoluteUrl } from "@/app/lib/site";

export const dynamic = "force-static";

type ImageEntry = {
  page: string;
  image: string;
  title: string;
  caption: string;
};

const localizedChordCards: ImageEntry[] = [
  { page: "/", image: "/chord-card-share.webp", title: "GuitarTool 和弦卡片预览", caption: "简体中文和弦卡片预览、保存到相册与系统分享界面。" },
  { page: "/en/", image: "/en-chord-card-share.webp", title: "GuitarTool chord card preview", caption: "English chord-card preview, Save to Photos and Share Image interface." },
  { page: "/zh-hant/", image: "/zh-hant-chord-card-share.webp", title: "GuitarTool 和弦卡片預覽", caption: "繁體中文和弦卡片預覽、儲存到照片與分享圖片介面。" },
  { page: "/es/", image: "/es-chord-card-share.webp", title: "Vista previa de tarjeta de acorde", caption: "Interfaz en español para previsualizar, guardar y compartir una tarjeta de acorde." },
  { page: "/pt-br/", image: "/pt-br-chord-card-share.webp", title: "Prévia do cartão de acorde", caption: "Interface em português do Brasil para visualizar, salvar e compartilhar um acorde." },
  { page: "/fr/", image: "/fr-chord-card-share.webp", title: "Aperçu de la carte d’accord", caption: "Interface française pour prévisualiser, enregistrer et partager une carte d’accord." },
  { page: "/de/", image: "/de-chord-card-share.webp", title: "Vorschau der Akkordkarte", caption: "Deutsche Oberfläche zum Anzeigen, Sichern und Teilen einer Akkordkarte." },
  { page: "/it/", image: "/it-chord-card-share.webp", title: "Anteprima della scheda accordo", caption: "Interfaccia italiana per visualizzare, salvare e condividere una scheda accordo." },
  { page: "/ja/", image: "/ja-chord-card-share.webp", title: "コードカードのプレビュー", caption: "コードカードを確認し、写真に保存または共有する日本語画面。" },
  { page: "/ko/", image: "/ko-chord-card-share.webp", title: "코드 카드 미리보기", caption: "코드 카드를 확인하고 사진에 저장하거나 공유하는 한국어 화면입니다." },
  { page: "/ru/", image: "/ru-chord-card-share.webp", title: "Предпросмотр карточки аккорда", caption: "Русский интерфейс предварительного просмотра, сохранения и отправки карточки аккорда." },
  { page: "/tr/", image: "/tr-chord-card-share.webp", title: "Akor kartı önizlemesi", caption: "Akor kartını önizleme, Fotoğraflar’a kaydetme ve paylaşma için Türkçe arayüz." },
  { page: "/ar/", image: "/ar-chord-card-share.webp", title: "معاينة بطاقة الوتر", caption: "واجهة عربية لمعاينة بطاقة الوتر وحفظها في الصور أو مشاركتها." },
];

const editorialImages: ImageEntry[] = [
  { page: "/guides/share-chord-diagrams/", image: "/chord-card-share.webp", title: "保存与分享和弦图", caption: "GuitarTool 1.0.7 真实和弦卡片分享流程。" },
  { page: "/en/guides/share-chord-diagrams/", image: "/en-chord-card-share.webp", title: "Save and share chord diagrams", caption: "The real GuitarTool 1.0.7 chord-card sharing flow." },
  { page: "/guides/chord-diagrams-for-students/", image: "/chord-card-share.webp", title: "把和弦指法图发给学生", caption: "选择准确把位、检查卡片并把图片交给学生。" },
  { page: "/en/guides/chord-diagrams-for-students/", image: "/en-chord-card-share.webp", title: "Share chord diagrams with students", caption: "Choose an exact voicing, check the card and send a useful image to a student." },
  { page: "/guides/apple-watch-metronome/", image: "/devices.webp", title: "Apple Watch 节拍器", caption: "GuitarTool 的 iPhone、iPad 与 Apple Watch 多设备体验。" },
  { page: "/en/guides/apple-watch-metronome/", image: "/en-devices.webp", title: "Apple Watch metronome", caption: "GuitarTool across iPhone, iPad and Apple Watch." },
  { page: "/guides/apple-watch-metronome-audio-design/", image: "/devices.webp", title: "Apple Watch 节拍器音频设计", caption: "声音计时与界面生命周期分离的多设备体验。" },
  { page: "/en/guides/apple-watch-metronome-audio-design/", image: "/en-devices.webp", title: "Apple Watch metronome audio design", caption: "A multi-device experience built around independent audio timing." },
  { page: "/press/", image: "/en-chord-card-share.webp", title: "GuitarTool 1.0.7 press image", caption: "Official English chord-card product image for editorial coverage." },
];

const escapeXml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

export function GET() {
  const body = [...localizedChordCards, ...editorialImages]
    .map((entry) => `  <url>\n    <loc>${escapeXml(absoluteUrl(entry.page))}</loc>\n    <image:image>\n      <image:loc>${escapeXml(absoluteUrl(entry.image))}</image:loc>\n      <image:title>${escapeXml(entry.title)}</image:title>\n      <image:caption>${escapeXml(entry.caption)}</image:caption>\n    </image:image>\n  </url>`)
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${body}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
