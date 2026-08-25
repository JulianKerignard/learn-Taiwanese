import type { CourseUnit } from "@/types/course";

export const unit29: CourseUnit = {
  id: "unit-29",
  number: 29,
  title: "Le passif : subir plutôt que faire",
  titleJa: "受身形：〜れる・〜られる",
  chapter: 5,
  description:
    "Former le passif des trois groupes, puis l'employer comme le font les Japonais : le passif de préjudice, qui dit qu'on a subi un événement, et le passif d'objet possédé, qui garde を contre toute intuition française.",
  icon: "受",

  sections: [
    {
      title: "Construire un passif",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La formation suit les trois groupes habituels. Un verbe godan passe sa terminaison en あ段 puis reçoit れる : 読む → 読まれる, 盗む → 盗まれる, 叱る → 叱られる, 踏む → 踏まれる. Un verbe ichidan remplace る par られる : 食べる → 食べられる, 褒める → 褒められる. する donne される, et 来る donne 来られる, qui se lit こられる. Le verbe obtenu est lui-même un ichidan : à partir de là tout se conjugue normalement — 盗まれます、盗まれた、盗まれない、盗まれて.",
        },
        {
          type: "example",
          japanese: "この本は多くの人に読まれています。",
          romaji: "kono hon wa ooku no hito ni yomarete imasu.",
          translation: "Ce livre est lu par beaucoup de gens.",
          content:
            "読む est un godan : む devient ま, puis れる. Le passif ainsi formé accepte ensuite la forme en て + いる comme n'importe quel ichidan, d'où 読まれています pour un état durable. Rien d'exceptionnel ici : c'est le seul cas de l'unité où le passif japonais recouvre exactement le passif français.",
        },
        {
          type: "warning",
          content:
            "Deux pièges de formation. Les godan en う prennent わ et non あ : 言う → 言われる, 笑う → 笑われる ; 「言あれる」 n'existe pas. Et pour les ichidan, 食べられる est à la fois le passif et le potentiel — seul le contexte tranche. 刺身が食べられる = « je peux manger du sashimi » ; 弟にケーキを食べられた = « mon frère m'a mangé mon gâteau ».",
        },
        {
          type: "example",
          japanese: "先生に褒められました。",
          romaji: "sensei ni homeraremashita.",
          translation: "Le professeur m'a félicité.",
          content:
            "Retenez la place des rôles : celui qui subit est le sujet, resté implicite ici parce que c'est vous ; celui qui agit se marque par に. Cette phrase se traduirait maladroitement par « j'ai été félicité par le professeur » — le français préfère l'actif, le japonais préfère garder la personne dont on parle en position de sujet.",
        },
        {
          type: "tip",
          content:
            "Méthode de contrôle pour les godan : partez de la forme en ない. 読まない → retirez ない, ajoutez れる → 読まれる. 言わない → 言われる. La base est déjà calculée, vous ne pouvez pas vous tromper de voyelle.",
        },
      ],
    },
    {
      title: "Le passif direct : qui subit, qui agit",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le schéma de base est [victime]は [agent]に [verbe au passif]. La grande différence avec le français tient au choix du sujet : le japonais met en position de sujet l'être humain concerné, presque jamais un objet. « La porte a été ouverte » passe mal en japonais ; on dira plutôt à l'actif « quelqu'un a ouvert la porte », ou on gardera la personne comme thème. Un passif japonais dont le sujet est une chose sonne écrit, administratif, distant.",
        },
        {
          type: "example",
          japanese: "田中さんのパーティーに招待されました。",
          romaji: "Tanaka-san no paatii ni shoutai saremashita.",
          translation: "J'ai été invité à la fête de M. Tanaka.",
          content:
            "する → される s'applique à tous les verbes en 〜する, qui forment l'essentiel du vocabulaire abstrait : 招待する、発表する、招待される、発表される. Ici le に de パーティーに marque la destination de l'invitation, pas l'agent : l'agent, 田中さんに, est omis parce que le possessif の le rend évident.",
        },
        {
          type: "example",
          japanese: "さっき部長に呼ばれました。",
          romaji: "sakki buchou ni yobaremashita.",
          translation: "Le chef m'a convoqué tout à l'heure.",
          content:
            "呼ぶ → 呼ばれる. Au bureau, cette phrase s'entend dix fois par jour : elle laisse la personne qui parle en sujet et présente le supérieur comme la source de l'action. La version active 部長が私を呼びました est correcte mais déplace l'attention sur le chef, ce qui n'est pas le propos.",
        },
        {
          type: "comparison",
          content:
            "に marque l'agent dans la langue courante. Mais avec les verbes de création — 作る、書く、建てる、発明する — l'écrit soigné préfère によって : この歌は若い作曲家によって作られました. Règle pratique : si le résultat de l'action est un objet qui n'existait pas avant, によって ; sinon に.",
        },
        {
          type: "example",
          japanese: "この学校は百年前に建てられました。",
          romaji: "kono gakkou wa hyakunen mae ni tateraremashita.",
          translation: "Cette école a été construite il y a cent ans.",
          content:
            "Ici l'agent est absent, et c'est volontaire : personne ne s'intéresse au maçon. C'est le seul cas où un sujet inanimé passe sans effort, parce qu'aucun être humain n'est concerné par l'événement. Notez le に de 百年前に, qui marque le repère temporel et n'a rien à voir avec l'agent.",
        },
        {
          type: "warning",
          content:
            "Le réflexe francophone à combattre : traduire mécaniquement chaque passif du français. « On m'a dit que… » ne donne pas un passif mais 〜と聞きました ; « ce plat est servi froid » se dira à l'actif. Un texte japonais truffé de passifs directs se repère immédiatement comme une traduction.",
        },
      ],
    },
    {
      title: "迷惑の受身 : le passif de préjudice",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Voici le cœur de l'unité, et la construction qui n'a aucun équivalent en français. Le japonais peut mettre au passif des verbes qui n'ont pas de complément d'objet — 降る、泣く、来る、死ぬ、休む. Le passif ne déplace alors rien du tout : il ajoute un participant, la personne qui a subi l'événement. 雨が降った décrit la météo ; 雨に降られた dit que la pluie m'est tombée dessus et que j'en ai pâti. C'est cet emploi, et non le passif ordinaire, qui domine dans la conversation quotidienne.",
        },
        {
          type: "example",
          japanese: "帰る途中で雨に降られて、服が濡れました。",
          romaji: "kaeru tochuu de ame ni furarete, fuku ga nuremashita.",
          translation: "En rentrant je me suis fait surprendre par la pluie, et mes vêtements ont été trempés.",
          content:
            "降る n'a jamais de complément d'objet : impossible de « promouvoir » quoi que ce soit. Le passif sert uniquement à introduire une victime, restée implicite. La suite en て + conséquence négative est presque obligatoire : le passif de préjudice annonce un dommage, on attend donc de savoir lequel.",
        },
        {
          type: "example",
          japanese: "ゆうべ子どもに泣かれて、よく寝られませんでした。",
          romaji: "yuube kodomo ni nakarete, yoku neraremasen deshita.",
          translation: "Cette nuit mon enfant a pleuré et je n'ai pas pu bien dormir.",
          content:
            "Le français est obligé de faire deux propositions coordonnées, parce qu'il ne peut pas dire « j'ai été pleuré par mon enfant ». Le japonais tient les deux informations — l'événement et la victime — dans un seul verbe. 泣かれて porte à lui seul tout le reproche, ce qui explique qu'on n'ajoute jamais 「大変でした」 : ce serait redondant.",
        },
        {
          type: "text",
          content:
            "Comment le reconnaître à la lecture : un verbe au passif qui n'a visiblement pas de complément d'objet, un agent en に souvent inattendu (雨に、犬に、隣の人に), et une suite négative. Comment le produire : demandez-vous si l'événement vous a dérangé. Si oui, le passif est non seulement possible, il est attendu. Rester à l'actif donne une phrase correcte mais froide, qui laisse votre interlocuteur se demander pourquoi vous racontez ça.",
        },
        {
          type: "warning",
          content:
            "L'erreur typique du francophone n'est pas de mal former le passif : c'est de ne pas y penser. Vous direz 雨が降りました、子どもが泣きました、友だちが来ました, trois phrases irréprochables mais qui ne disent pas que vous avez subi. À l'inverse, n'exprimez pas la victime avec 私は sauf pour contraster : elle se déduit, et 「私は雨に降られました」 sonne lourd.",
        },
        {
          type: "example",
          japanese: "隣の人に大きい声で話されて、ぜんぜん勉強できませんでした。",
          romaji: "tonari no hito ni ookii koe de hanasarete, zenzen benkyou dekimasen deshita.",
          translation: "Mon voisin a parlé fort et je n'ai pas pu travailler du tout.",
          content:
            "話す a pourtant un objet possible, mais il n'y en a pas ici : le passif ne fait qu'ajouter la victime. Cette phrase est le degré maximal de reproche qu'un Japonais formulera à voix haute sur un voisin bruyant — d'où l'intérêt de savoir l'entendre.",
        },
        {
          type: "tip",
          content:
            "Trois phrases à recycler telles quelles : 雨に降られました (surpris par la pluie), 泥棒に入られました (cambriolé), 友だちに来られて、出かけられませんでした (un ami a débarqué et je n'ai pas pu sortir). Elles couvrent à elles seules la moitié des emplois réels.",
        },
      ],
    },
    {
      title: "Se faire prendre quelque chose, et le passif de la presse",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Deuxième construction contre-intuitive : quand l'événement touche un objet qui vous appartient, c'est vous qui devenez sujet, et l'objet garde を. 財布を盗まれました, littéralement « je me suis fait voler quant au portefeuille ». Le français comme l'anglais promeuvent l'objet au rang de sujet ; le japonais promeut le propriétaire, parce que c'est lui qui subit. Le を survit donc à la mise au passif, ce qui déroute au début et devient vite un réflexe.",
        },
        {
          type: "example",
          japanese: "電車で財布を盗まれました。犯人はまだ分かっていません。",
          romaji: "densha de saifu o nusumaremashita. hannin wa mada wakatte imasen.",
          translation: "Je me suis fait voler mon portefeuille dans le train. On ne sait pas encore qui c'était.",
          content:
            "Ne dites pas 私の財布を盗まれました : le の私 est déjà contenu dans le fait que vous êtes la victime, et l'ajouter alourdit. Notez aussi qu'aucun agent n'est exprimé — on ne sait pas qui a volé. Le passif permet précisément de raconter l'événement sans avoir à nommer un coupable.",
        },
        {
          type: "example",
          japanese: "弟にケーキを食べられました。",
          romaji: "otouto ni keeki o taberaremashita.",
          translation: "Mon petit frère m'a mangé mon gâteau.",
          content:
            "Le modèle complet : victime implicite, agent en に, objet en を, verbe au passif. Comparez avec 弟がケーキを食べました, qui rapporte simplement un fait. La version passive ajoute que le gâteau était le vôtre et que vous êtes lésé — deux informations que le français ne peut placer qu'avec un possessif et un ton.",
        },
        {
          type: "comparison",
          content:
            "私の財布が盗まれました est grammatical, mais c'est le registre du procès-verbal : la phrase parle de l'objet. 私は財布を盗まれました parle de vous. Quand vous êtes la victime, la seconde est la seule naturelle ; réservez la première à un rapport écrit.",
        },
        {
          type: "text",
          content:
            "Reste le troisième emploi, celui de l'écrit informatif : journaux, annonces, notices. L'agent y est systématiquement effacé, parce qu'il est institutionnel ou sans intérêt. 発表される、行われる、使われる、と言われている forment l'ossature de ce registre. Aucun préjudice ici, aucune victime : c'est un passif neutre, l'équivalent du « il a été annoncé que » français.",
        },
        {
          type: "example",
          japanese: "事故の原因はまだ発表されていません。",
          romaji: "jiko no gen'in wa mada happyou sarete imasen.",
          translation: "La cause de l'accident n'a pas encore été communiquée.",
          content:
            "Le sujet est une chose, l'agent — la police, la compagnie — est passé sous silence. Voilà pourquoi ce passif-là est réservé à l'écrit et aux annonces : à l'oral, entre deux personnes, taire l'agent paraîtrait évasif.",
        },
        {
          type: "tip",
          content:
            "〜と言われています (« on dit que ») est la formule à retenir en priorité : elle vous permet d'avancer une information sans en assumer la source, ce qui est très valorisé au Japon. 日本の夏は年々暑くなっていると言われています. Vous la lirez dans chaque article de presse.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Lundi matin dans un bureau de Tokyo. Marie arrive en retard et trempée. Presque chaque réplique passe par un passif — c'est ainsi qu'on raconte une mauvaise matinée en japonais.",
    lines: [
      {
        speaker: "田中",
        japanese: "マリーさん、大丈夫ですか。ずいぶん濡れていますね。",
        romaji: "Marii-san, daijoubu desu ka. zuibun nurete imasu ne.",
        french: "Marie, ça va ? Vous êtes trempée.",
        note: "濡れる est un verbe ordinaire, pas un passif : il décrit l'état. Le passif arrive à la réplique suivante.",
      },
      {
        speaker: "マリー",
        japanese: "ええ…。駅から歩いているときに、雨に降られました。",
        romaji: "ee... eki kara aruite iru toki ni, ame ni furaremashita.",
        french: "Oui… En marchant depuis la gare, je me suis fait surprendre par la pluie.",
        note: "雨に降られました et non 雨が降りました : la seconde décrirait la météo, la première dit que vous l'avez subie.",
      },
      {
        speaker: "田中",
        japanese: "それは大変でしたね。傘は？",
        romaji: "sore wa taihen deshita ne. kasa wa?",
        french: "Quelle poisse. Et votre parapluie ?",
      },
      {
        speaker: "マリー",
        japanese: "電車に忘れました。しかも、隣の人に足を踏まれて…。",
        romaji: "densha ni wasuremashita. shikamo, tonari no hito ni ashi o fumarete...",
        french: "Je l'ai oublié dans le train. Et en plus, mon voisin m'a marché sur le pied…",
        note: "足を踏まれて garde を : c'est la victime qui est promue en sujet, pas le pied. Phrase laissée en suspens, très courante à l'oral.",
      },
      {
        speaker: "田中",
        japanese: "今日はついていませんね。",
        romaji: "kyou wa tsuite imasen ne.",
        french: "Ce n'est vraiment pas votre jour.",
      },
      {
        speaker: "マリー",
        japanese: "ゆうべも子どもに泣かれて、ぜんぜん寝られませんでした。",
        romaji: "yuube mo kodomo ni nakarete, zenzen neraremasen deshita.",
        french: "Hier soir déjà, mon enfant a pleuré et je n'ai pas pu dormir du tout.",
        note: "泣く n'a pas de complément d'objet : le passif ne sert ici qu'à désigner celle qui en a souffert.",
      },
      {
        speaker: "田中",
        japanese: "あ、マリーさん、さっき部長に呼ばれていましたよ。",
        romaji: "a, Marii-san, sakki buchou ni yobarete imashita yo.",
        french: "Ah, Marie, le chef vous demandait tout à l'heure.",
        note: "Le passif garde マリーさん comme sujet. La version active 部長がマリーさんを呼んでいました mettrait le supérieur en avant, ce qui n'est pas le sujet de la conversation.",
      },
      {
        speaker: "マリー",
        japanese: "え、また叱られるんでしょうか。",
        romaji: "e, mata shikarareru n deshou ka.",
        french: "Quoi, je vais encore me faire gronder ?",
        note: "叱られる au non-passé : le passif se conjugue comme n'importe quel ichidan, y compris avec んでしょうか pour marquer l'inquiétude.",
      },
      {
        speaker: "田中",
        japanese: "いいえ、逆ですよ。先週の発表が部長にとても褒められていました。",
        romaji: "iie, gyaku desu yo. senshuu no happyou ga buchou ni totemo homerarete imashita.",
        french: "Non, au contraire. Votre présentation de la semaine dernière a été très appréciée du chef.",
        note: "Sujet inanimé (発表), donc registre légèrement rapporté. Avec une personne en sujet on dirait マリーさんは部長に褒められました.",
      },
    ],
  },

  keyPoints: [
    "Formation : godan → base en あ + れる (読む → 読まれる ; les verbes en う prennent わ : 言う → 言われる) ; ichidan → られる (褒める → 褒められる) ; する → される ; 来る → 来られる. Le verbe passif se conjugue ensuite comme un ichidan.",
    "L'agent se marque par に : 先生に叱られました. Avec les verbes de création (作る、書く、建てる), l'écrit soigné préfère によって.",
    "Le passif de préjudice (迷惑の受身) n'existe pas en français : 雨に降られました dit que vous avez subi la pluie. Il s'applique même aux verbes sans complément d'objet — 降る、泣く、来る — et appelle presque toujours une conséquence négative.",
    "Quand on vous prend quelque chose, l'objet garde を : 財布を盗まれました, 足を踏まれました. C'est le propriétaire qui devient sujet, pas la chose.",
    "Dans la presse et les annonces, le passif efface l'agent : 結果は来週発表されます、〜と言われています. Mais ne traduisez jamais mécaniquement un passif français : l'actif ou un simple thème en は est souvent plus japonais.",
  ],

  vocabulary: [
    {
      term: "盗む",
      kana: "ぬすむ",
      romaji: "nusumu",
      segments: [
        { text: "盗", reading: "ぬす" },
        { text: "む" },
      ],
      pitch: 2,
      french: "Voler, dérober",
      english: "To steal",
      example: {
        sentence: "電車で財布を盗まれました。",
        romaji: "densha de saifu o nusumaremashita.",
        translation: "Je me suis fait voler mon portefeuille dans le train.",
      },
    },
    {
      term: "泥棒",
      kana: "どろぼう",
      romaji: "dorobou",
      segments: [
        { text: "泥", reading: "どろ" },
        { text: "棒", reading: "ぼう" },
      ],
      french: "Un voleur, un cambrioleur",
      english: "Thief, burglar",
      example: {
        sentence: "先週、泥棒に入られました。",
        romaji: "senshuu, dorobou ni hairaremashita.",
        translation: "La semaine dernière, on m'a cambriolé.",
      },
    },
    {
      term: "財布",
      kana: "さいふ",
      romaji: "saifu",
      segments: [
        { text: "財", reading: "さい" },
        { text: "布", reading: "ふ" },
      ],
      pitch: 0,
      french: "Le portefeuille, le porte-monnaie",
      english: "Wallet, purse",
    },
    {
      term: "犯人",
      kana: "はんにん",
      romaji: "hannin",
      segments: [
        { text: "犯", reading: "はん" },
        { text: "人", reading: "にん" },
      ],
      french: "Le coupable, l'auteur (d'un délit)",
      english: "Culprit, offender",
      example: {
        sentence: "犯人はまだ分かっていません。",
        romaji: "hannin wa mada wakatte imasen.",
        translation: "On ne sait pas encore qui est le coupable.",
      },
    },
    {
      term: "降る",
      kana: "ふる",
      romaji: "furu",
      segments: [
        { text: "降", reading: "ふ" },
        { text: "る" },
      ],
      pitch: 1,
      french: "Tomber (pluie, neige)",
      english: "To fall (rain, snow)",
      example: {
        sentence: "帰る途中で雨に降られました。",
        romaji: "kaeru tochuu de ame ni furaremashita.",
        translation: "Je me suis fait surprendre par la pluie en rentrant.",
      },
    },
    {
      term: "濡れる",
      kana: "ぬれる",
      romaji: "nureru",
      segments: [
        { text: "濡", reading: "ぬ" },
        { text: "れる" },
      ],
      french: "Être mouillé, se mouiller",
      english: "To get wet",
      example: {
        sentence: "服がすっかり濡れました。",
        romaji: "fuku ga sukkari nuremashita.",
        translation: "Mes vêtements sont complètement trempés.",
      },
    },
    {
      term: "叱る",
      kana: "しかる",
      romaji: "shikaru",
      segments: [
        { text: "叱", reading: "しか" },
        { text: "る" },
      ],
      french: "Gronder, réprimander",
      english: "To scold",
      example: {
        sentence: "また先生に叱られました。",
        romaji: "mata sensei ni shikararemashita.",
        translation: "Je me suis encore fait gronder par le professeur.",
      },
    },
    {
      term: "褒める",
      kana: "ほめる",
      romaji: "homeru",
      segments: [
        { text: "褒", reading: "ほ" },
        { text: "める" },
      ],
      pitch: 2,
      french: "Féliciter, faire des compliments",
      english: "To praise",
      example: {
        sentence: "部長に褒められました。",
        romaji: "buchou ni homeraremashita.",
        translation: "Le chef m'a félicité.",
      },
    },
    {
      term: "呼ぶ",
      kana: "よぶ",
      romaji: "yobu",
      segments: [
        { text: "呼", reading: "よ" },
        { text: "ぶ" },
      ],
      pitch: 0,
      french: "Appeler, convoquer",
      english: "To call, to summon",
      example: {
        sentence: "さっき部長に呼ばれました。",
        romaji: "sakki buchou ni yobaremashita.",
        translation: "Le chef m'a convoqué tout à l'heure.",
      },
    },
    {
      term: "招待する",
      kana: "しょうたいする",
      romaji: "shoutai suru",
      segments: [
        { text: "招", reading: "しょう" },
        { text: "待", reading: "たい" },
        { text: "する" },
      ],
      french: "Inviter",
      english: "To invite",
      example: {
        sentence: "結婚式に招待されました。",
        romaji: "kekkonshiki ni shoutai saremashita.",
        translation: "J'ai été invité à un mariage.",
      },
    },
    {
      term: "発表する",
      kana: "はっぴょうする",
      romaji: "happyou suru",
      segments: [
        { text: "発", reading: "はっ" },
        { text: "表", reading: "ぴょう" },
        { text: "する" },
      ],
      french: "Annoncer, publier, présenter",
      english: "To announce, to present",
      example: {
        sentence: "試験の結果は来週発表されます。",
        romaji: "shiken no kekka wa raishuu happyou saremasu.",
        translation: "Les résultats de l'examen seront publiés la semaine prochaine.",
      },
    },
    {
      term: "建てる",
      kana: "たてる",
      romaji: "tateru",
      segments: [
        { text: "建", reading: "た" },
        { text: "てる" },
      ],
      pitch: 2,
      french: "Construire, bâtir",
      english: "To build",
      example: {
        sentence: "この学校は百年前に建てられました。",
        romaji: "kono gakkou wa hyakunen mae ni tateraremashita.",
        translation: "Cette école a été construite il y a cent ans.",
      },
    },
    {
      term: "踏む",
      kana: "ふむ",
      romaji: "fumu",
      segments: [
        { text: "踏", reading: "ふ" },
        { text: "む" },
      ],
      pitch: 0,
      french: "Marcher sur, piétiner",
      english: "To step on",
      example: {
        sentence: "電車の中で足を踏まれました。",
        romaji: "densha no naka de ashi o fumaremashita.",
        translation: "On m'a marché sur le pied dans le train.",
      },
    },
    {
      term: "足",
      kana: "あし",
      romaji: "ashi",
      segments: [{ text: "足", reading: "あし" }],
      pitch: 2,
      french: "Le pied, la jambe",
      english: "Foot, leg",
    },
    {
      term: "笑う",
      kana: "わらう",
      romaji: "warau",
      segments: [
        { text: "笑", reading: "わら" },
        { text: "う" },
      ],
      pitch: 0,
      french: "Rire ; se moquer",
      english: "To laugh; to laugh at",
      example: {
        sentence: "発音を間違えて、みんなに笑われました。",
        romaji: "hatsuon o machigaete, minna ni warawaremashita.",
        translation: "Je me suis trompé de prononciation et tout le monde s'est moqué de moi.",
      },
    },
    {
      term: "泣く",
      kana: "なく",
      romaji: "naku",
      segments: [
        { text: "泣", reading: "な" },
        { text: "く" },
      ],
      pitch: 0,
      french: "Pleurer",
      english: "To cry",
      example: {
        sentence: "ゆうべ子どもに泣かれました。",
        romaji: "yuube kodomo ni nakaremashita.",
        translation: "Cette nuit, mon enfant a pleuré (et j'en ai subi les conséquences).",
      },
    },
    {
      term: "隣",
      kana: "となり",
      romaji: "tonari",
      segments: [{ text: "隣", reading: "となり" }],
      pitch: 0,
      french: "À côté ; le voisin",
      english: "Next door, the person next to you",
      example: {
        sentence: "隣の人に大きい声で話されました。",
        romaji: "tonari no hito ni ookii koe de hanasaremashita.",
        translation: "Mon voisin a parlé fort (et ça m'a dérangé).",
      },
    },
    {
      term: "迷惑",
      kana: "めいわく",
      romaji: "meiwaku",
      segments: [
        { text: "迷", reading: "めい" },
        { text: "惑", reading: "わく" },
      ],
      pitch: 1,
      french: "La gêne, le désagrément causé à autrui",
      english: "Trouble, nuisance",
      example: {
        sentence: "ご迷惑をおかけしました。",
        romaji: "gomeiwaku o okake shimashita.",
        translation: "Je vous ai causé du dérangement.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-29-ex1",
      type: "comprehension",
      question: "Quelle est la forme passive de 読む ?",
      correctAnswer: "読まれる",
      options: ["読まれる", "読められる", "読まされる", "読めれる"],
      optionsHint: ["yomareru", "yomerareru", "yomasareru", "yomereru"],
      optionsKana: ["よまれる", "よめられる", "よまされる", "よめれる"],
      hint: "Godan : base en あ段, puis れる. Partez de 読まない.",
    },
    {
      id: "unit-29-ex2",
      type: "fill-blank",
      question: "帰る途中で雨 ___ 降られました。 (« Je me suis fait surprendre par la pluie en rentrant. »)",
      correctAnswer: "に",
      options: ["に", "が", "を", "で"],
      optionsHint: ["ni", "ga", "o", "de"],
      hint: "Le verbe est déjà au passif : la particule cherchée marque l'agent.",
    },
    {
      id: "unit-29-ex3",
      type: "comprehension",
      question: "Dans 「財布を盗まれました」, pourquoi 財布 garde-t-il を au lieu de devenir sujet ?",
      correctAnswer: "Parce que le passif promeut la victime, pas l'objet : 財布 reste complément d'objet.",
      options: [
        "Parce que le passif promeut la victime, pas l'objet : 財布 reste complément d'objet.",
        "Parce que 盗む est un verbe intransitif et n'a pas de sujet possible.",
        "Parce que を remplace が devant tous les verbes au passif.",
        "Parce que le sujet de la phrase est le voleur, resté implicite.",
      ],
      hint: "Demandez-vous de qui parle réellement la phrase.",
    },
    {
      id: "unit-29-ex4",
      type: "fill-blank",
      question: "ゆうべ子どもに ___ 、よく寝られませんでした。 (泣く, passif en forme て)",
      correctAnswer: "泣かれて",
      options: ["泣かれて", "泣いて", "泣かせて", "泣かれって"],
      optionsHint: ["nakarete", "naite", "nakasete", "nakarette"],
      optionsKana: ["なかれて", "ないて", "なかせて", "なかれって"],
      hint: "Passif de préjudice : l'enfant pleure, c'est vous qui subissez.",
    },
    {
      id: "unit-29-ex5",
      type: "listen",
      question: "電車で財布を盗まれました。",
      correctAnswer: "Je me suis fait voler mon portefeuille dans le train.",
      options: [
        "Je me suis fait voler mon portefeuille dans le train.",
        "J'ai volé un portefeuille dans le train.",
        "J'ai oublié mon portefeuille dans le train.",
        "On a retrouvé mon portefeuille dans le train.",
      ],
      hint: "Écoutez la terminaison du verbe : 盗みました ou 盗まれました ?",
    },
    {
      id: "unit-29-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Hier, on m'a marché sur le pied dans le train. »",
      correctAnswer: "きのう電車の中で足を踏まれました。",
      options: ["きのう", "電車の中で", "足を", "踏まれました"],
      hint: "Le repère temporel ouvre, le lieu suit, l'objet possédé garde を.",
    },
    {
      id: "unit-29-ex7",
      type: "comprehension",
      question: "Laquelle de ces phrases exprime un passif de préjudice (迷惑の受身) ?",
      correctAnswer: "雨に降られて、服が濡れました。",
      options: [
        "雨に降られて、服が濡れました。",
        "雨が降って、服が濡れました。",
        "雨が降られました。",
        "雨を降らせました。",
      ],
      optionsHint: [
        "ame ni furarete, fuku ga nuremashita.",
        "ame ga futte, fuku ga nuremashita.",
        "ame ga furaremashita.",
        "ame o furasemashita.",
      ],
      hint: "Cherchez l'agent en に et un verbe au passif sans complément d'objet.",
    },
    {
      id: "unit-29-ex8",
      type: "translate",
      question: "Traduisez : « Cette école a été construite il y a cent ans. »",
      correctAnswer: "この学校は百年前に建てられました。",
      options: [
        "この学校は百年前に建てられました。",
        "この学校は百年前に建てました。",
        "この学校を百年前に建てられました。",
        "この学校は百年前に建てさせました。",
      ],
      optionsHint: [
        "kono gakkou wa hyakunen mae ni tateraremashita.",
        "kono gakkou wa hyakunen mae ni tatemashita.",
        "kono gakkou o hyakunen mae ni tateraremashita.",
        "kono gakkou wa hyakunen mae ni tatesasemashita.",
      ],
      hint: "L'agent n'intéresse personne : sujet inanimé, verbe au passif, particule は.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-28"],
};
