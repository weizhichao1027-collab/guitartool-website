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
    "title": "離線中文人聲數拍，速度輸入更順手",
    "body": "1.1.3 新增離線中文人聲數拍，按目前 BPM 試聽；所有介面語言皆使用中文人聲。修正速度輸入的完成與取消、預設目標速度同步及音訊中斷後的漸進提速恢復。iOS 27+ 在系統提供時可用超大直式小工具，並改善大字體訓練及計時穩定性。核心功能及四款基本外觀免費，七套完整主題分別購買。",
    "description": "GuitarTool 1.1.3：免費離線調音器、節拍器與和弦庫，新增中文人聲數拍、BPM 試聽及 iOS 27+ 超大直式小工具。",
    "screenshotCaption": "1.1.2 節奏訓練商店預覽，沿用於目前版本；未展示新增人聲或超大直式小工具。"
  },
  "es": {
    "title": "Cuenta los pulsos con voz china sin conexión",
    "body": "La versión 1.1.3 añade conteo en chino sin conexión y una prueba al BPM actual, independientemente del idioma de la interfaz. Corrige confirmar y cancelar BPM, sincronizar el tempo objetivo de los ajustes y recuperar el aumento gradual tras interrupciones. En iOS 27+ hay un widget vertical extragrande cuando el sistema lo ofrece. Mejora el texto grande y el temporizador. Herramientas y cuatro estilos básicos gratis; siete temas de compra individual.",
    "description": "GuitarTool 1.1.3: afinador, metrónomo y acordes gratis sin conexión, conteo en chino, prueba de BPM y widget vertical extragrande en iOS 27+.",
    "screenshotCaption": "Vista de entrenamiento de la versión 1.1.2 reutilizada en la tienda actual; no muestra la voz ni el nuevo widget."
  },
  "pt-br": {
    "title": "Contagem em chinês offline e controle de BPM",
    "body": "A versão 1.1.3 traz contagem em chinês offline e prévia no BPM atual, em qualquer idioma da interface. Corrige confirmar e cancelar BPM, sincronizar o andamento-alvo dos presets e retomar a aceleração gradual após interrupções. No iOS 27+, o widget vertical extragrande aparece quando oferecido pelo sistema. Melhora texto grande e temporizador. Ferramentas e quatro visuais básicos grátis; sete temas vendidos separadamente.",
    "description": "GuitarTool 1.1.3: afinador, metrônomo e acordes grátis offline, contagem em chinês, prévia de BPM e widget vertical extragrande no iOS 27+.",
    "screenshotCaption": "Prévia de treino da versão 1.1.2 reutilizada na loja atual; não mostra a voz ou o novo widget."
  },
  "fr": {
    "title": "Comptez les temps en chinois, hors ligne",
    "body": "La version 1.1.3 ajoute un comptage vocal en chinois hors ligne, avec écoute au BPM actuel, quelle que soit la langue de l’interface. Elle corrige la validation et l’annulation du BPM, la synchronisation du tempo cible des préréglages et la reprise de l’accélération après interruption. Un widget portrait extra-large est disponible sur iOS 27+ lorsque le système le propose. Texte agrandi et minuteur améliorés. Outils et quatre styles gratuits ; sept thèmes vendus séparément.",
    "description": "GuitarTool 1.1.3 : accordeur, métronome et accords gratuits hors ligne, comptage en chinois, écoute au BPM choisi et widget portrait sur iOS 27+.",
    "screenshotCaption": "Aperçu d’entraînement 1.1.2 réutilisé dans la fiche actuelle ; il ne montre ni la voix ni le nouveau widget."
  },
  "de": {
    "title": "Chinesisches Zählen offline und direkte BPM-Vorschau",
    "body": "Version 1.1.3 bietet chinesisches Zählen offline mit Vorschau im aktuellen BPM, unabhängig von der Sprache der Oberfläche. Bestätigen und Abbrechen der BPM-Eingabe, Zieltempo der Presets und die Fortsetzung der schrittweisen Beschleunigung nach Unterbrechungen wurden korrigiert. Ab iOS 27 gibt es ein extragroßes Hochformat-Widget, wenn das System es anbietet. Große Schrift und Timer sind verbessert. Tools und vier Basisdesigns kostenlos; sieben Themes einzeln erhältlich.",
    "description": "GuitarTool 1.1.3: kostenloses Offline-Stimmgerät, Metronom und Akkorde mit chinesischem Zählen, BPM-Vorschau und Hochformat-Widget ab iOS 27.",
    "screenshotCaption": "Trainingsvorschau aus 1.1.2, im aktuellen Store weiterverwendet; Stimme und neues Widget sind nicht abgebildet."
  },
  "it": {
    "title": "Conta i battiti in cinese, anche offline",
    "body": "La versione 1.1.3 aggiunge il conteggio vocale in cinese offline con anteprima al BPM attuale, in qualsiasi lingua dell’interfaccia. Corregge conferma e annullamento del BPM, sincronizzazione del tempo obiettivo dei preset e ripresa dell’accelerazione dopo interruzioni. Su iOS 27+ è disponibile un widget verticale extra-large quando il sistema lo propone. Migliora testo grande e timer. Strumenti e quattro stili gratuiti; sette temi acquistabili separatamente.",
    "description": "GuitarTool 1.1.3: accordatore, metronomo e accordi gratis offline, conteggio in cinese, anteprima BPM e widget verticale extra-large su iOS 27+.",
    "screenshotCaption": "Anteprima di allenamento 1.1.2 riutilizzata nella scheda attuale; non mostra la voce o il nuovo widget."
  },
  "ja": {
    "title": "中国語の音声カウントをオフラインで",
    "body": "1.1.3 は中国語の音声カウントを追加し、現在の BPM で試聴できます。表示言語に関係なく音声は中国語です。BPM 入力の確定とキャンセル、プリセットの目標テンポ同期、中断後の段階的な加速再開を修正。iOS 27 以降ではシステムが提供する場合に特大の縦型ウィジェットを利用できます。大きな文字とタイマーも改善。基本機能と4つの基本テーマは無料、7つのフルテーマは個別購入です。",
    "description": "GuitarTool 1.1.3：無料のオフラインチューナー、メトロノーム、コード。中国語の音声カウントと BPM 試聴、iOS 27 以降の特大縦型ウィジェット。",
    "screenshotCaption": "現在のストアでも使われる 1.1.2 の練習画面です。新しい音声や特大ウィジェットは表示されていません。"
  },
  "ko": {
    "title": "오프라인 중국어 박자 세기와 BPM 미리 듣기",
    "body": "1.1.3은 현재 BPM으로 미리 들을 수 있는 오프라인 중국어 박자 세기를 추가합니다. 인터페이스 언어와 관계없이 음성은 중국어입니다. BPM 확인·취소, 프리셋 목표 속도 동기화와 오디오 중단 후 점진적 가속 복구를 수정했습니다. iOS 27 이상에서는 시스템이 제공할 때 초대형 세로 위젯을 사용할 수 있습니다. 큰 글씨와 타이머도 개선했습니다. 기본 도구와 4가지 기본 테마는 무료이며 전체 테마 7종은 개별 구매입니다.",
    "description": "GuitarTool 1.1.3: 무료 오프라인 튜너, 메트로놈, 코드와 중국어 박자 세기, BPM 미리 듣기, iOS 27 이상 초대형 세로 위젯.",
    "screenshotCaption": "현재 스토어에서도 사용하는 1.1.2 연습 미리보기이며 새 음성이나 초대형 위젯은 표시되지 않습니다."
  },
  "ru": {
    "title": "Счёт на китайском офлайн и прослушивание BPM",
    "body": "Версия 1.1.3 добавляет голосовой счёт на китайском офлайн и прослушивание в текущем BPM при любом языке интерфейса. Исправлены подтверждение и отмена BPM, синхронизация целевого темпа пресетов и восстановление постепенного ускорения после прерываний. На iOS 27+ доступен сверхбольшой вертикальный виджет, если его предлагает система. Улучшены крупный текст и таймер. Инструменты и четыре базовых оформления бесплатны; семь тем покупаются отдельно.",
    "description": "GuitarTool 1.1.3: бесплатные офлайн-тюнер, метроном и аккорды, счёт на китайском, прослушивание BPM и вертикальный виджет на iOS 27+.",
    "screenshotCaption": "Предпросмотр тренировки 1.1.2, используемый и в текущем магазине; новая озвучка и виджет не показаны."
  },
  "tr": {
    "title": "Çevrimdışı Çince sayım ve BPM ön dinlemesi",
    "body": "1.1.3, arayüz dilinden bağımsız olarak mevcut BPM’de ön dinlemeli çevrimdışı Çince vuruş sayımı ekler. BPM onaylama ve iptal, ön ayar hedef temposu eşitleme ve kesinti sonrası kademeli hızlanmaya devam etme düzeltilmiştir. iOS 27+ üzerinde sistem sunduğunda çok büyük dikey widget kullanılabilir. Büyük metin ve zamanlayıcı iyileştirildi. Araçlar ve dört temel görünüm ücretsizdir; yedi tema ayrı satın alınır.",
    "description": "GuitarTool 1.1.3: ücretsiz çevrimdışı akort, metronom ve akorlar, Çince sayım, BPM ön dinlemesi ve iOS 27+ büyük dikey widget.",
    "screenshotCaption": "Mevcut mağazada da kullanılan 1.1.2 alıştırma ön izlemesi; yeni ses veya widget gösterilmez."
  },
  "ar": {
    "title": "عدّ صوتي بالصينية دون اتصال ومعاينة السرعة",
    "body": "يضيف الإصدار 1.1.3 عدًّا صوتيًا بالصينية دون اتصال ومعاينة بسرعة BPM الحالية مهما كانت لغة الواجهة. يصحّح تأكيد السرعة وإلغاءها ومزامنة سرعة الإعدادات المسبقة واستئناف التسارع التدريجي بعد انقطاع الصوت. في iOS 27+ تتوفر أداة رأسية كبيرة جدًا عندما يتيحها النظام. تحسّنت النصوص الكبيرة والمؤقت. الأدوات وأربعة مظاهر أساسية مجانية؛ سبعة مظاهر كاملة تُشترى منفصلة.",
    "description": "GuitarTool 1.1.3: موالف وميترونوم وأوتار مجانية دون اتصال، عدّ بالصينية ومعاينة BPM وأداة رأسية كبيرة في iOS 27+.",
    "screenshotCaption": "معاينة التدريب من 1.1.2 المعاد استخدامها في المتجر الحالي؛ لا تعرض الصوت أو الأداة الجديدة."
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
