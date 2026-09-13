import type { CourseUnit } from "@/types/course";

export const unit39: CourseUnit = {
  id: "unit-39",
  number: 39,
  title: "Rapporter et supposer : marquer la source de ce qu'on dit",
  titleNative: "伝聞と推量",
  chapter: 7,
  description:
    "Les deux 〜そうだ, puis ようだ、みたいだ、らしい、はずだ、べきだ. Le japonais oblige à dire d'où vient l'information : affirmer sans le faire ne passe pas pour de l'assurance, mais pour de la présomption.",
  icon: "噂",

  sections: [
    {
      title: "Deux そうだ : ce qu'on vous a dit, ce que vous voyez",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le japonais possède deux 〜そうだ rigoureusement homographes et de sens opposés. L'un rapporte une information reçue de l'extérieur — la télévision, un collègue, un article. L'autre livre une impression tirée de vos propres yeux. Rien ne les distingue à l'oreille : seule la forme du mot qui précède そう tranche. C'est le point de bascule de toute l'unité, et le seul endroit du programme où une syllabe mal choisie retourne complètement le sens d'une phrase.",
        },
        {
          type: "text",
          content:
            "Le そうだ de ouï-dire (伝聞) se colle à la forme neutre complète, telle quelle, sans rien lui retirer. Verbe : 降るそうだ、降ったそうだ、降らないそうだ. Adjectif en い : 高いそうだ. Adjectif en な et nom : on garde le だ — 元気だそうだ、雨だそうだ. Retenez ce だ, il est la signature du ouï-dire : c'est lui qui vous évitera de confondre les deux constructions.",
        },
        {
          type: "example",
          native: "天気予報によると、明日は雨だそうです。",
          romanization: "tenki yohou ni yoru to, ashita wa ame da sou desu.",
          translation: "D'après la météo, il pleuvra demain.",
          content:
            "〜によると nomme explicitement la source et appelle presque toujours そうだ derrière lui : les deux fonctionnent en paire. Notez le だ après 雨 : sans lui, 「雨そうです」 n'existe pas. Ici vous ne prenez aucune responsabilité sur l'information, vous la faites suivre intacte.",
        },
        {
          type: "text",
          content:
            "Le そうだ d'apparence (様態) attaque le mot, au contraire, et lui retire sa terminaison. Verbe : on prend la base des ます — 降ります → 降りそうだ、泣きます → 泣きそうだ. Adjectif en い : on supprime le い — おいしい → おいしそうだ. Adjectif en な : la base nue — 元気そうだ. Un nom seul est impossible : 「雨そうだ」 ne se dit pas. Deux irréguliers à mémoriser tels quels : いい → よさそうだ et ない → なさそうだ.",
        },
        {
          type: "comparison",
          content:
            "雨が降るそうです = « on m'a dit qu'il allait pleuvoir » (je répète). 雨が降りそうです = « on dirait qu'il va pleuvoir » (je regarde le ciel). Un seul kana d'écart, deux actes de parole différents. Règle mnémotechnique : plus la forme devant そう est courte et amputée, plus c'est visuel ; plus elle est complète, plus c'est du rapporté.",
        },
        {
          type: "warning",
          content:
            "Le そうだ de ouï-dire est figé : il ne se conjugue ni ne s'interroge. 「行くそうじゃないです」 et 「行くそうでしたか」 sont faux. Pour rapporter une négation, la négation se met avant : 行かないそうです. Le そうだ d'apparence, lui, se comporte comme un adjectif en な et se plie normalement : おいしそうな料理、おいしそうに食べる、雨が降りそうにない.",
        },
        {
          type: "tip",
          content:
            "Test rapide avant d'ouvrir la bouche : demandez-vous si vous pourriez ajouter 「〜と聞きました」 à la fin. Si oui, c'est du ouï-dire, il faut la forme neutre complète. Si vous êtes en train de regarder la chose, c'est l'apparence, et il faut couper la terminaison.",
        },
      ],
    },
    {
      title: "ようだ、みたいだ、らしい : le degré de distance",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Ces trois formes se traduisent toutes par « on dirait que » ou « il paraît que », et le francophone les emploie donc au hasard. Elles ne sont pourtant pas interchangeables : elles se distinguent par la nature de ce sur quoi vous vous appuyez. ようだ repose sur des indices que vous avez constatés vous-même ; らしい repose sur ce qui circule autour de vous ; みたいだ est la variante orale de ようだ.",
        },
        {
          type: "text",
          content:
            "ようだ se construit comme un adjectif en な attaché à ce qui précède : verbe et adjectif en い à la forme neutre + ようだ, adjectif en な + な + ようだ, nom + の + ようだ. Ce の est l'erreur la plus fréquente : 「風邪ようです」 est faux, il faut 風邪のようです. Le sens est une déduction assumée : vous avez vu quelque chose, vous en tirez une conclusion et vous la présentez comme la vôtre.",
        },
        {
          type: "example",
          native: "電気が消えています。誰もいないようです。",
          romanization: "denki ga kiete imasu. daremo inai you desu.",
          translation: "La lumière est éteinte. Apparemment il n'y a personne.",
          content:
            "La première phrase donne l'indice, la seconde la déduction. C'est le fonctionnement typique de ようだ : il vient rarement seul, il conclut une observation. Sans la première phrase, ようです paraîtrait sorti de nulle part.",
        },
        {
          type: "text",
          content:
            "みたいだ dit exactement la même chose dans un registre parlé. Sa construction est plus simple : il se colle directement au nom, sans の — 風邪みたいです、子供みたいです. En réunion, dans un courriel professionnel ou à l'écrit, préférez ようだ ; entre collègues au déjeuner, みたいだ est la forme naturelle et ようだ sonnerait guindé.",
        },
        {
          type: "text",
          content:
            "らしい s'attache lui aussi directement au nom, et signale que l'information vous vient de l'extérieur sans que vous puissiez ou vouliez en citer la source : la rumeur du bureau, ce qui se dit. Il est moins engageant que そうだ, qui suppose une source identifiable, et moins personnel que ようだ, qui suppose vos propres yeux. C'est la forme du « il paraît que » prudent.",
        },
        {
          type: "example",
          native: "駅の前で事故があったらしいですよ。",
          romanization: "eki no mae de jiko ga atta rashii desu yo.",
          translation: "Il paraît qu'il y a eu un accident devant la gare.",
          content:
            "Vous n'avez rien vu et vous ne citez personne : quelqu'un l'a dit, cela circule. Avec そうです la phrase impliquerait une source précise que vous pourriez nommer ; avec ようです elle impliquerait que vous êtes passé devant et avez constaté les dégâts.",
        },
        {
          type: "comparison",
          content:
            "らしい a un second emploi, distinct, qu'il faut savoir reconnaître : accolé à un nom il exprime le caractère typique. 男らしい = « viril, digne d'un homme » ; 学生らしい学生 = « un étudiant qui a tout de l'étudiant » ; 今日は春らしい天気です = « aujourd'hui il fait un temps bien printanier ». Le contexte suffit à trancher, mais la double lecture existe et surprend au début.",
        },
      ],
    },
    {
      title: "はずだ et べきだ : la logique et le devoir",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "はずだ ne relève plus de l'information reçue mais du raisonnement. Vous partez d'un fait que vous tenez pour acquis et vous en déduisez ce qui doit en découler : « puisque X, alors normalement Y ». Il se construit comme ようだ — nom + の + はずだ, adjectif en な + な + はずだ, verbe et adjectif en い à la forme neutre + はずだ.",
        },
        {
          type: "example",
          native: "九時の電車に乗ったから、もう着いているはずです。",
          romanization: "kuji no densha ni notta kara, mou tsuite iru hazu desu.",
          translation: "Il a pris le train de neuf heures, donc il devrait déjà être arrivé.",
          content:
            "La prémisse est explicite (から), la conclusion suit. はずです n'exprime ni un espoir ni une information reçue : c'est le résultat d'un calcul que votre interlocuteur peut refaire lui-même. Si la prémisse est fausse, la conclusion tombe — et c'est précisément ce que la forme suivante permet de dire.",
        },
        {
          type: "example",
          native: "三時に着くはずでしたが、電車が遅れました。",
          romanization: "sanji ni tsuku hazu deshita ga, densha ga okuremashita.",
          translation: "J'étais censé arriver à trois heures, mais le train a eu du retard.",
          content:
            "はずでした dit qu'une attente ne s'est pas réalisée. C'est la formule d'excuse standard quand un plan tombe à l'eau : elle explique que vous aviez tout prévu correctement. Sa cousine はずがない affirme l'inverse — 彼が知っているはずがありません, « il est impossible qu'il soit au courant ».",
        },
        {
          type: "text",
          content:
            "べきだ est d'un autre ordre encore : il n'observe ni ne déduit, il juge. Il exprime ce qui est moralement juste, ce qu'il faudrait faire. Il se met après la forme du dictionnaire — 読むべきだ、行くべきだ. する donne deux formes : するべきだ (courant) et すべきだ (plus écrit, plus formel). La négation ne passe jamais par le verbe : 「行かないべきだ」 est faux, on dit 行くべきではありません.",
        },
        {
          type: "comparison",
          content:
            "Ne confondez pas べきだ avec なければなりません, vu plus tôt. なければなりません dit une nécessité imposée par les circonstances ou le règlement : ビザを取らなければなりません. べきだ dit une conviction personnelle sur ce qui est bien : 学生はもっと本を読むべきです. Traduire les deux par « il faut » écrase une distinction que le japonais tient soigneusement.",
        },
        {
          type: "warning",
          content:
            "べきだ porte un jugement, donc il se manie avec précaution vers le haut de la hiérarchie. Dire à son supérieur 「もっと早く決めるべきです」 est une remontrance ouverte. Utilisé sur soi-même ou sur une situation générale il ne pose aucun problème : 私たちが伝えるべきですね est parfaitement poli.",
        },
      ],
    },
    {
      title: "Choisir sa source, et pourquoi c'est obligatoire",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Le point culturel décide de la valeur de tout ce chapitre. En français, dire « il pleuvra demain » alors qu'on l'a simplement entendu à la radio ne choque personne : le contexte suffit. En japonais, la même phrase nue, 明日は雨です, revendique une connaissance directe. Sans marqueur, vous vous présentez comme la source de l'information — ce qui, sur un sujet que vous ne maîtrisez pas, sonne présomptueux et met votre interlocuteur mal à l'aise.",
        },
        {
          type: "text",
          content:
            "Quatre questions suffisent à choisir, et dans cet ordre. Qui l'a dit, et pourriez-vous le citer ? そうだ. Cela circule sans source claire ? らしい. Vous l'avez constaté vous-même et vous en déduisez quelque chose ? ようだ à l'écrit, みたいだ à l'oral. Vous ne faites que raisonner à partir d'un fait connu ? はずだ. Si aucune ne s'applique, c'est que vous savez vraiment — et alors seulement vous affirmez sans marqueur.",
        },
        {
          type: "example",
          native: "田中さんは来月会社をやめるらしいですが、実はまだ確かではありません。",
          romanization: "Tanaka-san wa raigetsu kaisha o yameru rashii desu ga, jitsu wa mada tashika de wa arimasen.",
          translation: "Il paraît que M. Tanaka quitte l'entreprise le mois prochain, mais en fait ce n'est pas encore sûr.",
          content:
            "らしい annonce d'emblée que l'information est de seconde main ; la seconde proposition le confirme. Cette double précaution est la norme quand on parle de quelqu'un en son absence, et elle vous protège si l'information se révèle fausse.",
        },
        {
          type: "warning",
          content:
            "Erreur de francophone la plus visible : empiler les marqueurs. 「行くらしいそうです」、「降りそうなようです」 ne se disent pas. On choisit un marqueur et un seul par proposition. Si vous voulez vraiment cumuler deux niveaux, il faut deux phrases.",
        },
        {
          type: "tip",
          content:
            "Entraînement concret : prenez trois titres de la presse japonaise du jour et reformulez chacun trois fois, avec そうです, puis らしいです, puis ようです. Dites à voix haute ce que chaque version implique sur ce que vous savez. En une semaine le réflexe se déplace du raisonnement vers l'automatisme.",
        },
        {
          type: "text",
          content:
            "Dernier réflexe à installer : quand on vous transmet une information et que vous la retransmettez, le marqueur doit suivre. Un collègue vous dit 会議は三時からです ; en le répétant à un tiers, vous direz 会議は三時からだそうです. Omettre le marqueur revient à vous porter garant d'une heure que vous n'avez pas vérifiée — et c'est vous qu'on viendra chercher si elle est fausse.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Fin d'après-midi dans un bureau, la veille d'un déplacement professionnel. Un typhon est annoncé. Toute la conversation consiste à dire, phrase après phrase, d'où vient l'information.",
    lines: [
      {
        speaker: "佐藤",
        native: "天気予報によると、明日は台風が来るそうですよ。",
        romanization: "tenki yohou ni yoru to, ashita wa taifuu ga kuru sou desu yo.",
        french: "D'après la météo, un typhon arrive demain.",
        note: "〜によると nomme la source, 〜そうです la rapporte sans y ajouter d'interprétation. Le couple est quasi automatique.",
      },
      {
        speaker: "木村",
        native: "本当ですか。空を見ると、今にも降りそうですね。",
        romanization: "hontou desu ka. sora o miru to, ima ni mo furisou desu ne.",
        french: "Vraiment ? À voir le ciel, on dirait qu'il va pleuvoir d'une minute à l'autre.",
        note: "降りそう, sur la base des ます : jugement visuel immédiat. Comparez avec 降るそうです de la réplique précédente — même そう, source opposée.",
      },
      {
        speaker: "佐藤",
        native: "出張は中止になるらしいですよ。まだ正式な発表はありませんが。",
        romanization: "shucchou wa chuushi ni naru rashii desu yo. mada seishiki na happyou wa arimasen ga.",
        french: "Il paraît que le déplacement sera annulé. Mais il n'y a pas encore d'annonce officielle.",
        note: "らしい parce que l'information circule sans source citable. La seconde phrase le confirme et protège celui qui parle.",
      },
      {
        speaker: "木村",
        native: "じゃあ、部長はもう知っているはずですね。",
        romanization: "jaa, buchou wa mou shitte iru hazu desu ne.",
        french: "Alors le chef de service doit forcément déjà être au courant.",
        note: "はず : pure déduction à partir d'un fait admis (un chef est informé le premier). Aucune information nouvelle n'est apportée, seulement un raisonnement.",
      },
      {
        speaker: "佐藤",
        native: "いや、まだのようです。さっき普通に準備していましたから。",
        romanization: "iya, mada no you desu. sakki futsuu ni junbi shite imashita kara.",
        french: "Non, apparemment pas encore. Il préparait tout normalement il y a un instant.",
        note: "ようです s'appuie sur un indice observé, donné juste après avec から. Notez まだの + ようです : devant ようだ, un nom ou un adverbe nominalisé prend の.",
      },
      {
        speaker: "木村",
        native: "それなら、私たちが伝えるべきですね。",
        romanization: "sore nara, watashitachi ga tsutaeru beki desu ne.",
        french: "Dans ce cas, c'est à nous de le prévenir.",
        note: "べき exprime ce qui est juste de faire. Porté sur soi-même (私たちが), il reste parfaitement poli même en parlant d'un supérieur.",
      },
    ],
  },

  keyPoints: [
    "Deux 〜そうだ opposés : forme neutre complète + そうだ = ouï-dire (雨だそうです) ; terminaison amputée + そう = apparence (降りそうです、おいしそうです). Irréguliers : いい → よさそう, ない → なさそう.",
    "ようだ s'appuie sur vos propres indices (nom + の + ようだ) ; みたいだ en est la variante orale, collée directement au nom ; らしい signale une information qui circule sans source citable.",
    "はずだ est un raisonnement, pas une information : はずでした dit qu'une attente a été déçue, はずがない qu'une chose est impossible.",
    "べきだ juge ce qui est moralement juste — négation obligatoire en べきではない — et ne se dirige pas vers un supérieur. Il ne remplace pas なければなりません, qui dit la contrainte.",
    "Affirmer sans marqueur revient à se porter garant de l'information. Un seul marqueur par proposition : 「行くらしいそうです」 n'existe pas.",
  ],

  vocabulary: [
    {
      term: "噂",
      reading: "うわさ",
      romanization: "uwasa",
      segments: [{ text: "噂", reading: "うわさ" }],
      pitch: 0,
      french: "La rumeur, le bruit qui court",
      english: "Rumour",
      example: {
        sentence: "それはただの噂らしいです。",
        romanization: "sore wa tada no uwasa rashii desu.",
        translation: "Il paraît que ce n'est qu'une rumeur.",
      },
    },
    {
      term: "情報",
      reading: "じょうほう",
      romanization: "jouhou",
      segments: [
        { text: "情", reading: "じょう" },
        { text: "報", reading: "ほう" },
      ],
      pitch: 0,
      french: "L'information, le renseignement",
      english: "Information",
    },
    {
      term: "天気予報",
      reading: "てんきよほう",
      romanization: "tenkiyohou",
      segments: [
        { text: "天気", reading: "てんき" },
        { text: "予報", reading: "よほう" },
      ],
      french: "Le bulletin météo",
      english: "Weather forecast",
      example: {
        sentence: "天気予報によると、週末は晴れるそうです。",
        romanization: "tenki yohou ni yoru to, shuumatsu wa hareru sou desu.",
        translation: "D'après la météo, il fera beau ce week-end.",
      },
    },
    {
      term: "予想",
      reading: "よそう",
      romanization: "yosou",
      segments: [
        { text: "予", reading: "よ" },
        { text: "想", reading: "そう" },
      ],
      pitch: 0,
      french: "La prévision, le pronostic",
      english: "Prediction, expectation",
    },
    {
      term: "様子",
      reading: "ようす",
      romanization: "yousu",
      segments: [
        { text: "様", reading: "よう" },
        { text: "子", reading: "す" },
      ],
      pitch: 0,
      french: "L'aspect, l'état, l'allure de la situation",
      english: "Appearance, state of things",
      example: {
        sentence: "外の様子を見てきます。",
        romanization: "soto no yousu o mite kimasu.",
        translation: "Je vais voir ce qu'il en est dehors.",
      },
    },
    {
      term: "証拠",
      reading: "しょうこ",
      romanization: "shouko",
      segments: [
        { text: "証", reading: "しょう" },
        { text: "拠", reading: "こ" },
      ],
      pitch: 0,
      french: "La preuve",
      english: "Proof, evidence",
    },
    {
      term: "確か",
      reading: "たしか",
      romanization: "tashika",
      segments: [
        { text: "確", reading: "たし" },
        { text: "か" },
      ],
      pitch: 1,
      french: "Sûr, certain ; « si je me souviens bien »",
      english: "Certain; if I recall correctly",
      example: {
        sentence: "その話は確かではありません。",
        romanization: "sono hanashi wa tashika de wa arimasen.",
        translation: "Cette histoire n'est pas sûre.",
      },
    },
    {
      term: "確かめる",
      reading: "たしかめる",
      romanization: "tashikameru",
      segments: [
        { text: "確", reading: "たし" },
        { text: "かめる" },
      ],
      pitch: 4,
      french: "Vérifier, s'assurer de",
      english: "To make sure, to verify",
    },
    {
      term: "伝える",
      reading: "つたえる",
      romanization: "tsutaeru",
      segments: [
        { text: "伝", reading: "つた" },
        { text: "える" },
      ],
      french: "Transmettre (une information), faire savoir",
      english: "To convey, to pass on",
      example: {
        sentence: "部長に伝えるべきだと思います。",
        romanization: "buchou ni tsutaeru beki da to omoimasu.",
        translation: "Je pense qu'il faut en informer le chef de service.",
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
      french: "L'article (de presse)",
      english: "Article",
    },
    {
      term: "事故",
      reading: "じこ",
      romanization: "jiko",
      segments: [
        { text: "事", reading: "じ" },
        { text: "故", reading: "こ" },
      ],
      pitch: 1,
      french: "L'accident",
      english: "Accident",
      example: {
        sentence: "事故があったらしいです。",
        romanization: "jiko ga atta rashii desu.",
        translation: "Il paraît qu'il y a eu un accident.",
      },
    },
    {
      term: "台風",
      reading: "たいふう",
      romanization: "taifuu",
      segments: [
        { text: "台", reading: "たい" },
        { text: "風", reading: "ふう" },
      ],
      pitch: 3,
      french: "Le typhon",
      english: "Typhoon",
    },
    {
      term: "遅れる",
      reading: "おくれる",
      romanization: "okureru",
      segments: [
        { text: "遅", reading: "おく" },
        { text: "れる" },
      ],
      pitch: 0,
      french: "Être en retard, prendre du retard",
      english: "To be late, to be delayed",
      example: {
        sentence: "電車が遅れているようです。",
        romanization: "densha ga okurete iru you desu.",
        translation: "On dirait que le train a du retard.",
      },
    },
    {
      term: "実は",
      reading: "じつは",
      romanization: "jitsu wa",
      segments: [
        { text: "実", reading: "じつ" },
        { text: "は" },
      ],
      pitch: 2,
      french: "En fait, à vrai dire",
      english: "Actually, to tell the truth",
    },
    {
      term: "当然",
      reading: "とうぜん",
      romanization: "touzen",
      segments: [
        { text: "当", reading: "とう" },
        { text: "然", reading: "ぜん" },
      ],
      pitch: 0,
      french: "Naturel, qui va de soi ; naturellement",
      english: "Natural, obvious; of course",
    },
    {
      term: "責任",
      reading: "せきにん",
      romanization: "sekinin",
      segments: [
        { text: "責", reading: "せき" },
        { text: "任", reading: "にん" },
      ],
      pitch: 0,
      french: "La responsabilité",
      english: "Responsibility",
    },
    {
      term: "中止",
      reading: "ちゅうし",
      romanization: "chuushi",
      segments: [
        { text: "中", reading: "ちゅう" },
        { text: "止", reading: "し" },
      ],
      pitch: 0,
      french: "L'annulation, l'interruption",
      english: "Cancellation",
      example: {
        sentence: "台風で試合は中止になるそうです。",
        romanization: "taifuu de shiai wa chuushi ni naru sou desu.",
        translation: "On dit que le match sera annulé à cause du typhon.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-39-ex1",
      type: "comprehension",
      question: "Quelle est la différence entre 「雨が降るそうです」 et 「雨が降りそうです」 ?",
      correctAnswer: "降るそうです = on m'a dit qu'il allait pleuvoir ; 降りそうです = à voir le ciel, on dirait qu'il va pleuvoir",
      options: [
        "降るそうです = on m'a dit qu'il allait pleuvoir ; 降りそうです = à voir le ciel, on dirait qu'il va pleuvoir",
        "降るそうです = à voir le ciel, on dirait qu'il va pleuvoir ; 降りそうです = on m'a dit qu'il allait pleuvoir",
        "Les deux disent la même chose, seul le registre de politesse change",
        "降りそうです est simplement la forme polie de 降るそうです",
      ],
      hint: "Regardez la forme du verbe devant そう : complète ou amputée ?",
    },
    {
      id: "unit-39-ex2",
      type: "fill-blank",
      question: "Vous regardez un gâteau et vous jugez d'après son aspect. Complétez : 「このケーキ、___ ですね。」",
      correctAnswer: "おいしそう",
      options: ["おいしそう", "おいしいそう", "おいしそうな", "おいしいらしい"],
      optionsHint: ["oishisou", "oishii sou", "oishisou na", "oishii rashii"],
      optionsReading: ["おいしそう", "おいしいそう", "おいしそうな", "おいしいらしい"],
      hint: "Le そう d'apparence retire le い de l'adjectif. Et rien d'adnominal ne peut précéder です.",
    },
    {
      id: "unit-39-ex3",
      type: "comprehension",
      question: "Que dit exactement 「彼はもう着いているはずです」 ?",
      correctAnswer: "D'après ce que je sais, il devrait logiquement être déjà arrivé",
      options: [
        "D'après ce que je sais, il devrait logiquement être déjà arrivé",
        "Il a le devoir moral d'être déjà arrivé",
        "On m'a dit qu'il était déjà arrivé",
        "J'espère qu'il est déjà arrivé",
      ],
      hint: "はず ne rapporte rien et ne souhaite rien : il calcule.",
    },
    {
      id: "unit-39-ex4",
      type: "fill-blank",
      question: "Complétez avec la forme qui exprime le devoir moral : 「学生はもっと本を読む___だ。」",
      correctAnswer: "べき",
      options: ["べき", "はず", "らしい", "そう"],
      optionsHint: ["beki", "hazu", "rashii", "sou"],
      optionsReading: ["べき", "はず", "らしい", "そう"],
      hint: "Il s'agit d'un jugement sur ce qui est bien, pas d'une déduction ni d'une information reçue.",
    },
    {
      id: "unit-39-ex5",
      type: "listen",
      question: "天気予報によると、明日は台風が来るそうです。",
      correctAnswer: "D'après la météo, un typhon arrive demain.",
      options: [
        "D'après la météo, un typhon arrive demain.",
        "À voir le ciel, on dirait qu'un typhon va arriver demain.",
        "Un typhon devrait logiquement arriver demain.",
        "La météo a annoncé qu'il ferait beau demain.",
      ],
      hint: "Écoutez la source annoncée au début, puis la forme du verbe devant そう.",
    },
    {
      id: "unit-39-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « On dirait que le train a du retard. »",
      correctAnswer: "電車が遅れているようです。",
      options: ["電車", "が", "遅れて", "いる", "ようです"],
      hint: "Le marqueur de déduction se place tout à la fin, après la forme neutre du verbe.",
    },
    {
      id: "unit-39-ex7",
      type: "comprehension",
      question: "「〜みたいだ」 et 「〜ようだ」 : quelle est la différence principale ?",
      correctAnswer: "Même sens, mais みたいだ appartient à l'oral familier et se colle au nom sans の",
      options: [
        "Même sens, mais みたいだ appartient à l'oral familier et se colle au nom sans の",
        "みたいだ exprime l'ouï-dire, ようだ la déduction personnelle",
        "みたいだ est nettement plus formel que ようだ et s'emploie à l'écrit",
        "みたいだ ne peut s'employer qu'avec des adjectifs, jamais avec des noms",
      ],
      hint: "Comparez 風邪のようです et 風邪みたいです.",
    },
    {
      id: "unit-39-ex8",
      type: "translate",
      question: "Traduisez : « Il paraît que M. Tanaka a quitté l'entreprise. » (information entendue, rapportée telle quelle)",
      correctAnswer: "田中さんは会社をやめたそうです。",
      options: [
        "田中さんは会社をやめたそうです。",
        "田中さんは会社をやめそうです。",
        "田中さんは会社をやめるそうです。",
        "田中さんは会社をやめるはずです。",
      ],
      optionsHint: [
        "Tanaka-san wa kaisha o yameta sou desu.",
        "Tanaka-san wa kaisha o yamesou desu.",
        "Tanaka-san wa kaisha o yameru sou desu.",
        "Tanaka-san wa kaisha o yameru hazu desu.",
      ],
      optionsReading: [
        "たなかさんはかいしゃをやめたそうです。",
        "たなかさんはかいしゃをやめそうです。",
        "たなかさんはかいしゃをやめるそうです。",
        "たなかさんはかいしゃをやめるはずです。",
      ],
      hint: "L'action est déjà accomplie, et l'information est rapportée : vérifiez le temps du verbe et la forme devant そう.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-38"],
};
