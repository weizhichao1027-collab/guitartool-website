export type TunerLocale = {
  slug: string;
  htmlLang: string;
  dir?: "rtl";
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  start: string;
  stop: string;
  listening: string;
  noSignal: string;
  permissionError: string;
  privacy: string;
  chromatic: string;
  guitar: string;
  ukulele: string;
  flat: string;
  inTune: string;
  sharp: string;
  guideTitle: string;
  tips: string[];
  download: string;
};

export const tunerLocales: TunerLocale[] = [
  {
    slug: "zh", htmlLang: "zh-CN", title: "免费在线调音器｜吉他与尤克里里｜GuitarTool", description: "免费的浏览器在线调音器，实时显示音名、频率和音分。麦克风音频只在设备本地处理，无需登录。", eyebrow: "免费在线调音器", lead: "允许麦克风后即可查看实时音名、频率和音分偏差。声音不会保存或上传。", start: "开始调音", stop: "停止", listening: "正在聆听", noSignal: "拨响一根琴弦", permissionError: "无法使用麦克风，请检查浏览器权限后重试。", privacy: "麦克风音频只在当前浏览器中实时分析，不会保存或发送到服务器。", chromatic: "十二平均律", guitar: "吉他 EADGBE", ukulele: "尤克里里 GCEA", flat: "偏低", inTune: "音准正确", sharp: "偏高", guideTitle: "获得稳定读数的三个步骤", tips: ["一次只拨一根弦，并轻触其他琴弦抑制共振。", "使用适中力度，让最初的强烈瞬态过去后再看读数。", "先把音分调到接近零，再完整复查所有琴弦。"], download: "下载完整离线调音器",
  },
  {
    slug: "en", htmlLang: "en", title: "Free Online Guitar & Ukulele Tuner | GuitarTool", description: "A free browser tuner with live note, frequency and cents feedback. Microphone audio stays on your device and no sign-in is required.", eyebrow: "FREE ONLINE TUNER", lead: "Allow microphone access to see the nearest note, live frequency and cents offset. Audio is never saved or uploaded.", start: "Start tuning", stop: "Stop", listening: "Listening", noSignal: "Pluck one string", permissionError: "The microphone is unavailable. Check browser permission and try again.", privacy: "Microphone audio is analyzed only in this browser. It is not saved or sent to a server.", chromatic: "Chromatic", guitar: "Guitar EADGBE", ukulele: "Ukulele GCEA", flat: "Flat", inTune: "In tune", sharp: "Sharp", guideTitle: "Three steps to a stable reading", tips: ["Pluck one string at a time and mute the others to reduce sympathetic vibration.", "Use a moderate attack, then read the pitch after the first transient settles.", "Bring cents close to zero and make a second pass across every string."], download: "Download the full offline tuner",
  },
  {
    slug: "zh-hant", htmlLang: "zh-Hant", title: "免費線上調音器｜吉他與烏克麗麗｜GuitarTool", description: "免費瀏覽器調音器，即時顯示音名、頻率與音分。麥克風聲音只在裝置上處理，無需登入。", eyebrow: "免費線上調音器", lead: "允許麥克風後即可查看音名、頻率與音分偏差，聲音不會儲存或上傳。", start: "開始調音", stop: "停止", listening: "正在聆聽", noSignal: "撥響一根琴弦", permissionError: "無法使用麥克風，請檢查瀏覽器權限後再試。", privacy: "麥克風聲音只在目前瀏覽器中即時分析，不會儲存或傳送到伺服器。", chromatic: "半音階", guitar: "吉他 EADGBE", ukulele: "烏克麗麗 GCEA", flat: "偏低", inTune: "音準正確", sharp: "偏高", guideTitle: "取得穩定讀數的三個步驟", tips: ["一次只撥一根弦，輕觸其他琴弦以抑制共振。", "使用適中力度，等最初的強烈瞬態過後再看讀數。", "先把音分調到接近零，再完整複查所有琴弦。"], download: "下載完整離線調音器",
  },
  {
    slug: "es", htmlLang: "es", title: "Afinador online gratis para guitarra y ukelele | GuitarTool", description: "Afinador gratuito en el navegador con nota, frecuencia y cents en tiempo real. El audio permanece en el dispositivo y no requiere cuenta.", eyebrow: "AFINADOR ONLINE GRATIS", lead: "Permite el micrófono para ver la nota más cercana, la frecuencia y la desviación en cents. El audio no se guarda ni se sube.", start: "Empezar a afinar", stop: "Detener", listening: "Escuchando", noSignal: "Pulsa una cuerda", permissionError: "No se puede usar el micrófono. Revisa el permiso del navegador e inténtalo de nuevo.", privacy: "El audio se analiza solo en este navegador; no se guarda ni se envía a un servidor.", chromatic: "Cromático", guitar: "Guitarra EADGBE", ukulele: "Ukelele GCEA", flat: "Bajo", inTune: "Afinado", sharp: "Alto", guideTitle: "Tres pasos para una lectura estable", tips: ["Toca una cuerda cada vez y apaga la resonancia de las demás.", "Usa un ataque moderado y espera a que pase el primer transitorio.", "Acerca los cents a cero y vuelve a revisar todas las cuerdas."], download: "Descargar el afinador offline completo",
  },
  {
    slug: "pt-br", htmlLang: "pt-BR", title: "Afinador online grátis para violão e ukulele | GuitarTool", description: "Afinador gratuito no navegador com nota, frequência e cents em tempo real. O áudio fica no aparelho e não exige conta.", eyebrow: "AFINADOR ONLINE GRÁTIS", lead: "Permita o microfone para ver a nota mais próxima, frequência e diferença em cents. O áudio não é salvo nem enviado.", start: "Começar a afinar", stop: "Parar", listening: "Ouvindo", noSignal: "Toque uma corda", permissionError: "Não foi possível usar o microfone. Verifique a permissão do navegador e tente novamente.", privacy: "O áudio é analisado somente neste navegador; não é salvo nem enviado a um servidor.", chromatic: "Cromático", guitar: "Violão EADGBE", ukulele: "Ukulele GCEA", flat: "Baixo", inTune: "Afinado", sharp: "Alto", guideTitle: "Três passos para uma leitura estável", tips: ["Toque uma corda por vez e abafe as demais para reduzir ressonâncias.", "Use intensidade moderada e espere o ataque inicial estabilizar.", "Aproxime os cents de zero e confira todas as cordas novamente."], download: "Baixar o afinador offline completo",
  },
  {
    slug: "fr", htmlLang: "fr", title: "Accordeur en ligne gratuit pour guitare et ukulélé | GuitarTool", description: "Accordeur gratuit dans le navigateur avec note, fréquence et cents en direct. Le son reste sur l’appareil, sans compte.", eyebrow: "ACCORDEUR EN LIGNE GRATUIT", lead: "Autorisez le micro pour afficher la note, la fréquence et l’écart en cents. Le son n’est ni enregistré ni envoyé.", start: "Commencer l’accordage", stop: "Arrêter", listening: "Écoute en cours", noSignal: "Pincez une corde", permissionError: "Le microphone est indisponible. Vérifiez l’autorisation du navigateur puis réessayez.", privacy: "Le son est analysé uniquement dans ce navigateur ; il n’est ni enregistré ni envoyé à un serveur.", chromatic: "Chromatique", guitar: "Guitare EADGBE", ukulele: "Ukulélé GCEA", flat: "Trop bas", inTune: "Juste", sharp: "Trop haut", guideTitle: "Trois étapes pour une mesure stable", tips: ["Jouez une corde à la fois et étouffez les autres pour limiter les résonances.", "Attaquez modérément puis attendez que le premier transitoire se stabilise.", "Approchez-vous de zéro cent et contrôlez ensuite toutes les cordes."], download: "Télécharger l’accordeur hors ligne complet",
  },
  {
    slug: "de", htmlLang: "de", title: "Kostenloses Online-Stimmgerät für Gitarre und Ukulele | GuitarTool", description: "Kostenloses Browser-Stimmgerät mit Note, Frequenz und Cent-Abweichung in Echtzeit. Audio bleibt auf dem Gerät, kein Konto nötig.", eyebrow: "KOSTENLOSES ONLINE-STIMMGERÄT", lead: "Erlaube den Mikrofonzugriff, um Note, Frequenz und Cent-Abweichung zu sehen. Audio wird weder gespeichert noch hochgeladen.", start: "Stimmen starten", stop: "Stoppen", listening: "Hört zu", noSignal: "Eine Saite anschlagen", permissionError: "Das Mikrofon ist nicht verfügbar. Prüfe die Browserberechtigung und versuche es erneut.", privacy: "Audio wird nur in diesem Browser analysiert und weder gespeichert noch an einen Server gesendet.", chromatic: "Chromatisch", guitar: "Gitarre EADGBE", ukulele: "Ukulele GCEA", flat: "Zu tief", inTune: "Stimmt", sharp: "Zu hoch", guideTitle: "Drei Schritte zu einer stabilen Anzeige", tips: ["Spiele nur eine Saite und dämpfe die übrigen gegen Mitschwingen ab.", "Schlage mäßig an und lies erst nach dem ersten Einschwingvorgang ab.", "Bringe die Cent-Anzeige nahe null und prüfe danach alle Saiten erneut."], download: "Vollständiges Offline-Stimmgerät laden",
  },
  {
    slug: "it", htmlLang: "it", title: "Accordatore online gratuito per chitarra e ukulele | GuitarTool", description: "Accordatore gratuito nel browser con nota, frequenza e cents in tempo reale. L’audio resta sul dispositivo e non serve un account.", eyebrow: "ACCORDATORE ONLINE GRATUITO", lead: "Consenti il microfono per vedere nota, frequenza e scarto in cents. L’audio non viene salvato né caricato.", start: "Inizia ad accordare", stop: "Ferma", listening: "In ascolto", noSignal: "Pizzica una corda", permissionError: "Il microfono non è disponibile. Controlla il permesso del browser e riprova.", privacy: "L’audio viene analizzato solo in questo browser; non viene salvato né inviato a un server.", chromatic: "Cromatico", guitar: "Chitarra EADGBE", ukulele: "Ukulele GCEA", flat: "Basso", inTune: "Accordato", sharp: "Alto", guideTitle: "Tre passi per una lettura stabile", tips: ["Suona una corda alla volta e smorza le altre per ridurre le risonanze.", "Usa un attacco moderato e attendi che il transiente iniziale si stabilizzi.", "Porta i cents vicino a zero e controlla di nuovo tutte le corde."], download: "Scarica l’accordatore offline completo",
  },
  {
    slug: "ja", htmlLang: "ja", title: "無料オンラインチューナー｜ギター・ウクレレ｜GuitarTool", description: "音名・周波数・セント差をリアルタイム表示する無料ブラウザチューナー。音声は端末内で処理され、登録不要です。", eyebrow: "無料オンラインチューナー", lead: "マイクを許可すると、最も近い音名、周波数、セント差を確認できます。音声は保存・送信されません。", start: "チューニング開始", stop: "停止", listening: "解析中", noSignal: "弦を1本鳴らしてください", permissionError: "マイクを使用できません。ブラウザの権限を確認して再試行してください。", privacy: "マイク音声はこのブラウザ内だけで解析され、保存もサーバー送信もされません。", chromatic: "クロマチック", guitar: "ギター EADGBE", ukulele: "ウクレレ GCEA", flat: "低い", inTune: "合っています", sharp: "高い", guideTitle: "安定した測定のための3ステップ", tips: ["弦を1本ずつ鳴らし、ほかの弦は軽く触れて共鳴を止めます。", "適度な強さで弾き、最初のアタックが落ち着いてから読み取ります。", "セントをゼロ付近に合わせ、最後に全弦をもう一度確認します。"], download: "完全版オフラインチューナーをダウンロード",
  },
  {
    slug: "ko", htmlLang: "ko", title: "무료 온라인 튜너｜기타·우쿨렐레｜GuitarTool", description: "음이름, 주파수, 센트 차이를 실시간으로 보여 주는 무료 브라우저 튜너입니다. 오디오는 기기에서만 처리되며 로그인이 필요 없습니다.", eyebrow: "무료 온라인 튜너", lead: "마이크를 허용하면 가장 가까운 음, 주파수, 센트 차이를 볼 수 있습니다. 오디오는 저장되거나 업로드되지 않습니다.", start: "튜닝 시작", stop: "중지", listening: "듣는 중", noSignal: "현 하나를 튕겨 주세요", permissionError: "마이크를 사용할 수 없습니다. 브라우저 권한을 확인한 후 다시 시도하세요.", privacy: "마이크 오디오는 이 브라우저에서만 분석되며 저장되거나 서버로 전송되지 않습니다.", chromatic: "크로매틱", guitar: "기타 EADGBE", ukulele: "우쿨렐레 GCEA", flat: "낮음", inTune: "정확함", sharp: "높음", guideTitle: "안정적인 측정을 위한 세 단계", tips: ["한 번에 한 현만 튕기고 다른 현은 가볍게 눌러 공명을 막습니다.", "적당한 세기로 연주하고 첫 어택이 가라앉은 뒤 값을 확인합니다.", "센트를 0에 가깝게 맞춘 다음 모든 현을 다시 확인합니다."], download: "전체 오프라인 튜너 다운로드",
  },
  {
    slug: "ru", htmlLang: "ru", title: "Бесплатный онлайн-тюнер для гитары и укулеле | GuitarTool", description: "Бесплатный тюнер в браузере показывает ноту, частоту и отклонение в центах. Звук остаётся на устройстве, аккаунт не нужен.", eyebrow: "БЕСПЛАТНЫЙ ОНЛАЙН-ТЮНЕР", lead: "Разрешите микрофон, чтобы увидеть ближайшую ноту, частоту и отклонение. Звук не сохраняется и не загружается.", start: "Начать настройку", stop: "Остановить", listening: "Слушаю", noSignal: "Извлеките звук одной струны", permissionError: "Микрофон недоступен. Проверьте разрешение браузера и повторите попытку.", privacy: "Звук анализируется только в этом браузере, не сохраняется и не отправляется на сервер.", chromatic: "Хроматический", guitar: "Гитара EADGBE", ukulele: "Укулеле GCEA", flat: "Ниже", inTune: "Точно", sharp: "Выше", guideTitle: "Три шага к стабильному показанию", tips: ["Играйте по одной струне и приглушайте остальные, чтобы убрать резонанс.", "Используйте умеренную атаку и дождитесь затухания первого переходного звука.", "Доведите отклонение почти до нуля и повторно проверьте все струны."], download: "Скачать полный офлайн-тюнер",
  },
  {
    slug: "tr", htmlLang: "tr", title: "Gitar ve ukulele için ücretsiz çevrimiçi akort | GuitarTool", description: "Nota, frekans ve sent farkını canlı gösteren ücretsiz tarayıcı akort cihazı. Ses cihazda kalır, hesap gerekmez.", eyebrow: "ÜCRETSİZ ÇEVRİMİÇİ AKORT", lead: "En yakın notayı, frekansı ve sent farkını görmek için mikrofona izin verin. Ses kaydedilmez veya yüklenmez.", start: "Akort etmeye başla", stop: "Durdur", listening: "Dinliyor", noSignal: "Bir tele vurun", permissionError: "Mikrofon kullanılamıyor. Tarayıcı iznini kontrol edip tekrar deneyin.", privacy: "Ses yalnızca bu tarayıcıda analiz edilir; kaydedilmez ve sunucuya gönderilmez.", chromatic: "Kromatik", guitar: "Gitar EADGBE", ukulele: "Ukulele GCEA", flat: "Pes", inTune: "Akortta", sharp: "Tiz", guideTitle: "Kararlı ölçüm için üç adım", tips: ["Her seferinde tek tel çalın ve diğer tellerin rezonansını susturun.", "Orta kuvvette çalın ve ilk atağın yatışmasını bekleyin.", "Sent değerini sıfıra yaklaştırıp bütün telleri yeniden kontrol edin."], download: "Tam çevrimdışı akort cihazını indir",
  },
  {
    slug: "ar", htmlLang: "ar", dir: "rtl", title: "موالف مجاني على الإنترنت للغيتار واليوكليلي | GuitarTool", description: "موالف مجاني في المتصفح يعرض النغمة والتردد والسنت لحظياً. يبقى الصوت على الجهاز ولا يحتاج إلى حساب.", eyebrow: "موالف مجاني على الإنترنت", lead: "اسمح بالميكروفون لرؤية أقرب نغمة والتردد والانحراف بالسنت. لا يُحفظ الصوت ولا يُرفع.", start: "بدء الضبط", stop: "إيقاف", listening: "جارٍ الاستماع", noSignal: "اعزف وتراً واحداً", permissionError: "تعذر استخدام الميكروفون. تحقّق من إذن المتصفح ثم حاول مجدداً.", privacy: "يُحلل الصوت داخل هذا المتصفح فقط، ولا يُحفظ أو يُرسل إلى خادم.", chromatic: "كروماتي", guitar: "غيتار EADGBE", ukulele: "يوكليلي GCEA", flat: "منخفض", inTune: "مضبوط", sharp: "مرتفع", guideTitle: "ثلاث خطوات لقراءة مستقرة", tips: ["اعزف وتراً واحداً في كل مرة واكتم بقية الأوتار لتقليل الرنين.", "استخدم ضربة متوسطة وانتظر حتى يهدأ الهجوم الأول.", "قرّب قيمة السنت من الصفر ثم افحص جميع الأوتار مرة أخرى."], download: "تنزيل الموالف الكامل دون اتصال",
  },
];

export function getTunerLocale(slug: string) {
  return tunerLocales.find((locale) => locale.slug === slug);
}

export function tunerPath(slug: string) {
  if (slug === "zh") return "/online-tuner/";
  if (slug === "en") return "/en/online-tuner/";
  return `/${slug}/online-tuner/`;
}
