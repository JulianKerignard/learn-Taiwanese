import type { CourseUnit } from "@/types/course";

export const unit26: CourseUnit = {
  id: "unit-26",
  number: 26,
  title: "Donner et recevoir : あげる, くれる, もらう",
  titleNative: "やりもらい：あげる・くれる・もらう",
  chapter: 4,
  description:
    "Trois verbes là où le français en a deux, et un choix qui dépend entièrement de la position du locuteur. Puis les services rendus en てあげる / てくれる / てもらう, et la politesse くださる / いただく.",
  icon: "贈",

  sections: [
    {
      title: "Trois verbes, un seul point de vue : le vôtre",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le français a donner et recevoir. Le japonais a あげる, くれる et もらう, et le verbe se choisit selon la direction du transfert par rapport à vous. Il ne s'agit pas d'une nuance de style : le japonais place le locuteur au centre du monde décrit, et tout ce qui va vers ce centre se dit autrement que ce qui s'en éloigne. Votre groupe — famille, entreprise, équipe — compte comme vous-même dans ce calcul.",
        },
        {
          type: "example",
          native: "私は田中さんに花をあげました。",
          romanization: "watashi wa Tanaka-san ni hana o agemashita.",
          translation: "J'ai offert des fleurs à M. Tanaka.",
          content:
            "Schéma de あげる : donneur は/が, destinataire に, objet を. Le mouvement s'éloigne de moi. あげる sert aussi entre deux tiers qui ne sont pas de mon groupe : 山田さんは田中さんに花をあげました.",
        },
        {
          type: "example",
          native: "田中さんが花をくれました。",
          romanization: "Tanaka-san ga hana o kuremashita.",
          translation: "M. Tanaka m'a offert des fleurs.",
          content:
            "Même événement, vu depuis moi. Le sujet reste le donneur, marqué par が, mais le verbe change parce que le mouvement vient vers moi. 私に est presque toujours omis : くれる le dit déjà. Notez le が plutôt que は — on annonce une nouvelle information, pas un thème.",
        },
        {
          type: "warning",
          content:
            "「田中さんが私に花をあげました」 n'est pas maladroit, il est agrammatical. C'est le point qui coince le plus longtemps chez les francophones, parce que le français n'a rien à quoi rattacher くれる : « il m'a donné » et « il lui a donné » utilisent le même verbe. En japonais, dès que le destinataire c'est moi ou mon groupe, あげる devient impossible.",
        },
        {
          type: "example",
          native: "私は田中さんに花をもらいました。",
          romanization: "watashi wa Tanaka-san ni hana o moraimashita.",
          translation: "J'ai reçu des fleurs de M. Tanaka.",
          content:
            "Troisième angle sur le même événement : cette fois c'est le receveur qui est sujet, et la source prend に. から est possible et devient même préférable quand la source est une institution plutôt qu'une personne : 会社からお金をもらいました.",
        },
        {
          type: "comparison",
          content:
            "くれる et もらう décrivent le même fait, mais pas la même chose. くれる projette l'attention sur celui qui donne et souligne son geste spontané ; もらう me place au centre et sonne plus neutre, presque comptable. Devant un cadeau reçu, un Japonais dira spontanément 田中さんがくれました — la gratitude passe par le sujet.",
        },
        {
          type: "text",
          content:
            "Le groupe déborde de votre personne. 山田さんが妹におみやげをくれました est correct : ma sœur fait partie de mon groupe, donc le cadeau vient vers « nous ». Au bureau, un cadeau fait à un collègue de votre service par un client se dira aussi くれました. Avant de choisir le verbe, demandez-vous non pas « qui donne ? » mais « le mouvement va-t-il vers mon camp ? ».",
        },
      ],
    },
    {
      title: "Les services rendus : てあげる, てくれる, てもらう",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les trois mêmes verbes s'accrochent à une forme en て et cessent alors de parler d'objets : ils parlent d'actions faites pour quelqu'un. Le japonais marque explicitement ce que le français laisse implicite — le bénéfice. Décrire un service rendu sans てくれる n'est pas une faute de grammaire, mais donne une phrase froide, purement factuelle, qui s'entend comme un manque de reconnaissance.",
        },
        {
          type: "example",
          native: "友だちが宿題を手伝ってくれました。",
          romanization: "tomodachi ga shukudai o tetsudatte kuremashita.",
          translation: "Un ami m'a aidé pour mes devoirs.",
          content:
            "Comparez avec 友だちが宿題を手伝いました : grammaticalement correct, mais cela décrit une aide apportée à quelqu'un d'indéterminé et me laisse hors du tableau. くれました dit à la fois que j'en ai bénéficié et que je le reconnais.",
        },
        {
          type: "example",
          native: "友だちに宿題を手伝ってもらいました。",
          romanization: "tomodachi ni shukudai o tetsudatte moraimashita.",
          translation: "Je me suis fait aider pour mes devoirs par un ami.",
          content:
            "Le même fait, moi en sujet, l'aidant en に. C'est la version qu'on emploie pour rendre compte de quelque chose — dans un rapport, une explication au travail. てくれる est plus chaleureux, てもらう plus factuel.",
        },
        {
          type: "warning",
          content:
            "〜てあげます adressé au bénéficiaire lui-même met en avant la faveur que vous lui faites. 「荷物を持ってあげましょうか」 dit à un client ou à un supérieur est déplacé : cela revient à annoncer votre propre générosité. La formule neutre est お持ちしましょうか. Entre amis proches, てあげる passe sans problème.",
        },
        {
          type: "example",
          native: "すみません、写真を撮っていただけますか。",
          romanization: "sumimasen, shashin o totte itadakemasu ka.",
          translation: "Excusez-moi, pourriez-vous prendre une photo ?",
          content:
            "〜ていただけますか est la forme potentielle de いただく : littéralement « puis-je recevoir que vous fassiez ». C'est la demande polie standard à un inconnu ou à un supérieur, et elle laisse formellement le choix de refuser, ce que 〜てください ne fait pas.",
        },
        {
          type: "tip",
          content:
            "Échelle des demandes, du plus direct au plus prudent : 撮って (familier) → 撮ってください → 撮ってくれませんか → 撮っていただけますか → 撮っていただけませんか. Les formes négatives sont plus polies que les affirmatives, parce qu'elles anticipent le refus au lieu de le nier.",
        },
      ],
    },
    {
      title: "Monter d'un cran : くださる, いただく, さしあげる",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Dès qu'un supérieur entre dans l'échange — professeur, chef de service, client, aîné — les verbes changent d'étage. くれる devient くださる, forme respectueuse qui élève le donneur ; もらう devient いただく, forme modeste qui vous abaisse. Ce ne sont pas des options de style dans un cadre professionnel : employer くれました pour parler d'un cadeau du directeur passe pour de la familiarité déplacée.",
        },
        {
          type: "example",
          native: "部長が資料をくださいました。",
          romanization: "buchou ga shiryou o kudasaimashita.",
          translation: "Le chef de service m'a donné les documents.",
          content:
            "くださる est irrégulier : sa forme polie est くださいます, jamais 「くださります」, et son impératif poli est ください — celui que vous employez depuis vos premières leçons dans 待ってください. C'est le même verbe : « faites-moi la faveur de… ».",
        },
        {
          type: "example",
          native: "先生に本をいただきました。",
          romanization: "sensei ni hon o itadakimashita.",
          translation: "J'ai reçu un livre du professeur.",
          content:
            "いただく est le もらう modeste : la source garde に (ou から), et c'est moi qui me place plus bas. Vous connaissez déjà le mot : いただきます, avant de manger, veut dire littéralement « je reçois humblement » — ce qui est dans l'assiette vient de quelqu'un.",
        },
        {
          type: "warning",
          content:
            "さしあげる existe comme forme modeste de あげる, mais elle traîne le défaut de てあげる : dire à un professeur 「本をさしあげます」 revient à lui annoncer votre largesse. On préfère un verbe neutre — 本をお渡しします — ou, mieux, on lui tend l'objet en disant simplement どうぞ. Gardez さしあげる pour le récit et les formules figées du commerce.",
        },
        {
          type: "comparison",
          content:
            "書いてください et 書いていただけますか demandent la même chose. La première est un ordre poli : elle suppose que l'autre va s'exécuter. La seconde interroge sa disponibilité et lui laisse la sortie. Vers un supérieur ou un client, prenez systématiquement la seconde.",
        },
        {
          type: "text",
          content:
            "Un réflexe simple pour trier : posez d'abord la direction (vers moi ou vers l'autre), puis l'étage (au-dessus, à égalité). Vers moi + supérieur = くださる ou いただく selon le sujet que vous choisissez. Vers l'autre + supérieur = ni あげる ni さしあげる, mais un verbe neutre. Vers l'autre + égal ou plus jeune = あげる sans complexe.",
        },
      ],
    },
    {
      title: "Le cadeau engage : お中元, お歳暮 et l'art de rendre",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Au Japon, un cadeau n'est pas un geste isolé : il ouvre une ligne de compte. Recevoir crée une dette légère mais réelle, et une part des rituels sociaux consiste à la solder proprement. C'est pourquoi la langue distingue si finement qui donne à qui : il faut pouvoir dire, à tout moment, dans quel sens circule l'obligation.",
        },
        {
          type: "text",
          content:
            "Deux rendez-vous structurent l'année. L'お中元 s'envoie l'été, autour de juillet dans la région du Kantō et plutôt en août dans le Kansai. L'お歳暮 s'envoie en décembre, généralement avant le 20. On les adresse aux personnes envers qui l'on a une dette de reconnaissance : supérieur hiérarchique, professeur, médecin de famille, beaux-parents, clients importants. Le budget usuel tourne autour de 3 000 à 5 000 yens.",
        },
        {
          type: "tip",
          content:
            "On offre presque toujours des consommables : bière, huile, jambon, fruits, gâteaux, café. La raison est concrète — un logement japonais est petit, et un objet durable reste sous les yeux comme un rappel permanent de la dette. Ce qui se mange disparaît, et la relation reste nette.",
        },
        {
          type: "warning",
          content:
            "Contrairement à ce que l'on croit souvent, l'お中元 et l'お歳暮 n'appellent pas d'お返し. La bonne réponse est une lettre de remerciement, l'お礼状, ou au minimum un appel rapide. En revanche, pour un cadeau de mariage ou de naissance, la norme est le 半返し : on rend environ la moitié de la valeur reçue.",
        },
        {
          type: "example",
          native: "出張のお土産です。皆さんでどうぞ。",
          romanization: "shucchou no omiyage desu. minasan de douzo.",
          translation: "C'est un souvenir de mon déplacement. Servez-vous.",
          content:
            "L'お土産 rapportée de voyage pour les collègues obéit à la même logique de dette : vous êtes parti pendant qu'ils travaillaient. D'où le format standard — une boîte de gâteaux emballés individuellement, que chacun prend quand il passe, sans avoir à remercier en face.",
        },
        {
          type: "warning",
          content:
            "Le remerciement se dit deux fois. Sur le moment, ありがとうございます ; puis à la rencontre suivante, 先日はありがとうございました (« merci pour l'autre jour »). Sauter le second est perçu comme un oubli. C'est la règle sociale que les étrangers ignorent le plus souvent, et elle coûte cher en réputation.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Lundi matin au bureau. Sophie revient d'un week-end à Kyoto et pose une boîte de gâteaux sur la table commune. Tanaka en profite pour lui expliquer une coutume de fin d'année.",
    lines: [
      {
        speaker: "ソフィー",
        native: "皆さん、京都のお土産です。どうぞ。",
        romanization: "minasan, Kyouto no omiyage desu. douzo.",
        french: "Tout le monde, c'est un souvenir de Kyoto. Servez-vous.",
        note: "Formule complète pour déposer des gâteaux au bureau : origine du souvenir, puis どうぞ. On ne les distribue pas en main propre.",
      },
      {
        speaker: "田中",
        native: "わあ、ありがとうございます。いつもすみません。",
        romanization: "waa, arigatou gozaimasu. itsumo sumimasen.",
        french: "Oh, merci beaucoup. Vous ne devriez pas.",
        note: "すみません sert ici de remerciement : on s'excuse du dérangement causé à celui qui a fait l'effort. Très fréquent, et déroutant au début.",
      },
      {
        speaker: "ソフィー",
        native: "いいえ。先週は仕事を手伝ってくださって、ありがとうございました。",
        romanization: "iie. senshuu wa shigoto o tetsudatte kudasatte, arigatou gozaimashita.",
        french: "Je vous en prie. Merci de m'avoir aidée dans mon travail la semaine dernière.",
        note: "〜てくださって、ありがとうございました est la formule pour remercier un supérieur d'un service passé. Elle remercie une seconde fois, comme le veut l'usage.",
      },
      {
        speaker: "田中",
        native: "いえいえ。ところで、部長にお歳暮を贈りますか。",
        romanization: "ieie. tokorode, buchou ni oseibo o okurimasu ka.",
        french: "Mais non. Au fait, vous allez envoyer un お歳暮 au chef de service ?",
        note: "ところで change de sujet franchement, sans transition. 贈る est le verbe des cadeaux formels, plus soigné que あげる.",
      },
      {
        speaker: "ソフィー",
        native: "お歳暮？何ですか、それは。",
        romanization: "oseibo? nan desu ka, sore wa.",
        french: "Un お歳暮 ? Qu'est-ce que c'est ?",
        note: "Le それは rejeté en fin de phrase est un trait très oral : on pose la question, puis on précise de quoi on parle.",
      },
      {
        speaker: "田中",
        native: "十二月に、お世話になった人に贈る物です。ビールやお菓子が多いです。",
        romanization: "juunigatsu ni, osewa ni natta hito ni okuru mono desu. biiru ya okashi ga ooi desu.",
        french: "C'est ce qu'on offre en décembre aux personnes qui vous ont aidé. Souvent de la bière ou des gâteaux.",
        note: "お世話になる, « recevoir les bons soins de quelqu'un », désigne toute la dette de reconnaissance accumulée. Le mot est au cœur de la vie professionnelle japonaise.",
      },
      {
        speaker: "ソフィー",
        native: "なるほど。じゃあ、私も何か贈るつもりです。お返しをいただいたら、どうしますか。",
        romanization: "naruhodo. jaa, watashi mo nanika okuru tsumori desu. okaeshi o itadaitara, dou shimasu ka.",
        french: "Je vois. Alors je compte offrir quelque chose moi aussi. Et si je reçois un cadeau en retour ?",
        note: "つもりです reprend l'unité précédente. いただいたら emploie la forme modeste : le retour viendrait d'un supérieur.",
      },
      {
        speaker: "田中",
        native: "お歳暮にお返しは必要ありません。お礼状だけで十分ですよ。",
        romanization: "oseibo ni okaeshi wa hitsuyou arimasen. oreijou dake de juubun desu yo.",
        french: "Pour un お歳暮, aucun cadeau en retour n'est nécessaire. Une lettre de remerciement suffit largement.",
        note: "Le よ final apporte une information que l'interlocutrice n'a pas. お礼状 : la lettre de remerciement, encore très pratiquée sur papier.",
      },
    ],
  },

  keyPoints: [
    "Trois verbes pour deux du français : あげる (je donne à autrui, ou un tiers à un tiers), くれる (on donne à moi ou à mon groupe), もらう (je reçois, source en に ou から).",
    "くれる n'a aucun équivalent français, et c'est là que se produit la faute : 「田中さんが私に花をあげました」 n'est pas maladroit, il est agrammatical.",
    "Le calcul ne porte pas sur les personnes mais sur la direction : famille, équipe et entreprise comptent comme vous — 山田さんが妹におみやげをくれました.",
    "Sur la forme en て, ces verbes marquent le service rendu : 手伝ってくれました met en avant celui qui aide, 手伝ってもらいました me place en sujet. Omettre てくれる rend la phrase froide.",
    "Vers le haut : くれる → くださる, もらう → いただく, 〜ていただけますか comme demande polie, et さしあげる qu'on ne dit jamais au bénéficiaire. Côté usages, l'お中元 et l'お歳暮 se règlent par une お礼状 et non par un cadeau en retour, et l'on remercie une seconde fois à la rencontre suivante.",
  ],

  vocabulary: [
    {
      term: "あげる",
      reading: "あげる",
      romanization: "ageru",
      pitch: 0,
      french: "Donner, offrir (à quelqu'un d'autre)",
      english: "To give (to someone else)",
      example: {
        sentence: "田中さんに花をあげました。",
        romanization: "Tanaka-san ni hana o agemashita.",
        translation: "J'ai offert des fleurs à M. Tanaka.",
      },
    },
    {
      term: "くれる",
      reading: "くれる",
      romanization: "kureru",
      pitch: 0,
      french: "Donner (à moi ou à mon groupe)",
      english: "To give (to me or my group)",
      example: {
        sentence: "父が時計をくれました。",
        romanization: "chichi ga tokei o kuremashita.",
        translation: "Mon père m'a offert une montre.",
      },
    },
    {
      term: "もらう",
      reading: "もらう",
      romanization: "morau",
      pitch: 0,
      french: "Recevoir (de quelqu'un)",
      english: "To receive",
      example: {
        sentence: "友だちにチョコレートをもらいました。",
        romanization: "tomodachi ni chokoreeto o moraimashita.",
        translation: "J'ai reçu du chocolat d'un ami.",
      },
    },
    {
      term: "くださる",
      reading: "くださる",
      romanization: "kudasaru",
      french: "Donner (respectueux : d'un supérieur vers moi)",
      english: "To give (honorific, superior to me)",
      example: {
        sentence: "先生が本をくださいました。",
        romanization: "sensei ga hon o kudasaimashita.",
        translation: "Le professeur m'a offert un livre.",
      },
    },
    {
      term: "いただく",
      reading: "いただく",
      romanization: "itadaku",
      pitch: 0,
      french: "Recevoir (modeste : d'un supérieur)",
      english: "To receive (humble)",
      example: {
        sentence: "部長にお土産をいただきました。",
        romanization: "buchou ni omiyage o itadakimashita.",
        translation: "J'ai reçu un souvenir du chef de service.",
      },
    },
    {
      term: "贈る",
      reading: "おくる",
      romanization: "okuru",
      segments: [
        { text: "贈", reading: "おく" },
        { text: "る" },
      ],
      french: "Offrir, envoyer (un cadeau formel)",
      english: "To present, to send as a gift",
    },
    {
      term: "プレゼント",
      reading: "プレゼント",
      romanization: "purezento",
      french: "Le cadeau",
      english: "Present, gift",
    },
    {
      term: "お土産",
      reading: "おみやげ",
      romanization: "omiyage",
      segments: [
        { text: "お" },
        { text: "土産", reading: "みやげ" },
      ],
      pitch: 0,
      french: "Le souvenir rapporté de voyage",
      english: "Souvenir brought back for others",
    },
    {
      term: "お礼",
      reading: "おれい",
      romanization: "orei",
      segments: [
        { text: "お" },
        { text: "礼", reading: "れい" },
      ],
      french: "Le remerciement",
      english: "Thanks, token of gratitude",
    },
    {
      term: "お返し",
      reading: "おかえし",
      romanization: "okaeshi",
      segments: [
        { text: "お" },
        { text: "返", reading: "かえ" },
        { text: "し" },
      ],
      french: "Le cadeau rendu en retour",
      english: "Return gift",
      example: {
        sentence: "お返しに、お菓子を贈りました。",
        romanization: "okaeshi ni, okashi o okurimashita.",
        translation: "En retour, j'ai offert des gâteaux.",
      },
    },
    {
      term: "お中元",
      reading: "おちゅうげん",
      romanization: "ochuugen",
      segments: [
        { text: "お" },
        { text: "中元", reading: "ちゅうげん" },
      ],
      french: "Le cadeau d'été offert à qui l'on doit de la reconnaissance",
      english: "Mid-year gift",
    },
    {
      term: "お歳暮",
      reading: "おせいぼ",
      romanization: "oseibo",
      segments: [
        { text: "お" },
        { text: "歳暮", reading: "せいぼ" },
      ],
      french: "Le cadeau de fin d'année",
      english: "Year-end gift",
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
      example: {
        sentence: "引っ越しを手伝ってくれませんか。",
        romanization: "hikkoshi o tetsudatte kuremasen ka.",
        translation: "Tu pourrais m'aider pour le déménagement ?",
      },
    },
    {
      term: "貸す",
      reading: "かす",
      romanization: "kasu",
      segments: [
        { text: "貸", reading: "か" },
        { text: "す" },
      ],
      pitch: 0,
      french: "Prêter",
      english: "To lend",
      example: {
        sentence: "友だちに自転車を貸しました。",
        romanization: "tomodachi ni jitensha o kashimashita.",
        translation: "J'ai prêté mon vélo à un ami.",
      },
    },
    {
      term: "借りる",
      reading: "かりる",
      romanization: "kariru",
      segments: [
        { text: "借", reading: "か" },
        { text: "りる" },
      ],
      pitch: 0,
      french: "Emprunter, louer",
      english: "To borrow, to rent",
      example: {
        sentence: "図書館で本を借りました。",
        romanization: "toshokan de hon o karimashita.",
        translation: "J'ai emprunté un livre à la bibliothèque.",
      },
    },
    {
      term: "教える",
      reading: "おしえる",
      romanization: "oshieru",
      segments: [
        { text: "教", reading: "おし" },
        { text: "える" },
      ],
      pitch: 0,
      french: "Enseigner, indiquer",
      english: "To teach, to tell",
    },
    {
      term: "親切",
      reading: "しんせつ",
      romanization: "shinsetsu",
      segments: [
        { text: "親", reading: "しん" },
        { text: "切", reading: "せつ" },
      ],
      pitch: 1,
      french: "Prévenant, serviable",
      english: "Kind, helpful",
      example: {
        sentence: "田中さんはとても親切です。",
        romanization: "Tanaka-san wa totemo shinsetsu desu.",
        translation: "M. Tanaka est très prévenant.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-26-ex1",
      type: "comprehension",
      question: "Pourquoi 「田中さんが私にプレゼントをあげました」 est-il faux ?",
      correctAnswer: "Quand le destinataire est moi, le verbe devient くれる : くれました",
      options: [
        "Quand le destinataire est moi, le verbe devient くれる : くれました",
        "あげる ne s'emploie pas avec un objet, il faut もらう",
        "Il manque la particule から après 田中さん",
        "あげる ne peut pas se mettre au passé",
      ],
      hint: "Le mouvement va vers le centre — c'est-à-dire vers vous.",
    },
    {
      id: "unit-26-ex2",
      type: "fill-blank",
      question: "母が私にセーターを ___ ました。 « Ma mère m'a offert un pull. »",
      correctAnswer: "くれ",
      options: ["くれ", "あげ", "もらい", "いただき"],
      optionsHint: ["kure", "age", "morai", "itadaki"],
      optionsReading: ["くれ", "あげ", "もらい", "いただき"],
      hint: "Le sujet est le donneur, et le destinataire c'est moi.",
    },
    {
      id: "unit-26-ex3",
      type: "fill-blank",
      question: "私は先生 ___ 本をいただきました。",
      correctAnswer: "に",
      options: ["に", "が", "を", "へ"],
      optionsHint: ["ni", "ga", "o", "e"],
      optionsReading: ["に", "が", "を", "へ"],
      hint: "Avec もらう et いただく, celui qui donne est marqué comme la source.",
    },
    {
      id: "unit-26-ex4",
      type: "comprehension",
      question: "友だちが手伝ってくれました et 友だちに手伝ってもらいました : quelle est la différence ?",
      correctAnswer: "Le même fait vu autrement : くれる met l'ami en sujet, もらう me place au centre",
      options: [
        "Le même fait vu autrement : くれる met l'ami en sujet, もらう me place au centre",
        "くれる signifie que l'aide a été refusée, もらう qu'elle a été acceptée",
        "くれる est du passé, もらう du présent",
        "くれる s'emploie pour un objet, もらう pour une action",
      ],
      hint: "Regardez qui porte la particule が et qui porte に.",
    },
    {
      id: "unit-26-ex5",
      type: "listen",
      question: "友だちが本を貸してくれました。",
      correctAnswer: "Un ami m'a prêté un livre.",
      options: [
        "Un ami m'a prêté un livre.",
        "J'ai prêté un livre à un ami.",
        "Un ami m'a emprunté un livre.",
        "J'ai emprunté un livre à la bibliothèque.",
      ],
      hint: "貸す = prêter, et くれる dit dans quel sens circule le service.",
    },
    {
      id: "unit-26-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « J'ai reçu un livre du professeur. »",
      correctAnswer: "先生に本をいただきました。",
      options: ["先生", "に", "本", "を", "いただきました"],
      hint: "La source d'abord, l'objet ensuite, le verbe modeste à la fin.",
    },
    {
      id: "unit-26-ex7",
      type: "comprehension",
      question: "Votre chef porte un carton lourd. Que lui dites-vous ?",
      correctAnswer: "お持ちしましょうか。",
      options: [
        "お持ちしましょうか。",
        "持ってあげましょうか。",
        "持ってもらいましょうか。",
        "持ってくれませんか。",
      ],
      optionsHint: [
        "o-mochi shimashou ka.",
        "motte agemashou ka.",
        "motte moraimashou ka.",
        "motte kuremasen ka.",
      ],
      optionsReading: [
        "おもちしましょうか。",
        "もってあげましょうか。",
        "もってもらいましょうか。",
        "もってくれませんか。",
      ],
      hint: "Deux des propositions demandent au chef de porter, une troisième annonce votre générosité.",
    },
    {
      id: "unit-26-ex8",
      type: "translate",
      question: "Traduisez : « J'ai reçu un cadeau de Mme Yamada. »",
      correctAnswer: "山田さんにプレゼントをもらいました。",
      options: [
        "山田さんにプレゼントをもらいました。",
        "山田さんにプレゼントをあげました。",
        "山田さんがプレゼントをもらいました。",
        "山田さんにプレゼントをくれました。",
      ],
      optionsHint: [
        "Yamada-san ni purezento o moraimashita.",
        "Yamada-san ni purezento o agemashita.",
        "Yamada-san ga purezento o moraimashita.",
        "Yamada-san ni purezento o kuremashita.",
      ],
      hint: "C'est moi le receveur : quel verbe me prend pour sujet ?",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-25"],
};
