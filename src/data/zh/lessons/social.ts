import type { Lesson } from "@/types";
import type { CourseSection } from "@/types/course";

const sections: CourseSection[] = [
  {
    title: "Faire des amis à Taiwan",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "Taiwan est l'un des pays les plus accueillants au monde pour les étrangers, et faire des amis y est étonnamment facile — à condition de connaître les bons canaux. Le premier et le plus efficace : les language exchanges (語言交換, yǔyán jiāohuàn). Le concept est simple : vous aidez un Taiwanais à pratiquer son français ou son anglais, et en échange il vous aide avec votre chinois. Ces échanges ont lieu dans des cafés, des bibliothèques, ou via des applications comme HelloTalk et Tandem. À Taipei, des événements de language exchange sont organisés chaque semaine dans des bars et cafés — cherchez « Taipei Language Exchange » sur Facebook ou Meetup. C'est un terreau fertile pour les amitiés, et beaucoup d'expatriés ont rencontré leur meilleur ami taiwanais lors de ces sessions.",
      },
      {
        type: "text",
        content:
          "Les groupes Facebook sont le nerf social de la vie expat à Taiwan. Rejoignez « Foreigners in Taiwan », « Taipei Expats », les groupes spécifiques à votre ville, et surtout les groupes d'intérêt : randonnée, vélo, cuisine, musique, jeux de société. Les Taiwanais utilisent massivement Facebook (contrairement à d'autres pays asiatiques où il est délaissé) et rejoignent volontiers ces communautés mixtes. Le sport est un autre excellent vecteur social : inscrivez-vous dans une salle de sport, un cours de yoga, une équipe de basketball ou de badminton. Les Taiwanais adorent le sport collectif et intégreront facilement un étranger motivé.",
      },
      {
        type: "example",
        content: "Proposer un échange linguistique",
        native: "我想找語言交換的夥伴，你有興趣嗎？",
        romanization: "Wǒ xiǎng zhǎo yǔyán jiāohuàn de huǒbàn, nǐ yǒu xìngqù ma?",
        translation:
          "Je cherche un partenaire de language exchange, ça t'intéresse ?",
      },
      {
        type: "example",
        content: "Inviter quelqu'un à sortir",
        native: "這個週末你有空嗎？我們一起去爬山吧！",
        romanization: "Zhè ge zhōumò nǐ yǒu kòng ma? Wǒmen yìqǐ qù páshān ba!",
        translation:
          "Tu es libre ce weekend ? Allons faire une rando ensemble !",
      },
      {
        type: "tip",
        content:
          "LINE est l'application de messagerie numéro un à Taiwan — pas WhatsApp, pas WeChat. Si vous rencontrez quelqu'un et voulez rester en contact, demandez son LINE ID. La phrase magique : 可以加你的LINE嗎？(Kěyǐ jiā nǐ de LINE ma? — Est-ce que je peux t'ajouter sur LINE ?). C'est l'équivalent taiwanais de « on échange nos numéros ? ».",
      },
      {
        type: "warning",
        content:
          "Les Taiwanais sont extrêmement aimables et diront souvent « oui, on devrait se voir ! » (我們應該約出來！) par politesse, sans forcément avoir l'intention de donner suite. Ne le prenez pas personnellement. Si quelqu'un annule trois fois de suite, il essaie probablement de décliner poliment sans vous dire non directement — c'est un code culturel important à comprendre.",
      },
    ],
  },
  {
    title: "Sorties et loisirs",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Le KTV (卡拉OK, kǎlā OK) est LE loisir national taiwanais. Oubliez le karaoké occidental minable dans un bar bruyant — le KTV taiwanais, c'est des salles privées luxueuses (包廂, bāoxiāng) avec écran géant, système son professionnel, et service de nourriture et boissons livré directement dans votre salle. Les chaînes principales sont 好樂迪 (Holiday KTV) et 錢櫃 (Cashbox). On y va entre amis, en famille, entre collègues, ou même en rendez-vous amoureux. Les prix varient de 200 à 500 NT$ par personne pour 3 heures. L'ambiance est festive et décontractée — personne ne juge votre voix. Le KTV est une institution sociale, et refuser une invitation au KTV est presque aussi impoli que refuser une invitation à dîner.",
      },
      {
        type: "text",
        content:
          "Le 火鍋 (huǒguō, fondue chinoise/hotpot) est l'autre grande activité sociale à Taiwan. On s'assoit autour d'une marmite de bouillon fumant, on commande des ingrédients crus (viande, légumes, tofu, nouilles, fruits de mer), et on les fait cuire ensemble à table. C'est convivial, interactif, et c'est un excellent cadre pour pratiquer son chinois car la conversation coule naturellement. Les chaînes populaires comme 馬辣 (Mala) ou 鼎王 (Tripod King) proposent le 吃到飽 (chī dào bǎo, buffet à volonté) pour 400-700 NT$. L'hiver, les Taiwanais font du hotpot plusieurs fois par semaine.",
      },
      {
        type: "example",
        content: "Proposer un KTV",
        native: "我們今天晚上去唱KTV好不好？",
        romanization: "Wǒmen jīntiān wǎnshàng qù chàng KTV hǎo bù hǎo?",
        translation: "On va chanter au KTV ce soir, ça te dit ?",
      },
      {
        type: "text",
        content:
          "Les marchés de nuit (夜市, yèshì) ne sont pas seulement des lieux pour manger — ce sont des lieux de vie sociale. On y retrouve ses amis, on flâne, on joue à des jeux d'adresse (tir, pêche aux crevettes, attrape-peluche), on mange des en-cas et on discute. Les sources chaudes (溫泉, wēnquán) sont une autre sortie populaire, surtout dans le nord (Beitou, Jiaoxi, Wulai). La randonnée (爬山, páshān) est le sport le plus pratiqué à Taiwan — l'île est couverte de montagnes et les sentiers sont excellents. Et le cinéma (看電影, kàn diànyǐng) est abordable — environ 280-350 NT$ le ticket, avec popcorn sucré comme tradition locale.",
      },
      {
        type: "example",
        content: "Proposer une activité",
        native: "週末要不要一起去泡溫泉？",
        romanization: "Zhōumò yào bú yào yìqǐ qù pào wēnquán?",
        translation: "Ce weekend, on va aux sources chaudes ensemble ?",
      },
      {
        type: "tip",
        content:
          "Pour le KTV, apprenez quelques chansons chinoises populaires — même si vous chantez mal, les Taiwanais adoreront votre effort. Suggestions pour débutants : 月亮代表我的心 (Yuèliàng dàibiǎo wǒ de xīn, « La lune représente mon coeur ») de Teresa Teng — c'est LA chanson que tout le monde connaît. Ou 小幸運 (Xiǎo xìngyùn) de Hebe Tien pour un choix plus moderne.",
      },
    ],
  },
  {
    title: "Les codes sociaux",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "L'expression 我請你 (wǒ qǐng nǐ, « je t'invite ») est au coeur de la culture sociale taiwanaise. Quand quelqu'un dit 我請你, cela signifie qu'il paie l'addition — et il est sincère. À Taiwan, la bataille pour l'addition est un sport national. Dans un groupe d'amis ou de collègues, plusieurs personnes se disputeront le droit de payer, parfois avec une énergie comique. La règle implicite : l'aîné paie pour le cadet, le supérieur hiérarchique pour le subordonné, celui qui a invité paie. En tant qu'étranger, on vous invitera souvent — acceptez avec gratitude la première fois, puis insistez pour payer la fois suivante. Le va-et-vient de l'invitation réciproque est un ciment social essentiel.",
      },
      {
        type: "example",
        content: "La bataille de l'addition",
        native: "今天我請客！不用客氣！",
        romanization: "Jīntiān wǒ qǐngkè! Bùyòng kèqì!",
        translation: "Aujourd'hui c'est moi qui invite ! Pas de politesses !",
      },
      {
        type: "text",
        content:
          "Les cadeaux (禮物, lǐwù) suivent des règles précises à Taiwan. Quand on est invité chez quelqu'un, on apporte des fruits de qualité, des pâtisseries, ou un cadeau de sa région d'origine. On ne donne JAMAIS de montre ou d'horloge (送鐘, sòng zhōng, sonne comme 送終, sòng zhōng, « accompagner aux funérailles »), ni de parapluie (傘, sǎn, sonne comme 散, sàn, « se séparer »), ni d'objets en lots de quatre (quatre = mort). On n'emballe pas les cadeaux en blanc ou noir (couleurs de deuil). Le rouge et le doré sont les couleurs porte-bonheur. Et un cadeau se refuse poliment une ou deux fois avant d'être accepté — c'est un rituel de modestie, pas un vrai refus.",
      },
      {
        type: "text",
        content:
          "Le dating à Taiwan a ses propres codes. Les applications (Tinder, Bumble, Pairs) sont populaires, mais les Taiwanais préfèrent souvent rencontrer quelqu'un via leur cercle social — les amis communs jouent un rôle d'entremetteurs. La notion de « confession » (告白, gàobái) est importante : contrairement à la France où la relation évolue graduellement, à Taiwan il y a souvent un moment formel où l'un des deux dit 我喜歡你，你願意跟我在一起嗎？(Wǒ xǐhuān nǐ, nǐ yuànyì gēn wǒ zài yìqǐ ma? — Je t'aime bien, tu veux sortir avec moi ?). Sans cette confession, vous n'êtes pas officiellement en couple, même si vous vous voyez régulièrement.",
      },
      {
        type: "example",
        content: "Inviter quelqu'un poliment",
        native: "你週六有空嗎？想請你吃晚餐。",
        romanization: "Nǐ zhōuliù yǒu kòng ma? Xiǎng qǐng nǐ chī wǎncān.",
        translation:
          "Tu es libre samedi ? J'aimerais t'inviter à dîner.",
      },
      {
        type: "warning",
        content:
          "Le « non » direct est rare à Taiwan. Les Taiwanais préfèrent des formules indirectes : 再看看 (zài kàn kàn, « on verra »), 我考慮一下 (wǒ kǎolǜ yíxià, « j'y réfléchis »), 最近比較忙 (zuìjìn bǐjiào máng, « je suis assez occupé ces temps-ci »). Apprenez à lire entre les lignes — ces expressions signifient souvent « non, mais je ne veux pas te blesser en le disant directement ».",
      },
      {
        type: "tip",
        content:
          "Si un Taiwanais vous invite à manger et insiste pour payer, laissez-le faire après une protestation polie (不好意思, bùhǎoyìsi). Puis la prochaine fois, c'est VOUS qui insistez pour payer. Ce va-et-vient est la base de la réciprocité sociale à Taiwan. Celui qui ne rend jamais l'invitation perd la face — et fait perdre la face à l'autre.",
      },
    ],
  },
];

const socialLesson: Lesson = {
  id: "lesson-07",
  slug: "social",
  title: "La vie sociale",
  titleNative: "社交生活",
  description:
    "Faites des amis, découvrez les sorties populaires et maîtrisez les codes sociaux taiwanais.",
  icon: "🎉",
  category: "social",
  order: 7,
  sections,
  vocabulary: [
    {
      term: "朋友",
      romanization: "péngyǒu",
      reading: "ㄆㄥˊ ㄧㄡˇ",
      french: "Ami(e)",
      english: "Friend",
      example: {
        sentence: "他是我的好朋友。",
        romanization: "Tā shì wǒ de hǎo péngyǒu.",
        translation: "C'est mon bon ami.",
      },
    },
    {
      term: "聚會",
      romanization: "jùhuì",
      reading: "ㄐㄩˋ ㄏㄨㄟˋ",
      french: "Réunion / Fête / Rassemblement",
      english: "Gathering / Party",
      example: {
        sentence: "週末有個聚會，你要來嗎？",
        romanization: "Zhōumò yǒu ge jùhuì, nǐ yào lái ma?",
        translation: "Il y a une fête ce weekend, tu viens ?",
      },
    },
    {
      term: "唱歌",
      romanization: "chàng gē",
      reading: "ㄔㄤˋ ㄍㄜ",
      french: "Chanter",
      english: "To sing",
      example: {
        sentence: "我們去KTV唱歌吧！",
        romanization: "Wǒmen qù KTV chàng gē ba!",
        translation: "Allons chanter au KTV !",
      },
    },
    {
      term: "爬山",
      romanization: "pá shān",
      reading: "ㄆㄚˊ ㄕㄢ",
      french: "Faire de la randonnée",
      english: "To hike / Climb a mountain",
      example: {
        sentence: "台灣人很喜歡爬山。",
        romanization: "Táiwān rén hěn xǐhuān pá shān.",
        translation: "Les Taiwanais adorent la randonnée.",
      },
    },
    {
      term: "游泳",
      romanization: "yóu yǒng",
      reading: "ㄧㄡˊ ㄩㄥˇ",
      french: "Nager",
      english: "To swim",
      example: {
        sentence: "夏天可以去海邊游泳。",
        romanization: "Xiàtiān kěyǐ qù hǎibiān yóu yǒng.",
        translation: "En été, on peut aller nager à la plage.",
      },
    },
    {
      term: "電影",
      romanization: "diànyǐng",
      reading: "ㄉㄧㄢˋ ㄧㄥˇ",
      french: "Film / Cinéma",
      english: "Movie",
      example: {
        sentence: "你想看什麼電影？",
        romanization: "Nǐ xiǎng kàn shénme diànyǐng?",
        translation: "Tu veux voir quel film ?",
      },
    },
    {
      term: "請客",
      romanization: "qǐng kè",
      reading: "ㄑㄧㄥˇ ㄎㄜˋ",
      french: "Inviter / Régaler",
      english: "To treat (someone to a meal)",
      example: {
        sentence: "今天我請客！",
        romanization: "Jīntiān wǒ qǐng kè!",
        translation: "Aujourd'hui c'est moi qui invite !",
      },
    },
    {
      term: "禮物",
      romanization: "lǐwù",
      reading: "ㄌㄧˇ ㄨˋ",
      french: "Cadeau",
      english: "Gift / Present",
      example: {
        sentence: "這是送你的禮物。",
        romanization: "Zhè shì sòng nǐ de lǐwù.",
        translation: "Voici un cadeau pour toi.",
      },
    },
    {
      term: "約會",
      romanization: "yuēhuì",
      reading: "ㄩㄝ ㄏㄨㄟˋ",
      french: "Rendez-vous (amoureux)",
      english: "Date",
      example: {
        sentence: "他們今天有約會。",
        romanization: "Tāmen jīntiān yǒu yuēhuì.",
        translation: "Ils ont un rendez-vous aujourd'hui.",
      },
    },
    {
      term: "開心",
      romanization: "kāixīn",
      reading: "ㄎㄞ ㄒㄧㄣ",
      french: "Content / Joyeux",
      english: "Happy",
      example: {
        sentence: "認識你我很開心。",
        romanization: "Rènshi nǐ wǒ hěn kāixīn.",
        translation: "Je suis content de te connaître.",
      },
    },
    {
      term: "好玩",
      romanization: "hǎo wán",
      reading: "ㄏㄠˇ ㄨㄢˊ",
      french: "Amusant / Fun",
      english: "Fun",
      example: {
        sentence: "夜市很好玩！",
        romanization: "Yèshì hěn hǎo wán!",
        translation: "Le marché de nuit est très amusant !",
      },
    },
    {
      term: "一起",
      romanization: "yìqǐ",
      reading: "ㄧˋ ㄑㄧˇ",
      french: "Ensemble",
      english: "Together",
      example: {
        sentence: "我們一起去吃飯吧。",
        romanization: "Wǒmen yìqǐ qù chī fàn ba.",
        translation: "Allons manger ensemble.",
      },
    },
    {
      term: "見面",
      romanization: "jiàn miàn",
      reading: "ㄐㄧㄢˋ ㄇㄧㄢˋ",
      french: "Se rencontrer / Se voir",
      english: "To meet",
      example: {
        sentence: "明天幾點見面？",
        romanization: "Míngtiān jǐ diǎn jiàn miàn?",
        translation: "On se retrouve à quelle heure demain ?",
      },
    },
    {
      term: "邀請",
      romanization: "yāoqǐng",
      reading: "ㄧㄠ ㄑㄧㄥˇ",
      french: "Inviter / Invitation",
      english: "To invite / Invitation",
      example: {
        sentence: "謝謝你的邀請！",
        romanization: "Xièxiè nǐ de yāoqǐng!",
        translation: "Merci pour ton invitation !",
      },
    },
    {
      term: "生日",
      romanization: "shēngrì",
      reading: "ㄕㄥ ㄖˋ",
      french: "Anniversaire",
      english: "Birthday",
      example: {
        sentence: "祝你生日快樂！",
        romanization: "Zhù nǐ shēngrì kuàilè!",
        translation: "Joyeux anniversaire !",
      },
    },
  ],
  phrases: [
    {
      native: "你有空嗎？",
      romanization: "Nǐ yǒu kòng ma?",
      reading: "ㄋㄧˇ ㄧㄡˇ ㄎㄨㄥˋ ㄇㄚ˙",
      french: "Tu es libre ?",
      english: "Are you free?",
      context: "Question de base pour proposer une sortie.",
    },
    {
      native: "我們一起去吃飯吧！",
      romanization: "Wǒmen yìqǐ qù chī fàn ba!",
      reading: "ㄨㄛˇ ㄇㄣ˙ ㄧˋ ㄑㄧˇ ㄑㄩˋ ㄔ ㄈㄢˋ ㄅㄚ˙",
      french: "Allons manger ensemble !",
      english: "Let's go eat together!",
    },
    {
      native: "今天我請客！",
      romanization: "Jīntiān wǒ qǐng kè!",
      reading: "ㄐㄧㄣ ㄊㄧㄢ ㄨㄛˇ ㄑㄧㄥˇ ㄎㄜˋ",
      french: "Aujourd'hui c'est moi qui invite !",
      english: "Today is my treat!",
      context: "Expression classique pour offrir de payer l'addition.",
    },
    {
      native: "可以加你的LINE嗎？",
      romanization: "Kěyǐ jiā nǐ de LINE ma?",
      reading: "ㄎㄜˇ ㄧˇ ㄐㄧㄚ ㄋㄧˇ ㄉㄜ˙ LINE ㄇㄚ˙",
      french: "Est-ce que je peux t'ajouter sur LINE ?",
      english: "Can I add you on LINE?",
      context: "L'équivalent taiwanais de « on échange nos numéros ? »",
    },
    {
      native: "認識你很高興！",
      romanization: "Rènshi nǐ hěn gāoxìng!",
      reading: "ㄖㄣˋ ㄕ˙ ㄋㄧˇ ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ",
      french: "Enchanté(e) de te connaître !",
      english: "Nice to meet you!",
    },
    {
      native: "下次再約！",
      romanization: "Xià cì zài yuē!",
      reading: "ㄒㄧㄚˋ ㄘˋ ㄗㄞˋ ㄩㄝ",
      french: "On se redit pour la prochaine fois !",
      english: "Let's hang out again next time!",
    },
    {
      native: "祝你生日快樂！",
      romanization: "Zhù nǐ shēngrì kuàilè!",
      reading: "ㄓㄨˋ ㄋㄧˇ ㄕㄥ ㄖˋ ㄎㄨㄞˋ ㄌㄜˋ",
      french: "Joyeux anniversaire !",
      english: "Happy birthday!",
    },
  ],
  culturalNotes: [
    "La « bataille de l'addition » (搶著付錢, qiǎng zhe fù qián) est un rituel social à Taiwan. Chacun insiste pour payer, parfois physiquement en poussant la main de l'autre. La règle : l'aîné, l'invitant ou le supérieur paie. En tant qu'invité étranger, laissez-vous inviter la première fois, puis rendez la pareille.",
    "LINE est l'application de communication numéro un à Taiwan. Tout passe par LINE : vie sociale, travail, notifications gouvernementales, livraisons. Demander le LINE de quelqu'un est la première étape de toute nouvelle relation à Taiwan.",
    "Ne donnez jamais de montre en cadeau à Taiwan — 送鐘 (sòng zhōng, offrir une horloge) sonne comme 送終 (sòng zhōng, accompagner aux funérailles). Évitez aussi les parapluies, les couteaux, et tout ce qui vient par quatre.",
    "Le KTV (karaoké en salle privée) est une institution sociale à Taiwan. C'est souvent le lieu de sortie par défaut entre amis, collègues ou lors de rendez-vous amoureux. Il n'est pas rare d'y passer 4-5 heures d'affilée.",
    "Le concept de 面子 (miànzi, la face) est central dans les interactions sociales. Ne faites jamais perdre la face à quelqu'un en public — ne le critiquez pas, ne le contredisez pas directement, ne refusez pas sèchement une proposition.",
  ],
  quiz: [
    {
      id: "social-q1",
      type: "term-to-french",
      question: "朋友",
      correctAnswer: "Ami(e)",
      options: ["Ami(e)", "Collègue", "Voisin", "Famille"],
    },
    {
      id: "social-q2",
      type: "french-to-term",
      question: "Ensemble",
      correctAnswer: "一起",
      options: ["一起", "一樣", "一定", "一直"],
    },
    {
      id: "social-q3",
      type: "term-to-french",
      question: "請客",
      correctAnswer: "Inviter / Régaler",
      options: ["Inviter / Régaler", "Remercier", "Demander", "Commander"],
    },
    {
      id: "social-q4",
      type: "reading-to-term",
      question: "shēngrì",
      correctAnswer: "生日",
      options: ["生日", "星期", "生活", "生氣"],
    },
    {
      id: "social-q5",
      type: "french-to-term",
      question: "Film / Cinéma",
      correctAnswer: "電影",
      options: ["電影", "電視", "電話", "電腦"],
    },
    {
      id: "social-q6",
      type: "term-to-french",
      question: "爬山",
      correctAnswer: "Faire de la randonnée",
      options: [
        "Faire de la randonnée",
        "Nager",
        "Courir",
        "Faire du vélo",
      ],
    },
  ],
};

export default socialLesson;
