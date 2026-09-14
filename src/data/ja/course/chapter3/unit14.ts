import type { CourseUnit } from "@/types/course";

export const unit14: CourseUnit = {
  id: "unit-14",
  number: 14,
  title: "Les verbes à la forme polie en ます",
  titleNative: "動詞のます形",
  chapter: 3,
  description:
    "La conjugaison polie du verbe : ます pour l'affirmatif, ません pour le négatif, か pour la question. À la fin de cette unité vous dites ce que vous faites, ce que vous ne faites pas, et vous le demandez à quelqu'un.",
  icon: "行",

  sections: [
    {
      title: "ます et ません : une forme, toutes les personnes",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le verbe japonais ne se conjugue ni en personne ni en nombre. 食べます se traduit selon le contexte par « je mange », « tu manges », « il mange » ou « nous mangeons » : la forme ne bouge pas. Ce qui varie, c'est le registre (poli ou neutre) et le temps (passé ou non-passé). ます est la forme polie non-passée, celle qu'on emploie avec toute personne qui n'est pas un proche.",
        },
        {
          type: "example",
          native: "わたしは毎日コーヒーを飲みます。",
          romanization: "watashi wa mainichi koohii o nomimasu.",
          translation: "Je bois du café tous les jours.",
          content:
            "L'ordre est fixe sur un point : le verbe ferme la phrase. わたしは disparaît dès que le contexte est clair, ce qui est presque toujours le cas — un Japonais dirait simplement 毎日コーヒーを飲みます。 Répéter わたしは à chaque phrase est la marque la plus immédiate d'un débutant.",
        },
        {
          type: "text",
          content:
            "La négation ne s'ajoute pas : elle remplace. ます devient ません, et rien d'autre ne change dans la phrase. Pas d'auxiliaire, pas de particule de négation en deux morceaux comme le « ne… pas » français. 飲みます → 飲みません、わかります → わかりません。",
        },
        {
          type: "example",
          native: "にくを食べません。",
          romanization: "niku o tabemasen.",
          translation: "Je ne mange pas de viande.",
          content:
            "Une seule forme couvre « je n'en mange pas en ce moment », « je n'en mange jamais » et « je n'en mangerai pas ». C'est la phrase à connaître par cœur si vous êtes végétarien : au restaurant, にくを食べません est compris immédiatement, là où une explication longue ne le sera pas.",
        },
        {
          type: "text",
          content:
            "Le japonais n'a pas de futur distinct du présent. ます couvre l'action en cours d'habitude, l'action générale et l'action à venir. C'est le complément de temps qui tranche : 毎日行きます (j'y vais tous les jours), あした行きます (j'y vais demain), 今行きます (j'y vais tout de suite). Sans complément de temps, la phrase se lit selon la situation.",
        },
        {
          type: "warning",
          content:
            "Deux réflexes francophones à couper tout de suite. Un : ne cherchez pas à fabriquer « je vais manger » avec un verbe auxiliaire — 食べます le dit déjà. Deux : ne mettez jamais です après un verbe en ます. ×食べますです n'existe pas ; です sert aux noms et aux adjectifs, ます se suffit à lui-même.",
        },
        {
          type: "tip",
          content:
            "Apprenez chaque verbe par paire : forme du dictionnaire et forme en ます (飲む / 飲みます). Les dictionnaires et les manuels de grammaire listent toujours la première, la vie courante emploie la seconde. Savoir passer de l'une à l'autre est exactement l'objet de la section suivante.",
        },
      ],
    },
    {
      title: "Trois groupes de verbes",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Tous les verbes japonais se répartissent en trois groupes, et le passage à ます dépend du groupe. Le groupe 1, dit godan (五段), est de loin le plus fourni : la voyelle finale /u/ de la forme du dictionnaire passe à /i/, puis on ajoute ます. 飲む → 飲みます、書く → 書きます、話す → 話します、読む → 読みます、聞く → 聞きます。",
        },
        {
          type: "example",
          native: "買う → 買います",
          romanization: "kau → kaimasu",
          translation: "acheter → achète (poli)",
          content:
            "Les verbes en う suivent la même règle : le /u/ final devient /i/, donc ka-u donne ka-i-masu. C'est bien い et non わ : ×買わます n'existe pas. Le わ apparaîtra plus tard, dans la négation neutre 買わない, mais jamais devant ます.",
        },
        {
          type: "text",
          content:
            "Le groupe 2, dit ichidan (一段), est le plus simple : る tombe, ます prend sa place. 食べる → 食べます、見る → 見ます。 Ce groupe ne contient que des verbes dont la forme du dictionnaire finit par -eru ou -iru. Si un verbe ne se termine pas par る, il est forcément du groupe 1 : cette moitié de test est fiable à cent pour cent.",
        },
        {
          type: "warning",
          content:
            "L'autre moitié du test ne l'est pas. 帰る (かえる, rentrer) finit par -eru et appartient pourtant au groupe 1 : 帰ります, et non ×帰えます. Même piège avec 入る (はいる, entrer), 走る (はしる, courir), 知る (しる, savoir). Ces verbes s'apprennent avec leur groupe, comme on apprend le genre d'un nom allemand.",
        },
        {
          type: "text",
          content:
            "Le groupe 3 ne compte que deux verbes, mais ce sont deux des plus fréquents de la langue : する → します (faire) et 来る → 来ます (venir, lu きます). Leur irrégularité se retrouvera dans toutes les conjugaisons à venir, donc autant les fixer maintenant.",
        },
        {
          type: "example",
          native: "あとででんわします。",
          romanization: "ato de denwa shimasu.",
          translation: "Je téléphonerai plus tard.",
          content:
            "する est la machine à fabriquer des verbes du japonais : accolé à un nom, il le transforme en action. でんわ (le téléphone) devient でんわします (téléphoner), そうじ (le ménage) devient そうじします. Chaque nom d'activité que vous apprenez vous offre donc un verbe gratuit.",
        },
        {
          type: "tip",
          content:
            "Ce classement n'est pas un exercice scolaire : la forme en て, le passé en た, le potentiel, le passif et l'impératif se construisent tous à partir de la même distinction godan / ichidan / irrégulier. Le temps investi ici est réutilisé pendant tout le reste du cours.",
        },
      ],
    },
    {
      title: "Le verbe à la fin, la question avec か",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La phrase japonaise se termine par le verbe, sans exception. Les compléments qui le précèdent peuvent changer d'ordre parce que ce sont les particules, et non la position, qui indiquent leur rôle : を marque l'objet direct, へ ou に la direction avec 行きます、来ます、帰ります. Le francophone doit donc apprendre à retarder le verbe : l'information essentielle arrive en dernier.",
        },
        {
          type: "example",
          native: "あした東京へ行きます。",
          romanization: "ashita Toukyou e ikimasu.",
          translation: "Demain, je vais à Tokyo.",
          content:
            "Trois choses à noter. La particule へ se prononce « e » et jamais « he » — c'est le seul kana qui change de valeur en tant que particule. Le complément de temps ouvre volontiers la phrase. Et 行きます, le mot le plus important, arrive à la fin : on écoute une phrase japonaise jusqu'au bout ou on ne l'écoute pas.",
        },
        {
          type: "text",
          content:
            "Pour poser une question, on ajoute か à la fin de la phrase. Rien d'autre ne bouge : pas d'inversion, pas de tournure en « est-ce que », pas même d'intonation montante obligatoire, puisque か fait déjà le travail. À l'écrit soigné, la phrase se ferme par le point japonais 。 et non par un point d'interrogation.",
        },
        {
          type: "example",
          native: "コーヒーを飲みますか。 — はい、飲みます。",
          romanization: "koohii o nomimasu ka. — hai, nomimasu.",
          translation: "Vous prenez un café ? — Oui, volontiers.",
          content:
            "La réponse courte reprend le verbe. Le japonais n'a pas d'équivalent du « oui, j'en prends » ni du do anglais : on répète 飲みます ou on répond 飲みません. はい tout seul est possible mais sec, surtout avec quelqu'un qu'on connaît peu.",
        },
        {
          type: "comparison",
          content:
            "コーヒーを飲みますか。 demande un fait : buvez-vous du café ? いっしょに飲みませんか。 est une invitation : « on en prendrait bien un ensemble ? ». La question négative en ませんか est la façon normale et polie de proposer quelque chose au Japon, parce qu'elle laisse ouverte la possibilité de refuser. Poser 飲みますか pour inviter sonne comme un sondage.",
        },
        {
          type: "warning",
          content:
            "Avec un mot interrogatif (何、どこ、いつ), か reste obligatoire et le mot interrogatif ne se déplace pas : 何を飲みますか。 (littéralement « quoi boire ? »). Le francophone a le réflexe de mettre le mot de question en tête comme dans « qu'est-ce que vous buvez » — en japonais, 何 occupe simplement la place du complément qu'il remplace.",
        },
      ],
    },
    {
      title: "Pourquoi on apprend ます en premier",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "La forme en ます est le registre par défaut entre adultes qui ne sont pas intimes : au magasin, au travail, avec un professeur, avec un inconnu. La forme neutre (飲む、行く) n'est pas « du japonais fautif » : c'est le registre familier, celui de la famille et des amis proches, et c'est aussi la forme utilisée à l'intérieur de la grammaire et dans l'écrit informatif. Employer 飲む avec un inconnu produit à peu près l'effet d'un tutoiement immédiat.",
        },
        {
          type: "text",
          content:
            "Vous allez entendre ます en permanence dès l'aéroport : les annonces de train, les caissiers, les serveurs, les guichets parlent tous à cette forme, souvent avec des formules encore plus polies bâties dessus. Commencer par ます signifie qu'on peut s'adresser à n'importe qui dès le premier jour sans risquer d'être impoli — c'est exactement pour cette raison que tous les manuels japonais l'enseignent avant la forme neutre.",
        },
        {
          type: "example",
          native: "日本語がわかりますか。",
          romanization: "nihongo ga wakarimasu ka.",
          translation: "Vous comprenez le japonais ?",
          content:
            "わかります n'est pas un verbe d'action mais un verbe d'état : son complément se marque avec が, pas avec を. ×日本語をわかります est l'une des fautes les plus répandues chez les apprenants francophones, parce que le français dit « comprendre quelque chose ». Retenez la phrase entière plutôt que la règle.",
        },
        {
          type: "warning",
          content:
            "Évitez あなた (« vous »). あなたは行きますか sonne froid, voire condescendant, alors que le pronom paraît neutre en français. On emploie le nom de la personne suivi de さん — 田中さんは行きますか — ou, le plus souvent, on ne dit rien du tout : le contexte suffit.",
        },
        {
          type: "tip",
          content:
            "Méthode concrète : pour chaque nouveau verbe, notez trois choses sur la même fiche — la forme du dictionnaire, la forme en ます, le groupe. 飲む / 飲みます / godan. Quinze verbes traités ainsi valent mieux que cinquante appris comme des mots isolés, parce que vous pourrez les conjuguer.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans une entreprise à Tokyo, un collègue japonais engage la conversation avec Marie pendant la pause.",
    lines: [
      {
        speaker: "田中",
        native: "マリーさん、コーヒーを飲みますか。",
        romanization: "Marii-san, koohii o nomimasu ka.",
        french: "Marie, vous prenez un café ?",
        note: "Le nom + さん remplace le pronom « vous ». Ajouter あなた ici serait déplacé.",
      },
      {
        speaker: "マリー",
        native: "はい、飲みます。ありがとうございます。",
        romanization: "hai, nomimasu. arigatou gozaimasu.",
        french: "Oui, volontiers. Merci beaucoup.",
        note: "La réponse courte reprend le verbe de la question : はい、飲みます。",
      },
      {
        speaker: "田中",
        native: "マリーさんは毎日日本語を話しますか。",
        romanization: "Marii-san wa mainichi nihongo o hanashimasu ka.",
        french: "Vous parlez japonais tous les jours ?",
      },
      {
        speaker: "マリー",
        native: "いいえ、あまり話しません。でも、毎日読みます。",
        romanization: "iie, amari hanashimasen. demo, mainichi yomimasu.",
        french: "Non, pas beaucoup. Mais je lis tous les jours.",
        note: "あまり s'emploie uniquement avec un verbe négatif : あまり話しません = « je ne parle pas beaucoup ».",
      },
      {
        speaker: "田中",
        native: "じゃあ、いっしょに日本語を話しませんか。",
        romanization: "jaa, issho ni nihongo o hanashimasen ka.",
        french: "Alors, on parlerait japonais ensemble ?",
        note: "Question négative = invitation. C'est la formule polie standard pour proposer quelque chose.",
      },
      {
        speaker: "マリー",
        native: "はい、いいですね。",
        romanization: "hai, ii desu ne.",
        french: "Oui, avec plaisir.",
      },
    ],
  },

  keyPoints: [
    "ます est la forme polie non-passée : elle couvre le présent, l'habitude et le futur. Sa négation est ません, qui la remplace sans rien ajouter d'autre.",
    "Le verbe ne varie ni en personne ni en nombre, et il occupe toujours la dernière place de la phrase.",
    "Trois groupes : godan (le /u/ final passe à /i/ : 飲む → 飲みます), ichidan (る tombe : 食べる → 食べます), irréguliers する → します et 来る → 来ます.",
    "帰る、入る、知る finissent par -eru ou -iru mais sont godan : on dit 帰ります, jamais ×帰えます.",
    "か placé en fin de phrase pose la question, sans inversion ; la réponse courte reprend le verbe : はい、飲みます。 / いいえ、飲みません。",
  ],

  vocabulary: [
    {
      term: "行きます",
      reading: "いきます",
      romanization: "ikimasu",
      segments: [{ text: "行", reading: "い" }, { text: "きます" }],
      french: "Aller",
      english: "To go",
    },
    {
      term: "来ます",
      reading: "きます",
      romanization: "kimasu",
      segments: [{ text: "来", reading: "き" }, { text: "ます" }],
      french: "Venir",
      english: "To come",
    },
    {
      term: "食べます",
      reading: "たべます",
      romanization: "tabemasu",
      segments: [{ text: "食", reading: "た" }, { text: "べます" }],
      french: "Manger",
      english: "To eat",
    },
    {
      term: "飲みます",
      reading: "のみます",
      romanization: "nomimasu",
      segments: [{ text: "飲", reading: "の" }, { text: "みます" }],
      french: "Boire",
      english: "To drink",
    },
    {
      term: "見ます",
      reading: "みます",
      romanization: "mimasu",
      segments: [{ text: "見", reading: "み" }, { text: "ます" }],
      french: "Regarder, voir",
      english: "To watch, to see",
    },
    {
      term: "聞きます",
      reading: "ききます",
      romanization: "kikimasu",
      segments: [{ text: "聞", reading: "き" }, { text: "きます" }],
      french: "Écouter, entendre ; demander",
      english: "To listen, to hear; to ask",
    },
    {
      term: "します",
      reading: "します",
      romanization: "shimasu",
      french: "Faire",
      english: "To do",
    },
    {
      term: "買います",
      reading: "かいます",
      romanization: "kaimasu",
      segments: [{ text: "買", reading: "か" }, { text: "います" }],
      french: "Acheter",
      english: "To buy",
    },
    {
      term: "読みます",
      reading: "よみます",
      romanization: "yomimasu",
      segments: [{ text: "読", reading: "よ" }, { text: "みます" }],
      french: "Lire",
      english: "To read",
    },
    {
      term: "書きます",
      reading: "かきます",
      romanization: "kakimasu",
      segments: [{ text: "書", reading: "か" }, { text: "きます" }],
      french: "Écrire",
      english: "To write",
    },
    {
      term: "話します",
      reading: "はなします",
      romanization: "hanashimasu",
      segments: [{ text: "話", reading: "はな" }, { text: "します" }],
      french: "Parler",
      english: "To speak",
    },
    {
      term: "わかります",
      reading: "わかります",
      romanization: "wakarimasu",
      french: "Comprendre",
      english: "To understand",
    },
    {
      term: "帰ります",
      reading: "かえります",
      romanization: "kaerimasu",
      segments: [{ text: "帰", reading: "かえ" }, { text: "ります" }],
      french: "Rentrer (chez soi)",
      english: "To go home, to return",
    },
    {
      term: "毎日",
      reading: "まいにち",
      romanization: "mainichi",
      segments: [{ text: "毎日", reading: "まいにち" }],
      french: "Tous les jours",
      english: "Every day",
    },
    {
      term: "あまり",
      reading: "あまり",
      romanization: "amari",
      french: "Pas beaucoup (suivi d'un verbe négatif)",
      english: "Not much (with a negative verb)",
    },
    {
      term: "でも",
      reading: "でも",
      romanization: "demo",
      french: "Mais",
      english: "But",
    },
    {
      term: "いっしょに",
      reading: "いっしょに",
      romanization: "issho ni",
      french: "Ensemble",
      english: "Together",
    },
  ],

  exercises: [
    {
      id: "unit-14-ex1",
      type: "comprehension",
      question: "Que couvre la forme en ます ?",
      correctAnswer: "Le présent, l'habitude et le futur : le japonais n'a pas de futur distinct",
      options: [
        "Le présent, l'habitude et le futur : le japonais n'a pas de futur distinct",
        "Uniquement le présent ; le futur a sa propre terminaison",
        "Uniquement le futur ; le présent se dit à la forme du dictionnaire",
        "Le passé, quand le contexte est poli",
      ],
      hint: "C'est le complément de temps (あした、毎日) qui précise le moment.",
    },
    {
      id: "unit-14-ex2",
      type: "fill-blank",
      question: "« Je bois du café. » → コーヒーを ___ 。",
      correctAnswer: "飲みます",
      options: ["飲みます", "飲みません", "食べます", "買います"],
      optionsReading: ["のみます", "のみません", "たべます", "かいます"],
      optionsHint: ["nomimasu", "nomimasen", "tabemasu", "kaimasu"],
      hint: "Affirmatif et poli.",
    },
    {
      id: "unit-14-ex3",
      type: "comprehension",
      question: "À quel groupe appartient 食べる, et pourquoi ?",
      correctAnswer: "Ichidan (groupe 2) : る tombe et ます prend sa place",
      options: [
        "Ichidan (groupe 2) : る tombe et ます prend sa place",
        "Godan (groupe 1) : le /u/ final passe à /i/",
        "Irrégulier, comme する et 来る",
        "Godan au présent, ichidan au négatif",
      ],
      hint: "食べる → 食べます : qu'est-il arrivé au る ?",
    },
    {
      id: "unit-14-ex4",
      type: "fill-blank",
      question: "« Je ne mange pas de viande. » → にくを ___ 。",
      correctAnswer: "食べません",
      options: ["食べません", "食べます", "飲みません", "買いません"],
      optionsReading: ["たべません", "たべます", "のみません", "かいません"],
      optionsHint: ["tabemasen", "tabemasu", "nomimasen", "kaimasen"],
      hint: "La négation remplace ます, elle ne s'ajoute pas.",
    },
    {
      id: "unit-14-ex5",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Je bois du café. »",
      correctAnswer: "わたしはコーヒーを飲みます。",
      options: ["わたし", "は", "コーヒー", "を", "飲みます"],
      hint: "Thème, puis objet marqué par を, puis le verbe en dernier.",
    },
    {
      id: "unit-14-ex6",
      type: "translate",
      question: "Traduisez : « Est-ce que vous regardez la télévision ? »",
      correctAnswer: "テレビを見ますか。",
      options: [
        "テレビを見ますか。",
        "見ますかテレビを。",
        "テレビを見るますか。",
        "か テレビを見ます。",
      ],
      hint: "Le verbe ferme la phrase, et か se place après lui.",
    },
    {
      id: "unit-14-ex7",
      type: "listen",
      question: "コーヒーを飲みますか。",
      correctAnswer: "Vous buvez du café ?",
      options: [
        "Vous buvez du café ?",
        "Vous achetez du café ?",
        "Vous mangez du pain ?",
        "Vous regardez la télévision ?",
      ],
      hint: "Écoutez le verbe final : のみます ou かいます ?",
    },
    {
      id: "unit-14-ex8",
      type: "comprehension",
      question: "帰る se termine par -eru. Quelle est sa forme polie ?",
      correctAnswer: "帰ります : c'est un verbe godan malgré son apparence",
      options: [
        "帰ります : c'est un verbe godan malgré son apparence",
        "帰えます : る tombe comme dans 食べる",
        "帰します : c'est un verbe irrégulier",
        "Les deux formes sont admises",
      ],
      hint: "Comme 入る et 知る, il fait partie des faux ichidan.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-13"],
};
