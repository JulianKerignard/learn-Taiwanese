import type { CourseUnit } from "@/types/course";

export const unit43: CourseUnit = {
  id: "unit-43",
  number: 43,
  title: "Revision 1 — Consolidation chapitres 1-2",
  titleZh: "複習一——第一、二章總複習",
  chapter: 3,
  description:
    "Unite de revision pure. Aucun nouveau contenu : on revise les tons, la structure SVO, les classificateurs, les questions et le vocabulaire de survie des chapitres 1 et 2.",
  icon: "🔄",

  sections: [
    {
      title: "Rappel des 5 points cles",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "POINT 1 — Les tons. Le mandarin a 4 tons + 1 ton neutre. Chaque ton change le sens du mot. 買 mǎi (acheter, ton 3) vs 賣 mài (vendre, ton 4). Sandhi : deux tons 3 → le premier passe en ton 2 (你好 = ni hao).",
        },
        {
          type: "example",
          chinese: "湯 tāng / 糖 táng / 躺 tǎng / 燙 tàng",
          pinyin: "tāng / táng / tǎng / tàng",
          translation: "soupe / sucre / s'allonger / brulant",
          content: "Les 4 tons sur le meme son — preuve que les tons sont du vocabulaire.",
        },
        {
          type: "text",
          content:
            "POINT 2 — Structure SVO. Le chinois suit un ordre rigide : Sujet + Verbe + Objet. 我吃飯 (je mange). Les marqueurs de temps se placent AVANT le verbe : 我昨天吃了飯 (j'ai mange hier).",
        },
        {
          type: "example",
          chinese: "我昨天去了夜市。",
          pinyin: "wǒ zuótiān qù le yèshì.",
          translation: "Je suis alle au marche de nuit hier.",
          content: "Structure : Sujet + Temps + Verbe + 了 + Lieu.",
        },
        {
          type: "text",
          content:
            "POINT 3 — Les classificateurs. Structure obligatoire : nombre + classificateur + nom. 個 (universel), 隻 (animaux), 張 (plat), 條 (long), 杯/碗/瓶 (contenants). En cas de doute → 個.",
        },
        {
          type: "example",
          chinese: "兩杯珍珠奶茶",
          pinyin: "liǎng bēi zhēnzhū nǎichá",
          translation: "Deux bubble teas",
          content: "杯 pour les boissons en verre/tasse.",
        },
        {
          type: "text",
          content:
            "POINT 4 — Les questions. Trois methodes : ajouter 嗎 en fin de phrase, utiliser A不A (去不去？), ou utiliser un mot interrogatif (什麼, 哪裡, 多少, 幾). Le chinois n'a pas d'inversion sujet-verbe pour les questions.",
        },
        {
          type: "example",
          chinese: "這個多少錢？",
          pinyin: "zhège duōshǎo qián?",
          translation: "Combien ca coute ?",
          content: "La question la plus utile a Taiwan.",
        },
        {
          type: "text",
          content:
            "POINT 5 — Survie : directions et restaurant. 我要... (je veux), 內用/外帶 (sur place/a emporter), 左/右/直走 (gauche/droite/tout droit), 好吃 (delicieux), 不好意思 (excusez-moi).",
        },
      ],
    },
    {
      title: "Exercices croises",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Les exercices suivants MELANGENT les concepts de plusieurs unites. Chaque phrase necessite de combiner classificateurs + questions + vocabulaire restaurant + structure SVO. C'est la que la revision prend tout son sens.",
        },
        {
          type: "example",
          chinese: "這兩杯珍珠奶茶多少錢？",
          pinyin: "zhè liǎng bēi zhēnzhū nǎichá duōshǎo qián?",
          translation: "Combien coutent ces deux bubble teas ?",
          content: "Combine : demonstratif 這 + classificateur 杯 + vocabulaire restaurant + question 多少錢.",
        },
        {
          type: "example",
          chinese: "請問，你們有沒有素食的？",
          pinyin: "qǐngwèn, nǐmen yǒu méiyǒu sùshí de?",
          translation: "Excusez-moi, vous avez du vegetarien ?",
          content: "Combine : politesse 請問 + question A不A (有沒有) + vocabulaire restaurant.",
        },
      ],
    },
    {
      title: "Auto-evaluation",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Traduisez ces 5 phrases du francais au chinois sans aide. Ce sont des phrases de la vie reelle a Taiwan qui combinent tous les points cles des chapitres 1 et 2. Verifiez vos reponses avec les corrections ci-dessous.",
        },
        {
          type: "example",
          chinese: "我要一碗滷肉飯，外帶。",
          pinyin: "wǒ yào yì wǎn lǔròufàn, wàidài.",
          translation: "Je voudrais un bol de lu rou fan, a emporter.",
          content: "Phrase 1 : testez 我要 + classificateur 碗 + vocabulaire + 外帶.",
        },
        {
          type: "example",
          chinese: "左轉，然後直走三分鐘。",
          pinyin: "zuǒ zhuǎn, ránhòu zhí zǒu sān fēnzhōng.",
          translation: "Tournez a gauche, puis allez tout droit pendant 3 minutes.",
          content: "Phrase 2 : testez directions + connecteur 然後 + duree.",
        },
        {
          type: "example",
          chinese: "這隻狗是你的嗎？",
          pinyin: "zhè zhī gǒu shì nǐ de ma?",
          translation: "Ce chien est a toi ?",
          content: "Phrase 3 : testez classificateur 隻 + 是...的 + question 嗎.",
        },
        {
          type: "example",
          chinese: "你要買幾本書？",
          pinyin: "nǐ yào mǎi jǐ běn shū?",
          translation: "Tu veux acheter combien de livres ?",
          content: "Phrase 4 : testez question 幾 + classificateur 本 + vocabulaire.",
        },
        {
          type: "example",
          chinese: "不好意思，可以說慢一點嗎？",
          pinyin: "bù hǎo yìsi, kěyǐ shuō màn yìdiǎn ma?",
          translation: "Excusez-moi, pouvez-vous parler plus lentement ?",
          content: "Phrase 5 : testez politesse + survie debutant.",
        },
      ],
    },
  ],

  keyPoints: [
    "Si tu reussis 70%+, tu es pret pour le chapitre 3",
    "Les classificateurs sont les plus oublies — revise-les",
    "Les tons se travaillent TOUS LES JOURS",
  ],

  vocabulary: [],

  exercises: [
    {
      id: "u43-ex1",
      type: "translate",
      question: "Comment dit-on « Combien coutent ces deux verres de bubble tea ? »",
      correctAnswer: "這兩杯珍珠奶茶多少錢？",
      options: [
        "這兩杯珍珠奶茶多少錢？",
        "兩珍珠奶茶多少？",
        "這個珍珠奶茶兩杯錢？",
        "珍珠奶茶兩杯這多少錢？",
      ],
      optionsHint: [
        "zhè liǎng bēi zhēnzhū nǎichá duōshǎo qián?",
        "liǎng zhēnzhū nǎichá duōshǎo?",
        "zhège zhēnzhū nǎichá liǎng bēi qián?",
        "zhēnzhū nǎichá liǎng bēi zhè duōshǎo qián?",
      ],
      optionsZhuyin: ["ㄓㄜˋ ㄌㄧㄤˇ ㄅㄟ ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ?", "ㄌㄧㄤˇ ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄉㄨㄛ ㄕㄠˇ?", "ㄓㄜˋ ㄍㄜ ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄌㄧㄤˇ ㄅㄟ ㄑㄧㄢˊ?", "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄌㄧㄤˇ ㄅㄟ ㄓㄜˋ ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ?"],
    },
    {
      id: "u43-ex2",
      type: "fill-blank",
      question: "我要一___滷肉飯。(Je voudrais un bol de lu rou fan.)",
      correctAnswer: "碗",
      options: ["碗", "杯", "瓶", "張"],
      optionsHint: ["wǎn", "bēi", "píng", "zhāng"],
      optionsZhuyin: ["ㄨㄢˇ", "ㄅㄟ", "ㄆㄧㄥˊ", "ㄓㄤ"],
      hint: "Le lu rou fan se sert dans un bol.",
    },
    {
      id: "u43-ex3",
      type: "reorder",
      question: "Remettez dans l'ordre : 多少 / 這個 / 錢 (Combien ca coute ?)",
      correctAnswer: "這個多少錢？",
      options: ["這個多少錢？", "多少這個錢？", "錢多少這個？", "這個錢多少？"],
      optionsHint: ["zhège duōshǎo qián?", "duōshǎo zhège qián?", "qián duōshǎo zhège?", "zhège qián duōshǎo?"],
      optionsZhuyin: ["ㄓㄜˋ ㄍㄜ ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ?", "ㄉㄨㄛ ㄕㄠˇ ㄓㄜˋ ㄍㄜ ㄑㄧㄢˊ?", "ㄑㄧㄢˊ ㄉㄨㄛ ㄕㄠˇ ㄓㄜˋ ㄍㄜ?", "ㄓㄜˋ ㄍㄜ ㄑㄧㄢˊ ㄉㄨㄛ ㄕㄠˇ?"],
    },
    {
      id: "u43-ex4",
      type: "comprehension",
      question: "Quel classificateur utilise-t-on pour commander un taxi ?",
      correctAnswer: "輛 — les vehicules utilisent 輛",
      options: [
        "輛 — les vehicules utilisent 輛",
        "台 — les machines utilisent 台",
        "個 — le classificateur universel",
        "隻 — pour les animaux",
      ],
    },
    {
      id: "u43-ex5",
      type: "translate",
      question: "Comment dit-on « Tournez a droite, puis allez tout droit » ?",
      correctAnswer: "右轉，然後直走",
      options: [
        "右轉，然後直走",
        "直走，然後右轉",
        "右邊走，直直去",
        "然後右轉直走",
      ],
      optionsHint: [
        "yòu zhuǎn, ránhòu zhí zǒu",
        "zhí zǒu, ránhòu yòu zhuǎn",
        "yòubiān zǒu, zhízhí qù",
        "ránhòu yòu zhuǎn zhí zǒu",
      ],
      optionsZhuyin: ["ㄧㄡˋ ㄓㄨㄢˇ, ㄖㄢˊ ㄏㄡˋ ㄓˊ ㄗㄡˇ", "ㄓˊ ㄗㄡˇ, ㄖㄢˊ ㄏㄡˋ ㄧㄡˋ ㄓㄨㄢˇ", "ㄧㄡˋ ㄅㄧㄢ ㄗㄡˇ, ㄓˊ ㄓˊ ㄑㄩˋ", "ㄖㄢˊ ㄏㄡˋ ㄧㄡˋ ㄓㄨㄢˇ ㄓˊ ㄗㄡˇ"],
    },
    {
      id: "u43-ex6",
      type: "fill-blank",
      question: "請問，你們有___有素食的？(Excusez-moi, avez-vous du vegetarien ?)",
      correctAnswer: "沒",
      options: ["沒", "不", "嗎", "了"],
      optionsHint: ["méi", "bù", "ma", "le"],
      optionsZhuyin: ["ㄇㄟˊ", "ㄅㄨˋ", "ㄇㄚ", "ㄌㄜ"],
      hint: "Question A不A avec le verbe 有.",
      hintZhuyin: "Question A不A avec le verbe 有.",
    },
    {
      id: "u43-ex7",
      type: "comprehension",
      question: "Comment se prononce 你好 a cause du sandhi tonal ?",
      correctAnswer: "ni hao — le premier ton 3 passe en ton 2",
      options: [
        "ni hao — le premier ton 3 passe en ton 2",
        "ni hao — les deux restent ton 3",
        "ni hao — le deuxieme passe en ton 2",
        "ni hao — les deux passent en ton 1",
      ],
    },
    {
      id: "u43-ex8",
      type: "reorder",
      question: "Remettez dans l'ordre : 外帶 / 滷肉飯 / 一碗 / 我要 (Je voudrais un lu rou fan a emporter.)",
      correctAnswer: "我要一碗滷肉飯，外帶。",
      options: [
        "我要一碗滷肉飯，外帶。",
        "一碗我要滷肉飯外帶。",
        "外帶我要一碗滷肉飯。",
        "滷肉飯我要一碗外帶。",
      ],
      optionsHint: [
        "wǒ yào yì wǎn lǔròufàn, wàidài.",
        "yì wǎn wǒ yào lǔròufàn wàidài.",
        "wàidài wǒ yào yì wǎn lǔròufàn.",
        "lǔròufàn wǒ yào yì wǎn wàidài.",
      ],
      optionsZhuyin: ["ㄨㄛˇ ㄧㄠˋ ㄧˋ ㄨㄢˇ ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ, ㄨㄞˋ ㄉㄞˋ.", "ㄧˋ ㄨㄢˇ ㄨㄛˇ ㄧㄠˋ ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ ㄨㄞˋ ㄉㄞˋ.", "ㄨㄞˋ ㄉㄞˋ ㄨㄛˇ ㄧㄠˋ ㄧˋ ㄨㄢˇ ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ.", "ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ ㄨㄛˇ ㄧㄠˋ ㄧˋ ㄨㄢˇ ㄨㄞˋ ㄉㄞˋ."],
    },
    {
      id: "u43-ex9",
      type: "translate",
      question: "Comment dit-on « Je ne comprends pas, pouvez-vous parler plus lentement ? »",
      correctAnswer: "聽不懂，可以說慢一點嗎？",
      options: [
        "聽不懂，可以說慢一點嗎？",
        "看不懂，再說一次",
        "不知道，怎麼辦？",
        "我不會，慢慢來",
      ],
      optionsHint: [
        "tīng bù dǒng, kěyǐ shuō màn yìdiǎn ma?",
        "kàn bù dǒng, zài shuō yí cì",
        "bù zhīdào, zěnme bàn?",
        "wǒ bú huì, mànmàn lái",
      ],
      optionsZhuyin: ["ㄊㄧㄥ ㄅㄨˋ ㄉㄨㄥˇ, ㄎㄜˇ ㄧˇ ㄕㄨㄛ ㄇㄢˋ ㄧˋ ㄉㄧㄢˇ ㄇㄚ?", "ㄎㄢˋ ㄅㄨˋ ㄉㄨㄥˇ, ㄗㄞˋ ㄕㄨㄛ ㄧˊ ㄘˋ", "ㄅㄨˋ ㄓ ㄉㄠˋ, ㄗㄣˇ ㄇㄜ ㄅㄢˋ?", "ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ, ㄇㄢˋ ㄇㄢˋ ㄌㄞˊ"],
    },
    {
      id: "u43-ex10",
      type: "fill-blank",
      question: "三___貓 (trois chats)",
      correctAnswer: "隻",
      options: ["隻", "條", "張", "個"],
      optionsHint: ["zhī", "tiáo", "zhāng", "ge"],
      optionsZhuyin: ["ㄓ", "ㄊㄧㄠˊ", "ㄓㄤ", "ㄍㄜ"],
      hint: "Le classificateur pour les animaux.",
    },
    {
      id: "u43-ex11",
      type: "comprehension",
      question: "Que signifie 內用還是外帶 ?",
      correctAnswer: "Sur place ou a emporter ?",
      options: [
        "Sur place ou a emporter ?",
        "Grand ou petit ?",
        "Piquant ou pas piquant ?",
        "Chaud ou froid ?",
      ],
    },
    {
      id: "u43-ex12",
      type: "translate",
      question: "Comment dit-on « Ce chien est a toi ? » avec le bon classificateur ?",
      correctAnswer: "這隻狗是你的嗎？",
      options: [
        "這隻狗是你的嗎？",
        "這個狗是你的嗎？",
        "這條狗是你的嗎？",
        "這台狗是你的嗎？",
      ],
      optionsHint: [
        "zhè zhī gǒu shì nǐ de ma?",
        "zhège gǒu shì nǐ de ma?",
        "zhè tiáo gǒu shì nǐ de ma?",
        "zhè tái gǒu shì nǐ de ma?",
      ],
      optionsZhuyin: ["ㄓㄜˋ ㄓ ㄍㄡˇ ㄕˋ ㄋㄧˇ ㄉㄜ ㄇㄚ?", "ㄓㄜˋ ㄍㄜ ㄍㄡˇ ㄕˋ ㄋㄧˇ ㄉㄜ ㄇㄚ?", "ㄓㄜˋ ㄊㄧㄠˊ ㄍㄡˇ ㄕˋ ㄋㄧˇ ㄉㄜ ㄇㄚ?", "ㄓㄜˋ ㄊㄞˊ ㄍㄡˇ ㄕˋ ㄋㄧˇ ㄉㄜ ㄇㄚ?"],
    },
  ],

  requiredScore: 0.7,
  prerequisites: ["unit-34"],
};
