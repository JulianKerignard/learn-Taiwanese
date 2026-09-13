import type { CourseUnit } from "@/types/course";

export const unit12: CourseUnit = {
  id: "unit-12",
  number: 12,
  title: "Situer : あります, います et les mots de position",
  titleNative: "あります・います と 場所のことば",
  chapter: 2,
  description:
    "Deux verbes d'existence là où le français n'en a qu'un, et tout le vocabulaire de la position. À la fin de l'unité vous demandez et vous comprenez où se trouve quelque chose dans une gare japonaise.",
  icon: "📍",

  sections: [
    {
      title: "Deux verbes pour un seul « il y a »",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le français dit « il y a » pour tout : il y a une table, il y a un chat, il y a quelqu'un. Le japonais, lui, tranche. あります couvre les objets, les bâtiments, les plantes, les événements et les notions abstraites. います couvre les personnes et les animaux, c'est-à-dire tout ce qui se déplace de sa propre volonté. Le choix n'est pas une nuance de style : c'est l'un des tout premiers réflexes qu'un Japonais repère chez un étranger.",
        },
        {
          type: "example",
          native: "出口の となりに トイレが あります。",
          romanization: "deguchi no tonari ni toire ga arimasu.",
          translation: "Il y a des toilettes à côté de la sortie.",
          content:
            "Des toilettes ne se déplacent pas seules : あります. Observez surtout l'ordre des blocs — le lieu d'abord, la chose ensuite, le verbe tout à la fin. Le japonais va du cadre vers le détail, exactement à l'inverse du français qui annonce la chose puis la situe.",
        },
        {
          type: "example",
          native: "そとに ねこが います。",
          romanization: "soto ni neko ga imasu.",
          translation: "Il y a un chat dehors.",
          content:
            "Un chat se déplace seul : います. La structure est rigoureusement identique à l'exemple précédent, seul le verbe change. C'est donc la nature de la chose évoquée, jamais celle du lieu, qui décide du verbe.",
        },
        {
          type: "warning",
          content:
            "L'erreur classique du francophone : employer あります pour une personne. « Il y a quelqu'un là-bas » se dit あそこに 人が います, jamais あそこに 人が あります. Cette dernière phrase traite l'individu comme un meuble et fait immédiatement sursauter l'interlocuteur.",
        },
        {
          type: "comparison",
          content:
            "Et les plantes, les insectes ? Un arbre prend あります car il est planté là ; un insecte prend います car il bouge. La ligne de partage utile n'est donc pas « vivant / non vivant » mais « capable de se déplacer seul / immobile ». Retenez la version courte : personnes et animaux → います, tout le reste → あります.",
        },
        {
          type: "tip",
          content:
            "Entraînez-vous par paires immédiates, à voix haute : 人が います / トイレが あります, ねこが います / 出口が あります. Le verbe doit sortir sans réfléchir, sinon il ne sortira pas non plus dans une vraie conversation.",
        },
      ],
    },
    {
      title: "La structure [lieu] に [chose] が あります",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le squelette est fixe : [lieu] に [chose] が あります / います. に étiquette le lieu, が désigne ce dont on affirme l'existence, le verbe ferme la phrase. Comme toutes les particules japonaises, に et が se placent APRÈS le mot qu'elles marquent. C'est l'inverse mécanique de « à », « dans », « sur », qui précèdent en français.",
        },
        {
          type: "example",
          native: "ここに 駅が あります。",
          romanization: "koko ni eki ga arimasu.",
          translation: "Il y a une gare ici.",
          content:
            "ここに se lit « ici + marque de lieu ». Impossible de dire に ここ : la particule est collée derrière son mot comme une étiquette sur un bagage. Ce réflexe d'inversion est à installer maintenant, il vaudra pour toutes les particules de l'unité suivante.",
        },
        {
          type: "text",
          content:
            "Il existe une seconde version, avec は : [chose] は [lieu] に あります. Le point de départ change. ここに トイレが あります répond à « qu'est-ce qu'il y a ici ? ». トイレは ここに あります répond à « où sont les toilettes ? » : on parle des toilettes, et on donne leur position. Retenez pour l'instant que ce dont on parle déjà prend は, et que la chose nouvelle prend が.",
        },
        {
          type: "example",
          native: "トイレは 中に あります。",
          romanization: "toire wa naka ni arimasu.",
          translation: "Les toilettes sont à l'intérieur.",
          content:
            "La question portait sur les toilettes : elles sont le thème, donc は, et l'information neuve est 中に. Notez que le français bascule ici sur le verbe « être » alors que le japonais garde le même あります. Un seul verbe japonais, deux traductions françaises selon le point de vue.",
        },
        {
          type: "text",
          content:
            "La négation se forme sur le verbe : あります → ありません, います → いません. Dans une phrase négative, が devient presque toujours は : ここに トイレは ありません. Pour interroger, on ajoute か sans changer l'ordre des mots ni monter la voix : ありますか.",
        },
        {
          type: "example",
          native: "この ちかくに コンビニは ありませんか。",
          romanization: "kono chikaku ni konbini wa arimasen ka.",
          translation: "Il n'y aurait pas un konbini dans le coin ?",
          content:
            "La forme négative interrogative ...ませんか adoucit la demande : c'est ainsi qu'on aborde un inconnu dans la rue au Japon, plutôt que par une question frontale. Repérez は à la place de が, réflexe quasi systématique dès qu'il y a négation.",
        },
        {
          type: "tip",
          content:
            "Mémorisez la phrase-outil すみません、___ は ありますか。 (Excusez-moi, est-ce qu'il y a ___ ?). Un seul moule dans lequel vous glissez n'importe quel nom : il résout à lui seul une bonne moitié des situations pratiques d'un séjour.",
        },
      ],
    },
    {
      title: "Les mots de position sont des noms",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "うえ, した, なか, そと, まえ, うしろ, となり, ちかく ne sont pas des prépositions : ce sont des noms qui désignent une zone. 上 signifie « le dessus », 中 « l'intérieur », 前 « le devant ». On les relie au point de repère avec の, puis on ajoute に pour en faire un lieu : 駅 + の + 前 + に = « devant la gare ».",
        },
        {
          type: "example",
          native: "出口の 前に 人が います。",
          romanization: "deguchi no mae ni hito ga imasu.",
          translation: "Il y a quelqu'un devant la sortie.",
          content:
            "Trois briques empilées : 出口の (de la sortie) + 前 (le devant) + に (marque de lieu). Le français aligne les mêmes éléments dans l'ordre inverse. Prenez l'habitude de construire du repère vers la zone, et non de traduire mot à mot.",
        },
        {
          type: "comparison",
          content:
            "となり et ちかく ne sont pas interchangeables. となり désigne le voisin immédiat, contigu, dans une série d'éléments comparables : deux boutiques mitoyennes, deux sièges côte à côte. ちかく désigne les environs, à faible distance, sans contact. コンビニの となり est le local d'à côté ; コンビニの ちかく est le quartier autour.",
        },
        {
          type: "text",
          content:
            "なか mérite une attention particulière. Il traduit « dans » quand le contenant est délimité ou fermé : 駅の 中 (dans la gare), かばんの 中 (dans le sac). Pour un lieu envisagé simplement comme une destination, に suffit — 駅に います signifie « je suis à la gare ». Ajouter 中 insiste sur l'intérieur par opposition à l'extérieur.",
        },
        {
          type: "warning",
          content:
            "Ne calquez pas « sur la table » par un うえに isolé. うえ exige son repère à gauche : テーブルの うえに. Une phrase qui commence par うえに sans nom devant sonne comme un « au-dessus de » suspendu dans le vide, et l'interlocuteur attendra la suite.",
        },
        {
          type: "example",
          native: "ねこは テーブルの 下に います。",
          romanization: "neko wa teeburu no shita ni imasu.",
          translation: "Le chat est sous la table.",
          content:
            "テーブル est un emprunt, d'où le katakana. Le chat est le thème — on parle de lui — donc は, et sa position est l'information neuve. Et parce que c'est un animal : います, jamais あります.",
        },
        {
          type: "tip",
          content:
            "Exercice de trente secondes, faisable dans n'importe quelle pièce : nommez cinq objets autour de vous avec leur position complète, テレビの まえに, かばんの 中に. Les huit mots de position se fixent en deux jours par cette méthode, alors qu'une liste apprise par cœur s'efface en une semaine.",
        },
      ],
    },
    {
      title: "ここ, そこ, あそこ, どこ",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "L'unité précédente a posé これ / それ / あれ / どれ pour les objets. Les lieux suivent exactement le même découpage : ここ est l'endroit où je suis, そこ l'endroit où vous êtes, あそこ un endroit éloigné de nous deux, どこ l'endroit inconnu, celui de la question. Une fois ce schéma en tête, il se réplique sur toute une famille de mots.",
        },
        {
          type: "example",
          native: "トイレは どこですか。",
          romanization: "toire wa doko desu ka.",
          translation: "Où sont les toilettes ?",
          content:
            "La question la plus utile du voyage. Notez qu'on emploie です et non あります : ___ は どこですか demande une localisation en bloc. どこに ありますか est également correct, un peu plus insistant sur l'emplacement exact.",
        },
        {
          type: "example",
          native: "あそこです。",
          romanization: "asoko desu.",
          translation: "C'est là-bas.",
          content:
            "La réponse réelle se limitera souvent à ce seul mot, accompagné d'un geste de la main. あそこ suppose que l'endroit est visible mais éloigné des deux interlocuteurs ; s'il est près de votre interlocuteur, il dira そこ.",
        },
        {
          type: "comparison",
          content:
            "そこ se calibre sur l'autre, pas sur la distance absolue. Au téléphone, そこ désigne l'endroit où se trouve votre interlocuteur, fût-il à l'autre bout du pays. C'est la logique qui gouverne tout le système : la sphère du locuteur, celle de l'interlocuteur, puis le reste du monde.",
        },
        {
          type: "tip",
          content:
            "Version polie : こちら, そちら, あちら, どちら. Le personnel des gares, des hôtels et des grands magasins n'emploie pratiquement qu'elle — こちらです (c'est par ici), どちらですか. Vous l'entendrez plus souvent que ここ, apprenez au moins à la reconnaître.",
        },
        {
          type: "text",
          content:
            "Objectif de fin d'unité : produire sans hésiter trois moules. ___ は どこですか pour demander. [lieu]に [chose]が あります pour décrire. [repère]の [position]に います pour situer une personne. Ces trois structures couvrent l'essentiel de ce qu'on demande et de ce qu'on comprend dans une gare japonaise.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans une gare de Tokyo, à l'heure de pointe. Vous cherchez les toilettes, puis un konbini. L'employé répond vite : concentrez-vous sur la particule に et sur le mot de position qui la précède.",
    lines: [
      {
        speaker: "Vous",
        native: "すみません。トイレは どこですか。",
        romanization: "sumimasen. toire wa doko desu ka.",
        french: "Excusez-moi. Où sont les toilettes ?",
        note: "トイレは : は pose le thème, « quant aux toilettes ». On ne demande pas leur existence mais leur position.",
      },
      {
        speaker: "Employé",
        native: "あそこです。出口の となりに あります。",
        romanization: "asoko desu. deguchi no tonari ni arimasu.",
        french: "C'est là-bas. Elles sont juste à côté de la sortie.",
        note: "あそこ : loin de vous deux, mais visible. Puis la précision avec となり, contigu à la sortie.",
      },
      {
        speaker: "Vous",
        native: "ありがとうございます。ここに コンビニも ありますか。",
        romanization: "arigatou gozaimasu. koko ni konbini mo arimasu ka.",
        french: "Merci beaucoup. Est-ce qu'il y a aussi un konbini ici ?",
        note: "も signifie « aussi » et prend la place de は ou が. On ne dit jamais コンビニはも. La particule も est détaillée dans l'unité suivante.",
      },
      {
        speaker: "Employé",
        native: "はい。あの 出口の 前に あります。",
        romanization: "hai. ano deguchi no mae ni arimasu.",
        french: "Oui. Il y en a un devant cette sortie-là.",
        note: "あの 出口 : le déterminant あの de l'unité 11 désigne une sortie éloignée des deux interlocuteurs, celle qu'il montre du doigt.",
      },
      {
        speaker: "Vous",
        native: "中に 人が たくさん いますね。",
        romanization: "naka ni hito ga takusan imasu ne.",
        french: "Il y a beaucoup de monde à l'intérieur, dites donc.",
        note: "人 → います, obligatoirement. たくさん signifie « beaucoup » et se place avant le verbe, sans particule.",
      },
      {
        speaker: "Employé",
        native: "そうですね。じゃ、こちらへ どうぞ。",
        romanization: "sou desu ne. ja, kochira e douzo.",
        french: "En effet. Par ici, je vous en prie.",
        note: "こちら est la version polie de ここ, omniprésente chez le personnel japonais. La particule へ se prononce « e », jamais « he ».",
      },
    ],
  },

  keyPoints: [
    "あります pour ce qui ne se déplace pas seul, います pour les personnes et les animaux : le japonais tranche là où le français dit « il y a » dans tous les cas.",
    "La structure de base est [lieu] に [chose] が あります : に étiquette l'endroit, が désigne la chose dont on affirme l'existence, le verbe ferme la phrase.",
    "うえ, した, なか, そと, まえ, うしろ, となり, ちかく sont des noms, pas des prépositions : on les accroche au repère avec の, puis on ajoute に (駅の 前に).",
    "ここ / そこ / あそこ / どこ reprennent le découpage de これ / それ / あれ / どれ : chez moi, chez vous, loin des deux, inconnu.",
    "Négation sur le verbe : ありません, いません — et が cède presque toujours la place à は dans une phrase négative.",
  ],

  vocabulary: [
    { term: "あります", reading: "あります", romanization: "arimasu", french: "Il y a, se trouver (choses, plantes, lieux)", english: "There is (inanimate)" },
    { term: "います", reading: "います", romanization: "imasu", french: "Il y a, être là (personnes, animaux)", english: "There is (animate)" },
    { term: "上", reading: "うえ", romanization: "ue", segments: [{ text: "上", reading: "うえ" }], pitch: 0, french: "Le dessus, au-dessus", english: "Above, on top of" },
    { term: "下", reading: "した", romanization: "shita", segments: [{ text: "下", reading: "した" }], french: "Le dessous, sous", english: "Below, under" },
    { term: "中", reading: "なか", romanization: "naka", segments: [{ text: "中", reading: "なか" }], french: "L'intérieur, dans", english: "Inside, in" },
    { term: "外", reading: "そと", romanization: "soto", segments: [{ text: "外", reading: "そと" }], french: "L'extérieur, dehors", english: "Outside" },
    { term: "前", reading: "まえ", romanization: "mae", segments: [{ text: "前", reading: "まえ" }], french: "Le devant, devant", english: "Front, in front of" },
    { term: "後ろ", reading: "うしろ", romanization: "ushiro", segments: [{ text: "後", reading: "うし" }, { text: "ろ" }], french: "L'arrière, derrière", english: "Behind" },
    { term: "となり", reading: "となり", romanization: "tonari", french: "À côté (contigu, mitoyen)", english: "Next to, adjacent" },
    { term: "近く", reading: "ちかく", romanization: "chikaku", segments: [{ text: "近", reading: "ちか" }, { text: "く" }], french: "Les environs, près de", english: "Nearby, vicinity" },
    { term: "ここ", reading: "ここ", romanization: "koko", pitch: 0, french: "Ici (près de moi)", english: "Here" },
    { term: "そこ", reading: "そこ", romanization: "soko", french: "Là (près de vous)", english: "There, by you" },
    { term: "あそこ", reading: "あそこ", romanization: "asoko", french: "Là-bas (loin de nous deux)", english: "Over there" },
    { term: "どこ", reading: "どこ", romanization: "doko", pitch: 1, french: "Où", english: "Where" },
    { term: "ねこ", reading: "ねこ", romanization: "neko", pitch: 1, french: "Le chat", english: "Cat" },
    { term: "人", reading: "ひと", romanization: "hito", segments: [{ text: "人", reading: "ひと" }], french: "La personne, quelqu'un", english: "Person" },
    { term: "トイレ", reading: "トイレ", romanization: "toire", french: "Les toilettes", english: "Toilet, restroom" },
    { term: "出口", reading: "でぐち", romanization: "deguchi", segments: [{ text: "出", reading: "で" }, { text: "口", reading: "ぐち" }], french: "La sortie", english: "Exit" },
  ],

  exercises: [
    {
      id: "unit-12-ex1",
      type: "comprehension",
      question: "« Il y a un chat sous la table. » Quel verbe d'existence employez-vous ?",
      correctAnswer: "います",
      options: ["います", "あります", "です", "ありません"],
      optionsHint: ["imasu", "arimasu", "desu", "arimasen"],
      hint: "Un chat se déplace de lui-même.",
    },
    {
      id: "unit-12-ex2",
      type: "fill-blank",
      question: "出口の まえ ___ トイレが あります。 (Il y a des toilettes devant la sortie.)",
      correctAnswer: "に",
      options: ["に", "で", "を", "が"],
      optionsHint: ["ni", "de", "o", "ga"],
      hint: "Quelle particule étiquette le lieu où quelque chose existe ?",
    },
    {
      id: "unit-12-ex3",
      type: "comprehension",
      question: "Comment dit-on « à côté de la sortie » ?",
      correctAnswer: "出口のとなり",
      options: ["出口のとなり", "となりの出口", "出口にとなり", "となり出口"],
      optionsReading: ["でぐちのとなり", "となりのでぐち", "でぐちにとなり", "となりでぐち"],
      hint: "Le repère vient en premier, relié par の à la zone de position.",
    },
    {
      id: "unit-12-ex4",
      type: "fill-blank",
      question: "« Il n'y a pas de toilettes ici. » → ここに トイレは ___ 。",
      correctAnswer: "ありません",
      options: ["ありません", "いません", "じゃありません", "あります"],
      optionsHint: ["arimasen", "imasen", "ja arimasen", "arimasu"],
      hint: "La négation se forme sur le verbe d'existence, pas sur です.",
    },
    {
      id: "unit-12-ex5",
      type: "reorder",
      question: "Remettez dans l'ordre : « Les toilettes sont là-bas. »",
      correctAnswer: "トイレはあそこにあります。",
      options: ["トイレ", "は", "あそこ", "に", "あります"],
      hint: "Le thème d'abord, le lieu ensuite, le verbe à la fin.",
    },
    {
      id: "unit-12-ex6",
      type: "listen",
      question: "ねこはそとにいます。",
      correctAnswer: "Le chat est dehors.",
      options: [
        "Le chat est dehors.",
        "Le chat est à l'intérieur.",
        "Le chien est dehors.",
        "Il n'y a pas de chat dehors.",
      ],
      hint: "Écoutez le mot de position, puis la forme du verbe.",
    },
    {
      id: "unit-12-ex7",
      type: "comprehension",
      question: "そこ désigne quel endroit exactement ?",
      correctAnswer: "L'endroit où se trouve votre interlocuteur",
      options: [
        "L'endroit où se trouve votre interlocuteur",
        "L'endroit où vous vous trouvez",
        "Un endroit éloigné de vous deux",
        "Un endroit dont personne ne connaît la position",
      ],
      hint: "Le système ko-so-a-do se calibre sur les personnes, pas sur les mètres.",
    },
    {
      id: "unit-12-ex8",
      type: "translate",
      question: "Traduisez : « Où est la sortie ? »",
      correctAnswer: "出口はどこですか。",
      options: ["出口はどこですか。", "出口をどこですか。", "どこは出口ですか。", "出口にどこですか。"],
      optionsReading: ["でぐちはどこですか。", "でぐちをどこですか。", "どこはでぐちですか。", "でぐちにどこですか。"],
      hint: "Le mot dont on parle prend は, et le mot interrogatif reste à sa place devant です.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-11"],
};
