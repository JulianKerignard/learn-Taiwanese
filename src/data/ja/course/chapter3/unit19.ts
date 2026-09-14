import type { CourseUnit } from "@/types/course";

export const unit19: CourseUnit = {
  id: "unit-19",
  number: 19,
  title: "Décrire : les deux familles d'adjectifs",
  titleNative: "い形容詞とな形容詞",
  chapter: 3,
  description:
    "Le japonais possède deux classes d'adjectifs qui ne se comportent pas du tout de la même façon. À la fin de cette unité vous décrivez, niez, mettez au passé et comparez sans mélanger les deux mécaniques.",
  icon: "い",

  sections: [
    {
      title: "Deux classes, deux mécaniques",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En français, un adjectif s'accorde mais ne porte jamais le temps : c'est le verbe être qui s'en charge (« c'est cher », « c'était cher »). Le japonais fonctionne autrement, et de deux manières différentes selon la classe du mot. Un adjectif en い est lui-même un prédicat : il se conjugue, il porte le temps et la négation, exactement comme un verbe. Un adjectif en な ne se conjugue pas du tout : il se comporte comme un nom et s'appuie sur です. Savoir à quelle classe appartient un mot n'est donc pas un détail de classement, cela décide de toute sa conjugaison.",
        },
        {
          type: "example",
          native: "高いです → 高くないです → 高かったです",
          romanization: "takai desu → takaku nai desu → takakatta desu",
          translation: "C'est cher → ce n'est pas cher → c'était cher",
          content:
            "Le い final disparaît et laisse la place à く pour la négation, à かった pour le passé. です ne bouge jamais : il n'ajoute que la politesse, pas le temps. C'est bien 高い qui porte l'information grammaticale, et c'est pour cela qu'on dit que l'adjectif en い se conjugue.",
        },
        {
          type: "example",
          native: "しずかです → しずかじゃないです → しずかでした",
          romanization: "shizuka desu → shizuka ja nai desu → shizuka deshita",
          translation: "C'est calme → ce n'est pas calme → c'était calme",
          content:
            "Ici しずか reste intact d'un bout à l'autre. Tout le travail est fait par ce qui suit : じゃないです pour nier, でした pour le passé. C'est exactement le comportement d'un nom (学生です → 学生じゃないです → 学生でした), et c'est la meilleure façon de se représenter un adjectif en な.",
        },
        {
          type: "warning",
          content:
            "L'erreur numéro un du francophone : 高いでした pour « c'était cher ». Comme 高い porte déjà le temps, ajouter でした le double — c'est aussi faux que « c'était étaité ». La forme correcte est 高かったです. Même logique à la négative : jamais 高いじゃないです, toujours 高くないです.",
        },
        {
          type: "comparison",
          content:
            "高くないです et 高くありません disent la même chose ; la seconde est plus formelle et plus écrite, la première est ce que vous entendrez dans la rue. Côté な : しずかじゃないです à l'oral, しずかではありません à l'écrit ou dans un discours soigné. Apprenez d'abord les formes en ないです, elles passent partout.",
        },
        {
          type: "text",
          content:
            "Comment reconnaître la classe d'un mot inconnu ? Le test fiable est celui de la négation, pas celui de la terminaison. Essayez くない : si 高くない fonctionne, c'est un adjectif en い. S'il faut passer par じゃない, comme きれいじゃない, c'est un adjectif en な. Le dictionnaire note d'ailleurs ces derniers avec leur な entre parenthèses : しずか(な), 便利(な).",
        },
      ],
    },
    {
      title: "Devant un nom, et le piège des faux amis",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Placé devant un nom, l'adjectif en い s'y colle directement : 高い切符, 新しい部屋, 小さい駅. L'adjectif en な, lui, exige la particule な qui lui donne son nom : しずかな部屋, 便利な駅, 有名な店. Ce な n'apparaît que dans cette position, jamais ailleurs. Retenez la règle sous cette forme : な devant un nom, です en fin de phrase, jamais les deux.",
        },
        {
          type: "example",
          native: "しずかな部屋がいいです。",
          romanization: "shizuka na heya ga ii desu.",
          translation: "Je voudrais une chambre calme.",
          content:
            "な soude l'adjectif au nom : sans lui, la phrase se casse. Mais dès que しずか passe en fin de phrase, le な disparaît : この部屋はしずかです. Le même mot, deux positions, deux formes — d'où l'intérêt de mémoriser le な avec le mot.",
        },
        {
          type: "example",
          native: "新しい部屋は便利です。",
          romanization: "atarashii heya wa benri desu.",
          translation: "La chambre neuve est pratique.",
          content:
            "Une phrase, les deux classes. 新しい se pose directement devant 部屋, et lui ajouter な serait une faute. 便利 est en fin de phrase, donc suivi de です tout seul, sans な. Chaque adjectif applique sa propre règle dans la même phrase.",
        },
        {
          type: "warning",
          content:
            "Les faux amis en い sont le piège classique : きれい (beau, propre), 有名 — ゆうめい — (célèbre) et きらい (détester) se terminent par い mais sont des adjectifs en な. On dit きれいな部屋, 有名な店, et à la négative きれいじゃないです, jamais きれくないです. Indice utile : dans ces mots, le い fait partie de la lecture du kanji (綺麗, 有名), il n'est donc pas la terminaison adjectivale.",
        },
        {
          type: "tip",
          content:
            "La classe est une propriété du mot, pas une règle à recalculer. Notez-la dès la première rencontre, sous la forme しずか(な), 便利(な), 有名(な) — exactement comme un francophone apprend le genre d'un nom allemand avec son article. Cinq secondes au moment de la fiche, contre des années d'hésitation ensuite.",
        },
        {
          type: "comparison",
          content:
            "Observez 元気 dans ses trois positions : 元気です (en fin de phrase, sans な), 元気な人 (devant un nom, avec な), お元気ですか (la salutation, sans な). Le mot ne change jamais, seul son entourage bouge. C'est vrai de tous les adjectifs en な sans exception.",
        },
      ],
    },
    {
      title: "Comparer : より et いちばん",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le japonais n'a pas de comparatif : l'adjectif reste identique, qu'il y ait comparaison ou non. Tout se joue sur les particules. La structure est A は B より 〜です : より se colle après le terme de comparaison et signifie « par rapport à ». Il n'existe aucun mot pour « plus » dans cette construction — c'est より seul qui installe la comparaison.",
        },
        {
          type: "example",
          native: "電車はバスより便利です。",
          romanization: "densha wa basu yori benri desu.",
          translation: "Le train est plus pratique que le bus.",
          content:
            "Mot à mot : « le train, par rapport au bus, pratique ». Le francophone cherche instinctivement à traduire « plus » et ajoute もっと : もっと便利です existe, mais signifie « encore plus pratique » dans l'absolu, et ne se combine pas avec より dans cette phrase.",
        },
        {
          type: "example",
          native: "この部屋はあの部屋より安いです。",
          romanization: "kono heya wa ano heya yori yasui desu.",
          translation: "Cette chambre est moins chère que celle-là.",
          content:
            "Point remarquable : le japonais n'a pas non plus de « moins ». Pour dire « moins cher », on retourne l'adjectif et on dit « meilleur marché » avec 安い. Prenez l'habitude de chercher l'adjectif inverse plutôt que de construire une négation, qui sonnerait lourde et scolaire.",
        },
        {
          type: "example",
          native: "この店がいちばん有名です。",
          romanization: "kono mise ga ichiban yuumei desu.",
          translation: "C'est ce magasin qui est le plus célèbre.",
          content:
            "いちばん placé juste avant l'adjectif fabrique le superlatif. Notez le が au lieu de は : on désigne un élément précis à l'intérieur d'un ensemble, et が sert justement à l'identifier. On délimite souvent cet ensemble avec 〜のなかで : 日本のなかでいちばん…",
        },
        {
          type: "tip",
          content:
            "Pour faire choisir quelqu'un, la question toute faite est A と B と どちらが〜ですか (« des deux, lequel est le plus… ? »). La réponse type reprend 〜のほうが〜です : 電車のほうが便利です. Dans une boutique, どれがいちばん有名ですか est une manière très efficace d'obtenir une recommandation sans avoir de vocabulaire spécialisé.",
        },
      ],
    },
    {
      title: "Décrire pour de vrai",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Décrire quelque chose demande rarement un seul adjectif. Pour en enchaîner deux, l'adjectif en い prend la forme くて (新しくて…) et l'adjectif en な prend で (しずかで…). Le dernier adjectif de la série, lui, reste à la forme normale suivie de です. C'est la brique qui transforme une liste de mots en description réelle d'une chambre, d'un plat ou d'une ville.",
        },
        {
          type: "example",
          native: "この部屋は新しくてしずかです。",
          romanization: "kono heya wa atarashikute shizuka desu.",
          translation: "Cette chambre est neuve et calme.",
          content:
            "新しい devient 新しくて pour se lier au suivant, et しずか ferme la phrase avec です. Dans l'autre sens : しずかで新しいです. Ne liez jamais deux adjectifs avec と : cette particule ne relie que des noms, et le calque du français « et » est une des erreurs les plus fréquentes à ce stade.",
        },
        {
          type: "tip",
          content:
            "あまり suivi d'une négation signifie « pas très » : あまり高くないです, あまり便利じゃないです. Cet adverbe ne s'emploie jamais avec une forme affirmative — c'est un mot qui appelle obligatoirement une négation derrière lui, comme « guère » en français soutenu.",
        },
        {
          type: "warning",
          content:
            "Dans un magasin, 「ちょっと高いですね」 n'est pas une remarque neutre : c'est l'ouverture polie d'un refus. Inversement, lancer 高い ! sans atténuation passe pour brutal. Le japonais adoucit systématiquement les jugements avec ちょっと, 少し et la finale ね, qui cherche l'accord de l'interlocuteur au lieu de lui imposer un verdict.",
        },
        {
          type: "text",
          content:
            "Objectif concret de fin d'unité : décrire votre logement, votre ville et votre dernier repas avec trois adjectifs chacun, moitié en い moitié en な, puis reprendre chaque phrase à la négative et au passé. Si 高かったです, きれいじゃなかったです et おいしくなかったです sortent sans hésitation, la mécanique des deux classes est acquise.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans une agence immobilière, à Kyoto. Vous cherchez un logement et l'employé vous présente deux chambres.",
    lines: [
      {
        speaker: "Vous",
        native: "しずかな部屋がいいです。",
        romanization: "shizuka na heya ga ii desu.",
        french: "Je voudrais une chambre calme.",
        note: "しずか est un adjectif en な : devant un nom il prend な. En fin de phrase on dirait しずかです, sans な.",
      },
      {
        speaker: "Employé",
        native: "こちらは新しくて便利ですが、少し高いです。",
        romanization: "kochira wa atarashikute benri desu ga, sukoshi takai desu.",
        french: "Celle-ci est neuve et pratique, mais un peu chère.",
        note: "新しくて enchaîne deux adjectifs. が en milieu de phrase signifie « mais » ; 少し adoucit le jugement, comme presque toujours en japonais.",
      },
      {
        speaker: "Vous",
        native: "もう一つの部屋はどうですか。",
        romanization: "mou hitotsu no heya wa dou desu ka.",
        french: "Et l'autre chambre ?",
        note: "もう一つ = « un de plus », donc « l'autre ». どうですか demande une appréciation générale.",
      },
      {
        speaker: "Employé",
        native: "古いですが、こちらより安いですよ。",
        romanization: "furui desu ga, kochira yori yasui desu yo.",
        french: "Elle est vieille, mais moins chère que celle-ci.",
        note: "こちらより安い : le japonais dit « meilleur marché que », il n'a pas de tournure avec « moins ».",
      },
      {
        speaker: "Vous",
        native: "どちらがしずかですか。",
        romanization: "dochira ga shizuka desu ka.",
        french: "Laquelle est la plus calme ?",
        note: "どちらが pour choisir entre deux. Aucun mot ne traduit « plus » : la comparaison est portée par la question elle-même.",
      },
      {
        speaker: "Employé",
        native: "古い部屋のほうがしずかです。",
        romanization: "furui heya no hou ga shizuka desu.",
        french: "C'est la chambre ancienne qui est la plus calme.",
        note: "〜のほうが désigne le terme choisi dans une comparaison à deux : la réponse type à une question en どちらが.",
      },
    ],
  },

  keyPoints: [
    "L'adjectif en い se conjugue lui-même : 高い → 高くない → 高かった. です n'ajoute que la politesse, jamais le temps.",
    "L'adjectif en な ne se conjugue pas : c'est です qui travaille (しずかです → しずかじゃないです → しずかでした).",
    "Jamais 高いでした : le temps est déjà dans l'adjectif, la forme correcte est 高かったです.",
    "な n'apparaît que devant un nom : しずかな部屋, mais この部屋はしずかです.",
    "きれい et 有名 finissent par い et sont pourtant des adjectifs en な : きれいじゃないです, jamais きれくないです.",
    "Comparaison sans comparatif : A は B より 〜です pour « plus que », いちばん devant l'adjectif pour le superlatif.",
  ],

  vocabulary: [
    {
      term: "大きい",
      reading: "おおきい",
      romanization: "ookii",
      segments: [{ text: "大", reading: "おお" }, { text: "きい" }],
      pitch: 3,
      french: "Grand",
      english: "Big",
    },
    {
      term: "小さい",
      reading: "ちいさい",
      romanization: "chiisai",
      segments: [{ text: "小", reading: "ちい" }, { text: "さい" }],
      pitch: 3,
      french: "Petit",
      english: "Small",
    },
    {
      term: "新しい",
      reading: "あたらしい",
      romanization: "atarashii",
      segments: [{ text: "新", reading: "あたら" }, { text: "しい" }],
      pitch: 4,
      french: "Nouveau, neuf",
      english: "New",
    },
    {
      term: "古い",
      reading: "ふるい",
      romanization: "furui",
      segments: [{ text: "古", reading: "ふる" }, { text: "い" }],
      pitch: 2,
      french: "Vieux, ancien (pour une chose)",
      english: "Old",
    },
    {
      term: "高い",
      reading: "たかい",
      romanization: "takai",
      segments: [{ text: "高", reading: "たか" }, { text: "い" }],
      pitch: 2,
      french: "Cher ; haut",
      english: "Expensive; tall",
    },
    {
      term: "安い",
      reading: "やすい",
      romanization: "yasui",
      segments: [{ text: "安", reading: "やす" }, { text: "い" }],
      pitch: 2,
      french: "Bon marché",
      english: "Cheap",
    },
    {
      term: "おいしい",
      reading: "おいしい",
      romanization: "oishii",
      pitch: 3,
      french: "Délicieux, bon (au goût)",
      english: "Delicious",
    },
    {
      term: "忙しい",
      reading: "いそがしい",
      romanization: "isogashii",
      segments: [{ text: "忙", reading: "いそが" }, { text: "しい" }],
      pitch: 4,
      french: "Occupé, chargé",
      english: "Busy",
    },
    {
      term: "難しい",
      reading: "むずかしい",
      romanization: "muzukashii",
      segments: [{ text: "難", reading: "むずか" }, { text: "しい" }],
      pitch: 4,
      french: "Difficile",
      english: "Difficult",
    },
    {
      term: "しずか",
      reading: "しずか",
      romanization: "shizuka",
      pitch: 1,
      french: "Calme, silencieux (adjectif en な)",
      english: "Quiet",
    },
    {
      term: "きれい",
      reading: "きれい",
      romanization: "kirei",
      pitch: 1,
      french: "Beau ; propre (adjectif en な malgré le い)",
      english: "Beautiful; clean",
    },
    {
      term: "便利",
      reading: "べんり",
      romanization: "benri",
      segments: [
        { text: "便", reading: "べん" },
        { text: "利", reading: "り" },
      ],
      pitch: 1,
      french: "Pratique, commode (adjectif en な)",
      english: "Convenient",
    },
    {
      term: "有名",
      reading: "ゆうめい",
      romanization: "yuumei",
      segments: [
        { text: "有", reading: "ゆう" },
        { text: "名", reading: "めい" },
      ],
      pitch: 0,
      french: "Célèbre (adjectif en な malgré le い)",
      english: "Famous",
    },
    {
      term: "元気",
      reading: "げんき",
      romanization: "genki",
      segments: [
        { text: "元", reading: "げん" },
        { text: "気", reading: "き" },
      ],
      pitch: 1,
      french: "En forme, plein d'énergie (adjectif en な)",
      english: "Healthy, lively",
    },
    {
      term: "部屋",
      reading: "へや",
      romanization: "heya",
      segments: [{ text: "部屋", reading: "へや" }],
      french: "La chambre, la pièce",
      english: "Room",
    },
    {
      term: "いちばん",
      reading: "いちばん",
      romanization: "ichiban",
      pitch: 2,
      french: "Le plus (superlatif) ; numéro un",
      english: "The most; number one",
    },
  ],

  exercises: [
    {
      id: "unit-19-ex1",
      type: "comprehension",
      question: "Lequel de ces quatre mots est un adjectif en な ?",
      correctAnswer: "きれい",
      options: ["きれい", "大きい", "忙しい", "おいしい"],
      optionsHint: ["kirei", "ookii", "isogashii", "oishii"],
      optionsReading: ["きれい", "おおきい", "いそがしい", "おいしい"],
      hint: "Appliquez le test de la négation : lequel refuse la forme en くない ?",
    },
    {
      id: "unit-19-ex2",
      type: "fill-blank",
      question: "« Je voudrais une chambre calme » se dit しずか ___ 部屋がいいです。",
      correctAnswer: "な",
      options: ["な", "い", "の", "で"],
      optionsHint: ["na", "i", "no", "de"],
      optionsReading: ["な", "い", "の", "で"],
      hint: "Un adjectif de cette classe a besoin d'une particule pour se coller à un nom.",
    },
    {
      id: "unit-19-ex3",
      type: "fill-blank",
      question: "La négation de 高いです est 高 ___ ないです。",
      correctAnswer: "く",
      options: ["く", "じゃ", "い", "かった"],
      optionsHint: ["ku", "ja", "i", "katta"],
      optionsReading: ["く", "じゃ", "い", "かった"],
      hint: "Le い final laisse la place à une autre syllabe : c'est l'adjectif lui-même qui se conjugue.",
    },
    {
      id: "unit-19-ex4",
      type: "comprehension",
      question: "Comment dit-on « C'était cher » ?",
      correctAnswer: "高かったです",
      options: ["高かったです", "高いでした", "高くでした", "高いかったです"],
      optionsHint: ["takakatta desu", "takai deshita", "takaku deshita", "takai katta desu"],
      hint: "Le temps est porté par l'adjectif, pas par です.",
    },
    {
      id: "unit-19-ex5",
      type: "translate",
      question: "Traduisez : « Cette chambre est plus calme que celle-là. »",
      correctAnswer: "この部屋はあの部屋よりしずかです。",
      options: [
        "この部屋はあの部屋よりしずかです。",
        "この部屋はあの部屋よりしずかなです。",
        "この部屋はあの部屋よりしずかいです。",
        "あの部屋はこの部屋よりしずかです。",
      ],
      optionsHint: [
        "kono heya wa ano heya yori shizuka desu.",
        "kono heya wa ano heya yori shizuka na desu.",
        "kono heya wa ano heya yori shizukai desu.",
        "ano heya wa kono heya yori shizuka desu.",
      ],
      hint: "より suit le terme de comparaison, et な n'apparaît que devant un nom.",
    },
    {
      id: "unit-19-ex6",
      type: "listen",
      question: "この店はとても有名です。",
      correctAnswer: "Ce magasin est très célèbre.",
      options: [
        "Ce magasin est très célèbre.",
        "Ce magasin est très pratique.",
        "Ce magasin est très calme.",
        "Ce magasin est tout neuf.",
      ],
      hint: "とても signifie « très ». Concentrez-vous sur l'adjectif qui suit.",
    },
    {
      id: "unit-19-ex7",
      type: "reorder",
      question: "Remettez dans l'ordre : « Cette chambre n'est pas calme. »",
      correctAnswer: "この部屋はしずかじゃないです。",
      options: ["この", "部屋", "は", "しずか", "じゃないです"],
      hint: "Un adjectif en な se nie avec じゃないです, sans jamais changer de forme.",
    },
    {
      id: "unit-19-ex8",
      type: "comprehension",
      question: "Pourquoi きれい et 有名 sont-ils des adjectifs en な alors qu'ils finissent par い ?",
      correctAnswer:
        "Leur い appartient à la racine du mot : il ne se conjugue pas, on dit きれいじゃないです",
      options: [
        "Leur い appartient à la racine du mot : il ne se conjugue pas, on dit きれいじゃないです",
        "Ce sont des exceptions historiques qui se conjuguent quand même comme 高い",
        "Ils changent de classe selon le niveau de politesse employé",
        "Ils prennent な devant un nom, mais se conjuguent comme un adjectif en い ailleurs",
      ],
      hint: "Regardez la lecture du kanji : le い y est déjà inclus.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-18"],
};
