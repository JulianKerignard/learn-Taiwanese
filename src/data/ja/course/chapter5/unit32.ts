import type { CourseUnit } from "@/types/course";

export const unit32: CourseUnit = {
  id: "unit-32",
  number: 32,
  chapter: 5,
  title: "Tout ce qui précède le nom : les relatives",
  titleNative: "名詞を修飾する文",
  description:
    "昨日買った本 = « le livre que j'ai acheté hier ». Le japonais place la proposition relative avant le nom, sans pronom relatif : c'est le renversement qui bloque la lecture, et l'unité qui la débloque. Puis 〜とき、〜あいだ et les nominalisateurs こと et の.",
  icon: "修",

  sections: [
    {
      title: "La relative se place avant le nom",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le français accroche la relative derrière le nom et la relie par un pronom : « le livre que j'ai acheté hier ». Le japonais fait exactement l'inverse et se passe du pronom : la proposition entière se pose devant le nom, comme un adjectif, et rien ne vient signaler la jointure. 昨日買った本, mot à mot « hier-acheté-livre ». Il n'existe ni que, ni qui, ni où, ni dont — c'est le sens seul qui indique quel rôle le nom joue dans la proposition qui le précède.",
        },
        {
          type: "example",
          native: "昨日買った本",
          romanization: "kinou katta hon",
          translation: "Le livre que j'ai acheté hier",
          content:
            "Le noyau du groupe est le dernier mot, 本. Tout ce qui le précède le décrit. Le verbe est à la forme neutre 買った, jamais 買いました : à l'intérieur d'un déterminant, la politesse ne se marque pas. C'est la fin de la phrase, et elle seule, qui portera le registre poli.",
        },
        {
          type: "example",
          native: "日本語を教える先生",
          romanization: "nihongo o oshieru sensei",
          translation: "Le professeur qui enseigne le japonais",
          content:
            "Même construction, rôle inverse : ici 先生 est le sujet de 教える, alors que 本 était le complément d'objet de 買った. Le japonais n'a aucun marqueur pour distinguer les deux cas. Un professeur qu'on enseigne n'a pas de sens, un livre qui achète non plus : c'est votre connaissance du monde qui tranche, pas la grammaire.",
        },
        {
          type: "text",
          content:
            "La règle de forme est simple et sans exception : devant le nom, tout passe en forme neutre. Verbe : 買う / 買った / 買わない / 買わなかった. Adjectif en い : 高い本、高かった本. Adjectif en な : 静かな部屋、静かだった部屋. Nom : 学生の友だち、学生だった友だち. Le です disparaît complètement à l'intérieur du déterminant.",
        },
        {
          type: "warning",
          content:
            "「昨日買いました本」 est agrammatical, et c'est le premier réflexe d'un débutant qui n'a appris que la forme polie. Souvenez-vous du partage des tâches : la forme neutre construit la phrase, la forme polie l'achève. Un ました au milieu d'une phrase est presque toujours une erreur.",
        },
        {
          type: "comparison",
          content:
            "À l'oral, ce renversement coûte cher au francophone : « le livre que j'ai acheté hier » se planifie de gauche à droite, 昨日買った本 se planifie à l'envers. Vous devez décider du nom-tête d'abord, puis prononcer tout le reste avant lui. Tant que vous traduisez mot à mot, vous restez bloqué ; l'entraînement consiste à partir du nom et à construire vers l'arrière.",
        },
      ],
    },
    {
      title: "Le sujet interne prend が (ou の), jamais は",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Quand la proposition qui précède le nom contient son propre sujet, ce sujet prend が. Jamais は. La raison est structurelle : は ne marque pas le sujet, il pose le thème de la phrase entière, et une proposition enfermée dans un groupe nominal n'a pas de thème à poser. Dans une relative courte, が peut d'ailleurs être remplacé par の — 母が作った料理 et 母の作った料理 sont tous les deux corrects, le second sonnant un peu plus écrit.",
        },
        {
          type: "example",
          native: "母が作った料理はおいしいです。",
          romanization: "haha ga tsukutta ryouri wa oishii desu.",
          translation: "Le plat que ma mère a préparé est bon.",
          content:
            "Deux étages dans la phrase. À l'intérieur : 母が作った, avec が. À l'extérieur : 料理は, thème de la phrase principale. Repérez le は : il vous dit toujours où se termine le groupe nominal et où commence la phrase.",
        },
        {
          type: "warning",
          content:
            "L'erreur typique du francophone est 「わたしは昨日買った本…」 pour dire « le livre que j'ai acheté hier ». Avec は, わたし devient le thème de toute la phrase, et l'auditeur attend un commentaire sur vous, pas sur le livre. Dites わたしが買った本, ou mieux, supprimez le sujet : si le contexte est clair, 買った本 suffit.",
        },
        {
          type: "example",
          native: "わたしが好きな店は駅の近くにあります。",
          romanization: "watashi ga suki na mise wa eki no chikaku ni arimasu.",
          translation: "Le magasin que j'aime est près de la gare.",
          content:
            "好き est un adjectif en な : dans le déterminant il garde son な devant le nom, et le sujet interne わたし prend が. Notez qu'ici の serait également possible : わたしの好きな店, formulation très courante.",
        },
        {
          type: "text",
          content:
            "Les déterminants s'empilent, et c'est là que la lecture décroche. 「昨日友だちと行った店で食べた料理」 contient deux propositions imbriquées : 料理 est décrit par 〜で食べた, et le 店 qui sert de lieu à ce repas est lui-même décrit par 昨日友だちと行った. À l'écrit, une virgule marque souvent la frontière entre deux déterminants successifs.",
        },
        {
          type: "example",
          native: "昨日友だちと行った店で食べた料理はとてもおいしかったです。",
          romanization: "kinou tomodachi to itta mise de tabeta ryouri wa totemo oishikatta desu.",
          translation: "Le plat que j'ai mangé dans le restaurant où je suis allé hier avec un ami était très bon.",
          content:
            "Méthode de décodage, à appliquer mécaniquement : cherchez le は ou le point final, prenez le nom qui le précède (料理), puis remontez vers la gauche jusqu'au verbe neutre qui le gouverne (食べた), puis identifiez son lieu (店で), puis constatez que 店 est à son tour déterminé par 行った. On lit de droite à gauche, par paliers, et la phrase s'ouvre.",
        },
        {
          type: "tip",
          content:
            "Entraînez-vous sur des groupes nominaux isolés avant d'attaquer des phrases : わたしが住んでいる町、父が撮った写真、日本語で書いた手紙. Dix minutes par jour sur ce type de blocs valent mieux qu'une heure de traduction linéaire — c'est le réflexe de remontée qu'on installe, pas du vocabulaire.",
        },
      ],
    },
    {
      title: "〜とき et 〜あいだ : le même mécanisme sur un nom de temps",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "とき est un nom : il signifie « le moment ». Ce qui explique tout le reste — 「日本へ行くとき」 n'est rien d'autre qu'un déterminant posé devant ce nom, exactement comme 買った本. La règle de forme est donc la même : forme neutre devant とき, jamais ます. Avec un nom on intercale の (子どものとき), avec un adjectif en な on garde な (元気なとき), avec un adjectif en い on ne change rien (忙しいとき).",
        },
        {
          type: "example",
          native: "日本へ行くとき、空港でこの本を買いました。",
          romanization: "nihon e iku toki, kuukou de kono hon o kaimashita.",
          translation: "Quand je suis parti au Japon, j'ai acheté ce livre à l'aéroport.",
          content:
            "行くとき, au non-passé : au moment de l'achat, le voyage n'était pas accompli. L'achat a donc eu lieu avant l'arrivée — ici, à l'aéroport de départ. Le temps de とき ne se calcule pas par rapport à maintenant, mais par rapport à l'action de la phrase principale.",
        },
        {
          type: "example",
          native: "日本へ行ったとき、京都でこの本を買いました。",
          romanization: "nihon e itta toki, Kyouto de kono hon o kaimashita.",
          translation: "Quand j'étais au Japon, j'ai acheté ce livre à Kyoto.",
          content:
            "Un seul caractère de différence avec la phrase précédente, et le lieu de l'achat change de continent. 行ったとき : le déplacement est achevé, on est sur place. C'est le point de grammaire le plus testé de tout le N4, et une source de malentendus bien réels en conversation.",
        },
        {
          type: "text",
          content:
            "あいだ (間) est également un nom : il désigne un intervalle. 〜あいだ signifie « pendant tout le temps que » et l'action principale dure autant que l'intervalle. 〜あいだに signifie « à un moment de cet intervalle » et l'action principale est ponctuelle. Le に fait toute la différence, et l'oublier change le sens de la phrase.",
        },
        {
          type: "example",
          native: "夏休みのあいだに、京都へ行きました。",
          romanization: "natsuyasumi no aida ni, Kyouto e ikimashita.",
          translation: "Pendant les vacances d'été, je suis allé à Kyoto.",
          content:
            "あいだに : le voyage occupe un moment des vacances, pas la totalité. Avec あいだ sans に — 夏休みのあいだ、ずっと勉強しました — l'action couvrirait tout l'intervalle. Réflexe : action ponctuelle → あいだに ; action continue → あいだ.",
        },
        {
          type: "warning",
          content:
            "「行きますとき」、「勉強しますあいだ」 sont faux. Ces deux mots sont des noms, et rien de poli ne peut se glisser devant un nom. Si vous entendez ます au milieu de votre propre phrase, arrêtez-vous et repassez en forme neutre.",
        },
      ],
    },
    {
      title: "Nominaliser une proposition : こと et の",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Dernière application du même mécanisme. Pour qu'une proposition devienne sujet ou complément — « lire des livres », « le fait que… » — on la termine par こと ou par の, deux noms vides posés derrière la forme neutre. 日本語を勉強すること, littéralement « la chose d'étudier le japonais ». La proposition entière se comporte alors comme un nom et reçoit が, を ou は.",
        },
        {
          type: "example",
          native: "日本語を勉強するのは楽しいです。",
          romanization: "nihongo o benkyou suru no wa tanoshii desu.",
          translation: "Étudier le japonais est agréable.",
          content:
            "の est le nominalisateur du quotidien, et c'est lui qu'on emploie avec 好き, 上手, 楽しい. Attention à ne pas le confondre avec le の possessif : ici il ne relie pas deux noms, il transforme un verbe en nom.",
        },
        {
          type: "text",
          content:
            "Le partage entre les deux est assez net. の s'impose pour un événement concret, perçu ou simultané, notamment après les verbes de perception : 見る、聞く、手伝う. こと s'impose pour une notion abstraite ou générale, et dans les tournures figées : 〜ことができる, 趣味は〜こと. Après です, seul こと est possible : 「趣味は本を読むことです」 — 「読むのです」 signifie tout autre chose, c'est une explication.",
        },
        {
          type: "example",
          native: "友だちが歌うのを聞きました。",
          romanization: "tomodachi ga utau no o kikimashita.",
          translation: "J'ai entendu mon ami chanter.",
          content:
            "Verbe de perception, donc の obligatoire — 「歌うことを聞きました」 est faux. Et remarquez le sujet interne 友だちが : le が des relatives, encore une fois, parce que la proposition est enchâssée.",
        },
        {
          type: "example",
          native: "わたしは日本語を話すことができます。",
          romanization: "watashi wa nihongo o hanasu koto ga dekimasu.",
          translation: "Je sais parler japonais.",
          content:
            "〜ことができる est la façon transparente d'exprimer la capacité : la proposition nominalisée devient sujet de できる. Elle est un peu plus formelle que la forme potentielle, et elle a l'avantage de ne demander aucune conjugaison nouvelle.",
        },
        {
          type: "tip",
          content:
            "C'est ici que la lecture de textes réels devient possible. Une phrase de journal n'est presque jamais compliquée : c'est un empilement de déterminants devant un nom, terminé par un verbe. Trouvez le nom-tête, remontez vers la gauche, isolez chaque forme neutre — la longueur cesse d'être un obstacle.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Au bureau des objets trouvés d'une gare. Décrire un objet perdu oblige à empiler les déterminants : toute la conversation fonctionne à la relative.",
    lines: [
      {
        speaker: "客",
        native: "すみません、昨日電車の中にかばんを忘れました。",
        romanization: "sumimasen, kinou densha no naka ni kaban o wasuremashita.",
        french: "Excusez-moi, hier j'ai oublié un sac dans le train.",
        note: "忘れる = oublier, laisser derrière soi. On pose d'abord le fait, la description viendra ensuite.",
      },
      {
        speaker: "係員",
        native: "どんなかばんですか。",
        romanization: "donna kaban desu ka.",
        french: "Quel genre de sac ?",
        note: "どんな appelle une description. En français elle suivra le nom, en japonais elle devra le précéder.",
      },
      {
        speaker: "客",
        native: "黒くて小さいかばんです。去年、京都で買ったかばんです。",
        romanization: "kurokute chiisai kaban desu. kyonen, Kyouto de katta kaban desu.",
        french: "Un petit sac noir. C'est un sac que j'ai acheté l'an dernier à Kyoto.",
        note: "買った à la forme neutre, placé devant かばん. Le français dirait « que j'ai acheté » après le nom : ici tout arrive avant. 去年 = l'an dernier.",
      },
      {
        speaker: "係員",
        native: "中に何がありますか。",
        romanization: "naka ni nani ga arimasu ka.",
        french: "Qu'est-ce qu'il y a dedans ?",
      },
      {
        speaker: "客",
        native: "財布と、日本語を勉強するときに使うノートがあります。",
        romanization: "saifu to, nihongo o benkyou suru toki ni tsukau nooto ga arimasu.",
        french: "Un portefeuille, et le carnet dont je me sers quand j'étudie le japonais.",
        note: "Deux niveaux emboîtés : 使うノート est déjà un déterminant, et 日本語を勉強するとき en est un autre à l'intérieur. 財布 = portefeuille.",
      },
      {
        speaker: "係員",
        native: "名前を書いたかばんが一つあります。これですか。",
        romanization: "namae o kaita kaban ga hitotsu arimasu. kore desu ka.",
        french: "Nous avons un sac sur lequel un nom est écrit. C'est celui-ci ?",
        note: "名前を書いたかばん : ici かばん n'est ni le sujet ni l'objet de 書く, c'est le support. Aucun marqueur ne le dit — seul le sens permet de le comprendre.",
      },
      {
        speaker: "客",
        native: "あ、それです。ありがとうございます。",
        romanization: "a, sore desu. arigatou gozaimasu.",
        french: "Ah, c'est celui-là. Merci beaucoup.",
      },
    ],
  },

  keyPoints: [
    "La proposition qui décrit un nom se place avant lui, sans pronom relatif : 昨日買った本 = « le livre que j'ai acheté hier ». Le nom-tête est toujours le dernier mot du groupe.",
    "Tout ce qui précède le nom passe en forme neutre : 買った本、高かった本、静かな部屋、学生の友だち. Un ます au milieu d'une phrase est presque toujours une faute.",
    "Le sujet interne prend が, ou の dans une relative courte, mais jamais は : は pose le thème de la phrase entière, pas celui d'un groupe nominal.",
    "On lit de droite à gauche : repérer le nom-tête, remonter au verbe neutre qui le gouverne, puis dépiler les déterminants successifs.",
    "とき et あいだ sont des noms, donc soumis à la même règle : 行くとき (avant d'arriver) et 行ったとき (une fois sur place) ne désignent pas le même moment ; あいだ = pendant toute la durée, あいだに = à un moment de la durée.",
    "こと et の nominalisent une proposition : の pour le concret et après les verbes de perception, こと pour l'abstrait, après です et dans 〜ことができる.",
  ],

  vocabulary: [
    {
      term: "時",
      reading: "とき",
      romanization: "toki",
      segments: [{ text: "時", reading: "とき" }],
      french: "Le moment, le moment où",
      english: "Time, moment, when",
      example: {
        sentence: "子どものとき、よく本を読みました。",
        romanization: "kodomo no toki, yoku hon o yomimashita.",
        translation: "Enfant, je lisais beaucoup.",
      },
    },
    {
      term: "間",
      reading: "あいだ",
      romanization: "aida",
      segments: [{ text: "間", reading: "あいだ" }],
      pitch: 0,
      french: "L'intervalle, pendant que",
      english: "Interval, while",
    },
    {
      term: "こと",
      reading: "こと",
      romanization: "koto",
      french: "Le fait de, la chose (abstraite)",
      english: "Thing (abstract), the fact of",
      example: {
        sentence: "日本語を話すことができます。",
        romanization: "nihongo o hanasu koto ga dekimasu.",
        translation: "Je sais parler japonais.",
      },
    },
    {
      term: "買う",
      reading: "かう",
      romanization: "kau",
      segments: [{ text: "買", reading: "か" }, { text: "う" }],
      pitch: 0,
      french: "Acheter",
      english: "To buy",
    },
    {
      term: "撮る",
      reading: "とる",
      romanization: "toru",
      segments: [{ text: "撮", reading: "と" }, { text: "る" }],
      pitch: 1,
      french: "Prendre (une photo)",
      english: "To take (a photo)",
    },
    {
      term: "写真",
      reading: "しゃしん",
      romanization: "shashin",
      segments: [
        { text: "写", reading: "しゃ" },
        { text: "真", reading: "しん" },
      ],
      pitch: 0,
      french: "La photo",
      english: "Photograph",
      example: {
        sentence: "これは父が撮った写真です。",
        romanization: "kore wa chichi ga totta shashin desu.",
        translation: "C'est une photo prise par mon père.",
      },
    },
    {
      term: "書く",
      reading: "かく",
      romanization: "kaku",
      segments: [{ text: "書", reading: "か" }, { text: "く" }],
      pitch: 1,
      french: "Écrire",
      english: "To write",
    },
    {
      term: "住む",
      reading: "すむ",
      romanization: "sumu",
      segments: [{ text: "住", reading: "す" }, { text: "む" }],
      pitch: 1,
      french: "Habiter, résider",
      english: "To live, to reside",
    },
    {
      term: "知る",
      reading: "しる",
      romanization: "shiru",
      segments: [{ text: "知", reading: "し" }, { text: "る" }],
      pitch: 0,
      french: "Savoir, connaître",
      english: "To know",
    },
    {
      term: "人",
      reading: "ひと",
      romanization: "hito",
      segments: [{ text: "人", reading: "ひと" }],
      pitch: 0,
      french: "La personne, les gens",
      english: "Person, people",
    },
    {
      term: "場所",
      reading: "ばしょ",
      romanization: "basho",
      segments: [
        { text: "場", reading: "ば" },
        { text: "所", reading: "しょ" },
      ],
      pitch: 0,
      french: "Le lieu, l'endroit",
      english: "Place, location",
      example: {
        sentence: "静かな場所で勉強します。",
        romanization: "shizuka na basho de benkyou shimasu.",
        translation: "J'étudie dans un endroit calme.",
      },
    },
    {
      term: "料理",
      reading: "りょうり",
      romanization: "ryouri",
      segments: [
        { text: "料", reading: "りょう" },
        { text: "理", reading: "り" },
      ],
      pitch: 1,
      french: "La cuisine, le plat",
      english: "Cooking, dish",
    },
    {
      term: "説明",
      reading: "せつめい",
      romanization: "setsumei",
      segments: [
        { text: "説", reading: "せつ" },
        { text: "明", reading: "めい" },
      ],
      pitch: 0,
      french: "L'explication",
      english: "Explanation",
    },
    {
      term: "意味",
      reading: "いみ",
      romanization: "imi",
      segments: [
        { text: "意", reading: "い" },
        { text: "味", reading: "み" },
      ],
      pitch: 1,
      french: "Le sens, la signification",
      english: "Meaning",
      example: {
        sentence: "この言葉の意味が分かりません。",
        romanization: "kono kotoba no imi ga wakarimasen.",
        translation: "Je ne comprends pas le sens de ce mot.",
      },
    },
    {
      term: "始まる",
      reading: "はじまる",
      romanization: "hajimaru",
      segments: [{ text: "始", reading: "はじ" }, { text: "まる" }],
      pitch: 0,
      french: "Commencer (se mettre en route)",
      english: "To begin, to start",
    },
    {
      term: "終わる",
      reading: "おわる",
      romanization: "owaru",
      segments: [{ text: "終", reading: "お" }, { text: "わる" }],
      pitch: 0,
      french: "Se terminer, finir",
      english: "To end, to finish",
    },
    {
      term: "探す",
      reading: "さがす",
      romanization: "sagasu",
      segments: [{ text: "探", reading: "さが" }, { text: "す" }],
      pitch: 0,
      french: "Chercher",
      english: "To look for",
    },
    {
      term: "借りる",
      reading: "かりる",
      romanization: "kariru",
      segments: [{ text: "借", reading: "か" }, { text: "りる" }],
      pitch: 0,
      french: "Emprunter",
      english: "To borrow",
      example: {
        sentence: "図書館で本を借りました。",
        romanization: "toshokan de hon o karimashita.",
        translation: "J'ai emprunté un livre à la bibliothèque.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-32-ex1",
      type: "comprehension",
      question: "Que désigne le groupe 「昨日買った本」 ?",
      correctAnswer: "Le livre que j'ai acheté hier",
      options: [
        "Le livre que j'ai acheté hier",
        "Le livre a été acheté hier",
        "Hier, j'ai acheté un livre",
        "Le livre qui achète depuis hier",
      ],
      hint: "C'est un groupe nominal, pas une phrase : le noyau est le dernier mot.",
    },
    {
      id: "unit-32-ex2",
      type: "comprehension",
      question: "Quelle particule marque le sujet à l'intérieur d'une proposition qui décrit un nom ?",
      correctAnswer: "が (ou の dans une relative courte), jamais は",
      options: [
        "が (ou の dans une relative courte), jamais は",
        "は, comme dans n'importe quelle phrase",
        "を dans tous les cas",
        "Aucune particule : le sujet interne n'en prend pas",
      ],
      hint: "は pose le thème de la phrase entière, pas celui d'un groupe nominal.",
    },
    {
      id: "unit-32-ex3",
      type: "fill-blank",
      question: "これは母 ___ 作った料理です。 « Voici le plat que ma mère a préparé. »",
      correctAnswer: "が",
      options: ["が", "は", "を", "で"],
      optionsHint: ["ga", "wa", "o", "de"],
      hint: "母 est le sujet de 作った, à l'intérieur du groupe nominal.",
    },
    {
      id: "unit-32-ex4",
      type: "fill-blank",
      question: "日本語を ___ とき、じしょを使います。 « Quand j'écris en japonais, j'utilise un dictionnaire. »",
      correctAnswer: "書く",
      options: ["書く", "書きます", "書いて", "書きの"],
      optionsHint: ["kaku", "kakimasu", "kaite", "kaki no"],
      optionsReading: ["かく", "かきます", "かいて", "かきの"],
      hint: "とき est un nom : ce qui le précède est un déterminant.",
    },
    {
      id: "unit-32-ex5",
      type: "listen",
      question: "これは父が撮った写真です。",
      correctAnswer: "C'est une photo que mon père a prise.",
      options: [
        "C'est une photo que mon père a prise.",
        "C'est une photo de mon père.",
        "Mon père a pris une photo.",
        "C'est mon père qui est sur la photo.",
      ],
      hint: "Écoutez le が : il marque le sujet à l'intérieur du groupe.",
    },
    {
      id: "unit-32-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Le livre que j'ai acheté hier est intéressant. »",
      correctAnswer: "昨日買った本はおもしろいです。",
      options: ["昨日", "買った", "本", "は", "おもしろいです"],
      optionsHint: ["kinou", "katta", "hon", "wa", "omoshiroi desu"],
      hint: "Le nom décrit arrive après tout ce qui le décrit.",
    },
    {
      id: "unit-32-ex7",
      type: "comprehension",
      question: "Quelle phrase dit correctement « j'aime lire des livres » ?",
      correctAnswer: "本を読むのが好きです",
      options: ["本を読むのが好きです", "本を読みますが好きです", "本を読むが好きです", "本を読んで好きです"],
      optionsHint: [
        "hon o yomu no ga suki desu",
        "hon o yomimasu ga suki desu",
        "hon o yomu ga suki desu",
        "hon o yonde suki desu",
      ],
      optionsReading: [
        "ほんをよむのがすきです",
        "ほんをよみますがすきです",
        "ほんをよむがすきです",
        "ほんをよんですきです",
      ],
      hint: "Une proposition ne peut pas prendre が sans être d'abord transformée en nom.",
    },
    {
      id: "unit-32-ex8",
      type: "translate",
      question: "Traduisez : « Le restaurant où nous avons mangé hier était cher. »",
      correctAnswer: "昨日食べたレストランは高かったです。",
      options: [
        "昨日食べたレストランは高かったです。",
        "昨日食べるレストランは高かったです。",
        "レストランは昨日食べたが高かったです。",
        "昨日食べましたレストランは高かったです。",
      ],
      optionsHint: [
        "kinou tabeta resutoran wa takakatta desu.",
        "kinou taberu resutoran wa takakatta desu.",
        "resutoran wa kinou tabeta ga takakatta desu.",
        "kinou tabemashita resutoran wa takakatta desu.",
      ],
      optionsReading: [
        "きのうたべたレストランはたかかったです。",
        "きのうたべるレストランはたかかったです。",
        "レストランはきのうたべたがたかかったです。",
        "きのうたべましたレストランはたかかったです。",
      ],
      hint: "Le déterminant précède le nom, et son verbe reste à la forme neutre passée.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-31"],
};
