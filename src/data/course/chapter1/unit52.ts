import type { CourseUnit } from "@/types/course";

export const unit52: CourseUnit = {
  id: "unit-52",
  number: 52,
  title: "Les couleurs et les descriptions",
  titleZh: "顏色與描述",
  chapter: 1,
  description:
    "Apprendre les couleurs, décrire des personnes et des objets avec des adjectifs de base",
  icon: "🎨",

  sections: [
    {
      title: "Les couleurs — 顏色 (yánsè)",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Les couleurs sont essentielles pour décrire le monde qui nous entoure. En chinois, les couleurs de base sont formées avec le caractère 色 (sè, couleur) ajouté après le mot décrivant la teinte. Par exemple, 紅 (hóng) signifie « rouge » et 紅色 (hóngsè) signifie « la couleur rouge ». Quand on utilise la couleur comme adjectif devant un nom, on peut omettre 色 : 紅色的花 ou 紅花 (fleur rouge).",
        },
        {
          type: "example",
          chinese: "紅色、藍色、白色",
          pinyin: "hóngsè, lánsè, báisè",
          translation: "Rouge, bleu, blanc",
          content:
            "Les trois premières couleurs à retenir. 紅色 (rouge) est LA couleur de la chance à Taiwan — on la retrouve partout : enveloppes rouges (紅包), décorations de mariage, temples. 藍色 (bleu) est une couleur neutre et apaisante. 白色 (blanc) est associé au deuil dans la culture chinoise, contrairement à l'Occident.",
        },
        {
          type: "example",
          chinese: "黑色、綠色、黃色",
          pinyin: "hēisè, lǜsè, huángsè",
          translation: "Noir, vert, jaune",
          content:
            "Trois autres couleurs fondamentales. 黑色 (noir) est souvent associé à la formalité ou au mystère. 綠色 (vert) évoque la nature — on entend souvent 綠茶 (lǜchá, thé vert) à Taiwan. Attention à la prononciation de 綠 (lǜ) avec le quatrième ton et le son « ü ». 黃色 (jaune) est historiquement la couleur impériale.",
        },
        {
          type: "text",
          content:
            "Pour décrire quelque chose avec une couleur, on utilise la structure : objet + 是 + couleur + 的. Exemple : 這個包包是紅色的 (ce sac est rouge). Mais attention : quand on utilise un adjectif simple (pas une couleur avec 色), on n'utilise PAS 是. On dit 這個包包很大, et non 這個包包是很大.",
        },
        {
          type: "example",
          chinese: "這件衣服是藍色的。",
          pinyin: "zhè jiàn yīfú shì lánsè de.",
          translation: "Ce vêtement est bleu.",
          content:
            "La structure avec 是...的 est spécifique aux couleurs et à certaines catégories. 件 (jiàn) est le classificateur pour les vêtements. À Taiwan, dans les marchés de nuit, tu entendras souvent le vendeur demander : 你要什麼顏色？(De quelle couleur tu veux ?)",
        },
        {
          type: "tip",
          content:
            "En chinois, les adjectifs fonctionnent différemment du français. Pour dire « c'est grand », on dit 很大 (hěn dà) avec l'intensifieur 很, et PAS 是大. Le verbe 是 n'est pas utilisé avec les adjectifs simples. C'est une erreur très fréquente chez les francophones débutants. Retenez : 是 + nom, 很 + adjectif.",
        },
      ],
    },
    {
      title: "Les adjectifs et les intensifieurs — 很/太/真 + adjectif",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les adjectifs courants pour décrire des personnes et des objets incluent la taille, la longueur, la hauteur et l'apparence. En chinois, les adjectifs sont souvent précédés d'un intensifieur : 很 (hěn, très), 太 (tài, trop) ou 真 (zhēn, vraiment). Sans intensifieur, un adjectif seul implique une comparaison (他高 = il est grand, sous-entendu « plus grand que quelqu'un »).",
        },
        {
          type: "example",
          chinese: "這個很大，那個很小。",
          pinyin: "zhège hěn dà, nàge hěn xiǎo.",
          translation: "Celui-ci est grand, celui-là est petit.",
          content:
            "大 (dà, grand) et 小 (xiǎo, petit) sont les adjectifs les plus fondamentaux. 很 devant l'adjectif est presque obligatoire dans une phrase simple — il a perdu une partie de son sens intensif et sert de lien grammatical. 這個很大 ne signifie pas forcément « très grand », mais simplement « c'est grand ».",
        },
        {
          type: "example",
          chinese: "她的頭髮很長，他的頭髮很短。",
          pinyin: "tā de tóufǎ hěn cháng, tā de tóufǎ hěn duǎn.",
          translation: "Ses cheveux (à elle) sont longs, ses cheveux (à lui) sont courts.",
          content:
            "長 (cháng, long) et 短 (duǎn, court) décrivent la longueur. Attention : 長 se prononce aussi zhǎng dans d'autres contextes (ex : 長大 = grandir). Ici, avec le sens de « long », c'est cháng.",
        },
        {
          type: "example",
          chinese: "他很高，我很矮。",
          pinyin: "tā hěn gāo, wǒ hěn ǎi.",
          translation: "Il est grand (taille), je suis petit(e).",
          content:
            "高 (gāo, grand/haut) et 矮 (ǎi, petit de taille) décrivent la stature. Attention à ne pas confondre 高 (gāo, taille physique) et 大 (dà, taille d'un objet). Une personne est 高, un objet est 大.",
        },
        {
          type: "example",
          chinese: "她真漂亮！",
          pinyin: "tā zhēn piàoliang!",
          translation: "Elle est vraiment jolie !",
          content:
            "漂亮 (piàoliang) signifie « joli, beau » et s'utilise surtout pour les personnes et les choses. 真 (zhēn) exprime une réaction sincère : « vraiment ! ». On entend aussi 好看 (hǎokàn) qui signifie « beau à regarder » — 好看 est plus polyvalent et s'utilise pour les personnes, les films, les livres, etc.",
        },
        {
          type: "example",
          chinese: "這件衣服太好看了！",
          pinyin: "zhè jiàn yīfú tài hǎokàn le!",
          translation: "Ce vêtement est trop beau !",
          content:
            "太...了 est une structure exclamative qui exprime un degré excessif. 太好看了 = trop beau ! 太大了 = trop grand ! En langage courant à Taiwan, 太...了 est souvent utilisé de manière positive, comme « tellement » en français familier.",
        },
        {
          type: "comparison",
          content:
            "Comparons les trois intensifieurs : 很大 (grand — neutre), 真大 (vraiment grand — surprise/admiration), 太大了 (trop grand — excessif ou exclamatif). 很 est neutre et quasi obligatoire, 真 exprime l'émotion, 太...了 exprime l'excès ou l'enthousiasme.",
        },
        {
          type: "tip",
          content:
            "À Taiwan, pour complimenter quelqu'un, on utilise souvent 真 + adjectif : 你真漂亮！(Tu es vraiment jolie !), 你真厲害！(Tu es vraiment impressionnant !). Les Taiwanais sont généralement assez directs dans les compliments entre amis.",
        },
      ],
    },
    {
      title: "Couleurs et symbolisme à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Les couleurs ont une symbolique forte dans la culture taiwanaise, souvent différente de celle en Occident. Comprendre ces associations est essentiel pour éviter les malentendus culturels, notamment lors de cadeaux, de cérémonies ou dans la vie quotidienne.",
        },
        {
          type: "example",
          chinese: "紅色代表好運。",
          pinyin: "hóngsè dàibiǎo hǎoyùn.",
          translation: "Le rouge symbolise la chance.",
          content:
            "Le rouge est LA couleur la plus importante en culture chinoise. Les enveloppes rouges (紅包, hóngbāo) contiennent de l'argent pour le Nouvel An, les mariages et les occasions spéciales. Les décorations de fête sont rouges, les temples sont rouges. Si tu dois choisir une couleur pour un cadeau d'emballage, choisis le rouge — c'est toujours un bon choix.",
        },
        {
          type: "example",
          chinese: "白色是喪事的顏色。",
          pinyin: "báisè shì sāngshì de yánsè.",
          translation: "Le blanc est la couleur du deuil.",
          content:
            "Contrairement à l'Occident où le blanc symbolise la pureté (mariage), en culture chinoise, le blanc est la couleur du deuil et des funérailles. Ne jamais offrir un cadeau emballé de blanc à un Taiwanais — cela évoque la mort. De même, évite d'écrire le nom de quelqu'un en encre blanche, car cela rappelle les rites funéraires.",
        },
        {
          type: "example",
          chinese: "黃色以前是皇帝的顏色。",
          pinyin: "huángsè yǐqián shì huángdì de yánsè.",
          translation: "Le jaune était autrefois la couleur de l'empereur.",
          content:
            "Le jaune symbolise la royauté et le prestige dans la tradition chinoise. Les toits des palais impériaux sont jaunes. Aujourd'hui, le jaune reste une couleur noble, bien que la symbolique impériale se soit atténuée dans la vie quotidienne à Taiwan.",
        },
        {
          type: "text",
          content:
            "Le noir (黑色) est considéré comme une couleur sérieuse et formelle. Le vert (綠色) peut avoir une connotation négative dans l'expression 戴綠帽子 (dài lǜ màozi, porter un chapeau vert) qui signifie être trompé par son conjoint — évite donc d'offrir un chapeau vert ! Le bleu (藍色) est globalement neutre et moderne.",
        },
        {
          type: "tip",
          content:
            "Quand tu fais tes courses au marché de nuit à Taiwan, savoir décrire les couleurs est très pratique. Pour demander une autre couleur : 有沒有紅色的？(Avez-vous en rouge ?) ou 我要藍色的 (Je veux le bleu). Les vendeurs seront ravis que tu puisses préciser en mandarin !",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Sophie fait du shopping au marché de nuit de Shilin (士林夜市) à Taipei. Elle cherche un cadeau pour une amie taiwanaise. Le vendeur l'aide à choisir.",
    lines: [
      {
        speaker: "老闆",
        chinese: "小姐，你要看什麼？",
        pinyin: "xiǎojiě, nǐ yào kàn shénme?",
        french: "Mademoiselle, qu'est-ce que vous voulez regarder ?",
        note: "老闆 (lǎobǎn) = patron/vendeur, 小姐 = mademoiselle.",
      },
      {
        speaker: "Sophie",
        chinese: "我想買一件衣服。有沒有紅色的？",
        pinyin: "wǒ xiǎng mǎi yì jiàn yīfú. yǒu méiyǒu hóngsè de?",
        french: "Je voudrais acheter un vêtement. Avez-vous du rouge ?",
        note: "件 est le classificateur pour les vêtements.",
      },
      {
        speaker: "老闆",
        chinese: "有！紅色、藍色、黑色都有。你看，這件紅色的很漂亮！",
        pinyin:
          "yǒu! hóngsè, lánsè, hēisè dōu yǒu. nǐ kàn, zhè jiàn hóngsè de hěn piàoliang!",
        french:
          "Oui ! Rouge, bleu, noir, on a tout. Regarde, cette rouge est très jolie !",
        note: "都有 = on a tout / tout est disponible.",
      },
      {
        speaker: "Sophie",
        chinese: "真好看！可是太大了。有沒有小一點的？",
        pinyin: "zhēn hǎokàn! kěshì tài dà le. yǒu méiyǒu xiǎo yìdiǎn de?",
        french: "Vraiment joli ! Mais c'est trop grand. Vous en avez un plus petit ?",
        note: "小一點的 = un peu plus petit — structure très utile pour comparer.",
      },
      {
        speaker: "老闆",
        chinese: "有，你看這件。大小剛好，顏色也很好看。",
        pinyin: "yǒu, nǐ kàn zhè jiàn. dàxiǎo gānghǎo, yánsè yě hěn hǎokàn.",
        french: "Oui, regarde celle-ci. La taille est parfaite, et la couleur est belle aussi.",
        note: "剛好 (gānghǎo) = juste bien, parfait.",
      },
      {
        speaker: "Sophie",
        chinese: "這是送給我台灣朋友的禮物。紅色好不好？",
        pinyin: "zhè shì sòng gěi wǒ táiwān péngyǒu de lǐwù. hóngsè hǎo bù hǎo?",
        french: "C'est un cadeau pour mon amie taiwanaise. Le rouge, c'est bien ?",
      },
      {
        speaker: "老闆",
        chinese: "紅色很好！在台灣，紅色代表好運。你的朋友一定很開心！",
        pinyin:
          "hóngsè hěn hǎo! zài táiwān, hóngsè dàibiǎo hǎoyùn. nǐ de péngyǒu yídìng hěn kāixīn!",
        french:
          "Le rouge, c'est très bien ! À Taiwan, le rouge symbolise la chance. Ton amie sera sûrement très contente !",
        note: "一定 (yídìng) = certainement, sûrement.",
      },
    ],
  },

  keyPoints: [
    "Les couleurs de base : 紅色 (rouge), 藍色 (bleu), 白色 (blanc), 黑色 (noir), 綠色 (vert), 黃色 (jaune)",
    "Les adjectifs ne s'utilisent PAS avec 是 — on dit 很大, pas 是大",
    "Trois intensifieurs : 很 (neutre), 真 (vraiment/émotion), 太...了 (trop/exclamatif)",
    "Le rouge symbolise la chance à Taiwan, le blanc est la couleur du deuil — attention aux cadeaux !",
  ],

  vocabulary: [
    {
      character: "紅色",
      pinyin: "hóngsè",
      zhuyin: "ㄏㄨㄥˊ ㄙㄜˋ",
      french: "Rouge",
      english: "Red",
      example: {
        sentence: "她喜歡紅色的花。",
        pinyin: "tā xǐhuān hóngsè de huā.",
        translation: "Elle aime les fleurs rouges.",
      },
    },
    {
      character: "藍色",
      pinyin: "lánsè",
      zhuyin: "ㄌㄢˊ ㄙㄜˋ",
      french: "Bleu",
      english: "Blue",
      example: {
        sentence: "天空是藍色的。",
        pinyin: "tiānkōng shì lánsè de.",
        translation: "Le ciel est bleu.",
      },
    },
    {
      character: "白色",
      pinyin: "báisè",
      zhuyin: "ㄅㄞˊ ㄙㄜˋ",
      french: "Blanc",
      english: "White",
      example: {
        sentence: "他穿白色的衣服。",
        pinyin: "tā chuān báisè de yīfú.",
        translation: "Il porte un vêtement blanc.",
      },
    },
    {
      character: "黑色",
      pinyin: "hēisè",
      zhuyin: "ㄏㄟ ㄙㄜˋ",
      french: "Noir",
      english: "Black",
      example: {
        sentence: "我的包包是黑色的。",
        pinyin: "wǒ de bāobāo shì hēisè de.",
        translation: "Mon sac est noir.",
      },
    },
    {
      character: "綠色",
      pinyin: "lǜsè",
      zhuyin: "ㄌㄩˋ ㄙㄜˋ",
      french: "Vert",
      english: "Green",
      example: {
        sentence: "我喜歡喝綠茶。",
        pinyin: "wǒ xǐhuān hē lǜchá.",
        translation: "J'aime boire du thé vert.",
      },
    },
    {
      character: "黃色",
      pinyin: "huángsè",
      zhuyin: "ㄏㄨㄤˊ ㄙㄜˋ",
      french: "Jaune",
      english: "Yellow",
      example: {
        sentence: "這朵花是黃色的。",
        pinyin: "zhè duǒ huā shì huángsè de.",
        translation: "Cette fleur est jaune.",
      },
    },
    {
      character: "大",
      pinyin: "dà",
      zhuyin: "ㄉㄚˋ",
      french: "Grand (taille)",
      english: "Big / Large",
      example: {
        sentence: "這個房間很大。",
        pinyin: "zhège fángjiān hěn dà.",
        translation: "Cette chambre est grande.",
      },
    },
    {
      character: "小",
      pinyin: "xiǎo",
      zhuyin: "ㄒㄧㄠˇ",
      french: "Petit",
      english: "Small / Little",
      example: {
        sentence: "他的狗很小。",
        pinyin: "tā de gǒu hěn xiǎo.",
        translation: "Son chien est petit.",
      },
    },
    {
      character: "長",
      pinyin: "cháng",
      zhuyin: "ㄔㄤˊ",
      french: "Long",
      english: "Long",
      example: {
        sentence: "這條路很長。",
        pinyin: "zhè tiáo lù hěn cháng.",
        translation: "Cette route est longue.",
      },
    },
    {
      character: "短",
      pinyin: "duǎn",
      zhuyin: "ㄉㄨㄢˇ",
      french: "Court",
      english: "Short (length)",
      example: {
        sentence: "她的頭髮很短。",
        pinyin: "tā de tóufǎ hěn duǎn.",
        translation: "Ses cheveux sont courts.",
      },
    },
    {
      character: "高",
      pinyin: "gāo",
      zhuyin: "ㄍㄠ",
      french: "Grand (taille/hauteur)",
      english: "Tall / High",
      example: {
        sentence: "台北101很高。",
        pinyin: "táiběi yī líng yī hěn gāo.",
        translation: "Taipei 101 est très haut.",
      },
    },
    {
      character: "漂亮",
      pinyin: "piàoliang",
      zhuyin: "ㄆㄧㄠˋ ㄌㄧㄤˋ",
      french: "Joli / Beau",
      english: "Pretty / Beautiful",
      example: {
        sentence: "這個地方很漂亮。",
        pinyin: "zhège dìfāng hěn piàoliang.",
        translation: "Cet endroit est très joli.",
      },
    },
    {
      character: "好看",
      pinyin: "hǎokàn",
      zhuyin: "ㄏㄠˇ ㄎㄢˋ",
      french: "Beau / Joli (à regarder)",
      english: "Good-looking",
      example: {
        sentence: "這部電影很好看。",
        pinyin: "zhè bù diànyǐng hěn hǎokàn.",
        translation: "Ce film est très bon (à regarder).",
      },
    },
    {
      character: "新",
      pinyin: "xīn",
      zhuyin: "ㄒㄧㄣ",
      french: "Nouveau / Neuf",
      english: "New",
      example: {
        sentence: "這是我的新手機。",
        pinyin: "zhè shì wǒ de xīn shǒujī.",
        translation: "C'est mon nouveau téléphone.",
      },
    },
    {
      character: "舊",
      pinyin: "jiù",
      zhuyin: "ㄐㄧㄡˋ",
      french: "Vieux / Ancien",
      english: "Old (things)",
      example: {
        sentence: "這件衣服太舊了。",
        pinyin: "zhè jiàn yīfú tài jiù le.",
        translation: "Ce vêtement est trop vieux.",
      },
    },
  ],

  exercises: [
    {
      id: "u52-ex1",
      type: "comprehension",
      question:
        "Quelle couleur symbolise la chance à Taiwan et est utilisée pour les enveloppes lors du Nouvel An ?",
      correctAnswer: "紅色 (rouge)",
      options: [
        "紅色 (rouge)",
        "黃色 (jaune)",
        "白色 (blanc)",
        "藍色 (bleu)",
      ],
    },
    {
      id: "u52-ex2",
      type: "fill-blank",
      question: "這件衣服___漂亮。(Ce vêtement est joli.)",
      correctAnswer: "很",
      options: ["很", "是", "有", "在"],
      optionsHint: ["hěn", "shì", "yǒu", "zài"],
      optionsZhuyin: ["ㄏㄣˇ", "ㄕˋ", "ㄧㄡˇ", "ㄗㄞˋ"],
      hint: "Quel mot utilise-t-on devant un adjectif à la place de 是 ?",
    },
    {
      id: "u52-ex3",
      type: "translate",
      question: "Que signifie 這件衣服太大了 ?",
      correctAnswer: "Ce vêtement est trop grand.",
      options: [
        "Ce vêtement est trop grand.",
        "Ce vêtement est très grand.",
        "Ce vêtement est vraiment grand.",
        "Ce vêtement n'est pas grand.",
      ],
    },
    {
      id: "u52-ex4",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 天空是藍色的。",
      correctAnswer: "Le ciel est bleu.",
      options: [
        "Le ciel est bleu.",
        "Le ciel est blanc.",
        "La mer est bleue.",
        "Le ciel est très beau.",
      ],
    },
    {
      id: "u52-ex5",
      type: "comprehension",
      question:
        "Pourquoi ne faut-il PAS offrir un cadeau emballé de blanc à un Taiwanais ?",
      correctAnswer:
        "Parce que le blanc est la couleur du deuil et des funérailles dans la culture chinoise",
      options: [
        "Parce que le blanc est la couleur du deuil et des funérailles dans la culture chinoise",
        "Parce que le blanc est considéré comme une couleur laide à Taiwan",
        "Parce que les Taiwanais préfèrent le rouge pour tous les cadeaux",
        "Parce que le blanc symbolise la pauvreté",
      ],
    },
    {
      id: "u52-ex6",
      type: "fill-blank",
      question: "她___漂亮！(Elle est vraiment jolie !)",
      correctAnswer: "真",
      options: ["真", "很", "太", "好"],
      optionsHint: ["zhēn", "hěn", "tài", "hǎo"],
      optionsZhuyin: ["ㄓㄣ", "ㄏㄣˇ", "ㄊㄞˋ", "ㄏㄠˇ"],
      hint: "Quel intensifieur exprime l'admiration ou la surprise sincère ?",
    },
    {
      id: "u52-ex7",
      type: "translate",
      question: "Comment dire « Avez-vous du rouge ? » au marché ?",
      correctAnswer: "有沒有紅色的？",
      options: [
        "有沒有紅色的？",
        "你是紅色嗎？",
        "紅色很好看嗎？",
        "我要看紅色。",
      ],
    },
    {
      id: "u52-ex8",
      type: "comprehension",
      question:
        "Quelle est la différence entre 高 (gāo) et 大 (dà) ?",
      correctAnswer:
        "高 décrit la taille/hauteur d'une personne, 大 décrit la taille d'un objet",
      options: [
        "高 décrit la taille/hauteur d'une personne, 大 décrit la taille d'un objet",
        "高 est pour les choses grandes, 大 est pour les choses petites",
        "Il n'y a pas de différence, ce sont des synonymes",
        "高 signifie cher et 大 signifie grand",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-07"],
};
