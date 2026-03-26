import type { CourseUnit } from "@/types/course";

export const unit55: CourseUnit = {
  id: "unit-55",
  number: 55,
  title: "Le corps et la santé",
  titleZh: "身體與健康",
  chapter: 5,
  description:
    "Vocabulaire du corps humain, décrire des symptômes et consulter un médecin. Apprenez à utiliser 哪裡不舒服 pour demander ce qui ne va pas, 多久了 pour la durée d'un état, et 應該 pour donner des conseils. Découvrez le système de santé taïwanais, reconnu comme l'un des meilleurs au monde.",
  icon: "🏥",

  sections: [
    {
      title: "Le corps humain et les symptômes",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Connaître les parties du corps en chinois est essentiel, surtout si vous devez consulter un médecin à Taïwan. La plupart des mots désignant des parties du corps sont des mots simples ou des composés très logiques. Pour décrire un symptôme, on utilise souvent la partie du corps + 痛 (tòng, avoir mal) ou + 不舒服 (bù shūfu, ne pas être à l'aise).",
        },
        {
          type: "example",
          chinese: "我頭很痛。",
          pinyin: "wǒ tóu hěn tòng.",
          translation: "J'ai très mal à la tête.",
          content: "Structure : partie du corps + 痛. Très direct et naturel en chinois.",
        },
        {
          type: "example",
          chinese: "我的眼睛不舒服。",
          pinyin: "wǒ de yǎnjīng bù shūfu.",
          translation: "Mes yeux ne sont pas bien / J'ai un problème aux yeux.",
          content: "眼睛 (yǎnjīng) = yeux. 不舒服 = pas à l'aise, inconfortable.",
        },
        {
          type: "example",
          chinese: "他肚子痛，不想吃東西。",
          pinyin: "tā dùzi tòng, bù xiǎng chī dōngxi.",
          translation: "Il a mal au ventre, il ne veut pas manger.",
          content: "肚子 (dùzi) = ventre. 痛 peut se placer directement après la partie du corps.",
        },
        {
          type: "example",
          chinese: "我的牙齒很癢。",
          pinyin: "wǒ de yáchǐ hěn yǎng.",
          translation: "Mes dents me démangent.",
          content: "牙齒 (yáchǐ) = dents. 癢 (yǎng) = démanger.",
        },
        {
          type: "example",
          chinese: "她一直咳嗽，已經三天了。",
          pinyin: "tā yìzhí késòu, yǐjīng sān tiān le.",
          translation: "Elle tousse sans arrêt, ça fait déjà trois jours.",
          content: "咳嗽 (késòu) = tousser. 一直 = sans arrêt. 已經...了 = ça fait déjà...",
        },
        {
          type: "tip",
          content:
            "Pour décrire une douleur, vous pouvez préciser l'intensité : 有一點痛 (yǒu yìdiǎn tòng, un peu mal), 很痛 (hěn tòng, très mal), 痛死了 (tòng sǐ le, mal à en mourir — expression courante et exagérée). Le médecin vous demandera souvent de noter votre douleur de 1 à 10.",
        },
      ],
    },
    {
      title: "哪裡不舒服 / 多久了 / 應該 + verbe",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "哪裡不舒服？(nǎlǐ bù shūfu?) est LA question clé que le médecin vous posera. Littéralement « où pas confortable ? », elle signifie « qu'est-ce qui ne va pas ? » ou « où avez-vous mal ? ». La réponse suit la structure : partie du corps + symptôme.",
        },
        {
          type: "example",
          chinese: "醫生問：「你哪裡不舒服？」",
          pinyin: "yīshēng wèn: 'nǐ nǎlǐ bù shūfu?'",
          translation: "Le médecin demande : « Où avez-vous mal ? »",
          content: "哪裡不舒服 est la question standard d'un médecin en chinois.",
        },
        {
          type: "example",
          chinese: "我喉嚨痛，而且一直咳嗽。",
          pinyin: "wǒ hóulóng tòng, érqiě yìzhí késòu.",
          translation: "J'ai mal à la gorge, et en plus je tousse sans arrêt.",
          content: "Réponse type : symptôme 1 + 而且 (de plus) + symptôme 2.",
        },
        {
          type: "text",
          content:
            "多久了？(duōjiǔ le?) signifie « depuis combien de temps ? ». Le médecin utilisera cette question pour connaître la durée des symptômes. La réponse utilise la structure : durée + 了 (le). Par exemple : 三天了 (sān tiān le, ça fait trois jours).",
        },
        {
          type: "example",
          chinese: "這樣多久了？",
          pinyin: "zhèyàng duōjiǔ le?",
          translation: "C'est comme ça depuis combien de temps ?",
          content: "這樣 = comme ça. 多久了 = depuis combien de temps. Question médicale courante.",
        },
        {
          type: "example",
          chinese: "大概一個星期了。",
          pinyin: "dàgài yí gè xīngqí le.",
          translation: "Environ une semaine.",
          content: "大概 = environ. 一個星期了 = ça fait une semaine. 了 marque la durée écoulée.",
        },
        {
          type: "text",
          content:
            "應該 (yīnggāi) signifie « devoir, il faudrait que ». C'est le mot clé pour donner des conseils ou des recommandations. Structure : sujet + 應該 + verbe. Le médecin l'utilise pour ses prescriptions, et vous pouvez l'utiliser pour conseiller quelqu'un.",
        },
        {
          type: "example",
          chinese: "你應該多休息。",
          pinyin: "nǐ yīnggāi duō xiūxi.",
          translation: "Tu devrais te reposer davantage.",
          content: "應該 + verbe = devoir/il faudrait. 多 = davantage. 休息 = se reposer.",
        },
        {
          type: "example",
          chinese: "你應該去看醫生。",
          pinyin: "nǐ yīnggāi qù kàn yīshēng.",
          translation: "Tu devrais aller voir le médecin.",
          content: "看醫生 = voir le médecin (littéralement : regarder le médecin).",
        },
        {
          type: "example",
          chinese: "感冒的時候應該多喝水。",
          pinyin: "gǎnmào de shíhòu yīnggāi duō hē shuǐ.",
          translation: "Quand on a un rhume, il faut boire beaucoup d'eau.",
          content: "感冒 = rhume. 的時候 = quand. 多喝水 = boire beaucoup d'eau.",
        },
        {
          type: "comparison",
          content:
            "應該 vs 要 vs 必須 : 你應該休息 = tu DEVRAIS te reposer (conseil). 你要休息 = tu DOIS te reposer (obligation modérée). 你必須休息 = tu DOIS ABSOLUMENT te reposer (obligation forte). Du plus doux au plus fort : 應該 < 要 < 必須.",
        },
      ],
    },
    {
      title: "Le système de santé à Taïwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Taïwan possède l'un des meilleurs systèmes de santé au monde grâce à son 全民健保 (quánmín jiànbǎo), l'Assurance Maladie Nationale (National Health Insurance, NHI). Lancé en 1995, ce système couvre plus de 99% de la population taïwanaise. Les consultations, les médicaments et même de nombreuses opérations sont couverts à un coût très bas.",
        },
        {
          type: "example",
          chinese: "你有健保卡嗎？",
          pinyin: "nǐ yǒu jiànbǎo kǎ ma?",
          translation: "Tu as ta carte d'assurance maladie ?",
          content: "健保卡 (jiànbǎo kǎ) = carte NHI. Indispensable pour consulter à Taïwan.",
        },
        {
          type: "text",
          content:
            "À Taïwan, on distingue les 診所 (zhěnsuǒ, cliniques/cabinets médicaux) et les 醫院 (yīyuàn, hôpitaux). Pour un problème mineur (rhume, mal de gorge, allergie), on va d'abord à la 診所 du quartier. C'est plus rapide, moins cher, et souvent suffisant. Les 醫院 sont réservés aux cas plus graves ou nécessitant des examens approfondis.",
        },
        {
          type: "example",
          chinese: "我先去診所看看，如果沒好再去醫院。",
          pinyin: "wǒ xiān qù zhěnsuǒ kànkan, rúguǒ méi hǎo zài qù yīyuàn.",
          translation: "Je vais d'abord à la clinique, si ça ne va pas mieux j'irai à l'hôpital.",
          content: "先...再... appliqué au parcours de soins. 診所 pour les cas légers, 醫院 pour les cas graves.",
        },
        {
          type: "text",
          content:
            "Les 藥局 (yàojú, pharmacies) sont omniprésentes à Taïwan. On peut y acheter des médicaments sans ordonnance (成藥, chéngyào), mais de nombreux médicaments sont directement fournis par le médecin après la consultation à la 診所, inclus dans le prix de la visite. Le pharmacien (藥師, yàoshī) peut aussi vous conseiller pour des problèmes mineurs.",
        },
        {
          type: "example",
          chinese: "你可以去藥局買感冒藥。",
          pinyin: "nǐ kěyǐ qù yàojú mǎi gǎnmào yào.",
          translation: "Tu peux aller à la pharmacie acheter des médicaments contre le rhume.",
          content: "藥局 = pharmacie. 感冒藥 = médicament contre le rhume (感冒 = rhume + 藥 = médicament).",
        },
        {
          type: "tip",
          content:
            "Si vous êtes étranger à Taïwan et que vous n'avez pas de carte 健保, vous pouvez quand même consulter dans une 診所 ou un 醫院 — vous paierez simplement le tarif complet (自費, zìfèi). Une consultation en 診所 coûte environ 300-600 NT$ (8-16 €), médicaments inclus. C'est remarquablement abordable comparé à la France !",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous ne vous sentez pas bien et vous allez à la 診所 (clinique) de votre quartier à Taïwan. Le médecin (醫生) vous examine.",
    lines: [
      {
        speaker: "醫生",
        chinese: "你好，請坐。你哪裡不舒服？",
        pinyin: "nǐ hǎo, qǐng zuò. nǐ nǎlǐ bù shūfu?",
        french: "Bonjour, asseyez-vous. Où avez-vous mal ?",
        note: "哪裡不舒服 est la question standard du médecin.",
      },
      {
        speaker: "你",
        chinese: "醫生你好，我頭很痛，而且一直咳嗽。",
        pinyin: "yīshēng nǐ hǎo, wǒ tóu hěn tòng, érqiě yìzhí késòu.",
        french: "Bonjour docteur, j'ai très mal à la tête, et en plus je tousse sans arrêt.",
      },
      {
        speaker: "醫生",
        chinese: "這樣多久了？",
        pinyin: "zhèyàng duōjiǔ le?",
        french: "C'est comme ça depuis combien de temps ?",
        note: "多久了 pour demander la durée des symptômes.",
      },
      {
        speaker: "你",
        chinese: "大概三天了。昨天開始肚子也不舒服。",
        pinyin: "dàgài sān tiān le. zuótiān kāishǐ dùzi yě bù shūfu.",
        french: "Environ trois jours. Depuis hier, mon ventre aussi n'est pas bien.",
        note: "三天了 = ça fait trois jours. 開始 = commencer.",
      },
      {
        speaker: "醫生",
        chinese: "我幫你量一下體溫。嗯，三十八度五，你發燒了。",
        pinyin: "wǒ bāng nǐ liáng yíxià tǐwēn. ēn, sānshíbā dù wǔ, nǐ fāshāo le.",
        french: "Je vais prendre votre température. Hmm, 38,5 degrés, vous avez de la fièvre.",
      },
      {
        speaker: "醫生",
        chinese: "你應該是感冒了。我開一些藥給你。",
        pinyin: "nǐ yīnggāi shì gǎnmào le. wǒ kāi yìxiē yào gěi nǐ.",
        french: "Vous devez avoir attrapé un rhume. Je vais vous prescrire des médicaments.",
        note: "應該是 = ça doit être (probabilité). 開藥 = prescrire des médicaments.",
      },
      {
        speaker: "你",
        chinese: "好的，謝謝醫生。我應該注意什麼？",
        pinyin: "hǎo de, xièxie yīshēng. wǒ yīnggāi zhùyì shénme?",
        french: "D'accord, merci docteur. À quoi dois-je faire attention ?",
        note: "應該 + verbe pour demander des recommandations.",
      },
      {
        speaker: "醫生",
        chinese: "你應該多休息，多喝水，這幾天不要吃太油的東西。吃完藥如果還沒好，再來看。",
        pinyin: "nǐ yīnggāi duō xiūxi, duō hē shuǐ, zhè jǐ tiān búyào chī tài yóu de dōngxi. chī wán yào rúguǒ hái méi hǎo, zài lái kàn.",
        french: "Vous devriez vous reposer davantage, boire beaucoup d'eau, et ne pas manger trop gras ces jours-ci. Si après les médicaments ça ne va pas mieux, revenez.",
        note: "應該 + conseils multiples. 如果...再... = si... alors...",
      },
    ],
  },

  keyPoints: [
    "哪裡不舒服？ est la question standard du médecin pour demander les symptômes.",
    "多久了？ pour demander depuis combien de temps dure un état : 三天了 (ça fait trois jours).",
    "應該 + verbe pour donner un conseil : 你應該多休息 (tu devrais te reposer davantage).",
    "Partie du corps + 痛 pour dire qu'on a mal : 頭痛 (mal de tête), 肚子痛 (mal au ventre).",
    "Le 健保 (NHI) couvre 99% des Taïwanais. Pour les petits problèmes, on va d'abord à la 診所 (clinique), pas à l'醫院 (hôpital).",
  ],

  vocabulary: [
    {
      character: "頭",
      pinyin: "tóu",
      zhuyin: "ㄊㄡˊ",
      french: "Tête",
      english: "Head",
      example: {
        sentence: "我的頭好痛。",
        pinyin: "wǒ de tóu hǎo tòng.",
        translation: "J'ai tellement mal à la tête.",
      },
    },
    {
      character: "眼睛",
      pinyin: "yǎnjīng",
      zhuyin: "ㄧㄢˇ ㄐㄧㄥ",
      french: "Yeux",
      english: "Eyes",
      example: {
        sentence: "你的眼睛很漂亮。",
        pinyin: "nǐ de yǎnjīng hěn piàoliang.",
        translation: "Tes yeux sont très beaux.",
      },
    },
    {
      character: "耳朵",
      pinyin: "ěrduo",
      zhuyin: "ㄦˇ ㄉㄨㄛ˙",
      french: "Oreilles",
      english: "Ears",
      example: {
        sentence: "我的耳朵不舒服。",
        pinyin: "wǒ de ěrduo bù shūfu.",
        translation: "J'ai un problème aux oreilles.",
      },
    },
    {
      character: "嘴巴",
      pinyin: "zuǐba",
      zhuyin: "ㄗㄨㄟˇ ㄅㄚ˙",
      french: "Bouche",
      english: "Mouth",
      example: {
        sentence: "請張開嘴巴。",
        pinyin: "qǐng zhāngkāi zuǐba.",
        translation: "Ouvrez la bouche, s'il vous plaît.",
      },
    },
    {
      character: "手",
      pinyin: "shǒu",
      zhuyin: "ㄕㄡˇ",
      french: "Main",
      english: "Hand",
      example: {
        sentence: "請先洗手。",
        pinyin: "qǐng xiān xǐ shǒu.",
        translation: "Veuillez d'abord vous laver les mains.",
      },
    },
    {
      character: "腳",
      pinyin: "jiǎo",
      zhuyin: "ㄐㄧㄠˇ",
      french: "Pied, jambe",
      english: "Foot, leg",
      example: {
        sentence: "走太多路，腳好酸。",
        pinyin: "zǒu tài duō lù, jiǎo hǎo suān.",
        translation: "J'ai trop marché, mes pieds sont tout endoloris.",
      },
    },
    {
      character: "肚子",
      pinyin: "dùzi",
      zhuyin: "ㄉㄨˋ ㄗ˙",
      french: "Ventre",
      english: "Stomach, belly",
      example: {
        sentence: "我肚子餓了。",
        pinyin: "wǒ dùzi è le.",
        translation: "J'ai faim. (Littéralement : mon ventre a faim.)",
      },
    },
    {
      character: "牙齒",
      pinyin: "yáchǐ",
      zhuyin: "ㄧㄚˊ ㄔˇ",
      french: "Dents",
      english: "Teeth",
      example: {
        sentence: "他的牙齒很白。",
        pinyin: "tā de yáchǐ hěn bái.",
        translation: "Ses dents sont très blanches.",
      },
    },
    {
      character: "皮膚",
      pinyin: "pífū",
      zhuyin: "ㄆㄧˊ ㄈㄨ",
      french: "Peau",
      english: "Skin",
      example: {
        sentence: "她的皮膚很好。",
        pinyin: "tā de pífū hěn hǎo.",
        translation: "Elle a une très belle peau.",
      },
    },
    {
      character: "血",
      pinyin: "xiě",
      zhuyin: "ㄒㄧㄝˇ",
      french: "Sang",
      english: "Blood",
      example: {
        sentence: "流血了！快拿OK繃。",
        pinyin: "liúxiě le! kuài ná OK bēng.",
        translation: "Ça saigne ! Vite, prends un pansement.",
      },
    },
    {
      character: "痛",
      pinyin: "tòng",
      zhuyin: "ㄊㄨㄥˋ",
      french: "Avoir mal, douloureux",
      english: "Pain, to hurt",
      example: {
        sentence: "你哪裡痛？",
        pinyin: "nǐ nǎlǐ tòng?",
        translation: "Où as-tu mal ?",
      },
    },
    {
      character: "癢",
      pinyin: "yǎng",
      zhuyin: "ㄧㄤˇ",
      french: "Démanger",
      english: "Itchy, to itch",
      example: {
        sentence: "被蚊子咬，好癢！",
        pinyin: "bèi wénzi yǎo, hǎo yǎng!",
        translation: "Piqué par un moustique, ça démange tellement !",
      },
    },
    {
      character: "咳嗽",
      pinyin: "késòu",
      zhuyin: "ㄎㄜˊ ㄙㄡˋ",
      french: "Tousser",
      english: "To cough",
      example: {
        sentence: "他咳嗽咳了一整天。",
        pinyin: "tā késòu ké le yì zhěng tiān.",
        translation: "Il a toussé toute la journée.",
      },
    },
    {
      character: "吃藥",
      pinyin: "chī yào",
      zhuyin: "ㄔ ㄧㄠˋ",
      french: "Prendre un médicament",
      english: "To take medicine",
      example: {
        sentence: "記得飯後吃藥。",
        pinyin: "jìde fàn hòu chī yào.",
        translation: "N'oublie pas de prendre les médicaments après le repas.",
      },
    },
    {
      character: "打針",
      pinyin: "dǎ zhēn",
      zhuyin: "ㄉㄚˇ ㄓㄣ",
      french: "Faire une piqûre / injection",
      english: "To get an injection",
      example: {
        sentence: "小朋友最怕打針了。",
        pinyin: "xiǎopéngyou zuì pà dǎ zhēn le.",
        translation: "Les enfants ont le plus peur des piqûres.",
      },
    },
  ],

  exercises: [
    {
      id: "u55-ex1",
      type: "comprehension",
      question: "Que signifie la question 你哪裡不舒服？",
      correctAnswer: "Où avez-vous mal ? / Qu'est-ce qui ne va pas ?",
      options: [
        "Où avez-vous mal ? / Qu'est-ce qui ne va pas ?",
        "Où habitez-vous ?",
        "Depuis quand êtes-vous malade ?",
        "Quel médicament prenez-vous ?",
      ],
    },
    {
      id: "u55-ex2",
      type: "fill-blank",
      question: "你___多休息，多喝水。(Tu devrais te reposer davantage et boire beaucoup d'eau.)",
      correctAnswer: "應該",
      options: ["應該", "可以", "想要", "必須"],
      optionsHint: ["yīnggāi", "kěyǐ", "xiǎngyào", "bìxū"],
      optionsZhuyin: ["ㄧㄥ ㄍㄞ", "ㄎㄜˇ ㄧˇ", "ㄒㄧㄤˇ ㄧㄠˋ", "ㄅㄧˋ ㄒㄩ"],
      hint: "Quel mot exprime un conseil, une recommandation (devoir/il faudrait) ?",
      hintZhuyin: "Quel mot exprime un conseil, une recommandation (devoir/il faudrait) ?",
    },
    {
      id: "u55-ex3",
      type: "translate",
      question: "Comment dit-on « J'ai mal à la tête et en plus je tousse sans arrêt » ?",
      correctAnswer: "我頭很痛，而且一直咳嗽",
      options: ["我頭很痛，而且一直咳嗽", "我咳嗽很痛頭一直", "頭痛咳嗽我而且一直", "我一直頭痛而且很咳嗽"],
      optionsHint: ["wǒ tóu hěn tòng, érqiě yìzhí késòu", "wǒ késòu hěn tòng tóu yìzhí", "tóu tòng késòu wǒ érqiě yìzhí", "wǒ yìzhí tóu tòng érqiě hěn késòu"],
      optionsZhuyin: ["ㄨㄛˇ ㄊㄡˊ ㄏㄣˇ ㄊㄨㄥˋ ㄦˊ ㄑㄧㄝˇ ㄧˋ ㄓˊ ㄎㄜˊ ㄙㄡˋ", "ㄨㄛˇ ㄎㄜˊ ㄙㄡˋ ㄏㄣˇ ㄊㄨㄥˋ ㄊㄡˊ ㄧˋ ㄓˊ", "ㄊㄡˊ ㄊㄨㄥˋ ㄎㄜˊ ㄙㄡˋ ㄨㄛˇ ㄦˊ ㄑㄧㄝˇ ㄧˋ ㄓˊ", "ㄨㄛˇ ㄧˋ ㄓˊ ㄊㄡˊ ㄊㄨㄥˋ ㄦˊ ㄑㄧㄝˇ ㄏㄣˇ ㄎㄜˊ ㄙㄡˋ"],
    },
    {
      id: "u55-ex4",
      type: "listen",
      question: "Écoutez et choisissez la bonne traduction de : 這樣多久了？",
      correctAnswer: "C'est comme ça depuis combien de temps ?",
      options: [
        "C'est comme ça depuis combien de temps ?",
        "Comment allez-vous aujourd'hui ?",
        "Depuis quand êtes-vous arrivé ?",
        "Combien de temps allez-vous rester ?",
      ],
    },
    {
      id: "u55-ex5",
      type: "comprehension",
      question: "À Taïwan, où doit-on aller en premier pour un problème de santé mineur (rhume, mal de gorge) ?",
      correctAnswer: "À la 診所 (clinique de quartier), plus rapide et moins chère",
      options: [
        "À la 診所 (clinique de quartier), plus rapide et moins chère",
        "À l'醫院 (hôpital), pour être sûr d'avoir les meilleurs soins",
        "À la 藥局 (pharmacie), car les médicaments sont gratuits",
        "Aux urgences, car c'est le seul endroit ouvert",
      ],
    },
    {
      id: "u55-ex6",
      type: "fill-blank",
      question: "她一直咳嗽，已經三天___。(Elle tousse sans arrêt, ça fait déjà trois jours.)",
      correctAnswer: "了",
      options: ["了", "的", "過", "在"],
      optionsHint: ["le", "de", "guò", "zài"],
      optionsZhuyin: ["ㄌㄜ˙", "ㄉㄜ˙", "ㄍㄨㄛˋ", "ㄗㄞˋ"],
      hint: "Quelle particule marque une durée écoulée jusqu'au présent ?",
      hintZhuyin: "Quelle particule marque une durée écoulée jusqu'au présent ?",
    },
    {
      id: "u55-ex7",
      type: "translate",
      question: "Comment dit-on « Tu devrais aller voir le médecin » ?",
      correctAnswer: "你應該去看醫生",
      options: ["你應該去看醫生", "你要看去醫生應該", "醫生應該看你去", "去看你應該醫生"],
      optionsHint: ["nǐ yīnggāi qù kàn yīshēng", "nǐ yào kàn qù yīshēng yīnggāi", "yīshēng yīnggāi kàn nǐ qù", "qù kàn nǐ yīnggāi yīshēng"],
      optionsZhuyin: ["ㄋㄧˇ ㄧㄥ ㄍㄞ ㄑㄩˋ ㄎㄢˋ ㄧ ㄕㄥ", "ㄋㄧˇ ㄧㄠˋ ㄎㄢˋ ㄑㄩˋ ㄧ ㄕㄥ ㄧㄥ ㄍㄞ", "ㄧ ㄕㄥ ㄧㄥ ㄍㄞ ㄎㄢˋ ㄋㄧˇ ㄑㄩˋ", "ㄑㄩˋ ㄎㄢˋ ㄋㄧˇ ㄧㄥ ㄍㄞ ㄧ ㄕㄥ"],
    },
    {
      id: "u55-ex8",
      type: "listen",
      question: "Écoutez et choisissez la bonne traduction de : 記得飯後吃藥。",
      correctAnswer: "N'oublie pas de prendre les médicaments après le repas",
      options: [
        "N'oublie pas de prendre les médicaments après le repas",
        "Les médicaments sont dans la cuisine",
        "Il faut manger avant de prendre les médicaments",
        "Le repas est prêt, tu peux manger",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-50"],
};
