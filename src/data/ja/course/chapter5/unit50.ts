import type { CourseUnit } from "@/types/course";

export const unit50: CourseUnit = {
  id: "unit-50",
  number: 38,
  chapter: 5,
  title: "Situer une action dans le temps : ところ, ばかり, てから",
  titleNative: "時間の表現：〜ところ・〜たばかり・〜てから",
  description:
    "Sur le point de partir, en train de manger, tout juste arrivé : 〜ところ découpe une action en trois instants. Puis 〜たばかり pour ce qu'on ressent comme récent, 〜てから et 〜たあとで pour l'ordre des actions — et l'excuse la plus célèbre du Japon, celle du livreur de soba.",
  icon: "後",

  sections: [
    {
      title: "〜ところ : juste avant, pendant, juste après",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "ところ veut dire « l'endroit », et par extension « le moment précis ». Placé après un verbe, il situe le locuteur à un instant exact de l'action, et la forme du verbe choisit cet instant. Forme dictionnaire + ところ : on est sur le point de faire. Forme en ている + ところ : on est en plein dedans. Forme en た + ところ : on vient tout juste de finir.",
        },
        {
          type: "example",
          native: "今から出かけるところです。",
          romanization: "ima kara dekakeru tokoro desu.",
          translation: "Je suis sur le point de sortir.",
          content:
            "L'action n'a pas encore commencé, mais elle est imminente. C'est la réponse classique au téléphone quand on vous appelle au moment où vous enfilez vos chaussures.",
        },
        {
          type: "example",
          native: "今、晩ご飯を食べているところです。",
          romanization: "ima, bangohan o tabete iru tokoro desu.",
          translation: "Je suis en plein dîner.",
          content:
            "ているところ insiste davantage que ています seul : vous êtes au milieu de l'action, et c'est pour cela que vous ne pouvez pas faire autre chose. La phrase sert souvent d'excuse polie : « rappelle-moi plus tard ».",
        },
        {
          type: "example",
          native: "今、駅に着いたところです。",
          romanization: "ima, eki ni tsuita tokoro desu.",
          translation: "Je viens tout juste d'arriver à la gare.",
          content:
            "たところ désigne un passé immédiat, qui se compte en secondes ou en minutes. Le français dit « je viens de » ; le japonais dit « je suis au point où c'est fait ».",
        },
        {
          type: "tip",
          content:
            "Retenez la série avec un seul verbe : 食べるところ (sur le point de manger), 食べているところ (en train de manger), 食べたところ (je viens de manger). Trois photos du même instant, à quelques minutes d'écart.",
        },
      ],
    },
    {
      title: "〜たばかり : c'est encore tout récent",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Forme en た + ばかり : « venir de », mais au sens subjectif. たばかり ne mesure pas le temps écoulé, il dit que le locuteur ressent la chose comme récente. Cela peut être dix minutes comme six mois : 先月日本に来たばかりです (« je suis arrivé au Japon le mois dernier, c'est encore tout frais »).",
        },
        {
          type: "example",
          native: "このパソコンは先週買ったばかりなのに、もう壊れました。",
          romanization: "kono pasokon wa senshuu katta bakari na noni, mou kowaremashita.",
          translation: "J'ai acheté cet ordinateur la semaine dernière, et il est déjà en panne.",
          content:
            "たばかり + なのに (unité 37) : « alors que c'est encore tout neuf ». Le couple est très fréquent, parce que la nouveauté rend la panne ou l'erreur d'autant plus inattendue.",
        },
        {
          type: "comparison",
          content:
            "たところ est objectif et immédiat ; たばかり est subjectif et élastique. 今、起きたところです : je sors du lit à l'instant. 日本に来たばかりです : pour moi, c'est récent. 「先月日本に来たところです」 est faux : un mois ne peut pas être « l'instant même ».",
        },
        {
          type: "warning",
          content:
            "たばかり se comporte comme un nom : on dit 来たばかりです et 来たばかりなので, 来たばかりの人 (« quelqu'un qui vient d'arriver »). Ne l'enchaînez pas directement à un verbe : 「来たばかりします」 n'existe pas.",
        },
        {
          type: "tip",
          content:
            "Pour vous excuser de vos fautes en japonais, 日本語を始めたばかりなので… (« je viens de commencer le japonais, alors… ») est parfait. Les Japonais y répondront presque toujours par un compliment.",
        },
      ],
    },
    {
      title: "〜てから et 〜たあとで : l'ordre des actions",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Forme en て + から : « après avoir », « une fois que ». てから insiste sur l'ordre : la première action doit être faite avant que la seconde puisse commencer. Forme en た + あとで (ou nom + のあとで) : « après ». あとで situe simplement la seconde action plus tard, sans insister sur la condition préalable.",
        },
        {
          type: "example",
          native: "手を洗ってから、食べてください。",
          romanization: "te o aratte kara, tabete kudasai.",
          translation: "Lavez-vous les mains avant de manger. (litt. « mangez une fois que vous vous serez lavé les mains »)",
          content:
            "La consigne porte sur l'ordre : d'abord les mains, ensuite le repas. てから est le choix naturel pour une consigne, une recette ou un mode d'emploi.",
        },
        {
          type: "example",
          native: "授業のあとで、先生に質問しました。",
          romanization: "jugyou no ato de, sensei ni shitsumon shimashita.",
          translation: "Après le cours, j'ai posé une question au professeur.",
          content:
            "Nom + のあとで : le cours sert de repère temporel, sans lien de condition avec la question. On ne dit pas 「授業てから」 : てから ne s'accroche qu'à un verbe.",
        },
        {
          type: "text",
          content:
            "〜てから a un second emploi : il mesure le temps écoulé depuis un événement. 日本に来てから三年になります (« cela fait trois ans que je suis au Japon »), 卒業してから、一度も会っていません (« depuis la fin de nos études, nous ne nous sommes jamais revus »). あとで ne peut pas remplacer てから dans cet emploi.",
        },
        {
          type: "comparison",
          content:
            "Le contraire de あとで est 前に (unité 24) : 寝る前に歯を磨きます (« je me brosse les dents avant de dormir »), 歯を磨いたあとで寝ます (« je me couche après m'être brossé les dents »). Notez l'asymétrie : 前に suit la forme dictionnaire, あとで la forme en た — logique, puisque l'action de référence est à venir dans le premier cas et accomplie dans le second.",
        },
      ],
    },
    {
      title: "« Je viens de partir » : l'excuse du livreur de soba",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Au Japon, on se fait livrer depuis longtemps des plats de nouilles, les 出前. Quand un client impatient téléphone pour demander où en est sa commande, le restaurant répond invariablement : 今、出たところです (« le livreur vient tout juste de partir »). Souvent, bien sûr, rien n'est encore parti. L'expression そば屋の出前 (« la livraison du marchand de soba ») désigne depuis toute promesse de ce genre, faite pour gagner du temps.",
        },
        {
          type: "example",
          native: "すみません、今、家を出たところです！",
          romanization: "sumimasen, ima, ie o deta tokoro desu!",
          translation: "Désolé, je viens tout juste de partir de chez moi !",
          content:
            "La version moderne, dite par l'ami en retard au téléphone. Tout le monde la connaît, et beaucoup la prennent avec le sourire qu'elle mérite.",
        },
        {
          type: "text",
          content:
            "En entreprise, en revanche, la précision est de rigueur. On annonce où l'on en est avec ところ : ただいま資料を準備しているところです (« je suis en train de préparer les documents »), 今、会議が終わったところです (« la réunion vient de se terminer »). La phrase rassure l'interlocuteur : le travail avance, et on sait exactement où.",
        },
        {
          type: "tip",
          content:
            "Au téléphone, si l'on vous appelle au mauvais moment, 今、ちょっと出かけるところなので、あとでかけ直してもいいですか (« je suis sur le point de sortir, je peux vous rappeler ? ») est poli et parfaitement naturel.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Samedi, 18 h 50. Emma devait retrouver son collègue Sato à 19 heures devant la gare de Shibuya pour aller dîner. Sato l'appelle.",
    lines: [
      {
        speaker: "佐藤",
        native: "もしもし、エマさん？今、どこですか。",
        romanization: "moshimoshi, Ema-san? ima, doko desu ka.",
        french: "Allô, Emma ? Vous êtes où ?",
      },
      {
        speaker: "エマ",
        native: "すみません、今、家を出るところです。",
        romanization: "sumimasen, ima, ie o deru tokoro desu.",
        french: "Désolée, je suis sur le point de partir de chez moi.",
        note: "Forme dictionnaire + ところ : elle n'est pas encore sortie.",
      },
      {
        speaker: "佐藤",
        native: "えっ、まだ家ですか。",
        romanization: "e, mada ie desu ka.",
        french: "Quoi, vous êtes encore chez vous ?",
      },
      {
        speaker: "エマ",
        native: "仕事から帰ったばかりなんです。駅に着いてから、また電話しますね。",
        romanization: "shigoto kara kaetta bakari na n desu. eki ni tsuite kara, mata denwa shimasu ne.",
        french: "Je viens de rentrer du travail. Je vous rappelle dès que j'arrive à la gare.",
        note: "たばかり : un retour qu'elle ressent comme tout récent. てから : d'abord arriver à la gare, ensuite rappeler.",
      },
      {
        speaker: "佐藤",
        native: "分かりました。じゃ、ぼくは駅の本屋で待っています。",
        romanization: "wakarimashita. ja, boku wa eki no hon'ya de matte imasu.",
        french: "D'accord. Alors je vous attends à la librairie de la gare.",
      },
      {
        speaker: "エマ",
        native: "もしもし、佐藤さん？今、渋谷駅に着いたところです。",
        romanization: "moshimoshi, Satou-san? ima, Shibuya eki ni tsuita tokoro desu.",
        french: "Allô, Sato ? Je viens juste d'arriver à la gare de Shibuya.",
        note: "Trente minutes plus tard. たところ : l'arrivée date de quelques secondes.",
      },
      {
        speaker: "佐藤",
        native: "よかった。ちょうど本を買ったところです。今から改札に行きますね。",
        romanization: "yokatta. choudo hon o katta tokoro desu. ima kara kaisatsu ni ikimasu ne.",
        french: "Parfait. Je viens justement d'acheter un livre. J'arrive au portillon.",
        note: "ちょうど + たところ : « à l'instant même ».",
      },
      {
        speaker: "エマ",
        native: "お待たせしてすみません。ご飯のあとで、コーヒーをごちそうします！",
        romanization: "omatase shite sumimasen. gohan no ato de, koohii o gochisou shimasu!",
        french: "Pardon de vous avoir fait attendre. Après le dîner, je vous offre un café !",
        note: "Nom + のあとで. お待たせする est la forme humble de 待たせる (faire attendre).",
      },
    ],
  },

  keyPoints: [
    "〜ところ situe un instant précis de l'action : forme dictionnaire + ところ (sur le point de), 〜ているところ (en plein dedans), 〜たところ (à l'instant même).",
    "〜たばかり : « venir de », au sens subjectif — ce que le locuteur ressent comme récent, que ce soit dix minutes ou six mois. Il se comporte comme un nom : 来たばかりです、来たばかりなので.",
    "〜てから insiste sur l'ordre : la première action est un préalable (手を洗ってから食べます). Il sert aussi à mesurer le temps écoulé : 日本に来てから三年になります.",
    "〜たあとで / nom + のあとで : simplement « après ». Son contraire est forme dictionnaire + 前に.",
    "今、出たところです est l'excuse proverbiale du livreur de soba (そば屋の出前). Au travail, ところ sert au contraire à annoncer précisément où l'on en est.",
  ],

  vocabulary: [
    {
      term: "出かける",
      reading: "でかける",
      romanization: "dekakeru",
      segments: [{ text: "出", reading: "で" }, { text: "かける" }],
      french: "Sortir (de chez soi)",
      english: "To go out",
    },
    {
      term: "着く",
      reading: "つく",
      romanization: "tsuku",
      segments: [{ text: "着", reading: "つ" }, { text: "く" }],
      french: "Arriver (à destination)",
      english: "To arrive",
      example: {
        sentence: "今、空港に着いたところです。",
        romanization: "ima, kuukou ni tsuita tokoro desu.",
        translation: "Je viens tout juste d'arriver à l'aéroport.",
      },
    },
    {
      term: "晩ご飯",
      reading: "ばんごはん",
      romanization: "bangohan",
      segments: [{ text: "晩", reading: "ばん" }, { text: "ご" }, { text: "飯", reading: "はん" }],
      french: "Le dîner, le repas du soir",
      english: "Dinner",
    },
    {
      term: "洗う",
      reading: "あらう",
      romanization: "arau",
      segments: [{ text: "洗", reading: "あら" }, { text: "う" }],
      french: "Laver",
      english: "To wash",
      example: {
        sentence: "手を洗ってから、食べてください。",
        romanization: "te o aratte kara, tabete kudasai.",
        translation: "Lavez-vous les mains avant de manger.",
      },
    },
    {
      term: "質問",
      reading: "しつもん",
      romanization: "shitsumon",
      segments: [{ text: "質", reading: "しつ" }, { text: "問", reading: "もん" }],
      french: "La question",
      english: "Question",
    },
    {
      term: "卒業する",
      reading: "そつぎょうする",
      romanization: "sotsugyou suru",
      segments: [{ text: "卒", reading: "そつ" }, { text: "業", reading: "ぎょう" }, { text: "する" }],
      french: "Obtenir son diplôme, finir ses études",
      english: "To graduate",
      example: {
        sentence: "大学を卒業してから、五年になります。",
        romanization: "daigaku o sotsugyou shite kara, gonen ni narimasu.",
        translation: "Cela fait cinq ans que j'ai fini l'université.",
      },
    },
    {
      term: "歯",
      reading: "は",
      romanization: "ha",
      segments: [{ text: "歯", reading: "は" }],
      french: "La dent",
      english: "Tooth",
    },
    {
      term: "磨く",
      reading: "みがく",
      romanization: "migaku",
      segments: [{ text: "磨", reading: "みが" }, { text: "く" }],
      french: "Brosser, polir",
      english: "To brush, to polish",
      example: {
        sentence: "寝る前に歯を磨きます。",
        romanization: "neru mae ni ha o migakimasu.",
        translation: "Je me brosse les dents avant de dormir.",
      },
    },
    {
      term: "浴びる",
      reading: "あびる",
      romanization: "abiru",
      segments: [{ text: "浴", reading: "あ" }, { text: "びる" }],
      french: "Prendre (une douche) ; être inondé de",
      english: "To take (a shower); to bathe in",
      example: {
        sentence: "運動してから、シャワーを浴びます。",
        romanization: "undou shite kara, shawaa o abimasu.",
        translation: "Je prends une douche après le sport.",
      },
    },
    {
      term: "ちょうど",
      reading: "ちょうど",
      romanization: "choudo",
      french: "Juste, exactement, pile",
      english: "Just, exactly",
    },
    {
      term: "さっき",
      reading: "さっき",
      romanization: "sakki",
      french: "Tout à l'heure, il y a un instant",
      english: "A moment ago",
    },
    {
      term: "出前",
      reading: "でまえ",
      romanization: "demae",
      segments: [{ text: "出", reading: "で" }, { text: "前", reading: "まえ" }],
      french: "La livraison de repas à domicile",
      english: "Food delivery",
    },
    {
      term: "準備する",
      reading: "じゅんびする",
      romanization: "junbi suru",
      segments: [{ text: "準", reading: "じゅん" }, { text: "備", reading: "び" }, { text: "する" }],
      french: "Préparer",
      english: "To prepare",
      example: {
        sentence: "今、会議の資料を準備しているところです。",
        romanization: "ima, kaigi no shiryou o junbi shite iru tokoro desu.",
        translation: "Je suis en train de préparer les documents de la réunion.",
      },
    },
    {
      term: "改札",
      reading: "かいさつ",
      romanization: "kaisatsu",
      segments: [{ text: "改", reading: "かい" }, { text: "札", reading: "さつ" }],
      french: "Le portillon, le contrôle des billets",
      english: "Ticket gate",
    },
    {
      term: "かけ直す",
      reading: "かけなおす",
      romanization: "kakenaosu",
      segments: [{ text: "かけ" }, { text: "直", reading: "なお" }, { text: "す" }],
      french: "Rappeler (au téléphone)",
      english: "To call back",
    },
    {
      term: "ごちそうする",
      reading: "ごちそうする",
      romanization: "gochisou suru",
      french: "Offrir (un repas, une boisson), inviter",
      english: "To treat (someone) to a meal",
    },
    {
      term: "空港",
      reading: "くうこう",
      romanization: "kuukou",
      segments: [{ text: "空", reading: "くう" }, { text: "港", reading: "こう" }],
      french: "L'aéroport",
      english: "Airport",
      example: {
        sentence: "飛行機が空港に着いたばかりです。",
        romanization: "hikouki ga kuukou ni tsuita bakari desu.",
        translation: "L'avion vient d'atterrir à l'aéroport.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-50-ex1",
      type: "fill-blank",
      question: "今から ___ ところです。 (« Je suis sur le point de sortir. »)",
      correctAnswer: "出かける",
      options: ["出かける", "出かけた", "出かけている", "出かけて"],
      optionsHint: ["dekakeru", "dekaketa", "dekakete iru", "dekakete"],
      optionsReading: ["でかける", "でかけた", "でかけている", "でかけて"],
      hint: "L'action n'a pas encore commencé.",
    },
    {
      id: "unit-50-ex2",
      type: "fill-blank",
      question: "今、駅に ___ ところです。 (« Je viens tout juste d'arriver à la gare. »)",
      correctAnswer: "着いた",
      options: ["着いた", "着く", "着いている", "着いて"],
      optionsHint: ["tsuita", "tsuku", "tsuite iru", "tsuite"],
      optionsReading: ["ついた", "つく", "ついている", "ついて"],
      hint: "L'action vient de s'achever : forme en た.",
    },
    {
      id: "unit-50-ex3",
      type: "comprehension",
      question: "Pourquoi 「先月日本に来たところです」 est-il incorrect ?",
      correctAnswer: "Parce que たところ désigne l'instant même ; pour un mois, il faut たばかり.",
      options: [
        "Parce que たところ désigne l'instant même ; pour un mois, il faut たばかり.",
        "Parce que ところ ne se place jamais après un verbe au passé.",
        "Parce que 来る ne peut pas se combiner avec ところ.",
        "Parce que 先月 exige la forme en ている.",
      ],
      hint: "L'une des deux formes est objective et immédiate, l'autre subjective.",
    },
    {
      id: "unit-50-ex4",
      type: "fill-blank",
      question: "手を ___ 、食べてください。 (« Lavez-vous les mains avant de manger. »)",
      correctAnswer: "洗ってから",
      options: ["洗ってから", "洗ったから", "洗うから", "洗ってまで"],
      optionsHint: ["aratte kara", "aratta kara", "arau kara", "aratte made"],
      optionsReading: ["あらってから", "あらったから", "あらうから", "あらってまで"],
      hint: "Forme en て + から : l'ordre des actions. 洗ったから voudrait dire « parce que je les ai lavées ».",
    },
    {
      id: "unit-50-ex5",
      type: "comprehension",
      question: "Que signifie 「日本に来てから三年になります」 ?",
      correctAnswer: "Cela fait trois ans que je suis au Japon.",
      options: [
        "Cela fait trois ans que je suis au Japon.",
        "Je viendrai au Japon dans trois ans.",
        "Je suis venu au Japon pour trois ans.",
        "Il y a trois ans, j'étais sur le point de venir au Japon.",
      ],
      hint: "てから mesure le temps écoulé depuis un événement.",
    },
    {
      id: "unit-50-ex6",
      type: "listen",
      question: "今、晩ご飯を食べているところです。",
      correctAnswer: "Je suis en plein dîner.",
      options: [
        "Je suis en plein dîner.",
        "Je viens de finir de dîner.",
        "Je suis sur le point de dîner.",
        "Je dîne toujours à cet endroit.",
      ],
      hint: "〜ているところ : en plein dans l'action.",
    },
    {
      id: "unit-50-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Après le cours, j'ai posé une question au professeur. »",
      correctAnswer: "授業のあとで、先生に質問しました。",
      options: ["授業の", "あとで", "先生に", "質問しました"],
      hint: "Nom + のあとで, puis l'action.",
    },
    {
      id: "unit-50-ex8",
      type: "translate",
      question: "Traduisez : « J'ai acheté cet ordinateur la semaine dernière (il est encore tout neuf). »",
      correctAnswer: "このパソコンは先週買ったばかりです。",
      options: [
        "このパソコンは先週買ったばかりです。",
        "このパソコンは先週買ったところです。",
        "このパソコンは先週買うところです。",
        "このパソコンは先週買ってからです。",
      ],
      optionsHint: [
        "kono pasokon wa senshuu katta bakari desu.",
        "kono pasokon wa senshuu katta tokoro desu.",
        "kono pasokon wa senshuu kau tokoro desu.",
        "kono pasokon wa senshuu katte kara desu.",
      ],
      hint: "Une semaine ressentie comme récente : forme subjective.",
    },
    {
      id: "unit-50-ex9",
      type: "fill-blank",
      question: "寝る ___ 歯を磨きます。 (« Je me brosse les dents avant de dormir. »)",
      correctAnswer: "前に",
      options: ["前に", "あとで", "てから", "ところ"],
      optionsHint: ["mae ni", "ato de", "te kara", "tokoro"],
      hint: "Le contraire de あとで, après la forme dictionnaire.",
    },
    {
      id: "unit-50-ex10",
      type: "comprehension",
      question: "Que désigne l'expression 「そば屋の出前」 ?",
      correctAnswer: "Une promesse qu'on fait pour gagner du temps (« ça vient de partir »).",
      options: [
        "Une promesse qu'on fait pour gagner du temps (« ça vient de partir »).",
        "Un service particulièrement rapide et ponctuel.",
        "Un plat qu'on commande seulement le soir.",
        "Une livraison gratuite offerte aux clients fidèles.",
      ],
      hint: "Pensez à 今、出たところです.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-49"],
};
