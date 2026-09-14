import type { Lesson } from "@/types";
import type { CourseSection } from "@/types/course";

const sections: CourseSection[] = [
  {
    title: "La culture du travail à Taiwan",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "La culture du travail à Taiwan est un mélange fascinant d'influence japonaise (rigueur, respect de la hiérarchie, heures supplémentaires) et de pragmatisme chinois. Les horaires officiels sont généralement de 9h à 18h, mais dans la pratique, beaucoup de Taiwanais restent bien au-delà — pas toujours parce qu'ils ont du travail, mais parce que partir avant le patron est mal vu dans certaines entreprises. Le concept de 加班 (jiābān, heures supplémentaires) est omniprésent. Certaines entreprises le considèrent comme normal et ne le paient pas (illégalement), d'autres le compensent correctement. La loi du travail taiwanaise (勞基法, Láojī Fǎ) protège théoriquement les salariés, mais son application varie considérablement d'une entreprise à l'autre.",
      },
      {
        type: "text",
        content:
          "La hiérarchie au travail est plus marquée qu'en France, mais moins rigide qu'au Japon. On s'adresse à son supérieur avec son titre : 經理 (jīnglǐ, manager), 主管 (zhǔguǎn, chef de service), 老闆 (lǎobǎn, patron). Tutoyer son patron ou l'appeler par son prénom serait impensable dans la plupart des entreprises taiwanaises. En revanche, entre collègues de même niveau, l'ambiance est souvent chaleureuse et détendue. Les startups et les entreprises tech ont une culture plus occidentale et plus horizontale, surtout celles fondées par des Taiwanais qui ont vécu à l'étranger.",
      },
      {
        type: "text",
        content:
          "Le 便當 (biàndāng, boîte-repas/bento) est au coeur de la pause déjeuner taiwanaise. Plutôt que de sortir au restaurant, beaucoup de Taiwanais commandent un 便當 livré au bureau ou descendent au rez-de-chaussée en acheter un pour 60-100 NT$. Le repas est rapide — 20-30 minutes maximum — et la sieste de midi (午休, wǔxiū) est une institution. Dans beaucoup d'entreprises, les lumières s'éteignent à 12h30 et tout le monde dort la tête sur le bureau pendant 30-60 minutes. Ce n'est pas de la paresse — c'est culturellement accepté et même encouragé pour la productivité.",
      },
      {
        type: "example",
        content: "Commander un bento au bureau",
        native: "你們要訂便當嗎？我幫大家一起訂。",
        romanization: "Nǐmen yào dìng biàndāng ma? Wǒ bāng dàjiā yìqǐ dìng.",
        translation:
          "Vous voulez commander des bentos ? Je commande pour tout le monde.",
      },
      {
        type: "comparison",
        content:
          "France vs Taiwan au travail : en France, la pause déjeuner dure 1-2 heures au restaurant avec les collègues. À Taiwan, c'est 30 minutes de 便當 suivi d'une sieste. En France, partir à 18h est normal. À Taiwan, partir avant son patron peut être mal vu. En France, exprimer son désaccord en réunion est valorisé. À Taiwan, on exprime ses réserves en privé, après la réunion, pour ne pas faire perdre la face au supérieur.",
      },
      {
        type: "tip",
        content:
          "L'expression 加油 (jiāyóu, littéralement « ajouter du carburant ») est omniprésente au travail. C'est un encouragement universel — « courage ! », « allez ! », « tu peux le faire ! ». Vous l'entendrez constamment : avant un examen, un projet difficile, ou simplement pour remonter le moral d'un collègue. Adoptez-la, les Taiwanais adoreront.",
      },
    ],
  },
  {
    title: "Communication professionnelle",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "LINE n'est pas seulement une application sociale à Taiwan — c'est un outil professionnel de premier plan. Beaucoup d'entreprises utilisent des groupes LINE pour la communication interne, les notifications urgentes, et même les demandes de congé. Votre patron vous écrira sur LINE le soir et le weekend. Les frontières entre vie professionnelle et personnelle sont floues à Taiwan, et LINE en est le principal vecteur. Astuce : créez un compte LINE séparé pour le travail si vous voulez préserver votre santé mentale, ou au minimum désactivez les notifications des groupes pro en dehors des heures de bureau.",
      },
      {
        type: "text",
        content:
          "Pour les emails professionnels en chinois, la structure est similaire au français mais avec des formules de politesse spécifiques. On commence par le titre de la personne suivi de son nom : 王經理您好 (Wáng jīnglǐ nín hǎo, « Bonjour Manager Wang »). Le corps du mail est direct et factuel. On termine par 謝謝 (xièxiè), 感謝 (gǎnxiè, « merci/reconnaissant »), ou 敬祝 順心 (jìng zhù shùnxīn, l'équivalent de « cordialement »). Les Taiwanais répondent généralement rapidement aux emails — si vous n'avez pas de réponse en 24h, un rappel poli par LINE est acceptable.",
      },
      {
        type: "example",
        content: "Email professionnel simple",
        native: "王經理您好，附件是這個月的報告，請您過目。謝謝！",
        romanization:
          "Wáng jīnglǐ nín hǎo, fùjiàn shì zhè ge yuè de bàogào, qǐng nín guòmù. Xièxiè!",
        translation:
          "Bonjour Manager Wang, veuillez trouver ci-joint le rapport du mois. Merci !",
      },
      {
        type: "text",
        content:
          "En réunion (開會, kāihuì), le vocabulaire de base est indispensable. La réunion commence souvent par un tour de table informel, puis le 主管 (zhǔguǎn, responsable) présente l'ordre du jour. Les expressions utiles : 我的看法是... (wǒ de kànfǎ shì..., « mon avis est... »), 我同意 (wǒ tóngyì, « je suis d'accord »), 我有一個問題 (wǒ yǒu yí ge wèntí, « j'ai une question »). Attention : en réunion, les Taiwanais évitent la confrontation directe. Si tout le monde dit 再考慮看看 (zài kǎolǜ kàn kàn, « on va y réfléchir »), cela signifie souvent que l'idée est rejetée poliment.",
      },
      {
        type: "example",
        content: "Donner son avis en réunion",
        native: "我覺得這個方案不錯，但是時間可能不夠。",
        romanization: "Wǒ juéde zhè ge fāng'àn búcuò, dànshì shíjiān kěnéng búgòu.",
        translation:
          "Je trouve que ce plan est bien, mais le temps pourrait être insuffisant.",
      },
      {
        type: "tip",
        content:
          "Les titres professionnels sont importants à Taiwan. Utilisez-les systématiquement : 老闆 (lǎobǎn, patron), 經理 (jīnglǐ, manager), 主任 (zhǔrèn, directeur de département), 老師 (lǎoshī, professeur — utilisé aussi pour tout expert ou mentor). En cas de doute, 先生 (xiānshēng, monsieur) ou 小姐 (xiǎojiě, mademoiselle) fonctionnent toujours.",
      },
    ],
  },
  {
    title: "Vocabulaire du bureau",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Le vocabulaire de bureau en chinois est logique et compositionnel, comme souvent en mandarin. 辦公室 (bàngōngshì, bureau/lieu de travail) se décompose en 辦公 (bàngōng, travailler) + 室 (shì, pièce). 會議室 (huìyì shì, salle de réunion) = 會議 (huìyì, réunion) + 室 (pièce). 電腦 (diànnǎo, ordinateur) = 電 (diàn, électricité) + 腦 (nǎo, cerveau). Une fois que vous comprenez les composants, le vocabulaire professionnel se construit presque tout seul.",
      },
      {
        type: "text",
        content:
          "Les expressions quotidiennes au bureau : 上班 (shàngbān, aller au travail / être au travail) et 下班 (xiàbān, quitter le travail) sont les deux expressions les plus fréquentes. 你幾點下班？ (Nǐ jǐ diǎn xiàbān? — Tu finis à quelle heure ?) est une question que vous entendrez tous les jours. 請假 (qǐngjià, demander un congé) est essentielle — en taiwanais : 事假 (shìjià, congé personnel), 病假 (bìngjià, arrêt maladie), 年假 (niánjià, congé annuel). 辛苦了 (xīnkǔ le, « tu as travaillé dur ») est un compliment-encouragement utilisé constamment entre collègues, surtout en fin de journée.",
      },
      {
        type: "example",
        content: "Expressions de bureau quotidiennes",
        native: "辛苦了！明天見。",
        romanization: "Xīnkǔ le! Míngtiān jiàn.",
        translation: "Bon travail ! À demain.",
      },
      {
        type: "example",
        content: "Demander un congé",
        native: "老闆，我明天想請假可以嗎？",
        romanization: "Lǎobǎn, wǒ míngtiān xiǎng qǐngjià kěyǐ ma?",
        translation:
          "Patron, est-ce que je pourrais prendre congé demain ?",
      },
      {
        type: "text",
        content:
          "Le matériel de bureau a aussi ses mots spécifiques : 印表機 (yìnbiǎo jī, imprimante — notez que c'est le terme taiwanais, en Chine on dit 打印機), 影印機 (yǐngyìn jī, photocopieuse), 會議室 (huìyì shì, salle de réunion), 茶水間 (cháshuǐ jiān, coin café/thé — littéralement « pièce eau-thé »). La 茶水間 est un lieu social crucial dans les bureaux taiwanais : c'est là qu'on discute, qu'on apprend les rumeurs, et qu'on tisse des liens avec ses collègues.",
      },
      {
        type: "tip",
        content:
          "L'expression 進步 (jìnbù, progrès/progresser) est très valorisée au travail à Taiwan. Si votre patron vous dit 你最近進步很多 (nǐ zuìjìn jìnbù hěn duō, « tu as beaucoup progressé récemment »), c'est un compliment majeur. Utilisez-la aussi pour encourager vos collègues — c'est toujours bien reçu.",
      },
      {
        type: "warning",
        content:
          "Ne parlez jamais de votre salaire (薪水, xīnshuǐ) ouvertement avec vos collègues à Taiwan. C'est considéré comme extrêmement indélicat, encore plus qu'en France. Certains contrats incluent même une clause de confidentialité salariale. Si quelqu'un vous demande combien vous gagnez, la réponse standard est 還好 (hái hǎo, « ça va ») ou 普通 (pǔtōng, « normal »).",
      },
    ],
  },
];

const workLesson: Lesson = {
  id: "lesson-08",
  slug: "work",
  title: "Le travail",
  titleNative: "工作",
  description:
    "Découvrez la culture du travail taiwanaise, la communication professionnelle et le vocabulaire du bureau.",
  icon: "💼",
  category: "daily",
  order: 8,
  sections,
  vocabulary: [
    {
      term: "工作",
      romanization: "gōngzuò",
      reading: "ㄍㄨㄥ ㄗㄨㄛˋ",
      french: "Travail / Travailler",
      english: "Work / To work",
      example: {
        sentence: "你在哪裡工作？",
        romanization: "Nǐ zài nǎlǐ gōngzuò?",
        translation: "Où travailles-tu ?",
      },
    },
    {
      term: "老闆",
      romanization: "lǎobǎn",
      reading: "ㄌㄠˇ ㄅㄢˇ",
      french: "Patron / Boss",
      english: "Boss",
      example: {
        sentence: "老闆今天不在。",
        romanization: "Lǎobǎn jīntiān bú zài.",
        translation: "Le patron n'est pas là aujourd'hui.",
      },
    },
    {
      term: "同事",
      romanization: "tóngshì",
      reading: "ㄊㄨㄥˊ ㄕˋ",
      french: "Collègue",
      english: "Colleague",
      example: {
        sentence: "我的同事都很友善。",
        romanization: "Wǒ de tóngshì dōu hěn yǒushàn.",
        translation: "Mes collègues sont tous très sympathiques.",
      },
    },
    {
      term: "會議",
      romanization: "huìyì",
      reading: "ㄏㄨㄟˋ ㄧˋ",
      french: "Réunion",
      english: "Meeting",
      example: {
        sentence: "下午三點有會議。",
        romanization: "Xiàwǔ sān diǎn yǒu huìyì.",
        translation: "Il y a une réunion à 15h.",
      },
    },
    {
      term: "加班",
      romanization: "jiābān",
      reading: "ㄐㄧㄚ ㄅㄢ",
      french: "Heures supplémentaires",
      english: "Overtime",
      example: {
        sentence: "今天又要加班。",
        romanization: "Jīntiān yòu yào jiābān.",
        translation: "Encore des heures sup' aujourd'hui.",
      },
    },
    {
      term: "薪水",
      romanization: "xīnshuǐ",
      reading: "ㄒㄧㄣ ㄕㄨㄟˇ",
      french: "Salaire",
      english: "Salary",
      example: {
        sentence: "薪水每個月底發。",
        romanization: "Xīnshuǐ měi ge yuèdǐ fā.",
        translation: "Le salaire est versé à la fin de chaque mois.",
      },
    },
    {
      term: "辦公室",
      romanization: "bàngōngshì",
      reading: "ㄅㄢˋ ㄍㄨㄥ ㄕˋ",
      french: "Bureau (lieu)",
      english: "Office",
      example: {
        sentence: "辦公室在三樓。",
        romanization: "Bàngōngshì zài sān lóu.",
        translation: "Le bureau est au troisième étage.",
      },
    },
    {
      term: "電腦",
      romanization: "diànnǎo",
      reading: "ㄉㄧㄢˋ ㄋㄠˇ",
      french: "Ordinateur",
      english: "Computer",
      example: {
        sentence: "我的電腦壞了。",
        romanization: "Wǒ de diànnǎo huài le.",
        translation: "Mon ordinateur est en panne.",
      },
    },
    {
      term: "報告",
      romanization: "bàogào",
      reading: "ㄅㄠˋ ㄍㄠˋ",
      french: "Rapport / Présentation",
      english: "Report / Presentation",
      example: {
        sentence: "報告寫好了嗎？",
        romanization: "Bàogào xiě hǎo le ma?",
        translation: "Le rapport est terminé ?",
      },
    },
    {
      term: "開會",
      romanization: "kāi huì",
      reading: "ㄎㄞ ㄏㄨㄟˋ",
      french: "Avoir une réunion",
      english: "To have a meeting",
      example: {
        sentence: "我們幾點開會？",
        romanization: "Wǒmen jǐ diǎn kāi huì?",
        translation: "On a la réunion à quelle heure ?",
      },
    },
    {
      term: "放假",
      romanization: "fàngjià",
      reading: "ㄈㄤˋ ㄐㄧㄚˋ",
      french: "Vacances / Avoir congé",
      english: "Holiday / To have a day off",
      example: {
        sentence: "明天放假！",
        romanization: "Míngtiān fàngjià!",
        translation: "Demain c'est congé !",
      },
    },
    {
      term: "請假",
      romanization: "qǐngjià",
      reading: "ㄑㄧㄥˇ ㄐㄧㄚˋ",
      french: "Prendre congé / Demander un jour",
      english: "To ask for leave",
      example: {
        sentence: "我想請兩天假。",
        romanization: "Wǒ xiǎng qǐng liǎng tiān jià.",
        translation: "Je voudrais prendre deux jours de congé.",
      },
    },
    {
      term: "努力",
      romanization: "nǔlì",
      reading: "ㄋㄨˇ ㄌㄧˋ",
      french: "Faire des efforts / Travailler dur",
      english: "To work hard / To make effort",
      example: {
        sentence: "他工作很努力。",
        romanization: "Tā gōngzuò hěn nǔlì.",
        translation: "Il travaille très dur.",
      },
    },
    {
      term: "加油",
      romanization: "jiāyóu",
      reading: "ㄐㄧㄚ ㄧㄡˊ",
      french: "Courage ! / Allez !",
      english: "Go for it! / Keep it up!",
      example: {
        sentence: "明天考試，加油！",
        romanization: "Míngtiān kǎoshì, jiāyóu!",
        translation: "Examen demain, courage !",
      },
    },
    {
      term: "進步",
      romanization: "jìnbù",
      reading: "ㄐㄧㄣˋ ㄅㄨˋ",
      french: "Progresser / Progrès",
      english: "Progress / To improve",
      example: {
        sentence: "你的中文進步很多！",
        romanization: "Nǐ de zhōngwén jìnbù hěn duō!",
        translation: "Ton chinois a beaucoup progressé !",
      },
    },
  ],
  phrases: [
    {
      native: "你在哪裡工作？",
      romanization: "Nǐ zài nǎlǐ gōngzuò?",
      reading: "ㄋㄧˇ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ ㄍㄨㄥ ㄗㄨㄛˋ",
      french: "Où travailles-tu ?",
      english: "Where do you work?",
    },
    {
      native: "我今天要加班。",
      romanization: "Wǒ jīntiān yào jiābān.",
      reading: "ㄨㄛˇ ㄐㄧㄣ ㄊㄧㄢ ㄧㄠˋ ㄐㄧㄚ ㄅㄢ",
      french: "Je dois faire des heures sup' aujourd'hui.",
      english: "I have to work overtime today.",
      context: "Expression malheureusement très courante à Taiwan.",
    },
    {
      native: "辛苦了！",
      romanization: "Xīnkǔ le!",
      reading: "ㄒㄧㄣ ㄎㄨˇ ㄌㄜ˙",
      french: "Bon travail ! / Tu as bien bossé !",
      english: "Good job! / You've worked hard!",
      context:
        "Expression universelle d'encouragement entre collègues. Utilisez-la souvent.",
    },
    {
      native: "下班了！走吧！",
      romanization: "Xiàbān le! Zǒu ba!",
      reading: "ㄒㄧㄚˋ ㄅㄢ ㄌㄜ˙ ㄗㄡˇ ㄅㄚ˙",
      french: "C'est la fin de la journée ! On y va !",
      english: "Work's over! Let's go!",
    },
    {
      native: "這個報告什麼時候要？",
      romanization: "Zhè ge bàogào shénme shíhòu yào?",
      reading: "ㄓㄜˋ ㄍㄜˋ ㄅㄠˋ ㄍㄠˋ ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ ㄧㄠˋ",
      french: "Ce rapport est pour quand ?",
      english: "When is this report due?",
    },
    {
      native: "我明天想請假。",
      romanization: "Wǒ míngtiān xiǎng qǐngjià.",
      reading: "ㄨㄛˇ ㄇㄧㄥˊ ㄊㄧㄢ ㄒㄧㄤˇ ㄑㄧㄥˇ ㄐㄧㄚˋ",
      french: "Je voudrais prendre congé demain.",
      english: "I'd like to take leave tomorrow.",
    },
    {
      native: "加油！你一定可以的！",
      romanization: "Jiāyóu! Nǐ yídìng kěyǐ de!",
      reading: "ㄐㄧㄚ ㄧㄡˊ ㄋㄧˇ ㄧˊ ㄉㄧㄥˋ ㄎㄜˇ ㄧˇ ㄉㄜ˙",
      french: "Courage ! Tu peux y arriver !",
      english: "Go for it! You can definitely do it!",
    },
  ],
  culturalNotes: [
    "La sieste de midi (午休, wǔxiū) est une tradition dans les entreprises taiwanaises. Les lumières s'éteignent, tout le monde dort la tête sur le bureau pendant 30-60 minutes. C'est culturellement normal et même encouragé.",
    "Le 便當 (biàndāng, bento/boîte-repas) est le déjeuner standard au bureau. Livré ou acheté au rez-de-chaussée, il coûte 60-100 NT$ et contient du riz, de la viande, des légumes. C'est rapide, économique et pratique.",
    "辛苦了 (xīnkǔ le) est probablement l'expression la plus utile au travail à Taiwan. Elle signifie « tu as travaillé dur / merci pour tes efforts ». Dites-la à vos collègues en partant le soir, après un projet difficile, ou quand quelqu'un vous rend service.",
    "L'expression 加油 (jiāyóu, littéralement « ajouter de l'huile/carburant ») est l'encouragement universel taiwanais. On l'utilise au travail, au sport, aux examens, dans la vie quotidienne. C'est le « courage ! » ou « allez ! » taiwanais.",
    "LINE est utilisé comme outil de communication professionnelle. Votre patron et vos collègues vous contacteront par LINE, y compris le soir et le weekend. Les frontières entre vie pro et perso sont plus floues qu'en France.",
  ],
  quiz: [
    {
      id: "work-q1",
      type: "term-to-french",
      question: "加班",
      correctAnswer: "Heures supplémentaires",
      options: [
        "Heures supplémentaires",
        "Salaire",
        "Vacances",
        "Réunion",
      ],
    },
    {
      id: "work-q2",
      type: "french-to-term",
      question: "Patron / Boss",
      correctAnswer: "老闆",
      options: ["老闆", "老師", "同事", "經理"],
    },
    {
      id: "work-q3",
      type: "term-to-french",
      question: "辛苦了",
      correctAnswer: "Bon travail ! / Tu as bien bossé !",
      options: [
        "Bon travail ! / Tu as bien bossé !",
        "Courage !",
        "Au revoir !",
        "Merci beaucoup !",
      ],
    },
    {
      id: "work-q4",
      type: "reading-to-term",
      question: "qǐngjià",
      correctAnswer: "請假",
      options: ["請假", "放假", "加班", "薪水"],
    },
    {
      id: "work-q5",
      type: "french-to-term",
      question: "Ordinateur",
      correctAnswer: "電腦",
      options: ["電腦", "電話", "電影", "電梯"],
    },
    {
      id: "work-q6",
      type: "term-to-french",
      question: "加油",
      correctAnswer: "Courage ! / Allez !",
      options: [
        "Courage ! / Allez !",
        "Heures supplémentaires",
        "Travailler dur",
        "Progresser",
      ],
    },
  ],
};

export default workLesson;
