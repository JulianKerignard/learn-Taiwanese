import type { CourseUnit } from "@/types/course";

export const unit36: CourseUnit = {
  id: "unit-36",
  number: 44,
  title: "Exprimer une opinion nuancée",
  titleNative: "意見をやわらかく述べる",
  chapter: 6,
  description:
    "Le japonais gradue finement la distance entre l'affirmation et la suggestion. Placer son avis au bon niveau de prudence, concéder avant d'objecter, et surtout reconnaître les trois formules qui veulent dire non.",
  icon: "思",

  sections: [
    {
      title: "〜と思います : poser un avis sans l'imposer",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Une phrase japonaise qui se termine par un simple です affirme un fait. Terminer par と思います déplace l'énoncé du côté du jugement personnel, et c'est le réflexe par défaut dès qu'on sort du factuel. La construction est mécanique : forme neutre + と + 思います. Attention au point qui fait trébucher tout le monde — un nom ou un adjectif en な doit reprendre son だ devant と : 便利だと思います, jamais 「便利と思います」. Les verbes et les adjectifs en い, eux, s'attachent tels quels.",
        },
        {
          type: "example",
          native: "私はこの案がいいと思います。",
          romanization: "watashi wa kono an ga ii to omoimasu.",
          translation: "Je pense que cette proposition est la bonne.",
          content:
            "Le 私は n'est utile que si vous vous démarquez d'un avis exprimé juste avant ; sinon, supprimez-le. Le contraste est déjà porté par は, et l'ajouter systématiquement donne un ton insistant que le japonais réserve aux désaccords assumés.",
        },
        {
          type: "example",
          native: "田中さんは反対だと思っています。",
          romanization: "Tanaka-san wa hantai da to omotte imasu.",
          translation: "M. Tanaka, lui, y est opposé.",
          content:
            "Point de grammaire strict : 思います ne décrit que votre propre pensée à l'instant où vous parlez. Pour la pensée d'un tiers, il faut la forme progressive 思っています, qui présente l'opinion comme un état durable observable de l'extérieur. 「田中さんは反対だと思います」 signifierait « je pense que Tanaka est contre » — ce qui n'est pas la même information.",
        },
        {
          type: "warning",
          content:
            "La négation se porte sur le contenu, pas sur le verbe 思う. Dites いい考えではないと思います (« je pense que ce n'est pas une bonne idée ») et non 「いい考えだと思いません」, qui est formellement analysable mais que personne n'emploie. Le français fait l'inverse — « je ne pense pas que » — et le calque s'entend immédiatement.",
        },
        {
          type: "text",
          content:
            "Trois variantes du même outil, à doser selon l'enjeu. 〜と思います est neutre. 〜と思うのですが laisse la phrase en suspens et invite l'autre à réagir. 〜と存じます appartient au registre humble et ne s'emploie qu'à l'écrit professionnel ou devant un client. Passer de l'un à l'autre ne change pas le contenu, seulement la place que vous vous donnez.",
        },
        {
          type: "tip",
          content:
            "Ne collez pas と思います à la fin de chaque phrase d'une intervention : répété quatre fois de suite, il donne l'impression que vous ne tenez à rien. Une opinion se pose une fois, puis on argumente avec des faits au style neutre.",
        },
      ],
    },
    {
      title: "L'échelle de la prudence : かもしれません、気がします、のではないでしょうか",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En dessous de と思います s'ouvre toute une gamme que le français couvre péniblement avec « peut-être » et « il me semble ». Les paliers sont nets. かもしれません pose une possibilité parmi d'autres, sans engagement. 〜気がします rapporte une impression subjective, plus faible qu'une pensée construite. 〜のではないでしょうか avance un avis en le déguisant en question, ce qui est la manœuvre la plus utile en réunion. Enfin 〜わけではない ne propose rien : il corrige une conclusion que l'autre a tirée trop vite.",
        },
        {
          type: "example",
          native: "明日は雨かもしれません。",
          romanization: "ashita wa ame kamoshiremasen.",
          translation: "Il se peut qu'il pleuve demain.",
          content:
            "かもしれません s'attache à la forme neutre, mais un nom ou un adjectif en な s'y accroche sans だ : 雨かもしれません、便利かもしれません. C'est l'exact opposé de と思います, qui exige le だ — deux structures voisines, deux règles contraires, et une confusion très fréquente.",
        },
        {
          type: "example",
          native: "少し急ぎすぎているような気がします。",
          romanization: "sukoshi isogisugite iru you na ki ga shimasu.",
          translation: "J'ai l'impression qu'on va un peu trop vite.",
          content:
            "〜気がします présente l'avis comme une sensation, donc comme quelque chose de non discutable et de non contraignant : personne n'est obligé de réfuter une impression. Devant un nom ou un adjectif en な, insérez ような : 問題のような気がします. Après un verbe ou un adjectif en い, l'attache est directe.",
        },
        {
          type: "example",
          native: "もう少し時間が必要なのではないでしょうか。",
          romanization: "mou sukoshi jikan ga hitsuyou na no de wa nai deshou ka.",
          translation: "Ne faudrait-il pas un peu plus de temps ?",
          content:
            "La forme reine de la réunion japonaise. Grammaticalement c'est une question, en pratique c'est une affirmation : vous dites qu'il faut plus de temps, mais vous laissez à votre interlocuteur l'espace de conclure lui-même. Un nom ou un adjectif en な prend な devant のではないでしょうか. La version orale allégée est 〜んじゃないですか.",
        },
        {
          type: "example",
          native: "嫌いなわけではありません。",
          romanization: "kirai na wake de wa arimasen.",
          translation: "Ce n'est pas que je n'aime pas.",
          content:
            "〜わけではない nie l'inférence, pas le fait. On l'emploie quand l'autre vient de tirer une conclusion excessive de ce que vous avez dit, et on enchaîne presque toujours sur la vraie raison : 嫌いなわけではありません。ただ、時間がないんです.",
        },
        {
          type: "warning",
          content:
            "Ne confondez pas 〜わけではない et 〜わけがない. Le premier atténue : « ce n'est pas exactement que… ». Le second affirme une impossibilité et coupe court : 「できるわけがない」 signifie « il n'y a aucune chance que ce soit faisable » — le contraire d'une nuance.",
        },
      ],
    },
    {
      title: "Concéder avant d'objecter : 確かに…しかし、〜けれども、〜ものの",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Une objection japonaise ne commence jamais par l'objection. Le mouvement en deux temps est presque codifié : on reconnaît d'abord la valeur de ce qui vient d'être dit avec 確かに, puis on introduit la réserve avec しかし ou ただ. Sauter la première étape n'est pas perçu comme de la franchise mais comme de l'agressivité, y compris entre collègues de même rang.",
        },
        {
          type: "example",
          native: "確かにコストは下がります。しかし、品質が心配です。",
          romanization: "tashika ni kosuto wa sagarimasu. shikashi, hinshitsu ga shinpai desu.",
          translation: "Il est vrai que les coûts baissent. Mais la qualité m'inquiète.",
          content:
            "確かに ne signifie pas ici « certainement » : c'est une concession, « je vous accorde que ». Le は sur コスト installe précisément le contraste que la deuxième phrase va exploiter — la particule prépare l'objection avant même que しかし n'arrive.",
        },
        {
          type: "text",
          content:
            "À l'intérieur d'une même phrase, けれども relie deux propositions opposées et se décline en registre : けれども à l'écrit et en réunion, けれど neutre, けど à l'oral courant. Il se place après une proposition complète, polie ou neutre, ce qui le rend très facile à insérer. C'est le connecteur adversatif le plus souple du japonais courant.",
        },
        {
          type: "example",
          native: "コストは下がると思うんですけど…。",
          romanization: "kosuto wa sagaru to omou n desu kedo...",
          translation: "Les coûts devraient baisser, pourtant…",
          content:
            "Le けど laissé en suspens est une technique à part entière : la contradiction est posée, mais la conclusion reste dans la bouche de l'autre. C'est la manière la plus fréquente de maintenir son désaccord sans le formuler, et il faut apprendre à l'entendre autant qu'à le produire.",
        },
        {
          type: "example",
          native: "引き受けたものの、時間が足りませんでした。",
          romanization: "hikiuketa mono no, jikan ga tarimasen deshita.",
          translation: "J'avais accepté la tâche, mais le temps a manqué.",
          content:
            "〜ものの appartient à l'écrit et au registre soigné. Il exprime un décalage entre ce qui était attendu et ce qui s'est produit, là où けど se contente d'opposer deux faits. Il suit la forme neutre ; un adjectif en な prend な, un nom prend である.",
        },
        {
          type: "comparison",
          content:
            "でも ouvre une phrase et reste familier. しかし ouvre une phrase dans un registre formel. けれども relie deux propositions à l'intérieur d'une phrase. ものの fait la même chose que けれども mais dans un français écrit, avec une nuance de déception. Choisir le mauvais niveau ne crée pas de faute de grammaire, seulement une fausse note audible.",
        },
      ],
    },
    {
      title: "Trois façons de dire non sans dire non",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "いいえ existe, mais il ne sert presque jamais à refuser une proposition. Un refus direct met l'autre en position d'avoir eu tort de demander, ce que la conversation japonaise cherche à éviter. À la place circulent des formules dont le sens littéral est positif ou neutre et dont la fonction réelle est le refus. Le francophone doit apprendre à les entendre bien avant de savoir les produire : la faute coûteuse n'est pas de mal refuser, c'est de ne pas comprendre qu'on vient de vous refuser.",
        },
        {
          type: "example",
          native: "ちょっと難しいですね。",
          romanization: "chotto muzukashii desu ne.",
          translation: "Ce serait un peu difficile.",
          content:
            "Traduit littéralement, cela ressemble à un obstacle négociable. En pratique, prononcé avec un ちょっと étiré et une intonation descendante, c'est un non. Le ね ne demande pas votre accord, il clôt le sujet. La même chose se dit avec 厳しいですね ou avec un simple それはちょっと… laissé en suspens.",
        },
        {
          type: "example",
          native: "前向きに検討させていただきます。",
          romanization: "maemuki ni kentou sasete itadakimasu.",
          translation: "Nous allons examiner cela de manière constructive.",
          content:
            "Décomposez : 検討する à la forme causative 検討させて, plus いただきます, l'humble de もらう. La phrase demande donc la permission d'examiner — elle n'engage à rien et ne comporte aucune échéance. En contexte commercial, elle solde le plus souvent le dossier.",
        },
        {
          type: "text",
          content:
            "前向きに考えます fonctionne exactement de la même façon. On y ajoute 社内で相談してみます, 検討の上ご連絡いたします, ou encore 考えておきます : toutes ces formules déplacent la décision vers un futur non daté et vers une entité collective. Un accord réel, lui, se reconnaît à sa précision — une date, un nom, une étape suivante. Sans élément concret, considérez que la réponse est non.",
        },
        {
          type: "warning",
          content:
            "L'erreur classique du francophone est d'insister après un ちょっと難しいですね, en pensant que la porte est entrouverte. Insister oblige l'interlocuteur à formuler explicitement le refus qu'il a pris soin d'éviter, ce qui lui fait perdre la face et vous classe comme quelqu'un qui ne lit pas la situation. Une seule relance est tolérée, jamais deux.",
        },
        {
          type: "tip",
          content:
            "Pour vérifier sans brusquer, demandez une chose concrète : いつごろお返事をいただけますでしょうか. Si la réponse reste vague, vous avez votre confirmation. Et pour refuser vous-même, la formule sûre est 申し訳ありませんが、今回は見送らせていただきます — un refus clair, dit avec toutes les précautions attendues.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Réunion hebdomadaire dans une PME japonaise. Martin, ingénieur français en poste depuis un an, propose d'avancer une date de livraison.",
    lines: [
      {
        speaker: "部長",
        native: "では、この件について、何かご意見はありますか。",
        romanization: "dewa, kono ken ni tsuite, nanika go-iken wa arimasu ka.",
        french: "Bien. Quelqu'un a-t-il un avis sur ce point ?",
        note: "ご意見 avec le préfixe honorifique ご : le chef parle de l'avis des autres, donc il le rehausse. Vous ne diriez jamais ご意見 pour parler du vôtre.",
      },
      {
        speaker: "マルタン",
        native: "はい。納期を一週間早めたほうがいいのではないでしょうか。",
        romanization: "hai. nouki o isshuukan hayameta hou ga ii no de wa nai deshou ka.",
        french: "Oui. Ne vaudrait-il pas mieux avancer la livraison d'une semaine ?",
        note: "Proposition formulée en question : c'est le registre attendu quand on s'adresse à toute la salle. Dire 早めるべきです serait techniquement correct et socialement brutal.",
      },
      {
        speaker: "田中",
        native: "確かにおっしゃる通りです。しかし、現場の負担を考えると、少し難しい気がします。",
        romanization: "tashika ni ossharu toori desu. shikashi, genba no futan o kangaeru to, sukoshi muzukashii ki ga shimasu.",
        french: "C'est tout à fait juste. Mais compte tenu de la charge sur le terrain, cela me semble un peu difficile.",
        note: "La concession d'abord, l'objection ensuite. 難しい et 気がします arrivent ensemble : le refus est double emballé, et il est déjà ferme.",
      },
      {
        speaker: "マルタン",
        native: "コストは下がると思うんですけど…。",
        romanization: "kosuto wa sagaru to omou n desu kedo...",
        french: "Les coûts baisseraient, pourtant…",
        note: "けど suspendu : Martin maintient son point sans contredire frontalement. Une relance, pas deux — au-delà, la salle se ferme.",
      },
      {
        speaker: "部長",
        native: "そうですね……前向きに検討させていただきます。",
        romanization: "sou desu ne... maemuki ni kentou sasete itadakimasu.",
        french: "Voyons… Nous allons examiner cela de manière constructive.",
        note: "Aucune date, aucun responsable désigné, un silence avant la réponse. Les trois signaux d'un refus poli réunis dans une seule réplique.",
      },
      {
        speaker: "田中",
        native: "マルタンさん、今のは、やんわり断られたんだと思いますよ。",
        romanization: "Marutan-san, ima no wa, yanwari kotowareta n da to omoimasu yo.",
        french: "Martin, ce que vous venez d'entendre, c'est un refus en douceur, je crois.",
        note: "断られた : passif de 断る, « on vous a refusé ». やんわり = avec ménagement. Un collègue bienveillant traduit ce que la salle a compris sans le dire.",
      },
    ],
  },

  keyPoints: [
    "〜と思います s'attache à la forme neutre, et un nom ou un adjectif en な reprend だ : 便利だと思います. Pour l'avis d'un tiers, il faut 思っています.",
    "La négation porte sur le contenu, pas sur 思う : on dit いい考えではないと思います, jamais 「いい考えだと思いません」 — le calque du français « je ne pense pas que ».",
    "L'échelle de prudence descend de かもしれません (possibilité) à 〜気がします (impression) puis 〜のではないでしょうか (avis présenté en question) ; 〜わけではない sert à corriger une conclusion trop forte, et ne se confond pas avec 〜わけがない.",
    "On concède avant d'objecter : 確かに…しかし… entre deux phrases, けれども ou ものの à l'intérieur d'une phrase, et un けど laissé en suspens quand on veut maintenir son point sans le formuler.",
    "ちょっと難しいですね、検討させていただきます、前向きに考えます sont trois refus. Un accord réel comporte une date, un nom ou une étape suivante ; sans élément concret, la réponse est non — et insister une seconde fois aggrave la situation.",
  ],

  vocabulary: [
    {
      term: "意見",
      reading: "いけん",
      romanization: "iken",
      segments: [
        { text: "意", reading: "い" },
        { text: "見", reading: "けん" },
      ],
      pitch: 1,
      french: "L'opinion, l'avis",
      english: "Opinion",
      example: {
        sentence: "ご意見をお聞かせください。",
        romanization: "go-iken o o-kikase kudasai.",
        translation: "Faites-nous part de votre avis.",
      },
    },
    {
      term: "考え",
      reading: "かんがえ",
      romanization: "kangae",
      segments: [
        { text: "考", reading: "かんが" },
        { text: "え" },
      ],
      pitch: 3,
      french: "L'idée, la façon de voir",
      english: "Idea, way of thinking",
    },
    {
      term: "提案",
      reading: "ていあん",
      romanization: "teian",
      segments: [
        { text: "提", reading: "てい" },
        { text: "案", reading: "あん" },
      ],
      french: "La proposition",
      english: "Proposal",
      example: {
        sentence: "一つ提案があります。",
        romanization: "hitotsu teian ga arimasu.",
        translation: "J'ai une proposition à faire.",
      },
    },
    {
      term: "立場",
      reading: "たちば",
      romanization: "tachiba",
      segments: [
        { text: "立", reading: "たち" },
        { text: "場", reading: "ば" },
      ],
      french: "La position, le point de vue",
      english: "Standpoint, position",
      example: {
        sentence: "相手の立場も考えてみましょう。",
        romanization: "aite no tachiba mo kangaete mimashou.",
        translation: "Envisageons aussi le point de vue de l'autre partie.",
      },
    },
    {
      term: "賛成する",
      reading: "さんせいする",
      romanization: "sansei suru",
      segments: [
        { text: "賛", reading: "さん" },
        { text: "成", reading: "せい" },
        { text: "する" },
      ],
      french: "Approuver, être d'accord",
      english: "To agree, to approve",
    },
    {
      term: "反対する",
      reading: "はんたいする",
      romanization: "hantai suru",
      segments: [
        { text: "反", reading: "はん" },
        { text: "対", reading: "たい" },
        { text: "する" },
      ],
      french: "S'opposer, être contre",
      english: "To oppose",
    },
    {
      term: "検討する",
      reading: "けんとうする",
      romanization: "kentou suru",
      segments: [
        { text: "検", reading: "けん" },
        { text: "討", reading: "とう" },
        { text: "する" },
      ],
      french: "Examiner, étudier (une proposition)",
      english: "To examine, to consider",
      example: {
        sentence: "社内で検討してから、ご連絡します。",
        romanization: "shanai de kentou shite kara, go-renraku shimasu.",
        translation: "Nous vous recontacterons après examen en interne.",
      },
    },
    {
      term: "主張する",
      reading: "しゅちょうする",
      romanization: "shuchou suru",
      segments: [
        { text: "主", reading: "しゅ" },
        { text: "張", reading: "ちょう" },
        { text: "する" },
      ],
      french: "Soutenir, faire valoir (une thèse)",
      english: "To assert, to claim",
    },
    {
      term: "納得する",
      reading: "なっとくする",
      romanization: "nattoku suru",
      segments: [
        { text: "納得", reading: "なっとく" },
        { text: "する" },
      ],
      french: "Être convaincu, admettre",
      english: "To be convinced, to accept",
      example: {
        sentence: "説明を聞いて納得しました。",
        romanization: "setsumei o kiite nattoku shimashita.",
        translation: "L'explication m'a convaincu.",
      },
    },
    {
      term: "断る",
      reading: "ことわる",
      romanization: "kotowaru",
      segments: [
        { text: "断", reading: "ことわ" },
        { text: "る" },
      ],
      pitch: 3,
      french: "Refuser, décliner",
      english: "To refuse, to decline",
      example: {
        sentence: "はっきり断るのは失礼だと考える人もいます。",
        romanization: "hakkiri kotowaru no wa shitsurei da to kangaeru hito mo imasu.",
        translation: "Certains estiment qu'un refus net est impoli.",
      },
    },
    {
      term: "遠慮する",
      reading: "えんりょする",
      romanization: "enryo suru",
      segments: [
        { text: "遠", reading: "えん" },
        { text: "慮", reading: "りょ" },
        { text: "する" },
      ],
      french: "S'abstenir par réserve, décliner",
      english: "To hold back, to decline politely",
      example: {
        sentence: "今回は遠慮させていただきます。",
        romanization: "konkai wa enryo sasete itadakimasu.",
        translation: "Je préfère m'abstenir cette fois-ci.",
      },
    },
    {
      term: "確かに",
      reading: "たしかに",
      romanization: "tashika ni",
      segments: [
        { text: "確", reading: "たし" },
        { text: "かに" },
      ],
      french: "Certes, il est vrai que",
      english: "Certainly, admittedly",
      example: {
        sentence: "確かにその通りですが、問題もあります。",
        romanization: "tashika ni sono toori desu ga, mondai mo arimasu.",
        translation: "C'est exact, mais cela pose aussi des problèmes.",
      },
    },
    {
      term: "一方で",
      reading: "いっぽうで",
      romanization: "ippou de",
      segments: [
        { text: "一方", reading: "いっぽう" },
        { text: "で" },
      ],
      french: "D'un autre côté, en revanche",
      english: "On the other hand",
      example: {
        sentence: "便利です。一方で、費用が高くなります。",
        romanization: "benri desu. ippou de, hiyou ga takaku narimasu.",
        translation: "C'est pratique. En revanche, le coût augmente.",
      },
    },
    {
      term: "気がする",
      reading: "きがする",
      romanization: "ki ga suru",
      segments: [
        { text: "気", reading: "き" },
        { text: "がする" },
      ],
      french: "Avoir l'impression que",
      english: "To have the feeling that",
      example: {
        sentence: "どこかで会ったような気がします。",
        romanization: "dokoka de atta you na ki ga shimasu.",
        translation: "J'ai l'impression de vous avoir déjà rencontré quelque part.",
      },
    },
    {
      term: "かもしれません",
      reading: "かもしれません",
      romanization: "kamoshiremasen",
      french: "Il se peut que, peut-être",
      english: "Might, may",
    },
    {
      term: "難しい",
      reading: "むずかしい",
      romanization: "muzukashii",
      segments: [
        { text: "難", reading: "むずか" },
        { text: "しい" },
      ],
      pitch: 4,
      french: "Difficile ; délicat à accepter",
      english: "Difficult; hard to accept",
      example: {
        sentence: "その日程はちょっと難しいですね。",
        romanization: "sono nittei wa chotto muzukashii desu ne.",
        translation: "Ce calendrier serait un peu difficile.",
      },
    },
    {
      term: "前向き",
      reading: "まえむき",
      romanization: "maemuki",
      segments: [
        { text: "前", reading: "まえ" },
        { text: "向", reading: "む" },
        { text: "き" },
      ],
      french: "Positif, constructif (attitude)",
      english: "Positive, forward-looking",
      example: {
        sentence: "前向きに考えてみます。",
        romanization: "maemuki ni kangaete mimasu.",
        translation: "Je vais y réfléchir de manière positive.",
      },
    },
    {
      term: "曖昧",
      reading: "あいまい",
      romanization: "aimai",
      segments: [
        { text: "曖", reading: "あい" },
        { text: "昧", reading: "まい" },
      ],
      french: "Ambigu, flou",
      english: "Vague, ambiguous",
      example: {
        sentence: "返事が曖昧で、よく分かりませんでした。",
        romanization: "henji ga aimai de, yoku wakarimasen deshita.",
        translation: "La réponse était floue, je n'ai pas bien compris.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-36-ex1",
      type: "comprehension",
      question: "En réunion, un client répond 「検討させていただきます。」. Que signifie cette réponse le plus souvent ?",
      correctAnswer: "Un refus poli, sans échéance ni engagement.",
      options: [
        "Un refus poli, sans échéance ni engagement.",
        "Un accord ferme et définitif.",
        "Une promesse de réponse pour le lendemain.",
        "Une demande d'explications supplémentaires.",
      ],
      hint: "Cherchez ce qui manque dans la phrase : une date, un nom, une étape suivante.",
    },
    {
      id: "unit-36-ex2",
      type: "fill-blank",
      question: "この方法のほうが便利 ___ 思います。",
      correctAnswer: "だと",
      options: ["だと", "と", "のと", "では"],
      optionsHint: ["da to", "to", "no to", "de wa"],
      optionsReading: ["だと", "と", "のと", "では"],
      hint: "便利 est un adjectif en な : que doit-il reprendre devant と思います ?",
    },
    {
      id: "unit-36-ex3",
      type: "fill-blank",
      question: "この案のほうがいい ___ ないでしょうか。",
      correctAnswer: "のでは",
      options: ["のでは", "なのでは", "からでは", "ことでは"],
      optionsHint: ["no de wa", "na no de wa", "kara de wa", "koto de wa"],
      optionsReading: ["のでは", "なのでは", "からでは", "ことでは"],
      hint: "いい est un adjectif en い : il s'attache directement, sans な.",
    },
    {
      id: "unit-36-ex4",
      type: "comprehension",
      question: "Comment un locuteur japonais dit-il naturellement « je ne pense pas que ce soit une bonne idée » ?",
      correctAnswer: "いい考えではないと思います。",
      options: [
        "いい考えではないと思います。",
        "いい考えだと思いません。",
        "いい考えと思わないです。",
        "いい考えではないと思いません。",
      ],
      optionsHint: [
        "ii kangae de wa nai to omoimasu.",
        "ii kangae da to omoimasen.",
        "ii kangae to omowanai desu.",
        "ii kangae de wa nai to omoimasen.",
      ],
      optionsReading: [
        "いいかんがえではないとおもいます。",
        "いいかんがえだとおもいません。",
        "いいかんがえとおもわないです。",
        "いいかんがえではないとおもいません。",
      ],
      hint: "En japonais, la négation se place sur le contenu de la pensée, pas sur le verbe 思う.",
    },
    {
      id: "unit-36-ex5",
      type: "listen",
      question: "前向きに検討させていただきます。",
      correctAnswer: "En pratique, c'est un refus poli.",
      options: [
        "En pratique, c'est un refus poli.",
        "La proposition est acceptée telle quelle.",
        "Une réponse est promise pour demain matin.",
        "Le locuteur demande de reformuler la proposition.",
      ],
      hint: "Aucune date, aucun responsable : que reste-t-il d'engageant dans cette phrase ?",
    },
    {
      id: "unit-36-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Je pense que cette proposition est meilleure. »",
      correctAnswer: "この案のほうがいいと思います。",
      options: ["この", "案", "の", "ほうが", "いい", "と", "思います"],
      hint: "と introduit le contenu de la pensée, juste avant 思います.",
    },
    {
      id: "unit-36-ex7",
      type: "comprehension",
      question: "Que signifie 「嫌いなわけではありません。」 ?",
      correctAnswer: "Ce n'est pas que je n'aime pas : la conclusion tirée est trop forte.",
      options: [
        "Ce n'est pas que je n'aime pas : la conclusion tirée est trop forte.",
        "Je déteste cela absolument.",
        "Il est impossible que je n'aime pas cela.",
        "Je n'ai pas le droit de ne pas aimer cela.",
      ],
      hint: "〜わけではない nie une inférence, pas un fait — et ne se confond pas avec 〜わけがない.",
    },
    {
      id: "unit-36-ex8",
      type: "translate",
      question: "Traduisez : « Il se peut qu'il ne vienne pas. »",
      correctAnswer: "彼は来ないかもしれません。",
      options: [
        "彼は来ないかもしれません。",
        "彼は来ませんかもしれません。",
        "彼は来ないかもしれます。",
        "彼は来ないでしょうか。",
      ],
      optionsHint: [
        "kare wa konai kamoshiremasen.",
        "kare wa kimasen kamoshiremasen.",
        "kare wa konai kamoshiremasu.",
        "kare wa konai deshou ka.",
      ],
      optionsReading: [
        "かれはこないかもしれません。",
        "かれはきませんかもしれません。",
        "かれはこないかもしれます。",
        "かれはこないでしょうか。",
      ],
      hint: "かもしれません se greffe sur la forme neutre, jamais sur la forme polie.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-35"],
};
