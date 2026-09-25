import type { CourseUnit } from "@/types/course";

export const unit49: CourseUnit = {
  id: "unit-49",
  number: 37,
  chapter: 5,
  title: "Même si, alors que : ても, のに, けど",
  titleNative: "逆接：〜ても・〜のに・〜けど",
  description:
    "Trois manières d'opposer deux idées, du plus neutre au plus chargé. 〜ても pour « même si » et « peu importe », 〜のに pour « alors que », avec la surprise ou le dépit qu'il transporte, et けど / が pour l'opposition simple — et pour la phrase qu'on laisse volontairement en suspens.",
  icon: "逆",

  sections: [
    {
      title: "〜ても : même si, peu importe",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Prenez la forme en て et ajoutez も : 雨が降っても, « même s'il pleut ». Le résultat annoncé dans la seconde partie ne dépend pas de la condition : il aura lieu de toute façon. Adjectif en い : 高い → 高くても ; adjectif en な et nom : 静かでも、雨でも. Au négatif : 行かなくても, « même sans y aller » — c'est la base du なくてもいい de l'unité 22.",
        },
        {
          type: "example",
          native: "雨が降っても、試合はあります。",
          romanization: "ame ga futte mo, shiai wa arimasu.",
          translation: "Même s'il pleut, le match a lieu.",
          content:
            "La pluie est une hypothèse, et elle ne change rien. C'est la différence avec 〜たら (« s'il pleut, alors… ») : たら relie la condition au résultat, ても coupe ce lien.",
        },
        {
          type: "example",
          native: "この服は高くても買いたいです。",
          romanization: "kono fuku wa takakute mo kaitai desu.",
          translation: "Même si ce vêtement est cher, je veux l'acheter.",
          content:
            "高い perd son い et prend くても. Même mécanique que la forme en て de l'adjectif (高くて), qu'il suffit de connaître.",
        },
        {
          type: "text",
          content:
            "Avec un mot interrogatif, 〜ても devient « peu importe » : いくら食べても太らない (« il a beau manger, il ne grossit pas »), 何度聞いても分からない (« j'ai beau l'écouter, je ne comprends pas »), だれに聞いても同じです (« qui que vous interrogiez, c'est pareil »). C'est l'équivalent de « avoir beau » et de « quel que soit ».",
        },
        {
          type: "tip",
          content:
            "Pour mémoriser, retenez ce couple : 雨が降ったら、行きません (« s'il pleut, je n'irai pas ») / 雨が降っても、行きます (« même s'il pleut, j'irai »). Même début, mais たら fait dépendre le résultat de la condition, alors que ても coupe ce lien : la décision finale s'inverse.",
        },
      ],
    },
    {
      title: "〜のに : alors que, et pourtant",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Forme neutre + のに : « alors que ». Contrairement à ても, のに ne parle pas d'une hypothèse mais d'un fait réel : la première partie est vraie, et la seconde contredit ce qu'on en attendait. Après un nom ou un adjectif en な, だ devient な : 日曜日なのに、静かなのに — la même règle que pour ので.",
        },
        {
          type: "example",
          native: "約束したのに、友だちは来ませんでした。",
          romanization: "yakusoku shita noni, tomodachi wa kimasen deshita.",
          translation: "Alors qu'il avait promis, mon ami n'est pas venu.",
          content:
            "Le fait (la promesse) est réel, et le résultat (l'absence) le contredit. のに ne se contente pas de l'opposition logique : il y ajoute un sentiment, ici la déception. En français, on dirait « et pourtant il avait promis ! ».",
        },
        {
          type: "example",
          native: "一生懸命勉強したのに、試験に落ちてしまいました。",
          romanization: "isshoukenmei benkyou shita noni, shiken ni ochite shimaimashita.",
          translation: "J'ai eu beau travailler de toutes mes forces, j'ai raté l'examen.",
          content:
            "試験に落ちる, « échouer à un examen » (l'intransitif de l'unité 33). 〜てしまいました renforce le regret ; cet auxiliaire sera étudié au niveau suivant, retenez ici qu'il accompagne souvent のに.",
        },
        {
          type: "warning",
          content:
            "Après のに, la seconde partie constate un fait : pas d'ordre, pas de demande, pas d'intention. 「雨なのに、出かけてください」 est faux. Pour « même s'il pleut, sortez », il faut ても : 雨でも、出かけてください.",
        },
        {
          type: "text",
          content:
            "En fin de phrase, のに exprime à lui seul un regret ou un reproche : もっと早く言ってくれればよかったのに (« tu aurais pu me le dire plus tôt »), 行けばよかったのに (« tu aurais dû y aller »). La seconde partie reste non dite, mais tout le monde l'entend.",
        },
        {
          type: "comparison",
          content:
            "雨が降っても、出かけます : hypothèse, je sortirai quoi qu'il arrive. 雨が降っているのに、出かけました : fait réel, et je souligne que c'était étonnant ou déraisonnable. ても est neutre et tourné vers l'avenir ; のに est émotif et presque toujours tourné vers le passé ou le présent.",
        },
      ],
    },
    {
      title: "けど et が : l'opposition simple, et la phrase ouverte",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "けど (plus complet : けれど, けれども) et が relient deux phrases avec le sens de « mais ». が est plus soutenu et domine à l'écrit et dans les échanges polis ; けど domine à l'oral. Les deux se placent après la forme polie comme après la forme neutre : 高いですが、おいしいです ; 高いけど、おいしい.",
        },
        {
          type: "example",
          native: "この店は高いですが、とてもおいしいです。",
          romanization: "kono mise wa takai desu ga, totemo oishii desu.",
          translation: "Ce restaurant est cher, mais c'est très bon.",
          content:
            "Opposition simple, sans émotion particulière. Comparez avec 高いのに、おいしくない (« c'est cher, et pourtant ce n'est même pas bon ») : のに ajoute l'agacement.",
        },
        {
          type: "text",
          content:
            "けど et が ont un second emploi, plus japonais encore : ils introduisent un sujet sans opposer quoi que ce soit, comme « au fait » ou « voilà ». すみませんが、駅はどこですか ; 来週のことですけど、… On pose le contexte, puis on arrive à la question.",
        },
        {
          type: "example",
          native: "あのう、この近くに郵便局があると聞いたんですけど…",
          romanization: "anou, kono chikaku ni yuubinkyoku ga aru to kiita n desu kedo...",
          translation: "Euh, on m'a dit qu'il y avait une poste près d'ici…",
          content:
            "La phrase s'arrête sur けど, et la question (« où est-elle ? ») n'est jamais posée. L'interlocuteur la devine et vous répond. C'est la façon la plus courante et la plus polie d'aborder un inconnu.",
        },
        {
          type: "tip",
          content:
            "Pour choisir entre les trois : hypothèse ou « quel que soit » → ても ; fait réel qui déçoit ou étonne → のに ; simple « mais », sans émotion → けど / が.",
        },
      ],
    },
    {
      title: "Se plaindre sans accuser",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "のに est un mot chargé. Il est parfaitement naturel quand vous parlez de vous-même (早く寝たのに、眠い, « je me suis couché tôt et pourtant j'ai sommeil ») ou dans une conversation entre proches. Dirigé vers quelqu'un en face de vous, en revanche, il devient un reproche direct, et le japonais évite ce genre de confrontation ouverte.",
        },
        {
          type: "example",
          native: "三時に来ると言ったのに…",
          romanization: "sanji ni kuru to itta noni...",
          translation: "Tu avais pourtant dit que tu viendrais à trois heures…",
          content:
            "Entre amis, c'est une plainte ordinaire. Dit à un collègue ou à un client, c'est une accusation. Même à mi-voix, la phrase est parfaitement claire.",
        },
        {
          type: "text",
          content:
            "Face à un supérieur ou à un client, on préfère donc けど ou が suivi d'une question, qui présente le problème sans désigner de coupable : 三時のお約束だったと思うんですが… (« je crois que nous avions rendez-vous à trois heures… »). La responsabilité n'est pas nommée, et l'autre peut s'excuser de lui-même.",
        },
        {
          type: "warning",
          content:
            "Méfiez-vous du ton de la phrase qu'on vous adresse : un のに en fin de phrase, dit par un Japonais, signale presque toujours un mécontentement ou un regret, même si le reste est poli. C'est un indice à ne pas manquer.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Un dimanche matin, Marie et son ami Kenta devaient aller voir un match de baseball. Il pleut, et Kenta arrive en retard au point de rendez-vous.",
    lines: [
      {
        speaker: "健太",
        native: "ごめん、遅くなって。",
        romanization: "gomen, osoku natte.",
        french: "Désolé, je suis en retard.",
      },
      {
        speaker: "マリー",
        native: "もう、十時に来るって言ったのに。三十分も待ったよ。",
        romanization: "mou, juuji ni kuru tte itta noni. sanjuppun mo matta yo.",
        french: "Enfin ! Tu avais dit que tu serais là à dix heures. J'ai attendu une demi-heure.",
        note: "のに entre amis : la plainte est normale et sans gravité. Registre familier, sans です ni ます ; って y remplace le と de citation.",
      },
      {
        speaker: "健太",
        native: "本当にごめん。電車が止まっていたんだ。",
        romanization: "hontou ni gomen. densha ga tomatte ita n da.",
        french: "Vraiment désolé. Le train était arrêté.",
        note: "止まる (intransitif) + ていた : Kenta ne désigne aucun coupable.",
      },
      {
        speaker: "マリー",
        native: "そうなんだ。でも、雨が降っているけど、試合はあるの？",
        romanization: "sou nan da. demo, ame ga futte iru kedo, shiai wa aru no?",
        french: "Ah d'accord. Mais il pleut ; le match a quand même lieu ?",
        note: "けど introduit la situation, puis la question arrive.",
      },
      {
        speaker: "健太",
        native: "うん、ドームだから、雨が降っても大丈夫。",
        romanization: "un, doomu da kara, ame ga futte mo daijoubu.",
        french: "Oui, c'est un stade couvert, alors même s'il pleut, pas de problème.",
        note: "降っても : l'hypothèse ne change rien au résultat.",
      },
      {
        speaker: "マリー",
        native: "よかった。チケット、いくら探してもなかったから、心配したよ。",
        romanization: "yokatta. chiketto, ikura sagashite mo nakatta kara, shinpai shita yo.",
        french: "Tant mieux. J'avais beau chercher, il n'y avait plus de billets, alors je m'inquiétais.",
        note: "いくら + ても : « avoir beau ».",
      },
      {
        speaker: "健太",
        native: "大丈夫、ぼくが二枚持ってるから。行こう！",
        romanization: "daijoubu, boku ga nimai motteru kara. ikou!",
        french: "T'inquiète, j'en ai deux. On y va !",
        note: "持ってる : contraction familière de 持っている.",
      },
    ],
  },

  keyPoints: [
    "Forme en て + も : « même si ». 雨が降っても、高くても、静かでも、雨でも. Le résultat a lieu quoi qu'il arrive.",
    "Mot interrogatif + ても : « avoir beau », « quel que soit ». いくら食べても、何度聞いても、だれに聞いても.",
    "Forme neutre + のに (な + のに après un nom ou un adjectif en な) : « alors que », sur un fait réel qui contredit l'attente, avec surprise ou dépit. Jamais d'ordre ni de demande après のに.",
    "けど / が : « mais », sans émotion ; が est plus soutenu. Ils servent aussi à introduire un sujet et à laisser une question en suspens : 郵便局があると聞いたんですけど…",
    "のに dirigé vers quelqu'un est un reproche. Face à un supérieur ou à un client, préférez けど / が et une question.",
  ],

  vocabulary: [
    {
      term: "試合",
      reading: "しあい",
      romanization: "shiai",
      segments: [{ text: "試", reading: "し" }, { text: "合", reading: "あい" }],
      french: "Le match, la compétition",
      english: "Match, game",
    },
    {
      term: "約束",
      reading: "やくそく",
      romanization: "yakusoku",
      segments: [{ text: "約", reading: "やく" }, { text: "束", reading: "そく" }],
      french: "La promesse ; le rendez-vous",
      english: "Promise; appointment",
      example: {
        sentence: "約束したのに、来ませんでした。",
        romanization: "yakusoku shita noni, kimasen deshita.",
        translation: "Il avait promis, et pourtant il n'est pas venu.",
      },
    },
    {
      term: "一生懸命",
      reading: "いっしょうけんめい",
      romanization: "isshoukenmei",
      segments: [
        { text: "一", reading: "いっ" },
        { text: "生", reading: "しょう" },
        { text: "懸", reading: "けん" },
        { text: "命", reading: "めい" },
      ],
      french: "De toutes ses forces, avec acharnement",
      english: "With all one's might",
    },
    {
      term: "太る",
      reading: "ふとる",
      romanization: "futoru",
      segments: [{ text: "太", reading: "ふと" }, { text: "る" }],
      french: "Grossir, prendre du poids",
      english: "To gain weight",
      example: {
        sentence: "弟はいくら食べても太りません。",
        romanization: "otouto wa ikura tabete mo futorimasen.",
        translation: "Mon petit frère a beau manger, il ne grossit pas.",
      },
    },
    {
      term: "何度",
      reading: "なんど",
      romanization: "nando",
      segments: [{ text: "何", reading: "なん" }, { text: "度", reading: "ど" }],
      french: "Combien de fois ; maintes fois",
      english: "How many times; many times",
      example: {
        sentence: "何度聞いても、分かりません。",
        romanization: "nando kiite mo, wakarimasen.",
        translation: "J'ai beau l'écouter, je ne comprends pas.",
      },
    },
    {
      term: "探す",
      reading: "さがす",
      romanization: "sagasu",
      segments: [{ text: "探", reading: "さが" }, { text: "す" }],
      french: "Chercher",
      english: "To look for",
    },
    {
      term: "眠い",
      reading: "ねむい",
      romanization: "nemui",
      segments: [{ text: "眠", reading: "ねむ" }, { text: "い" }],
      french: "Avoir sommeil",
      english: "Sleepy",
      example: {
        sentence: "早く寝たのに、眠いです。",
        romanization: "hayaku neta noni, nemui desu.",
        translation: "Je me suis couché tôt, et pourtant j'ai sommeil.",
      },
    },
    {
      term: "郵便局",
      reading: "ゆうびんきょく",
      romanization: "yuubinkyoku",
      segments: [{ text: "郵", reading: "ゆう" }, { text: "便", reading: "びん" }, { text: "局", reading: "きょく" }],
      french: "Le bureau de poste",
      english: "Post office",
    },
    {
      term: "心配する",
      reading: "しんぱいする",
      romanization: "shinpai suru",
      segments: [{ text: "心", reading: "しん" }, { text: "配", reading: "ぱい" }, { text: "する" }],
      french: "S'inquiéter",
      english: "To worry",
    },
    {
      term: "大丈夫",
      reading: "だいじょうぶ",
      romanization: "daijoubu",
      segments: [{ text: "大", reading: "だい" }, { text: "丈", reading: "じょう" }, { text: "夫", reading: "ぶ" }],
      french: "Ça va, pas de problème",
      english: "All right, OK",
    },
    {
      term: "残念",
      reading: "ざんねん",
      romanization: "zannen",
      segments: [{ text: "残", reading: "ざん" }, { text: "念", reading: "ねん" }],
      french: "Dommage, regrettable",
      english: "Regrettable, a pity",
      example: {
        sentence: "楽しみにしていたのに、残念です。",
        romanization: "tanoshimi ni shite ita noni, zannen desu.",
        translation: "Je m'en faisais une joie, c'est dommage.",
      },
    },
    {
      term: "中止",
      reading: "ちゅうし",
      romanization: "chuushi",
      segments: [{ text: "中", reading: "ちゅう" }, { text: "止", reading: "し" }],
      french: "L'annulation, l'arrêt",
      english: "Cancellation",
      example: {
        sentence: "雨で、試合は中止になりました。",
        romanization: "ame de, shiai wa chuushi ni narimashita.",
        translation: "Le match a été annulé à cause de la pluie.",
      },
    },
    {
      term: "晴れる",
      reading: "はれる",
      romanization: "hareru",
      segments: [{ text: "晴", reading: "は" }, { text: "れる" }],
      french: "Se dégager, faire beau",
      english: "To clear up, to be sunny",
      example: {
        sentence: "天気予報は晴れと言っていたのに、雨が降っています。",
        romanization: "tenki yohou wa hare to itte ita noni, ame ga futte imasu.",
        translation: "La météo annonçait du beau temps, et pourtant il pleut.",
      },
    },
    {
      term: "天気予報",
      reading: "てんきよほう",
      romanization: "tenkiyohou",
      segments: [
        { text: "天", reading: "てん" },
        { text: "気", reading: "き" },
        { text: "予", reading: "よ" },
        { text: "報", reading: "ほう" },
      ],
      french: "La météo, les prévisions",
      english: "Weather forecast",
    },
    {
      term: "無料",
      reading: "むりょう",
      romanization: "muryou",
      segments: [{ text: "無", reading: "む" }, { text: "料", reading: "りょう" }],
      french: "Gratuit",
      english: "Free of charge",
      example: {
        sentence: "無料なのに、だれも来ませんでした。",
        romanization: "muryou na noni, dare mo kimasen deshita.",
        translation: "C'était gratuit, et pourtant personne n'est venu.",
      },
    },
    {
      term: "せっかく",
      reading: "せっかく",
      romanization: "sekkaku",
      french: "Pour une fois que ; exprès, avec tant de peine",
      english: "With much trouble; especially",
      example: {
        sentence: "せっかく作ったのに、だれも食べませんでした。",
        romanization: "sekkaku tsukutta noni, dare mo tabemasen deshita.",
        translation: "Je m'étais donné la peine de cuisiner, et personne n'a mangé.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-49-ex1",
      type: "fill-blank",
      question: "雨が ___ 、試合はあります。 (« Même s'il pleut, le match a lieu. »)",
      correctAnswer: "降っても",
      options: ["降っても", "降ったら", "降るのに", "降れば"],
      optionsHint: ["futte mo", "futtara", "furu noni", "fureba"],
      optionsReading: ["ふっても", "ふったら", "ふるのに", "ふれば"],
      hint: "La condition ne change rien au résultat.",
    },
    {
      id: "unit-49-ex2",
      type: "fill-blank",
      question: "約束した ___ 、友だちは来ませんでした。 (« Alors qu'il avait promis, mon ami n'est pas venu. »)",
      correctAnswer: "のに",
      options: ["のに", "ても", "ので", "ために"],
      optionsHint: ["noni", "te mo", "node", "tame ni"],
      hint: "Un fait réel, contredit par ce qui suit, avec de la déception.",
    },
    {
      id: "unit-49-ex3",
      type: "comprehension",
      question: "Quelle est la forme correcte de « même si c'est cher » ?",
      correctAnswer: "高くても",
      options: ["高くても", "高いても", "高でも", "高いでも"],
      optionsHint: ["takakute mo", "takaite mo", "takade mo", "takai de mo"],
      optionsReading: ["たかくても", "たかいても", "たかでも", "たかいでも"],
      hint: "L'adjectif en い perd son い et prend くても.",
    },
    {
      id: "unit-49-ex4",
      type: "comprehension",
      question: "Pourquoi 「雨なのに、出かけてください」 est-il incorrect ?",
      correctAnswer: "Parce qu'une demande ne peut pas suivre のに ; il faut 雨でも.",
      options: [
        "Parce qu'une demande ne peut pas suivre のに ; il faut 雨でも.",
        "Parce que のに ne se place jamais après un nom.",
        "Parce que のに exige un verbe au passé.",
        "Parce que 雨 est un nom et exige だのに.",
      ],
      hint: "Après のに, la seconde partie constate un fait.",
    },
    {
      id: "unit-49-ex5",
      type: "fill-blank",
      question: "何度 ___ 、分かりません。 (« J'ai beau l'écouter, je ne comprends pas. »)",
      correctAnswer: "聞いても",
      options: ["聞いても", "聞いたのに", "聞けば", "聞くけど"],
      optionsHint: ["kiite mo", "kiita noni", "kikeba", "kiku kedo"],
      optionsReading: ["きいても", "きいたのに", "きけば", "きくけど"],
      hint: "Mot interrogatif + ても : « avoir beau ».",
    },
    {
      id: "unit-49-ex6",
      type: "listen",
      question: "天気予報は晴れと言っていたのに、雨が降っています。",
      correctAnswer: "La météo annonçait du beau temps, et pourtant il pleut.",
      options: [
        "La météo annonçait du beau temps, et pourtant il pleut.",
        "La météo annonce de la pluie, alors je reste chez moi.",
        "Même s'il pleut, la météo dit qu'il fera beau demain.",
        "Il pleut, mais la météo n'en a pas parlé.",
      ],
      hint: "のに : un fait réel contredit par ce qui arrive.",
    },
    {
      id: "unit-49-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Ce restaurant est cher, mais c'est très bon. »",
      correctAnswer: "この店は高いですが、とてもおいしいです。",
      options: ["この店は", "高いですが", "とても", "おいしいです"],
      hint: "が se place après la forme polie de la première phrase.",
    },
    {
      id: "unit-49-ex8",
      type: "translate",
      question: "Traduisez : « Même si c'est calme, je n'arrive pas à dormir. »",
      correctAnswer: "静かでも、眠れません。",
      options: ["静かでも、眠れません。", "静かなので、眠れません。", "静かくても、眠れません。", "静かだても、眠れません。"],
      optionsHint: ["shizuka de mo, nemuremasen.", "shizuka na node, nemuremasen.", "shizukakute mo, nemuremasen.", "shizuka date mo, nemuremasen."],
      optionsReading: ["しずかでも、ねむれません。", "しずかなので、ねむれません。", "しずかくても、ねむれません。", "しずかだても、ねむれません。"],
      hint: "Hypothèse, et adjectif en な : de + も.",
    },
    {
      id: "unit-49-ex9",
      type: "comprehension",
      question: "Vous abordez un passant pour trouver la poste. Quelle phrase est la plus naturelle ?",
      correctAnswer: "すみません、この近くに郵便局があると聞いたんですけど…",
      options: [
        "すみません、この近くに郵便局があると聞いたんですけど…",
        "郵便局があると聞いたのに…",
        "郵便局があっても、どこですか。",
        "郵便局はどこですか。教えてください。",
      ],
      optionsHint: [
        "sumimasen, kono chikaku ni yuubinkyoku ga aru to kiita n desu kedo...",
        "yuubinkyoku ga aru to kiita noni...",
        "yuubinkyoku ga atte mo, doko desu ka.",
        "yuubinkyoku wa doko desu ka. oshiete kudasai.",
      ],
      hint: "けど pose le contexte et laisse l'autre deviner la question.",
    },
    {
      id: "unit-49-ex10",
      type: "comprehension",
      question: "Une heure après l'heure prévue, votre client n'est toujours pas là. Vous l'appelez : que dites-vous ?",
      correctAnswer: "三時のお約束だったと思うんですが…",
      options: [
        "三時のお約束だったと思うんですが…",
        "三時に来ると言ったのに…",
        "三時に来ても、大丈夫です。",
        "三時に来たのに、遅かったです。",
      ],
      optionsHint: [
        "sanji no oyakusoku datta to omou n desu ga...",
        "sanji ni kuru to itta noni...",
        "sanji ni kite mo, daijoubu desu.",
        "sanji ni kita noni, osokatta desu.",
      ],
      hint: "Face à un client, présentez le problème sans accuser.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-48"],
};
