import type { CourseUnit } from "@/types/course";

export const unit75: CourseUnit = {
  id: "unit-75",
  number: 75,
  title: "Le passif et le causatif",
  titleZh: "被動句與使役句",
  chapter: 3,
  description:
    "Apprenez la voix passive avec 被 (souvent negative), les constructions causatives avec 讓 (laisser/permettre) et 叫 (ordonner/faire faire), et approfondissez la structure 把 avec des cas complexes.",
  icon: "🔄",

  sections: [
    {
      title: "被 — la voix passive",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, la voix passive utilise 被. Structure : Sujet + 被 + (agent) + Verbe + complement. Point crucial : le passif en chinois implique souvent quelque chose de NEGATIF ou d'indesirable. On l'utilise rarement pour des choses positives.",
        },
        {
          type: "example",
          chinese: "我被他罵了。",
          pinyin: "wǒ bèi tā mà le.",
          translation: "J'ai ete gronde par lui.",
          content:
            "Sujet (我) + 被 + agent (他) + verbe (罵) + 了. Se faire gronder = negatif → 被 est naturel.",
        },
        {
          type: "example",
          chinese: "手機被偷了。",
          pinyin: "shǒujī bèi tōu le.",
          translation: "Le telephone a ete vole.",
          content:
            "L'agent peut etre omis quand on ne sait pas qui a fait l'action. 被 + verbe sans agent.",
        },
        {
          type: "example",
          chinese: "蛋糕被弟弟吃掉了。",
          pinyin: "dàngāo bèi dìdi chī diào le.",
          translation: "Le gateau a ete mange par le petit frere.",
          content:
            "被 + agent + verbe + complement (掉 = disparition). Le verbe au passif a presque toujours un complement de resultat.",
        },
        {
          type: "warning",
          content:
            "En chinois, on n'utilise PAS 被 pour des choses positives comme en francais. On ne dit pas *我被老師誇了 (j'ai ete felicite). On prefere la voix active : 老師誇我了. Le passif est reserve aux situations desagreables ou indesirables.",
        },
        {
          type: "tip",
          content:
            "A Taiwan, 給 est parfois utilise a la place de 被 a l'oral : 我給他罵了 = 我被他罵了. C'est familier mais tres courant.",
        },
      ],
    },
    {
      title: "讓 et 叫 — faire faire",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les constructions causatives expriment l'idee de « faire faire quelque chose a quelqu'un ». Structure : Sujet + 讓/叫 + personne + verbe. La nuance entre 讓 et 叫 est importante.",
        },
        {
          type: "example",
          chinese: "媽媽讓我去。",
          pinyin: "māma ràng wǒ qù.",
          translation: "Maman me laisse aller.",
          content:
            "讓 = permettre, laisser, autoriser. C'est la permission. 讓 est plus doux, il n'y a pas de contrainte.",
        },
        {
          type: "example",
          chinese: "老闆叫我加班。",
          pinyin: "lǎobǎn jiào wǒ jiābān.",
          translation: "Le patron me fait faire des heures sup.",
          content:
            "叫 = ordonner, demander (avec autorite). C'est plus directif que 讓. Le patron a le pouvoir de demander.",
        },
        {
          type: "example",
          chinese: "老師不讓我們用手機。",
          pinyin: "lǎoshī bú ràng wǒmen yòng shǒujī.",
          translation: "Le prof ne nous laisse pas utiliser nos telephones.",
          content:
            "不讓 = interdire, ne pas permettre. C'est la facon courante d'exprimer une interdiction.",
        },
        {
          type: "example",
          chinese: "她叫我早一點來。",
          pinyin: "tā jiào wǒ zǎo yìdiǎn lái.",
          translation: "Elle m'a dit de venir plus tot.",
          content:
            "叫 peut aussi signifier « demander a quelqu'un de faire ». Moins fort qu'un ordre, mais plus directif que 讓.",
        },
        {
          type: "comparison",
          content:
            "讓 = laisser/permettre (doux, neutre). 叫 = demander/ordonner (directif). 使 = causer/provoquer (formel, pour des situations abstraites). 請 = prier de (poli). Du plus doux au plus fort : 請 → 讓 → 叫 → 命令.",
        },
      ],
    },
    {
      title: "把 approfondi",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Revision approfondie de 把. Structure : Sujet + 把 + objet + verbe + complement. 把 « prend » l'objet et le place AVANT le verbe pour montrer ce qu'on en fait. Regles : l'objet doit etre defini, et le verbe doit avoir un complement.",
        },
        {
          type: "example",
          chinese: "把書放在桌子上。",
          pinyin: "bǎ shū fàng zài zhuōzi shàng.",
          translation: "Pose le livre sur la table.",
          content:
            "把 + objet (書) + verbe (放) + complement de lieu (在桌子上). L'objet est deplace vers un endroit precis.",
        },
        {
          type: "example",
          chinese: "把門關好。",
          pinyin: "bǎ mén guān hǎo.",
          translation: "Ferme bien la porte.",
          content:
            "把 + objet (門) + verbe (關) + complement de resultat (好). 好 = bien fait, correctement.",
        },
        {
          type: "example",
          chinese: "把衣服洗乾淨。",
          pinyin: "bǎ yīfú xǐ gānjìng.",
          translation: "Lave les vetements (jusqu'a ce qu'ils soient propres).",
          content:
            "把 + objet (衣服) + verbe (洗) + complement de resultat (乾淨 = propre). Le complement indique le resultat attendu.",
        },
        {
          type: "warning",
          content:
            "On ne peut PAS utiliser 把 sans complement apres le verbe. *把門關 est incorrect. Il faut 把門關好/把門關上/把門關了. Le verbe seul ne suffit pas avec 把.",
        },
        {
          type: "example",
          chinese: "你把功課寫完了嗎？",
          pinyin: "nǐ bǎ gōngkè xiě wán le ma?",
          translation: "Tu as fini d'ecrire tes devoirs ?",
          content:
            "把 + objet (功課) + verbe (寫) + complement de resultat (完 = terminer) + 了. Question courante des parents taiwanais !",
        },
        {
          type: "tip",
          content:
            "把 s'utilise quand on veut insister sur CE QU'ON FAIT de l'objet. Si on dit juste 我關門了, c'est neutre. Mais 我把門關好了 insiste sur le fait que la porte est BIEN fermee.",
        },
      ],
    },
  ],

  dialogue: {
    context: "Au bureau, Julian discute avec une collegue de sa journee compliquee.",
    lines: [
      {
        speaker: "Collegue",
        chinese: "你怎麼了？看起來不開心。",
        pinyin: "nǐ zěnme le? kàn qǐlái bù kāixīn.",
        french: "Qu'est-ce qui t'arrive ? Tu n'as pas l'air content.",
      },
      {
        speaker: "Julian",
        chinese: "我的腳踏車被偷了！",
        pinyin: "wǒ de jiǎotàchē bèi tōu le!",
        french: "Mon velo a ete vole !",
      },
      {
        speaker: "Collegue",
        chinese: "真的嗎？太糟糕了。老闆又叫你加班嗎？",
        pinyin: "zhēn de ma? tài zāogāo le. lǎobǎn yòu jiào nǐ jiābān ma?",
        french: "Vraiment ? Trop nul. Et le patron t'a encore fait faire des heures sup ?",
      },
      {
        speaker: "Julian",
        chinese: "對，他不讓我早走。然後我把手機摔壞了。",
        pinyin: "duì, tā bú ràng wǒ zǎo zǒu. ránhòu wǒ bǎ shǒujī shuāi huài le.",
        french: "Oui, il ne m'a pas laisse partir tot. Et j'ai casse mon telephone en le faisant tomber.",
      },
      {
        speaker: "Collegue",
        chinese: "把手機拿去修吧。我讓我弟弟幫你看看。",
        pinyin: "bǎ shǒujī ná qù xiū ba. wǒ ràng wǒ dìdi bāng nǐ kànkan.",
        french: "Apporte ton telephone a reparer. Je vais demander a mon frere de t'aider.",
      },
      {
        speaker: "Julian",
        chinese: "謝謝！今天被這些事搞得很累。",
        pinyin: "xièxie! jīntiān bèi zhèxiē shì gǎo de hěn lèi.",
        french: "Merci ! Aujourd'hui, ces problemes m'ont epuise.",
      },
    ],
  },

  keyPoints: [
    "被 exprime le passif et implique souvent un evenement NEGATIF : 被偷 (etre vole), 被罵 (etre gronde)",
    "讓 = permettre/laisser (doux), 叫 = demander/ordonner (directif) — deux niveaux de causatif",
    "把 deplace l'objet defini avant le verbe : 把 + objet + verbe + COMPLEMENT (obligatoire)",
    "Le verbe apres 被 ou 把 doit toujours avoir un complement (de resultat, de lieu, 了, etc.)",
  ],

  vocabulary: [
    {
      character: "被",
      pinyin: "bèi",
      zhuyin: "ㄅㄟˋ",
      french: "par (passif)",
      english: "by (passive marker)",
      example: {
        sentence: "我被雨淋濕了。",
        pinyin: "wǒ bèi yǔ lín shī le.",
        translation: "J'ai ete trempe par la pluie.",
      },
    },
    {
      character: "讓",
      pinyin: "ràng",
      zhuyin: "ㄖㄤˋ",
      french: "laisser, permettre",
      english: "to let, to allow",
      example: {
        sentence: "讓我想想。",
        pinyin: "ràng wǒ xiǎngxiǎng.",
        translation: "Laisse-moi reflechir.",
      },
    },
    {
      character: "叫",
      pinyin: "jiào",
      zhuyin: "ㄐㄧㄠˋ",
      french: "demander/ordonner de, appeler",
      english: "to ask/order to, to call",
      example: {
        sentence: "他叫我等一下。",
        pinyin: "tā jiào wǒ děng yíxià.",
        translation: "Il m'a demande d'attendre un instant.",
      },
    },
    {
      character: "使",
      pinyin: "shǐ",
      zhuyin: "ㄕˇ",
      french: "causer, faire en sorte que",
      english: "to cause, to make",
      example: {
        sentence: "這件事使我很生氣。",
        pinyin: "zhè jiàn shì shǐ wǒ hěn shēngqì.",
        translation: "Cette affaire m'a mis en colere.",
      },
    },
    {
      character: "請",
      pinyin: "qǐng",
      zhuyin: "ㄑㄧㄥˇ",
      french: "prier de, inviter",
      english: "please, to invite",
      example: {
        sentence: "請你幫我。",
        pinyin: "qǐng nǐ bāng wǒ.",
        translation: "S'il te plait, aide-moi.",
      },
    },
    {
      character: "派",
      pinyin: "pài",
      zhuyin: "ㄆㄞˋ",
      french: "envoyer (en mission)",
      english: "to send, to dispatch",
      example: {
        sentence: "公司派我去日本。",
        pinyin: "gōngsī pài wǒ qù Rìběn.",
        translation: "L'entreprise m'envoie au Japon.",
      },
    },
    {
      character: "命令",
      pinyin: "mìnglìng",
      zhuyin: "ㄇㄧㄥˋ ㄌㄧㄥˋ",
      french: "ordonner, ordre",
      english: "to order, command",
      example: {
        sentence: "軍官命令士兵前進。",
        pinyin: "jūnguān mìnglìng shìbīng qiánjìn.",
        translation: "L'officier ordonne aux soldats d'avancer.",
      },
    },
    {
      character: "允許",
      pinyin: "yǔnxǔ",
      zhuyin: "ㄩㄣˇ ㄒㄩˇ",
      french: "autoriser, permettre",
      english: "to allow, to permit",
      example: {
        sentence: "這裡不允許抽煙。",
        pinyin: "zhèlǐ bù yǔnxǔ chōuyān.",
        translation: "Il est interdit de fumer ici.",
      },
    },
    {
      character: "禁止",
      pinyin: "jìnzhǐ",
      zhuyin: "ㄐㄧㄣˋ ㄓˇ",
      french: "interdire",
      english: "to forbid, to prohibit",
      example: {
        sentence: "禁止停車。",
        pinyin: "jìnzhǐ tíngchē.",
        translation: "Stationnement interdit.",
      },
    },
    {
      character: "要求",
      pinyin: "yāoqiú",
      zhuyin: "ㄧㄠ ㄑㄧㄡˊ",
      french: "exiger, demander",
      english: "to require, to demand",
      example: {
        sentence: "老師要求我們每天練習。",
        pinyin: "lǎoshī yāoqiú wǒmen měi tiān liànxí.",
        translation: "Le prof exige qu'on s'entraine tous les jours.",
      },
    },
    {
      character: "建議",
      pinyin: "jiànyì",
      zhuyin: "ㄐㄧㄢˋ ㄧˋ",
      french: "suggerer, suggestion",
      english: "to suggest, suggestion",
      example: {
        sentence: "我建議你去看醫生。",
        pinyin: "wǒ jiànyì nǐ qù kàn yīshēng.",
        translation: "Je te suggere d'aller voir un medecin.",
      },
    },
    {
      character: "提醒",
      pinyin: "tíxǐng",
      zhuyin: "ㄊㄧˊ ㄒㄧㄥˇ",
      french: "rappeler, prevenir",
      english: "to remind",
      example: {
        sentence: "提醒我明天開會。",
        pinyin: "tíxǐng wǒ míngtiān kāihuì.",
        translation: "Rappelle-moi la reunion de demain.",
      },
    },
  ],

  exercises: [
    {
      id: "u75-ex1",
      type: "fill-blank",
      question: "我的錢包___偷了。(Mon portefeuille a ete vole.)",
      correctAnswer: "被",
      options: ["被", "把", "讓", "給"],
      optionsHint: ["bèi", "bǎ", "ràng", "gěi"],
      optionsZhuyin: ["ㄅㄟˋ", "ㄅㄚˇ", "ㄖㄤˋ", "ㄍㄟˇ"],
      hint: "Voix passive — quelque chose de negatif est arrive.",
    },
    {
      id: "u75-ex2",
      type: "translate",
      question: "Comment dit-on « Maman ne me laisse pas sortir » ?",
      correctAnswer: "媽媽不讓我出去。",
      options: [
        "媽媽不讓我出去。",
        "媽媽不叫我出去。",
        "媽媽被我出去。",
        "媽媽把我出去。",
      ],
      optionsHint: [
        "māma bú ràng wǒ chū qù.",
        "māma bú jiào wǒ chū qù.",
        "māma bèi wǒ chū qù.",
        "māma bǎ wǒ chū qù.",
      ],
      optionsZhuyin: [
        "ㄇㄚ ㄇㄚ ㄅㄨˊ ㄖㄤˋ ㄨㄛˇ ㄔㄨ ㄑㄩˋ。",
        "ㄇㄚ ㄇㄚ ㄅㄨˊ ㄐㄧㄠˋ ㄨㄛˇ ㄔㄨ ㄑㄩˋ。",
        "ㄇㄚ ㄇㄚ ㄅㄟˋ ㄨㄛˇ ㄔㄨ ㄑㄩˋ。",
        "ㄇㄚ ㄇㄚ ㄅㄚˇ ㄨㄛˇ ㄔㄨ ㄑㄩˋ。",
      ],
    },
    {
      id: "u75-ex3",
      type: "comprehension",
      question: "Pourquoi le passif 被 est-il souvent negatif en chinois ?",
      correctAnswer: "En chinois, le passif implique que le sujet SUBIT quelque chose, ce qui est generalement desagreable",
      options: [
        "En chinois, le passif implique que le sujet SUBIT quelque chose, ce qui est generalement desagreable",
        "C'est une regle arbitraire sans explication",
        "被 signifie litteralement « malheur »",
        "Le passif est toujours negatif dans toutes les langues",
      ],
      optionsHint: [
        "le sujet subit = desagreable",
        "regle arbitraire",
        "被 = malheur",
        "universel",
      ],
      optionsZhuyin: [
        "le sujet subit = desagreable",
        "regle arbitraire",
        "ㄅㄟˋ = malheur",
        "universel",
      ],
    },
    {
      id: "u75-ex4",
      type: "fill-blank",
      question: "老闆___我加班。(Le patron me fait faire des heures sup.)",
      correctAnswer: "叫",
      options: ["叫", "讓", "被", "使"],
      optionsHint: ["jiào", "ràng", "bèi", "shǐ"],
      optionsZhuyin: ["ㄐㄧㄠˋ", "ㄖㄤˋ", "ㄅㄟˋ", "ㄕˇ"],
      hint: "Le patron a l'autorite pour demander/ordonner.",
    },
    {
      id: "u75-ex5",
      type: "translate",
      question: "Comment dit-on « Ferme bien la porte » avec 把 ?",
      correctAnswer: "把門關好。",
      options: [
        "把門關好。",
        "把門關。",
        "門被關好。",
        "關好把門。",
      ],
      optionsHint: [
        "bǎ mén guān hǎo.",
        "bǎ mén guān.",
        "mén bèi guān hǎo.",
        "guān hǎo bǎ mén.",
      ],
      optionsZhuyin: [
        "ㄅㄚˇ ㄇㄣˊ ㄍㄨㄢ ㄏㄠˇ。",
        "ㄅㄚˇ ㄇㄣˊ ㄍㄨㄢ。",
        "ㄇㄣˊ ㄅㄟˋ ㄍㄨㄢ ㄏㄠˇ。",
        "ㄍㄨㄢ ㄏㄠˇ ㄅㄚˇ ㄇㄣˊ。",
      ],
    },
    {
      id: "u75-ex6",
      type: "comprehension",
      question: "Quelle est la difference entre 讓 et 叫 dans une construction causative ?",
      correctAnswer: "讓 = permettre/laisser (doux), 叫 = demander/ordonner (plus directif)",
      options: [
        "讓 = permettre/laisser (doux), 叫 = demander/ordonner (plus directif)",
        "Aucune difference, les deux sont synonymes",
        "讓 est formel, 叫 est familier",
        "叫 = permettre, 讓 = ordonner",
      ],
      optionsHint: [
        "ràng = doux, jiào = directif",
        "synonymes",
        "ràng formel, jiào familier",
        "jiào = permettre, ràng = ordonner",
      ],
      optionsZhuyin: [
        "ㄖㄤˋ = doux, ㄐㄧㄠˋ = directif",
        "synonymes",
        "ㄖㄤˋ formel, ㄐㄧㄠˋ familier",
        "ㄐㄧㄠˋ = permettre, ㄖㄤˋ = ordonner",
      ],
    },
    {
      id: "u75-ex7",
      type: "fill-blank",
      question: "你___功課寫完了嗎？(Tu as fini d'ecrire tes devoirs ?)",
      correctAnswer: "把",
      options: ["把", "被", "讓", "給"],
      optionsHint: ["bǎ", "bèi", "ràng", "gěi"],
      optionsZhuyin: ["ㄅㄚˇ", "ㄅㄟˋ", "ㄖㄤˋ", "ㄍㄟˇ"],
      hint: "On deplace l'objet defini (功課) avant le verbe pour montrer ce qu'on en fait.",
    },
    {
      id: "u75-ex8",
      type: "translate",
      question: "Comment dit-on « Le gateau a ete mange par le petit frere » ?",
      correctAnswer: "蛋糕被弟弟吃掉了。",
      options: [
        "蛋糕被弟弟吃掉了。",
        "弟弟被蛋糕吃掉了。",
        "蛋糕把弟弟吃掉了。",
        "蛋糕被吃弟弟掉了。",
      ],
      optionsHint: [
        "dàngāo bèi dìdi chī diào le.",
        "dìdi bèi dàngāo chī diào le.",
        "dàngāo bǎ dìdi chī diào le.",
        "dàngāo bèi chī dìdi diào le.",
      ],
      optionsZhuyin: [
        "ㄉㄢˋ ㄍㄠ ㄅㄟˋ ㄉㄧˋ ㄉㄧ ㄔ ㄉㄧㄠˋ ㄌㄜ。",
        "ㄉㄧˋ ㄉㄧ ㄅㄟˋ ㄉㄢˋ ㄍㄠ ㄔ ㄉㄧㄠˋ ㄌㄜ。",
        "ㄉㄢˋ ㄍㄠ ㄅㄚˇ ㄉㄧˋ ㄉㄧ ㄔ ㄉㄧㄠˋ ㄌㄜ。",
        "ㄉㄢˋ ㄍㄠ ㄅㄟˋ ㄔ ㄉㄧˋ ㄉㄧ ㄉㄧㄠˋ ㄌㄜ。",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-74"],
};
