import type { CourseUnit } from "@/types/course";

export const unit06: CourseUnit = {
  id: "unit-06",
  number: 6,
  title: "Les classificateurs — Partie 2",
  titleZh: "量詞——第二部分",
  chapter: 1,
  description:
    "Approfondissement des classificateurs avec 15+ mots de mesure organisés par catégorie. Comprenez la logique derrière chaque classificateur et utilisez-les naturellement.",
  icon: "📦",

  sections: [
    {
      title: "La logique des classificateurs",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pourquoi les classificateurs existent-ils ? En mandarin, on ne peut pas coller directement un nombre devant un nom. On doit intercaler un « mot de mesure » (量詞, liàngcí) qui catégorise l'objet par sa forme, sa nature ou sa fonction. C'est un système ancien qui remonte au chinois classique, où il servait à distinguer des objets par leurs propriétés physiques.",
        },
        {
          type: "text",
          content:
            "La bonne nouvelle : la plupart des classificateurs suivent une LOGIQUE visuelle. Si vous visualisez la forme de l'objet, vous pouvez souvent deviner le bon classificateur. Les choses longues et fines utilisent 條. Les choses plates utilisent 張. Les animaux utilisent 隻. Les machines utilisent 台. Ce n'est pas arbitraire — c'est un système de classification par la forme et la nature.",
        },
        {
          type: "example",
          chinese: "一條河 / 一條魚 / 一條路 / 一條褲子",
          pinyin: "yì tiáo hé / yì tiáo yú / yì tiáo lù / yì tiáo kùzi",
          translation: "une rivière / un poisson / une route / un pantalon",
          content:
            "條 (tiáo) : pour tout ce qui est LONG et FIN. Une rivière, un poisson, une route, un pantalon — tous ces objets ont une forme allongée.",
        },
        {
          type: "example",
          chinese: "一張紙 / 一張桌子 / 一張票 / 一張床",
          pinyin:
            "yì zhāng zhǐ / yì zhāng zhuōzi / yì zhāng piào / yì zhāng chuáng",
          translation: "une feuille / une table / un billet / un lit",
          content:
            "張 (zhāng) : pour tout ce qui est PLAT et qui a une SURFACE. Papier, table, billet, lit — tous ont une surface plate dominante.",
        },
        {
          type: "example",
          chinese: "一隻狗 / 一隻貓 / 一隻鳥",
          pinyin: "yì zhī gǒu / yì zhī māo / yì zhī niǎo",
          translation: "un chien / un chat / un oiseau",
          content:
            "隻 (zhī) : pour les ANIMAUX en général (surtout les petits et moyens). C'est le classificateur animal par défaut.",
        },
        {
          type: "tip",
          content:
            "Astuce mnémotechnique : quand vous apprenez un nouveau nom, imaginez-le visuellement. Est-ce que c'est long ? → 條. Plat ? → 張. Un animal ? → 隻. Un véhicule ? → 輛. Si rien ne colle → 個 (le classificateur universel).",
        },
      ],
    },
    {
      title: "Les 15 classificateurs essentiels",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Voici les 15 classificateurs les plus fréquents du mandarin, organisés par catégorie logique. Pour chacun, mémorisez le classificateur + 2-3 noms associés. C'est plus efficace que d'apprendre des listes.",
        },
        {
          type: "text",
          content:
            "CATÉGORIE 1 — Personnes. Deux classificateurs : 個 (gè, général) et 位 (wèi, formel/poli). 個 est le classificateur par défaut pour les personnes dans un contexte informel. 位 marque le respect — on l'utilise pour les clients, les professeurs, les personnes âgées.",
        },
        {
          type: "example",
          chinese: "一個朋友 / 一個人",
          pinyin: "yí gè péngyǒu / yí gè rén",
          translation: "un ami / une personne",
          content: "個 (gè) : classificateur informel et universel pour les personnes.",
        },
        {
          type: "example",
          chinese: "一位老師 / 三位客人",
          pinyin: "yí wèi lǎoshī / sān wèi kèrén",
          translation: "un professeur / trois invités",
          content:
            "位 (wèi) : classificateur poli. Au restaurant : 幾位？(jǐ wèi? — combien de personnes ?).",
        },
        {
          type: "text",
          content:
            "CATÉGORIE 2 — Animaux. Le classificateur principal est 隻 (zhī). Il couvre la grande majorité des animaux : chiens, chats, oiseaux, insectes, poissons (quand on parle de l'animal vivant).",
        },
        {
          type: "example",
          chinese: "一隻狗 / 兩隻貓 / 一隻蝴蝶",
          pinyin: "yì zhī gǒu / liǎng zhī māo / yì zhī húdié",
          translation: "un chien / deux chats / un papillon",
          content:
            "隻 (zhī) : classificateur animal par défaut. Note : pour les grands animaux comme les chevaux ou les vaches, on utilise parfois 匹 (pǐ) ou 頭 (tóu).",
        },
        {
          type: "text",
          content:
            "CATÉGORIE 3 — Véhicules. Le classificateur est 輛 (liàng). Il s'utilise pour tout ce qui a des roues : voitures, bus, vélos, motos, taxis.",
        },
        {
          type: "example",
          chinese: "一輛車 / 一輛計程車 / 一輛腳踏車",
          pinyin: "yí liàng chē / yí liàng jìchéngchē / yí liàng jiǎotàchē",
          translation: "une voiture / un taxi / un vélo",
          content:
            "輛 (liàng) : pour tous les véhicules. À Taiwan, le taxi s'appelle 計程車 (pas 出租車 comme en Chine continentale).",
        },
        {
          type: "text",
          content:
            "CATÉGORIE 4 — Vêtements et affaires. Le classificateur est 件 (jiàn). Il couvre les vêtements du haut (chemise, veste, manteau) et aussi les « affaires » ou « choses » abstraites (une affaire, un événement).",
        },
        {
          type: "example",
          chinese: "一件衣服 / 一件外套 / 一件事",
          pinyin: "yí jiàn yīfú / yí jiàn wàitào / yí jiàn shì",
          translation: "un vêtement / un manteau / une affaire (chose)",
          content:
            "件 (jiàn) : vêtements du haut + affaires/choses abstraites. « C'est une petite chose » = 這是一件小事。",
        },
        {
          type: "text",
          content:
            "CATÉGORIE 5 — Choses plates (surfaces). 張 (zhāng) — déjà vu en détail. Papier, tables, billets, lits, cartes, photos.",
        },
        {
          type: "example",
          chinese: "一張照片 / 一張地圖 / 一張信用卡",
          pinyin: "yì zhāng zhàopiàn / yì zhāng dìtú / yì zhāng xìnyòngkǎ",
          translation: "une photo / une carte (géo) / une carte de crédit",
          content: "張 (zhāng) : tout ce qui a une surface plate. Très fréquent au quotidien.",
        },
        {
          type: "text",
          content:
            "CATÉGORIE 6 — Choses longues. 條 (tiáo) — déjà vu. Rivières, routes, poissons, pantalons, écharpes, nouvelles (une nouvelle = 一條新聞).",
        },
        {
          type: "text",
          content:
            "CATÉGORIE 7 — Livres et documents reliés. 本 (běn). Pour tout ce qui est relié : livres, cahiers, magazines, dictionnaires, passeports.",
        },
        {
          type: "example",
          chinese: "一本書 / 一本雜誌 / 一本護照",
          pinyin: "yì běn shū / yì běn zázhì / yì běn hùzhào",
          translation: "un livre / un magazine / un passeport",
          content:
            "本 (běn) : pour les documents reliés. Le passeport aussi — il a une couverture et des pages.",
        },
        {
          type: "text",
          content:
            "CATÉGORIE 8 — Tranches et morceaux. 片 (piàn). Pour les choses en tranches, en morceaux plats, ou les étendues : une tranche de pain, un paysage, un CD.",
        },
        {
          type: "example",
          chinese: "一片麵包 / 一片風景 / 一片葉子",
          pinyin: "yí piàn miànbāo / yí piàn fēngjǐng / yí piàn yèzi",
          translation: "une tranche de pain / un paysage / une feuille (d'arbre)",
          content:
            "片 (piàn) : tranches, morceaux plats, étendues. 一片風景 évoque une « étendue » de paysage.",
        },
        {
          type: "text",
          content:
            "CATÉGORIE 9 — Bouteilles. 瓶 (píng). Spécifique aux contenants en forme de bouteille : eau, bière, vin, sauce soja.",
        },
        {
          type: "example",
          chinese: "一瓶水 / 一瓶啤酒 / 兩瓶可樂",
          pinyin: "yì píng shuǐ / yì píng píjiǔ / liǎng píng kělè",
          translation: "une bouteille d'eau / une bière / deux cocas",
          content:
            "瓶 (píng) : pour les bouteilles. Au dépanneur (便利商店) : 我要一瓶水。",
        },
        {
          type: "text",
          content:
            "CATÉGORIE 10 — Fois / occurrences. 次 (cì). Pour compter les occurrences d'une action : une fois, la première fois, combien de fois.",
        },
        {
          type: "example",
          chinese: "一次 / 第一次 / 很多次",
          pinyin: "yí cì / dì yī cì / hěn duō cì",
          translation: "une fois / la première fois / beaucoup de fois",
          content:
            "次 (cì) : pour les occurrences. 這是我第一次來台灣 = C'est la première fois que je viens à Taiwan.",
        },
        {
          type: "text",
          content:
            "Autres classificateurs courants : 杯 (bēi) pour les tasses/verres (一杯咖啡), 碗 (wǎn) pour les bols (一碗麵), 盤 (pán) pour les assiettes/plats (一盤炒飯), 雙 (shuāng) pour les paires (一雙筷子, une paire de baguettes).",
        },
        {
          type: "example",
          chinese: "一杯咖啡 / 一碗麵 / 一盤炒飯 / 一雙筷子",
          pinyin:
            "yì bēi kāfēi / yì wǎn miàn / yì pán chǎofàn / yì shuāng kuàizi",
          translation:
            "un café / un bol de nouilles / un plat de riz frit / une paire de baguettes",
          content:
            "Classificateurs de contenants : 杯 (verre/tasse), 碗 (bol), 盤 (assiette/plat), 雙 (paire).",
        },
        {
          type: "warning",
          content:
            "La structure est TOUJOURS : nombre + classificateur + nom. Jamais nombre + nom directement. 三本書 (trois livres) ✓. 三書 ✗. C'est une erreur que font tous les débutants francophones — en français on dit « trois livres » sans classificateur.",
        },
      ],
    },
    {
      title: "Classificateurs dans la vie à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Au restaurant à Taiwan, vous utiliserez des classificateurs à chaque commande. Le serveur vous demandera 幾位？(jǐ wèi? — combien de personnes ?) et vous commanderez avec les bons classificateurs de contenants.",
        },
        {
          type: "example",
          chinese: "一碗滷肉飯 / 一杯珍珠奶茶 / 一盤水餃",
          pinyin: "yì wǎn lǔròufàn / yì bēi zhēnzhū nǎichá / yì pán shuǐjiǎo",
          translation:
            "un bol de riz au porc braisé / un bubble tea / une assiette de raviolis",
          content:
            "Les trois classiques de la street food taiwanaise avec leurs classificateurs : 碗 (bol), 杯 (verre), 盤 (assiette).",
        },
        {
          type: "text",
          content:
            "Au marché traditionnel (傳統市場), vous entendrez un classificateur spécial : 斤 (jīn). C'est l'unité de poids taiwanaise, qui vaut environ 600 grammes (pas 500g comme en Chine continentale). Quand le vendeur dit 一斤五十塊 (yì jīn wǔshí kuài), ça veut dire « 50 dollars taiwanais les 600g ».",
        },
        {
          type: "example",
          chinese: "這個蘋果一斤多少錢？",
          pinyin: "zhège píngguǒ yì jīn duōshǎo qián?",
          translation: "Combien coûte un jin (600g) de ces pommes ?",
          content:
            "Au marché, on achète au poids avec 斤 (jīn). C'est l'unité standard à Taiwan — pas le kilogramme.",
        },
        {
          type: "text",
          content:
            "Classificateur taiwanais notable : 台 (tái) pour les machines et appareils. 一台電腦 (un ordinateur), 一台冷氣 (un climatiseur), 一台電視 (un téléviseur). En Chine continentale, on dit plutôt 臺 ou on utilise d'autres classificateurs, mais à Taiwan 台 est standard et très fréquent.",
        },
        {
          type: "example",
          chinese: "一台電腦 / 一台冷氣 / 一台手機",
          pinyin: "yì tái diànnǎo / yì tái lěngqì / yì tái shǒujī",
          translation: "un ordinateur / un climatiseur / un téléphone",
          content:
            "台 (tái) : classificateur taiwanais pour les machines et appareils électroniques.",
        },
        {
          type: "tip",
          content:
            "Quand vous ne connaissez pas le bon classificateur, utilisez 個 (gè). C'est le classificateur universel. Les Taiwanais comprendront toujours, même si ce n'est pas le plus précis. C'est comme dire « un truc de... » en français — pas élégant mais fonctionnel. Avec le temps, vous remplacerez les 個 par les classificateurs corrects.",
        },
      ],
    },
    {
      title: "Exercices de sélection",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Les exercices suivants vous entraînent à choisir le bon classificateur. La méthode : visualisez l'objet, identifiez sa caractéristique dominante (forme, nature, contenant), puis sélectionnez le classificateur correspondant.",
        },
        {
          type: "text",
          content:
            "Stratégie de choix : 1) Est-ce une personne ? → 個 ou 位. 2) Est-ce un animal ? → 隻. 3) Est-ce un véhicule ? → 輛. 4) Est-ce long et fin ? → 條. 5) Est-ce plat ? → 張. 6) Est-ce relié (livre) ? → 本. 7) Est-ce un contenant ? → 杯/碗/瓶/盤. 8) Rien de tout ça ? → 個.",
        },
        {
          type: "example",
          chinese: "我要買兩___書。",
          pinyin: "wǒ yào mǎi liǎng ___ shū.",
          translation: "Je veux acheter deux livres. → 本 (běn)",
          content:
            "Un livre est relié, il a des pages → classificateur 本. Réponse : 兩本書。",
        },
        {
          type: "example",
          chinese: "桌子上有三___貓。",
          pinyin: "zhuōzi shàng yǒu sān ___ māo.",
          translation: "Il y a trois chats sur la table. → 隻 (zhī)",
          content: "Un chat est un animal → classificateur 隻. Réponse : 三隻貓。",
        },
        {
          type: "example",
          chinese: "請給我一___水。",
          pinyin: "qǐng gěi wǒ yì ___ shuǐ.",
          translation:
            "S'il vous plaît, donnez-moi un verre/une bouteille d'eau. → 杯 ou 瓶",
          content:
            "Ça dépend du contenant ! Au restaurant → 杯 (verre). Au dépanneur → 瓶 (bouteille).",
        },
        {
          type: "tip",
          content:
            "Piège courant : 一件衣服 (un vêtement, 件) mais 一條褲子 (un pantalon, 條). Pourquoi ? Le pantalon a des jambes longues (forme allongée → 條), alors que la chemise est un « article » vestimentaire (件). La logique n'est pas toujours intuitive — certains classificateurs doivent simplement être mémorisés avec le nom.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Au supermarché 全聯 (PX Mart) à Taipei. Vous faites vos courses et demandez de l'aide à un employé.",
    lines: [
      {
        speaker: "Vous",
        chinese: "請問，牛奶在哪裡？",
        pinyin: "qǐngwèn, niúnǎi zài nǎlǐ?",
        french: "Excusez-moi, où est le lait ?",
      },
      {
        speaker: "Employé",
        chinese: "在那邊。你要幾瓶？",
        pinyin: "zài nàbiān. nǐ yào jǐ píng?",
        french: "Là-bas. Vous en voulez combien de bouteilles ?",
      },
      {
        speaker: "Vous",
        chinese: "兩瓶牛奶，一瓶果汁。還有，我要一包米。",
        pinyin: "liǎng píng niúnǎi, yì píng guǒzhī. háiyǒu, wǒ yào yì bāo mǐ.",
        french:
          "Deux bouteilles de lait, une bouteille de jus. Et aussi, je veux un paquet de riz.",
        note: "包 (bāo) est le classificateur pour les paquets/sacs.",
      },
      {
        speaker: "Employé",
        chinese: "好。你需要幾雙筷子？今天買一送一。",
        pinyin: "hǎo. nǐ xūyào jǐ shuāng kuàizi? jīntiān mǎi yī sòng yī.",
        french:
          "D'accord. Vous avez besoin de combien de paires de baguettes ? Aujourd'hui c'est un acheté un offert.",
      },
      {
        speaker: "Vous",
        chinese: "太好了！我要三雙。一共多少錢？",
        pinyin: "tài hǎo le! wǒ yào sān shuāng. yígòng duōshǎo qián?",
        french: "Super ! J'en veux trois paires. Combien ça fait en tout ?",
      },
      {
        speaker: "Employé",
        chinese: "一共兩百五十塊。需要塑膠袋嗎？一個兩塊。",
        pinyin:
          "yígòng liǎng bǎi wǔshí kuài. xūyào sùjiāodài ma? yí gè liǎng kuài.",
        french:
          "250 dollars en tout. Vous avez besoin d'un sac plastique ? C'est 2 dollars pièce.",
        note: "À Taiwan, les sacs plastiques sont payants dans les magasins.",
      },
    ],
  },

  keyPoints: [
    "Les classificateurs catégorisent les objets par leur FORME ou NATURE — ce n'est pas arbitraire.",
    "Structure obligatoire : nombre + classificateur + nom. Jamais nombre + nom directement.",
    "條 = long/fin, 張 = plat, 隻 = animaux, 輛 = véhicules, 件 = vêtements/affaires, 本 = livres.",
    "En cas de doute, utilisez 個 — c'est le classificateur universel, toujours compris.",
    "À Taiwan : 斤 (jīn ≈ 600g) au marché, 台 (tái) pour les machines, 杯 pour le bubble tea.",
  ],

  vocabulary: [
    {
      character: "隻",
      pinyin: "zhī",
      zhuyin: "ㄓ",
      french: "Classificateur (animaux)",
      english: "Classifier (animals)",
      example: {
        sentence: "他有兩隻狗。",
        pinyin: "tā yǒu liǎng zhī gǒu.",
        translation: "Il a deux chiens.",
      },
    },
    {
      character: "輛",
      pinyin: "liàng",
      zhuyin: "ㄌㄧㄤˋ",
      french: "Classificateur (véhicules)",
      english: "Classifier (vehicles)",
      example: {
        sentence: "我要叫一輛計程車。",
        pinyin: "wǒ yào jiào yí liàng jìchéngchē.",
        translation: "Je veux appeler un taxi.",
      },
    },
    {
      character: "件",
      pinyin: "jiàn",
      zhuyin: "ㄐㄧㄢˋ",
      french: "Classificateur (vêtements, affaires)",
      english: "Classifier (clothes, matters)",
      example: {
        sentence: "這件衣服很好看。",
        pinyin: "zhè jiàn yīfú hěn hǎokàn.",
        translation: "Ce vêtement est joli.",
      },
    },
    {
      character: "張",
      pinyin: "zhāng",
      zhuyin: "ㄓㄤ",
      french: "Classificateur (objets plats)",
      english: "Classifier (flat objects)",
      example: {
        sentence: "給我一張紙。",
        pinyin: "gěi wǒ yì zhāng zhǐ.",
        translation: "Donne-moi une feuille de papier.",
      },
    },
    {
      character: "條",
      pinyin: "tiáo",
      zhuyin: "ㄊㄧㄠˊ",
      french: "Classificateur (objets longs)",
      english: "Classifier (long objects)",
      example: {
        sentence: "這條路很長。",
        pinyin: "zhè tiáo lù hěn cháng.",
        translation: "Cette route est très longue.",
      },
    },
    {
      character: "本",
      pinyin: "běn",
      zhuyin: "ㄅㄣˇ",
      french: "Classificateur (livres)",
      english: "Classifier (books)",
      example: {
        sentence: "我買了三本書。",
        pinyin: "wǒ mǎi le sān běn shū.",
        translation: "J'ai acheté trois livres.",
      },
    },
    {
      character: "片",
      pinyin: "piàn",
      zhuyin: "ㄆㄧㄢˋ",
      french: "Classificateur (tranches, morceaux)",
      english: "Classifier (slices, pieces)",
      example: {
        sentence: "我要一片蛋糕。",
        pinyin: "wǒ yào yí piàn dàngāo.",
        translation: "Je veux une part de gâteau.",
      },
    },
    {
      character: "瓶",
      pinyin: "píng",
      zhuyin: "ㄆㄧㄥˊ",
      french: "Classificateur (bouteilles)",
      english: "Classifier (bottles)",
      example: {
        sentence: "一瓶水多少錢？",
        pinyin: "yì píng shuǐ duōshǎo qián?",
        translation: "Combien coûte une bouteille d'eau ?",
      },
    },
    {
      character: "次",
      pinyin: "cì",
      zhuyin: "ㄘˋ",
      french: "Fois (occurrence)",
      english: "Time (occurrence)",
      example: {
        sentence: "這是我第一次來台灣。",
        pinyin: "zhè shì wǒ dì yī cì lái táiwān.",
        translation: "C'est la première fois que je viens à Taiwan.",
      },
    },
    {
      character: "位",
      pinyin: "wèi",
      zhuyin: "ㄨㄟˋ",
      french: "Classificateur (personnes, poli)",
      english: "Classifier (people, polite)",
      example: {
        sentence: "請問幾位？",
        pinyin: "qǐngwèn jǐ wèi?",
        translation: "Combien de personnes ? (au restaurant)",
      },
    },
    {
      character: "斤",
      pinyin: "jīn",
      zhuyin: "ㄐㄧㄣ",
      french: "Jin (unité de poids ≈ 600g)",
      english: "Jin (weight unit ≈ 600g)",
      example: {
        sentence: "這個水果一斤六十塊。",
        pinyin: "zhège shuǐguǒ yì jīn liùshí kuài.",
        translation: "Ces fruits coûtent 60 dollars le jin.",
      },
    },
    {
      character: "衣服",
      pinyin: "yīfú",
      zhuyin: "ㄧ ㄈㄨˊ",
      french: "Vêtement",
      english: "Clothes",
      example: {
        sentence: "我要買幾件衣服。",
        pinyin: "wǒ yào mǎi jǐ jiàn yīfú.",
        translation: "Je veux acheter quelques vêtements.",
      },
    },
    {
      character: "褲子",
      pinyin: "kùzi",
      zhuyin: "ㄎㄨˋ ˙ㄗ",
      french: "Pantalon",
      english: "Pants",
      example: {
        sentence: "這條褲子太長了。",
        pinyin: "zhè tiáo kùzi tài cháng le.",
        translation: "Ce pantalon est trop long.",
      },
    },
    {
      character: "路",
      pinyin: "lù",
      zhuyin: "ㄌㄨˋ",
      french: "Route, chemin",
      english: "Road",
      example: {
        sentence: "這條路很漂亮。",
        pinyin: "zhè tiáo lù hěn piàoliang.",
        translation: "Cette route est très jolie.",
      },
    },
    {
      character: "紙",
      pinyin: "zhǐ",
      zhuyin: "ㄓˇ",
      french: "Papier",
      english: "Paper",
      example: {
        sentence: "你有沒有一張紙？",
        pinyin: "nǐ yǒu méiyǒu yì zhāng zhǐ?",
        translation: "As-tu une feuille de papier ?",
      },
    },
  ],

  exercises: [
    {
      id: "u6-ex1",
      type: "fill-blank",
      question: "我要買一___書。(Je veux acheter un livre.)",
      correctAnswer: "本",
      options: ["本", "張", "條", "個"],
      hint: "Un livre est relié, il a des pages.",
    },
    {
      id: "u6-ex2",
      type: "fill-blank",
      question: "桌子上有兩___貓。(Il y a deux chats sur la table.)",
      correctAnswer: "隻",
      options: ["隻", "個", "條", "件"],
      hint: "Le chat est un animal.",
    },
    {
      id: "u6-ex3",
      type: "fill-blank",
      question:
        "我要叫一___計程車。(Je veux appeler un taxi.)",
      correctAnswer: "輛",
      options: ["輛", "台", "個", "隻"],
      hint: "Un taxi est un véhicule avec des roues.",
    },
    {
      id: "u6-ex4",
      type: "fill-blank",
      question: "請給我一___水。(Donnez-moi une bouteille d'eau.)",
      correctAnswer: "瓶",
      options: ["瓶", "杯", "碗", "個"],
      hint: "L'eau est dans une bouteille.",
    },
    {
      id: "u6-ex5",
      type: "comprehension",
      question:
        "Pourquoi utilise-t-on 條 pour un pantalon et un poisson ?",
      correctAnswer:
        "Parce que les deux ont une forme allongée — 條 est pour les choses longues et fines",
      options: [
        "Parce que les deux ont une forme allongée — 條 est pour les choses longues et fines",
        "Parce qu'ils sont de la même couleur",
        "C'est une règle arbitraire sans logique",
        "Parce qu'on les achète au même endroit",
      ],
    },
    {
      id: "u6-ex6",
      type: "comprehension",
      question: "Quelle est la différence entre 個 et 位 pour les personnes ?",
      correctAnswer:
        "個 est informel/général, 位 est poli/formel (pour clients, professeurs, etc.)",
      options: [
        "個 est informel/général, 位 est poli/formel (pour clients, professeurs, etc.)",
        "個 est pour les femmes, 位 pour les hommes",
        "Ils sont interchangeables",
        "個 est pour les enfants, 位 pour les adultes",
      ],
    },
    {
      id: "u6-ex7",
      type: "fill-blank",
      question:
        "這___衣服很好看。(Ce vêtement est joli.)",
      correctAnswer: "件",
      options: ["件", "條", "張", "個"],
      hint: "Les vêtements du haut utilisent ce classificateur.",
    },
    {
      id: "u6-ex8",
      type: "translate",
      question:
        "Comment dit-on « C'est la première fois que je viens à Taiwan » ?",
      correctAnswer: "這是我第一次來台灣。",
      options: [
        "這是我第一次來台灣。",
        "這是我一個來台灣。",
        "我第一本來台灣。",
        "我一次來台灣了。",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-05"],
};
