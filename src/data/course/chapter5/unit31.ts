import type { CourseUnit } from "@/types/course";

export const unit31: CourseUnit = {
  id: "unit-31",
  number: 31,
  chapter: 5,
  title: "Comparer, doser, nuancer",
  titleJa: "比較と程度",
  description:
    "より et のほうが pour comparer, いちばん pour le superlatif, 〜ほど…ない pour dire « moins que », puis le curseur d'intensité とても / かなり / ちょっと / あまり…ない. Et le mot ちょっと, qui en réponse à une invitation ne veut pas dire « un peu » mais « non ».",
  icon: "比",

  sections: [
    {
      title: "Comparer deux éléments : より et のほうが",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le japonais n'a pas de comparatif : l'adjectif ne change jamais de forme. 高い veut dire « cher » et « plus cher », c'est la phrase autour de lui qui installe la comparaison. Le moule est AよりBのほうが〜です. より se colle directement au terme qui perd la comparaison, ほう marque celui qu'on retient, et l'adjectif arrive nu à la fin. Rien à conjuguer, rien à accorder : tout se joue sur deux particules.",
        },
        {
          type: "example",
          japanese: "バスより電車のほうが速いです。",
          romaji: "basu yori densha no hou ga hayai desu.",
          translation: "Le train est plus rapide que le bus.",
          content:
            "Repérez l'ordre : ce qui précède より est ce à quoi on compare, donc le perdant. Un francophone lit la phrase de gauche à droite et croit spontanément que バス est le sujet — c'est l'inverse. Retenez le réflexe : dès que vous voyez より, le vrai sujet est plus loin, avec のほうが.",
        },
        {
          type: "text",
          content:
            "ほう est un nom qui signifie « le côté, la direction ». 電車のほう, c'est littéralement « le côté train ». Cela explique les liaisons : avec un nom on met の (電車のほう), avec un adjectif en な on met な (静かなほう), avec un verbe on met la forme neutre (歩くほう). Comme c'est un nom, il prend ensuite la particule qui convient — が le plus souvent, mais aussi を dans 静かなほうを選びます.",
        },
        {
          type: "example",
          japanese: "コーヒーとお茶と、どちらが好きですか。",
          romaji: "koohii to ocha to, dochira ga suki desu ka.",
          translation: "Entre le café et le thé, lequel préférez-vous ?",
          content:
            "La question de comparaison a un moule figé : AとBと、どちらが〜ですか. On répond par 「お茶のほうが好きです」. À l'oral détendu どちら devient どっち, mais どちら reste la forme à utiliser avec un inconnu ou au travail.",
        },
        {
          type: "warning",
          content:
            "Avec deux éléments seulement, la question se pose obligatoirement avec どちら, jamais avec 何 ou どこ. 「日本語と英語と、何が難しいですか」 est faux : il faut どちらが難しいですか. 何 et どこ ouvrent sur un ensemble, pas sur un choix binaire.",
        },
        {
          type: "example",
          japanese: "この店はあの店と同じくらい安いです。",
          romaji: "kono mise wa ano mise to onaji kurai yasui desu.",
          translation: "Ce magasin est aussi bon marché que celui-là.",
          content:
            "Pour l'égalité : Aは Bと同じくらい〜です. Le terme de comparaison prend と (pas より), et くらい ajoute l'idée d'« à peu près » — le japonais préfère l'approximation à l'égalité stricte. 同じ se comporte comme un nom : devant un autre nom il se passe de な, on dit 同じ店 et non 「同じな店」.",
        },
        {
          type: "example",
          japanese: "今日は昨日ほど暑くないです。",
          romaji: "kyou wa kinou hodo atsukunai desu.",
          translation: "Aujourd'hui il fait moins chaud qu'hier.",
          content:
            "AはBほど〜ない dit « A est moins … que B », mais avec une nuance : on nie que A atteigne le niveau de B, sans se prononcer sur B. La construction est obligatoirement négative — 「昨日ほど暑いです」 n'existe pas. C'est la façon polie de rabaisser quelque chose sans le dire brutalement.",
        },
      ],
    },
    {
      title: "Le superlatif いちばん et le curseur d'intensité",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "いちばん (一番, « le numéro un ») est un adverbe : il se pose juste devant l'adjectif ou le verbe, sans rien modifier d'autre. Le groupe dans lequel on compare est délimité par 〜の中で (« parmi »). Contrairement au français, il n'y a pas d'article ni d'accord à gérer : いちばん安いです couvre « le moins cher », « la moins chère » et « les moins chers ».",
        },
        {
          type: "example",
          japanese: "日本料理の中で、すしがいちばん好きです。",
          romaji: "nihon ryouri no naka de, sushi ga ichiban suki desu.",
          translation: "Parmi la cuisine japonaise, c'est le sushi que je préfère.",
          content:
            "Notez le が sur すし et non は : la phrase répond à une question implicite (« lequel ? ») et désigne un élément à l'exclusion des autres. C'est exactement l'emploi de が vu avec les questions — un superlatif est une réponse exhaustive, donc が.",
        },
        {
          type: "example",
          japanese: "クラスの中で、だれがいちばん速く走りますか。",
          romaji: "kurasu no naka de, dare ga ichiban hayaku hashirimasu ka.",
          translation: "Dans la classe, qui court le plus vite ?",
          content:
            "Le mot interrogatif s'adapte au type d'ensemble : 何が (choses), だれが (personnes), どこが (lieux), いつが (moments). Devant un verbe, いちばん se place avant l'adverbe : いちばん速く走ります. La structure reste identique, seul le mot interrogatif change.",
        },
        {
          type: "warning",
          content:
            "いちばん suppose trois éléments ou plus. Entre deux options, on revient à のほうが : 「バスと電車と、どちらがいちばん速いですか」 fait grincer une oreille japonaise. Deux termes → どちら / のほう. Trois et au-delà → 何・だれ・どこ / いちばん.",
        },
        {
          type: "text",
          content:
            "Reste à doser. Quatre adverbes se combinent librement avec un affirmatif : とても (très), かなり (nettement, plus fort qu'on ne l'attendait), 少し et ちょっと (un peu, ちょっと étant le registre oral de 少し). Trois autres exigent obligatoirement une forme négative derrière eux : あまり…ない (pas très), それほど…ない (pas tant que ça), 全然…ない (pas du tout). Ce sont des adverbes « à polarité » : le verbe qui suit doit être nié, sans quoi la phrase est agrammaticale.",
        },
        {
          type: "example",
          japanese: "この言葉は全然分かりません。あまり使いませんから。",
          romaji: "kono kotoba wa zenzen wakarimasen. amari tsukaimasen kara.",
          translation: "Ce mot, je ne le comprends pas du tout. Parce qu'on ne l'emploie pas beaucoup.",
          content:
            "全然 est le degré zéro absolu, あまり un simple « pas trop ». L'erreur du francophone est de calquer « pas du tout » en fin de phrase : 全然 se place devant le verbe, jamais après. On entend aussi 全然大丈夫 (« aucun problème ») à l'affirmatif chez les jeunes, mais c'est du registre familier — ne l'écrivez pas et ne l'utilisez pas au travail.",
        },
      ],
    },
    {
      title: "Sur le radical du verbe : 〜すぎる、〜やすい、〜にくい",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Trois suffixes très rentables s'accrochent au même point d'ancrage : le radical du verbe, c'est-à-dire la forme en ます privée de ます (使います → 使い, 食べます → 食べ, 覚えます → 覚え). すぎる dit l'excès, やすい la facilité, にくい la difficulté. Une fois collés, ils se conjuguent normalement : すぎる comme un verbe, やすい et にくい comme des adjectifs en い.",
        },
        {
          type: "example",
          japanese: "昨日、食べすぎました。",
          romaji: "kinou, tabesugimashita.",
          translation: "Hier, j'ai trop mangé.",
          content:
            "すぎる porte toujours un jugement négatif : ce n'est pas « beaucoup », c'est « trop, au-delà du raisonnable ». Il se conjugue comme n'importe quel verbe en る : 食べすぎます、食べすぎました、食べすぎないでください.",
        },
        {
          type: "example",
          japanese: "このコートはちょっと高すぎます。",
          romaji: "kono kooto wa chotto takasugimasu.",
          translation: "Ce manteau est un peu trop cher.",
          content:
            "Avec un adjectif, on retire le い final : 高い → 高すぎる. Un adjectif en な perd son な : 静か → 静かすぎる, 便利 → 便利すぎる. Le ちょっと placé devant n'annule pas l'excès, il l'adoucit — c'est la formule exacte à sortir en boutique pour signaler qu'un prix vous dépasse sans vexer le vendeur.",
        },
        {
          type: "example",
          japanese: "このアプリは使いやすいです。",
          romaji: "kono apuri wa tsukaiyasui desu.",
          translation: "Cette application est facile à utiliser.",
          content:
            "使います → 使い + やすい. Le résultat est un adjectif en い complet, qui se conjugue : 使いやすかったです、使いやすくないです. On l'emploie surtout pour un objet, un outil, une route, un texte — tout ce qui facilite ou complique l'action de celui qui s'en sert.",
        },
        {
          type: "example",
          japanese: "この漢字は覚えにくいです。",
          romaji: "kono kanji wa oboenikui desu.",
          translation: "Ce kanji est difficile à retenir.",
          content:
            "にくい n'est pas synonyme de 難しい. 難しい dit que la chose est difficile en soi ; にくい dit que la chose se prête mal à l'action : この道は夜、歩きにくいです (cette rue est pénible à parcourir la nuit) ne signifie pas que marcher soit difficile. Cherchez toujours le verbe : c'est lui qui porte la gêne.",
        },
        {
          type: "warning",
          content:
            "Piège d'homophonie : やすい collé à un radical veut dire « facile à », alors que 安い tout seul veut dire « bon marché ». 安いカメラ = un appareil pas cher ; 使いやすいカメラ = un appareil facile à utiliser. À l'oral, seule la présence du radical verbal devant vous permet de trancher.",
        },
      ],
    },
    {
      title: "ちょっと : le mot qui dit non",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "ちょっと signifie « un peu ». Mais placé en réponse à une proposition, et surtout laissé en suspens, il ne dose plus rien : il refuse. Le japonais évite le refus frontal, qui ferait perdre la face aux deux personnes à la fois — celle qui essuie le non et celle qui l'inflige. On abandonne donc la phrase en cours de route, et l'interlocuteur complète mentalement.",
        },
        {
          type: "example",
          japanese: "明日、飲みに行きませんか。— 明日はちょっと…",
          romaji: "ashita, nomi ni ikimasen ka. — ashita wa chotto...",
          translation: "On va boire un verre demain ? — Demain, c'est un peu…",
          content:
            "C'est un non, sans ambiguïté aucune pour un Japonais. La suite de la phrase n'existe pas et ne doit pas être réclamée : demander どうしてですか met votre interlocuteur en difficulté. La bonne réaction est de refermer aussitôt : 「そうですか、また今度」 (« d'accord, une autre fois »).",
        },
        {
          type: "text",
          content:
            "La même stratégie se décline selon la situation. 〜はちょっと… pour décliner une option précise (この色はちょっと…). ちょっと難しいですね pour dire qu'une demande ne passera pas. 考えておきます (« je vais y réfléchir ») et, en entreprise, 検討します signifient très souvent non — un francophone y entend une porte ouverte et relance, ce qui est perçu comme lourd.",
        },
        {
          type: "comparison",
          content:
            "「いいえ、行きません」 est parfaitement grammatical, et pourtant vous ne l'entendrez presque jamais en réponse à une invitation. Le いいえ franc est réservé aux questions de fait (「学生ですか」「いいえ、会社員です」). Refuser une proposition et corriger une information ne mobilisent pas le même registre : confondre les deux est la faute de ton la plus fréquente chez les débutants.",
        },
        {
          type: "tip",
          content:
            "Le mécanisme joue aussi dans l'autre sens. Invitez avec 〜ませんか plutôt qu'avec un impératif : la forme négative laisse d'emblée la porte de sortie ouverte, et votre interlocuteur pourra refuser sans effort. Et rappelez-vous que ちょっと garde son sens littéral ailleurs : ちょっと待ってください、ちょっとすみません — là, c'est bien « un instant ».",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Deux collègues préparent un week-end à Kyoto. Deux hôtels, un seul budget : toute la conversation tient en comparaisons.",
    lines: [
      {
        speaker: "木村",
        japanese: "駅前のホテルと川の近くのホテルと、どちらがいいですか。",
        romaji: "ekimae no hoteru to kawa no chikaku no hoteru to, dochira ga ii desu ka.",
        french: "Entre l'hôtel devant la gare et celui près de la rivière, lequel est le mieux ?",
        note: "AとBと、どちらが〜ですか : le moule figé de la question de comparaison. Avec deux options, jamais 何 ni いちばん.",
      },
      {
        speaker: "佐藤",
        japanese: "駅前のほうが便利です。でも、ちょっと高すぎますね。",
        romaji: "ekimae no hou ga benri desu. demo, chotto takasugimasu ne.",
        french: "Celui devant la gare est plus pratique. Mais il est un peu trop cher.",
        note: "のほうが sans より : le terme de comparaison est déjà connu par la question, on ne le répète pas. 高い → 高すぎる, avec ちょっと pour amortir.",
      },
      {
        speaker: "木村",
        japanese: "川の近くのホテルは、値段が駅前ほど高くないです。そして、とても静かです。",
        romaji: "kawa no chikaku no hoteru wa, nedan ga ekimae hodo takakunai desu. soshite, totemo shizuka desu.",
        french: "L'hôtel près de la rivière, son prix n'est pas aussi élevé que celui de devant la gare. Et il est très calme.",
        note: "〜ほど…ない ne dit pas que l'hôtel est bon marché : il dit seulement qu'il n'atteint pas le prix de l'autre. Nuance polie, très japonaise.",
      },
      {
        speaker: "佐藤",
        japanese: "でも、駅から遠いですね。夜は帰りにくいです。",
        romaji: "demo, eki kara tooi desu ne. yoru wa kaerinikui desu.",
        french: "Mais c'est loin de la gare. Le soir, ce sera pénible pour rentrer.",
        note: "帰ります → 帰り + にくい. Ce n'est pas « difficile » dans l'absolu : c'est la distance qui rend le retour malcommode.",
      },
      {
        speaker: "木村",
        japanese: "バスがありますから、それほど不便じゃないですよ。",
        romaji: "basu ga arimasu kara, sorehodo fuben ja nai desu yo.",
        french: "Il y a un bus, donc ce n'est pas si peu pratique que ça.",
        note: "それほど appelle obligatoirement une négation. Le よ final signale une information que l'autre n'avait pas.",
      },
      {
        speaker: "佐藤",
        japanese: "そうですか。じゃあ、静かなほうにしましょう。",
        romaji: "sou desu ka. jaa, shizuka na hou ni shimashou.",
        french: "Ah bon. Alors va pour le calme.",
        note: "静かなほう : ほう est un nom, un adjectif en な le rejoint donc avec な. 〜にします sert à arrêter un choix — la phrase qu'on prononce au moment de commander ou de décider.",
      },
    ],
  },

  keyPoints: [
    "AよりBのほうが〜です : ce qui précède より perd la comparaison ; l'adjectif ne change jamais de forme, il n'existe pas de comparatif en japonais.",
    "Deux éléments → どちらが / のほうが. Trois et plus → 何・だれ・どこ + いちばん, avec 〜の中で pour délimiter le groupe.",
    "Égalité : Bと同じくらい〜. Infériorité : Bほど〜ない, toujours à la forme négative.",
    "あまり、それほど、全然 imposent une négation derrière eux ; とても、かなり、ちょっと、少し vont avec l'affirmatif.",
    "Sur le radical en ます se collent 〜すぎる (excès), 〜やすい (facile à) et 〜にくい (malcommode à) ; avec un adjectif, すぎる remplace le い ou le な final.",
    "ちょっと en réponse à une proposition est un refus poli, pas une réserve légère : on ne demande pas pourquoi, on referme avec また今度.",
  ],

  vocabulary: [
    {
      term: "比べる",
      kana: "くらべる",
      romaji: "kuraberu",
      segments: [{ text: "比", reading: "くら" }, { text: "べる" }],
      pitch: 0,
      french: "Comparer",
      english: "To compare",
    },
    {
      term: "方",
      kana: "ほう",
      romaji: "hou",
      segments: [{ text: "方", reading: "ほう" }],
      french: "Le côté, l'option (dans une comparaison)",
      english: "Side, option, direction",
    },
    {
      term: "一番",
      kana: "いちばん",
      romaji: "ichiban",
      segments: [
        { text: "一", reading: "いち" },
        { text: "番", reading: "ばん" },
      ],
      pitch: 2,
      french: "Le plus, en premier",
      english: "The most, number one",
      example: {
        sentence: "この店でこれがいちばん安いです。",
        romaji: "kono mise de kore ga ichiban yasui desu.",
        translation: "C'est le moins cher de ce magasin.",
      },
    },
    {
      term: "同じ",
      kana: "おなじ",
      romaji: "onaji",
      segments: [{ text: "同", reading: "おな" }, { text: "じ" }],
      pitch: 0,
      french: "Le même, pareil",
      english: "Same",
      example: {
        sentence: "わたしのかばんは田中さんのと同じです。",
        romaji: "watashi no kaban wa Tanaka-san no to onaji desu.",
        translation: "Mon sac est le même que celui de M. Tanaka.",
      },
    },
    {
      term: "便利",
      kana: "べんり",
      romaji: "benri",
      segments: [
        { text: "便", reading: "べん" },
        { text: "利", reading: "り" },
      ],
      pitch: 1,
      french: "Pratique, commode",
      english: "Convenient",
    },
    {
      term: "不便",
      kana: "ふべん",
      romaji: "fuben",
      segments: [
        { text: "不", reading: "ふ" },
        { text: "便", reading: "べん" },
      ],
      pitch: 1,
      french: "Peu pratique, malcommode",
      english: "Inconvenient",
    },
    {
      term: "静か",
      kana: "しずか",
      romaji: "shizuka",
      segments: [{ text: "静", reading: "しず" }, { text: "か" }],
      pitch: 1,
      french: "Calme, silencieux",
      english: "Quiet",
    },
    {
      term: "にぎやか",
      kana: "にぎやか",
      romaji: "nigiyaka",
      pitch: 2,
      french: "Animé, vivant",
      english: "Lively, bustling",
    },
    {
      term: "値段",
      kana: "ねだん",
      romaji: "nedan",
      segments: [
        { text: "値", reading: "ね" },
        { text: "段", reading: "だん" },
      ],
      pitch: 0,
      french: "Le prix",
      english: "Price",
    },
    {
      term: "味",
      kana: "あじ",
      romaji: "aji",
      segments: [{ text: "味", reading: "あじ" }],
      pitch: 0,
      french: "Le goût, la saveur",
      english: "Taste, flavour",
    },
    {
      term: "選ぶ",
      kana: "えらぶ",
      romaji: "erabu",
      segments: [{ text: "選", reading: "えら" }, { text: "ぶ" }],
      pitch: 2,
      french: "Choisir",
      english: "To choose",
      example: {
        sentence: "安いほうを選びました。",
        romaji: "yasui hou o erabimashita.",
        translation: "J'ai choisi le moins cher.",
      },
    },
    {
      term: "迷う",
      kana: "まよう",
      romaji: "mayou",
      segments: [{ text: "迷", reading: "まよ" }, { text: "う" }],
      pitch: 2,
      french: "Hésiter ; se perdre",
      english: "To hesitate; to get lost",
      example: {
        sentence: "メニューを見て、いつも迷います。",
        romaji: "menyuu o mite, itsumo mayoimasu.",
        translation: "Devant le menu, j'hésite toujours.",
      },
    },
    {
      term: "覚える",
      kana: "おぼえる",
      romaji: "oboeru",
      segments: [{ text: "覚", reading: "おぼ" }, { text: "える" }],
      pitch: 3,
      french: "Retenir, mémoriser",
      english: "To memorise, to learn by heart",
    },
    {
      term: "全然",
      kana: "ぜんぜん",
      romaji: "zenzen",
      segments: [
        { text: "全", reading: "ぜん" },
        { text: "然", reading: "ぜん" },
      ],
      pitch: 0,
      french: "Pas du tout (suivi d'une négation)",
      english: "Not at all (with negative)",
      example: {
        sentence: "この漢字は全然分かりません。",
        romaji: "kono kanji wa zenzen wakarimasen.",
        translation: "Je ne comprends pas du tout ce kanji.",
      },
    },
    {
      term: "かなり",
      kana: "かなり",
      romaji: "kanari",
      pitch: 1,
      french: "Assez, nettement",
      english: "Quite, considerably",
    },
    {
      term: "広い",
      kana: "ひろい",
      romaji: "hiroi",
      segments: [{ text: "広", reading: "ひろ" }, { text: "い" }],
      pitch: 2,
      french: "Large, spacieux",
      english: "Wide, spacious",
    },
    {
      term: "狭い",
      kana: "せまい",
      romaji: "semai",
      segments: [{ text: "狭", reading: "せま" }, { text: "い" }],
      pitch: 2,
      french: "Étroit, exigu",
      english: "Narrow, cramped",
    },
    {
      term: "遠い",
      kana: "とおい",
      romaji: "tooi",
      segments: [{ text: "遠", reading: "とお" }, { text: "い" }],
      pitch: 0,
      french: "Loin, éloigné",
      english: "Far",
    },
  ],

  exercises: [
    {
      id: "unit-31-ex1",
      type: "comprehension",
      question: "Dans 「日本語より英語のほうが簡単です」, quelle langue est présentée comme la plus facile ?",
      correctAnswer: "L'anglais",
      options: ["L'anglais", "Le japonais", "Les deux au même niveau", "La phrase ne le précise pas"],
      hint: "Ce qui précède より est le terme auquel on compare.",
    },
    {
      id: "unit-31-ex2",
      type: "fill-blank",
      question: "電車 ___ バスのほうが安いです。 « Le bus est moins cher que le train. »",
      correctAnswer: "より",
      options: ["より", "ほど", "でも", "から"],
      optionsHint: ["yori", "hodo", "demo", "kara"],
      hint: "Le terme qui perd la comparaison porte cette particule.",
    },
    {
      id: "unit-31-ex3",
      type: "comprehension",
      question: "Vous proposez un dîner ; on vous répond 「明日はちょっと…」. Que signifie cette réponse ?",
      correctAnswer: "C'est un refus poli : la personne décline",
      options: [
        "C'est un refus poli : la personne décline",
        "La personne accepte mais arrivera un peu en retard",
        "La personne demande un peu de temps avant de répondre",
        "La personne trouve que ce sera un peu cher",
      ],
      hint: "La phrase reste volontairement inachevée.",
    },
    {
      id: "unit-31-ex4",
      type: "fill-blank",
      question: "この漢字は ___ 。 « Ce kanji est difficile à retenir. »",
      correctAnswer: "覚えにくいです",
      options: ["覚えにくいです", "覚えやすいです", "覚えすぎます", "覚えました"],
      optionsHint: ["oboenikui desu", "oboeyasui desu", "oboesugimasu", "oboemashita"],
      optionsKana: ["おぼえにくいです", "おぼえやすいです", "おぼえすぎます", "おぼえました"],
      hint: "Le suffixe qui dit qu'une action se fait mal se colle au radical en ます.",
    },
    {
      id: "unit-31-ex5",
      type: "listen",
      question: "コーヒーよりお茶のほうが好きです。",
      correctAnswer: "Je préfère le thé au café.",
      options: [
        "Je préfère le thé au café.",
        "Je préfère le café au thé.",
        "J'aime autant le thé que le café.",
        "Je n'aime ni le thé ni le café.",
      ],
      hint: "Écoutez où tombe のほうが.",
    },
    {
      id: "unit-31-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « C'est ce magasin qui est le moins cher. »",
      correctAnswer: "この店がいちばん安いです。",
      options: ["この店", "が", "いちばん", "安いです"],
      optionsHint: ["kono mise", "ga", "ichiban", "yasui desu"],
      hint: "いちばん se place juste devant l'adjectif.",
    },
    {
      id: "unit-31-ex7",
      type: "comprehension",
      question: "「今日は昨日ほど暑くないです」 signifie :",
      correctAnswer: "Aujourd'hui il fait moins chaud qu'hier",
      options: [
        "Aujourd'hui il fait moins chaud qu'hier",
        "Aujourd'hui il fait plus chaud qu'hier",
        "Il fait aussi chaud qu'hier",
        "Hier non plus il ne faisait pas chaud",
      ],
      hint: "〜ほど…ない nie que le premier terme atteigne le niveau du second.",
    },
    {
      id: "unit-31-ex8",
      type: "translate",
      question: "Traduisez : « C'est un peu trop cher. »",
      correctAnswer: "ちょっと高すぎます。",
      options: ["ちょっと高すぎます。", "ちょっと高いすぎます。", "ちょっと高くすぎます。", "あまり高すぎます。"],
      optionsHint: ["chotto takasugimasu.", "chotto takaisugimasu.", "chotto takakusugimasu.", "amari takasugimasu."],
      optionsKana: ["ちょっとたかすぎます。", "ちょっとたかいすぎます。", "ちょっとたかくすぎます。", "あまりたかすぎます。"],
      hint: "Avec un adjectif en い, すぎる prend la place du い.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-30"],
};
