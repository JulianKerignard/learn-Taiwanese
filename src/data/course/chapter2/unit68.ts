import type { CourseUnit } from "@/types/course";

export const unit68: CourseUnit = {
  id: "unit-68",
  number: 68,
  title: "Pratique — Dialogues de survie",
  titleZh: "生存對話練習",
  chapter: 2,
  description:
    "Entraînez-vous à survivre en taiwanais dans trois situations incontournables : commander au restaurant, vous débrouiller dans la rue, et passer un coup de fil. Pas de nouvelle grammaire — uniquement de la pratique en contexte réel.",
  icon: "🎭",

  sections: [
    {
      title: "Au restaurant",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Scénario 1 : Vous êtes dans un petit restaurant local (小吃店 xiǎochīdiàn) à Taichung. Le menu est uniquement en chinois, pas de photos. Vous devez commander, signaler vos restrictions alimentaires et demander l'addition.",
        },
        {
          type: "example",
          chinese: "請問，你們有菜單嗎？",
          pinyin: "qǐngwèn, nǐmen yǒu càidān ma?",
          translation: "Excusez-moi, vous avez un menu ?",
          content:
            "菜單 (càidān) = menu. Dans les petits restos taiwanais, le menu est souvent affiché au mur ou sur un bout de papier à cocher.",
        },
        {
          type: "text",
          content:
            "Situation A : Vous voulez commander un plat de riz sauté aux légumes et une soupe.",
        },
        {
          type: "example",
          chinese: "我要一個炒飯和一碗湯。",
          pinyin: "wǒ yào yí ge chǎofàn hé yì wǎn tāng.",
          translation: "Je voudrais un riz sauté et un bol de soupe.",
          content:
            "炒飯 (chǎofàn) = riz sauté. 湯 (tāng) = soupe. 和 (hé) = et. Dans les petits restos, on dit souvent 我要... pour commander.",
        },
        {
          type: "text",
          content:
            "Situation B : Vous êtes végétarien et vous devez le signaler.",
        },
        {
          type: "example",
          chinese: "我吃素，這個有肉嗎？",
          pinyin: "wǒ chī sù, zhège yǒu ròu ma?",
          translation: "Je suis végétarien, est-ce que ça contient de la viande ?",
          content:
            "吃素 (chī sù) = être végétarien / manger végétarien. 肉 (ròu) = viande. Taiwan est très accueillant pour les végétariens — cherchez le signe 素食 (sùshí).",
        },
        {
          type: "text",
          content:
            "Situation C : Vous avez terminé votre repas et vous voulez demander l'addition.",
        },
        {
          type: "example",
          chinese: "買單，謝謝。",
          pinyin: "mǎidān, xièxie.",
          translation: "L'addition, merci.",
          content:
            "買單 (mǎidān) = demander l'addition / payer. Variante courante à Taiwan : 結帳 (jiézhàng). Dans les petits restos, on paie souvent directement au comptoir.",
        },
      ],
    },
    {
      title: "Dans la rue",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Scénario 2 : Vous êtes perdu dans les rues de Tainan. Vous cherchez un temple célèbre, vous devez prendre un taxi, et vous voulez acheter des fruits à un stand de rue.",
        },
        {
          type: "text",
          content:
            "Situation A : Vous demandez votre chemin à un passant.",
        },
        {
          type: "example",
          chinese: "不好意思，請問赤崁樓怎麼走？",
          pinyin: "bùhǎoyìsi, qǐngwèn Chìkǎn Lóu zěnme zǒu?",
          translation: "Excusez-moi, comment aller au Fort Provintia ?",
          content:
            "怎麼走 (zěnme zǒu) = comment y aller (à pied). 赤崁樓 (Chìkǎn Lóu) = Fort Provintia, monument historique célèbre de Tainan.",
        },
        {
          type: "text",
          content:
            "Situation B : Vous décidez de prendre un taxi. Vous montez et indiquez votre destination.",
        },
        {
          type: "example",
          chinese: "司機先生，我要去火車站。",
          pinyin: "sījī xiānshēng, wǒ yào qù huǒchēzhàn.",
          translation: "Monsieur le chauffeur, je veux aller à la gare.",
          content:
            "司機 (sījī) = chauffeur. 火車站 (huǒchēzhàn) = gare. À Taiwan, les taxis sont jaunes et utilisent le compteur (跳表 tiàobiǎo).",
        },
        {
          type: "text",
          content:
            "Situation C : Vous achetez des mangues à un stand de fruits.",
        },
        {
          type: "example",
          chinese: "這個芒果怎麼賣？",
          pinyin: "zhège mángguǒ zěnme mài?",
          translation: "Comment sont vendues ces mangues ?",
          content:
            "怎麼賣 (zěnme mài) = comment est-ce vendu ? (au poids, à la pièce...). 芒果 (mángguǒ) = mangue. Les mangues de Taiwan sont célèbres — surtout en été !",
        },
      ],
    },
    {
      title: "Au téléphone",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Scénario 3 : Vous devez passer des appels téléphoniques — réserver une table au restaurant, appeler un ami taiwanais, et laisser un message vocal. Le téléphone est plus difficile que le face-à-face : pas de gestes, pas de contexte visuel.",
        },
        {
          type: "text",
          content:
            "Situation A : Vous appelez un restaurant pour réserver une table.",
        },
        {
          type: "example",
          chinese: "你好，我想訂位，明天晚上兩個人。",
          pinyin: "nǐ hǎo, wǒ xiǎng dìngwèi, míngtiān wǎnshàng liǎng ge rén.",
          translation: "Bonjour, je voudrais réserver, demain soir pour deux personnes.",
          content:
            "訂位 (dìngwèi) = réserver une table. 明天晚上 (míngtiān wǎnshàng) = demain soir. 兩個人 (liǎng ge rén) = deux personnes.",
        },
        {
          type: "text",
          content:
            "Situation B : Vous appelez votre ami taiwanais pour lui proposer de sortir.",
        },
        {
          type: "example",
          chinese: "喂，你在忙嗎？我們今天下午去喝咖啡好不好？",
          pinyin: "wéi, nǐ zài máng ma? wǒmen jīntiān xiàwǔ qù hē kāfēi hǎo bù hǎo?",
          translation: "Allô, tu es occupé ? On va prendre un café cet après-midi, d'accord ?",
          content:
            "喂 (wéi) = allô (au téléphone). 在忙 (zài máng) = être occupé (en ce moment). 好不好 (hǎo bù hǎo) = d'accord ? (demande de confirmation).",
        },
        {
          type: "text",
          content:
            "Situation C : La personne ne répond pas. Vous laissez un message.",
        },
        {
          type: "example",
          chinese: "嗨，是我。你方便的時候回我電話，謝謝。",
          pinyin: "hāi, shì wǒ. nǐ fāngbiàn de shíhòu huí wǒ diànhuà, xièxie.",
          translation: "Salut, c'est moi. Rappelle-moi quand tu es disponible, merci.",
          content:
            "方便的時候 (fāngbiàn de shíhòu) = quand c'est pratique / quand tu es disponible. 回電話 (huí diànhuà) = rappeler.",
        },
      ],
    },
  ],

  keyPoints: [
    "Au restaurant : 我要... (pour commander), 吃素 (végétarien), 這個有肉嗎？(ça contient de la viande ?), 買單 / 結帳 (l'addition).",
    "Dans la rue : 怎麼走？(comment y aller ?), 我要去... (je veux aller à...), 怎麼賣？(comment c'est vendu ?).",
    "Au téléphone : 喂 (allô), 我想訂位 (réserver), 好不好？(d'accord ?), 回我電話 (rappelle-moi).",
    "Stratégie de survie : même avec un vocabulaire limité, les formules 我要... (je veux), 可以...嗎？(est-ce possible ?), 請問... (excusez-moi) et 怎麼... (comment) couvrent 80 % des situations courantes.",
  ],

  vocabulary: [],

  exercises: [
    {
      id: "u68-ex1",
      type: "translate",
      question: "Traduisez : « Je voudrais un riz sauté et un bol de soupe. »",
      correctAnswer: "我要一個炒飯和一碗湯。",
      options: [
        "我要一個炒飯和一碗湯。",
        "我想吃炒飯，還有湯。",
        "一個炒飯跟一碗湯，好嗎？",
        "給我炒飯和湯。",
      ],
      optionsHint: [
        "wǒ yào yí ge chǎofàn hé yì wǎn tāng.",
        "wǒ xiǎng chī chǎofàn, háiyǒu tāng.",
        "yí ge chǎofàn gēn yì wǎn tāng, hǎo ma?",
        "gěi wǒ chǎofàn hé tāng.",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄧㄠˋ ㄧˊ ㄍㄜ ㄔㄠˇ ㄈㄢˋ ㄏㄜˊ ㄧˋ ㄨㄢˇ ㄊㄤ.",
        "ㄨㄛˇ ㄒㄧㄤˇ ㄔ ㄔㄠˇ ㄈㄢˋ, ㄏㄞˊ ㄧㄡˇ ㄊㄤ.",
        "ㄧˊ ㄍㄜ ㄔㄠˇ ㄈㄢˋ ㄍㄣ ㄧˋ ㄨㄢˇ ㄊㄤ, ㄏㄠˇ ㄇㄚ?",
        "ㄍㄟˇ ㄨㄛˇ ㄔㄠˇ ㄈㄢˋ ㄏㄜˊ ㄊㄤ.",
      ],
    },
    {
      id: "u68-ex2",
      type: "comprehension",
      question:
        "Vous êtes dans un restaurant et le serveur dit : 「你要吃什麼？」 Que vous demande-t-il ?",
      correctAnswer: "Ce que vous voulez manger",
      options: [
        "Ce que vous voulez manger",
        "Si vous avez réservé",
        "Si vous voulez du thé",
        "Combien vous êtes",
      ],
    },
    {
      id: "u68-ex3",
      type: "fill-blank",
      question: "Je suis végétarien : 我___素。",
      correctAnswer: "吃",
      hint: "Le verbe « manger » en chinois.",
      hintZhuyin: "ㄔ",
    },
    {
      id: "u68-ex4",
      type: "listen",
      question: "Écoutez et choisissez la bonne traduction de : 買單，謝謝。",
      correctAnswer: "L'addition, merci.",
      options: [
        "L'addition, merci.",
        "Merci, au revoir.",
        "C'est combien, merci ?",
        "Je voudrais payer par carte, merci.",
      ],
    },
    {
      id: "u68-ex5",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 走 / 赤崁樓 / 怎麼 / 請問 / 不好意思",
      correctAnswer: "不好意思請問赤崁樓怎麼走",
      options: ["不好意思", "請問", "赤崁樓", "怎麼", "走"],
      hint: "Structure : Politesse + 請問 + Lieu + 怎麼走",
      hintZhuyin: "Structure : Politesse + 請問 + Lieu + 怎麼走",
    },
    {
      id: "u68-ex6",
      type: "translate",
      question: "Traduisez : « Monsieur le chauffeur, je veux aller à la gare. »",
      correctAnswer: "司機先生，我要去火車站。",
      options: [
        "司機先生，我要去火車站。",
        "先生，請帶我去火車站。",
        "司機，火車站怎麼走？",
        "我要坐車到火車站。",
      ],
      optionsHint: [
        "sījī xiānshēng, wǒ yào qù huǒchēzhàn.",
        "xiānshēng, qǐng dài wǒ qù huǒchēzhàn.",
        "sījī, huǒchēzhàn zěnme zǒu?",
        "wǒ yào zuòchē dào huǒchēzhàn.",
      ],
      optionsZhuyin: [
        "ㄙ ㄐㄧ ㄒㄧㄢ ㄕㄥ, ㄨㄛˇ ㄧㄠˋ ㄑㄩˋ ㄏㄨㄛˇ ㄔㄜ ㄓㄢˋ.",
        "ㄒㄧㄢ ㄕㄥ, ㄑㄧㄥˇ ㄉㄞˋ ㄨㄛˇ ㄑㄩˋ ㄏㄨㄛˇ ㄔㄜ ㄓㄢˋ.",
        "ㄙ ㄐㄧ, ㄏㄨㄛˇ ㄔㄜ ㄓㄢˋ ㄗㄣˇ ㄇㄜ ㄗㄡˇ?",
        "ㄨㄛˇ ㄧㄠˋ ㄗㄨㄛˋ ㄔㄜ ㄉㄠˋ ㄏㄨㄛˇ ㄔㄜ ㄓㄢˋ.",
      ],
    },
    {
      id: "u68-ex7",
      type: "comprehension",
      question:
        "Un vendeur de fruits vous dit : 「一斤五十塊。」 Que signifie cette phrase ?",
      correctAnswer: "50 dollars le jin (600g)",
      options: [
        "50 dollars le jin (600g)",
        "50 dollars pièce",
        "5 dollars le kilo",
        "Le total est 50 dollars",
      ],
    },
    {
      id: "u68-ex8",
      type: "fill-blank",
      question:
        "Pour réserver au restaurant : 我想___位，明天晚上兩個人。",
      correctAnswer: "訂",
      hint: "Le verbe « réserver » en chinois.",
      hintZhuyin: "ㄉㄧㄥˋ",
    },
    {
      id: "u68-ex9",
      type: "translate",
      question:
        "Traduisez : « Allô, tu es occupé ? On va prendre un café cet après-midi, d'accord ? »",
      correctAnswer: "喂，你在忙嗎？我們今天下午去喝咖啡好不好？",
      options: [
        "喂，你在忙嗎？我們今天下午去喝咖啡好不好？",
        "喂，你忙不忙？下午要不要喝咖啡？",
        "你好，今天下午有空嗎？一起喝咖啡吧。",
        "喂，我們去喝咖啡，好嗎？",
      ],
      optionsHint: [
        "wéi, nǐ zài máng ma? wǒmen jīntiān xiàwǔ qù hē kāfēi hǎo bù hǎo?",
        "wéi, nǐ máng bù máng? xiàwǔ yào bú yào hē kāfēi?",
        "nǐ hǎo, jīntiān xiàwǔ yǒu kòng ma? yìqǐ hē kāfēi ba.",
        "wéi, wǒmen qù hē kāfēi, hǎo ma?",
      ],
      optionsZhuyin: [
        "ㄨㄟˊ, ㄋㄧˇ ㄗㄞˋ ㄇㄤˊ ㄇㄚ? ㄨㄛˇ ㄇㄣ ㄐㄧㄣ ㄊㄧㄢ ㄒㄧㄚˋ ㄨˇ ㄑㄩˋ ㄏㄜ ㄎㄚ ㄈㄟ ㄏㄠˇ ㄅㄨˋ ㄏㄠˇ?",
        "ㄨㄟˊ, ㄋㄧˇ ㄇㄤˊ ㄅㄨˋ ㄇㄤˊ? ㄒㄧㄚˋ ㄨˇ ㄧㄠˋ ㄅㄨˊ ㄧㄠˋ ㄏㄜ ㄎㄚ ㄈㄟ?",
        "ㄋㄧˇ ㄏㄠˇ, ㄐㄧㄣ ㄊㄧㄢ ㄒㄧㄚˋ ㄨˇ ㄧㄡˇ ㄎㄨㄥˋ ㄇㄚ? ㄧˋ ㄑㄧˇ ㄏㄜ ㄎㄚ ㄈㄟ ㄅㄚ.",
        "ㄨㄟˊ, ㄨㄛˇ ㄇㄣ ㄑㄩˋ ㄏㄜ ㄎㄚ ㄈㄟ, ㄏㄠˇ ㄇㄚ?",
      ],
    },
    {
      id: "u68-ex10",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 電話 / 的時候 / 回 / 我 / 方便 / 你",
      correctAnswer: "你方便的時候回我電話",
      options: ["你", "方便", "的時候", "回", "我", "電話"],
      hint: "Structure : Sujet + Condition temporelle + Verbe + Complément",
      hintZhuyin: "Structure : Sujet + Condition temporelle + Verbe + Complément",
    },
    {
      id: "u68-ex11",
      type: "listen",
      question:
        "Écoutez et choisissez la bonne traduction de : 這個芒果怎麼賣？",
      correctAnswer: "Comment sont vendues ces mangues ?",
      options: [
        "Comment sont vendues ces mangues ?",
        "Combien coûtent ces mangues ?",
        "Vous vendez des mangues ?",
        "Ces mangues sont bonnes ?",
      ],
    },
    {
      id: "u68-ex12",
      type: "fill-blank",
      question:
        "Pour demander si un plat contient de la viande : 這個有___嗎？",
      correctAnswer: "肉",
      hint: "Le caractère qui signifie « viande ».",
      hintZhuyin: "ㄖㄡˋ",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-67"],
};
