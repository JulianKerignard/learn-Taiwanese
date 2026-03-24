import type { CourseUnit } from "@/types/course";

export const unit36: CourseUnit = {
  id: "unit-36",
  number: 36,
  title: "Pratique 3 — Dialogues et jeux de rôle",
  titleZh: "練習三：對話與角色扮演",
  chapter: 6,
  description:
    "Mets-toi en situation : chez le médecin, en échange linguistique, ou en visite d'appartement. Construis tes phrases en chinois pour des situations réelles.",
  icon: "🎭",

  sections: [
    {
      title: "Chez le médecin",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Situation : Tu as mal à la tête depuis hier et tu vas dans une clinique (診所) à Taiwan. Le médecin te pose des questions — à toi de construire tes réponses en chinois.",
        },
        {
          type: "text",
          content:
            "Vocabulaire utile pour cette situation :\n頭痛 (tóutòng) = mal à la tête\n發燒 (fāshāo) = avoir de la fièvre\n過敏 (guòmǐn) = être allergique\n從...開始 (cóng...kāishǐ) = depuis...\n藥 (yào) = médicament",
        },
        {
          type: "tip",
          content:
            "À Taiwan, les cliniques de quartier (診所) sont très accessibles. Avec la carte NHI (健保卡), une consultation coûte 150 NT$ (~4,50€). Pas besoin de rendez-vous, tu fais la queue.",
        },
      ],
    },
    {
      title: "Language exchange au café",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Situation : Tu rencontres quelqu'un dans un café pour un échange linguistique (語言交換). Tu parles de ton niveau de chinois, de ta vie à Taiwan, et tu fais des compliments sur son français.",
        },
        {
          type: "text",
          content:
            "Structures utiles :\n正在 + verbe = être en train de\n來 + lieu + durée + 了 = être à [lieu] depuis [durée]\n還不太 + adj = pas encore très + adj\n說得 + adv = parler + adverbe (complément de résultat)",
        },
        {
          type: "tip",
          content:
            "Les language exchanges sont très populaires à Taiwan. On les trouve sur HelloTalk, Tandem, ou les groupes Facebook. Le format classique : 30 min en chinois, 30 min en français.",
        },
      ],
    },
    {
      title: "Négocier un appartement",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Situation : Tu visites un appartement trouvé sur 591. Le propriétaire (房東) te fait visiter. Tu poses des questions sur les conditions et tu essaies de négocier le prix.",
        },
        {
          type: "text",
          content:
            "Structures utiles pour négocier :\n包 + nom = inclure (包水電 = eau et électricité incluses)\n有點 + adj = un peu + adj (pour exprimer une réserve)\n可以...嗎 = est-ce que je peux...\n想 + verbe = vouloir + verbe",
        },
        {
          type: "tip",
          content:
            "Négocier est normal à Taiwan pour le logement. Demande poliment : 可以便宜一點嗎？ Les propriétaires s'attendent à ce que tu négocies, surtout pour les contrats longs.",
        },
      ],
    },
  ],

  keyPoints: [
    "Chez le médecin : 從...開始 (depuis), 我沒有 + symptôme (je n'ai pas de...), 我對...過敏 (je suis allergique à...).",
    "Language exchange : 正在 + verbe (en train de), 來 + lieu + durée + 了 (depuis...), 說得 + adv (parler + adverbe).",
    "Négociation : 包 (inclure), 有點貴 (un peu cher), 可以便宜一點嗎 (on peut faire moins cher ?), 想簽...的合約 (vouloir signer un contrat de...).",
  ],

  vocabulary: [
    {
      character: "開始",
      pinyin: "kāishǐ",
      zhuyin: "ㄎㄞ ㄕˇ",
      french: "Commencer / depuis",
      english: "To begin / to start",
      example: {
        sentence: "我從昨天開始頭痛。",
        pinyin: "wǒ cóng zuótiān kāishǐ tóutòng.",
        translation: "J'ai mal à la tête depuis hier.",
      },
    },
    {
      character: "簽",
      pinyin: "qiān",
      zhuyin: "ㄑㄧㄢ",
      french: "Signer",
      english: "To sign",
      example: {
        sentence: "我想簽一年的合約。",
        pinyin: "wǒ xiǎng qiān yì nián de héyuē.",
        translation: "Je voudrais signer un contrat d'un an.",
      },
    },
    {
      character: "半年",
      pinyin: "bànnián",
      zhuyin: "ㄅㄢˋ ㄋㄧㄢˊ",
      french: "Six mois / un semestre",
      english: "Half a year",
      example: {
        sentence: "我來台灣半年了。",
        pinyin: "wǒ lái Táiwān bànnián le.",
        translation: "Je suis à Taiwan depuis six mois.",
      },
    },
  ],

  exercises: [
    {
      id: "u36-ex1",
      type: "translate",
      question: "Traduis en chinois : « J'ai mal à la tête depuis hier. »",
      correctAnswer: "我從昨天開始頭痛",
      hint: "從 + moment + 開始 + symptôme",
    },
    {
      id: "u36-ex2",
      type: "translate",
      question: "Traduis en chinois : « Je n'ai pas de fièvre. »",
      correctAnswer: "我沒有發燒",
      hint: "沒有 pour nier un état",
    },
    {
      id: "u36-ex3",
      type: "translate",
      question: "Traduis en chinois : « Je suis allergique aux cacahuètes. »",
      correctAnswer: "我對花生過敏",
      hint: "我對 + chose + 過敏",
    },
    {
      id: "u36-ex4",
      type: "translate",
      question:
        "Traduis en chinois : « Je suis en train d'apprendre le chinois. »",
      correctAnswer: "我正在學中文",
      hint: "正在 + verbe = en train de",
    },
    {
      id: "u36-ex5",
      type: "translate",
      question: "Traduis en chinois : « Je suis à Taiwan depuis trois mois. »",
      correctAnswer: "我來台灣三個月了",
      hint: "來 + lieu + durée + 了",
    },
    {
      id: "u36-ex6",
      type: "translate",
      question:
        "Traduis en chinois : « Mon chinois n'est pas encore très bon. »",
      correctAnswer: "我的中文還不太好",
      hint: "還不太 + adjectif",
    },
    {
      id: "u36-ex7",
      type: "translate",
      question:
        "Traduis en chinois : « Tu parles vraiment bien français ! »",
      correctAnswer: "你法文說得很好！",
      hint: "Sujet + langue + 說得 + adverbe",
    },
    {
      id: "u36-ex8",
      type: "translate",
      question:
        "Traduis en chinois : « Est-ce que le loyer inclut l'eau et l'électricité ? »",
      correctAnswer: "房租包水電嗎？",
      hint: "包 = inclure",
    },
    {
      id: "u36-ex9",
      type: "translate",
      question:
        "Traduis en chinois : « C'est un peu trop cher, on peut faire moins ? »",
      correctAnswer: "有點貴，可以便宜一點嗎？",
      hint: "有點 + adj / 可以 + adj + 一點 + 嗎",
    },
    {
      id: "u36-ex10",
      type: "translate",
      question: "Traduis en chinois : « Il y a la climatisation ? »",
      correctAnswer: "有冷氣嗎？",
      hint: "有 + objet + 嗎",
    },
    {
      id: "u36-ex11",
      type: "translate",
      question:
        "Traduis en chinois : « Je voudrais signer un contrat de 6 mois. »",
      correctAnswer: "我想簽半年的合約",
      hint: "想 + verbe / 半年 = 6 mois",
    },
    {
      id: "u36-ex12",
      type: "translate",
      question: "Traduis en chinois : « Depuis quand as-tu mal au ventre ? »",
      correctAnswer: "你從什麼時候開始肚子痛？",
      hint: "從什麼時候開始 = depuis quand",
    },
    {
      id: "u36-ex13",
      type: "translate",
      question:
        "Traduis en chinois : « J'apprends le chinois depuis un an. »",
      correctAnswer: "我學中文學了一年了",
      hint: "Verbe + durée + 了 (action qui dure)",
    },
    {
      id: "u36-ex14",
      type: "translate",
      question: "Traduis en chinois : « On peut visiter la chambre ? »",
      correctAnswer: "可以看房間嗎？",
      hint: "可以 + verbe + 嗎",
    },
    {
      id: "u36-ex15",
      type: "translate",
      question:
        "Traduis en chinois : « La caution, c'est combien de mois ? »",
      correctAnswer: "押金是幾個月？",
      hint: "幾 + classificateur = combien de",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-27"],
};
