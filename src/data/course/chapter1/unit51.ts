import type { CourseUnit } from "@/types/course";

export const unit51: CourseUnit = {
  id: "unit-51",
  number: 51,
  title: "Checkpoint — Bases de prononciation et grammaire",
  titleZh: "基礎檢查站",
  chapter: 1,
  description:
    "Vérifie ta maîtrise des tons, de la prononciation, des nombres, des classificateurs et des premières structures grammaticales.",
  icon: "🏁",

  sections: [
    {
      title: "Récapitulatif : prononciation et tons",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Avant d'aller plus loin, vérifions que les bases sont solides. Le mandarin a 4 tons + un ton neutre. Chaque ton change complètement le sens d'un mot.",
        },
        {
          type: "example",
          chinese: "媽 麻 馬 罵 嗎",
          pinyin: "mā má mǎ mà ma",
          translation: "mère / chanvre / cheval / gronder / (particule)",
          content: "Les 5 prononciations de « ma » — un classique pour vérifier ta maîtrise des tons.",
        },
        {
          type: "tip",
          content:
            "Astuce : le 3e ton (ˇ) ne descend-remonte complètement que quand il est isolé. Devant un autre 3e ton, il se prononce comme un 2e ton (sandhi tonal). Ex : 你好 se prononce ní hǎo.",
        },
        {
          type: "text",
          content:
            "Le pinyin est ton outil de lecture principal pour l'instant. À Taiwan, le zhuyin (ㄅㄆㄇ) est le système officiel — tu le verras partout dans les livres pour enfants et les menus avec prononciation.",
        },
      ],
    },
    {
      title: "Récapitulatif : grammaire de base",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Voici les structures grammaticales essentielles vues jusqu'ici :",
        },
        {
          type: "text",
          content:
            "1. ORDRE SVO — Le mandarin suit l'ordre Sujet-Verbe-Objet comme le français. 我喝水 (je bois de l'eau).",
        },
        {
          type: "example",
          chinese: "他吃飯。",
          pinyin: "tā chī fàn.",
          translation: "Il mange (du riz).",
          content: "Structure de base : sujet + verbe + objet.",
        },
        {
          type: "text",
          content:
            "2. 是 (shì) — Le verbe « être ». Relie un sujet à un nom. 我是法國人 (je suis français). ATTENTION : ne s'utilise PAS avec les adjectifs (on dit 我很高, pas 我是高).",
        },
        {
          type: "text",
          content:
            "3. 不 (bù) — La négation. Se place avant le verbe. 我不喝咖啡 (je ne bois pas de café). Devant un 4e ton, 不 se prononce bú (sandhi).",
        },
        {
          type: "example",
          chinese: "我不是日本人。",
          pinyin: "wǒ bú shì rìběn rén.",
          translation: "Je ne suis pas japonais.",
          content: "不 + 是 = négation de « être ». Notez le sandhi : bú devant shì (4e ton).",
        },
        {
          type: "text",
          content:
            "4. 有/沒有 — Avoir/ne pas avoir. 你有沒有護照？(Tu as un passeport ?). 沒有 est la seule négation de 有 (on ne dit jamais 不有).",
        },
        {
          type: "text",
          content:
            "5. NOMBRES — Le système est logique : 十一 (11 = dix-un), 二十三 (23 = deux-dix-trois), 一百 (100). Les classificateurs se placent entre le nombre et le nom : 三個人 (3 personnes).",
        },
        {
          type: "example",
          chinese: "我要兩杯咖啡。",
          pinyin: "wǒ yào liǎng bēi kāfēi.",
          translation: "Je veux deux tasses de café.",
          content: "兩 (liǎng) s'utilise pour « deux » devant un classificateur. 杯 = classificateur pour les boissons.",
        },
        {
          type: "text",
          content:
            "6. QUESTIONS — Trois façons de poser une question : 嗎 (particule finale), A不A (verbe+不+verbe), et les mots interrogatifs (什麼, 哪裡, 誰, 幾, 怎麼).",
        },
      ],
    },
    {
      title: "Récapitulatif : classificateurs essentiels",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Les classificateurs (量詞) sont obligatoires en chinois entre un nombre/démonstratif et un nom. Voici les plus importants :",
        },
        {
          type: "text",
          content:
            "個 (gè) — universel, passe-partout. 一個人 (une personne). En cas de doute, utilisez 個.\n杯 (bēi) — boissons. 一杯茶 (une tasse de thé).\n碗 (wǎn) — bols. 一碗麵 (un bol de nouilles).\n本 (běn) — livres. 三本書 (trois livres).\n張 (zhāng) — objets plats. 一張票 (un billet).\n位 (wèi) — personnes (poli). 兩位客人 (deux invités).",
        },
        {
          type: "warning",
          content:
            "Erreur fréquente : ne jamais dire *一人 (sans classificateur). Toujours 一個人. Le classificateur est OBLIGATOIRE, même si en français on ne l'utilise pas.",
        },
        {
          type: "tip",
          content:
            "À Taiwan, 個 (gè) est souvent prononcé « ge » (ton neutre) dans la conversation courante. C'est tout à fait normal et accepté.",
        },
      ],
    },
  ],

  vocabulary: [],

  exercises: [
    {
      id: "ck1-01",
      type: "listen",
      question: "你好嗎？",
      correctAnswer: "Comment vas-tu ?",
      options: ["Comment vas-tu ?", "Où vas-tu ?", "Qui es-tu ?", "Bonjour !"],
      hint: "nǐ hǎo ma?",
    },
    {
      id: "ck1-02",
      type: "listen",
      question: "這個多少錢？",
      correctAnswer: "Combien ça coûte ?",
      options: ["Combien ça coûte ?", "C'est quoi ?", "C'est à qui ?", "Où est-ce ?"],
      hint: "zhège duōshǎo qián?",
    },
    {
      id: "ck1-03",
      type: "listen",
      question: "我要一杯珍珠奶茶。",
      correctAnswer: "Je veux un bubble tea.",
      options: ["Je veux un bubble tea.", "Je n'aime pas le thé.", "Le thé est froid.", "Avez-vous du café ?"],
      hint: "wǒ yào yì bēi zhēnzhū nǎichá.",
    },
    {
      id: "ck1-04",
      type: "comprehension",
      question: "我是法國人，我在台北學中文。我很喜歡台灣的夜市。\n\nCette personne :",
      correctAnswer: "Est française et étudie le chinois à Taipei",
      options: [
        "Est française et étudie le chinois à Taipei",
        "Est taiwanaise et vit en France",
        "N'aime pas les marchés de nuit",
        "Travaille dans un restaurant",
      ],
      hint: "wǒ shì fàguó rén, wǒ zài táiběi xué zhōngwén.",
    },
    {
      id: "ck1-05",
      type: "comprehension",
      question: "他有三個哥哥，沒有姐姐。\n\nQue sait-on de cette personne ?",
      correctAnswer: "Il a trois grands frères et aucune grande sœur",
      options: [
        "Il a trois grands frères et aucune grande sœur",
        "Il a trois grandes sœurs",
        "Il n'a pas de frères",
        "Il a une grande sœur",
      ],
      hint: "tā yǒu sān gè gēge, méiyǒu jiějie.",
    },
    {
      id: "ck1-06",
      type: "fill-blank",
      question: "你___學生嗎？",
      correctAnswer: "是",
      options: ["是", "有", "在", "很"],
      hint: "nǐ ___ xuéshēng ma?",
    },
    {
      id: "ck1-07",
      type: "fill-blank",
      question: "我___兩個弟弟。",
      correctAnswer: "有",
      options: ["有", "是", "在", "很"],
      hint: "wǒ ___ liǎng gè dìdi.",
    },
    {
      id: "ck1-08",
      type: "fill-blank",
      question: "她___喝咖啡，她喝茶。",
      correctAnswer: "不",
      options: ["不", "沒", "很", "也"],
      hint: "tā ___ hē kāfēi, tā hē chá.",
    },
    {
      id: "ck1-09",
      type: "translate",
      question: "Je voudrais un bol de nouilles, s'il vous plaît.",
      correctAnswer: "我要一碗麵，謝謝。",
      options: ["我要一碗麵，謝謝。", "我不要麵。", "一杯茶，謝謝。", "麵很好吃。"],
      hint: "wǒ yào yì wǎn miàn, xièxie.",
    },
    {
      id: "ck1-10",
      type: "translate",
      question: "Où sont les toilettes ?",
      correctAnswer: "廁所在哪裡？",
      options: ["廁所在哪裡？", "廁所多少錢？", "你有廁所嗎？", "這是廁所嗎？"],
      hint: "cèsuǒ zài nǎlǐ?",
    },
    {
      id: "ck1-11",
      type: "translate",
      question: "Je suis français, enchanté.",
      correctAnswer: "我是法國人，你好。",
      options: ["我是法國人，你好。", "法國很好。", "你是法國人嗎？", "我不是法國人。"],
      hint: "wǒ shì fàguó rén, nǐ hǎo.",
    },
    {
      id: "ck1-12",
      type: "listen",
      question: "請問，捷運站在哪裡？",
      correctAnswer: "Excusez-moi, où est la station de MRT ?",
      options: [
        "Excusez-moi, où est la station de MRT ?",
        "Combien coûte le MRT ?",
        "Le MRT est rapide.",
        "Je prends le bus.",
      ],
      hint: "qǐngwèn, jiéyùn zhàn zài nǎlǐ?",
    },
    {
      id: "ck1-13",
      type: "fill-blank",
      question: "我要三___書。",
      correctAnswer: "本",
      options: ["本", "個", "杯", "張"],
      hint: "wǒ yào sān ___ shū. (classificateur pour les livres)",
    },
    {
      id: "ck1-14",
      type: "comprehension",
      question: "今天星期六，明天是我的生日。我想去夜市吃好吃的東西。\n\nQuand est l'anniversaire de cette personne ?",
      correctAnswer: "Dimanche",
      options: ["Dimanche", "Samedi", "Lundi", "Aujourd'hui"],
      hint: "jīntiān xīngqīliù, míngtiān shì wǒ de shēngrì.",
    },
    {
      id: "ck1-15",
      type: "listen",
      question: "我的媽媽是老師，爸爸是醫生。",
      correctAnswer: "Ma mère est professeur, mon père est médecin.",
      options: [
        "Ma mère est professeur, mon père est médecin.",
        "Ma mère est médecin, mon père est professeur.",
        "Mes parents sont professeurs.",
        "Mon père n'est pas médecin.",
      ],
      hint: "wǒ de māma shì lǎoshī, bàba shì yīshēng.",
    },
  ],

  keyPoints: [
    "Les 4 tons + ton neutre et le sandhi tonal (3e+3e → 2e+3e)",
    "Structure SVO et verbe 是 (être) vs adjectifs avec 很",
    "Négation : 不 (général) vs 沒 (pour 有 et le passé)",
    "Classificateurs obligatoires : 個, 杯, 碗, 本, 張, 位",
    "Questions : 嗎, A不A, mots interrogatifs (什麼/哪裡/幾/誰)",
    "Nombres logiques : 十一(11), 二十(20), 一百(100)",
  ],

  requiredScore: 0.7,
  prerequisites: ["unit-06"],
};
