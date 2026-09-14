import type { CourseUnit } from "@/types/course";

export const unit16: CourseUnit = {
  id: "unit-16",
  number: 16,
  title: "Commander au restaurant",
  titleNative: "レストランで",
  chapter: 3,
  description:
    "Passer commande pour de vrai : reconnaître les formules du personnel sans avoir à les produire, et maîtriser les cinq tournures qui suffisent au client, de l'entrée jusqu'à la caisse.",
  icon: "食",

  sections: [
    {
      title: "Ce que vous entendrez, ce que vous direz",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Un restaurant japonais fonctionne avec deux répertoires de phrases qui ne se croisent presque jamais. Le personnel emploie le japonais commercial : des formules ultra-polies, longues, figées, que vous n'aurez jamais à produire. Le client, lui, s'en sort avec cinq ou six tournures courtes. Séparer clairement les deux listes est le vrai travail de cette unité : ce que vous devez comprendre à l'oreille, et ce que vous devez savoir dire.",
        },
        {
          type: "example",
          native: "いらっしゃいませ。",
          romanization: "irasshaimase.",
          translation: "Bienvenue.",
          content:
            "Lancé dès que la porte s'ouvre, souvent reprise en écho par toute l'équipe. Ce n'est pas une question et cela n'attend aucune réponse verbale. Un hochement de tête est exactement ce que fait un client japonais.",
        },
        {
          type: "example",
          native: "ごちゅうもんはおきまりですか。",
          romanization: "gochuumon wa okimari desu ka.",
          translation: "Avez-vous choisi ?",
          content:
            "Littéralement « votre commande est-elle décidée ». Vous entendrez aussi la version tronquée ごちゅうもんは？ Deux réponses couvrent tous les cas : votre commande, ou まだです (pas encore) si vous avez besoin de temps.",
        },
        {
          type: "example",
          native: "しょうしょうおまちください。",
          romanization: "shoushou omachi kudasai.",
          translation: "Un instant, je vous prie.",
          content:
            "La version très polie de まってください. しょうしょう signifie « un tout petit peu ». À reconnaître à l'oreille : elle annonce que le serveur part vérifier en cuisine ou chercher quelque chose. Aucune réaction n'est attendue, sinon はい.",
        },
        {
          type: "warning",
          content:
            "Ne répondez pas いらっしゃいませ à un いらっしゃいませ. C'est une formule d'hôte, réservée à celui qui accueille. Un francophone qui la renvoie par politesse produit l'effet d'un client français répondant au serveur « bonjour, bienvenue chez nous ».",
        },
        {
          type: "tip",
          content:
            "Entraînez-vous à reconnaître ces trois formules sans les traduire. En salle elles sont débitées à toute vitesse et à moitié avalées : いらっしゃいませ s'entend souvent comme un simple « asshaimasé ». Le but n'est pas de les analyser, c'est de ne pas être surpris.",
        },
      ],
    },
    {
      title: "Commander : を ください et を おねがいします",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Commander tient dans un seul moule : [ce que je veux] + を + ください ou おねがいします. La particule を marque l'objet de la demande, comme elle marque l'objet d'un verbe. Aucun article, aucun genre, aucun pluriel à gérer : お茶をください suffit, sans avoir à dire « un thé ». Si vous voulez préciser une quantité, elle se glisse juste avant le verbe, mais ce n'est jamais obligatoire.",
        },
        {
          type: "example",
          native: "これをください。",
          romanization: "kore o kudasai.",
          translation: "Celui-ci, s'il vous plaît.",
          content:
            "L'outil le plus rentable du débutant : le doigt sur la carte, sur la vitrine ou sur la photo, et これ. Personne ne trouvera cela grossier — c'est précisément ce que font les Japonais devant les répliques de plats en résine exposées à l'entrée.",
        },
        {
          type: "example",
          native: "ラーメンをおねがいします。",
          romanization: "raamen o onegai shimasu.",
          translation: "Un ramen, s'il vous plaît.",
          content:
            "おねがいします est un cran plus souple et plus déférent que ください. Il vient du verbe « demander une faveur », ce qui explique qu'il passe partout, même quand la demande est un service et non un objet.",
        },
        {
          type: "comparison",
          content:
            "ください exige un objet devant lui : on ne dit pas ください tout seul. おねがいします se dit seul et couvre aussi les services — l'addition, un renseignement, une serviette. Devant un plat, les deux sont corrects ; dès que la demande est floue ou immatérielle, seul おねがいします fonctionne.",
        },
        {
          type: "example",
          native: "おすすめは何ですか。",
          romanization: "osusume wa nan desu ka.",
          translation: "Qu'est-ce que vous recommandez ?",
          content:
            "La question qui change un repas, surtout dans un petit établissement où la carte n'a pas de photos. おすすめ vient du verbe « recommander ». Attendez-vous à une réponse rapide contenant un nom de plat que vous ne comprendrez pas : enchaînez avec じゃあ、それをおねがいします (alors, celui-là).",
        },
        {
          type: "example",
          native: "おかいけいおねがいします。",
          romanization: "okaikei onegai shimasu.",
          translation: "L'addition, s'il vous plaît.",
          content:
            "かいけい désigne le règlement, avec le お de politesse devant. Variante tout aussi courante : すみません、おねがいします en levant légèrement la main. Interpeller le personnel à la voix est parfaitement normal au Japon, y compris dans un bon restaurant : c'est l'inverse de l'usage français, où l'on attend d'être vu.",
        },
        {
          type: "warning",
          content:
            "Ne traduisez pas « je voudrais » par ...がほしいです face au personnel. ほしい exprime un désir brut et sonne enfantin dans un échange commercial. Le japonais poli passe par ...をおねがいします ou ...をください, jamais par ほしい.",
        },
      ],
    },
    {
      title: "いただきます et ごちそうさまでした",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Ces deux formules encadrent tous les repas, du dîner de famille au sandwich de konbini avalé debout. Elles ne sont pas religieuses et ne correspondent pas au « bon appétit » français. いただく est la forme humble du verbe « recevoir » : いただきます veut dire « je reçois », en s'abaissant devant ce qu'on reçoit. C'est un remerciement adressé en même temps au cuisinier, à ceux qui ont produit les ingrédients, et à la nourriture elle-même.",
        },
        {
          type: "example",
          native: "いただきます。",
          romanization: "itadakimasu.",
          translation: "Je commence (litt. « je reçois »).",
          content:
            "Prononcé juste avant la première bouchée, une seule fois par repas. Les mains jointes sont une variante fréquente, pas une obligation. La même formule sert quand on accepte quelque chose qu'on vous offre : un gâteau, un verre, un cadeau alimentaire.",
        },
        {
          type: "example",
          native: "ごちそうさまでした。",
          romanization: "gochisousama deshita.",
          translation: "Merci pour ce repas.",
          content:
            "ちそう désigne un régal, un festin, et でした met le tout au passé : « ç'a été un festin ». On l'adresse à celui qui a nourri — l'hôte, le cuisinier, le patron du restaurant en sortant. Dans un restaurant, il fait office de merci et d'au revoir à la fois.",
        },
        {
          type: "tip",
          content:
            "Contrairement au « bon appétit » français, qui s'adresse aux autres, いただきます parle de vous : personne ne vous le souhaite, chacun le dit pour soi. C'est pourquoi on l'entend aussi prononcé à voix basse par quelqu'un qui mange seul.",
        },
        {
          type: "warning",
          content:
            "N'utilisez pas いただきます comme un « merci » général : hors du contexte de la nourriture ou d'une chose reçue, il ne veut rien dire. Et ce n'est jamais celui qui sert qui le prononce, toujours celui qui reçoit — si vous offrez un plat, vous ne dites pas いただきます.",
        },
      ],
    },
    {
      title: "Les codes de la salle",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le pourboire n'existe pas, et ce n'est pas une simple habitude : laisser de l'argent sur la table met le personnel dans l'embarras, et on courra souvent après vous pour vous le rendre. Le service est inclus dans le prix affiché. La seule exception ressemblant à un supplément est l'おとおし des izakaya : une petite entrée non commandée, facturée quelques centaines de yens, qui tient lieu de couvert.",
        },
        {
          type: "text",
          content:
            "Dès que vous êtes assis arrive l'おしぼり, une serviette roulée, chaude en hiver et glacée en été. Elle sert à se nettoyer les mains avant de manger. On la repose pliée à côté de son couvert et elle reste là tout le repas. S'essuyer le visage et la nuque avec est un geste de salaryman fatigué : toléré, mais pas élégant.",
        },
        {
          type: "text",
          content:
            "L'eau et le thé sont gratuits et resservis sans supplément. On ne commande pas de bouteille d'eau : elle arrive d'office, souvent glacée, parfois sous forme de thé d'orge en été. Si votre verre est vide, un すみません、お水おねがいします règle la question en trois secondes.",
        },
        {
          type: "text",
          content:
            "Le règlement se fait presque toujours à la caisse, près de l'entrée, et non à table. Le serveur laisse une addition papier sur votre table, souvent retournée face contre nappe : c'est elle que vous emportez à la caisse en sortant. À la caisse, l'argent se pose sur le petit plateau prévu, on ne le tend pas dans la main.",
        },
        {
          type: "tip",
          content:
            "Dans beaucoup de boutiques de ramen ou de gyūdon, on paie AVANT de manger, à un distributeur de tickets près de la porte (しょっけん, le ticket-repas). Vous choisissez sur les boutons, vous récupérez le ticket, vous le posez sur le comptoir. Aucun mot n'est nécessaire : c'est le mode d'emploi le plus simple du Japon.",
        },
        {
          type: "warning",
          content:
            "N'attendez pas qu'on vienne encaisser à table : dans la grande majorité des restaurants, personne ne viendra. Un francophone peut rester assis dix minutes à guetter le serveur alors que tout le monde attend qu'il se lève. Levez-vous, prenez l'addition, allez à la caisse.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Un petit restaurant de quartier à l'heure du déjeuner. Vous entrez seul, sans réservation, et vous ne connaissez pas la carte.",
    lines: [
      {
        speaker: "Serveur",
        native: "いらっしゃいませ。こちらへどうぞ。",
        romanization: "irasshaimase. kochira e douzo.",
        french: "Bienvenue. Par ici, je vous prie.",
        note: "Aucune réponse verbale attendue : un hochement de tête, et vous suivez.",
      },
      {
        speaker: "Vous",
        native: "すみません、おすすめは何ですか。",
        romanization: "sumimasen, osusume wa nan desu ka.",
        french: "Excusez-moi, qu'est-ce que vous recommandez ?",
      },
      {
        speaker: "Serveur",
        native: "今日は魚の定食です。",
        romanization: "kyou wa sakana no teishoku desu.",
        french: "Aujourd'hui, c'est le menu complet au poisson.",
        note: "Un 定食 comprend le plat, le riz, la soupe et des légumes marinés, pour un prix unique.",
      },
      {
        speaker: "Vous",
        native: "じゃあ、それをおねがいします。お茶もおねがいします。",
        romanization: "jaa, sore o onegai shimasu. ocha mo onegai shimasu.",
        french: "Alors je prendrai celui-là. Et un thé aussi, s'il vous plaît.",
        note: "も remplace を quand on ajoute un élément à ce qui vient d'être dit : « aussi ».",
      },
      {
        speaker: "Serveur",
        native: "しょうしょうおまちください。",
        romanization: "shoushou omachi kudasai.",
        french: "Un instant, je vous prie.",
      },
      {
        speaker: "Vous",
        native: "ごちそうさまでした。おかいけいおねがいします。",
        romanization: "gochisousama deshita. okaikei onegai shimasu.",
        french: "C'était un régal. L'addition, s'il vous plaît.",
        note: "Dit en se levant, l'addition papier à la main, en direction de la caisse.",
      },
    ],
  },

  keyPoints: [
    "Deux répertoires séparés : いらっしゃいませ、ごちゅうもんは、しょうしょうおまちください sont à comprendre, jamais à produire.",
    "Commander suit un moule unique : [objet] + を + ください ou おねがいします. これをください fonctionne partout, le doigt sur la carte.",
    "ください exige un objet devant lui ; おねがいします se dit seul et couvre aussi les services, dont l'addition.",
    "いただきます avant de manger signifie « je reçois » ; ごちそうさまでした après le repas remercie celui qui a nourri.",
    "Pas de pourboire, eau et thé offerts, おしぼり à l'arrivée, et règlement à la caisse près de la sortie, pas à table.",
  ],

  vocabulary: [
    {
      term: "水",
      reading: "みず",
      romanization: "mizu",
      segments: [{ text: "水", reading: "みず" }],
      french: "L'eau",
      english: "Water",
    },
    {
      term: "お茶",
      reading: "おちゃ",
      romanization: "ocha",
      segments: [{ text: "お" }, { text: "茶", reading: "ちゃ" }],
      pitch: 0,
      french: "Le thé (vert, servi chaud ou glacé)",
      english: "Tea",
    },
    {
      term: "ご飯",
      reading: "ごはん",
      romanization: "gohan",
      segments: [{ text: "ご" }, { text: "飯", reading: "はん" }],
      french: "Le riz cuit ; le repas",
      english: "Cooked rice; meal",
    },
    {
      term: "肉",
      reading: "にく",
      romanization: "niku",
      segments: [{ text: "肉", reading: "にく" }],
      french: "La viande",
      english: "Meat",
    },
    {
      term: "魚",
      reading: "さかな",
      romanization: "sakana",
      segments: [{ text: "魚", reading: "さかな" }],
      pitch: 0,
      french: "Le poisson",
      english: "Fish",
    },
    {
      term: "野菜",
      reading: "やさい",
      romanization: "yasai",
      segments: [{ text: "野菜", reading: "やさい" }],
      pitch: 0,
      french: "Les légumes",
      english: "Vegetables",
    },
    {
      term: "ラーメン",
      reading: "ラーメン",
      romanization: "raamen",
      pitch: 1,
      french: "Le ramen (nouilles en bouillon)",
      english: "Ramen",
    },
    {
      term: "定食",
      reading: "ていしょく",
      romanization: "teishoku",
      segments: [{ text: "定食", reading: "ていしょく" }],
      french: "Le menu complet (plat, riz, soupe, légumes marinés)",
      english: "Set meal",
    },
    {
      term: "メニュー",
      reading: "メニュー",
      romanization: "menyuu",
      french: "Le menu, la carte",
      english: "Menu",
    },
    {
      term: "おすすめ",
      reading: "おすすめ",
      romanization: "osusume",
      pitch: 0,
      french: "La recommandation, la suggestion de la maison",
      english: "Recommendation",
    },
    {
      term: "おしぼり",
      reading: "おしぼり",
      romanization: "oshibori",
      french: "La serviette humide servie à l'arrivée",
      english: "Wet hand towel",
    },
    {
      term: "おかいけい",
      reading: "おかいけい",
      romanization: "okaikei",
      french: "L'addition, le règlement",
      english: "The bill",
    },
    {
      term: "ちゅうもん",
      reading: "ちゅうもん",
      romanization: "chuumon",
      french: "La commande (ごちゅうもん dans la bouche du personnel)",
      english: "Order",
    },
    {
      term: "食べる",
      reading: "たべる",
      romanization: "taberu",
      segments: [{ text: "食", reading: "た" }, { text: "べる" }],
      pitch: 2,
      french: "Manger",
      english: "To eat",
    },
    {
      term: "飲む",
      reading: "のむ",
      romanization: "nomu",
      segments: [{ text: "飲", reading: "の" }, { text: "む" }],
      pitch: 1,
      french: "Boire",
      english: "To drink",
    },
    {
      term: "おいしい",
      reading: "おいしい",
      romanization: "oishii",
      french: "Délicieux, bon",
      english: "Delicious",
    },
    {
      term: "いただきます",
      reading: "いただきます",
      romanization: "itadakimasu",
      french: "Formule dite juste avant de manger (« je reçois »)",
      english: "Said before eating",
    },
    {
      term: "ごちそうさまでした",
      reading: "ごちそうさまでした",
      romanization: "gochisousama deshita",
      french: "Formule dite après le repas (« merci pour ce régal »)",
      english: "Said after finishing a meal",
    },
  ],

  exercises: [
    {
      id: "unit-16-ex1",
      type: "comprehension",
      question: "Le personnel lance いらっしゃいませ quand vous entrez. Que fait un client japonais ?",
      correctAnswer: "Rien de verbal : un hochement de tête suffit",
      options: [
        "Rien de verbal : un hochement de tête suffit",
        "Il répond いらっしゃいませ en écho",
        "Il répond obligatoirement こんにちは",
        "Il dit ありがとうございます avant de s'asseoir",
      ],
      hint: "C'est une formule d'hôte, pas une salutation réciproque.",
    },
    {
      id: "unit-16-ex2",
      type: "comprehension",
      question: "Quelle différence d'usage entre ください et おねがいします ?",
      correctAnswer: "ください exige un objet devant lui ; おねがいします peut se dire seul et couvre aussi les services",
      options: [
        "ください exige un objet devant lui ; おねがいします peut se dire seul et couvre aussi les services",
        "ください est plus poli que おねがいします",
        "ください ne s'emploie qu'à l'écrit, sur les commandes",
        "おねがいします ne s'utilise qu'au téléphone",
      ],
      hint: "Pensez à la façon de demander l'addition, qui n'est pas un objet posé sur la carte.",
    },
    {
      id: "unit-16-ex3",
      type: "fill-blank",
      question: "« Un thé, s'il vous plaît » : お茶 ___ おねがいします。",
      correctAnswer: "を",
      options: ["を", "は", "が", "に"],
      optionsHint: ["o", "wa", "ga", "ni"],
      hint: "La particule qui marque l'objet de la demande.",
    },
    {
      id: "unit-16-ex4",
      type: "fill-blank",
      question: "Juste avant la première bouchée, on dit ___ .",
      correctAnswer: "いただきます",
      options: ["いただきます", "ごちそうさまでした", "おねがいします", "しつれいします"],
      optionsHint: ["itadakimasu", "gochisousama deshita", "onegai shimasu", "shitsurei shimasu"],
      hint: "Littéralement « je reçois ».",
    },
    {
      id: "unit-16-ex5",
      type: "reorder",
      question: "Remettez dans l'ordre : « De l'eau, s'il vous plaît. »",
      correctAnswer: "水をおねがいします。",
      options: ["水", "を", "おねがい", "します"],
      optionsReading: ["みず", "を", "おねがい", "します"],
      hint: "L'objet demandé vient en premier, marqué par を.",
    },
    {
      id: "unit-16-ex6",
      type: "listen",
      question: "おすすめは何ですか。",
      correctAnswer: "Qu'est-ce que vous recommandez ?",
      options: [
        "Qu'est-ce que vous recommandez ?",
        "Où est la caisse ?",
        "Combien est-ce que ça coûte ?",
        "Vous avez de l'eau ?",
      ],
      hint: "おすすめ vient du verbe « recommander ».",
    },
    {
      id: "unit-16-ex7",
      type: "translate",
      question: "Comment demande-t-on l'addition ?",
      correctAnswer: "おかいけいおねがいします。",
      options: [
        "おかいけいおねがいします。",
        "ごちそうさまでした。",
        "しょうしょうおまちください。",
        "おすすめをください。",
      ],
      optionsHint: [
        "okaikei onegai shimasu.",
        "gochisousama deshita.",
        "shoushou omachi kudasai.",
        "osusume o kudasai.",
      ],
      hint: "かいけい = le règlement.",
    },
    {
      id: "unit-16-ex8",
      type: "comprehension",
      question: "Vous avez fini de manger dans un restaurant de quartier. Que faites-vous ?",
      correctAnswer: "Vous emportez l'addition à la caisse près de l'entrée et vous réglez là, sans pourboire",
      options: [
        "Vous emportez l'addition à la caisse près de l'entrée et vous réglez là, sans pourboire",
        "Vous appelez le serveur pour régler directement à table",
        "Vous laissez un pourboire de 10 % sur la table",
        "Vous laissez la monnaie du rendu comme pourboire",
      ],
      hint: "Personne ne viendra encaisser à table, et le service est déjà inclus.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-15"],
};
