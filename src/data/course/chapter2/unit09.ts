import type { CourseUnit } from "@/types/course";

export const unit09: CourseUnit = {
  id: "unit-09",
  number: 9,
  title: "Se présenter : です, は et の",
  titleJa: "じこしょうかい：わたしは〜です",
  chapter: 2,
  description:
    "La phrase japonaise la plus fréquente — A は B です — et la particule の qui relie deux noms. À la fin de l'unité, vous dites qui vous êtes, d'où vous venez et ce que vous faites, et vous savez le nier.",
  icon: "私",

  sections: [
    {
      title: "A は B です : la charpente de la phrase",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La phrase japonaise de base tient en trois temps : on pose un thème, on dit quelque chose à son sujet, on referme. わたしは学生です en est le modèle exact. Le japonais place systématiquement la clôture à la fin : rien ne suit です. Ce point d'ordre est plus important qu'il n'y paraît, car toutes les structures des unités suivantes viendront s'insérer entre le thème et cette clôture, jamais après.",
        },
        {
          type: "example",
          japanese: "わたしは学生です。",
          romaji: "watashi wa gakusei desu.",
          translation: "Je suis étudiant.",
          content:
            "Trois blocs : わたし désigne le thème, は annonce qu'on va parler à son sujet, 学生です est le commentaire. Cherchez le mot qui traduit « suis » : il n'y en a pas. です n'est pas un verbe d'action, c'est une clôture polie qui relie le thème à ce qu'on en dit.",
        },
        {
          type: "warning",
          content:
            "La particule は se lit « wa », jamais « ha ». C'est l'erreur numéro un des débutants et elle s'entend à chaque phrase. Dans un mot ordinaire, は garde bien sa valeur « ha » : はい, はな. Mais dès qu'elle est isolée derrière un groupe nominal, donc dès qu'elle est particule, elle se prononce « wa ». Vous avez déjà rencontré le phénomène figé dans こんにちは.",
        },
        {
          type: "text",
          content:
            "です ne se conjugue pas. わたしは学生です, あなたは学生です, 田中さんは学生です : la forme ne bouge pas d'un caractère. Pas d'accord de personne, pas de genre, pas de nombre. Le francophone cherche instinctivement quelque chose à accorder et fabrique des formes qui n'existent pas. Il n'y a rien à accorder : le japonais n'a jamais indiqué la personne dans le verbe.",
        },
        {
          type: "comparison",
          content:
            "は ne signifie pas « est » et ne marque pas non plus le sujet grammatical : il désigne le thème, ce dont on parle. D'où une phrase comme わたしはコーヒーです, courante au café, qui dit mot à mot « moi, c'est un café » et signifie « moi, je prends un café ». Absurde en traduction littérale, parfaitement normale en japonais : は annonce un thème, です referme le commentaire, et personne n'a prétendu que le locuteur était un café.",
        },
        {
          type: "tip",
          content:
            "Prononcez です comme « dèss », le う final s'assourdit presque complètement. Même chose pour la terminaison ます de おねがいします. Un francophone qui articule « dessou » se signale immédiatement, alors que le problème n'est ni de grammaire ni de vocabulaire.",
        },
      ],
    },
    {
      title: "の : relier deux noms, dans l'ordre inverse du français",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "の relie deux noms, et la règle tient en une phrase : ce qui précède の précise ce qui suit. C'est l'inverse exact du français, qui place le déterminant après le déterminé. « Le professeur de japonais » se construit donc à rebours : d'abord 日本語, ensuite の, ensuite 先生. Il faut prendre l'habitude de retourner mentalement le groupe avant de le dire.",
        },
        {
          type: "example",
          japanese: "わたしのなまえ",
          romaji: "watashi no namae",
          translation: "Mon nom",
          content:
            "Le japonais n'a pas d'adjectif possessif : pas de « mon », « ton », « son ». On prend le pronom et on lui accroche の. わたしの = « de moi », あなたの = « de vous ». Le mécanisme est unique et couvre tous les cas, ce qui est une simplification considérable par rapport au français.",
        },
        {
          type: "example",
          japanese: "日本語の先生",
          romaji: "nihongo no sensei",
          translation: "Le professeur de japonais",
          content:
            "日本語 vient en premier parce qu'il précise de quel professeur on parle. Les chaînes s'empilent sans limite dans le même ordre : わたしの日本語の先生, « mon professeur de japonais », se lit de gauche à droite comme un entonnoir qui se resserre.",
        },
        {
          type: "example",
          japanese: "フランス人の学生",
          romaji: "furansujin no gakusei",
          translation: "Un étudiant français",
          content:
            "の ne marque pas seulement la possession : il sert aussi à qualifier, à situer une appartenance. Notez au passage le caractère 人 : lu ひと lorsqu'il est seul (« la personne »), il se lit じん en suffixe de nationalité, dans 日本人 comme dans フランス人.",
        },
        {
          type: "warning",
          content:
            "Ne renversez pas l'ordre : 先生のわたし ne veut pas dire « mon professeur » mais « moi qui suis professeur ». Comme le japonais n'a ni article ni accord pour rattraper l'erreur, inverser les deux noms change purement et simplement le sens de la phrase, sans qu'aucune faute de grammaire ne signale le problème.",
        },
        {
          type: "tip",
          content:
            "Le nom qui suit の peut rester implicite quand le contexte le donne. À la question « à qui est-ce ? », わたしのです suffit : « c'est le mien ». Cette ellipse est très courante à l'oral et vous évite de répéter un mot que tout le monde a en tête.",
        },
      ],
    },
    {
      title: "Nier : じゃないです et ではありません",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour nier, on ne touche à rien d'autre que la clôture : です devient じゃないです. Aucun auxiliaire, aucun encadrement du type « ne… pas », aucun déplacement de mot. Cette économie est caractéristique du japonais : la négation se joue en fin de phrase, exactement là où se joue déjà la politesse.",
        },
        {
          type: "example",
          japanese: "わたしは日本人じゃないです。",
          romaji: "watashi wa nihonjin ja nai desu.",
          translation: "Je ne suis pas japonais.",
          content:
            "Comparez avec わたしは日本人です : seul le bloc final change. C'est la forme la plus courante à l'oral, dans une conversation ordinaire entre adultes. じゃ est une contraction de では, ce qui explique la parenté des deux formes ci-dessous.",
        },
        {
          type: "example",
          japanese: "わたしは会社員ではありません。",
          romaji: "watashi wa kaishain de wa arimasen.",
          translation: "Je ne suis pas salarié.",
          content:
            "Registre nettement plus formel : écrits administratifs, annonces, discours, entretien d'embauche. Remarquez que le は de では se prononce encore « wa » — c'est la même particule, une fois de plus. À l'oral courant, cette forme sonne raide.",
        },
        {
          type: "comparison",
          content:
            "Trois formes, un seul sens, trois degrés : じゃないです (conversation), じゃありません (intermédiaire, un peu plus soigné), ではありません (formel). Aucune n'est incorrecte. Comme pour les remerciements de l'unité précédente, c'est la longueur qui porte le niveau de langue.",
        },
        {
          type: "warning",
          content:
            "Erreur fréquente : découper じゃないです et dire 日本人ないです ou glisser la négation devant le nom. Le bloc fonctionne d'un seul tenant et se pose après le nom, jamais avant. De même, ne cherchez pas à traduire le « pas » français par un mot séparé : il n'existe pas.",
        },
        {
          type: "text",
          content:
            "Pour interroger, il suffit d'ajouter か à la fin : 学生ですか。 L'ordre des mots ne change pas, il n'y a pas d'inversion comme en français. L'unité suivante détaille les questions ; retenez pour l'instant que か se pose en dernier et qu'à l'écrit il rend le point d'interrogation facultatif.",
        },
      ],
    },
    {
      title: "Se présenter réellement",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "あなた est traduit « vous » dans tous les manuels, et un adulte japonais ne l'emploie presque jamais face à quelqu'un. On dit le nom de la personne suivi de さん, ou son titre (先生), ou plus souvent rien du tout, le thème se déduisant du contexte. Adressé à un supérieur, あなた est franchement déplacé ; entre époux, c'est un usage affectueux figé qui n'a rien de général.",
        },
        {
          type: "example",
          japanese: "田中さんは先生ですか。",
          romaji: "Tanaka-san wa sensei desu ka.",
          translation: "Vous êtes professeur, monsieur Tanaka ?",
          content:
            "On s'adresse à quelqu'un en le nommant, ce qui donne en apparence une troisième personne. Cela paraît distant à une oreille française ; c'est au contraire la marque normale de la considération en japonais, et c'est ce qu'on entend dans un bureau toute la journée.",
        },
        {
          type: "warning",
          content:
            "N'ajoutez jamais さん à votre propre nom. わたしは田中さんです fait sourire, parce que さん est une marque de respect qu'on ne s'accorde pas à soi-même. On se présente en disant 田中です, sans suffixe et souvent sans même わたしは.",
        },
        {
          type: "example",
          japanese: "はじめまして。わたしはマリーです。フランス人です。",
          romaji: "hajimemashite. watashi wa Marii desu. furansujin desu.",
          translation: "Enchantée. Je m'appelle Marie. Je suis française.",
          content:
            "La deuxième phrase se passe de わたしは : le thème est déjà posé, on ne le répète pas. Le francophone remet un sujet à chaque phrase par réflexe, et c'est précisément ce qui alourdit son japonais. Tant que le thème ne change pas, il reste tacite.",
        },
        {
          type: "text",
          content:
            "L'ordre des noms est inversé par rapport au français : le nom de famille précède le prénom. Entre adultes, et surtout au travail, on se présente par le nom de famille seul — le prénom relève de l'intimité ou de l'enfance. Un francophone qui donne spontanément son prénom au bureau crée une familiarité qu'il ne mesure pas.",
        },
        {
          type: "tip",
          content:
            "La présentation type tient en quatre temps : はじめまして, puis le nom, puis l'origine ou la profession, puis よろしくおねがいします. Rien de plus n'est attendu, et rallonger passe mal. Préparez ces quatre phrases une fois pour toutes, elles vous serviront des dizaines de fois.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Premier jour dans une école de langue à Tokyo. Vous engagez la conversation avec une personne assise à côté de vous.",
    lines: [
      {
        speaker: "Vous",
        japanese: "はじめまして。わたしはマリーです。",
        romaji: "hajimemashite. watashi wa Marii desu.",
        french: "Enchantée. Je m'appelle Marie.",
        note: "わたしは pose le thème une seule fois. Les phrases suivantes s'en dispenseront.",
      },
      {
        speaker: "Tanaka",
        japanese: "はじめまして。田中です。",
        romaji: "hajimemashite. Tanaka desu.",
        french: "Enchanté. Tanaka.",
        note: "Ni わたしは, ni さん après son propre nom : c'est la présentation normale d'un adulte japonais.",
      },
      {
        speaker: "Tanaka",
        japanese: "マリーさんはフランス人ですか。",
        romaji: "Marii-san wa furansujin desu ka.",
        french: "Vous êtes française, Marie ?",
        note: "Il dit マリーさん et non あなた. Le nom suivi de さん remplace le « vous » français.",
      },
      {
        speaker: "Vous",
        japanese: "はい、フランス人です。学生です。",
        romaji: "hai, furansujin desu. gakusei desu.",
        french: "Oui, je suis française. Je suis étudiante.",
        note: "Deux phrases sans thème exprimé : il est déjà connu, donc il disparaît.",
      },
      {
        speaker: "Vous",
        japanese: "田中さんは学生ですか。",
        romaji: "Tanaka-san wa gakusei desu ka.",
        french: "Et vous, monsieur Tanaka, vous êtes étudiant ?",
      },
      {
        speaker: "Tanaka",
        japanese: "いいえ、学生じゃないです。会社員です。",
        romaji: "iie, gakusei ja nai desu. kaishain desu.",
        french: "Non, je ne suis pas étudiant. Je suis salarié.",
        note: "La négation remplace です par じゃないです ; l'ordre des mots ne bouge pas d'un caractère.",
      },
      {
        speaker: "Vous",
        japanese: "よろしくおねがいします。",
        romaji: "yoroshiku onegaishimasu.",
        french: "Ravie de faire votre connaissance.",
        note: "Clôt toute présentation. Sans elle, l'échange reste inachevé aux oreilles japonaises.",
      },
    ],
  },

  keyPoints: [
    "La particule は se prononce toujours « wa » : わたしは se dit « watashi wa ». Ailleurs, à l'intérieur d'un mot, は se lit « ha ».",
    "A は B です : le thème d'abord, la clôture à la fin. です ne se conjugue jamais — ni personne, ni genre, ni nombre.",
    "の relie deux noms dans l'ordre inverse du français : ce qui précède の précise ce qui suit (わたしのなまえ, 日本語の先生).",
    "Négation : です devient じゃないです à l'oral, ではありません en registre formel. Le reste de la phrase ne change pas.",
    "On ne dit pas あなた à son interlocuteur : on emploie son nom suivi de さん, ou rien du tout. Et jamais さん après son propre nom.",
  ],

  vocabulary: [
    {
      term: "わたし",
      kana: "わたし",
      romaji: "watashi",
      pitch: 0,
      french: "Je, moi",
      english: "I, me",
    },
    {
      term: "あなた",
      kana: "あなた",
      romaji: "anata",
      pitch: 2,
      french: "Tu, vous (à éviter en face à face)",
      english: "You (avoid in direct address)",
    },
    {
      term: "なまえ",
      kana: "なまえ",
      romaji: "namae",
      pitch: 0,
      french: "Le nom, le prénom",
      english: "Name",
    },
    {
      term: "さん",
      kana: "さん",
      romaji: "san",
      french: "Suffixe de politesse après un nom de personne",
      english: "Polite suffix after a person's name",
    },
    {
      term: "人",
      kana: "ひと",
      romaji: "hito",
      segments: [{ text: "人", reading: "ひと" }],
      french: "La personne, les gens",
      english: "Person, people",
    },
    {
      term: "日本",
      kana: "にほん",
      romaji: "nihon",
      segments: [{ text: "日本", reading: "にほん" }],
      french: "Le Japon",
      english: "Japan",
    },
    {
      term: "日本人",
      kana: "にほんじん",
      romaji: "nihonjin",
      segments: [{ text: "日本人", reading: "にほんじん" }],
      french: "Un Japonais, une Japonaise",
      english: "Japanese person",
    },
    {
      term: "日本語",
      kana: "にほんご",
      romaji: "nihongo",
      segments: [{ text: "日本語", reading: "にほんご" }],
      pitch: 0,
      french: "La langue japonaise",
      english: "Japanese language",
    },
    {
      term: "フランス",
      kana: "フランス",
      romaji: "furansu",
      french: "La France",
      english: "France",
    },
    {
      term: "フランス人",
      kana: "フランスじん",
      romaji: "furansujin",
      segments: [{ text: "フランス" }, { text: "人", reading: "じん" }],
      french: "Un Français, une Française",
      english: "French person",
    },
    {
      term: "学生",
      kana: "がくせい",
      romaji: "gakusei",
      segments: [{ text: "学生", reading: "がくせい" }],
      pitch: 0,
      french: "L'étudiant, l'étudiante",
      english: "Student",
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
      term: "会社",
      kana: "かいしゃ",
      romaji: "kaisha",
      segments: [{ text: "会社", reading: "かいしゃ" }],
      pitch: 0,
      french: "L'entreprise",
      english: "Company",
    },
    {
      term: "会社員",
      kana: "かいしゃいん",
      romaji: "kaishain",
      segments: [{ text: "会社員", reading: "かいしゃいん" }],
      french: "L'employé de bureau, le salarié",
      english: "Company employee",
    },
    {
      term: "はい",
      kana: "はい",
      romaji: "hai",
      french: "Oui",
      english: "Yes",
    },
    {
      term: "いいえ",
      kana: "いいえ",
      romaji: "iie",
      french: "Non",
      english: "No",
    },
    {
      term: "じゃないです",
      kana: "じゃないです",
      romaji: "ja nai desu",
      french: "Ne pas être (négation polie de です)",
      english: "Is not (polite negative of です)",
    },
  ],

  exercises: [
    {
      id: "unit-09-ex1",
      type: "comprehension",
      question: "Comment se prononce は dans わたしは学生です ?",
      correctAnswer: "« wa »",
      options: ["« wa »", "« ha »", "« ba »", "« a »"],
      hint: "En tant que particule, ce kana ne garde pas sa valeur habituelle.",
    },
    {
      id: "unit-09-ex2",
      type: "fill-blank",
      question: "« Je suis étudiant » : わたし ___ 学生です。",
      correctAnswer: "は",
      options: ["は", "の", "に", "と"],
      optionsKana: ["は", "の", "に", "と"],
      optionsHint: ["wa", "no", "ni", "to"],
      hint: "La particule qui annonce le thème de la phrase.",
    },
    {
      id: "unit-09-ex3",
      type: "fill-blank",
      question: "« Mon nom » se dit わたし ___ なまえ.",
      correctAnswer: "の",
      options: ["の", "は", "を", "へ"],
      optionsKana: ["の", "は", "を", "へ"],
      optionsHint: ["no", "wa", "o", "e"],
      hint: "Le japonais n'a pas d'adjectif possessif : il relie les deux noms.",
    },
    {
      id: "unit-09-ex4",
      type: "comprehension",
      question: "Quelle phrase signifie correctement « Je ne suis pas japonais » ?",
      correctAnswer: "わたしは日本人じゃないです。",
      options: [
        "わたしは日本人じゃないです。",
        "わたしは日本人ないです。",
        "わたしはじゃない日本人です。",
        "わたしは日本人ですじゃない。",
      ],
      hint: "La négation remplace です en bloc, à la fin de la phrase.",
    },
    {
      id: "unit-09-ex5",
      type: "listen",
      question: "わたしは学生じゃないです。",
      correctAnswer: "Je ne suis pas étudiant.",
      options: [
        "Je ne suis pas étudiant.",
        "Je suis étudiant.",
        "Je ne suis pas professeur.",
        "Vous n'êtes pas étudiant.",
      ],
      hint: "Écoutez le thème au début et la clôture à la fin.",
    },
    {
      id: "unit-09-ex6",
      type: "reorder",
      question: "Reconstituez la phrase : « Je suis professeur de japonais. »",
      correctAnswer: "わたしは日本語の先生です。",
      options: ["わたし", "は", "日本語", "の", "先生", "です"],
      hint: "Le déterminant passe avant le déterminé : 日本語 vient avant 先生.",
    },
    {
      id: "unit-09-ex7",
      type: "comprehension",
      question: "Comment s'adresse-t-on normalement à un interlocuteur japonais dont on connaît le nom ?",
      correctAnswer: "Par son nom de famille suivi de さん",
      options: [
        "Par son nom de famille suivi de さん",
        "Par あなた",
        "Par son prénom seul",
        "Par son nom de famille suivi de わたし",
      ],
      hint: "Le « vous » japonais des manuels ne s'emploie presque jamais en face à face.",
    },
    {
      id: "unit-09-ex8",
      type: "listen",
      question: "田中さんは会社員ですか。",
      correctAnswer: "Monsieur Tanaka est-il salarié ?",
      options: [
        "Monsieur Tanaka est-il salarié ?",
        "Monsieur Tanaka est-il étudiant ?",
        "Monsieur Tanaka n'est pas salarié.",
        "Je suis salarié, monsieur Tanaka.",
      ],
      hint: "Le か final transforme la phrase en question sans rien déplacer.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-08"],
};
