import type { CourseUnit } from "@/types/course";

export const unit34: CourseUnit = {
  id: "unit-34",
  number: 34,
  title: "Au bureau : téléphone et courriels",
  titleNative: "職場の日本語：電話とメール",
  chapter: 6,
  description:
    "Le japonais professionnel tel qu'il se pratique : décrocher, transmettre un message, annoncer un retard, et remplir les six blocs d'un courriel d'entreprise. Avec le 報連相 et la raison pour laquelle 承知しました remplace わかりました.",
  icon: "電",

  sections: [
    {
      title: "Décrocher : un script, pas une improvisation",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Un appel professionnel japonais suit un enchaînement quasi invariable, et c'est une chance : ce qui est figé s'apprend. On décroche avant la troisième sonnerie ; au-delà, on ouvre par お待たせいたしました, littéralement « je vous ai fait attendre ». On annonce l'entreprise avant son propre nom, parce que l'appelant a besoin de vérifier qu'il ne s'est pas trompé de numéro. Et surtout, on ne dit jamais もしもし : cette interjection appartient à la sphère privée et sonne relâchée dans un cadre professionnel.",
        },
        {
          type: "example",
          native: "はい、みどり商事でございます。",
          romanization: "hai, Midori-shouji de gozaimasu.",
          translation: "Société Midori, bonjour.",
          content:
            "でございます est la version très formelle de です. Il ne rehausse ni n'abaisse personne — c'est du 丁寧語 — ce qui permet de l'employer sur le nom de sa propre entreprise sans se donner d'importance.",
        },
        {
          type: "example",
          native: "いつもお世話になっております。",
          romanization: "itsumo osewa ni natte orimasu.",
          translation: "Merci de votre confiance. (formule d'ouverture professionnelle)",
          content:
            "Mot à mot : « je reçois toujours vos bons soins ». C'est le bonjour du monde du travail, prononcé même à quelqu'un qu'on n'a jamais eu au bout du fil, du moment que les deux entreprises travaillent ensemble. N'essayez pas de la traduire, elle n'a pas d'équivalent français : traitez-la comme un bloc unique.",
        },
        {
          type: "example",
          native: "少々お待ちいただけますでしょうか。",
          romanization: "shoushou omachi itadakemasu deshou ka.",
          translation: "Pourriez-vous patienter un instant ?",
          content:
            "少々お待ちください est la formule standard, parfaitement correcte. La version interrogative en いただけますでしょうか est plus douce parce qu'elle demande au lieu d'ordonner : elle laisse à l'autre la possibilité de refuser, même si personne ne refuse jamais.",
        },
        {
          type: "warning",
          content:
            "「ちょっと待ってください」 au téléphone professionnel est une faute de registre, pas de grammaire. La phrase est juste, elle est simplement trop familière ; elle se remarque immédiatement et donne l'impression qu'on ne connaît pas les usages de la maison.",
        },
        {
          type: "tip",
          content:
            "Prenez trois notes pendant que l'autre parle : 会社名 (l'entreprise), お名前 (le nom), ご用件 (l'objet de l'appel). C'est exactement ce qu'on vous demandera ensuite, et c'est ce qui vous évite de faire répéter — 恐れ入りますが、もう一度お願いいたします étant tout de même préférable à une erreur de transmission.",
        },
      ],
    },
    {
      title: "Transmettre un message, annoncer un retard",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Quand la personne demandée n'est pas disponible, on dit d'abord pourquoi, puis on propose une suite. Trois formules couvrent presque tous les cas : 席を外しております (absent de son bureau, mais dans les locaux), 外出しております (sorti), 会議中でございます (en réunion). Ensuite on ouvre une porte : 折り返しお電話いたしましょうか ou ご伝言を承りましょうか. Laisser l'appelant sans proposition est perçu comme un abandon.",
        },
        {
          type: "example",
          native: "田中はただいま席を外しております。",
          romanization: "Tanaka wa tadaima seki o hazushite orimasu.",
          translation: "M. Tanaka s'est absenté de son bureau.",
          content:
            "Deux marques de la maison : le collègue perd son さん, et いる devient おる. Le français doit remettre un « M. » à la traduction, sans quoi la phrase paraît sèche — mais en japonais c'est bien l'absence de titre qui est polie.",
        },
        {
          type: "example",
          native: "よろしければ、ご伝言を承ります。",
          romanization: "yoroshikereba, godengon o uketamawarimasu.",
          translation: "Si vous le souhaitez, je peux prendre un message.",
          content:
            "承る est le 謙譲語 de 受ける et de 聞く, réservé au service : on reçoit humblement ce que l'autre confie. La variante plus simple ご伝言をお預かりします est également correcte. よろしければ pose la proposition sans l'imposer.",
        },
        {
          type: "example",
          native: "申し訳ございません。電車が遅れておりまして、十五分ほど遅れます。",
          romanization: "moushiwake gozaimasen. densha ga okurete orimashite, juugofun hodo okuremasu.",
          translation: "Toutes mes excuses. Le train a du retard, j'arriverai avec un quart d'heure de retard.",
          content:
            "L'ordre compte autant que les mots : d'abord l'excuse, ensuite la cause, enfin une durée chiffrée. Commencer par l'explication fait entendre une justification, ce qui aggrave la faute. Et l'on prévient dès qu'on sait, pas en arrivant.",
        },
        {
          type: "warning",
          content:
            "すみません est trop léger pour un retard professionnel : c'est le mot qu'on emploie pour bousculer quelqu'un dans le métro. Vers un supérieur ou un client, la formule attendue est 申し訳ございません, éventuellement renforcée en 大変申し訳ございません.",
        },
        {
          type: "tip",
          content:
            "恐れ入りますが sert d'amortisseur devant n'importe quelle demande : 恐れ入りますが、お名前をもう一度お願いいたします. Placez-le systématiquement avant une requête — sans ce coussin, une demande directe passe pour brutale, même formulée en 敬語 impeccable.",
        },
      ],
    },
    {
      title: "Le courriel : six blocs, des formules figées",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Un courriel professionnel japonais n'est pas un texte libre, c'est un formulaire en six blocs, dans cet ordre : 件名 (l'objet), 宛名 (le destinataire), 挨拶 (la salutation), 本文 (le corps), 結び (la formule de clôture), 署名 (le bloc de signature). Chacun a ses formules attendues. Rien ne s'improvise, et c'est précisément ce qui rend l'exercice accessible à un étranger : il suffit de remplir les cases.",
        },
        {
          type: "example",
          native: "件名：お打ち合わせ日程のご確認",
          romanization: "kenmei: ouchiawase nittei no gokakunin",
          translation: "Objet : confirmation de la date de la réunion",
          content:
            "L'objet est nominal, court, et sans verbe. Les préfixes お et ご portent sur ce qui touche le destinataire. Un objet vague comme 「ご連絡」 fait perdre du temps à quelqu'un qui reçoit cent messages par jour, et cela se remarque.",
        },
        {
          type: "example",
          native: "株式会社みどり商事　営業部　佐藤様",
          romanization: "kabushikigaisha Midori-shouji eigyoubu Satou-sama",
          translation: "Société Midori, service commercial, Monsieur Satō",
          content:
            "L'ordre est immuable : entreprise, service, nom suivi de 様. On écrit le nom de société en entier, 株式会社 compris, et jamais さん dans un 宛名. Le tout occupe sa propre ligne, avant toute autre chose.",
        },
        {
          type: "example",
          native: "いつもお世話になっております。みどり商事の山田です。",
          romanization: "itsumo osewa ni natte orimasu. Midori-shouji no Yamada desu.",
          translation: "Bonjour. Yamada, de la société Midori.",
          content:
            "La salutation, puis l'identification immédiate. Un courriel japonais ne suppose jamais que le lecteur sait qui écrit, même dans un échange en cours : on se renomme à chaque message. Pour un premier contact, on remplace la première phrase par 突然のご連絡失礼いたします.",
        },
        {
          type: "example",
          native: "恐れ入りますが、金曜日までにご確認いただけますでしょうか。",
          romanization: "osore irimasu ga, kinyoubi made ni gokakunin itadakemasu deshou ka.",
          translation: "Excusez-moi de vous solliciter : pourriez-vous vérifier d'ici vendredi ?",
          content:
            "Le corps du message tient en une idée par paragraphe, avec des lignes courtes. La requête standard est 〜ていただけますでしょうか, et la date butoir est explicite : une demande japonaise sans échéance chiffrée reste sans réponse, non par mauvaise volonté mais parce qu'elle n'a pas de rang de priorité.",
        },
        {
          type: "example",
          native: "何卒よろしくお願いいたします。",
          romanization: "nanitozo yoroshiku onegai itashimasu.",
          translation: "Je vous remercie par avance.",
          content:
            "Le 結び, aussi obligatoire que la signature d'une lettre. La forme courante est よろしくお願いいたします ; 何卒 la relève d'un cran pour une demande sensible. Vient ensuite le 署名 : entreprise, service, nom, adresse, téléphone, séparé du corps par une ligne de tirets.",
        },
        {
          type: "warning",
          content:
            "拝啓 et 敬具 appartiennent au courrier papier et à quelques lettres très formelles ; les employer dans un courriel ordinaire produit un effet de costume mal ajusté. Le courriel a ses propres formules, plus légères, et お世話になっております suffit à ouvrir.",
        },
      ],
    },
    {
      title: "報連相, la réunion, et le mot juste pour dire oui",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "報連相 (ほうれんそう) condense trois obligations : 報告, rendre compte de l'avancement ; 連絡, tenir informés ceux que cela concerne ; 相談, consulter avant de trancher. Le mot est un jeu de mots avec ほうれん草, l'épinard, ce qui lui a assuré une carrière durable dans toutes les entreprises du pays. Le principe : on ne disparaît jamais entre l'attribution d'une tâche et son résultat.",
        },
        {
          type: "text",
          content:
            "C'est le point de friction le plus fréquent pour un salarié français. Gérer seul son dossier et présenter un travail fini est chez nous une preuve d'autonomie ; au Japon, cela se lit comme de l'opacité, et un supérieur mis devant le fait accompli perd la face. Le 相談 en particulier n'est pas un aveu de faiblesse : c'est une façon d'associer l'autre à la décision avant qu'elle ne soit prise.",
        },
        {
          type: "text",
          content:
            "Cela explique le fonctionnement des réunions. Une 会議 japonaise valide, elle ne décide pas. L'arbitrage réel s'est joué avant, dans les couloirs et les messages, par ce qu'on appelle le 根回し — littéralement « creuser autour des racines » avant de replanter un arbre. Arriver en réunion avec une idée neuve n'impressionne personne : cela met tout le monde en difficulté, parce que personne n'a de mandat pour répondre.",
        },
        {
          type: "comparison",
          content:
            "Trois façons de dire « entendu », et elles ne sont pas interchangeables. わかりました signifie « j'ai compris » : correct entre collègues de même rang, trop plat vers un supérieur ou un client. 承知しました est du 謙譲語 — « je prends acte » — et constitue le standard professionnel. かしこまりました monte encore d'un cran et appartient au service au client : commerce, hôtellerie, restauration.",
        },
        {
          type: "warning",
          content:
            "了解しました est très répandu à l'écrit entre collègues, mais mal reçu d'un junior vers un supérieur ou vers un client, où il passe pour désinvolte. Le débat existe entre Japonais eux-mêmes ; en tant qu'étranger, tranchez-le simplement : 承知しました dans tous les cas où vous hésitez.",
        },
        {
          type: "tip",
          content:
            "Ne confondez pas 打ち合わせ et 会議. Le 打ち合わせ réunit deux ou trois personnes pour caler un point de travail, sans formalisme. La 会議 est convoquée, a un ordre du jour et donne lieu à un 議事録, le compte rendu. Proposer un 打ち合わせ engage beaucoup moins votre interlocuteur.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Yamada décroche le téléphone de son service. À l'autre bout, Satō, d'une entreprise cliente, demande son collègue Tanaka — qui n'est pas à son bureau.",
    lines: [
      {
        speaker: "山田",
        native: "はい、みどり商事でございます。",
        romanization: "hai, Midori-shouji de gozaimasu.",
        french: "Société Midori, bonjour.",
        note: "L'entreprise d'abord, le nom personnel ensuite si l'échange se prolonge. Et pas de もしもし : au travail, il fait amateur.",
      },
      {
        speaker: "佐藤",
        native: "いつもお世話になっております。さくら電機の佐藤と申します。田中様はいらっしゃいますでしょうか。",
        romanization: "itsumo osewa ni natte orimasu. Sakura-denki no Satou to moushimasu. Tanaka-sama wa irasshaimasu deshou ka.",
        french: "Bonjour, Satō de Sakura Denki à l'appareil. Pourrais-je parler à M. Tanaka ?",
        note: "Vu du côté de Satō, Tanaka appartient à l'extérieur : d'où 田中様 et le 尊敬語 いらっしゃる. Pour lui-même, en revanche, 申します.",
      },
      {
        speaker: "山田",
        native: "お世話になっております。恐れ入ります、田中はただいま席を外しております。",
        romanization: "osewa ni natte orimasu. osore irimasu, Tanaka wa tadaima seki o hazushite orimasu.",
        french: "Bonjour. Je suis navré, M. Tanaka s'est absenté de son bureau.",
        note: "Le basculement : côté maison, 田中 perd son 様 et 〜ております remplace います. 恐れ入ります amortit la mauvaise nouvelle avant qu'elle ne tombe.",
      },
      {
        speaker: "佐藤",
        native: "では、折り返しお電話をいただけますでしょうか。",
        romanization: "dewa, orikaeshi odenwa o itadakemasu deshou ka.",
        french: "Pourrait-il me rappeler, dans ce cas ?",
        note: "折り返し est le mot exact pour un rappel téléphonique. 〜ていただけますでしょうか est la requête professionnelle standard, nettement plus douce que 〜てください.",
      },
      {
        speaker: "山田",
        native: "承知しました。田中が戻りましたら、折り返しご連絡いたします。",
        romanization: "shouchi shimashita. Tanaka ga modorimashitara, orikaeshi gorenraku itashimasu.",
        french: "Entendu. Dès que M. Tanaka sera de retour, il vous rappellera.",
        note: "承知しました, et non わかりました : l'interlocuteur est un client. ご連絡いたします est le moule ご ＋ mot sino-japonais ＋ いたす.",
      },
      {
        speaker: "佐藤",
        native: "恐れ入りますが、明日の打ち合わせの資料の件とお伝えください。",
        romanization: "osore irimasu ga, ashita no uchiawase no shiryou no ken to otsutae kudasai.",
        french: "Pourriez-vous lui dire qu'il s'agit des documents pour la réunion de demain ?",
        note: "〜の件 (« au sujet de ») est la façon normale d'annoncer un objet, au téléphone comme dans un courriel. お伝えください s'adresse à Yamada, d'où le moule respectueux.",
      },
      {
        speaker: "山田",
        native: "かしこまりました。さくら電機の佐藤様ですね。田中に申し伝えます。",
        romanization: "kashikomarimashita. Sakura-denki no Satou-sama desu ne. Tanaka ni moushitsutaemasu.",
        french: "C'est noté. Monsieur Satō, de Sakura Denki. Je transmettrai à M. Tanaka.",
        note: "On répète toujours entreprise et nom pour verrouiller la prise de message. 申し伝える est le verbe consacré quand on transmet à quelqu'un de sa propre maison.",
      },
    ],
  },

  keyPoints: [
    "Au téléphone professionnel, jamais もしもし : はい、〜でございます, puis いつもお世話になっております, puis son entreprise et son nom.",
    "Un collègue indisponible se dit sans さん et avec おる — 「田中はただいま席を外しております」 — et l'on enchaîne toujours sur une proposition : 折り返し ou ご伝言.",
    "Le courriel professionnel est un formulaire en six blocs : 件名、宛名 (entreprise + service + nom + 様)、挨拶、本文、結び (よろしくお願いいたします)、署名.",
    "恐れ入りますが amortit toute demande, 〜ていただけますでしょうか est la requête standard, et une demande sans date butoir chiffrée reste sans réponse.",
    "報連相 : on rend compte en continu et l'on consulte avant de trancher, car la 会議 valide ce que le 根回し a déjà décidé. Vers un supérieur ou un client, 承知しました remplace わかりました.",
  ],

  vocabulary: [
    {
      term: "打ち合わせ",
      reading: "うちあわせ",
      romanization: "uchiawase",
      segments: [
        { text: "打", reading: "う" },
        { text: "ち" },
        { text: "合", reading: "あ" },
        { text: "わせ" },
      ],
      french: "La réunion de travail, le point préparatoire",
      english: "Work meeting, briefing",
      example: {
        sentence: "明日の打ち合わせは十時からです。",
        romanization: "ashita no uchiawase wa juuji kara desu.",
        translation: "La réunion de demain commence à dix heures.",
      },
    },
    {
      term: "資料",
      reading: "しりょう",
      romanization: "shiryou",
      segments: [
        { text: "資", reading: "し" },
        { text: "料", reading: "りょう" },
      ],
      french: "Les documents, le dossier",
      english: "Documents, materials",
      example: {
        sentence: "資料をお送りいたします。",
        romanization: "shiryou o ookuri itashimasu.",
        translation: "Je vous envoie les documents.",
      },
    },
    {
      term: "締め切り",
      reading: "しめきり",
      romanization: "shimekiri",
      segments: [
        { text: "締", reading: "し" },
        { text: "め" },
        { text: "切", reading: "き" },
        { text: "り" },
      ],
      french: "La date limite, l'échéance",
      english: "Deadline",
      example: {
        sentence: "締め切りは金曜日です。",
        romanization: "shimekiri wa kinyoubi desu.",
        translation: "L'échéance est vendredi.",
      },
    },
    {
      term: "確認",
      reading: "かくにん",
      romanization: "kakunin",
      segments: [
        { text: "確", reading: "かく" },
        { text: "認", reading: "にん" },
      ],
      pitch: 0,
      french: "La vérification, la confirmation",
      english: "Confirmation, checking",
      example: {
        sentence: "ご確認をお願いいたします。",
        romanization: "gokakunin o onegai itashimasu.",
        translation: "Merci de bien vouloir vérifier.",
      },
    },
    {
      term: "報告",
      reading: "ほうこく",
      romanization: "houkoku",
      segments: [
        { text: "報", reading: "ほう" },
        { text: "告", reading: "こく" },
      ],
      pitch: 0,
      french: "Le compte rendu, le rapport (d'avancement)",
      english: "Report",
    },
    {
      term: "連絡",
      reading: "れんらく",
      romanization: "renraku",
      segments: [
        { text: "連", reading: "れん" },
        { text: "絡", reading: "らく" },
      ],
      pitch: 0,
      french: "La prise de contact, la mise au courant",
      english: "Contact, notification",
      example: {
        sentence: "後ほどご連絡いたします。",
        romanization: "nochihodo gorenraku itashimasu.",
        translation: "Je vous recontacterai plus tard.",
      },
    },
    {
      term: "相談",
      reading: "そうだん",
      romanization: "soudan",
      segments: [
        { text: "相", reading: "そう" },
        { text: "談", reading: "だん" },
      ],
      pitch: 0,
      french: "La consultation, le fait de demander conseil",
      english: "Consultation, seeking advice",
      example: {
        sentence: "一度ご相談させてください。",
        romanization: "ichido gosoudan sasete kudasai.",
        translation: "Permettez-moi de vous en parler une fois.",
      },
    },
    {
      term: "承知しました",
      reading: "しょうちしました",
      romanization: "shouchi shimashita",
      segments: [
        { text: "承", reading: "しょう" },
        { text: "知", reading: "ち" },
        { text: "しました" },
      ],
      french: "Entendu, c'est noté (modeste, vers un supérieur ou un client)",
      english: "Understood, certainly (humble)",
    },
    {
      term: "恐れ入りますが",
      reading: "おそれいりますが",
      romanization: "osore irimasu ga",
      segments: [
        { text: "恐", reading: "おそ" },
        { text: "れ" },
        { text: "入", reading: "い" },
        { text: "りますが" },
      ],
      french: "Excusez-moi de vous solliciter, mais…",
      english: "I am sorry to trouble you, but…",
    },
    {
      term: "お世話になっております",
      reading: "おせわになっております",
      romanization: "osewa ni natte orimasu",
      segments: [
        { text: "お" },
        { text: "世", reading: "せ" },
        { text: "話", reading: "わ" },
        { text: "になっております" },
      ],
      french: "Formule d'ouverture professionnelle (« merci de votre confiance »)",
      english: "Standard business greeting",
    },
    {
      term: "少々お待ちください",
      reading: "しょうしょうおまちください",
      romanization: "shoushou omachi kudasai",
      segments: [
        { text: "少々", reading: "しょうしょう" },
        { text: "お" },
        { text: "待", reading: "ま" },
        { text: "ちください" },
      ],
      french: "Veuillez patienter un instant",
      english: "Please wait a moment",
    },
    {
      term: "でございます",
      reading: "でございます",
      romanization: "de gozaimasu",
      french: "Être (forme très formelle de です)",
      english: "To be (very formal copula)",
    },
    {
      term: "折り返し",
      reading: "おりかえし",
      romanization: "orikaeshi",
      segments: [
        { text: "折", reading: "お" },
        { text: "り" },
        { text: "返", reading: "かえ" },
        { text: "し" },
      ],
      french: "Le rappel (téléphonique), en retour",
      english: "Return call, in reply",
    },
    {
      term: "伝言",
      reading: "でんごん",
      romanization: "dengon",
      segments: [
        { text: "伝", reading: "でん" },
        { text: "言", reading: "ごん" },
      ],
      french: "Le message (à transmettre à un tiers)",
      english: "Message",
    },
    {
      term: "件名",
      reading: "けんめい",
      romanization: "kenmei",
      segments: [
        { text: "件", reading: "けん" },
        { text: "名", reading: "めい" },
      ],
      french: "L'objet (d'un courriel)",
      english: "Subject line",
    },
    {
      term: "宛名",
      reading: "あてな",
      romanization: "atena",
      segments: [
        { text: "宛", reading: "あて" },
        { text: "名", reading: "な" },
      ],
      french: "Le destinataire (en tête de courriel ou sur une enveloppe)",
      english: "Addressee",
    },
    {
      term: "署名",
      reading: "しょめい",
      romanization: "shomei",
      segments: [
        { text: "署", reading: "しょ" },
        { text: "名", reading: "めい" },
      ],
      french: "La signature (bloc de fin de courriel)",
      english: "Signature block",
    },
    {
      term: "遅刻",
      reading: "ちこく",
      romanization: "chikoku",
      segments: [
        { text: "遅", reading: "ち" },
        { text: "刻", reading: "こく" },
      ],
      french: "Le retard (arriver après l'heure)",
      english: "Lateness, tardiness",
      example: {
        sentence: "電車の遅れで遅刻いたしました。",
        romanization: "densha no okure de chikoku itashimashita.",
        translation: "Je suis arrivé en retard à cause du train.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-34-ex1",
      type: "comprehension",
      question: "Vous décrochez le téléphone de votre service. Par quoi commencez-vous ?",
      correctAnswer: "はい、みどり商事でございます。",
      options: [
        "はい、みどり商事でございます。",
        "もしもし、みどり商事です。",
        "もしもし、どちら様ですか。",
        "みどり商事の田中さんです。",
      ],
      optionsReading: [
        "はい、みどりしょうじでございます。",
        "もしもし、みどりしょうじです。",
        "もしもし、どちらさまですか。",
        "みどりしょうじのたなかさんです。",
      ],
      hint: "もしもし appartient à la sphère privée, et on ne met pas さん sur soi-même.",
    },
    {
      id: "unit-34-ex2",
      type: "comprehension",
      question: "Votre supérieur vient de vous confier une tâche. Que répondez-vous ?",
      correctAnswer: "承知しました。",
      options: ["承知しました。", "わかりました。", "了解しました。", "知っています。"],
      optionsReading: ["しょうちしました。", "わかりました。", "りょうかいしました。", "しっています。"],
      hint: "わかりました n'est pas faux entre collègues, mais reste trop plat vers un supérieur.",
    },
    {
      id: "unit-34-ex3",
      type: "fill-blank",
      question: "Vous répondez à un client : 「田中はただいま席を ___ 。」 « M. Tanaka s'est absenté. »",
      correctAnswer: "外しております",
      options: ["外しております", "外していらっしゃいます", "お外しになっています", "外していません"],
      optionsReading: [
        "はずしております",
        "はずしていらっしゃいます",
        "おはずしになっています",
        "はずしていません",
      ],
      hint: "田中 appartient à votre entreprise : c'est le versant modeste qu'il faut, pas le respectueux.",
    },
    {
      id: "unit-34-ex4",
      type: "fill-blank",
      question: "Objet d'un courriel : 「件名：お打ち合わせ日程の ___ 」 « confirmation de la date »",
      correctAnswer: "ご確認",
      options: ["ご確認", "お確認", "確認します", "ご確認になります"],
      optionsReading: ["ごかくにん", "おかくにん", "かくにんします", "ごかくにんになります"],
      hint: "確認 est un mot sino-japonais, et un objet de courriel est nominal, sans verbe.",
    },
    {
      id: "unit-34-ex5",
      type: "comprehension",
      question: "Que désigne le 報連相 dans une entreprise japonaise ?",
      correctAnswer: "報告・連絡・相談 : rendre compte, informer, consulter avant de trancher",
      options: [
        "報告・連絡・相談 : rendre compte, informer, consulter avant de trancher",
        "Les trois branches du 敬語 employées au bureau",
        "Les trois blocs obligatoires d'un courriel professionnel",
        "La règle des trois sonneries avant de décrocher",
      ],
      hint: "Un jeu de mots avec le nom d'un légume vert.",
    },
    {
      id: "unit-34-ex6",
      type: "listen",
      question: "少々お待ちください。",
      correctAnswer: "Veuillez patienter un instant.",
      options: [
        "Veuillez patienter un instant.",
        "Merci d'avoir patienté.",
        "Je vous rappellerai.",
        "Toutes mes excuses pour le retard.",
      ],
      hint: "少々 signifie « un peu, un instant ».",
    },
    {
      id: "unit-34-ex7",
      type: "reorder",
      question:
        "Remettez les éléments dans l'ordre : « Excusez-moi de vous solliciter : pourriez-vous vérifier d'ici vendredi ? »",
      correctAnswer: "恐れ入りますが、金曜日までにご確認いただけますでしょうか。",
      options: ["恐れ入りますが", "金曜日までに", "ご確認", "いただけます", "でしょうか"],
      hint: "L'amortisseur d'abord, la date butoir ensuite, la requête à la fin.",
    },
    {
      id: "unit-34-ex8",
      type: "translate",
      question: "Traduisez : « Je transmettrai à Tanaka. » (vous parlez à un client au téléphone)",
      correctAnswer: "田中に申し伝えます。",
      options: [
        "田中に申し伝えます。",
        "田中さんにお伝えになります。",
        "田中様に伝えられます。",
        "田中にお伝えください。",
      ],
      optionsReading: [
        "たなかにもうしつたえます。",
        "たなかさんにおつたえになります。",
        "たなかさまにつたえられます。",
        "たなかにおつたえください。",
      ],
      hint: "田中 est de votre maison : ni さん, ni 様, ni 尊敬語 — et c'est vous qui agissez.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-33"],
};
