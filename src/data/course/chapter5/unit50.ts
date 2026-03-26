import type { CourseUnit } from "@/types/course";

export const unit50: CourseUnit = {
  id: "unit-50",
  number: 50,
  title: "Révision HSK 2 — Bilan complet",
  titleZh: "HSK二級總複習",
  chapter: 5,
  description:
    "Révision complète de la grammaire et du vocabulaire du niveau HSK 2",
  icon: "🏆",

  sections: [
    {
      title: "Grammaire HSK 2 — 了/過/會/把",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "了 — DEUX FONCTIONS DISTINCTES. 1) 了 verbal (action accomplie) : placé juste après le verbe. 我吃了飯 (j'ai mangé). 2) 了 de changement d'état : placé en fin de phrase. 他生氣了 (il s'est mis en colère). Ces deux 了 peuvent coexister : 我吃了三碗飯了 (j'ai déjà mangé trois bols de riz — action accomplie + nouvel état).",
        },
        {
          type: "example",
          chinese: "我昨天買了一本書。/ 天氣變冷了。",
          pinyin: "wǒ zuótiān mǎi le yì běn shū. / tiānqì biàn lěng le.",
          translation:
            "J'ai acheté un livre hier. / Le temps est devenu froid.",
          content:
            "Premier 了 : action accomplie (après le verbe). Deuxième 了 : changement d'état (fin de phrase).",
        },
        {
          type: "text",
          content:
            "過 (guò) — L'EXPÉRIENCE. Indique qu'on a fait quelque chose au moins une fois. Structure : sujet + verbe + 過 + objet. 我去過台灣 (je suis déjà allé à Taiwan). Négation : 沒 + verbe + 過. 我沒去過日本 (je ne suis jamais allé au Japon).",
        },
        {
          type: "example",
          chinese: "你吃過臭豆腐嗎？我吃過，很好吃！",
          pinyin: "nǐ chī guò chòu dòufu ma? wǒ chī guò, hěn hǎochī!",
          translation:
            "Tu as déjà mangé du tofu puant ? J'en ai mangé, c'est délicieux !",
          content:
            "過 exprime l'expérience vécue. Question + réponse affirmative.",
        },
        {
          type: "text",
          content:
            "會 (huì) — DEUX SENS. 1) Capacité apprise : 我會說中文 (je sais parler chinois). 2) Futur probable : 明天會下雨 (il va pleuvoir demain). Négation : 不會. 我不會游泳 (je ne sais pas nager) / 明天不會下雨 (il ne pleuvra pas demain).",
        },
        {
          type: "example",
          chinese: "你會不會做菜？我會做幾道台灣菜。",
          pinyin: "nǐ huì bú huì zuò cài? wǒ huì zuò jǐ dào Táiwān cài.",
          translation:
            "Tu sais cuisiner ? Je sais faire quelques plats taïwanais.",
          content:
            "會不會 : question A-not-A sur une capacité. 幾道 : quelques plats.",
        },
        {
          type: "text",
          content:
            "把 (bǎ) — STRUCTURE DE DISPOSITION. Sujet + 把 + objet + verbe + complément. Met l'accent sur ce qu'on fait à l'objet. 請你把門關上 (ferme la porte, s'il te plaît). Le verbe doit avoir un complément après (résultat, direction, 了, etc.).",
        },
        {
          type: "example",
          chinese: "請把這本書放在桌子上。",
          pinyin: "qǐng bǎ zhè běn shū fàng zài zhuōzi shàng.",
          translation: "Mets ce livre sur la table, s'il te plaît.",
          content:
            "把 + objet + verbe + complément de lieu. Action concrète sur l'objet.",
        },
        {
          type: "tip",
          content:
            "Astuce pour distinguer 了 et 過 : 了 insiste sur l'achèvement d'une action précise (quand, combien), 過 insiste sur l'expérience en général (au moins une fois dans sa vie), sans préciser quand.",
        },
      ],
    },
    {
      title: "Vocabulaire social et culturel",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "ÉMOTIONS — 高興 (content), 難過 (triste), 生氣 (en colère), 緊張 (nerveux), 興奮 (excité), 擔心 (inquiet), 無聊 (ennuyé), 開心 (joyeux). Structure : 我很 + émotion ou 我覺得很 + émotion.",
        },
        {
          type: "text",
          content:
            "EXPRIMER UN AVIS — 覺得 (juéde, trouver/penser que) : 我覺得台灣很美 (je trouve que Taiwan est beau). 讓 (ràng, faire que) : 這件事讓我很開心 (cette chose me rend heureux). 對...有興趣 (s'intéresser à).",
        },
        {
          type: "example",
          chinese: "我覺得學中文很有意思，可是聲調讓我很頭痛。",
          pinyin:
            "wǒ juéde xué Zhōngwén hěn yǒu yìsi, kěshì shēngdiào ràng wǒ hěn tóutòng.",
          translation:
            "Je trouve qu'apprendre le chinois est intéressant, mais les tons me donnent mal à la tête.",
          content:
            "覺得 pour l'opinion, 讓 + personne + émotion pour la cause.",
        },
        {
          type: "text",
          content:
            "COMPARAISONS — 比 (bǐ) : A + 比 + B + adjectif. 台北比台南大 (Taipei est plus grand que Tainan). 跟...一樣 : A + 跟 + B + 一樣 + adjectif. 他跟我一樣高 (il est aussi grand que moi). 沒有...那麼 : A + 沒有 + B + 那麼 + adj. 今天沒有昨天那麼熱 (aujourd'hui il ne fait pas aussi chaud qu'hier).",
        },
        {
          type: "example",
          chinese: "台灣的夜市比法國的市場熱鬧多了。",
          pinyin: "Táiwān de yèshì bǐ Fǎguó de shìchǎng rènao duō le.",
          translation:
            "Les marchés de nuit de Taiwan sont bien plus animés que les marchés français.",
          content:
            "比 + adjectif + 多了 : « bien plus... que ». Intensifie la comparaison.",
        },
        {
          type: "text",
          content:
            "VOCABULAIRE SOCIAL — 幫忙 (aider), 介紹 (présenter quelqu'un), 邀請 (inviter), 同意 (être d'accord), 拒絕 (refuser), 感謝 (remercier), 道歉 (s'excuser). Ces mots permettent de gérer les interactions sociales courantes.",
        },
        {
          type: "tip",
          content:
            "La culture taïwanaise valorise l'harmonie sociale. Plutôt que refuser directement (不要), on préfère des formulations douces : 可能不太方便 (ce n'est peut-être pas très pratique), 我再想想 (laissez-moi y réfléchir).",
        },
      ],
    },
    {
      title: "Expressions avancées — Conditions, projets, durée",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "如果...就... (rúguǒ...jiù...) — CONDITION. Si... alors... Structure : 如果 + condition, 主語 + 就 + résultat. 如果明天下雨，我就不去了 (s'il pleut demain, je n'irai pas). 就 peut être omis à l'oral mais renforce le lien logique.",
        },
        {
          type: "example",
          chinese: "如果你有空，我們就一起去吃飯吧！",
          pinyin: "rúguǒ nǐ yǒu kòng, wǒmen jiù yìqǐ qù chīfàn ba!",
          translation: "Si tu es libre, allons manger ensemble !",
          content:
            "如果 + condition + 就 + proposition. 吧 adoucit la suggestion.",
        },
        {
          type: "text",
          content:
            "PROJETS ET INTENTIONS — 打算 (dǎsuàn, avoir l'intention de) : plan concret. 希望 (xīwàng, espérer) : souhait. 想要 (xiǎngyào, vouloir/avoir envie de) : désir. Du plus vague au plus concret : 想 → 想要 → 打算 → 決定.",
        },
        {
          type: "example",
          chinese: "我打算明年去台灣學中文，希望能交到很多朋友。",
          pinyin:
            "wǒ dǎsuàn míngnián qù Táiwān xué Zhōngwén, xīwàng néng jiāo dào hěn duō péngyǒu.",
          translation:
            "J'ai l'intention d'aller apprendre le chinois à Taiwan l'année prochaine, j'espère me faire beaucoup d'amis.",
          content:
            "打算 pour le plan concret, 希望 pour le souhait qui l'accompagne.",
        },
        {
          type: "text",
          content:
            "DURÉE — Verbe + durée : 我學了兩年中文 (j'ai étudié le chinois pendant deux ans). Verbe + 了 + durée + 了 : action qui continue. 我學了兩年中文了 (j'étudie le chinois depuis deux ans — et ça continue). 從...到... : de... à... 從早上到晚上 (du matin au soir).",
        },
        {
          type: "example",
          chinese: "我在台灣住了六個月了，從三月到現在。",
          pinyin:
            "wǒ zài Táiwān zhù le liù gè yuè le, cóng sān yuè dào xiànzài.",
          translation:
            "J'habite à Taiwan depuis six mois, depuis mars jusqu'à maintenant.",
          content:
            "住了...了 : action qui dure encore. 從...到... : point de départ et d'arrivée.",
        },
        {
          type: "text",
          content:
            "CONNECTEURS LOGIQUES — 因為...所以... (parce que... donc...), 雖然...但是... (bien que... mais...), 不但...而且... (non seulement... mais aussi...). Ces structures donnent de la fluidité et de la nuance à votre expression.",
        },
        {
          type: "example",
          chinese: "雖然中文很難，但是我覺得很有趣。",
          pinyin: "suīrán Zhōngwén hěn nán, dànshì wǒ juéde hěn yǒuqù.",
          translation:
            "Bien que le chinois soit difficile, je le trouve très intéressant.",
          content:
            "雖然...但是... pour la concession. Structure très courante à l'écrit et à l'oral.",
        },
        {
          type: "tip",
          content:
            "Félicitations ! Si vous maîtrisez les structures 了/過/會, les comparaisons avec 比, les conditions avec 如果...就..., et les connecteurs logiques, vous avez atteint le niveau HSK 2 / TOCFL Niveau 2. Vous pouvez mener des conversations substantielles en chinois.",
        },
      ],
    },
  ],

  keyPoints: [
    "Maîtrise de 了 (action + état)",
    "過/會 pour l'expérience et le futur",
    "Expression des émotions et opinions",
    "如果...就... pour les conditions",
  ],

  vocabulary: [],

  exercises: [
    // --- 3 LISTEN exercises ---
    {
      id: "u50-listen-1",
      type: "listen",
      question:
        "Écoute et choisis la bonne traduction de : 我已經吃過臭豆腐了，還不錯。",
      correctAnswer: "J'ai déjà mangé du tofu puant, c'est pas mal.",
      options: [
        "J'ai déjà mangé du tofu puant, c'est pas mal.",
        "Je n'ai jamais mangé de tofu puant, ça ne va pas.",
        "Je suis en train de manger du tofu, c'est bon.",
        "J'ai envie de manger du tofu puant, c'est comment ?",
      ],
    },
    {
      id: "u50-listen-2",
      type: "listen",
      question:
        "Écoute et choisis la bonne traduction de : 如果你明天有空，我們一起去爬山吧。",
      correctAnswer:
        "Si tu es libre demain, allons faire de la randonnée ensemble.",
      options: [
        "Si tu es libre demain, allons faire de la randonnée ensemble.",
        "Si tu es fatigué demain, on reste à la maison.",
        "Demain on va à la montagne, tu viens ?",
        "Si tu veux, on peut aller nager demain.",
      ],
    },
    {
      id: "u50-listen-3",
      type: "listen",
      question:
        "Écoute et choisis la bonne traduction de : 他比我高，但是我跑得比他快。",
      correctAnswer:
        "Il est plus grand que moi, mais je cours plus vite que lui.",
      options: [
        "Il est plus grand que moi, mais je cours plus vite que lui.",
        "Je suis plus grand que lui, et je cours aussi vite.",
        "Il est aussi grand que moi, et il court plus vite.",
        "Il est plus petit que moi, mais il court plus vite.",
      ],
    },

    // --- 3 COMPREHENSION exercises ---
    {
      id: "u50-comp-1",
      type: "comprehension",
      question:
        "小華在台灣住了一年了。她覺得台灣人很友善，食物很好吃。她打算再住一年，因為她還想學更多中文。— Pourquoi Xiaohua veut-elle rester un an de plus ?",
      correctAnswer: "Parce qu'elle veut apprendre encore plus de chinois.",
      options: [
        "Parce qu'elle veut apprendre encore plus de chinois.",
        "Parce que la nourriture est délicieuse.",
        "Parce que les gens sont gentils.",
        "Parce qu'elle n'a pas d'argent pour rentrer.",
      ],
    },
    {
      id: "u50-comp-2",
      type: "comprehension",
      question:
        "昨天我和朋友去了夜市。我吃了臭豆腐，他吃了蚵仔煎。他覺得蚵仔煎比臭豆腐好吃，可是我不同意。— Sur quoi les deux amis ne sont-ils pas d'accord ?",
      correctAnswer: "Sur quel plat est le meilleur entre le tofu puant et l'omelette aux huîtres.",
      options: [
        "Sur quel plat est le meilleur entre le tofu puant et l'omelette aux huîtres.",
        "Sur quel marché de nuit visiter.",
        "Sur l'heure à laquelle rentrer.",
        "Sur le prix de la nourriture.",
      ],
    },
    {
      id: "u50-comp-3",
      type: "comprehension",
      question:
        "雖然今天下雨了，但是小明還是騎腳踏車去上班了。他的同事都覺得他很厲害。— Pourquoi les collègues trouvent-ils Xiaoming impressionnant ?",
      correctAnswer:
        "Parce qu'il est allé au travail en vélo malgré la pluie.",
      options: [
        "Parce qu'il est allé au travail en vélo malgré la pluie.",
        "Parce qu'il est arrivé en avance au travail.",
        "Parce qu'il a pris le métro sous la pluie.",
        "Parce qu'il a prêté son parapluie à tout le monde.",
      ],
    },

    // --- 3 FILL-BLANK exercises ---
    {
      id: "u50-fill-1",
      type: "fill-blank",
      question:
        "你去___台灣嗎？沒有，我沒去___。(Tu es déjà allé à Taiwan ? Non, je n'y suis jamais allé.)",
      correctAnswer: "過 / 過",
      options: ["過 / 過", "了 / 了", "過 / 了", "了 / 過"],
      optionsHint: ["guò / guò", "le / le", "guò / le", "le / guò"],
      optionsZhuyin: [
        "ㄍㄨㄛˋ / ㄍㄨㄛˋ",
        "ㄌㄜ˙ / ㄌㄜ˙",
        "ㄍㄨㄛˋ / ㄌㄜ˙",
        "ㄌㄜ˙ / ㄍㄨㄛˋ",
      ],
      hint: "Pour parler d'une expérience (être déjà allé), on utilise cette particule.",
    },
    {
      id: "u50-fill-2",
      type: "fill-blank",
      question:
        "台北___台南大。(Taipei est plus grand que Tainan.)",
      correctAnswer: "比",
      options: ["比", "跟", "和", "很"],
      optionsHint: ["bǐ", "gēn", "hé", "hěn"],
      optionsZhuyin: ["ㄅㄧˇ", "ㄍㄣ", "ㄏㄜˊ", "ㄏㄣˇ"],
      hint: "Quel mot introduit une comparaison (A ___ B + adjectif) ?",
    },
    {
      id: "u50-fill-3",
      type: "fill-blank",
      question:
        "___明天下雨，我___不去了。(S'il pleut demain, je n'irai pas.)",
      correctAnswer: "如果 / 就",
      options: ["如果 / 就", "因為 / 所以", "雖然 / 但是", "不但 / 而且"],
      optionsHint: [
        "rúguǒ / jiù",
        "yīnwèi / suǒyǐ",
        "suīrán / dànshì",
        "búdàn / érqiě",
      ],
      optionsZhuyin: [
        "ㄖㄨˊ ㄍㄨㄛˇ / ㄐㄧㄡˋ",
        "ㄧㄣ ㄨㄟˋ / ㄙㄨㄛˇ ㄧˇ",
        "ㄙㄨㄟ ㄖㄢˊ / ㄉㄢˋ ㄕˋ",
        "ㄅㄨˊ ㄉㄢˋ / ㄦˊ ㄑㄧㄝˇ",
      ],
      hint: "Quelle paire de connecteurs exprime une condition (si... alors...) ?",
    },

    // --- 3 TRANSLATE exercises ---
    {
      id: "u50-trad-1",
      type: "translate",
      question:
        "Traduisez en chinois : « Je trouve que le chinois est difficile mais intéressant. »",
      correctAnswer: "我覺得中文很難但是很有趣。",
      options: [
        "我覺得中文很難但是很有趣。",
        "我想中文不難也不有趣。",
        "中文讓我覺得很開心。",
        "我不覺得中文很有意思。",
      ],
      optionsHint: [
        "wǒ juéde Zhōngwén hěn nán dànshì hěn yǒuqù.",
        "wǒ xiǎng Zhōngwén bù nán yě bù yǒuqù.",
        "Zhōngwén ràng wǒ juéde hěn kāixīn.",
        "wǒ bù juéde Zhōngwén hěn yǒu yìsi.",
      ],
    },
    {
      id: "u50-trad-2",
      type: "translate",
      question:
        "Traduisez en chinois : « J'étudie le chinois depuis trois mois. »",
      correctAnswer: "我學了三個月的中文了。",
      options: [
        "我學了三個月的中文了。",
        "我三個月學中文。",
        "我學過三個月中文。",
        "我要學三個月中文。",
      ],
      optionsHint: [
        "wǒ xué le sān gè yuè de Zhōngwén le.",
        "wǒ sān gè yuè xué Zhōngwén.",
        "wǒ xué guò sān gè yuè Zhōngwén.",
        "wǒ yào xué sān gè yuè Zhōngwén.",
      ],
    },
    {
      id: "u50-trad-3",
      type: "translate",
      question:
        "Traduisez en chinois : « Bien qu'il pleuve, je suis quand même allé au marché de nuit. »",
      correctAnswer: "雖然下雨了，但是我還是去了夜市。",
      options: [
        "雖然下雨了，但是我還是去了夜市。",
        "因為下雨了，所以我去了夜市。",
        "如果下雨了，我就去夜市。",
        "不但下雨了，而且我去了夜市。",
      ],
      optionsHint: [
        "suīrán xià yǔ le, dànshì wǒ háishì qù le yèshì.",
        "yīnwèi xià yǔ le, suǒyǐ wǒ qù le yèshì.",
        "rúguǒ xià yǔ le, wǒ jiù qù yèshì.",
        "búdàn xià yǔ le, érqiě wǒ qù le yèshì.",
      ],
    },

    // --- 3 REORDER exercises ---
    {
      id: "u50-reorder-1",
      type: "reorder",
      question: "Remettez dans l'ordre : 讓 / 這首歌 / 難過 / 很 / 我",
      correctAnswer: "這首歌讓我很難過",
      options: ["這首歌", "讓", "我", "很", "難過"],
      optionsHint: ["zhè shǒu gē", "ràng", "wǒ", "hěn", "nánguò"],
      optionsZhuyin: [
        "ㄓㄜˋ ㄕㄡˇ ㄍㄜ",
        "ㄖㄤˋ",
        "ㄨㄛˇ",
        "ㄏㄣˇ",
        "ㄋㄢˊ ㄍㄨㄛˋ",
      ],
      hint: "Structure : cause + 讓 + personne + 很 + émotion",
    },
    {
      id: "u50-reorder-2",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 中文 / 比 / 法文 / 難 / 我覺得",
      correctAnswer: "我覺得中文比法文難",
      options: ["我覺得", "中文", "比", "法文", "難"],
      optionsHint: ["wǒ juéde", "Zhōngwén", "bǐ", "Fǎwén", "nán"],
      optionsZhuyin: [
        "ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙",
        "ㄓㄨㄥ ㄨㄣˊ",
        "ㄅㄧˇ",
        "ㄈㄚˇ ㄨㄣˊ",
        "ㄋㄢˊ",
      ],
      hint: "Structure : opinion + A + 比 + B + adjectif",
    },
    {
      id: "u50-reorder-3",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 就 / 如果 / 一起去 / 你有空 / 我們",
      correctAnswer: "如果你有空我們就一起去",
      options: ["如果", "你有空", "我們", "就", "一起去"],
      optionsHint: ["rúguǒ", "nǐ yǒu kòng", "wǒmen", "jiù", "yìqǐ qù"],
      optionsZhuyin: [
        "ㄖㄨˊ ㄍㄨㄛˇ",
        "ㄋㄧˇ ㄧㄡˇ ㄎㄨㄥˋ",
        "ㄨㄛˇ ㄇㄣ˙",
        "ㄐㄧㄡˋ",
        "ㄧˋ ㄑㄧˇ ㄑㄩˋ",
      ],
      hint: "Structure : 如果 + condition, sujet + 就 + action",
    },
  ],

  requiredScore: 0.7,
  prerequisites: ["unit-49"],
};
