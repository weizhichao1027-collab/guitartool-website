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
  closing: string;
};

export const localePages: LocalePage[] = [
  {
    slug: "zh-hant", htmlLang: "zh-Hant", title: "GuitarTool｜調音器、節拍器與和弦庫", description: "為吉他與烏克麗麗打造的離線練習工具：精準調音、20–500 BPM 節拍器、19,244 個指法，無廣告、無需帳戶。", eyebrow: "專注練習所需的一切", headline: "調音、跟拍、找和弦，全部離線完成。", lead: "GuitarTool 把即時調音器、彈性節拍器與吉他／烏克麗麗和弦庫放在同一個安靜、清楚的練習流程中。", download: "在 App Store 免費下載", trust: ["完全離線", "無廣告", "無需帳戶"], closing: "拿起樂器就能開始，不讓工具打斷練習。",
    features: [{ title: "即時調音器", body: "支援多種吉他調弦、High-G／Low-G GCEA 與半音階模式，顯示音分、頻率、輸入強度及穩定度。" }, { title: "彈性節拍器", body: "20–500 BPM、1–12 拍、TAP 測速、細分、Swing、計時器及漸進加速。" }, { title: "雙樂器和弦庫", body: "吉他與烏克麗麗各有 855 個名稱，共 19,244 個指法，可切換把位、編輯、辨識並試聽。" }],
  },
  {
    slug: "es", htmlLang: "es", title: "GuitarTool | Afinador, metrónomo y acordes", description: "Herramientas de práctica sin conexión para guitarra y ukelele: afinador preciso, metrónomo de 20–500 BPM y 19.244 digitaciones. Sin anuncios ni cuenta.", eyebrow: "TODO PARA UNA PRÁCTICA CONCENTRADA", headline: "Afina, marca el pulso y encuentra acordes sin conexión.", lead: "GuitarTool reúne un afinador en tiempo real, un metrónomo flexible y bibliotecas profundas de acordes de guitarra y ukelele en una sola aplicación tranquila y clara.", download: "Descargar gratis en App Store", trust: ["Funciona sin conexión", "Sin anuncios", "Sin cuenta"], closing: "Abre la aplicación, toma el instrumento y empieza a practicar.",
    features: [{ title: "Afinador en tiempo real", body: "Afinaciones estándar, Drop D, DADGAD, abiertas, GCEA y modo cromático, con cents, frecuencia, intensidad y estabilidad." }, { title: "Metrónomo flexible", body: "20–500 BPM, de 1 a 12 pulsos, Tap Tempo, subdivisiones, swing, temporizadores y aumento progresivo del tempo." }, { title: "Acordes interactivos", body: "855 nombres para cada instrumento y 19.244 digitaciones en total, con varias posiciones, edición, identificación y reproducción." }],
  },
  {
    slug: "pt-br", htmlLang: "pt-BR", title: "GuitarTool | Afinador, metrônomo e acordes", description: "Ferramentas offline para violão, guitarra e ukulele: afinador preciso, metrônomo de 20–500 BPM e 19.244 digitações. Sem anúncios ou conta.", eyebrow: "TUDO PARA UMA PRÁTICA FOCADA", headline: "Afine, mantenha o tempo e encontre acordes offline.", lead: "O GuitarTool reúne afinador em tempo real, metrônomo flexível e bibliotecas completas de acordes de guitarra e ukulele em um fluxo simples e tranquilo.", download: "Baixar grátis na App Store", trust: ["Totalmente offline", "Sem anúncios", "Sem conta"], closing: "Pegue o instrumento e comece: a ferramenta fica em segundo plano.",
    features: [{ title: "Afinador em tempo real", body: "Afinações padrão, Drop D, DADGAD, abertas, GCEA e modo cromático, com cents, frequência, intensidade e estabilidade." }, { title: "Metrônomo flexível", body: "20–500 BPM, 1–12 tempos, Tap Tempo, subdivisões, swing, temporizadores e aumento progressivo de andamento." }, { title: "Acordes interativos", body: "855 nomes para cada instrumento e 19.244 digitações no total, com posições alternativas, edição, identificação e reprodução." }],
  },
  {
    slug: "fr", htmlLang: "fr", title: "GuitarTool | Accordeur, métronome et accords", description: "Outils de pratique hors ligne pour guitare et ukulélé : accordeur précis, métronome 20–500 BPM et 19 244 doigtés. Sans publicité ni compte.", eyebrow: "TOUT POUR UNE PRATIQUE CONCENTRÉE", headline: "Accordez, gardez le tempo et trouvez vos accords hors ligne.", lead: "GuitarTool réunit un accordeur en temps réel, un métronome flexible et de riches bibliothèques d’accords de guitare et d’ukulélé dans une seule application claire.", download: "Télécharger gratuitement", trust: ["Entièrement hors ligne", "Sans publicité", "Sans compte"], closing: "Prenez l’instrument et commencez : l’outil sait rester discret.",
    features: [{ title: "Accordeur en temps réel", body: "Accordages standard, Drop D, DADGAD, ouverts, GCEA et mode chromatique, avec cents, fréquence, niveau et stabilité." }, { title: "Métronome flexible", body: "20–500 BPM, 1 à 12 temps, Tap Tempo, subdivisions, swing, minuteries et accélération progressive." }, { title: "Accords interactifs", body: "855 noms par instrument et 19 244 doigtés au total, avec plusieurs positions, édition, identification et écoute." }],
  },
  {
    slug: "de", htmlLang: "de", title: "GuitarTool | Stimmgerät, Metronom & Akkorde", description: "Offline-Übungswerkzeuge für Gitarre und Ukulele: präzises Stimmgerät, Metronom mit 20–500 BPM und 19.244 Griffe. Ohne Werbung oder Konto.", eyebrow: "ALLES FÜR KONZENTRIERTES ÜBEN", headline: "Stimmen, Tempo halten und Akkorde finden – komplett offline.", lead: "GuitarTool verbindet Echtzeit-Stimmgerät, flexibles Metronom und umfangreiche Akkordbibliotheken für Gitarre und Ukulele in einer ruhigen, klaren App.", download: "Kostenlos im App Store laden", trust: ["Vollständig offline", "Keine Werbung", "Kein Konto"], closing: "Instrument nehmen und anfangen – das Werkzeug bleibt im Hintergrund.",
    features: [{ title: "Echtzeit-Stimmgerät", body: "Standard-, Drop-D-, DADGAD-, offene und GCEA-Stimmungen sowie chromatischer Modus mit Cent-, Frequenz- und Stabilitätsanzeige." }, { title: "Flexibles Metronom", body: "20–500 BPM, 1–12 Schläge, Tap Tempo, Unterteilungen, Swing, Timer und schrittweise Tempoerhöhung." }, { title: "Interaktive Akkorde", body: "Je 855 Akkordnamen und insgesamt 19.244 Griffe mit mehreren Lagen, Bearbeitung, Erkennung und Wiedergabe." }],
  },
  {
    slug: "it", htmlLang: "it", title: "GuitarTool | Accordatore, metronomo e accordi", description: "Strumenti offline per chitarra e ukulele: accordatore preciso, metronomo 20–500 BPM e 19.244 diteggiature. Senza pubblicità o account.", eyebrow: "TUTTO PER UNA PRATICA CONCENTRATA", headline: "Accorda, tieni il tempo e trova gli accordi offline.", lead: "GuitarTool unisce accordatore in tempo reale, metronomo flessibile e ampie librerie di accordi per chitarra e ukulele in un’unica app chiara e tranquilla.", download: "Scarica gratis su App Store", trust: ["Completamente offline", "Senza pubblicità", "Senza account"], closing: "Prendi lo strumento e inizia: l’app lascia spazio alla musica.",
    features: [{ title: "Accordatore in tempo reale", body: "Accordature standard, Drop D, DADGAD, aperte, GCEA e modalità cromatica, con cents, frequenza, intensità e stabilità." }, { title: "Metronomo flessibile", body: "20–500 BPM, 1–12 movimenti, Tap Tempo, suddivisioni, swing, timer e aumento progressivo del tempo." }, { title: "Accordi interattivi", body: "855 nomi per strumento e 19.244 diteggiature totali, con posizioni alternative, modifica, riconoscimento e ascolto." }],
  },
  {
    slug: "ja", htmlLang: "ja", title: "GuitarTool｜チューナー・メトロノーム・コード", description: "ギターとウクレレのためのオフライン練習ツール。高精度チューナー、20–500 BPMメトロノーム、19,244種類の押さえ方。広告・アカウント不要。", eyebrow: "集中した練習に必要なすべて", headline: "チューニング、テンポ、コード確認をオフラインで。", lead: "GuitarToolはリアルタイムチューナー、柔軟なメトロノーム、ギターとウクレレの豊富なコードライブラリを、落ち着いた一つの流れにまとめます。", download: "App Storeで無料ダウンロード", trust: ["完全オフライン", "広告なし", "アカウント不要"], closing: "楽器を手に取ったら、すぐに練習を始められます。",
    features: [{ title: "リアルタイムチューナー", body: "標準、Drop D、DADGAD、オープン、GCEA、クロマチックに対応。セント、周波数、入力強度、安定度を表示します。" }, { title: "柔軟なメトロノーム", body: "20–500 BPM、1–12拍、タップテンポ、細分化、スウィング、タイマー、段階的テンポアップに対応。" }, { title: "インタラクティブなコード", body: "各楽器855コード名、合計19,244種類の押さえ方。ポジション切替、編集、判定、試聴ができます。" }],
  },
  {
    slug: "ko", htmlLang: "ko", title: "GuitarTool | 튜너, 메트로놈, 코드", description: "기타와 우쿨렐레를 위한 오프라인 연습 도구: 정밀 튜너, 20–500 BPM 메트로놈, 19,244개 운지. 광고와 계정이 없습니다.", eyebrow: "집중 연습에 필요한 모든 것", headline: "튜닝, 박자, 코드 찾기를 모두 오프라인으로.", lead: "GuitarTool은 실시간 튜너, 유연한 메트로놈, 기타와 우쿨렐레 코드 라이브러리를 차분하고 명확한 하나의 흐름으로 연결합니다.", download: "App Store에서 무료 다운로드", trust: ["완전 오프라인", "광고 없음", "계정 불필요"], closing: "악기를 들고 바로 시작하세요. 도구는 연습을 방해하지 않습니다.",
    features: [{ title: "실시간 튜너", body: "표준, Drop D, DADGAD, 오픈, GCEA 및 크로매틱 모드와 센트, 주파수, 입력 강도, 안정도 표시를 지원합니다." }, { title: "유연한 메트로놈", body: "20–500 BPM, 1–12박, 탭 템포, 세분음, 스윙, 타이머, 점진적 템포 증가를 제공합니다." }, { title: "인터랙티브 코드", body: "악기별 855개 코드 이름과 총 19,244개 운지. 포지션 전환, 편집, 인식, 재생이 가능합니다." }],
  },
  {
    slug: "ru", htmlLang: "ru", title: "GuitarTool | Тюнер, метроном и аккорды", description: "Офлайн-инструменты для гитары и укулеле: точный тюнер, метроном 20–500 BPM и 19 244 аппликатуры. Без рекламы и аккаунта.", eyebrow: "ВСЁ ДЛЯ СОСРЕДОТОЧЕННОЙ ПРАКТИКИ", headline: "Настройка, ритм и аккорды — полностью офлайн.", lead: "GuitarTool объединяет тюнер реального времени, гибкий метроном и большие библиотеки аккордов для гитары и укулеле в одном спокойном приложении.", download: "Скачать бесплатно в App Store", trust: ["Полностью офлайн", "Без рекламы", "Без аккаунта"], closing: "Берите инструмент и начинайте — приложение не отвлекает от музыки.",
    features: [{ title: "Тюнер реального времени", body: "Стандартный строй, Drop D, DADGAD, открытые строи, GCEA и хроматический режим с центами, частотой и стабильностью." }, { title: "Гибкий метроном", body: "20–500 BPM, 1–12 долей, Tap Tempo, подразделения, свинг, таймеры и постепенное ускорение." }, { title: "Интерактивные аккорды", body: "По 855 названий для каждого инструмента и 19 244 аппликатуры с позициями, редактированием, распознаванием и звуком." }],
  },
  {
    slug: "tr", htmlLang: "tr", title: "GuitarTool | Akort, metronom ve akorlar", description: "Gitar ve ukulele için çevrimdışı çalışma araçları: hassas akort, 20–500 BPM metronom ve 19.244 parmak pozisyonu. Reklam ve hesap yok.", eyebrow: "ODAKLI ÇALIŞMA İÇİN HER ŞEY", headline: "Akort et, tempoyu koru ve akorları çevrimdışı bul.", lead: "GuitarTool gerçek zamanlı akort cihazını, esnek metronomu ve kapsamlı gitar ile ukulele akor kitaplıklarını sakin ve net bir uygulamada birleştirir.", download: "App Store’dan ücretsiz indir", trust: ["Tamamen çevrimdışı", "Reklamsız", "Hesap gerektirmez"], closing: "Enstrümanı elinize alın ve başlayın; araç müziğin önüne geçmez.",
    features: [{ title: "Gerçek zamanlı akort", body: "Standart, Drop D, DADGAD, açık, GCEA ve kromatik mod; cent, frekans, giriş gücü ve kararlılık göstergeleri." }, { title: "Esnek metronom", body: "20–500 BPM, 1–12 vuruş, Tap Tempo, alt bölümler, swing, zamanlayıcı ve kademeli tempo artışı." }, { title: "Etkileşimli akorlar", body: "Her enstrüman için 855 ad ve toplam 19.244 parmak pozisyonu; konum değiştirme, düzenleme, tanıma ve dinleme." }],
  },
  {
    slug: "ar", htmlLang: "ar", dir: "rtl", title: "GuitarTool | موالف وميترونوم ومكتبة أوتار", description: "أدوات تدريب تعمل دون اتصال للغيتار واليوكليلي: موالف دقيق، ميترونوم 20–500 BPM و19,244 وضعية أصابع. بلا إعلانات أو حساب.", eyebrow: "كل ما تحتاجه لتمرين مركّز", headline: "اضبط الآلة، حافظ على الإيقاع وابحث عن الأوتار دون اتصال.", lead: "يجمع GuitarTool موالفاً فورياً وميترونوماً مرناً ومكتبتين غنيتين لأوتار الغيتار واليوكليلي في تطبيق واحد واضح وهادئ.", download: "تنزيل مجاني من App Store", trust: ["يعمل دون اتصال", "بلا إعلانات", "لا يحتاج إلى حساب"], closing: "احمل آلتك وابدأ مباشرة؛ الأداة تترك المساحة للموسيقى.",
    features: [{ title: "موالف فوري", body: "يدعم الضبط القياسي وDrop D وDADGAD والضبط المفتوح وGCEA والوضع الكروماتي مع عرض السنت والتردد والثبات." }, { title: "ميترونوم مرن", body: "من 20 إلى 500 BPM، ومن 1 إلى 12 نبضة، وTap Tempo، وتقسيمات، وSwing، ومؤقتات وزيادة تدريجية للسرعة." }, { title: "أوتار تفاعلية", body: "855 اسماً لكل آلة و19,244 وضعية إجمالاً، مع تبديل المواضع والتحرير والتعرّف والاستماع." }],
  },
];

export function getLocalePage(slug: string) { return localePages.find((page) => page.slug === slug); }
