import type { CourseUnit } from "@/types/course";

export const unit01: CourseUnit = {
  id: "unit-01",
  number: 1,
  title: "Le chinois, comment ça marche ?",
  titleNative: "中文怎麼運作？",
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
          type: "text",
          content:
            "Chaque caractère chinois représente une syllabe et porte un sens. Le mot 電腦 (diànnǎo, ordinateur) se décompose en 電 (diàn, électricité) et 腦 (nǎo, cerveau). Un ordinateur, c'est littéralement un « cerveau électrique ». Cette logique compositionnelle est omniprésente : 火車 (huǒchē, train) = 火 (feu) + 車 (véhicule) — un « véhicule à feu ». Une fois que vous comprenez cette mécanique, apprendre de nouveaux mots devient un jeu de construction logique plutôt qu'un exercice de mémorisation arbitraire.",
        },
        {
          type: "example",
          content: "La logique des mots composés",
          native: "手機",
          romanization: "shǒujī",
          translation:
            "Téléphone portable (手 main + 機 machine = « machine de main »)",
        },
        {
          type: "example",
          content: "Encore un exemple de composition logique",
          native: "大學",
          romanization: "dàxué",
          translation:
            "Université (大 grand + 學 étude = « grande étude »)",
        },
        {
          type: "tip",
          content:
            "Première bonne nouvelle pour les francophones : la grammaire chinoise est si simple qu'un débutant peut former des phrases correctes dès le premier jour. Il suffit de mettre les mots dans le bon ordre — pas besoin de conjuguer quoi que ce soit.",
        },
        {
          type: "tip",
          content:
            "Deuxième bonne nouvelle : les caractères suivent une logique. Ce ne sont pas des dessins aléatoires. Les radicaux (composants récurrents) vous donnent des indices sur le sens, et les composants phonétiques sur la prononciation. Plus vous en apprenez, plus les suivants deviennent faciles.",
        },
        {
          type: "text",
          content:
            "Troisième bonne nouvelle — et elle est de taille si vous venez à Taiwan : les Taiwanais sont d'une patience et d'une bienveillance remarquables avec les étrangers qui tentent de parler mandarin. Même si votre prononciation est approximative, même si vos tons sont bancals, les gens feront l'effort de vous comprendre, vous encourageront, et se montreront souvent émus que vous fassiez l'effort d'apprendre leur langue.",
        },
        {
          type: "text",
          content:
            "Comparaison honnête — ce qui est PLUS SIMPLE en chinois : la grammaire (pas de conjugaison, pas de genre, pas d'articles), la formation des mots (logique compositionnelle), la syntaxe de base (SVO comme en français), les questions (il suffit d'ajouter 嗎 à la fin). Ce qui est PLUS COMPLEXE : l'écriture (des milliers de caractères à mémoriser), la prononciation (les 4 tons), certains sons inexistants en français (zh, ch, sh, r, ü), et les classificateurs (des petits mots qu'on place entre un nombre et un nom).",
        },
        {
          type: "warning",
          content:
            "Ne vous laissez pas décourager par les personnes qui vous répondent en anglais quand vous essayez de parler chinois. Ce n'est pas parce que votre chinois est mauvais — c'est souvent parce que les Taiwanais veulent pratiquer leur anglais ou vous faciliter la vie. Insistez poliment en chinois : c'est la meilleure façon de progresser.",
        },
        {
          type: "tip",
          content:
            "Bonne nouvelle : l'ordre des mots en chinois est Sujet + Verbe + Objet, exactement comme en français ! « Je mange du riz » = 我吃飯 (wǒ chī fàn), mot pour mot : je + manger + riz.",
        },
        {
          type: "example",
          native: "我吃飯",
          romanization: "wǒ chī fàn",
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
          type: "text",
          content:
            "Un caractère chinois n'est pas un dessin aléatoire. Il est construit selon des règles précises, généralement avec un radical sémantique (qui donne un indice sur le sens) et un composant phonétique (qui donne un indice sur la prononciation). Par exemple, le caractère 媽 (mā, maman) se compose du radical 女 (nǚ, femme) — qui indique que le sens est lié à une femme — et du composant 馬 (mǎ, cheval) qui n'a rien à voir avec le sens mais indique la prononciation approximative « ma ». Cette structure radical + phonétique s'applique à environ 80% des caractères chinois.",
        },
        {
          type: "example",
          content: "Structure radical + composant phonétique",
          native: "清 晴 請 情",
          romanization: "qīng qíng qǐng qíng",
          translation:
            "clair/pur, ensoleillé, s'il vous plaît, sentiment — tous partagent le composant phonétique 青 (qīng) mais ont des radicaux différents : 氵(eau), 日(soleil), 言(parole), 忄(coeur)",
        },
        {
          type: "example",
          content: "Le radical de l'eau 水/氵 dans différents caractères",
          native: "河 海 湖 洗 游 泳 淚 漢",
          romanization: "hé hǎi hú xǐ yóu yǒng lèi hàn",
          translation:
            "rivière, mer, lac, laver, nager, nager, larmes, Han (chinois) — tous contiennent le radical de l'eau",
        },
        {
          type: "example",
          content: "Le radical de la bouche 口 dans différents caractères",
          native: "吃 喝 叫 吹 唱 嗎 呢 吧",
          romanization: "chī hē jiào chuī chàng ma ne ba",
          translation:
            "manger, boire, crier, souffler, chanter, particule interrogative, particule, particule — tous impliquent la bouche",
        },
        {
          type: "text",
          content:
            "Les 10 caractères les plus simples à apprendre sont aussi parmi les plus anciens et les plus fréquents. Ils sont issus de pictogrammes : 一 (yī, un) est un simple trait horizontal, 二 (èr, deux) deux traits, 三 (sān, trois) trois traits. 人 (rén, personne) représente une silhouette humaine. 大 (dà, grand) est un humain qui écarte les bras. 小 (xiǎo, petit) montre quelque chose divisé. 日 (rì, soleil) était un cercle avec un point. 月 (yuè, lune) représentait un croissant. 山 (shān, montagne) dessine trois sommets. 水 (shuǐ, eau) évoque des gouttes et un courant.",
        },
        {
          type: "example",
          content: "Les 10 caractères les plus simples — pictogrammes ancestraux",
          native: "一 二 三 人 大 小 日 月 山 水",
          romanization: "yī èr sān rén dà xiǎo rì yuè shān shuǐ",
          translation:
            "un, deux, trois, personne, grand, petit, soleil, lune, montagne, eau",
        },
        {
          type: "text",
          content:
            "L'étymologie visuelle des caractères aide énormément à la mémorisation. Le caractère 木 (mù) représente un arbre. Deux arbres côte à côte : 林 (lín) signifie « forêt, bosquet ». Trois arbres ? 森 (sēn) signifie « forêt dense ». La femme 女 (nǚ) sous un toit 宀 donne 安 (ān, paix, sécurité). Le caractère 馬 (mǎ, cheval) était à l'origine un dessin d'un cheval avec quatre pattes et une crinière. 魚 (yú, poisson) montrait un poisson avec sa tête et sa queue. Connaître ces origines transforme l'apprentissage : au lieu de mémoriser des traits abstraits, vous voyez des images.",
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
          native: "你好",
          romanization: "nǐ hǎo",
          translation: "Bonjour — En reading: ㄋㄧˇ ㄏㄠˇ",
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
          native: "我喜歡台灣",
          romanization: "wǒ xǐhuān Táiwān",
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
          native: "我不喜歡",
          romanization: "wǒ bù xǐhuān",
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
          native: "你喜歡嗎？",
          romanization: "nǐ xǐhuān ma?",
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
        native: "你好！",
        romanization: "nǐ hǎo!",
        french: "Bonjour !",
      },
      {
        speaker: "B",
        native: "你好！你是法國人嗎？",
        romanization: "nǐ hǎo! nǐ shì Fǎguó rén ma?",
        french: "Bonjour ! Tu es français ?",
        note: "Les Taiwanais devinent souvent votre nationalité et posent la question directement.",
      },
      {
        speaker: "A",
        native: "是，我是法國人。你好！",
        romanization: "shì, wǒ shì Fǎguó rén. nǐ hǎo!",
        french: "Oui, je suis français. Bonjour !",
      },
      {
        speaker: "B",
        native: "歡迎來台灣！台灣好玩嗎？",
        romanization: "huānyíng lái Táiwān! Táiwān hǎo wán ma?",
        french: "Bienvenue à Taiwan ! Taiwan c'est sympa ?",
      },
      {
        speaker: "A",
        native: "台灣很好！謝謝！",
        romanization: "Táiwān hěn hǎo! xièxiè!",
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
      term: "你好",
      romanization: "nǐ hǎo",
      reading: "ㄋㄧˇ ㄏㄠˇ",
      french: "Bonjour",
      english: "Hello",
      example: {
        sentence: "你好，我是法國人。",
        romanization: "nǐ hǎo, wǒ shì Fǎguó rén.",
        translation: "Bonjour, je suis français.",
      },
    },
    {
      term: "我",
      romanization: "wǒ",
      reading: "ㄨㄛˇ",
      french: "Je / moi",
      english: "I / me",
      example: {
        sentence: "我喜歡台灣。",
        romanization: "wǒ xǐhuān Táiwān.",
        translation: "J'aime Taiwan.",
      },
    },
    {
      term: "你",
      romanization: "nǐ",
      reading: "ㄋㄧˇ",
      french: "Tu / toi",
      english: "You",
      example: {
        sentence: "你是法國人嗎？",
        romanization: "nǐ shì Fǎguó rén ma?",
        translation: "Tu es français ?",
      },
    },
    {
      term: "他",
      romanization: "tā",
      reading: "ㄊㄚ",
      french: "Il / lui",
      english: "He / him",
      example: {
        sentence: "他是台灣人。",
        romanization: "tā shì Táiwān rén.",
        translation: "Il est taiwanais.",
      },
    },
    {
      term: "她",
      romanization: "tā",
      reading: "ㄊㄚ",
      french: "Elle",
      english: "She / her",
      example: {
        sentence: "她很好。",
        romanization: "tā hěn hǎo.",
        translation: "Elle va bien.",
      },
    },
    {
      term: "是",
      romanization: "shì",
      reading: "ㄕˋ",
      french: "Être / oui",
      english: "To be / yes",
      example: {
        sentence: "我是學生。",
        romanization: "wǒ shì xuéshēng.",
        translation: "Je suis étudiant.",
      },
    },
    {
      term: "不",
      romanization: "bù",
      reading: "ㄅㄨˋ",
      french: "Ne pas (négation)",
      english: "Not / no",
      example: {
        sentence: "我不是老師。",
        romanization: "wǒ bú shì lǎoshī.",
        translation: "Je ne suis pas professeur.",
      },
    },
    {
      term: "這",
      romanization: "zhè",
      reading: "ㄓㄜˋ",
      french: "Ceci / ce",
      english: "This",
      example: {
        sentence: "這是什麼？",
        romanization: "zhè shì shénme?",
        translation: "C'est quoi ?",
      },
    },
    {
      term: "那",
      romanization: "nà",
      reading: "ㄋㄚˋ",
      french: "Cela / ce... là",
      english: "That",
      example: {
        sentence: "那是我的。",
        romanization: "nà shì wǒ de.",
        translation: "C'est le mien.",
      },
    },
    {
      term: "好",
      romanization: "hǎo",
      reading: "ㄏㄠˇ",
      french: "Bon / bien",
      english: "Good / well",
      example: {
        sentence: "台灣很好！",
        romanization: "Táiwān hěn hǎo!",
        translation: "Taiwan c'est super !",
      },
    },
    {
      term: "人",
      romanization: "rén",
      reading: "ㄖㄣˊ",
      french: "Personne / gens",
      english: "Person / people",
      example: {
        sentence: "台灣人很好。",
        romanization: "Táiwān rén hěn hǎo.",
        translation: "Les Taiwanais sont sympas.",
      },
    },
    {
      term: "法國",
      romanization: "Fǎguó",
      reading: "ㄈㄚˇ ㄍㄨㄛˊ",
      french: "France",
      english: "France",
      example: {
        sentence: "我是法國人。",
        romanization: "wǒ shì Fǎguó rén.",
        translation: "Je suis français.",
      },
    },
    {
      term: "台灣",
      romanization: "Táiwān",
      reading: "ㄊㄞˊ ㄨㄢ",
      french: "Taiwan",
      english: "Taiwan",
      example: {
        sentence: "歡迎來台灣！",
        romanization: "huānyíng lái Táiwān!",
        translation: "Bienvenue à Taiwan !",
      },
    },
    {
      term: "謝謝",
      romanization: "xièxiè",
      reading: "ㄒㄧㄝˋ ㄒㄧㄝˋ",
      french: "Merci",
      english: "Thank you",
      example: {
        sentence: "謝謝你！",
        romanization: "xièxiè nǐ!",
        translation: "Merci à toi !",
      },
    },
    {
      term: "歡迎",
      romanization: "huānyíng",
      reading: "ㄏㄨㄢ ㄧㄥˊ",
      french: "Bienvenue / accueillir",
      english: "Welcome",
      example: {
        sentence: "歡迎來台灣！",
        romanization: "huānyíng lái Táiwān!",
        translation: "Bienvenue à Taiwan !",
      },
    },
    {
      term: "來",
      romanization: "lái",
      reading: "ㄌㄞˊ",
      french: "Venir",
      english: "To come",
      example: {
        sentence: "你來台灣嗎？",
        romanization: "nǐ lái Táiwān ma?",
        translation: "Tu viens à Taiwan ?",
      },
    },
    {
      term: "的",
      romanization: "de",
      reading: "ㄉㄜ˙",
      french: "De (particule possessive)",
      english: "Possessive particle",
      example: {
        sentence: "這是我的書。",
        romanization: "zhè shì wǒ de shū.",
        translation: "C'est mon livre.",
      },
    },
    {
      term: "很",
      romanization: "hěn",
      reading: "ㄏㄣˇ",
      french: "Très (devant adjectif)",
      english: "Very",
      example: {
        sentence: "她很漂亮。",
        romanization: "tā hěn piàoliang.",
        translation: "Elle est jolie.",
      },
    },
    {
      term: "也",
      romanization: "yě",
      reading: "ㄧㄝˇ",
      french: "Aussi",
      english: "Also",
      example: {
        sentence: "我也喜歡台灣。",
        romanization: "wǒ yě xǐhuān Táiwān.",
        translation: "J'aime aussi Taiwan.",
      },
    },
    {
      term: "都",
      romanization: "dōu",
      reading: "ㄉㄡ",
      french: "Tout, tous",
      english: "All, both",
      example: {
        sentence: "我們都是法國人。",
        romanization: "wǒmen dōu shì Fǎguó rén.",
        translation: "Nous sommes tous français.",
      },
    },
    {
      term: "和",
      romanization: "hé",
      reading: "ㄏㄜˊ",
      french: "Et",
      english: "And",
      example: {
        sentence: "我和你。",
        romanization: "wǒ hé nǐ.",
        translation: "Toi et moi.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-01-ex1",
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
      id: "unit-01-ex2",
      type: "translate",
      question: "Comment dit-on « Je suis français » en chinois ?",
      correctAnswer: "我是法國人",
      options: ["我是法國人", "我法國人是", "法國人我是", "是我法國人"],
      optionsHint: ["wǒ shì Fǎguó rén", "wǒ Fǎguó rén shì", "Fǎguó rén wǒ shì", "shì wǒ Fǎguó rén"],
      optionsReading: ["ㄨㄛˇ ㄕˋ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ", "ㄨㄛˇ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ ㄕˋ", "ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ ㄨㄛˇ ㄕˋ", "ㄕˋ ㄨㄛˇ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ"],
    },
    {
      id: "unit-01-ex3",
      type: "fill-blank",
      question: "我___法國人。(Je suis français.)",
      correctAnswer: "是",
      options: ["是", "不", "好", "來"],
      optionsHint: ["shì", "bù", "hǎo", "lái"],
      optionsReading: ["ㄕˋ", "ㄅㄨˋ", "ㄏㄠˇ", "ㄌㄞˊ"],
      hint: "Quel verbe signifie « être » ?",
    },
    {
      id: "unit-01-ex4",
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
      id: "unit-01-ex5",
      type: "translate",
      question: "Que signifie 你好嗎 ?",
      correctAnswer: "Comment vas-tu ? / Tu vas bien ?",
      options: [
        "Comment vas-tu ? / Tu vas bien ?",
        "Bonjour !",
        "Au revoir !",
        "Merci beaucoup !",
      ],
      hint: "nǐ hǎo ma",
    },
    {
      id: "unit-01-ex6",
      type: "fill-blank",
      question: "我___喜歡。(Je n'aime pas.)",
      correctAnswer: "不",
      options: ["不", "是", "嗎", "好"],
      optionsHint: ["bù", "shì", "ma", "hǎo"],
      optionsReading: ["ㄅㄨˋ", "ㄕˋ", "ㄇㄚ", "ㄏㄠˇ"],
      hint: "Quel mot exprime la négation ?",
    },
    {
      id: "unit-01-ex7",
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
      id: "unit-01-ex8",
      type: "translate",
      question: "Comment transforme-t-on « 你是法國人 » en question ?",
      correctAnswer: "你是法國人嗎？",
      options: [
        "你是法國人嗎？",
        "嗎你是法國人？",
        "你是法國人不？",
        "是你法國人嗎？",
      ],
      optionsHint: [
        "nǐ shì Fǎguó rén ma?",
        "ma nǐ shì Fǎguó rén?",
        "nǐ shì Fǎguó rén bù?",
        "shì nǐ Fǎguó rén ma?",
      ],
      optionsReading: ["ㄋㄧˇ ㄕˋ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ ㄇㄚ?", "ㄇㄚ ㄋㄧˇ ㄕˋ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ?", "ㄋㄧˇ ㄕˋ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ ㄅㄨˋ?", "ㄕˋ ㄋㄧˇ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄣˊ ㄇㄚ?"],
      hint: "nǐ shì Fǎguó rén",
    },
  ],

  requiredScore: 0.6,
  prerequisites: [],
};
