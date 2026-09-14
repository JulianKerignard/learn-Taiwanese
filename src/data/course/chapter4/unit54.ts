import type { CourseUnit } from "@/types/course";

export const unit54: CourseUnit = {
  id: "unit-54",
  number: 54,
  title: "Le voyage et les vacances",
  titleZh: "旅行與假期",
  chapter: 4,
  description:
    "Planifier un voyage, réserver un hôtel et se déplacer à Taiwan. Apprenez à utiliser 先...再... pour séquencer des actions, 從A到B pour exprimer un trajet, et découvrez les incontournables du voyage à Taïwan : la haute vitesse ferroviaire, les plages de Kenting et le lac du Soleil et de la Lune.",
  icon: "✈️",

  sections: [
    {
      title: "Le vocabulaire du voyage",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Voyager à Taïwan est une expérience incroyable, mais encore faut-il connaître les mots essentiels ! Le vocabulaire du voyage couvre la préparation (護照, 簽證, 機票, 行李), l'hébergement (飯店, 旅館, 訂房, 退房) et les activités sur place (景點, 導遊, 紀念品). La plupart de ces mots sont des composés logiques dont le sens se devine en analysant chaque caractère.",
        },
        {
          type: "example",
          chinese: "我想去台灣旅行。",
          pinyin: "wǒ xiǎng qù Táiwān lǚxíng.",
          translation: "Je veux aller voyager à Taïwan.",
          content: "旅行 (lǚxíng) = voyager. Structure : 想 + 去 + lieu + activité.",
        },
        {
          type: "example",
          chinese: "你的護照帶了嗎？",
          pinyin: "nǐ de hùzhào dài le ma?",
          translation: "Tu as pris ton passeport ?",
          content: "護照 (hùzhào) = passeport. 帶 = emporter, porter sur soi. 了 marque l'action accomplie.",
        },
        {
          type: "example",
          chinese: "我已經買好機票了。",
          pinyin: "wǒ yǐjīng mǎi hǎo jīpiào le.",
          translation: "J'ai déjà acheté les billets d'avion.",
          content: "機票 (jīpiào) = billet d'avion (機 = avion, 票 = billet). 買好 = avoir fini d'acheter.",
        },
        {
          type: "example",
          chinese: "行李太多了，怎麼辦？",
          pinyin: "xíngli tài duō le, zěnme bàn?",
          translation: "Il y a trop de bagages, comment faire ?",
          content: "行李 (xíngli) = bagages. 太...了 = trop. 怎麼辦 = que faire ?",
        },
        {
          type: "example",
          chinese: "這個飯店的房間很大。",
          pinyin: "zhège fàndiàn de fángjiān hěn dà.",
          translation: "Les chambres de cet hôtel sont très grandes.",
          content: "飯店 (fàndiàn) = hôtel. 房間 = chambre. 很大 = très grand.",
        },
        {
          type: "example",
          chinese: "我要訂房，兩個晚上。",
          pinyin: "wǒ yào dìngfáng, liǎng gè wǎnshàng.",
          translation: "Je voudrais réserver une chambre, pour deux nuits.",
          content: "訂房 (dìngfáng) = réserver une chambre (訂 = réserver, 房 = chambre).",
        },
        {
          type: "tip",
          content:
            "En chinois, 飯店 (fàndiàn) et 旅館 (lǚguǎn) signifient tous les deux « hôtel », mais 飯店 désigne plutôt un grand hôtel (souvent avec restaurant), tandis que 旅館 est plus modeste, comme une auberge ou un petit hôtel. On trouve aussi 民宿 (mínsù, maison d'hôtes) très populaire à Taïwan.",
        },
      ],
    },
    {
      title: "先...再... / 從A到B / 多久",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "先...再... (xiān...zài...) signifie « d'abord... ensuite... ». Cette structure permet de séquencer deux actions dans le temps. Le sujet apparaît avant 先, et les deux verbes s'enchaînent logiquement. C'est indispensable pour décrire un itinéraire ou planifier des étapes.",
        },
        {
          type: "example",
          chinese: "我們先去花蓮，再去墾丁。",
          pinyin: "wǒmen xiān qù Huālián, zài qù Kěndīng.",
          translation: "On va d'abord à Hualien, puis à Kenting.",
          content: "先...再... séquence deux destinations. Très naturel pour planifier un voyage.",
        },
        {
          type: "example",
          chinese: "先訂房，再買機票。",
          pinyin: "xiān dìngfáng, zài mǎi jīpiào.",
          translation: "D'abord réserver la chambre, ensuite acheter les billets d'avion.",
          content: "先...再... pour séquencer des préparatifs. Le sujet peut être omis si évident.",
        },
        {
          type: "example",
          chinese: "先吃早餐，再出發。",
          pinyin: "xiān chī zǎocān, zài chūfā.",
          translation: "D'abord prendre le petit-déjeuner, puis partir.",
          content: "出發 (chūfā) = partir, se mettre en route. Très utile en voyage.",
        },
        {
          type: "text",
          content:
            "從A到B (cóng A dào B) signifie « de A à B ». Cette structure exprime un trajet d'un point de départ à un point d'arrivée, que ce soit dans l'espace ou dans le temps. On peut y ajouter un moyen de transport avec 坐 (zuò, prendre) ou 搭 (dā, prendre).",
        },
        {
          type: "example",
          chinese: "從台北到花蓮坐火車要兩個小時。",
          pinyin: "cóng Táiběi dào Huālián zuò huǒchē yào liǎng gè xiǎoshí.",
          translation: "De Taipei à Hualien en train, il faut deux heures.",
          content: "從...到... + moyen de transport + 要 + durée. Structure complète pour décrire un trajet.",
        },
        {
          type: "example",
          chinese: "從機場到飯店怎麼去？",
          pinyin: "cóng jīchǎng dào fàndiàn zěnme qù?",
          translation: "Comment aller de l'aéroport à l'hôtel ?",
          content: "從...到... + 怎麼去 pour demander comment se rendre quelque part.",
        },
        {
          type: "text",
          content:
            "多久 (duōjiǔ) signifie « combien de temps ». On l'utilise pour demander une durée : 要多久？(yào duōjiǔ, ça prend combien de temps ?). La réponse donne la durée directement après le verbe : 坐火車要兩個小時 (il faut deux heures en train).",
        },
        {
          type: "example",
          chinese: "從這裡到日月潭要多久？",
          pinyin: "cóng zhèlǐ dào Rìyuètán yào duōjiǔ?",
          translation: "D'ici au lac du Soleil et de la Lune, ça prend combien de temps ?",
          content: "從...到... + 要多久 : question type pour connaître la durée d'un trajet.",
        },
        {
          type: "example",
          chinese: "坐高鐵只要一個半小時。",
          pinyin: "zuò gāotiě zhǐ yào yí gè bàn xiǎoshí.",
          translation: "En train à grande vitesse, il ne faut qu'une heure et demie.",
          content: "只要 = il ne faut que. 一個半小時 = une heure et demie. 高鐵 = TGV taïwanais.",
        },
        {
          type: "comparison",
          content:
            "先...再... vs 從...到... : 先去花蓮，再去台東 décrit un ORDRE d'actions (d'abord Hualien, puis Taitung). 從花蓮到台東 décrit un TRAJET spatial (de Hualien à Taitung). Les deux peuvent se combiner : 先從台北到花蓮，再從花蓮到台東。",
        },
      ],
    },
    {
      title: "Voyager à Taïwan : transports et destinations",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Taïwan est une île compacte (environ 36 000 km²) mais incroyablement diverse. Grâce à un réseau de transport moderne et efficace, il est facile de voyager d'un bout à l'autre en quelques heures. Le joyau du système est le 高鐵 (gāotiě), le train à grande vitesse qui relie Taipei à Kaohsiung (左營) en seulement 1h30, à plus de 300 km/h.",
        },
        {
          type: "example",
          chinese: "我想坐高鐵去高雄。",
          pinyin: "wǒ xiǎng zuò gāotiě qù Gāoxióng.",
          translation: "Je veux prendre le TGV pour aller à Kaohsiung.",
          content: "高鐵 (gāotiě) = train à grande vitesse. 坐 + transport + 去 + lieu.",
        },
        {
          type: "text",
          content:
            "墾丁 (Kěndīng, Kenting) est la station balnéaire la plus célèbre de Taïwan, située à l'extrême sud de l'île. On y trouve des plages magnifiques, un parc national et une ambiance festive. 花蓮 (Huālián, Hualien) est la porte d'entrée des gorges de Taroko (太魯閣, Tàilǔgé), l'un des plus beaux sites naturels d'Asie.",
        },
        {
          type: "example",
          chinese: "花蓮的太魯閣很漂亮，一定要去看看。",
          pinyin: "Huālián de Tàilǔgé hěn piàoliang, yídìng yào qù kànkan.",
          translation: "Les gorges de Taroko à Hualien sont magnifiques, il faut absolument aller voir.",
          content: "一定要 = il faut absolument. 看看 = aller jeter un coup d'oeil (redoublement atténuant).",
        },
        {
          type: "example",
          chinese: "日月潭是台灣最有名的湖。",
          pinyin: "Rìyuètán shì Táiwān zuì yǒumíng de hú.",
          translation: "Le lac du Soleil et de la Lune est le lac le plus célèbre de Taïwan.",
          content: "日月潭 (Rìyuètán) = Sun Moon Lake. 最 + adjectif + 的 = superlatif.",
        },
        {
          type: "text",
          content:
            "Pour se déplacer à Taïwan, on utilise le 捷運 (jiéyùn, MRT/métro) dans les grandes villes, le 公車 (gōngchē, bus), le 火車 (huǒchē, train régional), le 高鐵 (gāotiě, TGV) pour les longues distances, et le 機車 (jīchē, scooter) — le moyen de transport le plus emblématique de l'île ! La carte 悠遊卡 (Yōuyóukǎ, EasyCard) est indispensable : elle fonctionne dans les transports, les magasins et même certains restaurants.",
        },
        {
          type: "tip",
          content:
            "Si vous voyagez en train régional (火車), pensez à réserver à l'avance pour les trajets populaires comme Taipei-Hualien, surtout pendant les vacances. Le site de la Taiwan Railways (台鐵, Táitiě) permet de réserver en ligne. Pour le 高鐵, vous pouvez acheter des billets en promotion (早鳥票, zǎoniǎo piào, billets early bird) avec jusqu'à 35% de réduction !",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous planifiez un voyage de week-end à 花蓮 (Hualien) avec votre ami(e) 小明 (Xiǎo Míng). Vous discutez de l'itinéraire et des préparatifs.",
    lines: [
      {
        speaker: "你",
        chinese: "小明，這個週末我們去花蓮玩，好不好？",
        pinyin: "Xiǎo Míng, zhège zhōumò wǒmen qù Huālián wán, hǎo bù hǎo?",
        french: "Xiao Ming, ce week-end on va s'amuser à Hualien, d'accord ?",
      },
      {
        speaker: "小明",
        chinese: "好啊！從台北到花蓮要多久？",
        pinyin: "hǎo a! cóng Táiběi dào Huālián yào duōjiǔ?",
        french: "D'accord ! De Taipei à Hualien, ça prend combien de temps ?",
        note: "從A到B + 要多久 pour demander la durée d'un trajet.",
      },
      {
        speaker: "你",
        chinese: "坐火車大概要兩個小時。我已經買好機票...不對，火車票了！",
        pinyin: "zuò huǒchē dàgài yào liǎng gè xiǎoshí. wǒ yǐjīng mǎi hǎo jīpiào... búduì, huǒchē piào le!",
        french: "En train ça prend environ deux heures. J'ai déjà acheté les billets d'av... non, les billets de train !",
      },
      {
        speaker: "小明",
        chinese: "太好了！那飯店訂了嗎？",
        pinyin: "tài hǎo le! nà fàndiàn dìng le ma?",
        french: "Super ! Et l'hôtel, c'est réservé ?",
        note: "訂了嗎 = est-ce que c'est réservé ? 了 marque l'accomplissement.",
      },
      {
        speaker: "你",
        chinese: "還沒，我們先訂房，再想去哪裡玩。",
        pinyin: "hái méi, wǒmen xiān dìngfáng, zài xiǎng qù nǎlǐ wán.",
        french: "Pas encore, on réserve d'abord la chambre, et ensuite on réfléchit où aller.",
        note: "先...再... pour séquencer les actions : d'abord réserver, puis planifier.",
      },
      {
        speaker: "小明",
        chinese: "我想去太魯閣看風景，還想去夜市吃東西。",
        pinyin: "wǒ xiǎng qù Tàilǔgé kàn fēngjǐng, hái xiǎng qù yèshì chī dōngxi.",
        french: "Je veux aller voir les paysages à Taroko, et aussi aller au marché de nuit manger.",
      },
      {
        speaker: "你",
        chinese: "沒問題！先去太魯閣，再去夜市，這樣最好。別忘了帶相機拍照片！",
        pinyin: "méi wèntí! xiān qù Tàilǔgé, zài qù yèshì, zhèyàng zuì hǎo. bié wàng le dài xiàngjī pāi zhàopiàn!",
        french: "Pas de problème ! D'abord Taroko, puis le marché de nuit, c'est le mieux. N'oublie pas d'emporter l'appareil photo !",
        note: "先...再... pour planifier l'ordre des visites. 別忘了 = n'oublie pas.",
      },
      {
        speaker: "小明",
        chinese: "好，我也要買一些紀念品回來送朋友。出發吧！",
        pinyin: "hǎo, wǒ yě yào mǎi yìxiē jìniànpǐn huílái sòng péngyou. chūfā ba!",
        french: "D'accord, je veux aussi acheter des souvenirs à ramener pour les offrir aux amis. En route !",
        note: "紀念品 = souvenirs. 回來 = revenir/ramener. 出發 = partir.",
      },
    ],
  },

  keyPoints: [
    "先...再... pour séquencer deux actions : 先訂房，再買機票 (d'abord réserver, puis acheter les billets).",
    "從A到B pour exprimer un trajet : 從台北到花蓮 (de Taipei à Hualien).",
    "要多久 pour demander une durée : 從這裡到那裡要多久？(d'ici à là-bas, combien de temps ?).",
    "訂房 = réserver une chambre, 退房 = quitter la chambre (check-out).",
    "Le 高鐵 (TGV taïwanais) relie Taipei à Kaohsiung en 1h30. La 悠遊卡 (EasyCard) est indispensable pour les transports.",
  ],

  vocabulary: [
    {
      character: "旅行",
      pinyin: "lǚxíng",
      zhuyin: "ㄌㄩˇ ㄒㄧㄥˊ",
      french: "Voyager, voyage",
      english: "To travel, trip",
      example: {
        sentence: "我想去台灣旅行。",
        pinyin: "wǒ xiǎng qù Táiwān lǚxíng.",
        translation: "Je veux aller voyager à Taïwan.",
      },
    },
    {
      character: "機票",
      pinyin: "jīpiào",
      zhuyin: "ㄐㄧ ㄆㄧㄠˋ",
      french: "Billet d'avion",
      english: "Plane ticket",
      example: {
        sentence: "機票多少錢？",
        pinyin: "jīpiào duōshǎo qián?",
        translation: "Combien coûte le billet d'avion ?",
      },
    },
    {
      character: "護照",
      pinyin: "hùzhào",
      zhuyin: "ㄏㄨˋ ㄓㄠˋ",
      french: "Passeport",
      english: "Passport",
      example: {
        sentence: "請給我看你的護照。",
        pinyin: "qǐng gěi wǒ kàn nǐ de hùzhào.",
        translation: "Veuillez me montrer votre passeport.",
      },
    },
    {
      character: "行李",
      pinyin: "xíngli",
      zhuyin: "ㄒㄧㄥˊ ㄌㄧˇ",
      french: "Bagages",
      english: "Luggage",
      example: {
        sentence: "你的行李在哪裡？",
        pinyin: "nǐ de xíngli zài nǎlǐ?",
        translation: "Où sont tes bagages ?",
      },
    },
    {
      character: "飯店",
      pinyin: "fàndiàn",
      zhuyin: "ㄈㄢˋ ㄉㄧㄢˋ",
      french: "Hôtel",
      english: "Hotel",
      example: {
        sentence: "這家飯店很不錯。",
        pinyin: "zhè jiā fàndiàn hěn búcuò.",
        translation: "Cet hôtel est très bien.",
      },
    },
    {
      character: "訂房",
      pinyin: "dìngfáng",
      zhuyin: "ㄉㄧㄥˋ ㄈㄤˊ",
      french: "Réserver une chambre",
      english: "To book a room",
      example: {
        sentence: "我要在網路上訂房。",
        pinyin: "wǒ yào zài wǎnglù shàng dìngfáng.",
        translation: "Je veux réserver une chambre en ligne.",
      },
    },
    {
      character: "退房",
      pinyin: "tuìfáng",
      zhuyin: "ㄊㄨㄟˋ ㄈㄤˊ",
      french: "Quitter la chambre (check-out)",
      english: "To check out",
      example: {
        sentence: "請問幾點退房？",
        pinyin: "qǐngwèn jǐ diǎn tuìfáng?",
        translation: "Excusez-moi, à quelle heure est le check-out ?",
      },
    },
    {
      character: "景點",
      pinyin: "jǐngdiǎn",
      zhuyin: "ㄐㄧㄥˇ ㄉㄧㄢˇ",
      french: "Site touristique",
      english: "Tourist attraction",
      example: {
        sentence: "花蓮有很多景點。",
        pinyin: "Huālián yǒu hěn duō jǐngdiǎn.",
        translation: "Hualien a beaucoup de sites touristiques.",
      },
    },
    {
      character: "地圖",
      pinyin: "dìtú",
      zhuyin: "ㄉㄧˋ ㄊㄨˊ",
      french: "Carte, plan",
      english: "Map",
      example: {
        sentence: "你有台灣的地圖嗎？",
        pinyin: "nǐ yǒu Táiwān de dìtú ma?",
        translation: "Tu as une carte de Taïwan ?",
      },
    },
    {
      character: "照片",
      pinyin: "zhàopiàn",
      zhuyin: "ㄓㄠˋ ㄆㄧㄢˋ",
      french: "Photo",
      english: "Photo",
      example: {
        sentence: "我們一起拍照片吧！",
        pinyin: "wǒmen yìqǐ pāi zhàopiàn ba!",
        translation: "Prenons une photo ensemble !",
      },
    },
    {
      character: "紀念品",
      pinyin: "jìniànpǐn",
      zhuyin: "ㄐㄧˋ ㄋㄧㄢˋ ㄆㄧㄣˇ",
      french: "Souvenir (objet)",
      english: "Souvenir",
      example: {
        sentence: "我買了一些紀念品。",
        pinyin: "wǒ mǎi le yìxiē jìniànpǐn.",
        translation: "J'ai acheté quelques souvenirs.",
      },
    },
    {
      character: "導遊",
      pinyin: "dǎoyóu",
      zhuyin: "ㄉㄠˇ ㄧㄡˊ",
      french: "Guide touristique",
      english: "Tour guide",
      example: {
        sentence: "這個導遊說中文和法文。",
        pinyin: "zhège dǎoyóu shuō Zhōngwén hé Fǎwén.",
        translation: "Ce guide parle chinois et français.",
      },
    },
    {
      character: "回來",
      pinyin: "huílái",
      zhuyin: "ㄏㄨㄟˊ ㄌㄞˊ",
      french: "Revenir, rentrer",
      english: "To come back",
      example: {
        sentence: "你什麼時候回來？",
        pinyin: "nǐ shénme shíhòu huílái?",
        translation: "Quand est-ce que tu reviens ?",
      },
    },
    {
      character: "出發",
      pinyin: "chūfā",
      zhuyin: "ㄔㄨ ㄈㄚ",
      french: "Partir, se mettre en route",
      english: "To depart, to set off",
      example: {
        sentence: "我們明天早上八點出發。",
        pinyin: "wǒmen míngtiān zǎoshang bā diǎn chūfā.",
        translation: "On part demain matin à huit heures.",
      },
    },
    {
      character: "到達",
      pinyin: "dàodá",
      zhuyin: "ㄉㄠˋ ㄉㄚˊ",
      french: "Arriver (à destination)",
      english: "To arrive, to reach",
      example: {
        sentence: "我們下午三點到達花蓮。",
        pinyin: "wǒmen xiàwǔ sān diǎn dàodá Huālián.",
        translation: "On arrive à Hualien à trois heures de l'après-midi.",
      },
    },
  ],

  exercises: [
    {
      id: "u54-ex1",
      type: "comprehension",
      question: "Que signifie la phrase 從台北到花蓮坐火車要兩個小時 ?",
      correctAnswer: "De Taipei à Hualien en train, il faut deux heures",
      options: [
        "De Taipei à Hualien en train, il faut deux heures",
        "Le train de Taipei part à deux heures pour Hualien",
        "Il y a deux trains par heure entre Taipei et Hualien",
        "Taipei et Hualien sont à deux heures d'avion",
      ],
    },
    {
      id: "u54-ex2",
      type: "fill-blank",
      question: "我們___去太魯閣，___去夜市。(On va d'abord à Taroko, puis au marché de nuit.)",
      correctAnswer: "先...再",
      options: ["先...再", "從...到", "因為...所以", "雖然...但是"],
      optionsHint: ["xiān...zài", "cóng...dào", "yīnwèi...suǒyǐ", "suīrán...dànshì"],
      optionsZhuyin: ["ㄒㄧㄢ...ㄗㄞˋ", "ㄘㄨㄥˊ...ㄉㄠˋ", "ㄧㄣ ㄨㄟˋ...ㄙㄨㄛˇ ㄧˇ", "ㄙㄨㄟ ㄖㄢˊ...ㄉㄢˋ ㄕˋ"],
      hint: "Quelle paire de mots exprime une séquence « d'abord... ensuite... » ?",
      hintZhuyin: "Quelle paire de mots exprime une séquence « d'abord... ensuite... » ?",
    },
    {
      id: "u54-ex3",
      type: "translate",
      question: "Comment dit-on « De l'aéroport à l'hôtel, combien de temps faut-il ? » ?",
      correctAnswer: "從機場到飯店要多久",
      options: ["從機場到飯店要多久", "機場飯店多久到", "從飯店到機場多久要", "要多久從機場到飯店"],
      optionsHint: ["cóng jīchǎng dào fàndiàn yào duōjiǔ", "jīchǎng fàndiàn duōjiǔ dào", "cóng fàndiàn dào jīchǎng duōjiǔ yào", "yào duōjiǔ cóng jīchǎng dào fàndiàn"],
      optionsZhuyin: ["ㄘㄨㄥˊ ㄐㄧ ㄔㄤˇ ㄉㄠˋ ㄈㄢˋ ㄉㄧㄢˋ ㄧㄠˋ ㄉㄨㄛ ㄐㄧㄡˇ", "ㄐㄧ ㄔㄤˇ ㄈㄢˋ ㄉㄧㄢˋ ㄉㄨㄛ ㄐㄧㄡˇ ㄉㄠˋ", "ㄘㄨㄥˊ ㄈㄢˋ ㄉㄧㄢˋ ㄉㄠˋ ㄐㄧ ㄔㄤˇ ㄉㄨㄛ ㄐㄧㄡˇ ㄧㄠˋ", "ㄧㄠˋ ㄉㄨㄛ ㄐㄧㄡˇ ㄘㄨㄥˊ ㄐㄧ ㄔㄤˇ ㄉㄠˋ ㄈㄢˋ ㄉㄧㄢˋ"],
    },
    {
      id: "u54-ex4",
      type: "listen",
      question: "Écoutez et choisissez la bonne traduction de : 你的護照帶了嗎？",
      correctAnswer: "Tu as pris ton passeport ?",
      options: [
        "Tu as pris ton passeport ?",
        "Où est ton passeport ?",
        "Tu as perdu ton passeport ?",
        "Tu veux un passeport ?",
      ],
    },
    {
      id: "u54-ex5",
      type: "comprehension",
      question: "Quel est le moyen de transport le plus rapide pour aller de Taipei à Kaohsiung ?",
      correctAnswer: "Le 高鐵 (train à grande vitesse), qui fait le trajet en environ 1h30",
      options: [
        "Le 高鐵 (train à grande vitesse), qui fait le trajet en environ 1h30",
        "Le 火車 (train régional), qui fait le trajet en 3 heures",
        "Le 公車 (bus), qui fait le trajet en 2 heures",
        "Le 捷運 (MRT), qui relie directement les deux villes",
      ],
    },
    {
      id: "u54-ex6",
      type: "fill-blank",
      question: "___台北___高雄坐高鐵要一個半小時。(De Taipei à Kaohsiung en TGV, il faut 1h30.)",
      correctAnswer: "從...到",
      options: ["從...到", "先...再", "在...裡", "跟...一起"],
      optionsHint: ["cóng...dào", "xiān...zài", "zài...lǐ", "gēn...yìqǐ"],
      optionsZhuyin: ["ㄘㄨㄥˊ...ㄉㄠˋ", "ㄒㄧㄢ...ㄗㄞˋ", "ㄗㄞˋ...ㄌㄧˇ", "ㄍㄣ...ㄧˋ ㄑㄧˇ"],
      hint: "Quelle paire de mots exprime un trajet « de... à... » ?",
      hintZhuyin: "Quelle paire de mots exprime un trajet « de... à... » ?",
    },
    {
      id: "u54-ex7",
      type: "translate",
      question: "Comment dit-on « D'abord prendre le petit-déjeuner, ensuite partir » ?",
      correctAnswer: "先吃早餐，再出發",
      options: ["先吃早餐，再出發", "再吃早餐，先出發", "從早餐到出發", "吃早餐以後出發了"],
      optionsHint: ["xiān chī zǎocān, zài chūfā", "zài chī zǎocān, xiān chūfā", "cóng zǎocān dào chūfā", "chī zǎocān yǐhòu chūfā le"],
      optionsZhuyin: ["ㄒㄧㄢ ㄔ ㄗㄠˇ ㄘㄢ ㄗㄞˋ ㄔㄨ ㄈㄚ", "ㄗㄞˋ ㄔ ㄗㄠˇ ㄘㄢ ㄒㄧㄢ ㄔㄨ ㄈㄚ", "ㄘㄨㄥˊ ㄗㄠˇ ㄘㄢ ㄉㄠˋ ㄔㄨ ㄈㄚ", "ㄔ ㄗㄠˇ ㄘㄢ ㄧˇ ㄏㄡˋ ㄔㄨ ㄈㄚ ㄌㄜ˙"],
    },
    {
      id: "u54-ex8",
      type: "listen",
      question: "Écoutez et choisissez la bonne traduction de : 我想買一些紀念品回來。",
      correctAnswer: "Je veux acheter des souvenirs à ramener",
      options: [
        "Je veux acheter des souvenirs à ramener",
        "Je veux vendre mes souvenirs",
        "J'ai oublié d'acheter des souvenirs",
        "Les souvenirs sont trop chers",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-35"],
};
