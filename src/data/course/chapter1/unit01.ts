import type { CourseUnit } from "@/types/course";

export const unit01: CourseUnit = {
  id: "unit-01",
  number: 1,
  title: "Le chinois, comment ça marche ?",
  titleZh: "中文怎麼運作？",
  chapter: 1,
  description:
    "Découvrez les bases du chinois mandarin : une langue sans conjugaison, sans alphabet, mais avec une logique imparable.",
  icon: "🧩",

  sections: [
    {
      title: "Une langue sans conjugaison ni alphabet",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le chinois mandarin est radicalement différent du français, mais c'est justement ce qui le rend fascinant. Oubliez tout ce que vous connaissez de la grammaire française : pas de conjugaison, pas de genre masculin/féminin, pas de pluriel marqué. Le verbe reste toujours le même, quelle que soit la personne ou le temps.",
        },
        {
          type: "comparison",
          content:
            "En français, le verbe « manger » change : je mange, tu manges, il mange, nous mangeons... En chinois, 吃 (chī) reste 吃 peu importe qui mange ou quand on mange. 我吃 (wǒ chī) = je mange. 你吃 (nǐ chī) = tu manges. 他吃 (tā chī) = il mange. Hier, aujourd'hui, demain : toujours 吃.",
        },
        {
          type: "text",
          content:
            "Le chinois n'a pas d'alphabet. À la place, il utilise des caractères (漢字 hànzì). Chaque caractère représente une syllabe et porte un sens. Le caractère 山 (shān) signifie « montagne ». Il ne se décompose pas en lettres : c'est un bloc visuel unique.",
        },
        {
          type: "tip",
          content:
            "Bonne nouvelle : l'ordre des mots en chinois est Sujet + Verbe + Objet, exactement comme en français ! « Je mange du riz » = 我吃飯 (wǒ chī fàn), mot pour mot : je + manger + riz.",
        },
        {
          type: "example",
          chinese: "我吃飯",
          pinyin: "wǒ chī fàn",
          translation: "Je mange du riz (Je + manger + riz)",
          content: "L'ordre SVO est identique au français.",
        },
      ],
    },
    {
      title: "Les caractères traditionnels",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "À Taiwan, on utilise les caractères traditionnels (繁體字 fántǐzì). La Chine continentale a simplifié beaucoup de caractères dans les années 1950, mais Taiwan a gardé les formes originales. C'est comme la différence entre l'écriture cursive et l'imprimée : le sens est le même, mais la forme diffère.",
        },
        {
          type: "comparison",
          content:
            "Traditionnel (Taiwan) vs Simplifié (Chine) : 學 vs 学 (apprendre), 國 vs 国 (pays), 書 vs 书 (livre), 龍 vs 龙 (dragon). Les caractères traditionnels sont souvent plus détaillés et plus beaux, mais aussi plus complexes à écrire.",
        },
        {
          type: "text",
          content:
            "Chaque caractère est un concept. Certains sont des pictogrammes très anciens : 水 (shuǐ) = eau (on voit des gouttes qui coulent), 火 (huǒ) = feu (on voit des flammes), 人 (rén) = personne (on voit quelqu'un qui marche).",
        },
        {
          type: "tip",
          content:
            "Les radicaux sont des composants récurrents qui donnent un indice sur le sens. Le radical 水 (eau, souvent écrit 氵 sur le côté) apparaît dans 河 (rivière), 海 (mer), 湖 (lac), 洗 (laver). Si vous voyez 氵 dans un caractère, il y a de bonnes chances que ça ait un rapport avec l'eau !",
        },
        {
          type: "text",
          content:
            "Pas de panique sur le nombre de caractères. Il existe des dizaines de milliers de caractères, mais connaître environ 500 caractères vous donne accès à 75 % des textes courants. Avec 1 000, vous atteignez 90 %. On y va pas à pas.",
        },
      ],
    },
    {
      title: "Pinyin et Zhuyin : deux systèmes de prononciation",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Comme les caractères ne vous disent pas comment les prononcer, il faut un système de transcription phonétique. Il en existe deux principaux.",
        },
        {
          type: "text",
          content:
            "Le Pinyin est la romanisation standard internationale. Il utilise l'alphabet latin avec des accents pour indiquer les tons. Par exemple : nǐ hǎo (bonjour). Le pinyin est utilisé en Chine continentale et dans la plupart des méthodes d'apprentissage à l'étranger.",
        },
        {
          type: "text",
          content:
            "Le Zhuyin (注音), aussi appelé Bopomofo, est LE système utilisé à Taiwan. Ce sont des symboles phonétiques propres : ㄅㄆㄇㄈ (b, p, m, f). Les enfants taiwanais apprennent le zhuyin dès la maternelle, pas le pinyin. Tous les livres pour enfants, les claviers de téléphone taiwanais et les dictionnaires locaux utilisent le zhuyin.",
        },
        {
          type: "example",
          chinese: "你好",
          pinyin: "nǐ hǎo",
          translation: "Bonjour — En zhuyin : ㄋㄧˇ ㄏㄠˇ",
          content: "Le même mot en deux systèmes de transcription.",
        },
        {
          type: "tip",
          content:
            "Dans ce cours, on utilisera les deux systèmes. Le pinyin pour faciliter votre apprentissage au début, et le zhuyin pour que vous puissiez lire les panneaux et les menus à Taiwan. Petit à petit, vous vous habituerez au zhuyin.",
        },
      ],
    },
    {
      title: "Structure de base d'une phrase",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La phrase chinoise de base suit l'ordre Sujet + Verbe + Objet (SVO), comme en français. Pas besoin de réapprendre un ordre des mots compliqué.",
        },
        {
          type: "example",
          chinese: "我喜歡台灣",
          pinyin: "wǒ xǐhuān Táiwān",
          translation: "J'aime Taiwan (Je + aimer + Taiwan)",
          content: "Structure SVO simple, identique au français.",
        },
        {
          type: "text",
          content:
            "Pour dire « ne pas », on place 不 (bù) directement devant le verbe. C'est aussi simple que ça.",
        },
        {
          type: "example",
          chinese: "我不喜歡",
          pinyin: "wǒ bù xǐhuān",
          translation: "Je n'aime pas (Je + ne pas + aimer)",
          content: "La négation se fait avec 不 devant le verbe.",
        },
        {
          type: "text",
          content:
            "Pour transformer une phrase en question, il suffit d'ajouter 嗎 (ma) à la fin. Pas besoin d'inverser le sujet et le verbe comme en français.",
        },
        {
          type: "example",
          chinese: "你喜歡嗎？",
          pinyin: "nǐ xǐhuān ma?",
          translation: "Tu aimes ? (Tu + aimer + [particule interrogative])",
          content: "嗎 à la fin transforme n'importe quelle phrase en question.",
        },
        {
          type: "tip",
          content:
            "En chinois, on met **很** (hěn) devant les adjectifs. 很好 (hěn hǎo) se traduit par « bien » et non « très bien ». C'est obligatoire dans une phrase simple : on dit 我很好 (je vais bien), pas *我好. Sans 很, ça sonnerait comme une comparaison.",
        },
        {
          type: "warning",
          content:
            "Attention : 嗎 sert uniquement pour les questions oui/non. Pour les questions avec « quoi », « où », « qui », on utilise d'autres mots interrogatifs (on verra ça à l'unité 5).",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Premier contact dans un café à Taipei. Vous vous asseyez à côté d'un Taiwanais curieux.",
    lines: [
      {
        speaker: "A",
        chinese: "你好！",
        pinyin: "nǐ hǎo!",
        french: "Bonjour !",
      },
      {
        speaker: "B",
        chinese: "你好！你是法國人嗎？",
        pinyin: "nǐ hǎo! nǐ shì Fǎguó rén ma?",
        french: "Bonjour ! Tu es français ?",
        note: "Les Taiwanais devinent souvent votre nationalité et posent la question directement.",
      },
      {
        speaker: "A",
        chinese: "是，我是法國人。你好！",
        pinyin: "shì, wǒ shì Fǎguó rén. nǐ hǎo!",
        french: "Oui, je suis français. Bonjour !",
      },
      {
        speaker: "B",
        chinese: "歡迎來台灣！台灣好玩嗎？",
        pinyin: "huānyíng lái Táiwān! Táiwān hǎo wán ma?",
        french: "Bienvenue à Taiwan ! Taiwan c'est sympa ?",
      },
      {
        speaker: "A",
        chinese: "台灣很好！謝謝！",
        pinyin: "Táiwān hěn hǎo! xièxiè!",
        french: "Taiwan c'est super ! Merci !",
      },
    ],
  },

  keyPoints: [
    "Le chinois n'a pas de conjugaison : le verbe ne change jamais, quelle que soit la personne ou le temps.",
    "Taiwan utilise les caractères traditionnels (繁體字), plus détaillés que les simplifiés de Chine continentale.",
    "L'ordre des mots est Sujet + Verbe + Objet (SVO), comme en français.",
    "La négation se fait avec 不 (bù) devant le verbe. La question oui/non avec 嗎 (ma) à la fin.",
    "Le zhuyin (注音/Bopomofo) est le système phonétique utilisé à Taiwan, pas le pinyin.",
  ],

  vocabulary: [
    {
      character: "你好",
      pinyin: "nǐ hǎo",
      zhuyin: "ㄋㄧˇ ㄏㄠˇ",
      french: "Bonjour",
      english: "Hello",
      example: {
        sentence: "你好，我是法國人。",
        pinyin: "nǐ hǎo, wǒ shì Fǎguó rén.",
        translation: "Bonjour, je suis français.",
      },
    },
    {
      character: "我",
      pinyin: "wǒ",
      zhuyin: "ㄨㄛˇ",
      french: "Je / moi",
      english: "I / me",
      example: {
        sentence: "我喜歡台灣。",
        pinyin: "wǒ xǐhuān Táiwān.",
        translation: "J'aime Taiwan.",
      },
    },
    {
      character: "你",
      pinyin: "nǐ",
      zhuyin: "ㄋㄧˇ",
      french: "Tu / toi",
      english: "You",
      example: {
        sentence: "你是法國人嗎？",
        pinyin: "nǐ shì Fǎguó rén ma?",
        translation: "Tu es français ?",
      },
    },
    {
      character: "他",
      pinyin: "tā",
      zhuyin: "ㄊㄚ",
      french: "Il / lui",
      english: "He / him",
      example: {
        sentence: "他是台灣人。",
        pinyin: "tā shì Táiwān rén.",
        translation: "Il est taiwanais.",
      },
    },
    {
      character: "她",
      pinyin: "tā",
      zhuyin: "ㄊㄚ",
      french: "Elle",
      english: "She / her",
      example: {
        sentence: "她很好。",
        pinyin: "tā hěn hǎo.",
        translation: "Elle va bien.",
      },
    },
    {
      character: "是",
      pinyin: "shì",
      zhuyin: "ㄕˋ",
      french: "Être / oui",
      english: "To be / yes",
      example: {
        sentence: "我是學生。",
        pinyin: "wǒ shì xuéshēng.",
        translation: "Je suis étudiant.",
      },
    },
    {
      character: "不",
      pinyin: "bù",
      zhuyin: "ㄅㄨˋ",
      french: "Ne pas (négation)",
      english: "Not / no",
      example: {
        sentence: "我不是老師。",
        pinyin: "wǒ bú shì lǎoshī.",
        translation: "Je ne suis pas professeur.",
      },
    },
    {
      character: "這",
      pinyin: "zhè",
      zhuyin: "ㄓㄜˋ",
      french: "Ceci / ce",
      english: "This",
      example: {
        sentence: "這是什麼？",
        pinyin: "zhè shì shénme?",
        translation: "C'est quoi ?",
      },
    },
    {
      character: "那",
      pinyin: "nà",
      zhuyin: "ㄋㄚˋ",
      french: "Cela / ce... là",
      english: "That",
      example: {
        sentence: "那是我的。",
        pinyin: "nà shì wǒ de.",
        translation: "C'est le mien.",
      },
    },
    {
      character: "好",
      pinyin: "hǎo",
      zhuyin: "ㄏㄠˇ",
      french: "Bon / bien",
      english: "Good / well",
      example: {
        sentence: "台灣很好！",
        pinyin: "Táiwān hěn hǎo!",
        translation: "Taiwan c'est super !",
      },
    },
    {
      character: "人",
      pinyin: "rén",
      zhuyin: "ㄖㄣˊ",
      french: "Personne / gens",
      english: "Person / people",
      example: {
        sentence: "台灣人很好。",
        pinyin: "Táiwān rén hěn hǎo.",
        translation: "Les Taiwanais sont sympas.",
      },
    },
    {
      character: "法國",
      pinyin: "Fǎguó",
      zhuyin: "ㄈㄚˇ ㄍㄨㄛˊ",
      french: "France",
      english: "France",
      example: {
        sentence: "我是法國人。",
        pinyin: "wǒ shì Fǎguó rén.",
        translation: "Je suis français.",
      },
    },
    {
      character: "台灣",
      pinyin: "Táiwān",
      zhuyin: "ㄊㄞˊ ㄨㄢ",
      french: "Taiwan",
      english: "Taiwan",
      example: {
        sentence: "歡迎來台灣！",
        pinyin: "huānyíng lái Táiwān!",
        translation: "Bienvenue à Taiwan !",
      },
    },
    {
      character: "謝謝",
      pinyin: "xièxiè",
      zhuyin: "ㄒㄧㄝˋ ㄒㄧㄝˋ",
      french: "Merci",
      english: "Thank you",
      example: {
        sentence: "謝謝你！",
        pinyin: "xièxiè nǐ!",
        translation: "Merci à toi !",
      },
    },
    {
      character: "歡迎",
      pinyin: "huānyíng",
      zhuyin: "ㄏㄨㄢ ㄧㄥˊ",
      french: "Bienvenue / accueillir",
      english: "Welcome",
      example: {
        sentence: "歡迎來台灣！",
        pinyin: "huānyíng lái Táiwān!",
        translation: "Bienvenue à Taiwan !",
      },
    },
    {
      character: "來",
      pinyin: "lái",
      zhuyin: "ㄌㄞˊ",
      french: "Venir",
      english: "To come",
      example: {
        sentence: "你來台灣嗎？",
        pinyin: "nǐ lái Táiwān ma?",
        translation: "Tu viens à Taiwan ?",
      },
    },
    {
      character: "的",
      pinyin: "de",
      zhuyin: "ㄉㄜ˙",
      french: "De (particule possessive)",
      english: "Possessive particle",
      example: {
        sentence: "這是我的書。",
        pinyin: "zhè shì wǒ de shū.",
        translation: "C'est mon livre.",
      },
    },
    {
      character: "很",
      pinyin: "hěn",
      zhuyin: "ㄏㄣˇ",
      french: "Très (devant adjectif)",
      english: "Very",
      example: {
        sentence: "她很漂亮。",
        pinyin: "tā hěn piàoliang.",
        translation: "Elle est jolie.",
      },
    },
    {
      character: "也",
      pinyin: "yě",
      zhuyin: "ㄧㄝˇ",
      french: "Aussi",
      english: "Also",
      example: {
        sentence: "我也喜歡台灣。",
        pinyin: "wǒ yě xǐhuān Táiwān.",
        translation: "J'aime aussi Taiwan.",
      },
    },
    {
      character: "都",
      pinyin: "dōu",
      zhuyin: "ㄉㄡ",
      french: "Tout, tous",
      english: "All, both",
      example: {
        sentence: "我們都是法國人。",
        pinyin: "wǒmen dōu shì Fǎguó rén.",
        translation: "Nous sommes tous français.",
      },
    },
    {
      character: "和",
      pinyin: "hé",
      zhuyin: "ㄏㄜˊ",
      french: "Et",
      english: "And",
      example: {
        sentence: "我和你。",
        pinyin: "wǒ hé nǐ.",
        translation: "Toi et moi.",
      },
    },
  ],

  exercises: [
    {
      id: "u1-ex1",
      type: "comprehension",
      question:
        "Quelle est la particularité principale des verbes en chinois ?",
      correctAnswer: "Ils ne se conjuguent pas",
      options: [
        "Ils ne se conjuguent pas",
        "Ils ont 3 formes comme en anglais",
        "Ils changent selon le genre",
        "Ils ont un pluriel spécial",
      ],
    },
    {
      id: "u1-ex2",
      type: "translate",
      question: "Comment dit-on « Je suis français » en chinois ?",
      correctAnswer: "我是法國人",
      options: ["我是法國人", "我法國人是", "法國人我是", "是我法國人"],
    },
    {
      id: "u1-ex3",
      type: "fill-blank",
      question: "我___法國人。(Je suis français.)",
      correctAnswer: "是",
      options: ["是", "不", "好", "來"],
      hint: "Quel verbe signifie « être » ?",
    },
    {
      id: "u1-ex4",
      type: "comprehension",
      question: "Quel système phonétique est utilisé à Taiwan ?",
      correctAnswer: "Le zhuyin (注音/Bopomofo)",
      options: [
        "Le zhuyin (注音/Bopomofo)",
        "Le pinyin uniquement",
        "L'alphabet latin",
        "Les hiragana japonais",
      ],
    },
    {
      id: "u1-ex5",
      type: "translate",
      question: "Que signifie 你好嗎 ?",
      correctAnswer: "Comment vas-tu ? / Tu vas bien ?",
      options: [
        "Comment vas-tu ? / Tu vas bien ?",
        "Bonjour !",
        "Au revoir !",
        "Merci beaucoup !",
      ],
    },
    {
      id: "u1-ex6",
      type: "fill-blank",
      question: "我___喜歡。(Je n'aime pas.)",
      correctAnswer: "不",
      options: ["不", "是", "嗎", "好"],
      hint: "Quel mot exprime la négation ?",
    },
    {
      id: "u1-ex7",
      type: "comprehension",
      question: "Quel type de caractères utilise-t-on à Taiwan ?",
      correctAnswer: "Les caractères traditionnels (繁體字)",
      options: [
        "Les caractères traditionnels (繁體字)",
        "Les caractères simplifiés (简体字)",
        "Un mélange des deux",
        "Un alphabet spécial taiwanais",
      ],
    },
    {
      id: "u1-ex8",
      type: "translate",
      question: "Comment transforme-t-on « 你是法國人 » en question ?",
      correctAnswer: "你是法國人嗎？",
      options: [
        "你是法國人嗎？",
        "嗎你是法國人？",
        "你是法國人不？",
        "是你法國人嗎？",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: [],
};
