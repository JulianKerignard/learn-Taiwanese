import type { CourseUnit } from "@/types/course";

export const unit11: CourseUnit = {
  id: "unit-11",
  number: 11,
  title: "Désigner un objet : これ, それ, あれ",
  titleNative: "これ・それ・あれ",
  chapter: 2,
  description:
    "Le système démonstratif à trois degrés du japonais : distinguer これ／それ／あれ selon la personne et non la distance, ne plus confondre les pronoms これ et les déterminants この, et poser la question これは何ですか。",
  icon: "こ",

  sections: [
    {
      title: "Trois zones, et non deux distances",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le français partage l'espace en deux : ceci / cela, celui-ci / celui-là. Le japonais le partage en trois, et le critère n'est pas la distance en mètres mais la personne. こ- désigne ce qui appartient à ma sphère, そ- ce qui appartient à la sphère de mon interlocuteur, あ- ce qui est en dehors des deux. Tant qu'on raisonne en « près / loin », on se trompe une fois sur deux.",
        },
        {
          type: "example",
          native: "これは私のかばんです。",
          romanization: "kore wa watashi no kaban desu.",
          translation: "Ceci est mon sac.",
          content:
            "L'objet est dans ma main, sur mes genoux, à portée de mon bras : ma zone, donc これ. Le même sac, une fois posé devant mon interlocuteur, devient それ dans ma bouche sans avoir changé de nature. Le démonstratif décrit une relation, pas l'objet.",
        },
        {
          type: "comparison",
          content:
            "Deux personnes attablées, un menu. Le menu que je tiens : これ pour moi, それ pour l'autre. Le menu qu'il tient : それ pour moi, これ pour lui. Le menu resté sur le comptoir, loin de nous deux : あれ pour l'un comme pour l'autre. Un même objet porte donc deux noms différents selon qui parle — c'est un système relatif, jamais une échelle de distances.",
        },
        {
          type: "warning",
          content:
            "Erreur classique du francophone : traduire mécaniquement « ça » par これ. Si l'objet est dans les mains de votre interlocuteur, これ est faux, même s'il est à trente centimètres de vous : il faut それ. Inversement, ne réservez pas あれ à ce qui est très loin — あれ est simplement « hors de nos deux sphères ».",
        },
        {
          type: "text",
          content:
            "Le système fonctionne aussi hors du champ visible. Au téléphone, ce que l'autre vient de dire est それ ; ce que nous savons tous les deux, un souvenir partagé, est あれ. その話 = cette affaire dont tu viens de parler ; あの話 = cette affaire que nous connaissons tous les deux. Même logique de sphères, appliquée à la mémoire au lieu de l'espace.",
        },
        {
          type: "tip",
          content:
            "Pour ancrer les trois formes, entraînez-vous chez vous avec un seul objet : dans la main → これ, posé de l'autre côté de la table → それ (en imaginant quelqu'un assis là), à l'autre bout de la pièce → あれ. Dites-le à voix haute en déplaçant l'objet. Dix minutes suffisent à installer le réflexe.",
        },
      ],
    },
    {
      title: "Pronoms これ, déterminants この",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Deux séries parallèles qu'il ne faut jamais mélanger. これ・それ・あれ sont des pronoms : ils remplacent le nom, se placent seuls et reçoivent une particule (は, が, を). この・その・あの sont des déterminants : ils ne s'emploient jamais seuls et exigent un nom immédiatement derrière eux. La confusion entre les deux séries est la faute la plus fréquente à ce stade.",
        },
        {
          type: "example",
          native: "これは本です。",
          romanization: "kore wa hon desu.",
          translation: "Ceci est un livre.",
          content:
            "これ occupe la place du sujet et は le marque. Rien ne peut s'intercaler ni suivre : ×これ本です est impossible, parce que これ est déjà un groupe complet à lui seul.",
        },
        {
          type: "example",
          native: "この本は高いです。",
          romanization: "kono hon wa takai desu.",
          translation: "Ce livre-ci est cher.",
          content:
            "Ici on nomme l'objet : この se soude à 本 et l'ensemble この本 devient le sujet. La règle est purement mécanique — この, その et あの ne peuvent pas terminer un groupe, il leur faut toujours un nom à droite.",
        },
        {
          type: "warning",
          content:
            "Les deux fautes symétriques : ×この は高いです (この employé seul) et ×これ本です (これ suivi d'un nom). Le test est simple : si vous nommez la chose, prenez この ; si vous ne la nommez pas, prenez これ.",
        },
        {
          type: "comparison",
          content:
            "これは私のかばんです (Ceci est mon sac) et このかばんは私のです (Ce sac est le mien) décrivent la même scène mais ne répondent pas à la même question. Le premier identifie l'objet — il répond à « qu'est-ce que c'est ? ». Le second, où l'objet est déjà nommé, en attribue la propriété — il répond à « à qui est-ce ? ».",
        },
        {
          type: "text",
          content:
            "La même famille couvre les lieux et les directions : ここ・そこ・あそこ (ici, là, là-bas) et こちら・そちら・あちら (par ici, par là — plus polis, ils servent aussi à dire « celui-ci » avec déférence). Retenez la seule irrégularité de tout le tableau : la série des lieux donne あそこ, jamais あこ.",
        },
        {
          type: "tip",
          content:
            "Moyen mnémotechnique fiable : les formes en -の s'accrochent à un nom (le の relie), les formes en -れ tiennent debout seules. Une fois ce couple compris, tout le tableau démonstratif se déduit sans mémorisation supplémentaire.",
        },
      ],
    },
    {
      title: "Interroger : どれ, どの, 何",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "L'interrogatif de la série est ど-. どれ = lequel, parmi trois éléments ou plus ; どの + nom = quel... Pour un choix entre deux seulement, on préfère どちら (poli) ou どっち (familier). Une question en どれ／どの ne peut jamais recevoir はい ou いいえ pour réponse : elle demande une identification, pas une confirmation.",
        },
        {
          type: "example",
          native: "どれが田中さんのかさですか。",
          romanization: "dore ga Tanaka-san no kasa desu ka.",
          translation: "Lequel est le parapluie de M. Tanaka ?",
          content:
            "Point capital : quand un mot interrogatif occupe la position du sujet, la particule est が et jamais は. La réponse conserve が : これが田中さんのかさです。 Dire ×どれは… est une faute immédiatement audible, et c'est l'une des plus tenaces chez les francophones.",
        },
        {
          type: "example",
          native: "どのかさが高いですか。",
          romanization: "dono kasa ga takai desu ka.",
          translation: "Quel parapluie est cher ?",
          content:
            "どの est un déterminant, exactement comme この : il lui faut un nom. ×どのですか n'existe pas ; pour poser la question sans nommer l'objet, il faut passer à どれ. Notez encore le が imposé par l'interrogatif.",
        },
        {
          type: "text",
          content:
            "La question d'identification de base est これは何ですか。 Sa réponse renverse naturellement le démonstratif : ce qui est これ pour vous est それ pour votre interlocuteur, il répondra donc それは…です。 Ce basculement surprend au début ; il est en réalité la preuve que le système des sphères est bien compris de part et d'autre.",
        },
        {
          type: "example",
          native: "これは何ですか。",
          romanization: "kore wa nan desu ka.",
          translation: "Qu'est-ce que c'est ?",
          content:
            "Vous tenez l'objet, donc これ. La réponse typique du vendeur sera それはおみやげです (c'est un souvenir), avec それ puisque l'objet est chez vous. Attention à la lecture : 何 se lit なん devant です, jamais なに.",
        },
        {
          type: "warning",
          content:
            "何 a deux lectures et elles ne sont pas interchangeables. なん devant です, devant un compteur (何歳, 何人) et devant の. なに devant を et が : 何をしますか, 何がありますか. Prononcer なにですか s'entend aussitôt comme une faute de débutant.",
        },
      ],
    },
    {
      title: "Dans une boutique japonaise",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le personnel de vente n'emploie presque jamais これ・それ・あれ pour parler des articles : il dit こちら・そちら・あちら. Ce n'est pas une question de distance mais de registre — こちら est la forme déférente. « こちらは千二百円です » est ce que vous entendrez. De votre côté, répondre これ est parfaitement normal : le client n'a pas à se hausser au même niveau de politesse.",
        },
        {
          type: "example",
          native: "こちらはいかがですか。",
          romanization: "kochira wa ikaga desu ka.",
          translation: "Et celui-ci, qu'en pensez-vous ?",
          content:
            "いかが est la version polie de どう. La phrase est la formule standard du commerce japonais : le vendeur propose un article en le désignant par こちら, jamais par これ. La reconnaître vous évite de chercher un mot que vous connaissez déjà sous une autre forme.",
        },
        {
          type: "text",
          content:
            "Pour acheter, la structure est ...をください. Avec un démonstratif : これをください (« celui-ci, s'il vous plaît »). À l'oral rapide on entend souvent これください, sans particule : c'est courant et acceptable en boutique, mais gardez を à l'écrit et dans un cadre formel.",
        },
        {
          type: "warning",
          content:
            "Montrer du doigt est mal vu au Japon : on désigne paume ouverte tournée vers l'objet, ou d'un mouvement de la main entière. C'est le mot これ qui fait l'essentiel du travail ; le geste ne sert qu'à le préciser.",
        },
        {
          type: "text",
          content:
            "あれ a une seconde vie comme interjection : « あれ？ » prononcé avec une intonation montante signifie « tiens ? », « ah bon ? » — l'objet cherché n'est pas là, la carte ne passe pas, la porte est fermée. Vous l'entendrez plusieurs fois par jour, et il ne s'agit pas du démonstratif.",
        },
        {
          type: "tip",
          content:
            "En konbini, écoutez la structure « こちらは〜円になります ». Ce になります à la place de です est du langage commercial standardisé ; il n'est pas incorrect, mais ne l'imitez pas — en tant que client, dites です.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans une boutique de souvenirs. Trois objets sont placés à trois endroits différents : un dans vos mains, un derrière le comptoir, un sur une étagère haute. C'est exactement la situation qui oppose これ, それ et あれ.",
    lines: [
      {
        speaker: "Vous",
        native: "すみません、これは何ですか。",
        romanization: "sumimasen, kore wa nan desu ka.",
        french: "Excusez-moi, qu'est-ce que c'est ?",
        note: "L'objet est dans vos mains : これ. Et 何ですか se lit なんですか.",
      },
      {
        speaker: "Vendeuse",
        native: "それは日本のおかしです。",
        romanization: "sore wa Nihon no okashi desu.",
        french: "Ce sont des gâteaux japonais.",
        note: "Elle parle du même objet que vous, mais il est dans votre sphère : de sa bouche il sort それ.",
      },
      {
        speaker: "Vous",
        native: "あれもおみやげですか。",
        romanization: "are mo omiyage desu ka.",
        french: "Et cela là-bas, c'est aussi un souvenir ?",
        note: "L'objet est sur une étagère haute, loin de vous deux : あれ. も remplace は pour dire « aussi ».",
      },
      {
        speaker: "Vendeuse",
        native: "はい。あちらはかさです。",
        romanization: "hai. achira wa kasa desu.",
        french: "Oui. Là-bas, ce sont des parapluies.",
        note: "あちら et non あれ : le personnel de vente reste sur la série polie.",
      },
      {
        speaker: "Vous",
        native: "あのかさはいくらですか。",
        romanization: "ano kasa wa ikura desu ka.",
        french: "Combien coûte ce parapluie-là ?",
        note: "Ici vous nommez l'objet, donc あの + かさ. ×あれかさ est impossible.",
      },
      {
        speaker: "Vendeuse",
        native: "三千八百円です。",
        romanization: "sanzen happyaku en desu.",
        french: "3 800 yens.",
        note: "八百 devient はっぴゃく : révision directe de l'unité précédente.",
      },
      {
        speaker: "Vous",
        native: "じゃあ、あれをください。",
        romanization: "jaa, are o kudasai.",
        french: "Alors, je prends celui-là.",
        note: "L'objet est toujours hors de vos deux sphères : あれ, cette fois avec を puisqu'il est complément du verbe.",
      },
    ],
  },

  keyPoints: [
    "Trois degrés définis par la personne, pas par la distance : これ (ma sphère), それ (la sphère de mon interlocuteur), あれ (hors des deux).",
    "これ・それ・あれ sont des pronoms autonomes ; この・その・あの sont des déterminants et exigent un nom : この本, jamais ×これ本 ni この employé seul.",
    "Interrogatifs : どれ (lequel) et どの + nom. Un mot interrogatif en position de sujet prend が, jamais は : どれが…ですか。",
    "何 se lit なん devant です et devant les compteurs (何ですか, 何歳), et なに devant を et が (何をしますか).",
    "En boutique, le personnel dit こちら・そちら・あちら à la place de これ・それ・あれ ; en tant que client, vous pouvez rester sur これ.",
  ],

  vocabulary: [
    { term: "これ", reading: "これ", romanization: "kore", french: "Ceci (dans ma sphère)", english: "This (near me)" },
    { term: "それ", reading: "それ", romanization: "sore", french: "Cela (dans votre sphère)", english: "That (near you)" },
    { term: "あれ", reading: "あれ", romanization: "are", french: "Cela là-bas (hors de nos deux sphères)", english: "That over there" },
    { term: "どれ", reading: "どれ", romanization: "dore", pitch: 1, french: "Lequel ? (parmi trois ou plus)", english: "Which one?" },
    { term: "この", reading: "この", romanization: "kono", french: "Ce...-ci (+ nom obligatoire)", english: "This (+ noun)" },
    { term: "その", reading: "その", romanization: "sono", french: "Ce...-là, près de vous (+ nom obligatoire)", english: "That (+ noun, near you)" },
    { term: "あの", reading: "あの", romanization: "ano", french: "Ce...-là-bas (+ nom obligatoire)", english: "That (+ noun, over there)" },
    { term: "どの", reading: "どの", romanization: "dono", french: "Quel... ? (+ nom obligatoire)", english: "Which (+ noun)" },
    { term: "何", reading: "なに", romanization: "nani", segments: [{ text: "何", reading: "なに" }], pitch: 1, french: "Quoi ? (se lit なん devant です)", english: "What?" },
    { term: "本", reading: "ほん", romanization: "hon", segments: [{ text: "本", reading: "ほん" }], pitch: 1, french: "Le livre", english: "Book" },
    { term: "かばん", reading: "かばん", romanization: "kaban", pitch: 0, french: "Le sac, le cartable", english: "Bag" },
    { term: "かさ", reading: "かさ", romanization: "kasa", pitch: 1, french: "Le parapluie (écrit 傘)", english: "Umbrella" },
    { term: "とけい", reading: "とけい", romanization: "tokei", pitch: 0, french: "La montre, l'horloge (écrit 時計)", english: "Watch, clock" },
    { term: "おみやげ", reading: "おみやげ", romanization: "omiyage", pitch: 0, french: "Le souvenir rapporté de voyage", english: "Souvenir gift" },
    { term: "店", reading: "みせ", romanization: "mise", segments: [{ text: "店", reading: "みせ" }], french: "Le magasin, la boutique", english: "Shop" },
    { term: "こちら", reading: "こちら", romanization: "kochira", french: "Par ici ; celui-ci (poli)", english: "This way; this one (polite)" },
  ],

  exercises: [
    {
      id: "unit-11-ex1",
      type: "comprehension",
      question: "Vous tenez un objet dans la main et vous en parlez. Quel démonstratif employez-vous ?",
      correctAnswer: "これ",
      options: ["これ", "それ", "あれ", "どれ"],
      optionsHint: ["ma sphère", "la sphère de l'interlocuteur", "hors des deux sphères", "lequel ?"],
      hint: "こ- désigne ce qui appartient à ma zone.",
    },
    {
      id: "unit-11-ex2",
      type: "comprehension",
      question: "Votre interlocuteur tient un livre dans les mains. Comment le désignez-vous ?",
      correctAnswer: "それ",
      options: ["それ", "これ", "あれ", "この"],
      optionsHint: ["la sphère de l'interlocuteur", "ma sphère", "hors des deux sphères", "déterminant, exige un nom"],
      hint: "Le critère est la personne, pas les centimètres.",
    },
    {
      id: "unit-11-ex3",
      type: "fill-blank",
      question: "« Ce sac-ci est le mien. » → ___ かばんは私のです。",
      correctAnswer: "この",
      options: ["この", "これ", "こちら", "ここ"],
      optionsHint: ["déterminant + nom", "pronom autonome", "forme polie (par ici)", "lieu (ici)"],
      hint: "L'objet est nommé juste après : il faut un déterminant.",
    },
    {
      id: "unit-11-ex4",
      type: "fill-blank",
      question: "どれ ___ 田中さんのかさですか。",
      correctAnswer: "が",
      options: ["が", "は", "を", "も"],
      optionsHint: ["ga", "wa", "o", "mo"],
      hint: "Un mot interrogatif en position de sujet impose une particule précise.",
    },
    {
      id: "unit-11-ex5",
      type: "listen",
      question: "これは何ですか。",
      correctAnswer: "Qu'est-ce que c'est ?",
      options: ["Qu'est-ce que c'est ?", "Combien ça coûte ?", "Lequel est-ce ?", "Où est-ce ?"],
      hint: "何 se lit なん devant です.",
    },
    {
      id: "unit-11-ex6",
      type: "reorder",
      question: "Remettez dans l'ordre : « Combien coûte ce parapluie-là ? »",
      correctAnswer: "あのかさはいくらですか。",
      options: ["あの", "かさ", "は", "いくら", "ですか"],
      hint: "L'objet est nommé : déterminant + nom, puis は.",
    },
    {
      id: "unit-11-ex7",
      type: "translate",
      question: "Traduisez : « Qu'est-ce que c'est ? » — l'objet est dans vos mains.",
      correctAnswer: "これは何ですか。",
      options: ["これは何ですか。", "それは何ですか。", "あれは何ですか。", "どれですか。"],
      optionsHint: ["objet dans ma sphère", "objet chez l'interlocuteur", "objet hors des deux sphères", "lequel est-ce ?"],
      hint: "Vous tenez l'objet vous-même.",
    },
    {
      id: "unit-11-ex8",
      type: "comprehension",
      question: "Pourquoi ×これ本です est-il impossible ?",
      correctAnswer: "これ est un pronom : devant un nom, il faut この",
      options: [
        "これ est un pronom : devant un nom, il faut この",
        "Il manque la particule を entre les deux mots",
        "本 devrait être écrit en katakana après un démonstratif",
        "これ ne s'emploie qu'à l'écrit, jamais à l'oral",
      ],
      hint: "Deux séries parallèles : -れ seul, -の attaché à un nom.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-10"],
};
