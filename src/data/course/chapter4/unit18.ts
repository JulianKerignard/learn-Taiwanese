import type { CourseUnit } from "@/types/course";

export const unit18: CourseUnit = {
  id: "unit-18",
  number: 18,
  title: "Faire connaissance",
  titleZh: "認識新朋友",
  chapter: 4,
  description:
    "Apprenez à parler de vous en détail, à poser des questions sur les centres d'intérêt, et à comprendre les codes des relations sociales à Taiwan.",
  icon: "🤝",

  sections: [
    {
      title: "Parler de soi en détail",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Quand on fait connaissance à Taiwan, les questions vont vite au-delà du simple « d'où viens-tu ? ». On vous demandera depuis combien de temps vous êtes là, pourquoi vous êtes venu, comment vous trouvez le pays. Voici les structures essentielles pour y répondre.",
        },
        {
          type: "text",
          content:
            "多久 + 了 (duōjiǔ + le) = « depuis combien de temps ». La structure complète est : sujet + verbe + 多久了？Le 了 en fin de phrase indique que l'action continue jusqu'au moment présent.",
        },
        {
          type: "example",
          chinese: "你來台灣多久了？",
          pinyin: "nǐ lái Táiwān duōjiǔ le?",
          translation: "Tu es à Taiwan depuis combien de temps ?",
          content: "多久了 en fin de phrase = « depuis combien de temps » (action qui dure).",
        },
        {
          type: "example",
          chinese: "我來了三個月了",
          pinyin: "wǒ lái le sān ge yuè le",
          translation: "Ça fait trois mois que je suis là",
          content: "Notez les deux 了 : le premier après 來 (action accomplie), le deuxième en fin de phrase (situation qui continue).",
        },
        {
          type: "text",
          content:
            "為什麼 (wèishénme) = pourquoi. Se place avant le verbe dans la question. La réponse utilise souvent 因為 (parce que).",
        },
        {
          type: "example",
          chinese: "你為什麼來台灣？",
          pinyin: "nǐ wèishénme lái Táiwān?",
          translation: "Pourquoi tu es venu à Taiwan ?",
          content: "為什麼 + verbe = « pourquoi faire quelque chose ? ».",
        },
        {
          type: "text",
          content:
            "怎麼樣 (zěnmeyàng) = « c'est comment ? ». Question ouverte pour demander un avis ou une impression. Très fréquent dans les conversations.",
        },
        {
          type: "example",
          chinese: "台灣怎麼樣？",
          pinyin: "Táiwān zěnmeyàng?",
          translation: "C'est comment Taiwan ? / Taiwan te plaît ?",
          content: "Sujet + 怎麼樣 = demander une impression générale.",
        },
        {
          type: "text",
          content:
            "越來越 (yuè lái yuè) + adjectif = « de plus en plus ». Structure très utile pour exprimer une évolution, un changement progressif.",
        },
        {
          type: "example",
          chinese: "我越來越喜歡台灣",
          pinyin: "wǒ yuè lái yuè xǐhuān Táiwān",
          translation: "J'aime Taiwan de plus en plus",
          content: "越來越 + verbe/adjectif = progression continue.",
        },
        {
          type: "example",
          chinese: "中文越來越難",
          pinyin: "Zhōngwén yuè lái yuè nán",
          translation: "Le chinois est de plus en plus difficile",
          content: "Peut exprimer une évolution positive ou négative.",
        },
        {
          type: "comparison",
          content:
            "En français, « de plus en plus » change de forme : « de mieux en mieux », « de pire en pire ». En chinois, c'est toujours 越來越 + n'importe quel adjectif. 越來越好 (de mieux en mieux), 越來越冷 (de plus en plus froid). La structure ne change jamais.",
        },
      ],
    },
    {
      title: "Hobbies et centres d'intérêt",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Pour parler de ses hobbies, on utilise 我的興趣是... (wǒ de xìngqù shì..., mes centres d'intérêt sont...) ou plus simplement 我喜歡... (j'aime...). Les loisirs courants ont des noms très logiques en chinois.",
        },
        {
          type: "text",
          content:
            "Activités courantes : 看電影 (kàn diànyǐng, regarder un film), 聽音樂 (tīng yīnyuè, écouter de la musique), 運動 (yùndòng, faire du sport). Remarquez la simplicité : 看 (regarder) + 電影 (film), 聽 (écouter) + 音樂 (musique).",
        },
        {
          type: "example",
          chinese: "我喜歡看電影和聽音樂",
          pinyin: "wǒ xǐhuān kàn diànyǐng hé tīng yīnyuè",
          translation: "J'aime regarder des films et écouter de la musique",
          content: "Structure simple : 喜歡 + activité 1 + 和 + activité 2.",
        },
        {
          type: "text",
          content:
            "Activités populaires à Taiwan : 旅行 (lǚxíng, voyager), 拍照 (pāi zhào, prendre des photos), 爬山 (pá shān, faire de la randonnée/grimper une montagne). Taiwan est un paradis pour la randonnée avec ses montagnes à plus de 3000 mètres.",
        },
        {
          type: "example",
          chinese: "我的興趣是旅行和拍照",
          pinyin: "wǒ de xìngqù shì lǚxíng hé pāi zhào",
          translation: "Mes centres d'intérêt sont le voyage et la photo",
          content: "我的興趣是 + nom d'activité : structure formelle.",
        },
        {
          type: "example",
          chinese: "週末我常去爬山",
          pinyin: "zhōumò wǒ cháng qù pá shān",
          translation: "Le week-end, je vais souvent randonner",
          content: "常 (souvent) + verbe pour les habitudes.",
        },
        {
          type: "tip",
          content:
            "Les Taiwanais adorent demander vos hobbies. Les réponses les plus populaires : 吃美食 (manger de la bonne nourriture) — mentionner la nourriture est toujours un succès, 旅行 (voyager), et 看劇 (kàn jù, regarder des séries). Si vous dites 我喜歡吃 (j'aime manger), vous êtes instantanément ami avec tout le monde.",
        },
      ],
    },
    {
      title: "Les questions personnelles à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Préparez-vous : les Taiwanais posent des questions qui seraient jugées très personnelles en France. Votre âge, votre salaire, si vous avez un(e) copain/copine, pourquoi vous n'êtes pas marié... Tout cela est considéré comme normal et amical. Ce n'est pas de l'indiscrétion, c'est de l'intérêt sincère.",
        },
        {
          type: "example",
          chinese: "你幾歲？",
          pinyin: "nǐ jǐ suì?",
          translation: "Tu as quel âge ? (direct, courant)",
          content: "Question banale à Taiwan, intrusive en France.",
        },
        {
          type: "example",
          chinese: "你有男朋友嗎？",
          pinyin: "nǐ yǒu nán péngyǒu ma?",
          translation: "Tu as un copain ?",
          content: "男朋友 = petit ami, 女朋友 = petite amie. Question très courante.",
        },
        {
          type: "text",
          content:
            "Ne vous vexez pas, et ne mentez pas non plus (ça se retourne contre vous). Si vous ne voulez pas répondre, souriez et détournez avec humour : 秘密 (mìmì, c'est un secret !) ou changez de sujet.",
        },
        {
          type: "text",
          content:
            "Le 語言交換 (yǔyán jiāohuàn, language exchange) est un excellent moyen de faire connaissance à Taiwan. Le concept : vous pratiquez le chinois avec un Taiwanais qui veut pratiquer le français (ou l'anglais). On se retrouve dans un café, chacun parle 30 minutes dans la langue de l'autre. C'est gratuit et très efficace.",
        },
        {
          type: "example",
          chinese: "我們可以做語言交換嗎？",
          pinyin: "wǒmen kěyǐ zuò yǔyán jiāohuàn ma?",
          translation: "On peut faire un language exchange ?",
          content: "Proposition idéale pour se faire des amis taiwanais.",
        },
        {
          type: "text",
          content:
            "吃飯了嗎？(chīfàn le ma?, tu as mangé ?) est la version taiwanaise de « ça va ? ». Ne soyez pas étonné si un collègue ou un voisin vous salue ainsi. Répondez 吃了 (oui) ou 還沒 (pas encore) et la conversation enchaîne naturellement.",
        },
        {
          type: "comparison",
          content:
            "En France, demander l'âge ou le salaire de quelqu'un qu'on vient de rencontrer est impoli. À Taiwan, c'est la norme. L'âge détermine la politesse (vouvoiement en quelque sorte : 你 vs les termes de respect). Le salaire est un sujet de conversation comme un autre. Adaptez-vous : ce qui compte, c'est de rester naturel et ouvert.",
        },
        {
          type: "text",
          content:
            "À Taiwan, les questions personnelles sont NORMALES et pas considérées comme indiscrètes. On vous demandera votre âge (幾歲), si vous avez un(e) petit(e) ami(e) (有沒有男/女朋友), combien vous gagnez (薪水多少), et pourquoi vous n'êtes pas marié(e). Ne soyez pas offensé — c'est de la curiosité bienveillante. Répondez avec le sourire ou esquivez poliment (秘密 mìmì = c'est un secret).",
        },
        {
          type: "text",
          content:
            "Le 語言交換 (language exchange) est LA méthode #1 pour se faire des amis à Taiwan. Comment ça marche : vous trouvez un(e) Taiwanais(e) qui veut pratiquer le français (ou l'anglais), vous vous retrouvez dans un café, 30 minutes en chinois puis 30 minutes en français. Où trouver : l'app HelloTalk, les groupes Facebook 'Language Exchange Taipei', les cafés-langues (世界咖啡館). Conseil : ne vous laissez pas piéger dans le 'tout en anglais' — insistez sur le 50/50.",
        },
        {
          type: "text",
          content:
            "Inviter et être invité à Taiwan : 我請你 (c'est ma tournée) est très courant entre amis. La personne qui invite PAIE pour tout le monde. Il y a ensuite une danse de politesse où l'invité essaie de payer (讓我付！) et l'hôte refuse (不用不用，我請你！). Après 2-3 refus, acceptez gracieusement. Les activités sociales populaires : KTV (karaoké en salle privée, 500-800 NT$/personne pour 3h), 火鍋 (hot pot en groupe), 逛夜市 (se promener au marché de nuit), 爬山 (randonnée le weekend).",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous participez à un language exchange dans un café à Taipei. Vous rencontrez 美玲 (Měilíng).",
    lines: [
      {
        speaker: "美玲",
        chinese: "嗨！你好，我叫美玲。你來台灣多久了？",
        pinyin: "hāi! nǐ hǎo, wǒ jiào Měilíng. nǐ lái Táiwān duōjiǔ le?",
        french: "Salut ! Je m'appelle Meiling. Tu es à Taiwan depuis combien de temps ?",
      },
      {
        speaker: "你",
        chinese: "我來了兩個月了。我是法國人，我來台灣學中文。",
        pinyin: "wǒ lái le liǎng ge yuè le. wǒ shì Fǎguó rén, wǒ lái Táiwān xué Zhōngwén.",
        french: "Ça fait deux mois. Je suis français, je suis venu à Taiwan pour apprendre le chinois.",
      },
      {
        speaker: "美玲",
        chinese: "太好了！台灣怎麼樣？你習慣了嗎？",
        pinyin: "tài hǎo le! Táiwān zěnmeyàng? nǐ xíguàn le ma?",
        french: "Super ! C'est comment Taiwan ? Tu t'es habitué ?",
      },
      {
        speaker: "你",
        chinese: "我越來越喜歡！你的興趣是什麼？",
        pinyin: "wǒ yuè lái yuè xǐhuān! nǐ de xìngqù shì shénme?",
        french: "J'aime de plus en plus ! Tes centres d'intérêt, c'est quoi ?",
      },
      {
        speaker: "美玲",
        chinese: "我喜歡旅行和拍照。你呢？你為什麼想學中文？",
        pinyin: "wǒ xǐhuān lǚxíng hé pāi zhào. nǐ ne? nǐ wèishénme xiǎng xué Zhōngwén?",
        french: "J'aime voyager et prendre des photos. Et toi ? Pourquoi tu veux apprendre le chinois ?",
      },
      {
        speaker: "你",
        chinese: "因為我覺得中文很有意思，而且台灣人很開心。",
        pinyin: "yīnwèi wǒ juéde Zhōngwén hěn yǒu yìsi, érqiě Táiwān rén hěn kāixīn.",
        french: "Parce que je trouve le chinois très intéressant, et les Taiwanais sont très joyeux.",
        note: "而且 (érqiě) = « et en plus », connecteur pour ajouter un argument.",
      },
    ],
  },

  keyPoints: [
    "多久了 = « depuis combien de temps » (action qui dure). 為什麼 = « pourquoi ». 怎麼樣 = « c'est comment ? ».",
    "越來越 + adj/verbe = « de plus en plus ». Structure invariable, applicable à tout adjectif.",
    "Hobbies : 看電影, 聽音樂, 運動, 旅行, 拍照, 爬山. Structure : 我喜歡 + activité ou 我的興趣是 + activité.",
    "Les Taiwanais posent des questions personnelles (âge, couple, salaire) sans gêne. Le language exchange (語言交換) est un excellent moyen de se faire des amis.",
  ],

  vocabulary: [
    {
      character: "多久",
      pinyin: "duōjiǔ",
      zhuyin: "ㄉㄨㄛ ㄐㄧㄡˇ",
      french: "Combien de temps",
      english: "How long",
      example: {
        sentence: "你學中文多久了？",
        pinyin: "nǐ xué Zhōngwén duōjiǔ le?",
        translation: "Tu apprends le chinois depuis combien de temps ?",
      },
    },
    {
      character: "為什麼",
      pinyin: "wèishénme",
      zhuyin: "ㄨㄟˋ ㄕㄣˊ ㄇㄜ˙",
      french: "Pourquoi",
      english: "Why",
      example: {
        sentence: "你為什麼喜歡台灣？",
        pinyin: "nǐ wèishénme xǐhuān Táiwān?",
        translation: "Pourquoi tu aimes Taiwan ?",
      },
    },
    {
      character: "怎麼樣",
      pinyin: "zěnmeyàng",
      zhuyin: "ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ",
      french: "Comment c'est, que penses-tu",
      english: "How is it, what do you think",
      example: {
        sentence: "這家餐廳怎麼樣？",
        pinyin: "zhè jiā cāntīng zěnmeyàng?",
        translation: "Ce restaurant, c'est comment ?",
      },
    },
    {
      character: "開心",
      pinyin: "kāixīn",
      zhuyin: "ㄎㄞ ㄒㄧㄣ",
      french: "Content, joyeux",
      english: "Happy",
      example: {
        sentence: "認識你很開心。",
        pinyin: "rènshì nǐ hěn kāixīn.",
        translation: "Content de te connaître.",
      },
    },
    {
      character: "有趣",
      pinyin: "yǒuqù",
      zhuyin: "ㄧㄡˇ ㄑㄩˋ",
      french: "Intéressant, amusant",
      english: "Interesting, fun",
      example: {
        sentence: "台灣的文化很有趣。",
        pinyin: "Táiwān de wénhuà hěn yǒuqù.",
        translation: "La culture taiwanaise est intéressante.",
      },
    },
    {
      character: "語言",
      pinyin: "yǔyán",
      zhuyin: "ㄩˇ ㄧㄢˊ",
      french: "Langue, langage",
      english: "Language",
      example: {
        sentence: "你會說幾種語言？",
        pinyin: "nǐ huì shuō jǐ zhǒng yǔyán?",
        translation: "Tu parles combien de langues ?",
      },
    },
    {
      character: "交換",
      pinyin: "jiāohuàn",
      zhuyin: "ㄐㄧㄠ ㄏㄨㄢˋ",
      french: "Échanger",
      english: "To exchange",
      example: {
        sentence: "我們做語言交換吧。",
        pinyin: "wǒmen zuò yǔyán jiāohuàn ba.",
        translation: "Faisons un language exchange.",
      },
    },
    {
      character: "電影",
      pinyin: "diànyǐng",
      zhuyin: "ㄉㄧㄢˋ ㄧㄥˇ",
      french: "Film",
      english: "Movie",
      example: {
        sentence: "你喜歡看什麼電影？",
        pinyin: "nǐ xǐhuān kàn shénme diànyǐng?",
        translation: "Tu aimes regarder quel genre de film ?",
      },
    },
    {
      character: "音樂",
      pinyin: "yīnyuè",
      zhuyin: "ㄧㄣ ㄩㄝˋ",
      french: "Musique",
      english: "Music",
      example: {
        sentence: "我喜歡聽台灣的音樂。",
        pinyin: "wǒ xǐhuān tīng Táiwān de yīnyuè.",
        translation: "J'aime écouter la musique taiwanaise.",
      },
    },
    {
      character: "運動",
      pinyin: "yùndòng",
      zhuyin: "ㄩㄣˋ ㄉㄨㄥˋ",
      french: "Sport, faire du sport",
      english: "Sports, exercise",
      example: {
        sentence: "你喜歡什麼運動？",
        pinyin: "nǐ xǐhuān shénme yùndòng?",
        translation: "Tu aimes quel sport ?",
      },
    },
    {
      character: "旅行",
      pinyin: "lǚxíng",
      zhuyin: "ㄌㄩˇ ㄒㄧㄥˊ",
      french: "Voyager, voyage",
      english: "Travel, to travel",
      example: {
        sentence: "我想去日本旅行。",
        pinyin: "wǒ xiǎng qù Rìběn lǚxíng.",
        translation: "Je veux voyager au Japon.",
      },
    },
    {
      character: "照片",
      pinyin: "zhàopiàn",
      zhuyin: "ㄓㄠˋ ㄆㄧㄢˋ",
      french: "Photo",
      english: "Photo, picture",
      example: {
        sentence: "我可以拍照嗎？",
        pinyin: "wǒ kěyǐ pāi zhào ma?",
        translation: "Je peux prendre une photo ?",
      },
    },
    {
      character: "習慣",
      pinyin: "xíguàn",
      zhuyin: "ㄒㄧˊ ㄍㄨㄢˋ",
      french: "S'habituer, habitude",
      english: "To get used to, habit",
      example: {
        sentence: "你習慣台灣的天氣嗎？",
        pinyin: "nǐ xíguàn Táiwān de tiānqì ma?",
        translation: "Tu t'es habitué au climat de Taiwan ?",
      },
    },
    {
      character: "適應",
      pinyin: "shìyìng",
      zhuyin: "ㄕˋ ㄧㄥˋ",
      french: "S'adapter",
      english: "To adapt",
      example: {
        sentence: "我還在適應這裡的生活。",
        pinyin: "wǒ hái zài shìyìng zhèlǐ de shēnghuó.",
        translation: "Je suis encore en train de m'adapter à la vie ici.",
      },
    },
    {
      character: "興趣",
      pinyin: "xìngqù",
      zhuyin: "ㄒㄧㄥˋ ㄑㄩˋ",
      french: "Centre d'intérêt, hobby",
      english: "Interest, hobby",
      example: {
        sentence: "你的興趣是什麼？",
        pinyin: "nǐ de xìngqù shì shénme?",
        translation: "Quels sont tes centres d'intérêt ?",
      },
    },
  ],

  exercises: [
    {
      id: "u14-ex1",
      type: "fill-blank",
      question: "你來台灣___了？(Tu es à Taiwan depuis combien de temps ?)",
      correctAnswer: "多久",
      options: ["多久", "多少", "怎麼", "什麼"],
      optionsHint: ["duōjiǔ", "duōshǎo", "zěnme", "shénme"],
      optionsZhuyin: ["ㄉㄨㄛ ㄐㄧㄡˇ", "ㄉㄨㄛ ㄕㄠˇ", "ㄗㄣˇ ㄇㄜ˙", "ㄕㄣˊ ㄇㄜ˙"],
      hint: "Quel mot signifie « combien de temps » ?",
      hintZhuyin: "Quel mot signifie « combien de temps » ?",
    },
    {
      id: "u14-ex2",
      type: "translate",
      question: "Comment dit-on « J'aime Taiwan de plus en plus » ?",
      correctAnswer: "我越來越喜歡台灣",
      options: ["我越來越喜歡台灣", "我很喜歡台灣", "我最喜歡台灣", "我比較喜歡台灣"],
      optionsHint: ["wǒ yuè lái yuè xǐhuān Táiwān", "wǒ hěn xǐhuān Táiwān", "wǒ zuì xǐhuān Táiwān", "wǒ bǐjiào xǐhuān Táiwān"],
      optionsZhuyin: ["ㄨㄛˇ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄒㄧˇ ㄏㄨㄢ ㄊㄞˊ ㄨㄢ", "ㄨㄛˇ ㄏㄣˇ ㄒㄧˇ ㄏㄨㄢ ㄊㄞˊ ㄨㄢ", "ㄨㄛˇ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ ㄊㄞˊ ㄨㄢ", "ㄨㄛˇ ㄅㄧˇ ㄐㄧㄠˋ ㄒㄧˇ ㄏㄨㄢ ㄊㄞˊ ㄨㄢ"],
    },
    {
      id: "u14-ex3",
      type: "comprehension",
      question: "Pourquoi les Taiwanais posent-ils des questions personnelles (âge, couple) en faisant connaissance ?",
      correctAnswer: "C'est une marque d'intérêt sincère et c'est culturellement normal",
      options: [
        "C'est une marque d'intérêt sincère et c'est culturellement normal",
        "C'est considéré comme impoli mais ils le font quand même",
        "Seulement les personnes âgées font ça",
        "C'est obligatoire par la loi taiwanaise",
      ],
    },
    {
      id: "u14-ex4",
      type: "fill-blank",
      question: "你___來台灣？(Pourquoi es-tu venu à Taiwan ?)",
      correctAnswer: "為什麼",
      options: ["為什麼", "怎麼樣", "什麼時候", "多久"],
      optionsHint: ["wèishénme", "zěnmeyàng", "shénme shíhòu", "duōjiǔ"],
      optionsZhuyin: ["ㄨㄟˋ ㄕㄣˊ ㄇㄜ˙", "ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ", "ㄕㄣˊ ㄇㄜ˙ ㄕˊ ㄏㄡˋ", "ㄉㄨㄛ ㄐㄧㄡˇ"],
      hint: "Quel mot interrogatif signifie « pourquoi » ?",
      hintZhuyin: "Quel mot interrogatif signifie « pourquoi » ?",
    },
    {
      id: "u14-ex5",
      type: "translate",
      question: "Que signifie 語言交換 ?",
      correctAnswer: "Language exchange (échange linguistique)",
      options: [
        "Language exchange (échange linguistique)",
        "Traduction automatique",
        "Cours de langue payant",
        "Dictionnaire bilingue",
      ],
    },
    {
      id: "u14-ex6",
      type: "fill-blank",
      question: "我的___是旅行和拍照。(Mes centres d'intérêt sont le voyage et la photo.)",
      correctAnswer: "興趣",
      options: ["興趣", "喜歡", "想法", "語言"],
      optionsHint: ["xìngqù", "xǐhuān", "xiǎngfǎ", "yǔyán"],
      optionsZhuyin: ["ㄒㄧㄥˋ ㄑㄩˋ", "ㄒㄧˇ ㄏㄨㄢ", "ㄒㄧㄤˇ ㄈㄚˇ", "ㄩˇ ㄧㄢˊ"],
      hint: "Quel mot signifie « centres d'intérêt / hobbies » ?",
      hintZhuyin: "Quel mot signifie « centres d'intérêt / hobbies » ?",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-17"],
};
