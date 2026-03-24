import type { CourseUnit } from "@/types/course";

export const unit19: CourseUnit = {
  id: "unit-19",
  number: 19,
  title: "Le téléphone et internet",
  titleZh: "手機和網路",
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
          chinese: "WiFi的密碼是什麼？",
          pinyin: "WiFi de mìmǎ shì shénme?",
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
          chinese: "我的手機沒電了，可以充電嗎？",
          pinyin: "wǒ de shǒujī méi diàn le, kěyǐ chōngdiàn ma?",
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
          chinese: "我打電話給你",
          pinyin: "wǒ dǎ diànhuà gěi nǐ",
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
          chinese: "我要辦一張SIM卡",
          pinyin: "wǒ yào bàn yì zhāng SIM kǎ",
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
          chinese: "我要一張預付卡，三十天的",
          pinyin: "wǒ yào yì zhāng yùfùkǎ, sānshí tiān de",
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
          chinese: "有流量吃到飽的方案嗎？",
          pinyin: "yǒu liúliàng chī dào bǎo de fāng'àn ma?",
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
          chinese: "你有LINE嗎？加一下",
          pinyin: "nǐ yǒu LINE ma? jiā yíxià",
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
        chinese: "你好，請問要辦什麼？",
        pinyin: "nǐ hǎo, qǐngwèn yào bàn shénme?",
        french: "Bonjour, qu'est-ce que vous souhaitez souscrire ?",
      },
      {
        speaker: "你",
        chinese: "你好，我要辦一張SIM卡。有預付卡嗎？",
        pinyin: "nǐ hǎo, wǒ yào bàn yì zhāng SIM kǎ. yǒu yùfùkǎ ma?",
        french: "Bonjour, je voudrais une carte SIM. Vous avez des cartes prépayées ?",
      },
      {
        speaker: "店員",
        chinese: "有，三十天的，流量吃到飽，五百塊。需要嗎？",
        pinyin: "yǒu, sānshí tiān de, liúliàng chī dào bǎo, wǔbǎi kuài. xūyào ma?",
        french: "Oui, trente jours, data illimitée, 500 NT$. Vous voulez ?",
      },
      {
        speaker: "你",
        chinese: "好，我要這個。可以打電話嗎？",
        pinyin: "hǎo, wǒ yào zhège. kěyǐ dǎ diànhuà ma?",
        french: "OK, je prends celui-là. On peut passer des appels ?",
      },
      {
        speaker: "店員",
        chinese: "可以。請給我你的護照，我幫你開通。",
        pinyin: "kěyǐ. qǐng gěi wǒ nǐ de hùzhào, wǒ bāng nǐ kāitōng.",
        french: "Oui. Donnez-moi votre passeport, je vais l'activer pour vous.",
        note: "開通 = activer. 護照 = passeport. Obligatoire pour acheter une SIM à Taiwan.",
      },
      {
        speaker: "你",
        chinese: "好的。對了，WiFi的密碼是什麼？我想先下載LINE。",
        pinyin: "hǎo de. duìle, WiFi de mìmǎ shì shénme? wǒ xiǎng xiān xiàzài LINE.",
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
      character: "手機",
      pinyin: "shǒujī",
      zhuyin: "ㄕㄡˇ ㄐㄧ",
      french: "Téléphone portable",
      english: "Cell phone",
      example: {
        sentence: "你的手機號碼是幾號？",
        pinyin: "nǐ de shǒujī hàomǎ shì jǐ hào?",
        translation: "C'est quoi ton numéro de téléphone ?",
      },
    },
    {
      character: "電話",
      pinyin: "diànhuà",
      zhuyin: "ㄉㄧㄢˋ ㄏㄨㄚˋ",
      french: "Téléphone (appel)",
      english: "Telephone, phone call",
      example: {
        sentence: "我打電話給你。",
        pinyin: "wǒ dǎ diànhuà gěi nǐ.",
        translation: "Je t'appelle.",
      },
    },
    {
      character: "網路",
      pinyin: "wǎnglù",
      zhuyin: "ㄨㄤˇ ㄌㄨˋ",
      french: "Internet",
      english: "Internet, network",
      example: {
        sentence: "這裡有網路嗎？",
        pinyin: "zhèlǐ yǒu wǎnglù ma?",
        translation: "Il y a internet ici ?",
      },
    },
    {
      character: "密碼",
      pinyin: "mìmǎ",
      zhuyin: "ㄇㄧˋ ㄇㄚˇ",
      french: "Mot de passe",
      english: "Password",
      example: {
        sentence: "WiFi密碼是多少？",
        pinyin: "WiFi mìmǎ shì duōshǎo?",
        translation: "C'est quoi le mot de passe WiFi ?",
      },
    },
    {
      character: "充電",
      pinyin: "chōngdiàn",
      zhuyin: "ㄔㄨㄥ ㄉㄧㄢˋ",
      french: "Charger (batterie)",
      english: "To charge",
      example: {
        sentence: "手機需要充電。",
        pinyin: "shǒujī xūyào chōngdiàn.",
        translation: "Le téléphone a besoin d'être chargé.",
      },
    },
    {
      character: "下載",
      pinyin: "xiàzài",
      zhuyin: "ㄒㄧㄚˋ ㄗㄞˋ",
      french: "Télécharger",
      english: "To download",
      example: {
        sentence: "你可以下載這個APP。",
        pinyin: "nǐ kěyǐ xiàzài zhège APP.",
        translation: "Tu peux télécharger cette appli.",
      },
    },
    {
      character: "傳",
      pinyin: "chuán",
      zhuyin: "ㄔㄨㄢˊ",
      french: "Envoyer (message/fichier)",
      english: "To send (message/file)",
      example: {
        sentence: "我傳照片給你。",
        pinyin: "wǒ chuán zhàopiàn gěi nǐ.",
        translation: "Je t'envoie la photo.",
      },
    },
    {
      character: "訊息",
      pinyin: "xùnxí",
      zhuyin: "ㄒㄩㄣˋ ㄒㄧˊ",
      french: "Message, information",
      english: "Message, information",
      example: {
        sentence: "我收到你的訊息了。",
        pinyin: "wǒ shōudào nǐ de xùnxí le.",
        translation: "J'ai reçu ton message.",
      },
    },
    {
      character: "打電話",
      pinyin: "dǎ diànhuà",
      zhuyin: "ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ",
      french: "Appeler, téléphoner",
      english: "To make a phone call",
      example: {
        sentence: "你要打電話還是傳訊息？",
        pinyin: "nǐ yào dǎ diànhuà háishì chuán xùnxí?",
        translation: "Tu veux appeler ou envoyer un message ?",
      },
    },
    {
      character: "號碼",
      pinyin: "hàomǎ",
      zhuyin: "ㄏㄠˋ ㄇㄚˇ",
      french: "Numéro",
      english: "Number",
      example: {
        sentence: "你的電話號碼是幾號？",
        pinyin: "nǐ de diànhuà hàomǎ shì jǐ hào?",
        translation: "Quel est ton numéro de téléphone ?",
      },
    },
    {
      character: "月租",
      pinyin: "yuèzū",
      zhuyin: "ㄩㄝˋ ㄗㄨ",
      french: "Forfait mensuel",
      english: "Monthly plan",
      example: {
        sentence: "月租方案比較划算。",
        pinyin: "yuèzū fāng'àn bǐjiào huásuàn.",
        translation: "Le forfait mensuel est plus rentable.",
      },
    },
    {
      character: "流量",
      pinyin: "liúliàng",
      zhuyin: "ㄌㄧㄡˊ ㄌㄧㄤˋ",
      french: "Data (données mobiles)",
      english: "Data, traffic",
      example: {
        sentence: "我的流量快用完了。",
        pinyin: "wǒ de liúliàng kuài yòng wán le.",
        translation: "Ma data est presque épuisée.",
      },
    },
    {
      character: "開通",
      pinyin: "kāitōng",
      zhuyin: "ㄎㄞ ㄊㄨㄥ",
      french: "Activer (un service)",
      english: "To activate",
      example: {
        sentence: "SIM卡已經開通了。",
        pinyin: "SIM kǎ yǐjīng kāitōng le.",
        translation: "La carte SIM est déjà activée.",
      },
    },
    {
      character: "吃到飽",
      pinyin: "chī dào bǎo",
      zhuyin: "ㄔ ㄉㄠˋ ㄅㄠˇ",
      french: "Illimité, à volonté",
      english: "Unlimited, all-you-can-eat",
      example: {
        sentence: "這個方案網路吃到飽。",
        pinyin: "zhège fāng'àn wǎnglù chī dào bǎo.",
        translation: "Ce forfait a internet illimité.",
      },
    },
    {
      character: "辦",
      pinyin: "bàn",
      zhuyin: "ㄅㄢˋ",
      french: "S'occuper de, souscrire",
      english: "To handle, to set up",
      example: {
        sentence: "我要辦一張銀行卡。",
        pinyin: "wǒ yào bàn yì zhāng yínháng kǎ.",
        translation: "Je voudrais ouvrir un compte bancaire.",
      },
    },
  ],

  exercises: [
    {
      id: "u15-ex1",
      type: "fill-blank",
      question: "WiFi的___是什麼？(Quel est le mot de passe WiFi ?)",
      correctAnswer: "密碼",
      options: ["密碼", "號碼", "名字", "電話"],
      hint: "Quel mot signifie « mot de passe » ?",
    },
    {
      id: "u15-ex2",
      type: "translate",
      question: "Comment dit-on « Je voudrais acheter une carte SIM » ?",
      correctAnswer: "我要辦一張SIM卡",
      options: ["我要辦一張SIM卡", "我要買一個手機", "我想打電話", "我需要網路"],
    },
    {
      id: "u15-ex3",
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
      id: "u15-ex4",
      type: "fill-blank",
      question: "我的手機沒電了，可以___嗎？(Mon tel n'a plus de batterie, je peux le charger ?)",
      correctAnswer: "充電",
      options: ["充電", "下載", "開通", "打電話"],
      hint: "Quel mot signifie « charger (la batterie) » ?",
    },
    {
      id: "u15-ex5",
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
      id: "u15-ex6",
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
