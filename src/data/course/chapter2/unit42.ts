import type { CourseUnit } from "@/types/course";

export const unit42: CourseUnit = {
  id: "unit-42",
  number: 42,
  title: "Les particules taiwanaises — Parler comme un local",
  titleZh: "台灣語氣詞——像本地人一樣說話",
  chapter: 2,
  description:
    "Les particules modales sont le sel du mandarin taiwanais. Sans elles, tu parles comme un robot. Avec elles, tu sonnes comme un local. Découvre 吧, 啊, 嘛, 耶, 啦 et les interjections qui rendent le mandarin de Taiwan si vivant.",
  icon: "🗣️",

  sections: [
    {
      title: "Les particules de fin de phrase",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En mandarin, les particules de fin de phrase CHANGENT le ton émotionnel de toute la phrase. Sans elles, la phrase est neutre, froide, parfois même sèche. Avec elles, la phrase devient naturelle et chaleureuse. C'est la différence entre parler comme un manuel de grammaire et parler comme un être humain. Les Taiwanais utilisent ces particules dans presque CHAQUE phrase à l'oral.",
        },
        {
          type: "example",
          chinese: "走吧",
          pinyin: "zǒu ba",
          translation: "On y va (allez, on y va)",
          content:
            "吧 (ba) exprime la suggestion ou la supposition douce. C'est « et si on... ? » ou « ... non ? ». 走吧 = on y va (proposition). 好吧 = bon d'accord (résignation). 是吧？ = c'est ça, non ? (demande de confirmation). 吧 adoucit tout ce qu'il touche.",
        },
        {
          type: "example",
          chinese: "好啊！對啊！是啊！",
          pinyin: "hǎo a! duì a! shì a!",
          translation: "Ouais ! Exactement ! C'est vrai !",
          content:
            "啊 (a) ajoute de l'émotion et de l'exclamation. Sans 啊, ces réponses sont plates. Avec 啊, elles deviennent vivantes. 好 = OK (neutre). 好啊 = ouais ! (enthousiaste). C'est comme la différence entre « oui » et « ouiii ! » en français.",
        },
        {
          type: "example",
          chinese: "你呢？他呢？",
          pinyin: "nǐ ne? tā ne?",
          translation: "Et toi ? Et lui ?",
          content:
            "呢 (ne) sert à retourner une question (« et... ? ») ou à exprimer un rappel. 你呢？ = et toi ? 我的手機呢？ = il est où mon téléphone ? (rappel d'existence). C'est une des premières particules qu'on apprend et une des plus utiles.",
        },
        {
          type: "example",
          chinese: "你知道嘛！當然嘛！",
          pinyin: "nǐ zhīdào ma! dāngrán ma!",
          translation: "Tu sais bien ! Évidemment !",
          content:
            "嘛 (ma — ton neutre, pas le 嗎 des questions) exprime l'évidence, comme « voyons, c'est logique ». 你知道嘛 = tu sais bien (sous-entendu : c'est évident). 當然嘛 = évidemment (c'est une évidence). Attention : ne pas confondre avec 嗎 (ma, ton montant) qui transforme une phrase en question.",
        },
        {
          type: "example",
          chinese: "太好了耶！成功了耶！",
          pinyin: "tài hǎo le yē! chénggōng le yē!",
          translation: "Trop bien ! On a réussi !",
          content:
            "耶 (yē) exprime la joie et l'excitation. C'est le « yay! » taiwanais. 太好了耶 = trop bien ! 放假了耶 = c'est les vacances ! Les jeunes Taiwanais l'utilisent beaucoup, surtout les filles. C'est un marqueur d'enthousiasme pur.",
        },
        {
          type: "comparison",
          content:
            "Comparons la même phrase avec et sans particule : 好 (OK, neutre) → 好吧 (bon, d'accord... résigné) → 好啊 (ouais ! enthousiaste) → 好嘛 (allez, s'il te plaît...). Le même mot, quatre émotions différentes. C'est ça la puissance des particules taiwanaises.",
        },
        {
          type: "tip",
          content:
            "Conseil pratique : commence par ajouter 啊 après tes réponses (好啊, 對啊, 是啊). C'est le changement le plus simple qui rendra ton mandarin immédiatement plus naturel. Les Taiwanais remarqueront la différence.",
        },
      ],
    },
    {
      title: "Les interjections taiwanaises",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Les interjections sont les sons que les Taiwanais produisent en réaction à ce qu'on leur dit. Ce ne sont pas des mots à proprement parler — ce sont des réflexes sonores. Ils sont omniprésents dans le mandarin taiwanais et les entendre dans la bouche d'un étranger impressionne toujours les locaux.",
        },
        {
          type: "example",
          chinese: "喔",
          pinyin: "ō / ó",
          translation: "Ah d'accord / Je vois",
          content:
            "LA réaction la plus commune à Taiwan. Quelqu'un te donne une information → 喔 (je vois). C'est l'équivalent du « I see » anglais ou du « ah d'accord » français. Ton plat = compréhension neutre. Ton montant = légère surprise. Tu l'entendras 100 fois par jour.",
        },
        {
          type: "example",
          chinese: "蛤",
          pinyin: "há",
          translation: "Hein ?!",
          content:
            "Surprise informelle. Tu apprends une nouvelle inattendue → 蛤？！ C'est assez familier, à utiliser avec des amis. Ne le dis pas à ton patron. L'équivalent du « quoi ?! » français très familier.",
        },
        {
          type: "example",
          chinese: "欸",
          pinyin: "ēi / éi",
          translation: "Hé ! (pour attirer l'attention)",
          content:
            "Très taiwanais. On l'utilise pour appeler quelqu'un ou attirer son attention. 欸，你看！ (hé, regarde !). 欸，等一下 (hé, attends). C'est informel et courant entre amis. En ton montant, c'est aussi une expression de surprise légère.",
        },
        {
          type: "example",
          chinese: "齁",
          pinyin: "hō",
          translation: "Quand même ! / Oh là là !",
          content:
            "Reproche léger ou exagération. 齁，你怎麼這麼晚 (quand même, pourquoi tu arrives si tard). 齁，好貴 (oh là là, c'est cher). C'est spécifiquement taiwanais et très expressif.",
        },
        {
          type: "example",
          chinese: "哇",
          pinyin: "wā",
          translation: "Wow !",
          content:
            "Admiration ou surprise. 哇，好漂亮！ (wow, c'est beau !). 哇，好厲害！ (wow, impressionnant !). C'est universel et facile à utiliser. Quand tu ne sais pas quoi dire devant quelque chose d'impressionnant → 哇！",
        },
        {
          type: "tip",
          content:
            "Les interjections s'apprennent par l'immersion, pas par les manuels. Écoute les Taiwanais autour de toi et note les sons qu'ils font. 喔 est ta porte d'entrée : commence par le dire quand quelqu'un te donne une info. Tu sonneras instantanément plus naturel.",
        },
      ],
    },
    {
      title: "La particule 啦 — Le mot le plus taiwanais",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Si tu ne retiens qu'une seule particule de cette unité, que ce soit 啦 (la). C'est LA particule qui définit le mandarin taiwanais. Elle n'existe quasiment pas dans le mandarin de Chine continentale. C'est elle qui donne au mandarin de Taiwan sa musicalité, sa chaleur et son côté décontracté.",
        },
        {
          type: "text",
          content:
            "啦 est une fusion de 了 et 啊. Elle adoucit la phrase, la rend familière, ajoute de l'émotion. Sans 啦, on sonne comme un étranger ou un robot. Avec 啦, on sonne comme un Taiwanais. Ce n'est pas une exagération — les Taiwanais eux-mêmes disent que 啦 est ce qui les distingue des Chinois continentaux.",
        },
        {
          type: "example",
          chinese: "好啦好啦",
          pinyin: "hǎo la hǎo la",
          translation: "OK OK, j'ai compris (quand quelqu'un insiste)",
          content:
            "La réponse classique quand quelqu'un te répète la même chose. Ta mère te dit de ranger ta chambre pour la 3e fois → 好啦好啦 (oui oui, c'est bon). Légèrement exaspéré mais affectueux.",
        },
        {
          type: "example",
          chinese: "不要啦",
          pinyin: "bú yào la",
          translation: "Non non, je veux pas (plus doux que 不要)",
          content:
            "Refus adouci. 不要 tout seul est sec et direct. 不要啦 est plus doux, presque câlin. Quelqu'un veut prendre ta photo → 不要啦 (non non, arrête).",
        },
        {
          type: "example",
          chinese: "走啦",
          pinyin: "zǒu la",
          translation: "Allez, on y va",
          content:
            "Plus pressant que 走吧 (suggestion) mais plus amical que 走 (ordre). 走啦 = « bon allez, on bouge ». C'est le signal de départ entre amis.",
        },
        {
          type: "example",
          chinese: "沒有啦",
          pinyin: "méiyǒu la",
          translation: "Mais non ! (modestie face à un compliment)",
          content:
            "LA réponse aux compliments. Quelqu'un dit « ton chinois est super ! » → 沒有啦 (mais non). C'est la modestie taiwanaise en action. Accepter un compliment directement est perçu comme arrogant.",
        },
        {
          type: "example",
          chinese: "快啦",
          pinyin: "kuài la",
          translation: "Dépêche-toi (amical)",
          content:
            "快 tout seul est un ordre. 快啦 est un encouragement amical. « Allez, active ! » dit avec un sourire, pas avec un air fâché.",
        },
        {
          type: "example",
          chinese: "對啦",
          pinyin: "duì la",
          translation: "Oui exactement",
          content:
            "Confirmation chaleureuse. Plus engagé que 對 (neutre) et plus naturel que 對啊 (enthousiaste). 對啦 dit « tu as raison, évidemment ».",
        },
        {
          type: "warning",
          content:
            "啦 est INFORMEL. Ne l'utilise pas dans un email professionnel, avec un patron, ou dans un discours formel. C'est réservé aux conversations entre amis, en famille, ou dans des contextes décontractés. En revanche, dans ces contextes, NE PAS utiliser 啦 te fera sonner distant et froid.",
        },
        {
          type: "comparison",
          content:
            "Sans 啦, tu parles comme un manuel. Avec 啦, tu parles comme un Taiwanais. Comparons : 不要 (non, je ne veux pas — sec) → 不要啦 (oh non, je veux pas — doux). 好 (OK — neutre) → 好啦 (oui oui, c'est bon — familier). 走 (va — ordre) → 走啦 (allez on y va — amical). La différence est la même qu'entre le « non » français et le « noon » prolongé et adouci.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Conversation entre deux amis taiwanais, 小美 et 小偉, après les cours. La conversation est bourrée de particules — c'est comme ça que les Taiwanais parlent vraiment.",
    lines: [
      {
        speaker: "小美",
        chinese: "欸，下課了耶！要不要去吃東西啊？",
        pinyin: "èi, xiàkè le yē! yào bú yào qù chī dōngxi a?",
        french: "Hé, les cours sont finis ! Tu veux aller manger un truc ?",
        note: "欸 pour attirer l'attention, 耶 pour l'excitation, 啊 pour l'enthousiasme.",
      },
      {
        speaker: "小偉",
        chinese: "好啊！吃什麼？隨便啦，你決定嘛。",
        pinyin: "hǎo a! chī shénme? suíbiàn la, nǐ juédìng ma.",
        french: "Ouais ! On mange quoi ? Comme tu veux, c'est toi qui décides.",
        note: "好啊 (enthousiaste), 啦 (adoucit), 嘛 (c'est évident que c'est toi qui choisis).",
      },
      {
        speaker: "小美",
        chinese: "那去夜市吧？聽說有新的攤位喔。",
        pinyin: "nà qù yèshì ba? tīngshuō yǒu xīn de tānwèi ō.",
        french: "Alors on va au marché de nuit ? J'ai entendu dire qu'il y a de nouveaux stands.",
        note: "吧 pour la suggestion, 喔 pour l'information intéressante.",
      },
      {
        speaker: "小偉",
        chinese: "真的嗎？哇，那快走啦！",
        pinyin: "zhēn de ma? wā, nà kuài zǒu la!",
        french: "Sérieux ? Wow, alors dépêchons-nous !",
        note: "真的嗎 (surprise), 哇 (admiration), 啦 (pression amicale).",
      },
      {
        speaker: "小美",
        chinese: "等一下啦，我要先換衣服。慢慢來嘛！",
        pinyin: "děng yíxià la, wǒ yào xiān huàn yīfu. mànmàn lái ma!",
        french: "Attends un peu, je vais d'abord me changer. Prends ton temps !",
        note: "啦 (adoucit la demande), 嘛 (c'est évident qu'il faut patienter).",
      },
      {
        speaker: "小偉",
        chinese: "好啦好啦，我在樓下等你。不要太久喔！",
        pinyin: "hǎo la hǎo la, wǒ zài lóuxià děng nǐ. bú yào tài jiǔ ō!",
        french: "OK OK, je t'attends en bas. Pas trop longtemps hein !",
        note: "好啦好啦 (résignation affectueuse), 喔 (rappel amical).",
      },
    ],
  },

  keyPoints: [
    "吧 adoucit et suggère, 啊 ajoute de l'émotion, 嘛 exprime l'évidence, 耶 exprime la joie. Chaque particule change le ton de la phrase.",
    "啦 est LA particule taiwanaise par excellence. Elle adoucit, familiarise et réchauffe. Sans elle, on parle comme un robot.",
    "Les interjections (喔, 蛤, 欸, 哇) sont des réflexes sonores omniprésents. 喔 est la plus commune et la plus facile à adopter.",
    "Les particules sont INFORMELLES. Ne les utilise pas dans des contextes formels (emails pro, discours). En contexte amical, elles sont indispensables.",
  ],

  vocabulary: [
    {
      character: "吧",
      pinyin: "ba",
      zhuyin: "ㄅㄚ˙",
      french: "Particule de suggestion",
      english: "Particle: suggestion / supposition",
      example: {
        sentence: "我們走吧。",
        pinyin: "wǒmen zǒu ba.",
        translation: "On y va.",
      },
    },
    {
      character: "啊",
      pinyin: "a",
      zhuyin: "ㄚ˙",
      french: "Particule d'exclamation / émotion",
      english: "Particle: exclamation / emotion",
      example: {
        sentence: "好啊，沒問題！",
        pinyin: "hǎo a, méi wèntí!",
        translation: "Ouais, pas de problème !",
      },
    },
    {
      character: "嘛",
      pinyin: "ma",
      zhuyin: "ㄇㄚ˙",
      french: "Particule d'évidence",
      english: "Particle: obviously / of course",
      example: {
        sentence: "你知道嘛，這很正常。",
        pinyin: "nǐ zhīdào ma, zhè hěn zhèngcháng.",
        translation: "Tu sais bien, c'est normal.",
      },
    },
    {
      character: "耶",
      pinyin: "yē",
      zhuyin: "ㄧㄝ",
      french: "Particule de joie / excitation",
      english: "Particle: yay / excitement",
      example: {
        sentence: "放假了耶！",
        pinyin: "fàngjià le yē!",
        translation: "C'est les vacances !",
      },
    },
    {
      character: "喔",
      pinyin: "ō",
      zhuyin: "ㄛ",
      french: "Ah d'accord / Je vois",
      english: "Oh, I see",
      example: {
        sentence: "喔，原來是這樣。",
        pinyin: "ō, yuánlái shì zhèyàng.",
        translation: "Ah, c'est comme ça en fait.",
      },
    },
    {
      character: "蛤",
      pinyin: "há",
      zhuyin: "ㄏㄚˊ",
      french: "Hein ?! (surprise informelle)",
      english: "Huh?! (informal surprise)",
      example: {
        sentence: "蛤？你說什麼？",
        pinyin: "há? nǐ shuō shénme?",
        translation: "Hein ? T'as dit quoi ?",
      },
    },
    {
      character: "欸",
      pinyin: "ēi",
      zhuyin: "ㄟ",
      french: "Hé ! (attirer l'attention)",
      english: "Hey! (getting attention)",
      example: {
        sentence: "欸，你看那邊！",
        pinyin: "ēi, nǐ kàn nàbiān!",
        translation: "Hé, regarde là-bas !",
      },
    },
    {
      character: "哇",
      pinyin: "wā",
      zhuyin: "ㄨㄚ",
      french: "Wow ! (admiration)",
      english: "Wow! (admiration)",
      example: {
        sentence: "哇，好厲害！",
        pinyin: "wā, hǎo lìhài!",
        translation: "Wow, impressionnant !",
      },
    },
    {
      character: "啦",
      pinyin: "la",
      zhuyin: "ㄌㄚ˙",
      french: "Particule taiwanaise (adoucit, familiarise)",
      english: "Taiwanese particle (softens, makes familiar)",
      example: {
        sentence: "好啦，我知道了啦。",
        pinyin: "hǎo la, wǒ zhīdào le la.",
        translation: "OK OK, j'ai compris.",
      },
    },
    {
      character: "好的",
      pinyin: "hǎo de",
      zhuyin: "ㄏㄠˇ ㄉㄜ˙",
      french: "D'accord (neutre)",
      english: "Alright (neutral)",
      example: {
        sentence: "好的，我現在去。",
        pinyin: "hǎo de, wǒ xiànzài qù.",
        translation: "D'accord, j'y vais maintenant.",
      },
    },
    {
      character: "對啊",
      pinyin: "duì a",
      zhuyin: "ㄉㄨㄟˋ ㄚ",
      french: "Exactement !",
      english: "Exactly!",
      example: {
        sentence: "對啊，就是這樣。",
        pinyin: "duì a, jiù shì zhèyàng.",
        translation: "Exactement, c'est ça.",
      },
    },
    {
      character: "算了",
      pinyin: "suàn le",
      zhuyin: "ㄙㄨㄢˋ ㄌㄜ˙",
      french: "Laisse tomber",
      english: "Forget it",
      example: {
        sentence: "算了，不想了。",
        pinyin: "suàn le, bù xiǎng le.",
        translation: "Laisse tomber, j'y pense plus.",
      },
    },
    {
      character: "隨便",
      pinyin: "suíbiàn",
      zhuyin: "ㄙㄨㄟˊ ㄅㄧㄢˋ",
      french: "Comme tu veux",
      english: "Whatever / as you like",
      example: {
        sentence: "隨便你啦。",
        pinyin: "suíbiàn nǐ la.",
        translation: "Comme tu veux.",
      },
    },
    {
      character: "差不多",
      pinyin: "chàbùduō",
      zhuyin: "ㄔㄚˋ ㄅㄨˋ ㄉㄨㄛ",
      french: "À peu près",
      english: "Almost, about",
      example: {
        sentence: "差不多可以了吧。",
        pinyin: "chàbùduō kěyǐ le ba.",
        translation: "C'est à peu près bon, non ?",
      },
    },
    {
      character: "好啦",
      pinyin: "hǎo la",
      zhuyin: "ㄏㄠˇ ㄌㄚ˙",
      french: "OK OK (résignation affectueuse)",
      english: "Okay okay (affectionate resignation)",
      example: {
        sentence: "好啦好啦，我去就是了。",
        pinyin: "hǎo la hǎo la, wǒ qù jiù shì le.",
        translation: "OK OK, j'y vais, voilà.",
      },
    },
  ],

  exercises: [
    {
      id: "u42-ex1",
      type: "comprehension",
      question:
        "Quelle particule utiliserais-tu pour faire une suggestion douce, comme « on y va ? » ?",
      correctAnswer: "吧 — 走吧",
      options: [
        "吧 — 走吧",
        "啊 — 走啊",
        "嘛 — 走嘛",
        "啦 — 走啦",
      ],
    },
    {
      id: "u42-ex2",
      type: "translate",
      question: "Que signifie 沒有啦 quand quelqu'un te fait un compliment ?",
      correctAnswer: "Mais non ! (modestie — je refuse le compliment poliment)",
      options: [
        "Mais non ! (modestie — je refuse le compliment poliment)",
        "Je n'ai rien (je suis pauvre)",
        "Ce n'est pas vrai (tu mens)",
        "Il n'y en a plus (c'est fini)",
      ],
    },
    {
      id: "u42-ex3",
      type: "comprehension",
      question:
        "Quelle est la différence entre 好, 好吧, 好啊, et 好啦 ?",
      correctAnswer:
        "好 = neutre, 好吧 = résigné, 好啊 = enthousiaste, 好啦 = familier/un peu exaspéré",
      options: [
        "好 = neutre, 好吧 = résigné, 好啊 = enthousiaste, 好啦 = familier/un peu exaspéré",
        "Ils sont tous identiques, juste des variantes régionales",
        "好 = formel, les autres sont tous informels sans différence",
        "好吧 = question, 好啊 = réponse, 好啦 = ordre",
      ],
    },
    {
      id: "u42-ex4",
      type: "translate",
      question: "Comment traduirais-tu 蛤？你說什麼？",
      correctAnswer: "Hein ?! T'as dit quoi ?",
      options: [
        "Hein ?! T'as dit quoi ?",
        "Pardon, pourriez-vous répéter ?",
        "Ah d'accord, je comprends.",
        "Non merci, je ne veux pas.",
      ],
    },
    {
      id: "u42-ex5",
      type: "comprehension",
      question: "Pourquoi 啦 est-elle considérée comme LA particule taiwanaise ?",
      correctAnswer:
        "Parce qu'elle est omniprésente à Taiwan mais quasi absente en Chine continentale, et elle adoucit/familiarise toute phrase",
      options: [
        "Parce qu'elle est omniprésente à Taiwan mais quasi absente en Chine continentale, et elle adoucit/familiarise toute phrase",
        "Parce qu'elle est la plus facile à prononcer",
        "Parce qu'elle est obligatoire dans la grammaire taiwanaise",
        "Parce que c'est la seule particule qui existe à Taiwan",
      ],
    },
    {
      id: "u42-ex6",
      type: "fill-blank",
      question: "你知道___，這很正常。(Tu sais bien, c'est normal.)",
      correctAnswer: "嘛",
      options: ["嘛", "嗎", "吧", "啦"],
      hint: "Quelle particule exprime l'évidence ?",
    },
    {
      id: "u42-ex7",
      type: "translate",
      question: "Que signifie 喔 quand quelqu'un te donne une information ?",
      correctAnswer: "Ah d'accord / Je vois (réaction de compréhension)",
      options: [
        "Ah d'accord / Je vois (réaction de compréhension)",
        "Non, je ne suis pas d'accord",
        "Wow, c'est incroyable !",
        "Hein ? Je ne comprends pas",
      ],
    },
    {
      id: "u42-ex8",
      type: "comprehension",
      question: "Dans quel contexte NE PAS utiliser les particules comme 啦, 啊, 嘛 ?",
      correctAnswer: "Dans des contextes formels : emails professionnels, discours officiels, conversations avec des supérieurs",
      options: [
        "Dans des contextes formels : emails professionnels, discours officiels, conversations avec des supérieurs",
        "Avec des amis taiwanais",
        "Au marché de nuit",
        "En parlant avec des jeunes",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-41"],
};
