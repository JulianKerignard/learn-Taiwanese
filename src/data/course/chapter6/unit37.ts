import type { CourseUnit } from "@/types/course";

export const unit37: CourseUnit = {
  id: "unit-37",
  number: 37,
  title: "Lecture guidée 2 — Menus et annonces",
  titleZh: "閱讀練習二：菜單與公告",
  chapter: 6,
  description:
    "Lecture de documents réels de la vie à Taiwan : menus de restaurant, annonces immobilières, horaires de train et reçus de convenience store.",
  icon: "🍜",

  sections: [
    {
      title: "Lire un menu de restaurant",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Voici le menu d'un petit restaurant de quartier à Taiwan. Ces restaurants affichent souvent un menu simple sur le mur ou sur une feuille plastifiée. Les prix sont en NT$ (新台幣).",
        },
        {
          type: "example",
          chinese:
            "今日菜單\n\n飯類：\n滷肉飯 ......... 50元\n雞腿飯 ......... 90元\n排骨飯 ......... 85元\n素食便當 ....... 70元\n\n麵類：\n牛肉麵 ......... 120元\n陽春麵 ......... 40元\n\n飲料：\n珍珠奶茶 ....... 55元\n紅茶 ........... 25元\n檸檬綠茶 ....... 40元\n\n加滷蛋 +10元\n加大碗 +15元",
          pinyin:
            "jīnrì càidān\n\nfàn lèi:\nlǔròufàn ......... wǔshí yuán\njītuǐfàn ......... jiǔshí yuán\npáigǔfàn ......... bāshíwǔ yuán\nsùshí biàndāng ... qīshí yuán\n\nmiàn lèi:\nniúròumiàn ....... yībǎi èrshí yuán\nyángchūnmiàn ..... sìshí yuán\n\nyǐnliào:\nzhēnzhū nǎichá ... wǔshíwǔ yuán\nhóngchá .......... èrshíwǔ yuán\nníngméng lǜchá ... sìshí yuán\n\njiā lǔdàn +shí yuán\njiā dà wǎn +shíwǔ yuán",
          translation:
            "Menu du jour\n\nRiz :\nRiz au porc braisé ......... 50 NT$\nRiz au pilon de poulet ...... 90 NT$\nRiz aux côtes de porc ....... 85 NT$\nBento végétarien ............ 70 NT$\n\nNouilles :\nNouilles au boeuf ........... 120 NT$\nNouilles simples ............ 40 NT$\n\nBoissons :\nBubble tea .................. 55 NT$\nThé noir .................... 25 NT$\nThé vert au citron .......... 40 NT$\n\n+ oeuf braisé +10 NT$\n+ grande portion +15 NT$",
          content:
            "類 = catégorie. 飯類 = catégorie riz, 麵類 = catégorie nouilles. 加 = ajouter. Les menus taiwanais sont organisés par type de plat principal.",
        },
        {
          type: "tip",
          content:
            "Dans les petits restaurants, tu coches ta commande sur un bon de papier (點菜單). Pas besoin de parler, il suffit de savoir lire le menu !",
        },
      ],
    },
    {
      title: "Lire une annonce 591",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Une annonce plus détaillée sur 591. Ce type d'annonce est très courant quand tu cherches un appartement entier (整層住家) à Taiwan.",
        },
        {
          type: "example",
          chinese:
            "整層住家出租\n\n📍 新北市板橋區\n🚇 捷運板橋站 步行8分鐘\n💰 月租：15,000元\n📐 25坪 / 2房1廳1衛\n\n設備：冷氣×2、洗衣機、冰箱、熱水器\n押金：兩個月\n最短租期：一年\n\n❌ 不可養寵物\n❌ 不可抽煙\n✅ 可開伙\n\n看房請加 LINE：board_house",
          pinyin:
            "zhěng céng zhùjiā chūzū\n\ndìdiǎn: Xīnběi shì Bǎnqiáo qū\njiéyùn Bǎnqiáo zhàn bùxíng bā fēnzhōng\nyuè zū: yíwàn wǔqiān yuán\nèrshíwǔ píng / liǎng fáng yì tīng yí wèi\n\nshèbèi: lěngqì liǎng tái, xǐyījī, bīngxiāng, rèshuǐqì\nyājīn: liǎng ge yuè\nzuì duǎn zūqī: yì nián\n\nbù kě yǎng chǒngwù\nbù kě chōuyān\nkě kāihuǒ\n\nkàn fáng qǐng jiā LINE: board_house",
          translation:
            "Appartement entier à louer\n\n📍 Quartier Banqiao, Nouveau Taipei\n🚇 8 minutes à pied du métro Banqiao\n💰 Loyer mensuel : 15 000 NT$\n📐 25 ping / 2 chambres, 1 salon, 1 salle de bain\n\nÉquipements : 2 climatiseurs, machine à laver, réfrigérateur, chauffe-eau\nCaution : 2 mois\nDurée minimum : 1 an\n\n❌ Pas d'animaux\n❌ Pas de tabac\n✅ Cuisine autorisée\n\nPour visiter, ajoutez LINE : board_house",
          content:
            "2房1廳1衛 = 2 chambres, 1 salon, 1 salle de bain. C'est le format standard des annonces. 開伙 = cuisiner (littéralement « allumer le feu »). 押金 deux mois est le standard à Taiwan.",
        },
        {
          type: "tip",
          content:
            "Abréviations courantes : 房 (chambre), 廳 (salon), 衛 (salle de bain/toilettes). 3房2廳2衛 = 3 chambres, 2 salons, 2 salles de bain.",
        },
      ],
    },
    {
      title: "Lire un horaire de train",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Le 高鐵 (gāotiě) est le TGV taiwanais. Il relie Taipei (台北) à Zuoying/Kaohsiung (左營/高雄) en environ 1h30. Voici un extrait d'horaire.",
        },
        {
          type: "example",
          chinese:
            "高鐵時刻表 台北→左營\n\n車次 0603  07:00出發  08:36到達  票價 1,490元\n車次 0809  09:30出發  11:06到達  票價 1,490元\n車次 1205  12:00出發  13:36到達  票價 1,490元\n\n⚠️ 早鳥票65折起\n📱 可用APP訂票",
          pinyin:
            "gāotiě shíkèbiǎo Táiběi dào Zuǒyíng\n\nchēcì líng liù líng sān  qī diǎn chūfā  bā diǎn sānshíliù dàodá  piàojià yìqiān sìbǎi jiǔshí yuán\nchēcì líng bā líng jiǔ  jiǔ diǎn sānshí chūfā  shíyī diǎn líng liù dàodá  piàojià yìqiān sìbǎi jiǔshí yuán\nchēcì yī èr líng wǔ  shí'èr diǎn chūfā  shísān diǎn sānshíliù dàodá  piàojià yìqiān sìbǎi jiǔshí yuán\n\nzǎoniǎo piào liùwǔ zhé qǐ\nkě yòng APP dìng piào",
          translation:
            "Horaire THSR Taipei → Zuoying\n\nTrain 0603  Départ 07:00  Arrivée 08:36  Prix 1 490 NT$\nTrain 0809  Départ 09:30  Arrivée 11:06  Prix 1 490 NT$\nTrain 1205  Départ 12:00  Arrivée 13:36  Prix 1 490 NT$\n\n⚠️ Billet early bird à partir de 35% de réduction\n📱 Réservation possible via l'app",
          content:
            "車次 = numéro de train. 出發 = départ. 到達 = arrivée. 票價 = prix du billet. 早鳥票 = billet early bird (littéralement « billet oiseau matinal »). 65折 = 65% du prix = 35% de réduction. À Taiwan, 折 est l'inverse du français : 8折 = 80% du prix = 20% de réduction.",
        },
        {
          type: "warning",
          content:
            "Attention au système de réduction taiwanais : 折 (zhé) indique le pourcentage du prix PAYÉ, pas la réduction. 65折 = tu paies 65% du prix. C'est l'inverse du « -35% » français.",
        },
      ],
    },
    {
      title: "Lire un reçu",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Les reçus de 7-Eleven (統一超商) et autres convenience stores sont partout à Taiwan. Le reçu fait aussi office de billet de loterie (統一發票) — garde-les !",
        },
        {
          type: "example",
          chinese:
            "統一超商 台北信義店\n2026/03/21 14:30\n\n御飯糰(鮪魚) ×1  35元\n茶裏王綠茶 ×1    25元\n小計            60元\n\n悠遊卡付款\n卡號：****1234\n餘額：340元\n\n統一發票\nAB-12345678",
          pinyin:
            "tǒngyī chāoshāng Táiběi Xìnyì diàn\nèr líng èr liù nián sān yuè èrshíyī rì shísì diǎn sānshí\n\nyùfàntuán (wěiyú) yī ge  sānshíwǔ yuán\nchálǐwáng lǜchá yī ge  èrshíwǔ yuán\nxiǎojì  liùshí yuán\n\nyōuyóukǎ fùkuǎn\nkǎhào: ****yī èr sān sì\nyú'é: sānbǎi sìshí yuán\n\ntǒngyī fāpiào\nAB-yī èr sān sì wǔ liù qī bā",
          translation:
            "7-Eleven - Magasin Taipei Xinyi\n21/03/2026 14:30\n\nOnigiri (thon) ×1  35 NT$\nThé vert Chaliwang ×1  25 NT$\nTotal  60 NT$\n\nPaiement par EasyCard\nN° carte : ****1234\nSolde restant : 340 NT$\n\nFacture unifiée\nAB-12345678",
          content:
            "悠遊卡 (yōuyóukǎ) = EasyCard, la carte rechargeable pour le transport et les achats. 餘額 = solde restant. 統一發票 = facture unifiée, qui sert de billet de loterie national (tirage tous les 2 mois).",
        },
        {
          type: "tip",
          content:
            "Ne jette JAMAIS tes reçus à Taiwan ! La 統一發票 (facture unifiée) est un billet de loterie. Le tirage a lieu tous les 2 mois. Le premier prix est de 10 millions NT$ (~280 000€).",
        },
      ],
    },
  ],

  keyPoints: [
    "Menus : 類 (catégorie), 飯類/麵類/飲料 (riz/nouilles/boissons), 加 (ajouter un supplément). Les prix sont toujours en 元 (NT$).",
    "Annonces 591 : format X房X廳X衛, 押金 (caution), 租期 (durée du bail), 可/不可 (autorisé/interdit). 坪 ≈ 3,3 m².",
    "Documents pratiques : 車次 (n° de train), 出發/到達 (départ/arrivée), 折 = % du prix payé (pas la réduction !), 悠遊卡 (EasyCard), 統一發票 (facture-loterie).",
  ],

  vocabulary: [
    {
      character: "菜單",
      pinyin: "càidān",
      zhuyin: "ㄘㄞˋ ㄉㄢ",
      french: "Menu",
      english: "Menu",
      example: {
        sentence: "請給我菜單。",
        pinyin: "qǐng gěi wǒ càidān.",
        translation: "Le menu, s'il vous plaît.",
      },
    },
    {
      character: "飯類",
      pinyin: "fàn lèi",
      zhuyin: "ㄈㄢˋ ㄌㄟˋ",
      french: "Catégorie riz / plats de riz",
      english: "Rice dishes (category)",
      example: {
        sentence: "飯類有滷肉飯和雞腿飯。",
        pinyin: "fàn lèi yǒu lǔròufàn hé jītuǐfàn.",
        translation:
          "Dans la catégorie riz, il y a le riz au porc braisé et le riz au pilon de poulet.",
      },
    },
    {
      character: "麵類",
      pinyin: "miàn lèi",
      zhuyin: "ㄇㄧㄢˋ ㄌㄟˋ",
      french: "Catégorie nouilles",
      english: "Noodle dishes (category)",
      example: {
        sentence: "麵類最便宜的是陽春麵。",
        pinyin: "miàn lèi zuì piányi de shì yángchūnmiàn.",
        translation:
          "Le moins cher dans les nouilles, ce sont les nouilles simples.",
      },
    },
    {
      character: "飲料",
      pinyin: "yǐnliào",
      zhuyin: "ㄧㄣˇ ㄌㄧㄠˋ",
      french: "Boisson",
      english: "Beverage / drink",
      example: {
        sentence: "你要什麼飲料？",
        pinyin: "nǐ yào shénme yǐnliào?",
        translation: "Tu veux quelle boisson ?",
      },
    },
    {
      character: "加",
      pinyin: "jiā",
      zhuyin: "ㄐㄧㄚ",
      french: "Ajouter / supplément",
      english: "To add / extra",
      example: {
        sentence: "我要加一顆滷蛋。",
        pinyin: "wǒ yào jiā yì kē lǔdàn.",
        translation: "Je voudrais ajouter un oeuf braisé.",
      },
    },
    {
      character: "時刻表",
      pinyin: "shíkèbiǎo",
      zhuyin: "ㄕˊ ㄎㄜˋ ㄅㄧㄠˇ",
      french: "Horaire (de train/bus)",
      english: "Timetable / schedule",
      example: {
        sentence: "高鐵時刻表在網站上可以查。",
        pinyin: "gāotiě shíkèbiǎo zài wǎngzhàn shàng kěyǐ chá.",
        translation: "On peut consulter l'horaire du THSR sur le site web.",
      },
    },
    {
      character: "車次",
      pinyin: "chēcì",
      zhuyin: "ㄔㄜ ㄘˋ",
      french: "Numéro de train",
      english: "Train number",
      example: {
        sentence: "你的車次是幾號？",
        pinyin: "nǐ de chēcì shì jǐ hào?",
        translation: "C'est quel numéro de train ?",
      },
    },
    {
      character: "票價",
      pinyin: "piàojià",
      zhuyin: "ㄆㄧㄠˋ ㄐㄧㄚˋ",
      french: "Prix du billet",
      english: "Ticket price",
      example: {
        sentence: "票價是一千四百九十元。",
        pinyin: "piàojià shì yìqiān sìbǎi jiǔshí yuán.",
        translation: "Le prix du billet est de 1 490 NT$.",
      },
    },
  ],

  exercises: [
    {
      id: "u37-ex1",
      type: "comprehension",
      question: "Sur le menu, quel est le plat le plus cher ?",
      correctAnswer: "Le boeuf aux nouilles (牛肉麵) à 120 NT$",
      options: [
        "Le boeuf aux nouilles (牛肉麵) à 120 NT$",
        "Le riz au pilon de poulet (雞腿飯) à 90 NT$",
        "Le riz aux côtes de porc (排骨飯) à 85 NT$",
        "Le bubble tea (珍珠奶茶) à 55 NT$",
      ],
    },
    {
      id: "u37-ex2",
      type: "comprehension",
      question:
        "Si tu commandes un 滷肉飯 avec un oeuf braisé, combien ça coûte ?",
      correctAnswer: "60 NT$ (50 + 10 pour l'oeuf)",
      options: [
        "60 NT$ (50 + 10 pour l'oeuf)",
        "50 NT$",
        "65 NT$ (50 + 15 pour la grande portion)",
        "75 NT$",
      ],
    },
    {
      id: "u37-ex3",
      type: "comprehension",
      question: "Y a-t-il une option végétarienne sur le menu ?",
      correctAnswer: "Oui, le bento végétarien (素食便當) à 70 NT$",
      options: [
        "Oui, le bento végétarien (素食便當) à 70 NT$",
        "Non, il n'y a pas d'option végétarienne",
        "Oui, les nouilles simples (陽春麵)",
        "Oui, le thé vert au citron",
      ],
    },
    {
      id: "u37-ex4",
      type: "comprehension",
      question:
        "Dans l'annonce 591, combien de chambres a l'appartement ?",
      correctAnswer: "2 chambres (2房1廳1衛)",
      options: [
        "2 chambres (2房1廳1衛)",
        "1 chambre",
        "3 chambres",
        "25 chambres",
      ],
    },
    {
      id: "u37-ex5",
      type: "comprehension",
      question: "Peut-on cuisiner dans l'appartement de l'annonce 591 ?",
      correctAnswer: "Oui, la cuisine est autorisée (可開伙)",
      options: [
        "Oui, la cuisine est autorisée (可開伙)",
        "Non, c'est interdit",
        "Ce n'est pas mentionné",
        "Seulement le micro-ondes",
      ],
    },
    {
      id: "u37-ex6",
      type: "comprehension",
      question:
        "Combien faut-il payer au total pour emménager (loyer + caution) dans l'appartement 591 ?",
      correctAnswer: "45 000 NT$ (15 000 de loyer + 30 000 de caution pour 2 mois)",
      options: [
        "45 000 NT$ (15 000 de loyer + 30 000 de caution pour 2 mois)",
        "15 000 NT$",
        "30 000 NT$",
        "60 000 NT$",
      ],
    },
    {
      id: "u37-ex7",
      type: "comprehension",
      question:
        "Combien de temps dure le trajet Taipei-Zuoying en 高鐵 ?",
      correctAnswer: "Environ 1h36 (de 07:00 à 08:36)",
      options: [
        "Environ 1h36 (de 07:00 à 08:36)",
        "Environ 30 minutes",
        "Environ 3 heures",
        "Environ 2h30",
      ],
    },
    {
      id: "u37-ex8",
      type: "comprehension",
      question:
        "Que signifie 早鳥票65折 sur l'horaire du 高鐵 ?",
      correctAnswer:
        "Billet early bird à 65% du prix (tu paies 969 NT$ au lieu de 1 490)",
      options: [
        "Billet early bird à 65% du prix (tu paies 969 NT$ au lieu de 1 490)",
        "Réduction de 65% (tu paies 522 NT$)",
        "Le billet coûte 65 NT$",
        "Il reste 65 places disponibles",
      ],
    },
    {
      id: "u37-ex9",
      type: "comprehension",
      question: "Sur le reçu du 7-Eleven, combien a été payé au total ?",
      correctAnswer: "60 NT$ (35 + 25)",
      options: [
        "60 NT$ (35 + 25)",
        "35 NT$",
        "25 NT$",
        "340 NT$",
      ],
    },
    {
      id: "u37-ex10",
      type: "comprehension",
      question:
        "Comment le client a-t-il payé au 7-Eleven, et combien reste-t-il sur sa carte ?",
      correctAnswer: "Par EasyCard (悠遊卡), solde restant : 340 NT$",
      options: [
        "Par EasyCard (悠遊卡), solde restant : 340 NT$",
        "En espèces, pas de monnaie",
        "Par carte de crédit",
        "Par LINE Pay, solde : 1 234 NT$",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-36"],
};
