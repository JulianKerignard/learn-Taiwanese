import type { CourseUnit } from "@/types/course";

export const unit30: CourseUnit = {
  id: "unit-30",
  number: 30,
  title: "Le causatif : faire faire, laisser faire",
  titleNative: "使役形：〜せる・〜させる",
  chapter: 5,
  description:
    "Une seule forme, させる, pour deux sens opposés que seul le contexte sépare. La particule qui les départage, le causatif-passif de la contrainte subie, et le させてください qui structure toute la vie de bureau.",
  icon: "使",

  sections: [
    {
      title: "Construire un causatif",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La mécanique reprend celle du passif, à une syllabe près. Un verbe godan passe sa terminaison en あ段 puis reçoit せる : 書く → 書かせる, 待つ → 待たせる, 泳ぐ → 泳がせる, 手伝う → 手伝わせる (les verbes en う prennent わ). Un verbe ichidan remplace る par させる : 食べる → 食べさせる, 決める → 決めさせる. する devient させる, et 来る devient 来させる, qui se lit こさせる. Comme le passif, le causatif obtenu se conjugue ensuite comme un ichidan : 書かせます、書かせた、書かせない、書かせて.",
        },
        {
          type: "example",
          native: "先生は学生に日本語で説明させました。",
          romanization: "sensei wa gakusei ni nihongo de setsumei sasemashita.",
          translation: "Le professeur a fait expliquer les étudiants en japonais.",
          content:
            "説明する → 説明させる : tous les verbes en 〜する suivent ce moule sans exception. Le sujet grammatical est celui qui provoque l'action, 先生 ; celui qui l'exécute réellement, 学生, n'est pas sujet. C'est le renversement de perspective à intégrer : en japonais, la phrase appartient à celui qui décide.",
        },
        {
          type: "warning",
          content:
            "書かせる (causatif) et 書かれる (passif) ne diffèrent que par un kana, et ils disent des choses opposées : l'un vous met en position de décideur, l'autre en position de victime. À l'oral, la différence tient à un せ contre un れ. Écoutez-la, et surtout ne l'improvisez pas : 部長に書かれました et 部長に書かせました n'ont rien à voir.",
        },
        {
          type: "example",
          native: "部長は私を大阪に出張させました。",
          romanization: "buchou wa watashi o oosaka ni shucchou sasemashita.",
          translation: "Le chef m'a envoyé en déplacement à Osaka.",
          content:
            "出張する n'a pas de complément d'objet : la personne envoyée prend donc を. Notez au passage que le français dispose d'un verbe unique (« envoyer ») là où le japonais compose : décision + verbe d'action. C'est pour cela que le causatif est si productif — il fabrique des dizaines de verbes que le japonais n'a pas en propre.",
        },
        {
          type: "tip",
          content:
            "Contrôle rapide pour les godan : partez de la forme en ない. 待たない → 待たせる. 泳がない → 泳がせる. 手伝わない → 手伝わせる. La base en あ段 est déjà faite, il ne reste qu'à substituer せる à ない.",
        },
      ],
    },
    {
      title: "を ou に : le point technique",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "C'est ici que se joue la correction de vos phrases, et la règle est mécanique. Si le verbe est intransitif — 行く、帰る、走る、泳ぐ、休む、泣く、参加する — la personne à qui l'on fait faire prend を. Si le verbe est transitif — 食べる、持つ、書く、掃除する — elle prend に, tout simplement parce que を est déjà occupé par l'objet. Avant de construire la phrase, posez-vous une seule question : ce verbe a-t-il un complément d'objet ? La particule en découle.",
        },
        {
          type: "example",
          native: "先生は子どもたちをプールで泳がせました。",
          romanization: "sensei wa kodomotachi o puuru de oyogasemashita.",
          translation: "Le professeur a fait nager les enfants à la piscine.",
          content:
            "泳ぐ ne prend jamais de complément d'objet : la place de を est libre, les enfants la prennent. Remarquez que で reste le で de lieu habituel — le causatif ne modifie aucune des autres particules de la phrase, il ne touche qu'à celle de la personne.",
        },
        {
          type: "example",
          native: "部長は私に重い荷物を持たせました。",
          romanization: "buchou wa watashi ni omoi nimotsu o motasemashita.",
          translation: "Le chef m'a fait porter les bagages lourds.",
          content:
            "持つ est transitif : 荷物を occupe la place de を, donc 私 bascule sur に. Comparez avec l'exemple précédent — même structure, même intention, particule différente, et la seule variable est la transitivité du verbe.",
        },
        {
          type: "warning",
          content:
            "Le japonais interdit deux を dans une même proposition (二重ヲ格). 「部長は私を荷物を持たせました」 est agrammatical, et c'est précisément l'erreur que produit un francophone qui a retenu « la personne prend を » sans la nuance. Un seul を par proposition, toujours.",
        },
        {
          type: "comparison",
          content:
            "Avec un verbe intransitif, に reste possible et change la couleur : 子どもを行かせました suggère qu'on l'y envoie, qu'il ait envie ou non ; 子どもに行かせました suggère qu'il voulait y aller et qu'on l'a laissé faire. を pousse vers la contrainte, に vers la permission. Cette nuance est réelle mais fine : tant qu'elle n'est pas assurée, appliquez la règle de transitivité.",
        },
        {
          type: "tip",
          content:
            "Fabriquez-vous deux phrases modèles et récitez-les jusqu'à ce qu'elles viennent seules : 母は私に野菜を食べさせました (transitif → に) et 先生は学生を走らせました (intransitif → を). Vous n'aurez ensuite qu'à comparer votre verbe à l'un des deux.",
        },
      ],
    },
    {
      title: "Faire faire ou laisser faire : le contexte décide",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Une seule forme couvre deux sens que le français distingue soigneusement : « faire faire » (contrainte) et « laisser faire » (permission). Le japonais ne les sépare pas parce que les deux relèvent d'une même idée : quelqu'un a le pouvoir de décider de l'action d'un autre. Ce qui tranche, c'est la relation entre les deux personnes et ce qu'on sait de leurs envies. Un supérieur qui fait faire quelque chose à un subordonné contraint ; un parent qui accède au désir de son enfant permet.",
        },
        {
          type: "example",
          native: "部長は田中さんに残業させました。",
          romanization: "buchou wa Tanaka-san ni zangyou sasemashita.",
          translation: "Le chef a fait faire des heures supplémentaires à Tanaka.",
          content:
            "Personne ne demande à rester tard : la hiérarchie et le contenu de l'action imposent la lecture « contrainte ». Aucun mot ne le dit explicitement, et c'est bien le point — un Japonais entend ici une plainte à peine voilée sur le chef.",
        },
        {
          type: "example",
          native: "父は私に好きな大学を選ばせてくれました。",
          romanization: "chichi wa watashi ni sukina daigaku o erabasete kuremashita.",
          translation: "Mon père m'a laissé choisir l'université que je voulais.",
          content:
            "〜させてくれる lève toute ambiguïté : くれる signale un bienfait reçu, donc une permission accordée, jamais une contrainte. C'est l'outil le plus sûr pour dire « laisser faire ». Sa symétrique 〜させてあげる s'emploie quand c'est vous qui accordez la permission à quelqu'un de plus bas dans la hiérarchie ou plus jeune.",
        },
        {
          type: "tip",
          content:
            "Deux adverbes fixent aussi la lecture à eux seuls : 自由に〜させる (laisser faire librement) et 無理に〜させる (forcer). 息子には自由に決めさせています / 子どもに無理をさせないでください. Quand le contexte ne suffit pas, ajoutez-en un plutôt que de laisser planer le doute.",
        },
        {
          type: "warning",
          content:
            "Ne dirigez jamais un causatif vers un supérieur. 「部長に説明させます」 signifie « je vais faire expliquer le chef » : vous vous placez au-dessus de lui, c'est une faute grave de registre. Pour la même idée on emploie 〜ていただく : 部長に説明していただきます (« je vais demander au chef de bien vouloir expliquer »).",
        },
        {
          type: "text",
          content:
            "À la lecture, réunissez trois indices avant de trancher : qui est le sujet, quelle est sa position par rapport à l'autre, et l'action est-elle désirable. Un patron + des heures supplémentaires donnent une contrainte ; un parent + un jeu vidéo donnent une permission. Le japonais compte sur ce calcul, il ne le fait pas à votre place.",
        },
      ],
    },
    {
      title: "させられる et させてください",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Empilez le passif sur le causatif et vous obtenez させられる : on m'a fait faire quelque chose, et je l'ai mal vécu. C'est la forme la plus lourde du japonais, et l'une des plus employées. Formation : ichidan 食べる → 食べさせられる ; する → させられる ; 来る → 来させられる. Les godan contractent 〜せられる en 〜される : 待たせられる devient 待たされる, 書かせられる devient 書かされる. Seule exception, les godan en す ne contractent pas, sous peine de bégaiement : 話させられる et non 「話さされる」.",
        },
        {
          type: "example",
          native: "きのう部長に二時間も待たされました。",
          romanization: "kinou buchou ni nijikan mo matasaremashita.",
          translation: "Hier, le chef m'a fait attendre deux bonnes heures.",
          content:
            "L'agent de la contrainte prend に, comme au passif. Le も de 二時間も n'est pas décoratif : il souligne l'excès, et il accompagne presque systématiquement させられる. Sans lui la phrase reste correcte mais perd le grief, qui est pourtant la raison d'être de la forme.",
        },
        {
          type: "warning",
          content:
            "Trois formes issues du même verbe, à ne pas confondre : 待たせました (j'ai fait attendre quelqu'un), 待たされました (on m'a fait attendre), 待たれました (quelqu'un m'a attendu, avec une nuance de gêne). お待たせしました, que vous entendrez dans tous les restaurants du Japon, est la version humble de la première : « désolé de vous avoir fait attendre ».",
        },
        {
          type: "example",
          native: "子どものとき、毎日野菜を食べさせられました。",
          romanization: "kodomo no toki, mainichi yasai o tabesaseraremashita.",
          translation: "Enfant, on me forçait à manger des légumes tous les jours.",
          content:
            "食べる est un ichidan : pas de contraction, 食べさせられる tel quel. La forme est toujours négative — personne ne dit 「おいしいケーキを食べさせられました」 pour se réjouir. Si l'expérience a été agréable, on emploie 〜させてもらいました.",
        },
        {
          type: "text",
          content:
            "Reste l'emploi le plus utile au quotidien, et il est à l'opposé : 〜させてください demande la permission de faire quelque chose soi-même. Littéralement « donnez-moi de faire ». L'échelle de politesse monte de 〜させてください à 〜させてもらえませんか, puis à 〜させていただけませんか, qui est la forme standard face à un supérieur. Sur ce point le japonais est plus indirect que le français : on ne dit pas « je vais partir tôt », on demande l'autorisation de partir tôt.",
        },
        {
          type: "example",
          native: "すみません、今日は少し早く帰らせていただけませんか。",
          romanization: "sumimasen, kyou wa sukoshi hayaku kaerasete itadakemasen ka.",
          translation: "Excusez-moi, pourriez-vous me permettre de partir un peu plus tôt aujourd'hui ?",
          content:
            "帰る (godan) → 帰らせる → 帰らせて + いただけませんか. La forme négative interrogative いただけませんか laisse à l'autre la possibilité de refuser sans perdre la face, ce qui est exactement le but. C'est la phrase à connaître par cœur avant votre premier jour dans une entreprise japonaise.",
        },
        {
          type: "tip",
          content:
            "〜させていただきます (« je vais me permettre de… ») est omniprésent en entreprise, y compris là où le français n'annoncerait rien : 説明させていただきます avant une présentation, 参加させていただきます pour accepter une invitation. Elle ne demande pas vraiment la permission : elle signale que vous agissez avec l'accord tacite de l'autre.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Fin d'après-midi dans une entreprise japonaise. Marie doit partir plus tôt et demande l'autorisation à son chef de service ; elle échange ensuite avec Tanaka, qui a passé une mauvaise journée.",
    lines: [
      {
        speaker: "マリー",
        native: "部長、すみません。今日は少し早く帰らせていただけませんか。",
        romanization: "buchou, sumimasen. kyou wa sukoshi hayaku kaerasete itadakemasen ka.",
        french: "Chef, excusez-moi. Pourriez-vous me permettre de partir un peu plus tôt aujourd'hui ?",
        note: "帰らせて + いただけませんか : on ne demande pas la permission de faire faire, mais celle de faire soi-même. Registre standard face à un supérieur.",
      },
      {
        speaker: "部長",
        native: "どうしましたか。",
        romanization: "dou shimashita ka.",
        french: "Que se passe-t-il ?",
      },
      {
        speaker: "マリー",
        native: "息子が熱を出したので、病院に連れて行きたいんです。",
        romanization: "musuko ga netsu o dashita node, byouin ni tsurete ikitai n desu.",
        french: "Mon fils a de la fièvre, j'aimerais l'emmener à l'hôpital.",
        note: "ので donne la raison sur un ton neutre, plus doux que から dans une demande adressée à un supérieur.",
      },
      {
        speaker: "部長",
        native: "それは心配ですね。もちろん、帰ってください。",
        romanization: "sore wa shinpai desu ne. mochiron, kaette kudasai.",
        french: "C'est inquiétant. Bien sûr, rentrez.",
        note: "Le chef pourrait répondre 帰らせてあげます (« je vous laisse rentrer »), mais ce serait condescendant : il emploie l'impératif poli ordinaire.",
      },
      {
        speaker: "マリー",
        native: "ありがとうございます。助かります。",
        romanization: "arigatou gozaimasu. tasukarimasu.",
        french: "Merci beaucoup. Vous me sauvez.",
      },
      {
        speaker: "田中",
        native: "よかったですね。私はきのう、九時まで残業させられましたよ。",
        romanization: "yokatta desu ne. watashi wa kinou, kuji made zangyou saseraremashita yo.",
        french: "Tant mieux pour vous. Moi, hier, on m'a fait rester jusqu'à neuf heures.",
        note: "残業させられました, causatif-passif : la contrainte subie. 残業しました dirait la même chose sans le grief.",
      },
      {
        speaker: "マリー",
        native: "え、部長にですか。",
        romanization: "e, buchou ni desu ka.",
        french: "Quoi, c'est le chef ?",
        note: "に marque l'agent de la contrainte, exactement comme au passif.",
      },
      {
        speaker: "田中",
        native: "ええ。しかも、会議の前に一時間も待たされました。",
        romanization: "ee. shikamo, kaigi no mae ni ichijikan mo matasaremashita.",
        french: "Oui. Et en plus, on m'a fait attendre une heure entière avant la réunion.",
        note: "待たせられました se contracte obligatoirement en 待たされました : tous les godan hors terminaison す font de même.",
      },
      {
        speaker: "マリー",
        native: "それは大変でしたね。今日は早く休ませてもらってください。",
        romanization: "sore wa taihen deshita ne. kyou wa hayaku yasumasete moratte kudasai.",
        french: "Quelle journée. Aujourd'hui, faites-vous accorder du repos plus tôt.",
        note: "〜させてもらう, c'est obtenir la permission ; le sens est positif, à l'exact opposé de させられる.",
      },
    ],
  },

  keyPoints: [
    "Formation : godan → base en あ段 + せる (書く → 書かせる ; les verbes en う prennent わ : 手伝う → 手伝わせる) ; ichidan → させる (食べる → 食べさせる) ; する → させる ; 来る → 来させる. Le causatif se conjugue ensuite comme un ichidan.",
    "Une seule forme pour deux sens opposés, « faire faire » et « laisser faire » : c'est la hiérarchie et le caractère désirable de l'action qui tranchent. 〜させてくれる et 〜させてあげる signalent explicitement la permission.",
    "Particules : verbe intransitif → la personne prend を (先生は学生を走らせました) ; verbe transitif → elle prend に, car を est déjà pris par l'objet (母は私に野菜を食べさせました). Jamais deux を dans une même proposition.",
    "Le causatif-passif させられる exprime la contrainte subie et toujours mal vécue : 残業させられました. Les godan contractent 〜せられる en 〜される (待たせられる → 待たされる), sauf ceux en す : 話させられる.",
    "〜させてください et 〜させていただけませんか demandent la permission de faire soi-même : 説明させてください、早く帰らせていただけませんか. Et n'adressez jamais un causatif à un supérieur — employez 〜ていただく.",
  ],

  vocabulary: [
    {
      term: "手伝う",
      reading: "てつだう",
      romanization: "tetsudau",
      segments: [
        { text: "手", reading: "て" },
        { text: "伝", reading: "つだ" },
        { text: "う" },
      ],
      pitch: 3,
      french: "Aider, donner un coup de main",
      english: "To help, to assist",
      example: {
        sentence: "私にも手伝わせてください。",
        romanization: "watashi ni mo tetsudawasete kudasai.",
        translation: "Laissez-moi vous aider, moi aussi.",
      },
    },
    {
      term: "待つ",
      reading: "まつ",
      romanization: "matsu",
      segments: [
        { text: "待", reading: "ま" },
        { text: "つ" },
      ],
      pitch: 1,
      french: "Attendre",
      english: "To wait",
      example: {
        sentence: "一時間も待たされました。",
        romanization: "ichijikan mo matasaremashita.",
        translation: "On m'a fait attendre une heure entière.",
      },
    },
    {
      term: "残業",
      reading: "ざんぎょう",
      romanization: "zangyou",
      segments: [
        { text: "残", reading: "ざん" },
        { text: "業", reading: "ぎょう" },
      ],
      french: "Les heures supplémentaires",
      english: "Overtime work",
      example: {
        sentence: "きのうは残業させられました。",
        romanization: "kinou wa zangyou saseraremashita.",
        translation: "Hier, on m'a fait faire des heures supplémentaires.",
      },
    },
    {
      term: "出張",
      reading: "しゅっちょう",
      romanization: "shucchou",
      segments: [
        { text: "出", reading: "しゅっ" },
        { text: "張", reading: "ちょう" },
      ],
      french: "Le déplacement professionnel",
      english: "Business trip",
      example: {
        sentence: "部長は私を大阪に出張させました。",
        romanization: "buchou wa watashi o oosaka ni shucchou sasemashita.",
        translation: "Le chef m'a envoyé en déplacement à Osaka.",
      },
    },
    {
      term: "部長",
      reading: "ぶちょう",
      romanization: "buchou",
      segments: [
        { text: "部", reading: "ぶ" },
        { text: "長", reading: "ちょう" },
      ],
      pitch: 0,
      french: "Le chef de service, le directeur de département",
      english: "Department manager",
    },
    {
      term: "掃除する",
      reading: "そうじする",
      romanization: "souji suru",
      segments: [
        { text: "掃", reading: "そう" },
        { text: "除", reading: "じ" },
        { text: "する" },
      ],
      french: "Faire le ménage, nettoyer",
      english: "To clean",
      example: {
        sentence: "母は私に部屋を掃除させました。",
        romanization: "haha wa watashi ni heya o souji sasemashita.",
        translation: "Ma mère m'a fait nettoyer ma chambre.",
      },
    },
    {
      term: "野菜",
      reading: "やさい",
      romanization: "yasai",
      segments: [
        { text: "野", reading: "や" },
        { text: "菜", reading: "さい" },
      ],
      pitch: 0,
      french: "Les légumes",
      english: "Vegetables",
      example: {
        sentence: "子どものとき、毎日野菜を食べさせられました。",
        romanization: "kodomo no toki, mainichi yasai o tabesaseraremashita.",
        translation: "Enfant, on me forçait à manger des légumes tous les jours.",
      },
    },
    {
      term: "泳ぐ",
      reading: "およぐ",
      romanization: "oyogu",
      segments: [
        { text: "泳", reading: "およ" },
        { text: "ぐ" },
      ],
      pitch: 2,
      french: "Nager",
      english: "To swim",
      example: {
        sentence: "先生は子どもたちをプールで泳がせました。",
        romanization: "sensei wa kodomotachi o puuru de oyogasemashita.",
        translation: "Le professeur a fait nager les enfants à la piscine.",
      },
    },
    {
      term: "走る",
      reading: "はしる",
      romanization: "hashiru",
      segments: [
        { text: "走", reading: "はし" },
        { text: "る" },
      ],
      pitch: 2,
      french: "Courir",
      english: "To run",
      example: {
        sentence: "毎朝、犬を公園で走らせます。",
        romanization: "maiasa, inu o kouen de hashirasemasu.",
        translation: "Tous les matins, je fais courir mon chien au parc.",
      },
    },
    {
      term: "休む",
      reading: "やすむ",
      romanization: "yasumu",
      segments: [
        { text: "休", reading: "やす" },
        { text: "む" },
      ],
      pitch: 2,
      french: "Se reposer ; s'absenter, prendre congé",
      english: "To rest; to take a day off",
      example: {
        sentence: "今日は少し休ませてください。",
        romanization: "kyou wa sukoshi yasumasete kudasai.",
        translation: "Laissez-moi me reposer un peu aujourd'hui.",
      },
    },
    {
      term: "練習する",
      reading: "れんしゅうする",
      romanization: "renshuu suru",
      segments: [
        { text: "練", reading: "れん" },
        { text: "習", reading: "しゅう" },
        { text: "する" },
      ],
      french: "S'entraîner, s'exercer",
      english: "To practise",
      example: {
        sentence: "毎日ピアノを練習させられました。",
        romanization: "mainichi piano o renshuu saseraremashita.",
        translation: "On me forçait à travailler le piano tous les jours.",
      },
    },
    {
      term: "説明する",
      reading: "せつめいする",
      romanization: "setsumei suru",
      segments: [
        { text: "説", reading: "せつ" },
        { text: "明", reading: "めい" },
        { text: "する" },
      ],
      french: "Expliquer",
      english: "To explain",
      example: {
        sentence: "もう一度説明させてください。",
        romanization: "mou ichido setsumei sasete kudasai.",
        translation: "Laissez-moi expliquer une fois de plus.",
      },
    },
    {
      term: "参加する",
      reading: "さんかする",
      romanization: "sanka suru",
      segments: [
        { text: "参", reading: "さん" },
        { text: "加", reading: "か" },
        { text: "する" },
      ],
      french: "Participer, prendre part",
      english: "To take part, to participate",
      example: {
        sentence: "会議に参加させていただきます。",
        romanization: "kaigi ni sanka sasete itadakimasu.",
        translation: "Je me permettrai de participer à la réunion.",
      },
    },
    {
      term: "許可",
      reading: "きょか",
      romanization: "kyoka",
      segments: [
        { text: "許", reading: "きょ" },
        { text: "可", reading: "か" },
      ],
      pitch: 1,
      french: "L'autorisation, la permission",
      english: "Permission, authorisation",
      example: {
        sentence: "部長の許可をもらいました。",
        romanization: "buchou no kyoka o moraimashita.",
        translation: "J'ai obtenu l'autorisation du chef.",
      },
    },
    {
      term: "自由",
      reading: "じゆう",
      romanization: "jiyuu",
      segments: [
        { text: "自", reading: "じ" },
        { text: "由", reading: "ゆう" },
      ],
      pitch: 2,
      french: "La liberté ; libre",
      english: "Freedom; free",
      example: {
        sentence: "息子には自由に決めさせています。",
        romanization: "musuko ni wa jiyuu ni kimesasete imasu.",
        translation: "Je laisse mon fils décider librement.",
      },
    },
    {
      term: "無理",
      reading: "むり",
      romanization: "muri",
      segments: [
        { text: "無", reading: "む" },
        { text: "理", reading: "り" },
      ],
      pitch: 1,
      french: "L'excès, l'impossible ; déraisonnable",
      english: "Unreasonable, impossible",
      example: {
        sentence: "子どもに無理をさせないでください。",
        romanization: "kodomo ni muri o sasenai de kudasai.",
        translation: "Ne poussez pas les enfants au-delà de leurs forces.",
      },
    },
    {
      term: "息子",
      reading: "むすこ",
      romanization: "musuko",
      segments: [
        { text: "息", reading: "むす" },
        { text: "子", reading: "こ" },
      ],
      pitch: 0,
      french: "Le fils (le sien)",
      english: "Son",
    },
    {
      term: "荷物",
      reading: "にもつ",
      romanization: "nimotsu",
      segments: [
        { text: "荷", reading: "に" },
        { text: "物", reading: "もつ" },
      ],
      pitch: 1,
      french: "Les bagages, le colis",
      english: "Luggage, package",
      example: {
        sentence: "部長は私に重い荷物を持たせました。",
        romanization: "buchou wa watashi ni omoi nimotsu o motasemashita.",
        translation: "Le chef m'a fait porter les bagages lourds.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-30-ex1",
      type: "comprehension",
      question: "Quelle est la forme causative de 行く ?",
      correctAnswer: "行かせる",
      options: ["行かせる", "行かれる", "行かさせる", "行けさせる"],
      optionsHint: ["ikaseru", "ikareru", "ikasaseru", "ikesaseru"],
      optionsReading: ["いかせる", "いかれる", "いかさせる", "いけさせる"],
      hint: "Godan : base en あ段, puis せる. Partez de 行かない.",
    },
    {
      id: "unit-30-ex2",
      type: "fill-blank",
      question: "母は私 ___ 野菜を食べさせました。 (« Ma mère m'a fait manger des légumes. »)",
      correctAnswer: "に",
      options: ["に", "を", "が", "で"],
      optionsHint: ["ni", "o", "ga", "de"],
      hint: "食べる est transitif : la place de を est déjà occupée par 野菜.",
    },
    {
      id: "unit-30-ex3",
      type: "fill-blank",
      question: "きのう部長に二時間も ___ 。 (« Hier, le chef m'a fait attendre deux heures. »)",
      correctAnswer: "待たされました",
      options: ["待たされました", "待たせました", "待たれました", "待ちました"],
      optionsHint: ["matasaremashita", "matasemashita", "mataremashita", "machimashita"],
      optionsReading: ["またされました", "またせました", "またれました", "まちました"],
      hint: "Causatif-passif : c'est vous qui subissez la contrainte. Les godan contractent せられる en される.",
    },
    {
      id: "unit-30-ex4",
      type: "comprehension",
      question: "Pourquoi dit-on 「母は私に野菜を食べさせた」 et non 「母は私を野菜を食べさせた」 ?",
      correctAnswer: "Parce que 食べる est transitif : を marque déjà 野菜, et une proposition ne peut pas porter deux を.",
      options: [
        "Parce que 食べる est transitif : を marque déjà 野菜, et une proposition ne peut pas porter deux を.",
        "Parce que 食べる est intransitif et refuse tout complément d'objet.",
        "Parce que la personne à qui l'on fait faire prend toujours に au causatif.",
        "Parce que le sujet de la phrase est 母, ce qui interdit を ailleurs.",
      ],
      hint: "Comparez avec 先生は学生を走らせました.",
    },
    {
      id: "unit-30-ex5",
      type: "comprehension",
      question: "À quoi sert 〜させてください ?",
      correctAnswer: "À demander la permission de faire soi-même quelque chose.",
      options: [
        "À demander la permission de faire soi-même quelque chose.",
        "À ordonner à quelqu'un de faire quelque chose.",
        "À se plaindre d'une contrainte que l'on a subie.",
        "À refuser poliment une demande venant d'un supérieur.",
      ],
      hint: "説明させてください : qui explique, celui qui parle ou l'autre ?",
    },
    {
      id: "unit-30-ex6",
      type: "listen",
      question: "きのう部長に残業させられました。",
      correctAnswer: "Hier, le chef m'a fait faire des heures supplémentaires.",
      options: [
        "Hier, le chef m'a fait faire des heures supplémentaires.",
        "Hier, j'ai fait faire des heures supplémentaires au chef.",
        "Hier, le chef a fait des heures supplémentaires.",
        "Hier, j'ai demandé au chef de rester travailler.",
      ],
      hint: "させられる : qui décide, et qui subit ?",
    },
    {
      id: "unit-30-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Ma mère m'a fait nettoyer ma chambre. »",
      correctAnswer: "母は私に部屋を掃除させました。",
      options: ["母は", "私に", "部屋を", "掃除させました"],
      hint: "掃除する est transitif : la personne prend に, l'objet garde を.",
    },
    {
      id: "unit-30-ex8",
      type: "translate",
      question: "Traduisez : « Laissez-moi expliquer, s'il vous plaît. »",
      correctAnswer: "説明させてください。",
      options: [
        "説明させてください。",
        "説明してください。",
        "説明されてください。",
        "説明させられてください。",
      ],
      optionsHint: [
        "setsumei sasete kudasai.",
        "setsumei shite kudasai.",
        "setsumei sarete kudasai.",
        "setsumei saserarete kudasai.",
      ],
      hint: "C'est vous qui expliquez : vous demandez l'autorisation de le faire.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-29"],
};
