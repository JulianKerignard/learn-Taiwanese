import type { CourseUnit } from "@/types/course";

export const unit84: CourseUnit = {
  id: "unit-84",
  number: 84,
  title: "Lecture guidée 2 — Articles courts",
  titleZh: "閱讀練習二——短文",
  chapter: 5,
  description:
    "Pratiquez la lecture avec des textes courts et réalistes du quotidien taïwanais : messages LINE, annonces d'appartement et avis de restaurant. Chaque texte est suivi de questions de compréhension pour vérifier votre compréhension.",
  icon: "📖",

  sections: [
    {
      title: "Un message de coloc sur LINE",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Lisez ce message LINE entre deux colocataires. Essayez de comprendre le sens général avant de regarder les questions.",
        },
        {
          type: "example",
          chinese:
            "小美：欸，今天晚上垃圾車幾點來啊？我忘了。而且冰箱裡的牛奶快沒了，你等一下要不要一起去全聯買？順便買一些衛生紙，我們也用完了。記得帶環保袋喔！",
          pinyin:
            "xiǎoměi: èi, jīntiān wǎnshàng lājī chē jǐ diǎn lái a? wǒ wàng le. érqiě bīngxiāng lǐ de niúnǎi kuài méi le, nǐ děng yíxià yào bú yào yìqǐ qù quánlián mǎi? shùnbiàn mǎi yìxiē wèishēngzhǐ, wǒmen yě yòng wán le. jìde dài huánbǎo dài o!",
          translation:
            "Xiaoméi : Eh, le camion poubelle passe à quelle heure ce soir ? J'ai oublié. Et il n'y a presque plus de lait dans le frigo, tu veux aller ensemble à PX Mart tout à l'heure ? On en profitera pour acheter du papier toilette aussi, on n'en a plus. N'oublie pas le sac réutilisable !",
          content:
            "全聯 (Quánlián) = PX Mart, le supermarché le plus courant à Taïwan. 垃圾車 = camion poubelle. 環保袋 = sac réutilisable.",
        },
        {
          type: "tip",
          content:
            "À Taïwan, il n'y a pas de poubelles dans la rue. Le camion poubelle passe dans chaque quartier à heure fixe en jouant la mélodie 'Für Elise' de Beethoven. Il faut sortir en personne pour lui donner ses sacs. C'est un vrai rituel quotidien !",
        },
      ],
    },
    {
      title: "Une annonce d'appartement",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Lisez cette annonce d'appartement trouvée sur 591.com.tw, le site le plus populaire à Taïwan pour chercher un logement. Identifiez les informations clés : type, prix, ce qui est inclus.",
        },
        {
          type: "example",
          chinese:
            "【套房出租】大安區忠孝復興站走路五分鐘，四樓，約八坪。月租一萬兩千元，包水包電包網路。有冷氣、洗衣機、冰箱。不可以養寵物，不可以開伙。押金兩個月。有興趣請加LINE聯絡。",
          pinyin:
            "【tàofáng chūzū】dà'ān qū zhōngxiào fùxīng zhàn zǒulù wǔ fēnzhōng, sì lóu, yuē bā píng. yuèzū yí wàn liǎng qiān yuán, bāo shuǐ bāo diàn bāo wǎnglù. yǒu lěngqì, xǐyījī, bīngxiāng. bù kěyǐ yǎng chǒngwù, bù kěyǐ kāihuǒ. yājīn liǎng gè yuè. yǒu xìngqù qǐng jiā LINE liánluò.",
          translation:
            "【Studio à louer】Quartier Da'an, 5 min à pied de la station Zhongxiao Fuxing, 4e étage, environ 8 ping (~26 m²). Loyer mensuel 12 000 NT$, eau, électricité et internet inclus. Climatisation, machine à laver, réfrigérateur. Pas d'animaux, pas de cuisine. Caution 2 mois. Intéressé ? Ajoutez-moi sur LINE.",
          content:
            "套房 = studio. 包水包電 = eau et électricité incluses. 坪 = unité de surface taïwanaise (~3,3 m²). 押金 = caution. 開伙 = cuisiner (dans le logement).",
        },
        {
          type: "tip",
          content:
            "591.com.tw est LE site immobilier de référence à Taïwan. Les prix des 套房 (studios) à Taipei varient de 8 000 à 20 000 NT$ selon le quartier. 包水電 est un gros avantage car l'électricité peut coûter cher en été avec la climatisation.",
        },
      ],
    },
    {
      title: "Un avis de restaurant",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Lisez cet avis laissé sur Google Maps pour un restaurant de 牛肉麵 (soupe de nouilles au bœuf), le plat emblématique de Taïwan. Comprenez l'opinion générale du client.",
        },
        {
          type: "example",
          chinese:
            "這家牛肉麵真的超好吃！牛肉很大塊，湯頭很濃，麵條也很Q彈。一碗大的才一百八十元，很便宜。老闆很親切，服務態度很好。唯一的缺點是位子不多，中午要排隊等大概二十分鐘。但是值得！下次還會再來。推薦！",
          pinyin:
            "zhè jiā niúròu miàn zhēn de chāo hǎochī! niúròu hěn dà kuài, tāngtóu hěn nóng, miàntiáo yě hěn Q tán. yì wǎn dà de cái yìbǎi bāshí yuán, hěn piányi. lǎobǎn hěn qīnqiè, fúwù tàidù hěn hǎo. wéiyī de quēdiǎn shì wèizi bù duō, zhōngwǔ yào páiduì děng dàgài èrshí fēnzhōng. dànshì zhíde! xià cì hái huì zài lái. tuījiàn!",
          translation:
            "La soupe de bœuf de ce resto est vraiment super bonne ! Les morceaux de bœuf sont gros, le bouillon est riche, et les nouilles sont bien élastiques. Un grand bol ne coûte que 180 NT$, c'est pas cher. Le patron est très gentil, le service est bien. Le seul défaut c'est qu'il n'y a pas beaucoup de places, le midi il faut faire la queue environ 20 minutes. Mais ça vaut le coup ! Je reviendrai. Recommandé !",
          content:
            "湯頭 = bouillon (base de la soupe). Q彈 = texture élastique/rebondissante (terme taiwanais très courant). 排隊 = faire la queue. 值得 = ça vaut le coup.",
        },
        {
          type: "tip",
          content:
            "Q (prononcé comme la lettre en anglais) est un adjectif typiquement taïwanais qui décrit une texture agréablement élastique et rebondissante. On l'utilise pour les nouilles, le bubble tea (les perles de tapioca), le mochi, etc. C'est un mot que vous entendrez constamment à Taïwan !",
        },
      ],
    },
  ],

  dialogue: undefined,

  keyPoints: [
    "全聯 (PX Mart) est le supermarché le plus courant à Taïwan, et 垃圾車 (camion poubelle) passe à heure fixe.",
    "591.com.tw est le site immobilier de référence. 套房 = studio, 包水電 = charges incluses.",
    "Q彈 est un adjectif typiquement taïwanais pour décrire une texture élastique agréable (nouilles, tapioca).",
    "排隊 = faire la queue, 值得 = ça vaut le coup — expressions très courantes dans les avis.",
    "Lire des textes authentiques aide à reconnaître les structures grammaticales en contexte réel.",
  ],

  vocabulary: [
    {
      character: "垃圾車",
      pinyin: "lājī chē",
      zhuyin: "ㄌㄜˋ ㄙㄜˋ ㄔㄜ",
      french: "Camion poubelle",
      english: "Garbage truck",
      example: {
        sentence: "垃圾車快來了，快下去！",
        pinyin: "lājī chē kuài lái le, kuài xià qù!",
        translation: "Le camion poubelle arrive bientôt, descends vite !",
      },
    },
    {
      character: "冰箱",
      pinyin: "bīngxiāng",
      zhuyin: "ㄅㄧㄥ ㄒㄧㄤ",
      french: "Réfrigérateur",
      english: "Refrigerator",
      example: {
        sentence: "牛奶放在冰箱裡。",
        pinyin: "niúnǎi fàng zài bīngxiāng lǐ.",
        translation: "Le lait est dans le frigo.",
      },
    },
    {
      character: "套房",
      pinyin: "tàofáng",
      zhuyin: "ㄊㄠˋ ㄈㄤˊ",
      french: "Studio (avec salle de bain privée)",
      english: "Studio apartment",
      example: {
        sentence: "我在找一間套房。",
        pinyin: "wǒ zài zhǎo yì jiān tàofáng.",
        translation: "Je cherche un studio.",
      },
    },
    {
      character: "月租",
      pinyin: "yuèzū",
      zhuyin: "ㄩㄝˋ ㄗㄨ",
      french: "Loyer mensuel",
      english: "Monthly rent",
      example: {
        sentence: "月租多少錢？",
        pinyin: "yuèzū duōshǎo qián?",
        translation: "Combien est le loyer mensuel ?",
      },
    },
    {
      character: "押金",
      pinyin: "yājīn",
      zhuyin: "ㄧㄚ ㄐㄧㄣ",
      french: "Caution, dépôt de garantie",
      english: "Deposit",
      example: {
        sentence: "押金要付兩個月。",
        pinyin: "yājīn yào fù liǎng gè yuè.",
        translation: "Il faut payer deux mois de caution.",
      },
    },
    {
      character: "牛肉麵",
      pinyin: "niúròu miàn",
      zhuyin: "ㄋㄧㄡˊ ㄖㄡˋ ㄇㄧㄢˋ",
      french: "Soupe de nouilles au bœuf",
      english: "Beef noodle soup",
      example: {
        sentence: "台灣的牛肉麵很有名。",
        pinyin: "Táiwān de niúròu miàn hěn yǒumíng.",
        translation: "La soupe de nouilles au bœuf de Taïwan est très célèbre.",
      },
    },
    {
      character: "排隊",
      pinyin: "páiduì",
      zhuyin: "ㄆㄞˊ ㄉㄨㄟˋ",
      french: "Faire la queue",
      english: "To queue, to line up",
      example: {
        sentence: "這家店要排隊排很久。",
        pinyin: "zhè jiā diàn yào páiduì pái hěn jiǔ.",
        translation: "Il faut faire la queue longtemps pour ce magasin.",
      },
    },
    {
      character: "便宜",
      pinyin: "piányi",
      zhuyin: "ㄆㄧㄢˊ ㄧˊ",
      french: "Pas cher, bon marché",
      english: "Cheap, inexpensive",
      example: {
        sentence: "夜市的東西很便宜。",
        pinyin: "yèshì de dōngxi hěn piányi.",
        translation: "Les choses au marché de nuit sont pas chères.",
      },
    },
    {
      character: "推薦",
      pinyin: "tuījiàn",
      zhuyin: "ㄊㄨㄟ ㄐㄧㄢˋ",
      french: "Recommander",
      english: "To recommend",
      example: {
        sentence: "你推薦什麼菜？",
        pinyin: "nǐ tuījiàn shénme cài?",
        translation: "Quel plat tu recommandes ?",
      },
    },
    {
      character: "值得",
      pinyin: "zhíde",
      zhuyin: "ㄓˊ ㄉㄜˊ",
      french: "Valoir le coup, mériter",
      english: "To be worth it",
      example: {
        sentence: "這部電影很值得看。",
        pinyin: "zhè bù diànyǐng hěn zhíde kàn.",
        translation: "Ce film vaut vraiment le coup d'être vu.",
      },
    },
  ],

  exercises: [
    {
      id: "u84-ex1",
      type: "comprehension",
      question: "Dans le message LINE, que faut-il aller acheter au supermarché ?",
      correctAnswer: "Du lait et du papier toilette",
      options: [
        "Du lait et du papier toilette",
        "Du riz et des œufs",
        "Des sacs poubelle et du savon",
        "De l'eau et des fruits",
      ],
    },
    {
      id: "u84-ex2",
      type: "comprehension",
      question: "Pourquoi le colocataire doit-il se rappeler de l'heure du 垃圾車 ?",
      correctAnswer: "Parce qu'à Taïwan il faut sortir donner ses poubelles au camion en personne",
      options: [
        "Parce qu'à Taïwan il faut sortir donner ses poubelles au camion en personne",
        "Parce que le camion livre des courses",
        "Parce qu'il doit garer sa voiture avant le passage du camion",
        "Parce que c'est lui qui conduit le camion poubelle",
      ],
    },
    {
      id: "u84-ex3",
      type: "comprehension",
      question: "Dans l'annonce d'appartement, combien coûte le loyer mensuel et qu'est-ce qui est inclus ?",
      correctAnswer: "12 000 NT$, eau, électricité et internet inclus",
      options: [
        "12 000 NT$, eau, électricité et internet inclus",
        "10 000 NT$, eau incluse seulement",
        "8 000 NT$, tout inclus avec le petit-déjeuner",
        "15 000 NT$, rien n'est inclus",
      ],
    },
    {
      id: "u84-ex4",
      type: "comprehension",
      question: "Quelles sont les deux interdictions mentionnées dans l'annonce d'appartement ?",
      correctAnswer: "Pas d'animaux et pas de cuisine",
      options: [
        "Pas d'animaux et pas de cuisine",
        "Pas de bruit et pas de visiteurs",
        "Pas de fumée et pas d'alcool",
        "Pas de musique et pas de lessive la nuit",
      ],
    },
    {
      id: "u84-ex5",
      type: "comprehension",
      question: "Dans l'avis du restaurant, quel est le seul défaut mentionné par le client ?",
      correctAnswer: "Il n'y a pas beaucoup de places et il faut faire la queue le midi",
      options: [
        "Il n'y a pas beaucoup de places et il faut faire la queue le midi",
        "La nourriture est trop chère",
        "Le service est lent et impoli",
        "Les nouilles ne sont pas bonnes",
      ],
    },
    {
      id: "u84-ex6",
      type: "comprehension",
      question: "Combien coûte un grand bol de 牛肉麵 dans ce restaurant ?",
      correctAnswer: "180 NT$ (environ 5 €)",
      options: [
        "180 NT$ (environ 5 €)",
        "280 NT$ (environ 8 €)",
        "80 NT$ (environ 2 €)",
        "380 NT$ (environ 10 €)",
      ],
    },
    {
      id: "u84-ex7",
      type: "comprehension",
      question: "Que signifie Q彈 dans le contexte de la nourriture à Taïwan ?",
      correctAnswer: "Une texture élastique et rebondissante, agréable en bouche",
      options: [
        "Une texture élastique et rebondissante, agréable en bouche",
        "Un goût très épicé et piquant",
        "Une cuisson très croustillante",
        "Un aliment très mou et fondant",
      ],
    },
    {
      id: "u84-ex8",
      type: "comprehension",
      question: "Dans l'annonce, que signifie 套房 ?",
      correctAnswer: "Un studio avec salle de bain privée",
      options: [
        "Un studio avec salle de bain privée",
        "Un appartement de trois chambres",
        "Une chambre partagée en colocation",
        "Une maison individuelle",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-55"],
};
