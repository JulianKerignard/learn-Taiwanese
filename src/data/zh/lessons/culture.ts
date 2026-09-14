import type { Lesson } from "@/types";
import type { CourseSection } from "@/types/course";

const sections: CourseSection[] = [
  {
    title: "Les fêtes traditionnelles",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "Le Nouvel An chinois (過年, guònián ou 春節, chūnjié) est LA fête la plus importante de l'année à Taiwan — et de loin. C'est l'équivalent de Noël, du Nouvel An et de Thanksgiving combinés. La date change chaque année (entre fin janvier et mi-février) car elle suit le calendrier lunaire. Les préparatifs commencent des semaines à l'avance : grand ménage (大掃除, dà sǎochú — on nettoie pour chasser les mauvais esprits), shopping (acheter des vêtements neufs, idéalement rouges), et préparation des plats traditionnels. Les jours précédant le Nouvel An, Taiwan se vide : des millions de personnes rentrent dans leur ville natale (返鄉, fǎnxiāng) pour le réveillon en famille, créant le plus grand mouvement de population de l'année.",
      },
      {
        type: "text",
        content:
          "Le réveillon du Nouvel An (除夕, chúxī) est centré sur le 年夜飯 (nián yè fàn, dîner du réveillon). Toute la famille élargie se réunit autour d'une table ronde couverte de plats symboliques : du poisson entier (年年有餘, nián nián yǒu yú, « abondance chaque année » — 魚 yú sonne comme 餘 yú, surplus), des raviolis (餃子, jiǎozi), des gâteaux de riz glutineux (年糕, niángāo, « croissance/progrès chaque année » car 糕 gāo sonne comme 高 gāo, haut). Après le repas, les aînés distribuent les 紅包 (hóngbāo, enveloppes rouges) aux enfants et aux jeunes célibataires — elles contiennent de l'argent (toujours un nombre pair, jamais un montant avec 4). Rester éveillé toute la nuit (守歲, shǒusuì) est une tradition pour souhaiter longue vie aux parents.",
      },
      {
        type: "example",
        content: "Souhaiter un bon Nouvel An",
        native: "新年快樂！恭喜發財！",
        romanization: "Xīnnián kuàilè! Gōngxǐ fācái!",
        translation:
          "Bonne année ! Félicitations et prospérité !",
      },
      {
        type: "text",
        content:
          "La Fête de la Mi-Automne (中秋節, zhōngqiū jié) tombe le 15e jour du 8e mois lunaire (généralement en septembre). Traditionnellement, c'est la fête de la pleine lune, de la réunion familiale et des 月餅 (yuèbǐng, gâteaux de lune). Mais à Taiwan, le 中秋節 a une particularité unique : le BBQ (烤肉, kǎoròu) ! Cette tradition n'existe pas en Chine continentale — elle est née à Taiwan dans les années 1980 suite à une campagne publicitaire pour de la sauce barbecue. Aujourd'hui, le soir du 中秋節, toute l'île fait un barbecue en plein air : devant les maisons, dans les parcs, sur les trottoirs. L'odeur de viande grillée envahit les rues. C'est festif, convivial, et très taiwanais.",
      },
      {
        type: "text",
        content:
          "La Fête des Bateaux-Dragons (端午節, duānwǔ jié) a lieu le 5e jour du 5e mois lunaire (mai-juin). Elle commémore la mort du poète Qu Yuan (屈原) qui se jeta dans une rivière. Pour empêcher les poissons de manger son corps, les villageois jetèrent des 粽子 (zòngzi, raviolis de riz glutineux enveloppés dans des feuilles de bambou) dans l'eau et naviguèrent en bateaux-dragons pour effrayer les poissons. Aujourd'hui, on mange des 粽子 (chaque famille a sa recette, et le débat nord vs sud du 粽子 est aussi passionné que le débat chocolatine vs pain au chocolat) et on regarde les courses de bateaux-dragons. La Fête des Lanternes (元宵節, yuánxiāo jié) clôt les festivités du Nouvel An avec des lanternes spectaculaires et des 湯圓 (tāngyuán, boulettes de riz glutineux sucrées).",
      },
      {
        type: "tip",
        content:
          "Pendant le Nouvel An chinois, tout ferme : restaurants, magasins, transports. Préparez-vous en faisant des courses à l'avance. Les congés durent environ une semaine. C'est aussi la période la plus chère pour voyager. Si vous êtes invité au réveillon d'une famille taiwanaise, apportez des fruits de qualité, ne portez pas de blanc ou noir (couleurs de deuil), et préparez des 紅包 pour les enfants de la famille.",
      },
    ],
  },
  {
    title: "Religion et temples",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "La religion à Taiwan est un mélange syncrétique fascinant de bouddhisme (佛教, fójiào), de taoïsme (道教, dàojiào) et de croyances populaires folkloriques (民間信仰, mínjiān xìnyǎng). La plupart des Taiwanais ne se considèrent pas comme strictement bouddhistes ou taoïstes — ils pratiquent un peu des deux, plus les traditions locales, sans contradiction aucune. Un même temple peut honorer des divinités bouddhistes, taoïstes et folkloriques sous le même toit. Cette tolérance religieuse est une caractéristique fondamentale de la culture taiwanaise. Environ 35% des Taiwanais pratiquent cette religion mixte, 35% sont bouddhistes, 33% taoïstes, et environ 5% sont chrétiens.",
      },
      {
        type: "text",
        content:
          "La pratique religieuse la plus visible au quotidien est le 拜拜 (bàibài, prier / faire une offrande). Le 拜拜 consiste à brûler de l'encens (香, xiāng), à faire des offrandes de nourriture et de « ghost money » (紙錢, zhǐqián, papier-monnaie rituel), et à s'incliner devant les divinités. On fait le 拜拜 dans les temples, mais aussi devant le petit autel que beaucoup de familles et de commerces ont chez eux ou dans leur boutique. Les jours de 拜拜 importants sont le 1er et le 15e jour de chaque mois lunaire. Les offrandes typiques : fruits (surtout les pommes, les oranges et les ananas — 鳳梨, fènglí, dont le nom en taiwanais sonne comme « prospérité »), gâteaux, viande, et encens.",
      },
      {
        type: "text",
        content:
          "媽祖 (Māzǔ) est la déesse la plus vénérée à Taiwan. Déesse de la mer, protectrice des pêcheurs et des marins, elle est célébrée lors du pèlerinage annuel de Dajia Mazu (大甲媽祖遶境, Dàjiǎ Māzǔ ràojìng), une procession de 9 jours et 340 km à pied qui attire des centaines de milliers de fidèles. C'est l'un des plus grands rassemblements religieux au monde, souvent comparé au Camino de Santiago. Même si vous n'êtes pas croyant, assister au passage de la procession est une expérience culturelle inoubliable : les pétards, la musique, les offrandes de nourriture gratuite le long du chemin, et l'énergie collective des fidèles.",
      },
      {
        type: "example",
        content: "Au temple",
        native: "我們去廟裡拜拜吧。",
        romanization: "Wǒmen qù miào lǐ bàibài ba.",
        translation: "Allons prier au temple.",
      },
      {
        type: "example",
        content: "Demander la bénédiction",
        native: "保佑我們全家平安。",
        romanization: "Bǎoyòu wǒmen quánjiā píng'ān.",
        translation: "Protégez toute notre famille et gardez-la en paix.",
      },
      {
        type: "warning",
        content:
          "Règles de base dans un temple taiwanais : ne passez pas par la porte centrale (réservée aux dieux), entrez par la droite et sortez par la gauche. Ne pointez pas les statues du doigt. Ne photographiez pas sans permission. Habillez-vous décemment (pas de shorts trop courts ni de débardeurs). Si vous voulez brûler de l'encens, regardez d'abord comment font les autres et imitez-les — ou demandez poliment au gardien du temple.",
      },
      {
        type: "tip",
        content:
          "Même si vous n'êtes pas croyant, visiter les temples taiwanais est une expérience culturelle majeure. Les temples les plus emblématiques : 龍山寺 (Lóngshān Sì, Longshan Temple) à Taipei, 鹿港天后宮 (Lùgǎng Tiānhòu Gōng) à Lukang, et 佛光山 (Fóguāng Shān, Fo Guang Shan) à Kaohsiung — l'un des plus grands monastères bouddhistes du monde.",
      },
    ],
  },
  {
    title: "Taiwan et la Chine continentale — Les différences",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Bien que Taiwan et la Chine continentale partagent des racines culturelles et linguistiques communes, les différences sont profondes et touchent tous les aspects de la vie quotidienne. Comprendre ces différences est essentiel pour naviguer à Taiwan sans commettre de maladresses culturelles. La plus visible : l'écriture. Taiwan utilise les caractères traditionnels (繁體字, fántǐzì), la Chine les caractères simplifiés (簡體字, jiǎntǐzì). Exemple : « dragon » s'écrit 龍 à Taiwan et 龙 en Chine. « Écouter » s'écrit 聽 à Taiwan et 听 en Chine. Les Taiwanais sont fiers de leurs caractères traditionnels et considèrent la simplification comme une perte culturelle.",
      },
      {
        type: "comparison",
        content:
          "Prononciation taiwanaise vs chinoise : Taiwan utilise le Zhuyin (ㄅㄆㄇㄈ), la Chine utilise le Pinyin. Le mandarin taiwanais a des prononciations distinctes : 垃圾 se dit « lèsè » à Taiwan et « lājī » en Chine. 和 se prononce souvent « hàn » à Taiwan et « hé » en Chine. Le mandarin taiwanais est généralement plus doux, plus lent, avec moins de rétroflexes (zh, ch, sh, r) prononcés. Le « erhua » (ajout de « r » en fin de syllabe) courant à Pékin est quasi absent à Taiwan.",
      },
      {
        type: "text",
        content:
          "Au-delà de la langue, les différences culturelles et politiques sont majeures. Taiwan est une démocratie libérale depuis les années 1990, avec liberté de presse, d'expression et de réunion. La Chine est un état autoritaire à parti unique. Les Taiwanais ont accès à Internet sans restriction — Google, Facebook, YouTube, Instagram fonctionnent normalement. Le mariage homosexuel est légal à Taiwan depuis 2019 (une première en Asie). L'identité taiwanaise est un sujet sensible : de plus en plus de Taiwanais s'identifient comme « Taiwanais » plutôt que « Chinois », et cette distinction est importante pour eux.",
      },
      {
        type: "text",
        content:
          "Les différences culturelles du quotidien : les Taiwanais utilisent le yuan taiwanais (新台幣, Xīn Táibì, NT$) et non le yuan chinois (人民幣, Rénmínbì, RMB). Le système de paiement principal est les espèces et les cartes, pas WeChat Pay ou Alipay. On utilise LINE au lieu de WeChat. Le calendrier officiel à Taiwan suit l'ère de la République (民國, Mínguó) : 2025 correspond à l'an 114 de la République de Chine (中華民國, Zhōnghuá Mínguó). Vous verrez cette numérotation sur les documents officiels et les dates de péremption.",
      },
      {
        type: "example",
        content: "L'identité taiwanaise",
        native: "我是台灣人。",
        romanization: "Wǒ shì Táiwān rén.",
        translation: "Je suis Taiwanais(e).",
      },
      {
        type: "warning",
        content:
          "Le sujet de la relation Taiwan-Chine est extrêmement sensible. Ne dites JAMAIS que Taiwan fait partie de la Chine (台灣是中國的一部分) devant un Taiwanais — c'est offensant pour la majorité d'entre eux. Évitez aussi de comparer constamment Taiwan à la Chine. Taiwan est Taiwan. Traitez-le comme un pays à part entière (même si le statut diplomatique est compliqué), respectez l'identité taiwanaise, et vous serez bien accueilli.",
      },
      {
        type: "tip",
        content:
          "Le nom officiel complet de Taiwan est 中華民國 (Zhōnghuá Mínguó, République de Chine), à ne pas confondre avec 中華人民共和國 (Zhōnghuá Rénmín Gònghéguó, République Populaire de Chine). Au quotidien, les gens disent simplement 台灣 (Táiwān). Si on vous demande d'où vous venez et que vous répondez 法國 (Fǎguó, France), la réaction sera presque toujours enthousiaste — les Taiwanais adorent la France (la culture, la cuisine, Paris, le vin).",
      },
    ],
  },
];

const cultureLesson: Lesson = {
  id: "lesson-10",
  slug: "culture",
  title: "La culture taiwanaise",
  titleNative: "台灣文化",
  description:
    "Plongez dans les fêtes traditionnelles, la religion et l'identité culturelle unique de Taiwan.",
  icon: "🏯",
  category: "culture",
  order: 10,
  sections,
  vocabulary: [
    {
      term: "節日",
      romanization: "jiérì",
      reading: "ㄐㄧㄝˊ ㄖˋ",
      french: "Fête / Jour férié",
      english: "Festival / Holiday",
      example: {
        sentence: "台灣有很多傳統節日。",
        romanization: "Táiwān yǒu hěn duō chuántǒng jiérì.",
        translation: "Taiwan a beaucoup de fêtes traditionnelles.",
      },
    },
    {
      term: "過年",
      romanization: "guònián",
      reading: "ㄍㄨㄛˋ ㄋㄧㄢˊ",
      french: "Fêter le Nouvel An chinois",
      english: "To celebrate Chinese New Year",
      example: {
        sentence: "過年的時候全家人會團聚。",
        romanization: "Guònián de shíhòu quánjiā rén huì tuánjù.",
        translation: "Pendant le Nouvel An, toute la famille se réunit.",
      },
    },
    {
      term: "紅包",
      romanization: "hóngbāo",
      reading: "ㄏㄨㄥˊ ㄅㄠ",
      french: "Enveloppe rouge (avec de l'argent)",
      english: "Red envelope",
      example: {
        sentence: "過年長輩會給小孩紅包。",
        romanization: "Guònián zhǎngbèi huì gěi xiǎohái hóngbāo.",
        translation:
          "Pendant le Nouvel An, les aînés donnent des enveloppes rouges aux enfants.",
      },
    },
    {
      term: "月餅",
      romanization: "yuèbǐng",
      reading: "ㄩㄝˋ ㄅㄧㄥˇ",
      french: "Gâteau de lune",
      english: "Moon cake",
      example: {
        sentence: "中秋節要吃月餅。",
        romanization: "Zhōngqiū jié yào chī yuèbǐng.",
        translation: "À la Fête de la Mi-Automne, on mange des gâteaux de lune.",
      },
    },
    {
      term: "廟",
      romanization: "miào",
      reading: "ㄇㄧㄠˋ",
      french: "Temple",
      english: "Temple",
      example: {
        sentence: "這座廟已經有三百年的歷史了。",
        romanization: "Zhè zuò miào yǐjīng yǒu sānbǎi nián de lìshǐ le.",
        translation: "Ce temple a déjà 300 ans d'histoire.",
      },
    },
    {
      term: "拜拜",
      romanization: "bàibài",
      reading: "ㄅㄞˋ ㄅㄞˋ",
      french: "Prier / Faire une offrande",
      english: "To pray / To worship",
      example: {
        sentence: "初一十五要拜拜。",
        romanization: "Chūyī shíwǔ yào bàibài.",
        translation: "On prie le 1er et le 15 de chaque mois lunaire.",
      },
    },
    {
      term: "傳統",
      romanization: "chuántǒng",
      reading: "ㄔㄨㄢˊ ㄊㄨㄥˇ",
      french: "Traditionnel / Tradition",
      english: "Traditional / Tradition",
      example: {
        sentence: "這是台灣的傳統文化。",
        romanization: "Zhè shì Táiwān de chuántǒng wénhuà.",
        translation: "C'est la culture traditionnelle de Taiwan.",
      },
    },
    {
      term: "習俗",
      romanization: "xísú",
      reading: "ㄒㄧˊ ㄙㄨˊ",
      french: "Coutume / Usage",
      english: "Custom / Tradition",
      example: {
        sentence: "每個地方有不同的習俗。",
        romanization: "Měi ge dìfāng yǒu bùtóng de xísú.",
        translation: "Chaque endroit a ses propres coutumes.",
      },
    },
    {
      term: "文化",
      romanization: "wénhuà",
      reading: "ㄨㄣˊ ㄏㄨㄚˋ",
      french: "Culture",
      english: "Culture",
      example: {
        sentence: "台灣文化很豐富。",
        romanization: "Táiwān wénhuà hěn fēngfù.",
        translation: "La culture taiwanaise est très riche.",
      },
    },
    {
      term: "歷史",
      romanization: "lìshǐ",
      reading: "ㄌㄧˋ ㄕˇ",
      french: "Histoire",
      english: "History",
      example: {
        sentence: "台灣有很長的歷史。",
        romanization: "Táiwān yǒu hěn cháng de lìshǐ.",
        translation: "Taiwan a une longue histoire.",
      },
    },
    {
      term: "放假",
      romanization: "fàngjià",
      reading: "ㄈㄤˋ ㄐㄧㄚˋ",
      french: "Avoir congé / Vacances",
      english: "To have a holiday",
      example: {
        sentence: "過年放假一個禮拜。",
        romanization: "Guònián fàngjià yí ge lǐbài.",
        translation: "On a une semaine de congé pour le Nouvel An.",
      },
    },
    {
      term: "慶祝",
      romanization: "qìngzhù",
      reading: "ㄑㄧㄥˋ ㄓㄨˋ",
      french: "Célébrer / Fêter",
      english: "To celebrate",
      example: {
        sentence: "我們一起慶祝吧！",
        romanization: "Wǒmen yìqǐ qìngzhù ba!",
        translation: "Célébrons ensemble !",
      },
    },
    {
      term: "祝福",
      romanization: "zhùfú",
      reading: "ㄓㄨˋ ㄈㄨˊ",
      french: "Bénédiction / Souhaiter",
      english: "Blessing / To wish well",
      example: {
        sentence: "祝福你一切順利！",
        romanization: "Zhùfú nǐ yíqiè shùnlì!",
        translation: "Je te souhaite que tout se passe bien !",
      },
    },
    {
      term: "台灣人",
      romanization: "Táiwān rén",
      reading: "ㄊㄞˊ ㄨㄢ ㄖㄣˊ",
      french: "Taiwanais(e)",
      english: "Taiwanese person",
      example: {
        sentence: "台灣人很友善。",
        romanization: "Táiwān rén hěn yǒushàn.",
        translation: "Les Taiwanais sont très accueillants.",
      },
    },
    {
      term: "中華民國",
      romanization: "Zhōnghuá Mínguó",
      reading: "ㄓㄨㄥ ㄏㄨㄚˊ ㄇㄧㄣˊ ㄍㄨㄛˊ",
      french: "République de Chine (nom officiel de Taiwan)",
      english: "Republic of China (Taiwan's official name)",
      example: {
        sentence: "中華民國的首都是台北。",
        romanization: "Zhōnghuá Mínguó de shǒudū shì Táiběi.",
        translation: "La capitale de la République de Chine est Taipei.",
      },
    },
  ],
  phrases: [
    {
      native: "新年快樂！",
      romanization: "Xīnnián kuàilè!",
      reading: "ㄒㄧㄣ ㄋㄧㄢˊ ㄎㄨㄞˋ ㄌㄜˋ",
      french: "Bonne année !",
      english: "Happy New Year!",
      context: "Pour le Nouvel An chinois (pas le 1er janvier).",
    },
    {
      native: "恭喜發財！",
      romanization: "Gōngxǐ fācái!",
      reading: "ㄍㄨㄥ ㄒㄧˇ ㄈㄚ ㄘㄞˊ",
      french: "Félicitations et prospérité !",
      english: "Congratulations and prosperity!",
      context: "Le voeu classique du Nouvel An chinois.",
    },
    {
      native: "中秋節快樂！",
      romanization: "Zhōngqiū jié kuàilè!",
      reading: "ㄓㄨㄥ ㄑㄧㄡ ㄐㄧㄝˊ ㄎㄨㄞˋ ㄌㄜˋ",
      french: "Joyeuse Fête de la Mi-Automne !",
      english: "Happy Mid-Autumn Festival!",
    },
    {
      native: "我們去廟裡拜拜吧。",
      romanization: "Wǒmen qù miào lǐ bàibài ba.",
      reading: "ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ ㄇㄧㄠˋ ㄌㄧˇ ㄅㄞˋ ㄅㄞˋ ㄅㄚ˙",
      french: "Allons prier au temple.",
      english: "Let's go pray at the temple.",
    },
    {
      native: "你們過年怎麼過？",
      romanization: "Nǐmen guònián zěnme guò?",
      reading: "ㄋㄧˇ ㄇㄣ˙ ㄍㄨㄛˋ ㄋㄧㄢˊ ㄗㄣˇ ㄇㄜ˙ ㄍㄨㄛˋ",
      french: "Comment fêtez-vous le Nouvel An ?",
      english: "How do you celebrate New Year?",
      context: "Bonne question pour apprendre les traditions locales.",
    },
    {
      native: "台灣的文化很有意思。",
      romanization: "Táiwān de wénhuà hěn yǒu yìsi.",
      reading: "ㄊㄞˊ ㄨㄢ ㄉㄜ˙ ㄨㄣˊ ㄏㄨㄚˋ ㄏㄣˇ ㄧㄡˇ ㄧˋ ㄙ˙",
      french: "La culture taiwanaise est très intéressante.",
      english: "Taiwanese culture is very interesting.",
    },
  ],
  culturalNotes: [
    "Le Nouvel An chinois (過年) est la fête la plus importante. Toute la famille se réunit pour le 年夜飯 (dîner du réveillon). Les aînés donnent des 紅包 (enveloppes rouges avec de l'argent) aux enfants. La couleur rouge symbolise la chance et la prospérité.",
    "La Fête de la Mi-Automne (中秋節) est unique à Taiwan pour son barbecue (烤肉) généralisé — une tradition née d'une publicité des années 1980 ! En Chine, on mange des gâteaux de lune sans BBQ.",
    "媽祖 (Mazu) est la déesse la plus vénérée à Taiwan. Le pèlerinage annuel de Dajia Mazu attire des centaines de milliers de personnes sur 340 km en 9 jours — l'un des plus grands événements religieux au monde.",
    "Ne jamais dire que Taiwan « fait partie de la Chine » devant un Taiwanais. L'identité taiwanaise est forte et de plus en plus distincte de l'identité chinoise. Respecter cette identité est fondamental pour de bonnes relations.",
    "Le calendrier taiwanais suit l'ère 民國 (Minguo, République) : 2025 = 民國 114. Vous verrez cette numérotation sur les documents officiels, les dates de péremption et les formulaires administratifs.",
  ],
  quiz: [
    {
      id: "culture-q1",
      type: "term-to-french",
      question: "紅包",
      correctAnswer: "Enveloppe rouge (avec de l'argent)",
      options: [
        "Enveloppe rouge (avec de l'argent)",
        "Gâteau de lune",
        "Cadeau",
        "Pétards",
      ],
    },
    {
      id: "culture-q2",
      type: "french-to-term",
      question: "Temple",
      correctAnswer: "廟",
      options: ["廟", "寺", "宮", "殿"],
    },
    {
      id: "culture-q3",
      type: "term-to-french",
      question: "過年",
      correctAnswer: "Fêter le Nouvel An chinois",
      options: [
        "Fêter le Nouvel An chinois",
        "Fête de la Mi-Automne",
        "Fête des Bateaux-Dragons",
        "Fête des Lanternes",
      ],
    },
    {
      id: "culture-q4",
      type: "reading-to-term",
      question: "wénhuà",
      correctAnswer: "文化",
      options: ["文化", "文學", "文字", "文件"],
    },
    {
      id: "culture-q5",
      type: "french-to-term",
      question: "Traditionnel / Tradition",
      correctAnswer: "傳統",
      options: ["傳統", "習俗", "文化", "歷史"],
    },
    {
      id: "culture-q6",
      type: "term-to-french",
      question: "拜拜",
      correctAnswer: "Prier / Faire une offrande",
      options: [
        "Prier / Faire une offrande",
        "Dire au revoir",
        "Célébrer",
        "Remercier",
      ],
    },
  ],
};

export default cultureLesson;
