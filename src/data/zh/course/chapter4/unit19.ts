import type { CourseUnit } from "@/types/course";

export const unit19: CourseUnit = {
  id: "unit-19",
  number: 19,
  title: "Le téléphone et internet",
  titleNative: "手機和網路",
  chapter: 4,
  description:
    "Maîtrisez le vocabulaire tech du quotidien, apprenez à acheter un forfait téléphone, et découvrez pourquoi LINE est l'application indispensable pour vivre à Taiwan.",
  icon: "📱",

  sections: [
    {
      title: "Vocabulaire tech du quotidien",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le vocabulaire technologique est omniprésent dans la vie quotidienne à Taiwan. Bonne nouvelle : beaucoup de mots tech chinois sont très logiques, construits à partir de caractères simples. 手機 (shǒujī) = main + machine = téléphone portable. 電腦 (diànnǎo) = électricité + cerveau = ordinateur.",
        },
        {
          type: "text",
          content:
            "Les appareils essentiels : 手機 (shǒujī, téléphone portable), 電腦 (diànnǎo, ordinateur), 網路 (wǎnglù, internet, littéralement « chemin du réseau »). WiFi se dit simplement WiFi en taiwanais courant, parfois écrit 無線網路 (wúxiàn wǎnglù, réseau sans fil).",
        },
        {
          type: "example",
          native: "WiFi的密碼是什麼？",
          romanization: "WiFi de mìmǎ shì shénme?",
          translation: "Quel est le mot de passe du WiFi ?",
          content: "密碼 = mot de passe. Question indispensable dans les cafés.",
        },
        {
          type: "text",
          content:
            "Les actions numériques : 充電 (chōngdiàn, charger la batterie, lit. « remplir d'électricité »), 下載 (xiàzài, télécharger, lit. « charger vers le bas »), 傳 (chuán, envoyer un message/fichier), 訊號 (xùnhào, signal).",
        },
        {
          type: "example",
          native: "我的手機沒電了，可以充電嗎？",
          romanization: "wǒ de shǒujī méi diàn le, kěyǐ chōngdiàn ma?",
          translation: "Mon téléphone n'a plus de batterie, je peux le charger ?",
          content: "沒電了 = plus de batterie. Situation fréquente.",
        },
        {
          type: "text",
          content:
            "Pour les appels : 打電話 (dǎ diànhuà, appeler/passer un coup de fil), 接 (jiē, décrocher/répondre), 掛 (guà, raccrocher). Le mot 打 (frapper) est utilisé pour « passer un appel », logique historique du temps des téléphones à cadran.",
        },
        {
          type: "example",
          native: "我打電話給你",
          romanization: "wǒ dǎ diànhuà gěi nǐ",
          translation: "Je t'appelle (au téléphone)",
          content: "打電話 + 給 + personne = appeler quelqu'un.",
        },
        {
          type: "tip",
          content:
            "À Taiwan, on préfère envoyer un message LINE plutôt que d'appeler. Si quelqu'un vous dit 我傳給你 (wǒ chuán gěi nǐ, je te l'envoie), il parle d'un message LINE, pas d'un SMS. Le SMS est quasiment mort à Taiwan.",
        },
      ],
    },
    {
      title: "Acheter un forfait téléphone",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Dès votre arrivée à Taiwan, la première chose à faire est d'acheter une carte SIM. Les comptoirs des opérateurs sont disponibles directement à l'aéroport de Taoyuan. Voici les structures pour vous en sortir.",
        },
        {
          type: "text",
          content:
            "La phrase clé : 我要辦一個... (wǒ yào bàn yí ge...) = « je voudrais souscrire un... ». 辦 (bàn) signifie « s'occuper de / souscrire / faire les démarches ». C'est le verbe universel pour les procédures administratives à Taiwan.",
        },
        {
          type: "example",
          native: "我要辦一張SIM卡",
          romanization: "wǒ yào bàn yì zhāng SIM kǎ",
          translation: "Je voudrais acheter une carte SIM",
          content: "辦 + objet = souscrire/obtenir quelque chose.",
        },
        {
          type: "text",
          content:
            "Les types de forfait : 月租 (yuèzū, forfait mensuel, lit. « loyer mensuel »), 預付卡 (yùfùkǎ, carte prépayée). Pour les touristes et nouveaux arrivants, la 預付卡 est le plus simple.",
        },
        {
          type: "example",
          native: "我要一張預付卡，三十天的",
          romanization: "wǒ yào yì zhāng yùfùkǎ, sānshí tiān de",
          translation: "Je voudrais une carte prépayée, pour trente jours",
          content: "Préciser la durée avec 天 (jours) ou 個月 (mois).",
        },
        {
          type: "text",
          content:
            "流量 (liúliàng) = data/données mobiles. L'expression magique est 吃到飽 (chī dào bǎo), littéralement « manger jusqu'à satiété ». Ça signifie « illimité ». On l'utilise pour la data, les buffets, et tout ce qui est en accès libre.",
        },
        {
          type: "example",
          native: "有流量吃到飽的方案嗎？",
          romanization: "yǒu liúliàng chī dào bǎo de fāng'àn ma?",
          translation: "Vous avez un forfait avec data illimitée ?",
          content: "吃到飽 = illimité. Expression très courante à Taiwan.",
        },
        {
          type: "text",
          content:
            "Les trois grands opérateurs taiwanais : 中華電信 (Zhōnghuá Diànxìn, Chunghwa Telecom — le plus fiable), 台灣大哥大 (Táiwān Dàgēdà, Taiwan Mobile), 遠傳 (Yuǎnchuán, Far EasTone). Tous ont des comptoirs à l'aéroport.",
        },
        {
          type: "comparison",
          content:
            "En France, « illimité » se dit... « illimité ». En chinois taiwanais, on dit 吃到飽 (manger jusqu'à être rassasié). Cette expression vient des restaurants buffet à volonté, très populaires à Taiwan, et s'est étendue à tout ce qui est « en accès libre ». Un forfait data illimité, un karaoké illimité, un barbecue à volonté : tout est 吃到飽.",
        },
      ],
    },
    {
      title: "LINE, l'app qui dirige Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Si WhatsApp est roi en France et WeChat en Chine, à Taiwan c'est LINE. Cette application japonaise est tellement ancrée dans la vie quotidienne qu'elle est devenue presque obligatoire. Ne pas avoir LINE à Taiwan, c'est comme ne pas avoir de téléphone.",
        },
        {
          type: "text",
          content:
            "LINE remplace tout : les messages (texte et vocal), les appels, les groupes de discussion, et même le paiement avec LINE Pay. Les entreprises communiquent par LINE, les propriétaires envoient les infos par LINE, les professeurs créent des groupes de classe sur LINE.",
        },
        {
          type: "example",
          native: "你有LINE嗎？加一下",
          romanization: "nǐ yǒu LINE ma? jiā yíxià",
          translation: "Tu as LINE ? Ajoutons-nous",
          content: "加 = ajouter. « Ajoute-moi sur LINE » est le nouveau « donne-moi ton numéro ».",
        },
        {
          type: "text",
          content:
            "Donner son LINE est plus courant que donner son numéro de téléphone. Quand quelqu'un demande 你的LINE是什麼？(quel est ton LINE ?), il veut votre identifiant LINE, pas votre numéro. L'expression 加LINE (jiā LINE, ajouter sur LINE) est utilisée des dizaines de fois par jour.",
        },
        {
          type: "text",
          content:
            "LINE Pay est un système de paiement mobile intégré à LINE. On peut payer au convenience store, au restaurant, et même partager les additions entre amis. 我LINE Pay給你 (wǒ LINE Pay gěi nǐ, je te LINE Pay) = je te transfère l'argent par LINE Pay.",
        },
        {
          type: "text",
          content:
            "Les stickers LINE sont une forme d'expression à part entière. Les Taiwanais utilisent des stickers (貼圖 tiētú) au lieu de texte pour exprimer des émotions. Un sticker peut remplacer une phrase entière. Il existe des milliers de packs de stickers, gratuits ou payants, et les gens les collectionnent sérieusement.",
        },
        {
          type: "tip",
          content:
            "Premier réflexe en arrivant à Taiwan : télécharger LINE, créer un compte, et mettre une photo de profil. Quand quelqu'un vous dit 加我 (jiā wǒ, ajoute-moi), sortez votre QR code LINE. C'est le premier geste social numérique à Taiwan.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous venez d'arriver à l'aéroport de Taoyuan et vous achetez une carte SIM au comptoir de 中華電信.",
    lines: [
      {
        speaker: "店員",
        native: "你好，請問要辦什麼？",
        romanization: "nǐ hǎo, qǐngwèn yào bàn shénme?",
        french: "Bonjour, qu'est-ce que vous souhaitez souscrire ?",
      },
      {
        speaker: "你",
        native: "你好，我要辦一張SIM卡。有預付卡嗎？",
        romanization: "nǐ hǎo, wǒ yào bàn yì zhāng SIM kǎ. yǒu yùfùkǎ ma?",
        french: "Bonjour, je voudrais une carte SIM. Vous avez des cartes prépayées ?",
      },
      {
        speaker: "店員",
        native: "有，三十天的，流量吃到飽，五百塊。需要嗎？",
        romanization: "yǒu, sānshí tiān de, liúliàng chī dào bǎo, wǔbǎi kuài. xūyào ma?",
        french: "Oui, trente jours, data illimitée, 500 NT$. Vous voulez ?",
      },
      {
        speaker: "你",
        native: "好，我要這個。可以打電話嗎？",
        romanization: "hǎo, wǒ yào zhège. kěyǐ dǎ diànhuà ma?",
        french: "OK, je prends celui-là. On peut passer des appels ?",
      },
      {
        speaker: "店員",
        native: "可以。請給我你的護照，我幫你開通。",
        romanization: "kěyǐ. qǐng gěi wǒ nǐ de hùzhào, wǒ bāng nǐ kāitōng.",
        french: "Oui. Donnez-moi votre passeport, je vais l'activer pour vous.",
        note: "開通 = activer. 護照 = passeport. Obligatoire pour acheter une SIM à Taiwan.",
      },
      {
        speaker: "你",
        native: "好的。對了，WiFi的密碼是什麼？我想先下載LINE。",
        romanization: "hǎo de. duìle, WiFi de mìmǎ shì shénme? wǒ xiǎng xiān xiàzài LINE.",
        french: "D'accord. Au fait, c'est quoi le mot de passe WiFi ? Je voudrais d'abord télécharger LINE.",
      },
    ],
  },

  keyPoints: [
    "Vocabulaire tech : 手機 (téléphone), 電腦 (ordinateur), 網路 (internet), 密碼 (mot de passe), 充電 (charger), 下載 (télécharger).",
    "Pour souscrire un forfait : 我要辦... (je voudrais souscrire). 月租 (forfait), 預付卡 (prépayé), 流量 (data), 吃到飽 (illimité).",
    "Appels : 打電話 (appeler), 接 (décrocher), 掛 (raccrocher). Mais à Taiwan on préfère LINE aux appels.",
    "LINE est indispensable à Taiwan : messages, appels, paiement, groupes. 加LINE (s'ajouter sur LINE) remplace l'échange de numéros.",
  ],

  vocabulary: [
    {
      term: "手機",
      romanization: "shǒujī",
      reading: "ㄕㄡˇ ㄐㄧ",
      french: "Téléphone portable",
      english: "Cell phone",
      example: {
        sentence: "你的手機號碼是幾號？",
        romanization: "nǐ de shǒujī hàomǎ shì jǐ hào?",
        translation: "C'est quoi ton numéro de téléphone ?",
      },
    },
    {
      term: "電話",
      romanization: "diànhuà",
      reading: "ㄉㄧㄢˋ ㄏㄨㄚˋ",
      french: "Téléphone (appel)",
      english: "Telephone, phone call",
      example: {
        sentence: "我打電話給你。",
        romanization: "wǒ dǎ diànhuà gěi nǐ.",
        translation: "Je t'appelle.",
      },
    },
    {
      term: "網路",
      romanization: "wǎnglù",
      reading: "ㄨㄤˇ ㄌㄨˋ",
      french: "Internet",
      english: "Internet, network",
      example: {
        sentence: "這裡有網路嗎？",
        romanization: "zhèlǐ yǒu wǎnglù ma?",
        translation: "Il y a internet ici ?",
      },
    },
    {
      term: "密碼",
      romanization: "mìmǎ",
      reading: "ㄇㄧˋ ㄇㄚˇ",
      french: "Mot de passe",
      english: "Password",
      example: {
        sentence: "WiFi密碼是多少？",
        romanization: "WiFi mìmǎ shì duōshǎo?",
        translation: "C'est quoi le mot de passe WiFi ?",
      },
    },
    {
      term: "充電",
      romanization: "chōngdiàn",
      reading: "ㄔㄨㄥ ㄉㄧㄢˋ",
      french: "Charger (batterie)",
      english: "To charge",
      example: {
        sentence: "手機需要充電。",
        romanization: "shǒujī xūyào chōngdiàn.",
        translation: "Le téléphone a besoin d'être chargé.",
      },
    },
    {
      term: "下載",
      romanization: "xiàzài",
      reading: "ㄒㄧㄚˋ ㄗㄞˋ",
      french: "Télécharger",
      english: "To download",
      example: {
        sentence: "你可以下載這個APP。",
        romanization: "nǐ kěyǐ xiàzài zhège APP.",
        translation: "Tu peux télécharger cette appli.",
      },
    },
    {
      term: "傳",
      romanization: "chuán",
      reading: "ㄔㄨㄢˊ",
      french: "Envoyer (message/fichier)",
      english: "To send (message/file)",
      example: {
        sentence: "我傳照片給你。",
        romanization: "wǒ chuán zhàopiàn gěi nǐ.",
        translation: "Je t'envoie la photo.",
      },
    },
    {
      term: "訊息",
      romanization: "xùnxí",
      reading: "ㄒㄩㄣˋ ㄒㄧˊ",
      french: "Message, information",
      english: "Message, information",
      example: {
        sentence: "我收到你的訊息了。",
        romanization: "wǒ shōudào nǐ de xùnxí le.",
        translation: "J'ai reçu ton message.",
      },
    },
    {
      term: "打電話",
      romanization: "dǎ diànhuà",
      reading: "ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ",
      french: "Appeler, téléphoner",
      english: "To make a phone call",
      example: {
        sentence: "你要打電話還是傳訊息？",
        romanization: "nǐ yào dǎ diànhuà háishì chuán xùnxí?",
        translation: "Tu veux appeler ou envoyer un message ?",
      },
    },
    {
      term: "號碼",
      romanization: "hàomǎ",
      reading: "ㄏㄠˋ ㄇㄚˇ",
      french: "Numéro",
      english: "Number",
      example: {
        sentence: "你的電話號碼是幾號？",
        romanization: "nǐ de diànhuà hàomǎ shì jǐ hào?",
        translation: "Quel est ton numéro de téléphone ?",
      },
    },
    {
      term: "月租",
      romanization: "yuèzū",
      reading: "ㄩㄝˋ ㄗㄨ",
      french: "Forfait mensuel",
      english: "Monthly plan",
      example: {
        sentence: "月租方案比較划算。",
        romanization: "yuèzū fāng'àn bǐjiào huásuàn.",
        translation: "Le forfait mensuel est plus rentable.",
      },
    },
    {
      term: "流量",
      romanization: "liúliàng",
      reading: "ㄌㄧㄡˊ ㄌㄧㄤˋ",
      french: "Data (données mobiles)",
      english: "Data, traffic",
      example: {
        sentence: "我的流量快用完了。",
        romanization: "wǒ de liúliàng kuài yòng wán le.",
        translation: "Ma data est presque épuisée.",
      },
    },
    {
      term: "開通",
      romanization: "kāitōng",
      reading: "ㄎㄞ ㄊㄨㄥ",
      french: "Activer (un service)",
      english: "To activate",
      example: {
        sentence: "SIM卡已經開通了。",
        romanization: "SIM kǎ yǐjīng kāitōng le.",
        translation: "La carte SIM est déjà activée.",
      },
    },
    {
      term: "吃到飽",
      romanization: "chī dào bǎo",
      reading: "ㄔ ㄉㄠˋ ㄅㄠˇ",
      french: "Illimité, à volonté",
      english: "Unlimited, all-you-can-eat",
      example: {
        sentence: "這個方案網路吃到飽。",
        romanization: "zhège fāng'àn wǎnglù chī dào bǎo.",
        translation: "Ce forfait a internet illimité.",
      },
    },
    {
      term: "辦",
      romanization: "bàn",
      reading: "ㄅㄢˋ",
      french: "S'occuper de, souscrire",
      english: "To handle, to set up",
      example: {
        sentence: "我要辦一張銀行卡。",
        romanization: "wǒ yào bàn yì zhāng yínháng kǎ.",
        translation: "Je voudrais ouvrir un compte bancaire.",
      },
    },
  ],

  exercises: [
    {
      id: "unit-19-ex1",
      type: "fill-blank",
      question: "WiFi的___是什麼？(Quel est le mot de passe WiFi ?)",
      correctAnswer: "密碼",
      options: ["密碼", "號碼", "名字", "電話"],
      optionsHint: ["mìmǎ", "hàomǎ", "míngzì", "diànhuà"],
      optionsReading: ["ㄇㄧˋ ㄇㄚˇ", "ㄏㄠˋ ㄇㄚˇ", "ㄇㄧㄥˊ ㄗˋ", "ㄉㄧㄢˋ ㄏㄨㄚˋ"],
      hint: "Quel mot signifie « mot de passe » ?",
      hintReading: "Quel mot signifie « mot de passe » ?",
    },
    {
      id: "unit-19-ex2",
      type: "translate",
      question: "Comment dit-on « Je voudrais acheter une carte SIM » ?",
      correctAnswer: "我要辦一張SIM卡",
      options: ["我要辦一張SIM卡", "我要買一個手機", "我想打電話", "我需要網路"],
      optionsHint: ["wǒ yào bàn yì zhāng SIM kǎ", "wǒ yào mǎi yí ge shǒujī", "wǒ xiǎng dǎ diànhuà", "wǒ xūyào wǎnglù"],
      optionsReading: ["ㄨㄛˇ ㄧㄠˋ ㄅㄢˋ ㄧˋ ㄓㄤ SIM ㄎㄚˇ", "ㄨㄛˇ ㄧㄠˋ ㄇㄞˇ ㄧˊ ㄍㄜ˙ ㄕㄡˇ ㄐㄧ", "ㄨㄛˇ ㄒㄧㄤˇ ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ", "ㄨㄛˇ ㄒㄩ ㄧㄠˋ ㄨㄤˇ ㄌㄨˋ"],
    },
    {
      id: "unit-19-ex3",
      type: "comprehension",
      question: "Que signifie 吃到飽 dans le contexte d'un forfait téléphone ?",
      correctAnswer: "Data illimitée (littéralement : manger jusqu'à satiété)",
      options: [
        "Data illimitée (littéralement : manger jusqu'à satiété)",
        "Forfait restaurant inclus",
        "Recharge automatique",
        "Appels gratuits vers les restaurants",
      ],
    },
    {
      id: "unit-19-ex4",
      type: "fill-blank",
      question: "我的手機沒電了，可以___嗎？(Mon tel n'a plus de batterie, je peux le charger ?)",
      correctAnswer: "充電",
      options: ["充電", "下載", "開通", "打電話"],
      optionsHint: ["chōngdiàn", "xiàzài", "kāitōng", "dǎ diànhuà"],
      optionsReading: ["ㄔㄨㄥ ㄉㄧㄢˋ", "ㄒㄧㄚˋ ㄗㄞˋ", "ㄎㄞ ㄊㄨㄥ", "ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ"],
      hint: "Quel mot signifie « charger (la batterie) » ?",
      hintReading: "Quel mot signifie « charger (la batterie) » ?",
    },
    {
      id: "unit-19-ex5",
      type: "comprehension",
      question: "Pourquoi LINE est-il indispensable à Taiwan ?",
      correctAnswer: "Il remplace tout : messages, appels, paiement, et même la communication professionnelle",
      options: [
        "Il remplace tout : messages, appels, paiement, et même la communication professionnelle",
        "C'est le seul réseau social autorisé à Taiwan",
        "C'est gratuit alors que les SMS sont payants",
        "C'est obligatoire pour obtenir un visa",
      ],
    },
    {
      id: "unit-19-ex6",
      type: "translate",
      question: "Que signifie 你有LINE嗎？加一下 ?",
      correctAnswer: "Tu as LINE ? Ajoutons-nous",
      options: [
        "Tu as LINE ? Ajoutons-nous",
        "Tu as une ligne téléphonique ? Appelle-moi",
        "Tu fais la queue ? Avance un peu",
        "Tu as internet ? Connecte-toi",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-18"],
};
