import type { MockTest } from "@/types/test";
import type { Exercise } from "@/types/course";

/* ─────────────────────────────────────────────
   Section 1 — Écoute (聽力)  20 questions
   type: "listen"
   question = Chinese (audio source)
   options  = French translations
   ───────────────────────────────────────────── */

const listeningExercises: Exercise[] = [
  {
    id: "hsk1-l-01",
    type: "listen",
    question: "你好嗎？",
    correctAnswer: "Comment vas-tu ?",
    options: [
      "Comment vas-tu ?",
      "Où vas-tu ?",
      "Qui es-tu ?",
      "Quand viens-tu ?",
    ],
    hint: "nǐ hǎo ma?",
  },
  {
    id: "hsk1-l-02",
    type: "listen",
    question: "這個多少錢？",
    correctAnswer: "Combien ça coûte ?",
    options: [
      "Combien ça coûte ?",
      "C'est quoi ?",
      "Où est-ce ?",
      "À qui est-ce ?",
    ],
    hint: "zhè ge duōshǎo qián?",
  },
  {
    id: "hsk1-l-03",
    type: "listen",
    question: "謝謝你！",
    correctAnswer: "Merci !",
    options: ["Merci !", "Excusez-moi !", "Au revoir !", "S'il te plaît !"],
    hint: "xièxie nǐ!",
  },
  {
    id: "hsk1-l-04",
    type: "listen",
    question: "你叫什麼名字？",
    correctAnswer: "Comment t'appelles-tu ?",
    options: [
      "Comment t'appelles-tu ?",
      "Quel âge as-tu ?",
      "D'où viens-tu ?",
      "Que fais-tu ?",
    ],
    hint: "nǐ jiào shénme míngzì?",
  },
  {
    id: "hsk1-l-05",
    type: "listen",
    question: "我是學生。",
    correctAnswer: "Je suis étudiant.",
    options: [
      "Je suis étudiant.",
      "Je suis professeur.",
      "Je suis médecin.",
      "Je suis ami.",
    ],
    hint: "wǒ shì xuéshēng.",
  },
  {
    id: "hsk1-l-06",
    type: "listen",
    question: "他不是中國人。",
    correctAnswer: "Il n'est pas chinois.",
    options: [
      "Il n'est pas chinois.",
      "Il est chinois.",
      "Elle n'est pas chinoise.",
      "Il ne parle pas chinois.",
    ],
    hint: "tā bú shì zhōngguó rén.",
  },
  {
    id: "hsk1-l-07",
    type: "listen",
    question: "你喜歡吃什麼？",
    correctAnswer: "Qu'est-ce que tu aimes manger ?",
    options: [
      "Qu'est-ce que tu aimes manger ?",
      "Où aimes-tu manger ?",
      "Quand manges-tu ?",
      "Avec qui manges-tu ?",
    ],
    hint: "nǐ xǐhuān chī shénme?",
  },
  {
    id: "hsk1-l-08",
    type: "listen",
    question: "現在幾點？",
    correctAnswer: "Quelle heure est-il ?",
    options: [
      "Quelle heure est-il ?",
      "Quel jour sommes-nous ?",
      "On est en quelle année ?",
      "Combien de temps ?",
    ],
    hint: "xiànzài jǐ diǎn?",
  },
  {
    id: "hsk1-l-09",
    type: "listen",
    question: "我想喝水。",
    correctAnswer: "Je veux boire de l'eau.",
    options: [
      "Je veux boire de l'eau.",
      "Je veux manger du riz.",
      "Je veux acheter de l'eau.",
      "Je n'ai pas soif.",
    ],
    hint: "wǒ xiǎng hē shuǐ.",
  },
  {
    id: "hsk1-l-10",
    type: "listen",
    question: "她是我的朋友。",
    correctAnswer: "Elle est mon amie.",
    options: [
      "Elle est mon amie.",
      "Elle est ma sœur.",
      "Elle est mon professeur.",
      "Elle est ma mère.",
    ],
    hint: "tā shì wǒ de péngyǒu.",
  },
  {
    id: "hsk1-l-11",
    type: "listen",
    question: "你去哪裡？",
    correctAnswer: "Où vas-tu ?",
    options: [
      "Où vas-tu ?",
      "Quand pars-tu ?",
      "Comment y vas-tu ?",
      "Avec qui y vas-tu ?",
    ],
    hint: "nǐ qù nǎlǐ?",
  },
  {
    id: "hsk1-l-12",
    type: "listen",
    question: "今天天氣很好。",
    correctAnswer: "Il fait beau aujourd'hui.",
    options: [
      "Il fait beau aujourd'hui.",
      "Il pleut aujourd'hui.",
      "Il fait froid aujourd'hui.",
      "Il fait chaud aujourd'hui.",
    ],
    hint: "jīntiān tiānqì hěn hǎo.",
  },
  {
    id: "hsk1-l-13",
    type: "listen",
    question: "請坐。",
    correctAnswer: "Asseyez-vous, s'il vous plaît.",
    options: [
      "Asseyez-vous, s'il vous plaît.",
      "Entrez, s'il vous plaît.",
      "Attendez, s'il vous plaît.",
      "Mangez, s'il vous plaît.",
    ],
    hint: "qǐng zuò.",
  },
  {
    id: "hsk1-l-14",
    type: "listen",
    question: "我有三個孩子。",
    correctAnswer: "J'ai trois enfants.",
    options: [
      "J'ai trois enfants.",
      "J'ai trois chats.",
      "J'ai trois amis.",
      "J'ai trois frères.",
    ],
    hint: "wǒ yǒu sān gè háizi.",
  },
  {
    id: "hsk1-l-15",
    type: "listen",
    question: "那個人是誰？",
    correctAnswer: "Qui est cette personne ?",
    options: [
      "Qui est cette personne ?",
      "Où est cette personne ?",
      "Que fait cette personne ?",
      "Comment va cette personne ?",
    ],
    hint: "nà ge rén shì shéi?",
  },
  {
    id: "hsk1-l-16",
    type: "listen",
    question: "我不會說中文。",
    correctAnswer: "Je ne sais pas parler chinois.",
    options: [
      "Je ne sais pas parler chinois.",
      "Je ne sais pas lire le chinois.",
      "Je ne suis pas chinois.",
      "Je n'aime pas le chinois.",
    ],
    hint: "wǒ bú huì shuō zhōngwén.",
  },
  {
    id: "hsk1-l-17",
    type: "listen",
    question: "來，我們吃飯吧！",
    correctAnswer: "Allez, mangeons !",
    options: [
      "Allez, mangeons !",
      "Allez, partons !",
      "Allez, dormons !",
      "Allez, travaillons !",
    ],
    hint: "lái, wǒmen chīfàn ba!",
  },
  {
    id: "hsk1-l-18",
    type: "listen",
    question: "你的電話號碼是多少？",
    correctAnswer: "Quel est ton numéro de téléphone ?",
    options: [
      "Quel est ton numéro de téléphone ?",
      "Où est ton téléphone ?",
      "Ton téléphone est neuf ?",
      "Tu as un téléphone ?",
    ],
    hint: "nǐ de diànhuà hàomǎ shì duōshǎo?",
  },
  {
    id: "hsk1-l-19",
    type: "listen",
    question: "對不起，我遲到了。",
    correctAnswer: "Désolé, je suis en retard.",
    options: [
      "Désolé, je suis en retard.",
      "Désolé, je suis perdu.",
      "Désolé, j'ai oublié.",
      "Désolé, je ne comprends pas.",
    ],
    hint: "duìbuqǐ, wǒ chídào le.",
  },
  {
    id: "hsk1-l-20",
    type: "listen",
    question: "這本書很好看。",
    correctAnswer: "Ce livre est très intéressant.",
    options: [
      "Ce livre est très intéressant.",
      "Ce livre est très cher.",
      "Ce livre est très grand.",
      "Ce livre est très vieux.",
    ],
    hint: "zhè běn shū hěn hǎokàn.",
  },
];

/* ─────────────────────────────────────────────
   Section 2 — Lecture (閱讀)  20 questions
   - 8 comprehension
   - 6 fill-blank
   - 6 translate
   ───────────────────────────────────────────── */

const readingExercises: Exercise[] = [
  /* ── Comprehension (8) ── */
  {
    id: "hsk1-r-01",
    type: "comprehension",
    question:
      "「我叫李明，我是臺灣人。我住在臺北。」\n— Où habite Li Ming ?",
    correctAnswer: "À Taipei.",
    options: ["À Taipei.", "À Shanghai.", "À Pékin.", "À Hong Kong."],
    hint: "wǒ jiào Lǐ Míng, wǒ shì Táiwān rén. wǒ zhù zài Táiběi.",
  },
  {
    id: "hsk1-r-02",
    type: "comprehension",
    question:
      "「小美喜歡吃水果，她最喜歡蘋果。」\n— Quel est le fruit préféré de Xiǎo Měi ?",
    correctAnswer: "La pomme.",
    options: ["La pomme.", "La banane.", "L'orange.", "La pastèque."],
    hint: "Xiǎo Měi xǐhuān chī shuǐguǒ, tā zuì xǐhuān píngguǒ.",
  },
  {
    id: "hsk1-r-03",
    type: "comprehension",
    question:
      "「今天是星期六，明天我不上班。」\n— Quel jour sommes-nous ?",
    correctAnswer: "Samedi.",
    options: ["Samedi.", "Dimanche.", "Vendredi.", "Lundi."],
    hint: "jīntiān shì xīngqī liù, míngtiān wǒ bù shàngbān.",
  },
  {
    id: "hsk1-r-04",
    type: "comprehension",
    question:
      "「我家有五個人：爸爸、媽媽、哥哥、姐姐和我。」\n— Combien de personnes y a-t-il dans cette famille ?",
    correctAnswer: "Cinq.",
    options: ["Cinq.", "Quatre.", "Six.", "Trois."],
    hint: "wǒ jiā yǒu wǔ gè rén.",
  },
  {
    id: "hsk1-r-05",
    type: "comprehension",
    question:
      "「王先生每天早上七點起床。」\n— À quelle heure M. Wang se lève-t-il ?",
    correctAnswer: "À 7 heures.",
    options: [
      "À 7 heures.",
      "À 6 heures.",
      "À 8 heures.",
      "À 9 heures.",
    ],
    hint: "Wáng xiānshēng měi tiān zǎoshàng qī diǎn qǐchuáng.",
  },
  {
    id: "hsk1-r-06",
    type: "comprehension",
    question:
      "「我的貓很小，牠叫咪咪。牠很可愛。」\n— Comment s'appelle le chat ?",
    correctAnswer: "Mīmī.",
    options: ["Mīmī.", "Māomāo.", "Xiǎo Bái.", "Dà Huáng."],
    hint: "wǒ de māo hěn xiǎo, tā jiào Mīmī.",
  },
  {
    id: "hsk1-r-07",
    type: "comprehension",
    question:
      "「張老師教中文，她很喜歡她的學生。」\n— Qu'enseigne Mme Zhang ?",
    correctAnswer: "Le chinois.",
    options: ["Le chinois.", "L'anglais.", "Les maths.", "La musique."],
    hint: "Zhāng lǎoshī jiāo zhōngwén.",
  },
  {
    id: "hsk1-r-08",
    type: "comprehension",
    question:
      "「這件衣服兩百塊，那件三百塊。」\n— Quel vêtement est le moins cher ?",
    correctAnswer: "Celui-ci (200 元).",
    options: [
      "Celui-ci (200 元).",
      "Celui-là (300 元).",
      "Ils coûtent le même prix.",
      "On ne sait pas.",
    ],
    hint: "zhè jiàn yīfú liǎng bǎi kuài, nà jiàn sān bǎi kuài.",
  },

  /* ── Fill-blank (6) ── */
  {
    id: "hsk1-r-09",
    type: "fill-blank",
    question: "我___學生。",
    correctAnswer: "是",
    options: ["是", "有", "在", "去"],
    hint: "shì — être",
  },
  {
    id: "hsk1-r-10",
    type: "fill-blank",
    question: "他喜歡___茶。",
    correctAnswer: "喝",
    options: ["喝", "吃", "看", "買"],
    hint: "hē — boire",
  },
  {
    id: "hsk1-r-11",
    type: "fill-blank",
    question: "你住___哪裡？",
    correctAnswer: "在",
    options: ["在", "是", "去", "到"],
    hint: "zài — à / dans",
  },
  {
    id: "hsk1-r-12",
    type: "fill-blank",
    question: "她___兩個弟弟。",
    correctAnswer: "有",
    options: ["有", "是", "在", "要"],
    hint: "yǒu — avoir",
  },
  {
    id: "hsk1-r-13",
    type: "fill-blank",
    question: "我們明天___學校。",
    correctAnswer: "去",
    options: ["去", "來", "在", "是"],
    hint: "qù — aller",
  },
  {
    id: "hsk1-r-14",
    type: "fill-blank",
    question: "這個蘋果很___。",
    correctAnswer: "大",
    options: ["大", "多", "去", "是"],
    hint: "dà — grand",
  },

  /* ── Translate (6) ── */
  {
    id: "hsk1-r-15",
    type: "translate",
    question: "Je ne suis pas français.",
    correctAnswer: "我不是法國人。",
    options: [
      "我不是法國人。",
      "我是法國人。",
      "他不是法國人。",
      "我不去法國。",
    ],
    hint: "wǒ bú shì Fǎguó rén.",
  },
  {
    id: "hsk1-r-16",
    type: "translate",
    question: "Elle aime beaucoup les chats.",
    correctAnswer: "她很喜歡貓。",
    options: [
      "她很喜歡貓。",
      "她很喜歡狗。",
      "他很喜歡貓。",
      "她不喜歡貓。",
    ],
    hint: "tā hěn xǐhuān māo.",
  },
  {
    id: "hsk1-r-17",
    type: "translate",
    question: "Nous allons au restaurant.",
    correctAnswer: "我們去餐廳。",
    options: [
      "我們去餐廳。",
      "我們在餐廳。",
      "我們去學校。",
      "他們去餐廳。",
    ],
    hint: "wǒmen qù cāntīng.",
  },
  {
    id: "hsk1-r-18",
    type: "translate",
    question: "Il fait froid aujourd'hui.",
    correctAnswer: "今天很冷。",
    options: [
      "今天很冷。",
      "今天很熱。",
      "昨天很冷。",
      "今天很好。",
    ],
    hint: "jīntiān hěn lěng.",
  },
  {
    id: "hsk1-r-19",
    type: "translate",
    question: "Je voudrais un verre d'eau.",
    correctAnswer: "我想要一杯水。",
    options: [
      "我想要一杯水。",
      "我想要一杯茶。",
      "我不要水。",
      "他想要一杯水。",
    ],
    hint: "wǒ xiǎng yào yì bēi shuǐ.",
  },
  {
    id: "hsk1-r-20",
    type: "translate",
    question: "Tu as combien de frères et sœurs ?",
    correctAnswer: "你有幾個兄弟姐妹？",
    options: [
      "你有幾個兄弟姐妹？",
      "你有幾個朋友？",
      "你家有幾個人？",
      "你有兄弟姐妹嗎？",
    ],
    hint: "nǐ yǒu jǐ gè xiōngdì jiěmèi?",
  },
];

/* ─────────────────────────────────────────────
   Sections & final export
   ───────────────────────────────────────────── */

const listeningSection = {
  id: "hsk1-listening",
  title: "Écoute (聽力)",
  titleZh: "聽力",
  description: "Écoute les phrases en chinois et choisis la bonne traduction en français.",
  exercises: listeningExercises,
};

const readingSection = {
  id: "hsk1-reading",
  title: "Lecture (閱讀)",
  titleZh: "閱讀",
  description:
    "Lis les textes et les phrases, puis réponds aux questions de compréhension, complète les phrases ou traduis.",
  exercises: readingExercises,
};

export const hsk1Test: MockTest = {
  id: "hsk-1",
  title: "HSK 1 — Test blanc",
  titleZh: "HSK一級模擬考試",
  level: 1,
  description:
    "Évalue tes bases : prononciation, vocabulaire fondamental et phrases simples",
  totalQuestions: 40,
  timeLimitMinutes: 40,
  passingScore: 0.6,
  icon: "📝",
  sections: [listeningSection, readingSection],
};
