import type { CourseUnit } from "@/types/course";

export const unit58: CourseUnit = {
  id: "unit-58",
  number: 58,
  title: "La maison et les pièces",
  titleZh: "家裡的房間",
  chapter: 1,
  description:
    "Apprendre le vocabulaire de la maison, des pièces et du mobilier, et savoir décrire où se trouvent les choses",
  icon: "🏠",

  sections: [
    {
      title: "Les pièces de la maison — 房間 (fángjiān)",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Connaître les noms des pièces de la maison est essentiel pour la vie quotidienne à Taiwan. Que tu cherches un appartement, que tu reçoives un ami chez toi, ou que tu décrives ton logement, ce vocabulaire te sera indispensable. En chinois, beaucoup de noms de pièces sont composés de deux caractères décrivant la fonction de la pièce, suivis de 室 (shì, pièce) ou 房 (fáng, chambre).",
        },
        {
          type: "example",
          chinese: "客廳、廚房、浴室",
          pinyin: "kètīng, chúfáng, yùshì",
          translation: "Salon, cuisine, salle de bain",
          content:
            "客廳 (kètīng) se décompose en 客 (invité) + 廳 (salle) — littéralement « la salle des invités ». 廚房 (chúfáng) vient de 廚 (cuisiner) + 房 (pièce). 浴室 (yùshì) est 浴 (se baigner) + 室 (pièce). Comprendre ces compositions aide à mémoriser le vocabulaire et à deviner le sens de nouveaux mots.",
        },
        {
          type: "example",
          chinese: "臥室是睡覺的地方。",
          pinyin: "wòshì shì shuìjiào de dìfāng.",
          translation: "La chambre est l'endroit où l'on dort.",
          content:
            "臥室 (wòshì) se compose de 臥 (se coucher) + 室 (pièce). C'est le terme formel pour « chambre à coucher ». Dans la vie courante à Taiwan, on entend aussi 房間 (fángjiān) qui signifie « pièce / chambre » de façon plus générale. Les Taiwanais disent souvent 我的房間 (ma chambre) plutôt que 我的臥室.",
        },
        {
          type: "example",
          chinese: "我家有三個房間。",
          pinyin: "wǒ jiā yǒu sān ge fángjiān.",
          translation: "Ma maison a trois chambres.",
          content:
            "家 (jiā) signifie à la fois « maison » et « famille » — un bel exemple de la culture chinoise où le lieu et les gens qui y vivent sont indissociables. Pour compter les pièces, on utilise le classificateur 個 (ge). À Taiwan, les annonces immobilières décrivent les appartements avec la formule X房Y廳 (X chambres, Y salons), par exemple 兩房一廳 (deux chambres, un salon).",
        },
        {
          type: "tip",
          content:
            "Les mots 門 (mén, porte) et 窗戶 (chuānghù, fenêtre) sont indispensables pour décrire une pièce. En chinois, on dit 開門 (ouvrir la porte) et 關門 (fermer la porte). À Taiwan, tu entendras souvent 請關門 (veuillez fermer la porte) dans les magasins climatisés — la climatisation est précieuse quand il fait 35°C dehors !",
        },
      ],
    },
    {
      title: "Localiser les choses — 在 + lieu, 裡面/外面/上面/下面",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour dire où se trouve quelque chose, on utilise la structure : sujet + 在 (zài) + lieu. Le verbe 在 signifie « être à / se trouver à ». On peut préciser la position avec des mots de localisation : 裡面 (lǐmiàn, à l'intérieur), 外面 (wàimiàn, à l'extérieur), 上面 (shàngmiàn, au-dessus/sur), 下面 (xiàmiàn, en dessous/sous). Ces mots se placent APRÈS le nom du lieu.",
        },
        {
          type: "example",
          chinese: "貓在沙發上面。",
          pinyin: "māo zài shāfā shàngmiàn.",
          translation: "Le chat est sur le canapé.",
          content:
            "La structure est : sujet (貓) + 在 + lieu (沙發) + position (上面). En chinois, le complément de lieu est à l'opposé du français : on dit « chat / être-à / canapé / dessus » au lieu de « le chat est sur le canapé ». Note que dans la langue parlée, on peut raccourcir 上面 en 上 : 貓在沙發上.",
        },
        {
          type: "example",
          chinese: "電視在客廳裡面。",
          pinyin: "diànshì zài kètīng lǐmiàn.",
          translation: "La télévision est dans le salon.",
          content:
            "裡面 (lǐmiàn) indique « à l'intérieur de ». On peut aussi utiliser 裡 tout seul : 客廳裡. Pour une pièce fermée, 裡面 est naturel. À Taiwan, le salon est souvent le centre de la vie familiale — c'est là qu'on regarde la télé, qu'on discute et qu'on reçoit les invités.",
        },
        {
          type: "example",
          chinese: "鞋子在門外面。",
          pinyin: "xiézi zài mén wàimiàn.",
          translation: "Les chaussures sont à l'extérieur de la porte.",
          content:
            "外面 (wàimiàn) signifie « à l'extérieur ». Au Taiwan, il est courant de retirer ses chaussures avant d'entrer dans une maison. On les laisse souvent devant la porte, d'où cette phrase très courante. Si tu es invité chez quelqu'un, observe si des chaussures sont alignées à l'entrée — c'est le signal qu'il faut enlever les tiennes !",
        },
        {
          type: "example",
          chinese: "書在桌子下面。",
          pinyin: "shū zài zhuōzi xiàmiàn.",
          translation: "Le livre est sous la table.",
          content:
            "下面 (xiàmiàn) signifie « en dessous ». Comme les autres mots de position, il se place après le nom de référence. On peut demander « Où est... ? » avec 在哪裡 (zài nǎlǐ) : 書在哪裡？(Où est le livre ?) — 在桌子下面 (Sous la table).",
        },
        {
          type: "comparison",
          content:
            "Récapitulatif des quatre positions : 上面 (shàngmiàn, sur/dessus), 下面 (xiàmiàn, sous/dessous), 裡面 (lǐmiàn, dedans/intérieur), 外面 (wàimiàn, dehors/extérieur). Ces quatre mots suivent tous le même modèle : caractère de direction + 面. On peut aussi les raccourcir en enlevant 面 : 上、下、裡、外.",
        },
        {
          type: "tip",
          content:
            "Pour demander où se trouve quelque chose, utilise : [objet] + 在哪裡？Par exemple : 浴室在哪裡？(Où est la salle de bain ?) C'est une question extrêmement utile quand tu es chez quelqu'un ou dans un lieu public à Taiwan. La réponse suivra la structure 在 + lieu + position.",
        },
      ],
    },
    {
      title: "L'habitat à Taiwan — 台灣的房子",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "À Taiwan, la plupart des gens vivent en appartement (公寓, gōngyù) plutôt qu'en maison individuelle, surtout dans les grandes villes comme Taipei, Taichung ou Kaohsiung. Les immeubles résidentiels peuvent avoir de 5 à 30 étages. Les appartements sont généralement décrits par le nombre de chambres et de salons : 套房 (tàofáng, studio), 兩房一廳 (deux chambres un salon), etc.",
        },
        {
          type: "example",
          chinese: "我住在五樓。",
          pinyin: "wǒ zhù zài wǔ lóu.",
          translation: "J'habite au cinquième étage.",
          content:
            "樓 (lóu) signifie « étage » ou « immeuble ». Pour dire l'étage, on met le numéro devant : 一樓 (1er étage), 二樓 (2e étage), etc. Attention : à Taiwan, le rez-de-chaussée est le 一樓 (premier étage), comme aux États-Unis. Beaucoup d'immeubles n'ont pas de 4e étage (四樓) car le chiffre 4 (四, sì) se prononce comme « mort » (死, sǐ) — on passe directement du 3e au 5e !",
        },
        {
          type: "example",
          chinese: "台灣的房子很小，但是很方便。",
          pinyin: "táiwān de fángzi hěn xiǎo, dànshì hěn fāngbiàn.",
          translation: "Les logements à Taiwan sont petits, mais très pratiques.",
          content:
            "Les appartements taiwanais sont souvent plus petits que les logements français, surtout à Taipei. Un studio (套房) fait typiquement 8 à 15 坪 (píng, unité de surface taiwanaise, 1 坪 ≈ 3,3 m²). Malgré la taille réduite, les logements sont bien équipés et proches des transports en commun, des convenience stores (便利商店) et des marchés.",
        },
        {
          type: "text",
          content:
            "Un trait distinctif des maisons taiwanaises : on enlève toujours ses chaussures à l'entrée. La plupart des foyers ont des pantoufles (拖鞋, tuōxié) pour les invités. La cuisine est souvent petite car beaucoup de Taiwanais mangent à l'extérieur ou achètent des plats à emporter. Le balcon (陽台, yángtái) sert souvent à faire sécher le linge — les sèche-linge sont rares à Taiwan.",
        },
        {
          type: "tip",
          content:
            "Si tu cherches un appartement à Taiwan, les sites les plus populaires sont 591房屋交易 et 好房網. Les loyers se disent en 月租 (yuèzū, loyer mensuel). À Taipei, un studio coûte environ 8 000 à 15 000 NT$ par mois. En dehors de Taipei, les prix sont nettement plus bas. Le vocabulaire de cette unité te sera très utile pour comprendre les annonces !",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Marie rend visite à son amie taiwanaise Xiǎoméi (小美) dans son nouvel appartement à Taipei. Xiǎoméi lui fait visiter les lieux.",
    lines: [
      {
        speaker: "小美",
        chinese: "歡迎來我家！請進，請進。",
        pinyin: "huānyíng lái wǒ jiā! qǐng jìn, qǐng jìn.",
        french: "Bienvenue chez moi ! Entre, entre.",
        note: "歡迎 (huānyíng) = bienvenue. 請進 (qǐng jìn) = veuillez entrer.",
      },
      {
        speaker: "Marie",
        chinese: "謝謝！你的家好漂亮。這是客廳嗎？",
        pinyin: "xièxiè! nǐ de jiā hǎo piàoliang. zhè shì kètīng ma?",
        french: "Merci ! Ta maison est très jolie. C'est le salon ?",
        note: "好 + adjectif = très (exprime l'admiration, comme 真).",
      },
      {
        speaker: "小美",
        chinese: "對，這是客廳。沙發在這裡，電視在沙發前面。",
        pinyin: "duì, zhè shì kètīng. shāfā zài zhèlǐ, diànshì zài shāfā qiánmiàn.",
        french: "Oui, c'est le salon. Le canapé est ici, la télé est devant le canapé.",
        note: "前面 (qiánmiàn) = devant.",
      },
      {
        speaker: "Marie",
        chinese: "廚房在哪裡？",
        pinyin: "chúfáng zài nǎlǐ?",
        french: "Où est la cuisine ?",
      },
      {
        speaker: "小美",
        chinese: "廚房在客廳旁邊。很小，但是冰箱和桌子都有。",
        pinyin: "chúfáng zài kètīng pángbiān. hěn xiǎo, dànshì bīngxiāng hé zhuōzi dōu yǒu.",
        french: "La cuisine est à côté du salon. Elle est petite, mais il y a un frigo et une table.",
        note: "旁邊 (pángbiān) = à côté de.",
      },
      {
        speaker: "Marie",
        chinese: "浴室在哪裡？",
        pinyin: "yùshì zài nǎlǐ?",
        french: "Où est la salle de bain ?",
      },
      {
        speaker: "小美",
        chinese: "浴室在臥室裡面。我的床在窗戶旁邊，燈在床上面。",
        pinyin: "yùshì zài wòshì lǐmiàn. wǒ de chuáng zài chuānghù pángbiān, dēng zài chuáng shàngmiàn.",
        french: "La salle de bain est dans la chambre. Mon lit est à côté de la fenêtre, la lampe est au-dessus du lit.",
        note: "Cette phrase utilise plusieurs mots de position appris dans cette unité.",
      },
      {
        speaker: "Marie",
        chinese: "你家很舒服！我很喜歡。樓梯在外面嗎？",
        pinyin: "nǐ jiā hěn shūfú! wǒ hěn xǐhuān. lóutī zài wàimiàn ma?",
        french: "Ton appartement est très confortable ! J'aime beaucoup. L'escalier est à l'extérieur ?",
        note: "舒服 (shūfú) = confortable.",
      },
    ],
  },

  keyPoints: [
    "Les pièces de la maison : 客廳 (salon), 廚房 (cuisine), 浴室 (salle de bain), 臥室 (chambre)",
    "Structure de localisation : sujet + 在 + lieu + position (裡面/外面/上面/下面)",
    "On enlève ses chaussures à l'entrée dans les foyers taiwanais",
    "Les appartements à Taiwan sont décrits par le nombre de chambres : 兩房一廳 = deux chambres un salon",
  ],

  vocabulary: [
    {
      character: "家",
      pinyin: "jiā",
      zhuyin: "ㄐㄧㄚ",
      french: "Maison / Famille",
      english: "Home / Family",
      example: {
        sentence: "我家在台北。",
        pinyin: "wǒ jiā zài táiběi.",
        translation: "Ma maison est à Taipei.",
      },
    },
    {
      character: "房間",
      pinyin: "fángjiān",
      zhuyin: "ㄈㄤˊ ㄐㄧㄢ",
      french: "Chambre / Pièce",
      english: "Room",
      example: {
        sentence: "這個房間很大。",
        pinyin: "zhège fángjiān hěn dà.",
        translation: "Cette pièce est grande.",
      },
    },
    {
      character: "客廳",
      pinyin: "kètīng",
      zhuyin: "ㄎㄜˋ ㄊㄧㄥ",
      french: "Salon",
      english: "Living room",
      example: {
        sentence: "我們在客廳看電視。",
        pinyin: "wǒmen zài kètīng kàn diànshì.",
        translation: "Nous regardons la télé dans le salon.",
      },
    },
    {
      character: "廚房",
      pinyin: "chúfáng",
      zhuyin: "ㄔㄨˊ ㄈㄤˊ",
      french: "Cuisine",
      english: "Kitchen",
      example: {
        sentence: "媽媽在廚房做飯。",
        pinyin: "māmā zài chúfáng zuòfàn.",
        translation: "Maman fait la cuisine dans la cuisine.",
      },
    },
    {
      character: "浴室",
      pinyin: "yùshì",
      zhuyin: "ㄩˋ ㄕˋ",
      french: "Salle de bain",
      english: "Bathroom",
      example: {
        sentence: "浴室在哪裡？",
        pinyin: "yùshì zài nǎlǐ?",
        translation: "Où est la salle de bain ?",
      },
    },
    {
      character: "臥室",
      pinyin: "wòshì",
      zhuyin: "ㄨㄛˋ ㄕˋ",
      french: "Chambre à coucher",
      english: "Bedroom",
      example: {
        sentence: "我的臥室有一個窗戶。",
        pinyin: "wǒ de wòshì yǒu yí ge chuānghù.",
        translation: "Ma chambre a une fenêtre.",
      },
    },
    {
      character: "門",
      pinyin: "mén",
      zhuyin: "ㄇㄣˊ",
      french: "Porte",
      english: "Door",
      example: {
        sentence: "請關門。",
        pinyin: "qǐng guānmén.",
        translation: "Veuillez fermer la porte.",
      },
    },
    {
      character: "窗戶",
      pinyin: "chuānghù",
      zhuyin: "ㄔㄨㄤ ㄏㄨˋ",
      french: "Fenêtre",
      english: "Window",
      example: {
        sentence: "請打開窗戶。",
        pinyin: "qǐng dǎkāi chuānghù.",
        translation: "Veuillez ouvrir la fenêtre.",
      },
    },
    {
      character: "床",
      pinyin: "chuáng",
      zhuyin: "ㄔㄨㄤˊ",
      french: "Lit",
      english: "Bed",
      example: {
        sentence: "我的床很舒服。",
        pinyin: "wǒ de chuáng hěn shūfú.",
        translation: "Mon lit est très confortable.",
      },
    },
    {
      character: "沙發",
      pinyin: "shāfā",
      zhuyin: "ㄕㄚ ㄈㄚ",
      french: "Canapé",
      english: "Sofa",
      example: {
        sentence: "他坐在沙發上。",
        pinyin: "tā zuò zài shāfā shàng.",
        translation: "Il est assis sur le canapé.",
      },
    },
    {
      character: "電視",
      pinyin: "diànshì",
      zhuyin: "ㄉㄧㄢˋ ㄕˋ",
      french: "Télévision",
      english: "Television / TV",
      example: {
        sentence: "我們一起看電視吧。",
        pinyin: "wǒmen yìqǐ kàn diànshì ba.",
        translation: "Regardons la télé ensemble.",
      },
    },
    {
      character: "冰箱",
      pinyin: "bīngxiāng",
      zhuyin: "ㄅㄧㄥ ㄒㄧㄤ",
      french: "Réfrigérateur",
      english: "Refrigerator",
      example: {
        sentence: "水在冰箱裡面。",
        pinyin: "shuǐ zài bīngxiāng lǐmiàn.",
        translation: "L'eau est dans le réfrigérateur.",
      },
    },
    {
      character: "桌子",
      pinyin: "zhuōzi",
      zhuyin: "ㄓㄨㄛ ㄗˇ",
      french: "Table",
      english: "Table / Desk",
      example: {
        sentence: "書在桌子上面。",
        pinyin: "shū zài zhuōzi shàngmiàn.",
        translation: "Le livre est sur la table.",
      },
    },
    {
      character: "燈",
      pinyin: "dēng",
      zhuyin: "ㄉㄥ",
      french: "Lampe / Lumière",
      english: "Lamp / Light",
      example: {
        sentence: "請開燈。",
        pinyin: "qǐng kāidēng.",
        translation: "Veuillez allumer la lumière.",
      },
    },
    {
      character: "樓梯",
      pinyin: "lóutī",
      zhuyin: "ㄌㄡˊ ㄊㄧ",
      french: "Escalier",
      english: "Stairs / Staircase",
      example: {
        sentence: "樓梯在門的旁邊。",
        pinyin: "lóutī zài mén de pángbiān.",
        translation: "L'escalier est à côté de la porte.",
      },
    },
  ],

  exercises: [
    {
      id: "u58-ex1",
      type: "comprehension",
      question:
        "Comment dit-on « salon » en chinois, et quelle est la signification littérale ?",
      correctAnswer: "客廳 — littéralement « salle des invités »",
      options: [
        "客廳 — littéralement « salle des invités »",
        "房間 — littéralement « pièce de la maison »",
        "臥室 — littéralement « salle de repos »",
        "廚房 — littéralement « salle de cuisine »",
      ],
    },
    {
      id: "u58-ex2",
      type: "fill-blank",
      question: "貓___沙發上面。(Le chat est sur le canapé.)",
      correctAnswer: "在",
      options: ["在", "是", "有", "很"],
      optionsHint: ["zài", "shì", "yǒu", "hěn"],
      optionsZhuyin: ["ㄗㄞˋ", "ㄕˋ", "ㄧㄡˇ", "ㄏㄣˇ"],
      hint: "Quel verbe utilise-t-on pour indiquer la localisation ?",
    },
    {
      id: "u58-ex3",
      type: "translate",
      question: "Que signifie 水在冰箱裡面 ?",
      correctAnswer: "L'eau est dans le réfrigérateur.",
      options: [
        "L'eau est dans le réfrigérateur.",
        "L'eau est sur le réfrigérateur.",
        "Le réfrigérateur a de l'eau.",
        "L'eau est à côté du réfrigérateur.",
      ],
    },
    {
      id: "u58-ex4",
      type: "listen",
      question: "Écoute et choisis la bonne traduction de : 浴室在哪裡？",
      correctAnswer: "Où est la salle de bain ?",
      options: [
        "Où est la salle de bain ?",
        "Où est la cuisine ?",
        "La salle de bain est grande.",
        "Il y a une salle de bain.",
      ],
    },
    {
      id: "u58-ex5",
      type: "comprehension",
      question:
        "Pourquoi certains immeubles à Taiwan n'ont-ils pas de 4e étage ?",
      correctAnswer:
        "Parce que le chiffre 4 (四, sì) se prononce comme « mort » (死, sǐ), ce qui est considéré comme malchanceux",
      options: [
        "Parce que le chiffre 4 (四, sì) se prononce comme « mort » (死, sǐ), ce qui est considéré comme malchanceux",
        "Parce que les immeubles taiwanais sont toujours construits sur 3 étages",
        "Parce que le 4e étage est réservé aux commerces",
        "Parce que c'est une tradition architecturale japonaise",
      ],
    },
    {
      id: "u58-ex6",
      type: "fill-blank",
      question: "書在桌子___。(Le livre est sous la table.)",
      correctAnswer: "下面",
      options: ["下面", "上面", "裡面", "外面"],
      optionsHint: ["xiàmiàn", "shàngmiàn", "lǐmiàn", "wàimiàn"],
      optionsZhuyin: ["ㄒㄧㄚˋ ㄇㄧㄢˋ", "ㄕㄤˋ ㄇㄧㄢˋ", "ㄌㄧˇ ㄇㄧㄢˋ", "ㄨㄞˋ ㄇㄧㄢˋ"],
      hint: "Quel mot de position signifie « en dessous » ?",
    },
    {
      id: "u58-ex7",
      type: "translate",
      question: "Comment dire « La cuisine est à côté du salon » ?",
      correctAnswer: "廚房在客廳旁邊。",
      options: [
        "廚房在客廳旁邊。",
        "廚房在客廳裡面。",
        "客廳有廚房。",
        "廚房是客廳。",
      ],
    },
    {
      id: "u58-ex8",
      type: "comprehension",
      question:
        "Dans le dialogue, où se trouve la salle de bain de Xiǎoméi ?",
      correctAnswer: "Dans la chambre à coucher (臥室裡面)",
      options: [
        "Dans la chambre à coucher (臥室裡面)",
        "À côté de la cuisine (廚房旁邊)",
        "Dans le salon (客廳裡面)",
        "À l'extérieur de l'appartement (外面)",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-57"],
};
