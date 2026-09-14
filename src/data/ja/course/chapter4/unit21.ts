import type { CourseUnit } from "@/types/course";

export const unit21: CourseUnit = {
  id: "unit-21",
  number: 21,
  title: "La forme en て : relier les verbes",
  titleNative: "て形：動作をつなぐ",
  chapter: 4,
  description:
    "La charnière de toute la grammaire japonaise. Fabriquer la forme en て groupe par groupe, puis s'en servir immédiatement pour enchaîner des actions, demander quelque chose avec てください et décrire ce qui est en cours avec ています.",
  icon: "て",

  sections: [
    {
      title: "Pourquoi tout passe par la forme en て",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Jusqu'ici vous avez produit des phrases courtes et closes : chacune se terminait par ます, ました ou です, et pour en relier deux il fallait un mot de liaison comme それから. C'est correct, mais c'est un japonais haché, celui d'un débutant qui parle en télégramme. La forme en て est l'outil qui soude les propositions à l'intérieur d'une seule phrase, exactement comme le « et » du français relie deux verbes sans les séparer par un point.",
        },
        {
          type: "example",
          native: "朝、起きて、ごはんを食べて、会社に行きます。",
          romanization: "asa, okite, gohan o tabete, kaisha ni ikimasu.",
          translation: "Le matin, je me lève, je mange et je vais au bureau.",
          content:
            "Trois actions, une seule phrase, et un seul ます — sur le dernier verbe. Les deux premiers verbes sont à la forme en て : ils n'expriment ni le temps ni la politesse, ils attendent le verbe final qui portera tout cela pour eux. C'est le principe à retenir avant même les règles de formation.",
        },
        {
          type: "text",
          content:
            "Cette forme n'est pas un temps ni un mode : c'est une forme de liaison, sans valeur propre. Elle ne peut jamais terminer une phrase polie toute seule. En revanche elle sert de socle à une bonne moitié de la grammaire des niveaux suivants : la demande てください, l'aspect en cours ています, la permission てもいいです, l'interdiction てはいけません, la tentative てみます, l'action préparatoire ておきます. Tout se greffe dessus.",
        },
        {
          type: "warning",
          content:
            "Conséquence pratique : tant que la forme en て n'est pas automatique, la suite du cours restera laborieuse. Ce n'est pas une leçon parmi d'autres, c'est un verrou. Consacrez-lui plusieurs jours de conjugaison à voix haute plutôt que de passer trop vite à l'unité suivante.",
        },
        {
          type: "tip",
          content:
            "Le japonais courant utilise énormément de verbes en て. Un locuteur natif enchaîne facilement quatre ou cinq propositions avant de poser son ます. Vous n'avez pas à aller jusque-là : deux ou trois suffisent à sortir du japonais de manuel.",
        },
      ],
    },
    {
      title: "Fabriquer la forme en て",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La transformation part de la forme en ます, la seule que vous connaissiez pour l'instant. Première question à se poser, toujours la même : le verbe est-il du deuxième groupe (ichidan) ou du premier (godan) ? Sans cette identification, aucune règle ne s'applique correctement. Les verbes du deuxième groupe se terminent en -iru ou -eru au dictionnaire : 食べる、見る、起きる、出る. Tous les autres sont du premier groupe.",
        },
        {
          type: "example",
          native: "食べます → 食べて ／ 見ます → 見て ／ 起きます → 起きて",
          romanization: "tabemasu → tabete / mimasu → mite / okimasu → okite",
          translation: "manger ; regarder ; se lever",
          content:
            "Deuxième groupe : on retire ます et on colle て. Rien d'autre. C'est le cas le plus simple, et c'est pour cela qu'il faut savoir reconnaître ces verbes en premier — ils ne demandent aucun calcul.",
        },
        {
          type: "text",
          content:
            "Le premier groupe demande de regarder le dernier kana devant ます, et cinq cas couvrent tout. い、ち、り donnent って : 使います → 使って、待ちます → 待って、座ります → 座って. み、び、に donnent んで : 休みます → 休んで、呼びます → 呼んで、死にます → 死んで. き donne いて : 働きます → 働いて. ぎ donne いで : 急ぎます → 急いで. し donne して : 話します → 話して.",
        },
        {
          type: "example",
          native: "急ぎます → 急いで ／ 働きます → 働いて",
          romanization: "isogimasu → isoide / hatarakimasu → hataraite",
          translation: "se dépêcher ; travailler",
          content:
            "Notez la logique sonore : ぎ, sonore, entraîne un で sonore ; き, sourd, entraîne un て sourd. Même chose du côté de んで : み、び、に sont tous des sons nasals ou sonores, et ils imposent で. Cette cohérence n'est pas un hasard, elle vient d'une érosion phonétique ancienne — et elle vous évite d'apprendre les cinq cas comme une liste arbitraire.",
        },
        {
          type: "warning",
          content:
            "Deux pièges, et il n'y en a pas d'autres. Le premier : 行きます ne suit pas la règle du き, on dit 行って et jamais 「行いて」 — seule irrégularité vraiment fréquente du système, et elle frappe l'un des verbes les plus utilisés de la langue. Le second, plus sournois : 帰る (rentrer), 走る (courir), 入る (entrer), 切る (couper) se terminent en -eru ou -iru mais appartiennent au premier groupe. On dit donc 帰って、走って、入って、切って, surtout pas 「帰て」. Retenez cette liste comme fermée : elle est courte.",
        },
        {
          type: "example",
          native: "します → して ／ 来ます → 来て",
          romanization: "shimasu → shite / kimasu → kite",
          translation: "faire ; venir",
          content:
            "Les deux irréguliers, et ils sont indolores. Toute la famille des verbes en 〜する suit する : 勉強します → 勉強して、結婚します → 結婚して、電話します → 電話して. Cela représente des centaines de verbes d'un coup, tous réguliers dès qu'on connaît して.",
        },
        {
          type: "tip",
          content:
            "Beaucoup de Japonais apprennent ces règles en chantant la comptine de 「もみじ」. Version efficace pour un adulte : prenez dix verbes que vous utilisez vraiment, écrivez leur forme en て sur une carte, et récitez-les tous les matins. En une semaine le calcul disparaît et la forme sort seule.",
        },
      ],
    },
    {
      title: "Enchaîner des actions, et demander avec てください",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Premier usage, le plus direct : 〜て、〜て、〜ます énumère des actions dans l'ordre où elles se produisent. L'ordre des propositions n'est pas libre, il est chronologique — inverser deux verbes change le sens de la phrase. Seul le dernier verbe porte le temps et la politesse, ce qui veut dire qu'une même chaîne se met au passé en changeant un seul mot.",
        },
        {
          type: "example",
          native: "きのう、友だちに会って、映画を見て、うちに帰りました。",
          romanization: "kinou, tomodachi ni atte, eiga o mite, uchi ni kaerimashita.",
          translation: "Hier, j'ai retrouvé un ami, on a vu un film et je suis rentré.",
          content:
            "会って et 見て ne sont pas au passé : c'est 帰りました qui met les trois actions au passé d'un seul coup. Comparez avec le français, où chaque verbe doit être conjugué séparément. Ici, un seul verbe travaille pour toute la phrase — c'est plus économique, et c'est ce qui donne au japonais son rythme.",
        },
        {
          type: "text",
          content:
            "La forme en て sert aussi à indiquer le moyen ou la manière, sans idée de succession. 電車に乗って会社に行きます ne veut pas dire « je monte dans le train, ensuite je vais au bureau », mais « je vais au bureau en train ». Le contexte tranche, et il tranche presque toujours sans ambiguïté : deux actions distinctes se lisent comme une succession, un déplacement et son moyen se lisent comme une manière.",
        },
        {
          type: "example",
          native: "ちょっと待ってください。",
          romanization: "chotto matte kudasai.",
          translation: "Attendez un instant, s'il vous plaît.",
          content:
            "Deuxième usage : la demande. Forme en て + ください. C'est la phrase que vous entendrez et prononcerez le plus souvent au Japon. ちょっと adoucit considérablement : sans lui, 待ってください sonne comme un ordre poli, avec lui comme une demande ordinaire.",
        },
        {
          type: "warning",
          content:
            "てください est poli mais reste une demande faite à quelqu'un, donc on ne l'adresse pas à un supérieur pour lui demander un service. Face à un patron ou à un client, on passe par 〜ていただけませんか, que vous verrez plus tard. Entre collègues, dans un magasin, avec un chauffeur de taxi, てください est parfaitement approprié.",
        },
        {
          type: "comparison",
          content:
            "Ne confondez pas la demande et l'offre. すみません、手伝ってください = « aidez-moi, s'il vous plaît » : je demande. 手伝いましょうか = « voulez-vous que je vous aide ? » : je propose. Le francophone tend à utiliser てください dans les deux sens parce que « s'il vous plaît » couvre tout en français. En japonais, demander et offrir sont deux constructions différentes.",
        },
      ],
    },
    {
      title: "ています : en train de faire, ou déjà fait",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Troisième usage, et le point le plus délicat de l'unité. Forme en て + います décrit une situation qui dure au moment où l'on parle. Jusqu'ici 食べます couvrait « je mange » au sens d'habitude ou d'intention future ; 食べています dit précisément « je suis en train de manger, là, maintenant ». Le japonais distingue donc ce que le français confond sous un seul présent.",
        },
        {
          type: "example",
          native: "今、何をしていますか。— メールを書いています。",
          romanization: "ima, nani o shite imasu ka. — meeru o kaite imasu.",
          translation: "Que faites-vous en ce moment ? — J'écris un mail.",
          content:
            "La question passe-partout pour savoir ce que quelqu'un fait à l'instant. À l'oral, le い de います tombe très souvent : 何してますか、書いてます. Ce n'est pas du relâchement fautif, c'est la prononciation normale de la conversation. À l'écrit, gardez います.",
        },
        {
          type: "text",
          content:
            "Voici le contresens classique du francophone. ています ne signifie pas seulement « être en train de » : avec certains verbes, il décrit l'état qui résulte d'une action déjà accomplie. 結婚しています ne veut pas dire « je suis en train de me marier » mais « je suis marié ». Le mariage a eu lieu, éventuellement il y a vingt ans, et son résultat dure encore. C'est cet état durable que ています exprime.",
        },
        {
          type: "example",
          native: "田中さんは結婚しています。東京に住んでいます。",
          romanization: "Tanaka-san wa kekkon shite imasu. Toukyou ni sunde imasu.",
          translation: "M. Tanaka est marié. Il habite à Tokyo.",
          content:
            "Deux verbes d'état, deux fois ています. 住む fonctionne pareil : 住んでいます = « il habite », alors que 住みます tout seul décrirait une installation à venir, pas le fait d'habiter quelque part. Retenez que 「東京に住みます」 en réponse à どこに住んでいますか est une faute nette, pas une nuance.",
        },
        {
          type: "comparison",
          content:
            "Comment savoir de quel côté bascule un verbe ? Par sa nature. Un verbe qui décrit une activité qui s'étire (食べる、書く、待つ、働く) donne « en train de ». Un verbe qui décrit un basculement instantané (結婚する、住む、知る、持つ、来る) donne l'état qui suit ce basculement. Le japonais ne voit pas la durée de l'action mais la durée de son résultat.",
        },
        {
          type: "warning",
          content:
            "Erreur symétrique, tout aussi fréquente : traduire « je connais » par 知ります. On dit 知っています. Et à la forme négative, exception à mémoriser telle quelle, on ne dit pas 「知っていません」 mais 知りません (« je ne sais pas »). C'est l'une des rares asymétries du système ; elle sert cent fois par jour.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Pause déjeuner dans un bureau à Tokyo. Deux collègues qui se connaissent encore mal engagent la conversation. Presque chaque réplique repose sur une forme en て.",
    lines: [
      {
        speaker: "田中",
        native: "山田さん、今、何をしていますか。",
        romanization: "Yamada-san, ima, nani o shite imasu ka.",
        french: "M. Yamada, qu'est-ce que vous faites en ce moment ?",
        note: "します → して, puis います. C'est la question standard pour ce qui se passe à l'instant présent ; avec 何をしますか on demanderait au contraire un projet ou une habitude.",
      },
      {
        speaker: "山田",
        native: "昼ごはんを食べています。田中さんも座ってください。",
        romanization: "hirugohan o tabete imasu. Tanaka-san mo suwatte kudasai.",
        french: "Je déjeune. Asseyez-vous donc, monsieur Tanaka.",
        note: "Deux mécaniques dans une seule réplique : 食べる est du deuxième groupe (食べます → 食べて), 座る du premier avec un り devant ます (座ります → 座って).",
      },
      {
        speaker: "田中",
        native: "ありがとうございます。ちょっと待ってください、飲み物を持って来ます。",
        romanization: "arigatou gozaimasu. chotto matte kudasai, nomimono o motte kimasu.",
        french: "Merci. Attendez un instant, je vais chercher à boire.",
        note: "持って来ます, littéralement « prendre et venir », est le verbe ordinaire pour « apporter ». La forme en て sert aussi à souder deux verbes en un seul mouvement.",
      },
      {
        speaker: "田中",
        native: "山田さんはどこに住んでいますか。",
        romanization: "Yamada-san wa doko ni sunde imasu ka.",
        french: "Où habitez-vous ?",
        note: "住む est du premier groupe avec み devant ます : 住みます → 住んで. Et la question se pose obligatoirement à la forme ています.",
      },
      {
        speaker: "山田",
        native: "千葉に住んでいます。毎朝、一時間電車に乗って、会社に来ます。",
        romanization: "Chiba ni sunde imasu. maiasa, ichijikan densha ni notte, kaisha ni kimasu.",
        french: "J'habite à Chiba. Chaque matin je prends le train pendant une heure et je viens au bureau.",
        note: "乗ります → 乗って. Ici la forme en て exprime le moyen : « en train ». Le temps n'est marqué qu'une fois, sur 来ます.",
      },
      {
        speaker: "田中",
        native: "大変ですね。ご家族もいっしょに千葉ですか。",
        romanization: "taihen desu ne. go-kazoku mo issho ni Chiba desu ka.",
        french: "Ça doit être fatigant. Votre famille est à Chiba aussi ?",
        note: "大変ですね est la réaction attendue devant l'effort de quelqu'un. Le préfixe ご devant 家族 marque le respect : on ne le met jamais devant sa propre famille.",
      },
      {
        speaker: "山田",
        native: "はい。結婚しています。子どもが二人います。",
        romanization: "hai. kekkon shite imasu. kodomo ga futari imasu.",
        french: "Oui. Je suis marié, j'ai deux enfants.",
        note: "Le contresens à éviter : 結婚しています ne veut pas dire « je suis en train de me marier », mais « je suis marié ». L'événement est passé, son résultat dure.",
      },
      {
        speaker: "田中",
        native: "そうですか。あ、もう一時ですね。急いで食べましょう。",
        romanization: "sou desu ka. a, mou ichiji desu ne. isoide tabemashou.",
        french: "Ah bon. Oh, il est déjà une heure. Mangeons vite.",
        note: "急ぎます → 急いで. Employée seule devant un autre verbe, la forme en て fonctionne comme un adverbe de manière : « en se dépêchant ».",
      },
    ],
  },

  keyPoints: [
    "La forme en て ne porte ni temps ni politesse : elle relie, et c'est le dernier verbe de la phrase qui porte ます, ました ou です pour toute la chaîne.",
    "Deuxième groupe : ます tombe, て s'ajoute (食べます → 食べて). Premier groupe, cinq cas : い・ち・り → って, み・び・に → んで, き → いて, ぎ → いで, し → して. Irréguliers : して et 来て.",
    "Deux pièges de formation : 行きます → 行って (jamais 行いて), et 帰る・走る・入る・切る sont du premier groupe malgré leur apparence, d'où 帰って et 走って.",
    "Trois usages immédiats : enchaîner (起きて、食べて、行きます), demander (ちょっと待ってください), décrire ce qui dure (今、食べています).",
    "ています couvre deux valeurs : « en train de » avec les verbes d'activité, et l'état résultant avec les verbes de basculement — 結婚しています = être marié, 住んでいます = habiter, 知っています = savoir (négatif : 知りません).",
  ],

  vocabulary: [
    {
      term: "待つ",
      reading: "まつ",
      romanization: "matsu",
      segments: [
        { text: "待", reading: "ま" },
        { text: "つ" },
      ],
      pitch: 1,
      french: "Attendre",
      english: "To wait",
      example: {
        sentence: "ここで待ってください。",
        romanization: "koko de matte kudasai.",
        translation: "Attendez ici, s'il vous plaît.",
      },
    },
    {
      term: "急ぐ",
      reading: "いそぐ",
      romanization: "isogu",
      segments: [
        { text: "急", reading: "いそ" },
        { text: "ぐ" },
      ],
      pitch: 2,
      french: "Se dépêcher",
      english: "To hurry",
    },
    {
      term: "座る",
      reading: "すわる",
      romanization: "suwaru",
      segments: [
        { text: "座", reading: "すわ" },
        { text: "る" },
      ],
      pitch: 0,
      french: "S'asseoir",
      english: "To sit down",
    },
    {
      term: "立つ",
      reading: "たつ",
      romanization: "tatsu",
      segments: [
        { text: "立", reading: "た" },
        { text: "つ" },
      ],
      pitch: 1,
      french: "Se lever, se tenir debout",
      english: "To stand up",
    },
    {
      term: "使う",
      reading: "つかう",
      romanization: "tsukau",
      segments: [
        { text: "使", reading: "つか" },
        { text: "う" },
      ],
      pitch: 0,
      french: "Utiliser, se servir de",
      english: "To use",
    },
    {
      term: "休む",
      reading: "やすむ",
      romanization: "yasumu",
      segments: [
        { text: "休", reading: "やす" },
        { text: "む" },
      ],
      pitch: 2,
      french: "Se reposer ; s'absenter, prendre congé",
      english: "To rest; to take a day off",
    },
    {
      term: "手伝う",
      reading: "てつだう",
      romanization: "tetsudau",
      segments: [
        { text: "手伝", reading: "てつだ" },
        { text: "う" },
      ],
      pitch: 3,
      french: "Aider, donner un coup de main",
      english: "To help",
    },
    {
      term: "働く",
      reading: "はたらく",
      romanization: "hataraku",
      segments: [
        { text: "働", reading: "はたら" },
        { text: "く" },
      ],
      pitch: 0,
      french: "Travailler",
      english: "To work",
    },
    {
      term: "結婚する",
      reading: "けっこんする",
      romanization: "kekkon suru",
      segments: [
        { text: "結婚", reading: "けっこん" },
        { text: "する" },
      ],
      french: "Se marier",
      english: "To get married",
      example: {
        sentence: "田中さんは結婚しています。",
        romanization: "Tanaka-san wa kekkon shite imasu.",
        translation: "M. Tanaka est marié.",
      },
    },
    {
      term: "住む",
      reading: "すむ",
      romanization: "sumu",
      segments: [
        { text: "住", reading: "す" },
        { text: "む" },
      ],
      pitch: 1,
      french: "Habiter, résider",
      english: "To live, to reside",
      example: {
        sentence: "東京に住んでいます。",
        romanization: "Toukyou ni sunde imasu.",
        translation: "J'habite à Tokyo.",
      },
    },
    {
      term: "持つ",
      reading: "もつ",
      romanization: "motsu",
      segments: [
        { text: "持", reading: "も" },
        { text: "つ" },
      ],
      pitch: 1,
      french: "Tenir, porter, avoir sur soi",
      english: "To hold, to carry",
    },
    {
      term: "呼ぶ",
      reading: "よぶ",
      romanization: "yobu",
      segments: [
        { text: "呼", reading: "よ" },
        { text: "ぶ" },
      ],
      pitch: 0,
      french: "Appeler (quelqu'un)",
      english: "To call",
    },
    {
      term: "遊ぶ",
      reading: "あそぶ",
      romanization: "asobu",
      segments: [
        { text: "遊", reading: "あそ" },
        { text: "ぶ" },
      ],
      pitch: 0,
      french: "S'amuser, sortir avec des amis",
      english: "To play, to hang out",
    },
    {
      term: "曲がる",
      reading: "まがる",
      romanization: "magaru",
      segments: [
        { text: "曲", reading: "ま" },
        { text: "がる" },
      ],
      pitch: 0,
      french: "Tourner (à un carrefour)",
      english: "To turn",
    },
    {
      term: "走る",
      reading: "はしる",
      romanization: "hashiru",
      segments: [
        { text: "走", reading: "はし" },
        { text: "る" },
      ],
      pitch: 2,
      french: "Courir",
      english: "To run",
    },
    {
      term: "ちょっと",
      reading: "ちょっと",
      romanization: "chotto",
      pitch: 1,
      french: "Un peu, un instant",
      english: "A little, a moment",
    },
    {
      term: "電気",
      reading: "でんき",
      romanization: "denki",
      segments: [
        { text: "電", reading: "でん" },
        { text: "気", reading: "き" },
      ],
      pitch: 1,
      french: "L'électricité ; la lumière",
      english: "Electricity; light",
    },
    {
      term: "窓",
      reading: "まど",
      romanization: "mado",
      segments: [{ text: "窓", reading: "まど" }],
      pitch: 1,
      french: "La fenêtre",
      english: "Window",
    },
  ],

  exercises: [
    {
      id: "unit-21-ex1",
      type: "comprehension",
      question: "Quelle est la forme en て de 待ちます ?",
      correctAnswer: "待って",
      options: ["待って", "待いて", "待んで", "待して"],
      optionsHint: ["matte", "maite", "mande", "mashite"],
      optionsReading: ["まって", "まいて", "まんで", "まして"],
      hint: "Le kana devant ます est ち.",
    },
    {
      id: "unit-21-ex2",
      type: "comprehension",
      question: "行きます est irrégulier. Quelle est sa forme en て ?",
      correctAnswer: "行って",
      options: ["行って", "行いて", "行きて", "行んで"],
      optionsHint: ["itte", "iite", "ikite", "inde"],
      optionsReading: ["いって", "いいて", "いきて", "いんで"],
      hint: "C'est la seule vraie exception du système : elle ne suit pas la règle du き.",
    },
    {
      id: "unit-21-ex3",
      type: "fill-blank",
      question: "ここに ___ ください。 « Asseyez-vous ici, s'il vous plaît. »",
      correctAnswer: "座って",
      options: ["座って", "座りて", "座んで", "座いて"],
      optionsHint: ["suwatte", "suwarite", "suwande", "suwaite"],
      optionsReading: ["すわって", "すわりて", "すわんで", "すわいて"],
      hint: "座ります : le kana devant ます est り.",
    },
    {
      id: "unit-21-ex4",
      type: "fill-blank",
      question: "今、テレビを ___ います。 « Je suis en train de regarder la télévision. »",
      correctAnswer: "見て",
      options: ["見て", "見って", "見んで", "見りて"],
      optionsHint: ["mite", "mitte", "minde", "mirite"],
      optionsReading: ["みて", "みって", "みんで", "みりて"],
      hint: "見る est du deuxième groupe : ます tombe, て s'ajoute.",
    },
    {
      id: "unit-21-ex5",
      type: "listen",
      question: "ちょっと待ってください。",
      correctAnswer: "Attendez un instant, s'il vous plaît.",
      options: [
        "Attendez un instant, s'il vous plaît.",
        "Dépêchez-vous, s'il vous plaît.",
        "Asseyez-vous un instant, s'il vous plaît.",
        "Attendez-moi à la gare.",
      ],
      hint: "Un adoucisseur, un verbe à la forme en て, puis la demande.",
    },
    {
      id: "unit-21-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Asseyez-vous ici, s'il vous plaît. »",
      correctAnswer: "ここに座ってください。",
      options: ["ここ", "に", "座って", "ください"],
      hint: "Le lieu et sa particule d'abord, la demande à la fin.",
    },
    {
      id: "unit-21-ex7",
      type: "comprehension",
      question: "Que signifie 「田中さんは結婚しています。」 ?",
      correctAnswer: "M. Tanaka est marié.",
      options: [
        "M. Tanaka est marié.",
        "M. Tanaka est en train de se marier.",
        "M. Tanaka va se marier.",
        "M. Tanaka s'est marié hier.",
      ],
      hint: "Avec un verbe de basculement, ています décrit l'état qui suit l'événement.",
    },
    {
      id: "unit-21-ex8",
      type: "translate",
      question: "Traduisez : « Hier, je suis allé à Kyoto et j'ai retrouvé un ami. »",
      correctAnswer: "きのう、京都に行って、友だちに会いました。",
      options: [
        "きのう、京都に行って、友だちに会いました。",
        "きのう、京都に行いて、友だちに会いました。",
        "きのう、京都に行きて、友だちに会いました。",
        "きのう、京都に行って、友だちに会います。",
      ],
      optionsHint: [
        "kinou, Kyouto ni itte, tomodachi ni aimashita.",
        "kinou, Kyouto ni iite, tomodachi ni aimashita.",
        "kinou, Kyouto ni ikite, tomodachi ni aimashita.",
        "kinou, Kyouto ni itte, tomodachi ni aimasu.",
      ],
      hint: "Vérifiez la forme en て de 行く, puis le temps du dernier verbe.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-20"],
};
