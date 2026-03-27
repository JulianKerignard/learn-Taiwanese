import type { CourseUnit } from "@/types/course";

export const unit73: CourseUnit = {
  id: "unit-73",
  number: 73,
  title: "Les complements directionnels",
  titleZh: "趨向補語",
  chapter: 3,
  description:
    "Apprenez les complements directionnels : 來/去 pour indiquer le mouvement vers ou loin du locuteur, les combinaisons complexes (走進來, 跑出去), et les usages figures (想起來 = se souvenir). Le locuteur est toujours le point de reference.",
  icon: "🧭",

  sections: [
    {
      title: "來 et 去 — vers moi ou loin de moi",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, le mouvement se decrit par rapport au locuteur. 來 indique un mouvement VERS le locuteur. 去 indique un mouvement LOIN du locuteur. On combine une direction (進 entrer, 出 sortir, 上 monter, 下 descendre, 回 revenir, 過 traverser) avec 來 ou 去.",
        },
        {
          type: "example",
          chinese: "進來 vs 進去",
          pinyin: "jìn lái vs jìn qù",
          translation: "entrer (vers ici) vs entrer (vers la-bas)",
          content:
            "進來 = entre ici (vers moi). 進去 = entre la-bas (loin de moi). La direction est la meme (entrer), mais la perspective change.",
        },
        {
          type: "example",
          chinese: "出來 vs 出去",
          pinyin: "chū lái vs chū qù",
          translation: "sortir (vers ici) vs sortir (vers la-bas)",
          content:
            "出來 = sors ici (vers moi). 出去 = sors (de chez moi, loin). « Sors de chez moi ! » = 出去！",
        },
        {
          type: "example",
          chinese: "上來 vs 上去",
          pinyin: "shàng lái vs shàng qù",
          translation: "monter (vers ici) vs monter (vers la-haut)",
          content:
            "上來 = monte ici (je suis en haut). 上去 = monte la-haut (je suis en bas).",
        },
        {
          type: "example",
          chinese: "下來 vs 下去",
          pinyin: "xià lái vs xià qù",
          translation: "descendre (vers ici) vs descendre (vers en bas)",
          content:
            "下來 = descends ici (je suis en bas). 下去 = descends (je suis en haut).",
        },
        {
          type: "example",
          chinese: "回來 vs 回去",
          pinyin: "huí lái vs huí qù",
          translation: "revenir (vers ici) vs retourner (vers la-bas)",
          content:
            "回來 = revenir (vers le lieu ou je suis). 回去 = retourner (vers un autre lieu). 你什麼時候回來？ (Tu reviens quand ?)",
        },
        {
          type: "example",
          chinese: "過來 vs 過去",
          pinyin: "guò lái vs guò qù",
          translation: "venir (vers ici) vs aller (vers la-bas)",
          content:
            "過來 = viens ici (traverse vers moi). 過去 = va la-bas (traverse loin de moi). 你過來一下！ (Viens ici un instant !)",
        },
        {
          type: "tip",
          content:
            "Le locuteur est TOUJOURS le point de reference. Si je suis dans la maison et que tu es dehors : 進來 (entre vers moi). Si je suis dehors et que tu es dans la maison : 出來 (sors vers moi).",
        },
      ],
    },
    {
      title: "Combinaisons complexes",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "On peut combiner un verbe d'action + une direction + 來/去 pour creer des descriptions de mouvement tres precises. Structure : Verbe + Direction + 來/去. Le verbe decrit comment on bouge, la direction indique ou, et 來/去 indique par rapport a qui.",
        },
        {
          type: "example",
          chinese: "走進來",
          pinyin: "zǒu jìn lái",
          translation: "marcher pour entrer ici",
          content:
            "走 (marcher) + 進 (entrer) + 來 (vers moi). Quelqu'un marche et entre dans la piece ou je suis.",
        },
        {
          type: "example",
          chinese: "跑出去",
          pinyin: "pǎo chū qù",
          translation: "courir pour sortir (loin de moi)",
          content:
            "跑 (courir) + 出 (sortir) + 去 (loin de moi). Quelqu'un court et sort de l'endroit ou je suis.",
        },
        {
          type: "example",
          chinese: "拿上來",
          pinyin: "ná shàng lái",
          translation: "prendre et monter (vers moi)",
          content:
            "拿 (prendre) + 上 (monter) + 來 (vers moi). Quelqu'un prend un objet et le monte jusqu'a moi (je suis en haut).",
        },
        {
          type: "example",
          chinese: "帶回去",
          pinyin: "dài huí qù",
          translation: "emporter en repartant",
          content:
            "帶 (apporter) + 回 (retourner) + 去 (loin de moi). Emporter quelque chose en retournant la-bas.",
        },
        {
          type: "example",
          chinese: "搬進來",
          pinyin: "bān jìn lái",
          translation: "demenager pour entrer ici",
          content:
            "搬 (demenager/porter) + 進 (entrer) + 來 (vers moi). Porter quelque chose de lourd pour l'amener a l'interieur.",
        },
        {
          type: "warning",
          content:
            "Quand il y a un lieu apres le verbe directionnel, il se place ENTRE la direction et 來/去 : 走進教室來 (marcher pour entrer dans la salle de classe vers ici). Le lieu s'insere dans la structure.",
        },
      ],
    },
    {
      title: "Usages figures",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Beaucoup de complements directionnels ont des sens figures (abstraits) en plus de leur sens physique. Ces usages sont extremement courants dans la conversation quotidienne.",
        },
        {
          type: "example",
          chinese: "想起來",
          pinyin: "xiǎng qǐ lái",
          translation: "se souvenir soudain",
          content:
            "想 (penser) + 起來 (se lever). Image : un souvenir « se leve » dans l'esprit. 我想起來了！ (Ca y est, je me souviens !)",
        },
        {
          type: "example",
          chinese: "看出來",
          pinyin: "kàn chū lái",
          translation: "realiser en regardant, deviner",
          content:
            "看 (regarder) + 出來 (sortir vers ici). Image : la verite « sort » de ce qu'on regarde. 我看出來他不開心。 (J'ai remarque qu'il n'est pas content.)",
        },
        {
          type: "example",
          chinese: "說下去",
          pinyin: "shuō xià qù",
          translation: "continuer a parler",
          content:
            "說 (parler) + 下去 (descendre). Image : la parole « continue vers le bas », donc continue. 請你說下去。 (Continue, s'il te plait.)",
        },
        {
          type: "example",
          chinese: "冷起來",
          pinyin: "lěng qǐ lái",
          translation: "commencer a faire froid",
          content:
            "冷 (froid) + 起來 (se lever). 起來 avec un adjectif = commencer a devenir. 天氣冷起來了。 (Il commence a faire froid.)",
        },
        {
          type: "tip",
          content:
            "起來 figure = commencer a, se mettre a. 下去 figure = continuer a. Ce sont les deux usages figures les plus frequents. 笑起來 (se mettre a rire), 住下去 (continuer a habiter).",
        },
      ],
    },
  ],

  dialogue: {
    context: "Julian demenage dans un nouvel appartement a Taipei. Son ami taiwanais l'aide.",
    lines: [
      {
        speaker: "Ami",
        chinese: "這個箱子，搬上去還是搬下來？",
        pinyin: "zhège xiāngzi, bān shàng qù háishì bān xià lái?",
        french: "Cette boite, on la monte ou on la descend ?",
      },
      {
        speaker: "Julian",
        chinese: "搬上去，放在二樓的房間。",
        pinyin: "bān shàng qù, fàng zài èr lóu de fángjiān.",
        french: "Monte-la, pose-la dans la chambre au deuxieme etage.",
      },
      {
        speaker: "Ami",
        chinese: "好。你的貓跑出去了！",
        pinyin: "hǎo. nǐ de māo pǎo chū qù le!",
        french: "OK. Ton chat s'est enfui dehors !",
      },
      {
        speaker: "Julian",
        chinese: "啊！你可以把牠帶回來嗎？",
        pinyin: "a! nǐ kěyǐ bǎ tā dài huí lái ma?",
        french: "Ah ! Tu peux le ramener ?",
      },
      {
        speaker: "Ami",
        chinese: "牠跑進去隔壁的院子了。我過去看看。",
        pinyin: "tā pǎo jìn qù gébì de yuànzi le. wǒ guò qù kànkan.",
        french: "Il a couru dans le jardin du voisin. J'y vais voir.",
      },
      {
        speaker: "Julian",
        chinese: "我想起來了，牠喜歡那邊的花園！",
        pinyin: "wǒ xiǎng qǐ lái le, tā xǐhuān nàbiān de huāyuán!",
        french: "Ah oui, je me souviens, il aime le jardin la-bas !",
      },
    ],
  },

  keyPoints: [
    "來 = mouvement vers le locuteur, 去 = mouvement loin du locuteur — le locuteur est toujours le point de reference",
    "Structure combinee : Verbe + Direction + 來/去 (走進來 = marcher pour entrer vers ici)",
    "起來 figure = commencer a / se souvenir (想起來), 下去 figure = continuer a (說下去)",
    "Le lieu se place entre la direction et 來/去 : 走進教室來 (entrer dans la classe vers ici)",
  ],

  vocabulary: [
    {
      character: "進來",
      pinyin: "jìn lái",
      zhuyin: "ㄐㄧㄣˋ ㄌㄞˊ",
      french: "entrer (vers ici)",
      english: "to come in",
      example: {
        sentence: "請進來！",
        pinyin: "qǐng jìn lái!",
        translation: "Entrez, s'il vous plait !",
      },
    },
    {
      character: "出去",
      pinyin: "chū qù",
      zhuyin: "ㄔㄨ ㄑㄩˋ",
      french: "sortir (loin d'ici)",
      english: "to go out",
      example: {
        sentence: "我想出去走走。",
        pinyin: "wǒ xiǎng chū qù zǒuzou.",
        translation: "Je voudrais sortir me promener.",
      },
    },
    {
      character: "上來",
      pinyin: "shàng lái",
      zhuyin: "ㄕㄤˋ ㄌㄞˊ",
      french: "monter (vers ici)",
      english: "to come up",
      example: {
        sentence: "你上來吧！",
        pinyin: "nǐ shàng lái ba!",
        translation: "Monte !",
      },
    },
    {
      character: "下去",
      pinyin: "xià qù",
      zhuyin: "ㄒㄧㄚˋ ㄑㄩˋ",
      french: "descendre (loin d'ici) / continuer",
      english: "to go down / to continue",
      example: {
        sentence: "請說下去。",
        pinyin: "qǐng shuō xià qù.",
        translation: "Continue, s'il te plait.",
      },
    },
    {
      character: "回來",
      pinyin: "huí lái",
      zhuyin: "ㄏㄨㄟˊ ㄌㄞˊ",
      french: "revenir (vers ici)",
      english: "to come back",
      example: {
        sentence: "你什麼時候回來？",
        pinyin: "nǐ shénme shíhòu huí lái?",
        translation: "Tu reviens quand ?",
      },
    },
    {
      character: "過去",
      pinyin: "guò qù",
      zhuyin: "ㄍㄨㄛˋ ㄑㄩˋ",
      french: "aller (vers la-bas) / le passe",
      english: "to go over / the past",
      example: {
        sentence: "我過去看看。",
        pinyin: "wǒ guò qù kànkan.",
        translation: "Je vais aller voir.",
      },
    },
    {
      character: "起來",
      pinyin: "qǐ lái",
      zhuyin: "ㄑㄧˇ ㄌㄞˊ",
      french: "se lever / commencer a",
      english: "to get up / to start (doing)",
      example: {
        sentence: "他笑起來了。",
        pinyin: "tā xiào qǐ lái le.",
        translation: "Il s'est mis a rire.",
      },
    },
    {
      character: "下來",
      pinyin: "xià lái",
      zhuyin: "ㄒㄧㄚˋ ㄌㄞˊ",
      french: "descendre (vers ici)",
      english: "to come down",
      example: {
        sentence: "你可以下來嗎？",
        pinyin: "nǐ kěyǐ xià lái ma?",
        translation: "Tu peux descendre ?",
      },
    },
    {
      character: "過來",
      pinyin: "guò lái",
      zhuyin: "ㄍㄨㄛˋ ㄌㄞˊ",
      french: "venir (vers ici)",
      english: "to come over",
      example: {
        sentence: "你過來一下！",
        pinyin: "nǐ guò lái yíxià!",
        translation: "Viens ici un instant !",
      },
    },
    {
      character: "回去",
      pinyin: "huí qù",
      zhuyin: "ㄏㄨㄟˊ ㄑㄩˋ",
      french: "retourner (loin d'ici)",
      english: "to go back",
      example: {
        sentence: "我要回去了。",
        pinyin: "wǒ yào huí qù le.",
        translation: "Je dois rentrer.",
      },
    },
    {
      character: "出來",
      pinyin: "chū lái",
      zhuyin: "ㄔㄨ ㄌㄞˊ",
      french: "sortir (vers ici) / apparaitre",
      english: "to come out",
      example: {
        sentence: "太陽出來了！",
        pinyin: "tàiyáng chū lái le!",
        translation: "Le soleil est sorti !",
      },
    },
    {
      character: "進去",
      pinyin: "jìn qù",
      zhuyin: "ㄐㄧㄣˋ ㄑㄩˋ",
      french: "entrer (loin d'ici)",
      english: "to go in",
      example: {
        sentence: "他走進去了。",
        pinyin: "tā zǒu jìn qù le.",
        translation: "Il est entre (a l'interieur).",
      },
    },
  ],

  exercises: [
    {
      id: "u73-ex1",
      type: "fill-blank",
      question: "請___！(Entrez, s'il vous plait ! — je suis a l'interieur)",
      correctAnswer: "進來",
      options: ["進來", "進去", "出來", "出去"],
      optionsHint: ["jìn lái", "jìn qù", "chū lái", "chū qù"],
      optionsZhuyin: ["ㄐㄧㄣˋ ㄌㄞˊ", "ㄐㄧㄣˋ ㄑㄩˋ", "ㄔㄨ ㄌㄞˊ", "ㄔㄨ ㄑㄩˋ"],
      hint: "Le locuteur est a l'interieur, donc le mouvement va VERS lui.",
    },
    {
      id: "u73-ex2",
      type: "comprehension",
      question: "Si je suis en bas et que je dis a quelqu'un de monter, je dis :",
      correctAnswer: "上來 — monter vers moi (en bas → en haut ou je suis... non, je suis en bas)",
      options: [
        "上來 — monter vers moi (je suis en haut)",
        "上去 — monter vers la-haut (je suis en bas)",
        "下來 — descendre vers moi",
        "下去 — descendre vers la-bas",
      ],
      optionsHint: [
        "shàng lái — monter vers moi",
        "shàng qù — monter vers la-haut",
        "xià lái — descendre vers moi",
        "xià qù — descendre vers la-bas",
      ],
      optionsZhuyin: [
        "ㄕㄤˋ ㄌㄞˊ — monter vers moi",
        "ㄕㄤˋ ㄑㄩˋ — monter la-haut",
        "ㄒㄧㄚˋ ㄌㄞˊ — descendre vers moi",
        "ㄒㄧㄚˋ ㄑㄩˋ — descendre la-bas",
      ],
    },
    {
      id: "u73-ex3",
      type: "translate",
      question: "Comment dit-on « Le chat a couru dehors » (je suis a l'interieur) ?",
      correctAnswer: "貓跑出去了。",
      options: ["貓跑出去了。", "貓跑出來了。", "貓跑進去了。", "貓出去跑了。"],
      optionsHint: [
        "māo pǎo chū qù le.",
        "māo pǎo chū lái le.",
        "māo pǎo jìn qù le.",
        "māo chū qù pǎo le.",
      ],
      optionsZhuyin: [
        "ㄇㄠ ㄆㄠˇ ㄔㄨ ㄑㄩˋ ㄌㄜ。",
        "ㄇㄠ ㄆㄠˇ ㄔㄨ ㄌㄞˊ ㄌㄜ。",
        "ㄇㄠ ㄆㄠˇ ㄐㄧㄣˋ ㄑㄩˋ ㄌㄜ。",
        "ㄇㄠ ㄔㄨ ㄑㄩˋ ㄆㄠˇ ㄌㄜ。",
      ],
    },
    {
      id: "u73-ex4",
      type: "fill-blank",
      question: "我想___了，他叫王先生！(Ca y est, je me souviens !)",
      correctAnswer: "起來",
      options: ["起來", "出來", "下去", "回來"],
      optionsHint: ["qǐ lái", "chū lái", "xià qù", "huí lái"],
      optionsZhuyin: ["ㄑㄧˇ ㄌㄞˊ", "ㄔㄨ ㄌㄞˊ", "ㄒㄧㄚˋ ㄑㄩˋ", "ㄏㄨㄟˊ ㄌㄞˊ"],
      hint: "想 + ? = se souvenir soudain (sens figure).",
    },
    {
      id: "u73-ex5",
      type: "translate",
      question: "Comment dit-on « Tu reviens quand ? » ?",
      correctAnswer: "你什麼時候回來？",
      options: [
        "你什麼時候回來？",
        "你什麼時候回去？",
        "你什麼時候過來？",
        "你什麼時候出去？",
      ],
      optionsHint: [
        "nǐ shénme shíhòu huí lái?",
        "nǐ shénme shíhòu huí qù?",
        "nǐ shénme shíhòu guò lái?",
        "nǐ shénme shíhòu chū qù?",
      ],
      optionsZhuyin: [
        "ㄋㄧˇ ㄕㄣˊ ㄇㄜ ㄕˊ ㄏㄡˋ ㄏㄨㄟˊ ㄌㄞˊ？",
        "ㄋㄧˇ ㄕㄣˊ ㄇㄜ ㄕˊ ㄏㄡˋ ㄏㄨㄟˊ ㄑㄩˋ？",
        "ㄋㄧˇ ㄕㄣˊ ㄇㄜ ㄕˊ ㄏㄡˋ ㄍㄨㄛˋ ㄌㄞˊ？",
        "ㄋㄧˇ ㄕㄣˊ ㄇㄜ ㄕˊ ㄏㄡˋ ㄔㄨ ㄑㄩˋ？",
      ],
    },
    {
      id: "u73-ex6",
      type: "comprehension",
      question: "Que signifie 說下去 ?",
      correctAnswer: "Continuer a parler (sens figure de 下去)",
      options: [
        "Continuer a parler (sens figure de 下去)",
        "Parler en descendant",
        "Arreter de parler",
        "Parler plus bas",
      ],
      optionsHint: [
        "shuō xià qù — continuer",
        "shuō xià qù — descendre",
        "shuō xià qù — arreter",
        "shuō xià qù — plus bas",
      ],
      optionsZhuyin: [
        "ㄕㄨㄛ ㄒㄧㄚˋ ㄑㄩˋ — continuer",
        "ㄕㄨㄛ ㄒㄧㄚˋ ㄑㄩˋ — descendre",
        "ㄕㄨㄛ ㄒㄧㄚˋ ㄑㄩˋ — arreter",
        "ㄕㄨㄛ ㄒㄧㄚˋ ㄑㄩˋ — plus bas",
      ],
    },
    {
      id: "u73-ex7",
      type: "fill-blank",
      question: "他走___教室___了。(Il est entre dans la salle de classe en marchant — je suis dans la classe.)",
      correctAnswer: "進...來",
      options: ["進...來", "進...去", "出...來", "出...去"],
      optionsHint: ["jìn...lái", "jìn...qù", "chū...lái", "chū...qù"],
      optionsZhuyin: ["ㄐㄧㄣˋ...ㄌㄞˊ", "ㄐㄧㄣˋ...ㄑㄩˋ", "ㄔㄨ...ㄌㄞˊ", "ㄔㄨ...ㄑㄩˋ"],
      hint: "Le locuteur est dans la classe, donc le mouvement va vers lui.",
    },
    {
      id: "u73-ex8",
      type: "translate",
      question: "Comment dit-on « Il commence a faire froid » ?",
      correctAnswer: "天氣冷起來了。",
      options: [
        "天氣冷起來了。",
        "天氣冷下去了。",
        "天氣冷出來了。",
        "天氣冷回來了。",
      ],
      optionsHint: [
        "tiānqì lěng qǐ lái le.",
        "tiānqì lěng xià qù le.",
        "tiānqì lěng chū lái le.",
        "tiānqì lěng huí lái le.",
      ],
      optionsZhuyin: [
        "ㄊㄧㄢ ㄑㄧˋ ㄌㄥˇ ㄑㄧˇ ㄌㄞˊ ㄌㄜ。",
        "ㄊㄧㄢ ㄑㄧˋ ㄌㄥˇ ㄒㄧㄚˋ ㄑㄩˋ ㄌㄜ。",
        "ㄊㄧㄢ ㄑㄧˋ ㄌㄥˇ ㄔㄨ ㄌㄞˊ ㄌㄜ。",
        "ㄊㄧㄢ ㄑㄧˋ ㄌㄥˇ ㄏㄨㄟˊ ㄌㄞˊ ㄌㄜ。",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-72"],
};
