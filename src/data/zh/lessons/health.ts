import type { Lesson } from "@/types";
import type { CourseSection } from "@/types/course";

const sections: CourseSection[] = [
  {
    title: "Le système de santé taiwanais",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Le système de santé taiwanais est considéré comme l'un des meilleurs au monde, et pour une bonne raison. Le 全民健保 (quánmín jiànbǎo, assurance maladie nationale, connue sous le sigle NHI — National Health Insurance) couvre l'ensemble de la population taiwanaise et les résidents étrangers éligibles. Créé en 1995 et inspiré du système canadien, le NHI offre une couverture quasi-universelle avec des coûts dérisoires pour le patient. Une consultation chez un médecin généraliste coûte environ 150-300 NT$ (4-8€) tout compris, médicaments inclus. Une visite aux urgences : 450-750 NT$ (12-20€). Un scanner IRM : autour de 500 NT$ avec le NHI. Comparé à la France, c'est d'une simplicité et d'une accessibilité remarquables.",
      },
      {
        type: "text",
        content:
          "Le système distingue deux types d'établissements : les 診所 (zhěnsuǒ, cliniques) et les 醫院 (yīyuàn, hôpitaux). Les 診所 sont de petites cliniques de quartier, souvent spécialisées (médecine générale, dermatologie, ORL, dentaire, etc.). C'est là que vous irez pour les problèmes courants : rhume, grippe, douleurs, allergies, vaccins. Pas besoin de rendez-vous — vous vous présentez, vous prenez un numéro (掛號, guàhào), vous attendez, et vous voyez le médecin en 10-30 minutes. Les 醫院 sont les hôpitaux pour les cas sérieux : chirurgie, examens approfondis, urgences. Les grands hôpitaux comme 台大醫院 (NTU Hospital), 長庚 (Chang Gung) ou 榮總 (Veterans General Hospital) sont d'excellent niveau.",
      },
      {
        type: "example",
        content: "S'inscrire à la clinique",
        native: "我要掛號，看感冒。",
        romanization: "Wǒ yào guàhào, kàn gǎnmào.",
        translation: "Je voudrais m'inscrire, c'est pour un rhume.",
      },
      {
        type: "text",
        content:
          "Les pharmacies (藥局, yàojú) à Taiwan sont partout et facilement identifiables par leur croix verte. Contrairement à la France, beaucoup de médicaments sont disponibles sans ordonnance (成藥, chéngyào), y compris certains antibiotiques légers et anti-inflammatoires. Le pharmacien (藥師, yàoshī) est une ressource précieuse : il peut vous conseiller pour des problèmes mineurs sans avoir à consulter un médecin. Les chaînes comme 大樹藥局 (Dashu) ou 屈臣氏 (Watsons) sont omniprésentes. Si le médecin vous prescrit des médicaments, ceux-ci sont généralement préparés et distribués directement à la clinique — pas besoin de faire un détour à la pharmacie.",
      },
      {
        type: "comparison",
        content:
          "Coûts avec le NHI (approximatifs) : consultation en clinique 150-300 NT$ (4-8€), consultation spécialiste 200-400 NT$ (5-10€), urgences 450-750 NT$ (12-20€), hospitalisation (une nuit, chambre partagée) 300-600 NT$ (8-15€), médicaments prescrits inclus dans la consultation ou 50-200 NT$ supplémentaires. Sans le NHI : multipliez par 3-5. Le NHI est financé par des cotisations mensuelles de 750-1,500 NT$ selon le revenu.",
      },
      {
        type: "tip",
        content:
          "En tant qu'étranger avec un ARC (Alien Resident Certificate), vous avez accès au NHI après 6 mois de résidence. Pendant les 6 premiers mois, souscrivez une assurance privée ou préparez-vous à payer de votre poche — ce qui reste très abordable comparé à d'autres pays. Votre carte NHI (健保卡, jiànbǎo kǎ) est une carte à puce que vous présentez partout.",
      },
    ],
  },
  {
    title: "Chez le médecin",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Décrire ses symptômes en chinois suit une structure simple et logique : 我 + partie du corps + 痛/不舒服 (wǒ + body part + tòng/bù shūfú). 痛 (tòng) signifie « avoir mal » et 不舒服 (bù shūfú) signifie « ne pas se sentir bien / inconfortable ». Exemples : 我頭痛 (wǒ tóu tòng, j'ai mal à la tête), 我肚子痛 (wǒ dùzi tòng, j'ai mal au ventre), 我喉嚨痛 (wǒ hóulóng tòng, j'ai mal à la gorge). Pour être plus précis, ajoutez un adverbe : 很痛 (hěn tòng, très mal), 有一點痛 (yǒu yìdiǎn tòng, un peu mal), 越來越痛 (yuè lái yuè tòng, de plus en plus mal).",
      },
      {
        type: "example",
        content: "Décrire un mal de tête",
        native: "醫生，我頭很痛，已經痛了三天了。",
        romanization: "Yīshēng, wǒ tóu hěn tòng, yǐjīng tòng le sān tiān le.",
        translation:
          "Docteur, j'ai très mal à la tête, ça fait déjà trois jours.",
      },
      {
        type: "example",
        content: "Expliquer une fièvre",
        native: "我發燒了，三十八度五。",
        romanization: "Wǒ fāshāo le, sānshíbā dù wǔ.",
        translation: "J'ai de la fièvre, 38,5 degrés.",
      },
      {
        type: "text",
        content:
          "Le médecin vous posera des questions standard. Les plus courantes : 哪裡不舒服？(Nǎlǐ bù shūfú? — Où est-ce que ça ne va pas ?), 痛多久了？(Tòng duō jiǔ le? — Ça fait mal depuis combien de temps ?), 有沒有過敏？(Yǒu méiyǒu guòmǐn? — Avez-vous des allergies ?), 有沒有吃藥？(Yǒu méiyǒu chī yào? — Prenez-vous des médicaments ?). Après l'examen, il vous expliquera le diagnostic et la prescription. Les médicaments sont généralement conditionnés en sachets individuels (一包, yī bāo) avec les instructions de dosage écrites dessus : 一天三次 (yì tiān sān cì, trois fois par jour), 飯後吃 (fàn hòu chī, à prendre après le repas), 飯前吃 (fàn qián chī, à prendre avant le repas).",
      },
      {
        type: "example",
        content: "Parler de ses allergies",
        native: "我對花生過敏。",
        romanization: "Wǒ duì huāshēng guòmǐn.",
        translation: "Je suis allergique aux cacahuètes.",
      },
      {
        type: "example",
        content: "Comprendre la posologie",
        native: "這個藥一天吃三次，飯後吃。",
        romanization: "Zhè ge yào yì tiān chī sān cì, fàn hòu chī.",
        translation:
          "Ce médicament se prend trois fois par jour, après les repas.",
      },
      {
        type: "warning",
        content:
          "Si vous avez des allergies médicamenteuses (藥物過敏, yàowù guòmǐn), informez TOUJOURS le médecin et le pharmacien. L'expression clé : 我對___過敏 (Wǒ duì ___ guòmǐn, « Je suis allergique à ___ »). Préparez cette phrase à l'avance avec le nom du médicament concerné. Si vous ne connaissez pas le nom en chinois, montrez la boîte ou dites le nom anglais — les médecins taiwanais ont une bonne formation en anglais médical.",
      },
      {
        type: "tip",
        content:
          "Les médicaments taiwanais sont souvent sous forme de poudre en sachet plutôt que de comprimés. C'est normal et courant — la médecine chinoise a influencé cette pratique. Le goût est souvent amer, mais les sachets sont pré-dosés et pratiques. Mélangez la poudre avec de l'eau tiède si le goût est trop fort.",
      },
    ],
  },
  {
    title: "Urgences et médecine traditionnelle",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "En cas d'urgence à Taiwan : le numéro des pompiers et ambulances est le 119, le numéro de la police est le 110. Ces numéros fonctionnent même sans carte SIM. L'ambulance est gratuite et les temps d'intervention sont rapides, surtout en ville. Aux urgences (急診, jízhěn), le triage fonctionne par niveau de gravité : les cas vitaux passent en premier, les cas moins urgents attendent — parfois longtemps. Apportez votre carte NHI, votre ARC, et si possible un ami taiwanais pour vous aider avec la communication. Les grands hôpitaux de Taipei ont souvent du personnel anglophone, mais ce n'est pas garanti dans les petites villes.",
      },
      {
        type: "example",
        content: "Appeler les secours",
        native: "請幫我叫救護車！地址是...",
        romanization: "Qǐng bāng wǒ jiào jiùhù chē! Dìzhǐ shì...",
        translation: "Appelez une ambulance pour moi s'il vous plaît ! L'adresse est...",
      },
      {
        type: "text",
        content:
          "La médecine chinoise traditionnelle (中醫, zhōngyī) est très populaire à Taiwan et couverte par le NHI. Les cliniques de 中醫 proposent l'acupuncture (針灸, zhēnjiǔ), le massage thérapeutique (推拿, tuīná), les herbes médicinales (中藥, zhōngyào), et la moxibustion (艾灸, àijiǔ). Beaucoup de Taiwanais combinent médecine occidentale (西醫, xīyī) et médecine chinoise. C'est tout à fait accepté et les médecins des deux disciplines communiquent parfois. Pour des problèmes chroniques (maux de dos, digestion, insomnie, stress), la médecine chinoise peut être un bon complément.",
      },
      {
        type: "text",
        content:
          "L'expression 多喝水 (duō hē shuǐ, « bois plus d'eau ») est la prescription universelle à Taiwan, quel que soit votre problème. Mal à la tête ? 多喝水. Rhume ? 多喝水. Fatigue ? 多喝水. Rupture amoureuse ? 多喝水. C'est devenu un mème culturel que les Taiwanais utilisent avec autodérision. Mais blague à part, dans un climat subtropical humide et chaud, l'hydratation est effectivement cruciale — et les médecins taiwanais ont raison de le rappeler. Emportez toujours une bouteille d'eau, surtout l'été.",
      },
      {
        type: "example",
        content: "Le conseil médical universel taiwanais",
        native: "多喝水、多休息，很快就會好了。",
        romanization: "Duō hē shuǐ, duō xiūxí, hěn kuài jiù huì hǎo le.",
        translation:
          "Bois beaucoup d'eau, repose-toi bien, tu iras mieux bientôt.",
      },
      {
        type: "example",
        content: "Refuser poliment un aliment (allergie)",
        native: "不好意思，我不能吃海鮮，我過敏。",
        romanization: "Bùhǎoyìsi, wǒ bù néng chī hǎixiān, wǒ guòmǐn.",
        translation:
          "Excusez-moi, je ne peux pas manger de fruits de mer, je suis allergique.",
      },
      {
        type: "warning",
        content:
          "La dengue (登革熱, dēnggé rè) est présente dans le sud de Taiwan, surtout pendant la saison des pluies. Utilisez du répulsif anti-moustique, portez des manches longues le soir, et consultez immédiatement si vous avez une forte fièvre avec des douleurs articulaires après une piqûre de moustique. Le virus ne se transmet pas entre humains.",
      },
      {
        type: "tip",
        content:
          "Téléchargez l'application 全民健保快易通 (NHI Express) — elle vous permet de trouver des cliniques et hôpitaux à proximité, de vérifier votre historique médical, et de gérer votre carte NHI virtuellement. L'interface est en chinois mais fonctionnelle avec un traducteur.",
      },
    ],
  },
];

const healthLesson: Lesson = {
  id: "lesson-09",
  slug: "health",
  title: "La santé",
  titleNative: "健康",
  description:
    "Naviguez le système de santé taiwanais, décrivez vos symptômes et gérez les urgences.",
  icon: "🏥",
  category: "survival",
  order: 9,
  sections,
  vocabulary: [
    {
      term: "醫生",
      romanization: "yīshēng",
      reading: "ㄧ ㄕㄥ",
      french: "Médecin / Docteur",
      english: "Doctor",
      example: {
        sentence: "我要看醫生。",
        romanization: "Wǒ yào kàn yīshēng.",
        translation: "Je veux voir un médecin.",
      },
    },
    {
      term: "護士",
      romanization: "hùshì",
      reading: "ㄏㄨˋ ㄕˋ",
      french: "Infirmier/Infirmière",
      english: "Nurse",
      example: {
        sentence: "護士很親切。",
        romanization: "Hùshì hěn qīnqiè.",
        translation: "L'infirmière est très gentille.",
      },
    },
    {
      term: "藥",
      romanization: "yào",
      reading: "ㄧㄠˋ",
      french: "Médicament",
      english: "Medicine / Drug",
      example: {
        sentence: "這個藥飯後吃。",
        romanization: "Zhè ge yào fàn hòu chī.",
        translation: "Ce médicament se prend après le repas.",
      },
    },
    {
      term: "醫院",
      romanization: "yīyuàn",
      reading: "ㄧ ㄩㄢˋ",
      french: "Hôpital",
      english: "Hospital",
      example: {
        sentence: "最近的醫院在哪裡？",
        romanization: "Zuìjìn de yīyuàn zài nǎlǐ?",
        translation: "Où est l'hôpital le plus proche ?",
      },
    },
    {
      term: "診所",
      romanization: "zhěnsuǒ",
      reading: "ㄓㄣˇ ㄙㄨㄛˇ",
      french: "Clinique",
      english: "Clinic",
      example: {
        sentence: "我去診所看感冒。",
        romanization: "Wǒ qù zhěnsuǒ kàn gǎnmào.",
        translation: "Je vais à la clinique pour un rhume.",
      },
    },
    {
      term: "藥局",
      romanization: "yàojú",
      reading: "ㄧㄠˋ ㄐㄩˊ",
      french: "Pharmacie",
      english: "Pharmacy",
      example: {
        sentence: "藥局在便利商店旁邊。",
        romanization: "Yàojú zài biànlì shāngdiàn pángbiān.",
        translation: "La pharmacie est à côté du convenience store.",
      },
    },
    {
      term: "頭痛",
      romanization: "tóu tòng",
      reading: "ㄊㄡˊ ㄊㄨㄥˋ",
      french: "Mal de tête",
      english: "Headache",
      example: {
        sentence: "我頭痛得很厲害。",
        romanization: "Wǒ tóu tòng de hěn lìhài.",
        translation: "J'ai un terrible mal de tête.",
      },
    },
    {
      term: "發燒",
      romanization: "fāshāo",
      reading: "ㄈㄚ ㄕㄠ",
      french: "Avoir de la fièvre",
      english: "To have a fever",
      example: {
        sentence: "小孩發燒了。",
        romanization: "Xiǎohái fāshāo le.",
        translation: "L'enfant a de la fièvre.",
      },
    },
    {
      term: "感冒",
      romanization: "gǎnmào",
      reading: "ㄍㄢˇ ㄇㄠˋ",
      french: "Rhume / Être enrhumé",
      english: "Cold / To catch a cold",
      example: {
        sentence: "我感冒了，一直咳嗽。",
        romanization: "Wǒ gǎnmào le, yìzhí késòu.",
        translation: "J'ai attrapé un rhume, je n'arrête pas de tousser.",
      },
    },
    {
      term: "過敏",
      romanization: "guòmǐn",
      reading: "ㄍㄨㄛˋ ㄇㄧㄣˇ",
      french: "Allergie / Être allergique",
      english: "Allergy / To be allergic",
      example: {
        sentence: "我對蝦子過敏。",
        romanization: "Wǒ duì xiāzi guòmǐn.",
        translation: "Je suis allergique aux crevettes.",
      },
    },
    {
      term: "不舒服",
      romanization: "bù shūfú",
      reading: "ㄅㄨˋ ㄕㄨ ㄈㄨˊ",
      french: "Ne pas se sentir bien",
      english: "To feel unwell",
      example: {
        sentence: "我今天不舒服，想請假。",
        romanization: "Wǒ jīntiān bù shūfú, xiǎng qǐngjià.",
        translation: "Je ne me sens pas bien aujourd'hui, je voudrais prendre congé.",
      },
    },
    {
      term: "看醫生",
      romanization: "kàn yīshēng",
      reading: "ㄎㄢˋ ㄧ ㄕㄥ",
      french: "Aller chez le médecin",
      english: "To see a doctor",
      example: {
        sentence: "你應該去看醫生。",
        romanization: "Nǐ yīnggāi qù kàn yīshēng.",
        translation: "Tu devrais aller voir un médecin.",
      },
    },
    {
      term: "健保",
      romanization: "jiànbǎo",
      reading: "ㄐㄧㄢˋ ㄅㄠˇ",
      french: "Assurance maladie (NHI)",
      english: "National Health Insurance",
      example: {
        sentence: "你有健保卡嗎？",
        romanization: "Nǐ yǒu jiànbǎo kǎ ma?",
        translation: "Tu as ta carte de sécurité sociale ?",
      },
    },
    {
      term: "掛號",
      romanization: "guàhào",
      reading: "ㄍㄨㄚˋ ㄏㄠˋ",
      french: "S'inscrire (à la clinique)",
      english: "To register (at clinic)",
      example: {
        sentence: "請先去櫃台掛號。",
        romanization: "Qǐng xiān qù guìtái guàhào.",
        translation: "Veuillez d'abord vous inscrire au comptoir.",
      },
    },
    {
      term: "休息",
      romanization: "xiūxí",
      reading: "ㄒㄧㄡ ㄒㄧˊ",
      french: "Se reposer / Repos",
      english: "To rest",
      example: {
        sentence: "多休息，很快就會好。",
        romanization: "Duō xiūxí, hěn kuài jiù huì hǎo.",
        translation: "Repose-toi bien, tu iras mieux vite.",
      },
    },
  ],
  phrases: [
    {
      native: "我不舒服。",
      romanization: "Wǒ bù shūfú.",
      reading: "ㄨㄛˇ ㄅㄨˋ ㄕㄨ ㄈㄨˊ",
      french: "Je ne me sens pas bien.",
      english: "I don't feel well.",
      context: "La phrase de base pour dire que ça ne va pas.",
    },
    {
      native: "我頭痛。",
      romanization: "Wǒ tóu tòng.",
      reading: "ㄨㄛˇ ㄊㄡˊ ㄊㄨㄥˋ",
      french: "J'ai mal à la tête.",
      english: "I have a headache.",
    },
    {
      native: "我對___過敏。",
      romanization: "Wǒ duì ___ guòmǐn.",
      reading: "ㄨㄛˇ ㄉㄨㄟˋ ___ ㄍㄨㄛˋ ㄇㄧㄣˇ",
      french: "Je suis allergique à ___.",
      english: "I'm allergic to ___.",
      context: "Remplissez le blanc avec l'aliment ou le médicament.",
    },
    {
      native: "最近的醫院在哪裡？",
      romanization: "Zuìjìn de yīyuàn zài nǎlǐ?",
      reading: "ㄗㄨㄟˋ ㄐㄧㄣˋ ㄉㄜ˙ ㄧ ㄩㄢˋ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ",
      french: "Où est l'hôpital le plus proche ?",
      english: "Where is the nearest hospital?",
    },
    {
      native: "請幫我叫救護車！",
      romanization: "Qǐng bāng wǒ jiào jiùhù chē!",
      reading: "ㄑㄧㄥˇ ㄅㄤ ㄨㄛˇ ㄐㄧㄠˋ ㄐㄧㄡˋ ㄏㄨˋ ㄔㄜ",
      french: "Appelez une ambulance s'il vous plaît !",
      english: "Please call an ambulance!",
      context: "En cas d'urgence, composez le 119.",
    },
    {
      native: "多喝水，多休息。",
      romanization: "Duō hē shuǐ, duō xiūxí.",
      reading: "ㄉㄨㄛ ㄏㄜ ㄕㄨㄟˇ ㄉㄨㄛ ㄒㄧㄡ ㄒㄧˊ",
      french: "Bois beaucoup d'eau et repose-toi.",
      english: "Drink lots of water and rest well.",
      context: "Le conseil médical universel taiwanais — vous l'entendrez souvent !",
    },
    {
      native: "這個藥一天吃幾次？",
      romanization: "Zhè ge yào yì tiān chī jǐ cì?",
      reading: "ㄓㄜˋ ㄍㄜˋ ㄧㄠˋ ㄧˋ ㄊㄧㄢ ㄔ ㄐㄧˇ ㄘˋ",
      french: "Ce médicament, combien de fois par jour ?",
      english: "How many times a day should I take this medicine?",
    },
    {
      native: "我需要看醫生。",
      romanization: "Wǒ xūyào kàn yīshēng.",
      reading: "ㄨㄛˇ ㄒㄩ ㄧㄠˋ ㄎㄢˋ ㄧ ㄕㄥ",
      french: "J'ai besoin de voir un médecin.",
      english: "I need to see a doctor.",
    },
  ],
  culturalNotes: [
    "Le NHI (全民健保) taiwanais est classé parmi les meilleurs systèmes de santé au monde. Une consultation coûte 150-300 NT$ (4-8€) tout compris. Les étrangers résidents y ont accès après 6 mois.",
    "多喝水 (duō hē shuǐ, « bois plus d'eau ») est devenu un mème culturel à Taiwan. C'est le conseil que vous recevrez pour TOUT problème de santé, du rhume à la dépression. Les Taiwanais en rient eux-mêmes, mais dans un climat subtropical, l'hydratation est effectivement cruciale.",
    "La médecine chinoise traditionnelle (中醫) est largement pratiquée et couverte par le NHI. Beaucoup de Taiwanais consultent à la fois un médecin occidental et un praticien de médecine chinoise pour le même problème. L'acupuncture et les herbes médicinales sont très populaires.",
    "Numéros d'urgence à Taiwan : 119 pour les pompiers et ambulances, 110 pour la police. Ces numéros fonctionnent même sans carte SIM dans le téléphone.",
  ],
  quiz: [
    {
      id: "health-q1",
      type: "term-to-french",
      question: "醫生",
      correctAnswer: "Médecin / Docteur",
      options: [
        "Médecin / Docteur",
        "Infirmier/Infirmière",
        "Pharmacien",
        "Patient",
      ],
    },
    {
      id: "health-q2",
      type: "french-to-term",
      question: "Pharmacie",
      correctAnswer: "藥局",
      options: ["藥局", "醫院", "診所", "藥"],
    },
    {
      id: "health-q3",
      type: "term-to-french",
      question: "感冒",
      correctAnswer: "Rhume / Être enrhumé",
      options: [
        "Rhume / Être enrhumé",
        "Fièvre",
        "Mal de tête",
        "Allergie",
      ],
    },
    {
      id: "health-q4",
      type: "reading-to-term",
      question: "guòmǐn",
      correctAnswer: "過敏",
      options: ["過敏", "感冒", "發燒", "頭痛"],
    },
    {
      id: "health-q5",
      type: "french-to-term",
      question: "Avoir de la fièvre",
      correctAnswer: "發燒",
      options: ["發燒", "頭痛", "感冒", "不舒服"],
    },
    {
      id: "health-q6",
      type: "term-to-french",
      question: "掛號",
      correctAnswer: "S'inscrire (à la clinique)",
      options: [
        "S'inscrire (à la clinique)",
        "Prendre un médicament",
        "Appeler une ambulance",
        "Se reposer",
      ],
    },
  ],
};

export default healthLesson;
