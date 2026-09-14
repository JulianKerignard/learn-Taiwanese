import type { CourseUnit } from "@/types/course";

export const unit47: CourseUnit = {
  id: "unit-47",
  number: 47,
  title: "Révision HSK 1 — Bilan complet",
  titleZh: "HSK一級總複習",
  chapter: 2,
  description:
    "Révision complète de tout le vocabulaire et la grammaire du niveau HSK 1",
  icon: "🏆",

  sections: [
    {
      title: "Prononciation et tons — Récapitulatif",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "RAPPEL DES 4 TONS — Ton 1 (ˉ) haut et plat : 媽 (mā). Ton 2 (ˊ) montant : 麻 (má). Ton 3 (ˇ) descendant-remontant : 馬 (mǎ). Ton 4 (ˋ) descendant brusque : 罵 (mà). Ton neutre : léger et court, par exemple 嗎 (ma).",
        },
        {
          type: "text",
          content:
            "SANDHI TONAL — Règle 1 : deux tons 3 consécutifs → le premier devient ton 2 (你好 → ní hǎo). Règle 2 : 不 (bù, ton 4) → bú devant un ton 4 (不是 → búshì). Règle 3 : 一 (yī) → yí devant ton 4, yì devant ton 1/2/3.",
        },
        {
          type: "example",
          chinese: "你好！我叫小明。",
          pinyin: "ní hǎo! wǒ jiào Xiǎomíng.",
          translation: "Bonjour ! Je m'appelle Xiaoming.",
          content:
            "你好 illustre le sandhi du ton 3 : 你 (ton 3) + 好 (ton 3) → ní hǎo.",
        },
        {
          type: "text",
          content:
            "PAIRES DE TONS À PRATIQUER — 今天 (1+1), 中文 (1+2), 老師 (3+1), 學生 (2+1), 可以 (3+3 → sandhi), 不要 (4+4 → sandhi), 喜歡 (3+1), 準備 (3+4), 漂亮 (4+neutre). Prononcez chaque paire 5 fois en exagérant les tons.",
        },
        {
          type: "tip",
          content:
            "Méthode de révision : choisissez 5 mots difficiles chaque jour et prononcez-les 10 fois. Concentrez-vous sur les enchaînements ton 3 + ton 3 et ton 2 + ton 4, les plus délicats pour les francophones.",
        },
      ],
    },
    {
      title: "Grammaire essentielle — 是/有/在, 嗎/呢, classificateurs",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "是 (shì) — Relie sujet + NOM : 我是學生 (je suis étudiant). JAMAIS avec adjectif (我是高 ✗ → 我很高 ✓). Négation : 不是 (bú shì).",
        },
        {
          type: "text",
          content:
            "有 (yǒu) — Possession et existence. 我有兩個姐姐 (j'ai deux grandes sœurs). 這裡有很多人 (il y a beaucoup de monde ici). Négation : 沒有 (méiyǒu), JAMAIS 不有.",
        },
        {
          type: "text",
          content:
            "在 (zài) — Indique la localisation. 捷運站在那裡 (la station de métro est là-bas). 我在台北 (je suis à Taipei). Structure : sujet + 在 + lieu.",
        },
        {
          type: "example",
          chinese: "我是法國人，我在台灣，我有很多朋友。",
          pinyin: "wǒ shì Fǎguó rén, wǒ zài Táiwān, wǒ yǒu hěn duō péngyǒu.",
          translation:
            "Je suis français, je suis à Taiwan, j'ai beaucoup d'amis.",
          content:
            "是 (identité) + 在 (localisation) + 有 (possession) dans une même phrase.",
        },
        {
          type: "text",
          content:
            "QUESTIONS — 嗎 (ma) : ajoutez en fin de phrase pour une question oui/non (你是台灣人嗎？). 呢 (ne) : retourne la question (我很好，你呢？). A不A : forme directe (你要不要？好不好？). Mots interrogatifs : 什麼 (quoi), 誰 (qui), 哪裡 (où), 幾 (combien), 怎麼 (comment).",
        },
        {
          type: "text",
          content:
            "CLASSIFICATEURS — Structure : nombre + classificateur + nom. Essentiels : 個 (universel), 杯 (boissons), 碗 (bols), 瓶 (bouteilles), 本 (livres), 隻 (animaux), 輛 (véhicules), 件 (vêtements), 張 (plat/feuilles), 條 (long/fin).",
        },
        {
          type: "example",
          chinese: "我要兩杯珍珠奶茶、一碗滷肉飯。",
          pinyin: "wǒ yào liǎng bēi zhēnzhū nǎichá, yì wǎn lǔròufàn.",
          translation:
            "Je veux deux bubble teas et un bol de riz au porc braisé.",
          content:
            "杯 pour les boissons, 碗 pour les bols. Commande typique à Taiwan.",
        },
        {
          type: "tip",
          content:
            "En cas de doute sur le classificateur, utilisez 個 (gè). Les Taïwanais vous comprendront et apprécieront l'effort, même si ce n'est pas le classificateur idéal.",
        },
      ],
    },
    {
      title: "Vocabulaire de survie — Directions, nourriture, transport",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "SE PRÉSENTER — 你好 (bonjour), 我叫... (je m'appelle...), 我是...人 (je suis [nationalité]), 謝謝 (merci), 不客氣 (de rien), 對不起 (pardon), 沒關係 (pas grave).",
        },
        {
          type: "text",
          content:
            "MANGER — 好吃 (délicieux), 不要辣 (pas épicé), 多少錢 (combien), 太貴了 (trop cher), 便宜一點 (un peu moins cher), 結帳 (l'addition), 外帶 (à emporter), 內用 (sur place).",
        },
        {
          type: "text",
          content:
            "SE DÉPLACER — 捷運 (métro MRT), 公車 (bus), 火車 (train), 計程車 (taxi), 在哪裡 (où est), 左邊 (à gauche), 右邊 (à droite), 前面 (devant), 後面 (derrière).",
        },
        {
          type: "example",
          chinese: "請問，最近的捷運站在哪裡？往前走，左轉。",
          pinyin:
            "qǐngwèn, zuìjìn de jiéyùn zhàn zài nǎlǐ? wǎng qián zǒu, zuǒ zhuǎn.",
          translation:
            "Excusez-moi, où est la station de métro la plus proche ? Allez tout droit, tournez à gauche.",
          content:
            "請問 (excusez-moi) pour aborder un inconnu poliment. 往前走 (allez tout droit).",
        },
        {
          type: "example",
          chinese: "我要一碗牛肉麵，不要辣，內用。",
          pinyin: "wǒ yào yì wǎn niúròu miàn, bú yào là, nèiyòng.",
          translation:
            "Je veux un bol de nouilles au bœuf, pas épicé, sur place.",
          content:
            "Commande complète : plat + préférence + mode de service.",
        },
        {
          type: "text",
          content:
            "TEMPS ET RENDEZ-VOUS — 今天 (aujourd'hui), 明天 (demain), 昨天 (hier), 幾點 (quelle heure), 星期幾 (quel jour), 現在 (maintenant), 等一下 (attends un moment).",
        },
        {
          type: "tip",
          content:
            "Si vous pouvez vous présenter, commander à manger, demander votre chemin et fixer un rendez-vous, vous maîtrisez les bases de survie HSK 1 à Taiwan. Bravo !",
        },
      ],
    },
  ],

  keyPoints: [
    "Révision des 4 tons et du ton neutre",
    "Maîtrise de 是/有/在",
    "Questions avec 嗎/呢/幾",
    "Vocabulaire de survie : directions, nourriture, transport",
  ],

  vocabulary: [],

  exercises: [
    // --- 3 LISTEN exercises ---
    {
      id: "u47-listen-1",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 你好，請問你叫什麼名字？",
      correctAnswer: "Bonjour, comment vous appelez-vous ?",
      options: [
        "Bonjour, comment vous appelez-vous ?",
        "Bonjour, où allez-vous ?",
        "Bonjour, quel âge avez-vous ?",
        "Bonjour, vous êtes taiwanais ?",
      ],
    },
    {
      id: "u47-listen-2",
      type: "listen",
      question:
        "Écoute et choisis la bonne traduction de : 一共三百五十塊。",
      correctAnswer: "En tout, ça fait 350 dollars.",
      options: [
        "En tout, ça fait 350 dollars.",
        "En tout, ça fait 250 dollars.",
        "En tout, ça fait 315 dollars.",
        "En tout, ça fait 305 dollars.",
      ],
    },
    {
      id: "u47-listen-3",
      type: "listen",
      question:
        "Écoute et choisis la bonne traduction de : 往前走，到十字路口右轉。",
      correctAnswer: "Allez tout droit, tournez à droite au carrefour.",
      options: [
        "Allez tout droit, tournez à droite au carrefour.",
        "Allez tout droit, tournez à gauche au carrefour.",
        "Reculez, puis tournez à droite.",
        "Allez à gauche, puis tout droit.",
      ],
    },

    // --- 3 COMPREHENSION exercises ---
    {
      id: "u47-comp-1",
      type: "comprehension",
      question:
        "小美每天早上七點起床，先喝一杯咖啡，然後坐捷運去上班。— Que fait Xiaomei après le café ?",
      correctAnswer: "Elle prend le métro pour aller au travail.",
      options: [
        "Elle prend le métro pour aller au travail.",
        "Elle prend le bus pour aller à l'école.",
        "Elle marche jusqu'au bureau.",
        "Elle retourne se coucher.",
      ],
    },
    {
      id: "u47-comp-2",
      type: "comprehension",
      question:
        "今天是星期六，小明和朋友去夜市吃東西。他們吃了臭豆腐和滷肉飯，很好吃！— Quel jour sont-ils allés au marché de nuit ?",
      correctAnswer: "Samedi",
      options: ["Samedi", "Dimanche", "Vendredi", "Lundi"],
    },
    {
      id: "u47-comp-3",
      type: "comprehension",
      question:
        "我在台北住了兩個月了。我覺得台灣人很友善，食物很好吃，可是天氣太熱了。— Que pense cette personne du temps à Taiwan ?",
      correctAnswer: "Il fait trop chaud.",
      options: [
        "Il fait trop chaud.",
        "Il fait trop froid.",
        "Le temps est parfait.",
        "Il pleut tout le temps.",
      ],
    },

    // --- 3 FILL-BLANK exercises ---
    {
      id: "u47-fill-1",
      type: "fill-blank",
      question: "她___老師，她___學生。(Elle n'est pas professeur, elle est étudiante.)",
      correctAnswer: "不是 / 是",
      options: ["不是 / 是", "沒有 / 是", "不是 / 有", "沒是 / 是"],
      optionsHint: ["bú shì / shì", "méiyǒu / shì", "bú shì / yǒu", "méi shì / shì"],
      optionsZhuyin: [
        "ㄅㄨˊ ㄕˋ / ㄕˋ",
        "ㄇㄟˊ ㄧㄡˇ / ㄕˋ",
        "ㄅㄨˊ ㄕˋ / ㄧㄡˇ",
        "ㄇㄟˊ ㄕˋ / ㄕˋ",
      ],
      hint: "Négation de 是 = 不是. 是 relie sujet + nom (profession).",
    },
    {
      id: "u47-fill-2",
      type: "fill-blank",
      question: "桌子上___一本書。(Sur la table, il y a un livre.)",
      correctAnswer: "有",
      options: ["有", "是", "在", "很"],
      optionsHint: ["yǒu", "shì", "zài", "hěn"],
      optionsZhuyin: ["ㄧㄡˇ", "ㄕˋ", "ㄗㄞˋ", "ㄏㄣˇ"],
      hint: "Pour exprimer l'existence (il y a), on utilise ce verbe.",
    },
    {
      id: "u47-fill-3",
      type: "fill-blank",
      question: "你喜歡吃什麼？我喜歡吃台灣___小吃。(J'aime manger les en-cas de Taiwan.)",
      correctAnswer: "的",
      options: ["的", "了", "嗎", "在"],
      optionsHint: ["de", "le", "ma", "zài"],
      optionsZhuyin: ["ㄉㄜ˙", "ㄌㄜ˙", "ㄇㄚ", "ㄗㄞˋ"],
      hint: "Particule de possession/description reliant Taiwan aux en-cas.",
    },

    // --- 3 TRANSLATE exercises ---
    {
      id: "u47-trad-1",
      type: "translate",
      question: "Traduisez en chinois : « Excusez-moi, combien ça coûte ? »",
      correctAnswer: "請問，這個多少錢？",
      options: [
        "請問，這個多少錢？",
        "對不起，你要什麼？",
        "請問，你去哪裡？",
        "謝謝，太貴了！",
      ],
      optionsHint: [
        "qǐngwèn, zhège duōshǎo qián?",
        "duìbùqǐ, nǐ yào shénme?",
        "qǐngwèn, nǐ qù nǎlǐ?",
        "xièxie, tài guì le!",
      ],
    },
    {
      id: "u47-trad-2",
      type: "translate",
      question: "Traduisez en chinois : « J'ai déjà mangé, et toi ? »",
      correctAnswer: "我已經吃了，你呢？",
      options: [
        "我已經吃了，你呢？",
        "我還沒吃，你嗎？",
        "我不吃了，你好嗎？",
        "我要吃了，你呢？",
      ],
      optionsHint: [
        "wǒ yǐjīng chī le, nǐ ne?",
        "wǒ hái méi chī, nǐ ma?",
        "wǒ bù chī le, nǐ hǎo ma?",
        "wǒ yào chī le, nǐ ne?",
      ],
    },
    {
      id: "u47-trad-3",
      type: "translate",
      question:
        "Traduisez en chinois : « On se retrouve demain soir à sept heures, d'accord ? »",
      correctAnswer: "我們明天晚上七點見面，好不好？",
      options: [
        "我們明天晚上七點見面，好不好？",
        "我們今天下午七點見面，好嗎？",
        "你們明天早上七點去哪裡？",
        "我們明天晚上七點吃飯嗎？",
      ],
      optionsHint: [
        "wǒmen míngtiān wǎnshang qī diǎn jiànmiàn, hǎo bù hǎo?",
        "wǒmen jīntiān xiàwǔ qī diǎn jiànmiàn, hǎo ma?",
        "nǐmen míngtiān zǎoshang qī diǎn qù nǎlǐ?",
        "wǒmen míngtiān wǎnshang qī diǎn chīfàn ma?",
      ],
    },

    // --- 3 REORDER exercises ---
    {
      id: "u47-reorder-1",
      type: "reorder",
      question: "Remettez dans l'ordre : 在 / 捷運站 / 哪裡 / 請問",
      correctAnswer: "請問捷運站在哪裡",
      options: ["請問", "捷運站", "在", "哪裡"],
      optionsHint: ["qǐngwèn", "jiéyùn zhàn", "zài", "nǎlǐ"],
      optionsZhuyin: [
        "ㄑㄧㄥˇ ㄨㄣˋ",
        "ㄐㄧㄝˊ ㄩㄣˋ ㄓㄢˋ",
        "ㄗㄞˋ",
        "ㄋㄚˇ ㄌㄧˇ",
      ],
      hint: "Structure : 請問 + sujet + 在 + où ?",
    },
    {
      id: "u47-reorder-2",
      type: "reorder",
      question: "Remettez dans l'ordre : 一碗 / 我 / 不要辣 / 要 / 牛肉麵",
      correctAnswer: "我要一碗牛肉麵不要辣",
      options: ["我", "要", "一碗", "牛肉麵", "不要辣"],
      optionsHint: ["wǒ", "yào", "yì wǎn", "niúròu miàn", "bú yào là"],
      optionsZhuyin: [
        "ㄨㄛˇ",
        "ㄧㄠˋ",
        "ㄧˋ ㄨㄢˇ",
        "ㄋㄧㄡˊ ㄖㄡˋ ㄇㄧㄢˋ",
        "ㄅㄨˊ ㄧㄠˋ ㄌㄚˋ",
      ],
      hint: "Structure : sujet + 要 + classificateur + nom + préférence",
    },
    {
      id: "u47-reorder-3",
      type: "reorder",
      question: "Remettez dans l'ordre : 幾 / 你 / 有 / 個 / 家 / 人",
      correctAnswer: "你家有幾個人",
      options: ["你", "家", "有", "幾", "個", "人"],
      optionsHint: ["nǐ", "jiā", "yǒu", "jǐ", "gè", "rén"],
      optionsZhuyin: [
        "ㄋㄧˇ",
        "ㄐㄧㄚ",
        "ㄧㄡˇ",
        "ㄐㄧˇ",
        "ㄍㄜˋ",
        "ㄖㄣˊ",
      ],
      hint: "Structure : possesseur + 家 + 有 + 幾 + classificateur + nom",
    },
  ],

  requiredScore: 0.7,
  prerequisites: ["unit-46"],
};
