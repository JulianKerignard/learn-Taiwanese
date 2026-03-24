import type { CourseUnit } from "@/types/course";

export const unit12: CourseUnit = {
  id: "unit-12",
  number: 12,
  title: "Urgences et santé",
  titleZh: "緊急狀況和健康",
  chapter: 2,
  description:
    "Apprenez les phrases essentielles pour les urgences, consultez un médecin et découvrez l'excellent système de santé taiwanais.",
  icon: "🏥",

  sections: [
    {
      title: "Les numéros d'urgence",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "À Taiwan, deux numéros d'urgence à connaître absolument : 110 pour la police (警察 jǐngchá) et 119 pour les pompiers et les ambulances (消防 xiāofáng). Gravez-les dans votre mémoire.",
        },
        {
          type: "warning",
          content:
            "110 = police. 119 = pompiers/ambulance. C'est l'inverse de la France (17 police, 18 pompiers). Ne confondez pas !",
        },
        {
          type: "example",
          chinese: "救命！",
          pinyin: "jiùmìng!",
          translation: "Au secours !",
          content: "Le cri d'urgence universel. 救 = sauver, 命 = vie.",
        },
        {
          type: "example",
          chinese: "幫忙！",
          pinyin: "bāngmáng!",
          translation: "À l'aide !",
          content: "Moins dramatique que 救命, utilisé pour demander de l'aide en général.",
        },
        {
          type: "example",
          chinese: "請幫幫我",
          pinyin: "qǐng bāngbāng wǒ",
          translation: "S'il vous plaît, aidez-moi",
          content: "La version polie pour demander de l'aide à quelqu'un dans la rue.",
        },
        {
          type: "example",
          chinese: "我不舒服",
          pinyin: "wǒ bù shūfu",
          translation: "Je ne me sens pas bien",
          content: "舒服 (shūfu) = confortable/bien. 不舒服 = pas bien = malade.",
        },
        {
          type: "tip",
          content:
            "Taiwan est un pays très sûr. Le taux de criminalité est l'un des plus bas au monde. Vous pouvez vous promener la nuit sans crainte dans la plupart des quartiers. Les urgences les plus fréquentes pour les touristes sont liées à la santé (chaleur, nourriture inhabituelle).",
        },
      ],
    },
    {
      title: "Aller chez le médecin",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le système médical taiwanais comprend trois types d'établissements : 醫院 (yīyuàn, hôpital) pour les cas graves, 診所 (zhěnsuǒ, clinique) pour les consultations courantes, et 藥局 (yàojú, pharmacie) pour les médicaments sans ordonnance.",
        },
        {
          type: "example",
          chinese: "我要看醫生",
          pinyin: "wǒ yào kàn yīshēng",
          translation: "Je veux voir un médecin",
          content: "看 (kàn) = voir/regarder. 看醫生 = voir un médecin = consulter.",
        },
        {
          type: "text",
          content:
            "Pour décrire vos symptômes, la structure la plus simple est : 我 + partie du corps + 痛 (tòng, douleur). Le médecin comprendra immédiatement.",
        },
        {
          type: "example",
          chinese: "我頭痛",
          pinyin: "wǒ tóu tòng",
          translation: "J'ai mal à la tête",
          content: "頭 (tóu) = tête. 頭痛 = mal de tête.",
        },
        {
          type: "example",
          chinese: "我肚子痛",
          pinyin: "wǒ dùzi tòng",
          translation: "J'ai mal au ventre",
          content: "肚子 (dùzi) = ventre. Très fréquent après avoir trop mangé au marché de nuit !",
        },
        {
          type: "example",
          chinese: "我發燒",
          pinyin: "wǒ fāshāo",
          translation: "J'ai de la fièvre",
          content: "發燒 (fāshāo) = avoir de la fièvre. 燒 = brûler.",
        },
        {
          type: "example",
          chinese: "我感冒了",
          pinyin: "wǒ gǎnmào le",
          translation: "J'ai un rhume",
          content: "感冒 (gǎnmào) = rhume. Le 了 indique un changement d'état (je suis devenu malade).",
        },
        {
          type: "tip",
          content:
            "Dans les cliniques (診所), la consultation + les médicaments coûtent souvent moins de 300 NT$ (environ 9 euros) avec la carte de santé nationale. Sans assurance, comptez 500 à 1000 NT$. C'est très abordable comparé à la France ou aux USA.",
        },
        {
          type: "tip",
          content:
            "Pour signaler une allergie : **我對...過敏** (wǒ duì...guòmǐn) = je suis allergique à... Exemples : 我對花生過敏 (allergique aux cacahuètes), 我對海鮮過敏 (allergique aux fruits de mer). Phrase vitale à Taiwan où beaucoup de plats contiennent des cacahuètes ou des fruits de mer !",
        },
        {
          type: "example",
          content: "Signaler une allergie",
          chinese: "我對花生過敏，這個有花生嗎？",
          pinyin: "wǒ duì huāshēng guòmǐn, zhège yǒu huāshēng ma?",
          translation: "Je suis allergique aux cacahuètes, est-ce qu'il y a des cacahuètes ?",
        },
        {
          type: "text",
          content:
            "Les allergènes les plus courants dans la cuisine taiwanaise : cacahuètes (花生 huāshēng) — dans BEAUCOUP de plats et sauces, souvent cachées dans les sauces satay, les garnitures de nouilles et les desserts. Sésame (芝麻 zhīma) — huile et graines partout. Fruits de mer (海鮮 hǎixiān) — les crevettes séchées sont un condiment très courant, même dans des plats qui ne semblent pas contenir de fruits de mer. Soja (黃豆 huángdòu) — la sauce soja est omniprésente. Gluten (麩質 fúzhì) — difficile à éviter car la sauce soja contient du blé. Pour les intolérances moins sévères : 不要放味精 (bú yào fàng wèijīng — ne mettez pas de glutamate), 我不吃牛肉 (wǒ bù chī niúròu — je ne mange pas de bœuf — restriction courante chez certains bouddhistes taiwanais).",
        },
        {
          type: "text",
          content:
            "Taiwan est un PARADIS pour les végétariens. Le végétarisme bouddhiste (素食 sùshí) est profondément ancré dans la culture — environ 13% de la population est végétarienne, un des taux les plus élevés au monde. Il y a des restaurants 素食 partout, et même les convenience stores proposent des bentos végétariens. MAIS attention : le végétarisme bouddhiste exclut aussi les « cinq pungents » (五辛 wǔxīn) : l'ail (蒜 suàn), l'oignon (洋蔥 yángcōng), le poireau (韭菜 jiǔcài), la ciboulette (蔥 cōng), et l'échalote. Si vous dites 素食, on vous servira sans viande NI ail NI oignon. Pour du végétarien « occidental » avec ail et oignon, précisez : 我吃蛋奶素但可以吃蔥蒜 (wǒ chī dàn nǎi sù dàn kěyǐ chī cōng suàn).",
        },
        {
          type: "text",
          content:
            "Les niveaux de végétarisme sont officiellement classifiés par le gouvernement taiwanais et légalement obligatoires sur les emballages alimentaires. 全素 (quán sù) ou 純素 (chún sù) : végétalien strict, aucun produit animal, pas de cinq pungents. 蛋素 (dàn sù) : avec œufs. 奶素 (nǎi sù) : avec produits laitiers. 蛋奶素 (dàn nǎi sù) : lacto-ovo-végétarien. 鍋邊素 (guō biān sù) : cuit séparément mais dans la même cuisine que la viande. Cherchez ces symboles sur les emballages dans les convenience stores.",
        },
        {
          type: "example",
          content: "Dire qu'on est végétarien",
          chinese: "我吃素。請問有素食的菜嗎？",
          pinyin: "Wǒ chī sù. Qǐngwèn yǒu sùshí de cài ma?",
          translation:
            "Je suis végétarien. Avez-vous des plats végétariens ?",
        },
        {
          type: "tip",
          content:
            "L'eau du robinet n'est PAS potable à Taiwan. Ne buvez jamais l'eau du robinet directement. Les restaurants fournissent généralement de l'eau bouillie (開水 kāishuǐ) ou du thé gratuitement. Les fontaines d'eau potable (飲水機 yǐnshuǐ jī) sont courantes dans les parcs, stations de MRT et bâtiments publics — elles distribuent de l'eau filtrée. Apportez toujours une gourde réutilisable.",
        },
      ],
    },
    {
      title: "Le système de santé taiwanais",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le système de santé taiwanais est considéré comme l'un des meilleurs au monde. La 全民健保 (quánmín jiànbǎo, Assurance Maladie Nationale / NHI) couvre 99,9% de la population. Les soins sont de haute qualité et les temps d'attente courts : on peut souvent voir un spécialiste le jour même.",
        },
        {
          type: "text",
          content:
            "Si vous êtes résident à Taiwan (ARC), vous êtes couvert par la NHI après 6 mois. En tant que touriste, vous devrez payer de votre poche, mais les prix restent très raisonnables. Une consultation chez un généraliste coûte environ 500 à 800 NT$ (15 à 25 euros) sans NHI.",
        },
        {
          type: "text",
          content:
            "Les pharmacies (藥局) sont très répandues et le pharmacien peut vous conseiller pour les problèmes courants sans consultation médicale : rhume, maux de tête, problèmes digestifs. Beaucoup de pharmaciens parlent un peu anglais.",
        },
        {
          type: "example",
          chinese: "有感冒藥嗎？",
          pinyin: "yǒu gǎnmào yào ma?",
          translation: "Vous avez des médicaments contre le rhume ?",
          content: "藥 (yào) = médicament. 感冒藥 = médicament contre le rhume.",
        },
        {
          type: "example",
          chinese: "一天吃幾次？",
          pinyin: "yì tiān chī jǐ cì?",
          translation: "Combien de fois par jour (faut-il en prendre) ?",
          content: "Demandez toujours la posologie. 次 (cì) = fois.",
        },
        {
          type: "tip",
          content:
            "Conseil pratique : téléchargez l'application « 健保快易通 » (NHI Express) qui vous permet de trouver les cliniques et hôpitaux proches, de consulter les horaires et même de réserver en ligne. Disponible en anglais.",
        },
        {
          type: "text",
          content:
            "Le système de santé taiwanais est considéré comme l'un des meilleurs au monde. Voici tout ce qu'un étranger doit savoir :\n\n**全民健保 NHI (National Health Insurance)** :\n- Couvre 99.9% de la population taiwanaise\n- Si vous avez un ARC (Alien Resident Certificate) et travaillez à Taiwan, vous êtes AUTOMATIQUEMENT inscrit après 6 mois de résidence\n- Coût : ~750 NT$/mois (~19€), souvent partagé avec l'employeur\n- Couverture : consultations, hospitalisation, médicaments, urgences, dentaire, médecine traditionnelle chinoise\n- Copaiement : 50-420 NT$ par visite (moins de 10€ !)\n\n**Sans NHI** (touristes ou résidents < 6 mois) :\n- Vous pouvez quand même consulter, mais vous payez le plein tarif\n- Consultation en clinique : ~500-800 NT$ (12-20€)\n- Urgences à l'hôpital : ~1,000-3,000 NT$ (25-75€)\n- C'est toujours BEAUCOUP moins cher qu'en France ou aux USA\n\n**Où aller selon le problème** :\n- **Rhume, fièvre, petits problèmes** : 診所 (zhěnsuǒ, clinique de quartier). Il y en a littéralement à chaque coin de rue. Pas besoin de rendez-vous — prenez un numéro et attendez (rarement plus de 30 minutes).\n- **Problèmes plus sérieux** : 醫院 (yīyuàn, hôpital). Les grands hôpitaux ont des services d'urgence 24/7. Hôpitaux réputés à Taipei : 台大醫院 (NTU Hospital), 榮總 (Taipei Veterans General Hospital), 長庚 (Chang Gung).\n- **Médicaments simples** : 藥局 (yàojú, pharmacie). Les pharmaciens taiwanais sont très compétents et peuvent recommander des médicaments sans ordonnance pour les problèmes courants.",
        },
        {
          type: "text",
          content:
            "Les phrases qui peuvent vous sauver la vie :\n\n**Décrire la douleur** :\n- 我 + partie du corps + 痛 (j'ai mal au/à la...)\n- 我頭痛 (mal à la tête), 我肚子痛 (mal au ventre), 我牙齒痛 (mal aux dents)\n- 很痛 (très mal), 一點點痛 (un peu mal)\n- 從什麼時候開始？ (depuis quand ?) → 從昨天開始 (depuis hier)\n\n**Décrire les symptômes** :\n- 發燒 (fièvre) — le médecin prendra votre température : 幾度？(combien de degrés ?)\n- 咳嗽 (toux), 流鼻水 (nez qui coule), 喉嚨痛 (mal de gorge)\n- 拉肚子 (diarrhée) — courant les premières semaines à cause du changement d'alimentation\n- 過敏 (allergie) — 我對花生過敏 (allergique aux cacahuètes)\n- 我吐了 (j'ai vomi)\n\n**Au moment de payer** :\n- 有健保嗎？ (vous avez la NHI ?) → 有 ou 沒有\n- 掛號費 (frais d'inscription) : 50-150 NT$\n- 藥費 (frais de médicaments) : souvent inclus dans la NHI",
        },
        {
          type: "tip",
          content:
            "Particularités médicales taiwanaises que les Français ne connaissent pas :\n- **La médecine traditionnelle chinoise (中醫 zhōngyī)** est COUVERTE par la NHI. Vous pouvez consulter un médecin traditionnel pour de l'acupuncture (針灸), des massages thérapeutiques (推拿), ou des herbes (中藥) — tout est remboursé. Les Taiwanais combinent souvent médecine occidentale et traditionnelle.\n- **Les pharmacies de nuit** : contrairement à la France, beaucoup de pharmacies sont ouvertes tard (jusqu'à 22h-23h) et certaines 24/7 dans les quartiers animés.\n- **Le concept de 上火 (shànghuǒ)** : les Taiwanais croient que certains aliments sont 'chauds' (炸雞 poulet frit, 麻辣 épicé) et causent des inflammations. Si vous avez des boutons ou mal à la gorge, un Taiwanais vous dira 你上火了 et vous recommandera de boire du thé d'orge (大麥茶) ou une soupe de haricots verts (綠豆湯).\n- **多喝水** (bois beaucoup d'eau) : c'est LE conseil médical universel à Taiwan. Quel que soit votre problème, un Taiwanais vous dira 多喝水. C'est devenu un mème.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous avez attrapé un rhume et vous allez à la pharmacie (藥局) près de chez vous.",
    lines: [
      {
        speaker: "Vous",
        chinese: "你好，我感冒了。",
        pinyin: "nǐ hǎo, wǒ gǎnmào le.",
        french: "Bonjour, j'ai un rhume.",
      },
      {
        speaker: "Pharmacien",
        chinese: "有什麼症狀？頭痛嗎？發燒嗎？",
        pinyin: "yǒu shénme zhèngzhuàng? tóu tòng ma? fāshāo ma?",
        french: "Quels symptômes ? Mal de tête ? De la fièvre ?",
        note: "症狀 (zhèngzhuàng) = symptômes.",
      },
      {
        speaker: "Vous",
        chinese: "頭痛，還有一點發燒。",
        pinyin: "tóu tòng, háiyǒu yìdiǎn fāshāo.",
        french: "Mal de tête, et un peu de fièvre.",
      },
      {
        speaker: "Pharmacien",
        chinese: "好，這個感冒藥很有效。一天吃三次，飯後吃。",
        pinyin: "hǎo, zhège gǎnmào yào hěn yǒuxiào. yì tiān chī sān cì, fànhòu chī.",
        french: "D'accord, ce médicament contre le rhume est efficace. Trois fois par jour, après les repas.",
        note: "有效 (yǒuxiào) = efficace. 飯後 (fànhòu) = après les repas.",
      },
      {
        speaker: "Vous",
        chinese: "好的，多少錢？",
        pinyin: "hǎo de, duōshǎo qián?",
        french: "D'accord, c'est combien ?",
      },
      {
        speaker: "Pharmacien",
        chinese: "一百五十塊。多喝水，好好休息！",
        pinyin: "yì bǎi wǔshí kuài. duō hē shuǐ, hǎohǎo xiūxi!",
        french: "150 dollars. Buvez beaucoup d'eau et reposez-vous bien !",
        note: "多喝水 (duō hē shuǐ) = boire beaucoup d'eau. Le conseil universel des Taiwanais.",
      },
    ],
  },

  keyPoints: [
    "Numéros d'urgence : 110 (police), 119 (pompiers/ambulance). L'inverse de la France !",
    "我 + partie du corps + 痛 pour décrire une douleur. 我不舒服 pour « je ne me sens pas bien ».",
    "三 types d'établissements : 醫院 (hôpital), 診所 (clinique), 藥局 (pharmacie).",
    "La 全民健保 (NHI) couvre 99,9% des Taiwanais. Les soins sont de qualité et abordables, même sans assurance.",
  ],

  vocabulary: [
    {
      character: "醫院",
      pinyin: "yīyuàn",
      zhuyin: "ㄧ ㄩㄢˋ",
      french: "Hôpital",
      english: "Hospital",
      example: {
        sentence: "醫院在哪裡？",
        pinyin: "yīyuàn zài nǎlǐ?",
        translation: "Où est l'hôpital ?",
      },
    },
    {
      character: "藥局",
      pinyin: "yàojú",
      zhuyin: "ㄧㄠˋ ㄐㄩˊ",
      french: "Pharmacie",
      english: "Pharmacy",
      example: {
        sentence: "附近有藥局嗎？",
        pinyin: "fùjìn yǒu yàojú ma?",
        translation: "Il y a une pharmacie près d'ici ?",
      },
    },
    {
      character: "醫生",
      pinyin: "yīshēng",
      zhuyin: "ㄧ ㄕㄥ",
      french: "Médecin",
      english: "Doctor",
      example: {
        sentence: "我要看醫生。",
        pinyin: "wǒ yào kàn yīshēng.",
        translation: "Je veux voir un médecin.",
      },
    },
    {
      character: "不舒服",
      pinyin: "bù shūfu",
      zhuyin: "ㄅㄨˋ ㄕㄨ ㄈㄨ˙",
      french: "Ne pas se sentir bien / malade",
      english: "Unwell / uncomfortable",
      example: {
        sentence: "我不舒服，想休息。",
        pinyin: "wǒ bù shūfu, xiǎng xiūxi.",
        translation: "Je ne me sens pas bien, je veux me reposer.",
      },
    },
    {
      character: "頭痛",
      pinyin: "tóu tòng",
      zhuyin: "ㄊㄡˊ ㄊㄨㄥˋ",
      french: "Mal de tête",
      english: "Headache",
      example: {
        sentence: "我頭痛得很厲害。",
        pinyin: "wǒ tóu tòng de hěn lìhài.",
        translation: "J'ai très mal à la tête.",
      },
    },
    {
      character: "肚子痛",
      pinyin: "dùzi tòng",
      zhuyin: "ㄉㄨˋ ㄗ˙ ㄊㄨㄥˋ",
      french: "Mal au ventre",
      english: "Stomachache",
      example: {
        sentence: "我肚子痛，吃太多了。",
        pinyin: "wǒ dùzi tòng, chī tài duō le.",
        translation: "J'ai mal au ventre, j'ai trop mangé.",
      },
    },
    {
      character: "感冒",
      pinyin: "gǎnmào",
      zhuyin: "ㄍㄢˇ ㄇㄠˋ",
      french: "Rhume",
      english: "Cold (illness)",
      example: {
        sentence: "我感冒了。",
        pinyin: "wǒ gǎnmào le.",
        translation: "J'ai un rhume.",
      },
    },
    {
      character: "藥",
      pinyin: "yào",
      zhuyin: "ㄧㄠˋ",
      french: "Médicament",
      english: "Medicine",
      example: {
        sentence: "這個藥一天吃三次。",
        pinyin: "zhège yào yì tiān chī sān cì.",
        translation: "Ce médicament, trois fois par jour.",
      },
    },
    {
      character: "發燒",
      pinyin: "fāshāo",
      zhuyin: "ㄈㄚ ㄕㄠ",
      french: "Avoir de la fièvre",
      english: "To have a fever",
      example: {
        sentence: "你發燒嗎？",
        pinyin: "nǐ fāshāo ma?",
        translation: "Tu as de la fièvre ?",
      },
    },
    {
      character: "救命",
      pinyin: "jiùmìng",
      zhuyin: "ㄐㄧㄡˋ ㄇㄧㄥˋ",
      french: "Au secours !",
      english: "Help! / Save me!",
      example: {
        sentence: "救命！有人嗎？",
        pinyin: "jiùmìng! yǒu rén ma?",
        translation: "Au secours ! Il y a quelqu'un ?",
      },
    },
    {
      character: "幫忙",
      pinyin: "bāngmáng",
      zhuyin: "ㄅㄤ ㄇㄤˊ",
      french: "Aider / à l'aide",
      english: "Help / to help",
      example: {
        sentence: "可以幫忙嗎？",
        pinyin: "kěyǐ bāngmáng ma?",
        translation: "Vous pouvez m'aider ?",
      },
    },
    {
      character: "水",
      pinyin: "shuǐ",
      zhuyin: "ㄕㄨㄟˇ",
      french: "Eau",
      english: "Water",
      example: {
        sentence: "多喝水！",
        pinyin: "duō hē shuǐ!",
        translation: "Bois beaucoup d'eau !",
      },
    },
    {
      character: "過敏",
      pinyin: "guòmǐn",
      zhuyin: "ㄍㄨㄛˋ ㄇㄧㄣˇ",
      french: "Allergie",
      english: "Allergy / allergic",
      example: {
        sentence: "我對花生過敏。",
        pinyin: "wǒ duì huāshēng guòmǐn.",
        translation: "Je suis allergique aux cacahuètes.",
      },
    },
    {
      character: "花生",
      pinyin: "huāshēng",
      zhuyin: "ㄏㄨㄚ ㄕㄥ",
      french: "Cacahuète",
      english: "Peanut",
      example: {
        sentence: "這個有花生嗎？",
        pinyin: "zhège yǒu huāshēng ma?",
        translation: "Est-ce qu'il y a des cacahuètes ?",
      },
    },
    {
      character: "海鮮",
      pinyin: "hǎixiān",
      zhuyin: "ㄏㄞˇ ㄒㄧㄢ",
      french: "Fruits de mer",
      english: "Seafood",
      example: {
        sentence: "我對海鮮過敏。",
        pinyin: "wǒ duì hǎixiān guòmǐn.",
        translation: "Je suis allergique aux fruits de mer.",
      },
    },
  ],

  exercises: [
    {
      id: "u10-ex1",
      type: "comprehension",
      question: "Quel numéro appeler en cas d'urgence médicale à Taiwan ?",
      correctAnswer: "119",
      options: ["119", "110", "112", "911"],
    },
    {
      id: "u10-ex2",
      type: "translate",
      question: "Comment dit-on « J'ai mal à la tête » en chinois ?",
      correctAnswer: "我頭痛",
      options: ["我頭痛", "我肚子痛", "我不舒服", "我感冒了"],
      optionsHint: ["wǒ tóu tòng", "wǒ dùzi tòng", "wǒ bù shūfu", "wǒ gǎnmào le"],
    },
    {
      id: "u10-ex3",
      type: "fill-blank",
      question: "我___了。(J'ai un rhume.)",
      correctAnswer: "感冒",
      options: ["感冒", "發燒", "頭痛", "不舒服"],
      optionsHint: ["gǎnmào", "fāshāo", "tóu tòng", "bù shūfu"],
      hint: "Quel mot signifie « rhume » ?",
    },
    {
      id: "u10-ex4",
      type: "comprehension",
      question: "Où aller pour acheter des médicaments sans ordonnance ?",
      correctAnswer: "藥局 (pharmacie)",
      options: [
        "藥局 (pharmacie)",
        "醫院 (hôpital)",
        "診所 (clinique)",
        "便利商店 (convenience store)",
      ],
    },
    {
      id: "u10-ex5",
      type: "translate",
      question: "Que signifie 多喝水 ?",
      correctAnswer: "Boire beaucoup d'eau",
      options: [
        "Boire beaucoup d'eau",
        "Boire du thé chaud",
        "Prendre un médicament",
        "Aller se reposer",
      ],
    },
    {
      id: "u10-ex6",
      type: "fill-blank",
      question: "我要看___。(Je veux voir un médecin.)",
      correctAnswer: "醫生",
      options: ["醫生", "藥局", "醫院", "護士"],
      optionsHint: ["yīshēng", "yàojú", "yīyuàn", "hùshi"],
      hint: "Quel mot signifie « médecin » ?",
    },
    {
      id: "u10-listen",
      type: "listen",
      question: "我不舒服，我頭痛，可能感冒了。",
      correctAnswer: "Je ne me sens pas bien, j'ai mal à la tête, j'ai peut-être un rhume.",
      options: [
        "Je ne me sens pas bien, j'ai mal à la tête, j'ai peut-être un rhume.",
        "J'ai besoin d'aller à l'hôpital.",
        "Au secours, appelez une ambulance !",
        "Où est la pharmacie la plus proche ?",
      ],
      hint: "wǒ bù shūfu, wǒ tóu tòng, kěnéng gǎnmào le.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-11"],
};
