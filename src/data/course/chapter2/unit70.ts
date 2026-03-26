import type { CourseUnit } from "@/types/course";

export const unit70: CourseUnit = {
  id: "unit-70",
  number: 70,
  title: "Checkpoint HSK 1 intermédiaire",
  titleZh: "HSK一級中期檢查",
  chapter: 2,
  description:
    "Bilan intermédiaire couvrant toute la grammaire de base, le vocabulaire thématique et les situations de communication pratique du niveau HSK 1.",
  icon: "🏁",

  sections: [
    {
      title: "Grammaire de base — Récapitulatif complet",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "是 (shì) — Relie sujet + nom. 我是學生 (je suis étudiant). JAMAIS avec un adjectif (我是高 ✗). Négation : 不是 (bú shì). Question : 你是台灣人嗎？",
        },
        {
          type: "text",
          content:
            "有 (yǒu) — Possession : 我有一隻貓 (j'ai un chat). Existence : 這裡有很多人 (il y a beaucoup de monde ici). Négation : 沒有 (méiyǒu), JAMAIS 不有.",
        },
        {
          type: "text",
          content:
            "在 (zài) — Localisation : 學校在那裡 (l'école est là-bas). 我在家 (je suis à la maison). Structure : sujet + 在 + lieu.",
        },
        {
          type: "example",
          chinese: "他是我的老師，他在學校，他有很多學生。",
          pinyin: "tā shì wǒ de lǎoshī, tā zài xuéxiào, tā yǒu hěn duō xuéshēng.",
          translation:
            "Il est mon professeur, il est à l'école, il a beaucoup d'élèves.",
          content:
            "是 (identité) + 在 (localisation) + 有 (possession) — les trois piliers de la phrase chinoise de base.",
        },
        {
          type: "text",
          content:
            "很 + ADJECTIF — Pour décrire : 天氣很熱 (il fait très chaud), 她很漂亮 (elle est très belle). 很 est souvent obligatoire même sans sens intensif. Sans 很 la phrase sonne comme une comparaison.",
        },
        {
          type: "text",
          content:
            "NÉGATION — 不 (bù) pour les habitudes et le présent : 我不喜歡 (je n'aime pas). 沒 (méi) pour le passé et 有 : 我沒去 (je n'y suis pas allé), 我沒有錢 (je n'ai pas d'argent). Règle d'or : 不 + 是/想/要/會, 沒 + 有/verbe passé.",
        },
        {
          type: "text",
          content:
            "QUESTIONS — 嗎 (ma) : question oui/non en fin de phrase (你喜歡嗎？). 呢 (ne) : retourner la question (我很好，你呢？). A不A : choix direct (你要不要？好不好？). Mots interrogatifs : 什麼 (quoi), 誰 (qui), 哪裡 (où), 幾 (combien), 怎麼 (comment), 為什麼 (pourquoi).",
        },
        {
          type: "tip",
          content:
            "Vérifiez votre maîtrise : pouvez-vous faire une phrase avec 是, une avec 有, une avec 在, et transformer chacune en question avec 嗎 ? Si oui, vous avez une base solide !",
        },
      ],
    },
    {
      title: "Vocabulaire thématique — Récapitulatif par catégorie",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "ANIMAUX — 貓 (māo, chat), 狗 (gǒu, chien), 魚 (yú, poisson), 鳥 (niǎo, oiseau), 兔子 (tùzi, lapin). Classificateur : 隻 (zhī) pour la plupart des animaux. 我有兩隻貓 (j'ai deux chats).",
        },
        {
          type: "text",
          content:
            "ÉCOLE — 學校 (xuéxiào, école), 老師 (lǎoshī, professeur), 學生 (xuéshēng, élève), 教室 (jiàoshì, salle de classe), 考試 (kǎoshì, examen), 功課 (gōngkè, devoirs), 書 (shū, livre). Classificateur : 本 (běn) pour les livres.",
        },
        {
          type: "text",
          content:
            "MAISON — 家 (jiā, maison/famille), 房間 (fángjiān, chambre), 廚房 (chúfáng, cuisine), 廁所 (cèsuǒ, toilettes), 客廳 (kètīng, salon), 桌子 (zhuōzi, table), 椅子 (yǐzi, chaise). 我家有三個房間 (ma maison a trois chambres).",
        },
        {
          type: "text",
          content:
            "VÊTEMENTS — 衣服 (yīfu, vêtements), 褲子 (kùzi, pantalon), 鞋子 (xiézi, chaussures), 帽子 (màozi, chapeau), 外套 (wàitào, veste). Classificateur : 件 (jiàn) pour les vêtements du haut, 條 (tiáo) pour les pantalons.",
        },
        {
          type: "text",
          content:
            "NOURRITURE — 飯 (fàn, riz), 麵 (miàn, nouilles), 菜 (cài, légumes/plats), 水果 (shuǐguǒ, fruits), 肉 (ròu, viande), 雞蛋 (jīdàn, œuf), 牛奶 (niúnǎi, lait), 珍珠奶茶 (zhēnzhū nǎichá, bubble tea). 好吃 (hǎochī, délicieux).",
        },
        {
          type: "text",
          content:
            "MÉTÉO — 天氣 (tiānqì, temps/météo), 熱 (rè, chaud), 冷 (lěng, froid), 下雨 (xiàyǔ, il pleut), 晴天 (qíngtiān, temps ensoleillé), 颱風 (táifēng, typhon). 今天天氣很好 (le temps est beau aujourd'hui).",
        },
        {
          type: "text",
          content:
            "CORPS — 頭 (tóu, tête), 眼睛 (yǎnjīng, yeux), 嘴巴 (zuǐba, bouche), 手 (shǒu, main), 腳 (jiǎo, pied), 肚子 (dùzi, ventre). 我頭很痛 (j'ai très mal à la tête). 肚子餓了 (j'ai faim, lit. le ventre a faim).",
        },
        {
          type: "tip",
          content:
            "Astuce de révision : classez le vocabulaire par thème dans votre tête. Quand vous apprenez un mot nouveau, rattachez-le à sa catégorie. Cela facilite la mémorisation et le rappel.",
        },
      ],
    },
    {
      title: "Communication pratique — Situations du quotidien",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "SALUTATIONS — 你好 (bonjour), 早安 (bonjour matin), 晚安 (bonne nuit), 再見 (au revoir), 謝謝 (merci), 不客氣 (de rien), 對不起 (pardon), 沒關係 (pas grave). Ce sont les briques essentielles de toute interaction.",
        },
        {
          type: "text",
          content:
            "POSITIONS ET DIRECTIONS — 上面 (shàngmiàn, dessus), 下面 (xiàmiàn, dessous), 前面 (qiánmiàn, devant), 後面 (hòumiàn, derrière), 左邊 (zuǒbiān, à gauche), 右邊 (yòubiān, à droite), 旁邊 (pángbiān, à côté). Structure : lieu + 在 + référence + position.",
        },
        {
          type: "example",
          chinese: "超商在學校的旁邊，銀行在超商的對面。",
          pinyin: "chāoshāng zài xuéxiào de pángbiān, yínháng zài chāoshāng de duìmiàn.",
          translation:
            "Le convenience store est à côté de l'école, la banque est en face du convenience store.",
          content:
            "Structure clé : A + 在 + B + 的 + position. Permet de situer n'importe quoi par rapport à un repère.",
        },
        {
          type: "text",
          content:
            "VIE QUOTIDIENNE — 起床 (qǐchuáng, se lever), 吃早餐 (chī zǎocān, prendre le petit-déjeuner), 上班 (shàngbān, aller au travail), 下班 (xiàbān, finir le travail), 回家 (huíjiā, rentrer à la maison), 睡覺 (shuìjiào, dormir). Structure temporelle : sujet + temps + verbe.",
        },
        {
          type: "example",
          chinese: "我每天早上七點起床，先吃早餐，然後坐捷運去上班。",
          pinyin: "wǒ měitiān zǎoshang qī diǎn qǐchuáng, xiān chī zǎocān, ránhòu zuò jiéyùn qù shàngbān.",
          translation:
            "Chaque matin je me lève à 7 heures, je prends d'abord le petit-déjeuner, puis je prends le métro pour aller au travail.",
          content:
            "先...然後... (d'abord... ensuite...) pour enchaîner les actions. Structure temporelle complète.",
        },
        {
          type: "text",
          content:
            "AU CONVENIENCE STORE — 你好，我要這個 (bonjour, je veux celui-ci). 要不要加熱？(voulez-vous le réchauffer ?). 幫我加熱 (réchauffez-le pour moi). 一共多少錢？(combien en tout ?). 可以刷卡嗎？(puis-je payer par carte ?).",
        },
        {
          type: "tip",
          content:
            "Pour ce checkpoint, vous devez pouvoir décrire votre journée type, donner des directions, et faire un achat simple au convenience store entièrement en chinois. Entraînez-vous à voix haute !",
        },
      ],
    },
  ],

  keyPoints: [
    "是 relie sujet + nom, négation 不是",
    "有 pour la possession et l'existence, négation 沒有",
    "在 pour la localisation, structure sujet + 在 + lieu",
    "很 + adjectif pour décrire",
    "不 pour la négation au présent, 沒 pour le passé et 有",
    "嗎/呢/A不A pour les questions",
    "Classificateurs essentiels : 個, 隻, 杯, 碗, 本, 件, 條, 張",
    "Vocabulaire thématique : animaux, école, maison, vêtements, nourriture, météo, corps",
    "Salutations et formules de politesse",
    "Positions et directions avec 上/下/前/後/左/右",
    "先...然後... pour enchaîner les actions",
    "Commandes et achats au convenience store",
  ],

  vocabulary: [],

  exercises: [
    // --- 3 LISTEN exercises ---
    {
      id: "u70-listen-1",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 今天天氣很熱，我不想出去。",
      correctAnswer: "Il fait très chaud aujourd'hui, je ne veux pas sortir.",
      options: [
        "Il fait très chaud aujourd'hui, je ne veux pas sortir.",
        "Il fait très froid aujourd'hui, je ne veux pas sortir.",
        "Il fait beau aujourd'hui, je veux sortir.",
        "Il pleut aujourd'hui, je ne peux pas sortir.",
      ],
    },
    {
      id: "u70-listen-2",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 超商在學校的旁邊，你往左走就到了。",
      correctAnswer: "Le convenience store est à côté de l'école, allez à gauche et vous y êtes.",
      options: [
        "Le convenience store est à côté de l'école, allez à gauche et vous y êtes.",
        "L'école est à côté du convenience store, allez à droite et vous y êtes.",
        "Le convenience store est en face de l'école, allez tout droit.",
        "L'école est derrière le convenience store, tournez à gauche.",
      ],
    },
    {
      id: "u70-listen-3",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 她每天早上六點起床，先喝咖啡，然後去上班。",
      correctAnswer: "Elle se lève à 6 heures chaque matin, boit d'abord un café, puis va au travail.",
      options: [
        "Elle se lève à 6 heures chaque matin, boit d'abord un café, puis va au travail.",
        "Elle se lève à 7 heures chaque matin, prend d'abord le petit-déjeuner, puis va à l'école.",
        "Elle se couche à 6 heures chaque soir, boit d'abord du thé, puis dort.",
        "Elle se lève à 6 heures chaque matin, mange d'abord, puis boit un café.",
      ],
    },

    // --- 3 COMPREHENSION exercises ---
    {
      id: "u70-comp-1",
      type: "comprehension",
      question:
        "小明有兩隻貓和一隻狗。貓喜歡在椅子上面睡覺，狗喜歡在桌子下面。— Les chats de Xiaoming dorment où ?",
      correctAnswer: "Sur les chaises.",
      options: [
        "Sur les chaises.",
        "Sous la table.",
        "Sur le lit.",
        "À côté du chien.",
      ],
    },
    {
      id: "u70-comp-2",
      type: "comprehension",
      question:
        "今天很冷，我穿了一件外套和一條褲子。媽媽說：「你要不要戴帽子？」我說：「好，謝謝媽媽。」— Que propose la maman ?",
      correctAnswer: "De porter un chapeau.",
      options: [
        "De porter un chapeau.",
        "De mettre une veste.",
        "De rester à la maison.",
        "De boire quelque chose de chaud.",
      ],
    },
    {
      id: "u70-comp-3",
      type: "comprehension",
      question:
        "我去超商買了一瓶水和一個飯糰，一共五十五塊。我用悠遊卡付錢。— Combien a-t-il payé ?",
      correctAnswer: "55 dollars.",
      options: [
        "55 dollars.",
        "50 dollars.",
        "65 dollars.",
        "45 dollars.",
      ],
    },

    // --- 3 FILL-BLANK exercises ---
    {
      id: "u70-fill-1",
      type: "fill-blank",
      question: "她___老師，她是學生。(Elle n'est pas professeur, elle est étudiante.)",
      correctAnswer: "不是",
      options: ["不是", "沒有", "沒是", "不有"],
      optionsHint: ["bú shì", "méiyǒu", "méi shì", "bù yǒu"],
      optionsZhuyin: [
        "ㄅㄨˊ ㄕˋ",
        "ㄇㄟˊ ㄧㄡˇ",
        "ㄇㄟˊ ㄕˋ",
        "ㄅㄨˋ ㄧㄡˇ",
      ],
      hint: "Négation de 是 : on utilise 不, jamais 沒.",
    },
    {
      id: "u70-fill-2",
      type: "fill-blank",
      question: "我昨天___去學校。(Je ne suis pas allé à l'école hier.)",
      correctAnswer: "沒",
      options: ["沒", "不", "沒有", "不是"],
      optionsHint: ["méi", "bù", "méiyǒu", "bú shì"],
      optionsZhuyin: ["ㄇㄟˊ", "ㄅㄨˋ", "ㄇㄟˊ ㄧㄡˇ", "ㄅㄨˊ ㄕˋ"],
      hint: "Pour nier une action passée (hier), on utilise 沒, pas 不.",
    },
    {
      id: "u70-fill-3",
      type: "fill-blank",
      question: "你喜歡吃什麼水果？我喜歡吃蘋果，你___？(Et toi ?)",
      correctAnswer: "呢",
      options: ["呢", "嗎", "吧", "了"],
      optionsHint: ["ne", "ma", "ba", "le"],
      optionsZhuyin: ["ㄋㄜ˙", "ㄇㄚ˙", "ㄅㄚ˙", "ㄌㄜ˙"],
      hint: "Pour retourner la question à l'interlocuteur (et toi ?), on utilise cette particule.",
    },

    // --- 2 TRANSLATE exercises ---
    {
      id: "u70-trad-1",
      type: "translate",
      question: "Traduisez en chinois : « Ma maison a trois chambres et une cuisine. »",
      correctAnswer: "我家有三個房間和一個廚房。",
      options: [
        "我家有三個房間和一個廚房。",
        "我家是三個房間和一個廚房。",
        "我在家有三個房間和一個廚房。",
        "我家在三個房間和一個廚房。",
      ],
      optionsHint: [
        "wǒ jiā yǒu sān gè fángjiān hé yí gè chúfáng.",
        "wǒ jiā shì sān gè fángjiān hé yí gè chúfáng.",
        "wǒ zài jiā yǒu sān gè fángjiān hé yí gè chúfáng.",
        "wǒ jiā zài sān gè fángjiān hé yí gè chúfáng.",
      ],
    },
    {
      id: "u70-trad-2",
      type: "translate",
      question: "Traduisez en chinois : « Excusez-moi, est-ce que je peux payer par carte ? »",
      correctAnswer: "請問，可以刷卡嗎？",
      options: [
        "請問，可以刷卡嗎？",
        "對不起，我要付錢嗎？",
        "請問，多少錢呢？",
        "不好意思，你有卡嗎？",
      ],
      optionsHint: [
        "qǐngwèn, kěyǐ shuākǎ ma?",
        "duìbùqǐ, wǒ yào fùqián ma?",
        "qǐngwèn, duōshǎo qián ne?",
        "bù hǎoyìsi, nǐ yǒu kǎ ma?",
      ],
    },

    // --- 2 REORDER exercises ---
    {
      id: "u70-reorder-1",
      type: "reorder",
      question: "Remettez dans l'ordre : 先 / 然後 / 吃早餐 / 我 / 去上班",
      correctAnswer: "我先吃早餐然後去上班",
      options: ["我", "先", "吃早餐", "然後", "去上班"],
      optionsHint: ["wǒ", "xiān", "chī zǎocān", "ránhòu", "qù shàngbān"],
      optionsZhuyin: [
        "ㄨㄛˇ",
        "ㄒㄧㄢ",
        "ㄔ ㄗㄠˇ ㄘㄢ",
        "ㄖㄢˊ ㄏㄡˋ",
        "ㄑㄩˋ ㄕㄤˋ ㄅㄢ",
      ],
      hint: "Structure : sujet + 先 + action 1 + 然後 + action 2.",
    },
    {
      id: "u70-reorder-2",
      type: "reorder",
      question: "Remettez dans l'ordre : 的 / 在 / 旁邊 / 銀行 / 超商",
      correctAnswer: "銀行在超商的旁邊",
      options: ["銀行", "在", "超商", "的", "旁邊"],
      optionsHint: ["yínháng", "zài", "chāoshāng", "de", "pángbiān"],
      optionsZhuyin: [
        "ㄧㄣˊ ㄏㄤˊ",
        "ㄗㄞˋ",
        "ㄔㄠ ㄕㄤ",
        "ㄉㄜ˙",
        "ㄆㄤˊ ㄅㄧㄢ",
      ],
      hint: "Structure : A + 在 + B + 的 + position.",
    },
  ],

  requiredScore: 0.7,
  prerequisites: ["unit-69"],
};
