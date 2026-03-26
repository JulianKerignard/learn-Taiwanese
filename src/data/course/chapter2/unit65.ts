import type { CourseUnit } from "@/types/course";

export const unit65: CourseUnit = {
  id: "unit-65",
  number: 65,
  title: "Les positions et les lieux",
  titleZh: "位置與地點",
  chapter: 2,
  description:
    "Apprendre les mots de position (上面, 下面, 裡面...) et les lieux courants. Maîtriser les structures 在+lieu, 從...到... et 離...很近/很遠 pour décrire les emplacements et les distances, et découvrir le système d'adresses taiwanais avec ses 巷 et 弄.",
  icon: "📍",

  sections: [
    {
      title: "Les mots de position et les lieux courants",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Les mots de position en chinois sont essentiels pour se repérer et donner des indications. Contrairement au français qui utilise des prépositions (sur, sous, dans, devant...), le chinois utilise des mots de position composés d'un caractère de direction suivi de 面 (miàn, côté/face) ou 邊 (biān, côté). Maîtriser ces mots vous permettra de vous orienter à Taiwan et de comprendre les indications des passants.",
        },
        {
          type: "example",
          chinese: "上面、下面",
          pinyin: "shàngmiàn, xiàmiàn",
          translation: "Au-dessus / dessus, en dessous / dessous",
          content:
            "上面 (shàngmiàn) = au-dessus, sur. 下面 (xiàmiàn) = en dessous, sous. Ces mots peuvent aussi se dire 上邊 (shàngbiān) et 下邊 (xiàbiān) — les deux formes sont interchangeables. 書在桌子上面 (le livre est sur la table). 貓在桌子下面 (le chat est sous la table).",
        },
        {
          type: "example",
          chinese: "裡面、外面",
          pinyin: "lǐmiàn, wàimiàn",
          translation: "À l'intérieur, à l'extérieur",
          content:
            "裡面 (lǐmiàn) = à l'intérieur, dedans. 外面 (wàimiàn) = à l'extérieur, dehors. 他在房間裡面 (il est dans la chambre). 外面在下雨 (il pleut dehors). À Taiwan, on entend souvent 裡頭 (lǐtou) et 外頭 (wàitou) dans le langage parlé — c'est plus familier.",
        },
        {
          type: "example",
          chinese: "前面、後面",
          pinyin: "qiánmiàn, hòumiàn",
          translation: "Devant, derrière",
          content:
            "前面 (qiánmiàn) = devant, en avant. 後面 (hòumiàn) = derrière, en arrière. 銀行在超市前面 (la banque est devant le supermarché). 公園在學校後面 (le parc est derrière l'école). Ces mots sont indispensables pour comprendre les indications de direction.",
        },
        {
          type: "example",
          chinese: "旁邊、對面、中間",
          pinyin: "pángbiān, duìmiàn, zhōngjiān",
          translation: "À côté, en face, au milieu",
          content:
            "旁邊 (pángbiān) = à côté. 對面 (duìmiàn) = en face, de l'autre côté. 中間 (zhōngjiān) = au milieu, entre. 郵局在銀行旁邊 (la poste est à côté de la banque). 超市在對面 (le supermarché est en face). 公園在銀行和郵局中間 (le parc est entre la banque et la poste).",
        },
        {
          type: "example",
          chinese: "附近有沒有銀行？",
          pinyin: "fùjìn yǒu méiyǒu yínháng?",
          translation: "Y a-t-il une banque dans les environs ?",
          content:
            "附近 (fùjìn) = dans les environs, à proximité. C'est un mot extrêmement utile au quotidien. 這附近有沒有超市？ (y a-t-il un supermarché dans le coin ?). 附近有很多餐廳 (il y a beaucoup de restaurants dans le coin). Combiné avec 有沒有, c'est la question de base pour trouver quelque chose.",
        },
        {
          type: "tip",
          content:
            "Pour retenir les mots de position, pensez-les par paires opposées : 上/下 (dessus/dessous), 裡/外 (dedans/dehors), 前/後 (devant/derrière), 左/右 (gauche/droite). Le suffixe 面 ou 邊 transforme ces caractères de direction en mots de position complets. C'est un système très logique et régulier.",
        },
      ],
    },
    {
      title: "在+lieu, 從...到... et 離...很近/很遠 — Localisation et distance",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Trois structures grammaticales sont fondamentales pour parler de lieux et de distances en chinois. 在 (zài) indique où quelque chose se trouve, 從...到... (cóng...dào...) exprime le trajet d'un point à un autre, et 離...很近/很遠 (lí...hěn jìn/hěn yuǎn) décrit la distance. Ces trois structures couvrent la majorité des situations de localisation.",
        },
        {
          type: "example",
          chinese: "郵局在銀行旁邊。",
          pinyin: "yóujú zài yínháng pángbiān.",
          translation: "La poste est à côté de la banque.",
          content:
            "La structure de base pour la localisation est : sujet + 在 (zài) + lieu + mot de position. 在 signifie « être à / se trouver à ». 書在桌子上面 (le livre est sur la table). 他在公園裡面 (il est dans le parc). Le mot de position vient APRÈS le lieu de référence, pas avant — c'est l'inverse du français.",
        },
        {
          type: "example",
          chinese: "從我家到公司，要三十分鐘。",
          pinyin: "cóng wǒ jiā dào gōngsī, yào sānshí fēnzhōng.",
          translation: "De chez moi au bureau, il faut trente minutes.",
          content:
            "從 (cóng) = de/depuis, 到 (dào) = jusqu'à/vers. La structure 從 A 到 B exprime le trajet d'un point à un autre. 從台北到高雄 (de Taipei à Kaohsiung). 從這裡到車站 (d'ici à la gare). On ajoute souvent la durée ou la distance : 從這裡到郵局，走路五分鐘 (d'ici à la poste, cinq minutes à pied).",
        },
        {
          type: "example",
          chinese: "超市離這裡很近。",
          pinyin: "chāoshì lí zhèlǐ hěn jìn.",
          translation: "Le supermarché est très proche d'ici.",
          content:
            "離 (lí) signifie « être distant de ». La structure est : A + 離 + B + 很近/很遠. 很近 (hěn jìn) = très proche, 很遠 (hěn yuǎn) = très loin. 學校離我家不遠 (l'école n'est pas loin de chez moi). On peut aussi être plus précis : 離這裡大概兩公里 (à environ deux kilomètres d'ici).",
        },
        {
          type: "example",
          chinese: "公園離車站很遠嗎？",
          pinyin: "gōngyuán lí chēzhàn hěn yuǎn ma?",
          translation: "Le parc est-il loin de la gare ?",
          content:
            "Pour poser la question sur la distance, ajoutez simplement 嗎 à la fin. Réponses possibles : 很近 (très proche), 不遠 (pas loin), 有一點遠 (un peu loin), 很遠 (très loin). On peut aussi demander avec 多遠 : 從這裡到車站多遠？ (c'est à quelle distance d'ici à la gare ?).",
        },
        {
          type: "comparison",
          content:
            "Comparons les trois structures : 郵局在銀行旁邊 (localisation : la poste est à côté de la banque) vs 從銀行到郵局，走路兩分鐘 (trajet : de la banque à la poste, deux minutes à pied) vs 郵局離銀行很近 (distance : la poste est très proche de la banque). Trois manières de parler du même rapport spatial.",
        },
        {
          type: "tip",
          content:
            "Quand vous demandez votre chemin à Taiwan, commencez par 請問 et utilisez ces structures : 請問，郵局在哪裡？ (où est la poste ?) ou 請問，從這裡到郵局怎麼走？ (comment aller d'ici à la poste ?). Les Taiwanais sont très serviables et feront souvent un effort considérable pour vous guider — certains vous accompagneront même !",
        },
      ],
    },
    {
      title: "Le système d'adresses à Taiwan — 路、街、巷、弄",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le système d'adresses taiwanais peut sembler déroutant au premier abord, mais il suit une logique hiérarchique très précise. Comprendre cette logique est essentiel pour trouver son chemin, recevoir des livraisons ou prendre un taxi à Taiwan. Les adresses se lisent du plus grand au plus petit : ville, district, route, ruelle, sous-ruelle, numéro, étage.",
        },
        {
          type: "example",
          chinese: "台北市大安區忠孝東路三段100巷5弄12號3樓",
          pinyin: "táiběi shì dà'ān qū zhōngxiào dōng lù sān duàn yī bǎi xiàng wǔ nòng shí'èr hào sān lóu",
          translation: "Taipei, district Da'an, route Zhongxiao Est, section 3, ruelle 100, sous-ruelle 5, n°12, 3e étage",
          content:
            "Voici une adresse typique. 路 (lù) = route/avenue principale. 街 (jiē) = rue (plus petite qu'une 路). 巷 (xiàng) = ruelle qui part d'une route. 弄 (nòng) = sous-ruelle encore plus petite. 號 (hào) = numéro de bâtiment. 樓 (lóu) = étage. Les grandes routes sont divisées en 段 (duàn, sections) numérotées.",
        },
        {
          type: "example",
          chinese: "你住幾巷幾號？",
          pinyin: "nǐ zhù jǐ xiàng jǐ hào?",
          translation: "Tu habites quelle ruelle, quel numéro ?",
          content:
            "Les 巷 (xiàng, ruelles) et 弄 (nòng, sous-ruelles) sont le cœur du réseau résidentiel taiwanais. Ce sont de petites allées souvent bordées de maisons et d'immeubles, avec leurs propres petites communautés. Beaucoup de restaurants cachés et de trésors locaux se trouvent dans ces ruelles — les Taiwanais disent 巷弄美食 (měishí, bonne cuisine de ruelles).",
        },
        {
          type: "text",
          content:
            "Les adresses taiwanaises sont numérotées logiquement : les numéros impairs sont d'un côté de la rue et les pairs de l'autre. Les 巷 sont numérotées selon leur position sur la route principale : 巷10 est la première ruelle, 巷20 la suivante, etc. Ce système rend la navigation plus prévisible une fois qu'on le comprend. Google Maps et l'application taiwanaise 「走」都通 sont vos meilleurs alliés.",
        },
        {
          type: "example",
          chinese: "這附近有便利商店嗎？—— 前面那個巷子裡面有一家7-11。",
          pinyin: "zhè fùjìn yǒu biànlì shāngdiàn ma? —— qiánmiàn nàge xiàngzi lǐmiàn yǒu yì jiā qī-shíyī.",
          translation: "Il y a un convenience store dans le coin ? —— Dans la ruelle là-devant, il y a un 7-11.",
          content:
            "Les convenience stores (便利商店, biànlì shāngdiàn) sont PARTOUT à Taiwan — il y en a plus de 13 000 ! 7-Eleven (7-11) et FamilyMart (全家, quánjiā) sont les plus courants. On y trouve de la nourriture, on y paie ses factures, on y retire des colis. Ils servent souvent de point de repère pour les directions.",
        },
        {
          type: "tip",
          content:
            "Conseil pratique : quand vous prenez un taxi à Taiwan, montrez l'adresse écrite en chinois sur votre téléphone. Les chauffeurs de taxi connaissent très bien les rues, mais la prononciation d'un étranger peut prêter à confusion. Utilisez aussi les convenience stores comme points de repère : « à côté du 7-11 » est souvent plus clair qu'une adresse exacte !",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Sophie, une étudiante française à Taipei, cherche la poste pour envoyer une carte postale en France. Elle demande son chemin à un passant (路人, lùrén) dans la rue.",
    lines: [
      {
        speaker: "Sophie",
        chinese: "不好意思，請問郵局在哪裡？",
        pinyin: "bù hǎoyìsi, qǐngwèn yóujú zài nǎlǐ?",
        french: "Excusez-moi, où est la poste ?",
        note: "不好意思 + 請問 est la combinaison la plus polie pour aborder un inconnu.",
      },
      {
        speaker: "路人",
        chinese: "郵局啊？離這裡不遠。你往前走，大概五分鐘。",
        pinyin: "yóujú a? lí zhèlǐ bù yuǎn. nǐ wǎng qián zǒu, dàgài wǔ fēnzhōng.",
        french:
          "La poste ? Ce n'est pas loin d'ici. Marche tout droit, environ cinq minutes.",
        note: "往前走 (wǎng qián zǒu) = marcher tout droit / avancer.",
      },
      {
        speaker: "Sophie",
        chinese: "往前走就可以看到嗎？",
        pinyin: "wǎng qián zǒu jiù kěyǐ kàndào ma?",
        french: "En marchant tout droit, je la verrai ?",
      },
      {
        speaker: "路人",
        chinese: "不是直走。你先往前走到路口，然後右轉。郵局在銀行旁邊，7-11的對面。",
        pinyin: "bú shì zhí zǒu. nǐ xiān wǎng qián zǒu dào lùkǒu, ránhòu yòu zhuǎn. yóujú zài yínháng pángbiān, qī-shíyī de duìmiàn.",
        french:
          "Pas tout droit. D'abord tu marches jusqu'au carrefour, puis tu tournes à droite. La poste est à côté de la banque, en face du 7-11.",
        note: "路口 (lùkǒu) = carrefour, intersection. 右轉 (yòu zhuǎn) = tourner à droite.",
      },
      {
        speaker: "Sophie",
        chinese: "好的。從這裡到那裡大概要多久？",
        pinyin: "hǎo de. cóng zhèlǐ dào nàlǐ dàgài yào duōjiǔ?",
        french: "D'accord. D'ici à là-bas, ça prend combien de temps à peu près ?",
        note: "從...到... pour exprimer le trajet d'un point à un autre.",
      },
      {
        speaker: "路人",
        chinese: "走路大概五分鐘。郵局在一條小巷子裡面，不要走過頭了。",
        pinyin: "zǒulù dàgài wǔ fēnzhōng. yóujú zài yì tiáo xiǎo xiàngzi lǐmiàn, bú yào zǒu guòtóu le.",
        french:
          "À pied, environ cinq minutes. La poste est dans une petite ruelle, ne la dépasse pas.",
        note: "走過頭 (zǒu guòtóu) = dépasser, aller trop loin.",
      },
      {
        speaker: "Sophie",
        chinese: "我知道了！非常感謝！",
        pinyin: "wǒ zhīdào le! fēicháng gǎnxiè!",
        french: "J'ai compris ! Merci beaucoup !",
      },
      {
        speaker: "路人",
        chinese: "不客氣！慢走啊！",
        pinyin: "bú kèqì! mànzǒu a!",
        french: "De rien ! Bonne route !",
        note: "慢走 est une formule bienveillante dite à celui qui part.",
      },
    ],
  },

  keyPoints: [
    "Mots de position par paires : 上面/下面, 裡面/外面, 前面/後面, 旁邊/對面 — le mot de position suit le lieu de référence",
    "在 + lieu + mot de position pour la localisation — 郵局在銀行旁邊 (la poste est à côté de la banque)",
    "從 A 到 B pour le trajet — 從這裡到車站 (d'ici à la gare)",
    "離 + lieu + 很近/很遠 pour la distance — 超市離這裡很近 (le supermarché est très proche d'ici)",
  ],

  vocabulary: [
    {
      character: "上面",
      pinyin: "shàngmiàn",
      zhuyin: "ㄕㄤˋ ㄇㄧㄢˋ",
      french: "Au-dessus / Dessus",
      english: "Above / On top",
      example: {
        sentence: "書在桌子上面。",
        pinyin: "shū zài zhuōzi shàngmiàn.",
        translation: "Le livre est sur la table.",
      },
    },
    {
      character: "下面",
      pinyin: "xiàmiàn",
      zhuyin: "ㄒㄧㄚˋ ㄇㄧㄢˋ",
      french: "En dessous / Dessous",
      english: "Below / Under",
      example: {
        sentence: "貓在椅子下面。",
        pinyin: "māo zài yǐzi xiàmiàn.",
        translation: "Le chat est sous la chaise.",
      },
    },
    {
      character: "裡面",
      pinyin: "lǐmiàn",
      zhuyin: "ㄌㄧˇ ㄇㄧㄢˋ",
      french: "À l'intérieur / Dedans",
      english: "Inside",
      example: {
        sentence: "他在房間裡面。",
        pinyin: "tā zài fángjiān lǐmiàn.",
        translation: "Il est dans la chambre.",
      },
    },
    {
      character: "外面",
      pinyin: "wàimiàn",
      zhuyin: "ㄨㄞˋ ㄇㄧㄢˋ",
      french: "À l'extérieur / Dehors",
      english: "Outside",
      example: {
        sentence: "外面在下雨。",
        pinyin: "wàimiàn zài xiàyǔ.",
        translation: "Il pleut dehors.",
      },
    },
    {
      character: "前面",
      pinyin: "qiánmiàn",
      zhuyin: "ㄑㄧㄢˊ ㄇㄧㄢˋ",
      french: "Devant / En avant",
      english: "In front / Ahead",
      example: {
        sentence: "學校在公園前面。",
        pinyin: "xuéxiào zài gōngyuán qiánmiàn.",
        translation: "L'école est devant le parc.",
      },
    },
    {
      character: "後面",
      pinyin: "hòumiàn",
      zhuyin: "ㄏㄡˋ ㄇㄧㄢˋ",
      french: "Derrière / En arrière",
      english: "Behind / In back",
      example: {
        sentence: "停車場在大樓後面。",
        pinyin: "tíngchēchǎng zài dàlóu hòumiàn.",
        translation: "Le parking est derrière l'immeuble.",
      },
    },
    {
      character: "旁邊",
      pinyin: "pángbiān",
      zhuyin: "ㄆㄤˊ ㄅㄧㄢ",
      french: "À côté",
      english: "Beside / Next to",
      example: {
        sentence: "郵局在銀行旁邊。",
        pinyin: "yóujú zài yínháng pángbiān.",
        translation: "La poste est à côté de la banque.",
      },
    },
    {
      character: "對面",
      pinyin: "duìmiàn",
      zhuyin: "ㄉㄨㄟˋ ㄇㄧㄢˋ",
      french: "En face",
      english: "Opposite / Across",
      example: {
        sentence: "超市在學校對面。",
        pinyin: "chāoshì zài xuéxiào duìmiàn.",
        translation: "Le supermarché est en face de l'école.",
      },
    },
    {
      character: "中間",
      pinyin: "zhōngjiān",
      zhuyin: "ㄓㄨㄥ ㄐㄧㄢ",
      french: "Au milieu / Entre",
      english: "Middle / Between",
      example: {
        sentence: "公園在銀行和郵局中間。",
        pinyin: "gōngyuán zài yínháng hé yóujú zhōngjiān.",
        translation: "Le parc est entre la banque et la poste.",
      },
    },
    {
      character: "附近",
      pinyin: "fùjìn",
      zhuyin: "ㄈㄨˋ ㄐㄧㄣˋ",
      french: "À proximité / Dans les environs",
      english: "Nearby / In the vicinity",
      example: {
        sentence: "附近有沒有餐廳？",
        pinyin: "fùjìn yǒu méiyǒu cāntīng?",
        translation: "Y a-t-il un restaurant dans le coin ?",
      },
    },
    {
      character: "公園",
      pinyin: "gōngyuán",
      zhuyin: "ㄍㄨㄥ ㄩㄢˊ",
      french: "Parc",
      english: "Park",
      example: {
        sentence: "我們去公園散步吧。",
        pinyin: "wǒmen qù gōngyuán sànbù ba.",
        translation: "Allons nous promener au parc.",
      },
    },
    {
      character: "銀行",
      pinyin: "yínháng",
      zhuyin: "ㄧㄣˊ ㄏㄤˊ",
      french: "Banque",
      english: "Bank",
      example: {
        sentence: "我要去銀行換錢。",
        pinyin: "wǒ yào qù yínháng huàn qián.",
        translation: "Je dois aller à la banque changer de l'argent.",
      },
    },
    {
      character: "郵局",
      pinyin: "yóujú",
      zhuyin: "ㄧㄡˊ ㄐㄩˊ",
      french: "Bureau de poste",
      english: "Post office",
      example: {
        sentence: "郵局幾點開門？",
        pinyin: "yóujú jǐ diǎn kāimén?",
        translation: "À quelle heure ouvre la poste ?",
      },
    },
    {
      character: "超市",
      pinyin: "chāoshì",
      zhuyin: "ㄔㄠ ㄕˋ",
      french: "Supermarché",
      english: "Supermarket",
      example: {
        sentence: "我去超市買東西。",
        pinyin: "wǒ qù chāoshì mǎi dōngxī.",
        translation: "Je vais au supermarché faire des courses.",
      },
    },
    {
      character: "教堂",
      pinyin: "jiàotáng",
      zhuyin: "ㄐㄧㄠˋ ㄊㄤˊ",
      french: "Église",
      english: "Church",
      example: {
        sentence: "那座教堂很漂亮。",
        pinyin: "nà zuò jiàotáng hěn piàoliang.",
        translation: "Cette église est très belle.",
      },
    },
  ],

  exercises: [
    {
      id: "u65-ex1",
      type: "comprehension",
      question:
        "Comment dit-on « Le livre est sur la table » en chinois ?",
      correctAnswer: "書在桌子上面",
      options: [
        "書在桌子上面",
        "書在上面桌子",
        "上面書在桌子",
        "桌子書在上面",
      ],
    },
    {
      id: "u65-ex2",
      type: "fill-blank",
      question: "郵局在銀行___。(La poste est à côté de la banque.)",
      correctAnswer: "旁邊",
      options: ["旁邊", "上面", "裡面", "下面"],
      optionsHint: ["pángbiān", "shàngmiàn", "lǐmiàn", "xiàmiàn"],
      optionsZhuyin: ["ㄆㄤˊ ㄅㄧㄢ", "ㄕㄤˋ ㄇㄧㄢˋ", "ㄌㄧˇ ㄇㄧㄢˋ", "ㄒㄧㄚˋ ㄇㄧㄢˋ"],
      hint: "Quel mot de position signifie « à côté » ?",
    },
    {
      id: "u65-ex3",
      type: "translate",
      question: "Que signifie 從我家到公司要三十分鐘 ?",
      correctAnswer: "De chez moi au bureau, il faut trente minutes.",
      options: [
        "De chez moi au bureau, il faut trente minutes.",
        "Mon bureau est à trente minutes de la maison.",
        "Je travaille trente minutes par jour.",
        "Ma maison et mon bureau sont à trente mètres.",
      ],
    },
    {
      id: "u65-ex4",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 超市離這裡很近。",
      correctAnswer: "Le supermarché est très proche d'ici.",
      options: [
        "Le supermarché est très proche d'ici.",
        "Le supermarché est très loin d'ici.",
        "Le supermarché est dans cette rue.",
        "Il y a un supermarché ici.",
      ],
    },
    {
      id: "u65-ex5",
      type: "comprehension",
      question: "Dans le système d'adresses taiwanais, que désigne 巷 (xiàng) ?",
      correctAnswer:
        "Une ruelle qui part d'une route principale — un élément essentiel des adresses résidentielles",
      options: [
        "Une ruelle qui part d'une route principale — un élément essentiel des adresses résidentielles",
        "Un grand boulevard avec plusieurs voies",
        "Un numéro d'étage dans un immeuble",
        "Le nom du quartier ou du district",
      ],
    },
    {
      id: "u65-ex6",
      type: "fill-blank",
      question: "___這裡___車站怎麼走？(Comment aller d'ici à la gare ?)",
      correctAnswer: "從...到...",
      options: ["從...到...", "在...裡...", "離...很...", "有...沒..."],
      optionsHint: ["cóng...dào...", "zài...lǐ...", "lí...hěn...", "yǒu...méi..."],
      optionsZhuyin: ["ㄘㄨㄥˊ…ㄉㄠˋ…", "ㄗㄞˋ…ㄌㄧˇ…", "ㄌㄧˊ…ㄏㄣˇ…", "ㄧㄡˇ…ㄇㄟˊ…"],
      hint: "Quelle structure exprime le trajet d'un point A à un point B ?",
    },
    {
      id: "u65-ex7",
      type: "translate",
      question: "Comment dire « La poste est en face du 7-11 » ?",
      correctAnswer: "郵局在7-11的對面。",
      options: [
        "郵局在7-11的對面。",
        "郵局在7-11的旁邊。",
        "郵局在7-11的裡面。",
        "郵局在7-11的後面。",
      ],
    },
    {
      id: "u65-ex8",
      type: "comprehension",
      question:
        "Pourquoi les convenience stores (便利商店) sont-ils souvent utilisés comme points de repère à Taiwan ?",
      correctAnswer:
        "Parce qu'il y en a plus de 13 000 dans tout le pays — ils sont omniprésents et facilement identifiables",
      options: [
        "Parce qu'il y en a plus de 13 000 dans tout le pays — ils sont omniprésents et facilement identifiables",
        "Parce qu'ils sont les seuls bâtiments avec un numéro d'adresse",
        "Parce que le gouvernement les a désignés comme points de repère officiels",
        "Parce qu'ils sont tous peints en rouge pour être visibles de loin",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-64"],
};
