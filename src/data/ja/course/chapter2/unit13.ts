import type { CourseUnit } from "@/types/course";

export const unit13: CourseUnit = {
  id: "unit-13",
  number: 13,
  title: "Les particules essentielles : は, が, を, に, で",
  titleNative: "基本の助詞",
  chapter: 2,
  description:
    "Les particules qui structurent presque toutes les phrases japonaises, は et が en tête. À la fin de l'unité vous savez dire qui fait quoi, où, avec qui, et de quand à quand.",
  icon: "は",

  sections: [
    {
      title: "Une particule est une étiquette collée derrière le mot",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le français place ses prépositions devant le mot : à Tokyo, avec un ami, en train. Le japonais fait l'inverse et colle sa particule derrière : とうきょうに, ともだちと, でんしゃで. Chaque groupe forme ainsi un bloc autonome [mot + particule] qui annonce son rôle dans la phrase. C'est le renversement mental le plus important de ce chapitre, et il ne coûte rien une fois accepté.",
        },
        {
          type: "text",
          content:
            "Conséquence directe : l'ordre des blocs est souple, puisque le rôle est marqué sur le mot et non par sa place. わたしは あした とうきょうに 行きます et あした わたしは とうきょうに 行きます disent la même chose. Une seule contrainte est absolue : le verbe ferme la phrase. Tant qu'il n'est pas prononcé, on ne sait pas ce qui se passe — d'où l'écoute très différente qu'exige le japonais, où l'on retient les compléments avant de connaître l'action.",
        },
        {
          type: "example",
          native: "ともだちと でんしゃで とうきょうに 行きます。",
          romanization: "tomodachi to densha de Toukyou ni ikimasu.",
          translation: "Je vais à Tokyo en train avec un ami.",
          content:
            "Trois blocs, trois étiquettes : と dit avec qui, で dit par quel moyen, に dit vers où. Retirez les particules et la phrase devient inintelligible même avec les bons mots dans le bon ordre. Elles ne sont pas des ornements, elles portent toute la syntaxe.",
        },
        {
          type: "warning",
          content:
            "L'erreur du débutant francophone n'est pas de choisir la mauvaise particule, c'est de l'oublier. « とうきょう 行きます » est agrammatical. Il est vrai qu'à l'oral rapide, entre proches, certaines particules s'effacent — mais un apprenant doit toutes les prononcer : c'est précisément ce qui rend sa phrase compréhensible.",
        },
        {
          type: "tip",
          content:
            "Apprenez chaque verbe avec la particule qui l'accompagne, comme un bloc indissociable : ～に 行く (aller à), ～を 見る (regarder), ～に あう (rencontrer), ～に のる (monter dans). Retenir のる seul ne sert à rien ; retenir でんしゃに のる sert dès le premier quai de gare.",
        },
      ],
    },
    {
      title: "は et が : poser le thème ou identifier",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "C'est la difficulté centrale du japonais, et personne ne l'épuise en une leçon : les grammairiens japonais y consacrent des ouvrages entiers. Un principe de travail suffit cependant pour démarrer, et il est fiable. は pose ce dont on parle : il installe un cadre, souvent déjà connu de l'interlocuteur, et ce cadre reste valable sur plusieurs phrases. が identifie : il sélectionne un élément, apporte de l'information neuve, répond à la question « lequel ? ».",
        },
        {
          type: "example",
          native: "わたしは がくせいです。",
          romanization: "watashi wa gakusei desu.",
          translation: "Moi, je suis étudiant.",
          content:
            "は annonce le thème : « quant à moi ». On ne compare avec personne, on installe simplement le sujet de la conversation, et l'interlocuteur sait que les phrases suivantes parleront encore de vous. C'est la structure de présentation vue au début du chapitre.",
        },
        {
          type: "example",
          native: "だれが 行きますか。",
          romanization: "dare ga ikimasu ka.",
          translation: "Qui y va ?",
          content:
            "Impossible de dire だれは. Une question en « qui ? » ou « quoi ? » cherche justement à identifier, donc が. Et la réponse conserve が : わたしが 行きます. Le français rend cette nuance par une tournure clivée, « c'est moi qui y vais », là où le japonais change simplement de particule.",
        },
        {
          type: "comparison",
          content:
            "ねこが います / ねこは そこに います. La première phrase signale une existence neuve : « il y a un chat », vous venez de le remarquer. La seconde parle d'un chat déjà en question et donne sa position : « le chat, il est là ». Mots identiques, statut de l'information inversé — c'est cela que は et が encodent.",
        },
        {
          type: "text",
          content:
            "Trois repères pratiques règlent la majorité des cas au niveau débutant. Un : ce qui est neuf entre dans la conversation avec が, puis passe à は dès la phrase suivante, une fois connu. Deux : は marque volontiers un contraste implicite — コーヒーは 飲みます sous-entend « le café oui, autre chose non ». Trois : les phrases d'existence, de description soudaine et les propositions subordonnées préfèrent が.",
        },
        {
          type: "warning",
          content:
            "Ne traduisez jamais は par « le / la » ni が par « un / une ». Ces particules ne sont pas des articles et ne disent rien du caractère défini ou indéfini du nom. Elles disent ce que le locuteur considère comme acquis et ce qu'il présente comme neuf. Un francophone qui cherche un article se trompera une fois sur deux.",
        },
        {
          type: "tip",
          content:
            "Quand vous hésitez, posez-vous une seule question : mon interlocuteur sait-il déjà de quoi je parle ? Oui → は. Non, je le lui apprends ou je le désigne → が. Ce test grossier donne la bonne réponse dans la grande majorité des phrases de la vie courante.",
        },
      ],
    },
    {
      title: "を, に, で, へ : l'objet, le point, le moyen, la direction",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Quatre particules recouvrent à elles seules la plupart des compléments. を marque l'objet direct, ce sur quoi l'action porte. に marque un point : point d'arrivée, destinataire, heure précise. で marque un moyen ou le lieu où l'action se déroule. へ marque une direction, plus vague que に.",
        },
        {
          type: "example",
          native: "えいがを 見ます。",
          romanization: "eiga o mimasu.",
          translation: "Je regarde un film.",
          content:
            "を se prononce « o », jamais « wo », mais s'écrit avec le kana を réservé à cet usage unique. Dès que vous voyez を dans une phrase, vous savez que le mot qui précède est l'objet du verbe. C'est la particule la plus simple du japonais parce qu'elle n'a qu'une seule fonction.",
        },
        {
          type: "comparison",
          content:
            "学校に 行きます / 学校で 見ます. に répond à « vers où ? » et accompagne les verbes de déplacement. で répond à « où l'action a-t-elle lieu ? » et accompagne tout le reste. Le même nom de lieu prend donc l'une ou l'autre particule selon le verbe, jamais selon le lieu lui-même : c'est le verbe qui commande.",
        },
        {
          type: "example",
          native: "3時に 駅で あいましょう。",
          romanization: "sanji ni eki de aimashou.",
          translation: "Retrouvons-nous à la gare à 3 heures.",
          content:
            "Deux emplois différents dans une phrase de cinq mots : に pour l'heure précise, で pour le lieu où se passe la rencontre. Notez que les heures et les jours de la semaine prennent に, mais que きょう, あした, まいにち n'en prennent aucune — les repères de temps relatifs se passent de particule.",
        },
        {
          type: "text",
          content:
            "で couvre aussi l'instrument et la matière : でんしゃで (en train), はしで (avec des baguettes), 日本語で (en japonais). Un seul mot français, « avec », se répartit en japonais entre で pour un moyen inanimé et と pour un accompagnement humain. でんしゃで 行きます signifie j'y vais en train ; ともだちと 行きます signifie j'y vais avec un ami. Confondre les deux produit des phrases involontairement comiques.",
        },
        {
          type: "warning",
          content:
            "へ et に ne sont pas strictement interchangeables, mais au niveau débutant へ est presque toujours remplaçable par に devant un lieu. Retenez surtout ceci : en tant que particule, へ se prononce « e » et non « he ». Même piège que は particule, prononcée « wa ». Ce sont les deux seules irrégularités de lecture des kana.",
        },
        {
          type: "tip",
          content:
            "Les verbes de mouvement distinguent le but et le trajet : こうえんに 行く (aller au parc) mais こうえんを あるく (marcher dans le parc, le traverser). Ce を de parcours surprend les francophones, il est pourtant parfaitement régulier — il apparaît avec あるく, わたる, とおる.",
        },
      ],
    },
    {
      title: "と, から, まで, も, の — et la phrase complète",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "と a deux emplois voisins. Entre deux noms, il énumère de façon fermée : パンと たまご désigne le pain et l'œuf, ces deux-là et rien d'autre. Devant une personne, il signifie « avec » : ともだちと. Attention, と ne relie jamais deux phrases : le japonais n'a pas d'équivalent du « et » qui enchaîne des propositions, il utilise pour cela une forme du verbe que le chapitre suivant présente.",
        },
        {
          type: "example",
          native: "しぶやから しんじゅくまで でんしゃで 行きます。",
          romanization: "Shibuya kara Shinjuku made densha de ikimasu.",
          translation: "Je vais de Shibuya à Shinjuku en train.",
          content:
            "から et まで fonctionnent en paire, et pas seulement dans l'espace : 9時から 5時まで, げつようびから きんようびまで. Chaque particule suit son mot, si bien que la phrase se lit comme une suite d'étiquettes que l'on décode de gauche à droite.",
        },
        {
          type: "text",
          content:
            "も signifie « aussi », et son fonctionnement est mécanique : il REMPLACE は, が et を, il ne s'y ajoute jamais. わたしは 行きます devient わたしも 行きます. En revanche il se combine avec に, で et と : とうきょうにも 行きます (je vais aussi à Tokyo), ともだちとも 行きます.",
        },
        {
          type: "example",
          native: "わたしも えいがを 見ます。",
          romanization: "watashi mo eiga o mimasu.",
          translation: "Moi aussi, je regarde le film.",
          content:
            "わたしはも est une faute que tous les débutants commettent une fois : も prend la place de は, comme un remplaçant. Attention aussi au sens exact — ici c'est moi qui viens en plus des autres. Pour dire « je regarde aussi un film », en plus d'autre chose, il faudrait déplacer la particule : えいがも 見ます.",
        },
        {
          type: "text",
          content:
            "の relie deux noms : le déterminant à gauche, le déterminé à droite. ともだちの ほん signifie le livre de l'ami. L'ordre est l'inverse du français et il est constant — 日本語の せんせい (le professeur de japonais), 駅の まえ (le devant de la gare), わたしの かばん. On peut enchaîner plusieurs の : ともだちの おかあさんの くるま, la voiture de la mère de mon ami.",
        },
        {
          type: "tip",
          content:
            "Test de contrôle avant de passer au chapitre suivant : reconstruisez une phrase française bloc par bloc. « Samedi, je vais voir un film à Shibuya avec un ami » → 土曜日に / ともだちと / しぶやで / えいがを / 見ます. Cinq blocs, cinq étiquettes, verbe en dernier. Tant que ce découpage demande un effort, parler reste laborieux ; dès qu'il est automatique, la phrase se construit toute seule.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vendredi soir, dans un bureau de Tokyo. Yuki propose une sortie à Tanaka. Les verbes sont à la forme polie en -ます, que le chapitre suivant détaille : ici, suivez uniquement les particules.",
    lines: [
      {
        speaker: "Yuki",
        native: "たなかさん、土曜日は ひまですか。",
        romanization: "Tanaka-san, doyoubi wa hima desu ka.",
        french: "Tanaka, tu es libre samedi ?",
        note: "土曜日は : は installe samedi comme cadre de la question, « quant à samedi ». Avec un verbe d'action on aurait dit 土曜日に.",
      },
      {
        speaker: "Tanaka",
        native: "はい、ひまです。",
        romanization: "hai, hima desu.",
        french: "Oui, je suis libre.",
      },
      {
        speaker: "Yuki",
        native: "ともだちと しぶやで えいがを 見ます。いっしょに 行きませんか。",
        romanization: "tomodachi to Shibuya de eiga o mimasu. issho ni ikimasen ka.",
        french: "Je vais voir un film à Shibuya avec des amis. Tu ne viendrais pas avec nous ?",
        note: "Trois particules en une phrase : と (avec qui), で (où l'action a lieu), を (ce qu'on regarde). Chacune suit son mot. 行きませんか, question négative, est la façon normale d'inviter sans imposer.",
      },
      {
        speaker: "Tanaka",
        native: "いいですね。何時からですか。",
        romanization: "ii desu ne. nanji kara desu ka.",
        french: "Bonne idée. À partir de quelle heure ?",
        note: "から suit l'heure, comme toujours : 何時から, littéralement « à partir de quelle heure ».",
      },
      {
        speaker: "Yuki",
        native: "3時からです。駅で あいましょう。",
        romanization: "sanji kara desu. eki de aimashou.",
        french: "À partir de 3 heures. Retrouvons-nous à la gare.",
        note: "駅で : la gare est le lieu où se déroule l'action de se retrouver, donc で et non に.",
      },
      {
        speaker: "Tanaka",
        native: "わかりました。じゃ、3時に 駅の 前で。",
        romanization: "wakarimashita. ja, sanji ni eki no mae de.",
        french: "Entendu. Alors, à 3 heures devant la gare.",
        note: "Deux particules distinctes dans une réplique de six mots : に pour l'heure précise, で pour le lieu du rendez-vous. Le verbe est sous-entendu, ce qui est très courant à l'oral.",
      },
    ],
  },

  keyPoints: [
    "Une particule se place APRÈS le mot qu'elle marque : とうきょうに = « à Tokyo ». Elle fonctionne comme une étiquette collée derrière, pas comme une préposition placée devant.",
    "は pose le thème (« quant à… »), が identifie ou apporte l'information neuve : une question en だれが reçoit une réponse en が, un sujet déjà connu prend は.",
    "を marque l'objet direct, に le point d'arrivée et l'heure précise, で le moyen et le lieu de l'action, へ la direction — et へ se prononce « e ».",
    "と signifie « avec » devant une personne et « et » entre deux noms ; から … まで encadre un trajet ou une durée.",
    "も remplace は, が et を au lieu de s'y ajouter (わたしも, jamais わたしはも), mais se combine avec に, で et と.",
    "の relie deux noms dans l'ordre inverse du français : 駅の まえ, le devant de la gare.",
  ],

  vocabulary: [
    { term: "ともだち", reading: "ともだち", romanization: "tomodachi", pitch: 0, french: "Un ami, une amie", english: "Friend" },
    { term: "でんしゃ", reading: "でんしゃ", romanization: "densha", french: "Le train (urbain)", english: "Train" },
    { term: "バス", reading: "バス", romanization: "basu", french: "Le bus", english: "Bus" },
    { term: "えいが", reading: "えいが", romanization: "eiga", french: "Le film, le cinéma", english: "Movie, film" },
    { term: "学校", reading: "がっこう", romanization: "gakkou", segments: [{ text: "学校", reading: "がっこう" }], pitch: 0, french: "L'école", english: "School" },
    { term: "駅", reading: "えき", romanization: "eki", segments: [{ text: "駅", reading: "えき" }], pitch: 1, french: "La gare", english: "Station" },
    { term: "行く", reading: "いく", romanization: "iku", segments: [{ text: "行", reading: "い" }, { text: "く" }], pitch: 0, french: "Aller", english: "To go" },
    { term: "見る", reading: "みる", romanization: "miru", segments: [{ text: "見", reading: "み" }, { text: "る" }], pitch: 1, french: "Regarder, voir", english: "To watch, to see" },
    { term: "買う", reading: "かう", romanization: "kau", segments: [{ text: "買", reading: "か" }, { text: "う" }], french: "Acheter", english: "To buy" },
    { term: "いっしょに", reading: "いっしょに", romanization: "issho ni", french: "Ensemble, avec (quelqu'un)", english: "Together" },
    { term: "土曜日", reading: "どようび", romanization: "doyoubi", segments: [{ text: "土", reading: "ど" }, { text: "曜", reading: "よう" }, { text: "日", reading: "び" }], french: "Samedi", english: "Saturday" },
    { term: "しゅうまつ", reading: "しゅうまつ", romanization: "shuumatsu", french: "Le week-end", english: "Weekend" },
    { term: "ひま", reading: "ひま", romanization: "hima", french: "Du temps libre, disponible", english: "Free time, not busy" },
    { term: "かいもの", reading: "かいもの", romanization: "kaimono", french: "Les courses, le shopping", english: "Shopping" },
    { term: "うち", reading: "うち", romanization: "uchi", french: "Chez soi, la maison", english: "Home" },
    { term: "何時", reading: "なんじ", romanization: "nanji", segments: [{ text: "何", reading: "なん" }, { text: "時", reading: "じ" }], french: "À quelle heure, quelle heure", english: "What time" },
  ],

  exercises: [
    {
      id: "unit-13-ex1",
      type: "comprehension",
      question: "Dans とうきょうに 行きます, que marque la particule に ?",
      correctAnswer: "Le point d'arrivée : « à Tokyo »",
      options: [
        "Le point d'arrivée : « à Tokyo »",
        "Le moyen de transport utilisé",
        "L'objet direct du verbe",
        "Le lieu où se déroule l'action",
      ],
      hint: "に marque un point : arrivée, destinataire, heure précise.",
    },
    {
      id: "unit-13-ex2",
      type: "fill-blank",
      question: "でんしゃ ___ 行きます。 (J'y vais en train.)",
      correctAnswer: "で",
      options: ["で", "に", "を", "と"],
      optionsHint: ["de", "ni", "o", "to"],
      hint: "Le moyen inanimé ne prend pas la même particule que l'accompagnement humain.",
    },
    {
      id: "unit-13-ex3",
      type: "fill-blank",
      question: "えいが ___ 見ます。 (Je regarde un film.)",
      correctAnswer: "を",
      options: ["を", "が", "に", "で"],
      optionsHint: ["o", "ga", "ni", "de"],
      hint: "Le film est ce sur quoi porte l'action.",
    },
    {
      id: "unit-13-ex4",
      type: "comprehension",
      question: "On vous demande だれが 行きますか。 Vous répondez « C'est moi qui y vais ». Quelle forme ?",
      correctAnswer: "わたしが行きます。",
      options: ["わたしが行きます。", "わたしは行きます。", "わたしも行きます。", "わたしを行きます。"],
      optionsReading: ["わたしがいきます。", "わたしはいきます。", "わたしもいきます。", "わたしをいきます。"],
      hint: "Une question qui cherche à identifier reçoit une réponse qui identifie.",
    },
    {
      id: "unit-13-ex5",
      type: "reorder",
      question: "Remettez dans l'ordre : « Je regarde un film avec un ami. »",
      correctAnswer: "ともだちとえいがを見ます。",
      options: ["ともだち", "と", "えいが", "を", "見ます"],
      optionsReading: ["ともだち", "と", "えいが", "を", "みます"],
      hint: "Chaque particule se colle derrière le mot qu'elle marque, et le verbe ferme la phrase.",
    },
    {
      id: "unit-13-ex6",
      type: "listen",
      question: "土曜日にともだちとえいがを見ます。",
      correctAnswer: "Samedi, je vais voir un film avec un ami.",
      options: [
        "Samedi, je vais voir un film avec un ami.",
        "Samedi, je vais voir un film avec ma famille.",
        "Dimanche, je vais voir un film avec un ami.",
        "Samedi, je vais acheter un film avec un ami.",
      ],
      hint: "Trois particules à repérer : に, と, を.",
    },
    {
      id: "unit-13-ex7",
      type: "comprehension",
      question: "Comment dit-on « de 3 heures à 5 heures » ?",
      correctAnswer: "3時から5時まで",
      options: ["3時から5時まで", "3時まで5時から", "3時に5時に", "3時と5時と"],
      optionsReading: ["さんじからごじまで", "さんじまでごじから", "さんじにごじに", "さんじとごじと"],
      hint: "から marque le départ, まで l'arrivée, et chacune suit son mot.",
    },
    {
      id: "unit-13-ex8",
      type: "translate",
      question: "Traduisez : « Moi aussi, je vais à Shibuya. »",
      correctAnswer: "わたしもしぶやに行きます。",
      options: [
        "わたしもしぶやに行きます。",
        "わたしはもしぶやに行きます。",
        "わたしもしぶやを行きます。",
        "わたしとしぶやに行きます。",
      ],
      optionsReading: [
        "わたしもしぶやにいきます。",
        "わたしはもしぶやにいきます。",
        "わたしもしぶやをいきます。",
        "わたしとしぶやにいきます。",
      ],
      hint: "も prend la place de は : elles ne cohabitent jamais.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-12"],
};
