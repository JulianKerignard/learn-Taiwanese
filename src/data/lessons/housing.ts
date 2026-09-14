import type { Lesson } from "@/types";
import type { CourseSection } from "@/types/course";

const sections: CourseSection[] = [
  {
    title: "Trouver un logement à Taiwan",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Trouver un appartement à Taiwan est une aventure en soi, mais une aventure bien plus simple qu'en France. Pas de dossier Kafkaïen avec trois mois de fiches de paie, une caution parentale et une lettre de recommandation de votre ancien propriétaire. À Taiwan, le marché locatif est fluide, les prix sont (relativement) abordables, et les propriétaires sont généralement pragmatiques : si vous pouvez payer, vous pouvez louer. Le site de référence est 591.com.tw (租屋網, zūwū wǎng), l'équivalent taiwanais de SeLoger ou LeBonCoin pour l'immobilier. Le site est principalement en chinois, mais avec un traducteur et quelques mots-clés, vous vous en sortirez. Certains expatriés utilisent aussi les groupes Facebook comme « Apartments & Housing in Taipei » ou les forums de communautés étrangères.",
      },
      {
        type: "text",
        content:
          "Les types de logement à Taiwan ont une terminologie spécifique qu'il faut connaître pour ne pas se retrouver avec une mauvaise surprise. 雅房 (yǎfáng) désigne une chambre individuelle dans un appartement partagé — vous avez votre chambre mais la cuisine et la salle de bain sont communes. C'est l'option la moins chère. 套房 (tàofáng) est un studio avec salle de bain privée intégrée, parfois avec une petite kitchenette. C'est le choix préféré des jeunes actifs et des expatriés. 整層 (zhěngcéng) signifie un étage entier ou un appartement complet — salon, cuisine, chambres, salle de bain — le tout rien qu'à vous. Enfin, 獨立套房 (dúlì tàofáng) est un studio indépendant avec entrée privée, souvent au rez-de-chaussée ou dans un petit immeuble séparé.",
      },
      {
        type: "comparison",
        content:
          "Prix moyens par mois (2024-2025) : Taipei centre — 雅房 8,000-12,000 NT$, 套房 12,000-20,000 NT$, 整層 2 chambres 25,000-45,000 NT$. Taichung — 雅房 4,000-6,000 NT$, 套房 6,000-10,000 NT$, 整層 12,000-20,000 NT$. Kaohsiung — 雅房 3,500-5,500 NT$, 套房 5,000-8,000 NT$, 整層 10,000-18,000 NT$. Hsinchu (ville tech) — 套房 8,000-14,000 NT$, souvent meublé pour les ingénieurs.",
      },
      {
        type: "example",
        content: "Demander des informations sur un logement",
        chinese: "請問，這間套房還有嗎？",
        pinyin: "Qǐngwèn, zhè jiān tàofáng hái yǒu ma?",
        translation: "Excusez-moi, ce studio est-il encore disponible ?",
      },
      {
        type: "example",
        content: "Demander à visiter",
        chinese: "我可以去看房子嗎？",
        pinyin: "Wǒ kěyǐ qù kàn fángzi ma?",
        translation: "Est-ce que je peux aller visiter l'appartement ?",
      },
      {
        type: "tip",
        content:
          "Lors de la visite, vérifiez systématiquement : la pression de l'eau (ouvrez le robinet), la climatisation (allumez-la), les fenêtres (humidité ? moisissure ?), le réseau mobile (passez un appel), et la proximité du MRT ou d'un arrêt de bus. Demandez aussi si le loyer inclut l'eau, Internet et le câble — 含水含網 (hán shuǐ hán wǎng) signifie « eau et Internet inclus ».",
      },
      {
        type: "warning",
        content:
          "Attention aux arnaques sur 591 : si le prix semble trop beau pour être vrai, c'est probablement le cas. Méfiez-vous des annonces qui demandent un paiement avant la visite ou qui utilisent des photos manifestement volées. Privilégiez les annonces avec le badge 屋主 (wūzhǔ, propriétaire direct) plutôt que 仲介 (zhòngjiè, agent immobilier) pour éviter les frais d'agence.",
      },
    ],
  },
  {
    title: "La vie quotidienne en appartement",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "La première chose qui va vous surprendre dans la vie quotidienne à Taiwan, c'est le camion poubelle. Oui, vous avez bien lu. À Taiwan, il n'y a pas de bennes à ordures dans la rue. Les poubelles ne restent pas sur le trottoir. Au lieu de cela, un camion jaune — jouant la mélodie de « Für Elise » de Beethoven ou « A Maiden's Prayer » — passe dans votre quartier à heure fixe, généralement en fin d'après-midi ou en soirée. Quand vous entendez la musique au loin, vous attrapez vos sacs et vous courez dehors pour jeter vos déchets directement dans le camion. C'est un rituel social : vos voisins sont là, tout le monde discute en attendant le camion, et c'est une excellente occasion de pratiquer votre chinois. Si vous ratez le camion... vous gardez vos déchets jusqu'au lendemain.",
      },
      {
        type: "text",
        content:
          "Le tri des déchets est obligatoire et pris au sérieux. Les déchets généraux vont dans des sacs bleus payants (achetés en supermarché, le prix varie selon la taille). Les recyclables (plastique, papier, verre, métal) vont dans un deuxième camion qui suit le premier. Les déchets alimentaires (restes de repas) vont dans un seau séparé porté par un troisième véhicule. Ne mélangez jamais tout — les employés vérifient et peuvent refuser vos sacs s'ils contiennent des recyclables. Les amendes pour mauvais tri existent mais sont rarement appliquées pour les particuliers. En pratique, vos voisins vous corrigeront gentiment si vous faites une erreur.",
      },
      {
        type: "example",
        content: "Le camion poubelle arrive !",
        chinese: "垃圾車來了！快一點！",
        pinyin: "Lèsè chē lái le! Kuài yìdiǎn!",
        translation: "Le camion poubelle arrive ! Dépêche-toi !",
      },
      {
        type: "text",
        content:
          "Les factures à Taiwan se gèrent différemment de la France. L'électricité est facturée tous les deux mois par 台電 (Táidiàn, Taiwan Power Company). L'eau est également bimestrielle via 台水 (Táishuǐ). Le gaz naturel (si vous en avez — beaucoup d'appartements utilisent des bonbonnes de gaz ou des plaques électriques) est mensuel. Vous pouvez payer vos factures dans n'importe quel convenience store (7-Eleven, FamilyMart) en présentant la facture papier, ou configurer le prélèvement automatique. L'électricité coûte environ 2-4 NT$ par kWh selon votre consommation, et la facture monte en flèche l'été à cause de la climatisation — comptez 2,000-5,000 NT$ pour un studio climatisé en été.",
      },
      {
        type: "example",
        content: "Demander à propos des charges",
        chinese: "房租包含水電費嗎？",
        pinyin: "Fángzū bāohán shuǐdiàn fèi ma?",
        translation: "Le loyer inclut les charges d'eau et d'électricité ?",
      },
      {
        type: "tip",
        content:
          "Bonne nouvelle pour les relations de voisinage : les Taiwanais sont généralement discrets et respectueux. Peu de conflits de voisinage comparé à la France. Cependant, offrir un petit cadeau (des fruits, des pâtisseries) à vos voisins directs quand vous emménagez est un geste apprécié. Et si votre voisin âgé vous offre des fruits en retour, acceptez toujours avec un grand sourire et un 謝謝.",
      },
    ],
  },
  {
    title: "Le contrat et les problèmes courants",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Le contrat de location (合約, héyuē ou 租約, zūyuē) à Taiwan est généralement d'un an. La caution (押金, yājīn) est habituellement de deux mois de loyer, remboursable à la fin du bail si l'appartement est rendu en bon état. Certains propriétaires demandent un mois seulement, surtout pour les 套房. Le contrat est rédigé en chinois — demandez à un ami taiwanais de le relire avant de signer, ou utilisez les modèles standards du gouvernement (disponibles sur le site du ministère de l'Intérieur) qui protègent mieux les locataires. Points importants à vérifier : la durée du bail, les conditions de résiliation anticipée (souvent 1-2 mois de préavis), ce qui est inclus dans le loyer, et la responsabilité des réparations.",
      },
      {
        type: "example",
        content: "Négocier le contrat",
        chinese: "押金可以付一個月就好嗎？",
        pinyin: "Yājīn kěyǐ fù yí ge yuè jiù hǎo ma?",
        translation: "Est-ce qu'on peut payer seulement un mois de caution ?",
      },
      {
        type: "text",
        content:
          "Le 房東 (fángdōng, propriétaire/bailleur) est une figure centrale de votre vie locative à Taiwan. Les relations locataire-propriétaire sont généralement plus personnelles qu'en France : beaucoup de 房東 vivent dans le même immeuble, voire au même étage. Un bon 房東 réparera vite, sera compréhensif, et vous laissera tranquille. Un mauvais 房東 ignorera vos problèmes, augmentera le loyer sans prévenir, ou entrera dans votre appartement sans permission (ce qui est illégal). La communication avec le 房東 se fait presque exclusivement par LINE — gardez toujours des traces écrites de vos échanges.",
      },
      {
        type: "text",
        content:
          "Les problèmes courants dans les appartements taiwanais : la moisissure (發霉, fāméi) est le problème numéro un, surtout dans le nord de Taiwan où l'humidité est constante de février à mai. Les cafards (蟑螂, zhāngláng) sont omniprésents, quelle que soit la propreté de votre appartement — bienvenue en zone subtropicale. Les fuites d'eau (漏水, lòushuǐ) sont fréquentes dans les vieux immeubles. Et la climatisation qui tombe en panne (冷氣壞了, lěngqì huài le) en plein été est une urgence existentielle à ne pas sous-estimer quand il fait 38°C avec 90% d'humidité.",
      },
      {
        type: "example",
        content: "Signaler un problème au propriétaire",
        chinese: "房東，冷氣壞了，可以請人來修嗎？",
        pinyin: "Fángdōng, lěngqì huài le, kěyǐ qǐng rén lái xiū ma?",
        translation:
          "Propriétaire, la climatisation est cassée, pouvez-vous envoyer quelqu'un pour la réparer ?",
      },
      {
        type: "example",
        content: "Problème d'humidité",
        chinese: "牆壁發霉了，怎麼辦？",
        pinyin: "Qiángbì fāméi le, zěnme bàn?",
        translation: "Le mur a moisi, que faire ?",
      },
      {
        type: "warning",
        content:
          "Contre les cafards, les Taiwanais recommandent les pièges à colle (蟑螂屋, zhāngláng wū) et l'acide borique (硼酸, pénsuān). Les bombes insecticides ne font que les disperser temporairement. Gardez votre cuisine propre, ne laissez pas de nourriture à découvert, et videz votre poubelle régulièrement. Mais acceptez que le zéro cafard est un objectif irréaliste à Taiwan — même les appartements neufs en ont.",
      },
      {
        type: "tip",
        content:
          "Pour lutter contre l'humidité, investissez dans un déshumidificateur (除濕機, chúshī jī) — c'est l'achat numéro un recommandé par tous les expatriés à Taiwan. Vous serez choqué par la quantité d'eau qu'il extrait de l'air. Videz le réservoir tous les jours pendant la saison des pluies. Comptez 3,000-8,000 NT$ pour un bon modèle.",
      },
    ],
  },
];

const housingLesson: Lesson = {
  id: "lesson-06",
  slug: "housing",
  title: "Le logement",
  titleZh: "住房",
  description:
    "Trouvez un appartement, gérez votre quotidien et communiquez avec votre propriétaire à Taiwan.",
  icon: "🏠",
  category: "daily",
  order: 6,
  sections,
  vocabulary: [
    {
      character: "房間",
      pinyin: "fángjiān",
      zhuyin: "ㄈㄤˊ ㄐㄧㄢ",
      french: "Chambre / Pièce",
      english: "Room",
      example: {
        sentence: "這個房間很大。",
        pinyin: "Zhè ge fángjiān hěn dà.",
        translation: "Cette chambre est très grande.",
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
        pinyin: "Chúfáng kěyǐ zhǔ fàn ma?",
        translation: "On peut cuisiner dans la cuisine ?",
      },
    },
    {
      character: "廁所",
      pinyin: "cèsuǒ",
      zhuyin: "ㄘㄜˋ ㄙㄨㄛˇ",
      french: "Toilettes / Salle de bain",
      english: "Bathroom / Toilet",
      example: {
        sentence: "廁所在哪裡？",
        pinyin: "Cèsuǒ zài nǎlǐ?",
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
        sentence: "陽台可以曬衣服。",
        pinyin: "Yángtái kěyǐ shài yīfú.",
        translation: "On peut faire sécher le linge sur le balcon.",
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
        pinyin: "Fángzū yí ge yuè duōshǎo?",
        translation: "Combien coûte le loyer par mois ?",
      },
    },
    {
      character: "押金",
      pinyin: "yājīn",
      zhuyin: "ㄧㄚ ㄐㄧㄣ",
      french: "Caution / Dépôt de garantie",
      english: "Deposit",
      example: {
        sentence: "押金是兩個月的房租。",
        pinyin: "Yājīn shì liǎng ge yuè de fángzū.",
        translation: "La caution est de deux mois de loyer.",
      },
    },
    {
      character: "房東",
      pinyin: "fángdōng",
      zhuyin: "ㄈㄤˊ ㄉㄨㄥ",
      french: "Propriétaire / Bailleur",
      english: "Landlord",
      example: {
        sentence: "房東人很好。",
        pinyin: "Fángdōng rén hěn hǎo.",
        translation: "Le propriétaire est très gentil.",
      },
    },
    {
      character: "合約",
      pinyin: "héyuē",
      zhuyin: "ㄏㄜˊ ㄩㄝ",
      french: "Contrat",
      english: "Contract / Lease",
      example: {
        sentence: "合約簽一年。",
        pinyin: "Héyuē qiān yì nián.",
        translation: "Le contrat est signé pour un an.",
      },
    },
    {
      character: "冷氣",
      pinyin: "lěngqì",
      zhuyin: "ㄌㄥˇ ㄑㄧˋ",
      french: "Climatisation",
      english: "Air conditioning",
      example: {
        sentence: "夏天沒有冷氣不行。",
        pinyin: "Xiàtiān méiyǒu lěngqì bùxíng.",
        translation: "En été, on ne peut pas vivre sans climatisation.",
      },
    },
    {
      character: "洗衣機",
      pinyin: "xǐyījī",
      zhuyin: "ㄒㄧˇ ㄧ ㄐㄧ",
      french: "Machine à laver",
      english: "Washing machine",
      example: {
        sentence: "公寓有洗衣機嗎？",
        pinyin: "Gōngyù yǒu xǐyījī ma?",
        translation: "L'appartement a une machine à laver ?",
      },
    },
    {
      character: "搬家",
      pinyin: "bānjiā",
      zhuyin: "ㄅㄢ ㄐㄧㄚ",
      french: "Déménager",
      english: "To move (house)",
      example: {
        sentence: "我下個月要搬家。",
        pinyin: "Wǒ xià ge yuè yào bānjiā.",
        translation: "Je déménage le mois prochain.",
      },
    },
    {
      character: "垃圾車",
      pinyin: "lèsè chē",
      zhuyin: "ㄌㄜˋ ㄙㄜˋ ㄔㄜ",
      french: "Camion poubelle",
      english: "Garbage truck",
      example: {
        sentence: "垃圾車幾點來？",
        pinyin: "Lèsè chē jǐ diǎn lái?",
        translation: "À quelle heure passe le camion poubelle ?",
      },
    },
    {
      character: "鑰匙",
      pinyin: "yàoshi",
      zhuyin: "ㄧㄠˋ ㄕ˙",
      french: "Clé",
      english: "Key",
      example: {
        sentence: "我忘了帶鑰匙。",
        pinyin: "Wǒ wàng le dài yàoshi.",
        translation: "J'ai oublié de prendre mes clés.",
      },
    },
    {
      character: "樓",
      pinyin: "lóu",
      zhuyin: "ㄌㄡˊ",
      french: "Étage / Immeuble",
      english: "Floor / Building",
      example: {
        sentence: "我住在五樓。",
        pinyin: "Wǒ zhù zài wǔ lóu.",
        translation: "J'habite au cinquième étage.",
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
        pinyin: "Zhè dòng dàlóu yǒu diàntī.",
        translation: "Cet immeuble a un ascenseur.",
      },
    },
  ],
  phrases: [
    {
      chinese: "請問，這間套房還有嗎？",
      pinyin: "Qǐngwèn, zhè jiān tàofáng hái yǒu ma?",
      zhuyin: "ㄑㄧㄥˇ ㄨㄣˋ ㄓㄜˋ ㄐㄧㄢ ㄊㄠˋ ㄈㄤˊ ㄏㄞˊ ㄧㄡˇ ㄇㄚ˙",
      french: "Excusez-moi, ce studio est-il encore disponible ?",
      english: "Excuse me, is this studio still available?",
      context: "Pour contacter un propriétaire sur 591.com.tw.",
    },
    {
      chinese: "房租一個月多少錢？",
      pinyin: "Fángzū yí ge yuè duōshǎo qián?",
      zhuyin: "ㄈㄤˊ ㄗㄨ ㄧˊ ㄍㄜˋ ㄩㄝˋ ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ",
      french: "Combien coûte le loyer par mois ?",
      english: "How much is the monthly rent?",
    },
    {
      chinese: "包含水電費嗎？",
      pinyin: "Bāohán shuǐdiàn fèi ma?",
      zhuyin: "ㄅㄠ ㄏㄢˊ ㄕㄨㄟˇ ㄉㄧㄢˋ ㄈㄟˋ ㄇㄚ˙",
      french: "Les charges eau et électricité sont-elles incluses ?",
      english: "Are water and electricity included?",
      context: "Question essentielle avant de signer.",
    },
    {
      chinese: "我可以去看房子嗎？",
      pinyin: "Wǒ kěyǐ qù kàn fángzi ma?",
      zhuyin: "ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄑㄩˋ ㄎㄢˋ ㄈㄤˊ ㄗ˙ ㄇㄚ˙",
      french: "Est-ce que je peux visiter l'appartement ?",
      english: "Can I go see the apartment?",
    },
    {
      chinese: "冷氣壞了，可以修嗎？",
      pinyin: "Lěngqì huài le, kěyǐ xiū ma?",
      zhuyin: "ㄌㄥˇ ㄑㄧˋ ㄏㄨㄞˋ ㄌㄜ˙ ㄎㄜˇ ㄧˇ ㄒㄧㄡ ㄇㄚ˙",
      french: "La clim est cassée, on peut la réparer ?",
      english: "The AC is broken, can it be fixed?",
      context: "Message type à envoyer par LINE au 房東.",
    },
    {
      chinese: "垃圾車幾點來？",
      pinyin: "Lèsè chē jǐ diǎn lái?",
      zhuyin: "ㄌㄜˋ ㄙㄜˋ ㄔㄜ ㄐㄧˇ ㄉㄧㄢˇ ㄌㄞˊ",
      french: "À quelle heure passe le camion poubelle ?",
      english: "What time does the garbage truck come?",
      context: "Question vitale à poser à vos voisins dès le premier jour.",
    },
    {
      chinese: "我下個月要搬家。",
      pinyin: "Wǒ xià ge yuè yào bānjiā.",
      zhuyin: "ㄨㄛˇ ㄒㄧㄚˋ ㄍㄜˋ ㄩㄝˋ ㄧㄠˋ ㄅㄢ ㄐㄧㄚ",
      french: "Je déménage le mois prochain.",
      english: "I'm moving next month.",
    },
    {
      chinese: "可以養寵物嗎？",
      pinyin: "Kěyǐ yǎng chǒngwù ma?",
      zhuyin: "ㄎㄜˇ ㄧˇ ㄧㄤˇ ㄔㄨㄥˇ ㄨˋ ㄇㄚ˙",
      french: "Est-ce qu'on peut avoir des animaux ?",
      english: "Are pets allowed?",
    },
  ],
  culturalNotes: [
    "Le camion poubelle taiwanais joue « Für Elise » de Beethoven ou « A Maiden's Prayer » de Tekla Bądarzewska. Quand vous entendez cette mélodie dans la rue, c'est le signal : attrapez vos sacs poubelle et courez dehors ! C'est un rituel social quotidien.",
    "À Taiwan, la prononciation de 垃圾 est « lèsè » (et non « lājī » comme en Chine continentale). C'est l'une des différences de prononciation les plus marquées entre le mandarin taiwanais et le mandarin standard.",
    "Les Taiwanais ne mettent généralement pas de papier toilette dans la cuvette — il va dans une poubelle à côté. Cependant, les immeubles modernes et les lieux publics rénovés ont désormais des canalisations adaptées. Vérifiez les panneaux dans les toilettes.",
    "Le 4e étage est souvent évité dans les immeubles taiwanais car 四 (sì, quatre) se prononce comme 死 (sǐ, mourir). Certains immeubles sautent directement du 3e au 5e étage, comme les hôtels occidentaux sautent le 13.",
    "Un déshumidificateur (除濕機) est considéré comme un appareil de première nécessité à Taiwan, au même titre qu'un réfrigérateur. L'humidité peut atteindre 90% pendant la saison des pluies (梅雨季, méiyǔ jì) et tout moisit sans déshumidificateur.",
  ],
  quiz: [
    {
      id: "housing-q1",
      type: "character-to-french",
      question: "房租",
      correctAnswer: "Loyer",
      options: ["Loyer", "Caution", "Contrat", "Étage"],
    },
    {
      id: "housing-q2",
      type: "french-to-character",
      question: "Propriétaire / Bailleur",
      correctAnswer: "房東",
      options: ["房東", "房間", "房租", "房子"],
    },
    {
      id: "housing-q3",
      type: "character-to-french",
      question: "冷氣",
      correctAnswer: "Climatisation",
      options: ["Machine à laver", "Climatisation", "Ascenseur", "Balcon"],
    },
    {
      id: "housing-q4",
      type: "pinyin-to-character",
      question: "yàoshi",
      correctAnswer: "鑰匙",
      options: ["鑰匙", "押金", "樓", "電梯"],
    },
    {
      id: "housing-q5",
      type: "french-to-character",
      question: "Camion poubelle",
      correctAnswer: "垃圾車",
      options: ["洗衣機", "垃圾車", "冷氣", "電梯"],
    },
    {
      id: "housing-q6",
      type: "character-to-french",
      question: "搬家",
      correctAnswer: "Déménager",
      options: ["Déménager", "Cuisiner", "Visiter", "Réparer"],
    },
  ],
};

export default housingLesson;
