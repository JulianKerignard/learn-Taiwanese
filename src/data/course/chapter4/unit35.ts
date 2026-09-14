import type { CourseUnit } from "@/types/course";

export const unit35: CourseUnit = {
  id: "unit-35",
  number: 35,
  title: "Lecture guidée 1 — Textes du quotidien",
  titleZh: "閱讀練習一：日常文本",
  chapter: 4,
  description:
    "Lecture guidée de textes authentiques simplifiés : messages LINE, annonces de colocation, posts Instagram et emails professionnels.",
  icon: "📖",

  sections: [
    {
      title: "Message LINE entre amis",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Ton ami taiwanais t'envoie un message sur LINE. Lis attentivement et essaie de comprendre le maximum avant de regarder la traduction.",
        },
        {
          type: "example",
          chinese:
            "嘿！你明天有空嗎？我想去九份玩，你要不要一起去？我們可以坐火車去，大概一個小時。那裡的芋圓很好吃！下午兩點出發好不好？",
          pinyin:
            "hēi! nǐ míngtiān yǒu kòng ma? wǒ xiǎng qù Jiǔfèn wán, nǐ yào bú yào yìqǐ qù? wǒmen kěyǐ zuò huǒchē qù, dàgài yí ge xiǎoshí. nàlǐ de yùyuán hěn hǎochī! xiàwǔ liǎng diǎn chūfā hǎo bù hǎo?",
          translation:
            "Hé ! Tu es libre demain ? Je voudrais aller à Jiufen, tu veux venir avec moi ? On peut y aller en train, environ une heure. Les boules de taro là-bas sont super bonnes ! On part à 14h, ça te va ?",
          content:
            "Ce message utilise un ton informel typique de LINE. 要不要 (tu veux ou pas ?) est une structure A不A classique. 好不好 (d'accord ?) demande l'approbation de l'autre.",
        },
        {
          type: "tip",
          content:
            "Stratégie de lecture : repère d'abord les mots que tu connais (明天, 去, 坐, 好吃), puis déduis le reste du contexte. Tu n'as pas besoin de comprendre chaque caractère pour saisir le message.",
        },
      ],
    },
    {
      title: "Annonce de colocation sur 591",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "591 (五九一) est le site principal pour chercher un logement à Taiwan. Voici une annonce typique de colocation.",
        },
        {
          type: "example",
          chinese:
            "套房出租\n地點：台北市大安區\n房租：每月8,000元（含水電）\n房間：約8坪，有冷氣、洗衣機\n交通：捷運站走路5分鐘\n聯絡方式：LINE ID: taipei_room\n可以養寵物，不可以抽煙",
          pinyin:
            "tàofáng chūzū\ndìdiǎn: Táiběi shì Dà'ān qū\nfángzū: měi yuè bā qiān yuán (hán shuǐdiàn)\nfángjiān: yuē bā píng, yǒu lěngqì, xǐyījī\njiāotōng: jiéyùn zhàn zǒulù wǔ fēnzhōng\nliánluò fāngshì: LINE ID: taipei_room\nkěyǐ yǎng chǒngwù, bù kěyǐ chōuyān",
          translation:
            "Studio à louer\nAdresse : Quartier Da'an, Taipei\nLoyer : 8 000 NT$/mois (eau et électricité incluses)\nChambre : environ 8 ping, avec climatisation et machine à laver\nTransport : 5 minutes à pied du métro\nContact : LINE ID: taipei_room\nAnimaux autorisés, interdiction de fumer",
          content:
            "Les annonces 591 suivent toujours ce format structuré. 含 = inclus. 約 = environ. 坪 est l'unité de surface taiwanaise (1 坪 ≈ 3,3 m²). Donc 8 坪 ≈ 26 m².",
        },
        {
          type: "tip",
          content:
            "Mots-clés des annonces immobilières : 套房 (studio), 雅房 (chambre sans salle de bain privée), 整層 (appartement entier), 押金 (caution), 含 (inclus), 不含 (non inclus).",
        },
      ],
    },
    {
      title: "Post Instagram d'un ami",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Un ami taiwanais a posté ceci sur Instagram. Les posts IG à Taiwan mélangent souvent chinois et emojis.",
        },
        {
          type: "example",
          chinese:
            "今天和朋友一起去了淡水！天氣很好，我們先吃了阿給，然後去了漁人碼頭看夕陽。超漂亮的！🌅 #淡水 #台灣生活 #好開心",
          pinyin:
            "jīntiān hé péngyǒu yìqǐ qù le Dànshuǐ! tiānqì hěn hǎo, wǒmen xiān chī le āgěi, ránhòu qù le Yúrén Mǎtóu kàn xīyáng. chāo piàoliang de! #Dànshuǐ #Táiwān shēnghuó #hǎo kāixīn",
          translation:
            "Aujourd'hui je suis allé à Tamsui avec des amis ! Il faisait beau, on a d'abord mangé du agei, puis on est allés au Fisherman's Wharf voir le coucher de soleil. Trop beau ! 🌅 #Tamsui #VieATaiwan #TropContent",
          content:
            "先...然後 (d'abord... ensuite) structure la chronologie. 超 = super/trop (langage familier très courant). 阿給 (āgěi) est une spécialité de Tamsui : du tofu farci de nouilles de verre.",
        },
        {
          type: "tip",
          content:
            "Le vocabulaire informel des réseaux sociaux taiwanais : 超 (super), 好 + adj (trop + adj), 的 en fin de phrase (emphase). Les hashtags sont souvent en chinois.",
        },
      ],
    },
    {
      title: "Email d'absence au travail",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Un collègue envoie un email à son chef pour prévenir qu'il ne vient pas travailler. Le registre est poli et formel.",
        },
        {
          type: "example",
          chinese:
            "王經理您好，\n我今天身體不舒服，可能感冒了。我想請一天假，明天應該可以上班。今天的報告我已經寫完了，放在您的桌上。\n謝謝，\n小林",
          pinyin:
            "Wáng jīnglǐ nín hǎo,\nwǒ jīntiān shēntǐ bù shūfu, kěnéng gǎnmào le. wǒ xiǎng qǐng yì tiān jià, míngtiān yīnggāi kěyǐ shàngbān. jīntiān de bàogào wǒ yǐjīng xiě wán le, fàng zài nín de zhuō shàng.\nxièxie,\nXiǎo Lín",
          translation:
            "Bonjour Manager Wang,\nJe ne me sens pas bien aujourd'hui, j'ai probablement un rhume. Je voudrais prendre un jour de congé, demain je devrais pouvoir venir travailler. Le rapport d'aujourd'hui est déjà terminé, il est sur votre bureau.\nMerci,\nXiao Lin",
          content:
            "Registre formel : 您 (vous de politesse), 經理 (manager). 請假 = demander un congé. 寫完了 = fini d'écrire (verbe + 完 = terminer l'action). 放在 = posé à/sur.",
        },
        {
          type: "tip",
          content:
            "Structure d'un email formel en chinois : titre de la personne + 您好 (bonjour), explication de la situation, solution/info utile, 謝謝 + nom. Toujours anticiper les besoins du destinataire.",
        },
      ],
    },
  ],

  keyPoints: [
    "Stratégie de lecture : repérer les mots connus, déduire le contexte, ne pas paniquer devant les caractères inconnus.",
    "Formats courants à Taiwan : messages LINE (informels, A不A), annonces 591 (structurées, mots-clés immobiliers), emails (formels, 您).",
    "Vocabulaire contextuel : 含 (inclus), 坪 (unité de surface), 超 (super, familier), 請假 (demander un congé), 寫完 (finir d'écrire).",
  ],

  vocabulary: [
    {
      character: "出租",
      pinyin: "chūzū",
      zhuyin: "ㄔㄨ ㄗㄨ",
      french: "À louer",
      english: "For rent",
      example: {
        sentence: "這裡有房間出租嗎？",
        pinyin: "zhèlǐ yǒu fángjiān chūzū ma?",
        translation: "Y a-t-il des chambres à louer ici ?",
      },
    },
    {
      character: "坪",
      pinyin: "píng",
      zhuyin: "ㄆㄧㄥˊ",
      french: "Ping (unité de surface, ≈ 3,3 m²)",
      english: "Ping (unit of area, ≈ 3.3 m²)",
      example: {
        sentence: "這間房間大概十坪。",
        pinyin: "zhè jiān fángjiān dàgài shí píng.",
        translation: "Cette chambre fait environ 10 ping.",
      },
    },
    {
      character: "寵物",
      pinyin: "chǒngwù",
      zhuyin: "ㄔㄨㄥˇ ㄨˋ",
      french: "Animal de compagnie",
      english: "Pet",
      example: {
        sentence: "你可以養寵物嗎？",
        pinyin: "nǐ kěyǐ yǎng chǒngwù ma?",
        translation: "Tu peux avoir un animal de compagnie ?",
      },
    },
    {
      character: "夕陽",
      pinyin: "xīyáng",
      zhuyin: "ㄒㄧ ㄧㄤˊ",
      french: "Coucher de soleil",
      english: "Sunset",
      example: {
        sentence: "淡水的夕陽很漂亮。",
        pinyin: "Dànshuǐ de xīyáng hěn piàoliang.",
        translation: "Le coucher de soleil à Tamsui est très beau.",
      },
    },
    {
      character: "請假",
      pinyin: "qǐngjià",
      zhuyin: "ㄑㄧㄥˇ ㄐㄧㄚˋ",
      french: "Demander un congé",
      english: "To ask for leave",
      example: {
        sentence: "我想請一天假。",
        pinyin: "wǒ xiǎng qǐng yì tiān jià.",
        translation: "Je voudrais prendre un jour de congé.",
      },
    },
  ],

  exercises: [
    {
      id: "u35-ex1",
      type: "comprehension",
      question: "Dans le message LINE, où veut aller l'ami ?",
      correctAnswer: "À Jiufen (九份)",
      options: [
        "À Jiufen (九份)",
        "À Tamsui (淡水)",
        "À Taipei (台北)",
        "À Tainan (台南)",
      ],
    },
    {
      id: "u35-ex2",
      type: "comprehension",
      question:
        "Comment proposent-ils d'aller à Jiufen ?",
      correctAnswer: "En train (坐火車)",
      options: [
        "En train (坐火車)",
        "En métro (坐捷運)",
        "En bus (坐公車)",
        "En voiture (開車)",
      ],
    },
    {
      id: "u35-ex3",
      type: "comprehension",
      question: "À quelle heure veut-il partir ?",
      correctAnswer: "14h (下午兩點)",
      options: [
        "14h (下午兩點)",
        "12h (中午十二點)",
        "10h (上午十點)",
        "16h (下午四點)",
      ],
    },
    {
      id: "u35-ex4",
      type: "comprehension",
      question: "Dans l'annonce 591, combien coûte le loyer par mois ?",
      correctAnswer: "8 000 NT$, eau et électricité incluses",
      options: [
        "8 000 NT$, eau et électricité incluses",
        "8 000 NT$, sans les charges",
        "5 000 NT$ par mois",
        "10 000 NT$ par mois",
      ],
    },
    {
      id: "u35-ex5",
      type: "comprehension",
      question: "Dans l'annonce 591, peut-on avoir un animal de compagnie ?",
      correctAnswer: "Oui, les animaux sont autorisés (可以養寵物)",
      options: [
        "Oui, les animaux sont autorisés (可以養寵物)",
        "Non, c'est interdit",
        "Ce n'est pas mentionné",
        "Seulement les chats",
      ],
    },
    {
      id: "u35-ex6",
      type: "comprehension",
      question: "Dans le post Instagram, qu'ont-ils fait EN PREMIER à Tamsui ?",
      correctAnswer: "Ils ont mangé du agei (先吃了阿給)",
      options: [
        "Ils ont mangé du agei (先吃了阿給)",
        "Ils ont regardé le coucher de soleil",
        "Ils sont allés au Fisherman's Wharf",
        "Ils ont pris des photos",
      ],
    },
    {
      id: "u35-ex7",
      type: "comprehension",
      question:
        "Dans le post Instagram, que signifie 超漂亮的 ?",
      correctAnswer: "Trop beau / super beau (超 = super, langage familier)",
      options: [
        "Trop beau / super beau (超 = super, langage familier)",
        "Pas très joli",
        "Un peu beau",
        "Extrêmement laid",
      ],
    },
    {
      id: "u35-ex8",
      type: "comprehension",
      question: "Dans l'email, pourquoi Xiao Lin est-il absent ?",
      correctAnswer: "Il ne se sent pas bien, il a probablement un rhume (身體不舒服，可能感冒了)",
      options: [
        "Il ne se sent pas bien, il a probablement un rhume (身體不舒服，可能感冒了)",
        "Il a un rendez-vous médical",
        "Il déménage aujourd'hui",
        "Il a un problème familial",
      ],
    },
    {
      id: "u35-ex9",
      type: "comprehension",
      question: "Où est le rapport mentionné dans l'email ?",
      correctAnswer: "Sur le bureau du manager Wang (放在您的桌上)",
      options: [
        "Sur le bureau du manager Wang (放在您的桌上)",
        "Envoyé par email",
        "Pas encore terminé",
        "Chez Xiao Lin",
      ],
    },
    {
      id: "u35-ex10",
      type: "comprehension",
      question:
        "Quelle est la surface approximative du studio dans l'annonce 591, en mètres carrés ?",
      correctAnswer: "Environ 26 m² (8 坪 × 3,3 m²)",
      options: [
        "Environ 26 m² (8 坪 × 3,3 m²)",
        "Environ 8 m²",
        "Environ 50 m²",
        "Environ 16 m²",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-22"],
};
