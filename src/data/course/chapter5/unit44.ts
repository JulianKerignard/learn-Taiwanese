import type { CourseUnit } from "@/types/course";

export const unit44: CourseUnit = {
  id: "unit-44",
  number: 44,
  title: "Revision 2 — Consolidation chapitres 3-4",
  titleZh: "複習二——第三、四章總複習",
  chapter: 5,
  description:
    "Unite de revision pure. On revise la grammaire des chapitres 3 et 4 : 了₁, 了₂, 過, 會, les comparaisons (比/更/最), la face (面子) et la politesse.",
  icon: "🔄",

  sections: [
    {
      title: "Rappel grammaire chapitres 3-4",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "POINT 1 — 了₁ (accompli). Se place APRES le verbe, avant le complement. Marque l'accomplissement, PAS le passe. Interdit avec les habitudes, 是, et la negation 沒. 我吃了飯 (j'ai mange). 沒吃 (je n'ai pas mange, sans 了).",
        },
        {
          type: "example",
          chinese: "我買了三本書。",
          pinyin: "wǒ mǎi le sān běn shū.",
          translation: "J'ai achete trois livres.",
          content: "了₁ : Verbe + 了 + quantite + nom.",
        },
        {
          type: "text",
          content:
            "POINT 2 — 了₂ (changement de situation). Se place en FIN de phrase. Marque un changement : quelque chose qui n'etait pas le cas avant l'est maintenant. 我不吃了 (je ne mange plus — changement). 天氣冷了 (le temps est devenu froid).",
        },
        {
          type: "text",
          content:
            "POINT 3 — 過 (experience). « Avoir deja fait qqch dans sa vie ». 我吃過臭豆腐 (j'ai deja mange du tofu puant). Negation : 沒...過 (我沒去過日本, je ne suis jamais alle au Japon).",
        },
        {
          type: "text",
          content:
            "POINT 4 — 會 (futur/capacite). 我明天會去 (j'irai demain). 我會說中文 (je sais parler chinois). Negation : 不會.",
        },
        {
          type: "text",
          content:
            "POINT 5 — Comparaisons. 比 (plus que) : A 比 B + adjectif. 更 (encore plus). 最 (le plus). 台北比台中大 (Taipei est plus grand que Taichung). 台北最大 (Taipei est le plus grand).",
        },
        {
          type: "text",
          content:
            "POINT 6 — Politesse et face (面子). 不好意思 (gene legere), 對不起 (vraie excuse), 抱歉 (formel). Registre formel : 您, 請問. Refus indirect : 可能不行, 我再想想, 下次吧 = non poli.",
        },
        {
          type: "example",
          chinese: "比以前貴了吧？",
          pinyin: "bǐ yǐqián guì le ba?",
          translation: "C'est devenu plus cher qu'avant, non ?",
          content: "Combine : 比 (comparaison) + 了 (changement) + 吧 (supposition douce).",
        },
      ],
    },
    {
      title: "Exercices integres",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Ces exercices combinent plusieurs points de grammaire dans une meme phrase. C'est le niveau de complexite que vous rencontrerez dans les conversations reelles a Taiwan.",
        },
        {
          type: "example",
          chinese: "你去過日本嗎？去過，可是我覺得台灣比日本好玩。",
          pinyin: "nǐ qù guò Rìběn ma? qù guò, kěshì wǒ juéde Táiwān bǐ Rìběn hǎowán.",
          translation: "Tu es deja alle au Japon ? Oui, mais je trouve que Taiwan est plus amusant que le Japon.",
          content: "Combine : 過 (experience) + 比 (comparaison) + opinion 覺得.",
        },
        {
          type: "example",
          chinese: "不好意思，這個比那個便宜嗎？",
          pinyin: "bù hǎo yìsi, zhège bǐ nàge piányi ma?",
          translation: "Excusez-moi, celui-ci est moins cher que celui-la ?",
          content: "Combine : politesse 不好意思 + comparaison 比 + question 嗎.",
        },
        {
          type: "example",
          chinese: "我已經學了六個月的中文了，可是還聽不懂。",
          pinyin: "wǒ yǐjīng xué le liù ge yuè de Zhōngwén le, kěshì hái tīng bù dǒng.",
          translation: "J'apprends le chinois depuis 6 mois, mais je ne comprends toujours pas.",
          content: "Combine : duree 了...了 + connecteur 可是 + resultatif negatif 聽不懂.",
        },
      ],
    },
    {
      title: "Production libre",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "5 mini-situations a resoudre en chinois. Pour chaque situation, construisez la phrase appropriee en combinant les points de grammaire des chapitres 3-4. Verifiez ensuite avec la correction.",
        },
        {
          type: "example",
          chinese: "我吃過臭豆腐，很好吃！",
          pinyin: "wǒ chī guò chòudòufu, hěn hǎochī!",
          translation: "J'ai deja mange du tofu puant, c'est delicieux !",
          content: "Situation 1 : Un ami vous demande si vous avez goute le tofu puant.",
        },
        {
          type: "example",
          chinese: "這件比那件貴，可是比較好看。",
          pinyin: "zhè jiàn bǐ nà jiàn guì, kěshì bǐjiào hǎokàn.",
          translation: "Celui-ci est plus cher que celui-la, mais plus joli.",
          content: "Situation 2 : Vous comparez deux vetements dans un magasin.",
        },
        {
          type: "example",
          chinese: "不好意思，我不會說中文，你會說英文嗎？",
          pinyin: "bù hǎo yìsi, wǒ bú huì shuō Zhōngwén, nǐ huì shuō Yīngwén ma?",
          translation: "Excusez-moi, je ne sais pas parler chinois, vous parlez anglais ?",
          content: "Situation 3 : Vous etes perdu et demandez de l'aide.",
        },
        {
          type: "example",
          chinese: "我來台灣以後，天氣變熱了。",
          pinyin: "wǒ lái Táiwān yǐhòu, tiānqì biàn rè le.",
          translation: "Depuis que je suis arrive a Taiwan, le temps est devenu chaud.",
          content: "Situation 4 : Vous decrivez le changement de meteo depuis votre arrivee.",
        },
        {
          type: "example",
          chinese: "我覺得台灣的夜市是最好玩的。",
          pinyin: "wǒ juéde Táiwān de yèshì shì zuì hǎowán de.",
          translation: "Je trouve que les marches de nuit de Taiwan sont les plus amusants.",
          content: "Situation 5 : Vous donnez votre opinion sur les marches de nuit.",
        },
      ],
    },
  ],

  keyPoints: [
    "了₁ (accompli) vs 了₂ (changement) : meme caractere, positions et sens differents",
    "過 pour les experiences de vie, 會 pour le futur et les capacites",
    "比/更/最 pour comparer — ne pas ajouter de 很 dans A 比 B + adjectif",
    "La politesse est un systeme : 不好意思 (leger) < 對不起 (serieux) < 抱歉 (formel)",
  ],

  vocabulary: [],

  exercises: [
    {
      id: "u44-ex1",
      type: "translate",
      question: "Comment dit-on « C'est devenu plus cher qu'avant, non ? »",
      correctAnswer: "比以前貴了吧？",
      options: [
        "比以前貴了吧？",
        "以前很貴了吧？",
        "比以前貴嗎了？",
        "貴了比以前吧？",
      ],
    },
    {
      id: "u44-ex2",
      type: "fill-blank",
      question: "我吃___臭豆腐。(J'ai deja mange du tofu puant dans ma vie.)",
      correctAnswer: "過",
      options: ["過", "了", "會", "在"],
      hint: "Quelle particule marque l'experience ?",
    },
    {
      id: "u44-ex3",
      type: "comprehension",
      question: "Quelle est la difference entre « 我不吃了 » et « 我沒吃 » ?",
      correctAnswer: "我不吃了 = je ne mange plus (changement). 我沒吃 = je n'ai pas mange (negation du passe).",
      options: [
        "我不吃了 = je ne mange plus (changement). 我沒吃 = je n'ai pas mange (negation du passe).",
        "Ils signifient la meme chose",
        "我不吃了 = je ne mangerai pas. 我沒吃 = je ne mange pas.",
        "我不吃了 est poli, 我沒吃 est familier.",
      ],
    },
    {
      id: "u44-ex4",
      type: "translate",
      question: "Comment dit-on « Je trouve que Taiwan est plus amusant que le Japon » ?",
      correctAnswer: "我覺得台灣比日本好玩",
      options: [
        "我覺得台灣比日本好玩",
        "我覺得台灣很比日本好玩",
        "台灣比日本我覺得好玩",
        "我覺得台灣更日本好玩",
      ],
    },
    {
      id: "u44-ex5",
      type: "reorder",
      question: "Remettez dans l'ordre : 了 / 六個月 / 學 / 我 / 中文 / 的 / 了 (J'apprends le chinois depuis 6 mois.)",
      correctAnswer: "我學了六個月的中文了",
      options: [
        "我學了六個月的中文了",
        "我了學六個月的中文了",
        "我中文學了六個月的了",
        "六個月我學了的中文了",
      ],
    },
    {
      id: "u44-ex6",
      type: "comprehension",
      question: "Un Taiwanais vous dit « 可能不行 ». Que veut-il dire ?",
      correctAnswer: "C'est un refus poli — il dit non sans le dire directement",
      options: [
        "C'est un refus poli — il dit non sans le dire directement",
        "Il hesite vraiment et va peut-etre accepter",
        "Il demande si c'est possible",
        "Il dit que c'est impossible pour tout le monde",
      ],
    },
    {
      id: "u44-ex7",
      type: "fill-blank",
      question: "台北是台灣___大的城市。(Taipei est la plus grande ville de Taiwan.)",
      correctAnswer: "最",
      options: ["最", "比", "更", "很"],
      optionsHint: ["zuì", "bǐ", "gèng", "hěn"],
      optionsZhuyin: ["ㄗㄨㄟˋ", "ㄅㄧˇ", "ㄍㄥˋ", "ㄏㄣˇ"],
      hint: "Quel mot exprime le superlatif ?",
      hintZhuyin: "Quel mot exprime le superlatif ?",
    },
    {
      id: "u44-ex8",
      type: "translate",
      question: "Comment dit-on « Je ne suis jamais alle au Japon » ?",
      correctAnswer: "我沒去過日本",
      options: [
        "我沒去過日本",
        "我不去過日本",
        "我沒去了日本",
        "我不會去日本",
      ],
      optionsHint: ["wǒ méi qù guò Rìběn", "wǒ bú qù guò Rìběn", "wǒ méi qù le Rìběn", "wǒ bú huì qù Rìběn"],
      optionsZhuyin: ["ㄨㄛˇ ㄇㄟˊ ㄑㄩˋ ㄍㄨㄛˋ ㄖˋ ㄅㄣˇ", "ㄨㄛˇ ㄅㄨˊ ㄑㄩˋ ㄍㄨㄛˋ ㄖˋ ㄅㄣˇ", "ㄨㄛˇ ㄇㄟˊ ㄑㄩˋ ㄌㄜ˙ ㄖˋ ㄅㄣˇ", "ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ ㄑㄩˋ ㄖˋ ㄅㄣˇ"],
    },
    {
      id: "u44-ex9",
      type: "comprehension",
      question: "La phrase « 天氣冷了 » signifie :",
      correctAnswer: "Le temps est devenu froid (changement de situation avec 了₂)",
      options: [
        "Le temps est devenu froid (changement de situation avec 了₂)",
        "Le temps etait froid (passe)",
        "Le temps sera froid (futur)",
        "Le temps est froid (etat permanent)",
      ],
    },
    {
      id: "u44-ex10",
      type: "reorder",
      question: "Remettez dans l'ordre : 嗎 / 說 / 你 / 英文 / 會 (Tu parles anglais ?)",
      correctAnswer: "你會說英文嗎？",
      options: [
        "你會說英文嗎？",
        "你說會英文嗎？",
        "會你說英文嗎？",
        "你英文會說嗎？",
      ],
      optionsHint: ["nǐ huì shuō Yīngwén ma?", "nǐ shuō huì Yīngwén ma?", "huì nǐ shuō Yīngwén ma?", "nǐ Yīngwén huì shuō ma?"],
      optionsZhuyin: ["ㄋㄧˇ ㄏㄨㄟˋ ㄕㄨㄛ ㄧㄥ ㄨㄣˊ ㄇㄚ˙？", "ㄋㄧˇ ㄕㄨㄛ ㄏㄨㄟˋ ㄧㄥ ㄨㄣˊ ㄇㄚ˙？", "ㄏㄨㄟˋ ㄋㄧˇ ㄕㄨㄛ ㄧㄥ ㄨㄣˊ ㄇㄚ˙？", "ㄋㄧˇ ㄧㄥ ㄨㄣˊ ㄏㄨㄟˋ ㄕㄨㄛ ㄇㄚ˙？"],
    },
    {
      id: "u44-ex11",
      type: "fill-blank",
      question: "___，請問這個多少錢？(Excusez-moi, combien ca coute ?)",
      correctAnswer: "不好意思",
      options: ["不好意思", "對不起", "抱歉", "算了"],
      optionsHint: ["bù hǎo yìsi", "duìbùqǐ", "bàoqiàn", "suàn le"],
      optionsZhuyin: ["ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ˙", "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ", "ㄅㄠˋ ㄑㄧㄢˋ", "ㄙㄨㄢˋ ㄌㄜ˙"],
      hint: "La formule la plus courante pour deranger poliment.",
      hintZhuyin: "La formule la plus courante pour deranger poliment.",
    },
    {
      id: "u44-ex12",
      type: "translate",
      question: "Comment dit-on « Depuis que j'habite a Taiwan, j'aime le bubble tea » ?",
      correctAnswer: "我住在台灣以後，就喜歡珍珠奶茶了",
      options: [
        "我住在台灣以後，就喜歡珍珠奶茶了",
        "我住台灣了，喜歡了珍珠奶茶",
        "台灣住以後，珍珠奶茶喜歡了",
        "我會住台灣喜歡珍珠奶茶",
      ],
      optionsHint: ["wǒ zhù zài Táiwān yǐhòu, jiù xǐhuān zhēnzhū nǎichá le", "wǒ zhù Táiwān le, xǐhuān le zhēnzhū nǎichá", "Táiwān zhù yǐhòu, zhēnzhū nǎichá xǐhuān le", "wǒ huì zhù Táiwān xǐhuān zhēnzhū nǎichá"],
      optionsZhuyin: ["ㄨㄛˇ ㄓㄨˋ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄧˇ ㄏㄡˋ，ㄐㄧㄡˋ ㄒㄧˇ ㄏㄨㄢ ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄌㄜ˙", "ㄨㄛˇ ㄓㄨˋ ㄊㄞˊ ㄨㄢ ㄌㄜ˙，ㄒㄧˇ ㄏㄨㄢ ㄌㄜ˙ ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ", "ㄊㄞˊ ㄨㄢ ㄓㄨˋ ㄧˇ ㄏㄡˋ，ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄒㄧˇ ㄏㄨㄢ ㄌㄜ˙", "ㄨㄛˇ ㄏㄨㄟˋ ㄓㄨˋ ㄊㄞˊ ㄨㄢ ㄒㄧˇ ㄏㄨㄢ ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ"],
    },
  ],

  requiredScore: 0.7,
  prerequisites: ["unit-27"],
};
