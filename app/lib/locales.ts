import { RELEASE_VERSION } from "@/app/lib/site";

export type LocalePage = {
  slug: string;
  htmlLang: string;
  dir?: "rtl";
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  lead: string;
  download: string;
  trust: string[];
  features: Array<{ title: string; body: string }>;
  versionUpdate: { label: string; title: string; body: string; screenshotCaption: string };
  closing: string;
};

const releaseVersion = RELEASE_VERSION;

const localePageTemplates: Array<Omit<LocalePage, "description" | "versionUpdate"> & { releaseLabel: string }> = [
  {
    slug: "zh-hant", htmlLang: "zh-Hant", title: "GuitarTool｜調音器、節拍器與和弦庫", eyebrow: "專注練習所需的一切", headline: "核心調音、跟拍與和弦工具，離線也能使用。", lead: "GuitarTool 把即時調音器、彈性節拍器與吉他／烏克麗麗和弦庫放在同一個安靜、清楚的練習流程中。", download: "在 App Store 免費下載", trust: ["核心工具離線", "無廣告", "無需帳戶"], releaseLabel: "1.1.0 版本更新", closing: "拿起樂器就能開始，不讓工具打斷練習。",
    features: [{ title: "即時調音器", body: "支援多種吉他調弦、High-G／Low-G GCEA 與半音階模式，顯示音分、頻率、輸入強度及穩定度。" }, { title: "彈性節拍器", body: "20–500 BPM、1–12 拍、TAP 測速、細分、Swing、計時器及漸進加速，並支援後置閃光燈節拍（全部主拍／僅重音、三檔強度）。" }, { title: "雙樂器和弦庫", body: "吉他與烏克麗麗各有 855 個名稱，共 19,244 個指法；可切換、編輯、辨識及試聽，並把目前指法卡片儲存或分享。" }],
  },
  {
    slug: "es", htmlLang: "es", title: "GuitarTool | Afinador, metrónomo y acordes", eyebrow: "TODO PARA UNA PRÁCTICA CONCENTRADA", headline: "Afina, marca el pulso y encuentra acordes sin conexión.", lead: "GuitarTool reúne un afinador en tiempo real, un metrónomo flexible y bibliotecas profundas de acordes de guitarra y ukelele en una sola aplicación tranquila y clara.", download: "Descargar gratis en App Store", trust: ["Funciones esenciales sin conexión", "Sin anuncios", "Sin cuenta"], releaseLabel: "NOVEDADES DE LA VERSIÓN 1.1.0", closing: "Abre la aplicación, toma el instrumento y empieza a practicar.",
    features: [{ title: "Afinador en tiempo real", body: "Afinaciones estándar, Drop D, DADGAD, abiertas, GCEA y modo cromático, con cents, frecuencia, intensidad y estabilidad." }, { title: "Metrónomo flexible", body: "20–500 BPM, de 1 a 12 pulsos, Tap Tempo, subdivisiones, swing, temporizadores y aumento progresivo del tempo. El flash trasero puede marcar todos los pulsos principales o solo los acentos con tres intensidades." }, { title: "Acordes interactivos", body: "855 nombres para cada instrumento y 19.244 digitaciones en total; cambia, edita, identifica y escucha posiciones, y guarda o comparte la tarjeta actual." }],
  },
  {
    slug: "pt-br", htmlLang: "pt-BR", title: "GuitarTool | Afinador, metrônomo e acordes", eyebrow: "TUDO PARA UMA PRÁTICA FOCADA", headline: "Afine, mantenha o tempo e encontre acordes offline.", lead: "O GuitarTool reúne afinador em tempo real, metrônomo flexível e bibliotecas completas de acordes de guitarra e ukulele em um fluxo simples e tranquilo.", download: "Baixar grátis na App Store", trust: ["Recursos essenciais offline", "Sem anúncios", "Sem conta"], releaseLabel: "NOVIDADES DA VERSÃO 1.1.0", closing: "Pegue o instrumento e comece: a ferramenta fica em segundo plano.",
    features: [{ title: "Afinador em tempo real", body: "Afinações padrão, Drop D, DADGAD, abertas, GCEA e modo cromático, com cents, frequência, intensidade e estabilidade." }, { title: "Metrônomo flexível", body: "20–500 BPM, 1–12 tempos, Tap Tempo, subdivisões, swing, temporizadores e aumento progressivo de andamento. O flash traseiro pode marcar todos os tempos principais ou apenas os acentos, com três intensidades." }, { title: "Acordes interativos", body: "855 nomes por instrumento e 19.244 digitações no total; alterne, edite, identifique e ouça posições, e salve ou compartilhe o cartão atual." }],
  },
  {
    slug: "fr", htmlLang: "fr", title: "GuitarTool | Accordeur, métronome et accords", eyebrow: "TOUT POUR UNE PRATIQUE CONCENTRÉE", headline: "Accordez, gardez le tempo et trouvez vos accords hors ligne.", lead: "GuitarTool réunit un accordeur en temps réel, un métronome flexible et de riches bibliothèques d’accords de guitare et d’ukulélé dans une seule application claire.", download: "Télécharger gratuitement", trust: ["Outils essentiels hors ligne", "Sans publicité", "Sans compte"], releaseLabel: "NOUVEAUTÉS DE LA VERSION 1.1.0", closing: "Prenez l’instrument et commencez : l’outil sait rester discret.",
    features: [{ title: "Accordeur en temps réel", body: "Accordages standard, Drop D, DADGAD, ouverts, GCEA et mode chromatique, avec cents, fréquence, niveau et stabilité." }, { title: "Métronome flexible", body: "20–500 BPM, 1 à 12 temps, Tap Tempo, subdivisions, swing, minuteries et accélération progressive. Le flash arrière peut marquer tous les temps principaux ou seulement les accents, avec trois intensités." }, { title: "Accords interactifs", body: "855 noms par instrument et 19 244 doigtés au total ; changez, modifiez, identifiez et écoutez les positions, puis enregistrez ou partagez la fiche actuelle." }],
  },
  {
    slug: "de", htmlLang: "de", title: "GuitarTool | Stimmgerät, Metronom & Akkorde", eyebrow: "ALLES FÜR KONZENTRIERTES ÜBEN", headline: "Stimmen, Tempo halten und Akkorde offline finden.", lead: "GuitarTool verbindet Echtzeit-Stimmgerät, flexibles Metronom und umfangreiche Akkordbibliotheken für Gitarre und Ukulele in einer ruhigen, klaren App.", download: "Kostenlos im App Store laden", trust: ["Kernwerkzeuge offline", "Keine Werbung", "Kein Konto"], releaseLabel: "NEU IN VERSION 1.1.0", closing: "Instrument nehmen und anfangen – das Werkzeug bleibt im Hintergrund.",
    features: [{ title: "Echtzeit-Stimmgerät", body: "Standard-, Drop-D-, DADGAD-, offene und GCEA-Stimmungen sowie chromatischer Modus mit Cent-, Frequenz- und Stabilitätsanzeige." }, { title: "Flexibles Metronom", body: "20–500 BPM, 1–12 Schläge, Tap Tempo, Unterteilungen, Swing, Timer und schrittweise Tempoerhöhung. Der rückseitige Blitz kann alle Hauptschläge oder nur Akzente in drei Intensitäten markieren." }, { title: "Interaktive Akkorde", body: "Je 855 Akkordnamen und insgesamt 19.244 Griffe; Lagen wechseln, bearbeiten, erkennen und anhören sowie die aktuelle Griffkarte speichern oder teilen." }],
  },
  {
    slug: "it", htmlLang: "it", title: "GuitarTool | Accordatore, metronomo e accordi", eyebrow: "TUTTO PER UNA PRATICA CONCENTRATA", headline: "Accorda, tieni il tempo e trova gli accordi offline.", lead: "GuitarTool unisce accordatore in tempo reale, metronomo flessibile e ampie librerie di accordi per chitarra e ukulele in un’unica app chiara e tranquilla.", download: "Scarica gratis su App Store", trust: ["Strumenti essenziali offline", "Senza pubblicità", "Senza account"], releaseLabel: "NOVITÀ DELLA VERSIONE 1.1.0", closing: "Prendi lo strumento e inizia: l’app lascia spazio alla musica.",
    features: [{ title: "Accordatore in tempo reale", body: "Accordature standard, Drop D, DADGAD, aperte, GCEA e modalità cromatica, con cents, frequenza, intensità e stabilità." }, { title: "Metronomo flessibile", body: "20–500 BPM, 1–12 movimenti, Tap Tempo, suddivisioni, swing, timer e aumento progressivo del tempo. Il flash posteriore può segnare tutti i battiti principali o solo gli accenti con tre intensità." }, { title: "Accordi interattivi", body: "855 nomi per strumento e 19.244 diteggiature totali; cambia, modifica, riconosci e ascolta le posizioni, poi salva o condividi la scheda attuale." }],
  },
  {
    slug: "ja", htmlLang: "ja", title: "GuitarTool｜チューナー・メトロノーム・コード", eyebrow: "集中した練習に必要なすべて", headline: "チューニング、テンポ、コード確認をオフラインで。", lead: "GuitarToolはリアルタイムチューナー、柔軟なメトロノーム、ギターとウクレレの豊富なコードライブラリを、落ち着いた一つの流れにまとめます。", download: "App Storeで無料ダウンロード", trust: ["主要ツールはオフライン", "広告なし", "アカウント不要"], releaseLabel: "バージョン1.1.0の新機能", closing: "楽器を手に取ったら、すぐに練習を始められます。",
    features: [{ title: "リアルタイムチューナー", body: "標準、Drop D、DADGAD、オープン、GCEA、クロマチックに対応。セント、周波数、入力強度、安定度を表示します。" }, { title: "柔軟なメトロノーム", body: "20–500 BPM、1–12拍、タップテンポ、細分化、スウィング、タイマー、段階的テンポアップに対応。背面フラッシュはすべての主拍またはアクセントだけを3段階の強さで表示できます。" }, { title: "インタラクティブなコード", body: "各楽器855コード名、合計19,244種類の押さえ方。切替、編集、判定、試聴に加え、現在のコードカードを写真に保存・共有できます。" }],
  },
  {
    slug: "ko", htmlLang: "ko", title: "GuitarTool | 튜너, 메트로놈, 코드", eyebrow: "집중 연습에 필요한 모든 것", headline: "튜닝, 박자, 코드 찾기를 오프라인으로.", lead: "GuitarTool은 실시간 튜너, 유연한 메트로놈, 기타와 우쿨렐레 코드 라이브러리를 차분하고 명확한 하나의 흐름으로 연결합니다.", download: "App Store에서 무료 다운로드", trust: ["핵심 도구 오프라인", "광고 없음", "계정 불필요"], releaseLabel: "버전 1.1.0의 새로운 기능", closing: "악기를 들고 바로 시작하세요. 도구는 연습을 방해하지 않습니다.",
    features: [{ title: "실시간 튜너", body: "표준, Drop D, DADGAD, 오픈, GCEA 및 크로매틱 모드와 센트, 주파수, 입력 강도, 안정도 표시를 지원합니다." }, { title: "유연한 메트로놈", body: "20–500 BPM, 1–12박, 탭 템포, 세분음, 스윙, 타이머, 점진적 템포 증가를 제공합니다. 후면 플래시는 모든 주요 박자 또는 악센트만 세 단계 밝기로 표시할 수 있습니다." }, { title: "인터랙티브 코드", body: "악기별 855개 코드 이름과 총 19,244개 운지. 포지션을 바꾸고 편집·인식·재생한 뒤 현재 코드 카드를 사진에 저장하거나 공유할 수 있습니다." }],
  },
  {
    slug: "ru", htmlLang: "ru", title: "GuitarTool | Тюнер, метроном и аккорды", eyebrow: "ВСЁ ДЛЯ СОСРЕДОТОЧЕННОЙ ПРАКТИКИ", headline: "Настройка, ритм и аккорды доступны офлайн.", lead: "GuitarTool объединяет тюнер реального времени, гибкий метроном и большие библиотеки аккордов для гитары и укулеле в одном спокойном приложении.", download: "Скачать бесплатно в App Store", trust: ["Основные инструменты офлайн", "Без рекламы", "Без аккаунта"], releaseLabel: "НОВОЕ В ВЕРСИИ 1.1.0", closing: "Берите инструмент и начинайте — приложение не отвлекает от музыки.",
    features: [{ title: "Тюнер реального времени", body: "Стандартный строй, Drop D, DADGAD, открытые строи, GCEA и хроматический режим с центами, частотой и стабильностью." }, { title: "Гибкий метроном", body: "20–500 BPM, 1–12 долей, Tap Tempo, подразделения, свинг, таймеры и постепенное ускорение. Задняя вспышка может отмечать все основные доли или только акценты с тремя уровнями яркости." }, { title: "Интерактивные аккорды", body: "По 855 названий для каждого инструмента и 19 244 аппликатуры: меняйте, редактируйте, распознавайте и слушайте позиции, сохраняйте или отправляйте текущую карточку." }],
  },
  {
    slug: "tr", htmlLang: "tr", title: "GuitarTool | Akort, metronom ve akorlar", eyebrow: "ODAKLI ÇALIŞMA İÇİN HER ŞEY", headline: "Akort et, tempoyu koru ve akorları çevrimdışı bul.", lead: "GuitarTool gerçek zamanlı akort cihazını, esnek metronomu ve kapsamlı gitar ile ukulele akor kitaplıklarını sakin ve net bir uygulamada birleştirir.", download: "App Store’dan ücretsiz indir", trust: ["Temel araçlar çevrimdışı", "Reklamsız", "Hesap gerektirmez"], releaseLabel: "SÜRÜM 1.1.0 YENİLİKLERİ", closing: "Enstrümanı elinize alın ve başlayın; araç müziğin önüne geçmez.",
    features: [{ title: "Gerçek zamanlı akort", body: "Standart, Drop D, DADGAD, açık, GCEA ve kromatik mod; cent, frekans, giriş gücü ve kararlılık göstergeleri." }, { title: "Esnek metronom", body: "20–500 BPM, 1–12 vuruş, Tap Tempo, alt bölümler, swing, zamanlayıcı ve kademeli tempo artışı. Arka flaş tüm ana vuruşları veya yalnızca aksanları üç yoğunlukta gösterebilir." }, { title: "Etkileşimli akorlar", body: "Her enstrüman için 855 ad ve toplam 19.244 pozisyon; değiştirin, düzenleyin, tanıyın ve dinleyin, ardından geçerli akor kartını kaydedin veya paylaşın." }],
  },
  {
    slug: "ar", htmlLang: "ar", dir: "rtl", title: "GuitarTool | موالف وميترونوم ومكتبة أوتار", eyebrow: "كل ما تحتاجه لتمرين مركّز", headline: "اضبط الآلة، حافظ على الإيقاع وابحث عن الأوتار دون اتصال.", lead: "يجمع GuitarTool موالفاً فورياً وميترونوماً مرناً ومكتبتين غنيتين لأوتار الغيتار واليوكليلي في تطبيق واحد واضح وهادئ.", download: "تنزيل مجاني من App Store", trust: ["الأدوات الأساسية بلا اتصال", "بلا إعلانات", "لا يحتاج إلى حساب"], releaseLabel: "الجديد في الإصدار 1.1.0", closing: "احمل آلتك وابدأ مباشرة؛ الأداة تترك المساحة للموسيقى.",
    features: [{ title: "موالف فوري", body: "يدعم الضبط القياسي وDrop D وDADGAD والضبط المفتوح وGCEA والوضع الكروماتي مع عرض السنت والتردد والثبات." }, { title: "ميترونوم مرن", body: "من 20 إلى 500 BPM، ومن 1 إلى 12 نبضة، وTap Tempo، وتقسيمات، وSwing، ومؤقتات وزيادة تدريجية للسرعة. ويمكن للفلاش الخلفي إظهار جميع النبضات الرئيسية أو النبرات فقط بثلاث درجات." }, { title: "أوتار تفاعلية", body: "855 اسماً لكل آلة و19,244 وضعية إجمالاً؛ بدّل وحرّر وتعرّف واستمع، ثم احفظ بطاقة الوضعية الحالية أو شاركها." }],
  },
];

const latestUpdate: Record<string, { title: string; body: string; description: string; screenshotCaption: string }> = {
  "zh-hant": {
    "title": "機械花園與口袋爵士劇場",
    "body": "App Store 公開版本 1.1.5 已可下載。新增機械花園與口袋爵士劇場，各自可先預覽，再一次性購買，沒有訂閱。購買、恢復與取消的處理已改進；13 種語言與各螢幕布局有調整。iPad 在系統提供該尺寸時可使用橫向超大主畫面小工具。核心工具與四款基本外觀免費；Apple 端現有十二套獨立付費主題，素材內建。使用分析維持關閉，音訊不上傳。Google Play 公開版本仍是 Android／Wear OS 1.1.4，購買與 App Store 分開。直式超大小工具仍需 iOS 27+ 且由系統提供。",
    "description": "GuitarTool：App Store 1.1.5 已可下載，免費離線調音、節拍與和弦。機械花園與口袋爵士劇場為一次性購買。Google Play 公開版為 Android／Wear OS 1.1.4。無廣告、無使用分析。",
    "screenshotCaption": "1.1.4 商店主題圖。1.1.5 新增的機械花園與口袋爵士劇場未出現在這張較早的圖中。"
  },
  "es": {
    "title": "Jardín mecánico y Teatro de jazz de bolsillo",
    "body": "La versión pública de App Store es la 1.1.5. Añade Jardín mecánico y Teatro de jazz de bolsillo: se pueden previsualizar y comprar por separado, una sola vez, sin suscripción. Mejora compras, restauraciones y cancelaciones, el texto en 13 idiomas y los diseños. El iPad puede mostrar un widget horizontal extragrande cuando el sistema ofrece ese tamaño. Las herramientas y cuatro estilos básicos siguen gratis; en Apple hay doce temas de pago con recursos incluidos. Sin analítica de uso ni envío de audio. Google Play sigue mostrando Android y Wear OS 1.1.4, con compras separadas. El widget vertical extragrande requiere iOS 27+ cuando el sistema lo ofrece.",
    "description": "GuitarTool: App Store 1.1.5, afinador, metrónomo y acordes gratis sin conexión. Jardín mecánico y Teatro de jazz de bolsillo son compras únicas. Google Play muestra Android y Wear OS 1.1.4. Sin anuncios ni analítica.",
    "screenshotCaption": "Imagen de temas de la App Store 1.1.4. Jardín mecánico y Teatro de jazz de bolsillo, de la 1.1.5, no aparecen en esta imagen anterior."
  },
  "pt-br": {
    "title": "Jardim mecânico e Teatro de jazz de bolso",
    "body": "A versão pública da App Store é a 1.1.5. Ela adiciona Jardim mecânico e Teatro de jazz de bolso, com prévia e compra única separada, sem assinatura. Melhora compras, restaurações e cancelamentos, o texto em 13 idiomas e os layouts. O iPad pode ter um widget horizontal extragrande quando o sistema oferece esse tamanho. Ferramentas e quatro visuais básicos continuam grátis; na Apple há doze temas pagos com recursos incluídos. Sem análise de uso ou envio de áudio. O Google Play ainda lista Android e Wear OS 1.1.4, com compras separadas. O widget vertical extragrande exige iOS 27+ quando o sistema o oferece.",
    "description": "GuitarTool: App Store 1.1.5, afinador, metrônomo e acordes grátis offline. Jardim mecânico e Teatro de jazz de bolso são compras únicas. O Google Play lista Android e Wear OS 1.1.4. Sem anúncios nem análise.",
    "screenshotCaption": "Imagem de temas da App Store 1.1.4. Jardim mecânico e Teatro de jazz de bolso, da 1.1.5, não aparecem nesta imagem anterior."
  },
  "fr": {
    "title": "Jardin mécanique et Théâtre de jazz de poche",
    "body": "La version publique de l’App Store est la 1.1.5. Elle ajoute Jardin mécanique et Théâtre de jazz de poche, à prévisualiser puis acheter séparément, une seule fois, sans abonnement. Les achats, restaurations et annulations, les textes en 13 langues et les mises en page sont affinés. L’iPad peut proposer un widget horizontal extra-large lorsque le système offre cette taille. Les outils et quatre styles de base restent gratuits ; Apple compte douze thèmes payants aux ressources intégrées. Aucune analyse d’utilisation ni envoi audio. Google Play affiche toujours Android et Wear OS 1.1.4, avec des achats séparés. Le widget portrait extra-large demande iOS 27+ si le système le propose.",
    "description": "GuitarTool : App Store 1.1.5, accordeur, métronome et accords gratuits hors ligne. Jardin mécanique et Théâtre de jazz de poche sont des achats uniques. Google Play affiche Android et Wear OS 1.1.4. Sans publicité ni analyse.",
    "screenshotCaption": "Image des thèmes App Store 1.1.4. Jardin mécanique et Théâtre de jazz de poche, ajoutés en 1.1.5, n’y figurent pas."
  },
  "de": {
    "title": "Mechanischer Garten und Jazztheater im Taschenformat",
    "body": "Die öffentliche App-Store-Version ist 1.1.5. Sie ergänzt Mechanischer Garten und Jazztheater im Taschenformat zur Vorschau und als jeweils einmaligen Kauf ohne Abo. Käufe, Wiederherstellungen und Abbrüche, Texte in 13 Sprachen und Layouts wurden verfeinert. Das iPad kann ein extragroßes Querformat-Widget zeigen, wenn das System diese Größe anbietet. Werkzeuge und vier Basisdesigns bleiben kostenlos; bei Apple gibt es zwölf kostenpflichtige Themes mit enthaltenen Grafiken. Keine Nutzungsanalyse und keine Audio-Uploads. Google Play zeigt weiterhin Android und Wear OS 1.1.4 mit getrennten Käufen. Das extragroße Hochformat-Widget braucht iOS 27+, sofern das System es anbietet.",
    "description": "GuitarTool: App Store 1.1.5, kostenloses Offline-Stimmgerät, Metronom und Akkorde. Mechanischer Garten und Jazztheater im Taschenformat sind Einmalkäufe. Google Play zeigt Android und Wear OS 1.1.4. Keine Werbung oder Nutzungsanalyse.",
    "screenshotCaption": "Theme-Bild aus dem App Store 1.1.4. Mechanischer Garten und Jazztheater im Taschenformat aus 1.1.5 sind darauf nicht zu sehen."
  },
  "it": {
    "title": "Giardino meccanico e Teatro jazz tascabile",
    "body": "La versione pubblica dell’App Store è la 1.1.5. Aggiunge Giardino meccanico e Teatro jazz tascabile, con anteprima e acquisto una tantum separato, senza abbonamento. Migliora acquisti, ripristini e annullamenti, i testi in 13 lingue e i layout. L’iPad può mostrare un widget orizzontale extra-large quando il sistema offre quella dimensione. Gli strumenti e quattro stili di base restano gratis; su Apple ci sono dodici temi a pagamento con risorse incluse. Nessuna analisi di utilizzo o invio di audio. Google Play mostra ancora Android e Wear OS 1.1.4, con acquisti separati. Il widget verticale extra-large richiede iOS 27+ quando il sistema lo offre.",
    "description": "GuitarTool: App Store 1.1.5, accordatore, metronomo e accordi gratis offline. Giardino meccanico e Teatro jazz tascabile sono acquisti una tantum. Google Play mostra Android e Wear OS 1.1.4. Senza pubblicità né analisi.",
    "screenshotCaption": "Immagine dei temi per l’App Store 1.1.4. Giardino meccanico e Teatro jazz tascabile della 1.1.5 non compaiono in questa immagine precedente."
  },
  "ja": {
    "title": "からくりの庭とポケットジャズ劇場",
    "body": "App Storeの公開バージョンは1.1.5です。からくりの庭とポケットジャズ劇場を、購入前にプレビューできる個別の買い切りとして追加しました。サブスクリプションはありません。購入、復元、キャンセルの処理、13言語の文言、画面レイアウトを調整しています。iPadでは、システムがそのサイズを提供する場合に横向きの特大ホーム画面ウィジェットを使えます。基本ツールと4つの基本デザインは無料です。Apple版の有料テーマは12種類で、素材はアプリに含まれます。利用状況の分析や音声のアップロードは行いません。Google Playの公開版はAndroid／Wear OS 1.1.4のままで、購入はApp Storeと別です。特大縦型ウィジェットはiOS 27以降でシステムが提供する場合に使えます。",
    "description": "GuitarTool：App Store 1.1.5。無料のオフラインチューナー、メトロノーム、コード。からくりの庭とポケットジャズ劇場は買い切りです。Google Playの公開版はAndroid／Wear OS 1.1.4。広告と利用状況分析はありません。",
    "screenshotCaption": "1.1.4のApp Store用テーマ画像です。1.1.5で追加されたからくりの庭とポケットジャズ劇場はこの画像にはありません。"
  },
  "ko": {
    "title": "기계 정원과 포켓 재즈 극장",
    "body": "App Store 공개 버전은 1.1.5입니다. 기계 정원과 포켓 재즈 극장을 미리 본 뒤 각각 한 번만 구매할 수 있으며, 구독은 없습니다. 구매, 복원, 취소 처리와 13개 언어의 문구, 화면 레이아웃을 다듬었습니다. iPad는 시스템이 해당 크기를 제공할 때 가로 초대형 홈 화면 위젯을 쓸 수 있습니다. 핵심 도구와 기본 외관 4종은 무료이고, Apple에서는 유료 테마 12종이 앱에 포함됩니다. 사용 분석이나 오디오 업로드는 하지 않습니다. Google Play 공개 버전은 Android와 Wear OS 1.1.4이며 구매는 App Store와 별개입니다. 초대형 세로 위젯은 iOS 27 이상에서 시스템이 제공할 때 사용할 수 있습니다.",
    "description": "GuitarTool: App Store 1.1.5. 무료 오프라인 튜너, 메트로놈, 코드. 기계 정원과 포켓 재즈 극장은 일회 구매입니다. Google Play 공개 버전은 Android와 Wear OS 1.1.4입니다. 광고와 사용 분석은 없습니다.",
    "screenshotCaption": "1.1.4 App Store 테마 이미지입니다. 1.1.5의 기계 정원과 포켓 재즈 극장은 이 이전 이미지에 없습니다."
  },
  "ru": {
    "title": "Механический сад и Карманный джазовый театр",
    "body": "Публичная версия в App Store — 1.1.5. Добавлены Механический сад и Карманный джазовый театр: их можно посмотреть заранее и купить отдельно один раз, без подписки. Улучшены покупка, восстановление и отмена, тексты на 13 языках и макеты. На iPad может быть очень большой горизонтальный виджет, если система предлагает этот размер. Инструменты и четыре базовых оформления бесплатны; в Apple двенадцать платных тем с ресурсами в приложении. Аналитика использования отключена, звук не отправляется. В Google Play по-прежнему Android и Wear OS 1.1.4, покупки отдельно. Большой вертикальный виджет доступен на iOS 27+, если его предлагает система.",
    "description": "GuitarTool: App Store 1.1.5, бесплатные офлайн-тюнер, метроном и аккорды. Механический сад и Карманный джазовый театр покупаются один раз. В Google Play — Android и Wear OS 1.1.4. Без рекламы и аналитики.",
    "screenshotCaption": "Изображение тем App Store 1.1.4. Механический сад и Карманный джазовый театр из версии 1.1.5 на нём не показаны."
  },
  "tr": {
    "title": "Mekanik Bahçe ve Cep Caz Tiyatrosu",
    "body": "App Store’daki herkese açık sürüm 1.1.5’tir. Mekanik Bahçe ve Cep Caz Tiyatrosu önizlenebilir ve ayrı tek seferlik satın alımlardır; abonelik yoktur. Satın alma, geri yükleme ve iptal işlemleri, 13 dildeki metinler ve düzenler iyileştirildi. iPad, sistem bu boyutu sunduğunda yatay çok büyük bir ana ekran widget’ı kullanabilir. Temel araçlar ve dört görünüm ücretsizdir; Apple tarafında on iki ücretli tema uygulamaya dahildir. Kullanım analizi veya ses yükleme yoktur. Google Play hâlâ Android ve Wear OS 1.1.4’ü gösterir; satın almalar ayrıdır. Çok büyük dikey widget, sistem sunduğunda iOS 27+ gerektirir.",
    "description": "GuitarTool: App Store 1.1.5, ücretsiz çevrimdışı akort, metronom ve akorlar. Mekanik Bahçe ve Cep Caz Tiyatrosu tek seferlik satın alımdır. Google Play’de Android ve Wear OS 1.1.4 vardır. Reklam ve kullanım analizi yok.",
    "screenshotCaption": "1.1.4 App Store tema görseli. 1.1.5’teki Mekanik Bahçe ve Cep Caz Tiyatrosu bu eski görselde yoktur."
  },
  "ar": {
    "title": "الحديقة الميكانيكية ومسرح الجاز الصغير",
    "body": "الإصدار العام على App Store هو 1.1.5. أُضيفت الحديقة الميكانيكية ومسرح الجاز الصغير، ويمكن معاينتهما ثم شراء كل منهما مرة واحدة دون اشتراك. تحسّنت معالجة الشراء والاستعادة والإلغاء، ونصوص 13 لغة، وتخطيطات الشاشات. يمكن لـ iPad عرض أداة أفقية كبيرة جدًا عندما يتيح النظام هذا الحجم. تبقى الأدوات وأربعة مظاهر أساسية مجانية؛ ويضم إصدار Apple اثني عشر مظهرًا مدفوعًا بموارد مضمّنة. لا تحليلات استخدام ولا رفع للصوت. ما زال Google Play يعرض Android وWear OS 1.1.4، والمشتريات منفصلة. الأداة الرأسية الكبيرة تتطلب iOS 27+ عندما يتيحها النظام.",
    "description": "GuitarTool: الإصدار 1.1.5 على App Store، موالف وميترونوم وأوتار مجانية دون اتصال. الحديقة الميكانيكية ومسرح الجاز الصغير مشتريات لمرة واحدة. يعرض Google Play إصدار Android وWear OS 1.1.4. بلا إعلانات أو تحليلات.",
    "screenshotCaption": "صورة مظاهر من App Store 1.1.4. الحديقة الميكانيكية ومسرح الجاز الصغير من الإصدار 1.1.5 غير ظاهرين في هذه الصورة الأقدم."
  }
};

export const localePages: LocalePage[] = localePageTemplates.map((page) => ({
  ...page,
  description: latestUpdate[page.slug].description,
  versionUpdate: {
    label: page.releaseLabel.replace(/\d+\.\d+\.\d+/, releaseVersion),
    ...latestUpdate[page.slug],
  },
}));

export function getLocalePage(slug: string) { return localePages.find((page) => page.slug === slug); }
