export interface GradedText {
  id: string;
  title: string;
  titleFr: string;
  level: 1 | 2 | 3;
  text: string;
  sentences: {
    chinese: string;
    pinyin: string;
    french: string;
  }[];
  vocabulary: {
    character: string;
    pinyin: string;
    french: string;
    isNew: boolean;
  }[];
  culturalNote?: string;
}

export const gradedTexts: GradedText[] = [
  // ──────────────── Niveau 1 ────────────────
  {
    id: "my-name",
    title: "我的名字",
    titleFr: "Mon nom",
    level: 1,
    text: "你好！我叫小明。我是法國人。我住在台北。我喜歡台灣。台灣很好！我很高興。",
    sentences: [
      { chinese: "你好！", pinyin: "Nǐ hǎo!", french: "Bonjour !" },
      { chinese: "我叫小明。", pinyin: "Wǒ jiào Xiǎo Míng.", french: "Je m'appelle Xiao Ming." },
      { chinese: "我是法國人。", pinyin: "Wǒ shì Fàguó rén.", french: "Je suis français." },
      { chinese: "我住在台北。", pinyin: "Wǒ zhù zài Táiběi.", french: "J'habite à Taipei." },
      { chinese: "我喜歡台灣。", pinyin: "Wǒ xǐhuān Táiwān.", french: "J'aime Taiwan." },
      { chinese: "台灣很好！", pinyin: "Táiwān hěn hǎo!", french: "Taiwan c'est très bien !" },
      { chinese: "我很高興。", pinyin: "Wǒ hěn gāoxìng.", french: "Je suis très content." },
    ],
    vocabulary: [
      { character: "你好", pinyin: "nǐ hǎo", french: "bonjour", isNew: false },
      { character: "我", pinyin: "wǒ", french: "je, moi", isNew: false },
      { character: "叫", pinyin: "jiào", french: "s'appeler", isNew: true },
      { character: "是", pinyin: "shì", french: "être", isNew: false },
      { character: "法國", pinyin: "Fàguó", french: "France", isNew: true },
      { character: "人", pinyin: "rén", french: "personne", isNew: false },
      { character: "住", pinyin: "zhù", french: "habiter", isNew: true },
      { character: "在", pinyin: "zài", french: "à, dans", isNew: false },
      { character: "台北", pinyin: "Táiběi", french: "Taipei", isNew: true },
      { character: "喜歡", pinyin: "xǐhuān", french: "aimer", isNew: true },
      { character: "台灣", pinyin: "Táiwān", french: "Taiwan", isNew: false },
      { character: "很", pinyin: "hěn", french: "très", isNew: false },
      { character: "好", pinyin: "hǎo", french: "bien, bon", isNew: false },
      { character: "高興", pinyin: "gāoxìng", french: "content", isNew: true },
    ],
    culturalNote:
      "À Taiwan, on utilise souvent 你好 (nǐ hǎo) dans un contexte formel. Entre amis, un simple 嗨 (hāi) ou 哈囉 (hā luō) est plus courant.",
  },
  {
    id: "in-taipei",
    title: "在台北",
    titleFr: "À Taipei",
    level: 1,
    text: "這是台北。台北很大。人很多。有很多車。也有捷運。台北很漂亮。我喜歡這裡。",
    sentences: [
      { chinese: "這是台北。", pinyin: "Zhè shì Táiběi.", french: "C'est Taipei." },
      { chinese: "台北很大。", pinyin: "Táiběi hěn dà.", french: "Taipei est très grand." },
      { chinese: "人很多。", pinyin: "Rén hěn duō.", french: "Il y a beaucoup de monde." },
      { chinese: "有很多車。", pinyin: "Yǒu hěn duō chē.", french: "Il y a beaucoup de voitures." },
      { chinese: "也有捷運。", pinyin: "Yě yǒu jiéyùn.", french: "Il y a aussi le MRT." },
      { chinese: "台北很漂亮。", pinyin: "Táiběi hěn piàoliang.", french: "Taipei est très beau." },
      { chinese: "我喜歡這裡。", pinyin: "Wǒ xǐhuān zhèlǐ.", french: "J'aime cet endroit." },
    ],
    vocabulary: [
      { character: "這", pinyin: "zhè", french: "ceci, ce", isNew: true },
      { character: "大", pinyin: "dà", french: "grand", isNew: false },
      { character: "多", pinyin: "duō", french: "beaucoup", isNew: true },
      { character: "有", pinyin: "yǒu", french: "avoir, il y a", isNew: false },
      { character: "車", pinyin: "chē", french: "voiture, véhicule", isNew: true },
      { character: "也", pinyin: "yě", french: "aussi", isNew: true },
      { character: "捷運", pinyin: "jiéyùn", french: "MRT (métro)", isNew: true },
      { character: "漂亮", pinyin: "piàoliang", french: "beau, joli", isNew: true },
      { character: "這裡", pinyin: "zhèlǐ", french: "ici", isNew: true },
    ],
    culturalNote:
      "Le 捷運 (jiéyùn) est le nom taïwanais du métro, aussi appelé MRT. C'est l'un des systèmes de transport les plus propres et efficaces au monde.",
  },

  // ──────────────── Niveau 2 ────────────────
  {
    id: "night-market",
    title: "夜市",
    titleFr: "Le marché de nuit",
    level: 2,
    text: "昨天晚上我去了士林夜市。那裡有很多好吃的東西。我吃了臭豆腐和珍珠奶茶。臭豆腐很好吃！珍珠奶茶也很甜。夜市的人很多，很熱鬧。我和朋友一起去的，我們都很開心。",
    sentences: [
      {
        chinese: "昨天晚上我去了士林夜市。",
        pinyin: "Zuótiān wǎnshàng wǒ qù le Shìlín yèshì.",
        french: "Hier soir je suis allé au marché de nuit de Shilin.",
      },
      {
        chinese: "那裡有很多好吃的東西。",
        pinyin: "Nàlǐ yǒu hěn duō hǎochī de dōngxī.",
        french: "Il y avait beaucoup de bonnes choses à manger.",
      },
      {
        chinese: "我吃了臭豆腐和珍珠奶茶。",
        pinyin: "Wǒ chī le chòu dòufǔ hé zhēnzhū nǎichá.",
        french: "J'ai mangé du tofu puant et du bubble tea.",
      },
      {
        chinese: "臭豆腐很好吃！",
        pinyin: "Chòu dòufǔ hěn hǎochī!",
        french: "Le tofu puant est délicieux !",
      },
      {
        chinese: "珍珠奶茶也很甜。",
        pinyin: "Zhēnzhū nǎichá yě hěn tián.",
        french: "Le bubble tea est aussi très sucré.",
      },
      {
        chinese: "夜市的人很多，很熱鬧。",
        pinyin: "Yèshì de rén hěn duō, hěn rènào.",
        french: "Il y avait beaucoup de monde au marché de nuit, très animé.",
      },
      {
        chinese: "我和朋友一起去的，我們都很開心。",
        pinyin: "Wǒ hé péngyǒu yìqǐ qù de, wǒmen dōu hěn kāixīn.",
        french: "J'y suis allé avec un ami, nous étions tous très contents.",
      },
    ],
    vocabulary: [
      { character: "昨天", pinyin: "zuótiān", french: "hier", isNew: false },
      { character: "晚上", pinyin: "wǎnshàng", french: "le soir", isNew: false },
      { character: "去", pinyin: "qù", french: "aller", isNew: false },
      { character: "夜市", pinyin: "yèshì", french: "marché de nuit", isNew: true },
      { character: "好吃", pinyin: "hǎochī", french: "délicieux", isNew: true },
      { character: "東西", pinyin: "dōngxī", french: "chose", isNew: false },
      { character: "臭豆腐", pinyin: "chòu dòufǔ", french: "tofu puant", isNew: true },
      { character: "珍珠奶茶", pinyin: "zhēnzhū nǎichá", french: "bubble tea", isNew: true },
      { character: "甜", pinyin: "tián", french: "sucré", isNew: true },
      { character: "熱鬧", pinyin: "rènào", french: "animé, bruyant", isNew: true },
      { character: "朋友", pinyin: "péngyǒu", french: "ami", isNew: false },
      { character: "一起", pinyin: "yìqǐ", french: "ensemble", isNew: true },
      { character: "開心", pinyin: "kāixīn", french: "content, joyeux", isNew: true },
    ],
    culturalNote:
      "Les 夜市 (yèshì) sont une institution à Taiwan. Shilin (士林) est le plus grand marché de nuit de Taipei. On y trouve de la nourriture de rue, des jeux et des vêtements. Le 臭豆腐 (tofu puant) est un classique incontournable !",
  },
  {
    id: "take-mrt",
    title: "搭捷運",
    titleFr: "Prendre le MRT",
    level: 2,
    text: "今天早上我搭捷運去上班。我先用悠遊卡進站。捷運很快也很方便。從我家到公司要三十分鐘。車上的人很多，沒有座位。我站了三站就到了。",
    sentences: [
      {
        chinese: "今天早上我搭捷運去上班。",
        pinyin: "Jīntiān zǎoshàng wǒ dā jiéyùn qù shàngbān.",
        french: "Ce matin j'ai pris le MRT pour aller au travail.",
      },
      {
        chinese: "我先用悠遊卡進站。",
        pinyin: "Wǒ xiān yòng yōuyóukǎ jìn zhàn.",
        french: "J'ai d'abord utilisé la carte EasyCard pour entrer dans la station.",
      },
      {
        chinese: "捷運很快也很方便。",
        pinyin: "Jiéyùn hěn kuài yě hěn fāngbiàn.",
        french: "Le MRT est rapide et pratique.",
      },
      {
        chinese: "從我家到公司要三十分鐘。",
        pinyin: "Cóng wǒ jiā dào gōngsī yào sānshí fēnzhōng.",
        french: "De chez moi au bureau, il faut trente minutes.",
      },
      {
        chinese: "車上的人很多，沒有座位。",
        pinyin: "Chē shàng de rén hěn duō, méiyǒu zuòwèi.",
        french: "Il y avait beaucoup de monde dans le train, pas de place assise.",
      },
      {
        chinese: "我站了三站就到了。",
        pinyin: "Wǒ zhàn le sān zhàn jiù dào le.",
        french: "J'ai tenu debout pendant trois stations et je suis arrivé.",
      },
    ],
    vocabulary: [
      { character: "今天", pinyin: "jīntiān", french: "aujourd'hui", isNew: false },
      { character: "早上", pinyin: "zǎoshàng", french: "le matin", isNew: false },
      { character: "搭", pinyin: "dā", french: "prendre (transport)", isNew: true },
      { character: "上班", pinyin: "shàngbān", french: "aller au travail", isNew: true },
      { character: "先", pinyin: "xiān", french: "d'abord", isNew: true },
      { character: "用", pinyin: "yòng", french: "utiliser", isNew: false },
      { character: "悠遊卡", pinyin: "yōuyóukǎ", french: "carte EasyCard", isNew: true },
      { character: "進站", pinyin: "jìn zhàn", french: "entrer dans la station", isNew: true },
      { character: "快", pinyin: "kuài", french: "rapide", isNew: false },
      { character: "方便", pinyin: "fāngbiàn", french: "pratique", isNew: true },
      { character: "從", pinyin: "cóng", french: "de, depuis", isNew: true },
      { character: "公司", pinyin: "gōngsī", french: "entreprise, bureau", isNew: true },
      { character: "分鐘", pinyin: "fēnzhōng", french: "minute", isNew: true },
      { character: "座位", pinyin: "zuòwèi", french: "place assise", isNew: true },
    ],
    culturalNote:
      "La 悠遊卡 (yōuyóukǎ, EasyCard) est la carte de transport rechargeable de Taiwan. Elle sert aussi pour payer dans les convenience stores (便利商店), les restaurants et même les taxis.",
  },

  // ──────────────── Niveau 3 ────────────────
  {
    id: "taiwan-weather",
    title: "台灣的天氣",
    titleFr: "La météo à Taiwan",
    level: 3,
    text: "台灣是一個小島，但天氣變化很大。北部常常下雨，特別是冬天的時候。南部比較熱，太陽也比較多。夏天的時候非常熱，有時候會有颱風。颱風來的時候，風很大，雨也很大，大家都不出門。春天和秋天是最舒服的季節，不冷也不熱，很適合出去玩。",
    sentences: [
      {
        chinese: "台灣是一個小島，但天氣變化很大。",
        pinyin: "Táiwān shì yí gè xiǎo dǎo, dàn tiānqì biànhuà hěn dà.",
        french: "Taiwan est une petite île, mais la météo change beaucoup.",
      },
      {
        chinese: "北部常常下雨，特別是冬天的時候。",
        pinyin: "Běibù chángcháng xià yǔ, tèbié shì dōngtiān de shíhòu.",
        french: "Il pleut souvent dans le nord, surtout en hiver.",
      },
      {
        chinese: "南部比較熱，太陽也比較多。",
        pinyin: "Nánbù bǐjiào rè, tàiyáng yě bǐjiào duō.",
        french: "Le sud est plus chaud, il y a aussi plus de soleil.",
      },
      {
        chinese: "夏天的時候非常熱，有時候會有颱風。",
        pinyin: "Xiàtiān de shíhòu fēicháng rè, yǒu shíhòu huì yǒu táifēng.",
        french: "En été il fait très chaud, et il y a parfois des typhons.",
      },
      {
        chinese: "颱風來的時候，風很大，雨也很大，大家都不出門。",
        pinyin: "Táifēng lái de shíhòu, fēng hěn dà, yǔ yě hěn dà, dàjiā dōu bù chūmén.",
        french: "Quand le typhon arrive, le vent est fort, la pluie aussi, et personne ne sort.",
      },
      {
        chinese: "春天和秋天是最舒服的季節，不冷也不熱，很適合出去玩。",
        pinyin: "Chūntiān hé qiūtiān shì zuì shūfú de jìjié, bù lěng yě bù rè, hěn shìhé chūqù wán.",
        french: "Le printemps et l'automne sont les saisons les plus agréables, ni froid ni chaud, idéales pour sortir.",
      },
    ],
    vocabulary: [
      { character: "島", pinyin: "dǎo", french: "île", isNew: true },
      { character: "天氣", pinyin: "tiānqì", french: "météo, temps", isNew: true },
      { character: "變化", pinyin: "biànhuà", french: "changement", isNew: true },
      { character: "北部", pinyin: "běibù", french: "le nord", isNew: true },
      { character: "常常", pinyin: "chángcháng", french: "souvent", isNew: false },
      { character: "下雨", pinyin: "xià yǔ", french: "pleuvoir", isNew: true },
      { character: "特別", pinyin: "tèbié", french: "particulièrement", isNew: true },
      { character: "冬天", pinyin: "dōngtiān", french: "hiver", isNew: false },
      { character: "南部", pinyin: "nánbù", french: "le sud", isNew: true },
      { character: "比較", pinyin: "bǐjiào", french: "relativement, plutôt", isNew: true },
      { character: "太陽", pinyin: "tàiyáng", french: "soleil", isNew: true },
      { character: "夏天", pinyin: "xiàtiān", french: "été", isNew: false },
      { character: "非常", pinyin: "fēicháng", french: "extrêmement", isNew: false },
      { character: "颱風", pinyin: "táifēng", french: "typhon", isNew: true },
      { character: "風", pinyin: "fēng", french: "vent", isNew: true },
      { character: "出門", pinyin: "chūmén", french: "sortir de chez soi", isNew: true },
      { character: "春天", pinyin: "chūntiān", french: "printemps", isNew: false },
      { character: "秋天", pinyin: "qiūtiān", french: "automne", isNew: false },
      { character: "舒服", pinyin: "shūfú", french: "confortable, agréable", isNew: true },
      { character: "季節", pinyin: "jìjié", french: "saison", isNew: true },
      { character: "適合", pinyin: "shìhé", french: "convenir, être adapté", isNew: true },
    ],
    culturalNote:
      "Taiwan subit en moyenne 3 à 4 typhons par an, principalement entre juillet et octobre. Les jours de typhon (颱風假, táifēng jià), les écoles et bureaux ferment, et tout le monde reste à la maison. C'est devenu une sorte de tradition : on fait des provisions et on regarde les informations !",
  },
  {
    id: "taiwanese-friend",
    title: "我的台灣朋友",
    titleFr: "Mon ami taiwanais",
    level: 3,
    text: "我有一個台灣朋友，他叫阿凱。我們是在語言交換的時候認識的。他教我中文，我教他法文。每個星期我們會一起吃飯。他常常帶我去吃台灣小吃。上個月他帶我去九份玩，那裡很漂亮。他說台灣人很熱情，喜歡交朋友。我覺得他說得對，台灣人真的很友善。",
    sentences: [
      {
        chinese: "我有一個台灣朋友，他叫阿凱。",
        pinyin: "Wǒ yǒu yí gè Táiwān péngyǒu, tā jiào Ā Kǎi.",
        french: "J'ai un ami taiwanais, il s'appelle A-Kai.",
      },
      {
        chinese: "我們是在語言交換的時候認識的。",
        pinyin: "Wǒmen shì zài yǔyán jiāohuàn de shíhòu rènshí de.",
        french: "Nous nous sommes rencontrés lors d'un échange linguistique.",
      },
      {
        chinese: "他教我中文，我教他法文。",
        pinyin: "Tā jiāo wǒ Zhōngwén, wǒ jiāo tā Fǎwén.",
        french: "Il m'enseigne le chinois, je lui enseigne le français.",
      },
      {
        chinese: "每個星期我們會一起吃飯。",
        pinyin: "Měi gè xīngqī wǒmen huì yìqǐ chīfàn.",
        french: "Chaque semaine nous mangeons ensemble.",
      },
      {
        chinese: "他常常帶我去吃台灣小吃。",
        pinyin: "Tā chángcháng dài wǒ qù chī Táiwān xiǎochī.",
        french: "Il m'emmène souvent manger des snacks taiwanais.",
      },
      {
        chinese: "上個月他帶我去九份玩，那裡很漂亮。",
        pinyin: "Shàng gè yuè tā dài wǒ qù Jiǔfèn wán, nàlǐ hěn piàoliang.",
        french: "Le mois dernier il m'a emmené visiter Jiufen, c'est très joli là-bas.",
      },
      {
        chinese: "他說台灣人很熱情，喜歡交朋友。",
        pinyin: "Tā shuō Táiwān rén hěn rèqíng, xǐhuān jiāo péngyǒu.",
        french: "Il dit que les Taiwanais sont chaleureux et aiment se faire des amis.",
      },
      {
        chinese: "我覺得他說得對，台灣人真的很友善。",
        pinyin: "Wǒ juédé tā shuō de duì, Táiwān rén zhēn de hěn yǒushàn.",
        french: "Je pense qu'il a raison, les Taiwanais sont vraiment amicaux.",
      },
    ],
    vocabulary: [
      { character: "語言", pinyin: "yǔyán", french: "langue, langage", isNew: true },
      { character: "交換", pinyin: "jiāohuàn", french: "échanger", isNew: true },
      { character: "認識", pinyin: "rènshí", french: "connaître, rencontrer", isNew: true },
      { character: "教", pinyin: "jiāo", french: "enseigner", isNew: true },
      { character: "中文", pinyin: "Zhōngwén", french: "chinois (langue)", isNew: false },
      { character: "法文", pinyin: "Fǎwén", french: "français (langue)", isNew: true },
      { character: "星期", pinyin: "xīngqī", french: "semaine", isNew: false },
      { character: "吃飯", pinyin: "chīfàn", french: "manger (un repas)", isNew: false },
      { character: "帶", pinyin: "dài", french: "emmener, amener", isNew: true },
      { character: "小吃", pinyin: "xiǎochī", french: "snack, en-cas", isNew: true },
      { character: "上個月", pinyin: "shàng gè yuè", french: "le mois dernier", isNew: true },
      { character: "九份", pinyin: "Jiǔfèn", french: "Jiufen (village)", isNew: true },
      { character: "玩", pinyin: "wán", french: "s'amuser, visiter", isNew: false },
      { character: "熱情", pinyin: "rèqíng", french: "chaleureux", isNew: true },
      { character: "交朋友", pinyin: "jiāo péngyǒu", french: "se faire des amis", isNew: true },
      { character: "覺得", pinyin: "juédé", french: "penser, trouver que", isNew: true },
      { character: "真的", pinyin: "zhēn de", french: "vraiment", isNew: true },
      { character: "友善", pinyin: "yǒushàn", french: "amical, bienveillant", isNew: true },
    ],
    culturalNote:
      "Les 語言交換 (yǔyán jiāohuàn, échanges linguistiques) sont très populaires à Taiwan. Des apps comme HelloTalk ou des groupes Meetup permettent de trouver des partenaires. 九份 (Jiǔfèn) est un village de montagne célèbre qui aurait inspiré le film « Le Voyage de Chihiro » de Miyazaki.",
  },
];
