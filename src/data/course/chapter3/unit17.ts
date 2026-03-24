import type { CourseUnit } from "@/types/course";

export const unit17: CourseUnit = {
  id: "unit-17",
  number: 17,
  title: "Le logement",
  titleZh: "找房子",
  chapter: 3,
  description:
    "Apprenez le vocabulaire et les structures pour chercher un appartement, visiter un logement et comprendre les spécificités du marché locatif taiwanais.",
  icon: "🏠",

  sections: [
    {
      title: "Chercher un appartement",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Chercher un logement à Taiwan nécessite quelques structures clés. 有/沒有 (yǒu/méiyǒu) pour demander si quelque chose existe, 可以...嗎？ pour les demandes polies, et les structures de prix. Ces outils vous permettront de naviguer le marché locatif avec confiance.",
        },
        {
          type: "text",
          content:
            "有 (yǒu) signifie « il y a » ou « avoir ». 沒有 (méiyǒu) est sa négation. Pour les questions, on ajoute simplement 嗎 : 有...嗎？",
        },
        {
          type: "example",
          chinese: "有冷氣嗎？",
          pinyin: "yǒu lěngqì ma?",
          translation: "Il y a la clim ? / Y a-t-il la climatisation ?",
          content: "有 + nom + 嗎 = demander l'existence de quelque chose.",
        },
        {
          type: "example",
          chinese: "沒有洗衣機",
          pinyin: "méiyǒu xǐyījī",
          translation: "Il n'y a pas de machine à laver",
          content: "沒有 + nom = l'absence de quelque chose.",
        },
        {
          type: "text",
          content:
            "可以...嗎？(kěyǐ...ma?) est la structure polie pour demander une permission ou faire une requête. C'est l'équivalent de « est-ce que je peux... ? » en français.",
        },
        {
          type: "example",
          chinese: "可以看房嗎？",
          pinyin: "kěyǐ kàn fáng ma?",
          translation: "Je peux visiter l'appartement ?",
          content: "可以 + verbe + 嗎 = demander la permission.",
        },
        {
          type: "text",
          content:
            "Pour demander le prix, la structure est simple et directe : 一個月多少錢？(yí ge yuè duōshǎo qián?) = combien par mois ? 多少錢 est la question universelle pour le prix.",
        },
        {
          type: "example",
          chinese: "房租一個月多少錢？",
          pinyin: "fángzū yí ge yuè duōshǎo qián?",
          translation: "Le loyer est de combien par mois ?",
          content: "房租 (loyer) + 一個月 (un mois) + 多少錢 (combien).",
        },
        {
          type: "text",
          content:
            "包 (bāo) signifie « inclus ». C'est un mot essentiel dans les annonces de logement. 包水電 = eau et électricité incluses. 包網路 = internet inclus.",
        },
        {
          type: "example",
          chinese: "房租包水電嗎？",
          pinyin: "fángzū bāo shuǐdiàn ma?",
          translation: "Le loyer inclut l'eau et l'électricité ?",
          content: "包 + ce qui est inclus. Question cruciale lors d'une visite.",
        },
        {
          type: "tip",
          content:
            "À Taiwan, les loyers sont souvent exprimés avec 元 (yuán) ou 塊 (kuài, plus familier). 八千塊 = 8000 NT$. Les prix varient énormément : de 5000 NT$ pour une chambre partagée à 15000+ pour un studio à Taipei.",
        },
      ],
    },
    {
      title: "Le vocabulaire de la maison",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Connaître le vocabulaire des pièces et des équipements est indispensable pour lire une annonce ou visiter un logement. Les mots sont très logiques en chinois : beaucoup sont des combinaisons de caractères simples.",
        },
        {
          type: "text",
          content:
            "Les pièces : 房間 (fángjiān, chambre), 客廳 (kètīng, salon/séjour), 廚房 (chúfáng, cuisine), 浴室 (yùshì, salle de bain) ou 廁所 (cèsuǒ, toilettes/WC), 陽台 (yángtái, balcon). Remarquez la logique : 廚 (cuisine) + 房 (pièce), 客 (invité) + 廳 (hall).",
        },
        {
          type: "example",
          chinese: "這個房間有陽台",
          pinyin: "zhège fángjiān yǒu yángtái",
          translation: "Cette chambre a un balcon",
          content: "Vocabulaire de base pour décrire un logement.",
        },
        {
          type: "text",
          content:
            "Les équipements essentiels : 冷氣 (lěngqì, climatisation — indispensable à Taiwan !), 洗衣機 (xǐyījī, machine à laver), 床 (chuáng, lit), 桌子 (zhuōzi, table), 椅子 (yǐzi, chaise). Remarquez : 洗 (laver) + 衣 (vêtement) + 機 (machine) = machine à laver.",
        },
        {
          type: "example",
          chinese: "房間裡有床和桌子",
          pinyin: "fángjiān lǐ yǒu chuáng hé zhuōzi",
          translation: "Dans la chambre il y a un lit et une table",
          content: "裡 (à l'intérieur de) place le lieu en contexte.",
        },
        {
          type: "text",
          content:
            "Pour les étages : 樓 (lóu) = étage. 一樓 (yī lóu) = rez-de-chaussée (premier étage en comptage taiwanais), 三樓 (sān lóu) = 3e étage. 電梯 (diàntī) = ascenseur.",
        },
        {
          type: "example",
          chinese: "我住在五樓，有電梯",
          pinyin: "wǒ zhù zài wǔ lóu, yǒu diàntī",
          translation: "J'habite au 5e étage, il y a un ascenseur",
          content: "住在 (habiter à) + étage.",
        },
        {
          type: "warning",
          content:
            "Attention : à Taiwan, le 一樓 correspond au rez-de-chaussée français. Le 二樓 taiwanais est le 1er étage français. Le comptage est identique au système américain.",
        },
      ],
    },
    {
      title: "Louer à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le marché locatif taiwanais a ses propres codes. Le site incontournable est 591.com.tw (五九一). C'est LE site pour chercher un appartement, l'équivalent de Leboncoin ou SeLoger en France. Il existe aussi des groupes Facebook et LINE dédiés aux expats.",
        },
        {
          type: "text",
          content:
            "Il existe trois grands types de logement en location. La 雅房 (yǎfáng) est une chambre dans un appartement partagé, avec cuisine et salle de bain communes. C'est l'option la moins chère. La 套房 (tàofáng) est un studio avec salle de bain privée, parfois une petite cuisine. C'est le choix le plus courant pour les étrangers. 整層 (zhěng céng) signifie un appartement entier, avec plusieurs pièces.",
        },
        {
          type: "example",
          chinese: "我想找一間套房，在台北",
          pinyin: "wǒ xiǎng zhǎo yì jiān tàofáng, zài Táiběi",
          translation: "Je cherche un studio à Taipei",
          content: "找 (chercher) + 間 (classificateur pour les pièces) + type de logement.",
        },
        {
          type: "text",
          content:
            "Le dépôt de garantie se dit 押金 (yājīn). Il est généralement de deux mois de loyer. Le contrat se dit 合約 (héyuē). Les contrats sont souvent d'un an minimum. Demandez toujours un reçu (收據 shōujù) quand vous payez le loyer.",
        },
        {
          type: "warning",
          content:
            "Méfiez-vous des 頂加 (dǐng jiā), aussi appelés 頂樓加蓋. Ce sont des constructions ajoutées illégalement sur le toit des immeubles. Les loyers sont très bas, mais ces structures sont mal isolées (très chaud l'été, froid l'hiver), parfois dangereuses, et le propriétaire peut recevoir un ordre de démolition. À éviter pour un premier logement.",
        },
        {
          type: "tip",
          content:
            "Conseil : lors de la visite, vérifiez la 冷氣 (clim, indispensable de mai à octobre), le 水壓 (shuǐyā, pression d'eau), et si le 網路 (wǎnglù, internet) est inclus. Demandez aussi si le 垃圾車 (lèsè chē, camion poubelle) passe à quelle heure — à Taiwan, il faut sortir poser ses poubelles quand il passe !",
        },
        {
          type: "text",
          content:
            "Le bail (合約 héyuē) à Taiwan est généralement de 1 an. Points à vérifier AVANT de signer : la caution (押金) est de 1 ou 2 mois ? L'électricité est-elle incluse (包水電) ou facturée séparément (按錶計費) ? Y a-t-il une clause de résiliation anticipée ? En général, 1 mois de préavis suffit. TOUJOURS signer un contrat écrit — même si le propriétaire dit que ce n'est pas nécessaire. Gardez une copie.",
        },
        {
          type: "tip",
          content:
            "Problèmes que TOUS les résidents étrangers rencontrent : 1) La moisissure (發霉) — Taiwan est très humide, surtout au nord. Achetez un déshumidificateur (除濕機) dès le premier mois. 2) Les cafards (蟑螂) — ils sont ÉNORMES à Taiwan (5-6 cm). Pas de panique, c'est normal. Spray anti-cafards au conbini. 3) Le bruit — les murs sont fins, les scooters sont bruyants. Visitez l'appart le SOIR avant de signer. 4) La clim qui fuit — 冷氣漏水, appelez le proprio (房東). 5) Le camion poubelle — il passe TOUS LES JOURS avec une musique (Für Elise ou A Maiden's Prayer). Vous devez sortir votre poubelle EN PERSONNE au moment où il passe.",
        },
        {
          type: "warning",
          content:
            "Le 頂加 (construction illégale sur le toit) : ces studios sont bon marché (5,000-8,000 NT$) mais dangereux — pas d'isolation (fournaise en été), risque d'incendie, et le gouvernement peut ordonner la démolition à tout moment. Vérifiez que votre logement n'est pas un 頂加 avant de signer.",
        },
        {
          type: "text",
          content:
            "Le marche immobilier taiwanais a ses propres regles. Voici le vocabulaire et les concepts essentiels pour trouver un logement :\n\nLes types de logement :\n- 雅房 (yǎfáng) : chambre simple dans un appartement partage. Salle de bain et cuisine communes. Le moins cher (4,000-8,000 NT$/mois a Taipei, soit environ 110-220 euros).\n- 套房 (tàofáng) : studio avec salle de bain privee. Pas toujours de cuisine. Le plus courant pour les etrangers (8,000-18,000 NT$/mois, soit 220-500 euros).\n- 整層住家 (zhěng céng zhùjiā) : appartement entier. Plus cher mais plus d'espace et d'independance.\n- 頂加 (dǐngjiā) : construction ajoutee sur le toit. ATTENTION : souvent illegales, mal isolees (fournaise en ete, froid en hiver), mais bon marche. Verifiez que ce n'est pas un 頂加 avant de signer.\n\nLe processus :\n- Cherchez sur 591.com.tw (le Leboncoin taiwanais pour l'immobilier). Le site est en chinois, mais vous pouvez utiliser Google Translate pour naviguer. Filtrez par 套房 et par quartier (區 qū).\n- La 押金 (yājīn, caution) est generalement de 2 mois de loyer. Certains proprios demandent 1 mois seulement pour les etrangers — negociez.\n- 包水電 (bāo shuǐdiàn) = charges incluses (eau + electricite). Tres courant pour les 套房. ATTENTION : en ete, la climatisation fait exploser la facture. Verifiez si l'electricite est vraiment incluse ou plafonnee. Certains proprios facturent l'electricite au compteur a un tarif majore (5-6 NT$/kWh au lieu du tarif normal de 2-3 NT$).\n- Le bail (合約 héyuē) est generalement de 1 an avec possibilite de partir avec 1 mois de preavis.\n- Demandez TOUJOURS a voir l'appartement de jour (pour la lumiere naturelle) ET le soir (pour le bruit du quartier).\n\nConseils supplementaires :\n- Verifiez la distance au MRT (metro). A Taipei, un appartement a moins de 5 minutes a pied du MRT coute 20-30% plus cher, mais le confort de vie est incomparable.\n- Inspectez les murs et plafonds pour des traces d'humidite ou de moisissure. Le climat taiwanais est tres humide et les problemes de moisissure sont extremement courants.\n- Demandez si le 垃圾車 (camion poubelle) passe pres de l'immeuble et a quelle heure. A Taiwan, il n'y a pas de bennes — vous devez sortir jeter vos poubelles quand le camion musical passe (generalement entre 17h et 21h). Si votre immeuble a une 垃圾間 (piece a poubelles commune), c'est un gros plus.\n- Le 熱水器 (rèshuǐqì, chauffe-eau) peut etre au gaz ou electrique. Le gaz est moins cher a l'usage mais verifiez que l'installation est securisee.\n- 寵物 (chǒngwù, animaux de compagnie) : beaucoup de proprietaires interdisent les animaux. Verifiez avant de signer si vous avez un animal.",
        },
        {
          type: "example",
          chinese: "這間套房在捷運站旁邊，很方便",
          pinyin: "zhè jiān tàofáng zài jiéyùn zhàn pángbiān, hěn fāngbiàn",
          translation: "Ce studio est a cote de la station de metro, tres pratique",
          content: "捷運 (jiéyùn) est le mot taiwanais pour le metro (MRT). 旁邊 = a cote de.",
        },
        {
          type: "example",
          chinese: "電費怎麼算？一度多少錢？",
          pinyin: "diànfèi zěnme suàn? yì dù duōshǎo qián?",
          translation: "Comment est calculee l'electricite ? Combien le kilowatt-heure ?",
          content: "Question essentielle si l'electricite n'est pas incluse. 度 = kWh en chinois.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous visitez un studio (套房) dans le quartier de Da'an à Taipei avec le propriétaire, 王先生 (Wáng xiānshēng).",
    lines: [
      {
        speaker: "你",
        chinese: "王先生，請問房租一個月多少錢？",
        pinyin: "Wáng xiānshēng, qǐngwèn fángzū yí ge yuè duōshǎo qián?",
        french: "M. Wang, combien coûte le loyer par mois ?",
      },
      {
        speaker: "王先生",
        chinese: "一個月一萬二，包水費和網路。",
        pinyin: "yí ge yuè yí wàn èr, bāo shuǐfèi hé wǎnglù.",
        french: "12 000 par mois, eau et internet inclus.",
      },
      {
        speaker: "你",
        chinese: "有冷氣嗎？",
        pinyin: "yǒu lěngqì ma?",
        french: "Il y a la climatisation ?",
      },
      {
        speaker: "王先生",
        chinese: "有，每個房間都有冷氣，電費自己付。",
        pinyin: "yǒu, měige fángjiān dōu yǒu lěngqì, diànfèi zìjǐ fù.",
        french: "Oui, chaque pièce a la clim. L'électricité est à votre charge.",
        note: "自己付 = payer soi-même. L'électricité n'est pas incluse, c'est courant.",
      },
      {
        speaker: "你",
        chinese: "押金多少？可以看一下廁所嗎？",
        pinyin: "yājīn duōshǎo? kěyǐ kàn yíxià cèsuǒ ma?",
        french: "Le dépôt c'est combien ? Je peux voir les toilettes ?",
      },
      {
        speaker: "王先生",
        chinese: "押金兩個月。來，廁所在這邊，有洗衣機。",
        pinyin: "yājīn liǎng ge yuè. lái, cèsuǒ zài zhèbiān, yǒu xǐyījī.",
        french: "Le dépôt c'est deux mois. Venez, les toilettes sont par ici, il y a une machine à laver.",
      },
    ],
  },

  keyPoints: [
    "有/沒有 pour exprimer l'existence ou la possession, 可以...嗎？ pour les demandes polies, 多少錢？ pour le prix.",
    "Les pièces : 房間 (chambre), 客廳 (salon), 廚房 (cuisine), 廁所 (toilettes), 陽台 (balcon). Les équipements : 冷氣 (clim), 洗衣機 (lave-linge).",
    "Types de logement : 雅房 (chambre partagée), 套房 (studio avec SDB), 整層 (appart entier). Chercher sur 591.com.tw.",
    "Vocabulaire financier : 房租 (loyer), 押金 (dépôt, généralement 2 mois), 包 (inclus), 合約 (contrat).",
  ],

  vocabulary: [
    {
      character: "房間",
      pinyin: "fángjiān",
      zhuyin: "ㄈㄤˊ ㄐㄧㄢ",
      french: "Chambre, pièce",
      english: "Room",
      example: {
        sentence: "這個房間很大。",
        pinyin: "zhège fángjiān hěn dà.",
        translation: "Cette chambre est grande.",
      },
    },
    {
      character: "廚房",
      pinyin: "chúfáng",
      zhuyin: "ㄔㄨˊ ㄈㄤˊ",
      french: "Cuisine",
      english: "Kitchen",
      example: {
        sentence: "廚房可以煮飯嗎？",
        pinyin: "chúfáng kěyǐ zhǔ fàn ma?",
        translation: "On peut cuisiner dans la cuisine ?",
      },
    },
    {
      character: "廁所",
      pinyin: "cèsuǒ",
      zhuyin: "ㄘㄜˋ ㄙㄨㄛˇ",
      french: "Toilettes, salle de bain",
      english: "Bathroom, toilet",
      example: {
        sentence: "廁所在哪裡？",
        pinyin: "cèsuǒ zài nǎlǐ?",
        translation: "Où sont les toilettes ?",
      },
    },
    {
      character: "陽台",
      pinyin: "yángtái",
      zhuyin: "ㄧㄤˊ ㄊㄞˊ",
      french: "Balcon",
      english: "Balcony",
      example: {
        sentence: "陽台可以晾衣服。",
        pinyin: "yángtái kěyǐ liàng yīfu.",
        translation: "On peut faire sécher le linge au balcon.",
      },
    },
    {
      character: "房租",
      pinyin: "fángzū",
      zhuyin: "ㄈㄤˊ ㄗㄨ",
      french: "Loyer",
      english: "Rent",
      example: {
        sentence: "房租一個月多少？",
        pinyin: "fángzū yí ge yuè duōshǎo?",
        translation: "Le loyer est de combien par mois ?",
      },
    },
    {
      character: "押金",
      pinyin: "yājīn",
      zhuyin: "ㄧㄚ ㄐㄧㄣ",
      french: "Dépôt de garantie",
      english: "Deposit",
      example: {
        sentence: "押金要兩個月。",
        pinyin: "yājīn yào liǎng ge yuè.",
        translation: "Le dépôt est de deux mois.",
      },
    },
    {
      character: "家具",
      pinyin: "jiājù",
      zhuyin: "ㄐㄧㄚ ㄐㄩˋ",
      french: "Meubles",
      english: "Furniture",
      example: {
        sentence: "房間有家具嗎？",
        pinyin: "fángjiān yǒu jiājù ma?",
        translation: "La chambre est meublée ?",
      },
    },
    {
      character: "冷氣",
      pinyin: "lěngqì",
      zhuyin: "ㄌㄥˇ ㄑㄧˋ",
      french: "Climatisation",
      english: "Air conditioning",
      example: {
        sentence: "台灣夏天一定要有冷氣。",
        pinyin: "Táiwān xiàtiān yídìng yào yǒu lěngqì.",
        translation: "En été à Taiwan, il faut absolument la clim.",
      },
    },
    {
      character: "洗衣機",
      pinyin: "xǐyījī",
      zhuyin: "ㄒㄧˇ ㄧ ㄐㄧ",
      french: "Machine à laver",
      english: "Washing machine",
      example: {
        sentence: "洗衣機在浴室裡面。",
        pinyin: "xǐyījī zài yùshì lǐmiàn.",
        translation: "La machine à laver est dans la salle de bain.",
      },
    },
    {
      character: "樓",
      pinyin: "lóu",
      zhuyin: "ㄌㄡˊ",
      french: "Étage, immeuble",
      english: "Floor, building",
      example: {
        sentence: "我住在三樓。",
        pinyin: "wǒ zhù zài sān lóu.",
        translation: "J'habite au 3e étage.",
      },
    },
    {
      character: "電梯",
      pinyin: "diàntī",
      zhuyin: "ㄉㄧㄢˋ ㄊㄧ",
      french: "Ascenseur",
      english: "Elevator",
      example: {
        sentence: "這棟大樓有電梯。",
        pinyin: "zhè dòng dàlóu yǒu diàntī.",
        translation: "Cet immeuble a un ascenseur.",
      },
    },
    {
      character: "鑰匙",
      pinyin: "yàoshi",
      zhuyin: "ㄧㄠˋ ㄕ˙",
      french: "Clé",
      english: "Key",
      example: {
        sentence: "鑰匙給你。",
        pinyin: "yàoshi gěi nǐ.",
        translation: "Voici la clé (pour toi).",
      },
    },
    {
      character: "合約",
      pinyin: "héyuē",
      zhuyin: "ㄏㄜˊ ㄩㄝ",
      french: "Contrat",
      english: "Contract, lease",
      example: {
        sentence: "合約是一年。",
        pinyin: "héyuē shì yì nián.",
        translation: "Le contrat est d'un an.",
      },
    },
    {
      character: "搬",
      pinyin: "bān",
      zhuyin: "ㄅㄢ",
      french: "Déménager, déplacer",
      english: "To move",
      example: {
        sentence: "我下個月搬家。",
        pinyin: "wǒ xià ge yuè bānjiā.",
        translation: "Je déménage le mois prochain.",
      },
    },
    {
      character: "住",
      pinyin: "zhù",
      zhuyin: "ㄓㄨˋ",
      french: "Habiter, vivre",
      english: "To live, to stay",
      example: {
        sentence: "你住在哪裡？",
        pinyin: "nǐ zhù zài nǎlǐ?",
        translation: "Tu habites où ?",
      },
    },
  ],

  exercises: [
    {
      id: "u13-ex1",
      type: "fill-blank",
      question: "___冷氣嗎？(Y a-t-il la climatisation ?)",
      correctAnswer: "有",
      options: ["有", "是", "在", "可以"],
      optionsHint: ["yǒu", "shì", "zài", "kěyǐ"],
      hint: "Quel mot signifie « il y a » ?",
    },
    {
      id: "u13-ex2",
      type: "translate",
      question: "Comment demander « Je peux visiter l'appartement ? »",
      correctAnswer: "可以看房嗎？",
      options: ["可以看房嗎？", "有看房嗎？", "要看房嗎？", "想看房嗎？"],
      optionsHint: ["kěyǐ kàn fáng ma?", "yǒu kàn fáng ma?", "yào kàn fáng ma?", "xiǎng kàn fáng ma?"],
    },
    {
      id: "u13-ex3",
      type: "comprehension",
      question: "Quelle est la différence entre 雅房 et 套房 ?",
      correctAnswer: "雅房 = chambre partagée (SDB commune), 套房 = studio avec SDB privée",
      options: [
        "雅房 = chambre partagée (SDB commune), 套房 = studio avec SDB privée",
        "雅房 = grand appartement, 套房 = petit appartement",
        "雅房 = meublé, 套房 = non meublé",
        "Ils signifient la même chose",
      ],
    },
    {
      id: "u13-ex4",
      type: "fill-blank",
      question: "房租___水電。(Le loyer inclut eau et électricité.)",
      correctAnswer: "包",
      options: ["包", "有", "是", "要"],
      optionsHint: ["bāo", "yǒu", "shì", "yào"],
      hint: "Quel mot signifie « inclus » ?",
    },
    {
      id: "u13-ex5",
      type: "translate",
      question: "Que signifie 押金兩個月 ?",
      correctAnswer: "Le dépôt de garantie est de deux mois",
      options: [
        "Le dépôt de garantie est de deux mois",
        "Le loyer est de deux mois",
        "Le contrat est de deux mois",
        "Il faut attendre deux mois",
      ],
    },
    {
      id: "u13-ex6",
      type: "comprehension",
      question: "Pourquoi faut-il se méfier des 頂加 (constructions sur le toit) ?",
      correctAnswer: "Elles sont illégales, mal isolées et risquent d'être démolies",
      options: [
        "Elles sont illégales, mal isolées et risquent d'être démolies",
        "Elles sont trop chères pour leur taille",
        "Elles n'ont pas de cuisine",
        "Elles sont toujours au rez-de-chaussée",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-16"],
};
