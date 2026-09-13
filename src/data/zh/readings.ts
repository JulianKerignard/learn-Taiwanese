export interface GradedText {
  id: string;
  title: string;
  titleFr: string;
  level: 1 | 2 | 3;
  text: string;
  sentences: {
    native: string;
    romanization: string;
    french: string;
  }[];
  vocabulary: {
    term: string;
    romanization: string;
    reading: string;
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
      { native: "你好！", romanization: "Nǐ hǎo!", french: "Bonjour !" },
      { native: "我叫小明。", romanization: "Wǒ jiào Xiǎo Míng.", french: "Je m'appelle Xiao Ming." },
      { native: "我是法國人。", romanization: "Wǒ shì Fàguó rén.", french: "Je suis français." },
      { native: "我住在台北。", romanization: "Wǒ zhù zài Táiběi.", french: "J'habite à Taipei." },
      { native: "我喜歡台灣。", romanization: "Wǒ xǐhuān Táiwān.", french: "J'aime Taiwan." },
      { native: "台灣很好！", romanization: "Táiwān hěn hǎo!", french: "Taiwan c'est très bien !" },
      { native: "我很高興。", romanization: "Wǒ hěn gāoxìng.", french: "Je suis très content." },
    ],
    vocabulary: [
      { term: "你好", romanization: "nǐ hǎo", reading: "ㄋㄧˇ ㄏㄠˇ", french: "bonjour", isNew: false },
      { term: "我", romanization: "wǒ", reading: "ㄨㄛˇ", french: "je, moi", isNew: false },
      { term: "叫", romanization: "jiào", reading: "ㄐㄧㄠˋ", french: "s'appeler", isNew: true },
      { term: "是", romanization: "shì", reading: "ㄕˋ", french: "être", isNew: false },
      { term: "法國", romanization: "Fàguó", reading: "ㄈㄚˇ ㄍㄨㄛˊ", french: "France", isNew: true },
      { term: "人", romanization: "rén", reading: "ㄖㄣˊ", french: "personne", isNew: false },
      { term: "住", romanization: "zhù", reading: "ㄓㄨˋ", french: "habiter", isNew: true },
      { term: "在", romanization: "zài", reading: "ㄗㄞˋ", french: "à, dans", isNew: false },
      { term: "台北", romanization: "Táiběi", reading: "ㄊㄞˊ ㄅㄟˇ", french: "Taipei", isNew: true },
      { term: "喜歡", romanization: "xǐhuān", reading: "ㄒㄧˇ ㄏㄨㄢ", french: "aimer", isNew: true },
      { term: "台灣", romanization: "Táiwān", reading: "ㄊㄞˊ ㄨㄢ", french: "Taiwan", isNew: false },
      { term: "很", romanization: "hěn", reading: "ㄏㄣˇ", french: "très", isNew: false },
      { term: "好", romanization: "hǎo", reading: "ㄏㄠˇ", french: "bien, bon", isNew: false },
      { term: "高興", romanization: "gāoxìng", reading: "ㄍㄠ ㄒㄧㄥˋ", french: "content", isNew: true },
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
      { native: "這是台北。", romanization: "Zhè shì Táiběi.", french: "C'est Taipei." },
      { native: "台北很大。", romanization: "Táiběi hěn dà.", french: "Taipei est très grand." },
      { native: "人很多。", romanization: "Rén hěn duō.", french: "Il y a beaucoup de monde." },
      { native: "有很多車。", romanization: "Yǒu hěn duō chē.", french: "Il y a beaucoup de voitures." },
      { native: "也有捷運。", romanization: "Yě yǒu jiéyùn.", french: "Il y a aussi le MRT." },
      { native: "台北很漂亮。", romanization: "Táiběi hěn piàoliang.", french: "Taipei est très beau." },
      { native: "我喜歡這裡。", romanization: "Wǒ xǐhuān zhèlǐ.", french: "J'aime cet endroit." },
    ],
    vocabulary: [
      { term: "這", romanization: "zhè", reading: "ㄓㄜˋ", french: "ceci, ce", isNew: true },
      { term: "大", romanization: "dà", reading: "ㄉㄚˋ", french: "grand", isNew: false },
      { term: "多", romanization: "duō", reading: "ㄉㄨㄛ", french: "beaucoup", isNew: true },
      { term: "有", romanization: "yǒu", reading: "ㄧㄡˇ", french: "avoir, il y a", isNew: false },
      { term: "車", romanization: "chē", reading: "ㄔㄜ", french: "voiture, véhicule", isNew: true },
      { term: "也", romanization: "yě", reading: "ㄧㄝˇ", french: "aussi", isNew: true },
      { term: "捷運", romanization: "jiéyùn", reading: "ㄐㄧㄝˊ ㄩㄣˋ", french: "MRT (métro)", isNew: true },
      { term: "漂亮", romanization: "piàoliang", reading: "ㄆㄧㄠˋ ㄌㄧㄤˋ", french: "beau, joli", isNew: true },
      { term: "這裡", romanization: "zhèlǐ", reading: "ㄓㄜˋ ㄌㄧˇ", french: "ici", isNew: true },
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
        native: "昨天晚上我去了士林夜市。",
        romanization: "Zuótiān wǎnshàng wǒ qù le Shìlín yèshì.",
        french: "Hier soir je suis allé au marché de nuit de Shilin.",
      },
      {
        native: "那裡有很多好吃的東西。",
        romanization: "Nàlǐ yǒu hěn duō hǎochī de dōngxī.",
        french: "Il y avait beaucoup de bonnes choses à manger.",
      },
      {
        native: "我吃了臭豆腐和珍珠奶茶。",
        romanization: "Wǒ chī le chòu dòufǔ hé zhēnzhū nǎichá.",
        french: "J'ai mangé du tofu puant et du bubble tea.",
      },
      {
        native: "臭豆腐很好吃！",
        romanization: "Chòu dòufǔ hěn hǎochī!",
        french: "Le tofu puant est délicieux !",
      },
      {
        native: "珍珠奶茶也很甜。",
        romanization: "Zhēnzhū nǎichá yě hěn tián.",
        french: "Le bubble tea est aussi très sucré.",
      },
      {
        native: "夜市的人很多，很熱鬧。",
        romanization: "Yèshì de rén hěn duō, hěn rènào.",
        french: "Il y avait beaucoup de monde au marché de nuit, très animé.",
      },
      {
        native: "我和朋友一起去的，我們都很開心。",
        romanization: "Wǒ hé péngyǒu yìqǐ qù de, wǒmen dōu hěn kāixīn.",
        french: "J'y suis allé avec un ami, nous étions tous très contents.",
      },
    ],
    vocabulary: [
      { term: "昨天", romanization: "zuótiān", reading: "ㄗㄨㄛˊ ㄊㄧㄢ", french: "hier", isNew: false },
      { term: "晚上", romanization: "wǎnshàng", reading: "ㄨㄢˇ ㄕㄤˋ", french: "le soir", isNew: false },
      { term: "去", romanization: "qù", reading: "ㄑㄩˋ", french: "aller", isNew: false },
      { term: "夜市", romanization: "yèshì", reading: "ㄧㄝˋ ㄕˋ", french: "marché de nuit", isNew: true },
      { term: "好吃", romanization: "hǎochī", reading: "ㄏㄠˇ ㄔ", french: "délicieux", isNew: true },
      { term: "東西", romanization: "dōngxī", reading: "ㄉㄨㄥ ㄒㄧ", french: "chose", isNew: false },
      { term: "臭豆腐", romanization: "chòu dòufǔ", reading: "ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ", french: "tofu puant", isNew: true },
      { term: "珍珠奶茶", romanization: "zhēnzhū nǎichá", reading: "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ", french: "bubble tea", isNew: true },
      { term: "甜", romanization: "tián", reading: "ㄊㄧㄢˊ", french: "sucré", isNew: true },
      { term: "熱鬧", romanization: "rènào", reading: "ㄖㄜˋ ㄋㄠˋ", french: "animé, bruyant", isNew: true },
      { term: "朋友", romanization: "péngyǒu", reading: "ㄆㄥˊ ㄧㄡˇ", french: "ami", isNew: false },
      { term: "一起", romanization: "yìqǐ", reading: "ㄧˋ ㄑㄧˇ", french: "ensemble", isNew: true },
      { term: "開心", romanization: "kāixīn", reading: "ㄎㄞ ㄒㄧㄣ", french: "content, joyeux", isNew: true },
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
        native: "今天早上我搭捷運去上班。",
        romanization: "Jīntiān zǎoshàng wǒ dā jiéyùn qù shàngbān.",
        french: "Ce matin j'ai pris le MRT pour aller au travail.",
      },
      {
        native: "我先用悠遊卡進站。",
        romanization: "Wǒ xiān yòng yōuyóukǎ jìn zhàn.",
        french: "J'ai d'abord utilisé la carte EasyCard pour entrer dans la station.",
      },
      {
        native: "捷運很快也很方便。",
        romanization: "Jiéyùn hěn kuài yě hěn fāngbiàn.",
        french: "Le MRT est rapide et pratique.",
      },
      {
        native: "從我家到公司要三十分鐘。",
        romanization: "Cóng wǒ jiā dào gōngsī yào sānshí fēnzhōng.",
        french: "De chez moi au bureau, il faut trente minutes.",
      },
      {
        native: "車上的人很多，沒有座位。",
        romanization: "Chē shàng de rén hěn duō, méiyǒu zuòwèi.",
        french: "Il y avait beaucoup de monde dans le train, pas de place assise.",
      },
      {
        native: "我站了三站就到了。",
        romanization: "Wǒ zhàn le sān zhàn jiù dào le.",
        french: "J'ai tenu debout pendant trois stations et je suis arrivé.",
      },
    ],
    vocabulary: [
      { term: "今天", romanization: "jīntiān", reading: "ㄐㄧㄣ ㄊㄧㄢ", french: "aujourd'hui", isNew: false },
      { term: "早上", romanization: "zǎoshàng", reading: "ㄗㄠˇ ㄕㄤˋ", french: "le matin", isNew: false },
      { term: "搭", romanization: "dā", reading: "ㄉㄚ", french: "prendre (transport)", isNew: true },
      { term: "上班", romanization: "shàngbān", reading: "ㄕㄤˋ ㄅㄢ", french: "aller au travail", isNew: true },
      { term: "先", romanization: "xiān", reading: "ㄒㄧㄢ", french: "d'abord", isNew: true },
      { term: "用", romanization: "yòng", reading: "ㄩㄥˋ", french: "utiliser", isNew: false },
      { term: "悠遊卡", romanization: "yōuyóukǎ", reading: "ㄧㄡ ㄧㄡˊ ㄎㄚˇ", french: "carte EasyCard", isNew: true },
      { term: "進站", romanization: "jìn zhàn", reading: "ㄐㄧㄣˋ ㄓㄢˋ", french: "entrer dans la station", isNew: true },
      { term: "快", romanization: "kuài", reading: "ㄎㄨㄞˋ", french: "rapide", isNew: false },
      { term: "方便", romanization: "fāngbiàn", reading: "ㄈㄤ ㄅㄧㄢˋ", french: "pratique", isNew: true },
      { term: "從", romanization: "cóng", reading: "ㄘㄨㄥˊ", french: "de, depuis", isNew: true },
      { term: "公司", romanization: "gōngsī", reading: "ㄍㄨㄥ ㄙ", french: "entreprise, bureau", isNew: true },
      { term: "分鐘", romanization: "fēnzhōng", reading: "ㄈㄣ ㄓㄨㄥ", french: "minute", isNew: true },
      { term: "座位", romanization: "zuòwèi", reading: "ㄗㄨㄛˋ ㄨㄟˋ", french: "place assise", isNew: true },
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
        native: "台灣是一個小島，但天氣變化很大。",
        romanization: "Táiwān shì yí gè xiǎo dǎo, dàn tiānqì biànhuà hěn dà.",
        french: "Taiwan est une petite île, mais la météo change beaucoup.",
      },
      {
        native: "北部常常下雨，特別是冬天的時候。",
        romanization: "Běibù chángcháng xià yǔ, tèbié shì dōngtiān de shíhòu.",
        french: "Il pleut souvent dans le nord, surtout en hiver.",
      },
      {
        native: "南部比較熱，太陽也比較多。",
        romanization: "Nánbù bǐjiào rè, tàiyáng yě bǐjiào duō.",
        french: "Le sud est plus chaud, il y a aussi plus de soleil.",
      },
      {
        native: "夏天的時候非常熱，有時候會有颱風。",
        romanization: "Xiàtiān de shíhòu fēicháng rè, yǒu shíhòu huì yǒu táifēng.",
        french: "En été il fait très chaud, et il y a parfois des typhons.",
      },
      {
        native: "颱風來的時候，風很大，雨也很大，大家都不出門。",
        romanization: "Táifēng lái de shíhòu, fēng hěn dà, yǔ yě hěn dà, dàjiā dōu bù chūmén.",
        french: "Quand le typhon arrive, le vent est fort, la pluie aussi, et personne ne sort.",
      },
      {
        native: "春天和秋天是最舒服的季節，不冷也不熱，很適合出去玩。",
        romanization: "Chūntiān hé qiūtiān shì zuì shūfú de jìjié, bù lěng yě bù rè, hěn shìhé chūqù wán.",
        french: "Le printemps et l'automne sont les saisons les plus agréables, ni froid ni chaud, idéales pour sortir.",
      },
    ],
    vocabulary: [
      { term: "島", romanization: "dǎo", reading: "ㄉㄠˇ", french: "île", isNew: true },
      { term: "天氣", romanization: "tiānqì", reading: "ㄊㄧㄢ ㄑㄧˋ", french: "météo, temps", isNew: true },
      { term: "變化", romanization: "biànhuà", reading: "ㄅㄧㄢˋ ㄏㄨㄚˋ", french: "changement", isNew: true },
      { term: "北部", romanization: "běibù", reading: "ㄅㄟˇ ㄅㄨˋ", french: "le nord", isNew: true },
      { term: "常常", romanization: "chángcháng", reading: "ㄔㄤˊ ㄔㄤˊ", french: "souvent", isNew: false },
      { term: "下雨", romanization: "xià yǔ", reading: "ㄒㄧㄚˋ ㄩˇ", french: "pleuvoir", isNew: true },
      { term: "特別", romanization: "tèbié", reading: "ㄊㄜˋ ㄅㄧㄝˊ", french: "particulièrement", isNew: true },
      { term: "冬天", romanization: "dōngtiān", reading: "ㄉㄨㄥ ㄊㄧㄢ", french: "hiver", isNew: false },
      { term: "南部", romanization: "nánbù", reading: "ㄋㄢˊ ㄅㄨˋ", french: "le sud", isNew: true },
      { term: "比較", romanization: "bǐjiào", reading: "ㄅㄧˇ ㄐㄧㄠˋ", french: "relativement, plutôt", isNew: true },
      { term: "太陽", romanization: "tàiyáng", reading: "ㄊㄞˋ ㄧㄤˊ", french: "soleil", isNew: true },
      { term: "夏天", romanization: "xiàtiān", reading: "ㄒㄧㄚˋ ㄊㄧㄢ", french: "été", isNew: false },
      { term: "非常", romanization: "fēicháng", reading: "ㄈㄟ ㄔㄤˊ", french: "extrêmement", isNew: false },
      { term: "颱風", romanization: "táifēng", reading: "ㄊㄞˊ ㄈㄥ", french: "typhon", isNew: true },
      { term: "風", romanization: "fēng", reading: "ㄈㄥ", french: "vent", isNew: true },
      { term: "出門", romanization: "chūmén", reading: "ㄔㄨ ㄇㄣˊ", french: "sortir de chez soi", isNew: true },
      { term: "春天", romanization: "chūntiān", reading: "ㄔㄨㄣ ㄊㄧㄢ", french: "printemps", isNew: false },
      { term: "秋天", romanization: "qiūtiān", reading: "ㄑㄧㄡ ㄊㄧㄢ", french: "automne", isNew: false },
      { term: "舒服", romanization: "shūfú", reading: "ㄕㄨ ㄈㄨˊ", french: "confortable, agréable", isNew: true },
      { term: "季節", romanization: "jìjié", reading: "ㄐㄧˋ ㄐㄧㄝˊ", french: "saison", isNew: true },
      { term: "適合", romanization: "shìhé", reading: "ㄕˋ ㄏㄜˊ", french: "convenir, être adapté", isNew: true },
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
        native: "我有一個台灣朋友，他叫阿凱。",
        romanization: "Wǒ yǒu yí gè Táiwān péngyǒu, tā jiào Ā Kǎi.",
        french: "J'ai un ami taiwanais, il s'appelle A-Kai.",
      },
      {
        native: "我們是在語言交換的時候認識的。",
        romanization: "Wǒmen shì zài yǔyán jiāohuàn de shíhòu rènshí de.",
        french: "Nous nous sommes rencontrés lors d'un échange linguistique.",
      },
      {
        native: "他教我中文，我教他法文。",
        romanization: "Tā jiāo wǒ Zhōngwén, wǒ jiāo tā Fǎwén.",
        french: "Il m'enseigne le chinois, je lui enseigne le français.",
      },
      {
        native: "每個星期我們會一起吃飯。",
        romanization: "Měi gè xīngqī wǒmen huì yìqǐ chīfàn.",
        french: "Chaque semaine nous mangeons ensemble.",
      },
      {
        native: "他常常帶我去吃台灣小吃。",
        romanization: "Tā chángcháng dài wǒ qù chī Táiwān xiǎochī.",
        french: "Il m'emmène souvent manger des snacks taiwanais.",
      },
      {
        native: "上個月他帶我去九份玩，那裡很漂亮。",
        romanization: "Shàng gè yuè tā dài wǒ qù Jiǔfèn wán, nàlǐ hěn piàoliang.",
        french: "Le mois dernier il m'a emmené visiter Jiufen, c'est très joli là-bas.",
      },
      {
        native: "他說台灣人很熱情，喜歡交朋友。",
        romanization: "Tā shuō Táiwān rén hěn rèqíng, xǐhuān jiāo péngyǒu.",
        french: "Il dit que les Taiwanais sont chaleureux et aiment se faire des amis.",
      },
      {
        native: "我覺得他說得對，台灣人真的很友善。",
        romanization: "Wǒ juédé tā shuō de duì, Táiwān rén zhēn de hěn yǒushàn.",
        french: "Je pense qu'il a raison, les Taiwanais sont vraiment amicaux.",
      },
    ],
    vocabulary: [
      { term: "語言", romanization: "yǔyán", reading: "ㄩˇ ㄧㄢˊ", french: "langue, langage", isNew: true },
      { term: "交換", romanization: "jiāohuàn", reading: "ㄐㄧㄠ ㄏㄨㄢˋ", french: "échanger", isNew: true },
      { term: "認識", romanization: "rènshí", reading: "ㄖㄣˋ ㄕˋ", french: "connaître, rencontrer", isNew: true },
      { term: "教", romanization: "jiāo", reading: "ㄐㄧㄠ", french: "enseigner", isNew: true },
      { term: "中文", romanization: "Zhōngwén", reading: "ㄓㄨㄥ ㄨㄣˊ", french: "chinois (langue)", isNew: false },
      { term: "法文", romanization: "Fǎwén", reading: "ㄈㄚˇ ㄨㄣˊ", french: "français (langue)", isNew: true },
      { term: "星期", romanization: "xīngqī", reading: "ㄒㄧㄥ ㄑㄧ", french: "semaine", isNew: false },
      { term: "吃飯", romanization: "chīfàn", reading: "ㄔ ㄈㄢˋ", french: "manger (un repas)", isNew: false },
      { term: "帶", romanization: "dài", reading: "ㄉㄞˋ", french: "emmener, amener", isNew: true },
      { term: "小吃", romanization: "xiǎochī", reading: "ㄒㄧㄠˇ ㄔ", french: "snack, en-cas", isNew: true },
      { term: "上個月", romanization: "shàng gè yuè", reading: "ㄕㄤˋ ㄍㄜˋ ㄩㄝˋ", french: "le mois dernier", isNew: true },
      { term: "九份", romanization: "Jiǔfèn", reading: "ㄐㄧㄡˇ ㄈㄣˋ", french: "Jiufen (village)", isNew: true },
      { term: "玩", romanization: "wán", reading: "ㄨㄢˊ", french: "s'amuser, visiter", isNew: false },
      { term: "熱情", romanization: "rèqíng", reading: "ㄖㄜˋ ㄑㄧㄥˊ", french: "chaleureux", isNew: true },
      { term: "交朋友", romanization: "jiāo péngyǒu", reading: "ㄐㄧㄠ ㄆㄥˊ ㄧㄡˇ", french: "se faire des amis", isNew: true },
      { term: "覺得", romanization: "juédé", reading: "ㄐㄩㄝˊ ㄉㄜˊ", french: "penser, trouver que", isNew: true },
      { term: "真的", romanization: "zhēn de", reading: "ㄓㄣ ㄉㄜ˙", french: "vraiment", isNew: true },
      { term: "友善", romanization: "yǒushàn", reading: "ㄧㄡˇ ㄕㄢˋ", french: "amical, bienveillant", isNew: true },
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
        native: "我去便利商店買東西。",
        romanization: "Wǒ qù biànlì shāngdiàn mǎi dōngxī.",
        french: "Je vais au convenience store acheter des choses.",
      },
      {
        native: "我想買一個飯糰和一杯咖啡。",
        romanization: "Wǒ xiǎng mǎi yí gè fàntuán hé yì bēi kāfēi.",
        french: "Je voudrais acheter un onigiri et un café.",
      },
      {
        native: "飯糰二十五塊，咖啡四十五塊。",
        romanization: "Fàntuán èrshíwǔ kuài, kāfēi sìshíwǔ kuài.",
        french: "L'onigiri coûte 25 dollars, le café 45 dollars.",
      },
      {
        native: "我用悠遊卡付錢。",
        romanization: "Wǒ yòng yōuyóukǎ fù qián.",
        french: "Je paie avec la carte EasyCard.",
      },
      {
        native: "便利商店很方便，什麼都有。",
        romanization: "Biànlì shāngdiàn hěn fāngbiàn, shénme dōu yǒu.",
        french: "Le convenience store est très pratique, on y trouve tout.",
      },
    ],
    vocabulary: [
      { term: "便利商店", romanization: "biànlì shāngdiàn", reading: "ㄅㄧㄢˋ ㄌㄧˋ ㄕㄤ ㄉㄧㄢˋ", french: "convenience store", isNew: true },
      { term: "買", romanization: "mǎi", reading: "ㄇㄞˇ", french: "acheter", isNew: true },
      { term: "想", romanization: "xiǎng", reading: "ㄒㄧㄤˇ", french: "vouloir, penser", isNew: true },
      { term: "飯糰", romanization: "fàntuán", reading: "ㄈㄢˋ ㄊㄨㄢˊ", french: "onigiri, boulette de riz", isNew: true },
      { term: "咖啡", romanization: "kāfēi", reading: "ㄎㄚ ㄈㄟ", french: "café", isNew: true },
      { term: "塊", romanization: "kuài", reading: "ㄎㄨㄞˋ", french: "dollar (Taiwan)", isNew: true },
      { term: "付錢", romanization: "fù qián", reading: "ㄈㄨˋ ㄑㄧㄢˊ", french: "payer", isNew: true },
      { term: "什麼", romanization: "shénme", reading: "ㄕㄣˊ ㄇㄜ˙", french: "quoi, que", isNew: true },
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
        native: "這個週末我和朋友有很多計劃。",
        romanization: "Zhège zhōumò wǒ hé péngyǒu yǒu hěn duō jìhuà.",
        french: "Ce week-end, mes amis et moi avons beaucoup de plans.",
      },
      {
        native: "星期六早上我們想去爬山，我們要去陽明山。",
        romanization: "Xīngqīliù zǎoshàng wǒmen xiǎng qù páshān, wǒmen yào qù Yángmíngshān.",
        french: "Samedi matin nous voulons aller faire de la randonnée, nous irons à Yangmingshan.",
      },
      {
        native: "下午我們打算去看電影。",
        romanization: "Xiàwǔ wǒmen dǎsuàn qù kàn diànyǐng.",
        french: "L'après-midi nous prévoyons d'aller voir un film.",
      },
      {
        native: "晚上一定要去逛夜市，吃好吃的小吃。",
        romanization: "Wǎnshàng yídìng yào qù guàng yèshì, chī hǎochī de xiǎochī.",
        french: "Le soir, il faut absolument aller au marché de nuit manger de bons snacks.",
      },
      {
        native: "星期天比較輕鬆，我們可能在家休息，或者去咖啡廳聊天。",
        romanization: "Xīngqītiān bǐjiào qīngsōng, wǒmen kěnéng zài jiā xiūxí, huòzhě qù kāfēitīng liáotiān.",
        french: "Dimanche sera plus détendu, nous resterons peut-être à la maison, ou irons discuter dans un café.",
      },
      {
        native: "我很期待這個週末！",
        romanization: "Wǒ hěn qīdài zhège zhōumò!",
        french: "J'ai vraiment hâte d'être au week-end !",
      },
    ],
    vocabulary: [
      { term: "週末", romanization: "zhōumò", reading: "ㄓㄡ ㄇㄛˋ", french: "week-end", isNew: true },
      { term: "計劃", romanization: "jìhuà", reading: "ㄐㄧˋ ㄏㄨㄚˋ", french: "plan, projet", isNew: true },
      { term: "爬山", romanization: "páshān", reading: "ㄆㄚˊ ㄕㄢ", french: "faire de la randonnée", isNew: true },
      { term: "打算", romanization: "dǎsuàn", reading: "ㄉㄚˇ ㄙㄨㄢˋ", french: "prévoir, avoir l'intention", isNew: true },
      { term: "電影", romanization: "diànyǐng", reading: "ㄉㄧㄢˋ ㄧㄥˇ", french: "film, cinéma", isNew: true },
      { term: "逛", romanization: "guàng", reading: "ㄍㄨㄤˋ", french: "se balader, flâner", isNew: true },
      { term: "輕鬆", romanization: "qīngsōng", reading: "ㄑㄧㄥ ㄙㄨㄥ", french: "détendu, relaxant", isNew: true },
      { term: "可能", romanization: "kěnéng", reading: "ㄎㄜˇ ㄋㄥˊ", french: "peut-être, possible", isNew: true },
      { term: "休息", romanization: "xiūxí", reading: "ㄒㄧㄡ ㄒㄧˊ", french: "se reposer", isNew: true },
      { term: "期待", romanization: "qīdài", reading: "ㄑㄧ ㄉㄞˋ", french: "attendre avec impatience", isNew: true },
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
        native: "我的公寓在台北市大安區。",
        romanization: "Wǒ de gōngyù zài Táiběi shì Dà'ān qū.",
        french: "Mon appartement est dans le quartier Da'an à Taipei.",
      },
      {
        native: "公寓不大，但是很舒服。",
        romanization: "Gōngyù bú dà, dànshì hěn shūfú.",
        french: "L'appartement n'est pas grand, mais il est confortable.",
      },
      {
        native: "有一個客廳、一間臥室、一個廚房和一間浴室。",
        romanization: "Yǒu yí gè kètīng, yì jiān wòshì, yí gè chúfáng hé yì jiān yùshì.",
        french: "Il y a un salon, une chambre, une cuisine et une salle de bain.",
      },
      {
        native: "房租每個月一萬五千塊。",
        romanization: "Fángzū měi gè yuè yí wàn wǔqiān kuài.",
        french: "Le loyer est de 15 000 dollars par mois.",
      },
      {
        native: "附近有捷運站，走路五分鐘就到了。",
        romanization: "Fùjìn yǒu jiéyùn zhàn, zǒulù wǔ fēnzhōng jiù dào le.",
        french: "Il y a une station de MRT à proximité, à cinq minutes à pied.",
      },
      {
        native: "樓下有很多餐廳和商店，生活很方便。",
        romanization: "Lóuxià yǒu hěn duō cāntīng hé shāngdiàn, shēnghuó hěn fāngbiàn.",
        french: "En bas de l'immeuble il y a beaucoup de restaurants et de magasins, la vie est très pratique.",
      },
      {
        native: "我很喜歡我的房子。",
        romanization: "Wǒ hěn xǐhuān wǒ de fángzi.",
        french: "J'aime beaucoup mon logement.",
      },
    ],
    vocabulary: [
      { term: "公寓", romanization: "gōngyù", reading: "ㄍㄨㄥ ㄩˋ", french: "appartement", isNew: true },
      { term: "客廳", romanization: "kètīng", reading: "ㄎㄜˋ ㄊㄧㄥ", french: "salon", isNew: true },
      { term: "臥室", romanization: "wòshì", reading: "ㄨㄛˋ ㄕˋ", french: "chambre", isNew: true },
      { term: "廚房", romanization: "chúfáng", reading: "ㄔㄨˊ ㄈㄤˊ", french: "cuisine", isNew: true },
      { term: "浴室", romanization: "yùshì", reading: "ㄩˋ ㄕˋ", french: "salle de bain", isNew: true },
      { term: "房租", romanization: "fángzū", reading: "ㄈㄤˊ ㄗㄨ", french: "loyer", isNew: true },
      { term: "附近", romanization: "fùjìn", reading: "ㄈㄨˋ ㄐㄧㄣˋ", french: "à proximité", isNew: true },
      { term: "走路", romanization: "zǒulù", reading: "ㄗㄡˇ ㄌㄨˋ", french: "marcher, à pied", isNew: true },
      { term: "餐廳", romanization: "cāntīng", reading: "ㄘㄢ ㄊㄧㄥ", french: "restaurant", isNew: true },
      { term: "生活", romanization: "shēnghuó", reading: "ㄕㄥ ㄏㄨㄛˊ", french: "vie, quotidien", isNew: true },
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
        native: "台灣有很多傳統節日，每個節日都有特別的習俗。",
        romanization: "Táiwān yǒu hěn duō chuántǒng jiérì, měi gè jiérì dōu yǒu tèbié de xísú.",
        french: "Taiwan a beaucoup de fêtes traditionnelles, chaque fête a ses coutumes particulières.",
      },
      {
        native: "最重要的節日是農曆新年，也叫過年。",
        romanization: "Zuì zhòngyào de jiérì shì nónglì xīnnián, yě jiào guònián.",
        french: "La fête la plus importante est le Nouvel An lunaire, aussi appelé « passer l'année ».",
      },
      {
        native: "過年的時候，大家會回老家跟家人團圓，一起吃年夜飯。",
        romanization: "Guònián de shíhòu, dàjiā huì huí lǎojiā gēn jiārén tuányuán, yìqǐ chī niányèfàn.",
        french: "Au Nouvel An, tout le monde rentre au pays natal pour se réunir en famille et manger le réveillon.",
      },
      {
        native: "小孩子最開心，因為可以拿紅包。",
        romanization: "Xiǎo háizi zuì kāixīn, yīnwèi kěyǐ ná hóngbāo.",
        french: "Les enfants sont les plus heureux car ils reçoivent des enveloppes rouges.",
      },
      {
        native: "端午節的時候，我們吃粽子，還有划龍舟比賽。",
        romanization: "Duānwǔjié de shíhòu, wǒmen chī zòngzi, háiyǒu huá lóngzhōu bǐsài.",
        french: "À la fête des bateaux-dragons, nous mangeons des zongzi et il y a des courses de bateaux-dragons.",
      },
      {
        native: "中秋節是在秋天，大家一起賞月、吃月餅和烤肉。",
        romanization: "Zhōngqiūjié shì zài qiūtiān, dàjiā yìqǐ shǎngyuè, chī yuèbǐng hé kǎoròu.",
        french: "La fête de la mi-automne est en automne, on admire la lune ensemble, on mange des gâteaux de lune et on fait un barbecue.",
      },
      {
        native: "台灣人過中秋節一定要烤肉，這是台灣特別的習慣。",
        romanization: "Táiwān rén guò Zhōngqiūjié yídìng yào kǎoròu, zhè shì Táiwān tèbié de xíguàn.",
        french: "Les Taiwanais font absolument un barbecue pour la fête de la mi-automne, c'est une coutume propre à Taiwan.",
      },
      {
        native: "這些節日讓我感受到台灣文化的溫暖。",
        romanization: "Zhèxiē jiérì ràng wǒ gǎnshòu dào Táiwān wénhuà de wēnnuǎn.",
        french: "Ces fêtes me font ressentir la chaleur de la culture taiwanaise.",
      },
    ],
    vocabulary: [
      { term: "傳統", romanization: "chuántǒng", reading: "ㄔㄨㄢˊ ㄊㄨㄥˇ", french: "tradition, traditionnel", isNew: true },
      { term: "節日", romanization: "jiérì", reading: "ㄐㄧㄝˊ ㄖˋ", french: "fête, jour férié", isNew: true },
      { term: "習俗", romanization: "xísú", reading: "ㄒㄧˊ ㄙㄨˊ", french: "coutume", isNew: true },
      { term: "農曆", romanization: "nónglì", reading: "ㄋㄨㄥˊ ㄌㄧˋ", french: "calendrier lunaire", isNew: true },
      { term: "過年", romanization: "guònián", reading: "ㄍㄨㄛˋ ㄋㄧㄢˊ", french: "Nouvel An (fêter)", isNew: true },
      { term: "團圓", romanization: "tuányuán", reading: "ㄊㄨㄢˊ ㄩㄢˊ", french: "réunion de famille", isNew: true },
      { term: "紅包", romanization: "hóngbāo", reading: "ㄏㄨㄥˊ ㄅㄠ", french: "enveloppe rouge", isNew: true },
      { term: "端午節", romanization: "Duānwǔjié", reading: "ㄉㄨㄢ ㄨˇ ㄐㄧㄝˊ", french: "fête des bateaux-dragons", isNew: true },
      { term: "粽子", romanization: "zòngzi", reading: "ㄗㄨㄥˋ ㄗ˙", french: "zongzi (boulette de riz)", isNew: true },
      { term: "中秋節", romanization: "Zhōngqiūjié", reading: "ㄓㄨㄥ ㄑㄧㄡ ㄐㄧㄝˊ", french: "fête de la mi-automne", isNew: true },
      { term: "月餅", romanization: "yuèbǐng", reading: "ㄩㄝˋ ㄅㄧㄥˇ", french: "gâteau de lune", isNew: true },
      { term: "烤肉", romanization: "kǎoròu", reading: "ㄎㄠˇ ㄖㄡˋ", french: "barbecue, viande grillée", isNew: true },
    ],
    culturalNote:
      "Le barbecue de la fête de la mi-automne (中秋烤肉) est une tradition typiquement taïwanaise qui date des années 1980, popularisée par une publicité pour de la sauce barbecue. Aujourd'hui, presque toutes les familles, entreprises et groupes d'amis font un barbecue en plein air pendant le 中秋節. C'est une occasion de se retrouver, bien plus que la simple contemplation de la lune !",
  },
];
