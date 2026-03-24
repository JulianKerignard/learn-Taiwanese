import type { CourseUnit } from "@/types/course";

export const unit24: CourseUnit = {
  id: "unit-24",
  number: 24,
  title: "La météo et les saisons",
  titleZh: "天氣和季節",
  chapter: 5,
  description:
    "Apprenez les structures conditionnelles, le vocabulaire météo, et découvrez le climat subtropical unique de Taiwan.",
  icon: "🌦️",

  sections: [
    {
      title: "Structures conditionnelles",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les structures conditionnelles permettent d'exprimer des relations logiques entre deux idées : concession (bien que...), condition (si...) et cause-conséquence (parce que...). En chinois, l'ordre est souvent inversé par rapport au français.",
        },
        {
          type: "example",
          chinese: "雖然很熱，但是我很開心。",
          pinyin: "suīrán hěn rè, dànshì wǒ hěn kāixīn.",
          translation: "Bien qu'il fasse très chaud, je suis très content.",
          content:
            "雖然...但是/可是 = bien que...mais. La concession vient EN PREMIER. On peut remplacer 但是 par 可是 (plus oral).",
        },
        {
          type: "example",
          chinese: "如果下雨，我就不去了。",
          pinyin: "rúguǒ xià yǔ, wǒ jiù bú qù le.",
          translation: "S'il pleut, alors je n'irai pas.",
          content:
            "如果...就 = si...alors. 如果 introduit la condition, 就 introduit le résultat. 就 se place AVANT le verbe dans la deuxième partie.",
        },
        {
          type: "example",
          chinese: "因為颱風來了，所以學校放假。",
          pinyin: "yīnwèi táifēng lái le, suǒyǐ xuéxiào fàngjià.",
          translation: "Parce qu'un typhon arrive, l'école est en vacances.",
          content:
            "Rappel : 因為...所以 = parce que...donc. Avec un exemple météo bien taiwanais : les jours de typhon, tout ferme !",
        },
        {
          type: "comparison",
          content:
            "Ordre FR vs ZH : en français on dit « Je suis content bien qu'il fasse chaud » (résultat puis concession). En chinois c'est l'inverse : 雖然很熱，但是我很開心 (concession puis résultat). La cause/condition vient toujours en premier en chinois.",
        },
        {
          type: "tip",
          content:
            "On peut omettre 如果 si le contexte est clair : 下雨的話，我就不去了 (s'il pleut, je n'y vais pas). 的話 (de huà) = « dans le cas où », plus oral que 如果.",
        },
      ],
    },
    {
      title: "Vocabulaire de la météo",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "La météo est un sujet de conversation quotidien à Taiwan, surtout pendant la saison des typhons et l'été étouffant. Voici le vocabulaire essentiel.",
        },
        {
          type: "example",
          chinese: "今天天氣很好，出太陽了。",
          pinyin: "jīntiān tiānqì hěn hǎo, chū tàiyáng le.",
          translation: "Il fait beau aujourd'hui, le soleil est sorti.",
          content:
            "天氣 = météo/temps. 出太陽 = faire soleil (litt. « le soleil sort »).",
        },
        {
          type: "example",
          chinese: "好熱喔！有三十五度。",
          pinyin: "hǎo rè ō! yǒu sānshíwǔ dù.",
          translation: "Qu'est-ce qu'il fait chaud ! Il fait 35 degrés.",
          content:
            "熱 = chaud. 冷 = froid. 涼 = frais. 暖 = tiède/doux. 度 = degré.",
        },
        {
          type: "example",
          chinese: "外面下雨了，記得帶傘。",
          pinyin: "wàimiàn xià yǔ le, jìde dài sǎn.",
          translation: "Il pleut dehors, n'oublie pas ton parapluie.",
          content:
            "下雨 = pleuvoir. 下雪 = neiger (très rare à Taiwan, sauf en haute montagne). 帶傘 = prendre un parapluie.",
        },
        {
          type: "example",
          chinese: "颱風要來了，大家要小心。",
          pinyin: "táifēng yào lái le, dàjiā yào xiǎoxīn.",
          translation: "Un typhon arrive, tout le monde doit faire attention.",
          content:
            "颱風 = typhon. 濕 = humide. 乾 = sec. 天氣預報 = prévision météo. 溫度 = température.",
        },
        {
          type: "tip",
          content:
            "Les Taiwanais utilisent les degrés Celsius (攝氏 shèshì). 35度 = 35°C. Quand quelqu'un dit « 好熱 » en été, c'est souvent 35-40°C avec 90% d'humidité. Le ressenti est encore pire.",
        },
      ],
    },
    {
      title: "Le climat subtropical de Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Taiwan a un climat subtropical au nord et tropical au sud. L'été (juin-septembre) est étouffant : 35°C+ avec une humidité de 80-90%. L'hiver (décembre-février) est doux au sud mais frais et humide au nord (10-15°C).",
        },
        {
          type: "warning",
          content:
            "Les maisons et appartements taiwanais n'ont PAS de chauffage central. En hiver à Taipei (10-15°C), il peut faire plus froid à l'intérieur qu'à l'extérieur. Préparez des couvertures et un chauffage d'appoint. C'est le choc culturel numéro un des expatriés français.",
        },
        {
          type: "text",
          content:
            "La saison des typhons va de juillet à octobre. Quand un typhon frappe, le gouvernement peut déclarer un « jour de typhon » (颱風假 táifēng jià) : tout ferme (écoles, bureaux, transports). C'est un jour de congé improvisé.",
        },
        {
          type: "text",
          content:
            "Le parapluie (雨傘 yǔsǎn) est l'accessoire OBLIGATOIRE à Taiwan, toute l'année. Il protège de la pluie (presque quotidienne au nord) ET du soleil (les Taiwanais détestent bronzer). Vous verrez des parapluies par grand soleil — c'est normal.",
        },
        {
          type: "text",
          content:
            "La climatisation (冷氣 lěngqì) est réglée à 26°C dans tous les espaces publics : MRT, bureaux, centres commerciaux. En été, le contraste entre l'extérieur (38°C) et l'intérieur (26°C) est brutal. Gardez toujours un gilet dans votre sac.",
        },
        {
          type: "example",
          chinese: "梅雨季又來了，每天都下雨。",
          pinyin: "méiyǔ jì yòu lái le, měitiān dōu xià yǔ.",
          translation:
            "La saison des pluies est de retour, il pleut tous les jours.",
          content:
            "梅雨季 (saison des prunes/pluies, mai-juin) : des semaines de pluie continue. L'humidité atteint 95%. Les vêtements ne sèchent plus. Les moisissures apparaissent. Bienvenue à Taiwan.",
        },
        {
          type: "text",
          content:
            "Taiwan est une ile subtropicale a tropicale, et la meteo est un sujet de conversation constant. Voici un guide complet du cycle annuel :\n\nPrintemps (3-5月, sānyuè dào wǔyuè) : 20-28°C, agreable mais humide. C'est la saison la plus imprevisisble — un jour il fait 25°C sous le soleil, le lendemain il fait 15°C sous la pluie. Les cerisiers fleurissent a Alishan (阿里山). Conseil : gardez toujours une veste legere et un parapluie.\n\nEte (6-9月, liùyuè dào jiǔyuè) : 30-38°C avec une humidite de 80-95%. Chaleur ECRASANTE. Le « ressenti » (體感溫度 tǐgǎn wēndù) peut depasser 42°C. Orages violents l'apres-midi (duree 30 minutes puis soleil). La climatisation est votre meilleure amie — et votre facture d'electricite votre pire ennemie. Conseil : buvez beaucoup d'eau, evitez les activites exterieures entre 11h et 15h, portez des vetements legers et respirants. Les Taiwanais evitent le soleil direct — suivez leur exemple.\n\nSaison des pluies 梅雨季 (méiyǔ jì, mai-juin) : pluie continue pendant 2-3 semaines. TOUT est humide : les murs, les vetements, les chaussures, les livres. La moisissure attaque tout ce qui n'est pas protege. Achetez un deshumidificateur (除濕機 chúshī jī) DES votre arrivee — c'est l'appareil electrique le plus important apres la climatisation. Un bon deshumidificateur coute 5,000-8,000 NT$ et c'est un investissement indispensable.\n\nTyphons 颱風季 (táifēng jì, juillet-octobre) : Taiwan est frappee par 3-5 typhons majeurs par an. Quand un typhon est annonce : le gouvernement peut declarer un 停班停課 (tíngbān tíngkè, journee sans travail ni ecole). Surveillez le site du CWB (中央氣象署 zhōngyāng qìxiàng shǔ) ou l'app « 台灣颱風資訊 ». Stockez eau et nourriture la veille. Les rues sont desertes pendant le typhon. Le lendemain, tout reprend comme si de rien n'etait — sauf les arbres arraches et les rues inondees qu'on nettoie en un temps record.\n\nAutomne (10-11月, shíyuè dào shíyīyuè) : la MEILLEURE saison. 22-28°C, sec, ensoleille. Le meilleur moment pour visiter. Les montagnes sont spectaculaires, la lumiere est doree, les temperatures sont parfaites. Si vous devez planifier un voyage a Taiwan, choisissez octobre-novembre.\n\nHiver (12-2月, shí'èryuè dào èryuè) : 10-18°C au nord (Taipei), 15-22°C au sud (Kaohsiung). PAS DE CHAUFFAGE dans les maisons taiwanaises — les batiments ne sont pas isoles pour la chaleur, ils sont congus pour evacuee la chaleur en ete, ce qui signifie qu'ils sont glacials en hiver. Investissez dans un chauffage d'appoint (電暖器 diàn nuǎnqì) et des couvertures epaisses. L'hiver taiwanais est court (2-3 mois) mais penible pour les non-prepares.",
        },
        {
          type: "text",
          content:
            "Le choc thermique : la climatisation est PARTOUT en ete, reglee a 24-26°C. Dehors il fait 35°C. Le passage interieur/exterieur est brutal — un ecart de 10°C en quelques secondes. Gardez toujours un gilet leger ou une veste fine dans votre sac. Les Taiwanais appellent ca 冷氣病 (lěngqì bìng, la « maladie de la clim ») quand quelqu'un attrape froid a cause de ces changements brutaux de temperature. Buvez des boissons chaudes meme en ete (c'est normal a Taiwan) et ne restez pas trop longtemps sous un souffle de clim direct.",
        },
        {
          type: "example",
          chinese: "我需要買一台除濕機",
          pinyin: "wǒ xūyào mǎi yì tái chúshī jī",
          translation: "J'ai besoin d'acheter un deshumidificateur",
          content: "除濕機 est l'appareil indispensable pendant la saison des pluies. 台 est le classificateur pour les machines.",
        },
        {
          type: "example",
          chinese: "明天颱風假，不用上班",
          pinyin: "míngtiān táifēng jià, bú yòng shàngbān",
          translation: "Demain c'est jour de typhon, pas besoin d'aller travailler",
          content: "颱風假 (jour de typhon) est annonce la veille au soir par le gouvernement. 不用 = pas besoin de.",
        },
        {
          type: "text",
          content:
            "Le typhon (颱風 táifēng) est l'événement météo majeur à Taiwan. Saison : juillet à octobre, 3-5 typhons significatifs par an. Quand un typhon approche : 1) Le gouvernement annonce 停班停課 (suspension du travail et de l'école) — consultez le site officiel DGBAS la veille au soir. 2) Stockez eau et nourriture pour 2-3 jours. 3) Fermez les fenêtres et collez du ruban adhésif en X. 4) Ne sortez PAS pendant le typhon. 5) Après le typhon : les rues peuvent être inondées, des arbres tombés, pas de transport pendant quelques heures. Le lendemain, tout reprend comme si de rien n'était.",
        },
        {
          type: "tip",
          content:
            "Votre kit de survie météo à Taiwan : 1) Un parapluie SOLIDE (pas un parapluie de poche — le vent les retourne) 2) Un imperméable (les Taiwanais en scooter portent un poncho) 3) Un gilet léger (pour la clim glaciale des intérieurs) 4) De la crème solaire (l'UV est INTENSE, surtout en été) 5) Un déshumidificateur pour l'appart (essentiel mars-juin)",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Paul et son amie Měi planifient un weekend à Jiǔfèn (九份), un village de montagne près de Taipei.",
    lines: [
      {
        speaker: "Paul",
        chinese: "這個週末要不要去九份？",
        pinyin: "zhège zhōumò yào bú yào qù Jiǔfèn?",
        french: "On va à Jiufen ce weekend ?",
      },
      {
        speaker: "小美",
        chinese: "我看一下天氣預報...雖然星期六下雨，但是星期天會出太陽。",
        pinyin:
          "wǒ kàn yíxià tiānqì yùbào... suīrán xīngqīliù xià yǔ, dànshì xīngqītiān huì chū tàiyáng.",
        french:
          "Je regarde la météo... Bien qu'il pleuve samedi, il fera soleil dimanche.",
      },
      {
        speaker: "Paul",
        chinese: "那我們星期天去吧。如果下雨，就改天。",
        pinyin: "nà wǒmen xīngqītiān qù ba. rúguǒ xià yǔ, jiù gǎitiān.",
        french: "Alors allons-y dimanche. S'il pleut, on repousse.",
        note: "改天 = un autre jour / repousser.",
      },
      {
        speaker: "小美",
        chinese: "好，但是記得帶傘，九份的天氣很不穩定。",
        pinyin: "hǎo, dànshì jìde dài sǎn, Jiǔfèn de tiānqì hěn bù wěndìng.",
        french:
          "OK, mais n'oublie pas ton parapluie, la météo à Jiufen est très instable.",
      },
      {
        speaker: "Paul",
        chinese: "溫度多少？需要帶外套嗎？",
        pinyin: "wēndù duōshǎo? xūyào dài wàitào ma?",
        french: "Il fait combien ? Je dois prendre une veste ?",
      },
      {
        speaker: "小美",
        chinese: "大概二十度，山上比較涼，應該帶一件外套。",
        pinyin: "dàgài èrshí dù, shānshàng bǐjiào liáng, yīnggāi dài yí jiàn wàitào.",
        french:
          "Environ 20 degrés, c'est plus frais en montagne, tu devrais prendre une veste.",
      },
    ],
  },

  keyPoints: [
    "雖然...但是 (bien que...mais), 如果...就 (si...alors), 因為...所以 (parce que...donc) : la condition/cause vient TOUJOURS en premier en chinois.",
    "Vocabulaire météo essentiel : 天氣, 熱, 冷, 下雨, 颱風, 出太陽, 溫度, 度.",
    "Le parapluie est indispensable à Taiwan : contre la pluie ET le soleil. Toujours en avoir un dans son sac.",
    "Pas de chauffage dans les maisons taiwanaises. En été, la clim est à 26°C partout : gardez un gilet pour le choc thermique intérieur/extérieur.",
  ],

  vocabulary: [
    {
      character: "天氣",
      pinyin: "tiānqì",
      zhuyin: "ㄊㄧㄢ ㄑㄧˋ",
      french: "Météo / temps",
      english: "Weather",
      example: {
        sentence: "今天天氣怎麼樣？",
        pinyin: "jīntiān tiānqì zěnmeyàng?",
        translation: "Quel temps fait-il aujourd'hui ?",
      },
    },
    {
      character: "熱",
      pinyin: "rè",
      zhuyin: "ㄖㄜˋ",
      french: "Chaud",
      english: "Hot",
      example: {
        sentence: "台北的夏天很熱。",
        pinyin: "Táiběi de xiàtiān hěn rè.",
        translation: "L'été à Taipei est très chaud.",
      },
    },
    {
      character: "冷",
      pinyin: "lěng",
      zhuyin: "ㄌㄥˇ",
      french: "Froid",
      english: "Cold",
      example: {
        sentence: "今天好冷喔。",
        pinyin: "jīntiān hǎo lěng ō.",
        translation: "Il fait vraiment froid aujourd'hui.",
      },
    },
    {
      character: "下雨",
      pinyin: "xià yǔ",
      zhuyin: "ㄒㄧㄚˋ ㄩˇ",
      french: "Pleuvoir",
      english: "To rain",
      example: {
        sentence: "外面在下雨。",
        pinyin: "wàimiàn zài xià yǔ.",
        translation: "Il pleut dehors.",
      },
    },
    {
      character: "颱風",
      pinyin: "táifēng",
      zhuyin: "ㄊㄞˊ ㄈㄥ",
      french: "Typhon",
      english: "Typhoon",
      example: {
        sentence: "颱風來了，不要出門。",
        pinyin: "táifēng lái le, bú yào chūmén.",
        translation: "Le typhon arrive, ne sors pas.",
      },
    },
    {
      character: "太陽",
      pinyin: "tàiyáng",
      zhuyin: "ㄊㄞˋ ㄧㄤˊ",
      french: "Soleil",
      english: "Sun",
      example: {
        sentence: "太陽好大，戴帽子吧。",
        pinyin: "tàiyáng hǎo dà, dài màozi ba.",
        translation: "Le soleil tape fort, mets un chapeau.",
      },
    },
    {
      character: "溫度",
      pinyin: "wēndù",
      zhuyin: "ㄨㄣ ㄉㄨˋ",
      french: "Température",
      english: "Temperature",
      example: {
        sentence: "今天溫度有三十八度。",
        pinyin: "jīntiān wēndù yǒu sānshíbā dù.",
        translation: "La température est de 38 degrés aujourd'hui.",
      },
    },
    {
      character: "度",
      pinyin: "dù",
      zhuyin: "ㄉㄨˋ",
      french: "Degré",
      english: "Degree",
      example: {
        sentence: "冬天大概十度左右。",
        pinyin: "dōngtiān dàgài shí dù zuǒyòu.",
        translation: "En hiver, c'est environ 10 degrés.",
      },
    },
    {
      character: "濕",
      pinyin: "shī",
      zhuyin: "ㄕ",
      french: "Humide",
      english: "Humid / wet",
      example: {
        sentence: "台灣的夏天又熱又濕。",
        pinyin: "Táiwān de xiàtiān yòu rè yòu shī.",
        translation: "L'été à Taiwan est chaud et humide.",
      },
    },
    {
      character: "涼",
      pinyin: "liáng",
      zhuyin: "ㄌㄧㄤˊ",
      french: "Frais",
      english: "Cool (temperature)",
      example: {
        sentence: "山上比較涼快。",
        pinyin: "shānshàng bǐjiào liángkuai.",
        translation: "C'est plus frais en montagne.",
      },
    },
    {
      character: "雖然",
      pinyin: "suīrán",
      zhuyin: "ㄙㄨㄟ ㄖㄢˊ",
      french: "Bien que / même si",
      english: "Although / even though",
      example: {
        sentence: "雖然很累，但是很開心。",
        pinyin: "suīrán hěn lèi, dànshì hěn kāixīn.",
        translation: "Bien que fatigué, je suis content.",
      },
    },
    {
      character: "如果",
      pinyin: "rúguǒ",
      zhuyin: "ㄖㄨˊ ㄍㄨㄛˇ",
      french: "Si (conditionnel)",
      english: "If",
      example: {
        sentence: "如果你有空，我們去吧。",
        pinyin: "rúguǒ nǐ yǒu kòng, wǒmen qù ba.",
        translation: "Si tu es libre, allons-y.",
      },
    },
    {
      character: "就",
      pinyin: "jiù",
      zhuyin: "ㄐㄧㄡˋ",
      french: "Alors / justement",
      english: "Then / just",
      example: {
        sentence: "你來了，我們就走吧。",
        pinyin: "nǐ lái le, wǒmen jiù zǒu ba.",
        translation: "Tu es là, alors allons-y.",
      },
    },
    {
      character: "傘",
      pinyin: "sǎn",
      zhuyin: "ㄙㄢˇ",
      french: "Parapluie",
      english: "Umbrella",
      example: {
        sentence: "你有帶傘嗎？",
        pinyin: "nǐ yǒu dài sǎn ma?",
        translation: "Tu as pris ton parapluie ?",
      },
    },
    {
      character: "帶",
      pinyin: "dài",
      zhuyin: "ㄉㄞˋ",
      french: "Apporter / porter",
      english: "To bring / to carry",
      example: {
        sentence: "記得帶外套。",
        pinyin: "jìde dài wàitào.",
        translation: "N'oublie pas de prendre une veste.",
      },
    },
  ],

  exercises: [
    {
      id: "u18-ex1",
      type: "fill-blank",
      question: "___很熱，___我很開心。(Bien qu'il fasse chaud, je suis content.)",
      correctAnswer: "雖然...但是",
      options: ["雖然...但是", "因為...所以", "如果...就", "不但...而且"],
      optionsHint: ["suīrán...dànshì", "yīnwèi...suǒyǐ", "rúguǒ...jiù", "búdàn...érqiě"],
      optionsZhuyin: ["ㄙㄨㄟ ㄖㄢˊ...ㄉㄢˋ ㄕˋ", "ㄧㄣ ㄨㄟˋ...ㄙㄨㄛˇ ㄧˇ", "ㄖㄨˊ ㄍㄨㄛˇ...ㄐㄧㄡˋ", "ㄅㄨˋ ㄉㄢˋ...ㄦˊ ㄑㄧㄝˇ"],
      hint: "Quelle structure exprime la concession ?",
      hintZhuyin: "Quelle structure exprime la concession ?",
    },
    {
      id: "u18-ex2",
      type: "translate",
      question: "Que signifie 如果下雨，我就不去了 ?",
      correctAnswer: "S'il pleut, alors je n'irai pas",
      options: [
        "S'il pleut, alors je n'irai pas",
        "Parce qu'il pleut, je ne sors pas",
        "Bien qu'il pleuve, j'y vais",
        "Il pleut donc je reste",
      ],
    },
    {
      id: "u18-ex3",
      type: "comprehension",
      question: "Qu'est-ce qu'un 颱風假 ?",
      correctAnswer: "Un jour de congé déclaré à cause d'un typhon",
      options: [
        "Un jour de congé déclaré à cause d'un typhon",
        "Des vacances d'été",
        "Un jour férié traditionnel",
        "Un congé maladie",
      ],
    },
    {
      id: "u18-ex4",
      type: "fill-blank",
      question: "外面___了，帶傘吧。(Il pleut dehors, prends un parapluie.)",
      correctAnswer: "下雨",
      options: ["下雨", "下雪", "出太陽", "颱風"],
      optionsHint: ["xià yǔ", "xià xuě", "chū tàiyáng", "táifēng"],
      optionsZhuyin: ["ㄒㄧㄚˋ ㄩˇ", "ㄒㄧㄚˋ ㄒㄩㄝˇ", "ㄔㄨ ㄊㄞˋ ㄧㄤˊ", "ㄊㄞˊ ㄈㄥ"],
      hint: "Quel verbe signifie « pleuvoir » ?",
      hintZhuyin: "Quel verbe signifie « pleuvoir » ?",
    },
    {
      id: "u18-ex5",
      type: "comprehension",
      question:
        "Pourquoi les Taiwanais utilisent-ils un parapluie par grand soleil ?",
      correctAnswer: "Pour se protéger du soleil (ils ne veulent pas bronzer)",
      options: [
        "Pour se protéger du soleil (ils ne veulent pas bronzer)",
        "Parce qu'il va pleuvoir bientôt",
        "C'est une tradition religieuse",
        "Pour se protéger du vent",
      ],
    },
    {
      id: "u18-ex6",
      type: "translate",
      question: "Comment dit-on « Quel temps fait-il aujourd'hui ? » ?",
      correctAnswer: "今天天氣怎麼樣？",
      options: [
        "今天天氣怎麼樣？",
        "今天幾度？",
        "今天會下雨嗎？",
        "今天出太陽嗎？",
      ],
      optionsHint: ["jīntiān tiānqì zěnmeyàng?", "jīntiān jǐ dù?", "jīntiān huì xià yǔ ma?", "jīntiān chū tàiyáng ma?"],
      optionsZhuyin: ["ㄐㄧㄣ ㄊㄧㄢ ㄊㄧㄢ ㄑㄧˋ ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ？", "ㄐㄧㄣ ㄊㄧㄢ ㄐㄧˇ ㄉㄨˋ？", "ㄐㄧㄣ ㄊㄧㄢ ㄏㄨㄟˋ ㄒㄧㄚˋ ㄩˇ ㄇㄚ˙？", "ㄐㄧㄣ ㄊㄧㄢ ㄔㄨ ㄊㄞˋ ㄧㄤˊ ㄇㄚ˙？"],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-23"],
};
