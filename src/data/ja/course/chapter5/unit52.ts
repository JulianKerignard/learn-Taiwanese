import type { CourseUnit } from "@/types/course";

export const unit52: CourseUnit = {
  id: "unit-52",
  number: 40,
  chapter: 5,
  title: "Rapporter des paroles et des questions",
  titleNative: "引用と伝言：〜と言う・〜か・〜ように言う",
  description:
    "Citer quelqu'un avec と言う, transmettre un message avec と伝えてください, glisser une question dans la phrase avec 〜か et 〜かどうか, rapporter un ordre avec 〜ように言う, et nommer ce qu'on ne connaît pas avec 〜という. De quoi passer un message au bureau sans rien perdre en route.",
  icon: "伝",

  sections: [
    {
      title: "〜と言う : citer, directement ou indirectement",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "と marque la citation, et 言う (dire) vient après. Deux façons de rapporter. Le discours direct reprend les mots exacts entre crochets japonais 「」 : 田中さんは「明日休みます」と言いました. Le discours indirect les reformule à la forme neutre, sans crochets : 田中さんは明日休むと言いました. C'est la même règle qu'avec と思う (unité 27) : tout ce qui précède と est au style neutre.",
        },
        {
          type: "example",
          native: "田中さんは、明日は休むと言っていました。",
          romanization: "Tanaka-san wa, ashita wa yasumu to itte imashita.",
          translation: "Tanaka m'a dit qu'il serait absent demain.",
          content:
            "Pour rapporter à un tiers ce que quelqu'un a dit, on emploie 言っていました plutôt que 言いました. Le ていました présente les paroles comme une information qui reste valable. 言いました met l'accent sur l'acte de parole lui-même, à un moment précis.",
        },
        {
          type: "warning",
          content:
            "En discours indirect, pas de です ni de ます devant と : 「田中さんは明日休みますと言いました」 est, au mieux, un discours direct sans ses crochets. Et le japonais ignore la concordance des temps : « il a dit qu'il viendrait » se dit 来ると言いました, au présent, parce que le verbe cité garde le temps de la parole d'origine.",
        },
        {
          type: "text",
          content:
            "Pour demander à quelqu'un de transmettre un message, 伝える (transmettre) prend le relais : 部長に、少し遅れると伝えてください (« dites au chef que j'aurai un peu de retard »). À l'oral familier, と devient souvent って : 田中さん、来ないって (« Tanaka dit qu'il ne vient pas »).",
        },
        {
          type: "tip",
          content:
            "Pour demander comment on dit quelque chose, la question figée est 「〜」は日本語で何と言いますか : 「merci」は日本語で何と言いますか. Apprenez-la par cœur : c'est la phrase la plus utile de tout apprenant.",
        },
      ],
    },
    {
      title: "Une question dans la phrase : 〜か et 〜かどうか",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le français dit « je ne sais pas à quelle heure il arrive » en glissant la question dans la phrase. Le japonais fait de même : forme neutre + か, puis le verbe principal (分かる、知る、聞く、教える、決める…). Avec un mot interrogatif, か seul suffit : 何時に来るか分かりません. Sans mot interrogatif, pour une question fermée (oui ou non), on emploie かどうか : 来るかどうか分かりません, « je ne sais pas s'il viendra ».",
        },
        {
          type: "example",
          native: "会議が何時に始まるか、知っていますか。",
          romanization: "kaigi ga nanji ni hajimaru ka, shitte imasu ka.",
          translation: "Vous savez à quelle heure commence la réunion ?",
          content:
            "La question enchâssée 何時に始まるか est au style neutre, et le verbe principal 知っていますか porte la politesse. Plus poli, et plus naturel, que la question directe 会議は何時に始まりますか quand on n'est pas sûr que l'autre sache.",
        },
        {
          type: "example",
          native: "明日のパーティーに行くかどうか、まだ決めていません。",
          romanization: "ashita no paatii ni iku ka dou ka, mada kimete imasen.",
          translation: "Je n'ai pas encore décidé si j'irai à la fête de demain.",
          content:
            "かどうか transforme la question fermée « est-ce que j'y vais ? » en élément de la phrase, comme « si » en français. まだ〜ていません : « pas encore ».",
        },
        {
          type: "warning",
          content:
            "Après un nom ou un adjectif en な, だ disparaît devant か : 本当かどうか (et non 「本当だかどうか」), 便利かどうか. Et ne confondez pas か et かどうか : 「何時に来るかどうか」 est une faute, parce que 何時 fait déjà de la phrase une question ouverte.",
        },
      ],
    },
    {
      title: "〜ように言う et 〜という : rapporter un ordre, nommer",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour rapporter une demande ou un ordre, le japonais ne cite pas « faites ceci » : il emploie forme dictionnaire (ou en ない) + ように言う. 先生は学生に、宿題を出すように言いました (« le professeur a dit aux étudiants de rendre leurs devoirs »). La personne à qui l'on s'adresse prend に. Au passif, très fréquent : 医者にお酒を飲まないように言われました (« le médecin m'a dit de ne pas boire d'alcool »).",
        },
        {
          type: "example",
          native: "部長に、報告書を明日までに出すように言われました。",
          romanization: "buchou ni, houkokusho o ashita made ni dasu you ni iwaremashita.",
          translation: "Le chef m'a demandé de rendre le rapport d'ici demain.",
          content:
            "言われました : passif de 言う (unité 29). Vous rapportez une consigne reçue, et le passif la présente comme telle. までに : « au plus tard pour ».",
        },
        {
          type: "text",
          content:
            "Dernier outil : nom + という + nom, « qui s'appelle », « du nom de ». On l'emploie pour désigner quelque chose que l'autre ne connaît peut-être pas : 「さくら」という店 (« un restaurant qui s'appelle Sakura »), 山田さんという人 (« une personne du nom de Yamada »). La question correspondante : これは何という花ですか (« comment s'appelle cette fleur ? »).",
        },
        {
          type: "example",
          native: "駅の前に「ひまわり」という喫茶店があります。",
          romanization: "eki no mae ni \"Himawari\" to iu kissaten ga arimasu.",
          translation: "Devant la gare, il y a un café qui s'appelle Himawari.",
          content:
            "という introduit le nom propre, que l'interlocuteur découvre. Pour un lieu que tout le monde connaît, on s'en passe : 東京駅の前に.",
        },
        {
          type: "comparison",
          content:
            "Trois façons de rapporter, trois types de paroles : une affirmation (来ると言いました), une question (来るかどうか聞きました, « il a demandé si je viendrais »), un ordre (来るように言いました, « il m'a dit de venir »). Le verbe final peut rester le même : c'est ce qui précède と, か ou ように qui dit de quoi il s'agit.",
        },
      ],
    },
    {
      title: "Prendre un message au bureau : le 伝言",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Dans une entreprise japonaise, transmettre un message sans rien oublier est une compétence attendue dès le premier jour. On note le 伝言 sur un petit papier : qui a appelé, à quelle heure, ce qu'il a dit, et s'il faut rappeler. Puis on le rapporte avec 〜と言っていました ou, plus formel, 〜とのことです (« il m'a chargé de vous dire que… »).",
        },
        {
          type: "example",
          native: "部長、ABC社の鈴木様からお電話がありました。三時にもう一度お電話くださるとのことです。",
          romanization: "buchou, eebiishii-sha no Suzuki-sama kara odenwa ga arimashita. sanji ni mou ichido odenwa kudasaru to no koto desu.",
          translation: "Monsieur, M. Suzuki de la société ABC a appelé. Il rappellera à trois heures.",
          content:
            "様 (plus respectueux que さん) pour le client extérieur, お電話 et くださる, honorifiques, pour ce que fait le client, et とのことです pour transmettre sans déformer. Vous verrez ce registre en détail au niveau suivant ; retenez ici la structure du rapport.",
        },
        {
          type: "tip",
          content:
            "Quand on vous demande de transmettre un message, confirmez avant de raccrocher : 三時にお電話をいただけるということですね (« donc, vous rappellerez à trois heures, c'est bien cela ? »). Répéter l'essentiel est une marque de sérieux, pas de lenteur.",
        },
        {
          type: "text",
          content:
            "La formule de fin la plus courante, よろしくお伝えください (« transmettez-lui mes amitiés »), vient elle aussi de 伝える. On la dit en quittant quelqu'un qui connaît un tiers commun : ご家族によろしくお伝えください.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans un bureau de Kyoto. Marie revient de déjeuner ; son collègue Kobayashi lui transmet les messages arrivés pendant son absence.",
    lines: [
      {
        speaker: "小林",
        native: "マリーさん、さっき山本さんから電話がありましたよ。",
        romanization: "Marii-san, sakki Yamamoto-san kara denwa ga arimashita yo.",
        french: "Marie, Yamamoto a appelé tout à l'heure.",
      },
      {
        speaker: "マリー",
        native: "そうですか。何と言っていましたか。",
        romanization: "sou desu ka. nan to itte imashita ka.",
        french: "Ah bon. Qu'est-ce qu'il a dit ?",
        note: "何と言っていましたか : on demande le contenu du message, qui reste valable.",
      },
      {
        speaker: "小林",
        native: "明日の打ち合わせは、十時から十一時に変わると言っていました。",
        romanization: "ashita no uchiawase wa, juuji kara juuichiji ni kawaru to itte imashita.",
        french: "Il a dit que la réunion de demain passait de dix heures à onze heures.",
        note: "変わる, forme neutre devant と : discours indirect.",
      },
      {
        speaker: "マリー",
        native: "分かりました。場所も変わるかどうか、聞きましたか。",
        romanization: "wakarimashita. basho mo kawaru ka dou ka, kikimashita ka.",
        french: "D'accord. Vous lui avez demandé si le lieu changeait aussi ?",
        note: "かどうか : question fermée enchâssée.",
      },
      {
        speaker: "小林",
        native: "すみません、聞きませんでした。でも、資料を三部用意するように言われました。",
        romanization: "sumimasen, kikimasen deshita. demo, shiryou o sanbu youi suru you ni iwaremashita.",
        french: "Désolé, je ne lui ai pas demandé. Mais il m'a demandé de préparer trois exemplaires des documents.",
        note: "〜ように言われました : une consigne rapportée, au passif.",
      },
      {
        speaker: "マリー",
        native: "ありがとうございます。じゃ、山本さんにメールで確認します。",
        romanization: "arigatou gozaimasu. ja, Yamamoto-san ni meeru de kakunin shimasu.",
        french: "Merci. Bon, je vais vérifier auprès de Yamamoto par courriel.",
      },
      {
        speaker: "小林",
        native: "あ、それから、「さくら」という会社の人も来ていましたよ。",
        romanization: "a, sorekara, \"Sakura\" to iu kaisha no hito mo kite imashita yo.",
        french: "Ah, et puis quelqu'un d'une société qui s'appelle Sakura est passé aussi.",
        note: "という : Kobayashi ne connaît pas cette société et la présente par son nom.",
      },
      {
        speaker: "マリー",
        native: "あ、新しいお客様です。何時ごろ来たか、覚えていますか。",
        romanization: "a, atarashii okyakusama desu. nanji goro kita ka, oboete imasu ka.",
        french: "Ah, c'est un nouveau client. Vous vous souvenez vers quelle heure il est venu ?",
        note: "Mot interrogatif + か : 何時ごろ来たか, sans どうか.",
      },
      {
        speaker: "小林",
        native: "一時半ごろです。マリーさんによろしくと言っていました。",
        romanization: "ichiji han goro desu. Marii-san ni yoroshiku to itte imashita.",
        french: "Vers une heure et demie. Il m'a chargé de vous transmettre ses salutations.",
      },
    ],
  },

  keyPoints: [
    "Discours direct : 「〜」と言いました. Discours indirect : forme neutre + と言いました. Pour rapporter un message à un tiers, 〜と言っていました.",
    "伝える transmet un message : 遅れると伝えてください. À l'oral familier, と devient って : 来ないって.",
    "Question enchâssée : mot interrogatif + forme neutre + か (何時に来るか分かりません) ; question fermée : 〜かどうか (来るかどうか分かりません). Après un nom ou un adjectif en な, だ disparaît : 本当かどうか.",
    "Rapporter un ordre : forme dictionnaire ou en ない + ように言う. 医者にお酒を飲まないように言われました.",
    "Nom + という + nom : « qui s'appelle ». 「さくら」という店, これは何という花ですか. Au bureau, le 伝言 se rapporte avec 〜と言っていました ou 〜とのことです.",
  ],

  vocabulary: [
    {
      term: "伝える",
      reading: "つたえる",
      romanization: "tsutaeru",
      segments: [{ text: "伝", reading: "つた" }, { text: "える" }],
      french: "Transmettre, communiquer",
      english: "To convey, to pass on",
      example: {
        sentence: "部長に、少し遅れると伝えてください。",
        romanization: "buchou ni, sukoshi okureru to tsutaete kudasai.",
        translation: "Dites au chef que j'aurai un peu de retard.",
      },
    },
    {
      term: "伝言",
      reading: "でんごん",
      romanization: "dengon",
      segments: [{ text: "伝", reading: "でん" }, { text: "言", reading: "ごん" }],
      french: "Le message (laissé pour quelqu'un)",
      english: "Message",
      example: {
        sentence: "ご伝言はありますか。",
        romanization: "go-dengon wa arimasu ka.",
        translation: "Voulez-vous laisser un message ?",
      },
    },
    {
      term: "知る",
      reading: "しる",
      romanization: "shiru",
      segments: [{ text: "知", reading: "し" }, { text: "る" }],
      french: "Savoir, connaître (知っている : savoir)",
      english: "To know",
      example: {
        sentence: "会議が何時に始まるか、知っていますか。",
        romanization: "kaigi ga nanji ni hajimaru ka, shitte imasu ka.",
        translation: "Vous savez à quelle heure commence la réunion ?",
      },
    },
    {
      term: "決める",
      reading: "きめる",
      romanization: "kimeru",
      segments: [{ text: "決", reading: "き" }, { text: "める" }],
      french: "Décider, fixer",
      english: "To decide",
      example: {
        sentence: "行くかどうか、まだ決めていません。",
        romanization: "iku ka dou ka, mada kimete imasen.",
        translation: "Je n'ai pas encore décidé si j'y vais.",
      },
    },
    {
      term: "覚える",
      reading: "おぼえる",
      romanization: "oboeru",
      segments: [{ text: "覚", reading: "おぼ" }, { text: "える" }],
      french: "Retenir, mémoriser ; se souvenir (覚えている)",
      english: "To memorise; to remember",
    },
    {
      term: "確認する",
      reading: "かくにんする",
      romanization: "kakunin suru",
      segments: [{ text: "確", reading: "かく" }, { text: "認", reading: "にん" }, { text: "する" }],
      french: "Vérifier, confirmer",
      english: "To confirm, to check",
    },
    {
      term: "宿題",
      reading: "しゅくだい",
      romanization: "shukudai",
      segments: [{ text: "宿", reading: "しゅく" }, { text: "題", reading: "だい" }],
      french: "Les devoirs (scolaires)",
      english: "Homework",
      example: {
        sentence: "先生は、宿題を出すように言いました。",
        romanization: "sensei wa, shukudai o dasu you ni iimashita.",
        translation: "Le professeur a dit de rendre les devoirs.",
      },
    },
    {
      term: "医者",
      reading: "いしゃ",
      romanization: "isha",
      segments: [{ text: "医", reading: "い" }, { text: "者", reading: "しゃ" }],
      french: "Le médecin",
      english: "Doctor",
      example: {
        sentence: "医者にお酒を飲まないように言われました。",
        romanization: "isha ni osake o nomanai you ni iwaremashita.",
        translation: "Le médecin m'a dit de ne pas boire d'alcool.",
      },
    },
    {
      term: "報告書",
      reading: "ほうこくしょ",
      romanization: "houkokusho",
      segments: [{ text: "報", reading: "ほう" }, { text: "告", reading: "こく" }, { text: "書", reading: "しょ" }],
      french: "Le rapport (écrit)",
      english: "Report",
    },
    {
      term: "喫茶店",
      reading: "きっさてん",
      romanization: "kissaten",
      segments: [{ text: "喫", reading: "きっ" }, { text: "茶", reading: "さ" }, { text: "店", reading: "てん" }],
      french: "Le café (établissement à l'ancienne)",
      english: "Coffee shop",
    },
    {
      term: "打ち合わせ",
      reading: "うちあわせ",
      romanization: "uchiawase",
      segments: [{ text: "打", reading: "う" }, { text: "ち" }, { text: "合", reading: "あ" }, { text: "わせ" }],
      french: "La réunion de travail (préparatoire)",
      english: "Business meeting",
    },
    {
      term: "資料",
      reading: "しりょう",
      romanization: "shiryou",
      segments: [{ text: "資", reading: "し" }, { text: "料", reading: "りょう" }],
      french: "Les documents, la documentation",
      english: "Documents, materials",
    },
    {
      term: "用意する",
      reading: "よういする",
      romanization: "youi suru",
      segments: [{ text: "用", reading: "よう" }, { text: "意", reading: "い" }, { text: "する" }],
      french: "Préparer, apprêter",
      english: "To prepare, to get ready",
    },
    {
      term: "返事",
      reading: "へんじ",
      romanization: "henji",
      segments: [{ text: "返", reading: "へん" }, { text: "事", reading: "じ" }],
      french: "La réponse (à un message, à un appel)",
      english: "Reply, answer",
      example: {
        sentence: "来られるかどうか、明日までに返事をください。",
        romanization: "korareru ka dou ka, ashita made ni henji o kudasai.",
        translation: "Répondez-moi d'ici demain pour me dire si vous pouvez venir.",
      },
    },
    {
      term: "答える",
      reading: "こたえる",
      romanization: "kotaeru",
      segments: [{ text: "答", reading: "こた" }, { text: "える" }],
      french: "Répondre (à une question)",
      english: "To answer",
    },
    {
      term: "連絡する",
      reading: "れんらくする",
      romanization: "renraku suru",
      segments: [{ text: "連", reading: "れん" }, { text: "絡", reading: "らく" }, { text: "する" }],
      french: "Contacter, prévenir",
      english: "To contact, to get in touch",
      example: {
        sentence: "遅れるときは、必ず連絡するように言われました。",
        romanization: "okureru toki wa, kanarazu renraku suru you ni iwaremashita.",
        translation: "On m'a dit de toujours prévenir quand je suis en retard.",
      },
    },
    {
      term: "本当",
      reading: "ほんとう",
      romanization: "hontou",
      segments: [{ text: "本", reading: "ほん" }, { text: "当", reading: "とう" }],
      french: "Vrai, la vérité",
      english: "True, truth",
      example: {
        sentence: "その話が本当かどうか、分かりません。",
        romanization: "sono hanashi ga hontou ka dou ka, wakarimasen.",
        translation: "Je ne sais pas si cette histoire est vraie.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-52-ex1",
      type: "fill-blank",
      question: "田中さんは、明日は ___ と言っていました。 (« Tanaka a dit qu'il serait absent demain. »)",
      correctAnswer: "休む",
      options: ["休む", "休みます", "休んで", "休みに"],
      optionsHint: ["yasumu", "yasumimasu", "yasunde", "yasumi ni"],
      optionsReading: ["やすむ", "やすみます", "やすんで", "やすみに"],
      hint: "Discours indirect : forme neutre devant と.",
    },
    {
      id: "unit-52-ex2",
      type: "fill-blank",
      question: "明日のパーティーに行く ___ 、まだ決めていません。 (« Je n'ai pas encore décidé si j'irai à la fête. »)",
      correctAnswer: "かどうか",
      options: ["かどうか", "か", "と", "ように"],
      optionsHint: ["ka dou ka", "ka", "to", "you ni"],
      hint: "Question fermée (oui ou non), sans mot interrogatif.",
    },
    {
      id: "unit-52-ex3",
      type: "fill-blank",
      question: "会議が何時に始まる ___ 、知っていますか。 (« Vous savez à quelle heure commence la réunion ? »)",
      correctAnswer: "か",
      options: ["か", "かどうか", "と", "の"],
      optionsHint: ["ka", "ka dou ka", "to", "no"],
      hint: "何時 fait déjà de la phrase une question ouverte.",
    },
    {
      id: "unit-52-ex4",
      type: "comprehension",
      question: "Que signifie 「医者にお酒を飲まないように言われました」 ?",
      correctAnswer: "Le médecin m'a dit de ne pas boire d'alcool.",
      options: [
        "Le médecin m'a dit de ne pas boire d'alcool.",
        "J'ai dit au médecin que je ne buvais pas d'alcool.",
        "Le médecin ne boit pas d'alcool.",
        "Le médecin m'a demandé si je buvais de l'alcool.",
      ],
      hint: "〜ように言う rapporte un ordre ; le passif montre que c'est vous qui l'avez reçu.",
    },
    {
      id: "unit-52-ex5",
      type: "comprehension",
      question: "Comment demander le nom d'une fleur que vous ne connaissez pas ?",
      correctAnswer: "これは何という花ですか。",
      options: ["これは何という花ですか。", "これは何と言いましたか。", "これは花かどうかですか。", "これは何の花ように言いますか。"],
      optionsHint: [
        "kore wa nan to iu hana desu ka.",
        "kore wa nan to iimashita ka.",
        "kore wa hana ka dou ka desu ka.",
        "kore wa nan no hana you ni iimasu ka.",
      ],
      hint: "Nom + という + nom : « qui s'appelle ».",
    },
    {
      id: "unit-52-ex6",
      type: "listen",
      question: "部長に、少し遅れると伝えてください。",
      correctAnswer: "Dites au chef que j'aurai un peu de retard.",
      options: [
        "Dites au chef que j'aurai un peu de retard.",
        "Le chef m'a dit qu'il aurait un peu de retard.",
        "Demandez au chef s'il sera en retard.",
        "Le chef m'a demandé de ne pas être en retard.",
      ],
      hint: "伝えてください : vous confiez un message à quelqu'un.",
    },
    {
      id: "unit-52-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Je ne sais pas si cette histoire est vraie. »",
      correctAnswer: "その話が本当かどうか分かりません。",
      options: ["その話が", "本当", "かどうか", "分かりません"],
      hint: "Après un nom, だ disparaît devant かどうか.",
    },
    {
      id: "unit-52-ex8",
      type: "translate",
      question: "Traduisez : « Le professeur a dit aux étudiants de rendre leurs devoirs. »",
      correctAnswer: "先生は学生に宿題を出すように言いました。",
      options: [
        "先生は学生に宿題を出すように言いました。",
        "先生は学生に宿題を出すかどうか言いました。",
        "先生は学生に宿題を出しますと言われました。",
        "先生は学生が宿題を出したと言いました。",
      ],
      optionsHint: [
        "sensei wa gakusei ni shukudai o dasu you ni iimashita.",
        "sensei wa gakusei ni shukudai o dasu ka dou ka iimashita.",
        "sensei wa gakusei ni shukudai o dashimasu to iwaremashita.",
        "sensei wa gakusei ga shukudai o dashita to iimashita.",
      ],
      hint: "Un ordre rapporté : forme dictionnaire + ように言う.",
    },
    {
      id: "unit-52-ex9",
      type: "comprehension",
      question: "Pourquoi 「何時に来るかどうか分かりません」 est-il incorrect ?",
      correctAnswer: "Parce qu'avec un mot interrogatif comme 何時, il faut か seul, pas かどうか.",
      options: [
        "Parce qu'avec un mot interrogatif comme 何時, il faut か seul, pas かどうか.",
        "Parce que 来る doit être à la forme polie devant か.",
        "Parce que 分かる ne peut pas suivre une question.",
        "Parce que かどうか exige un nom devant lui.",
      ],
      hint: "かどうか est réservé aux questions fermées.",
    },
    {
      id: "unit-52-ex10",
      type: "comprehension",
      question: "Un client a appelé pendant l'absence de votre chef et rappellera à trois heures. Comment le lui rapportez-vous, de la façon la plus professionnelle ?",
      correctAnswer: "三時にもう一度お電話くださるとのことです。",
      options: [
        "三時にもう一度お電話くださるとのことです。",
        "三時にもう一度お電話くださるように言いました。",
        "三時にもう一度お電話くださるかどうか分かりません。",
        "三時にもう一度かけますと言いました。",
      ],
      optionsHint: [
        "sanji ni mou ichido odenwa kudasaru to no koto desu.",
        "sanji ni mou ichido odenwa kudasaru you ni iimashita.",
        "sanji ni mou ichido odenwa kudasaru ka dou ka wakarimasen.",
        "sanji ni mou ichido kakemasu to iimashita.",
      ],
      hint: "La formule du 伝言 au bureau, qui transmet sans déformer.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-51"],
};
