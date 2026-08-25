import type { CourseUnit } from "@/types/course";

export const unit23: CourseUnit = {
  id: "unit-23",
  number: 23,
  title: "Se loger : lire une annonce et signer un bail",
  titleJa: "部屋を探す",
  chapter: 4,
  description:
    "Déchiffrer une annonce immobilière japonaise, situer un logement par rapport à la gare avec から…まで, et poser deux actions simultanées avec 〜ながら. Plus tout ce que l'annonce ne dit pas : le 礼金, le garant et le tri des déchets.",
  icon: "家",

  sections: [
    {
      title: "Lire une annonce : 畳, 1K, 2LDK",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Chercher un logement au Japon commence par un exercice de déchiffrage. Une annonce ne décrit presque rien en phrases : elle aligne un plan (間取り, madori), une surface, un loyer et une distance à la gare. Le plan se lit avec un code de deux ou trois lettres, et la surface se donne en 畳, c'est-à-dire en nombre de tatami. Tant que ces deux notations restent opaques, aucune recherche n'est possible, même avec un bon niveau de conversation.",
        },
        {
          type: "example",
          japanese: "六畳の1K、家賃七万円。",
          romaji: "rokujou no wan kee, yachin nanaman en.",
          translation: "Un 1K de six tatami, 70 000 yens de loyer.",
          content:
            "畳 se lit たたみ quand il désigne l'objet, mais じょう quand il compte : 六畳 = ろくじょう. C'est un compteur, au même titre que 人 ou 本. Six tatami font environ dix mètres carrés — retenez la règle de trois : un 畳 vaut à peu près 1,6 m².",
        },
        {
          type: "text",
          content:
            "Le code du plan se lit de droite à gauche. R = room, K = kitchen (cuisine séparée), DK = dining kitchen (cuisine assez grande pour y manger), LDK = living dining kitchen (séjour, coin repas et cuisine d'un seul tenant). Le chiffre placé devant compte les pièces à vivre en plus de cet espace commun. Un 1K a donc une chambre et une cuisine à part ; un 2LDK a deux chambres plus un grand séjour-cuisine. Une ワンルーム (1R) n'a aucune séparation du tout : le coin cuisine est dans la pièce.",
        },
        {
          type: "example",
          japanese: "2LDKのマンション、駅から徒歩八分。",
          romaji: "ni eru dii kee no manshon, eki kara toho happun.",
          translation: "Un 2LDK en immeuble, à huit minutes à pied de la gare.",
          content:
            "Deux chambres, plus un séjour-cuisine commun : c'est le format familial standard au Japon. Notez que la surface totale n'est pas toujours indiquée en 畳 dans ce cas — les annonces passent au 平米 (へいべい), le mètre carré, dès que le logement dépasse une pièce.",
        },
        {
          type: "warning",
          content:
            "マンション ne veut pas dire « manoir ». Le mot vient de l'anglais mansion mais désigne un immeuble en béton armé, avec ascenseur et interphone. アパート désigne au contraire une construction légère, souvent en bois, de deux étages au maximum. La différence est concrète : loyer, isolation phonique et résistance sismique. Un francophone qui lit « appartement » derrière アパート se trompe de catégorie.",
        },
        {
          type: "tip",
          content:
            "La taille du tatami varie selon les régions : le 京間 de Kyoto fait environ 1,82 m², le 江戸間 de Tokyo environ 1,55 m². Un six-畳 à Tokyo est donc sensiblement plus petit qu'un six-畳 à Kyoto. Quand la surface compte vraiment, cherchez le chiffre en 平米 plutôt que le nombre de tatami.",
        },
      ],
    },
    {
      title: "駅から徒歩五分 : mesurer une distance",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "から marque le point de départ, まで le point d'arrivée. Les deux se placent après le nom, jamais avant, et fonctionnent aussi bien dans l'espace que dans le temps : 東京から大阪まで pour un trajet, 九時から五時まで pour des horaires. Dans une annonce immobilière, c'est la construction qui donne la distance, et elle se passe de verbe.",
        },
        {
          type: "example",
          japanese: "うちから駅まで、徒歩五分です。",
          romaji: "uchi kara eki made, toho gofun desu.",
          translation: "De chez moi à la gare, il y a cinq minutes à pied.",
          content:
            "Aucun verbe de déplacement : です suffit, parce que la phrase énonce une mesure et non une action. 徒歩 (とほ) appartient au registre écrit — c'est le mot des annonces et des panneaux. À l'oral on dit plutôt 歩いて五分.",
        },
        {
          type: "text",
          content:
            "Le 徒歩 des annonces n'est pas une estimation libre : la profession applique une convention selon laquelle une minute vaut quatre-vingts mètres. 徒歩五分 signifie donc exactement quatre cents mètres de trajet. Cette distance ignore les feux rouges, les côtes et les escaliers de la gare. En pratique, comptez un tiers de temps en plus, et beaucoup plus si la sortie de la gare est à l'opposé.",
        },
        {
          type: "warning",
          content:
            "Ne confondez pas まで et までに. まで décrit une durée continue, jusqu'à un terme ; までに fixe une échéance à ne pas dépasser. 六時まで待ちます = j'attends jusqu'à six heures. 六時までに来てください = venez avant six heures. Cette distinction sert tous les jours, à commencer par l'horaire de sortie des poubelles.",
        },
        {
          type: "example",
          japanese: "駅から近い部屋がいいです。",
          romaji: "eki kara chikai heya ga ii desu.",
          translation: "Je voudrais une chambre proche de la gare.",
          content:
            "近い et 遠い prennent から pour indiquer le point de référence : proche de la gare, loin du centre. C'est la phrase à donner à l'agent immobilier dès la première minute, avec le loyer maximum : elle élimine la moitié du catalogue.",
        },
        {
          type: "tip",
          content:
            "Trois questions couvrent l'essentiel d'une visite : 駅から何分ですか (à combien de minutes de la gare ?), コンビニは近いですか (y a-t-il une supérette à proximité ?), 家賃はいくらですか (combien coûte le loyer ?). Posez-les dans cet ordre, l'agent enchaînera de lui-même sur les frais.",
        },
      ],
    },
    {
      title: "〜ながら : deux actions en même temps",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour dire qu'on fait deux choses à la fois, on part de la base en ます du premier verbe, on retire ます et on ajoute ながら : 聞きます → 聞きながら, 食べます → 食べながら, します → しながら. La proposition en ながら décrit l'action d'arrière-plan ; c'est le verbe final qui porte le sens principal, le temps et la politesse.",
        },
        {
          type: "example",
          japanese: "音楽を聞きながら、部屋をそうじします。",
          romaji: "ongaku o kikinagara, heya o souji shimasu.",
          translation: "Je fais le ménage en écoutant de la musique.",
          content:
            "La phrase parle du ménage, pas de la musique : c'est そうじします qui est le verbe principal. Inverser les deux (「そうじしながら音楽を聞きます」) reste grammatical mais change le propos — on parlerait alors de l'écoute. Décidez d'abord ce que vous voulez annoncer, mettez le reste en ながら.",
        },
        {
          type: "warning",
          content:
            "ながら exige un seul et même sujet pour les deux actions. 「妻が料理しながら、私は部屋をそうじします」 est faux : deux personnes différentes agissent. Pour deux sujets distincts, le japonais utilise 〜間に, une autre construction. C'est l'erreur numéro un du francophone, parce que « pendant que » en français accepte n'importe quel sujet.",
        },
        {
          type: "comparison",
          content:
            "Le gérondif français couvre beaucoup plus de terrain que ながら : il exprime la simultanéité, mais aussi la manière et la cause (« en arrivant, j'ai vu », « en travaillant plus, tu réussiras »). ながら ne fait qu'une chose : superposer deux activités qui durent. Pour une cause ou une condition, il faut d'autres outils.",
        },
        {
          type: "example",
          japanese: "働きながら日本語を習います。",
          romaji: "hatarakinagara nihongo o naraimasu.",
          translation: "J'apprends le japonais tout en travaillant.",
          content:
            "ながら fonctionne aussi sur une échelle longue : ici les deux activités ne sont pas simultanées à la minute près, elles coexistent sur des mois. Cette phrase revient constamment dans les entretiens d'embauche et dans les dossiers de location, où l'on doit justifier ses revenus.",
        },
        {
          type: "tip",
          content:
            "Test rapide avant de parler : si vous pouvez remplacer le premier verbe par « tout en… » sans que la phrase devienne bancale, ながら convient. Sinon, coupez en deux phrases. Deux phrases correctes valent toujours mieux qu'une longue phrase fausse.",
        },
      ],
    },
    {
      title: "Ce que l'annonce ne dit pas",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le loyer affiché ne représente qu'une fraction de ce qu'il faut sortir à la signature. S'y ajoutent le 敷金 (caution, un à deux mois, restituée au départ moins les réparations), le 礼金 (zéro à deux mois, jamais restitué), la commission d'agence (souvent un mois), le premier loyer d'avance, une assurance incendie obligatoire et le changement de serrure. Le total atteint couramment quatre à six mois de loyer. Un appartement à 70 000 yens demande donc entre 280 000 et 420 000 yens le jour de la signature.",
        },
        {
          type: "text",
          content:
            "Le 礼金 mérite qu'on s'y arrête, car il n'a pas d'équivalent en France. C'est littéralement de « l'argent de remerciement » versé au propriétaire pour avoir accepté le locataire, hérité de la pénurie de logements de l'après-guerre. Il n'est pas une caution : il ne revient jamais, quel que soit l'état du logement à la sortie. Des annonces ゼロゼロ (敷金ゼロ・礼金ゼロ) existent, mais le manque à gagner se retrouve souvent dans le loyer mensuel ou dans les frais de nettoyage de sortie.",
        },
        {
          type: "text",
          content:
            "Le 保証人 est le vrai obstacle. La location japonaise exige traditionnellement un garant : une personne résidant au Japon, avec des revenus vérifiables, qui s'engage à payer à votre place. Un étranger fraîchement arrivé n'en a évidemment aucun. La solution courante est la 保証会社, une société de cautionnement qui joue ce rôle contre environ un demi-mois de loyer à l'entrée, puis une cotisation annuelle. Beaucoup d'agences l'imposent désormais même aux locataires japonais.",
        },
        {
          type: "warning",
          content:
            "Certains propriétaires refusent encore les locataires non japonais, parfois ouvertement au téléphone. Deux contournements existent et fonctionnent : les agences spécialisées dans la clientèle étrangère, et les logements UR (都市再生機構), un parc public qui ne demande ni 礼金, ni commission d'agence, ni garant, ni frais de renouvellement. En contrepartie, l'UR exige un niveau de revenus et une avance plus élevés.",
        },
        {
          type: "text",
          content:
            "Le tri des déchets est codifié commune par commune, et le non-respect se voit immédiatement. Les catégories de base sont 燃えるごみ (combustibles), 燃えないごみ (non combustibles), 資源ごみ (recyclables : bouteilles, canettes, papier) et 粗大ごみ (encombrants). Chaque catégorie a son jour de ramassage, beaucoup de communes imposent des sacs payants à leur nom, et les encombrants exigent un rendez-vous et une vignette achetée en supérette. On sort les sacs le matin même, pas la veille au soir : les corbeaux éventrent tout ce qui traîne la nuit.",
        },
        {
          type: "tip",
          content:
            "On ne perce pas les murs. Le bail impose le 原状回復, la remise en état d'origine, et chaque trou de vis se déduit du 敷金 à la sortie. Les Japonais s'équipent donc de 突っ張り棒 (barres de tension calées entre deux murs) et de crochets adhésifs repositionnables. Prenez des photos datées de chaque défaut le jour de l'entrée dans les lieux : c'est votre seule protection lors de l'état des lieux de sortie.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans une agence immobilière près de la gare. Lisa, arrivée depuis trois semaines, cherche un premier logement. L'employé fait dérouler les fiches sur son écran.",
    lines: [
      {
        speaker: "店員",
        japanese: "いらっしゃいませ。どんな部屋がいいですか。",
        romaji: "irasshaimase. donna heya ga ii desu ka.",
        french: "Bonjour. Quel type de logement souhaitez-vous ?",
        note: "どんな + nom = « quel genre de ». 〜がいいですか demande une préférence, pas un jugement : c'est l'ouverture standard en agence, avant même le budget.",
      },
      {
        speaker: "リサ",
        japanese: "駅から近い部屋がいいです。家賃は八万円までです。",
        romaji: "eki kara chikai heya ga ii desu. yachin wa hachiman en made desu.",
        french: "Je voudrais quelque chose près de la gare. Le loyer, jusqu'à 80 000 yens.",
        note: "まで pose ici un plafond, pas une destination : 八万円まで = « pas au-delà de 80 000 yens ». Annoncer son maximum dès la première phrase est attendu, pas impoli.",
      },
      {
        speaker: "店員",
        japanese: "こちらはいかがですか。六畳の1Kで、駅から徒歩五分です。",
        romaji: "kochira wa ikaga desu ka. rokujou no wan kee de, eki kara toho gofun desu.",
        french: "Que diriez-vous de celui-ci ? Un 1K de six tatami, à cinq minutes à pied de la gare.",
        note: "いかがですか est la version polie de どうですか. Le で de 1Kで relie deux informations sur le même logement, comme un « et » énumératif.",
      },
      {
        speaker: "リサ",
        japanese: "あまり狭くないですね。家賃はいくらですか。",
        romaji: "amari semakunai desu ne. yachin wa ikura desu ka.",
        french: "Ce n'est pas si petit. Combien fait le loyer ?",
        note: "あまり appelle obligatoirement une négation. Dire 狭くない plutôt que 広い est typiquement japonais : on nuance au lieu d'affirmer.",
      },
      {
        speaker: "店員",
        japanese: "七万五千円です。敷金は一か月、礼金も一か月です。",
        romaji: "nanaman gosen en desu. shikikin wa ikkagetsu, reikin mo ikkagetsu desu.",
        french: "75 000 yens. Un mois de caution, et un mois de 礼金 également.",
        note: "一か月 se lit いっかげつ. Le も de 礼金も signale que le second montant s'aligne sur le premier : « lui aussi, un mois ».",
      },
      {
        speaker: "リサ",
        japanese: "礼金はあとで返りますか。",
        romaji: "reikin wa ato de kaerimasu ka.",
        french: "Le 礼金 est-il rendu plus tard ?",
        note: "La question que tout étranger pose une fois, et une seule. 返ります (revenir, être restitué) se dit de la chose, pas de la personne.",
      },
      {
        speaker: "店員",
        japanese: "いいえ、礼金は返りません。敷金だけ、あとで返ります。",
        romaji: "iie, reikin wa kaerimasen. shikikin dake, ato de kaerimasu.",
        french: "Non, le 礼金 ne revient pas. Seule la caution est rendue au départ.",
        note: "だけ = « seulement », posé directement après le nom. C'est la ligne à retenir de toute l'unité.",
      },
      {
        speaker: "リサ",
        japanese: "保証人がいません。大丈夫ですか。",
        romaji: "hoshounin ga imasen. daijoubu desu ka.",
        french: "Je n'ai pas de garant. Est-ce que c'est un problème ?",
        note: "いません, et non ありません : le garant est une personne. Poser la question tout de suite évite de visiter dix logements pour rien.",
      },
      {
        speaker: "店員",
        japanese: "保証会社を使いますから、大丈夫です。では、契約の説明をしましょう。",
        romaji: "hoshou gaisha o tsukaimasu kara, daijoubu desu. dewa, keiyaku no setsumei o shimashou.",
        french: "Nous passons par une société de cautionnement, donc pas de souci. Bien, voyons le contrat.",
        note: "から après une phrase complète donne la cause. 保証会社 se lit ほしょうがいしゃ : 会社 sonorise son k en g dans un mot composé.",
      },
    ],
  },

  keyPoints: [
    "Une annonce se lit en deux codes : la surface en 畳 (六畳 = ろくじょう, environ 10 m²) et le plan 1R / 1K / 1DK / 2LDK, où le chiffre compte les pièces en plus du séjour-cuisine. アパート désigne une construction légère de deux étages, マンション un immeuble en béton.",
    "から…まで donne le trajet dans l'espace comme dans le temps, sans verbe : うちから駅まで徒歩五分です. Et 徒歩一分 vaut conventionnellement quatre-vingts mètres.",
    "まで (jusqu'à, durée) et までに (au plus tard, échéance) ne sont pas interchangeables : 六時まで待ちます / 六時までに来てください.",
    "〜ながら se forme sur la base en ます et exige un sujet unique ; le verbe final porte l'action principale, le temps et la politesse.",
    "Le coût d'entrée réel atteint quatre à six mois de loyer, le 礼金 n'est jamais restitué, et sans 保証人 il faut passer par une 保証会社 ou par le parc UR.",
  ],

  vocabulary: [
    {
      term: "部屋",
      kana: "へや",
      romaji: "heya",
      segments: [{ text: "部屋", reading: "へや" }],
      pitch: 2,
      french: "La pièce, la chambre, le logement",
      english: "Room",
      example: {
        sentence: "この部屋は明るいです。",
        romaji: "kono heya wa akarui desu.",
        translation: "Cette pièce est lumineuse.",
      },
    },
    {
      term: "アパート",
      kana: "アパート",
      romaji: "apaato",
      french: "Petit immeuble léger, souvent en bois",
      english: "Low-rise apartment building",
      example: {
        sentence: "駅の近くのアパートに住みます。",
        romaji: "eki no chikaku no apaato ni sumimasu.",
        translation: "J'habite dans un petit immeuble près de la gare.",
      },
    },
    {
      term: "マンション",
      kana: "マンション",
      romaji: "manshon",
      french: "Immeuble en béton armé",
      english: "Concrete apartment building",
      example: {
        sentence: "新しいマンションは家賃が高いです。",
        romaji: "atarashii manshon wa yachin ga takai desu.",
        translation: "Les immeubles neufs ont des loyers élevés.",
      },
    },
    {
      term: "家賃",
      kana: "やちん",
      romaji: "yachin",
      segments: [
        { text: "家", reading: "や" },
        { text: "賃", reading: "ちん" },
      ],
      pitch: 1,
      french: "Le loyer",
      english: "Rent",
      example: {
        sentence: "家賃は毎月二十五日に払います。",
        romaji: "yachin wa maitsuki nijuugonichi ni haraimasu.",
        translation: "Le loyer se paie le 25 de chaque mois.",
      },
    },
    {
      term: "敷金",
      kana: "しききん",
      romaji: "shikikin",
      segments: [
        { text: "敷", reading: "しき" },
        { text: "金", reading: "きん" },
      ],
      french: "La caution (restituée au départ)",
      english: "Security deposit",
      example: {
        sentence: "敷金は二か月分です。",
        romaji: "shikikin wa nikagetsubun desu.",
        translation: "La caution représente deux mois de loyer.",
      },
    },
    {
      term: "礼金",
      kana: "れいきん",
      romaji: "reikin",
      segments: [
        { text: "礼", reading: "れい" },
        { text: "金", reading: "きん" },
      ],
      french: "Argent de remerciement au propriétaire, non restitué",
      english: "Key money (non-refundable)",
      example: {
        sentence: "このアパートは礼金がありません。",
        romaji: "kono apaato wa reikin ga arimasen.",
        translation: "Cet immeuble ne demande pas de 礼金.",
      },
    },
    {
      term: "不動産屋",
      kana: "ふどうさんや",
      romaji: "fudousanya",
      segments: [
        { text: "不", reading: "ふ" },
        { text: "動", reading: "どう" },
        { text: "産", reading: "さん" },
        { text: "屋", reading: "や" },
      ],
      french: "L'agence immobilière",
      english: "Real estate agency",
      example: {
        sentence: "駅前の不動産屋に行きます。",
        romaji: "ekimae no fudousanya ni ikimasu.",
        translation: "Je vais à l'agence immobilière devant la gare.",
      },
    },
    {
      term: "大家さん",
      kana: "おおやさん",
      romaji: "ooyasan",
      segments: [
        { text: "大", reading: "おお" },
        { text: "家", reading: "や" },
        { text: "さん" },
      ],
      french: "Le propriétaire (du logement loué)",
      english: "Landlord",
      example: {
        sentence: "大家さんに電話します。",
        romaji: "ooyasan ni denwa shimasu.",
        translation: "J'appelle le propriétaire.",
      },
    },
    {
      term: "保証人",
      kana: "ほしょうにん",
      romaji: "hoshounin",
      segments: [
        { text: "保", reading: "ほ" },
        { text: "証", reading: "しょう" },
        { text: "人", reading: "にん" },
      ],
      french: "Le garant",
      english: "Guarantor",
      example: {
        sentence: "保証人が必要ですか。",
        romaji: "hoshounin ga hitsuyou desu ka.",
        translation: "Faut-il un garant ?",
      },
    },
    {
      term: "契約",
      kana: "けいやく",
      romaji: "keiyaku",
      segments: [
        { text: "契", reading: "けい" },
        { text: "約", reading: "やく" },
      ],
      pitch: 0,
      french: "Le contrat, le bail",
      english: "Contract",
      example: {
        sentence: "あした契約をします。",
        romaji: "ashita keiyaku o shimasu.",
        translation: "Je signe le contrat demain.",
      },
    },
    {
      term: "徒歩",
      kana: "とほ",
      romaji: "toho",
      segments: [
        { text: "徒", reading: "と" },
        { text: "歩", reading: "ほ" },
      ],
      pitch: 1,
      french: "À pied (registre écrit, annonces)",
      english: "On foot",
      example: {
        sentence: "会社まで徒歩十五分です。",
        romaji: "kaisha made toho juugofun desu.",
        translation: "Quinze minutes à pied jusqu'au bureau.",
      },
    },
    {
      term: "六畳",
      kana: "ろくじょう",
      romaji: "rokujou",
      segments: [
        { text: "六", reading: "ろく" },
        { text: "畳", reading: "じょう" },
      ],
      french: "Six tatami (mesure de surface, environ 10 m²)",
      english: "Six tatami mats (room size)",
      example: {
        sentence: "六畳の部屋は約十平米です。",
        romaji: "rokujou no heya wa yaku juu heibei desu.",
        translation: "Une pièce de six tatami fait environ dix mètres carrés.",
      },
    },
    {
      term: "引っ越す",
      kana: "ひっこす",
      romaji: "hikkosu",
      segments: [
        { text: "引", reading: "ひ" },
        { text: "っ" },
        { text: "越", reading: "こ" },
        { text: "す" },
      ],
      french: "Déménager",
      english: "To move house",
      example: {
        sentence: "来月、東京に引っ越します。",
        romaji: "raigetsu, Toukyou ni hikkoshimasu.",
        translation: "Je déménage à Tokyo le mois prochain.",
      },
    },
    {
      term: "住む",
      kana: "すむ",
      romaji: "sumu",
      segments: [
        { text: "住", reading: "す" },
        { text: "む" },
      ],
      pitch: 1,
      french: "Habiter, résider",
      english: "To live, to reside",
      example: {
        sentence: "京都に住みたいです。",
        romaji: "Kyouto ni sumitai desu.",
        translation: "Je voudrais habiter à Kyoto.",
      },
    },
    {
      term: "探す",
      kana: "さがす",
      romaji: "sagasu",
      segments: [
        { text: "探", reading: "さが" },
        { text: "す" },
      ],
      pitch: 0,
      french: "Chercher",
      english: "To look for",
      example: {
        sentence: "静かな部屋を探します。",
        romaji: "shizuka na heya o sagashimasu.",
        translation: "Je cherche une chambre calme.",
      },
    },
    {
      term: "広い",
      kana: "ひろい",
      romaji: "hiroi",
      segments: [
        { text: "広", reading: "ひろ" },
        { text: "い" },
      ],
      pitch: 2,
      french: "Vaste, spacieux",
      english: "Spacious, wide",
      example: {
        sentence: "この部屋はあまり広くないです。",
        romaji: "kono heya wa amari hirokunai desu.",
        translation: "Cette pièce n'est pas très grande.",
      },
    },
    {
      term: "狭い",
      kana: "せまい",
      romaji: "semai",
      segments: [
        { text: "狭", reading: "せま" },
        { text: "い" },
      ],
      pitch: 2,
      french: "Étroit, exigu",
      english: "Narrow, cramped",
      example: {
        sentence: "台所が狭いです。",
        romaji: "daidokoro ga semai desu.",
        translation: "La cuisine est étroite.",
      },
    },
    {
      term: "ごみ",
      kana: "ごみ",
      romaji: "gomi",
      pitch: 2,
      french: "Les déchets, les ordures",
      english: "Rubbish, garbage",
      example: {
        sentence: "ごみは朝八時までに出します。",
        romaji: "gomi wa asa hachiji made ni dashimasu.",
        translation: "Les ordures se sortent avant huit heures du matin.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-23-ex1",
      type: "comprehension",
      question: "Que désigne le 礼金 dans un bail japonais ?",
      correctAnswer: "Une somme versée au propriétaire, qui n'est jamais restituée",
      options: [
        "Une somme versée au propriétaire, qui n'est jamais restituée",
        "Une caution rendue au départ si le logement est en bon état",
        "La commission versée à l'agence immobilière",
        "Le premier loyer, payé d'avance à la signature",
      ],
      hint: "礼 signifie « remerciement ». Ce n'est pas une garantie.",
    },
    {
      id: "unit-23-ex2",
      type: "fill-blank",
      question: "駅 ___ アパートまで、徒歩五分です。",
      correctAnswer: "から",
      options: ["から", "まで", "で", "に"],
      optionsHint: ["kara", "made", "de", "ni"],
      optionsKana: ["から", "まで", "で", "に"],
      hint: "La gare est le point de départ du trajet.",
    },
    {
      id: "unit-23-ex3",
      type: "comprehension",
      question: "Dans une annonce, que signifie 2LDK ?",
      correctAnswer: "Deux pièces à vivre, en plus d'un séjour-salle à manger-cuisine",
      options: [
        "Deux pièces à vivre, en plus d'un séjour-salle à manger-cuisine",
        "Deux pièces en tout, séjour et cuisine compris",
        "Deux étages, avec une cuisine à chaque niveau",
        "Deux occupants au maximum, cuisine partagée",
      ],
      hint: "Le chiffre ne compte jamais l'espace commun désigné par les lettres.",
    },
    {
      id: "unit-23-ex4",
      type: "fill-blank",
      question: "___ 、部屋をそうじします。 (à partir de 音楽を聞く + ながら)",
      correctAnswer: "音楽を聞きながら",
      options: [
        "音楽を聞きながら",
        "音楽を聞くながら",
        "音楽を聞いてながら",
        "音楽を聞きますながら",
      ],
      optionsHint: [
        "ongaku o kikinagara",
        "ongaku o kikunagara",
        "ongaku o kiitenagara",
        "ongaku o kikimasunagara",
      ],
      optionsKana: [
        "おんがくをききながら",
        "おんがくをきくながら",
        "おんがくをきいてながら",
        "おんがくをききますながら",
      ],
      hint: "ながら se colle à la base en ます, une fois ます retiré.",
    },
    {
      id: "unit-23-ex5",
      type: "listen",
      question: "家賃はいくらですか。",
      correctAnswer: "Combien coûte le loyer ?",
      options: [
        "Combien coûte le loyer ?",
        "À combien s'élève la caution ?",
        "Quand faut-il payer le loyer ?",
        "Où se trouve la gare la plus proche ?",
      ],
      hint: "Le premier mot est le montant mensuel, pas la garantie.",
    },
    {
      id: "unit-23-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Je fais mes devoirs en écoutant de la musique. »",
      correctAnswer: "音楽を聞きながら勉強します。",
      options: ["音楽", "を", "聞きながら", "勉強します"],
      hint: "L'action principale, celle qui porte la politesse, se place à la fin.",
    },
    {
      id: "unit-23-ex7",
      type: "comprehension",
      question: "À quoi sert le 保証人 dans une location japonaise ?",
      correctAnswer: "Il s'engage à payer le loyer si le locataire ne le fait plus",
      options: [
        "Il s'engage à payer le loyer si le locataire ne le fait plus",
        "Il garantit l'état du logement lors de la remise des clés",
        "Il sert d'interprète au moment de la signature",
        "Il verse le 敷金 à la place du locataire",
      ],
      hint: "C'est un engagement financier, pas un service rendu au moment de la visite.",
    },
    {
      id: "unit-23-ex8",
      type: "translate",
      question: "Traduisez : « De chez moi à la gare, il y a trois minutes à pied. »",
      correctAnswer: "うちから駅まで、徒歩三分です。",
      options: [
        "うちから駅まで、徒歩三分です。",
        "うちまで駅から、徒歩三分です。",
        "うちから駅から、徒歩三分です。",
        "うちに駅まで、徒歩三分です。",
      ],
      optionsHint: [
        "uchi kara eki made, toho sanpun desu.",
        "uchi made eki kara, toho sanpun desu.",
        "uchi kara eki kara, toho sanpun desu.",
        "uchi ni eki made, toho sanpun desu.",
      ],
      hint: "から se pose sur le départ, まで sur l'arrivée — et l'ordre des deux compte.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-22"],
};
