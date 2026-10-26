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
    "title": "三套新主題，練習更穩定",
    "body": "1.1.4 已上架：新增布偶練習室、怪獸排練室與失重馬戲團三套獨立一次性付費主題。改善調音與輸入中斷恢復、節拍變速與倒數、和弦選擇試聽分享，以及啟動時的主題恢復。核心工具與四款基本外觀免費；十套完整主題分別購買、素材內建。本版停用使用分析，不上傳音訊。支援 iPhone、iPad 與 Apple Watch；超大直式小工具需 iOS 27+ 且由系統提供。",
    "description": "GuitarTool 1.1.4：免費離線調音器、節拍器與和弦庫，三套新主題、十套獨立內購，無廣告、不收集使用分析。",
    "screenshotCaption": "1.1.4 App Store 主題預覽；完整主題分別購買。"
  },
  "es": {
    "title": "Tres temas nuevos y práctica más fiable",
    "body": "La versión 1.1.4 ya está disponible. Añade Plush Practice Room, Oddball Rehearsal y Zero Gravity Circus, cada uno como compra única independiente. Mejora la afinación, la recuperación de audio, los cambios de tempo, la cuenta atrás, los acordes y la restauración del tema al iniciar. Herramientas y cuatro estilos básicos gratis; diez temas de compra individual con recursos incluidos. Sin analítica de uso ni envío de audio. iPhone, iPad y Apple Watch; widget vertical extragrande en iOS 27+ cuando el sistema lo ofrece.",
    "description": "GuitarTool 1.1.4: afinador, metrónomo y acordes gratis sin conexión, tres temas nuevos y diez temas de compra individual. Sin anuncios ni analítica de uso.",
    "screenshotCaption": "Vista de temas para App Store 1.1.4; los temas completos se compran por separado."
  },
  "pt-br": {
    "title": "Três novos temas e prática mais estável",
    "body": "A versão 1.1.4 está disponível. Plush Practice Room, Oddball Rehearsal e Zero Gravity Circus são novas compras únicas separadas. Melhorias na afinação, recuperação de áudio, mudanças de andamento, contagem regressiva, acordes e restauração do tema ao abrir. Ferramentas e quatro visuais básicos grátis; dez temas individuais com recursos incluídos. Sem análise de uso ou envio de áudio. iPhone, iPad e Apple Watch; widget vertical extragrande no iOS 27+ quando oferecido pelo sistema.",
    "description": "GuitarTool 1.1.4: afinador, metrônomo e acordes grátis offline, três novos temas e dez temas vendidos separadamente. Sem anúncios nem análise de uso.",
    "screenshotCaption": "Prévia de temas da App Store 1.1.4; temas completos vendidos separadamente."
  },
  "fr": {
    "title": "Trois nouveaux thèmes, une pratique plus stable",
    "body": "La version 1.1.4 est disponible. Plush Practice Room, Oddball Rehearsal et Zero Gravity Circus sont trois nouveaux achats uniques séparés. L’accordage, la reprise audio, les changements de tempo, le compte à rebours, les accords et la restauration du thème au lancement sont améliorés. Outils et quatre styles gratuits ; dix thèmes individuels aux ressources intégrées. Aucune analyse d’utilisation ni transmission audio. iPhone, iPad et Apple Watch ; widget portrait extra-large sur iOS 27+ si le système le propose.",
    "description": "GuitarTool 1.1.4 : accordeur, métronome et accords gratuits hors ligne, trois nouveaux thèmes et dix thèmes individuels. Sans publicité ni analyse d’utilisation.",
    "screenshotCaption": "Aperçu des thèmes pour l’App Store 1.1.4 ; thèmes complets vendus séparément."
  },
  "de": {
    "title": "Drei neue Themes, zuverlässiger üben",
    "body": "Version 1.1.4 ist verfügbar. Plush Practice Room, Oddball Rehearsal und Zero Gravity Circus sind neue, separate Einmalkäufe. Verbessert wurden Stimmung, Audio-Wiederaufnahme, Tempowechsel, Countdown, Akkorde und das Wiederherstellen des Themes beim Start. Tools und vier Basisdesigns bleiben kostenlos; zehn Themes sind einzeln erhältlich, alle Grafiken enthalten. Keine Nutzungsanalyse oder Audio-Uploads. iPhone, iPad und Apple Watch; extragroßes Hochformat-Widget ab iOS 27, sofern vom System angeboten.",
    "description": "GuitarTool 1.1.4: kostenloses Offline-Stimmgerät, Metronom und Akkorde, drei neue Themes, zehn separate Einmalkäufe. Keine Werbung oder Nutzungsanalyse.",
    "screenshotCaption": "Theme-Vorschau für App Store 1.1.4; vollständige Themes werden separat gekauft."
  },
  "it": {
    "title": "Tre nuovi temi, esercizi più affidabili",
    "body": "La versione 1.1.4 è disponibile. Plush Practice Room, Oddball Rehearsal e Zero Gravity Circus sono tre acquisti una tantum separati. Migliora accordatura, ripresa audio, cambi di tempo, conto alla rovescia, accordi e ripristino del tema all’avvio. Strumenti e quattro stili gratuiti; dieci temi individuali con risorse incluse. Nessuna analisi di utilizzo o invio di audio. iPhone, iPad e Apple Watch; widget verticale extra-large su iOS 27+ quando offerto dal sistema.",
    "description": "GuitarTool 1.1.4: accordatore, metronomo e accordi gratis offline, tre nuovi temi e dieci temi acquistabili separatamente. Senza pubblicità né analisi di utilizzo.",
    "screenshotCaption": "Anteprima dei temi per App Store 1.1.4; temi completi acquistabili separatamente."
  },
  "ja": {
    "title": "3つの新テーマで、もっと安定した練習を",
    "body": "1.1.4を公開しました。Plush Practice Room、Oddball Rehearsal、Zero Gravity Circusが、それぞれ個別の買い切りテーマとして登場。チューニング、音声入力の中断後の復帰、テンポ変更、カウントダウン、コードの選択・再生・共有、起動時のテーマ復元を改善しました。基本ツールと4つの基本デザインは無料。全10テーマの素材は同梱され、個別購入で使えます。利用状況の分析や音声のアップロードは行いません。iPhone、iPad、Apple Watch対応。特大縦型ウィジェットはiOS 27以降でシステムが提供する場合に利用できます。",
    "description": "GuitarTool 1.1.4：無料のオフラインチューナー、メトロノーム、コード。3つの新テーマ、全10種の個別購入テーマ。広告・利用状況分析なし。",
    "screenshotCaption": "1.1.4のApp Store用テーマ紹介画像。完全テーマは個別購入です。"
  },
  "ko": {
    "title": "새로운 테마 3종과 더 안정적인 연습",
    "body": "1.1.4가 출시되었습니다. Plush Practice Room, Oddball Rehearsal, Zero Gravity Circus가 각각 일회성 개별 구매로 추가되었습니다. 튜닝, 오디오 중단 복구, 템포 변경, 카운트다운, 코드 선택·재생·공유와 시작 시 테마 복원을 개선했습니다. 핵심 도구와 기본 외관 4종은 무료이며, 전체 테마 10종은 개별 구매입니다. 테마 리소스는 앱에 포함됩니다. 사용 분석이나 오디오 업로드를 하지 않습니다. iPhone, iPad, Apple Watch 지원. 초대형 세로 위젯은 iOS 27 이상에서 시스템이 제공하는 경우 사용할 수 있습니다.",
    "description": "GuitarTool 1.1.4: 무료 오프라인 튜너, 메트로놈, 코드. 새 테마 3종과 개별 구매 테마 총 10종. 광고 및 사용 분석 없음.",
    "screenshotCaption": "1.1.4 App Store 테마 미리보기. 전체 테마는 개별 구매입니다."
  },
  "ru": {
    "title": "Три новые темы и более стабильная практика",
    "body": "Версия 1.1.4 доступна. Plush Practice Room, Oddball Rehearsal и Zero Gravity Circus приобретаются отдельно одним платежом. Улучшены настройка, восстановление аудио, смена темпа, таймер, выбор, воспроизведение и отправка аккордов, восстановление темы при запуске. Инструменты и четыре базовых оформления бесплатны; десять тем покупаются отдельно, ресурсы уже в приложении. Аналитика использования отключена, звук не отправляется. iPhone, iPad и Apple Watch; большой вертикальный виджет на iOS 27+, если его предлагает система.",
    "description": "GuitarTool 1.1.4: бесплатные офлайн-тюнер, метроном и аккорды, три новые темы, десять отдельных покупок. Без рекламы и аналитики использования.",
    "screenshotCaption": "Изображение тем для App Store 1.1.4; полные темы покупаются отдельно."
  },
  "tr": {
    "title": "Üç yeni tema, daha kararlı alıştırma",
    "body": "1.1.4 yayımlandı. Plush Practice Room, Oddball Rehearsal ve Zero Gravity Circus ayrı tek seferlik satın alımlar olarak eklendi. Akort, ses kesintisinden dönüş, tempo değişimi, geri sayım, akor seçimi, çalma ve paylaşma ile açılışta tema geri yükleme iyileştirildi. Temel araçlar ve dört görünüm ücretsiz; on tema ayrı satılır ve görseller uygulamaya dahildir. Kullanım analizi veya ses yükleme yoktur. iPhone, iPad ve Apple Watch desteklenir; çok büyük dikey widget iOS 27+ üzerinde sistem sunduğunda kullanılabilir.",
    "description": "GuitarTool 1.1.4: ücretsiz çevrimdışı akort, metronom ve akorlar, üç yeni tema ve ayrı satılan on tema. Reklam ve kullanım analizi yok.",
    "screenshotCaption": "1.1.4 App Store tema ön izlemesi; tam temalar ayrı satın alınır."
  },
  "ar": {
    "title": "ثلاثة مظاهر جديدة وتمرين أكثر ثباتًا",
    "body": "الإصدار 1.1.4 متاح الآن. أُضيفت Plush Practice Room وOddball Rehearsal وZero Gravity Circus كمشتريات منفصلة لمرة واحدة. تحسّن الضبط واستعادة الصوت بعد الانقطاع وتغيير السرعة والعد التنازلي واختيار الأوتار وتشغيلها ومشاركتها واستعادة المظهر عند التشغيل. الأدوات وأربعة مظاهر أساسية مجانية؛ عشرة مظاهر كاملة تُشترى منفصلة ومواردها مضمّنة. لا تحليلات استخدام ولا رفع للصوت. يدعم iPhone وiPad وApple Watch؛ الأداة الرأسية الكبيرة متاحة في iOS 27+ عندما يتيحها النظام.",
    "description": "GuitarTool 1.1.4: موالف وميترونوم وأوتار مجانية دون اتصال، ثلاثة مظاهر جديدة وعشرة مشتريات منفصلة. بلا إعلانات أو تحليلات استخدام.",
    "screenshotCaption": "معاينة المظاهر لمتجر App Store للإصدار 1.1.4؛ المظاهر الكاملة تُشترى منفصلة."
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
