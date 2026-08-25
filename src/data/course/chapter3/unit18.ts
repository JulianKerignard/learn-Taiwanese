import type { CourseUnit } from "@/types/course";

export const unit18: CourseUnit = {
  id: "unit-18",
  number: 18,
  title: "Se déplacer : train, métro et bus",
  titleJa: "電車で行きます",
  chapter: 3,
  description:
    "Acheter un billet, trouver son quai, changer de ligne et demander son chemin. À la fin de cette unité vous traversez une ville japonaise sans vous perdre, avec deux particules et trois questions.",
  icon: "駅",

  sections: [
    {
      title: "Le réseau japonais : trois mots à ne pas confondre",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Trois mots couvrent l'essentiel des déplacements urbains. 電車 (でんしゃ) désigne le train, celui qui circule en surface ou sur viaduc : c'est le mode par défaut dans toutes les grandes villes. 地下鉄 (ちかてつ) est le métro, littéralement « le fer sous terre ». バス complète le maillage là où le rail ne va pas — à Kyoto, ville sans métro dense, le bus est même le moyen principal. Ces trois mots ne sont pas interchangeables : dire バス pour un train fera répéter la question.",
        },
        {
          type: "example",
          japanese: "地下鉄の駅はどこですか。",
          romaji: "chikatetsu no eki wa doko desu ka.",
          translation: "Où est la station de métro ?",
          content:
            "の relie deux noms : « la station du métro ». Notez surtout que 駅 sert pour les deux, là où le français distingue « gare » et « station ». Un Japonais dira 駅 aussi bien pour une gare de banlieue que pour une bouche de métro, et la question reste la même.",
        },
        {
          type: "text",
          content:
            "La vraie difficulté n'est pas le vocabulaire, c'est la structure du réseau. Trois familles d'opérateurs coexistent : JR (l'ancien réseau national), les 私鉄 (compagnies privées : Tokyu, Keio, Hankyu, Kintetsu…) et le métro municipal. Chacune vend ses propres titres de transport et possède ses propres portillons. Deux lignes peuvent porter le nom de la même station tout en étant, physiquement, deux bâtiments séparés à cinq minutes de marche.",
        },
        {
          type: "warning",
          content:
            "Le réflexe francophone est de raisonner comme à Paris : un ticket, un réseau, des correspondances gratuites. Au Japon, passer d'une ligne JR à une ligne de métro veut dire sortir par un 改札 (portillon), en franchir un autre, et payer un second trajet. Ce n'est pas une erreur de votre part : c'est le fonctionnement normal, et il faut le budgéter.",
        },
        {
          type: "tip",
          content:
            "Prenez une ICカード dès l'aéroport (Suica, Pasmo à Tokyo, ICOCA à Osaka). Elles sont acceptées dans presque tout le pays, quel que soit l'opérateur, et servent aussi en supérette et aux distributeurs. On la recharge (チャージ) à une borne, on la pose sur le lecteur en entrant et en sortant : plus besoin de lire la grille tarifaire au-dessus des machines, ni de savoir combien coûte le trajet avant de partir.",
        },
        {
          type: "text",
          content:
            "Le bus obéit à deux systèmes selon la ville. À Tokyo, tarif unique : on monte à l'avant, on paie tout de suite, on descend par le milieu. À Kyoto et dans la plupart des villes de province, tarif à la distance : on monte à l'arrière, on paie en descendant à l'avant. Regardez simplement par quelle porte la file s'engouffre, c'est l'indice le plus fiable.",
        },
      ],
    },
    {
      title: "Aller quelque part : へ pour la destination, で pour le moyen",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La structure de base tient en trois éléments : [lieu] へ 行きます. La destination vient en premier, la particule へ la marque comme direction, et le verbe ferme la phrase — le japonais place toujours le verbe à la fin. Aucune préposition avant le lieu, aucun article : le mot nu, puis la particule qui dit son rôle.",
        },
        {
          type: "example",
          japanese: "京都へ行きます。",
          romaji: "Kyouto e ikimasu.",
          translation: "Je vais à Kyoto.",
          content:
            "Attention à la lecture : cette particule s'écrit avec le kana へ (he) mais se prononce « e ». C'est un vestige d'orthographe ancienne, au même titre que le は du thème qui se lit « wa ». Il n'y a rien à comprendre, juste à mémoriser : à l'écrit へ, à l'oral « e ».",
        },
        {
          type: "text",
          content:
            "Le moyen de transport, lui, est marqué par で : 電車で、バスで、地下鉄で、自転車で、タクシーで. C'est la même particule que celle des instruments (はしで食べます, manger avec des baguettes) — le japonais traite le train comme un outil qui sert à se déplacer. On place normalement le moyen avant la destination, mais l'ordre des deux groupes est libre tant que le verbe reste à la fin.",
        },
        {
          type: "example",
          japanese: "バスで駅へ行きます。",
          romaji: "basu de eki e ikimasu.",
          translation: "Je vais à la gare en bus.",
          content:
            "Deux particules, deux rôles bien séparés : で dit comment, へ dit où. Le français utilise « en » et « à », deux mots courts qu'on oublie facilement de distinguer une fois traduits. Retenez la règle négative, plus efficace : で ne marque jamais la destination.",
        },
        {
          type: "warning",
          content:
            "Aller à pied ne prend pas で. On dit 歩いて行きます (« j'y vais en marchant ») ou tout simplement 歩きます. Les formes calquées du français — 足で行きます, « avec les pieds » — sont incompréhensibles, et 歩くで n'existe pas : で ne se colle jamais à un verbe.",
        },
        {
          type: "comparison",
          content:
            "へ ou に avec 行きます ? Les deux sont corrects. へ insiste sur l'orientation, le fait de se diriger vers ; に désigne le point d'arrivée. À l'oral, に domine largement. Un débutant a pourtant intérêt à commencer par へ : cette particule ne sert qu'à la direction, alors que に a une dizaine d'autres emplois où elle risque de vous piéger.",
        },
        {
          type: "tip",
          content:
            "La phrase la plus rentable pour un voyageur perdu : [lieu] へ行きたいです — « je voudrais aller à… ». Elle vous dispense de comprendre la réponse mot à mot : l'employé enchaînera avec un nom de ligne, un numéro de quai et éventuellement un 乗り換え, et ces trois informations suffisent.",
        },
      ],
    },
    {
      title: "Demander son chemin, changer de ligne, trouver son quai",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Trois questions couvrent la quasi-totalité des situations en gare. 〜はどこですか pour localiser, 〜へ行きたいです pour annoncer sa destination, 何番線ですか pour le quai. Toutes s'ouvrent par すみません, qui sert ici d'appel poli et non d'excuse. Sans ce mot d'entrée, la question paraît abrupte, même formulée correctement.",
        },
        {
          type: "example",
          japanese: "すみません、改札はどこですか。",
          romaji: "sumimasen, kaisatsu wa doko desu ka.",
          translation: "Excusez-moi, où est le portillon ?",
          content:
            "Le schéma [nom] は どこですか se recycle indéfiniment : remplacez 改札 par 出口 (la sortie), ホーム (le quai), トイレ, バス. は pose le nom comme sujet du repérage, どこ signifie « où » et ですか transforme le tout en question polie.",
        },
        {
          type: "example",
          japanese: "浅草へ行きたいです。",
          romaji: "Asakusa e ikitai desu.",
          translation: "Je voudrais aller à Asakusa.",
          content:
            "Ici vous donnez votre objectif plutôt que de poser une question fermée. C'est plus efficace : l'employé décide lui-même de la meilleure route et vous donne la ligne, le quai et le point de correspondance. Montrez le nom écrit sur votre téléphone si la prononciation ne passe pas.",
        },
        {
          type: "example",
          japanese: "何番線ですか。",
          romaji: "nanbansen desu ka.",
          translation: "C'est quelle voie ?",
          content:
            "何 = combien/quel, 番 est le compteur des rangs, 線 la voie. La réponse sera 三番線です (voie 3) ou 五番線です (voie 5). Les quais sont numérotés et affichés partout en chiffres arabes : ce seul nombre suffit à vous orienter, même si le reste de la phrase vous échappe.",
        },
        {
          type: "example",
          japanese: "新宿で乗り換えです。",
          romaji: "Shinjuku de norikae desu.",
          translation: "Le changement se fait à Shinjuku.",
          content:
            "乗り換え est un nom, formé sur le verbe 乗り換えます (changer de train). Notez le で : ce n'est plus le で du moyen, c'est celui du lieu où se déroule une action. Même particule, deux emplois — c'est le contexte, jamais la forme, qui tranche.",
        },
        {
          type: "tip",
          content:
            "Vérifiez toujours le type de train affiché sur le panneau du quai : un 急行 (express) ou un 特急 (rapide) peut traverser votre station sans s'arrêter. Le train le plus lent, 各駅停車, dessert tout : en cas de doute, c'est le choix sûr. Une erreur de type de train coûte bien plus cher en temps qu'une erreur de direction.",
        },
      ],
    },
    {
      title: "Les codes du train japonais",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "La ponctualité n'est pas une légende : les horaires sont tenus à la minute, et un retard de cinq minutes donne lieu à la distribution d'un 遅延証明書, l'attestation qui justifie officiellement votre retard auprès de votre employeur. Conséquence pratique : l'horaire affiché est fiable, mais si vous arrivez à l'heure exacte, le train est déjà parti. On se présente sur le quai deux ou trois minutes avant.",
        },
        {
          type: "text",
          content:
            "On fait la queue. Des marques au sol indiquent l'emplacement des portes, et les gens s'y alignent en deux files, en laissant descendre avant de monter. Dans le train, le silence est la règle : téléphone en マナーモード (mode silencieux), aucune conversation téléphonique, voix basse. Ce n'est pas de la timidité, c'est un espace partagé où l'on s'efface — et ce qui trahit un étranger, c'est presque toujours le volume sonore.",
        },
        {
          type: "text",
          content:
            "Aux heures de pointe, certaines rames comportent une voiture réservée aux femmes, 女性専用車. Elle est signalée en rose sur le quai, sur la porte et au sol, avec la plage horaire d'application — souvent le matin en semaine seulement. Un homme qui y monte par inadvertance se le fera signaler, poliment mais fermement. Lisez le marquage au sol avant de vous placer dans la file.",
        },
        {
          type: "warning",
          content:
            "Dans les nœuds comme 新宿, 渋谷 ou 梅田, plusieurs opérateurs partagent le même nom de station. Suivre un panneau « sortie » sans regarder le logo de la compagnie mène régulièrement au mauvais 改札. Repérez d'abord le sigle de votre ligne — JR en vert, chaque compagnie privée et chaque ligne de métro ayant sa couleur et sa lettre — puis suivez cette couleur, pas le mot « sortie ».",
        },
        {
          type: "tip",
          content:
            "Le 終電, dernier train, tombe entre minuit et une heure du matin selon les lignes. Toute la vie sociale japonaise s'organise autour de lui : les soirées se terminent d'un coup, et une salle entière se lève en même temps. Le rater signifie un taxi hors de prix ou une nuit en カラオケ jusqu'au premier train. Notez l'heure du dernier train de votre ligne le jour où vous sortez.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "À la gare d'Ueno, à Tokyo. Vous voulez rejoindre Asakusa et vous ne savez pas quelle ligne prendre. Vous vous adressez à un employé près du portillon.",
    lines: [
      {
        speaker: "Vous",
        japanese: "すみません、浅草へ行きたいです。",
        romaji: "sumimasen, Asakusa e ikitai desu.",
        french: "Excusez-moi, je voudrais aller à Asakusa.",
        note: "へ s'écrit he et se lit « e ». 〜たいです exprime l'envie : c'est l'ouverture standard quand on cherche son chemin.",
      },
      {
        speaker: "Employé",
        japanese: "銀座線ですね。地下鉄です。",
        romaji: "Ginza-sen desu ne. chikatetsu desu.",
        french: "La ligne Ginza, alors. C'est le métro.",
        note: "ですね cherche votre accord : l'employé reformule votre demande avant d'y répondre, une habitude très courante.",
      },
      {
        speaker: "Vous",
        japanese: "何番線ですか。",
        romaji: "nanbansen desu ka.",
        french: "C'est quelle voie ?",
      },
      {
        speaker: "Employé",
        japanese: "二番線です。乗り換えはありません。",
        romaji: "nibansen desu. norikae wa arimasen.",
        french: "Voie 2. Il n'y a pas de changement.",
        note: "乗り換えはありません : littéralement « quant au changement, il n'y en a pas ». C'est la réponse que vous espérez entendre.",
      },
      {
        speaker: "Vous",
        japanese: "浅草は三つ目の駅ですか。",
        romaji: "Asakusa wa mittsu me no eki desu ka.",
        french: "Asakusa, c'est la troisième station ?",
        note: "〜つ目 transforme un nombre en rang : 三つ目 = « le troisième ». Compter les stations est plus sûr que de guetter le nom sur le quai.",
      },
      {
        speaker: "Employé",
        japanese: "はい、そうです。ICカードもいいですよ。",
        romaji: "hai, sou desu. IC kaado mo ii desu yo.",
        french: "Oui, c'est ça. Vous pouvez aussi payer avec une carte IC.",
        note: "も = « aussi ». よ signale une information que votre interlocuteur suppose nouvelle pour vous.",
      },
    ],
  },

  keyPoints: [
    "[lieu] へ 行きます : la destination d'abord, le verbe à la fin. La particule へ s'écrit avec le kana he mais se prononce « e ».",
    "で marque le moyen de transport : 電車で、バスで、自転車で. で ne marque jamais la destination.",
    "Aller à pied ne prend pas で : on dit 歩いて行きます, ou simplement 歩きます.",
    "何番線ですか demande le quai ; [lieu] で乗り換えです indique où changer de ligne.",
    "JR, compagnies privées et métro sont des réseaux distincts : changer d'opérateur oblige à repasser un 改札 et à payer un second trajet.",
  ],

  vocabulary: [
    {
      term: "電車",
      kana: "でんしゃ",
      romaji: "densha",
      segments: [
        { text: "電", reading: "でん" },
        { text: "車", reading: "しゃ" },
      ],
      pitch: 0,
      french: "Le train",
      english: "Train",
    },
    {
      term: "地下鉄",
      kana: "ちかてつ",
      romaji: "chikatetsu",
      segments: [
        { text: "地", reading: "ち" },
        { text: "下", reading: "か" },
        { text: "鉄", reading: "てつ" },
      ],
      pitch: 0,
      french: "Le métro",
      english: "Subway",
    },
    { term: "バス", kana: "バス", romaji: "basu", pitch: 1, french: "Le bus", english: "Bus" },
    {
      term: "タクシー",
      kana: "タクシー",
      romaji: "takushii",
      pitch: 1,
      french: "Le taxi",
      english: "Taxi",
    },
    {
      term: "自転車",
      kana: "じてんしゃ",
      romaji: "jitensha",
      segments: [
        { text: "自", reading: "じ" },
        { text: "転", reading: "てん" },
        { text: "車", reading: "しゃ" },
      ],
      pitch: 0,
      french: "Le vélo",
      english: "Bicycle",
    },
    {
      term: "駅",
      kana: "えき",
      romaji: "eki",
      segments: [{ text: "駅", reading: "えき" }],
      pitch: 1,
      french: "La gare, la station",
      english: "Station",
    },
    {
      term: "ホーム",
      kana: "ホーム",
      romaji: "hoomu",
      pitch: 1,
      french: "Le quai",
      english: "Platform",
    },
    {
      term: "切符",
      kana: "きっぷ",
      romaji: "kippu",
      segments: [{ text: "切符", reading: "きっぷ" }],
      french: "Le billet, le ticket",
      english: "Ticket",
    },
    {
      term: "ICカード",
      kana: "アイシーカード",
      romaji: "aishiikaado",
      french: "La carte de transport rechargeable (Suica, Pasmo…)",
      english: "IC card, transport smart card",
    },
    {
      term: "改札",
      kana: "かいさつ",
      romaji: "kaisatsu",
      segments: [
        { text: "改", reading: "かい" },
        { text: "札", reading: "さつ" },
      ],
      french: "Le portillon de contrôle",
      english: "Ticket gate",
    },
    {
      term: "乗り換え",
      kana: "のりかえ",
      romaji: "norikae",
      segments: [
        { text: "乗", reading: "の" },
        { text: "り" },
        { text: "換", reading: "か" },
        { text: "え" },
      ],
      french: "Le changement, la correspondance",
      english: "Transfer, change of line",
    },
    {
      term: "乗る",
      kana: "のる",
      romaji: "noru",
      segments: [{ text: "乗", reading: "の" }, { text: "る" }],
      french: "Monter (dans un véhicule)",
      english: "To get on, to ride",
    },
    {
      term: "降りる",
      kana: "おりる",
      romaji: "oriru",
      segments: [{ text: "降", reading: "お" }, { text: "りる" }],
      french: "Descendre (d'un véhicule)",
      english: "To get off",
    },
    {
      term: "歩く",
      kana: "あるく",
      romaji: "aruku",
      segments: [{ text: "歩", reading: "ある" }, { text: "く" }],
      pitch: 2,
      french: "Marcher, aller à pied",
      english: "To walk",
    },
    {
      term: "出口",
      kana: "でぐち",
      romaji: "deguchi",
      segments: [
        { text: "出", reading: "で" },
        { text: "口", reading: "ぐち" },
      ],
      french: "La sortie",
      english: "Exit",
    },
    {
      term: "何番線",
      kana: "なんばんせん",
      romaji: "nanbansen",
      segments: [
        { text: "何", reading: "なん" },
        { text: "番", reading: "ばん" },
        { text: "線", reading: "せん" },
      ],
      french: "Quelle voie, quel quai",
      english: "Which platform",
    },
  ],

  exercises: [
    {
      id: "unit-18-ex1",
      type: "comprehension",
      question: "Quelle particule marque le moyen de transport dans 電車＿行きます ?",
      correctAnswer: "で",
      options: ["で", "へ", "を", "に"],
      optionsHint: ["de", "e (écrit he)", "o", "ni"],
      hint: "C'est la même particule que pour les instruments : はしで食べます.",
    },
    {
      id: "unit-18-ex2",
      type: "fill-blank",
      question: "« Je vais à Kyoto » se dit 京都 ___ 行きます。",
      correctAnswer: "へ",
      options: ["へ", "で", "を", "も"],
      optionsHint: ["e (destination)", "de (moyen)", "o (complément)", "mo (aussi)"],
      optionsKana: ["へ", "で", "を", "も"],
      hint: "Cette particule marque la direction, et se prononce « e ».",
    },
    {
      id: "unit-18-ex3",
      type: "fill-blank",
      question: "« Le changement se fait à Shinjuku » se dit 新宿 ___ 乗り換えです。",
      correctAnswer: "で",
      options: ["で", "へ", "に", "を"],
      optionsHint: ["de (lieu de l'action)", "e (direction)", "ni", "o"],
      optionsKana: ["で", "へ", "に", "を"],
      hint: "Le lieu où se déroule une action prend la même particule que le moyen.",
    },
    {
      id: "unit-18-ex4",
      type: "comprehension",
      question:
        "À Tokyo, vous passez d'une ligne JR à une ligne de métro. Que se passe-t-il concrètement ?",
      correctAnswer: "Vous sortez par un 改札, en franchissez un autre, et payez un second trajet",
      options: [
        "Vous sortez par un 改札, en franchissez un autre, et payez un second trajet",
        "La correspondance est gratuite comme sur un réseau unique",
        "Il faut acheter un billet longue distance à un guichet",
        "Les cartes IC ne fonctionnent pas entre deux opérateurs différents",
      ],
      hint: "JR, compagnies privées et métro sont des réseaux commerciaux distincts.",
    },
    {
      id: "unit-18-ex5",
      type: "listen",
      question: "駅はどこですか。",
      correctAnswer: "Où est la gare ?",
      options: [
        "Où est la gare ?",
        "Où est la sortie ?",
        "Où est le portillon ?",
        "Où est le quai ?",
      ],
      hint: "Le nom placé avant は est ce que l'on cherche.",
    },
    {
      id: "unit-18-ex6",
      type: "translate",
      question: "Traduisez : « Je voudrais aller à Asakusa. »",
      correctAnswer: "浅草へ行きたいです。",
      options: [
        "浅草へ行きたいです。",
        "浅草で行きたいです。",
        "浅草へ行きたいでした。",
        "浅草を行きたいです。",
      ],
      optionsHint: [
        "Asakusa e ikitai desu.",
        "Asakusa de ikitai desu.",
        "Asakusa e ikitai deshita.",
        "Asakusa o ikitai desu.",
      ],
      hint: "Destination + へ, et 〜たいです pour l'envie, au présent.",
    },
    {
      id: "unit-18-ex7",
      type: "reorder",
      question: "Remettez dans l'ordre : « Je vais à la gare en train. »",
      correctAnswer: "電車で駅へ行きます。",
      options: ["電車", "で", "駅", "へ", "行きます"],
      hint: "Le moyen d'abord, la destination ensuite, le verbe toujours en dernier.",
    },
    {
      id: "unit-18-ex8",
      type: "comprehension",
      question: "Que demande-t-on avec 何番線ですか ?",
      correctAnswer: "Sur quelle voie part le train",
      options: [
        "Sur quelle voie part le train",
        "Quel est le numéro de la ligne",
        "Combien coûte le billet",
        "Quelle est la station suivante",
      ],
      hint: "番 est le compteur des rangs, 線 désigne la voie.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-17"],
};
