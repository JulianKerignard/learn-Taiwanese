import type { CourseUnit } from "@/types/course";

export const unit20: CourseUnit = {
  id: "unit-20",
  number: 20,
  title: "Le passé : raconter sa journée",
  titleJa: "過去形：きのうのことを話す",
  chapter: 3,
  description:
    "Mettre au passé les verbes, les adjectifs et です, puis enchaîner les étapes d'un récit avec まず、それから、さいごに. À la fin de l'unité vous racontez votre journée d'hier en cinq phrases.",
  icon: "昨",

  sections: [
    {
      title: "Les verbes : ました et ませんでした",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le japonais ne connaît que deux temps : le non-passé (ます) et le passé (ました). Il n'existe aucune forme de futur : 行きます couvre à la fois « je vais » et « j'irai », et c'est le contexte ou un mot comme あした qui tranche. Le passé, en revanche, est obligatoirement marqué. Toute la mécanique du registre poli tient en deux transformations : ます devient ました, et ません devient ませんでした. Aucun verbe n'échappe à cette règle, pas même します ou 来ます.",
        },
        {
          type: "example",
          japanese: "きのう、六時に起きました。",
          romaji: "kinou, rokuji ni okimashita.",
          translation: "Hier, je me suis levé à six heures.",
          content:
            "起きます devient 起きました, et rien d'autre ne change dans la phrase. Le marqueur temporel きのう se place en tête, l'heure garde son に comme au présent. Notez qu'il n'y a pas d'auxiliaire à choisir : là où le français hésite entre « je me suis levé » et « j'ai levé », le japonais n'a qu'une seule forme.",
        },
        {
          type: "example",
          japanese: "あさごはんは食べませんでした。",
          romaji: "asagohan wa tabemasen deshita.",
          translation: "Je n'ai pas pris de petit-déjeuner.",
          content:
            "La négation passée s'obtient en collant でした derrière ません : 食べません → 食べませんでした. Le は sur あさごはん n'est pas un hasard : il pose le petit-déjeuner en contraste, « le petit-déjeuner, lui, je ne l'ai pas pris ». Prononcez le tout d'un seul souffle, tabemasen-deshita, sans pause avant でした.",
        },
        {
          type: "warning",
          content:
            "L'erreur la plus fréquente consiste à empiler les marques : 「行きましたです」、「食べましたでした」 n'existent pas. ました contient déjà la politesse et le passé. Une phrase polie au passé se termine par ました ou ませんでした, un point final.",
        },
        {
          type: "comparison",
          content:
            "食べません = « je ne mange pas / je ne mangerai pas » ; 食べませんでした = « je n'ai pas mangé ». Le でした final ne se rattache à aucun nom, il complète la négation du verbe. C'est la seule forme du japonais poli où le passé se dit en deux mots.",
        },
        {
          type: "tip",
          content:
            "Exercice quotidien qui marche : chaque soir, dites à voix haute cinq choses que vous avez faites dans la journée, chacune avec un verbe en ました. Vous fixerez la forme bien plus vite qu'en récitant des tableaux de conjugaison.",
        },
      ],
    },
    {
      title: "L'adjectif en い porte lui-même le passé",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "C'est le point de bascule de l'unité, et l'erreur la plus tenace chez les francophones. Un adjectif en い n'est pas un adjectif au sens français : il se conjugue, comme un verbe. Pour le passer au passé on retire le い final et on ajoute かった : 高い → 高かった. です reste ensuite tel quel, car il n'apporte ici que la politesse, jamais le temps. Résultat : 高かったです.",
        },
        {
          type: "example",
          japanese: "このかばんは高かったです。",
          romaji: "kono kaban wa takakatta desu.",
          translation: "Ce sac était cher.",
          content:
            "高い perd son い et devient 高かった ; です suit sans bouger. Si vous supprimez です vous obtenez 高かった, la version familière, parfaitement correcte entre amis. C'est la preuve que le passé est déjà dans l'adjectif : です n'est qu'une couche de politesse posée par-dessus.",
        },
        {
          type: "warning",
          content:
            "「高いでした」 est faux, et c'est le calque direct de « était cher » : le francophone met le passé sur le verbe être. En japonais, l'adjectif en い ne laisse jamais です porter son passé. Si vous entendez sortir de votre bouche un い suivi de でした, corrigez immédiatement en かったです.",
        },
        {
          type: "example",
          japanese: "あまりおいしくなかったです。",
          romaji: "amari oishikunakatta desu.",
          translation: "Ce n'était pas très bon.",
          content:
            "La négation au présent est おいしくないです ; on conjugue alors ない comme un adjectif en い, d'où くなかったです. L'adverbe あまり appelle obligatoirement une négation : あまり + forme négative = « pas très ». Dire あまりおいしいです n'a aucun sens.",
        },
        {
          type: "comparison",
          content:
            "いい (bon, bien) est le seul irrégulier vraiment fréquent : son passé est よかったです, et sa négation passée よくなかったです. 「いかったです」 et 「いいでした」 n'existent pas. Retenez-le comme un bloc : よかった sert cent fois par jour, ne serait-ce que dans よかったですね (« tant mieux ! »).",
        },
        {
          type: "example",
          japanese: "きのうは雨でした。げんきじゃなかったです。",
          romaji: "kinou wa ame deshita. genki ja nakatta desu.",
          translation: "Hier il a plu. Je n'étais pas en forme.",
          content:
            "Deuxième famille : les noms et les adjectifs en な. Là, c'est bien です qui se conjugue — でした à l'affirmatif, じゃなかったです au négatif (la variante plus formelle じゃありませんでした s'entend aussi au travail). 雨 est un nom, げんき un adjectif en な : les deux suivent le même schéma.",
        },
        {
          type: "text",
          content:
            "Trois schémas à garder en tête, et rien de plus. Verbe : 行きました / 行きませんでした. Adjectif en い : 高かったです / 高くなかったです. Nom ou adjectif en な : 雨でした / 雨じゃなかったです. Avant de parler, identifiez la famille du mot qui termine votre phrase — c'est ce réflexe, et non la mémorisation, qui fait disparaître 「高いでした」.",
        },
      ],
    },
    {
      title: "Enchaîner : まず、それから、そのあと、さいごに",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Savoir conjuguer ne suffit pas à raconter : une suite de phrases au passé sans articulation sonne comme une liste de courses. Quatre mots structurent presque tous les récits du quotidien. まず ouvre (« d'abord »), それから ajoute l'étape suivante (« et puis »), そのあと renvoie à ce qui vient d'être dit (« après cela »), さいごに annonce la fin (« pour finir »). Ils se placent en tête de phrase et sont suivis d'une virgule à l'écrit.",
        },
        {
          type: "example",
          japanese: "まず、うちであさごはんを食べました。それから、駅に行きました。",
          romaji: "mazu, uchi de asagohan o tabemashita. sorekara, eki ni ikimashita.",
          translation: "D'abord j'ai mangé chez moi. Ensuite je suis allé à la gare.",
          content:
            "まず annonce que le récit démarre : votre interlocuteur sait qu'une suite arrive et ne vous coupera pas. それから relie deux actions dans l'ordre chronologique et reste neutre — il n'exprime ni cause ni conséquence, seulement la succession.",
        },
        {
          type: "example",
          japanese: "そのあと、友だちに会いました。さいごに、うちに帰りました。",
          romaji: "sono ato, tomodachi ni aimashita. saigo ni, uchi ni kaerimashita.",
          translation: "Après ça j'ai retrouvé un ami. Pour finir je suis rentré chez moi.",
          content:
            "そのあと contient その : il exige un événement déjà mentionné, on ne commence donc jamais un récit par そのあと. さいごに signale explicitement que vous rendez la parole. Attention à 会います, qui se construit avec に et non を : 友だちに会いました.",
        },
        {
          type: "text",
          content:
            "Les repères temporels du passé sont peu nombreux et très rentables : きのう (hier), おととい (avant-hier), 先週 (la semaine dernière), 先月 (le mois dernier). Ils se placent en général en début de phrase, avant le sujet, et peuvent recevoir は quand ils servent de cadre : きのうは雨でした.",
        },
        {
          type: "warning",
          content:
            "Ces mots ne prennent jamais la particule に. On dit きのう行きました, jamais 「きのうに行きました」. La règle : に marque un point repérable sur un calendrier ou une horloge (六時に、月曜日に、四月に), pas les mots qui se calculent depuis aujourd'hui (きのう、きょう、あした、先週).",
        },
        {
          type: "tip",
          content:
            "Dans la conversation réelle, un récit se donne en trois ou quatre phrases, puis on rend la parole. La question qui relance est どうでしたか (« c'était comment ? ») et celle qui renvoie la balle est 〜さんは？. Un monologue de dix phrases met votre interlocuteur mal à l'aise ; l'alternance rapide est la norme.",
        },
      ],
    },
    {
      title: "Raconter sa journée — et bilan du N5",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Passez à la production. Chaque soir, écrivez cinq phrases sur votre journée : une avec un nom ou un adjectif en な (…でした), deux avec des verbes (…ました), une négative (…ませんでした), une avec un adjectif en い (…かったです). Cette contrainte vous force à balayer les trois schémas au lieu de réutiliser toujours le même.",
        },
        {
          type: "example",
          japanese: "きのうは雨でした。うちで本を読みました。あまりおもしろくなかったです。",
          romaji: "kinou wa ame deshita. uchi de hon o yomimashita. amari omoshirokunakatta desu.",
          translation: "Hier il a plu. J'ai lu à la maison. Ce n'était pas très intéressant.",
          content:
            "Les trois familles dans trois phrases : nom + でした, verbe en ました, adjectif en い au négatif passé. Remarquez que le sujet n'est jamais exprimé — 読みました suffit à dire « j'ai lu », puisque sans indication contraire la phrase parle de vous.",
        },
        {
          type: "tip",
          content:
            "Enregistrez-vous en train de lire votre récit, puis réécoutez-vous le lendemain. Les erreurs de type 高いでした s'entendent immédiatement sur un enregistrement, alors qu'elles passent inaperçues au moment où on parle.",
        },
        {
          type: "text",
          content:
            "Cette unité clôt le niveau N5. Faites le compte de ce que vous savez faire : vous présenter et demander à quelqu'un qui il est, compter et demander un prix, désigner un objet et le situer, donner l'heure et un jour, commander et payer au restaurant, acheter en magasin, prendre le train et demander votre chemin, et maintenant raconter au passé ce que vous avez fait. C'est très exactement ce qu'on attend d'un voyageur autonome au Japon.",
        },
        {
          type: "tip",
          content:
            "La suite (N4) part de deux outils qui débloquent tout le reste : la forme neutre (食べた、行った), qui remplace ました entre proches et sert à construire les subordonnées, et la forme en て, qui permet de relier deux propositions dans une seule phrase au lieu d'enchaîner des phrases courtes avec それから.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Lundi matin au bureau. Tanaka demande à Yamada comment s'est passée sa journée d'hier — la petite conversation la plus prévisible du Japon, et donc la plus utile à maîtriser.",
    lines: [
      {
        speaker: "田中",
        japanese: "山田さん、きのうは何をしましたか。",
        romaji: "Yamada-san, kinou wa nani o shimashita ka.",
        french: "M. Yamada, qu'avez-vous fait hier ?",
        note: "何をしましたか est la question ouverte standard. きのうは avec は pose le cadre temporel : « hier, en ce qui concerne hier ».",
      },
      {
        speaker: "山田",
        japanese: "まず、友だちに会いました。それから、いっしょにレストランで食べました。",
        romaji: "mazu, tomodachi ni aimashita. sorekara, issho ni resutoran de tabemashita.",
        french: "D'abord j'ai retrouvé un ami. Ensuite nous avons mangé au restaurant.",
        note: "会う se construit avec に. Le で de レストランで marque le lieu où se déroule l'action, comme au présent : le passé ne change aucune particule.",
      },
      {
        speaker: "田中",
        japanese: "どうでしたか。",
        romaji: "dou deshita ka.",
        french: "C'était comment ?",
        note: "La question passe-partout pour demander un avis sur un événement passé. Au présent : どうですか. Apprenez les deux comme un couple.",
      },
      {
        speaker: "山田",
        japanese: "とてもおいしかったです。でも、少し高かったです。",
        romaji: "totemo oishikatta desu. demo, sukoshi takakatta desu.",
        french: "C'était très bon. Mais un peu cher.",
        note: "Deux adjectifs en い au passé, et です qui ne bouge pas. Enchaîner un compliment puis une réserve avec でも est un réflexe très japonais.",
      },
      {
        speaker: "田中",
        japanese: "そのあとは？",
        romaji: "sono ato wa?",
        french: "Et après ?",
        note: "Phrase suspendue avec は : on relance sans reposer une question complète. Extrêmement courant à l'oral.",
      },
      {
        speaker: "山田",
        japanese: "そのあと、電車でうちに帰りました。楽しい一日でした。",
        romaji: "sono ato, densha de uchi ni kaerimashita. tanoshii ichinichi deshita.",
        french: "Après ça je suis rentré chez moi en train. C'était une belle journée.",
        note: "Devant un nom, 楽しい reste au présent : c'est でした sur 一日 qui met toute la phrase au passé. 「楽しかった一日でした」 est possible mais insiste beaucoup plus.",
      },
    ],
  },

  keyPoints: [
    "Verbes : ます → ました, ません → ませんでした. Le japonais n'a pas de futur — 行きます dit « je vais » comme « j'irai » — mais le passé est toujours marqué.",
    "Adjectif en い : c'est lui qui porte le passé, 高かったです / 高くなかったです. 「高いでした」 n'existe pas, et いい devient よかったです.",
    "Nom ou adjectif en な : le passé est sur です — 雨でした, げんきじゃなかったです (variante formelle じゃありませんでした).",
    "Un récit se structure : まず、それから、そのあと、さいごに ; et les repères きのう、おととい、先週、先月 se placent en tête sans particule に.",
    "Bilan du N5 : vous savez vous présenter, compter, demander un prix et l'heure, commander, vous déplacer — et raconter au passé. Avec どうでしたか et 〜さんは？ vous tenez une conversation, pas seulement des phrases.",
  ],

  vocabulary: [
    {
      term: "昨日",
      kana: "きのう",
      romaji: "kinou",
      segments: [{ text: "昨日", reading: "きのう" }],
      french: "Hier",
      english: "Yesterday",
    },
    {
      term: "おととい",
      kana: "おととい",
      romaji: "ototoi",
      french: "Avant-hier",
      english: "The day before yesterday",
    },
    {
      term: "先週",
      kana: "せんしゅう",
      romaji: "senshuu",
      segments: [
        { text: "先", reading: "せん" },
        { text: "週", reading: "しゅう" },
      ],
      french: "La semaine dernière",
      english: "Last week",
    },
    {
      term: "先月",
      kana: "せんげつ",
      romaji: "sengetsu",
      segments: [
        { text: "先", reading: "せん" },
        { text: "月", reading: "げつ" },
      ],
      french: "Le mois dernier",
      english: "Last month",
    },
    {
      term: "今朝",
      kana: "けさ",
      romaji: "kesa",
      segments: [{ text: "今朝", reading: "けさ" }],
      pitch: 1,
      french: "Ce matin",
      english: "This morning",
    },
    {
      term: "夜",
      kana: "よる",
      romaji: "yoru",
      segments: [{ text: "夜", reading: "よる" }],
      pitch: 1,
      french: "Le soir, la nuit",
      english: "Evening, night",
    },
    {
      term: "まず",
      kana: "まず",
      romaji: "mazu",
      french: "D'abord, pour commencer",
      english: "First of all",
    },
    {
      term: "それから",
      kana: "それから",
      romaji: "sorekara",
      french: "Et puis, ensuite",
      english: "And then",
    },
    {
      term: "そのあと",
      kana: "そのあと",
      romaji: "sono ato",
      french: "Après cela",
      english: "After that",
    },
    {
      term: "さいごに",
      kana: "さいごに",
      romaji: "saigo ni",
      french: "Enfin, pour finir",
      english: "Lastly, finally",
    },
    {
      term: "起きる",
      kana: "おきる",
      romaji: "okiru",
      segments: [
        { text: "起", reading: "お" },
        { text: "きる" },
      ],
      pitch: 2,
      french: "Se lever, se réveiller",
      english: "To get up",
    },
    {
      term: "帰る",
      kana: "かえる",
      romaji: "kaeru",
      segments: [
        { text: "帰", reading: "かえ" },
        { text: "る" },
      ],
      pitch: 1,
      french: "Rentrer (chez soi)",
      english: "To go home, to return",
    },
    {
      term: "会う",
      kana: "あう",
      romaji: "au",
      segments: [
        { text: "会", reading: "あ" },
        { text: "う" },
      ],
      pitch: 1,
      french: "Rencontrer, retrouver (quelqu'un)",
      english: "To meet",
    },
    {
      term: "楽しい",
      kana: "たのしい",
      romaji: "tanoshii",
      segments: [
        { text: "楽", reading: "たの" },
        { text: "しい" },
      ],
      pitch: 3,
      french: "Agréable, amusant",
      english: "Enjoyable, fun",
    },
    {
      term: "おもしろい",
      kana: "おもしろい",
      romaji: "omoshiroi",
      pitch: 4,
      french: "Intéressant, drôle",
      english: "Interesting, funny",
    },
    {
      term: "天気",
      kana: "てんき",
      romaji: "tenki",
      segments: [
        { text: "天", reading: "てん" },
        { text: "気", reading: "き" },
      ],
      pitch: 1,
      french: "Le temps, la météo",
      english: "Weather",
    },
    {
      term: "雨",
      kana: "あめ",
      romaji: "ame",
      segments: [{ text: "雨", reading: "あめ" }],
      pitch: 1,
      french: "La pluie",
      english: "Rain",
    },
    {
      term: "高い",
      kana: "たかい",
      romaji: "takai",
      segments: [
        { text: "高", reading: "たか" },
        { text: "い" },
      ],
      pitch: 2,
      french: "Cher ; haut",
      english: "Expensive; tall, high",
    },
  ],

  exercises: [
    {
      id: "unit-20-ex1",
      type: "comprehension",
      question: "Comment met-on 「高いです」 (c'est cher) au passé poli ?",
      correctAnswer: "高かったです",
      options: ["高かったです", "高いでした", "高くでした", "高いだったです"],
      optionsHint: ["takakatta desu", "takai deshita", "takaku deshita", "takai datta desu"],
      optionsKana: ["たかかったです", "たかいでした", "たかくでした", "たかいだったです"],
      hint: "C'est l'adjectif qui se conjugue, pas です.",
    },
    {
      id: "unit-20-ex2",
      type: "fill-blank",
      question: "きのう、友だちに ___ 。 (会う, passé poli affirmatif)",
      correctAnswer: "会いました",
      options: ["会いました", "会います", "会いませんでした", "会ったです"],
      optionsHint: ["aimashita", "aimasu", "aimasen deshita", "atta desu"],
      optionsKana: ["あいました", "あいます", "あいませんでした", "あったです"],
      hint: "ます devient ました.",
    },
    {
      id: "unit-20-ex3",
      type: "comprehension",
      question: "Quelle est la forme passée négative polie de 「学生です」 (je suis étudiant) ?",
      correctAnswer: "学生じゃなかったです",
      options: [
        "学生じゃなかったです",
        "学生じゃないでした",
        "学生くなかったです",
        "学生でしたじゃないです",
      ],
      optionsHint: [
        "gakusei ja nakatta desu",
        "gakusei ja nai deshita",
        "gakusei kunakatta desu",
        "gakusei deshita ja nai desu",
      ],
      hint: "学生 est un nom : c'est です qui porte le temps.",
    },
    {
      id: "unit-20-ex4",
      type: "fill-blank",
      question: "きのうのパーティーは ___ 。 « La fête d'hier était bien. »",
      correctAnswer: "よかったです",
      options: ["よかったです", "いいかったです", "いいでした", "よくなかったです"],
      optionsHint: ["yokatta desu", "iikatta desu", "ii deshita", "yokunakatta desu"],
      optionsKana: ["よかったです", "いいかったです", "いいでした", "よくなかったです"],
      hint: "いい est irrégulier, et la phrase est affirmative.",
    },
    {
      id: "unit-20-ex5",
      type: "listen",
      question: "きのうは雨でした。",
      correctAnswer: "Hier, il a plu.",
      options: [
        "Hier, il a plu.",
        "Aujourd'hui, il pleut.",
        "Hier, il faisait beau.",
        "Demain, il va pleuvoir.",
      ],
      hint: "Écoutez le marqueur temporel, puis la forme de です.",
    },
    {
      id: "unit-20-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Hier, j'ai retrouvé un ami. »",
      correctAnswer: "きのう、友だちに会いました。",
      options: ["きのう", "友だち", "に", "会いました"],
      hint: "Le repère temporel ouvre la phrase, le verbe la ferme.",
    },
    {
      id: "unit-20-ex7",
      type: "comprehension",
      question: "Dans un récit, quel mot annonce la dernière étape ?",
      correctAnswer: "さいごに",
      options: ["さいごに", "まず", "それから", "そのあと"],
      optionsHint: ["saigo ni", "mazu", "sorekara", "sono ato"],
      hint: "Celui qui signale que vous rendez la parole.",
    },
    {
      id: "unit-20-ex8",
      type: "translate",
      question: "Traduisez : « La semaine dernière, je ne suis pas allé à l'école. »",
      correctAnswer: "先週、学校に行きませんでした。",
      options: [
        "先週、学校に行きませんでした。",
        "先週、学校に行きました。",
        "先週、学校に行かないでした。",
        "きのう、学校に行きませんでした。",
      ],
      optionsHint: [
        "senshuu, gakkou ni ikimasen deshita.",
        "senshuu, gakkou ni ikimashita.",
        "senshuu, gakkou ni ikanai deshita.",
        "kinou, gakkou ni ikimasen deshita.",
      ],
      hint: "Vérifiez le repère temporel et la négation passée.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-19"],
};
