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
    zhuyin: string;
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
      { character: "你好", pinyin: "nǐ hǎo", zhuyin: "ㄋㄧˇ ㄏㄠˇ", french: "bonjour", isNew: false },
      { character: "我", pinyin: "wǒ", zhuyin: "ㄨㄛˇ", french: "je, moi", isNew: false },
      { character: "叫", pinyin: "jiào", zhuyin: "ㄐㄧㄠˋ", french: "s'appeler", isNew: true },
      { character: "是", pinyin: "shì", zhuyin: "ㄕˋ", french: "être", isNew: false },
      { character: "法國", pinyin: "Fàguó", zhuyin: "ㄈㄚˇ ㄍㄨㄛˊ", french: "France", isNew: true },
      { character: "人", pinyin: "rén", zhuyin: "ㄖㄣˊ", french: "personne", isNew: false },
      { character: "住", pinyin: "zhù", zhuyin: "ㄓㄨˋ", french: "habiter", isNew: true },
      { character: "在", pinyin: "zài", zhuyin: "ㄗㄞˋ", french: "à, dans", isNew: false },
      { character: "台北", pinyin: "Táiběi", zhuyin: "ㄊㄞˊ ㄅㄟˇ", french: "Taipei", isNew: true },
      { character: "喜歡", pinyin: "xǐhuān", zhuyin: "ㄒㄧˇ ㄏㄨㄢ", french: "aimer", isNew: true },
      { character: "台灣", pinyin: "Táiwān", zhuyin: "ㄊㄞˊ ㄨㄢ", french: "Taiwan", isNew: false },
      { character: "很", pinyin: "hěn", zhuyin: "ㄏㄣˇ", french: "très", isNew: false },
      { character: "好", pinyin: "hǎo", zhuyin: "ㄏㄠˇ", french: "bien, bon", isNew: false },
      { character: "高興", pinyin: "gāoxìng", zhuyin: "ㄍㄠ ㄒㄧㄥˋ", french: "content", isNew: true },
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
      { character: "這", pinyin: "zhè", zhuyin: "ㄓㄜˋ", french: "ceci, ce", isNew: true },
      { character: "大", pinyin: "dà", zhuyin: "ㄉㄚˋ", french: "grand", isNew: false },
      { character: "多", pinyin: "duō", zhuyin: "ㄉㄨㄛ", french: "beaucoup", isNew: true },
      { character: "有", pinyin: "yǒu", zhuyin: "ㄧㄡˇ", french: "avoir, il y a", isNew: false },
      { character: "車", pinyin: "chē", zhuyin: "ㄔㄜ", french: "voiture, véhicule", isNew: true },
      { character: "也", pinyin: "yě", zhuyin: "ㄧㄝˇ", french: "aussi", isNew: true },
      { character: "捷運", pinyin: "jiéyùn", zhuyin: "ㄐㄧㄝˊ ㄩㄣˋ", french: "MRT (métro)", isNew: true },
      { character: "漂亮", pinyin: "piàoliang", zhuyin: "ㄆㄧㄠˋ ㄌㄧㄤˋ", french: "beau, joli", isNew: true },
      { character: "這裡", pinyin: "zhèlǐ", zhuyin: "ㄓㄜˋ ㄌㄧˇ", french: "ici", isNew: true },
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
      { character: "昨天", pinyin: "zuótiān", zhuyin: "ㄗㄨㄛˊ ㄊㄧㄢ", french: "hier", isNew: false },
      { character: "晚上", pinyin: "wǎnshàng", zhuyin: "ㄨㄢˇ ㄕㄤˋ", french: "le soir", isNew: false },
      { character: "去", pinyin: "qù", zhuyin: "ㄑㄩˋ", french: "aller", isNew: false },
      { character: "夜市", pinyin: "yèshì", zhuyin: "ㄧㄝˋ ㄕˋ", french: "marché de nuit", isNew: true },
      { character: "好吃", pinyin: "hǎochī", zhuyin: "ㄏㄠˇ ㄔ", french: "délicieux", isNew: true },
      { character: "東西", pinyin: "dōngxī", zhuyin: "ㄉㄨㄥ ㄒㄧ", french: "chose", isNew: false },
      { character: "臭豆腐", pinyin: "chòu dòufǔ", zhuyin: "ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ", french: "tofu puant", isNew: true },
      { character: "珍珠奶茶", pinyin: "zhēnzhū nǎichá", zhuyin: "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ", french: "bubble tea", isNew: true },
      { character: "甜", pinyin: "tián", zhuyin: "ㄊㄧㄢˊ", french: "sucré", isNew: true },
      { character: "熱鬧", pinyin: "rènào", zhuyin: "ㄖㄜˋ ㄋㄠˋ", french: "animé, bruyant", isNew: true },
      { character: "朋友", pinyin: "péngyǒu", zhuyin: "ㄆㄥˊ ㄧㄡˇ", french: "ami", isNew: false },
      { character: "一起", pinyin: "yìqǐ", zhuyin: "ㄧˋ ㄑㄧˇ", french: "ensemble", isNew: true },
      { character: "開心", pinyin: "kāixīn", zhuyin: "ㄎㄞ ㄒㄧㄣ", french: "content, joyeux", isNew: true },
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
      { character: "今天", pinyin: "jīntiān", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ", french: "aujourd'hui", isNew: false },
      { character: "早上", pinyin: "zǎoshàng", zhuyin: "ㄗㄠˇ ㄕㄤˋ", french: "le matin", isNew: false },
      { character: "搭", pinyin: "dā", zhuyin: "ㄉㄚ", french: "prendre (transport)", isNew: true },
      { character: "上班", pinyin: "shàngbān", zhuyin: "ㄕㄤˋ ㄅㄢ", french: "aller au travail", isNew: true },
      { character: "先", pinyin: "xiān", zhuyin: "ㄒㄧㄢ", french: "d'abord", isNew: true },
      { character: "用", pinyin: "yòng", zhuyin: "ㄩㄥˋ", french: "utiliser", isNew: false },
      { character: "悠遊卡", pinyin: "yōuyóukǎ", zhuyin: "ㄧㄡ ㄧㄡˊ ㄎㄚˇ", french: "carte EasyCard", isNew: true },
      { character: "進站", pinyin: "jìn zhàn", zhuyin: "ㄐㄧㄣˋ ㄓㄢˋ", french: "entrer dans la station", isNew: true },
      { character: "快", pinyin: "kuài", zhuyin: "ㄎㄨㄞˋ", french: "rapide", isNew: false },
      { character: "方便", pinyin: "fāngbiàn", zhuyin: "ㄈㄤ ㄅㄧㄢˋ", french: "pratique", isNew: true },
      { character: "從", pinyin: "cóng", zhuyin: "ㄘㄨㄥˊ", french: "de, depuis", isNew: true },
      { character: "公司", pinyin: "gōngsī", zhuyin: "ㄍㄨㄥ ㄙ", french: "entreprise, bureau", isNew: true },
      { character: "分鐘", pinyin: "fēnzhōng", zhuyin: "ㄈㄣ ㄓㄨㄥ", french: "minute", isNew: true },
      { character: "座位", pinyin: "zuòwèi", zhuyin: "ㄗㄨㄛˋ ㄨㄟˋ", french: "place assise", isNew: true },
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
      { character: "島", pinyin: "dǎo", zhuyin: "ㄉㄠˇ", french: "île", isNew: true },
      { character: "天氣", pinyin: "tiānqì", zhuyin: "ㄊㄧㄢ ㄑㄧˋ", french: "météo, temps", isNew: true },
      { character: "變化", pinyin: "biànhuà", zhuyin: "ㄅㄧㄢˋ ㄏㄨㄚˋ", french: "changement", isNew: true },
      { character: "北部", pinyin: "běibù", zhuyin: "ㄅㄟˇ ㄅㄨˋ", french: "le nord", isNew: true },
      { character: "常常", pinyin: "chángcháng", zhuyin: "ㄔㄤˊ ㄔㄤˊ", french: "souvent", isNew: false },
      { character: "下雨", pinyin: "xià yǔ", zhuyin: "ㄒㄧㄚˋ ㄩˇ", french: "pleuvoir", isNew: true },
      { character: "特別", pinyin: "tèbié", zhuyin: "ㄊㄜˋ ㄅㄧㄝˊ", french: "particulièrement", isNew: true },
      { character: "冬天", pinyin: "dōngtiān", zhuyin: "ㄉㄨㄥ ㄊㄧㄢ", french: "hiver", isNew: false },
      { character: "南部", pinyin: "nánbù", zhuyin: "ㄋㄢˊ ㄅㄨˋ", french: "le sud", isNew: true },
      { character: "比較", pinyin: "bǐjiào", zhuyin: "ㄅㄧˇ ㄐㄧㄠˋ", french: "relativement, plutôt", isNew: true },
      { character: "太陽", pinyin: "tàiyáng", zhuyin: "ㄊㄞˋ ㄧㄤˊ", french: "soleil", isNew: true },
      { character: "夏天", pinyin: "xiàtiān", zhuyin: "ㄒㄧㄚˋ ㄊㄧㄢ", french: "été", isNew: false },
      { character: "非常", pinyin: "fēicháng", zhuyin: "ㄈㄟ ㄔㄤˊ", french: "extrêmement", isNew: false },
      { character: "颱風", pinyin: "táifēng", zhuyin: "ㄊㄞˊ ㄈㄥ", french: "typhon", isNew: true },
      { character: "風", pinyin: "fēng", zhuyin: "ㄈㄥ", french: "vent", isNew: true },
      { character: "出門", pinyin: "chūmén", zhuyin: "ㄔㄨ ㄇㄣˊ", french: "sortir de chez soi", isNew: true },
      { character: "春天", pinyin: "chūntiān", zhuyin: "ㄔㄨㄣ ㄊㄧㄢ", french: "printemps", isNew: false },
      { character: "秋天", pinyin: "qiūtiān", zhuyin: "ㄑㄧㄡ ㄊㄧㄢ", french: "automne", isNew: false },
      { character: "舒服", pinyin: "shūfú", zhuyin: "ㄕㄨ ㄈㄨˊ", french: "confortable, agréable", isNew: true },
      { character: "季節", pinyin: "jìjié", zhuyin: "ㄐㄧˋ ㄐㄧㄝˊ", french: "saison", isNew: true },
      { character: "適合", pinyin: "shìhé", zhuyin: "ㄕˋ ㄏㄜˊ", french: "convenir, être adapté", isNew: true },
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
      { character: "語言", pinyin: "yǔyán", zhuyin: "ㄩˇ ㄧㄢˊ", french: "langue, langage", isNew: true },
      { character: "交換", pinyin: "jiāohuàn", zhuyin: "ㄐㄧㄠ ㄏㄨㄢˋ", french: "échanger", isNew: true },
      { character: "認識", pinyin: "rènshí", zhuyin: "ㄖㄣˋ ㄕˋ", french: "connaître, rencontrer", isNew: true },
      { character: "教", pinyin: "jiāo", zhuyin: "ㄐㄧㄠ", french: "enseigner", isNew: true },
      { character: "中文", pinyin: "Zhōngwén", zhuyin: "ㄓㄨㄥ ㄨㄣˊ", french: "chinois (langue)", isNew: false },
      { character: "法文", pinyin: "Fǎwén", zhuyin: "ㄈㄚˇ ㄨㄣˊ", french: "français (langue)", isNew: true },
      { character: "星期", pinyin: "xīngqī", zhuyin: "ㄒㄧㄥ ㄑㄧ", french: "semaine", isNew: false },
      { character: "吃飯", pinyin: "chīfàn", zhuyin: "ㄔ ㄈㄢˋ", french: "manger (un repas)", isNew: false },
      { character: "帶", pinyin: "dài", zhuyin: "ㄉㄞˋ", french: "emmener, amener", isNew: true },
      { character: "小吃", pinyin: "xiǎochī", zhuyin: "ㄒㄧㄠˇ ㄔ", french: "snack, en-cas", isNew: true },
      { character: "上個月", pinyin: "shàng gè yuè", zhuyin: "ㄕㄤˋ ㄍㄜˋ ㄩㄝˋ", french: "le mois dernier", isNew: true },
      { character: "九份", pinyin: "Jiǔfèn", zhuyin: "ㄐㄧㄡˇ ㄈㄣˋ", french: "Jiufen (village)", isNew: true },
      { character: "玩", pinyin: "wán", zhuyin: "ㄨㄢˊ", french: "s'amuser, visiter", isNew: false },
      { character: "熱情", pinyin: "rèqíng", zhuyin: "ㄖㄜˋ ㄑㄧㄥˊ", french: "chaleureux", isNew: true },
      { character: "交朋友", pinyin: "jiāo péngyǒu", zhuyin: "ㄐㄧㄠ ㄆㄥˊ ㄧㄡˇ", french: "se faire des amis", isNew: true },
      { character: "覺得", pinyin: "juédé", zhuyin: "ㄐㄩㄝˊ ㄉㄜˊ", french: "penser, trouver que", isNew: true },
      { character: "真的", pinyin: "zhēn de", zhuyin: "ㄓㄣ ㄉㄜ˙", french: "vraiment", isNew: true },
      { character: "友善", pinyin: "yǒushàn", zhuyin: "ㄧㄡˇ ㄕㄢˋ", french: "amical, bienveillant", isNew: true },
    ],
    culturalNote:
      "Les 語言交換 (yǔyán jiāohuàn, échanges linguistiques) sont très populaires à Taiwan. Des apps comme HelloTalk ou des groupes Meetup permettent de trouver des partenaires. 九份 (Jiǔfèn) est un village de montagne célèbre qui aurait inspiré le film « Le Voyage de Chihiro » de Miyazaki.",
  },

  // ──────────────── Nouveaux textes ────────────────

  // Niveau 1 — À la supérette
  {
    id: "at-convenience-store",
    title: "在便利商店",
    titleFr: "Au convenience store",
    level: 1,
    text: "我去便利商店買東西。我想買一個飯糰和一杯咖啡。飯糰二十五塊，咖啡四十五塊。我用悠遊卡付錢。便利商店很方便，什麼都有。",
    sentences: [
      {
        chinese: "我去便利商店買東西。",
        pinyin: "Wǒ qù biànlì shāngdiàn mǎi dōngxī.",
        french: "Je vais au convenience store acheter des choses.",
      },
      {
        chinese: "我想買一個飯糰和一杯咖啡。",
        pinyin: "Wǒ xiǎng mǎi yí gè fàntuán hé yì bēi kāfēi.",
        french: "Je voudrais acheter un onigiri et un café.",
      },
      {
        chinese: "飯糰二十五塊，咖啡四十五塊。",
        pinyin: "Fàntuán èrshíwǔ kuài, kāfēi sìshíwǔ kuài.",
        french: "L'onigiri coûte 25 dollars, le café 45 dollars.",
      },
      {
        chinese: "我用悠遊卡付錢。",
        pinyin: "Wǒ yòng yōuyóukǎ fù qián.",
        french: "Je paie avec la carte EasyCard.",
      },
      {
        chinese: "便利商店很方便，什麼都有。",
        pinyin: "Biànlì shāngdiàn hěn fāngbiàn, shénme dōu yǒu.",
        french: "Le convenience store est très pratique, on y trouve tout.",
      },
    ],
    vocabulary: [
      { character: "便利商店", pinyin: "biànlì shāngdiàn", zhuyin: "ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ", french: "convenience store", isNew: true },
      { character: "買", pinyin: "mǎi", zhuyin: "ㄇㄞˇ", french: "acheter", isNew: true },
      { character: "想", pinyin: "xiǎng", zhuyin: "ㄒㄧㄤˇ", french: "vouloir, penser", isNew: true },
      { character: "飯糰", pinyin: "fàntuán", zhuyin: "ㄈㄢˋ ㄊㄨㄢˊ", french: "onigiri, boulette de riz", isNew: true },
      { character: "咖啡", pinyin: "kāfēi", zhuyin: "ㄎㄚ ㄈㄟ", french: "café", isNew: true },
      { character: "塊", pinyin: "kuài", zhuyin: "ㄎㄨㄞˋ", french: "dollar (Taiwan)", isNew: true },
      { character: "付錢", pinyin: "fù qián", zhuyin: "ㄈㄨˋ ㄑㄧㄢˊ", french: "payer", isNew: true },
      { character: "什麼", pinyin: "shénme", zhuyin: "ㄕㄣˊ ㄇㄜ˙", french: "quoi, que", isNew: true },
    ],
    culturalNote:
      "Taiwan compte plus de 13 000 便利商店 (biànlì shāngdiàn), soit la plus forte densité au monde ! Les deux chaînes principales sont 7-Eleven (統一超商) et FamilyMart (全家). On peut y payer ses factures, récupérer des colis, imprimer des documents et même y manger sur place.",
  },

  // Niveau 2 — Plans du week-end
  {
    id: "weekend-plans",
    title: "週末計劃",
    titleFr: "Plans du week-end",
    level: 2,
    text: "這個週末我和朋友有很多計劃。星期六早上我們想去爬山，我們要去陽明山。下午我們打算去看電影。晚上一定要去逛夜市，吃好吃的小吃。星期天比較輕鬆，我們可能在家休息，或者去咖啡廳聊天。我很期待這個週末！",
    sentences: [
      {
        chinese: "這個週末我和朋友有很多計劃。",
        pinyin: "Zhège zhōumò wǒ hé péngyǒu yǒu hěn duō jìhuà.",
        french: "Ce week-end, mes amis et moi avons beaucoup de plans.",
      },
      {
        chinese: "星期六早上我們想去爬山，我們要去陽明山。",
        pinyin: "Xīngqīliù zǎoshàng wǒmen xiǎng qù páshān, wǒmen yào qù Yángmíngshān.",
        french: "Samedi matin nous voulons aller faire de la randonnée, nous irons à Yangmingshan.",
      },
      {
        chinese: "下午我們打算去看電影。",
        pinyin: "Xiàwǔ wǒmen dǎsuàn qù kàn diànyǐng.",
        french: "L'après-midi nous prévoyons d'aller voir un film.",
      },
      {
        chinese: "晚上一定要去逛夜市，吃好吃的小吃。",
        pinyin: "Wǎnshàng yídìng yào qù guàng yèshì, chī hǎochī de xiǎochī.",
        french: "Le soir, il faut absolument aller au marché de nuit manger de bons snacks.",
      },
      {
        chinese: "星期天比較輕鬆，我們可能在家休息，或者去咖啡廳聊天。",
        pinyin: "Xīngqītiān bǐjiào qīngsōng, wǒmen kěnéng zài jiā xiūxí, huòzhě qù kāfēitīng liáotiān.",
        french: "Dimanche sera plus détendu, nous resterons peut-être à la maison, ou irons discuter dans un café.",
      },
      {
        chinese: "我很期待這個週末！",
        pinyin: "Wǒ hěn qīdài zhège zhōumò!",
        french: "J'ai vraiment hâte d'être au week-end !",
      },
    ],
    vocabulary: [
      { character: "週末", pinyin: "zhōumò", zhuyin: "ㄓㄡ ㄇㄛˋ", french: "week-end", isNew: true },
      { character: "計劃", pinyin: "jìhuà", zhuyin: "ㄐㄧˋ ㄏㄨㄚˋ", french: "plan, projet", isNew: true },
      { character: "爬山", pinyin: "páshān", zhuyin: "ㄆㄚˊ ㄕㄢ", french: "faire de la randonnée", isNew: true },
      { character: "打算", pinyin: "dǎsuàn", zhuyin: "ㄉㄚˇ ㄙㄨㄢˋ", french: "prévoir, avoir l'intention", isNew: true },
      { character: "電影", pinyin: "diànyǐng", zhuyin: "ㄉㄧㄢˋ ㄧㄥˇ", french: "film, cinéma", isNew: true },
      { character: "逛", pinyin: "guàng", zhuyin: "ㄍㄨㄤˋ", french: "se balader, flâner", isNew: true },
      { character: "輕鬆", pinyin: "qīngsōng", zhuyin: "ㄑㄧㄥ ㄙㄨㄥ", french: "détendu, relaxant", isNew: true },
      { character: "可能", pinyin: "kěnéng", zhuyin: "ㄎㄜˇ ㄋㄥˊ", french: "peut-être, possible", isNew: true },
      { character: "休息", pinyin: "xiūxí", zhuyin: "ㄒㄧㄡ ㄒㄧˊ", french: "se reposer", isNew: true },
      { character: "期待", pinyin: "qīdài", zhuyin: "ㄑㄧ ㄉㄞˋ", french: "attendre avec impatience", isNew: true },
    ],
    culturalNote:
      "陽明山 (Yángmíngshān) est un parc national situé au nord de Taipei, très apprécié pour ses sentiers de randonnée, ses sources chaudes et ses champs de fleurs. Les Taiwanais adorent y passer le week-end. En février-mars, les cerisiers en fleurs attirent des foules de visiteurs.",
  },

  // Niveau 2 — Mon appartement
  {
    id: "my-apartment",
    title: "我的公寓",
    titleFr: "Mon appartement",
    level: 2,
    text: "我的公寓在台北市大安區。公寓不大，但是很舒服。有一個客廳、一間臥室、一個廚房和一間浴室。房租每個月一萬五千塊。附近有捷運站，走路五分鐘就到了。樓下有很多餐廳和商店，生活很方便。我很喜歡我的房子。",
    sentences: [
      {
        chinese: "我的公寓在台北市大安區。",
        pinyin: "Wǒ de gōngyù zài Táiběi shì Dà'ān qū.",
        french: "Mon appartement est dans le quartier Da'an à Taipei.",
      },
      {
        chinese: "公寓不大，但是很舒服。",
        pinyin: "Gōngyù bú dà, dànshì hěn shūfú.",
        french: "L'appartement n'est pas grand, mais il est confortable.",
      },
      {
        chinese: "有一個客廳、一間臥室、一個廚房和一間浴室。",
        pinyin: "Yǒu yí gè kètīng, yì jiān wòshì, yí gè chúfáng hé yì jiān yùshì.",
        french: "Il y a un salon, une chambre, une cuisine et une salle de bain.",
      },
      {
        chinese: "房租每個月一萬五千塊。",
        pinyin: "Fángzū měi gè yuè yí wàn wǔqiān kuài.",
        french: "Le loyer est de 15 000 dollars par mois.",
      },
      {
        chinese: "附近有捷運站，走路五分鐘就到了。",
        pinyin: "Fùjìn yǒu jiéyùn zhàn, zǒulù wǔ fēnzhōng jiù dào le.",
        french: "Il y a une station de MRT à proximité, à cinq minutes à pied.",
      },
      {
        chinese: "樓下有很多餐廳和商店，生活很方便。",
        pinyin: "Lóuxià yǒu hěn duō cāntīng hé shāngdiàn, shēnghuó hěn fāngbiàn.",
        french: "En bas de l'immeuble il y a beaucoup de restaurants et de magasins, la vie est très pratique.",
      },
      {
        chinese: "我很喜歡我的房子。",
        pinyin: "Wǒ hěn xǐhuān wǒ de fángzi.",
        french: "J'aime beaucoup mon logement.",
      },
    ],
    vocabulary: [
      { character: "公寓", pinyin: "gōngyù", zhuyin: "ㄍㄨㄥ ㄩˋ", french: "appartement", isNew: true },
      { character: "客廳", pinyin: "kètīng", zhuyin: "ㄎㄜˋ ㄊㄧㄥ", french: "salon", isNew: true },
      { character: "臥室", pinyin: "wòshì", zhuyin: "ㄨㄛˋ ㄕˋ", french: "chambre", isNew: true },
      { character: "廚房", pinyin: "chúfáng", zhuyin: "ㄔㄨˊ ㄈㄤˊ", french: "cuisine", isNew: true },
      { character: "浴室", pinyin: "yùshì", zhuyin: "ㄩˋ ㄕˋ", french: "salle de bain", isNew: true },
      { character: "房租", pinyin: "fángzū", zhuyin: "ㄈㄤˊ ㄗㄨ", french: "loyer", isNew: true },
      { character: "附近", pinyin: "fùjìn", zhuyin: "ㄈㄨˋ ㄐㄧㄣˋ", french: "à proximité", isNew: true },
      { character: "走路", pinyin: "zǒulù", zhuyin: "ㄗㄡˇ ㄌㄨˋ", french: "marcher, à pied", isNew: true },
      { character: "餐廳", pinyin: "cāntīng", zhuyin: "ㄘㄢ ㄊㄧㄥ", french: "restaurant", isNew: true },
      { character: "生活", pinyin: "shēnghuó", zhuyin: "ㄕㄥ ㄏㄨㄛˊ", french: "vie, quotidien", isNew: true },
    ],
    culturalNote:
      "大安區 (Dà'ān qū) est l'un des quartiers les plus populaires de Taipei auprès des expatriés et des étudiants. Les loyers varient entre 8 000 et 25 000 NT$ pour un studio ou un petit appartement. À Taiwan, il est courant de trouver des logements meublés, et les baux sont souvent d'un an avec un ou deux mois de caution.",
  },

  // Niveau 3 — Les fêtes taïwanaises
  {
    id: "taiwan-festivals",
    title: "台灣的節日",
    titleFr: "Les fêtes de Taiwan",
    level: 3,
    text: "台灣有很多傳統節日，每個節日都有特別的習俗。最重要的節日是農曆新年，也叫過年。過年的時候，大家會回老家跟家人團圓，一起吃年夜飯。小孩子最開心，因為可以拿紅包。端午節的時候，我們吃粽子，還有划龍舟比賽。中秋節是在秋天，大家一起賞月、吃月餅和烤肉。台灣人過中秋節一定要烤肉，這是台灣特別的習慣。這些節日讓我感受到台灣文化的溫暖。",
    sentences: [
      {
        chinese: "台灣有很多傳統節日，每個節日都有特別的習俗。",
        pinyin: "Táiwān yǒu hěn duō chuántǒng jiérì, měi gè jiérì dōu yǒu tèbié de xísú.",
        french: "Taiwan a beaucoup de fêtes traditionnelles, chaque fête a ses coutumes particulières.",
      },
      {
        chinese: "最重要的節日是農曆新年，也叫過年。",
        pinyin: "Zuì zhòngyào de jiérì shì nónglì xīnnián, yě jiào guònián.",
        french: "La fête la plus importante est le Nouvel An lunaire, aussi appelé « passer l'année ».",
      },
      {
        chinese: "過年的時候，大家會回老家跟家人團圓，一起吃年夜飯。",
        pinyin: "Guònián de shíhòu, dàjiā huì huí lǎojiā gēn jiārén tuányuán, yìqǐ chī niányèfàn.",
        french: "Au Nouvel An, tout le monde rentre au pays natal pour se réunir en famille et manger le réveillon.",
      },
      {
        chinese: "小孩子最開心，因為可以拿紅包。",
        pinyin: "Xiǎo háizi zuì kāixīn, yīnwèi kěyǐ ná hóngbāo.",
        french: "Les enfants sont les plus heureux car ils reçoivent des enveloppes rouges.",
      },
      {
        chinese: "端午節的時候，我們吃粽子，還有划龍舟比賽。",
        pinyin: "Duānwǔjié de shíhòu, wǒmen chī zòngzi, háiyǒu huá lóngzhōu bǐsài.",
        french: "À la fête des bateaux-dragons, nous mangeons des zongzi et il y a des courses de bateaux-dragons.",
      },
      {
        chinese: "中秋節是在秋天，大家一起賞月、吃月餅和烤肉。",
        pinyin: "Zhōngqiūjié shì zài qiūtiān, dàjiā yìqǐ shǎngyuè, chī yuèbǐng hé kǎoròu.",
        french: "La fête de la mi-automne est en automne, on admire la lune ensemble, on mange des gâteaux de lune et on fait un barbecue.",
      },
      {
        chinese: "台灣人過中秋節一定要烤肉，這是台灣特別的習慣。",
        pinyin: "Táiwān rén guò Zhōngqiūjié yídìng yào kǎoròu, zhè shì Táiwān tèbié de xíguàn.",
        french: "Les Taiwanais font absolument un barbecue pour la fête de la mi-automne, c'est une coutume propre à Taiwan.",
      },
      {
        chinese: "這些節日讓我感受到台灣文化的溫暖。",
        pinyin: "Zhèxiē jiérì ràng wǒ gǎnshòu dào Táiwān wénhuà de wēnnuǎn.",
        french: "Ces fêtes me font ressentir la chaleur de la culture taiwanaise.",
      },
    ],
    vocabulary: [
      { character: "傳統", pinyin: "chuántǒng", zhuyin: "ㄔㄨㄢˊ ㄊㄨㄥˇ", french: "tradition, traditionnel", isNew: true },
      { character: "節日", pinyin: "jiérì", zhuyin: "ㄐㄧㄝˊ ㄖˋ", french: "fête, jour férié", isNew: true },
      { character: "習俗", pinyin: "xísú", zhuyin: "ㄒㄧˊ ㄙㄨˊ", french: "coutume", isNew: true },
      { character: "農曆", pinyin: "nónglì", zhuyin: "ㄋㄨㄥˊ ㄌㄧˋ", french: "calendrier lunaire", isNew: true },
      { character: "過年", pinyin: "guònián", zhuyin: "ㄍㄨㄛˋ ㄋㄧㄢˊ", french: "Nouvel An (fêter)", isNew: true },
      { character: "團圓", pinyin: "tuányuán", zhuyin: "ㄊㄨㄢˊ ㄩㄢˊ", french: "réunion de famille", isNew: true },
      { character: "紅包", pinyin: "hóngbāo", zhuyin: "ㄏㄨㄥˊ ㄅㄠ", french: "enveloppe rouge", isNew: true },
      { character: "端午節", pinyin: "Duānwǔjié", zhuyin: "ㄉㄨㄢ ㄨˇ ㄐㄧㄝˊ", french: "fête des bateaux-dragons", isNew: true },
      { character: "粽子", pinyin: "zòngzi", zhuyin: "ㄗㄨㄥˋ ㄗ˙", french: "zongzi (boulette de riz)", isNew: true },
      { character: "中秋節", pinyin: "Zhōngqiūjié", zhuyin: "ㄓㄨㄥ ㄑㄧㄡ ㄐㄧㄝˊ", french: "fête de la mi-automne", isNew: true },
      { character: "月餅", pinyin: "yuèbǐng", zhuyin: "ㄩㄝˋ ㄅㄧㄥˇ", french: "gâteau de lune", isNew: true },
      { character: "烤肉", pinyin: "kǎoròu", zhuyin: "ㄎㄠˇ ㄖㄡˋ", french: "barbecue, viande grillée", isNew: true },
    ],
    culturalNote:
      "Le barbecue de la fête de la mi-automne (中秋烤肉) est une tradition typiquement taïwanaise qui date des années 1980, popularisée par une publicité pour de la sauce barbecue. Aujourd'hui, presque toutes les familles, entreprises et groupes d'amis font un barbecue en plein air pendant le 中秋節. C'est une occasion de se retrouver, bien plus que la simple contemplation de la lune !",
  },
];
