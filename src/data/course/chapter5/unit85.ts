import type { CourseUnit } from "@/types/course";

export const unit85: CourseUnit = {
  id: "unit-85",
  number: 85,
  title: "Pratique 3 — Dialogues avancés",
  titleZh: "進階對話練習",
  chapter: 5,
  description:
    "Huit situations de jeu de rôle couvrant la vie sociale, pratique et professionnelle à Taïwan. Pratiquez des dialogues réalistes pour inviter, refuser, complimenter, négocier, commander et vous présenter au travail.",
  icon: "🎭",

  sections: [
    {
      title: "Situations sociales",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Situation 1 — Inviter un ami taïwanais à dîner. Vous voulez inviter votre ami 阿明 à manger ensemble ce week-end. En chinois, on utilise souvent 請你吃飯 (je t'invite à manger) pour montrer que c'est vous qui payez.",
        },
        {
          type: "example",
          chinese: "阿明，這個週末你有空嗎？我想請你吃飯，上次你幫了我很多忙，我想謝謝你。你想吃什麼？日本料理還是火鍋？",
          pinyin:
            "āmíng, zhè ge zhōumò nǐ yǒu kòng ma? wǒ xiǎng qǐng nǐ chī fàn, shàng cì nǐ bāng le wǒ hěn duō máng, wǒ xiǎng xièxie nǐ. nǐ xiǎng chī shénme? rìběn liàolǐ háishì huǒguō?",
          translation:
            "Aming, tu es libre ce week-end ? Je voudrais t'inviter à manger, la dernière fois tu m'as beaucoup aidé, je veux te remercier. Tu veux manger quoi ? Japonais ou hotpot ?",
          content:
            "請你吃飯 = je t'invite à manger (= je paie). 幫忙 = aider. A還是B = choix entre A ou B.",
        },
        {
          type: "text",
          content:
            "Situation 2 — Refuser poliment une invitation. Quelqu'un vous invite mais vous ne pouvez pas y aller. En chinois, on ne refuse jamais directement. On donne toujours une raison et on propose une alternative.",
        },
        {
          type: "example",
          chinese: "真的很謝謝你的邀請！不過這個週末我已經有事了，我朋友從法國來，我要帶他去九份玩。下個禮拜可以嗎？我請你！",
          pinyin:
            "zhēn de hěn xièxie nǐ de yāoqǐng! búguò zhè ge zhōumò wǒ yǐjīng yǒu shì le, wǒ péngyou cóng Fǎguó lái, wǒ yào dài tā qù Jiǔfèn wán. xià ge lǐbài kěyǐ ma? wǒ qǐng nǐ!",
          translation:
            "Merci beaucoup pour l'invitation ! Mais ce week-end j'ai déjà quelque chose, un ami vient de France, je dois l'emmener visiter Jiufen. La semaine prochaine, ça marche ? C'est moi qui invite !",
          content:
            "不過 = mais (plus doux que 可是). 已經...了 = déjà. 帶...去...玩 = emmener qqn visiter.",
        },
        {
          type: "text",
          content:
            "Situation 3 — Faire un compliment sur la cuisine. Vous êtes invité à manger chez un ami taïwanais. Il est très important de complimenter la cuisine, c'est une marque de politesse essentielle.",
        },
        {
          type: "example",
          chinese: "哇，你做的菜真的太好吃了！這道滷肉飯是你自己做的嗎？比外面賣的還好吃！你一定花了很多時間。可以教我怎麼做嗎？",
          pinyin:
            "wā, nǐ zuò de cài zhēn de tài hǎochī le! zhè dào lǔròu fàn shì nǐ zìjǐ zuò de ma? bǐ wàimiàn mài de hái hǎochī! nǐ yídìng huā le hěn duō shíjiān. kěyǐ jiāo wǒ zěnme zuò ma?",
          translation:
            "Waouh, ce que tu as cuisiné est vraiment trop bon ! Ce plat de luroufan, c'est toi qui l'as fait ? C'est encore meilleur que ce qu'on achète dehors ! Tu as dû y passer beaucoup de temps. Tu peux m'apprendre à le faire ?",
          content:
            "太...了 = trop (superlatif). 比...還... = encore plus que. 花時間 = passer du temps. 教 = enseigner/apprendre à qqn.",
        },
      ],
    },
    {
      title: "Situations pratiques",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Situation 4 — Appeler le propriétaire car la climatisation est cassée. La clim est vitale à Taïwan en été. Savoir expliquer un problème technique en chinois est crucial.",
        },
        {
          type: "example",
          chinese: "房東你好，不好意思打擾你。我房間的冷氣壞了，開了以後不會冷，而且有奇怪的聲音。已經兩天了。你可以找人來修嗎？因為現在天氣很熱，晚上都睡不著。謝謝你！",
          pinyin:
            "fángdōng nǐ hǎo, bù hǎoyìsi dǎrǎo nǐ. wǒ fángjiān de lěngqì huài le, kāi le yǐhòu bú huì lěng, érqiě yǒu qíguài de shēngyīn. yǐjīng liǎng tiān le. nǐ kěyǐ zhǎo rén lái xiū ma? yīnwèi xiànzài tiānqì hěn rè, wǎnshàng dōu shuì bù zháo. xièxie nǐ!",
          translation:
            "Bonjour propriétaire, désolé de vous déranger. La clim de ma chambre est cassée, quand on l'allume elle ne refroidit pas, et en plus il y a un bruit bizarre. Ça fait déjà deux jours. Vous pouvez envoyer quelqu'un pour la réparer ? Parce qu'il fait très chaud en ce moment, je n'arrive pas à dormir la nuit. Merci !",
          content:
            "房東 = propriétaire. 冷氣 = climatisation (terme taïwanais, pas 空調). 壞了 = cassé. 睡不著 = ne pas arriver à dormir (résultatif).",
        },
        {
          type: "text",
          content:
            "Situation 5 — Demander une réduction au marché de nuit. Au 夜市, les prix sont souvent négociables, surtout pour les vêtements et accessoires. Les taïwanais adorent négocier avec le sourire.",
        },
        {
          type: "example",
          chinese: "老闆，這件T恤多少錢？三百九？有點貴耶。如果我買兩件，可不可以算便宜一點？三百九兩件，好不好？拜託拜託！",
          pinyin:
            "lǎobǎn, zhè jiàn T xù duōshǎo qián? sānbǎi jiǔ? yǒudiǎn guì yē. rúguǒ wǒ mǎi liǎng jiàn, kě bù kěyǐ suàn piányi yìdiǎn? sānbǎi jiǔ liǎng jiàn, hǎo bù hǎo? bàituō bàituō!",
          translation:
            "Patron, combien coûte ce T-shirt ? 390 ? C'est un peu cher. Si j'en prends deux, vous pouvez faire un prix ? 390 pour deux, d'accord ? S'il vous plaît !",
          content:
            "算便宜一點 = faire un (petit) prix. 可不可以 = est-ce possible (A-not-A). 拜託 = s'il vous plaît (insistant et amical).",
        },
        {
          type: "text",
          content:
            "Situation 6 — Commander un bubble tea personnalisé. À Taïwan, commander un 珍珠奶茶 est un art. Il faut choisir le sucre, la glace, et les toppings.",
        },
        {
          type: "example",
          chinese: "我要一杯大杯的珍珠奶茶，半糖少冰。請問可以加椰果嗎？要多少錢？好的，用悠遊卡可以嗎？謝謝！",
          pinyin:
            "wǒ yào yì bēi dà bēi de zhēnzhū nǎichá, bàn táng shǎo bīng. qǐngwèn kěyǐ jiā yēguǒ ma? yào duōshǎo qián? hǎo de, yòng yōuyóu kǎ kěyǐ ma? xièxie!",
          translation:
            "Je voudrais un grand bubble tea, mi-sucré avec peu de glace. Est-ce qu'on peut ajouter du nata de coco ? Combien ça fait ? D'accord, je peux payer avec la carte EasyCard ? Merci !",
          content:
            "半糖 = mi-sucré. 少冰 = peu de glace. 椰果 = nata de coco. 悠遊卡 = EasyCard (carte de transport et paiement).",
        },
      ],
    },
    {
      title: "Situations professionnelles",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Situation 7 — Se présenter au bureau le premier jour. La première impression est très importante dans la culture professionnelle taïwanaise. Soyez humble et enthousiaste.",
        },
        {
          type: "example",
          chinese: "大家好！我叫朱利安，我是法國人。我是新來的行銷部門的同事。我來台灣已經半年了，我很喜歡台灣。我的中文還不太好，但是我會努力學。如果我說錯了，請大家多多指教。以後請多多關照！",
          pinyin:
            "dàjiā hǎo! wǒ jiào zhūlì'ān, wǒ shì Fǎguó rén. wǒ shì xīn lái de xíngxiāo bùmén de tóngshì. wǒ lái Táiwān yǐjīng bàn nián le, wǒ hěn xǐhuān Táiwān. wǒ de Zhōngwén hái bú tài hǎo, dànshì wǒ huì nǔlì xué. rúguǒ wǒ shuō cuò le, qǐng dàjiā duōduō zhǐjiào. yǐhòu qǐng duōduō guānzhào!",
          translation:
            "Bonjour à tous ! Je m'appelle Julian, je suis français. Je suis le nouveau collègue du département marketing. Ça fait six mois que je suis à Taïwan, j'adore Taïwan. Mon chinois n'est pas encore très bon, mais je ferai des efforts pour apprendre. Si je fais des erreurs, n'hésitez pas à me corriger. J'espère que vous prendrez soin de moi !",
          content:
            "多多指教 = formule de politesse : « veuillez me guider ». 多多關照 = « veuillez prendre soin de moi » (formule standard de présentation pro).",
        },
        {
          type: "text",
          content:
            "Situation 8 — Demander un congé au patron. À Taïwan, on demande un congé de manière très polie et on donne toujours une raison claire.",
        },
        {
          type: "example",
          chinese: "主管你好，我想跟你請假。下個禮拜三我需要請一天假，因為我要去辦居留證。我會把手上的工作先做完，也會跟小陳交接。不好意思麻煩你了，謝謝主管。",
          pinyin:
            "zhǔguǎn nǐ hǎo, wǒ xiǎng gēn nǐ qǐngjià. xià ge lǐbài sān wǒ xūyào qǐng yì tiān jià, yīnwèi wǒ yào qù bàn jūliú zhèng. wǒ huì bǎ shǒu shàng de gōngzuò xiān zuò wán, yě huì gēn xiǎo chén jiāojiē. bù hǎoyìsi máfan nǐ le, xièxie zhǔguǎn.",
          translation:
            "Bonjour chef, je voudrais vous demander un congé. Mercredi prochain j'ai besoin d'un jour de congé parce que je dois aller m'occuper de mon titre de séjour. Je finirai d'abord le travail en cours, et je ferai la passation avec Xiao Chen. Désolé de vous déranger, merci chef.",
          content:
            "請假 = demander un congé. 居留證 = titre de séjour (ARC). 交接 = passation/transition. 把...做完 = finir qqch (structure 把).",
        },
      ],
    },
  ],

  dialogue: undefined,

  keyPoints: [
    "請你吃飯 = inviter à manger (= payer le repas). C'est une manière courante de remercier quelqu'un à Taïwan.",
    "Pour refuser poliment : donner une raison + proposer une alternative. Ne jamais dire non directement.",
    "半糖少冰 = mi-sucré, peu de glace. La formule indispensable pour commander un bubble tea.",
    "多多指教 et 多多關照 sont les formules de politesse standard pour se présenter dans un contexte professionnel.",
    "請假 = demander un congé. La structure 把 est très utile pour parler d'actions sur des objets concrets.",
  ],

  vocabulary: [],

  exercises: [
    {
      id: "u85-ex1",
      type: "translate",
      question: "Comment dit-on « Je voudrais t'inviter à manger ce week-end » ?",
      correctAnswer: "這個週末我想請你吃飯",
      options: [
        "這個週末我想請你吃飯",
        "我週末要你請吃飯",
        "這個週末請吃飯你我",
        "週末我吃飯請你想",
      ],
      optionsHint: [
        "zhè ge zhōumò wǒ xiǎng qǐng nǐ chī fàn",
        "wǒ zhōumò yào nǐ qǐng chī fàn",
        "zhè ge zhōumò qǐng chī fàn nǐ wǒ",
        "zhōumò wǒ chī fàn qǐng nǐ xiǎng",
      ],
      optionsZhuyin: [
        "ㄓㄜˋ ㄍㄜ˙ ㄓㄡ ㄇㄛˋ ㄨㄛˇ ㄒㄧㄤˇ ㄑㄧㄥˇ ㄋㄧˇ ㄔ ㄈㄢˋ",
        "ㄨㄛˇ ㄓㄡ ㄇㄛˋ ㄧㄠˋ ㄋㄧˇ ㄑㄧㄥˇ ㄔ ㄈㄢˋ",
        "ㄓㄜˋ ㄍㄜ˙ ㄓㄡ ㄇㄛˋ ㄑㄧㄥˇ ㄔ ㄈㄢˋ ㄋㄧˇ ㄨㄛˇ",
        "ㄓㄡ ㄇㄛˋ ㄨㄛˇ ㄔ ㄈㄢˋ ㄑㄧㄥˇ ㄋㄧˇ ㄒㄧㄤˇ",
      ],
    },
    {
      id: "u85-ex2",
      type: "reorder",
      question: "Remettez dans l'ordre : « Désolé, ce week-end j'ai déjà quelque chose. »",
      correctAnswer: "不好意思，這個週末我已經有事了",
      options: [
        "不好意思",
        "這個週末",
        "我",
        "已經",
        "有事",
        "了",
      ],
      optionsHint: [
        "bù hǎoyìsi",
        "zhè ge zhōumò",
        "wǒ",
        "yǐjīng",
        "yǒu shì",
        "le",
      ],
      optionsZhuyin: [
        "ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ˙",
        "ㄓㄜˋ ㄍㄜ˙ ㄓㄡ ㄇㄛˋ",
        "ㄨㄛˇ",
        "ㄧˇ ㄐㄧㄥ",
        "ㄧㄡˇ ㄕˋ",
        "ㄌㄜ˙",
      ],
    },
    {
      id: "u85-ex3",
      type: "translate",
      question: "Comment dit-on « C'est encore meilleur que ce qu'on achète dehors » ?",
      correctAnswer: "比外面賣的還好吃",
      options: [
        "比外面賣的還好吃",
        "外面好吃比賣的還",
        "還好吃比外面的賣",
        "賣的外面比好吃還",
      ],
      optionsHint: [
        "bǐ wàimiàn mài de hái hǎochī",
        "wàimiàn hǎochī bǐ mài de hái",
        "hái hǎochī bǐ wàimiàn de mài",
        "mài de wàimiàn bǐ hǎochī hái",
      ],
      optionsZhuyin: [
        "ㄅㄧˇ ㄨㄞˋ ㄇㄧㄢˋ ㄇㄞˋ ㄉㄜ˙ ㄏㄞˊ ㄏㄠˇ ㄔ",
        "ㄨㄞˋ ㄇㄧㄢˋ ㄏㄠˇ ㄔ ㄅㄧˇ ㄇㄞˋ ㄉㄜ˙ ㄏㄞˊ",
        "ㄏㄞˊ ㄏㄠˇ ㄔ ㄅㄧˇ ㄨㄞˋ ㄇㄧㄢˋ ㄉㄜ˙ ㄇㄞˋ",
        "ㄇㄞˋ ㄉㄜ˙ ㄨㄞˋ ㄇㄧㄢˋ ㄅㄧˇ ㄏㄠˇ ㄔ ㄏㄞˊ",
      ],
    },
    {
      id: "u85-ex4",
      type: "translate",
      question: "Comment dit-on « La clim de ma chambre est cassée » ?",
      correctAnswer: "我房間的冷氣壞了",
      options: [
        "我房間的冷氣壞了",
        "冷氣壞了我的房間",
        "我的壞了冷氣房間",
        "房間冷氣我壞了的",
      ],
      optionsHint: [
        "wǒ fángjiān de lěngqì huài le",
        "lěngqì huài le wǒ de fángjiān",
        "wǒ de huài le lěngqì fángjiān",
        "fángjiān lěngqì wǒ huài le de",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄈㄤˊ ㄐㄧㄢ ㄉㄜ˙ ㄌㄥˇ ㄑㄧˋ ㄏㄨㄞˋ ㄌㄜ˙",
        "ㄌㄥˇ ㄑㄧˋ ㄏㄨㄞˋ ㄌㄜ˙ ㄨㄛˇ ㄉㄜ˙ ㄈㄤˊ ㄐㄧㄢ",
        "ㄨㄛˇ ㄉㄜ˙ ㄏㄨㄞˋ ㄌㄜ˙ ㄌㄥˇ ㄑㄧˋ ㄈㄤˊ ㄐㄧㄢ",
        "ㄈㄤˊ ㄐㄧㄢ ㄌㄥˇ ㄑㄧˋ ㄨㄛˇ ㄏㄨㄞˋ ㄌㄜ˙ ㄉㄜ˙",
      ],
    },
    {
      id: "u85-ex5",
      type: "reorder",
      question: "Remettez dans l'ordre : « Si j'en prends deux, vous pouvez faire un prix ? »",
      correctAnswer: "如果我買兩件，可不可以算便宜一點",
      options: [
        "如果",
        "我買兩件",
        "可不可以",
        "算便宜一點",
      ],
      optionsHint: [
        "rúguǒ",
        "wǒ mǎi liǎng jiàn",
        "kě bù kěyǐ",
        "suàn piányi yìdiǎn",
      ],
      optionsZhuyin: [
        "ㄖㄨˊ ㄍㄨㄛˇ",
        "ㄨㄛˇ ㄇㄞˇ ㄌㄧㄤˇ ㄐㄧㄢˋ",
        "ㄎㄜˇ ㄅㄨˋ ㄎㄜˇ ㄧˇ",
        "ㄙㄨㄢˋ ㄆㄧㄢˊ ㄧˊ ㄧˋ ㄉㄧㄢˇ",
      ],
    },
    {
      id: "u85-ex6",
      type: "translate",
      question: "Comment commander « Un grand bubble tea, mi-sucré, peu de glace » ?",
      correctAnswer: "一杯大杯的珍珠奶茶，半糖少冰",
      options: [
        "一杯大杯的珍珠奶茶，半糖少冰",
        "珍珠奶茶大杯半冰少糖一杯",
        "大杯一杯少糖半冰珍珠奶茶",
        "半糖少冰大杯珍珠一杯奶茶",
      ],
      optionsHint: [
        "yì bēi dà bēi de zhēnzhū nǎichá, bàn táng shǎo bīng",
        "zhēnzhū nǎichá dà bēi bàn bīng shǎo táng yì bēi",
        "dà bēi yì bēi shǎo táng bàn bīng zhēnzhū nǎichá",
        "bàn táng shǎo bīng dà bēi zhēnzhū yì bēi nǎichá",
      ],
      optionsZhuyin: [
        "ㄧˋ ㄅㄟ ㄉㄚˋ ㄅㄟ ㄉㄜ˙ ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄅㄢˋ ㄊㄤˊ ㄕㄠˇ ㄅㄧㄥ",
        "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ ㄉㄚˋ ㄅㄟ ㄅㄢˋ ㄅㄧㄥ ㄕㄠˇ ㄊㄤˊ ㄧˋ ㄅㄟ",
        "ㄉㄚˋ ㄅㄟ ㄧˋ ㄅㄟ ㄕㄠˇ ㄊㄤˊ ㄅㄢˋ ㄅㄧㄥ ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ",
        "ㄅㄢˋ ㄊㄤˊ ㄕㄠˇ ㄅㄧㄥ ㄉㄚˋ ㄅㄟ ㄓㄣ ㄓㄨ ㄧˋ ㄅㄟ ㄋㄞˇ ㄔㄚˊ",
      ],
    },
    {
      id: "u85-ex7",
      type: "reorder",
      question: "Remettez dans l'ordre : « J'espère que vous prendrez soin de moi à l'avenir ! »",
      correctAnswer: "以後請多多關照",
      options: [
        "以後",
        "請",
        "多多",
        "關照",
      ],
      optionsHint: [
        "yǐhòu",
        "qǐng",
        "duōduō",
        "guānzhào",
      ],
      optionsZhuyin: [
        "ㄧˇ ㄏㄡˋ",
        "ㄑㄧㄥˇ",
        "ㄉㄨㄛ ㄉㄨㄛ",
        "ㄍㄨㄢ ㄓㄠˋ",
      ],
    },
    {
      id: "u85-ex8",
      type: "translate",
      question: "Comment dit-on « Je voudrais vous demander un jour de congé » ?",
      correctAnswer: "我想跟你請一天假",
      options: [
        "我想跟你請一天假",
        "我請假想你一天跟",
        "一天假我跟你想請",
        "跟你我想假請一天",
      ],
      optionsHint: [
        "wǒ xiǎng gēn nǐ qǐng yì tiān jià",
        "wǒ qǐngjià xiǎng nǐ yì tiān gēn",
        "yì tiān jià wǒ gēn nǐ xiǎng qǐng",
        "gēn nǐ wǒ xiǎng jià qǐng yì tiān",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄒㄧㄤˇ ㄍㄣ ㄋㄧˇ ㄑㄧㄥˇ ㄧˋ ㄊㄧㄢ ㄐㄧㄚˋ",
        "ㄨㄛˇ ㄑㄧㄥˇ ㄐㄧㄚˋ ㄒㄧㄤˇ ㄋㄧˇ ㄧˋ ㄊㄧㄢ ㄍㄣ",
        "ㄧˋ ㄊㄧㄢ ㄐㄧㄚˋ ㄨㄛˇ ㄍㄣ ㄋㄧˇ ㄒㄧㄤˇ ㄑㄧㄥˇ",
        "ㄍㄣ ㄋㄧˇ ㄨㄛˇ ㄒㄧㄤˇ ㄐㄧㄚˋ ㄑㄧㄥˇ ㄧˋ ㄊㄧㄢ",
      ],
    },
    {
      id: "u85-ex9",
      type: "translate",
      question: "Comment dit-on « Vous pouvez envoyer quelqu'un pour la réparer ? » ?",
      correctAnswer: "你可以找人來修嗎",
      options: [
        "你可以找人來修嗎",
        "找人修你可以來嗎",
        "可以你來修找人嗎",
        "你修人找來可以嗎",
      ],
      optionsHint: [
        "nǐ kěyǐ zhǎo rén lái xiū ma",
        "zhǎo rén xiū nǐ kěyǐ lái ma",
        "kěyǐ nǐ lái xiū zhǎo rén ma",
        "nǐ xiū rén zhǎo lái kěyǐ ma",
      ],
      optionsZhuyin: [
        "ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄓㄠˇ ㄖㄣˊ ㄌㄞˊ ㄒㄧㄡ ㄇㄚ˙",
        "ㄓㄠˇ ㄖㄣˊ ㄒㄧㄡ ㄋㄧˇ ㄎㄜˇ ㄧˇ ㄌㄞˊ ㄇㄚ˙",
        "ㄎㄜˇ ㄧˇ ㄋㄧˇ ㄌㄞˊ ㄒㄧㄡ ㄓㄠˇ ㄖㄣˊ ㄇㄚ˙",
        "ㄋㄧˇ ㄒㄧㄡ ㄖㄣˊ ㄓㄠˇ ㄌㄞˊ ㄎㄜˇ ㄧˇ ㄇㄚ˙",
      ],
    },
    {
      id: "u85-ex10",
      type: "reorder",
      question: "Remettez dans l'ordre : « Je finirai d'abord le travail en cours. »",
      correctAnswer: "我會把手上的工作先做完",
      options: [
        "我會",
        "把",
        "手上的工作",
        "先",
        "做完",
      ],
      optionsHint: [
        "wǒ huì",
        "bǎ",
        "shǒu shàng de gōngzuò",
        "xiān",
        "zuò wán",
      ],
      optionsZhuyin: [
        "ㄨㄛˇ ㄏㄨㄟˋ",
        "ㄅㄚˇ",
        "ㄕㄡˇ ㄕㄤˋ ㄉㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ",
        "ㄒㄧㄢ",
        "ㄗㄨㄛˋ ㄨㄢˊ",
      ],
    },
    {
      id: "u85-ex11",
      type: "translate",
      question: "Comment dit-on « La dernière fois tu m'as beaucoup aidé » ?",
      correctAnswer: "上次你幫了我很多忙",
      options: [
        "上次你幫了我很多忙",
        "你上次忙很多幫我了",
        "我很多忙上次你幫了",
        "幫了上次你我很多忙",
      ],
      optionsHint: [
        "shàng cì nǐ bāng le wǒ hěn duō máng",
        "nǐ shàng cì máng hěn duō bāng wǒ le",
        "wǒ hěn duō máng shàng cì nǐ bāng le",
        "bāng le shàng cì nǐ wǒ hěn duō máng",
      ],
      optionsZhuyin: [
        "ㄕㄤˋ ㄘˋ ㄋㄧˇ ㄅㄤ ㄌㄜ˙ ㄨㄛˇ ㄏㄣˇ ㄉㄨㄛ ㄇㄤˊ",
        "ㄋㄧˇ ㄕㄤˋ ㄘˋ ㄇㄤˊ ㄏㄣˇ ㄉㄨㄛ ㄅㄤ ㄨㄛˇ ㄌㄜ˙",
        "ㄨㄛˇ ㄏㄣˇ ㄉㄨㄛ ㄇㄤˊ ㄕㄤˋ ㄘˋ ㄋㄧˇ ㄅㄤ ㄌㄜ˙",
        "ㄅㄤ ㄌㄜ˙ ㄕㄤˋ ㄘˋ ㄋㄧˇ ㄨㄛˇ ㄏㄣˇ ㄉㄨㄛ ㄇㄤˊ",
      ],
    },
    {
      id: "u85-ex12",
      type: "reorder",
      question: "Remettez dans l'ordre : « Si je fais des erreurs, n'hésitez pas à me corriger. »",
      correctAnswer: "如果我說錯了，請大家多多指教",
      options: [
        "如果",
        "我說錯了",
        "請",
        "大家",
        "多多指教",
      ],
      optionsHint: [
        "rúguǒ",
        "wǒ shuō cuò le",
        "qǐng",
        "dàjiā",
        "duōduō zhǐjiào",
      ],
      optionsZhuyin: [
        "ㄖㄨˊ ㄍㄨㄛˇ",
        "ㄨㄛˇ ㄕㄨㄛ ㄘㄨㄛˋ ㄌㄜ˙",
        "ㄑㄧㄥˇ",
        "ㄉㄚˋ ㄐㄧㄚ",
        "ㄉㄨㄛ ㄉㄨㄛ ㄓˇ ㄐㄧㄠˋ",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-84"],
};
