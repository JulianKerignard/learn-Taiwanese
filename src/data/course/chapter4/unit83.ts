import type { CourseUnit } from "@/types/course";

export const unit83: CourseUnit = {
  id: "unit-83",
  number: 83,
  title: "La technologie",
  titleZh: "科技",
  chapter: 4,
  description:
    "Le vocabulaire numérique essentiel : ordinateur, téléphone, mot de passe, WiFi. Apprenez à décrire un problème technique et découvrez pourquoi Taiwan est le coeur de l'industrie mondiale des semi-conducteurs avec TSMC.",
  icon: "💻",

  sections: [
    {
      title: "Le vocabulaire numérique",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "La technologie fait partie du quotidien à Taiwan, l'un des pays les plus connectés au monde. Les mots essentiels : 電腦 (diànnǎo, ordinateur, littéralement « cerveau électrique »), 手機 (shǒujī, téléphone portable), 平板 (píngbǎn, tablette), 密碼 (mìmǎ, mot de passe), 網路 (wǎnglù, internet — terme taiwanais, en Chine on dit 網絡), WiFi, 充電 (chōngdiàn, charger la batterie).",
        },
        {
          type: "example",
          chinese: "你的電腦是什麼牌子的？",
          pinyin: "nǐ de diànnǎo shì shénme páizi de?",
          translation: "C'est quoi comme marque ton ordinateur ?",
          content:
            "電腦 (diànnǎo) = ordinateur. 牌子 (páizi) = marque.",
        },
        {
          type: "example",
          chinese: "WiFi的密碼是什麼？",
          pinyin: "WiFi de mìmǎ shì shénme?",
          translation: "C'est quoi le mot de passe du WiFi ?",
          content:
            "密碼 (mìmǎ) = mot de passe (密 = secret, 碼 = code). Question indispensable au quotidien !",
        },
        {
          type: "example",
          chinese: "我的手機快沒電了，要充電。",
          pinyin: "wǒ de shǒujī kuài méi diàn le, yào chōngdiàn.",
          translation: "Mon téléphone va bientôt être à plat, il faut le charger.",
          content:
            "充電 (chōngdiàn) = charger (la batterie). 快...了 = bientôt... 沒電 = plus de batterie.",
        },
        {
          type: "example",
          chinese: "我用平板看影片。",
          pinyin: "wǒ yòng píngbǎn kàn yǐngpiàn.",
          translation: "J'utilise la tablette pour regarder des vidéos.",
          content:
            "平板 (píngbǎn) = tablette (littéralement « planche plate »).",
        },
        {
          type: "example",
          chinese: "網路好慢，怎麼辦？",
          pinyin: "wǎnglù hǎo màn, zěnme bàn?",
          translation: "Internet est trop lent, comment faire ?",
          content:
            "網路 (wǎnglù) = internet (terme taiwanais). 慢 = lent. 怎麼辦 = que faire ?",
        },
        {
          type: "tip",
          content:
            "台灣的中文 vs 大陸的中文 pour la tech : 網路 (Taiwan) vs 網絡 (Chine) pour internet, 軟體 vs 軟件 pour logiciel, 記憶體 vs 內存 pour mémoire RAM, 印表機 vs 打印機 pour imprimante. À Taiwan, utilisez toujours les termes taiwanais !",
        },
      ],
    },
    {
      title: "Problèmes et solutions",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Savoir décrire un problème technique est indispensable au quotidien. Les situations les plus courantes : 手機壞了 (téléphone cassé), 網路好慢 (internet lent), 忘記密碼 (mot de passe oublié), 電腦當機了 (ordinateur planté). Voici comment expliquer votre problème et demander de l'aide.",
        },
        {
          type: "example",
          chinese: "我的手機壞了，螢幕裂了。",
          pinyin: "wǒ de shǒujī huài le, yíngmù liè le.",
          translation: "Mon téléphone est cassé, l'écran est fissuré.",
          content:
            "壞了 = cassé/en panne. 螢幕 (yíngmù) = écran. 裂了 = fissuré.",
        },
        {
          type: "example",
          chinese: "電腦當機了，什麼都不能做。",
          pinyin: "diànnǎo dāngjī le, shénme dōu bù néng zuò.",
          translation: "L'ordinateur a planté, on ne peut plus rien faire.",
          content:
            "當機 (dāngjī) = planter/crash (terme taiwanais). 什麼都不能 = ne rien pouvoir.",
        },
        {
          type: "example",
          chinese: "我忘記密碼了，怎麼找回來？",
          pinyin: "wǒ wàngjì mìmǎ le, zěnme zhǎo huílái?",
          translation: "J'ai oublié mon mot de passe, comment le retrouver ?",
          content:
            "忘記 = oublier. 找回來 = retrouver/récupérer.",
        },
        {
          type: "example",
          chinese: "你可以幫我下載這個APP嗎？",
          pinyin: "nǐ kěyǐ bāng wǒ xiàzǎi zhège APP ma?",
          translation: "Tu peux m'aider à télécharger cette application ?",
          content:
            "下載 (xiàzǎi) = télécharger. 幫 = aider. APP se prononce souvent « A-P-P » lettre par lettre à Taiwan.",
        },
        {
          type: "example",
          chinese: "手機要更新了，等一下。",
          pinyin: "shǒujī yào gēngxīn le, děng yíxià.",
          translation: "Le téléphone doit se mettre à jour, attends un moment.",
          content:
            "更新 (gēngxīn) = mettre à jour/update. 等一下 = attends un moment.",
        },
        {
          type: "tip",
          content:
            "Pour demander de l'aide dans un magasin tech : 不好意思，我的手機有問題... (excusez-moi, j'ai un problème avec mon téléphone...). Les magasins 燦坤 (Tsannkuen) et 順發 (Sunfar) sont les grandes chaînes d'électronique à Taiwan. Les Apple Store et les réparateurs de rue (很多在光華商場, le marché tech de Taipei) peuvent aussi vous aider.",
        },
      ],
    },
    {
      title: "Taiwan la tech",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Taiwan est le coeur battant de l'industrie mondiale des semi-conducteurs. 台積電 (Táijīdiàn, TSMC — Taiwan Semiconductor Manufacturing Company) fabrique plus de 60% des puces avancées utilisées dans le monde. Sans TSMC, pas de smartphones, pas d'intelligence artificielle, pas de voitures autonomes. C'est pourquoi on appelle Taiwan « le bouclier de silicium » (矽盾, xīdùn).",
        },
        {
          type: "example",
          chinese: "台積電是世界上最重要的半導體公司。",
          pinyin: "Táijīdiàn shì shìjiè shàng zuì zhòngyào de bàndǎotǐ gōngsī.",
          translation: "TSMC est l'entreprise de semi-conducteurs la plus importante au monde.",
          content:
            "台積電 = TSMC (abréviation de 台灣積體電路製造). 半導體 = semi-conducteur. 世界上 = dans le monde.",
        },
        {
          type: "text",
          content:
            "Plusieurs marques tech mondialement connues sont taiwanaises : HTC (宏達電, Hóngdádiàn) — pionniers des smartphones, ASUS (華碩, Huáshuò) — ordinateurs et composants, Acer (宏碁, Hóngjī) — ordinateurs portables, et Foxconn (鴻海, Hónghǎi) — qui assemble les iPhones. Taiwan est aussi un géant du gaming — le taux de joueurs est parmi les plus élevés au monde.",
        },
        {
          type: "example",
          chinese: "ASUS是台灣的品牌。",
          pinyin: "ASUS shì Táiwān de pǐnpái.",
          translation: "ASUS est une marque taiwanaise.",
          content:
            "品牌 (pǐnpái) = marque. ASUS est prononcé « 華碩 » en chinois.",
        },
        {
          type: "example",
          chinese: "台灣年輕人很喜歡打電動。",
          pinyin: "Táiwān niánqīng rén hěn xǐhuan dǎ diàndòng.",
          translation: "Les jeunes Taiwanais adorent jouer aux jeux vidéo.",
          content:
            "打電動 (dǎ diàndòng) = jouer aux jeux vidéo (terme taiwanais). En Chine, on dit 打遊戲.",
        },
        {
          type: "tip",
          content:
            "Si vous êtes passionné de tech, visitez 光華商場 (Guānghuá shāngchǎng) à Taipei — c'est le paradis de l'électronique ! Plusieurs étages de boutiques vendant composants informatiques, accessoires pour téléphone, consoles de jeux et gadgets à prix compétitifs. C'est le Akihabara taiwanais.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous êtes dans un café avec votre ami(e) 小陳 (Xiǎo Chén) et vous avez des problèmes avec votre téléphone.",
    lines: [
      {
        speaker: "你",
        chinese: "小陳，WiFi的密碼是什麼？我想上網。",
        pinyin: "Xiǎo Chén, WiFi de mìmǎ shì shénme? wǒ xiǎng shàngwǎng.",
        french: "Xiao Chen, c'est quoi le mot de passe du WiFi ? Je veux aller sur internet.",
      },
      {
        speaker: "小陳",
        chinese: "密碼在這裡，你看。你的手機怎麼了？",
        pinyin: "mìmǎ zài zhèlǐ, nǐ kàn. nǐ de shǒujī zěnme le?",
        french: "Le mot de passe est ici, regarde. Qu'est-ce qui arrive à ton téléphone ?",
        note: "怎麼了 = qu'est-ce qui se passe ?",
      },
      {
        speaker: "你",
        chinese: "螢幕一直閃，而且快沒電了。",
        pinyin: "yíngmù yìzhí shǎn, érqiě kuài méi diàn le.",
        french: "L'écran n'arrête pas de clignoter, et en plus il n'a presque plus de batterie.",
        note: "一直 = sans arrêt. 閃 = clignoter. 而且 = de plus.",
      },
      {
        speaker: "小陳",
        chinese: "你先充電，再看看要不要更新。也許是軟體的問題。",
        pinyin: "nǐ xiān chōngdiàn, zài kànkan yào búyào gēngxīn. yěxǔ shì ruǎntǐ de wèntí.",
        french: "D'abord charge-le, ensuite regarde s'il faut faire une mise à jour. C'est peut-être un problème logiciel.",
        note: "先...再... pour séquencer. 軟體 = logiciel (terme taiwanais). 也許 = peut-être.",
      },
      {
        speaker: "你",
        chinese: "好，我先存一下檔案。對了，你的電腦是哪個牌子的？",
        pinyin: "hǎo, wǒ xiān cún yíxià dǎng'àn. duìle, nǐ de diànnǎo shì nǎge páizi de?",
        french: "OK, je sauvegarde d'abord mes fichiers. Au fait, c'est quoi la marque de ton ordinateur ?",
      },
      {
        speaker: "小陳",
        chinese: "ASUS的，台灣品牌！很好用，而且不貴。你要不要去光華商場看看？",
        pinyin: "ASUS de, Táiwān pǐnpái! hěn hǎo yòng, érqiě bú guì. nǐ yào búyào qù Guānghuá shāngchǎng kànkan?",
        french: "ASUS, une marque taiwanaise ! Très pratique et pas cher en plus. Tu veux aller jeter un oeil au marché Guanghua ?",
        note: "好用 = pratique/facile à utiliser. 光華商場 = le paradis tech de Taipei.",
      },
    ],
  },

  keyPoints: [
    "電腦 = ordinateur, 手機 = téléphone, 平板 = tablette, 密碼 = mot de passe, 網路 = internet.",
    "充電 = charger, 下載 = télécharger, 更新 = mettre à jour, 當機 = planter/crash.",
    "Vocabulaire taiwanais vs chinois continental : 網路/網絡, 軟體/軟件, 當機/死機.",
    "台積電 (TSMC) produit 60%+ des puces avancées mondiales. ASUS, Acer, HTC = marques taiwanaises.",
    "光華商場 à Taipei = le paradis de l'électronique. 打電動 = jouer aux jeux vidéo (terme taiwanais).",
  ],

  vocabulary: [
    {
      character: "電腦",
      pinyin: "diànnǎo",
      zhuyin: "ㄉㄧㄢˋ ㄋㄠˇ",
      french: "Ordinateur",
      english: "Computer",
      example: {
        sentence: "我要買一台新電腦。",
        pinyin: "wǒ yào mǎi yì tái xīn diànnǎo.",
        translation: "Je vais acheter un nouvel ordinateur.",
      },
    },
    {
      character: "手機",
      pinyin: "shǒujī",
      zhuyin: "ㄕㄡˇ ㄐㄧ",
      french: "Téléphone portable",
      english: "Mobile phone",
      example: {
        sentence: "你的手機號碼是幾號？",
        pinyin: "nǐ de shǒujī hàomǎ shì jǐ hào?",
        translation: "C'est quoi ton numéro de téléphone ?",
      },
    },
    {
      character: "平板",
      pinyin: "píngbǎn",
      zhuyin: "ㄆㄧㄥˊ ㄅㄢˇ",
      french: "Tablette",
      english: "Tablet",
      example: {
        sentence: "小孩子都在用平板。",
        pinyin: "xiǎo háizi dōu zài yòng píngbǎn.",
        translation: "Tous les enfants utilisent des tablettes.",
      },
    },
    {
      character: "密碼",
      pinyin: "mìmǎ",
      zhuyin: "ㄇㄧˋ ㄇㄚˇ",
      french: "Mot de passe",
      english: "Password",
      example: {
        sentence: "請輸入你的密碼。",
        pinyin: "qǐng shūrù nǐ de mìmǎ.",
        translation: "Veuillez entrer votre mot de passe.",
      },
    },
    {
      character: "網路",
      pinyin: "wǎnglù",
      zhuyin: "ㄨㄤˇ ㄌㄨˋ",
      french: "Internet",
      english: "Internet",
      example: {
        sentence: "這裡有網路嗎？",
        pinyin: "zhèlǐ yǒu wǎnglù ma?",
        translation: "Il y a internet ici ?",
      },
    },
    {
      character: "充電",
      pinyin: "chōngdiàn",
      zhuyin: "ㄔㄨㄥ ㄉㄧㄢˋ",
      french: "Charger (la batterie)",
      english: "To charge",
      example: {
        sentence: "哪裡可以充電？",
        pinyin: "nǎlǐ kěyǐ chōngdiàn?",
        translation: "Où est-ce qu'on peut charger ?",
      },
    },
    {
      character: "下載",
      pinyin: "xiàzǎi",
      zhuyin: "ㄒㄧㄚˋ ㄗㄞˇ",
      french: "Télécharger",
      english: "To download",
      example: {
        sentence: "你可以下載這個APP。",
        pinyin: "nǐ kěyǐ xiàzǎi zhège APP.",
        translation: "Tu peux télécharger cette application.",
      },
    },
    {
      character: "更新",
      pinyin: "gēngxīn",
      zhuyin: "ㄍㄥ ㄒㄧㄣ",
      french: "Mettre à jour",
      english: "To update",
      example: {
        sentence: "手機需要更新。",
        pinyin: "shǒujī xūyào gēngxīn.",
        translation: "Le téléphone a besoin d'une mise à jour.",
      },
    },
    {
      character: "當機",
      pinyin: "dāngjī",
      zhuyin: "ㄉㄤ ㄐㄧ",
      french: "Planter, crash",
      english: "To crash, to freeze",
      example: {
        sentence: "電腦又當機了！",
        pinyin: "diànnǎo yòu dāngjī le!",
        translation: "L'ordinateur a encore planté !",
      },
    },
    {
      character: "螢幕",
      pinyin: "yíngmù",
      zhuyin: "ㄧㄥˊ ㄇㄨˋ",
      french: "Écran",
      english: "Screen",
      example: {
        sentence: "這個螢幕很大。",
        pinyin: "zhège yíngmù hěn dà.",
        translation: "Cet écran est très grand.",
      },
    },
    {
      character: "鍵盤",
      pinyin: "jiànpán",
      zhuyin: "ㄐㄧㄢˋ ㄆㄢˊ",
      french: "Clavier",
      english: "Keyboard",
      example: {
        sentence: "這個鍵盤打字很舒服。",
        pinyin: "zhège jiànpán dǎzì hěn shūfu.",
        translation: "Ce clavier est très agréable pour taper.",
      },
    },
    {
      character: "滑鼠",
      pinyin: "huáshǔ",
      zhuyin: "ㄏㄨㄚˊ ㄕㄨˇ",
      french: "Souris (informatique)",
      english: "Mouse (computer)",
      example: {
        sentence: "我的滑鼠壞了。",
        pinyin: "wǒ de huáshǔ huài le.",
        translation: "Ma souris est cassée.",
      },
    },
    {
      character: "印表機",
      pinyin: "yìnbiǎojī",
      zhuyin: "ㄧㄣˋ ㄅㄧㄠˇ ㄐㄧ",
      french: "Imprimante",
      english: "Printer",
      example: {
        sentence: "印表機沒有紙了。",
        pinyin: "yìnbiǎojī méiyǒu zhǐ le.",
        translation: "L'imprimante n'a plus de papier.",
      },
    },
    {
      character: "檔案",
      pinyin: "dǎng'àn",
      zhuyin: "ㄉㄤˇ ㄢˋ",
      french: "Fichier, document",
      english: "File, document",
      example: {
        sentence: "請把檔案寄給我。",
        pinyin: "qǐng bǎ dǎng'àn jì gěi wǒ.",
        translation: "Veuillez m'envoyer le fichier.",
      },
    },
    {
      character: "存",
      pinyin: "cún",
      zhuyin: "ㄘㄨㄣˊ",
      french: "Sauvegarder, stocker",
      english: "To save, to store",
      example: {
        sentence: "記得存檔案！",
        pinyin: "jìde cún dǎng'àn!",
        translation: "N'oublie pas de sauvegarder le fichier !",
      },
    },
  ],

  exercises: [
    {
      id: "u83-ex1",
      type: "comprehension",
      question: "Que signifie 當機 en chinois taiwanais ?",
      correctAnswer: "Planter/crash (un ordinateur ou un programme)",
      options: [
        "Planter/crash (un ordinateur ou un programme)",
        "Allumer un ordinateur",
        "Éteindre un téléphone",
        "Mettre à jour un logiciel",
      ],
    },
    {
      id: "u83-ex2",
      type: "fill-blank",
      question: "WiFi的___是什麼？(C'est quoi le mot de passe du WiFi ?)",
      correctAnswer: "密碼",
      options: ["密碼", "網路", "螢幕", "檔案"],
      optionsHint: ["mìmǎ", "wǎnglù", "yíngmù", "dǎng'àn"],
      optionsZhuyin: ["ㄇㄧˋ ㄇㄚˇ", "ㄨㄤˇ ㄌㄨˋ", "ㄧㄥˊ ㄇㄨˋ", "ㄉㄤˇ ㄢˋ"],
      hint: "Le code secret pour se connecter.",
      hintZhuyin: "Le code secret pour se connecter.",
    },
    {
      id: "u83-ex3",
      type: "translate",
      question: "Comment dit-on « Mon téléphone est cassé » ?",
      correctAnswer: "我的手機壞了",
      options: [
        "我的手機壞了",
        "我的電腦壞了",
        "手機很好",
        "壞了我的手機",
      ],
      optionsHint: [
        "wǒ de shǒujī huài le",
        "wǒ de diànnǎo huài le",
        "shǒujī hěn hǎo",
        "huài le wǒ de shǒujī",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ ㄏㄨㄞˋ ㄌㄜ˙",
        "ㄨㄛˇ ㄉㄜ˙ ㄉㄧㄢˋ ㄋㄠˇ ㄏㄨㄞˋ ㄌㄜ˙",
        "ㄕㄡˇ ㄐㄧ ㄏㄣˇ ㄏㄠˇ",
        "ㄏㄨㄞˋ ㄌㄜ˙ ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ",
      ],
    },
    {
      id: "u83-ex4",
      type: "comprehension",
      question: "Pourquoi Taiwan est-il surnommé « le bouclier de silicium » ?",
      correctAnswer: "Parce que TSMC fabrique plus de 60% des puces avancées mondiales",
      options: [
        "Parce que TSMC fabrique plus de 60% des puces avancées mondiales",
        "Parce que Taiwan exporte beaucoup de silicone",
        "Parce que Taiwan a le plus d'ordinateurs par habitant",
        "Parce que Taiwan a inventé le WiFi",
      ],
    },
    {
      id: "u83-ex5",
      type: "fill-blank",
      question: "手機快沒電了，要___。(Le téléphone est presque à plat, il faut le charger.)",
      correctAnswer: "充電",
      options: ["充電", "下載", "更新", "當機"],
      optionsHint: ["chōngdiàn", "xiàzǎi", "gēngxīn", "dāngjī"],
      optionsZhuyin: ["ㄔㄨㄥ ㄉㄧㄢˋ", "ㄒㄧㄚˋ ㄗㄞˇ", "ㄍㄥ ㄒㄧㄣ", "ㄉㄤ ㄐㄧ"],
      hint: "L'action de remplir la batterie.",
      hintZhuyin: "L'action de remplir la batterie.",
    },
    {
      id: "u83-ex6",
      type: "translate",
      question: "Comment dit-on « L'ordinateur a encore planté » ?",
      correctAnswer: "電腦又當機了",
      options: [
        "電腦又當機了",
        "電腦又更新了",
        "手機又壞了",
        "當機又電腦了",
      ],
      optionsHint: [
        "diànnǎo yòu dāngjī le",
        "diànnǎo yòu gēngxīn le",
        "shǒujī yòu huài le",
        "dāngjī yòu diànnǎo le",
      ],
      optionsZhuyin: [
        "ㄉㄧㄢˋ ㄋㄠˇ ㄧㄡˋ ㄉㄤ ㄐㄧ ㄌㄜ˙",
        "ㄉㄧㄢˋ ㄋㄠˇ ㄧㄡˋ ㄍㄥ ㄒㄧㄣ ㄌㄜ˙",
        "ㄕㄡˇ ㄐㄧ ㄧㄡˋ ㄏㄨㄞˋ ㄌㄜ˙",
        "ㄉㄤ ㄐㄧ ㄧㄡˋ ㄉㄧㄢˋ ㄋㄠˇ ㄌㄜ˙",
      ],
    },
    {
      id: "u83-ex7",
      type: "listen",
      question: "Écoutez et choisissez la bonne traduction de : 我忘記密碼了，怎麼辦？",
      correctAnswer: "J'ai oublié mon mot de passe, comment faire ?",
      options: [
        "J'ai oublié mon mot de passe, comment faire ?",
        "J'ai changé mon mot de passe.",
        "Mon mot de passe est trop facile.",
        "Je veux créer un nouveau mot de passe.",
      ],
    },
    {
      id: "u83-ex8",
      type: "fill-blank",
      question: "記得___檔案！(N'oublie pas de sauvegarder le fichier !)",
      correctAnswer: "存",
      options: ["存", "下載", "寄", "充電"],
      optionsHint: ["cún", "xiàzǎi", "jì", "chōngdiàn"],
      optionsZhuyin: ["ㄘㄨㄣˊ", "ㄒㄧㄚˋ ㄗㄞˇ", "ㄐㄧˋ", "ㄔㄨㄥ ㄉㄧㄢˋ"],
      hint: "L'action de garder des données en memoire.",
      hintZhuyin: "L'action de garder des données en memoire.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-82"],
};
