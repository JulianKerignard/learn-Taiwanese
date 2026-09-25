import type { CourseUnit } from "@/types/course";

export const unit45: CourseUnit = {
  id: "unit-45",
  number: 33,
  chapter: 5,
  title: "Transitifs et intransitifs : 開ける ou 開く",
  titleNative: "自動詞と他動詞：開ける・開く",
  description:
    "Là où le français dit « ouvrir » et « s'ouvrir », le japonais a deux verbes distincts, et il faut choisir à chaque phrase. Les paires à connaître, les moules qui permettent de les deviner, le 〜ている de l'état obtenu, et pourquoi un Japonais dit « le train a pris du retard » sans nommer personne, mais « j'ai cassé le verre » quand c'est sa faute.",
  icon: "開",

  sections: [
    {
      title: "Deux verbes pour une même scène",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Imaginez une porte qui s'ouvre. Le français a deux façons de le dire : « j'ouvre la porte » (quelqu'un agit) et « la porte s'ouvre » (on constate). Il y parvient avec un seul verbe, auquel il ajoute un pronom réfléchi. Le japonais emploie deux verbes différents : 開ける (あける) pour l'action d'un agent, qu'on appelle 他動詞 (verbe transitif), et 開く (あく) pour ce qui arrive à la chose, qu'on appelle 自動詞 (verbe intransitif).",
        },
        {
          type: "example",
          native: "私はドアを開けました。",
          romanization: "watashi wa doa o akemashita.",
          translation: "J'ai ouvert la porte.",
          content:
            "Verbe transitif : il y a un agent (私) et un objet (ドア), marqué par を. La phrase répond à la question « qu'est-ce que tu as fait ? ».",
        },
        {
          type: "example",
          native: "ドアが開きました。",
          romanization: "doa ga akimashita.",
          translation: "La porte s'est ouverte.",
          content:
            "Verbe intransitif : plus d'agent, plus d'objet. La porte devient le sujet et prend が. La phrase répond à « qu'est-ce qui s'est passé ? ». Qui a ouvert, un collègue, le vent, un mécanisme ? La phrase ne le dit pas, et c'est son but.",
        },
        {
          type: "warning",
          content:
            "La particule suit le verbe, pas l'inverse. Avec un transitif, la chose prend を ; avec un intransitif, elle prend が. 「ドアを開きました」 (lu あきました) et 「ドアが開けました」 sont les deux fautes les plus fréquentes chez les francophones. Dans les deux cas, la particule et le verbe se contredisent : l'une annonce un agent, l'autre n'en veut pas.",
        },
        {
          type: "tip",
          content:
            "Pour savoir quel verbe prendre, demandez-vous si vous pouvez ajouter « par quelqu'un » à la phrase française. « La porte a été ouverte par Marie » : c'est l'action de Marie, prenez le transitif 開ける. « La porte s'est ouverte » sans responsable : prenez l'intransitif 開く.",
        },
      ],
    },
    {
      title: "Les paires à connaître, et les moules qui les fabriquent",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les paires ne sont pas aléatoires : quelques moules reviennent sans cesse, et les repérer divise le travail de mémorisation par deux. Premier moule : える pour le transitif, あ段 + る pour l'intransitif — le plus souvent 〜める face à 〜まる : 始める / 始まる, 閉める / 閉まる, 止める / 止まる, 決める / 決まる, 集める / 集まる, 変える / 変わる.",
        },
        {
          type: "example",
          native: "先生が授業を始めます。授業が始まります。",
          romanization: "sensei ga jugyou o hajimemasu. jugyou ga hajimarimasu.",
          translation: "Le professeur commence le cours. Le cours commence.",
          content:
            "Même événement, deux cadrages. Le premier met le professeur en scène ; le second annonce simplement un horaire. Sur un panneau ou dans un haut-parleur, c'est toujours la forme en 〜まる qu'on lit : 授業は九時に始まります.",
        },
        {
          type: "text",
          content:
            "Deuxième moule, 〜す (transitif) / autre terminaison (intransitif) : 消す / 消える, 出す / 出る, 落とす / 落ちる, 壊す / 壊れる, 起こす / 起きる, 直す / 直る. La règle qui en découle souffre très peu d'exceptions : un verbe terminé en す est presque toujours transitif. Si vous hésitez entre deux verbes et que l'un finit en す, c'est lui qui prend を.",
        },
        {
          type: "example",
          native: "部屋を出る前に、電気を消してください。",
          romanization: "heya o deru mae ni, denki o keshite kudasai.",
          translation: "Avant de sortir de la pièce, éteignez la lumière.",
          content:
            "消す (transitif, en す) prend 電気を. Et 出る ? Il est intransitif, et pourtant 部屋を le précède : c'est le を du lieu qu'on quitte ou qu'on traverse, le même que dans 公園を散歩する. Ce を-là n'est pas un complément d'objet et ne contredit pas la règle.",
        },
        {
          type: "text",
          content:
            "Troisième groupe, les paires irrégulières à apprendre telles quelles : 入れる / 入る (mettre dedans / entrer), つける / つく (allumer / s'allumer), 見る / 見える (regarder / être visible), 聞く / 聞こえる (écouter / être audible). Les deux dernières paires reviendront souvent : 見える et 聞こえる ne disent pas qu'on fait l'effort de voir ou d'entendre, mais que la chose se donne à voir ou à entendre.",
        },
        {
          type: "comparison",
          content:
            "Le français connaît le même phénomène, mais sur une poignée de verbes : « lever / se lever », « asseoir / s'asseoir », « tomber / faire tomber ». Le japonais en compte plusieurs centaines. La bonne nouvelle, c'est que le français se sert presque toujours du pronominal là où le japonais emploie l'intransitif : « s'ouvrir, s'éteindre, s'arrêter, se casser ». Si la traduction naturelle est pronominale, prenez l'intransitif.",
        },
        {
          type: "tip",
          content:
            "Apprenez chaque verbe avec sa particule, jamais seul : 「〜を開ける・〜が開く」、「〜を消す・〜が消える」. Une carte de révision qui porte les deux formes et leurs particules vaut mieux que deux cartes séparées.",
        },
      ],
    },
    {
      title: "〜ている sur un intransitif : l'état qui reste",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Vous connaissez 〜ている pour l'action en cours (食べています, « je suis en train de manger »). Posé sur un intransitif de changement, il prend un tout autre sens : il décrit l'état qui résulte d'un changement déjà accompli. 窓が開いています ne veut pas dire « la fenêtre est en train de s'ouvrir » mais « la fenêtre est ouverte » — elle s'est ouverte à un moment, et elle l'est restée.",
        },
        {
          type: "example",
          native: "あれ、窓が開いていますね。",
          romanization: "are, mado ga aite imasu ne.",
          translation: "Tiens, la fenêtre est ouverte.",
          content:
            "C'est la phrase du constat : on entre, on voit, on dit ce qu'on voit. Le japonais n'a pas d'adjectif « ouvert » à la française ; c'est l'intransitif + ている qui en tient lieu. Même chose pour « allumé » (ついている), « éteint » (消えている), « cassé » (壊れている), « fermé » (閉まっている).",
        },
        {
          type: "example",
          native: "すみません、財布が落ちていますよ。",
          romanization: "sumimasen, saifu ga ochite imasu yo.",
          translation: "Excusez-moi, votre portefeuille est par terre.",
          content:
            "Mot à mot « le portefeuille est tombé et se trouve là ». Vous n'accusez personne de l'avoir fait tomber, vous signalez un état. よ attire l'attention de l'autre sur une information qu'il n'a pas.",
        },
        {
          type: "comparison",
          content:
            "Même terminaison, deux lectures : 窓を開けています (transitif) = « je suis en train d'ouvrir la fenêtre », action en cours. 窓が開いています (intransitif) = « la fenêtre est ouverte », état. Ce n'est pas ている qui change de sens, c'est le verbe qui décide : un verbe d'action donne une action en cours, un verbe de changement d'état donne l'état obtenu.",
        },
        {
          type: "warning",
          content:
            "Pour dire « cet ordinateur est cassé », ne cherchez pas d'adjectif : このパソコンは壊れています. Et surtout pas 「壊れました」 si vous décrivez l'état actuel. 壊れました raconte l'événement (« il est tombé en panne ») ; 壊れています décrit la situation (« il est en panne »). Au guichet de réparation, c'est la seconde qu'on attend.",
        },
        {
          type: "tip",
          content:
            "Il existe une troisième construction, 〜てある sur un transitif (窓が開けてある, « la fenêtre a été laissée ouverte, exprès »), qui ajoute l'idée d'une intention. Elle est traitée avec les auxiliaires d'aspect, au niveau N3. Pour l'instant, retenez le couple de base : intransitif + ている pour tout état constaté.",
        },
      ],
    },
    {
      title: "« Le verre s'est cassé » : dire les choses sans désigner de coupable",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le japonais préfère nettement l'intransitif dès que le responsable importe peu ou qu'il vaut mieux ne pas le nommer. 電車が遅れました (« le train a pris du retard »), 会議が始まります (« la réunion commence »), 料金が変わりました (« les tarifs ont changé ») : les choses arrivent, et personne n'est désigné. Beaucoup d'annonces publiques sont construites ainsi.",
        },
        {
          type: "example",
          native: "お風呂が沸きました。",
          romanization: "ofuro ga wakimashita.",
          translation: "Le bain est prêt. (litt. « l'eau du bain a chauffé »)",
          content:
            "La voix enregistrée que diffuse le chauffe-bain de presque tous les logements japonais. 沸く (intransitif) s'oppose à 沸かす (transitif, faire chauffer). La machine, qui a pourtant fait tout le travail, ne se met pas en avant.",
        },
        {
          type: "text",
          content:
            "Mais l'intransitif a un revers. Quand c'est vous qui avez causé un problème, l'employer donne l'impression que vous esquivez. Si vous cassez un verre chez quelqu'un, 「コップが割れました」 (« le verre s'est cassé ») sonne comme une excuse d'enfant. On attend le transitif, qui assume : すみません、コップを割りました.",
        },
        {
          type: "tip",
          content:
            "Règle pratique : intransitif pour annoncer, informer ou décrire ; transitif pour reconnaître ce que vous avez fait. Plus vous êtes responsable, plus le transitif est poli.",
        },
        {
          type: "warning",
          content:
            "Inversement, n'employez pas le transitif pour parler de l'erreur d'un autre en sa présence. 「部長がデータを消しました」 devant le chef revient à pointer du doigt ; データが消えましたね (« les données ont disparu ») laisse chacun sauver la face. Le choix entre les deux verbes est aussi un choix de relation.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Neuf heures moins dix, dans un bureau de Tokyo. Marie arrive et trouve la pièce dans un drôle d'état ; son collègue Tanaka est déjà là.",
    lines: [
      {
        speaker: "マリー",
        native: "おはようございます。あれ、窓が開いていますね。",
        romanization: "ohayou gozaimasu. are, mado ga aite imasu ne.",
        french: "Bonjour. Tiens, la fenêtre est ouverte.",
        note: "開いています : intransitif + ている, l'état constaté. Marie ne sait pas qui l'a ouverte et ne le demande pas.",
      },
      {
        speaker: "田中",
        native: "ええ、さっき私が開けました。部屋がちょっと暑かったので。",
        romanization: "ee, sakki watashi ga akemashita. heya ga chotto atsukatta node.",
        french: "Oui, c'est moi qui l'ai ouverte tout à l'heure. Il faisait un peu chaud dans la pièce.",
        note: "私が開けました : Tanaka revendique l'action, donc le transitif. が sur 私 insiste : « c'est moi qui ».",
      },
      {
        speaker: "マリー",
        native: "でも、エアコンもついていますよ。",
        romanization: "demo, eakon mo tsuite imasu yo.",
        french: "Mais la clim est allumée aussi.",
        note: "つく (s'allumer) + ている = « être allumé ». Le transitif serait つける.",
      },
      {
        speaker: "田中",
        native: "あ、本当ですね。じゃ、エアコンを消しましょう。",
        romanization: "a, hontou desu ne. ja, eakon o keshimashou.",
        french: "Ah, c'est vrai. Bon, éteignons la clim.",
        note: "消す, verbe en す, donc transitif : エアコンを.",
      },
      {
        speaker: "マリー",
        native: "ところで、会議は何時に始まりますか。",
        romanization: "tokoro de, kaigi wa nanji ni hajimarimasu ka.",
        french: "Au fait, la réunion commence à quelle heure ?",
        note: "始まる (intransitif) : on demande un horaire, pas qui ouvrira la séance.",
      },
      {
        speaker: "田中",
        native: "十時です。部長はいつも時間どおりに始めますから、急ぎましょう。",
        romanization: "juuji desu. buchou wa itsumo jikan doori ni hajimemasu kara, isogimashou.",
        french: "À dix heures. Le chef commence toujours à l'heure pile, alors dépêchons-nous.",
        note: "Ici 始める (transitif) : c'est le chef qui fait commencer, et c'est lui qui compte.",
      },
      {
        speaker: "マリー",
        native: "あれ？コピー機が止まりました。",
        romanization: "are? kopiiki ga tomarimashita.",
        french: "Hein ? La photocopieuse s'est arrêtée.",
        note: "止まる (intransitif) : la machine s'arrête d'elle-même. 止める serait « l'arrêter ».",
      },
      {
        speaker: "田中",
        native: "紙が入っていないんじゃないですか。",
        romanization: "kami ga haitte inai n ja nai desu ka.",
        french: "Il n'y a peut-être plus de papier dedans, non ?",
        note: "入る (entrer, être dedans) + ている : l'état. La tournure んじゃないですか avance une hypothèse avec prudence.",
      },
      {
        speaker: "マリー",
        native: "あ、本当だ。今、入れます。",
        romanization: "a, hontou da. ima, iremasu.",
        french: "Ah oui, c'est vrai. J'en remets tout de suite.",
        note: "入れる (mettre dedans), le transitif de 入る. Le 本当だ neutre échappe à Marie : c'est une exclamation pour elle-même.",
      },
    ],
  },

  keyPoints: [
    "Le japonais a deux verbes là où le français en a un seul, éventuellement pronominal : 開ける (transitif, quelqu'un ouvre quelque chose) et 開く (intransitif, la chose s'ouvre).",
    "La particule suit le verbe : transitif → la chose prend を (ドアを開ける) ; intransitif → elle devient sujet et prend が (ドアが開く).",
    "Trois moules : える / あ段 + る (始める / 始まる, 閉める / 閉まる) ; す / autre terminaison (消す / 消える, 出す / 出る, 落とす / 落ちる) — un verbe en す est presque toujours transitif ; et quelques paires irrégulières (入れる / 入る, つける / つく).",
    "Intransitif + ている décrit l'état résultant : 窓が開いています (« la fenêtre est ouverte »), このパソコンは壊れています (« cet ordinateur est en panne »). Transitif + ている reste une action en cours.",
    "L'intransitif sert à annoncer sans désigner de responsable (電車が遅れました). Quand la faute est la vôtre, le transitif qui l'assume est plus poli : コップを割りました.",
  ],

  vocabulary: [
    {
      term: "開ける",
      reading: "あける",
      romanization: "akeru",
      segments: [{ text: "開", reading: "あ" }, { text: "ける" }],
      french: "Ouvrir (quelque chose)",
      english: "To open (something)",
      example: {
        sentence: "暑いので、窓を開けてもいいですか。",
        romanization: "atsui node, mado o akete mo ii desu ka.",
        translation: "Il fait chaud, je peux ouvrir la fenêtre ?",
      },
    },
    {
      term: "開く",
      reading: "あく",
      romanization: "aku",
      segments: [{ text: "開", reading: "あ" }, { text: "く" }],
      french: "S'ouvrir, être ouvert",
      english: "To open (by itself), to be open",
      example: {
        sentence: "この店は十時に開きます。",
        romanization: "kono mise wa juuji ni akimasu.",
        translation: "Ce magasin ouvre à dix heures.",
      },
    },
    {
      term: "閉める",
      reading: "しめる",
      romanization: "shimeru",
      segments: [{ text: "閉", reading: "し" }, { text: "める" }],
      french: "Fermer (quelque chose)",
      english: "To close (something)",
      example: {
        sentence: "寒いので、窓を閉めてください。",
        romanization: "samui node, mado o shimete kudasai.",
        translation: "Il fait froid, fermez la fenêtre s'il vous plaît.",
      },
    },
    {
      term: "閉まる",
      reading: "しまる",
      romanization: "shimaru",
      segments: [{ text: "閉", reading: "し" }, { text: "まる" }],
      french: "Se fermer, être fermé",
      english: "To close (by itself), to be closed",
      example: {
        sentence: "ドアが閉まります。ご注意ください。",
        romanization: "doa ga shimarimasu. go-chuui kudasai.",
        translation: "Les portes vont se fermer. Attention.",
      },
    },
    {
      term: "始める",
      reading: "はじめる",
      romanization: "hajimeru",
      segments: [{ text: "始", reading: "はじ" }, { text: "める" }],
      french: "Commencer (quelque chose)",
      english: "To start (something)",
      example: {
        sentence: "では、会議を始めます。",
        romanization: "dewa, kaigi o hajimemasu.",
        translation: "Bien, je commence la réunion.",
      },
    },
    {
      term: "始まる",
      reading: "はじまる",
      romanization: "hajimaru",
      segments: [{ text: "始", reading: "はじ" }, { text: "まる" }],
      french: "Commencer, débuter (de soi-même)",
      english: "To begin (intransitive)",
      example: {
        sentence: "映画は七時に始まります。",
        romanization: "eiga wa shichiji ni hajimarimasu.",
        translation: "Le film commence à sept heures.",
      },
    },
    {
      term: "止める",
      reading: "とめる",
      romanization: "tomeru",
      segments: [{ text: "止", reading: "と" }, { text: "める" }],
      french: "Arrêter (quelque chose), garer",
      english: "To stop (something), to park",
      example: {
        sentence: "ここに車を止めないでください。",
        romanization: "koko ni kuruma o tomenai de kudasai.",
        translation: "Ne garez pas votre voiture ici.",
      },
    },
    {
      term: "止まる",
      reading: "とまる",
      romanization: "tomaru",
      segments: [{ text: "止", reading: "と" }, { text: "まる" }],
      french: "S'arrêter",
      english: "To stop (intransitive)",
      example: {
        sentence: "この電車は次の駅に止まりません。",
        romanization: "kono densha wa tsugi no eki ni tomarimasen.",
        translation: "Ce train ne s'arrête pas à la prochaine gare.",
      },
    },
    {
      term: "消す",
      reading: "けす",
      romanization: "kesu",
      segments: [{ text: "消", reading: "け" }, { text: "す" }],
      french: "Éteindre ; effacer",
      english: "To turn off; to erase",
      example: {
        sentence: "寝る前に電気を消します。",
        romanization: "neru mae ni denki o keshimasu.",
        translation: "J'éteins la lumière avant de dormir.",
      },
    },
    {
      term: "消える",
      reading: "きえる",
      romanization: "kieru",
      segments: [{ text: "消", reading: "き" }, { text: "える" }],
      french: "S'éteindre ; disparaître",
      english: "To go out; to disappear",
      example: {
        sentence: "急に電気が消えました。",
        romanization: "kyuu ni denki ga kiemashita.",
        translation: "La lumière s'est éteinte d'un coup.",
      },
    },
    {
      term: "つける",
      reading: "つける",
      romanization: "tsukeru",
      french: "Allumer (un appareil, la lumière)",
      english: "To switch on",
      example: {
        sentence: "テレビをつけてもいいですか。",
        romanization: "terebi o tsukete mo ii desu ka.",
        translation: "Je peux allumer la télé ?",
      },
    },
    {
      term: "つく",
      reading: "つく",
      romanization: "tsuku",
      french: "S'allumer, être allumé",
      english: "To come on, to be switched on",
      example: {
        sentence: "隣の部屋の電気がついています。",
        romanization: "tonari no heya no denki ga tsuite imasu.",
        translation: "La lumière de la pièce d'à côté est allumée.",
      },
    },
    {
      term: "落とす",
      reading: "おとす",
      romanization: "otosu",
      segments: [{ text: "落", reading: "お" }, { text: "とす" }],
      french: "Faire tomber ; perdre (un objet)",
      english: "To drop; to lose",
      example: {
        sentence: "駅で財布を落としました。",
        romanization: "eki de saifu o otoshimashita.",
        translation: "J'ai perdu mon portefeuille à la gare.",
      },
    },
    {
      term: "落ちる",
      reading: "おちる",
      romanization: "ochiru",
      segments: [{ text: "落", reading: "お" }, { text: "ちる" }],
      french: "Tomber",
      english: "To fall",
      example: {
        sentence: "風で、木から葉が落ちました。",
        romanization: "kaze de, ki kara ha ga ochimashita.",
        translation: "Avec le vent, des feuilles sont tombées de l'arbre.",
      },
    },
    {
      term: "壊す",
      reading: "こわす",
      romanization: "kowasu",
      segments: [{ text: "壊", reading: "こわ" }, { text: "す" }],
      french: "Casser, abîmer",
      english: "To break, to damage",
      example: {
        sentence: "弟が私のカメラを壊しました。",
        romanization: "otouto ga watashi no kamera o kowashimashita.",
        translation: "Mon petit frère a cassé mon appareil photo.",
      },
    },
    {
      term: "壊れる",
      reading: "こわれる",
      romanization: "kowareru",
      segments: [{ text: "壊", reading: "こわ" }, { text: "れる" }],
      french: "Se casser, tomber en panne",
      english: "To break, to be broken",
      example: {
        sentence: "このパソコンは壊れています。",
        romanization: "kono pasokon wa kowarete imasu.",
        translation: "Cet ordinateur est en panne.",
      },
    },
    {
      term: "入れる",
      reading: "いれる",
      romanization: "ireru",
      segments: [{ text: "入", reading: "い" }, { text: "れる" }],
      french: "Mettre dedans, introduire",
      english: "To put in",
      example: {
        sentence: "コーヒーに砂糖を入れますか。",
        romanization: "koohii ni satou o iremasu ka.",
        translation: "Vous mettez du sucre dans votre café ?",
      },
    },
    {
      term: "窓",
      reading: "まど",
      romanization: "mado",
      segments: [{ text: "窓", reading: "まど" }],
      french: "La fenêtre",
      english: "Window",
    },
    {
      term: "財布",
      reading: "さいふ",
      romanization: "saifu",
      segments: [{ text: "財", reading: "さい" }, { text: "布", reading: "ふ" }],
      french: "Le portefeuille, le porte-monnaie",
      english: "Wallet, purse",
    },
  ],

  exercises: [
    {
      id: "unit-45-ex1",
      type: "comprehension",
      question: "Quelle phrase veut dire « La porte s'est ouverte » (sans agent) ?",
      correctAnswer: "ドアが開きました。",
      options: ["ドアが開きました。", "ドアを開けました。", "ドアを開きました。", "ドアが開けました。"],
      optionsHint: ["doa ga akimashita.", "doa o akemashita.", "doa o akimashita.", "doa ga akemashita."],
      optionsReading: ["ドアがあきました。", "ドアをあけました。", "ドアをあきました。", "ドアがあけました。"],
      hint: "Sans agent, la porte devient sujet : il faut l'intransitif et が.",
    },
    {
      id: "unit-45-ex2",
      type: "fill-blank",
      question: "隣の部屋の電気 ___ ついています。 (« La lumière de la pièce d'à côté est allumée. »)",
      correctAnswer: "が",
      options: ["が", "を", "に", "で"],
      optionsHint: ["ga", "o", "ni", "de"],
      hint: "つく est intransitif : la lumière est le sujet.",
    },
    {
      id: "unit-45-ex3",
      type: "fill-blank",
      question: "寒いので、窓を ___ ください。 (« Il fait froid, fermez la fenêtre s'il vous plaît. »)",
      correctAnswer: "閉めて",
      options: ["閉めて", "閉まって", "閉まりて", "閉めりて"],
      optionsHint: ["shimete", "shimatte", "shimarite", "shimerite"],
      optionsReading: ["しめて", "しまって", "しまりて", "しめりて"],
      hint: "La particule を annonce un verbe transitif ; il ne reste qu'à former la forme en て.",
    },
    {
      id: "unit-45-ex4",
      type: "comprehension",
      question: "Quel est l'intransitif qui correspond à 出す (« sortir quelque chose ») ?",
      correctAnswer: "出る",
      options: ["出る", "出させる", "出られる", "出える"],
      optionsHint: ["deru", "dasaseru", "derareru", "deeru"],
      optionsReading: ["でる", "ださせる", "でられる", "でえる"],
      hint: "Deuxième moule : す (transitif) face à une autre terminaison (intransitif).",
    },
    {
      id: "unit-45-ex5",
      type: "comprehension",
      question: "Que signifie 「窓が開いています」 ?",
      correctAnswer: "La fenêtre est ouverte.",
      options: [
        "La fenêtre est ouverte.",
        "Je suis en train d'ouvrir la fenêtre.",
        "La fenêtre est en train de s'ouvrir lentement.",
        "On peut ouvrir la fenêtre.",
      ],
      hint: "Intransitif de changement + ている : l'état qui reste après le changement.",
    },
    {
      id: "unit-45-ex6",
      type: "listen",
      question: "会議は十時に始まります。",
      correctAnswer: "La réunion commence à dix heures.",
      options: [
        "La réunion commence à dix heures.",
        "Je commence la réunion à dix heures.",
        "La réunion a commencé il y a dix minutes.",
        "La réunion se termine à dix heures.",
      ],
      hint: "始まる, intransitif : personne n'est désigné comme celui qui commence.",
    },
    {
      id: "unit-45-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Le bus s'est arrêté devant la gare. »",
      correctAnswer: "バスが駅の前で止まりました。",
      options: ["バスが", "駅の", "前で", "止まりました"],
      hint: "止まる est intransitif : le bus est sujet, avec が.",
    },
    {
      id: "unit-45-ex8",
      type: "translate",
      question: "Traduisez : « J'ai éteint la lumière. »",
      correctAnswer: "電気を消しました。",
      options: ["電気を消しました。", "電気が消えました。", "電気を消えました。", "電気が消しました。"],
      optionsHint: ["denki o keshimashita.", "denki ga kiemashita.", "denki o kiemashita.", "denki ga keshimashita."],
      optionsReading: ["でんきをけしました。", "でんきがきえました。", "でんきをきえました。", "でんきがけしました。"],
      hint: "C'est vous qui agissez : verbe en す, donc transitif, et を.",
    },
    {
      id: "unit-45-ex9",
      type: "fill-blank",
      question: "すみません、財布が ___ いますよ。 (« Excusez-moi, votre portefeuille est par terre. »)",
      correctAnswer: "落ちて",
      options: ["落ちて", "落として", "落ちして", "落とって"],
      optionsHint: ["ochite", "otoshite", "ochishite", "ototte"],
      optionsReading: ["おちて", "おとして", "おちして", "おとって"],
      hint: "Le portefeuille est sujet (が) : il faut l'intransitif, à l'état résultant.",
    },
    {
      id: "unit-45-ex10",
      type: "comprehension",
      question: "Vous avez cassé un verre chez des amis japonais. Quelle phrase est la plus polie ?",
      correctAnswer: "すみません、コップを割りました。",
      options: [
        "すみません、コップを割りました。",
        "すみません、コップが割れました。",
        "コップが割れていますね。",
        "コップが割れましたよ。",
      ],
      optionsHint: [
        "sumimasen, koppu o warimashita.",
        "sumimasen, koppu ga waremashita.",
        "koppu ga warete imasu ne.",
        "koppu ga waremashita yo.",
      ],
      hint: "Quand la faute est la vôtre, le verbe qui l'assume est le plus poli.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-32"],
};
