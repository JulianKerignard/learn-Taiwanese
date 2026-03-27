import type { CourseUnit } from "@/types/course";

export const unit87: CourseUnit = {
  id: "unit-87",
  number: 87,
  title: "Révision grammaire HSK 2",
  titleZh: "HSK二級文法總複習",
  chapter: 5,
  description:
    "Récapitulatif complet de toutes les structures grammaticales du HSK 2 : les 10 structures essentielles, les pièges courants des francophones, et des exercices croisés mélangeant toutes les structures.",
  icon: "📝",

  sections: [
    {
      title: "Les 10 structures essentielles",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Voici les 10 structures grammaticales clés du HSK 2. Maîtrisez-les toutes et vous aurez une base solide pour la conversation quotidienne et la lecture de textes simples.",
        },
        {
          type: "text",
          content:
            "1) 了₁ (accompli) — Après le verbe, indique que l'action est achevée. 我吃了飯 (j'ai mangé). 了₂ (changement d'état) — En fin de phrase, indique un nouvel état. 天氣冷了 (il fait froid maintenant). Les deux peuvent coexister : 我吃了三碗飯了 (j'ai déjà mangé trois bols).",
        },
        {
          type: "example",
          chinese: "他已經走了。/ 下雨了！",
          pinyin: "tā yǐjīng zǒu le. / xià yǔ le!",
          translation: "Il est déjà parti. / Il pleut (maintenant) !",
          content: "Premier : 了₁ accompli. Deuxième : 了₂ changement d'état.",
        },
        {
          type: "text",
          content:
            "2) 過 (expérience) — Après le verbe, indique qu'on a fait quelque chose au moins une fois. 我去過台灣 (je suis déjà allé à Taïwan). Négation : 沒 + V + 過.",
        },
        {
          type: "example",
          chinese: "你看過這部電影嗎？沒有，我沒看過。",
          pinyin: "nǐ kàn guò zhè bù diànyǐng ma? méiyǒu, wǒ méi kàn guò.",
          translation: "Tu as déjà vu ce film ? Non, je ne l'ai jamais vu.",
          content: "過 pour l'expérience. 沒 + V + 過 pour la négation.",
        },
        {
          type: "text",
          content:
            "3) 會 (futur/capacité) — Capacité apprise : 我會游泳 (je sais nager). Futur probable : 明天會下雨 (il va pleuvoir demain). Négation : 不會.",
        },
        {
          type: "text",
          content:
            "4) 比/更/最 (comparaison) — A 比 B + adj : 台北比台南大. 更 = encore plus : 高雄更熱. 最 = le plus : 台北是最大的城市. 沒有...那麼 = pas aussi...que.",
        },
        {
          type: "example",
          chinese: "他比我高，但是我跑得比他快。",
          pinyin: "tā bǐ wǒ gāo, dànshì wǒ pǎo de bǐ tā kuài.",
          translation: "Il est plus grand que moi, mais je cours plus vite que lui.",
          content: "比 pour comparer. 跑得 + comparaison pour la manière.",
        },
        {
          type: "text",
          content:
            "5) 把 (agir sur un objet) — S + 把 + objet + V + complément. Met l'accent sur le résultat de l'action sur l'objet. 把門關上 (ferme la porte). Le verbe DOIT avoir un complément.",
        },
        {
          type: "text",
          content:
            "6) 被 (passif) — S + 被 + (agent) + V + complément. 我的手機被偷了 (mon téléphone a été volé). Souvent pour des événements négatifs ou subis.",
        },
        {
          type: "example",
          chinese: "蛋糕被弟弟吃完了。",
          pinyin: "dàngāo bèi dìdi chī wán le.",
          translation: "Le gâteau a été entièrement mangé par mon petit frère.",
          content: "被 + agent + V + résultatif. 吃完 = finir de manger.",
        },
        {
          type: "text",
          content:
            "7) 正在...呢 (progressif) — S + 正在 + V + 呢. Indique une action en cours. 我正在吃飯呢 (je suis en train de manger). On peut omettre 正 ou 呢.",
        },
        {
          type: "text",
          content:
            "8) V得/V不 + résultatif (potentiel) — Exprime la possibilité/impossibilité d'atteindre un résultat. 看得懂 (pouvoir comprendre en regardant/lisant). 聽不懂 (ne pas comprendre en écoutant). 吃得完 / 吃不完 (pouvoir / ne pas pouvoir finir de manger).",
        },
        {
          type: "example",
          chinese: "這本書你看得懂嗎？有些字我看不懂。",
          pinyin: "zhè běn shū nǐ kàn de dǒng ma? yǒuxiē zì wǒ kàn bù dǒng.",
          translation: "Tu comprends ce livre ? Certains caractères je ne les comprends pas.",
          content: "看得懂 = pouvoir comprendre (en lisant). 看不懂 = ne pas comprendre.",
        },
        {
          type: "text",
          content:
            "9) 從...到 / 離...很近(遠) (prépositions spatiales et temporelles) — 從台北到高雄坐高鐵一個半小時 (de Taipei à Kaohsiung en TGV, 1h30). 我家離捷運站很近 (ma maison est proche du MRT).",
        },
        {
          type: "text",
          content:
            "10) Conjonctions avancées — 不但...而且 (non seulement...mais aussi). 只要...就 (du moment que...alors). 雖然...但是 (bien que...mais). 快要...了 / 剛 (sur le point de / venir de).",
        },
        {
          type: "example",
          chinese: "我剛到台灣，快要開始上課了。",
          pinyin: "wǒ gāng dào Táiwān, kuài yào kāishǐ shàngkè le.",
          translation: "Je viens d'arriver à Taïwan, je suis sur le point de commencer les cours.",
          content: "剛 = venir de. 快要...了 = être sur le point de.",
        },
      ],
    },
    {
      title: "Les pièges courants",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Voici les 10 erreurs les plus fréquentes des francophones au niveau HSK 2. Chaque piège est illustré par une phrase incorrecte et sa correction.",
        },
        {
          type: "comparison",
          content:
            "Piège 1 — Confondre 了₁ et 了₂. FAUX : *我吃飯了三碗。CORRECT : 我吃了三碗飯了。了₁ se place juste après le verbe, 了₂ en fin de phrase.",
        },
        {
          type: "comparison",
          content:
            "Piège 2 — Utiliser 了 au lieu de 過 pour l'expérience. FAUX : *你去了日本嗎？(quand ?) CORRECT : 你去過日本嗎？(au moins une fois dans ta vie ?). 了 = action accomplie précise, 過 = expérience générale.",
        },
        {
          type: "comparison",
          content:
            "Piège 3 — Oublier le complément après 把. FAUX : *請把門關。CORRECT : 請把門關上 / 請把門關了。Le verbe dans une structure 把 ne peut pas être nu.",
        },
        {
          type: "comparison",
          content:
            "Piège 4 — Placer le complément de temps au mauvais endroit. FAUX : *我去超市昨天。CORRECT : 我昨天去超市。Le temps se place AVANT le verbe en chinois.",
        },
        {
          type: "comparison",
          content:
            "Piège 5 — Utiliser 不 au lieu de 沒 pour nier le passé. FAUX : *我昨天不去。CORRECT : 我昨天沒去。Pour nier une action passée, on utilise 沒, pas 不.",
        },
        {
          type: "comparison",
          content:
            "Piège 6 — Inverser l'ordre avec 比. FAUX : *法國熱比台灣。CORRECT : 台灣比法國熱。Structure : A (le plus) + 比 + B (le moins) + adjectif.",
        },
        {
          type: "comparison",
          content:
            "Piège 7 — Ajouter 很 avec 比. FAUX : *台灣比法國很熱。CORRECT : 台灣比法國熱 / 台灣比法國熱多了。On n'utilise jamais 很 avec 比.",
        },
        {
          type: "comparison",
          content:
            "Piège 8 — Confondre 得 résultatif et 的 descriptif. FAUX : *他跑的很快。CORRECT : 他跑得很快。得 (de) après un verbe pour décrire la manière. 的 (de) est possessif ou adjectival.",
        },
        {
          type: "comparison",
          content:
            "Piège 9 — Utiliser 被 pour du positif. ATTENTION : 被 est majoritairement pour le négatif/subi. Dire 我被老闆誇了 (j'ai été complimenté par le patron) est possible mais rare. Préférez la voix active pour le positif.",
        },
        {
          type: "comparison",
          content:
            "Piège 10 — Placer la durée avant le verbe (comme en français). FAUX : *我兩年學了中文。CORRECT : 我學了兩年中文 / 我學中文學了兩年。En chinois, la durée se place APRÈS le verbe.",
        },
        {
          type: "tip",
          content:
            "Le piège le plus dangereux pour les francophones est l'ordre des mots. En français, on dit « J'ai étudié le chinois pendant deux ans à Taipei ». En chinois : 我在台北學了兩年中文。L'ordre est : Sujet + Lieu + Verbe + Durée + Objet.",
        },
      ],
    },
    {
      title: "Exercices croisés",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Ces exercices mélangent TOUTES les structures grammaticales vues ci-dessus dans des phrases complexes. C'est le vrai test de votre maîtrise du HSK 2 : pouvoir combiner plusieurs structures dans une seule phrase.",
        },
        {
          type: "example",
          chinese: "雖然我剛來台灣，但是我已經吃過很多台灣小吃了，我覺得比法國的好吃多了。",
          pinyin:
            "suīrán wǒ gāng lái Táiwān, dànshì wǒ yǐjīng chī guò hěn duō Táiwān xiǎochī le, wǒ juéde bǐ Fǎguó de hǎochī duō le.",
          translation:
            "Bien que je vienne d'arriver à Taïwan, j'ai déjà goûté beaucoup de snacks taïwanais, je trouve que c'est bien meilleur qu'en France.",
          content:
            "Combine : 雖然...但是 + 剛 + 過 (expérience) + 已經...了 + 比...多了 (comparaison).",
        },
        {
          type: "example",
          chinese: "只要你把功課做完，就可以出去玩，但是不要太晚回來，因為明天還要上班。",
          pinyin:
            "zhǐyào nǐ bǎ gōngkè zuò wán, jiù kěyǐ chūqù wán, dànshì búyào tài wǎn huílái, yīnwèi míngtiān hái yào shàngbān.",
          translation:
            "Du moment que tu finis tes devoirs, tu peux sortir t'amuser, mais ne rentre pas trop tard, parce que demain il faut encore aller travailler.",
          content:
            "Combine : 只要...就 + 把...做完 + 不要 + 因為...還要.",
        },
      ],
    },
  ],

  dialogue: undefined,

  keyPoints: [
    "了₁ (après le verbe) = accompli vs 了₂ (fin de phrase) = changement d'état. Ils peuvent coexister.",
    "過 = expérience (au moins une fois). Ne pas confondre avec 了 (action accomplie précise).",
    "把 + objet + verbe + COMPLÉMENT obligatoire. Le verbe ne peut jamais être seul.",
    "比 + adjectif : JAMAIS de 很 avec 比. La durée se place APRÈS le verbe, pas avant.",
    "V得/V不 + résultatif pour la possibilité : 看得懂 (comprendre), 聽不懂 (ne pas comprendre).",
  ],

  vocabulary: [],

  exercises: [
    {
      id: "u87-ex1",
      type: "fill-blank",
      question: "我___看過這部電影，不用再看了。(J'ai déjà vu ce film, pas besoin de le revoir.)",
      correctAnswer: "已經",
      options: ["已經", "正在", "快要", "剛"],
      optionsHint: ["yǐjīng", "zhèngzài", "kuài yào", "gāng"],
      optionsZhuyin: ["ㄧˇ ㄐㄧㄥ", "ㄓㄥˋ ㄗㄞˋ", "ㄎㄨㄞˋ ㄧㄠˋ", "ㄍㄤ"],
      hint: "Quel mot signifie 'déjà' et s'utilise avec 了 en fin de phrase ?",
      hintZhuyin: "Quel mot signifie 'déjà' et s'utilise avec 了 en fin de phrase ?",
    },
    {
      id: "u87-ex2",
      type: "translate",
      question: "Corrigez cette phrase : *台灣比法國很熱。",
      correctAnswer: "台灣比法國熱",
      options: [
        "台灣比法國熱",
        "台灣比法國很熱",
        "台灣很比法國熱",
        "很台灣比法國熱",
      ],
      optionsHint: [
        "Táiwān bǐ Fǎguó rè",
        "Táiwān bǐ Fǎguó hěn rè",
        "Táiwān hěn bǐ Fǎguó rè",
        "hěn Táiwān bǐ Fǎguó rè",
      ],
      optionsZhuyin: [
        "ㄊㄞˊ ㄨㄢ ㄅㄧˇ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄜˋ",
        "ㄊㄞˊ ㄨㄢ ㄅㄧˇ ㄈㄚˇ ㄍㄨㄛˊ ㄏㄣˇ ㄖㄜˋ",
        "ㄊㄞˊ ㄨㄢ ㄏㄣˇ ㄅㄧˇ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄜˋ",
        "ㄏㄣˇ ㄊㄞˊ ㄨㄢ ㄅㄧˇ ㄈㄚˇ ㄍㄨㄛˊ ㄖㄜˋ",
      ],
    },
    {
      id: "u87-ex3",
      type: "comprehension",
      question: "Quelle est la différence entre 我去了日本 et 我去過日本 ?",
      correctAnswer: "了 indique une action passée précise (je suis allé au Japon [cette fois]), 過 indique une expérience (je suis déjà allé au Japon [dans ma vie])",
      options: [
        "了 indique une action passée précise (je suis allé au Japon [cette fois]), 過 indique une expérience (je suis déjà allé au Japon [dans ma vie])",
        "Aucune différence, les deux sont interchangeables",
        "了 est pour le futur, 過 est pour le passé",
        "了 est formel, 過 est familier",
      ],
    },
    {
      id: "u87-ex4",
      type: "fill-blank",
      question: "請你___門關上，外面太冷了。(Ferme la porte, il fait trop froid dehors.)",
      correctAnswer: "把",
      options: ["把", "被", "讓", "給"],
      optionsHint: ["bǎ", "bèi", "ràng", "gěi"],
      optionsZhuyin: ["ㄅㄚˇ", "ㄅㄟˋ", "ㄖㄤˋ", "ㄍㄟˇ"],
      hint: "Quelle préposition place l'objet avant le verbe pour agir dessus ?",
      hintZhuyin: "Quelle préposition place l'objet avant le verbe pour agir dessus ?",
    },
    {
      id: "u87-ex5",
      type: "translate",
      question: "Corrigez : *我昨天不去超市。",
      correctAnswer: "我昨天沒去超市",
      options: [
        "我昨天沒去超市",
        "我昨天不去超市",
        "我不昨天去超市",
        "昨天我不去了超市",
      ],
      optionsHint: [
        "wǒ zuótiān méi qù chāoshì",
        "wǒ zuótiān bú qù chāoshì",
        "wǒ bù zuótiān qù chāoshì",
        "zuótiān wǒ bú qù le chāoshì",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄗㄨㄛˊ ㄊㄧㄢ ㄇㄟˊ ㄑㄩˋ ㄔㄠ ㄕˋ",
        "ㄨㄛˇ ㄗㄨㄛˊ ㄊㄧㄢ ㄅㄨˊ ㄑㄩˋ ㄔㄠ ㄕˋ",
        "ㄨㄛˇ ㄅㄨˋ ㄗㄨㄛˊ ㄊㄧㄢ ㄑㄩˋ ㄔㄠ ㄕˋ",
        "ㄗㄨㄛˊ ㄊㄧㄢ ㄨㄛˇ ㄅㄨˊ ㄑㄩˋ ㄌㄜ˙ ㄔㄠ ㄕˋ",
      ],
    },
    {
      id: "u87-ex6",
      type: "reorder",
      question: "Remettez dans l'ordre : « Bien que je vienne d'arriver, j'ai déjà goûté beaucoup de plats. »",
      correctAnswer: "雖然我剛來，但是我已經吃過很多菜了",
      options: [
        "雖然",
        "我剛來",
        "但是",
        "我已經",
        "吃過很多菜",
        "了",
      ],
      optionsHint: [
        "suīrán",
        "wǒ gāng lái",
        "dànshì",
        "wǒ yǐjīng",
        "chī guò hěn duō cài",
        "le",
      ],
      optionsZhuyin: [
        "ㄙㄨㄟ ㄖㄢˊ",
        "ㄨㄛˇ ㄍㄤ ㄌㄞˊ",
        "ㄉㄢˋ ㄕˋ",
        "ㄨㄛˇ ㄧˇ ㄐㄧㄥ",
        "ㄔ ㄍㄨㄛˋ ㄏㄣˇ ㄉㄨㄛ ㄘㄞˋ",
        "ㄌㄜ˙",
      ],
    },
    {
      id: "u87-ex7",
      type: "fill-blank",
      question: "這本書我看___懂，太難了。(Ce livre, je n'arrive pas à le comprendre, c'est trop dur.)",
      correctAnswer: "不",
      options: ["不", "得", "沒", "了"],
      optionsHint: ["bù", "de", "méi", "le"],
      optionsZhuyin: ["ㄅㄨˋ", "ㄉㄜˊ", "ㄇㄟˊ", "ㄌㄜ˙"],
      hint: "Quel mot insère-t-on entre le verbe et le résultatif pour exprimer l'impossibilité ?",
      hintZhuyin: "Quel mot insère-t-on entre le verbe et le résultatif pour exprimer l'impossibilité ?",
    },
    {
      id: "u87-ex8",
      type: "comprehension",
      question: "Pourquoi la phrase *請把門關 est-elle incorrecte ?",
      correctAnswer: "Parce que le verbe après 把 doit obligatoirement avoir un complément (關上, 關了, 關起來, etc.)",
      options: [
        "Parce que le verbe après 把 doit obligatoirement avoir un complément (關上, 關了, 關起來, etc.)",
        "Parce que 把 ne peut pas s'utiliser avec 門",
        "Parce qu'il manque le sujet de la phrase",
        "Parce que 關 n'est pas un vrai verbe",
      ],
    },
    {
      id: "u87-ex9",
      type: "translate",
      question: "Traduisez : « Du moment que tu étudies chaque jour, tu comprendras vite. »",
      correctAnswer: "只要你每天學，就很快會懂",
      options: [
        "只要你每天學，就很快會懂",
        "你每天學只要，很快就會懂",
        "就很快會懂，只要你每天學",
        "每天你只要學，懂就很快會",
      ],
      optionsHint: [
        "zhǐyào nǐ měi tiān xué, jiù hěn kuài huì dǒng",
        "nǐ měi tiān xué zhǐyào, hěn kuài jiù huì dǒng",
        "jiù hěn kuài huì dǒng, zhǐyào nǐ měi tiān xué",
        "měi tiān nǐ zhǐyào xué, dǒng jiù hěn kuài huì",
      ],
      optionsZhuyin: [
        "ㄓˇ ㄧㄠˋ ㄋㄧˇ ㄇㄟˇ ㄊㄧㄢ ㄒㄩㄝˊ ㄐㄧㄡˋ ㄏㄣˇ ㄎㄨㄞˋ ㄏㄨㄟˋ ㄉㄨㄥˇ",
        "ㄋㄧˇ ㄇㄟˇ ㄊㄧㄢ ㄒㄩㄝˊ ㄓˇ ㄧㄠˋ ㄏㄣˇ ㄎㄨㄞˋ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄉㄨㄥˇ",
        "ㄐㄧㄡˋ ㄏㄣˇ ㄎㄨㄞˋ ㄏㄨㄟˋ ㄉㄨㄥˇ ㄓˇ ㄧㄠˋ ㄋㄧˇ ㄇㄟˇ ㄊㄧㄢ ㄒㄩㄝˊ",
        "ㄇㄟˇ ㄊㄧㄢ ㄋㄧˇ ㄓˇ ㄧㄠˋ ㄒㄩㄝˊ ㄉㄨㄥˇ ㄐㄧㄡˋ ㄏㄣˇ ㄎㄨㄞˋ ㄏㄨㄟˋ",
      ],
    },
    {
      id: "u87-ex10",
      type: "reorder",
      question: "Remettez dans l'ordre : « Je viens de finir le travail, je suis sur le point de rentrer. »",
      correctAnswer: "我剛做完工作，快要回家了",
      options: [
        "我",
        "剛",
        "做完工作",
        "快要",
        "回家",
        "了",
      ],
      optionsHint: [
        "wǒ",
        "gāng",
        "zuò wán gōngzuò",
        "kuài yào",
        "huí jiā",
        "le",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ",
        "ㄍㄤ",
        "ㄗㄨㄛˋ ㄨㄢˊ ㄍㄨㄥ ㄗㄨㄛˋ",
        "ㄎㄨㄞˋ ㄧㄠˋ",
        "ㄏㄨㄟˊ ㄐㄧㄚ",
        "ㄌㄜ˙",
      ],
    },
    {
      id: "u87-ex11",
      type: "fill-blank",
      question: "蛋糕___弟弟吃完了。(Le gâteau a été entièrement mangé par mon petit frère.)",
      correctAnswer: "被",
      options: ["被", "把", "給", "讓"],
      optionsHint: ["bèi", "bǎ", "gěi", "ràng"],
      optionsZhuyin: ["ㄅㄟˋ", "ㄅㄚˇ", "ㄍㄟˇ", "ㄖㄤˋ"],
      hint: "Quel mot introduit le passif en chinois ?",
      hintZhuyin: "Quel mot introduit le passif en chinois ?",
    },
    {
      id: "u87-ex12",
      type: "comprehension",
      question: "Quelle phrase est correcte pour dire « J'ai étudié le chinois pendant 2 ans » ?",
      correctAnswer: "我學了兩年中文 ou 我學中文學了兩年",
      options: [
        "我學了兩年中文 ou 我學中文學了兩年",
        "我兩年學了中文",
        "兩年我學中文了",
        "中文我學兩年了的",
      ],
    },
  ],

  requiredScore: 0.7,
  prerequisites: ["unit-86"],
};
