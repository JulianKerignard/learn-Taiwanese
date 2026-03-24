import type { CourseUnit } from "@/types/course";

export const unit16: CourseUnit = {
  id: "unit-16",
  number: 16,
  title: "過 et 會 — Expérience et futur",
  titleZh: "過和會——經驗與未來",
  chapter: 3,
  description:
    "Après avoir maîtrisé 了 (action accomplie), distinguez maintenant 過 (expérience de vie) et 會 (futur/capacité). Apprenez à choisir la bonne particule selon votre intention.",
  icon: "🔮",

  sections: [
    {
      title: "過 — L'expérience de vie",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "過 (guò) placé après le verbe indique une EXPERIENCE : le fait d'avoir vécu quelque chose au moins une fois dans sa vie. Ce n'est pas un moment précis, c'est un vécu général. 過 répond à la question : « as-tu déjà fait ça ? »",
        },
        {
          type: "text",
          content:
            "Structure : Sujet + Verbe + 過 + (Complément). Le placement est identique à 了 — juste après le verbe. Mais le sens est radicalement différent.",
        },
        {
          type: "example",
          chinese: "我去過台灣",
          pinyin: "wǒ qù guò Táiwān",
          translation: "Je suis déjà allé à Taiwan (dans ma vie)",
          content:
            "過 après 去 = expérience de vie. Ce n'est pas « quand » qui compte, mais le fait d'y être allé au moins une fois.",
        },
        {
          type: "example",
          chinese: "我吃過臭豆腐",
          pinyin: "wǒ chī guò chòudòufu",
          translation: "J'ai déjà mangé du tofu puant",
          content:
            "Expérience culinaire : je sais ce que c'est, je l'ai goûté. Pas besoin de savoir quand.",
        },
        {
          type: "example",
          chinese: "你吃過小籠包嗎？",
          pinyin: "nǐ chī guò xiǎolóngbāo ma?",
          translation: "As-tu déjà mangé des xiaolongbao ?",
          content:
            "Question d'expérience. On ne demande pas « quand », mais « est-ce que c'est déjà arrivé dans ta vie ? »",
        },
        {
          type: "text",
          content:
            "La différence cruciale entre 了 et 過 réside dans la perspective. 了 pointe vers un événement SPECIFIQUE et son résultat. 過 pointe vers une EXPERIENCE GENERALE, indépendante du moment précis.",
        },
        {
          type: "example",
          chinese: "我吃了臭豆腐",
          pinyin: "wǒ chī le chòudòufu",
          translation: "J'ai mangé du tofu puant (aujourd'hui, action spécifique)",
          content:
            "了 = événement précis. On pourrait ajouter « ce midi » ou « il y a une heure ».",
        },
        {
          type: "example",
          chinese: "我吃過臭豆腐",
          pinyin: "wǒ chī guò chòudòufu",
          translation: "J'ai déjà mangé du tofu puant (expérience de vie)",
          content:
            "過 = expérience générale. Le « quand » est sans importance.",
        },
        {
          type: "example",
          chinese: "我去了日本（上個月）",
          pinyin: "wǒ qù le Rìběn (shàng ge yuè)",
          translation: "Je suis allé au Japon (le mois dernier)",
          content: "了 = voyage spécifique, moment identifiable.",
        },
        {
          type: "example",
          chinese: "我去過日本（在我的人生中）",
          pinyin: "wǒ qù guò Rìběn (zài wǒ de rénshēng zhōng)",
          translation: "Je suis déjà allé au Japon (dans ma vie)",
          content: "過 = expérience de vie, le moment exact n'est pas pertinent.",
        },
        {
          type: "example",
          chinese: "他看了那部電影 vs 他看過那部電影",
          pinyin: "tā kàn le nà bù diànyǐng vs tā kàn guò nà bù diànyǐng",
          translation:
            "Il a regardé ce film (récemment) vs Il a déjà vu ce film (dans sa vie)",
          content: "了 = événement récent et spécifique. 過 = expérience accumulée.",
        },
        {
          type: "text",
          content:
            "Négation de 過 : 沒(有) + Verbe + 過 = « n'avoir jamais fait ». Contrairement à 了 qui disparaît avec 沒, 過 RESTE dans la phrase négative.",
        },
        {
          type: "example",
          chinese: "我沒吃過臭豆腐",
          pinyin: "wǒ méi chī guò chòudòufu",
          translation: "Je n'ai jamais mangé de tofu puant",
          content:
            "沒 + verbe + 過 : le 過 reste ! Comparez : 我沒吃 (je n'ai pas mangé) vs 我沒吃過 (je n'ai JAMAIS mangé).",
        },
        {
          type: "tip",
          content:
            "Astuce mnémotechnique : 過 contient l'idée de « passer par » (passer par une expérience). Si tu peux reformuler ta phrase avec « déjà » ou « jamais », c'est 過. Si tu parles d'un événement datable, c'est 了.",
        },
      ],
    },
    {
      title: "會 — Le futur et la capacité",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "會 (huì) est un mot multifonction essentiel. Il se place AVANT le verbe (contrairement à 了 et 過 qui sont après). Il a trois usages majeurs qu'il faut savoir distinguer par le contexte.",
        },
        {
          type: "text",
          content:
            "USAGE 1 : FUTUR PROBABLE. 會 indique qu'une action va probablement se produire. C'est la façon la plus courante d'exprimer le futur en chinois.",
        },
        {
          type: "example",
          chinese: "我會去",
          pinyin: "wǒ huì qù",
          translation: "J'irai / Je vais y aller",
          content: "會 + verbe = action future. Intention ou prédiction.",
        },
        {
          type: "example",
          chinese: "明天會下雨",
          pinyin: "míngtiān huì xiàyǔ",
          translation: "Il pleuvra demain / Il va pleuvoir demain",
          content: "會 pour une prédiction météo. Aucun sujet humain nécessaire.",
        },
        {
          type: "example",
          chinese: "他們會來嗎？",
          pinyin: "tāmen huì lái ma?",
          translation: "Est-ce qu'ils viendront ?",
          content: "Question sur le futur : 會 + verbe + 嗎.",
        },
        {
          type: "text",
          content:
            "USAGE 2 : CAPACITE ACQUISE. 會 indique qu'on a appris à faire quelque chose, qu'on possède une compétence. C'est l'équivalent de « savoir (faire) » en français.",
        },
        {
          type: "example",
          chinese: "我會說中文",
          pinyin: "wǒ huì shuō Zhōngwén",
          translation: "Je sais parler chinois",
          content:
            "會 + verbe = compétence acquise. J'ai appris le chinois et je suis capable de le parler.",
        },
        {
          type: "example",
          chinese: "你會開車嗎？",
          pinyin: "nǐ huì kāichē ma?",
          translation: "Tu sais conduire ?",
          content: "會 pour demander si quelqu'un possède une compétence.",
        },
        {
          type: "example",
          chinese: "她會做菜",
          pinyin: "tā huì zuòcài",
          translation: "Elle sait cuisiner",
          content: "Compétence apprise : elle a appris à cuisiner et peut le faire.",
        },
        {
          type: "text",
          content:
            "USAGE 3 : POSSIBILITE. 會 exprime qu'une chose est possible, plausible. Souvent dans les questions.",
        },
        {
          type: "example",
          chinese: "他會來嗎？",
          pinyin: "tā huì lái ma?",
          translation: "Est-ce qu'il viendra ? / C'est possible qu'il vienne ?",
          content:
            "Selon le contexte, cette phrase peut exprimer le futur OU la possibilité. Le sens se comprend par la situation.",
        },
        {
          type: "text",
          content:
            "Comment distinguer les 3 usages ? Le CONTEXTE est roi. 我會游泳 (capacité : je sais nager). 我明天會去游泳 (futur : j'irai nager demain). La présence d'un marqueur temporel (明天, 下個月...) oriente vers le futur. L'absence de marqueur temporel avec un verbe de compétence oriente vers la capacité.",
        },
        {
          type: "text",
          content:
            "Négation : 不會 (bú huì). Pour le futur : 我不會去 (je n'irai pas). Pour la capacité : 我不會游泳 (je ne sais pas nager). Un seul mot négatif pour les trois usages.",
        },
        {
          type: "example",
          chinese: "我不會說日語",
          pinyin: "wǒ bú huì shuō Rìyǔ",
          translation: "Je ne sais pas parler japonais",
          content: "不會 + verbe = absence de compétence.",
        },
        {
          type: "example",
          chinese: "明天不會下雨",
          pinyin: "míngtiān bú huì xiàyǔ",
          translation: "Il ne pleuvra pas demain",
          content: "不會 + verbe = négation du futur prédit.",
        },
      ],
    },
    {
      title: "了 vs 過 vs 會 — Le grand tableau",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Voici le moment de synthèse. Avec 了 (unité 15), 過, et 會, vous disposez des trois outils aspectuels et temporels fondamentaux du chinois. Chacun répond à une question différente et s'utilise dans un contexte précis.",
        },
        {
          type: "comparison",
          content:
            "LE GRAND TABLEAU :\n\n• 我吃了 = j'ai mangé (action terminée, moment précis)\n• 我吃過 = j'ai déjà mangé ça (expérience de vie)\n• 我會吃 = je mangerai / je sais manger\n\n• 我沒吃 = je n'ai pas mangé (négation spécifique)\n• 我沒吃過 = je n'ai jamais mangé ça (négation d'expérience)\n• 我不會吃 = je ne mangerai pas / je ne sais pas manger\n\n• 我去了台北 = je suis allé à Taipei (voyage spécifique)\n• 我去過台北 = je suis déjà allé à Taipei (dans ma vie)\n• 我會去台北 = j'irai à Taipei (futur)",
        },
        {
          type: "tip",
          content:
            "Règle de choix rapide : 了 = événement spécifique accompli (« quand ? » a une réponse). 過 = expérience générale (« déjà/jamais »). 會 = futur ou capacité (« va/sait »). Si vous pouvez ajouter « hier » ou « ce matin » → 了. Si vous pouvez ajouter « dans ma vie » → 過. Si vous pouvez ajouter « demain » ou « savoir » → 會.",
        },
        {
          type: "text",
          content:
            "Cas subtil : on peut combiner ces particules dans un même récit. 我去過日本，上次去了東京，下次會去大阪 (Je suis déjà allé au Japon, la dernière fois je suis allé à Tokyo, la prochaine fois j'irai à Osaka). Trois particules, trois perspectives.",
        },
        {
          type: "example",
          chinese: "我去過日本，上次去了東京，下次會去大阪",
          pinyin:
            "wǒ qù guò Rìběn, shàng cì qù le Dōngjīng, xià cì huì qù Dàbǎn",
          translation:
            "Je suis déjà allé au Japon, la dernière fois je suis allé à Tokyo, la prochaine fois j'irai à Osaka",
          content:
            "過 = expérience globale. 了 = événement passé spécifique. 會 = projet futur. Les trois coexistent naturellement.",
        },
        {
          type: "example",
          chinese: "你看過這部電影嗎？我昨天看了。你也會喜歡的。",
          pinyin:
            "nǐ kàn guò zhè bù diànyǐng ma? wǒ zuótiān kàn le. nǐ yě huì xǐhuān de.",
          translation:
            "Tu as déjà vu ce film ? Je l'ai regardé hier. Tu vas l'aimer aussi.",
          content:
            "過 pour l'expérience, 了 pour l'action d'hier, 會 pour la prédiction future.",
        },
      ],
    },
    {
      title: "Les connecteurs pour raconter",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Maintenant que vous savez exprimer le passé accompli (了), l'expérience (過), et le futur (會), il vous faut des connecteurs pour lier vos phrases et construire un récit fluide. Voici les quatre structures de connexion les plus utilisées.",
        },
        {
          type: "text",
          content:
            "因為...所以... (yīnwèi...suǒyǐ...) = parce que...donc... C'est la structure cause-conséquence. En chinois, on exprime souvent les DEUX parties (cause ET conséquence), alors qu'en français on n'en met généralement qu'une.",
        },
        {
          type: "example",
          chinese: "因為下雨了，所以我沒出門",
          pinyin: "yīnwèi xiàyǔ le, suǒyǐ wǒ méi chūmén",
          translation: "Parce qu'il a plu, je ne suis pas sorti",
          content:
            "因為 + cause，所以 + conséquence. Notez le 了 après 下雨 (l'accomplissement de la pluie).",
        },
        {
          type: "text",
          content:
            "可是 (kěshì) / 但是 (dànshì) = mais. Deux synonymes pour l'opposition. 可是 est légèrement plus oral, 但是 un peu plus écrit. Les deux sont interchangeables au quotidien.",
        },
        {
          type: "example",
          chinese: "我想去，可是我沒有錢",
          pinyin: "wǒ xiǎng qù, kěshì wǒ méiyǒu qián",
          translation: "Je veux y aller, mais je n'ai pas d'argent",
          content: "可是 introduit l'opposition après la virgule.",
        },
        {
          type: "example",
          chinese: "我吃過臭豆腐，但是我不喜歡",
          pinyin: "wǒ chī guò chòudòufu, dànshì wǒ bù xǐhuān",
          translation: "J'ai déjà mangé du tofu puant, mais je n'aime pas",
          content: "但是 pour l'opposition. 過 pour l'expérience, pas de 了.",
        },
        {
          type: "text",
          content:
            "然後 (ránhòu) = ensuite, et puis. Connecteur de séquence temporelle, indispensable pour raconter une suite d'événements.",
        },
        {
          type: "example",
          chinese: "我先吃了飯，然後去了學校",
          pinyin: "wǒ xiān chī le fàn, ránhòu qù le xuéxiào",
          translation: "J'ai d'abord mangé, puis je suis allé à l'école",
          content:
            "先 (d'abord) + action₁ + 了，然後 + action₂ + 了. Séquence chronologique.",
        },
        {
          type: "text",
          content:
            "先...再... (xiān...zài...) = d'abord...puis... Structure pour ordonner deux actions. 先 pour la première, 再 pour la suivante. Souvent utilisé pour donner des instructions ou décrire un plan.",
        },
        {
          type: "example",
          chinese: "先寫完功課，再出去玩",
          pinyin: "xiān xiě wán gōngkè, zài chūqù wán",
          translation: "Finis d'abord tes devoirs, puis sors jouer",
          content:
            "先 + action₁，再 + action₂. Instruction avec un ordre logique.",
        },
        {
          type: "example",
          chinese: "先吃了飯再說",
          pinyin: "xiān chī le fàn zài shuō",
          translation: "Mange d'abord, on en reparlera après",
          content:
            "Expression très courante à Taiwan. 再說 = on en reparle après / on verra.",
        },
        {
          type: "tip",
          content:
            "Ces connecteurs sont le ciment de vos récits. Sans eux, vos phrases restent isolées. Avec eux, vous pouvez raconter une journée, expliquer une décision, ou décrire un plan. Pratiquez-les en combinaison avec 了, 過, et 會.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "小美 (Xiǎo Měi) et 大衛 (Dàwèi) comparent leurs expériences de voyage et font des projets.",
    lines: [
      {
        speaker: "大衛",
        chinese: "小美，你去過日本嗎？",
        pinyin: "Xiǎo Měi, nǐ qù guò Rìběn ma?",
        french: "Xiao Mei, tu es déjà allée au Japon ?",
        note: "過 pour demander une expérience de vie.",
      },
      {
        speaker: "小美",
        chinese: "去過，我去了兩次。你呢？",
        pinyin: "qù guò, wǒ qù le liǎng cì. nǐ ne?",
        french: "Oui, j'y suis allée deux fois. Et toi ?",
        note: "去過 = oui (expérience). 去了兩次 = 了 pour le fait spécifique de deux visites.",
      },
      {
        speaker: "大衛",
        chinese: "我沒去過，可是我會說一點日語。",
        pinyin: "wǒ méi qù guò, kěshì wǒ huì shuō yìdiǎn Rìyǔ.",
        french: "Je n'y suis jamais allé, mais je sais parler un peu japonais.",
        note: "沒去過 = jamais (négation d'expérience). 會說 = capacité acquise.",
      },
      {
        speaker: "小美",
        chinese: "那你以後會去嗎？日本的拉麵很好吃，你一定要吃過！",
        pinyin:
          "nà nǐ yǐhòu huì qù ma? Rìběn de lāmiàn hěn hǎochī, nǐ yídìng yào chī guò!",
        french:
          "Alors tu iras un jour ? Les ramen japonais sont délicieux, il faut que tu en aies goûté !",
        note: "會去 = futur. 吃過 = l'expérience à acquérir.",
      },
      {
        speaker: "大衛",
        chinese: "會啊！因為我學了日語，所以我想去練習。",
        pinyin: "huì a! yīnwèi wǒ xué le Rìyǔ, suǒyǐ wǒ xiǎng qù liànxí.",
        french:
          "Oui ! Parce que j'ai appris le japonais, je veux aller pratiquer.",
        note: "會 en réponse = oui (futur). 因為...所以... pour la cause-conséquence.",
      },
      {
        speaker: "小美",
        chinese: "好，我們先存錢，然後一起去！",
        pinyin: "hǎo, wǒmen xiān cún qián, ránhòu yìqǐ qù!",
        french: "OK, économisons d'abord, puis on y va ensemble !",
        note: "先...然後... pour ordonner les actions futures.",
      },
    ],
  },

  keyPoints: [
    "過 après le verbe = expérience de vie (au moins une fois). 我吃過 = j'ai déjà mangé ça. Négation : 沒 + verbe + 過 (我沒吃過 = je n'ai jamais mangé ça).",
    "會 avant le verbe a 3 usages : futur probable (我會去 = j'irai), capacité acquise (我會說中文 = je sais parler chinois), possibilité (他會來嗎？). Négation : 不會.",
    "了 = événement spécifique accompli (datable). 過 = expérience générale (déjà/jamais). 會 = futur ou capacité. Le choix dépend de la perspective, pas du temps.",
    "Connecteurs de récit : 因為...所以... (cause-conséquence), 可是/但是 (opposition), 然後 (séquence), 先...再... (d'abord...puis...).",
    "On peut combiner les trois dans un même récit : 我去過日本 (expérience), 上次去了東京 (fait spécifique), 下次會去大阪 (projet futur).",
  ],

  vocabulary: [
    {
      character: "過",
      pinyin: "guò",
      zhuyin: "ㄍㄨㄛˋ",
      french: "Particule d'expérience (avoir déjà fait)",
      english: "Experiential aspect particle",
      example: {
        sentence: "你去過台灣嗎？",
        pinyin: "nǐ qù guò Táiwān ma?",
        translation: "Tu es déjà allé à Taiwan ?",
      },
    },
    {
      character: "會",
      pinyin: "huì",
      zhuyin: "ㄏㄨㄟˋ",
      french: "Savoir (capacité) / aller (futur)",
      english: "Can (ability) / will (future)",
      example: {
        sentence: "我會說中文。",
        pinyin: "wǒ huì shuō Zhōngwén.",
        translation: "Je sais parler chinois.",
      },
    },
    {
      character: "經驗",
      pinyin: "jīngyàn",
      zhuyin: "ㄐㄧㄥ ㄧㄢˋ",
      french: "Expérience",
      english: "Experience",
      example: {
        sentence: "這是很好的經驗。",
        pinyin: "zhè shì hěn hǎo de jīngyàn.",
        translation: "C'est une très bonne expérience.",
      },
    },
    {
      character: "從來",
      pinyin: "cónglái",
      zhuyin: "ㄘㄨㄥˊ ㄌㄞˊ",
      french: "Jamais (avec négation)",
      english: "Never (with negation)",
      example: {
        sentence: "我從來沒去過。",
        pinyin: "wǒ cónglái méi qù guò.",
        translation: "Je n'y suis jamais allé.",
      },
    },
    {
      character: "以後",
      pinyin: "yǐhòu",
      zhuyin: "ㄧˇ ㄏㄡˋ",
      french: "Après, plus tard, à l'avenir",
      english: "After, later, in the future",
      example: {
        sentence: "以後我會去日本。",
        pinyin: "yǐhòu wǒ huì qù Rìběn.",
        translation: "Plus tard j'irai au Japon.",
      },
    },
    {
      character: "以前",
      pinyin: "yǐqián",
      zhuyin: "ㄧˇ ㄑㄧㄢˊ",
      french: "Avant, autrefois",
      english: "Before, in the past",
      example: {
        sentence: "以前我住在法國。",
        pinyin: "yǐqián wǒ zhù zài Fǎguó.",
        translation: "Avant, j'habitais en France.",
      },
    },
    {
      character: "然後",
      pinyin: "ránhòu",
      zhuyin: "ㄖㄢˊ ㄏㄡˋ",
      french: "Ensuite, et puis",
      english: "Then, afterwards",
      example: {
        sentence: "我先吃飯，然後去學校。",
        pinyin: "wǒ xiān chīfàn, ránhòu qù xuéxiào.",
        translation: "Je mange d'abord, puis je vais à l'école.",
      },
    },
    {
      character: "因為",
      pinyin: "yīnwèi",
      zhuyin: "ㄧㄣ ㄨㄟˋ",
      french: "Parce que",
      english: "Because",
      example: {
        sentence: "因為下雨，我沒出門。",
        pinyin: "yīnwèi xiàyǔ, wǒ méi chūmén.",
        translation: "Parce qu'il pleut, je ne suis pas sorti.",
      },
    },
    {
      character: "所以",
      pinyin: "suǒyǐ",
      zhuyin: "ㄙㄨㄛˇ ㄧˇ",
      french: "Donc, par conséquent",
      english: "So, therefore",
      example: {
        sentence: "我很累，所以想休息。",
        pinyin: "wǒ hěn lèi, suǒyǐ xiǎng xiūxi.",
        translation: "Je suis fatigué, donc je veux me reposer.",
      },
    },
    {
      character: "可是",
      pinyin: "kěshì",
      zhuyin: "ㄎㄜˇ ㄕˋ",
      french: "Mais, cependant",
      english: "But, however",
      example: {
        sentence: "我想去，可是沒有時間。",
        pinyin: "wǒ xiǎng qù, kěshì méiyǒu shíjiān.",
        translation: "Je veux y aller, mais je n'ai pas le temps.",
      },
    },
    {
      character: "先",
      pinyin: "xiān",
      zhuyin: "ㄒㄧㄢ",
      french: "D'abord, en premier",
      english: "First, before",
      example: {
        sentence: "你先吃飯。",
        pinyin: "nǐ xiān chīfàn.",
        translation: "Mange d'abord.",
      },
    },
    {
      character: "再",
      pinyin: "zài",
      zhuyin: "ㄗㄞˋ",
      french: "Puis, ensuite (après une première action)",
      english: "Then (after first action)",
      example: {
        sentence: "先休息，再工作。",
        pinyin: "xiān xiūxi, zài gōngzuò.",
        translation: "Repose-toi d'abord, puis travaille.",
      },
    },
    {
      character: "已經",
      pinyin: "yǐjīng",
      zhuyin: "ㄧˇ ㄐㄧㄥ",
      french: "Déjà",
      english: "Already",
      example: {
        sentence: "我已經吃過了。",
        pinyin: "wǒ yǐjīng chī guò le.",
        translation: "J'ai déjà mangé (expérience confirmée).",
      },
    },
    {
      character: "剛",
      pinyin: "gāng",
      zhuyin: "ㄍㄤ",
      french: "Juste, venir de",
      english: "Just (recently)",
      example: {
        sentence: "我剛到台灣。",
        pinyin: "wǒ gāng dào Táiwān.",
        translation: "Je viens d'arriver à Taiwan.",
      },
    },
    {
      character: "快要",
      pinyin: "kuàiyào",
      zhuyin: "ㄎㄨㄞˋ ㄧㄠˋ",
      french: "Sur le point de, bientôt",
      english: "About to, soon",
      example: {
        sentence: "快要下雨了。",
        pinyin: "kuàiyào xiàyǔ le.",
        translation: "Il va bientôt pleuvoir.",
      },
    },
  ],

  exercises: [
    {
      id: "u16-ex1",
      type: "fill-blank",
      question:
        "你吃___臭豆腐嗎？(As-tu déjà mangé du tofu puant ?)",
      correctAnswer: "過",
      options: ["過", "了", "會", "在"],
      hint: "On demande une expérience de vie, pas un événement spécifique.",
    },
    {
      id: "u16-ex2",
      type: "comprehension",
      question:
        "Quelle est la différence entre 我吃了臭豆腐 et 我吃過臭豆腐 ?",
      correctAnswer:
        "了 = action spécifique terminée (par ex. ce midi). 過 = expérience de vie (j'en ai déjà mangé, peu importe quand)",
      options: [
        "了 = action spécifique terminée (par ex. ce midi). 過 = expérience de vie (j'en ai déjà mangé, peu importe quand)",
        "了 = passé récent, 過 = passé lointain",
        "了 et 過 signifient la même chose",
        "了 = une seule fois, 過 = plusieurs fois",
      ],
    },
    {
      id: "u16-ex3",
      type: "fill-blank",
      question:
        "我___說中文。(Je sais parler chinois.)",
      correctAnswer: "會",
      options: ["會", "了", "過", "可以"],
      hint: "Quel mot exprime une capacité acquise ?",
    },
    {
      id: "u16-ex4",
      type: "translate",
      question: "Comment dit-on « Je n'ai jamais mangé de xiaolongbao » ?",
      correctAnswer: "我沒吃過小籠包",
      options: [
        "我沒吃過小籠包",
        "我沒吃了小籠包",
        "我不吃過小籠包",
        "我不會吃小籠包",
      ],
    },
    {
      id: "u16-ex5",
      type: "fill-blank",
      question:
        "明天___下雨。(Il pleuvra demain.)",
      correctAnswer: "會",
      options: ["會", "了", "過", "要"],
      hint: "Quel mot exprime le futur probable ?",
    },
    {
      id: "u16-ex6",
      type: "comprehension",
      question:
        "Dans la phrase 我去過日本，上次去了東京，下次會去大阪, pourquoi trois particules différentes ?",
      correctAnswer:
        "過 = expérience globale, 了 = voyage spécifique passé, 會 = projet futur",
      options: [
        "過 = expérience globale, 了 = voyage spécifique passé, 會 = projet futur",
        "Les trois sont interchangeables",
        "C'est une erreur, il faudrait utiliser 了 partout",
        "過 = passé lointain, 了 = passé récent, 會 = futur",
      ],
    },
    {
      id: "u16-ex7",
      type: "fill-blank",
      question:
        "___下雨了，___我沒出門。(Parce qu'il a plu, je ne suis pas sorti.)",
      correctAnswer: "因為...所以",
      options: ["因為...所以", "可是...所以", "先...再", "然後...再"],
      hint: "Quelle structure exprime cause-conséquence ?",
    },
    {
      id: "u16-ex8",
      type: "translate",
      question: "Que signifie 我不會開車 ?",
      correctAnswer: "Je ne sais pas conduire",
      options: [
        "Je ne sais pas conduire",
        "Je ne conduirai pas",
        "Je n'ai pas conduit",
        "Je n'ai jamais conduit",
      ],
    },
    {
      id: "u16-reorder-1",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 過 / 你 / 嗎 / 去 / 日本",
      correctAnswer: "你去過日本嗎",
      options: ["你", "去", "過", "日本", "嗎"],
      hint: "Structure : Sujet + Verbe + 過 + Complément + 嗎",
    },
    {
      id: "u16-reorder-2",
      type: "reorder",
      question:
        "Remettez dans l'ordre : 會 / 明天 / 下雨 / 我 / 不 / 覺得",
      correctAnswer: "我覺得明天不會下雨",
      options: ["我", "覺得", "明天", "不", "會", "下雨"],
      hint: "Structure : Sujet + 覺得 + Temps + 不會 + Verbe",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-15"],
};
