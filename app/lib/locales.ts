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
  versionUpdate: { label: string; title: string; body: string };
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

const latestUpdate: Record<string, { title: string; body: string; description: string }> = {
  "zh-hant": {
    "title": "靜音小節、分段提速與玄玉聲場",
    "body": "1.1.2 新增有聲與靜音小節交替、按小節分段調速，設定可存為自訂方案。改善音訊中斷、裝置切換、大字體與從右至左介面。玄玉聲場加入主題展廳；四款基礎外觀免費，七套完整主題各自一次性購買。",
    "description": "免費離線調音器、節拍器與和弦庫。1.1.2 加入靜音小節、分段速度訓練及玄玉聲場；七套完整主題可單獨購買。"
  },
  "es": {
    "title": "Compases en silencio, etapas de tempo y Jade Resonance",
    "body": "La versión 1.1.2 alterna compases con sonido y en silencio, permite programar etapas de tempo por compases y guardar la configuración. Mejora las interrupciones de audio, los cambios de dispositivo, el texto grande y las interfaces de derecha a izquierda. Jade Resonance se une a la galería: cuatro estilos básicos gratis y siete temas completos, cada uno con una compra única.",
    "description": "Afinador, metrónomo y acordes gratis y sin conexión. La versión 1.1.2 añade compases en silencio, etapas de tempo y Jade Resonance. Siete temas de compra individual."
  },
  "pt-br": {
    "title": "Compassos silenciosos, etapas de andamento e Jade Resonance",
    "body": "A versão 1.1.2 alterna compassos sonoros e silenciosos, define etapas de andamento por compassos e salva a configuração. Melhora interrupções de áudio, troca de dispositivos, texto grande e interfaces da direita para a esquerda. Jade Resonance chega à galeria: quatro visuais básicos grátis e sete temas completos, cada um com compra única.",
    "description": "Afinador, metrônomo e acordes grátis e offline. A versão 1.1.2 traz compassos silenciosos, etapas de andamento e Jade Resonance. Sete temas vendidos separadamente."
  },
  "fr": {
    "title": "Mesures silencieuses, paliers de tempo et Jade Resonance",
    "body": "La version 1.1.2 alterne mesures sonores et silencieuses, programme des paliers de tempo par mesure et enregistre vos réglages. Elle améliore les interruptions audio, les changements d’appareil, le texte agrandi et les interfaces de droite à gauche. Jade Resonance rejoint la galerie : quatre styles de base gratuits et sept thèmes complets, chacun en achat unique.",
    "description": "Accordeur, métronome et accords gratuits hors ligne. La version 1.1.2 ajoute mesures silencieuses, paliers de tempo et Jade Resonance. Sept thèmes vendus séparément."
  },
  "de": {
    "title": "Stumme Takte, Tempostufen und Jade Resonance",
    "body": "Version 1.1.2 wechselt zwischen hörbaren und stummen Takten, plant Tempostufen nach Taktzahl und speichert die Einstellungen. Audio-Unterbrechungen, Gerätewechsel, große Schrift und Rechts-nach-links-Ansichten wurden verbessert. Jade Resonance ergänzt die Galerie: vier kostenlose Basisdesigns und sieben vollständige Themes mit jeweils einmaligem Kauf.",
    "description": "Kostenloses Offline-Stimmgerät, Metronom und Akkorde. Version 1.1.2 bringt stumme Takte, Tempostufen und Jade Resonance. Sieben Themes sind einzeln erhältlich."
  },
  "it": {
    "title": "Battute silenziose, fasi di tempo e Jade Resonance",
    "body": "La versione 1.1.2 alterna battute sonore e silenziose, imposta fasi di tempo per numero di battute e salva le configurazioni. Migliora interruzioni audio, cambi di dispositivo, testo grande e interfacce da destra a sinistra. Jade Resonance entra nella galleria: quattro stili base gratuiti e sette temi completi, ciascuno con un acquisto unico.",
    "description": "Accordatore, metronomo e accordi gratuiti offline. La versione 1.1.2 aggiunge battute silenziose, fasi di tempo e Jade Resonance. Sette temi acquistabili separatamente."
  },
  "ja": {
    "title": "無音小節、段階的なテンポ練習、Jade Resonance",
    "body": "1.1.2 では音のある小節と無音小節を交互に再生し、小節数に応じたテンポの段階を設定してプリセットに保存できます。音声の中断、機器の切り替え、大きな文字、右から左への表示も改善。Jade Resonance が加わり、基本テーマ4種類は無料、フルテーマ7種類はそれぞれ買い切りです。",
    "description": "無料のオフラインチューナー、メトロノーム、コードライブラリ。1.1.2 は無音小節、段階的テンポ練習、Jade Resonance に対応。7種類のフルテーマは個別購入。"
  },
  "ko": {
    "title": "무음 마디, 단계별 템포와 Jade Resonance",
    "body": "1.1.2에서는 소리가 나는 마디와 무음 마디를 번갈아 재생하고, 마디 수에 따라 단계별 템포를 설정해 프리셋으로 저장할 수 있습니다. 오디오 중단, 기기 전환, 큰 글씨와 오른쪽에서 왼쪽으로 쓰는 화면도 개선했습니다. Jade Resonance가 추가되어 기본 테마 4종은 무료, 전체 테마 7종은 각각 일회성 구매로 이용합니다.",
    "description": "무료 오프라인 튜너, 메트로놈과 코드 라이브러리. 1.1.2는 무음 마디, 단계별 템포 연습과 Jade Resonance를 제공합니다. 전체 테마 7종은 개별 구매입니다."
  },
  "ru": {
    "title": "Тихие такты, этапы темпа и Jade Resonance",
    "body": "Версия 1.1.2 чередует звучащие и тихие такты, задаёт этапы темпа по числу тактов и сохраняет настройки. Улучшены прерывания аудио, смена устройств, крупный текст и интерфейс справа налево. В галерее появилась Jade Resonance: четыре базовых оформления бесплатны, семь полных тем приобретаются отдельно разовым платежом.",
    "description": "Бесплатные офлайн-тюнер, метроном и аккорды. Версия 1.1.2 добавляет тихие такты, этапы темпа и Jade Resonance. Семь полных тем покупаются отдельно."
  },
  "tr": {
    "title": "Sessiz ölçüler, tempo aşamaları ve Jade Resonance",
    "body": "1.1.2 sürümü sesli ve sessiz ölçüleri dönüşümlü çalar, ölçü sayısına göre tempo aşamaları belirler ve ayarları kaydeder. Ses kesintileri, cihaz değişimi, büyük metin ve sağdan sola arayüzler iyileştirildi. Jade Resonance galeriye katıldı: dört temel görünüm ücretsiz, yedi tam temanın her biri tek seferlik ayrı satın alınır.",
    "description": "Ücretsiz çevrimdışı akort cihazı, metronom ve akorlar. 1.1.2 sessiz ölçüler, tempo aşamaları ve Jade Resonance ekler. Yedi tam tema ayrı satılır."
  },
  "ar": {
    "title": "موازير صامتة ومراحل سرعة وJade Resonance",
    "body": "يتيح الإصدار 1.1.2 التناوب بين الموازير المسموعة والصامتة، وتحديد مراحل السرعة بعدد الموازير وحفظ الإعدادات. يحسّن انقطاع الصوت وتبديل الأجهزة والنص الكبير والواجهات من اليمين إلى اليسار. ينضم Jade Resonance إلى المعرض: أربعة مظاهر أساسية مجانية وسبعة مظاهر كاملة، يُشترى كل منها مرة واحدة بشكل مستقل.",
    "description": "موالف وميترونوم وأوتار مجانية دون اتصال. يضيف الإصدار 1.1.2 موازير صامتة ومراحل سرعة وJade Resonance. سبعة مظاهر كاملة تُباع منفصلة."
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
