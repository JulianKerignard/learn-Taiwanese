import type { CourseUnit } from "@/types/course";

export const unit08: CourseUnit = {
  id: "unit-08",
  number: 8,
  title: "Saluer, remercier, s'excuser",
  titleJa: "あいさつとありがとう",
  chapter: 2,
  description:
    "Les formules qui ouvrent et ferment chaque échange au Japon, et le moment précis où chacune s'emploie. À la fin de l'unité, vous saluez selon l'heure, vous remerciez au bon degré de politesse et vous abordez un inconnu sans hésiter.",
  icon: "🙇",

  sections: [
    {
      title: "Trois bonjours, un seuil horaire",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le français a un seul « bonjour » qui couvre la journée entière. Le japonais en a trois, et le choix ne dépend pas de la personne en face de vous mais de l'heure qu'il est. おはようございます court du lever jusqu'au milieu de la matinée, こんにちは prend le relais jusqu'à la tombée du jour, こんばんは s'installe ensuite. Les seuils ne sont pas légiférés à la minute près, mais un Japonais les sent, et une erreur s'entend immédiatement.",
        },
        {
          type: "example",
          japanese: "おはようございます。",
          romaji: "ohayou gozaimasu.",
          translation: "Bonjour. (le matin)",
          content:
            "La formule vient de 早い, « tôt » : littéralement « il est tôt ». ございます est la queue polie ; ありがとう en reçoit une identique. La forme courte おはよう s'adresse aux proches et à quelqu'un placé sous vous dans la hiérarchie : dans une entreprise, l'employé dit おはようございます au chef, qui peut répondre おはよう. La différence de longueur porte toute la différence de rang.",
        },
        {
          type: "example",
          japanese: "こんにちは。",
          romaji: "konnichiwa.",
          translation: "Bonjour. (dans la journée)",
          content:
            "Regardez la fin du mot : il s'écrit は et se prononce « wa ». Ce n'est pas une fantaisie orthographique, c'est un reste de particule — la phrase complète, aujourd'hui tronquée, commençait par « quant à ce jour… ». On ne l'écrit donc jamais こんにちわ, et l'unité suivante montre que cette même particule は se prononce « wa » partout ailleurs.",
        },
        {
          type: "warning",
          content:
            "こんにちは n'est pas un passe-partout. On ne l'emploie presque jamais entre collègues qui se croisent toute la journée, ni en rentrant chez soi, ni au téléphone. C'est une salutation de rencontre : un voisin, un commerçant, une personne qu'on aborde. Le francophone, lui, le place partout parce que « bonjour » fonctionne ainsi en France.",
        },
        {
          type: "example",
          japanese: "こんばんは。",
          romaji: "konbanwa.",
          translation: "Bonsoir.",
          content:
            "Même construction, même は final prononcé « wa ». Attention à ne pas le confondre avec おやすみなさい : こんばんは salue quelqu'un qu'on rencontre le soir, おやすみなさい se dit au moment de se coucher ou de se séparer tard. Le français « bonsoir » couvre les deux, le japonais non.",
        },
        {
          type: "tip",
          content:
            "Dans les commerces, le personnel lance いらっしゃいませ (« bienvenue ») dès que la porte s'ouvre. Ce n'est pas une question et cela n'appelle aucune réponse : le client n'a rien à dire. Répondre こんにちは au caissier ne choque personne, mais aucun Japonais ne le fait.",
        },
      ],
    },
    {
      title: "Remercier : la longueur fait la politesse",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "En japonais, le degré de politesse se lit d'abord à la longueur de la formule. Pour remercier, la même racine s'étire par paliers : どうも, puis ありがとう, puis ありがとうございます, puis どうもありがとうございます. Chaque allongement ajoute de la déférence. Ce n'est pas une question de style ou d'élégance : c'est le mécanisme central de la politesse japonaise, et il se retrouve dans toutes les autres formules.",
        },
        {
          type: "example",
          japanese: "ありがとうございます。",
          romaji: "arigatou gozaimasu.",
          translation: "Merci beaucoup.",
          content:
            "C'est la forme par défaut avec un inconnu, un commerçant, un collègue, un supérieur. Prenez-la systématiquement tant que vous ne maîtrisez pas les rangs : personne ne vous reprochera d'être trop poli, alors qu'un ありがとう trop court envers un supérieur s'entend tout de suite.",
        },
        {
          type: "comparison",
          content:
            "ありがとうございます remercie pour un service en cours ou immédiat ; ありがとうございました, au passé, remercie pour quelque chose de terminé — en sortant d'un taxi, à la fin d'un repas, en quittant un magasin. Les deux s'entendent des dizaines de fois par jour et le choix du temps n'est pas décoratif : il dit si l'action est close ou non.",
        },
        {
          type: "example",
          japanese: "どうも。",
          romaji: "doumo.",
          translation: "Merci. (bref)",
          content:
            "どうも seul est un remerciement expéditif, entre familiers ou lancé en passant. Placé devant ありがとうございます, il l'intensifie au contraire. Employé seul envers un supérieur ou un client, il passe pour sec : la brièveté qui fait sa commodité est aussi ce qui le disqualifie en situation formelle.",
        },
        {
          type: "warning",
          content:
            "Erreur classique du francophone : chercher à répondre « de rien ». La traduction どういたしまして existe et figure dans tous les manuels, mais elle s'entend très peu entre adultes japonais. Dans la vie réelle on répond いえいえ, ou rien du tout accompagné d'une légère inclinaison de la tête.",
        },
        {
          type: "tip",
          content:
            "Le remerciement s'accompagne d'un mouvement de tête vers l'avant. Prononcer les mots justes en restant parfaitement immobile, face à la personne, donne une impression d'échange inachevé. L'inclinaison n'a pas besoin d'être profonde : un signe de tête suffit dans la plupart des situations quotidiennes.",
        },
      ],
    },
    {
      title: "すみません : le mot à double fonction",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "すみません est le mot le plus utile du japonais quotidien, et le plus déroutant pour un francophone, parce qu'il sert à deux choses que le français sépare : s'excuser et interpeller quelqu'un. Le lien apparaît dès qu'on regarde le sens littéral — « cela ne se règle pas », c'est-à-dire « je reste en dette envers vous ». Que vous ayez marché sur un pied ou que vous interrompiez une personne occupée, vous créez la même dette. D'où un seul mot pour les deux.",
        },
        {
          type: "example",
          japanese: "すみません、おねがいします。",
          romaji: "sumimasen, onegaishimasu.",
          translation: "Excusez-moi, s'il vous plaît.",
          content:
            "Dans un restaurant, on lève la main et on lance すみません pour appeler le serveur. C'est la manière normale, attendue, et non une impolitesse : le personnel ne viendra pas de lui-même. Le francophone hésite à héler quelqu'un et attend en silence — au Japon, cette attente ne produit rien.",
        },
        {
          type: "comparison",
          content:
            "すみません est l'excuse neutre et publique ; ごめんなさい est plus personnelle, réservée aux proches ou à une faute réelle ; 申し訳ありません appartient au registre professionnel et se réserve aux fautes lourdes. Un francophone qui emploie ごめんなさい avec un inconnu passe pour trop familier, et un すみません dans une situation grave passe pour trop léger.",
        },
        {
          type: "example",
          japanese: "おねがいします。",
          romaji: "onegaishimasu.",
          translation: "S'il vous plaît. / Je vous le demande.",
          content:
            "おねがいします n'est pas un « s'il vous plaît » qu'on colle en fin de phrase. C'est un acte à part entière : « je vous adresse une requête ». On le dit seul, en tendant un document au guichet, en désignant ce qu'on veut au comptoir. Il clôt une demande et la rend explicite, même sans aucun verbe.",
        },
        {
          type: "text",
          content:
            "すみません sert aussi à remercier quand le service rendu vous a coûté quelque chose à l'autre. Si un collègue se déplace pour vous, すみません est plus juste que ありがとうございます : vous reconnaissez le dérangement plutôt que le seul bienfait. C'est une nuance que le français n'a pas et qui, une fois comprise, rend le japonais beaucoup plus naturel.",
        },
        {
          type: "tip",
          content:
            "Trois formules suffisent à traverser une semaine au Japon : すみません pour aborder, おねがいします pour demander, ありがとうございます pour clore. La quasi-totalité des transactions — guichet, boutique, restaurant, gare — tient dans cette séquence de trois temps.",
        },
      ],
    },
    {
      title: "Partir : le mythe de さようなら",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Tous les manuels donnent さようなら pour « au revoir ». C'est exact et pourtant trompeur. Dans la vie réelle, さようなら marque une séparation longue ou définitive : un élève à son professeur en fin d'année, une personne qu'on ne reverra pas avant longtemps. Lancé à un collègue un mardi soir, il sonne solennel, presque comme un adieu — et vos interlocuteurs le remarqueront.",
        },
        {
          type: "example",
          japanese: "おつかれさまです。",
          romaji: "otsukaresama desu.",
          translation: "Merci pour votre travail.",
          content:
            "Voici la vraie formule de départ au travail. Littéralement « vous êtes fatigué », comprenez « vous avez fourni un effort et je le reconnais ». On la dit en partant, en croisant quelqu'un dans un couloir, en ouvrant un appel interne. La variante au passé, おつかれさまでした, clôt la journée. Attention : ごくろうさま a le même sens mais ne se dit que vers un subordonné — jamais à un supérieur.",
        },
        {
          type: "example",
          japanese: "おさきにしつれいします。",
          romaji: "osaki ni shitsurei shimasu.",
          translation: "Je me permets de partir avant vous.",
          content:
            "しつれいします signifie littéralement « je commets une impolitesse ». On l'emploie en entrant dans un bureau, en quittant une pièce, en raccrochant. Avec おさきに (« avant vous »), c'est la phrase standard de celui qui quitte le travail le premier. Personne ne part en silence : partir sans rien dire est perçu comme une petite grossièreté.",
        },
        {
          type: "example",
          japanese: "また明日。",
          romaji: "mata ashita.",
          translation: "À demain.",
          content:
            "また signifie « de nouveau » : また明日 dit littéralement « de nouveau demain ». C'est la formule légère entre collègues proches ou amis, souvent ajoutée après おつかれさまです. またね est encore plus familière et ne s'emploie pas vers un supérieur.",
        },
        {
          type: "text",
          content:
            "À l'autre bout de la relation, はじめまして ouvre une première rencontre et ne se dit qu'une fois par personne. Il précède le nom, et l'échange se clôt par よろしくおねがいします. Cette dernière formule n'a pas d'équivalent français : elle ne signifie pas « enchanté » mais quelque chose comme « je m'en remets à vous pour la suite ». On la retrouve à la fin des courriels et au moment de confier un travail à quelqu'un.",
        },
        {
          type: "warning",
          content:
            "おやすみなさい ne veut pas dire « bonsoir » mais « bonne nuit ». On le dit en allant se coucher ou en quittant quelqu'un tard. L'employer en arrivant quelque part le soir est une faute typiquement francophone : notre « bonsoir » couvre l'arrivée et le départ, le japonais distingue les deux.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Une journée de bureau à Tokyo, du matin au soir. Rien n'est dit ici qui ne se dise réellement dans une entreprise japonaise.",
    lines: [
      {
        speaker: "Vous",
        japanese: "おはようございます。",
        romaji: "ohayou gozaimasu.",
        french: "Bonjour.",
        note: "En arrivant, on salue tout le monde avec la forme longue, y compris les collègues de même rang. La forme courte おはよう se réserve aux proches.",
      },
      {
        speaker: "Tanaka (collègue)",
        japanese: "おはようございます。",
        romaji: "ohayou gozaimasu.",
        french: "Bonjour.",
      },
      {
        speaker: "Vous",
        japanese: "すみません、おねがいします。",
        romaji: "sumimasen, onegaishimasu.",
        french: "Excusez-moi — je vous le demande. (en tendant un document)",
        note: "すみません ouvre l'interruption, おねがいします porte la demande. Aucun verbe n'est nécessaire : le geste dit ce qui est demandé.",
      },
      {
        speaker: "Tanaka (collègue)",
        japanese: "はい、どうぞ。",
        romaji: "hai, douzo.",
        french: "Oui, je vous en prie.",
        note: "どうぞ accompagne tout ce qu'on tend ou tout accès qu'on accorde. Il appelle presque toujours un remerciement en retour.",
      },
      {
        speaker: "Vous",
        japanese: "ありがとうございます。",
        romaji: "arigatou gozaimasu.",
        french: "Merci beaucoup.",
      },
      {
        speaker: "Tanaka (collègue)",
        japanese: "おさきにしつれいします。",
        romaji: "osaki ni shitsurei shimasu.",
        french: "Je me permets de partir avant vous.",
        note: "Le soir venu. C'est la phrase de celui qui quitte le bureau le premier, jamais un simple さようなら.",
      },
      {
        speaker: "Vous",
        japanese: "おつかれさまです。また明日。",
        romaji: "otsukaresama desu. mata ashita.",
        french: "Merci pour votre travail. À demain.",
        note: "La réponse attendue. おつかれさまです reconnaît l'effort de la journée, また明日 allège le ton entre collègues proches.",
      },
    ],
  },

  keyPoints: [
    "Trois salutations selon l'heure : おはようございます le matin, こんにちは dans la journée, こんばんは le soir. C'est l'heure qui décide, pas l'interlocuteur.",
    "こんにちは et こんばんは se terminent par le kana は, toujours prononcé « wa » : c'est une ancienne particule. On n'écrit jamais こんにちわ.",
    "La politesse se mesure à la longueur : どうも, puis ありがとう, puis ありがとうございます. Par défaut, prenez la forme la plus longue.",
    "すみません sert à la fois à s'excuser et à interpeller. Appeler un serveur avec すみません est la norme au Japon, pas une impolitesse.",
    "さようなら est réservé aux séparations longues. Au travail, on part en disant おつかれさまです, et また明日 entre collègues proches.",
  ],

  vocabulary: [
    {
      term: "おはようございます",
      kana: "おはようございます",
      romaji: "ohayou gozaimasu",
      french: "Bonjour (le matin, forme polie)",
      english: "Good morning (polite)",
    },
    {
      term: "こんにちは",
      kana: "こんにちは",
      romaji: "konnichiwa",
      french: "Bonjour (dans la journée)",
      english: "Hello, good afternoon",
    },
    {
      term: "こんばんは",
      kana: "こんばんは",
      romaji: "konbanwa",
      french: "Bonsoir",
      english: "Good evening",
    },
    {
      term: "ありがとう",
      kana: "ありがとう",
      romaji: "arigatou",
      french: "Merci (entre proches)",
      english: "Thanks (casual)",
    },
    {
      term: "ありがとうございます",
      kana: "ありがとうございます",
      romaji: "arigatou gozaimasu",
      french: "Merci beaucoup (forme polie)",
      english: "Thank you very much (polite)",
    },
    {
      term: "どうも",
      kana: "どうも",
      romaji: "doumo",
      french: "Merci (bref) ; vraiment",
      english: "Thanks (brief); very",
    },
    {
      term: "すみません",
      kana: "すみません",
      romaji: "sumimasen",
      french: "Excusez-moi ; pardon",
      english: "Excuse me; sorry",
    },
    {
      term: "おねがいします",
      kana: "おねがいします",
      romaji: "onegaishimasu",
      french: "S'il vous plaît ; je vous le demande",
      english: "Please; I ask this of you",
    },
    {
      term: "よろしくおねがいします",
      kana: "よろしくおねがいします",
      romaji: "yoroshiku onegaishimasu",
      french: "Je m'en remets à vous (clôt une présentation)",
      english: "I look forward to working with you",
    },
    {
      term: "はじめまして",
      kana: "はじめまして",
      romaji: "hajimemashite",
      french: "Enchanté (première rencontre)",
      english: "Nice to meet you (first time)",
    },
    {
      term: "さようなら",
      kana: "さようなら",
      romaji: "sayounara",
      french: "Au revoir (séparation longue)",
      english: "Goodbye (long parting)",
    },
    {
      term: "おつかれさまです",
      kana: "おつかれさまです",
      romaji: "otsukaresama desu",
      french: "Merci pour votre travail (formule de départ au bureau)",
      english: "Thanks for your hard work",
    },
    {
      term: "しつれいします",
      kana: "しつれいします",
      romaji: "shitsurei shimasu",
      french: "Je me permets ; je vous laisse",
      english: "Excuse me (entering or leaving)",
    },
    {
      term: "おやすみなさい",
      kana: "おやすみなさい",
      romaji: "oyasuminasai",
      french: "Bonne nuit",
      english: "Good night",
    },
    {
      term: "朝",
      kana: "あさ",
      romaji: "asa",
      segments: [{ text: "朝", reading: "あさ" }],
      pitch: 1,
      french: "Le matin",
      english: "Morning",
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
      term: "先生",
      kana: "せんせい",
      romaji: "sensei",
      segments: [{ text: "先生", reading: "せんせい" }],
      french: "Le professeur (aussi médecin, maître)",
      english: "Teacher (also doctor, master)",
    },
    {
      term: "また明日",
      kana: "またあした",
      romaji: "mata ashita",
      segments: [{ text: "また" }, { text: "明日", reading: "あした" }],
      french: "À demain",
      english: "See you tomorrow",
    },
  ],

  exercises: [
    {
      id: "unit-08-ex1",
      type: "comprehension",
      question: "Sur quoi repose le choix entre おはようございます, こんにちは et こんばんは ?",
      correctAnswer: "L'heure de la journée",
      options: [
        "L'heure de la journée",
        "Le rang social de l'interlocuteur",
        "Le degré d'intimité avec l'interlocuteur",
        "La région du Japon où l'on se trouve",
      ],
      hint: "Ce n'est pas la personne en face de vous qui décide.",
    },
    {
      id: "unit-08-ex2",
      type: "comprehension",
      question: "Pourquoi こんにちは s'écrit-il avec は et non avec わ ?",
      correctAnswer: "は est une ancienne particule, conservée à l'écrit et prononcée « wa »",
      options: [
        "は est une ancienne particule, conservée à l'écrit et prononcée « wa »",
        "C'est une exception orthographique sans explication",
        "わ n'existe pas en hiragana",
        "は se prononce « wa » dans tous les mots japonais",
      ],
      hint: "La formule est le reste d'une phrase plus longue, tronquée par l'usage.",
    },
    {
      id: "unit-08-ex3",
      type: "fill-blank",
      question: "Au restaurant, pour appeler le serveur, on lève la main et on dit ___ .",
      correctAnswer: "すみません",
      options: ["すみません", "おつかれさまです", "ありがとうございます", "こんばんは"],
      optionsKana: ["すみません", "おつかれさまです", "ありがとうございます", "こんばんは"],
      optionsHint: ["sumimasen", "otsukaresama desu", "arigatou gozaimasu", "konbanwa"],
      hint: "Le même mot sert à s'excuser et à interpeller.",
    },
    {
      id: "unit-08-ex4",
      type: "fill-blank",
      question: "Quelle formule les collègues japonais emploient-ils réellement en quittant le bureau le soir ? ___ .",
      correctAnswer: "おつかれさまです",
      options: ["おつかれさまです", "さようなら", "おやすみなさい", "はじめまして"],
      optionsKana: ["おつかれさまです", "さようなら", "おやすみなさい", "はじめまして"],
      optionsHint: ["otsukaresama desu", "sayounara", "oyasuminasai", "hajimemashite"],
      hint: "Littéralement : « vous avez fourni un effort, je le reconnais ».",
    },
    {
      id: "unit-08-ex5",
      type: "listen",
      question: "ありがとうございます",
      correctAnswer: "Merci beaucoup (forme polie)",
      options: [
        "Merci beaucoup (forme polie)",
        "Excusez-moi",
        "Enchanté",
        "Bonne nuit",
      ],
      hint: "La queue ございます signale la forme longue, donc la plus polie.",
    },
    {
      id: "unit-08-ex6",
      type: "reorder",
      question: "Remettez dans l'ordre la formule complète d'une première rencontre.",
      correctAnswer: "はじめまして、よろしくおねがいします。",
      options: ["はじめまして", "よろしく", "おねがい", "します"],
      hint: "L'ouverture d'abord, l'engagement pour la suite ensuite.",
    },
    {
      id: "unit-08-ex7",
      type: "translate",
      question: "Comment dit-on « À demain » à un collègue proche ?",
      correctAnswer: "また明日",
      options: ["また明日", "さようなら", "おやすみなさい", "おはようございます"],
      optionsKana: ["またあした", "さようなら", "おやすみなさい", "おはようございます"],
      optionsHint: ["mata ashita", "sayounara", "oyasuminasai", "ohayou gozaimasu"],
      hint: "また veut dire « de nouveau ».",
    },
    {
      id: "unit-08-ex8",
      type: "listen",
      question: "おつかれさまです",
      correctAnswer: "Merci pour votre travail",
      options: [
        "Merci pour votre travail",
        "Excusez-moi de vous interrompre",
        "Bonjour, il est encore tôt",
        "Je vous laisse, je pars avant vous",
      ],
      hint: "La formule qu'on entend dans les couloirs d'entreprise du matin au soir.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-07"],
};
