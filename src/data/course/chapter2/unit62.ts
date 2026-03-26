import type { CourseUnit } from "@/types/course";

export const unit62: CourseUnit = {
  id: "unit-62",
  number: 62,
  title: "La météo au quotidien",
  titleZh: "日常天氣",
  chapter: 2,
  description:
    "Parler de la météo, comprendre les prévisions et décrire le temps qu'il fait. Apprendre les structures 今天+météo, 會+verbe pour les prédictions et 越來越 pour exprimer un changement progressif.",
  icon: "🌤️",

  sections: [
    {
      title: "Le vocabulaire de la météo",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "La météo est un sujet de conversation universel, et à Taiwan encore plus qu'ailleurs. Le climat subtropical de l'île rend la météo très changeante : typhons en été, pluies abondantes au printemps, chaleur humide presque toute l'année. Maîtriser le vocabulaire météorologique est essentiel pour comprendre les conversations quotidiennes et les informations pratiques.",
        },
        {
          type: "example",
          chinese: "今天天氣很好。",
          pinyin: "jīntiān tiānqì hěn hǎo.",
          translation: "Aujourd'hui il fait beau.",
          content:
            "天氣 (tiānqì) signifie « météo / temps ». C'est le mot le plus fondamental de cette leçon. La structure 今天天氣很好 est la phrase la plus courante pour dire qu'il fait beau. On peut remplacer 好 par d'autres adjectifs : 今天天氣很熱 (il fait chaud), 今天天氣很冷 (il fait froid).",
        },
        {
          type: "example",
          chinese: "太陽很大。",
          pinyin: "tàiyáng hěn dà.",
          translation: "Le soleil tape fort.",
          content:
            "太陽 (tàiyáng) signifie « soleil ». En chinois, on dit que le soleil est « grand » (大) quand il tape fort, ce qui est différent du français. À Taiwan, quand le soleil est intense, les gens disent souvent 太陽好大 (le soleil est vraiment fort). C'est une expression très courante en été.",
        },
        {
          type: "example",
          chinese: "外面在下雨。",
          pinyin: "wàimiàn zài xiàyǔ.",
          translation: "Il pleut dehors.",
          content:
            "下雨 (xiàyǔ) signifie littéralement « descendre pluie », c'est-à-dire « pleuvoir ». Le caractère 下 (xià, descendre) est utilisé pour tous les phénomènes qui tombent du ciel : 下雨 (pleuvoir), 下雪 (neiger). Le 在 indique que l'action est en cours, comme le « -ing » anglais.",
        },
        {
          type: "example",
          chinese: "今天是晴天，沒有雲。",
          pinyin: "jīntiān shì qíngtiān, méiyǒu yún.",
          translation: "Aujourd'hui c'est un jour ensoleillé, il n'y a pas de nuages.",
          content:
            "晴天 (qíngtiān) = jour ensoleillé, 陰天 (yīntiān) = jour nuageux/couvert. Ces deux mots sont très utiles pour décrire la météo. 雲 (yún) = nuage. En regardant les prévisions météo à Taiwan, vous verrez souvent ces termes.",
        },
        {
          type: "tip",
          content:
            "À Taiwan, les gens vérifient la météo quotidiennement, surtout pendant la saison des typhons (juin à octobre). L'application météo la plus utilisée est celle du CWA (中央氣象署). Emportez toujours un parapluie (傘, sǎn) — les averses soudaines sont fréquentes !",
        },
      ],
    },
    {
      title: "今天+météo, 會+verbe et 越來越 — Décrire et prédire le temps",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour parler de la météo en chinois, trois structures grammaticales sont essentielles. La première, 今天+description, permet de décrire le temps actuel. La deuxième, 會+verbe, sert à faire des prédictions. La troisième, 越來越, exprime un changement progressif — très utile pour parler de l'évolution de la météo.",
        },
        {
          type: "example",
          chinese: "今天很熱，溫度三十五度。",
          pinyin: "jīntiān hěn rè, wēndù sānshíwǔ dù.",
          translation: "Aujourd'hui il fait très chaud, la température est de 35 degrés.",
          content:
            "La structure de base pour décrire la météo du jour est : 今天 + 很 + adjectif. 溫度 (wēndù) = température, 度 (dù) = degré. À Taiwan, on utilise les degrés Celsius. 35 度 en été est tout à fait normal à Taipei !",
        },
        {
          type: "example",
          chinese: "明天會下雨。",
          pinyin: "míngtiān huì xiàyǔ.",
          translation: "Demain il va pleuvoir.",
          content:
            "會 (huì) placé devant un verbe exprime une prédiction ou une probabilité future. C'est l'équivalent de « va » ou « il est probable que » en français. 明天會下雨 = il va pleuvoir demain. 會不會下雨？ = est-ce qu'il va pleuvoir ? Cette structure est indispensable pour parler des prévisions météo.",
        },
        {
          type: "example",
          chinese: "下午不會下雨。",
          pinyin: "xiàwǔ bú huì xiàyǔ.",
          translation: "Il ne va pas pleuvoir cet après-midi.",
          content:
            "La négation de 會 est 不會 (bú huì). Attention à la prononciation : 不 change de ton devant un quatrième ton, et devient bú (deuxième ton) devant huì. Structure : sujet + 不會 + verbe. Très utile quand on rassure quelqu'un sur la météo.",
        },
        {
          type: "example",
          chinese: "天氣越來越熱了。",
          pinyin: "tiānqì yuè lái yuè rè le.",
          translation: "Le temps devient de plus en plus chaud.",
          content:
            "越來越 (yuè lái yuè) signifie « de plus en plus ». La structure est : sujet + 越來越 + adjectif + 了. Le 了 en fin de phrase indique un changement d'état. 越來越冷 = de plus en plus froid, 越來越涼 = de plus en plus frais. C'est une structure très expressive et très utilisée au quotidien.",
        },
        {
          type: "comparison",
          content:
            "Comparons les trois structures : 今天很熱 (description actuelle : il fait chaud aujourd'hui) vs 明天會很熱 (prédiction : il fera chaud demain) vs 天氣越來越熱了 (changement progressif : il fait de plus en plus chaud). Chaque structure a un usage bien distinct.",
        },
        {
          type: "tip",
          content:
            "越來越 peut s'appliquer à bien d'autres contextes que la météo : 中文越來越好 (ton chinois s'améliore de plus en plus), 越來越忙 (de plus en plus occupé). C'est l'une des structures les plus utiles et les plus élégantes du chinois.",
        },
      ],
    },
    {
      title: "Typhons et saison des pluies — La météo à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "La météo à Taiwan est un sujet culturel majeur. L'île est frappée chaque année par plusieurs typhons (颱風, táifēng) entre juin et octobre. Quand un typhon approche, tout le pays se prépare : les supermarchés sont pris d'assaut, les bureaux et les écoles peuvent fermer. Le gouvernement annonce un « jour de typhon » (颱風假, táifēng jià) si la tempête est assez forte — un concept unique à Taiwan.",
        },
        {
          type: "example",
          chinese: "颱風要來了，你要小心！",
          pinyin: "táifēng yào lái le, nǐ yào xiǎoxīn!",
          translation: "Un typhon arrive, fais attention !",
          content:
            "颱風 (táifēng) est l'origine du mot « typhon » en français. Pendant la saison des typhons, cette phrase est très courante. 要來了 = va arriver. 小心 (xiǎoxīn) = faire attention. Les Taiwanais prennent les typhons au sérieux — les dégâts peuvent être considérables.",
        },
        {
          type: "example",
          chinese: "梅雨季節快到了。",
          pinyin: "méiyǔ jìjié kuài dào le.",
          translation: "La saison de la pluie des prunes arrive bientôt.",
          content:
            "梅雨 (méiyǔ) signifie littéralement « pluie des prunes » — elle arrive quand les prunes mûrissent, en mai-juin. C'est une période de pluie continue qui dure 2 à 4 semaines. Le ciel reste gris, l'humidité est extrême, et les vêtements ne sèchent jamais. Les Taiwanais utilisent des déshumidificateurs (除濕機, chúshī jī) en permanence pendant cette période.",
        },
        {
          type: "text",
          content:
            "Le climat de Taiwan varie considérablement du nord au sud. Taipei, au nord, a des hivers frais et humides (environ 15°C) tandis que Kaohsiung, au sud, reste chaud toute l'année. En montagne, il peut même neiger — 合歡山 (Héhuān Shān) voit de la neige presque chaque hiver, ce qui provoque un véritable engouement chez les Taiwanais qui n'en voient que rarement.",
        },
        {
          type: "tip",
          content:
            "Quand un Taiwanais dit 好熱喔 (hǎo rè ō, qu'il fait chaud !), c'est souvent une invitation à commenter la météo ensemble. C'est un excellent moyen de briser la glace. Répondez 對啊，越來越熱了 (duì a, yuè lái yuè rè le — oui, il fait de plus en plus chaud) pour montrer que vous maîtrisez la conversation météo !",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "小美 (Xiǎo Měi) et son ami français Thomas regardent les prévisions météo à la télévision dans un appartement à Taipei.",
    lines: [
      {
        speaker: "Thomas",
        chinese: "今天天氣怎麼樣？",
        pinyin: "jīntiān tiānqì zěnmeyàng?",
        french: "Comment est la météo aujourd'hui ?",
        note: "怎麼樣 est la façon standard de demander « comment c'est ».",
      },
      {
        speaker: "小美",
        chinese: "今天是晴天，但是很熱。溫度三十三度。",
        pinyin: "jīntiān shì qíngtiān, dànshì hěn rè. wēndù sānshísān dù.",
        french:
          "Aujourd'hui c'est ensoleillé, mais il fait très chaud. La température est de 33 degrés.",
        note: "但是 (dànshì) = mais, cependant.",
      },
      {
        speaker: "Thomas",
        chinese: "明天會下雨嗎？",
        pinyin: "míngtiān huì xiàyǔ ma?",
        french: "Est-ce qu'il va pleuvoir demain ?",
      },
      {
        speaker: "小美",
        chinese: "新聞說明天下午會下雨，你要帶傘。",
        pinyin: "xīnwén shuō míngtiān xiàwǔ huì xiàyǔ, nǐ yào dài sǎn.",
        french:
          "Les informations disent qu'il va pleuvoir demain après-midi, tu dois emporter un parapluie.",
        note: "帶傘 (dài sǎn) = emporter un parapluie.",
      },
      {
        speaker: "Thomas",
        chinese: "天氣越來越熱了，是不是？",
        pinyin: "tiānqì yuè lái yuè rè le, shì bú shì?",
        french: "Il fait de plus en plus chaud, n'est-ce pas ?",
        note: "是不是 en fin de phrase sert de question de confirmation.",
      },
      {
        speaker: "小美",
        chinese: "對啊，而且這個星期可能有颱風。",
        pinyin: "duì a, érqiě zhège xīngqī kěnéng yǒu táifēng.",
        french: "Oui, et en plus cette semaine il y a peut-être un typhon.",
        note: "可能 (kěnéng) = peut-être, probablement.",
      },
      {
        speaker: "Thomas",
        chinese: "颱風？那會很冷嗎？",
        pinyin: "táifēng? nà huì hěn lěng ma?",
        french: "Un typhon ? Alors il fera froid ?",
      },
      {
        speaker: "小美",
        chinese: "不會冷，但是風很大，雨也很大。颱風天要待在家裡！",
        pinyin:
          "bú huì lěng, dànshì fēng hěn dà, yǔ yě hěn dà. táifēng tiān yào dāi zài jiālǐ!",
        french:
          "Il ne fera pas froid, mais le vent sera fort et la pluie aussi. Les jours de typhon, il faut rester à la maison !",
        note: "待在家裡 (dāi zài jiālǐ) = rester à la maison.",
      },
    ],
  },

  keyPoints: [
    "今天 + 很 + adjectif pour décrire la météo actuelle — 今天很熱 (il fait chaud aujourd'hui)",
    "會 + verbe pour les prédictions — 明天會下雨 (il va pleuvoir demain), négation : 不會",
    "越來越 + adjectif + 了 pour exprimer un changement progressif — 越來越熱了 (de plus en plus chaud)",
    "La saison des typhons (颱風) et la pluie des prunes (梅雨) sont des phénomènes météo majeurs à Taiwan",
  ],

  vocabulary: [
    {
      character: "天氣",
      pinyin: "tiānqì",
      zhuyin: "ㄊㄧㄢ ㄑㄧˋ",
      french: "Météo / Temps",
      english: "Weather",
      example: {
        sentence: "今天天氣很好。",
        pinyin: "jīntiān tiānqì hěn hǎo.",
        translation: "Aujourd'hui il fait beau.",
      },
    },
    {
      character: "太陽",
      pinyin: "tàiyáng",
      zhuyin: "ㄊㄞˋ ㄧㄤˊ",
      french: "Soleil",
      english: "Sun",
      example: {
        sentence: "太陽很大，要戴帽子。",
        pinyin: "tàiyáng hěn dà, yào dài màozi.",
        translation: "Le soleil tape fort, il faut porter un chapeau.",
      },
    },
    {
      character: "下雨",
      pinyin: "xiàyǔ",
      zhuyin: "ㄒㄧㄚˋ ㄩˇ",
      french: "Pleuvoir",
      english: "To rain",
      example: {
        sentence: "外面在下雨。",
        pinyin: "wàimiàn zài xiàyǔ.",
        translation: "Il pleut dehors.",
      },
    },
    {
      character: "颱風",
      pinyin: "táifēng",
      zhuyin: "ㄊㄞˊ ㄈㄥ",
      french: "Typhon",
      english: "Typhoon",
      example: {
        sentence: "颱風快來了！",
        pinyin: "táifēng kuài lái le!",
        translation: "Le typhon arrive bientôt !",
      },
    },
    {
      character: "熱",
      pinyin: "rè",
      zhuyin: "ㄖㄜˋ",
      french: "Chaud",
      english: "Hot",
      example: {
        sentence: "台北的夏天很熱。",
        pinyin: "táiběi de xiàtiān hěn rè.",
        translation: "L'été à Taipei est très chaud.",
      },
    },
    {
      character: "冷",
      pinyin: "lěng",
      zhuyin: "ㄌㄥˇ",
      french: "Froid",
      english: "Cold",
      example: {
        sentence: "冬天有時候很冷。",
        pinyin: "dōngtiān yǒu shíhòu hěn lěng.",
        translation: "En hiver il fait parfois très froid.",
      },
    },
    {
      character: "涼",
      pinyin: "liáng",
      zhuyin: "ㄌㄧㄤˊ",
      french: "Frais",
      english: "Cool",
      example: {
        sentence: "秋天的天氣很涼快。",
        pinyin: "qiūtiān de tiānqì hěn liángkuài.",
        translation: "Le temps en automne est agréablement frais.",
      },
    },
    {
      character: "風",
      pinyin: "fēng",
      zhuyin: "ㄈㄥ",
      french: "Vent",
      english: "Wind",
      example: {
        sentence: "今天風很大。",
        pinyin: "jīntiān fēng hěn dà.",
        translation: "Aujourd'hui le vent est fort.",
      },
    },
    {
      character: "雲",
      pinyin: "yún",
      zhuyin: "ㄩㄣˊ",
      french: "Nuage",
      english: "Cloud",
      example: {
        sentence: "天上有很多雲。",
        pinyin: "tiānshàng yǒu hěn duō yún.",
        translation: "Il y a beaucoup de nuages dans le ciel.",
      },
    },
    {
      character: "雪",
      pinyin: "xuě",
      zhuyin: "ㄒㄩㄝˇ",
      french: "Neige",
      english: "Snow",
      example: {
        sentence: "山上在下雪。",
        pinyin: "shānshàng zài xiàxuě.",
        translation: "Il neige en montagne.",
      },
    },
    {
      character: "溫度",
      pinyin: "wēndù",
      zhuyin: "ㄨㄣ ㄉㄨˋ",
      french: "Température",
      english: "Temperature",
      example: {
        sentence: "今天溫度三十度。",
        pinyin: "jīntiān wēndù sānshí dù.",
        translation: "Aujourd'hui la température est de 30 degrés.",
      },
    },
    {
      character: "晴天",
      pinyin: "qíngtiān",
      zhuyin: "ㄑㄧㄥˊ ㄊㄧㄢ",
      french: "Jour ensoleillé",
      english: "Sunny day",
      example: {
        sentence: "明天是晴天。",
        pinyin: "míngtiān shì qíngtiān.",
        translation: "Demain ce sera un jour ensoleillé.",
      },
    },
    {
      character: "陰天",
      pinyin: "yīntiān",
      zhuyin: "ㄧㄣ ㄊㄧㄢ",
      french: "Jour nuageux / couvert",
      english: "Cloudy day",
      example: {
        sentence: "今天是陰天，可能會下雨。",
        pinyin: "jīntiān shì yīntiān, kěnéng huì xiàyǔ.",
        translation: "Aujourd'hui c'est couvert, il va peut-être pleuvoir.",
      },
    },
    {
      character: "雷",
      pinyin: "léi",
      zhuyin: "ㄌㄟˊ",
      french: "Tonnerre",
      english: "Thunder",
      example: {
        sentence: "外面在打雷。",
        pinyin: "wàimiàn zài dǎléi.",
        translation: "Il tonne dehors.",
      },
    },
    {
      character: "傘",
      pinyin: "sǎn",
      zhuyin: "ㄙㄢˇ",
      french: "Parapluie",
      english: "Umbrella",
      example: {
        sentence: "你有帶傘嗎？",
        pinyin: "nǐ yǒu dài sǎn ma?",
        translation: "Tu as emporté un parapluie ?",
      },
    },
  ],

  exercises: [
    {
      id: "u62-ex1",
      type: "comprehension",
      question:
        "Comment dit-on « Aujourd'hui il fait très chaud » en chinois ?",
      correctAnswer: "今天很熱",
      options: [
        "今天很熱",
        "今天很冷",
        "今天下雨",
        "今天有風",
      ],
    },
    {
      id: "u62-ex2",
      type: "fill-blank",
      question: "明天___下雨。(Demain il va pleuvoir.)",
      correctAnswer: "會",
      options: ["會", "在", "很", "了"],
      optionsHint: ["huì", "zài", "hěn", "le"],
      optionsZhuyin: ["ㄏㄨㄟˋ", "ㄗㄞˋ", "ㄏㄣˇ", "ㄌㄜ˙"],
      hint: "Quel mot exprime une prédiction future ?",
    },
    {
      id: "u62-ex3",
      type: "translate",
      question: "Que signifie 天氣越來越冷了 ?",
      correctAnswer: "Le temps devient de plus en plus froid.",
      options: [
        "Le temps devient de plus en plus froid.",
        "Le temps est très froid.",
        "Le temps sera froid demain.",
        "Le temps n'est pas froid.",
      ],
    },
    {
      id: "u62-ex4",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 外面在下雨。",
      correctAnswer: "Il pleut dehors.",
      options: [
        "Il pleut dehors.",
        "Il neige dehors.",
        "Il fait beau dehors.",
        "Il y a du vent dehors.",
      ],
    },
    {
      id: "u62-ex5",
      type: "comprehension",
      question: "Qu'est-ce que la 梅雨 (méiyǔ) ?",
      correctAnswer:
        "La saison de la pluie des prunes, une période de pluie continue en mai-juin à Taiwan",
      options: [
        "La saison de la pluie des prunes, une période de pluie continue en mai-juin à Taiwan",
        "Un type de typhon très violent",
        "La neige en montagne pendant l'hiver",
        "Une boisson chaude taiwanaise pour les jours froids",
      ],
    },
    {
      id: "u62-ex6",
      type: "fill-blank",
      question: "太陽很___。(Le soleil tape fort.)",
      correctAnswer: "大",
      options: ["大", "高", "多", "長"],
      optionsHint: ["dà", "gāo", "duō", "cháng"],
      optionsZhuyin: ["ㄉㄚˋ", "ㄍㄠ", "ㄉㄨㄛ", "ㄔㄤˊ"],
      hint: "En chinois, le soleil est « grand » quand il brille fort.",
    },
    {
      id: "u62-ex7",
      type: "translate",
      question: "Comment dire « Demain il ne va pas pleuvoir » ?",
      correctAnswer: "明天不會下雨。",
      options: [
        "明天不會下雨。",
        "明天沒有下雨。",
        "明天不下雨了。",
        "明天會下雨。",
      ],
    },
    {
      id: "u62-ex8",
      type: "comprehension",
      question:
        "Qu'est-ce qu'un 颱風假 (táifēng jià) ?",
      correctAnswer:
        "Un jour de congé décrété par le gouvernement quand un typhon frappe Taiwan",
      options: [
        "Un jour de congé décrété par le gouvernement quand un typhon frappe Taiwan",
        "Des vacances d'été pour les écoliers",
        "Un festival pour célébrer la fin de la saison des typhons",
        "Un jour férié religieux lié à la pluie",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-61"],
};
