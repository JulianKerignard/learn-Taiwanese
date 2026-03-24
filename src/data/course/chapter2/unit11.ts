import type { CourseUnit } from "@/types/course";

export const unit11: CourseUnit = {
  id: "unit-11",
  number: 11,
  title: "Les transports",
  titleZh: "交通工具",
  chapter: 2,
  description:
    "Maîtrisez le MRT, le bus, le taxi jaune et le TGV taiwanais pour vous déplacer partout sur l'île.",
  icon: "🚇",

  sections: [
    {
      title: "Le système de transport",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Taiwan possède un réseau de transports en commun excellent, surtout autour de Taipei. Voici les principaux moyens de transport que vous utiliserez au quotidien.",
        },
        {
          type: "example",
          chinese: "捷運",
          pinyin: "jiéyùn",
          translation: "MRT (métro)",
          content: "Le métro de Taipei : propre, climatisé, ponctuel. Rappel : interdit de manger ou boire à l'intérieur.",
        },
        {
          type: "example",
          chinese: "公車",
          pinyin: "gōngchē",
          translation: "Bus",
          content: "Le réseau de bus est très dense. On paie avec la 悠遊卡 en montant ou en descendant (ou les deux, selon la distance).",
        },
        {
          type: "example",
          chinese: "計程車",
          pinyin: "jìchéngchē",
          translation: "Taxi",
          content: "Les taxis taiwanais sont jaunes et faciles à repérer. Le compteur démarre à 70 NT$ (environ 2 euros).",
        },
        {
          type: "example",
          chinese: "高鐵",
          pinyin: "gāotiě",
          translation: "TGV (train à grande vitesse)",
          content: "Le 高鐵 relie Taipei à Kaohsiung (sud de l'île) en 1h30. Technologie japonaise Shinkansen.",
        },
        {
          type: "text",
          content:
            "Pour les déplacements urbains, le combo MRT + bus couvre toute la ville de Taipei. Les taxis sont abordables pour les courses courtes ou quand on est perdu. Le 高鐵 est parfait pour les voyages entre les grandes villes.",
        },
        {
          type: "tip",
          content:
            "Les taxis taiwanais sont très sûrs. Les chauffeurs utilisent le compteur sans essayer de vous arnaquer. Si vous ne parlez pas chinois, montrez l'adresse en caractères sur votre téléphone : ils comprendront immédiatement.",
        },
        {
          type: "text",
          content:
            "Taiwan a l'un des meilleurs systèmes de transport public d'Asie. Voici le guide complet :\n\n**捷運 MRT** (Metro) :\nDisponible à Taipei, Kaohsiung et Taoyuan (aéroport). Taipei est de loin le réseau le plus étendu avec 131 stations sur 6 lignes. Le MRT est climatisé à 26°C (parfait quand il fait 35°C dehors), propre (nettoyé plusieurs fois par jour), sûr (caméras partout), et ponctuel (trains toutes les 2-5 minutes en heure de pointe). Horaires : ~6h00 à minuit.\n\n**公車 Bus** :\nLe réseau de bus de Taipei est dense mais déroutant pour un étranger. Deux règles essentielles :\n1. Le paiement varie : certains bus, on paie en MONTANT (上車付費), d'autres en DESCENDANT (下車付費). Un panneau lumineux dans le bus indique quand payer. En cas de doute, demandez au chauffeur 上車刷嗎？(je bipe en montant ?) La règle d'or : bipez votre EasyCard en montant ET en descendant, le système calculera automatiquement le bon montant.\n2. Pour demander l'arrêt : appuyez sur le bouton rouge 下車鈴 (sonnette de descente) AVANT votre arrêt. Les arrêts sont annoncés en mandarin, taiwanais, hakka et anglais.\n3. Pour arrêter un bus : il faut LEVER LA MAIN quand vous le voyez arriver. Ce n'est pas comme en France — si vous ne faites pas signe, le chauffeur passe sans s'arrêter.\n\n**計程車 Taxi** :\nLes taxis sont jaunes et partout. Le compteur démarre à 70 NT$ (pour les 1.25 premiers km), puis 5 NT$ par 200m. Supplément de nuit (23h-6h) : +20 NT$. Pas de pourboire. Les chauffeurs ne parlent généralement pas anglais — montrez l'adresse en caractères sur votre téléphone. Uber existe aussi (叫Uber). LINE TAXI est très populaire (intégré à l'app LINE). Appelez le chauffeur 師傅 (shīfu, « maître ») — c'est le terme respectueux standard.\n\n**高鐵 HSR (TGV taiwanais)** :\nLe High Speed Rail connecte Taipei à Kaohsiung (345 km) en 1h30 à 300 km/h. Technologie japonaise Shinkansen. Arrêts (12 gares) : Nangang → Taipei → Banqiao → Taoyuan → Hsinchu → Miaoli → Taichung → Changhua → Yunlin → Chiayi → Tainan → Zuoying (Kaohsiung). Billet Taipei-Kaohsiung : ~1,490 NT$ (standard), réductions early bird (早鳥票 zǎoniǎo piào) de 10% à 35% si réservé 5 à 28 jours à l'avance. Réservez sur l'app officielle 'THSR' ou le site web (en anglais disponible). Les billets sont aussi aux distributeurs automatiques dans les gares.\n\n**台鐵 Train régional** :\nPlus lent que le 高鐵 mais dessert TOUTE l'île, y compris la côte est (Hualien, Taitung) que le HSR ne couvre pas. Trois types de trains : le 自強號 (Tze-Chiang Express, le plus rapide), le 莒光號 (Chu-Kuang Express, intermédiaire), et le 區間車 (train local, tous les arrêts). Pour les gorges de Taroko : prenez le 自強號 vers Hualien (~2h30 de Taipei). Idéal aussi pour Jiufen, Pingxi, ou faire le tour de l'île.",
        },
        {
          type: "tip",
          content:
            "La 悠遊卡 (EasyCard) est votre meilleur investissement à Taiwan. Voici le guide complet :\n- **Où l'acheter** : n'importe quelle station MRT (guichet ou distributeur), tout convenience store (7-Eleven, FamilyMart), et même à l'aéroport\n- **Coût** : 100 NT$ pour la carte (non remboursable) + le montant que vous chargez\n- **Où la recharger (加值)** : machines dans les stations MRT, comptoirs de convenience stores, distributeurs automatiques. Montants : 100, 500, 1000 NT$\n- **Où l'utiliser** : MRT, bus, YouBike, taxis (certains), convenience stores, supermarchés, distributeurs automatiques, parkings, machines à laver dans les laveries\n- **YouBike** : le vélo en libre-service de Taipei. Inscrivez votre EasyCard sur le site YouBike. 30 premières minutes : 5 NT$ (quasi gratuit). Stations PARTOUT dans Taipei.\n- **Astuce** : gardez toujours au moins 100 NT$ sur votre carte pour les urgences transport",
        },
        {
          type: "text",
          content:
            "Les 6 lignes du MRT de Taipei en détail : La ligne rouge (淡水信義線) traverse du nord au sud — de Tamsui (淡水, vieux port célèbre pour ses couchers de soleil) à Xiangshan (象山, la rando avec vue sur Taipei 101). Stations clés : Shilin (士林, marché de nuit), Zhongshan (中山, quartier branché), Taipei Main Station (台北車站, le hub central). La ligne bleue (板南線) est la ligne est-ouest — shopping à Zhongxiao Dunhua et Zhongxiao Fuxing, Sun Yat-sen Memorial Hall. La ligne verte (松山新店線) va de Songshan (松山, marché de nuit Raohe) à Xindian (新店, rivière et rando). Passe par Chiang Kai-shek Memorial Hall (中正紀念堂). La ligne orange (中和新蘆線) dessert l'ouest, quartiers résidentiels abordables (Zhonghe, Xinzhuang). La ligne jaune (環狀線), circulaire, la plus récente (2020). La ligne marron (文湖線), aérienne et automatique, dessert Neihu (pôle tech) et l'aéroport Songshan.",
        },
        {
          type: "text",
          content:
            "Le scooter est le roi de la route à Taiwan — 14 millions de scooters pour 23 millions d'habitants. Pour un étranger, les options sans permis taiwanais : les scooters électriques en libre-service GoShare (by Gogoro) et iRent (~2,5 NT$/minute, inscription via l'app avec permis international). Pour une location longue durée : ~2,000-3,000 NT$/mois dans les boutiques près des gares ou quartiers étudiants. La règle la plus déroutante pour un Européen : le virage à gauche en deux temps (兩段式左轉 liǎng duàn shì zuǒ zhuǎn, « hook turn »). Sur les grands boulevards, les scooters ne tournent PAS à gauche directement — ils avancent jusqu'au coin, pivotent de 90°, et attendent le feu vert perpendiculaire. Le casque est obligatoire (amende 500 NT$). Si vous n'êtes pas à l'aise, le combo MRT + bus + YouBike + taxi couvre 95% des besoins en ville.",
        },
        {
          type: "tip",
          content:
            "Apps indispensables pour les transports : '台北等公車' (Taipei Bus Tracker) pour les bus en temps réel — elle montre où se trouvent les bus et le temps d'attente. 'Taipei Metro' (台北捷運) pour le MRT avec calculateur de trajet. 'YouBike 微笑單車' pour localiser les vélos disponibles et les places vides. Google Maps fonctionne parfaitement et intègre les horaires de bus et MRT taiwanais.",
        },
        {
          type: "warning",
          content:
            "Pièges courants des transports à Taiwan :\n- **Le bus qui ne s'arrête pas** : à Taiwan, les bus ne s'arrêtent PAS automatiquement à chaque arrêt. Vous devez LEVER LA MAIN quand le bus arrive pour qu'il s'arrête. Si personne ne lève la main et personne ne sonne pour descendre, le bus passe sans s'arrêter.\n- **La direction du MRT** : vérifiez le terminus affiché sur le quai. 'Direction 淡水' = vous allez vers le nord. Les Taiwanais utilisent le nom du terminus, pas 'nord/sud'.\n- **Les heures de pointe** : 7h30-9h30 et 17h-19h30. Le MRT est BONDÉ. Laissez sortir les gens avant d'entrer (c'est la règle stricte).\n- **Le dernier MRT** : vers minuit. Après ça, taxi ou bus de nuit (路線通宵 ou 夜間公車).",
        },
      ],
    },
    {
      title: "Utiliser les transports",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La structure de base pour dire où vous allez : 我要去 + lieu (wǒ yào qù + lieu) = « Je veux aller à... ». 去 (qù) signifie « aller » et c'est le verbe de déplacement le plus important.",
        },
        {
          type: "example",
          chinese: "我要去台北車站",
          pinyin: "wǒ yào qù Táiběi chēzhàn",
          translation: "Je veux aller à la gare de Taipei",
          content: "我要去 + destination : la phrase à dire au chauffeur de taxi.",
        },
        {
          type: "text",
          content:
            "Pour dire quel transport vous prenez, utilisez 坐 (zuò, prendre/s'asseoir dans) + moyen de transport.",
        },
        {
          type: "example",
          chinese: "我坐捷運去",
          pinyin: "wǒ zuò jiéyùn qù",
          translation: "J'y vais en MRT",
          content: "坐 + transport + 去 : la structure pour indiquer comment vous vous déplacez.",
        },
        {
          type: "example",
          chinese: "坐到台北車站",
          pinyin: "zuò dào Táiběi chēzhàn",
          translation: "Prendre (le transport) jusqu'à la gare de Taipei",
          content: "到 (dào) = arriver à / jusqu'à. 坐到 = prendre jusqu'à.",
        },
        {
          type: "text",
          content:
            "Pour changer de ligne dans le MRT : 轉 (zhuǎn) + nom de ligne. On dit « 轉紅線 » (zhuǎn hóng xiàn) pour « prendre la correspondance vers la ligne rouge ».",
        },
        {
          type: "example",
          chinese: "在忠孝復興站轉藍線",
          pinyin: "zài Zhōngxiào Fùxīng zhàn zhuǎn lán xiàn",
          translation: "Changer pour la ligne bleue à Zhongxiao Fuxing",
          content: "在 + station + 轉 + ligne : la structure pour les correspondances.",
        },
        {
          type: "example",
          chinese: "到了！",
          pinyin: "dào le!",
          translation: "On est arrivé !",
          content: "到了 est l'expression universelle pour signaler qu'on est arrivé à destination.",
        },
        {
          type: "tip",
          content:
            "Dans le bus, appuyez sur le bouton rouge 下車 (xià chē) un arrêt avant le vôtre pour signaler que vous descendez. Le bus ne s'arrête pas automatiquement à chaque arrêt.",
        },
      ],
    },
    {
      title: "La 悠遊卡",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "La 悠遊卡 (Yōuyóu kǎ, EasyCard) est LA carte indispensable à Taiwan. C'est une carte rechargeable sans contact qui fonctionne partout : MRT, bus, YouBike (vélos en libre-service), convenience stores, supermarchés, certains restaurants et même les distributeurs automatiques.",
        },
        {
          type: "text",
          content:
            "Vous pouvez acheter une 悠遊卡 dans n'importe quelle station de MRT ou convenience store pour 100 NT$ (non remboursable). Il existe des versions collector avec des designs mignons (personnages de dessins animés, Hello Kitty, etc.) qui sont très populaires.",
        },
        {
          type: "example",
          chinese: "我要加值",
          pinyin: "wǒ yào jiāzhí",
          translation: "Je veux recharger (ma carte)",
          content: "加值 (jiāzhí) = recharger. Vous pouvez recharger aux bornes du MRT ou au comptoir des convenience stores.",
        },
        {
          type: "example",
          chinese: "可以加值五百嗎？",
          pinyin: "kěyǐ jiāzhí wǔbǎi ma?",
          translation: "Je peux recharger 500 (NT$) ?",
          content: "Au comptoir du 7-Eleven, donnez votre carte et dites le montant.",
        },
        {
          type: "text",
          content:
            "Le YouBike (微笑單車 wéixiào dānchē, « vélo sourire ») est le système de vélos en libre-service de Taipei. On déverrouille un vélo avec la 悠遊卡 ou l'app YouBike. Les 30 premières minutes coûtent 5 NT$. C'est le moyen le plus agréable de découvrir les berges de la rivière à Taipei.",
        },
        {
          type: "tip",
          content:
            "Astuce : dans le MRT, la 悠遊卡 vous fait économiser par rapport aux tickets individuels. En bus, vous bénéficiez aussi de correspondances gratuites MRT-bus dans un délai d'une heure.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous prenez le MRT pour aller à Taipei 101, puis vous attrapez un taxi pour rentrer.",
    lines: [
      {
        speaker: "Vous",
        chinese: "請問，去台北一零一要坐哪一線？",
        pinyin: "qǐngwèn, qù Táiběi yī líng yī yào zuò nǎ yī xiàn?",
        french: "Excusez-moi, pour aller à Taipei 101, quelle ligne je prends ?",
      },
      {
        speaker: "Passant",
        chinese: "你坐紅線到台北一零一站。",
        pinyin: "nǐ zuò hóng xiàn dào Táiběi yī líng yī zhàn.",
        french: "Tu prends la ligne rouge jusqu'à la station Taipei 101.",
      },
      {
        speaker: "Vous",
        chinese: "要轉線嗎？",
        pinyin: "yào zhuǎn xiàn ma?",
        french: "Il faut changer de ligne ?",
      },
      {
        speaker: "Passant",
        chinese: "不用，直接到。三站就到了。",
        pinyin: "bùyòng, zhíjiē dào. sān zhàn jiù dào le.",
        french: "Non, c'est direct. Trois stations et tu y es.",
        note: "不用 (bùyòng) = pas besoin. 直接 (zhíjiē) = directement.",
      },
      {
        speaker: "Vous",
        chinese: "謝謝！（後來坐計程車）師傅，我要去西門町。",
        pinyin: "xièxiè! (hòulái zuò jìchéngchē) shīfu, wǒ yào qù Xīméndīng.",
        french: "Merci ! (plus tard, dans un taxi) Monsieur, je veux aller à Ximending.",
        note: "師傅 (shīfu) est le terme respectueux pour s'adresser à un chauffeur de taxi.",
      },
      {
        speaker: "Chauffeur",
        chinese: "好，大概十五分鐘到。",
        pinyin: "hǎo, dàgài shíwǔ fēnzhōng dào.",
        french: "D'accord, on y sera dans environ 15 minutes.",
      },
    ],
  },

  keyPoints: [
    "Les transports principaux : 捷運 (MRT), 公車 (bus), 計程車 (taxi jaune), 高鐵 (TGV).",
    "我要去 + lieu pour indiquer la destination. 坐 + transport pour préciser le moyen.",
    "轉 + ligne pour les correspondances. 到了 pour signaler l'arrivée.",
    "La 悠遊卡 est indispensable : MRT, bus, YouBike, convenience stores. Se recharge avec 加值.",
  ],

  vocabulary: [
    {
      character: "捷運",
      pinyin: "jiéyùn",
      zhuyin: "ㄐㄧㄝˊ ㄩㄣˋ",
      french: "MRT (métro)",
      english: "MRT (metro)",
      example: {
        sentence: "我坐捷運上班。",
        pinyin: "wǒ zuò jiéyùn shàngbān.",
        translation: "Je prends le MRT pour aller au travail.",
      },
    },
    {
      character: "公車",
      pinyin: "gōngchē",
      zhuyin: "ㄍㄨㄥ ㄔㄜ",
      french: "Bus",
      english: "Bus",
      example: {
        sentence: "公車來了！",
        pinyin: "gōngchē lái le!",
        translation: "Le bus arrive !",
      },
    },
    {
      character: "計程車",
      pinyin: "jìchéngchē",
      zhuyin: "ㄐㄧˋ ㄔㄥˊ ㄔㄜ",
      french: "Taxi",
      english: "Taxi",
      example: {
        sentence: "我們坐計程車去吧。",
        pinyin: "wǒmen zuò jìchéngchē qù ba.",
        translation: "Prenons un taxi.",
      },
    },
    {
      character: "高鐵",
      pinyin: "gāotiě",
      zhuyin: "ㄍㄠ ㄊㄧㄝˇ",
      french: "TGV / train à grande vitesse",
      english: "High speed rail",
      example: {
        sentence: "坐高鐵去高雄。",
        pinyin: "zuò gāotiě qù Gāoxióng.",
        translation: "Prendre le TGV pour Kaohsiung.",
      },
    },
    {
      character: "坐",
      pinyin: "zuò",
      zhuyin: "ㄗㄨㄛˋ",
      french: "Prendre (un transport) / s'asseoir",
      english: "To take (transport) / to sit",
      example: {
        sentence: "坐捷運比較快。",
        pinyin: "zuò jiéyùn bǐjiào kuài.",
        translation: "Prendre le MRT est plus rapide.",
      },
    },
    {
      character: "去",
      pinyin: "qù",
      zhuyin: "ㄑㄩˋ",
      french: "Aller",
      english: "To go",
      example: {
        sentence: "你要去哪裡？",
        pinyin: "nǐ yào qù nǎlǐ?",
        translation: "Où veux-tu aller ?",
      },
    },
    {
      character: "到",
      pinyin: "dào",
      zhuyin: "ㄉㄠˋ",
      french: "Arriver / jusqu'à",
      english: "To arrive / until",
      example: {
        sentence: "到了嗎？",
        pinyin: "dào le ma?",
        translation: "On est arrivé ?",
      },
    },
    {
      character: "站",
      pinyin: "zhàn",
      zhuyin: "ㄓㄢˋ",
      french: "Station / arrêt",
      english: "Station / stop",
      example: {
        sentence: "下一站下車。",
        pinyin: "xià yí zhàn xià chē.",
        translation: "On descend au prochain arrêt.",
      },
    },
    {
      character: "轉",
      pinyin: "zhuǎn",
      zhuyin: "ㄓㄨㄢˇ",
      french: "Changer (de ligne) / tourner",
      english: "To transfer / to turn",
      example: {
        sentence: "在這裡轉藍線。",
        pinyin: "zài zhèlǐ zhuǎn lán xiàn.",
        translation: "On change pour la ligne bleue ici.",
      },
    },
    {
      character: "悠遊卡",
      pinyin: "Yōuyóu kǎ",
      zhuyin: "ㄧㄡ ㄧㄡˊ ㄎㄚˇ",
      french: "EasyCard",
      english: "EasyCard",
      example: {
        sentence: "用悠遊卡比較便宜。",
        pinyin: "yòng Yōuyóu kǎ bǐjiào piányí.",
        translation: "C'est moins cher avec la EasyCard.",
      },
    },
    {
      character: "加值",
      pinyin: "jiāzhí",
      zhuyin: "ㄐㄧㄚ ㄓˊ",
      french: "Recharger (une carte)",
      english: "To top up / reload",
      example: {
        sentence: "我要加值兩百。",
        pinyin: "wǒ yào jiāzhí liǎng bǎi.",
        translation: "Je veux recharger 200 (NT$).",
      },
    },
    {
      character: "票",
      pinyin: "piào",
      zhuyin: "ㄆㄧㄠˋ",
      french: "Billet / ticket",
      english: "Ticket",
      example: {
        sentence: "高鐵票多少錢？",
        pinyin: "gāotiě piào duōshǎo qián?",
        translation: "Combien coûte un billet de TGV ?",
      },
    },
    {
      character: "下車",
      pinyin: "xiàchē",
      zhuyin: "ㄒㄧㄚˋ ㄔㄜ",
      french: "Descendre (d'un véhicule)",
      english: "To get off (a vehicle)",
      example: {
        sentence: "我要在下一站下車。",
        pinyin: "wǒ yào zài xià yí zhàn xiàchē.",
        translation: "Je veux descendre au prochain arrêt.",
      },
    },
    {
      character: "上車",
      pinyin: "shàngchē",
      zhuyin: "ㄕㄤˋ ㄔㄜ",
      french: "Monter (dans un véhicule)",
      english: "To get on (a vehicle)",
      example: {
        sentence: "快上車！",
        pinyin: "kuài shàngchē!",
        translation: "Monte vite !",
      },
    },
  ],

  exercises: [
    {
      id: "u9-ex1",
      type: "translate",
      question: "Comment dit-on « Je veux aller à la gare de Taipei » ?",
      correctAnswer: "我要去台北車站",
      options: [
        "我要去台北車站",
        "我在台北車站",
        "台北車站在哪裡",
        "我坐台北車站",
      ],
    },
    {
      id: "u9-ex2",
      type: "comprehension",
      question: "Que signifie 高鐵 ?",
      correctAnswer: "Le train à grande vitesse (TGV taiwanais)",
      options: [
        "Le train à grande vitesse (TGV taiwanais)",
        "Le métro",
        "Le bus express",
        "L'avion",
      ],
      hint: "gāotiě",
    },
    {
      id: "u9-ex3",
      type: "fill-blank",
      question: "我___捷運去。(J'y vais en MRT.)",
      correctAnswer: "坐",
      options: ["坐", "去", "到", "走"],
      hint: "Quel verbe signifie « prendre » un transport ?",
    },
    {
      id: "u9-ex4",
      type: "translate",
      question: "Que signifie 我要加值 ?",
      correctAnswer: "Je veux recharger (ma carte)",
      options: [
        "Je veux recharger (ma carte)",
        "Je veux acheter un ticket",
        "Je veux changer de ligne",
        "Je veux descendre",
      ],
      hint: "wǒ yào jiāzhí",
    },
    {
      id: "u9-ex5",
      type: "comprehension",
      question: "Que peut-on faire avec une 悠遊卡 ?",
      correctAnswer: "Payer le MRT, le bus, les convenience stores et le YouBike",
      options: [
        "Payer le MRT, le bus, les convenience stores et le YouBike",
        "Seulement prendre le MRT",
        "Seulement payer dans les magasins",
        "Prendre l'avion et le TGV",
      ],
    },
    {
      id: "u9-ex6",
      type: "fill-blank",
      question: "___了！(On est arrivé !)",
      correctAnswer: "到",
      options: ["到", "去", "坐", "走"],
      hint: "Quel verbe signifie « arriver » ?",
    },
    {
      id: "u09-listen",
      type: "listen",
      question: "請問到台北101要坐幾號線？",
      correctAnswer: "Pour aller à Taipei 101, quelle ligne je prends ?",
      options: [
        "Pour aller à Taipei 101, quelle ligne je prends ?",
        "Combien coûte un billet ?",
        "Où est la sortie ?",
        "Je veux recharger ma carte.",
      ],
      hint: "qǐngwèn dào Táiběi yī líng yī yào zuò jǐ hào xiàn?",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-10"],
};
