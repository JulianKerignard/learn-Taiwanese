import type { CourseUnit } from "@/types/course";

export const unit33: CourseUnit = {
  id: "unit-33",
  number: 33,
  title: "Pratique 1 — Mises en situation Taiwan",
  titleZh: "練習一——台灣情境模擬",
  chapter: 2,
  description:
    "Pas de nouvelle grammaire ici : c'est de la pratique pure. Traduisez, remettez en ordre, et produisez des phrases dans trois situations concrètes de la vie quotidienne à Taiwan : au 7-Eleven, au marché de nuit, et dans le MRT.",
  icon: "🎯",

  sections: [
    {
      title: "Au 7-Eleven",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Scénario 1 : Vous entrez dans un 7-Eleven (七仔 qīzǎi en taiwanais, ou 便利商店 biànlì shāngdiàn). Vous voulez acheter un bento (便當 biàndāng) et le faire réchauffer. Les employés de 7-Eleven à Taiwan sont habitués aux clients étrangers — mais tout se passe en mandarin.",
        },
        {
          type: "text",
          content:
            "Situation A : Vous prenez un bento dans le frigo et vous allez au comptoir. Vous voulez demander à l'employé de le réchauffer au micro-ondes.",
        },
        {
          type: "example",
          chinese: "我要這個便當，可以加熱嗎？",
          pinyin: "wǒ yào zhège biàndāng, kěyǐ jiārè ma?",
          translation: "Je voudrais ce bento, vous pouvez le réchauffer ?",
          content:
            "加熱 (jiārè) = réchauffer. 可以...嗎？ = est-ce que c'est possible de... ?",
        },
        {
          type: "text",
          content:
            "Situation B : Vous remarquez que le magasin fait payer les sacs plastiques (2 NT$ à Taiwan). Vous avez oublié votre sac réutilisable.",
        },
        {
          type: "example",
          chinese: "你們有袋子嗎？",
          pinyin: "nǐmen yǒu dàizi ma?",
          translation: "Vous avez des sacs ?",
          content:
            "袋子 (dàizi) = sac. L'employé répondra probablement : 要袋子嗎？兩塊。(Tu veux un sac ? Deux dollars.)",
        },
        {
          type: "text",
          content:
            "Scénario 2 : Vous voulez recharger votre carte EasyCard (悠遊卡 yōuyóukǎ) au comptoir du 7-Eleven. C'est une opération très courante à Taiwan — la EasyCard sert pour le MRT, le bus, et même les achats en magasin.",
        },
        {
          type: "example",
          chinese: "我要加值五百塊。",
          pinyin: "wǒ yào jiāzhí wǔbǎi kuài.",
          translation: "Je voudrais recharger 500 dollars.",
          content:
            "加值 (jiāzhí) = recharger (une carte). 塊 (kuài) = dollar (familier). 悠遊卡加值 = recharger la EasyCard.",
        },
      ],
    },
    {
      title: "Au marché de nuit",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Scénario 3 : Vous êtes au marché de nuit (夜市 yèshì). Les stands de street food sont partout, l'odeur de tofu puant flotte dans l'air. Vous vous arrêtez devant un stand de nouilles au boeuf.",
        },
        {
          type: "text",
          content:
            "Situation A : Vous commandez un bol de nouilles au boeuf, et vous précisez que vous ne voulez pas épicé.",
        },
        {
          type: "example",
          chinese: "我要一碗牛肉麵，不辣。",
          pinyin: "wǒ yào yì wǎn niúròu miàn, bú là.",
          translation: "Je voudrais un bol de nouilles au boeuf, pas épicé.",
          content:
            "一碗 (yì wǎn) = un bol. 牛肉麵 (niúròu miàn) = nouilles au boeuf. 不辣 (bú là) = pas épicé.",
        },
        {
          type: "text",
          content:
            "Situation B : Vous voulez savoir combien ça coûte.",
        },
        {
          type: "example",
          chinese: "多少錢？",
          pinyin: "duōshǎo qián?",
          translation: "C'est combien ?",
          content:
            "La question universelle au marché de nuit. Réponse possible : 一百二 (yìbǎi èr) = 120 NT$.",
        },
        {
          type: "text",
          content:
            "Situation C : Vous goûtez et c'est délicieux.",
        },
        {
          type: "example",
          chinese: "好吃！",
          pinyin: "hǎochī!",
          translation: "C'est délicieux !",
          content:
            "Le compliment ultime dans un marché de nuit. Le vendeur sera ravi. Variante : 很好吃！(très délicieux !)",
        },
        {
          type: "text",
          content:
            "Scénario 4 : Vous avez besoin de trouver les toilettes dans le marché de nuit. Vous demandez à un passant.",
        },
        {
          type: "example",
          chinese: "不好意思，廁所在哪裡？",
          pinyin: "bùhǎoyìsi, cèsuǒ zài nǎlǐ?",
          translation: "Excusez-moi, où sont les toilettes ?",
          content:
            "不好意思 (bùhǎoyìsi) = excusez-moi (plus courant que 請問 dans la rue). 廁所 (cèsuǒ) = toilettes. 在哪裡 (zài nǎlǐ) = où est-ce ?",
        },
      ],
    },
    {
      title: "Dans le MRT",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Scénario 5 : Vous voulez prendre le MRT (捷運 jiéyùn) de Taipei pour aller à Taipei 101. Vous êtes à la station et vous avez besoin d'informations.",
        },
        {
          type: "text",
          content:
            "Situation A : Vous expliquez que vous voulez prendre le MRT jusqu'à Taipei 101.",
        },
        {
          type: "example",
          chinese: "我要坐捷運到台北101。",
          pinyin: "wǒ yào zuò jiéyùn dào Táiběi yī líng yī.",
          translation: "Je veux prendre le MRT jusqu'à Taipei 101.",
          content:
            "坐 (zuò) = prendre (un transport). 捷運 (jiéyùn) = MRT (métro de Taipei). 到 (dào) = jusqu'à, arriver à.",
        },
        {
          type: "text",
          content:
            "Situation B : Vous arrivez à la bonne station mais vous ne savez pas quelle sortie prendre.",
        },
        {
          type: "example",
          chinese: "台北101是幾號出口？",
          pinyin: "Táiběi yī líng yī shì jǐ hào chūkǒu?",
          translation: "Quelle sortie pour Taipei 101 ?",
          content:
            "幾號 (jǐ hào) = quel numéro. 出口 (chūkǒu) = sortie. Les stations de MRT ont des sorties numérotées (1號出口, 2號出口...).",
        },
        {
          type: "text",
          content:
            "Situation C : Vous voulez savoir combien de stations il reste avant votre arrêt.",
        },
        {
          type: "example",
          chinese: "還有幾站？",
          pinyin: "hái yǒu jǐ zhàn?",
          translation: "Il reste combien de stations ?",
          content:
            "還有 (hái yǒu) = il reste encore. 幾站 (jǐ zhàn) = combien de stations. Question utile quand vous n'avez pas de signal pour vérifier sur votre téléphone.",
        },
      ],
    },
  ],

  keyPoints: [
    "Au 7-Eleven : 可以加熱嗎？(réchauffer), 我要加值 (recharger la carte), 你們有袋子嗎？(sac).",
    "Au marché de nuit : 我要一碗... (je voudrais un bol de...), 多少錢？(combien ?), 好吃！(délicieux !), 不好意思，廁所在哪裡？(où sont les toilettes ?).",
    "Dans le MRT : 我要坐捷運到... (je veux prendre le MRT jusqu'à...), 幾號出口？(quelle sortie ?), 還有幾站？(combien de stations ?).",
  ],

  vocabulary: [],

  exercises: [
    {
      id: "u33-ex1",
      type: "translate",
      question: "Traduisez : « Je voudrais ce bento, vous pouvez le réchauffer ? »",
      correctAnswer: "我要這個便當，可以加熱嗎？",
      options: [
        "我要這個便當，可以加熱嗎？",
        "我要一個便當，你可以熱嗎？",
        "這個便當要加熱嗎？",
        "我想要便當，請加熱。",
      ],
      optionsHint: [
        "wǒ yào zhège biàndāng, kěyǐ jiārè ma?",
        "wǒ yào yí ge biàndāng, nǐ kěyǐ rè ma?",
        "zhège biàndāng yào jiārè ma?",
        "wǒ xiǎng yào biàndāng, qǐng jiārè.",
      ],
    },
    {
      id: "u33-ex2",
      type: "translate",
      question: "Traduisez : « Vous avez des sacs ? »",
      correctAnswer: "你們有袋子嗎？",
      options: [
        "你們有袋子嗎？",
        "你有包嗎？",
        "袋子在哪裡？",
        "我要袋子。",
      ],
      optionsHint: [
        "nǐmen yǒu dàizi ma?",
        "nǐ yǒu bāo ma?",
        "dàizi zài nǎlǐ?",
        "wǒ yào dàizi.",
      ],
    },
    {
      id: "u33-ex3",
      type: "translate",
      question: "Traduisez : « Je voudrais recharger 500 dollars. »",
      correctAnswer: "我要加值五百塊。",
      options: [
        "我要加值五百塊。",
        "我要五百塊。",
        "加值五百元好嗎？",
        "請給我五百塊。",
      ],
      optionsHint: [
        "wǒ yào jiāzhí wǔbǎi kuài.",
        "wǒ yào wǔbǎi kuài.",
        "jiāzhí wǔbǎi yuán hǎo ma?",
        "qǐng gěi wǒ wǔbǎi kuài.",
      ],
    },
    {
      id: "u33-ex4",
      type: "translate",
      question: "Traduisez : « Je voudrais un bol de nouilles au boeuf, pas épicé. »",
      correctAnswer: "我要一碗牛肉麵，不辣。",
      options: [
        "我要一碗牛肉麵，不辣。",
        "一碗牛肉麵，不要辣的。",
        "我想吃牛肉麵不辣。",
        "給我牛肉麵，辣的不要。",
      ],
      optionsHint: [
        "wǒ yào yì wǎn niúròu miàn, bú là.",
        "yì wǎn niúròu miàn, bú yào là de.",
        "wǒ xiǎng chī niúròu miàn bú là.",
        "gěi wǒ niúròu miàn, là de bú yào.",
      ],
    },
    {
      id: "u33-ex5",
      type: "translate",
      question: "Traduisez : « C'est combien ? »",
      correctAnswer: "多少錢？",
      options: [
        "多少錢？",
        "幾塊錢？",
        "這個多少？",
        "要付多少？",
      ],
      optionsHint: [
        "duōshǎo qián?",
        "jǐ kuài qián?",
        "zhège duōshǎo?",
        "yào fù duōshǎo?",
      ],
    },
    {
      id: "u33-ex6",
      type: "translate",
      question: "Traduisez : « C'est délicieux ! »",
      correctAnswer: "好吃！",
      options: ["好吃！", "很好！", "好喝！", "不錯！"],
      optionsHint: ["hǎochī!", "hěn hǎo!", "hǎohē!", "búcuò!"],
    },
    {
      id: "u33-ex7",
      type: "translate",
      question: "Traduisez : « Excusez-moi, où sont les toilettes ? »",
      correctAnswer: "不好意思，廁所在哪裡？",
      options: [
        "不好意思，廁所在哪裡？",
        "請問廁所在哪？",
        "對不起，廁所呢？",
        "不好意思，洗手間在哪裡？",
      ],
      optionsHint: [
        "bùhǎoyìsi, cèsuǒ zài nǎlǐ?",
        "qǐngwèn cèsuǒ zài nǎ?",
        "duìbuqǐ, cèsuǒ ne?",
        "bùhǎoyìsi, xǐshǒujiān zài nǎlǐ?",
      ],
    },
    {
      id: "u33-ex8",
      type: "reorder",
      question: "Remettez dans l'ordre : 到 / 台北101 / 坐 / 要 / 我 / 捷運",
      correctAnswer: "我要坐捷運到台北101",
      options: ["我", "要", "坐", "捷運", "到", "台北101"],
      hint: "Structure : Sujet + 要 + Verbe + Transport + 到 + Destination",
    },
    {
      id: "u33-ex9",
      type: "translate",
      question: "Traduisez : « Quelle sortie pour Taipei 101 ? »",
      correctAnswer: "台北101是幾號出口？",
      options: [
        "台北101是幾號出口？",
        "台北101在哪個出口？",
        "出口幾號是台北101？",
        "台北101的出口是什麼？",
      ],
      optionsHint: [
        "Táiběi yī líng yī shì jǐ hào chūkǒu?",
        "Táiběi yī líng yī zài nǎ ge chūkǒu?",
        "chūkǒu jǐ hào shì Táiběi yī líng yī?",
        "Táiběi yī líng yī de chūkǒu shì shénme?",
      ],
    },
    {
      id: "u33-ex10",
      type: "reorder",
      question: "Remettez dans l'ordre : 嗎 / 加熱 / 可以 / 便當 / 這個",
      correctAnswer: "這個便當可以加熱嗎",
      options: ["這個", "便當", "可以", "加熱", "嗎"],
      hint: "Structure : Sujet + 可以 + Verbe + 嗎",
    },
    {
      id: "u33-ex11",
      type: "translate",
      question: "Traduisez : « Il reste combien de stations ? »",
      correctAnswer: "還有幾站？",
      options: [
        "還有幾站？",
        "幾站到了？",
        "還有多遠？",
        "要坐幾站？",
      ],
      optionsHint: [
        "hái yǒu jǐ zhàn?",
        "jǐ zhàn dào le?",
        "hái yǒu duō yuǎn?",
        "yào zuò jǐ zhàn?",
      ],
    },
    {
      id: "u33-ex12",
      type: "reorder",
      question: "Remettez dans l'ordre : 在 / 廁所 / 哪裡 / 不好意思",
      correctAnswer: "不好意思廁所在哪裡",
      options: ["不好意思", "廁所", "在", "哪裡"],
      hint: "Structure : Formule de politesse + Sujet + 在 + 哪裡",
    },
    {
      id: "u33-ex13",
      type: "translate",
      question: "Traduisez : « Je veux prendre le MRT jusqu'à la gare de Taipei. »",
      correctAnswer: "我要坐捷運到台北車站。",
      options: [
        "我要坐捷運到台北車站。",
        "我坐捷運去台北車站。",
        "我想到台北車站坐捷運。",
        "捷運到台北車站嗎？",
      ],
      optionsHint: [
        "wǒ yào zuò jiéyùn dào Táiběi chēzhàn.",
        "wǒ zuò jiéyùn qù Táiběi chēzhàn.",
        "wǒ xiǎng dào Táiběi chēzhàn zuò jiéyùn.",
        "jiéyùn dào Táiběi chēzhàn ma?",
      ],
    },
    {
      id: "u33-ex14",
      type: "reorder",
      question: "Remettez dans l'ordre : 牛肉麵 / 一碗 / 不辣 / 我 / 要",
      correctAnswer: "我要一碗牛肉麵不辣",
      options: ["我", "要", "一碗", "牛肉麵", "不辣"],
      hint: "Structure : Sujet + 要 + Quantité + Nom + Spécification",
    },
    {
      id: "u33-ex15",
      type: "translate",
      question: "Traduisez : « La EasyCard, c'est possible de recharger ici ? »",
      correctAnswer: "悠遊卡可以在這裡加值嗎？",
      options: [
        "悠遊卡可以在這裡加值嗎？",
        "這裡加值悠遊卡嗎？",
        "我的悠遊卡要加值。",
        "在這裡可以用悠遊卡嗎？",
      ],
      optionsHint: [
        "Yōuyóu kǎ kěyǐ zài zhèlǐ jiāzhí ma?",
        "zhèlǐ jiāzhí Yōuyóu kǎ ma?",
        "wǒ de Yōuyóu kǎ yào jiāzhí.",
        "zài zhèlǐ kěyǐ yòng Yōuyóu kǎ ma?",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-13"],
};
