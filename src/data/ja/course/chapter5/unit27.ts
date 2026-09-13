import type { CourseUnit } from "@/types/course";

export const unit27: CourseUnit = {
  id: "unit-27",
  number: 27,
  chapter: 5,
  title: "Le style neutre : parler sans です ni ます",
  titleNative: "普通形（常体）",
  description:
    "Les quatre cases de la forme simple — verbes, adjectifs en い, adjectifs en な, noms — et la règle qui la rend obligatoire même dans une phrase polie : toute proposition enchâssée passe au neutre.",
  icon: "常",

  sections: [
    {
      title: "Deux registres pour la même phrase",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le japonais fait circuler chaque phrase dans deux styles. Le style poli, 敬体, est celui que vous pratiquez depuis le début : il se reconnaît à ses terminaisons en です et en ます. Le style neutre, 常体, aussi appelé forme simple ou 普通形, supprime cette couche. Ce ne sont pas deux langues ni deux niveaux de difficulté : l’ordre des mots, les particules et le vocabulaire sont rigoureusement identiques. Seul le dernier mot de la phrase change.",
        },
        {
          type: "example",
          native: "わたしは学生です。／ わたしは学生だ。",
          romanization: "watashi wa gakusei desu. / watashi wa gakusei da.",
          translation: "Je suis étudiant.",
          content:
            "Même sujet, même particule は, même nom. La bascule tient dans les deux derniers signes. C’est pour cela qu’on peut apprendre le neutre vite : il n’y a rien de nouveau à construire, seulement une terminaison à échanger.",
        },
        {
          type: "warning",
          content:
            "Le neutre n’est pas du japonais « mal parlé » ni une version relâchée à éviter. C’est un registre à part entière, choisi selon la relation avec l’interlocuteur. L’employer avec un inconnu, un commerçant ou un supérieur est une faute sociale nette ; à l’inverse, rester en です／ます avec un ami proche installe une distance froide que votre interlocuteur ressentira.",
        },
        {
          type: "text",
          content:
            "Vous croiserez le neutre dans quatre situations. Entre proches — famille, amis, camarades de promotion. Dans tout ce que l’on écrit pour soi : notes, journal intime. Dans la presse, les romans, les manuels et les rapports, où le poli serait ridicule. Et, quatrième cas, à l’intérieur de n’importe quelle proposition subordonnée, y compris quand la phrase se termine poliment. C’est ce dernier point, développé en fin d’unité, qui rend le neutre incontournable : même en ne parlant jamais familièrement, vous en avez besoin dans chaque phrase un peu complexe.",
        },
        {
          type: "tip",
          content:
            "Règle de survie au Japon : attendez qu’on vous propose de passer au neutre («　敬語はいらないよ　» ou «　タメ口でいいよ　») plutôt que de le décider seul. Comprendre le neutre vous sert dès aujourd’hui ; le produire vers un Japonais que vous connaissez peu peut attendre.",
        },
      ],
    },
    {
      title: "Les quatre cases : verbes, adjectifs, noms",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Chaque prédicat japonais tient dans un carré de quatre formes : non-passé et passé, croisés avec affirmatif et négatif. En poli, vous connaissez déjà ces quatre cases (行きます、行きません、行きました、行きませんでした). Le neutre a exactement la même architecture, avec d’autres terminaisons. Apprenez-le comme un carré, jamais comme une liste : c’est la structure qui se mémorise, pas les mots un par un.",
        },
        {
          type: "example",
          native: "行く ／ 行かない ／ 行った ／ 行かなかった",
          romanization: "iku / ikanai / itta / ikanakatta",
          translation: "Aller / ne pas aller / être allé / ne pas être allé",
          content:
            "Le non-passé neutre d’un verbe, c’est simplement la forme du dictionnaire. Le négatif est la forme en ない. Le passé affirmatif se calcule à partir de la forme en て en remplaçant て par た : 行って donne 行った. Le passé négatif conjugue ない comme un adjectif en い : ない → なかった. Aucune de ces quatre formes ne contient de politesse.",
        },
        {
          type: "example",
          native: "食べる ／ 食べない ／ 食べた ／ 食べなかった",
          romanization: "taberu / tabenai / tabeta / tabenakatta",
          translation: "Manger / ne pas manger / avoir mangé / ne pas avoir mangé",
          content:
            "Les verbes en る du deuxième groupe sont les plus réguliers : on retire る et on ajoute ない ou た. Les deux irréguliers suivent le même carré : する、しない、した、しなかった ; 来る（くる）、来ない（こない）、来た（きた）、来なかった（こなかった）. Notez que 来る change de voyelle à chaque case — c’est la seule vraie difficulté de mémorisation du système.",
        },
        {
          type: "example",
          native: "高い ／ 高くない ／ 高かった ／ 高くなかった",
          romanization: "takai / takakunai / takakatta / takaku nakatta",
          translation: "Cher / pas cher / était cher / n’était pas cher",
          content:
            "L’adjectif en い se conjugue seul, exactement comme au poli : la seule différence est qu’on retire です à la fin. 高いです devient 高い, 高かったです devient 高かった. Le cas de いい reste irrégulier au neutre aussi : いい、よくない、よかった、よくなかった.",
        },
        {
          type: "example",
          native: "静かだ ／ 静かじゃない ／ 静かだった ／ 静かじゃなかった",
          romanization: "shizuka da / shizuka ja nai / shizuka datta / shizuka ja nakatta",
          translation: "Calme / pas calme / était calme / n’était pas calme",
          content:
            "Adjectifs en な et noms partagent le même carré, puisque tous deux s’appuient sur だ : 学生だ、学生じゃない、学生だった、学生じゃなかった. La correspondance avec le poli est mécanique — です devient だ, でした devient だった, じゃないです devient じゃない, じゃなかったです devient じゃなかった.",
        },
        {
          type: "warning",
          content:
            "L’erreur que le francophone répète pendant des mois : appliquer じゃない à un adjectif en い. On dit 高くない, jamais 「高いじゃない」. Réflexe à installer : avant de nier, demandez-vous si le mot finit par い en tant qu’adjectif — si oui, c’est くない ; sinon, c’est じゃない.",
        },
        {
          type: "tip",
          content:
            "Entraînement rentable : prenez dix phrases polies que vous savez déjà dire et réécrivez-les au neutre, puis refaites le chemin inverse. Aller-retour dans les deux sens, pas seulement du poli vers le neutre — c’est la conversion inverse qui vous sauvera le jour où vous devrez reformuler poliment ce que vous venez d’entendre.",
        },
      ],
    },
    {
      title: "だ, le mot qu’on écrit plus qu’on ne le dit",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "だ est présenté partout comme « le です neutre », et c’est vrai grammaticalement. Mais les deux ne s’emploient pas symétriquement. です est obligatoire en fin de phrase polie ; だ, lui, disparaît très souvent en fin de phrase à l’oral. Prononcé, il sonne catégorique, un peu abrupt, et il est nettement marqué comme masculin. Dans la conversation ordinaire, et systématiquement dans le parler féminin, on le supprime purement et simplement : la phrase s’arrête sur le nom ou sur l’adjectif.",
        },
        {
          type: "example",
          native: "今日は休み。",
          romanization: "kyou wa yasumi.",
          translation: "Aujourd’hui, c’est congé.",
          content:
            "Aucun だ, et pourtant la phrase est complète et parfaitement naturelle. À l’écrit, dans un journal intime ou un article, on écrirait 今日は休みだ。 Retenez la répartition : だ à l’écrit, rien à l’oral. C’est l’exact inverse du réflexe francophone, qui cherche toujours un verbe être à poser quelque part.",
        },
        {
          type: "example",
          native: "この店、有名。",
          romanization: "kono mise, yuumei.",
          translation: "Ce restaurant, il est connu.",
          content:
            "Même mécanisme avec un adjectif en な. 有名 se suffit à lui-même en fin de phrase. Notez au passage la particule は escamotée après この店 : à l’oral neutre, は et を tombent très souvent, et une simple pause les remplace.",
        },
        {
          type: "warning",
          content:
            "だ ne se pose jamais derrière un adjectif en い. 「高いだ」、「おもしろいだ」 n’existent pas, dans aucun registre. L’adjectif en い porte déjà tout : temps, négation, et fin de phrase. Cette faute est immédiatement audible pour un Japonais.",
        },
        {
          type: "example",
          native: "明日は雨だと思う。",
          romanization: "ashita wa ame da to omou.",
          translation: "Je pense qu’il pleuvra demain.",
          content:
            "だ redevient obligatoire dès qu’il n’est plus en fin de phrase : devant と思う, devant から (雨だから), devant だろう. Ici le supprimer donne une phrase bancale. La règle pratique : だ tombe en fin de phrase, だ reste au milieu.",
        },
        {
          type: "tip",
          content:
            "La question au style neutre ne prend pas か : on monte simplement la voix. 行く？ (« tu y vas ? »), 学生？ (« tu es étudiant ? »), おいしい？ (« c’est bon ? »). Ajouter か au neutre — 行くか？ — sonne rude et très masculin, à réserver aux fictions. Notez aussi que devant l’intonation interrogative, だ disparaît toujours : 学生？ et non 「学生だ？」.",
        },
      ],
    },
    {
      title: "La règle qui rend le neutre obligatoire",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Voici le point qui justifie l’unité entière, et que beaucoup de manuels enterrent en note de bas de page. En japonais, la politesse se marque une seule fois, tout à la fin de la phrase. Tout ce qui est enchâssé à l’intérieur — proposition relative, subordonnée de temps, discours rapporté — se met obligatoirement au neutre, même quand la phrase principale se termine en です ou ます. Autrement dit : vous ne pouvez pas construire une phrase japonaise un peu longue sans maîtriser le 普通形.",
        },
        {
          type: "example",
          native: "これはわたしが読んだ本です。",
          romanization: "kore wa watashi ga yonda hon desu.",
          translation: "C’est un livre que j’ai lu.",
          content:
            "読んだ、au neutre, qualifie 本 ; c’est です en fin de phrase qui porte toute la politesse. 「読みました本です」 est agrammatical. Remarquez aussi le が et non は à l’intérieur de la relative : は ne franchit jamais la frontière d’une subordonnée.",
        },
        {
          type: "example",
          native: "時間があるとき、日記を書きます。",
          romanization: "jikan ga aru toki, nikki o kakimasu.",
          translation: "Quand j’ai le temps, j’écris mon journal.",
          content:
            "とき est un nom (« le moment »), donc ce qui le précède le qualifie comme une relative et passe au neutre : あるとき, et non 「ありますとき」. Le même raisonnement vaut pour 前に、あとで、ため.",
        },
        {
          type: "example",
          native: "田中さんは来ないと言いました。",
          romanization: "Tanaka-san wa konai to iimashita.",
          translation: "M. Tanaka a dit qu’il ne viendrait pas.",
          content:
            "と introduit le discours rapporté, et ce qui le précède reste au neutre : 来ない, jamais 「来ませんと」. La politesse de 言いました s’adresse à la personne à qui vous parlez maintenant, pas à Tanaka. Ce découplage est difficile pour un francophone, qui a l’habitude d’accorder tout le long de la phrase.",
        },
        {
          type: "warning",
          content:
            "Les deux fautes typiques à traquer dans votre propre production : 「読みました本です」 et 「雨ですと思います」. Dans les deux cas vous avez marqué la politesse deux fois. Une phrase japonaise n’a qu’un seul point de politesse, et il est toujours au bout.",
        },
        {
          type: "comparison",
          content:
            "Nuance à connaître : quelques conjonctions tolèrent le poli devant elles. 「忙しいですから、行きません」 et 「行きましたけど、だれもいませんでした」 sont corrects et même soignés. Mais とき, la relative et le と du discours rapporté n’acceptent jamais です／ます. Retenez la liste courte des tolérances (から、けど、が) plutôt que d’essayer de deviner au cas par cas.",
        },
        {
          type: "text",
          content:
            "Conclusion pratique : le neutre n’est pas le registre des débutants pressés d’avoir l’air décontractés, c’est la brique de base de toute la grammaire à venir. Les conditionnels, 〜つもり、〜ようだ、〜はず、〜かもしれない se branchent tous sur le 普通形. Si le carré des quatre formes n’est pas automatique, chacune de ces structures vous coûtera trois secondes de réflexion — et trois secondes, dans une conversation, c’est déjà trop.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Yuki et Ken sont amis de longue date et se parlent au neutre. En pleine conversation, Ken reçoit un appel de son 先輩 : tout son japonais bascule en une seconde.",
    lines: [
      {
        speaker: "ゆき",
        native: "ねえ、明日ひま？",
        romanization: "nee, ashita hima?",
        french: "Dis, tu es libre demain ?",
        note: "Question au neutre : pas de か, pas de だ, juste une intonation montante. 「ひまだ？」 serait brusque et très masculin.",
      },
      {
        speaker: "けん",
        native: "ううん、忙しい。仕事がある。",
        romanization: "uun, isogashii. shigoto ga aru.",
        french: "Non, je suis pris. J’ai du travail.",
        note: "忙しいです devient 忙しい, あります devient ある. On ne remplace rien : on retire la couche polie, un point c’est tout.",
      },
      {
        speaker: "ゆき",
        native: "じゃあ、来週は？",
        romanization: "jaa, raishuu wa?",
        french: "Alors la semaine prochaine ?",
        note: "Phrase suspendue sur は. Très fréquente au neutre comme au poli : on relance sans reformuler la question entière.",
      },
      {
        speaker: "けん",
        native: "来週は大丈夫だと思う。",
        romanization: "raishuu wa daijoubu da to omou.",
        french: "La semaine prochaine, ça devrait aller.",
        note: "Ici だ est obligatoire : il n’est plus en fin de phrase mais devant と思う. C’est exactement le だ qu’on supprimerait dans 「来週は大丈夫」.",
      },
      {
        speaker: "けん",
        native: "もしもし、田中です。はい、その記事はもう読みました。とてもおもしろいと思います。",
        romanization: "moshimoshi, Tanaka desu. hai, sono kiji wa mou yomimashita. totemo omoshiroi to omoimasu.",
        french: "Allô, Tanaka à l’appareil. Oui, cet article, je l’ai déjà lu. Je le trouve très intéressant.",
        note: "Tout repasse en です／ます pour le supérieur — sauf おもしろい, qui reste au neutre parce qu’il est enfermé dans la subordonnée en と. Un seul point de politesse, tout au bout.",
      },
      {
        speaker: "ゆき",
        native: "今の、先輩？",
        romanization: "ima no, senpai?",
        french: "C’était ton senpai ?",
        note: "今の = « celui de maintenant ». Le nom seul suffit à faire une question complète au neutre.",
      },
      {
        speaker: "けん",
        native: "うん。会社の人と話すときは丁寧に話す。",
        romanization: "un. kaisha no hito to hanasu toki wa teinei ni hanasu.",
        french: "Ouais. Quand je parle à quelqu’un du bureau, je parle poliment.",
        note: "Deux 話す dans la même phrase : le premier est au neutre parce qu’il précède とき, le second parce que Ken s’adresse à une amie. Même forme, deux raisons différentes.",
      },
    ],
  },

  keyPoints: [
    "Le neutre (常体, 普通形) et le poli (敬体) n’ont qu’une différence : la terminaison de la phrase. Ordre des mots, particules et vocabulaire sont identiques.",
    "Quatre cases à automatiser par famille : 行く／行かない／行った／行かなかった ; 高い／高くない／高かった／高くなかった ; 学生だ／学生じゃない／学生だった／学生じゃなかった.",
    "だ s’écrit mais se dit peu : en fin de phrase orale on le supprime (今日は休み。), alors qu’il redevient obligatoire au milieu (雨だと思う、雨だから).",
    "だ ne se met jamais après un adjectif en い, et la question neutre se fait par l’intonation seule, sans か : 行く？ おいしい？",
    "Règle décisive : la politesse ne se marque qu’une fois, à la fin. Toute relative, tout とき, tout discours rapporté en と passent au neutre — 「読んだ本です」, jamais 「読みました本です」.",
  ],

  vocabulary: [
    {
      term: "普通形",
      reading: "ふつうけい",
      romanization: "futsuukei",
      segments: [
        { text: "普通", reading: "ふつう" },
        { text: "形", reading: "けい" },
      ],
      french: "La forme neutre, la forme simple",
      english: "Plain form",
    },
    {
      term: "丁寧",
      reading: "ていねい",
      romanization: "teinei",
      segments: [{ text: "丁寧", reading: "ていねい" }],
      french: "Poli, soigné",
      english: "Polite, careful",
      example: {
        sentence: "先輩には丁寧に話す。",
        romanization: "senpai ni wa teinei ni hanasu.",
        translation: "Avec un senpai, on parle poliment.",
      },
    },
    {
      term: "敬語",
      reading: "けいご",
      romanization: "keigo",
      segments: [
        { text: "敬", reading: "けい" },
        { text: "語", reading: "ご" },
      ],
      french: "Le langage honorifique",
      english: "Honorific language",
    },
    {
      term: "会話",
      reading: "かいわ",
      romanization: "kaiwa",
      segments: [
        { text: "会", reading: "かい" },
        { text: "話", reading: "わ" },
      ],
      pitch: 0,
      french: "La conversation",
      english: "Conversation",
    },
    {
      term: "日記",
      reading: "にっき",
      romanization: "nikki",
      segments: [{ text: "日記", reading: "にっき" }],
      french: "Le journal intime",
      english: "Diary",
      example: {
        sentence: "毎晩、日記を書く。",
        romanization: "maiban, nikki o kaku.",
        translation: "J’écris mon journal tous les soirs.",
      },
    },
    {
      term: "新聞",
      reading: "しんぶん",
      romanization: "shinbun",
      segments: [
        { text: "新", reading: "しん" },
        { text: "聞", reading: "ぶん" },
      ],
      pitch: 0,
      french: "Le journal, la presse",
      english: "Newspaper",
      example: {
        sentence: "父は毎朝新聞を読む。",
        romanization: "chichi wa maiasa shinbun o yomu.",
        translation: "Mon père lit le journal tous les matins.",
      },
    },
    {
      term: "記事",
      reading: "きじ",
      romanization: "kiji",
      segments: [
        { text: "記", reading: "き" },
        { text: "事", reading: "じ" },
      ],
      pitch: 1,
      french: "L’article (de presse)",
      english: "Article",
    },
    {
      term: "先輩",
      reading: "せんぱい",
      romanization: "senpai",
      segments: [
        { text: "先", reading: "せん" },
        { text: "輩", reading: "ぱい" },
      ],
      pitch: 0,
      french: "L’aîné (dans une école, une entreprise)",
      english: "Senior colleague or student",
    },
    {
      term: "後輩",
      reading: "こうはい",
      romanization: "kouhai",
      segments: [
        { text: "後", reading: "こう" },
        { text: "輩", reading: "はい" },
      ],
      pitch: 0,
      french: "Le cadet (dans une école, une entreprise)",
      english: "Junior colleague or student",
    },
    {
      term: "親しい",
      reading: "したしい",
      romanization: "shitashii",
      segments: [
        { text: "親", reading: "した" },
        { text: "しい" },
      ],
      pitch: 3,
      french: "Proche, intime",
      english: "Close, intimate",
      example: {
        sentence: "親しい友だちには普通形を使う。",
        romanization: "shitashii tomodachi ni wa futsuukei o tsukau.",
        translation: "Avec les amis proches, on emploie la forme neutre.",
      },
    },
    {
      term: "思う",
      reading: "おもう",
      romanization: "omou",
      segments: [
        { text: "思", reading: "おも" },
        { text: "う" },
      ],
      pitch: 2,
      french: "Penser, trouver que",
      english: "To think",
      example: {
        sentence: "明日は雨だと思う。",
        romanization: "ashita wa ame da to omou.",
        translation: "Je pense qu’il pleuvra demain.",
      },
    },
    {
      term: "言う",
      reading: "いう",
      romanization: "iu",
      segments: [
        { text: "言", reading: "い" },
        { text: "う" },
      ],
      pitch: 0,
      french: "Dire",
      english: "To say",
    },
    {
      term: "知る",
      reading: "しる",
      romanization: "shiru",
      segments: [
        { text: "知", reading: "し" },
        { text: "る" },
      ],
      pitch: 0,
      french: "Savoir, apprendre (une information)",
      english: "To know, to find out",
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
      french: "Utiliser, employer",
      english: "To use",
    },
    {
      term: "場合",
      reading: "ばあい",
      romanization: "baai",
      segments: [
        { text: "場", reading: "ば" },
        { text: "合", reading: "あい" },
      ],
      pitch: 0,
      french: "Le cas, la situation",
      english: "Case, situation",
      example: {
        sentence: "この場合、です・ますは使わない。",
        romanization: "kono baai, desu masu wa tsukawanai.",
        translation: "Dans ce cas, on n’emploie pas です／ます.",
      },
    },
    {
      term: "有名",
      reading: "ゆうめい",
      romanization: "yuumei",
      segments: [
        { text: "有", reading: "ゆう" },
        { text: "名", reading: "めい" },
      ],
      pitch: 0,
      french: "Célèbre, connu",
      english: "Famous",
    },
    {
      term: "忙しい",
      reading: "いそがしい",
      romanization: "isogashii",
      segments: [
        { text: "忙", reading: "いそが" },
        { text: "しい" },
      ],
      pitch: 4,
      french: "Occupé, pris",
      english: "Busy",
      example: {
        sentence: "昨日は忙しかった。",
        romanization: "kinou wa isogashikatta.",
        translation: "Hier, j’étais débordé.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-27-ex1",
      type: "comprehension",
      question: "Quelle est la forme neutre passée de 行きます ?",
      correctAnswer: "行った",
      options: ["行った", "行いた", "行きた", "行かった"],
      optionsHint: ["itta", "iita", "ikita", "ikatta"],
      optionsReading: ["いった", "いいた", "いきた", "いかった"],
      hint: "行く est le seul verbe en く qui ne suit pas la règle いた.",
    },
    {
      id: "unit-27-ex2",
      type: "comprehension",
      question: "Quelle est la forme neutre négative de 高いです ?",
      correctAnswer: "高くない",
      options: ["高くない", "高いじゃない", "高いない", "高いだない"],
      optionsHint: ["takakunai", "takai ja nai", "takai nai", "takai da nai"],
      optionsReading: ["たかくない", "たかいじゃない", "たかいない", "たかいだない"],
      hint: "Un adjectif en い ne se nie jamais avec じゃない.",
    },
    {
      id: "unit-27-ex3",
      type: "fill-blank",
      question: "これはわたしが ___ 本です。 « C’est un livre que j’ai lu. » (読む)",
      correctAnswer: "読んだ",
      options: ["読んだ", "読みました", "読みた", "読いだ"],
      optionsHint: ["yonda", "yomimashita", "yomita", "yoida"],
      optionsReading: ["よんだ", "よみました", "よみた", "よいだ"],
      hint: "À l’intérieur d’une proposition relative, la politesse est interdite.",
    },
    {
      id: "unit-27-ex4",
      type: "fill-blank",
      question: "彼は学生 ___ 。 « Il n’est pas étudiant. » (style neutre, non-passé)",
      correctAnswer: "じゃない",
      options: ["じゃない", "くない", "だない", "じゃなかった"],
      optionsHint: ["ja nai", "kunai", "da nai", "ja nakatta"],
      optionsReading: ["じゃない", "くない", "だない", "じゃなかった"],
      hint: "学生 est un nom, et la phrase n’est pas au passé.",
    },
    {
      id: "unit-27-ex5",
      type: "listen",
      question: "昨日は忙しかったから、日記を書かなかった。",
      correctAnswer: "Hier j’étais débordé, donc je n’ai pas écrit mon journal.",
      options: [
        "Hier j’étais débordé, donc je n’ai pas écrit mon journal.",
        "Hier j’étais débordé, mais j’ai quand même écrit mon journal.",
        "Aujourd’hui je suis débordé, donc je n’écris pas mon journal.",
        "Hier je n’étais pas débordé, donc j’ai écrit mon journal.",
      ],
      hint: "Deux formes neutres passées : une affirmative, une négative.",
    },
    {
      id: "unit-27-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l’ordre : « Je pense qu’il pleuvra demain. »",
      correctAnswer: "明日は雨だと思う。",
      options: ["明日", "は", "雨", "だ", "と", "思う"],
      hint: "Le だ n’est pas en fin de phrase : il ne peut donc pas disparaître.",
    },
    {
      id: "unit-27-ex7",
      type: "comprehension",
      question: "Dans quel cas le style neutre est-il obligatoire, même pour quelqu’un qui parle toujours poliment ?",
      correctAnswer: "Dans une proposition subordonnée, même si la phrase principale se termine en です／ます",
      options: [
        "Dans une proposition subordonnée, même si la phrase principale se termine en です／ます",
        "Uniquement quand on s’adresse à un ami très proche",
        "Uniquement à l’écrit, jamais à l’oral",
        "Quand on s’adresse à un supérieur hiérarchique",
      ],
      hint: "La politesse ne se marque qu’une seule fois dans la phrase.",
    },
    {
      id: "unit-27-ex8",
      type: "translate",
      question: "Traduisez : « Je pense que ce livre est intéressant. »",
      correctAnswer: "この本はおもしろいと思います。",
      options: [
        "この本はおもしろいと思います。",
        "この本はおもしろいですと思います。",
        "この本はおもしろいだと思います。",
        "この本はおもしろかったと思います。",
      ],
      optionsHint: [
        "kono hon wa omoshiroi to omoimasu.",
        "kono hon wa omoshiroi desu to omoimasu.",
        "kono hon wa omoshiroi da to omoimasu.",
        "kono hon wa omoshirokatta to omoimasu.",
      ],
      hint: "Ni です ni だ derrière un adjectif en い placé devant と.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-26"],
};
