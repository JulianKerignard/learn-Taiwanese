import type { CourseUnit } from "@/types/course";

export const unit38: CourseUnit = {
  id: "unit-38",
  number: 46,
  chapter: 7,
  title: "Les auxiliaires d'aspect : ておく、てしまう、てある",
  titleNative: "アスペクトの補助動詞",
  description:
    "Trois auxiliaires en て qui ne changent pas l'action mais le regard porté sur elle : la préparer, l'achever ou la regretter, en constater le résultat. Et la paire 開いている / 開けてある, qui tombe à tous les examens.",
  icon: "済",

  sections: [
    {
      title: "〜ておく : préparer, ou laisser en l'état",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le verbe おく signifie « poser ». Accolé à une forme en て, il perd son sens propre et devient un auxiliaire d'aspect : l'action est faite en vue de plus tard, et son résultat est laissé en place. Deux emplois en découlent, et ils sont plus proches qu'ils n'en ont l'air. Premier emploi : faire par anticipation, en préparation de quelque chose — 予約しておく, 調べておく, 買っておく. Second emploi : laisser tel quel, ne pas défaire ce qui est fait — 窓を開けておく, そのままにしておく.",
        },
        {
          type: "example",
          native: "明日の会議のために、資料をコピーしておきます。",
          romanization: "ashita no kaigi no tame ni, shiryou o kopii shite okimasu.",
          translation: "Je vais photocopier les documents pour la réunion de demain.",
          content:
            "Sans ておく, 「資料をコピーします」 serait correct mais dirait seulement que l'action aura lieu. ておく ajoute l'information qui compte au bureau : c'est fait d'avance, et vous n'aurez plus à y penser demain. C'est cette nuance que le francophone laisse tomber, parce que le français la porte dans un adverbe (« à l'avance ») que l'on oublie de traduire.",
        },
        {
          type: "example",
          native: "暑いから、窓を開けておいてください。",
          romanization: "atsui kara, mado o akete oite kudasai.",
          translation: "Il fait chaud, laissez la fenêtre ouverte.",
          content:
            "Ici l'action est peut-être déjà faite : ce qu'on demande, c'est de ne pas revenir dessus. 〜ておいてください est d'ailleurs la formule standard des consignes au travail — 電気を消しておいてください, 名前を書いておいてください — parce qu'elle indique à la fois quoi faire et jusqu'à quand cela doit tenir.",
        },
        {
          type: "example",
          native: "レストランはもう予約しておいた。",
          romanization: "resutoran wa mou yoyaku shite oita.",
          translation: "J'ai déjà réservé le restaurant.",
          content:
            "Au passé, 〜ておいた dit « je m'en suis occupé, c'est réglé ». Entre amis, c'est la façon normale d'annoncer qu'on a pris les devants — et cela appelle en retour un ありがとう, là où 予約した serait un simple constat.",
        },
        {
          type: "tip",
          content:
            "À l'oral, ておく se contracte en とく et でおく en どく : 買っておく → 買っとく, 見ておく → 見とく, 読んでおく → 読んどく, 飲んでおく → 飲んどく. Au passé : 買っといた, 読んどいた. Vous n'êtes pas obligé de les produire, mais vous devez les reconnaître : dans une conversation entre collègues, la forme pleine est minoritaire.",
        },
        {
          type: "warning",
          content:
            "Ne confondez pas 〜ておく avec 〜ている. 「宿題をしておく」 = je fais les devoirs maintenant pour être tranquille plus tard. 「宿題をしている」 = je suis en train de les faire. L'auxiliaire おく ne parle jamais du moment de l'action, seulement de son utilité future.",
        },
      ],
    },
    {
      title: "〜てしまう : achever, ou regretter",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "しまう seul signifie « ranger, mettre de côté ». En auxiliaire, il porte l'idée qu'une action est allée jusqu'à son terme et qu'on ne revient pas dessus. De là deux valeurs qui coexistent dans la même forme : l'achèvement complet, et le regret devant l'irréversible. Le japonais ne les distingue pas grammaticalement — c'est le contexte, et lui seul, qui tranche. Un verbe volontaire avec 全部 ou もう penche vers l'achèvement ; un accident, une perte, un oubli penchent vers le regret.",
        },
        {
          type: "example",
          native: "昨日、その本を全部読んでしまった。",
          romanization: "kinou, sono hon o zenbu yonde shimatta.",
          translation: "Hier, j'ai lu tout le livre d'une traite.",
          content:
            "Valeur d'achèvement : l'action a été menée à son terme, il ne reste rien à lire. 全部 verrouille la lecture. Sans てしまう, 「全部読んだ」 dit le même fait ; てしまう ajoute la satisfaction de la chose bouclée — ou, selon le ton, la surprise d'y être arrivé si vite.",
        },
        {
          type: "example",
          native: "電車の中で財布をなくしてしまいました。",
          romanization: "densha no naka de saifu o nakushite shimaimashita.",
          translation: "J'ai perdu mon portefeuille dans le train.",
          content:
            "Valeur de regret : le verbe décrit un accident, et てしまう marque qu'on subit le résultat. Omettre l'auxiliaire (「財布をなくしました」) donne un ton de constat administratif, presque froid. Au コンビニ ou au poste de police, c'est bien なくしてしまいました que l'on entend.",
        },
        {
          type: "comparison",
          content:
            "忘れました annonce un fait ; 忘れてしまいました reconnaît une faute. La différence est la même qu'entre « j'ai oublié » et « j'ai fini par oublier, désolé ». C'est pourquoi てしまう apparaît si souvent dans les excuses : 遅れてしまってすみません、壊してしまいました.",
        },
        {
          type: "tip",
          content:
            "Contractions orales, très fréquentes : 〜てしまう → 〜ちゃう, 〜でしまう → 〜じゃう. La règle suit la forme en て du verbe. 忘れてしまった → 忘れちゃった ; 食べてしまう → 食べちゃう ; 飲んでしまった → 飲んじゃった ; 読んでしまう → 読んじゃう. La sonore で appelle じ, jamais ち.",
        },
        {
          type: "warning",
          content:
            "ちゃう et じゃう sont exclusivement oraux : dans un courriel professionnel ou un rapport, écrivez てしまう. Et n'abusez pas de l'auxiliaire : un apprenant qui met てしまう partout donne l'impression de s'excuser en permanence. Réservez-le aux cas où vous voulez vraiment marquer l'achèvement ou le regret.",
        },
        {
          type: "text",
          content:
            "Deux adverbes lèvent l'ambiguïté quand vous parlez et vous aident à repérer la valeur quand vous écoutez : うっかり (par inadvertance) et つい (malgré soi, sans le vouloir). 「うっかり忘れてしまった」 ne peut être qu'un regret. 「つい食べすぎちゃった」 dit qu'on n'a pas su s'arrêter. À l'inverse, もう et 全部 orientent vers l'achèvement.",
        },
      ],
    },
    {
      title: "〜てある face à 〜ている",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "C'est le point le plus discriminant de l'unité, et il repose sur une distinction que le français ne fait pas. 〜てある se construit sur un verbe transitif et décrit l'état qui résulte d'une action volontaire : quelqu'un a agi, dans un but, et le résultat est là sous vos yeux. L'auteur de l'action n'est pas nommé — il est simplement impliqué. L'objet, lui, se marque par が et non par を : 窓が開けてある.",
        },
        {
          type: "example",
          native: "窓が開いている。",
          romanization: "mado ga aite iru.",
          translation: "La fenêtre est ouverte.",
          content:
            "開く est intransitif : la fenêtre s'ouvre toute seule, grammaticalement parlant. 〜ている sur un verbe de changement d'état décrit donc le simple constat — elle est ouverte, point. Le vent, un oubli, une intention : la phrase ne dit rien de la cause et ne suppose aucun auteur.",
        },
        {
          type: "example",
          native: "窓が開けてある。",
          romanization: "mado ga akete aru.",
          translation: "La fenêtre a été laissée ouverte.",
          content:
            "開ける est transitif : quelqu'un a ouvert. Avec てある, la même fenêtre ouverte devient le signe d'une intention — on a aéré la pièce, on attend quelqu'un. C'est exactement la différence entre constater et interpréter, et c'est elle que testent les examens.",
        },
        {
          type: "comparison",
          content:
            "Les paires transitif / intransitif à maîtriser pour cette construction : 開ける / 開く, 閉める / 閉まる, つける / つく, 消す / 消える, 並べる / 並ぶ, 入れる / 入る. La forme en てある ne prend que la colonne de gauche. 「窓が開いてある」 est agrammatical, et c'est la faute la plus sanctionnée du chapitre.",
        },
        {
          type: "example",
          native: "机の上にメモが置いてある。",
          romanization: "tsukue no ue ni memo ga oite aru.",
          translation: "Un mot est posé sur le bureau.",
          content:
            "Traduction française plate, mais le japonais dit davantage : ce mot n'est pas tombé là, on l'a posé pour vous. C'est pour cela que てある abonde dans les descriptions de lieux — une chambre d'hôtel, une salle préparée, un bureau que l'on découvre au matin.",
        },
        {
          type: "warning",
          content:
            "Avec un verbe transitif, 〜ている ne décrit pas un état mais une action en cours : 「窓を開けている」 = il est en train d'ouvrir la fenêtre. Trois phrases, trois sens, et une seule fenêtre : 窓が開いている (elle est ouverte), 窓が開けてある (on l'a ouverte exprès), 窓を開けている (quelqu'un l'ouvre en ce moment). Relisez-les jusqu'à ce que le tri soit immédiat.",
        },
        {
          type: "comparison",
          content:
            "ておく et てある regardent la même situation depuis deux bouts. 予約しておいた se place du côté de celui qui a agi : je m'en suis chargé. 予約してある se place du côté du résultat : c'est réservé, la question est réglée. D'où le partage des rôles dans une équipe — celui qui a fait le travail dit ておいた, celui qui vérifie demande 〜してある？.",
        },
      ],
    },
    {
      title: "Choisir le bon auxiliaire",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Une procédure en deux questions suffit à trancher dans presque tous les cas. Première question : est-ce que je parle de l'action, ou de l'état qu'elle a laissé ? Si c'est l'état, c'est てある (ou ている avec un intransitif). Deuxième question, si c'est bien l'action : est-ce que je la fais en vue de plus tard, ou est-ce que je la mène à son terme ? En vue de plus tard, ておく. Menée à son terme — ou subie, ou regrettée — てしまう.",
        },
        {
          type: "example",
          native: "明日の準備はしてある。資料も印刷しておいた。ただ、名前を書くのを忘れてしまった。",
          romanization: "ashita no junbi wa shite aru. shiryou mo insatsu shite oita. tada, namae o kaku no o wasurete shimatta.",
          translation:
            "Les préparatifs de demain sont faits. J'ai aussi imprimé les documents. Seulement, j'ai oublié d'y écrire mon nom.",
          content:
            "Les trois auxiliaires dans trois phrases, et chacun à sa place : してある présente un état acquis, しておいた raconte une action d'anticipation, 忘れてしまった marque l'accident irréversible. Remplacez-les l'un par l'autre et le passage devient incohérent — c'est le meilleur test de compréhension que vous puissiez vous imposer.",
        },
        {
          type: "tip",
          content:
            "Entraînement de reconnaissance : prenez cinq phrases avec les formes pleines et prononcez-les contractées — 予約しておいた → 予約しといた, 忘れてしまった → 忘れちゃった, 読んでしまった → 読んじゃった. Faites-le à voix haute jusqu'à ce que la contraction se défasse automatiquement à l'écoute. C'est l'obstacle numéro un en conversation réelle.",
        },
        {
          type: "text",
          content:
            "Exercice de production, quotidien et court : chaque soir, décrivez votre lendemain en trois phrases, une par auxiliaire. Ce que vous avez déjà préparé (〜てある), ce que vous ferez ce soir pour être tranquille (〜ておく), ce que vous avez raté aujourd'hui (〜てしまった). La contrainte force à balayer les trois valeurs au lieu de rabattre tout sur celle que vous préférez.",
        },
        {
          type: "warning",
          content:
            "Piège de traduction depuis le français : « c'est réservé » se dit 予約してある et non 予約されている. Le passif existe en japonais, mais il attire l'attention sur celui qui subit l'action ; てある, lui, présente un état préparé pour vous. Dans la vie courante, てある est de loin le plus fréquent des deux.",
        },
        {
          type: "tip",
          content:
            "Là où ces formes se ramassent en quantité : les consignes affichées et les messages de collègues. Regardez les panneaux d'un ryokan ou d'une salle de réunion — 「靴はここに置いてあります」、「エアコンはつけておいてください」 — et vous verrez les trois auxiliaires travailler dans leur milieu naturel.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Fin d'après-midi dans un bureau, la veille d'une réunion avec un client. Une collègue expérimentée fait le point avec un nouvel arrivant.",
    lines: [
      {
        speaker: "先輩",
        native: "明日の会議の資料、もう印刷してある？",
        romanization: "ashita no kaigi no shiryou, mou insatsu shite aru?",
        french: "Les documents pour la réunion de demain, ils sont imprimés ?",
        note: "してある interroge sur l'état des choses, pas sur qui a fait quoi. C'est la question de vérification par excellence.",
      },
      {
        speaker: "後輩",
        native: "はい、昨日のうちに印刷しておきました。",
        romanization: "hai, kinou no uchi ni insatsu shite okimashita.",
        french: "Oui, je les ai imprimés dès hier.",
        note: "La réponse bascule sur ておく : celui qui a agi raconte son anticipation. 〜のうちに = « tant que c'était encore possible, avant que le délai passe ».",
      },
      {
        speaker: "先輩",
        native: "助かる。会議室の予約は？",
        romanization: "tasukaru. kaigishitsu no yoyaku wa?",
        french: "Ça m'arrange. Et la salle de réunion ?",
        note: "助かる, littéralement « je suis sauvée », est le remerciement standard entre collègues pour un travail déjà fait.",
      },
      {
        speaker: "後輩",
        native: "あ……予約するのを忘れてしまいました。すみません。",
        romanization: "a...... yoyaku suru no o wasurete shimaimashita. sumimasen.",
        french: "Ah… j'ai oublié de la réserver. Désolé.",
        note: "忘れました suffirait grammaticalement, mais てしまう reconnaît la faute. Dans une excuse au travail, l'auxiliaire n'est pas facultatif.",
      },
      {
        speaker: "先輩",
        native: "大丈夫。今から取っとくよ。あと、エアコンはつけておいてね。",
        romanization: "daijoubu. ima kara tottoku yo. ato, eakon wa tsukete oite ne.",
        french: "Pas de souci, je m'en occupe tout de suite. Et laisse la clim allumée.",
        note: "取っとく = contraction orale de 取っておく. Deuxième emploi de ておく dans つけておいて : allumer et laisser ainsi jusqu'à demain.",
      },
      {
        speaker: "後輩",
        native: "はい。窓も開けておきますか。",
        romanization: "hai. mado mo akete okimasu ka.",
        french: "Entendu. Faut-il aussi laisser la fenêtre ouverte ?",
      },
      {
        speaker: "先輩",
        native: "いや、窓はもう開けてある。朝、誰かが開けてくれたみたいだ。",
        romanization: "iya, mado wa mou akete aru. asa, dareka ga akete kureta mitai da.",
        french: "Non, la fenêtre est déjà ouverte — quelqu'un l'a ouverte ce matin, apparemment.",
        note: "開けてある et non 開いている : la collègue suppose une intention, et la phrase suivante nomme l'auteur qu'elle avait déjà en tête.",
      },
    ],
  },

  keyPoints: [
    "〜ておく = faire par anticipation, ou laisser en l'état : 予約しておく (réserver d'avance), 窓を開けておく (laisser la fenêtre ouverte). Contractions orales とく et どく : 買っとく、読んどく.",
    "〜てしまう porte deux valeurs qui coexistent — mener à son terme (全部読んでしまった) et subir ou regretter (財布をなくしてしまった) — et seul le contexte tranche : うっかり et つい orientent vers le regret, もう et 全部 vers l'achèvement.",
    "Contractions de てしまう : ちゃう après une forme en て, じゃう après une forme en で — 忘れちゃった、飲んじゃった. Strictement orales : à l'écrit, てしまう.",
    "〜てある décrit l'état résultant d'une action volontaire, avec un verbe transitif et l'objet marqué par が : 窓が開けてある = quelqu'un l'a ouverte exprès.",
    "〜ている sur un verbe intransitif décrit un état sans intention : 窓が開いている = la fenêtre est ouverte, sans rien dire de la cause. Et 窓を開けている, avec le transitif, veut dire « il est en train de l'ouvrir ».",
  ],

  vocabulary: [
    {
      term: "予約",
      reading: "よやく",
      romanization: "yoyaku",
      segments: [
        { text: "予", reading: "よ" },
        { text: "約", reading: "やく" },
      ],
      pitch: 0,
      french: "Une réservation ; réserver (予約する)",
      english: "Reservation, booking",
      example: {
        sentence: "ホテルはもう予約してある。",
        romanization: "hoteru wa mou yoyaku shite aru.",
        translation: "L'hôtel est déjà réservé.",
      },
    },
    {
      term: "準備",
      reading: "じゅんび",
      romanization: "junbi",
      segments: [
        { text: "準", reading: "じゅん" },
        { text: "備", reading: "び" },
      ],
      pitch: 1,
      french: "La préparation ; préparer (準備する)",
      english: "Preparation",
    },
    {
      term: "印刷",
      reading: "いんさつ",
      romanization: "insatsu",
      segments: [
        { text: "印", reading: "いん" },
        { text: "刷", reading: "さつ" },
      ],
      pitch: 0,
      french: "L'impression ; imprimer (印刷する)",
      english: "Printing",
    },
    {
      term: "資料",
      reading: "しりょう",
      romanization: "shiryou",
      segments: [
        { text: "資", reading: "し" },
        { text: "料", reading: "りょう" },
      ],
      pitch: 1,
      french: "Les documents, le dossier (de travail)",
      english: "Materials, documents",
    },
    {
      term: "会議室",
      reading: "かいぎしつ",
      romanization: "kaigishitsu",
      segments: [
        { text: "会", reading: "かい" },
        { text: "議", reading: "ぎ" },
        { text: "室", reading: "しつ" },
      ],
      french: "La salle de réunion",
      english: "Meeting room",
    },
    {
      term: "開ける",
      reading: "あける",
      romanization: "akeru",
      segments: [
        { text: "開", reading: "あ" },
        { text: "ける" },
      ],
      pitch: 0,
      french: "Ouvrir (transitif)",
      english: "To open (something)",
      example: {
        sentence: "窓が開けてある。",
        romanization: "mado ga akete aru.",
        translation: "La fenêtre a été laissée ouverte.",
      },
    },
    {
      term: "開く",
      reading: "あく",
      romanization: "aku",
      segments: [
        { text: "開", reading: "あ" },
        { text: "く" },
      ],
      pitch: 0,
      french: "S'ouvrir (intransitif)",
      english: "To open (by itself)",
    },
    {
      term: "閉める",
      reading: "しめる",
      romanization: "shimeru",
      segments: [
        { text: "閉", reading: "し" },
        { text: "める" },
      ],
      pitch: 0,
      french: "Fermer (transitif)",
      english: "To close (something)",
    },
    {
      term: "閉まる",
      reading: "しまる",
      romanization: "shimaru",
      segments: [
        { text: "閉", reading: "し" },
        { text: "まる" },
      ],
      pitch: 2,
      french: "Se fermer (intransitif)",
      english: "To close (by itself)",
    },
    {
      term: "置く",
      reading: "おく",
      romanization: "oku",
      segments: [
        { text: "置", reading: "お" },
        { text: "く" },
      ],
      pitch: 0,
      french: "Poser, laisser (quelque part)",
      english: "To put, to place",
    },
    {
      term: "並べる",
      reading: "ならべる",
      romanization: "naraberu",
      segments: [
        { text: "並", reading: "なら" },
        { text: "べる" },
      ],
      pitch: 0,
      french: "Aligner, disposer",
      english: "To line up, to arrange",
    },
    {
      term: "片付ける",
      reading: "かたづける",
      romanization: "katazukeru",
      segments: [
        { text: "片", reading: "かた" },
        { text: "付", reading: "づ" },
        { text: "ける" },
      ],
      french: "Ranger, débarrasser",
      english: "To tidy up, to put away",
    },
    {
      term: "消す",
      reading: "けす",
      romanization: "kesu",
      segments: [
        { text: "消", reading: "け" },
        { text: "す" },
      ],
      pitch: 0,
      french: "Éteindre ; effacer",
      english: "To turn off; to erase",
    },
    {
      term: "忘れる",
      reading: "わすれる",
      romanization: "wasureru",
      segments: [
        { text: "忘", reading: "わす" },
        { text: "れる" },
      ],
      pitch: 0,
      french: "Oublier",
      english: "To forget",
      example: {
        sentence: "うっかり傘を忘れてしまった。",
        romanization: "ukkari kasa o wasurete shimatta.",
        translation: "J'ai bêtement oublié mon parapluie.",
      },
    },
    {
      term: "落とす",
      reading: "おとす",
      romanization: "otosu",
      segments: [
        { text: "落", reading: "お" },
        { text: "とす" },
      ],
      pitch: 2,
      french: "Faire tomber ; perdre (un objet)",
      english: "To drop; to lose",
    },
    {
      term: "掃除",
      reading: "そうじ",
      romanization: "souji",
      segments: [
        { text: "掃", reading: "そう" },
        { text: "除", reading: "じ" },
      ],
      pitch: 0,
      french: "Le ménage ; nettoyer (掃除する)",
      english: "Cleaning",
    },
    {
      term: "うっかり",
      reading: "うっかり",
      romanization: "ukkari",
      french: "Par inadvertance, par étourderie",
      english: "Carelessly, absent-mindedly",
    },
    {
      term: "つい",
      reading: "つい",
      romanization: "tsui",
      french: "Malgré soi, sans le vouloir",
      english: "In spite of oneself",
    },
  ],

  exercises: [
    {
      id: "unit-38-ex1",
      type: "comprehension",
      question: "Quelle est la différence entre 窓が開いている et 窓が開けてある ?",
      correctAnswer: "開いている constate l'état ; 開けてある indique que quelqu'un l'a ouverte exprès",
      options: [
        "開いている constate l'état ; 開けてある indique que quelqu'un l'a ouverte exprès",
        "開いている est poli ; 開けてある est familier",
        "開いている est au présent ; 開けてある est au passé",
        "開いている se dit d'une porte ; 開けてある se dit d'une fenêtre",
      ],
      hint: "L'un des deux verbes est transitif, et cela change tout.",
    },
    {
      id: "unit-38-ex2",
      type: "fill-blank",
      question: "「明日のために、レストランを ___ 。」 (« je vais réserver le restaurant à l'avance »)",
      correctAnswer: "予約しておきます",
      options: ["予約しておきます", "予約してしまいます", "予約してあります", "予約しています"],
      optionsHint: [
        "yoyaku shite okimasu",
        "yoyaku shite shimaimasu",
        "yoyaku shite arimasu",
        "yoyaku shite imasu",
      ],
      optionsReading: ["よやくしておきます", "よやくしてしまいます", "よやくしてあります", "よやくしています"],
      hint: "Une action faite maintenant en prévision de plus tard.",
    },
    {
      id: "unit-38-ex3",
      type: "comprehension",
      question: "À l'oral, 「飲んでしまった」 se contracte en…",
      correctAnswer: "飲んじゃった",
      options: ["飲んじゃった", "飲んちゃった", "飲んどいた", "飲んである"],
      optionsHint: ["nonjatta", "nonchatta", "nondoita", "nonde aru"],
      optionsReading: ["のんじゃった", "のんちゃった", "のんどいた", "のんである"],
      hint: "La forme en で appelle une contraction sonore.",
    },
    {
      id: "unit-38-ex4",
      type: "fill-blank",
      question: "「うっかり電車に傘を ___ 。」 (« j'ai bêtement oublié mon parapluie dans le train »)",
      correctAnswer: "忘れてしまいました",
      options: ["忘れてしまいました", "忘れておきました", "忘れてありました", "忘れています"],
      optionsHint: [
        "wasurete shimaimashita",
        "wasurete okimashita",
        "wasurete arimashita",
        "wasurete imasu",
      ],
      optionsReading: ["わすれてしまいました", "わすれておきました", "わすれてありました", "わすれています"],
      hint: "うっかり annonce l'accident : l'auxiliaire doit marquer le regret.",
    },
    {
      id: "unit-38-ex5",
      type: "listen",
      question: "会議室はもう予約してあります。",
      correctAnswer: "La salle de réunion est déjà réservée.",
      options: [
        "La salle de réunion est déjà réservée.",
        "Je vais réserver la salle de réunion.",
        "J'ai oublié de réserver la salle de réunion.",
        "La salle de réunion est occupée en ce moment.",
      ],
      hint: "してあります présente un état acquis, pas une intention.",
    },
    {
      id: "unit-38-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Un mot est posé sur le bureau (on l'y a laissé exprès). »",
      correctAnswer: "机の上にメモが置いてある。",
      options: ["机", "の", "上", "に", "メモ", "が", "置いて", "ある"],
      hint: "Le lieu ouvre la phrase, et l'objet d'un てある se marque par が.",
    },
    {
      id: "unit-38-ex7",
      type: "comprehension",
      question: "Que demande 「エアコンはつけておいてください」 ?",
      correctAnswer: "Laisser la climatisation allumée",
      options: [
        "Laisser la climatisation allumée",
        "Éteindre la climatisation avant de partir",
        "Signaler qu'on a oublié d'allumer la climatisation",
        "Constater que la climatisation fonctionne",
      ],
      hint: "C'est le second emploi de ておく : ne pas défaire ce qui est fait.",
    },
    {
      id: "unit-38-ex8",
      type: "translate",
      question: "Traduisez, avec la nuance d'achèvement : « J'ai lu le livre en entier. »",
      correctAnswer: "本を全部読んでしまいました。",
      options: [
        "本を全部読んでしまいました。",
        "本を全部読んでおきました。",
        "本を全部読んであります。",
        "本を全部読んでいます。",
      ],
      optionsHint: [
        "hon o zenbu yonde shimaimashita.",
        "hon o zenbu yonde okimashita.",
        "hon o zenbu yonde arimasu.",
        "hon o zenbu yonde imasu.",
      ],
      optionsReading: [
        "ほんをぜんぶよんでしまいました。",
        "ほんをぜんぶよんでおきました。",
        "ほんをぜんぶよんであります。",
        "ほんをぜんぶよんでいます。",
      ],
      hint: "L'action est menée à son terme, pas préparée pour plus tard.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-37"],
};
