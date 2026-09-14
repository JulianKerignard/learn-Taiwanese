import type { CourseUnit } from "@/types/course";

export const unit77: CourseUnit = {
  id: "unit-77",
  number: 77,
  title: "L'aspect et la duree",
  titleZh: "動態助詞與時間表達",
  chapter: 3,
  description:
    "Approfondissez l'expression du temps en chinois : l'action en cours avec 在/正在...呢, la duree avec verbe + 了 + duree + 了, et les marqueurs temporels 快要...了 (sur le point de) et 剛/剛才 (vient de).",
  icon: "⏳",

  sections: [
    {
      title: "L'action en cours — 在/正在...呢",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour exprimer une action en cours (equivalent du present continu anglais « -ing »), le chinois utilise 在, 正在, ou 呢. A l'oral taiwanais, les trois sont interchangeables et combinables. C'est un approfondissement de ce que vous avez appris plus tot.",
        },
        {
          type: "example",
          chinese: "我正在吃飯呢。",
          pinyin: "wǒ zhèngzài chī fàn ne.",
          translation: "Je suis en train de manger.",
          content:
            "正在...呢 est la forme la plus complete. 正在 = exactement en train de. 呢 = particule modale de confirmation.",
        },
        {
          type: "example",
          chinese: "他在看書。",
          pinyin: "tā zài kàn shū.",
          translation: "Il est en train de lire.",
          content:
            "在 seul suffit pour l'action en cours. C'est la forme la plus courante a l'oral.",
        },
        {
          type: "example",
          chinese: "你做什麼呢？",
          pinyin: "nǐ zuò shénme ne?",
          translation: "Tu fais quoi (la) ?",
          content:
            "呢 seul en fin de phrase peut aussi indiquer une action en cours. C'est tres familier et naturel.",
        },
        {
          type: "comparison",
          content:
            "正在 + verbe + 呢 (forme complete, insistance). 在 + verbe (standard, courant). verbe + 呢 (familier, question). Les trois signifient la meme chose : l'action est EN COURS au moment ou on parle.",
        },
        {
          type: "tip",
          content:
            "Pour la negation : 沒在 + verbe. 我沒在睡覺 (je ne suis pas en train de dormir). On NE peut PAS dire *不在睡覺 pour nier une action en cours.",
        },
      ],
    },
    {
      title: "La duree — combien de temps",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, la duree se place APRES le verbe, pas avant comme en francais. Structure cle : verbe + 了 + duree (action terminee) ou verbe + 了 + duree + 了 (action qui continue encore).",
        },
        {
          type: "example",
          chinese: "我學了三個月的中文。",
          pinyin: "wǒ xué le sān ge yuè de zhōngwén.",
          translation: "J'ai etudie le chinois pendant trois mois (c'est fini).",
          content:
            "Verbe + 了 + duree : l'action est terminee. J'ai etudie 3 mois, mais j'ai arrete.",
        },
        {
          type: "example",
          chinese: "我學了三個月了。",
          pinyin: "wǒ xué le sān ge yuè le.",
          translation: "J'apprends depuis trois mois (et je continue).",
          content:
            "Verbe + 了 + duree + 了 : DEUX 了 = l'action continue encore. Le deuxieme 了 indique un changement d'etat qui perdure.",
        },
        {
          type: "example",
          chinese: "我等了一個小時。",
          pinyin: "wǒ děng le yí ge xiǎoshí.",
          translation: "J'ai attendu une heure (c'est fini, je n'attends plus).",
          content:
            "Un seul 了 apres le verbe = action terminee avec sa duree. L'attente est finie.",
        },
        {
          type: "example",
          chinese: "我在台灣住了兩年了。",
          pinyin: "wǒ zài Táiwān zhù le liǎng nián le.",
          translation: "J'habite a Taiwan depuis deux ans (et j'y habite toujours).",
          content:
            "Double 了 = ca continue. C'est LA structure pour dire « depuis X temps » quand l'action est toujours en cours.",
        },
        {
          type: "warning",
          content:
            "Attention a la difference : 我學了三年中文 (j'ai etudie 3 ans, fini) vs 我學了三年了 (j'etudie depuis 3 ans, en cours). Le DEUXIEME 了 en fin de phrase est decisif.",
        },
      ],
    },
    {
      title: "快要...了 et 剛",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Ces marqueurs temporels expriment la proximite avec le present : quelque chose qui va arriver bientot (快要/就要...了) ou qui vient juste de se produire (剛/剛才).",
        },
        {
          type: "example",
          chinese: "快要下雨了。",
          pinyin: "kuài yào xiàyǔ le.",
          translation: "Il va bientot pleuvoir.",
          content:
            "快要 + verbe + 了 = sur le point de. L'action est imminente. Le 了 en fin de phrase indique le changement d'etat a venir.",
        },
        {
          type: "example",
          chinese: "火車就要到了。",
          pinyin: "huǒchē jiù yào dào le.",
          translation: "Le train va bientot arriver.",
          content:
            "就要...了 = equivalent de 快要...了. 就要 peut aussi s'utiliser avec un moment precis : 明天就要考試了 (demain c'est l'examen).",
        },
        {
          type: "example",
          chinese: "我剛到。",
          pinyin: "wǒ gāng dào.",
          translation: "Je viens d'arriver.",
          content:
            "剛 + verbe = vient juste de (tres recent, il y a quelques instants). 剛 se place directement avant le verbe.",
        },
        {
          type: "example",
          chinese: "他剛才打電話給我。",
          pinyin: "tā gāngcái dǎ diànhuà gěi wǒ.",
          translation: "Il m'a appele tout a l'heure.",
          content:
            "剛才 = tout a l'heure (un peu moins recent que 剛). 剛才 peut se placer avant le sujet ou avant le verbe.",
        },
        {
          type: "comparison",
          content:
            "剛 = a l'INSTANT (tres recent, quelques secondes/minutes). 剛才 = tout a l'heure (un peu plus loin, minutes/heures). 快要/就要 = bientot (futur immediat). Ligne du temps : 剛才 → 剛 → [maintenant] → 快要/就要.",
        },
        {
          type: "example",
          chinese: "我已經吃過了。",
          pinyin: "wǒ yǐjīng chī guò le.",
          translation: "J'ai deja mange.",
          content:
            "已經...了 = deja (action accomplie). 已經 se place avant le verbe. Tres utile pour decliner une invitation : 已經吃過了 (j'ai deja mange).",
        },
      ],
    },
  ],

  dialogue: {
    context: "Julian attend un ami a la gare de Taipei pour aller ensemble au marche de nuit.",
    lines: [
      {
        speaker: "Julian (au telephone)",
        chinese: "你在哪裡？我已經等了二十分鐘了。",
        pinyin: "nǐ zài nǎlǐ? wǒ yǐjīng děng le èrshí fēnzhōng le.",
        french: "T'es ou ? J'attends depuis vingt minutes deja.",
      },
      {
        speaker: "Ami",
        chinese: "不好意思！我剛出門。快要到了！",
        pinyin: "bù hǎo yìsi! wǒ gāng chūmén. kuài yào dào le!",
        french: "Desole ! Je viens de sortir de chez moi. J'arrive bientot !",
      },
      {
        speaker: "Julian",
        chinese: "你正在坐捷運嗎？",
        pinyin: "nǐ zhèngzài zuò jiéyùn ma?",
        french: "Tu es dans le metro la ?",
      },
      {
        speaker: "Ami",
        chinese: "對，還有兩站。你在做什麼呢？",
        pinyin: "duì, hái yǒu liǎng zhàn. nǐ zài zuò shénme ne?",
        french: "Oui, encore deux stations. Tu fais quoi en attendant ?",
      },
      {
        speaker: "Julian",
        chinese: "我在看手機。剛才買了一杯珍珠奶茶。",
        pinyin: "wǒ zài kàn shǒujī. gāngcái mǎi le yì bēi zhēnzhū nǎichá.",
        french: "Je regarde mon telephone. Tout a l'heure j'ai achete un bubble tea.",
      },
      {
        speaker: "Ami",
        chinese: "我來台北三個月了，還沒吃過蚵仔煎呢！今天一定要吃。",
        pinyin: "wǒ lái Táiběi sān ge yuè le, hái méi chī guò ézǎijiān ne! jīntiān yídìng yào chī.",
        french: "Ca fait trois mois que je suis a Taipei, et je n'ai toujours pas mange d'omelette aux huitres ! Aujourd'hui il faut absolument en manger.",
      },
    ],
  },

  keyPoints: [
    "正在/在 + verbe + 呢 = action en cours (les trois formes sont interchangeables a l'oral)",
    "Verbe + 了 + duree = action terminee. Verbe + 了 + duree + 了 (double 了) = action qui CONTINUE",
    "快要/就要 + verbe + 了 = sur le point de (futur immediat), 剛 = vient juste de (passe immediat)",
    "剛 (a l'instant) vs 剛才 (tout a l'heure) : le premier est plus recent que le second",
  ],

  vocabulary: [
    {
      character: "正在",
      pinyin: "zhèngzài",
      zhuyin: "ㄓㄥˋ ㄗㄞˋ",
      french: "en train de",
      english: "in the process of",
      example: {
        sentence: "我正在上課。",
        pinyin: "wǒ zhèngzài shàngkè.",
        translation: "Je suis en cours.",
      },
    },
    {
      character: "剛",
      pinyin: "gāng",
      zhuyin: "ㄍㄤ",
      french: "vient juste de",
      english: "just (a moment ago)",
      example: {
        sentence: "我剛到。",
        pinyin: "wǒ gāng dào.",
        translation: "Je viens d'arriver.",
      },
    },
    {
      character: "剛才",
      pinyin: "gāngcái",
      zhuyin: "ㄍㄤ ㄘㄞˊ",
      french: "tout a l'heure",
      english: "just now, a moment ago",
      example: {
        sentence: "剛才誰打電話？",
        pinyin: "gāngcái shéi dǎ diànhuà?",
        translation: "Qui a appele tout a l'heure ?",
      },
    },
    {
      character: "快要",
      pinyin: "kuài yào",
      zhuyin: "ㄎㄨㄞˋ ㄧㄠˋ",
      french: "sur le point de, bientot",
      english: "about to, soon",
      example: {
        sentence: "快要下雨了。",
        pinyin: "kuài yào xiàyǔ le.",
        translation: "Il va bientot pleuvoir.",
      },
    },
    {
      character: "就要",
      pinyin: "jiù yào",
      zhuyin: "ㄐㄧㄡˋ ㄧㄠˋ",
      french: "sur le point de (avec moment precis)",
      english: "about to (with specific time)",
      example: {
        sentence: "明天就要考試了。",
        pinyin: "míngtiān jiù yào kǎoshì le.",
        translation: "Demain c'est l'examen.",
      },
    },
    {
      character: "已經",
      pinyin: "yǐjīng",
      zhuyin: "ㄧˇ ㄐㄧㄥ",
      french: "deja",
      english: "already",
      example: {
        sentence: "我已經吃了。",
        pinyin: "wǒ yǐjīng chī le.",
        translation: "J'ai deja mange.",
      },
    },
    {
      character: "還沒",
      pinyin: "hái méi",
      zhuyin: "ㄏㄞˊ ㄇㄟˊ",
      french: "pas encore",
      english: "not yet",
      example: {
        sentence: "我還沒吃飯。",
        pinyin: "wǒ hái méi chī fàn.",
        translation: "Je n'ai pas encore mange.",
      },
    },
    {
      character: "一直",
      pinyin: "yìzhí",
      zhuyin: "ㄧˋ ㄓˊ",
      french: "tout le temps, sans arret",
      english: "always, continuously",
      example: {
        sentence: "他一直在說話。",
        pinyin: "tā yìzhí zài shuōhuà.",
        translation: "Il n'arrete pas de parler.",
      },
    },
    {
      character: "常常",
      pinyin: "chángcháng",
      zhuyin: "ㄔㄤˊ ㄔㄤˊ",
      french: "souvent",
      english: "often",
      example: {
        sentence: "我常常去夜市。",
        pinyin: "wǒ chángcháng qù yèshì.",
        translation: "Je vais souvent au marche de nuit.",
      },
    },
    {
      character: "偶爾",
      pinyin: "ǒu'ěr",
      zhuyin: "ㄡˇ ㄦˇ",
      french: "de temps en temps",
      english: "occasionally",
      example: {
        sentence: "我偶爾會去。",
        pinyin: "wǒ ǒu'ěr huì qù.",
        translation: "J'y vais de temps en temps.",
      },
    },
    {
      character: "從來",
      pinyin: "cónglái",
      zhuyin: "ㄘㄨㄥˊ ㄌㄞˊ",
      french: "jamais (+ negation)",
      english: "never (with negation)",
      example: {
        sentence: "我從來沒遲到過。",
        pinyin: "wǒ cónglái méi chídào guò.",
        translation: "Je n'ai jamais ete en retard.",
      },
    },
    {
      character: "終於",
      pinyin: "zhōngyú",
      zhuyin: "ㄓㄨㄥ ㄩˊ",
      french: "enfin, finalement",
      english: "finally, at last",
      example: {
        sentence: "你終於來了！",
        pinyin: "nǐ zhōngyú lái le!",
        translation: "Tu es enfin la !",
      },
    },
  ],

  exercises: [
    {
      id: "u77-ex1",
      type: "fill-blank",
      question: "我___吃飯___。(Je suis en train de manger.)",
      correctAnswer: "正在...呢",
      options: ["正在...呢", "已經...了", "快要...了", "剛...了"],
      optionsHint: ["zhèngzài...ne", "yǐjīng...le", "kuài yào...le", "gāng...le"],
      optionsZhuyin: ["ㄓㄥˋ ㄗㄞˋ...ㄋㄜ", "ㄧˇ ㄐㄧㄥ...ㄌㄜ", "ㄎㄨㄞˋ ㄧㄠˋ...ㄌㄜ", "ㄍㄤ...ㄌㄜ"],
      hint: "Action en cours au moment ou on parle.",
    },
    {
      id: "u77-ex2",
      type: "comprehension",
      question: "Quelle est la difference entre 我學了三年中文 et 我學了三年了 ?",
      correctAnswer: "Avec un seul 了 c'est termine, avec double 了 ca continue encore",
      options: [
        "Avec un seul 了 c'est termine, avec double 了 ca continue encore",
        "Aucune difference, c'est le meme sens",
        "Le premier est passe, le deuxieme est futur",
        "Le premier est court, le deuxieme est long",
      ],
      optionsHint: [
        "un 了 = fini, deux 了 = continue",
        "meme sens",
        "passe vs futur",
        "court vs long",
      ],
      optionsZhuyin: [
        "un ㄌㄜ = fini, deux ㄌㄜ = continue",
        "meme sens",
        "passe vs futur",
        "court vs long",
      ],
    },
    {
      id: "u77-ex3",
      type: "translate",
      question: "Comment dit-on « Il va bientot pleuvoir » ?",
      correctAnswer: "快要下雨了。",
      options: [
        "快要下雨了。",
        "剛下雨了。",
        "正在下雨了。",
        "已經下雨了。",
      ],
      optionsHint: [
        "kuài yào xiàyǔ le.",
        "gāng xiàyǔ le.",
        "zhèngzài xiàyǔ le.",
        "yǐjīng xiàyǔ le.",
      ],
      optionsZhuyin: [
        "ㄎㄨㄞˋ ㄧㄠˋ ㄒㄧㄚˋ ㄩˇ ㄌㄜ。",
        "ㄍㄤ ㄒㄧㄚˋ ㄩˇ ㄌㄜ。",
        "ㄓㄥˋ ㄗㄞˋ ㄒㄧㄚˋ ㄩˇ ㄌㄜ。",
        "ㄧˇ ㄐㄧㄥ ㄒㄧㄚˋ ㄩˇ ㄌㄜ。",
      ],
    },
    {
      id: "u77-ex4",
      type: "fill-blank",
      question: "我___到，你不用等。(Je viens d'arriver, pas besoin d'attendre.)",
      correctAnswer: "剛",
      options: ["剛", "剛才", "快要", "已經"],
      optionsHint: ["gāng", "gāngcái", "kuài yào", "yǐjīng"],
      optionsZhuyin: ["ㄍㄤ", "ㄍㄤ ㄘㄞˊ", "ㄎㄨㄞˋ ㄧㄠˋ", "ㄧˇ ㄐㄧㄥ"],
      hint: "Tres recent — a l'instant meme.",
    },
    {
      id: "u77-ex5",
      type: "translate",
      question: "Comment dit-on « J'habite a Taiwan depuis deux ans » (et j'y habite toujours) ?",
      correctAnswer: "我在台灣住了兩年了。",
      options: [
        "我在台灣住了兩年了。",
        "我在台灣住了兩年。",
        "我在台灣住兩年。",
        "我住台灣兩年了。",
      ],
      optionsHint: [
        "wǒ zài Táiwān zhù le liǎng nián le.",
        "wǒ zài Táiwān zhù le liǎng nián.",
        "wǒ zài Táiwān zhù liǎng nián.",
        "wǒ zhù Táiwān liǎng nián le.",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄓㄨˋ ㄌㄜ ㄌㄧㄤˇ ㄋㄧㄢˊ ㄌㄜ。",
        "ㄨㄛˇ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄓㄨˋ ㄌㄜ ㄌㄧㄤˇ ㄋㄧㄢˊ。",
        "ㄨㄛˇ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄓㄨˋ ㄌㄧㄤˇ ㄋㄧㄢˊ。",
        "ㄨㄛˇ ㄓㄨˋ ㄊㄞˊ ㄨㄢ ㄌㄧㄤˇ ㄋㄧㄢˊ ㄌㄜ。",
      ],
    },
    {
      id: "u77-ex6",
      type: "comprehension",
      question: "Quelle est la difference entre 剛 et 剛才 ?",
      correctAnswer: "剛 = a l'instant (tres recent), 剛才 = tout a l'heure (un peu moins recent)",
      options: [
        "剛 = a l'instant (tres recent), 剛才 = tout a l'heure (un peu moins recent)",
        "Aucune difference, les deux sont synonymes",
        "剛 est formel, 剛才 est familier",
        "剛才 = a l'instant, 剛 = tout a l'heure",
      ],
      optionsHint: [
        "gāng = instant, gāngcái = tout a l'heure",
        "synonymes",
        "gāng formel, gāngcái familier",
        "gāngcái = instant, gāng = tout a l'heure",
      ],
      optionsZhuyin: [
        "ㄍㄤ = instant, ㄍㄤ ㄘㄞˊ = tout a l'heure",
        "synonymes",
        "ㄍㄤ formel, ㄍㄤ ㄘㄞˊ familier",
        "ㄍㄤ ㄘㄞˊ = instant, ㄍㄤ = tout a l'heure",
      ],
    },
    {
      id: "u77-ex7",
      type: "fill-blank",
      question: "我___沒吃飯。(Je n'ai pas encore mange.)",
      correctAnswer: "還",
      options: ["還", "已經", "剛", "一直"],
      optionsHint: ["hái", "yǐjīng", "gāng", "yìzhí"],
      optionsZhuyin: ["ㄏㄞˊ", "ㄧˇ ㄐㄧㄥ", "ㄍㄤ", "ㄧˋ ㄓˊ"],
      hint: "Pas encore = negation + adverbe.",
    },
    {
      id: "u77-ex8",
      type: "translate",
      question: "Comment dit-on « Tu es enfin la ! » ?",
      correctAnswer: "你終於來了！",
      options: [
        "你終於來了！",
        "你已經來了！",
        "你剛來了！",
        "你快要來了！",
      ],
      optionsHint: [
        "nǐ zhōngyú lái le!",
        "nǐ yǐjīng lái le!",
        "nǐ gāng lái le!",
        "nǐ kuài yào lái le!",
      ],
      optionsZhuyin: [
        "ㄋㄧˇ ㄓㄨㄥ ㄩˊ ㄌㄞˊ ㄌㄜ！",
        "ㄋㄧˇ ㄧˇ ㄐㄧㄥ ㄌㄞˊ ㄌㄜ！",
        "ㄋㄧˇ ㄍㄤ ㄌㄞˊ ㄌㄜ！",
        "ㄋㄧˇ ㄎㄨㄞˋ ㄧㄠˋ ㄌㄞˊ ㄌㄜ！",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-76"],
};
