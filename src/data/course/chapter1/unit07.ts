import type { CourseUnit } from "@/types/course";

export const unit07: CourseUnit = {
  id: "unit-07",
  number: 7,
  title: "La more, le rythme et l'accent de hauteur",
  titleJa: "モーラとアクセント",
  chapter: 1,
  description:
    "La synthèse sonore du japonais : compter les mores d'un mot sans hésiter, et entendre la chute de hauteur qui sépare あめ (la pluie) de あめ (le bonbon).",
  icon: "🎵",

  sections: [
    {
      title: "La more : une unité de durée, pas une syllabe",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le japonais ne se découpe pas en syllabes mais en mores, et une more est avant tout une durée. Chaque more occupe le même temps que la précédente, comme les croches d'une mesure. Un kana plein vaut une more ; les petits kana n'en valent aucune, ils modifient celle d'avant. C'est le point de départ de tout le rythme japonais, et le francophone le viole sans s'en apercevoir parce que le français, lui, étire librement certaines syllabes et en écrase d'autres.",
        },
        {
          type: "example",
          japanese: "がっこう",
          romaji: "gakkou",
          translation: "l'école",
          content:
            "Quatre mores : が・っ・こ・う. Le っ est une more silencieuse, un temps plein pendant lequel la bouche reste fermée sur le k. Un francophone dit spontanément « ga-KO » en deux temps : il perd la moitié du mot. Comptez quatre battements égaux, dont un vide.",
        },
        {
          type: "example",
          japanese: "きょう",
          romaji: "kyou",
          translation: "aujourd'hui",
          content:
            "Deux mores seulement : きょ et う. Le petit ょ ne compte pas pour lui-même, il fusionne avec き pour donner une more unique « kyo » ; le う qui suit allonge cette voyelle. Ce n'est donc ni ki-yo-u ni kyo-ou, mais deux temps : kyo-o.",
        },
        {
          type: "example",
          japanese: "とうきょう",
          romaji: "toukyou",
          translation: "Tokyo",
          content:
            "Quatre mores : と・う・きょ・う. Le nom français « Tokyo » n'en garde que trois syllabes et supprime les deux allongements. Prononcez to-o-kyo-o, quatre temps rigoureusement égaux : c'est le mot où l'erreur francophone s'entend le plus vite.",
        },
        {
          type: "text",
          content:
            "Les règles de comptage tiennent en quatre lignes. Un kana plein vaut une more. Les petits kana ゃ ゅ ょ ぁ ぃ ぅ ぇ ぉ se collent à la more précédente et n'en créent pas. ん compte pour une more entière, même s'il ne porte pas de voyelle. っ compte pour une more, silencieuse. En katakana, la barre ー compte elle aussi pour une more pleine.",
        },
        {
          type: "example",
          japanese: "せんせい",
          romaji: "sensei",
          translation: "le professeur",
          content:
            "Quatre mores : せ・ん・せ・い. Le ん est un temps à part entière, pas une simple nasalisation de la voyelle qui précède. Le francophone tend à produire « sen-sé » en deux temps nasalisés ; il faut au contraire poser quatre battements et laisser le ん occuper le sien.",
        },
        {
          type: "tip",
          content:
            "Méthode concrète : tapez du doigt une fois par more en prononçant, à vitesse lente et régulière. がっこう donne quatre coups, きょう deux, しんぶん quatre, きって trois. Quelques minutes par jour suffisent pour installer le réflexe, et il conditionne tout le reste de votre prononciation.",
        },
      ],
    },
    {
      title: "Hauteur et non intensité : les quatre schémas",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le français marque un mot en frappant une syllabe plus fort et plus longtemps. Le japonais standard ne fait rien de tel : l'intensité reste plate, et c'est la hauteur de la voix qui bouge. Chaque more est simplement haute ou basse — deux niveaux, pas davantage. Un mot comporte au plus une chute de hauteur, et une fois la voix descendue elle ne remonte pas à l'intérieur du groupe. C'est ce qu'on appelle l'accent de hauteur, et il ne varie ni avec l'émotion ni avec la place du mot dans la phrase.",
        },
        {
          type: "text",
          content:
            "De cette contrainte découlent exactement quatre schémas possibles. Heiban : aucune chute, la voix monte après la première more et reste en haut. Atamadaka : la chute intervient juste après la première more. Nakadaka : la chute intervient à l'intérieur du mot, ni à la première more ni à la dernière. Odaka : la chute intervient après la dernière more, donc elle ne s'entend que sur ce qui suit le mot. Le chiffre donné dans les dictionnaires est l'indice de la more après laquelle la voix descend, 0 signifiant qu'elle ne descend jamais.",
        },
        {
          type: "example",
          japanese: "ねこ",
          romaji: "neko",
          translation: "le chat",
          content:
            "Atamadaka, chute après la première more : NE haut, ko bas. Tout ce qui suit reste bas, y compris une particule. C'est le schéma le plus facile à imiter pour un francophone, à condition de ne pas frapper plus fort sur ね mais seulement plus haut.",
        },
        {
          type: "example",
          japanese: "たまご",
          romaji: "tamago",
          translation: "l'œuf",
          content:
            "Nakadaka, chute au milieu : ta bas, MA haut, go bas. La voix monte, tient un temps, puis redescend à l'intérieur du mot. C'est le schéma qui demande le plus de contrôle, parce que la remontée initiale et la chute sont proches l'une de l'autre.",
        },
        {
          type: "example",
          japanese: "さかな",
          romaji: "sakana",
          translation: "le poisson",
          content:
            "Heiban : sa bas, KA-NA haut, et la voix reste en haut sur ce qui suit. さかなが garde le が haut. C'est le schéma le plus fréquent du japonais : dans le doute sur un mot inconnu, c'est statistiquement le meilleur pari.",
        },
        {
          type: "example",
          japanese: "はな",
          romaji: "hana",
          translation: "la fleur",
          content:
            "Odaka : ha bas, NA haut, et la chute tombe sur ce qui suit le mot. Isolé, はな (la fleur) sonne exactement comme un mot heiban ; ajoutez une particule et la différence apparaît : はなが descend sur が. C'est pour cela qu'un mot s'apprend avec sa particule collée.",
        },
        {
          type: "tip",
          content:
            "N'essayez pas de chanter des intervalles : il n'y a que deux niveaux, haut et bas, et l'écart est faible. Le meilleur exercice consiste à écouter un mot, à le fredonner sur deux notes seulement, puis à replacer les consonnes et les voyelles par-dessus.",
        },
      ],
    },
    {
      title: "Les paires que seule la hauteur distingue",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Quelques paires de mots ne se distinguent que par leur schéma de hauteur. Elles sont peu nombreuses et le contexte lève presque toujours l'ambiguïté — personne ne confond vraiment la pluie et un bonbon dans une conversation. Leur intérêt est ailleurs : elles rendent audible une différence que l'oreille francophone ne perçoit pas encore, et travailler dessus affine l'écoute pour tout le reste du vocabulaire.",
        },
        {
          type: "example",
          japanese: "あめ",
          romaji: "ame",
          translation: "la pluie / le bonbon",
          content:
            "La pluie est atamadaka : A haut, me bas, la chute est immédiate. Le bonbon est heiban : a bas, ME haut, sans aucune chute — あめが garde le が haut. Deux mots identiques à l'écrit en kana, deux courbes de hauteur opposées.",
        },
        {
          type: "example",
          japanese: "はし",
          romaji: "hashi",
          translation: "les baguettes / le pont / le bord",
          content:
            "Trois mots, trois schémas. Les baguettes : atamadaka, HA haut puis chute. Le pont : odaka, ha bas, SHI haut, la chute tombe sur la particule (はしが descend sur が). Le bord : heiban, aucune chute. Les kanji les distinguent à l'écrit, la hauteur seule les distingue à l'oral.",
        },
        {
          type: "text",
          content:
            "Ce qui précède décrit le japonais standard, celui de Tokyo, des dictionnaires et des médias nationaux. D'autres régions ont leurs propres schémas : dans la région d'Osaka et de Kyoto, beaucoup de mots portent une courbe différente, parfois inversée par rapport à Tokyo. Ce n'est pas un problème pour un apprenant : apprenez le standard, il est compris partout, et l'oreille s'adaptera d'elle-même sur place.",
        },
        {
          type: "text",
          content:
            "Pour l'entraînement à l'écoute, l'application dispose d'une page dédiée : /accent. Vous y écoutez des mots isolés et des paires minimales, et vous devez identifier où tombe la chute. Deux ou trois minutes par session valent mieux qu'une longue séance mensuelle — c'est une compétence perceptive, elle se construit par répétition courte et régulière.",
        },
        {
          type: "warning",
          content:
            "Ne laissez pas la hauteur vous paralyser. Une chute mal placée passe presque toujours inaperçue ou se corrige par le contexte ; une more escamotée, elle, rend le mot méconnaissable. Si vous devez choisir où porter votre effort, travaillez d'abord la longueur et le nombre de mores, la hauteur ensuite.",
        },
        {
          type: "tip",
          content:
            "Enregistrez-vous en disant あめ dans les deux schémas, puis réécoutez-vous le lendemain sans regarder vos notes : si vous ne distinguez pas vos deux versions, c'est la production qui manque, pas l'oreille. C'est le test le plus honnête et le plus rapide.",
        },
      ],
    },
    {
      title: "Le rythme au niveau de la phrase",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Dans une phrase, les mots ne se prononcent pas isolément : ils forment des groupes accentuels, chacun avec au plus une chute. La particule qui suit un nom appartient au même groupe que lui, ce qui explique pourquoi la chute d'un mot odaka ne s'entend que sur elle. Le japonais parlé est donc un flux continu de mores égales, découpé par des chutes de hauteur, et non par des pauses entre les mots.",
        },
        {
          type: "example",
          japanese: "いぬが",
          romaji: "inu ga",
          translation: "le chien (suivi de la particule が)",
          content:
            "いぬ est odaka : i bas, NU haut, puis が retombe en bas. Seule la particule révèle le schéma. Isolé, いぬ sonnerait comme un mot plat.",
        },
        {
          type: "example",
          japanese: "さかなが",
          romaji: "sakana ga",
          translation: "le poisson (suivi de la particule が)",
          content:
            "さかな est heiban : la voix monte après la première more et le が reste en haut, sans jamais retomber. Comparez directement avec いぬが : même particule, deux comportements opposés. C'est l'exercice qui fixe la différence odaka / heiban.",
        },
        {
          type: "text",
          content:
            "Conséquence pratique : apprenez des blocs, pas des mots nus. Un nom mémorisé avec sa particule, une expression apprise d'un seul tenant, portent avec eux leur rythme et leur courbe de hauteur. C'est aussi ainsi que les enfants japonais les acquièrent, et c'est ce qui donne à un apprenant l'impression soudaine de « sonner » juste.",
        },
        {
          type: "tip",
          content:
            "Le shadowing est la méthode la plus efficace à ce stade : lancez un enregistrement court et répétez par-dessus avec un demi-mot de retard, sans regarder le texte. Vous copiez alors la durée des mores et la courbe de hauteur ensemble, au lieu de les analyser séparément.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Au comptoir d'un petit restaurant, un jour de pluie. Deux mots de ce court échange ne se distinguent de leurs homophones que par la hauteur.",
    lines: [
      {
        speaker: "Vous",
        japanese: "きょうはあめですね。",
        romaji: "kyou wa ame desu ne.",
        french: "Il pleut, aujourd'hui.",
        note: "あめ avec la chute juste après la première more = la pluie. Prononcé plat, le même mot désigne un bonbon.",
      },
      {
        speaker: "Patron",
        japanese: "そうですね。",
        romaji: "sou desu ne.",
        french: "Oui, en effet.",
        note: "Réponse de connivence passe-partout : elle valide ce que vient de dire l'autre sans rien ajouter.",
      },
      {
        speaker: "Vous",
        japanese: "はし、おねがいします。",
        romaji: "hashi, onegai shimasu.",
        french: "Des baguettes, s'il vous plaît.",
        note: "はし avec la chute après la première more = les baguettes. Avec la chute reportée sur la particule suivante, ce serait le pont.",
      },
      {
        speaker: "Patron",
        japanese: "はい、どうぞ。",
        romaji: "hai, douzo.",
        french: "Voilà, je vous en prie.",
      },
    ],
  },

  keyPoints: [
    "La more est une unité de durée, pas une syllabe : がっこう en compte quatre (が・っ・こ・う), きょう deux (きょ・う), せんせい et とうきょう quatre chacun.",
    "Les petits kana ゃ ゅ ょ se collent à la more précédente et n'en créent pas ; ん, っ et la barre ー comptent chacun pour une more entière.",
    "Le japonais standard n'a pas d'accent d'intensité : chaque more est haute ou basse, un mot comporte au plus une chute de hauteur, et la voix ne remonte pas après elle.",
    "Quatre schémas seulement : heiban (aucune chute), atamadaka (chute après la 1re more), nakadaka (chute à l'intérieur du mot), odaka (chute après la dernière more, audible uniquement sur la particule suivante).",
    "Certaines paires ne se distinguent que par la hauteur : あめ (pluie, chute immédiate) et あめ (bonbon, plat), はし (baguettes / pont / bord). La page /accent de l'application sert à entraîner l'oreille.",
  ],

  vocabulary: [
    { term: "がっこう", kana: "がっこう", romaji: "gakkou", pitch: 0, french: "L'école", english: "School" },
    { term: "きょう", kana: "きょう", romaji: "kyou", pitch: 1, french: "Aujourd'hui", english: "Today" },
    { term: "せんせい", kana: "せんせい", romaji: "sensei", pitch: 3, french: "Le professeur", english: "Teacher" },
    { term: "とうきょう", kana: "とうきょう", romaji: "toukyou", pitch: 0, french: "Tokyo", english: "Tokyo" },
    { term: "あめ", kana: "あめ", romaji: "ame", pitch: 1, french: "La pluie", english: "Rain" },
    { term: "はし", kana: "はし", romaji: "hashi", pitch: 1, french: "Les baguettes (pour manger)", english: "Chopsticks" },
    { term: "いぬ", kana: "いぬ", romaji: "inu", pitch: 2, french: "Le chien", english: "Dog" },
    { term: "ねこ", kana: "ねこ", romaji: "neko", pitch: 1, french: "Le chat", english: "Cat" },
    { term: "さかな", kana: "さかな", romaji: "sakana", pitch: 0, french: "Le poisson", english: "Fish" },
    { term: "はな", kana: "はな", romaji: "hana", pitch: 2, french: "La fleur", english: "Flower" },
    { term: "やま", kana: "やま", romaji: "yama", pitch: 2, french: "La montagne", english: "Mountain" },
    { term: "たまご", kana: "たまご", romaji: "tamago", pitch: 2, french: "L'œuf", english: "Egg" },
    { term: "みかん", kana: "みかん", romaji: "mikan", pitch: 1, french: "La mandarine", english: "Tangerine" },
    { term: "きって", kana: "きって", romaji: "kitte", pitch: 0, french: "Le timbre", english: "Postage stamp" },
    { term: "しんぶん", kana: "しんぶん", romaji: "shinbun", pitch: 0, french: "Le journal", english: "Newspaper" },
    { term: "こうえん", kana: "こうえん", romaji: "kouen", pitch: 0, french: "Le parc", english: "Park" },
    { term: "でんわ", kana: "でんわ", romaji: "denwa", pitch: 0, french: "Le téléphone", english: "Telephone" },
  ],

  exercises: [
    {
      id: "unit-07-ex1",
      type: "comprehension",
      question: "Combien de mores compte がっこう ?",
      correctAnswer: "Quatre : が・っ・こ・う",
      options: [
        "Quatre : が・っ・こ・う",
        "Trois : le っ ne compte pas comme une more",
        "Deux : がっ et こう",
        "Cinq : le う final compte double",
      ],
      hint: "Le っ est une more silencieuse, mais c'est une more entière.",
    },
    {
      id: "unit-07-ex2",
      type: "comprehension",
      question: "Combien de mores compte きょう ?",
      correctAnswer: "Deux : きょ et う",
      options: [
        "Deux : きょ et う",
        "Trois : き, ょ et う",
        "Une seule, le mot est trop court pour en faire deux",
        "Quatre, comme とうきょう",
      ],
      hint: "Un petit kana ne crée jamais de more, il modifie celle qui précède.",
    },
    {
      id: "unit-07-ex3",
      type: "comprehension",
      question: "Comment le japonais standard marque-t-il un mot à l'oral ?",
      correctAnswer: "Par la hauteur : chaque more est haute ou basse",
      options: [
        "Par la hauteur : chaque more est haute ou basse",
        "Par l'intensité : une syllabe est frappée plus fort",
        "Par la longueur de la consonne initiale",
        "Par rien : aucun mot japonais n'est accentué",
      ],
      hint: "C'est exactement ce que le français ne fait pas.",
    },
    {
      id: "unit-07-ex4",
      type: "fill-blank",
      question: "Prononcé avec une chute juste après la première more, あめ signifie ___ .",
      correctAnswer: "la pluie",
      options: ["la pluie", "le bonbon", "le ciel", "la neige"],
      hint: "Le même mot prononcé plat, sans chute, désigne autre chose.",
    },
    {
      id: "unit-07-ex5",
      type: "fill-blank",
      question: "Le schéma d'accent dans lequel la voix ne redescend jamais s'appelle ___ .",
      correctAnswer: "heiban",
      options: ["heiban", "atamadaka", "nakadaka", "odaka"],
      hint: "C'est le schéma le plus fréquent du japonais : さかな, がっこう, でんわ.",
    },
    {
      id: "unit-07-ex6",
      type: "comprehension",
      question: "Pourquoi la chute d'un mot odaka comme いぬ ne s'entend-elle pas quand le mot est isolé ?",
      correctAnswer: "Parce qu'elle tombe après la dernière more, donc sur ce qui suit",
      options: [
        "Parce qu'elle tombe après la dernière more, donc sur ce qui suit",
        "Parce que les mots odaka n'ont en réalité aucune chute",
        "Parce que la chute est trop faible pour être audible",
        "Parce qu'elle se produit avant la première more",
      ],
      hint: "Comparez いぬが et さかなが : la particule ne se comporte pas pareil.",
    },
    {
      id: "unit-07-ex7",
      type: "reorder",
      question: "Remettez les blocs dans l'ordre : « L'école, c'est à Tokyo. »",
      correctAnswer: "がっこうはとうきょうです。",
      options: ["がっこう", "は", "とうきょう", "です"],
      hint: "Huit mores en tout dans les deux noms : quatre pour chacun.",
    },
    {
      id: "unit-07-ex8",
      type: "listen",
      question: "とうきょう",
      correctAnswer: "Tokyo",
      options: ["Tokyo", "Aujourd'hui", "L'école", "Le parc"],
      hint: "Quatre mores, schéma plat : la voix ne redescend pas.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-06"],
};
