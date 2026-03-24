import type { CourseUnit } from "@/types/course";

export const unit20: CourseUnit = {
  id: "unit-20",
  number: 20,
  title: "Politesse et registres de langue",
  titleZh: "禮貌和語言風格",
  chapter: 4,
  description:
    "Maîtrisez les niveaux de politesse en chinois, apprenez à vous excuser correctement et découvrez le concept fondamental de 面子 (la face).",
  icon: "🎎",

  sections: [
    {
      title: "不好意思 vs 對不起 vs 抱歉",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En français, on dit « pardon » ou « désolé » à tout moment. En chinois, il y a plusieurs niveaux d'excuses, et les confondre peut créer des malentendus. Le choix du mot révèle la gravité de la situation.",
        },
        {
          type: "example",
          chinese: "不好意思，請問一下...",
          pinyin: "bù hǎo yìsi, qǐngwèn yíxià...",
          translation: "Excusez-moi, puis-je demander...",
          content:
            "不好意思 est l'expression la plus courante à Taiwan. Ce n'est pas une vraie excuse : c'est « désolé de déranger ». Les Taiwanais le disent des dizaines de fois par jour, comme les Français disent « pardon » en bousculant quelqu'un.",
        },
        {
          type: "example",
          chinese: "對不起，我遲到了。",
          pinyin: "duìbuqǐ, wǒ chídào le.",
          translation: "Pardon, je suis en retard.",
          content:
            "對不起 est une vraie excuse. On reconnaît une faute. Plus formel que 不好意思. Utilisé quand on a réellement fait quelque chose de mal.",
        },
        {
          type: "example",
          chinese: "非常抱歉，給您帶來不便。",
          pinyin: "fēicháng bàoqiàn, gěi nín dàilái búbiàn.",
          translation: "Je suis vraiment navré de vous avoir causé du désagrément.",
          content:
            "抱歉 est très formel, presque littéraire. On le trouve dans les emails professionnels, les annonces officielles, ou les situations graves.",
        },
        {
          type: "example",
          chinese: "麻煩你幫我拿一下。",
          pinyin: "máfan nǐ bāng wǒ ná yíxià.",
          translation: "Désolé de te déranger, peux-tu me passer ça ?",
          content:
            "麻煩你 (litt. « te déranger ») s'utilise avant une demande. C'est une formule de politesse qui adoucit la requête.",
        },
        {
          type: "comparison",
          content:
            "Comparaison FR/ZH : Les Français disent « pardon » pour tout (bousculade, question, excuse). Les Taiwanais disent 不好意思 pour tout. 對不起 est réservé aux vraies excuses — un peu comme « je suis vraiment désolé » en français.",
        },
        {
          type: "tip",
          content:
            "Astuce mnémotechnique : 不好意思 = gêne légère (je suis embarrassé). 對不起 = culpabilité (je t'ai fait du tort). 抱歉 = regret formel (je regrette profondément).",
        },
      ],
    },
    {
      title: "Registre formel vs informel",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Comme le « tu » et le « vous » en français, le chinois a des registres de langue bien distincts. Utiliser le mauvais registre ne provoque pas d'erreur grammaticale, mais peut créer un malaise social.",
        },
        {
          type: "example",
          chinese: "您好，請問貴姓？",
          pinyin: "nín hǎo, qǐngwèn guìxìng?",
          translation: "Bonjour, puis-je connaître votre nom de famille ?",
          content:
            "Registre formel : 您 (vous de politesse), 請問 (puis-je demander), 貴姓 (votre honorable nom). Utilisé avec des inconnus, des aînés, en contexte professionnel.",
        },
        {
          type: "example",
          chinese: "欸，你幹嘛？",
          pinyin: "èi, nǐ gànmá?",
          translation: "Hé, tu fais quoi ?",
          content:
            "Registre très informel : 欸 (hé !), 幹嘛 (tu fais quoi / c'est quoi ton problème). Uniquement entre amis proches. Ne jamais utiliser avec un inconnu ou un aîné.",
        },
        {
          type: "example",
          chinese: "沒關係，不客氣。",
          pinyin: "méi guānxi, bú kèqi.",
          translation: "Ce n'est rien, de rien.",
          content:
            "沒關係 (ce n'est rien) répond à 對不起 ou 不好意思. 不客氣 (de rien, litt. « ne sois pas cérémonieux ») répond à 謝謝.",
        },
        {
          type: "example",
          chinese: "辛苦了！你做得很好。",
          pinyin: "xīnkǔ le! nǐ zuò de hěn hǎo.",
          translation: "Bon travail ! Tu as bien fait.",
          content:
            "辛苦了 (litt. « tu as souffert ») est une expression essentielle. On la dit au livreur, au collègue qui a travaillé dur, au serveur. C'est un remerciement chaleureux pour l'effort fourni.",
        },
        {
          type: "tip",
          content:
            "Quand utiliser quel registre ? Avec un inconnu : formel (您, 請問). Avec un ami : informel (你, 欸). Avec un aîné ou supérieur : toujours formel. Dans le doute : formel. Il vaut mieux être trop poli que pas assez.",
        },
      ],
    },
    {
      title: "面子 - Sauver la face",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "面子 (miànzi, « la face ») est l'un des concepts les plus importants de la culture chinoise et taiwanaise. C'est la réputation sociale, l'image publique, la dignité. Perdre la face (丟臉 diūliǎn) est l'une des pires choses qui puisse arriver socialement.",
        },
        {
          type: "warning",
          content:
            "Règle d'or : ne JAMAIS critiquer quelqu'un directement en public. Même si votre collègue a fait une erreur, ne le corrigez pas devant les autres. Attendez d'être en privé. Sinon, vous lui faites perdre la face — et il ne vous le pardonnera peut-être jamais.",
        },
        {
          type: "text",
          content:
            "Dire « non » directement est aussi un problème de face. Les Taiwanais évitent le refus frontal et utilisent des formules détournées que vous devez apprendre à décoder.",
        },
        {
          type: "example",
          chinese: "可能不行。",
          pinyin: "kěnéng bù xíng.",
          translation: "Ce n'est peut-être pas possible.",
          content: "En réalité, ça veut dire « non ». Le 可能 adoucit le refus.",
        },
        {
          type: "example",
          chinese: "我再想想。",
          pinyin: "wǒ zài xiǎngxiang.",
          translation: "Laissez-moi y réfléchir.",
          content:
            "Souvent, cela signifie « non » poliment. Si quelqu'un dit ça, n'insistez pas.",
        },
        {
          type: "example",
          chinese: "下次吧。",
          pinyin: "xià cì ba.",
          translation: "La prochaine fois.",
          content:
            "Un refus doux. « La prochaine fois » peut ne jamais arriver, et les deux parties le savent.",
        },
        {
          type: "example",
          chinese: "哪裡哪裡，沒有啦。",
          pinyin: "nǎlǐ nǎlǐ, méiyǒu la.",
          translation: "Mais non, pas du tout. (réponse à un compliment)",
          content:
            "Les compliments se refusent par politesse. Si quelqu'un dit « ton chinois est super ! », répondez 哪裡哪裡 (litt. « où ça, où ça ? »). Accepter un compliment directement peut sembler arrogant.",
        },
        {
          type: "tip",
          content:
            "Pour vous, Français habitués à la franchise : apprenez à lire entre les lignes. Un Taiwanais qui hésite, sourit gêné ou dit « peut-être » vous dit probablement « non ». C'est sa façon de préserver votre face ET la sienne.",
        },
        {
          type: "text",
          content:
            "面子 (miànzi, la face) est peut-etre LE concept le plus important pour comprendre la societe taiwanaise. Ce n'est pas juste « la fierte » — c'est un systeme social complet qui regit les interactions quotidiennes.\n\n给面子 (gěi miànzi, donner de la face) : complimenter quelqu'un en public, accepter une invitation, montrer du respect pour l'opinion de quelqu'un. Quand un collegue presente son idee en reunion, meme si elle est mauvaise, vous dites d'abord quelque chose de positif AVANT de suggerer une alternative. Par exemple : 這個想法不錯，不過我們也可以考慮... (zhège xiǎngfǎ búcuò, búguò wǒmen yě kěyǐ kǎolǜ... = cette idee n'est pas mal, mais on pourrait aussi envisager...). Le 不錯 donne de la face, le 不過 introduit votre vraie pensee en douceur.\n\n丟臉 (diūliǎn, perdre la face) : etre critique en public, faire une erreur visible, etre embarrasse devant les autres. C'est la pire chose qui puisse arriver dans un contexte social taiwanais. Un employe corrige devant ses collegues par son manager ne sera pas motive — il sera humilie et pourrait meme demissionner. Un etudiant ridiculise devant sa classe ne participera plus jamais.\n\n保面子 (bǎo miànzi, sauver la face) : aider quelqu'un a ne pas etre embarrasse. Si quelqu'un fait une erreur, on trouve une excuse pour lui. Si un plat est rate au restaurant, on ne le dit pas devant les autres convives. Si un ami se trompe sur un fait, on ne le corrige pas brutalement devant le groupe — on attend d'etre en prive ou on change subtilement de sujet.\n\nPour un Francais, ca signifie concretement :\n- Ne JAMAIS critiquer quelqu'un directement devant d'autres personnes. Meme si vous avez raison. Meme si c'est important.\n- Toujours offrir une porte de sortie : dites 可能是因為... (kěnéng shì yīnwèi..., c'est peut-etre parce que...) au lieu de 你錯了 (nǐ cuò le, tu as tort).\n- Accepter les compliments avec modestie : 哪裡哪裡 (nǎlǐ nǎlǐ, mais non mais non) ou 沒有啦 (méiyǒu la, pas du tout). Dire 謝謝，我也覺得 (merci, je pense aussi) serait percu comme arrogant.\n- Ne pas insister quand quelqu'un dit « non » poliment — il dit VRAIMENT non. Plus vous insistez, plus il est gene.\n- Quand vous faites un cadeau, la personne peut le refuser 2-3 fois avant d'accepter. C'est le rituel : vous insistez, elle refuse, vous insistez encore, elle accepte. Ne prenez pas le premier refus au serieux.",
        },
        {
          type: "text",
          content:
            "Au-dela de 面子, il existe un autre concept cle : 客氣 (kèqi, la ceremonie/politesse). 不要客氣 (bú yào kèqi, ne fais pas de ceremonies) est une phrase que vous entendrez constamment. Elle signifie « fais comme chez toi » ou « pas besoin d'etre poli ». Paradoxalement, un Taiwanais qui vous dit 不要客氣 s'attend a ce que vous restiez un minimum poli. C'est une invitation a se detendre, pas a abandonner toute politesse.\n\nLa danse de la 客氣 se joue constamment dans les situations suivantes :\n- Au restaurant : quand l'addition arrive, tout le monde se bat pour payer. 我來付 (wǒ lái fù, laisse-moi payer), 不行不行，是我請你 (bùxíng bùxíng, shì wǒ qǐng nǐ, non non, c'est moi qui t'invite). C'est un rituel. Si quelqu'un insiste plus de 3 fois, laissez-le payer et dites 那下次我請你 (nà xià cì wǒ qǐng nǐ, alors la prochaine fois c'est moi).\n- Quand on vous offre quelque chose : refusez une fois, la personne insiste, vous acceptez. Si vous acceptez immediatement, ca peut paraitre gourmand. Si vous refusez trop, la personne se sentira rejetee.\n- Quand on vous complimente : minimisez toujours. 你的中文好好 (ton chinois est super) → 哪裡，還在學 (nǎlǐ, hái zài xué, mais non, j'apprends encore).",
        },
        {
          type: "example",
          chinese: "這個想法不錯，不過我們也可以考慮另一個方法",
          pinyin: "zhège xiǎngfǎ búcuò, búguò wǒmen yě kěyǐ kǎolǜ lìng yí ge fāngfǎ",
          translation: "Cette idee n'est pas mal, mais on pourrait aussi envisager une autre methode",
          content: "Structure pour critiquer en donnant de la face : compliment + 不過 + suggestion alternative.",
        },
        {
          type: "example",
          chinese: "那下次我請你",
          pinyin: "nà xià cì wǒ qǐng nǐ",
          translation: "Alors la prochaine fois c'est moi qui invite",
          content: "La phrase magique apres que quelqu'un a insiste pour payer. Equilibre social retabli.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Deux situations : Paul au bureau de l'immigration (formel), puis avec son ami taiwanais Wèi (informel).",
    lines: [
      {
        speaker: "Paul (formel)",
        chinese: "您好，不好意思，請問辦簽證在哪裡？",
        pinyin: "nín hǎo, bù hǎo yìsi, qǐngwèn bàn qiānzhèng zài nǎlǐ?",
        french:
          "Bonjour, excusez-moi, où est-ce qu'on fait les visas, s'il vous plaît ?",
        note: "Registre formel : 您, 不好意思, 請問.",
      },
      {
        speaker: "Fonctionnaire",
        chinese: "在二樓，請上去。",
        pinyin: "zài èr lóu, qǐng shàngqù.",
        french: "Au deuxième étage, montez s'il vous plaît.",
      },
      {
        speaker: "Paul (formel)",
        chinese: "謝謝您，麻煩了。",
        pinyin: "xièxie nín, máfan le.",
        french: "Merci, désolé pour le dérangement.",
        note: "麻煩了 = merci de s'être donné la peine.",
      },
      {
        speaker: "Paul (informel)",
        chinese: "欸，小偉，明天要不要一起吃飯？",
        pinyin: "èi, xiǎo Wěi, míngtiān yào bú yào yìqǐ chīfàn?",
        french: "Hé, Xiao Wei, tu veux manger ensemble demain ?",
        note: "Registre informel : 欸, prénom direct, A不A.",
      },
      {
        speaker: "小偉",
        chinese: "明天喔...我再想想，可能不行欸。",
        pinyin: "míngtiān ō... wǒ zài xiǎngxiang, kěnéng bù xíng èi.",
        french: "Demain... laisse-moi réfléchir, c'est peut-être pas possible.",
        note: "C'est un refus poli ! 我再想想 + 可能不行 = non.",
      },
      {
        speaker: "Paul",
        chinese: "好，沒關係，下次吧！",
        pinyin: "hǎo, méi guānxi, xià cì ba!",
        french: "OK, pas de souci, une prochaine fois !",
        note: "Paul a compris le code : il n'insiste pas.",
      },
    ],
  },

  keyPoints: [
    "不好意思 = gêne légère (le plus courant). 對不起 = vraie excuse. 抱歉 = formel/écrit. 麻煩你 = avant une demande.",
    "Registre formel : 您, 請問, 貴姓. Informel : 你, 欸, 幹嘛. Dans le doute, restez formel.",
    "辛苦了 (merci pour l'effort) et 不客氣 (de rien) sont des expressions sociales essentielles au quotidien.",
    "面子 (la face) : ne jamais critiquer en public, décoder les refus indirects (可能不行, 我再想想, 下次吧), refuser poliment les compliments (哪裡哪裡).",
  ],

  vocabulary: [
    {
      character: "不好意思",
      pinyin: "bù hǎo yìsi",
      zhuyin: "ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ˙",
      french: "Excusez-moi / désolé (léger)",
      english: "Excuse me / sorry (mild)",
      example: {
        sentence: "不好意思，借過一下。",
        pinyin: "bù hǎo yìsi, jièguò yíxià.",
        translation: "Pardon, laissez-moi passer.",
      },
    },
    {
      character: "對不起",
      pinyin: "duìbuqǐ",
      zhuyin: "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ",
      french: "Pardon / désolé (sincère)",
      english: "Sorry (sincere apology)",
      example: {
        sentence: "對不起，是我的錯。",
        pinyin: "duìbuqǐ, shì wǒ de cuò.",
        translation: "Pardon, c'est ma faute.",
      },
    },
    {
      character: "抱歉",
      pinyin: "bàoqiàn",
      zhuyin: "ㄅㄠˋ ㄑㄧㄢˋ",
      french: "Je regrette (très formel)",
      english: "I apologize (very formal)",
      example: {
        sentence: "很抱歉讓您久等了。",
        pinyin: "hěn bàoqiàn ràng nín jiǔ děng le.",
        translation: "Je suis navré de vous avoir fait attendre.",
      },
    },
    {
      character: "麻煩",
      pinyin: "máfan",
      zhuyin: "ㄇㄚˊ ㄈㄢˊ",
      french: "Déranger / ennuyeux",
      english: "To trouble / troublesome",
      example: {
        sentence: "麻煩你了，謝謝。",
        pinyin: "máfan nǐ le, xièxie.",
        translation: "Désolé de t'avoir dérangé, merci.",
      },
    },
    {
      character: "請",
      pinyin: "qǐng",
      zhuyin: "ㄑㄧㄥˇ",
      french: "S'il vous plaît / inviter",
      english: "Please / to invite",
      example: {
        sentence: "請坐。",
        pinyin: "qǐng zuò.",
        translation: "Asseyez-vous, je vous en prie.",
      },
    },
    {
      character: "沒關係",
      pinyin: "méi guānxi",
      zhuyin: "ㄇㄟˊ ㄍㄨㄢ ㄒㄧˋ",
      french: "Ce n'est rien / pas grave",
      english: "It's okay / no problem",
      example: {
        sentence: "沒關係，別擔心。",
        pinyin: "méi guānxi, bié dānxīn.",
        translation: "Ce n'est rien, ne t'inquiète pas.",
      },
    },
    {
      character: "不客氣",
      pinyin: "bú kèqi",
      zhuyin: "ㄅㄨˊ ㄎㄜˋ ㄑㄧˋ",
      french: "De rien / je t'en prie",
      english: "You're welcome",
      example: {
        sentence: "不客氣，這是應該的。",
        pinyin: "bú kèqi, zhè shì yīnggāi de.",
        translation: "De rien, c'est normal.",
      },
    },
    {
      character: "辛苦了",
      pinyin: "xīnkǔ le",
      zhuyin: "ㄒㄧㄣ ㄎㄨˇ ㄌㄜ˙",
      french: "Bon travail / merci pour l'effort",
      english: "Good job / thanks for the hard work",
      example: {
        sentence: "今天辛苦了，回家休息吧。",
        pinyin: "jīntiān xīnkǔ le, huíjiā xiūxi ba.",
        translation: "Bon travail aujourd'hui, rentre te reposer.",
      },
    },
    {
      character: "客氣",
      pinyin: "kèqi",
      zhuyin: "ㄎㄜˋ ㄑㄧˋ",
      french: "Poli / cérémonieux",
      english: "Polite / courteous",
      example: {
        sentence: "你太客氣了。",
        pinyin: "nǐ tài kèqi le.",
        translation: "Tu es trop poli(e).",
      },
    },
    {
      character: "面子",
      pinyin: "miànzi",
      zhuyin: "ㄇㄧㄢˋ ㄗ˙",
      french: "La face / la réputation",
      english: "Face / reputation",
      example: {
        sentence: "不要讓他丟面子。",
        pinyin: "bú yào ràng tā diū miànzi.",
        translation: "Ne lui fais pas perdre la face.",
      },
    },
    {
      character: "禮貌",
      pinyin: "lǐmào",
      zhuyin: "ㄌㄧˇ ㄇㄠˋ",
      french: "Politesse / bonnes manières",
      english: "Politeness / manners",
      example: {
        sentence: "他很有禮貌。",
        pinyin: "tā hěn yǒu lǐmào.",
        translation: "Il est très poli.",
      },
    },
    {
      character: "尊重",
      pinyin: "zūnzhòng",
      zhuyin: "ㄗㄨㄣ ㄓㄨㄥˋ",
      french: "Respecter / respect",
      english: "To respect / respect",
      example: {
        sentence: "我們要尊重別人。",
        pinyin: "wǒmen yào zūnzhòng biérén.",
        translation: "Nous devons respecter les autres.",
      },
    },
    {
      character: "謙虛",
      pinyin: "qiānxū",
      zhuyin: "ㄑㄧㄢ ㄒㄩ",
      french: "Modeste / humble",
      english: "Modest / humble",
      example: {
        sentence: "他很謙虛，從不炫耀。",
        pinyin: "tā hěn qiānxū, cóng bù xuànyào.",
        translation: "Il est très modeste, il ne se vante jamais.",
      },
    },
    {
      character: "隨便",
      pinyin: "suíbiàn",
      zhuyin: "ㄙㄨㄟˊ ㄅㄧㄢˋ",
      french: "Comme tu veux / n'importe",
      english: "Whatever / as you like",
      example: {
        sentence: "吃什麼？隨便，都可以。",
        pinyin: "chī shénme? suíbiàn, dōu kěyǐ.",
        translation: "On mange quoi ? Comme tu veux, tout me va.",
      },
    },
    {
      character: "沒事",
      pinyin: "méi shì",
      zhuyin: "ㄇㄟˊ ㄕˋ",
      french: "Ce n'est rien / ça va",
      english: "It's nothing / I'm fine",
      example: {
        sentence: "你還好嗎？沒事，我沒事。",
        pinyin: "nǐ hái hǎo ma? méi shì, wǒ méi shì.",
        translation: "Tu vas bien ? C'est rien, je vais bien.",
      },
    },
    {
      character: "讓",
      pinyin: "ràng",
      zhuyin: "ㄖㄤˋ",
      french: "Laisser, permettre",
      english: "To let, to allow",
      example: {
        sentence: "讓我想一下。",
        pinyin: "ràng wǒ xiǎng yíxià.",
        translation: "Laisse-moi réfléchir un instant.",
      },
    },
    {
      character: "給",
      pinyin: "gěi",
      zhuyin: "ㄍㄟˇ",
      french: "Donner",
      english: "To give",
      example: {
        sentence: "請給我一杯水。",
        pinyin: "qǐng gěi wǒ yì bēi shuǐ.",
        translation: "Donnez-moi un verre d'eau, s'il vous plaît.",
      },
    },
    {
      character: "跟",
      pinyin: "gēn",
      zhuyin: "ㄍㄣ",
      french: "Avec, et",
      english: "With, and (spoken)",
      example: {
        sentence: "我跟朋友一起去。",
        pinyin: "wǒ gēn péngyǒu yìqǐ qù.",
        translation: "J'y vais avec un ami.",
      },
    },
  ],

  exercises: [
    {
      id: "u16-ex1",
      type: "comprehension",
      question:
        "Quelle expression utiliseriez-vous pour demander votre chemin à un inconnu ?",
      correctAnswer: "不好意思",
      options: ["不好意思", "對不起", "抱歉", "幹嘛"],
    },
    {
      id: "u16-ex2",
      type: "translate",
      question: "Que signifie 辛苦了 ?",
      correctAnswer: "Merci pour l'effort / bon travail",
      options: [
        "Merci pour l'effort / bon travail",
        "Je suis fatigué",
        "C'est trop difficile",
        "Tu es trop poli",
      ],
    },
    {
      id: "u16-ex3",
      type: "fill-blank",
      question: "___，請問洗手間在哪裡？(Excusez-moi, où sont les toilettes ?)",
      correctAnswer: "不好意思",
      options: ["不好意思", "對不起", "抱歉", "謝謝"],
      hint: "Quelle expression pour déranger poliment quelqu'un ?",
    },
    {
      id: "u16-ex4",
      type: "comprehension",
      question:
        "Un Taiwanais vous dit « 我再想想 » quand vous l'invitez. Que veut-il probablement dire ?",
      correctAnswer: "C'est un refus poli",
      options: [
        "C'est un refus poli",
        "Il va vraiment y réfléchir",
        "Il est enthousiaste",
        "Il n'a pas compris la question",
      ],
    },
    {
      id: "u16-ex5",
      type: "translate",
      question: "Comment répondre poliment à un compliment sur votre chinois ?",
      correctAnswer: "哪裡哪裡",
      options: ["哪裡哪裡", "謝謝", "對啊", "我知道"],
    },
    {
      id: "u16-ex6",
      type: "comprehension",
      question: "Quel registre utiliser avec le patron de votre entreprise ?",
      correctAnswer: "Formel : 您, 請問",
      options: [
        "Formel : 您, 請問",
        "Informel : 你, 欸",
        "Les deux sont acceptables",
        "Aucun, on ne parle pas au patron",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-19"],
};
