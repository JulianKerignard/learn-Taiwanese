import type { CourseUnit } from "@/types/course";

export const unit45: CourseUnit = {
  id: "unit-45",
  number: 45,
  title: "La famille et les proches",
  titleZh: "家人與親友",
  chapter: 2,
  description:
    "Parler de sa famille, des liens familiaux et des proches. Apprendre les termes de parenté, utiliser 有/沒有 pour exprimer la possession et 幾個 pour poser des questions de quantité.",
  icon: "👨‍👩‍👧‍👦",

  sections: [
    {
      title: "Le vocabulaire de la famille",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "La famille est au cœur de la culture taiwanaise. Savoir nommer les membres de sa famille est fondamental dans toute conversation. En chinois, les termes familiaux sont très précis : on distingue le frère aîné du frère cadet, la sœur aînée de la sœur cadette. Cette précision reflète l'importance de la hiérarchie familiale dans la culture chinoise.",
        },
        {
          type: "example",
          chinese: "爸爸、媽媽",
          pinyin: "bàba, māma",
          translation: "Papa, maman",
          content:
            "Les termes les plus universels. 爸爸 (bàba) et 媽媽 (māma) sont utilisés dans le langage courant. En contexte plus formel, on dira 父親 (fùqīn) et 母親 (mǔqīn), mais au quotidien, 爸爸 et 媽媽 suffisent largement.",
        },
        {
          type: "example",
          chinese: "哥哥、姐姐、弟弟、妹妹",
          pinyin: "gēge, jiějie, dìdi, mèimei",
          translation: "Grand frère, grande sœur, petit frère, petite sœur",
          content:
            "En chinois, on ne dit jamais simplement « frère » ou « sœur ». On DOIT préciser si la personne est plus âgée ou plus jeune que soi. 哥哥 = frère aîné, 弟弟 = frère cadet, 姐姐 = sœur aînée, 妹妹 = sœur cadette. C'est une distinction obligatoire, pas optionnelle.",
        },
        {
          type: "example",
          chinese: "兒子、女兒",
          pinyin: "érzi, nǚ'ér",
          translation: "Fils, fille",
          content:
            "兒子 désigne le fils et 女兒 désigne la fille. Attention à la prononciation de 女 (nǚ) avec le troisième ton — c'est un son difficile pour les francophones. À Taiwan, on entend aussi 小孩 (xiǎohái) pour dire « enfant » de manière générale.",
        },
        {
          type: "example",
          chinese: "先生、太太",
          pinyin: "xiānshēng, tàitai",
          translation: "Mari / Monsieur, épouse / Madame",
          content:
            "先生 a deux sens : « monsieur » (forme de politesse) et « mari ». 太太 signifie « épouse » ou « madame ». En contexte familial : 我先生 = mon mari, 我太太 = ma femme. À Taiwan, les jeunes couples utilisent aussi 老公 (lǎogōng) et 老婆 (lǎopó), plus affectueux.",
        },
        {
          type: "tip",
          content:
            "À Taiwan, on appelle souvent les gens par leur lien familial même s'ils ne sont pas de la famille. Un ami plus âgé peut être appelé 哥 ou 姐. Une voisine âgée sera 阿姨 (āyí, tante). C'est une marque de respect et de proximité.",
        },
      ],
    },
    {
      title: "有/沒有 et 幾個 — Possession et quantité",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour exprimer la possession en chinois, on utilise 有 (yǒu = avoir) et sa négation 沒有 (méiyǒu = ne pas avoir). Contrairement au français, il n'y a pas de conjugaison : 我有, 你有, 他有 — le verbe ne change jamais. C'est l'un des aspects les plus simples de la grammaire chinoise.",
        },
        {
          type: "example",
          chinese: "我有兩個哥哥。",
          pinyin: "wǒ yǒu liǎng gè gēge.",
          translation: "J'ai deux grands frères.",
          content:
            "La structure est : sujet + 有 + nombre + classificateur + nom. Le classificateur 個 (gè) est le plus courant et s'utilise pour les personnes. Deux = 兩 (liǎng) devant un classificateur, et non 二 (èr). C'est une règle importante : on dit 兩個, jamais 二個.",
        },
        {
          type: "example",
          chinese: "你有沒有弟弟？",
          pinyin: "nǐ yǒu méiyǒu dìdi?",
          translation: "Est-ce que tu as un petit frère ?",
          content:
            "Pour poser une question de type oui/non avec 有, on utilise la structure 有沒有. C'est la forme la plus courante à Taiwan. On peut aussi dire 你有弟弟嗎？ avec la particule interrogative 嗎, mais 有沒有 est plus naturel à l'oral.",
        },
        {
          type: "example",
          chinese: "我沒有妹妹。",
          pinyin: "wǒ méiyǒu mèimei.",
          translation: "Je n'ai pas de petite sœur.",
          content:
            "La négation de 有 est TOUJOURS 沒有, jamais 不有. C'est une exception importante : la plupart des verbes se nient avec 不, mais 有 se nie exclusivement avec 沒. Retiens : 沒有 = ne pas avoir, toujours.",
        },
        {
          type: "example",
          chinese: "你有幾個兄弟姐妹？",
          pinyin: "nǐ yǒu jǐ gè xiōngdì jiěmèi?",
          translation: "Tu as combien de frères et sœurs ?",
          content:
            "幾 (jǐ) signifie « combien » pour des petites quantités (généralement moins de 10). La structure est : 幾 + classificateur + nom. 幾個人 = combien de personnes, 幾個小孩 = combien d'enfants. Pour de grandes quantités, on utilise 多少 (duōshǎo).",
        },
        {
          type: "comparison",
          content:
            "Comparons les structures : 你有弟弟嗎？ (question oui/non avec 嗎) vs 你有沒有弟弟？ (question oui/non avec 有沒有) vs 你有幾個弟弟？ (question de quantité avec 幾個). Les deux premières demandent si tu as un petit frère, la troisième demande combien tu en as.",
        },
        {
          type: "tip",
          content:
            "Quand un Taiwanais te demande 你有幾個兄弟姐妹？, tu peux répondre simplement : 我有一個姐姐 (j'ai une grande sœur) ou 我是獨生子/獨生女 (je suis fils/fille unique). Les Taiwanais adorent parler de la famille — c'est un sujet de conversation très courant.",
        },
      ],
    },
    {
      title: "La famille à Taiwan — Une valeur centrale",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "À Taiwan, la famille n'est pas juste un lien biologique — c'est le pilier de la société. Les Taiwanais ont des liens familiaux beaucoup plus serrés que dans la plupart des pays occidentaux. Il est courant de vivre avec ses parents jusqu'au mariage, et même après. Les grands-parents participent activement à l'éducation des enfants.",
        },
        {
          type: "example",
          chinese: "我們全家一起住。",
          pinyin: "wǒmen quánjiā yìqǐ zhù.",
          translation: "Toute notre famille vit ensemble.",
          content:
            "Les familles multigénérationnelles sont encore très courantes à Taiwan. 全家 (quánjiā) signifie « toute la famille ». Vivre avec ses parents n'est pas un signe de dépendance mais de piété filiale (孝順, xiàoshùn), une valeur fondamentale de la culture chinoise.",
        },
        {
          type: "example",
          chinese: "家人最重要。",
          pinyin: "jiārén zuì zhòngyào.",
          translation: "La famille est la chose la plus importante.",
          content:
            "Cette phrase résume une valeur profonde de la culture taiwanaise. 家人 (jiārén) désigne les membres de la famille. 最重要 (zuì zhòngyào) = le plus important. Pour les Taiwanais, les décisions importantes se prennent souvent en famille.",
        },
        {
          type: "text",
          content:
            "Les relations entre amis sont aussi très valorisées à Taiwan. 朋友 (péngyǒu, ami), 同學 (tóngxué, camarade de classe) et 老師 (lǎoshī, professeur) sont des relations sociales importantes. Le professeur est particulièrement respecté — on dit 一日為師，終身為父 (un jour votre professeur, toujours votre père).",
        },
        {
          type: "tip",
          content:
            "Quand tu rencontres un Taiwanais, ne sois pas surpris si on te pose des questions sur ta famille dès les premières minutes. « Tu as des frères et sœurs ? », « Tes parents font quoi ? » — ce n'est pas indiscret, c'est une manière de montrer de l'intérêt et de créer du lien.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "小明 (Xiǎo Míng) montre des photos de famille à son ami français Paul. Ils sont assis dans un café à Taipei.",
    lines: [
      {
        speaker: "Paul",
        chinese: "你家有幾個人？",
        pinyin: "nǐ jiā yǒu jǐ gè rén?",
        french: "Il y a combien de personnes dans ta famille ?",
        note: "幾個人 pour demander le nombre de personnes.",
      },
      {
        speaker: "小明",
        chinese: "我家有五個人。爸爸、媽媽、哥哥、妹妹，還有我。",
        pinyin:
          "wǒ jiā yǒu wǔ gè rén. bàba, māma, gēge, mèimei, háiyǒu wǒ.",
        french:
          "Nous sommes cinq. Papa, maman, mon grand frère, ma petite sœur, et moi.",
        note: "還有 (háiyǒu) = et aussi, en plus.",
      },
      {
        speaker: "Paul",
        chinese: "你哥哥做什麼工作？",
        pinyin: "nǐ gēge zuò shénme gōngzuò?",
        french: "Ton grand frère fait quoi comme travail ?",
      },
      {
        speaker: "小明",
        chinese: "他是老師。他在大學教書。你呢？你有沒有兄弟姐妹？",
        pinyin:
          "tā shì lǎoshī. tā zài dàxué jiāoshū. nǐ ne? nǐ yǒu méiyǒu xiōngdì jiěmèi?",
        french:
          "Il est professeur. Il enseigne à l'université. Et toi ? Tu as des frères et sœurs ?",
        note: "你呢 pour retourner la question.",
      },
      {
        speaker: "Paul",
        chinese: "我有一個姐姐。她是學生。",
        pinyin: "wǒ yǒu yí gè jiějie. tā shì xuéshēng.",
        french: "J'ai une grande sœur. Elle est étudiante.",
      },
      {
        speaker: "小明",
        chinese: "你的爸爸媽媽住在法國嗎？",
        pinyin: "nǐ de bàba māma zhù zài fàguó ma?",
        french: "Tes parents habitent en France ?",
      },
      {
        speaker: "Paul",
        chinese: "對，他們住在巴黎。我很想他們。",
        pinyin: "duì, tāmen zhù zài bālí. wǒ hěn xiǎng tāmen.",
        french: "Oui, ils habitent à Paris. Ils me manquent beaucoup.",
        note: "想 (xiǎng) ici signifie « penser à / manquer ».",
      },
      {
        speaker: "小明",
        chinese: "家人最重要。你可以常常打電話給他們啊！",
        pinyin:
          "jiārén zuì zhòngyào. nǐ kěyǐ chángcháng dǎ diànhuà gěi tāmen a!",
        french:
          "La famille c'est le plus important. Tu peux les appeler souvent !",
        note: "啊 ajoute de la chaleur à la suggestion.",
      },
    ],
  },

  keyPoints: [
    "有/沒有 pour exprimer la possession — 有 se nie toujours avec 沒, jamais avec 不",
    "Termes familiaux en chinois : distinction obligatoire entre aîné (哥哥/姐姐) et cadet (弟弟/妹妹)",
    "幾個 pour demander combien (petites quantités) — structure : 幾 + classificateur + nom",
    "La famille est une valeur centrale à Taiwan — sujet de conversation courant et important",
  ],

  vocabulary: [
    {
      character: "爸爸",
      pinyin: "bàba",
      zhuyin: "ㄅㄚˋ ㄅㄚ˙",
      french: "Papa",
      english: "Dad",
      example: {
        sentence: "我爸爸是醫生。",
        pinyin: "wǒ bàba shì yīshēng.",
        translation: "Mon père est médecin.",
      },
    },
    {
      character: "媽媽",
      pinyin: "māma",
      zhuyin: "ㄇㄚ ㄇㄚ˙",
      french: "Maman",
      english: "Mom",
      example: {
        sentence: "媽媽在做飯。",
        pinyin: "māma zài zuòfàn.",
        translation: "Maman est en train de cuisiner.",
      },
    },
    {
      character: "哥哥",
      pinyin: "gēge",
      zhuyin: "ㄍㄜ ㄍㄜ˙",
      french: "Grand frère",
      english: "Older brother",
      example: {
        sentence: "我哥哥很高。",
        pinyin: "wǒ gēge hěn gāo.",
        translation: "Mon grand frère est très grand.",
      },
    },
    {
      character: "姐姐",
      pinyin: "jiějie",
      zhuyin: "ㄐㄧㄝˇ ㄐㄧㄝ˙",
      french: "Grande sœur",
      english: "Older sister",
      example: {
        sentence: "姐姐在台北工作。",
        pinyin: "jiějie zài táiběi gōngzuò.",
        translation: "Ma grande sœur travaille à Taipei.",
      },
    },
    {
      character: "弟弟",
      pinyin: "dìdi",
      zhuyin: "ㄉㄧˋ ㄉㄧ˙",
      french: "Petit frère",
      english: "Younger brother",
      example: {
        sentence: "弟弟還在上學。",
        pinyin: "dìdi hái zài shàngxué.",
        translation: "Mon petit frère est encore à l'école.",
      },
    },
    {
      character: "妹妹",
      pinyin: "mèimei",
      zhuyin: "ㄇㄟˋ ㄇㄟ˙",
      french: "Petite sœur",
      english: "Younger sister",
      example: {
        sentence: "我妹妹很可愛。",
        pinyin: "wǒ mèimei hěn kě'ài.",
        translation: "Ma petite sœur est très mignonne.",
      },
    },
    {
      character: "兒子",
      pinyin: "érzi",
      zhuyin: "ㄦˊ ㄗ˙",
      french: "Fils",
      english: "Son",
      example: {
        sentence: "他的兒子三歲了。",
        pinyin: "tā de érzi sān suì le.",
        translation: "Son fils a trois ans.",
      },
    },
    {
      character: "女兒",
      pinyin: "nǚ'ér",
      zhuyin: "ㄋㄩˇ ㄦˊ",
      french: "Fille (enfant)",
      english: "Daughter",
      example: {
        sentence: "她的女兒很聰明。",
        pinyin: "tā de nǚ'ér hěn cōngmíng.",
        translation: "Sa fille est très intelligente.",
      },
    },
    {
      character: "先生",
      pinyin: "xiānshēng",
      zhuyin: "ㄒㄧㄢ ㄕㄥ",
      french: "Mari / Monsieur",
      english: "Husband / Mr.",
      example: {
        sentence: "我先生是法國人。",
        pinyin: "wǒ xiānshēng shì fàguó rén.",
        translation: "Mon mari est français.",
      },
    },
    {
      character: "太太",
      pinyin: "tàitai",
      zhuyin: "ㄊㄞˋ ㄊㄞ˙",
      french: "Épouse / Madame",
      english: "Wife / Mrs.",
      example: {
        sentence: "他太太是台灣人。",
        pinyin: "tā tàitai shì táiwān rén.",
        translation: "Sa femme est taiwanaise.",
      },
    },
    {
      character: "家人",
      pinyin: "jiārén",
      zhuyin: "ㄐㄧㄚ ㄖㄣˊ",
      french: "Membres de la famille",
      english: "Family members",
      example: {
        sentence: "家人最重要。",
        pinyin: "jiārén zuì zhòngyào.",
        translation: "La famille est le plus important.",
      },
    },
    {
      character: "朋友",
      pinyin: "péngyǒu",
      zhuyin: "ㄆㄥˊ ㄧㄡˇ",
      french: "Ami",
      english: "Friend",
      example: {
        sentence: "她是我的好朋友。",
        pinyin: "tā shì wǒ de hǎo péngyǒu.",
        translation: "Elle est ma bonne amie.",
      },
    },
    {
      character: "同學",
      pinyin: "tóngxué",
      zhuyin: "ㄊㄨㄥˊ ㄒㄩㄝˊ",
      french: "Camarade de classe",
      english: "Classmate",
      example: {
        sentence: "他是我的同學。",
        pinyin: "tā shì wǒ de tóngxué.",
        translation: "Il est mon camarade de classe.",
      },
    },
    {
      character: "老師",
      pinyin: "lǎoshī",
      zhuyin: "ㄌㄠˇ ㄕ",
      french: "Professeur",
      english: "Teacher",
      example: {
        sentence: "老師教我們中文。",
        pinyin: "lǎoshī jiāo wǒmen zhōngwén.",
        translation: "Le professeur nous enseigne le chinois.",
      },
    },
    {
      character: "學生",
      pinyin: "xuéshēng",
      zhuyin: "ㄒㄩㄝˊ ㄕㄥ",
      french: "Étudiant / Élève",
      english: "Student",
      example: {
        sentence: "我是大學生。",
        pinyin: "wǒ shì dàxuéshēng.",
        translation: "Je suis étudiant(e) à l'université.",
      },
    },
  ],

  exercises: [
    {
      id: "u45-ex1",
      type: "comprehension",
      question:
        "Comment dit-on « J'ai deux grands frères » en chinois ? Attention au mot pour « deux ».",
      correctAnswer: "我有兩個哥哥",
      options: [
        "我有兩個哥哥",
        "我有二個哥哥",
        "我有兩個弟弟",
        "我有兩哥哥",
      ],
    },
    {
      id: "u45-ex2",
      type: "fill-blank",
      question: "你有___弟弟？(Est-ce que tu as un petit frère ?)",
      correctAnswer: "沒有",
      options: ["沒有", "不", "沒", "不有"],
      optionsHint: ["méiyǒu", "bù", "méi", "bùyǒu"],
      optionsZhuyin: ["ㄇㄟˊ ㄧㄡˇ", "ㄅㄨˋ", "ㄇㄟˊ", "ㄅㄨˋ ㄧㄡˇ"],
      hint: "Quelle est la forme correcte pour nier 有 ?",
    },
    {
      id: "u45-ex3",
      type: "translate",
      question: "Que signifie 你家有幾個人？",
      correctAnswer: "Combien de personnes y a-t-il dans ta famille ?",
      options: [
        "Combien de personnes y a-t-il dans ta famille ?",
        "Où habite ta famille ?",
        "Est-ce que ta famille est grande ?",
        "Qui sont les membres de ta famille ?",
      ],
    },
    {
      id: "u45-ex4",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 我沒有妹妹。",
      correctAnswer: "Je n'ai pas de petite sœur.",
      options: [
        "Je n'ai pas de petite sœur.",
        "Je n'ai pas de grande sœur.",
        "J'ai une petite sœur.",
        "Ma petite sœur n'est pas là.",
      ],
    },
    {
      id: "u45-ex5",
      type: "comprehension",
      question: "Quelle est la différence entre 哥哥 et 弟弟 ?",
      correctAnswer:
        "哥哥 = frère plus âgé (aîné), 弟弟 = frère plus jeune (cadet)",
      options: [
        "哥哥 = frère plus âgé (aîné), 弟弟 = frère plus jeune (cadet)",
        "哥哥 = frère biologique, 弟弟 = ami proche",
        "哥哥 = frère de la mère, 弟弟 = frère du père",
        "Il n'y a pas de différence, ce sont des synonymes",
      ],
    },
    {
      id: "u45-ex6",
      type: "fill-blank",
      question: "我家有五___人。(Ma famille a cinq personnes.)",
      correctAnswer: "個",
      options: ["個", "位", "口", "些"],
      optionsHint: ["gè", "wèi", "kǒu", "xiē"],
      optionsZhuyin: ["ㄍㄜˋ", "ㄨㄟˋ", "ㄎㄡˇ", "ㄒㄧㄝ"],
      hint: "Quel est le classificateur le plus courant pour les personnes ?",
    },
    {
      id: "u45-ex7",
      type: "translate",
      question: "Comment dire « Mon mari est professeur » ?",
      correctAnswer: "我先生是老師。",
      options: [
        "我先生是老師。",
        "我太太是老師。",
        "我朋友是老師。",
        "我爸爸是老師。",
      ],
    },
    {
      id: "u45-ex8",
      type: "comprehension",
      question:
        "Pourquoi un Taiwanais pourrait-il appeler un ami plus âgé 哥 ou 姐 ?",
      correctAnswer:
        "C'est une marque de respect et de proximité — on utilise les termes familiaux même en dehors de la famille",
      options: [
        "C'est une marque de respect et de proximité — on utilise les termes familiaux même en dehors de la famille",
        "Parce qu'il ne connaît pas son vrai nom",
        "C'est une erreur courante des Taiwanais",
        "Parce que tout le monde est considéré comme de la famille légalement",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-42"],
};
