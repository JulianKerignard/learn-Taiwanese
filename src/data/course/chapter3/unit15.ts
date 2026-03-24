import type { CourseUnit } from "@/types/course";

export const unit15: CourseUnit = {
  id: "unit-15",
  number: 15,
  title: "La particule 了 — Partie 1 : Action complétée",
  titleZh: "了的用法（一）：動作完成",
  chapter: 3,
  description:
    "Maîtrisez le premier usage de 了 : marquer l'accomplissement d'une action. Comprenez pourquoi 了 n'est PAS un passé composé et apprenez à le placer correctement dans vos phrases.",
  icon: "✅",

  sections: [
    {
      title: "了 ≠ passé composé",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "C'est l'ERREUR numéro 1 des débutants francophones : penser que 了 est l'équivalent du passé composé français. C'est faux. 了 marque l'ACCOMPLISSEMENT d'une action, c'est-à-dire le fait qu'une action est terminée et a produit un résultat. Ce n'est pas une question de temps (passé, présent, futur), mais d'aspect (accompli vs non-accompli).",
        },
        {
          type: "text",
          content:
            "En linguistique, on distingue le « temps » (quand ?) de l'« aspect » (comment l'action est perçue : en cours ? terminée ?). Le français mélange les deux dans ses conjugaisons. Le chinois, lui, n'a aucune conjugaison — il utilise des particules d'aspect. 了 est une particule d'aspect accompli.",
        },
        {
          type: "example",
          chinese: "我吃了飯",
          pinyin: "wǒ chī le fàn",
          translation: "J'ai mangé (l'action de manger est terminée, je suis rassasié)",
          content:
            "了 après 吃 indique que l'action de manger est accomplie. Le résultat : je ne suis plus affamé.",
        },
        {
          type: "example",
          chinese: "你吃了飯再去",
          pinyin: "nǐ chī le fàn zài qù",
          translation: "Mange d'abord, puis vas-y",
          content:
            "Ici, 了 est utilisé pour une action FUTURE. L'action de manger n'a pas encore eu lieu, mais on la projette comme accomplie avant l'action suivante. Preuve que 了 ≠ passé.",
        },
        {
          type: "example",
          chinese: "明天到了台北，打電話給我",
          pinyin: "míngtiān dào le Táiběi, dǎ diànhuà gěi wǒ",
          translation: "Demain, quand tu seras arrivé à Taipei, appelle-moi",
          content:
            "了 avec un événement futur : l'arrivée à Taipei est projetée comme accomplie. Ce n'est clairement pas du passé.",
        },
        {
          type: "comparison",
          content:
            "Comparaison FR/ZH : en français, « j'ai mangé » peut exprimer un passé composé (hier j'ai mangé) OU un accompli (j'ai mangé, je suis rassasié). En chinois, 我吃了飯 exprime UNIQUEMENT l'accompli — le fait que l'action est terminée avec un résultat — PEU IMPORTE le moment. Dès que vous pensez « 了 = passé », vous faites fausse route.",
        },
        {
          type: "warning",
          content:
            "Ne traduisez JAMAIS 了 par « passé composé » dans votre tête. Pensez plutôt : « action bouclée, résultat atteint ». Cela vous évitera des erreurs dès que 了 apparaît dans un contexte futur ou conditionnel.",
        },
      ],
    },
    {
      title: "Placement de 了",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La règle de placement du 了 verbal (了₁) est simple et mécanique : 了 se place JUSTE APRÈS LE VERBE, AVANT le complément d'objet (s'il y en a un). C'est une règle fixe, sans exception.",
        },
        {
          type: "text",
          content:
            "Structure de base : Sujet + Verbe + 了 + Complément. Le complément peut être un nom, un groupe nominal avec quantité, etc. 了 est toujours collé au verbe.",
        },
        {
          type: "example",
          chinese: "我吃了三碗飯",
          pinyin: "wǒ chī le sān wǎn fàn",
          translation: "J'ai mangé trois bols de riz",
          content:
            "了 après 吃, avant 三碗飯. Le complément quantifié suit 了.",
        },
        {
          type: "example",
          chinese: "我買了一本書",
          pinyin: "wǒ mǎi le yì běn shū",
          translation: "J'ai acheté un livre",
          content:
            "了 après 買, avant 一本書. Même structure : verbe + 了 + quantité + nom.",
        },
        {
          type: "example",
          chinese: "她喝了兩杯咖啡",
          pinyin: "tā hē le liǎng bēi kāfēi",
          translation: "Elle a bu deux tasses de café",
          content: "了 après 喝, avant 兩杯咖啡. Le pattern est systématique.",
        },
        {
          type: "example",
          chinese: "我們看了一部電影",
          pinyin: "wǒmen kàn le yí bù diànyǐng",
          translation: "Nous avons regardé un film",
          content: "了 après 看, avant 一部電影.",
        },
        {
          type: "text",
          content:
            "Sans complément, 了 se met directement après le verbe, et la phrase est complète. C'est le cas le plus simple.",
        },
        {
          type: "example",
          chinese: "我吃了",
          pinyin: "wǒ chī le",
          translation: "J'ai mangé",
          content: "Pas de complément : 了 clôt la phrase après le verbe.",
        },
        {
          type: "example",
          chinese: "他走了",
          pinyin: "tā zǒu le",
          translation: "Il est parti",
          content:
            "了 après 走. Notez que ce 了 est à la fois verbal et en fin de phrase — ce sera approfondi dans l'unité 21.",
        },
        {
          type: "tip",
          content:
            "Si vous hésitez sur le placement de 了, appliquez la règle mécanique : trouvez le verbe, mettez 了 juste après. Tout ce qui suit 了 est le complément. Verbe + 了 + (complément). C'est aussi simple que ça.",
        },
        {
          type: "text",
          content:
            "Avec un verbe à objet intégré (離合詞 líhécí) comme 吃飯, 睡覺, 見面, le 了 se place ENTRE les deux caractères : 吃了飯, 睡了覺, 見了面. Le verbe et son objet se séparent pour accueillir 了.",
        },
        {
          type: "example",
          chinese: "我們見了面",
          pinyin: "wǒmen jiàn le miàn",
          translation: "Nous nous sommes rencontrés",
          content: "見面 → 見了面. Le 了 s'insère entre 見 et 面.",
        },
      ],
    },
    {
      title: "Quand NE PAS utiliser 了",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Savoir quand ne PAS utiliser 了 est aussi important que savoir quand l'utiliser. Certains contextes excluent systématiquement le 了 verbal, et y mettre 了 serait une erreur.",
        },
        {
          type: "text",
          content:
            "HABITUDES ET ROUTINES : quand on décrit quelque chose d'habituel, de répétitif, pas de 了. L'action n'est pas un événement ponctuel accompli, mais un pattern récurrent.",
        },
        {
          type: "example",
          chinese: "我每天吃早餐",
          pinyin: "wǒ měitiān chī zǎocān",
          translation: "Je mange le petit-déjeuner tous les jours",
          content:
            "Habitude quotidienne → pas de 了. Ce n'est pas un événement spécifique et accompli.",
        },
        {
          type: "example",
          chinese: "他常常去圖書館",
          pinyin: "tā chángcháng qù túshūguǎn",
          translation: "Il va souvent à la bibliothèque",
          content: "Habitude fréquente → pas de 了. 常常 signale la répétition.",
        },
        {
          type: "text",
          content:
            "AVEC 是 : le verbe 是 (être) ne prend JAMAIS 了 au sens accompli. 是 exprime une identité ou une classification, pas une action qui s'accomplit.",
        },
        {
          type: "example",
          chinese: "我是法國人",
          pinyin: "wǒ shì Fǎguórén",
          translation: "Je suis français",
          content:
            "是 = état permanent. On ne dit jamais *我是了法國人. 是 et 了 sont incompatibles.",
        },
        {
          type: "text",
          content:
            "AVEC LES VERBES D'ETAT ET D'OPINION : 喜歡 (aimer), 覺得 (trouver), 知道 (savoir), 認為 (penser) n'utilisent normalement pas 了 car ils décrivent des états, pas des actions ponctuelles. Exception : quand il y a un CHANGEMENT (ce sera le sujet de l'unité 21 sur 了₂).",
        },
        {
          type: "example",
          chinese: "我喜歡台灣",
          pinyin: "wǒ xǐhuān Táiwān",
          translation: "J'aime Taiwan",
          content:
            "État mental continu → pas de 了. (Si on dit 我喜歡台灣了, cela implique un changement : « maintenant j'aime Taiwan (alors qu'avant non) » — c'est un 了₂, traité en unité 21.)",
        },
        {
          type: "text",
          content:
            "LA NEGATION AU PASSE : pour nier une action passée, on utilise 沒(有) + verbe, SANS 了. La négation avec 沒 exclut automatiquement 了.",
        },
        {
          type: "example",
          chinese: "我沒吃早餐",
          pinyin: "wǒ méi chī zǎocān",
          translation: "Je n'ai pas pris le petit-déjeuner",
          content:
            "沒 + verbe, pas de 了. On ne dit JAMAIS *我沒吃了早餐.",
        },
        {
          type: "example",
          chinese: "他沒有去",
          pinyin: "tā méiyǒu qù",
          translation: "Il n'y est pas allé",
          content: "沒有 + verbe, sans 了. 沒有 et 了 s'excluent mutuellement pour la négation du passé.",
        },
        {
          type: "warning",
          content:
            "不...了 existe mais a un sens DIFFERENT : il signifie « ne plus... » (changement de situation, c'est un 了₂). Exemple : 我不吃了 = je ne mange plus (j'arrête). Ce n'est PAS la négation du passé. Pour nier le passé, c'est toujours 沒(有) + verbe.",
        },
        {
          type: "tip",
          content:
            "Résumé rapide : 了 est INTERDIT avec les habitudes (每天, 常常...), avec 是, et dans la négation au passé (沒/沒有 + verbe). 了 est CORRECT pour un événement spécifique et ponctuel qui a atteint son résultat.",
        },
      ],
    },
    {
      title: "Exercices de construction",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Maintenant, mettons en pratique. L'objectif est de développer un réflexe : identifier si 了 est nécessaire, puis le placer correctement. Analysez chaque phrase et demandez-vous : est-ce un événement spécifique et accompli ? Si oui, 了 après le verbe. Si non, pas de 了.",
        },
        {
          type: "example",
          chinese: "昨天我去了夜市 ✓ / 我每天去夜市 ✓",
          pinyin: "zuótiān wǒ qù le yèshì / wǒ měitiān qù yèshì",
          translation:
            "Hier je suis allé au marché de nuit / Je vais au marché de nuit tous les jours",
          content:
            "Première phrase : événement spécifique (hier) → 了. Deuxième phrase : habitude (tous les jours) → pas de 了.",
        },
        {
          type: "example",
          chinese: "她買了兩件衣服 ✓ / *她沒買了衣服 ✗ → 她沒買衣服 ✓",
          pinyin:
            "tā mǎi le liǎng jiàn yīfu / tā méi mǎi yīfu",
          translation:
            "Elle a acheté deux vêtements / Elle n'a pas acheté de vêtements",
          content:
            "Affirmatif avec événement spécifique → 了. Négatif au passé → 沒 + verbe, jamais 了.",
        },
        {
          type: "example",
          chinese: "我寫了三封信 ✓ / 我是學生 ✓ (pas de 了)",
          pinyin: "wǒ xiě le sān fēng xìn / wǒ shì xuéshēng",
          translation:
            "J'ai écrit trois lettres / Je suis étudiant",
          content:
            "Écrire des lettres = action accomplie → 了. Être étudiant = état avec 是 → jamais de 了.",
        },
        {
          type: "text",
          content:
            "Exercice mental : pour chaque phrase que vous construisez, posez-vous 3 questions. 1) Est-ce une action ponctuelle avec un résultat ? → 了. 2) Est-ce une habitude ou un état ? → pas de 了. 3) Est-ce une négation au passé ? → 沒 + verbe, pas de 了.",
        },
        {
          type: "example",
          chinese: "我學了三個月的中文",
          pinyin: "wǒ xué le sān ge yuè de Zhōngwén",
          translation: "J'ai étudié le chinois pendant trois mois",
          content:
            "Action accomplie avec une durée spécifique → 了 après le verbe, avant la durée.",
        },
        {
          type: "example",
          chinese: "他們吃了很多小籠包",
          pinyin: "tāmen chī le hěn duō xiǎolóngbāo",
          translation: "Ils ont mangé beaucoup de xiaolongbao",
          content:
            "Événement spécifique avec quantité → 了 après 吃, avant 很多小籠包.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "小美 (Xiǎo Měi) raconte sa journée d'hier à son ami 大衛 (Dàwèi). Chaque réplique utilise 了 pour décrire des actions accomplies.",
    lines: [
      {
        speaker: "大衛",
        chinese: "小美，你昨天做了什麼？",
        pinyin: "Xiǎo Měi, nǐ zuótiān zuò le shénme?",
        french: "Xiao Mei, qu'est-ce que tu as fait hier ?",
        note: "做了什麼 = structure pour demander ce qui a été fait.",
      },
      {
        speaker: "小美",
        chinese: "我早上去了市場，買了很多水果。",
        pinyin: "wǒ zǎoshang qù le shìchǎng, mǎi le hěn duō shuǐguǒ.",
        french: "Le matin, je suis allée au marché et j'ai acheté beaucoup de fruits.",
        note: "Deux actions accomplies en séquence, chacune avec 了.",
      },
      {
        speaker: "大衛",
        chinese: "然後呢？你吃了午飯嗎？",
        pinyin: "ránhòu ne? nǐ chī le wǔfàn ma?",
        french: "Et ensuite ? Tu as déjeuné ?",
      },
      {
        speaker: "小美",
        chinese: "吃了，我跟朋友吃了小籠包，很好吃！",
        pinyin: "chī le, wǒ gēn péngyǒu chī le xiǎolóngbāo, hěn hǎochī!",
        french: "Oui, j'ai mangé des xiaolongbao avec une amie, c'était délicieux !",
        note: "吃了 seul en réponse courte = oui, j'ai mangé.",
      },
      {
        speaker: "大衛",
        chinese: "下午呢？你看了電影嗎？",
        pinyin: "xiàwǔ ne? nǐ kàn le diànyǐng ma?",
        french: "Et l'après-midi ? Tu as regardé un film ?",
      },
      {
        speaker: "小美",
        chinese: "沒有，我回家寫了功課，然後休息了。",
        pinyin: "méiyǒu, wǒ huíjiā xiě le gōngkè, ránhòu xiūxi le.",
        french:
          "Non, je suis rentrée faire mes devoirs, puis je me suis reposée.",
        note: "沒有 pour nier (pas de 了), puis 了 pour les actions accomplies.",
      },
    ],
  },

  keyPoints: [
    "了 n'est PAS un passé composé. C'est une particule d'aspect accompli : elle indique qu'une action est terminée et a produit un résultat, quel que soit le temps (passé, futur, conditionnel).",
    "Placement : 了 se met JUSTE APRÈS LE VERBE, avant le complément. Structure : Sujet + Verbe + 了 + Complément. Sans complément : Verbe + 了.",
    "了 est INTERDIT avec : les habitudes (每天, 常常...), le verbe 是, et les verbes d'état (喜歡, 覺得, 知道) sauf changement de situation.",
    "Négation au passé : 沒(有) + verbe, SANS 了. On ne dit jamais *沒...了. 不...了 existe mais signifie « ne plus » (changement de situation, unité 21).",
    "Test décisionnel : 1) Action ponctuelle avec résultat → 了. 2) Habitude/état → pas de 了. 3) Négation passée → 沒 + verbe.",
  ],

  vocabulary: [
    {
      character: "了",
      pinyin: "le",
      zhuyin: "ㄌㄜ˙",
      french: "Particule d'accomplissement",
      english: "Aspect particle (completion)",
      example: {
        sentence: "我吃了飯。",
        pinyin: "wǒ chī le fàn.",
        translation: "J'ai mangé.",
      },
    },
    {
      character: "吃了",
      pinyin: "chī le",
      zhuyin: "ㄔ ㄌㄜ˙",
      french: "Avoir mangé (action terminée)",
      english: "Ate (completed action)",
      example: {
        sentence: "你吃了嗎？",
        pinyin: "nǐ chī le ma?",
        translation: "Tu as mangé ?",
      },
    },
    {
      character: "去了",
      pinyin: "qù le",
      zhuyin: "ㄑㄩˋ ㄌㄜ˙",
      french: "Être allé (action terminée)",
      english: "Went (completed action)",
      example: {
        sentence: "我去了夜市。",
        pinyin: "wǒ qù le yèshì.",
        translation: "Je suis allé au marché de nuit.",
      },
    },
    {
      character: "買了",
      pinyin: "mǎi le",
      zhuyin: "ㄇㄞˇ ㄌㄜ˙",
      french: "Avoir acheté",
      english: "Bought (completed action)",
      example: {
        sentence: "她買了一件衣服。",
        pinyin: "tā mǎi le yí jiàn yīfu.",
        translation: "Elle a acheté un vêtement.",
      },
    },
    {
      character: "看了",
      pinyin: "kàn le",
      zhuyin: "ㄎㄢˋ ㄌㄜ˙",
      french: "Avoir regardé/vu",
      english: "Watched/saw (completed action)",
      example: {
        sentence: "我們看了一部電影。",
        pinyin: "wǒmen kàn le yí bù diànyǐng.",
        translation: "Nous avons regardé un film.",
      },
    },
    {
      character: "寫了",
      pinyin: "xiě le",
      zhuyin: "ㄒㄧㄝˇ ㄌㄜ˙",
      french: "Avoir écrit",
      english: "Wrote (completed action)",
      example: {
        sentence: "我寫了一封信。",
        pinyin: "wǒ xiě le yì fēng xìn.",
        translation: "J'ai écrit une lettre.",
      },
    },
    {
      character: "學了",
      pinyin: "xué le",
      zhuyin: "ㄒㄩㄝˊ ㄌㄜ˙",
      french: "Avoir étudié/appris",
      english: "Studied/learned (completed action)",
      example: {
        sentence: "我學了兩年中文。",
        pinyin: "wǒ xué le liǎng nián Zhōngwén.",
        translation: "J'ai étudié le chinois pendant deux ans.",
      },
    },
    {
      character: "做了",
      pinyin: "zuò le",
      zhuyin: "ㄗㄨㄛˋ ㄌㄜ˙",
      french: "Avoir fait",
      english: "Did (completed action)",
      example: {
        sentence: "你做了什麼？",
        pinyin: "nǐ zuò le shénme?",
        translation: "Qu'est-ce que tu as fait ?",
      },
    },
    {
      character: "完",
      pinyin: "wán",
      zhuyin: "ㄨㄢˊ",
      french: "Finir, terminer",
      english: "To finish, to complete",
      example: {
        sentence: "我吃完了。",
        pinyin: "wǒ chī wán le.",
        translation: "J'ai fini de manger.",
      },
    },
    {
      character: "已經",
      pinyin: "yǐjīng",
      zhuyin: "ㄧˇ ㄐㄧㄥ",
      french: "Déjà",
      english: "Already",
      example: {
        sentence: "我已經吃了。",
        pinyin: "wǒ yǐjīng chī le.",
        translation: "J'ai déjà mangé.",
      },
    },
    {
      character: "剛才",
      pinyin: "gāngcái",
      zhuyin: "ㄍㄤ ㄘㄞˊ",
      french: "Tout à l'heure, il y a un instant",
      english: "Just now, a moment ago",
      example: {
        sentence: "剛才下雨了。",
        pinyin: "gāngcái xiàyǔ le.",
        translation: "Il a plu tout à l'heure.",
      },
    },
    {
      character: "昨天",
      pinyin: "zuótiān",
      zhuyin: "ㄗㄨㄛˊ ㄊㄧㄢ",
      french: "Hier",
      english: "Yesterday",
      example: {
        sentence: "昨天你去了哪裡？",
        pinyin: "zuótiān nǐ qù le nǎlǐ?",
        translation: "Où es-tu allé hier ?",
      },
    },
  ],

  exercises: [
    {
      id: "u15-ex1",
      type: "fill-blank",
      question:
        "我昨天買___兩本書。(J'ai acheté deux livres hier.)",
      correctAnswer: "了",
      options: ["了", "過", "的", "在"],
      optionsHint: ["le", "guò", "de", "zài"],
      hint: "Quelle particule marque l'accomplissement d'une action ?",
    },
    {
      id: "u15-ex2",
      type: "comprehension",
      question:
        "Pourquoi la phrase « 你吃了飯再去 » utilise 了 alors qu'il s'agit du futur ?",
      correctAnswer:
        "Parce que 了 marque l'accomplissement, pas le passé : l'action de manger est projetée comme terminée avant l'action suivante",
      options: [
        "Parce que 了 marque l'accomplissement, pas le passé : l'action de manger est projetée comme terminée avant l'action suivante",
        "C'est une erreur de grammaire, il ne faut pas de 了",
        "Parce que 了 peut aussi marquer le futur",
        "Parce que la phrase parle en fait du passé",
      ],
    },
    {
      id: "u15-ex3",
      type: "fill-blank",
      question: "她每天___早餐。(Elle mange le petit-déjeuner tous les jours.)",
      correctAnswer: "吃",
      options: ["吃", "吃了", "了吃", "吃過"],
      optionsHint: ["chī", "chī le", "le chī", "chī guò"],
      hint: "Est-ce une habitude ou un événement ponctuel ?",
    },
    {
      id: "u15-ex4",
      type: "translate",
      question: "Comment dit-on « Je n'ai pas mangé » ?",
      correctAnswer: "我沒吃",
      options: ["我沒吃", "我不吃了", "我沒吃了", "我不了吃"],
      optionsHint: ["wǒ méi chī", "wǒ bù chī le", "wǒ méi chī le", "wǒ bù le chī"],
    },
    {
      id: "u15-ex5",
      type: "comprehension",
      question: "Quelle phrase est INCORRECTE ?",
      correctAnswer: "我沒去了學校",
      options: [
        "我沒去了學校",
        "我去了學校",
        "我沒去學校",
        "我已經去了學校",
      ],
      optionsHint: [
        "wǒ méi qù le xuéxiào",
        "wǒ qù le xuéxiào",
        "wǒ méi qù xuéxiào",
        "wǒ yǐjīng qù le xuéxiào",
      ],
      hint: "沒 et 了 peuvent-ils coexister dans une négation du passé ?",
    },
    {
      id: "u15-ex6",
      type: "fill-blank",
      question: "我們看___一部很好看的電影。(Nous avons vu un très bon film.)",
      correctAnswer: "了",
      options: ["了", "過", "是", "在"],
      optionsHint: ["le", "guò", "shì", "zài"],
      hint: "Événement spécifique accompli → quelle particule ?",
    },
    {
      id: "u15-ex7",
      type: "translate",
      question: "Que signifie « 我是法國人 » et pourquoi n'y a-t-il pas de 了 ?",
      correctAnswer:
        "Je suis français — 是 exprime un état permanent, pas une action qui s'accomplit",
      options: [
        "Je suis français — 是 exprime un état permanent, pas une action qui s'accomplit",
        "Je suis français — on a oublié le 了",
        "J'étais français — c'est du passé sans 了",
        "Je suis devenu français — le changement est implicite",
      ],
    },
    {
      id: "u15-ex8",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 了 / 三碗 / 飯 / 我 / 吃",
      correctAnswer: "我吃了三碗飯",
      options: ["我", "吃", "了", "三碗", "飯"],
      hint: "Structure : Sujet + Verbe + 了 + Quantité + Nom",
    },
    {
      id: "u15-reorder-2",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 買 / 了 / 她 / 一件 / 衣服",
      correctAnswer: "她買了一件衣服",
      options: ["她", "買", "了", "一件", "衣服"],
      hint: "Structure : Sujet + Verbe + 了 + Quantité + Nom",
    },
    {
      id: "u15-translate-new1",
      type: "translate",
      question: "Comment dit-on « J'ai mange » ?",
      correctAnswer: "我吃了",
      options: ["我吃了", "我吃過", "我在吃", "我吃"],
      optionsHint: ["wǒ chī le", "wǒ chī guò", "wǒ zài chī", "wǒ chī"],
    },
    {
      id: "u15-translate-new2",
      type: "translate",
      question: "Comment dit-on « Il est parti » ?",
      correctAnswer: "他走了",
      options: ["他走了", "他走過", "他在走", "他沒走了"],
      optionsHint: ["tā zǒu le", "tā zǒu guò", "tā zài zǒu", "tā méi zǒu le"],
    },
    {
      id: "u15-translate-new3",
      type: "translate",
      question: "Comment dit-on « Nous avons achete deux billets » ?",
      correctAnswer: "我們買了兩張票",
      options: ["我們買了兩張票", "我們買兩張票了", "我們沒買了票", "我們在買兩張票"],
      optionsHint: ["wǒmen mǎi le liǎng zhāng piào", "wǒmen mǎi liǎng zhāng piào le", "wǒmen méi mǎi le piào", "wǒmen zài mǎi liǎng zhāng piào"],
    },
    {
      id: "u15-comp-new1",
      type: "comprehension",
      question: "La phrase « 我每天吃了早餐 » est-elle correcte ?",
      correctAnswer: "Non — 每天 indique une habitude, donc pas de 了. Correct : 我每天吃早餐",
      options: [
        "Non — 每天 indique une habitude, donc pas de 了. Correct : 我每天吃早餐",
        "Oui, la phrase est correcte",
        "Non — il faut utiliser 過 au lieu de 了",
        "Non — il faut mettre 了 avant le verbe",
      ],
    },
    {
      id: "u15-comp-new2",
      type: "comprehension",
      question: "La phrase « 她喜歡了台灣 » est-elle correcte pour dire « elle aime Taiwan » ?",
      correctAnswer: "Non — 喜歡 est un verbe d'etat, pas de 了 sauf changement de situation",
      options: [
        "Non — 喜歡 est un verbe d'etat, pas de 了 sauf changement de situation",
        "Oui, c'est parfaitement correct",
        "Non — il faut dire 她是喜歡台灣",
        "Non — il faut utiliser 過",
      ],
    },
    {
      id: "u15-comp-new3",
      type: "comprehension",
      question: "La phrase « 我沒有去了學校 » est-elle correcte ?",
      correctAnswer: "Non — 沒有 et 了 s'excluent. Correct : 我沒有去學校",
      options: [
        "Non — 沒有 et 了 s'excluent. Correct : 我沒有去學校",
        "Oui, la phrase est correcte",
        "Non — il faut dire 我不去了學校",
        "Non — il faut mettre 了 avant 沒有",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-14"],
};
