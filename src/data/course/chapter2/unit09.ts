import type { CourseUnit } from "@/types/course";

export const unit09: CourseUnit = {
  id: "unit-09",
  number: 9,
  title: "Au restaurant et au marché de nuit",
  titleZh: "餐廳和夜市",
  chapter: 2,
  description:
    "Commandez à manger, découvrez la cuisine taiwanaise incontournable et survivez aux marchés de nuit.",
  icon: "🍜",

  sections: [
    {
      title: "Commander à manger",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour commander à manger à Taiwan, deux structures essentielles : 我要 (wǒ yào, je veux) et 請給我 (qǐng gěi wǒ, s'il vous plaît donnez-moi). La première est directe et naturelle, la seconde est un peu plus polie.",
        },
        {
          type: "example",
          chinese: "我要一碗滷肉飯",
          pinyin: "wǒ yào yì wǎn lǔròu fàn",
          translation: "Je voudrais un bol de riz au porc braisé",
          content: "我要 + quantité + classificateur + plat : la formule de commande standard.",
        },
        {
          type: "example",
          chinese: "請給我一杯珍珠奶茶",
          pinyin: "qǐng gěi wǒ yì bēi zhēnzhū nǎichá",
          translation: "S'il vous plaît, donnez-moi un bubble tea",
          content: "請給我 est plus poli, idéal dans un restaurant avec service à table.",
        },
        {
          type: "text",
          content:
            "Question cruciale que l'on vous posera partout : 內用還是外帶？(nèiyòng háishì wàidài?) = « Sur place ou à emporter ? ». 內用 = sur place, 外帶 = à emporter.",
        },
        {
          type: "tip",
          content:
            "Quand le vendeur demande 內用還是外帶？(sur place ou à emporter ?), répondez simplement **內用** ou **外帶**. Pas besoin de faire une phrase complète. On peut aussi dire 我要內用 (je veux sur place) mais c'est plus long que nécessaire.",
        },
        {
          type: "example",
          chinese: "內用還是外帶？",
          pinyin: "nèiyòng háishì wàidài?",
          translation: "Sur place ou à emporter ?",
          content: "還是 (háishì) signifie « ou bien » dans une question à choix.",
        },
        {
          type: "text",
          content:
            "Quand vous avez fini de manger et voulez payer : 買單 (mǎidān) ou 結帳 (jiézhàng). Les deux signifient « l'addition, s'il vous plaît ». 買單 est plus courant dans la conversation.",
        },
        {
          type: "example",
          chinese: "買單！",
          pinyin: "mǎidān!",
          translation: "L'addition !",
          content: "À Taiwan, on paie souvent à la caisse en sortant, pas à table.",
        },
        {
          type: "tip",
          content:
            "Pas de pourboire à Taiwan ! Le service est inclus. Laisser un pourboire peut même mettre mal à l'aise le serveur.",
        },
        {
          type: "text",
          content:
            "Le système de commande à Taiwan est unique au monde. Dans beaucoup de restaurants, vous recevez un bon de commande papier (菜單 càidān ou 點菜單 diǎncàidān) où vous cochez les plats et les quantités avec un crayon. Pas besoin de parler ! Vous remettez le papier au serveur. C'est le système parfait pour un débutant en chinois. Vous verrez souvent les colonnes : 品名 (pǐnmíng, nom du plat), 數量 (shùliàng, quantité), 單價 (dānjià, prix unitaire). Cochez, indiquez la quantité, remettez la feuille, c'est tout. Dans les restaurants plus haut de gamme ou les stands de marché de nuit, il faut commander à l'oral — c'est là que 我要... et 給我... deviennent essentiels. Dans certains restaurants modernes, la commande se fait aussi par tablette ou QR code avec menu numérique — souvent disponible en anglais dans les zones touristiques. Autre système courant : les distributeurs automatiques de tickets (券 quàn) à l'entrée, surtout dans les restaurants de ramen japonais très populaires à Taiwan.",
        },
        {
          type: "tip",
          content:
            "La phrase magique au restaurant : 有什麼推薦的嗎？(yǒu shénme tuījiàn de ma? — vous recommandez quoi ?). Les Taiwanais ADORENT recommander leur nourriture et vous obtiendrez toujours le meilleur plat de la maison. Autre astuce : dites 跟他一樣 (gēn tā yīyàng — la même chose que lui) en pointant le plat d'un autre client. C'est parfaitement acceptable et courant à Taiwan. Personne ne sera offensé — au contraire, c'est un compliment indirect pour le plat. Si vous voulez demander ce qu'un autre client mange, vous pouvez dire : 請問他吃的是什麼？(qǐngwèn tā chī de shì shénme? — excusez-moi, qu'est-ce qu'il mange ?). Le serveur vous répondra avec plaisir.",
        },
        {
          type: "warning",
          content:
            "Les allergies alimentaires à Taiwan : la cuisine taiwanaise utilise beaucoup de 花生 huāshēng (cacahuètes), 蝦 xiā (crevettes), 醬油 jiàngyóu (sauce soja, qui contient du blé), et 味精 wèijīng (MSG/glutamate). Si vous avez des allergies, apprenez par coeur : 我對...過敏 (wǒ duì...guòmǐn — je suis allergique à...). Écrivez-le aussi sur une carte que vous montrerez — certains vendeurs de marché de nuit ne comprennent pas toujours bien les étrangers dans le bruit ambiant. Phrases vitales : 這個有花生嗎？(zhège yǒu huāshēng ma? — est-ce qu'il y a des cacahuètes dedans ?), 我不能吃海鮮 (wǒ bù néng chī hǎixiān — je ne peux pas manger de fruits de mer), 我對蝦過敏，吃了會很嚴重 (wǒ duì xiā guòmǐn, chī le huì hěn yánzhòng — je suis allergique aux crevettes, ça peut être grave si j'en mange). Taiwan est un pays où l'on prend les allergies au sérieux, mais la communication est la clé. Préparez une carte en chinois avec vos allergies — les pharmacies et hôpitaux sont aussi très accessibles en cas de problème.",
        },
      ],
    },
    {
      title: "La cuisine taiwanaise",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "La nourriture est LE sujet de conversation numero 1 a Taiwan. Les Taiwanais se saluent avec 你吃了嗎？(nǐ chī le ma? — tu as mange ?) au lieu de « ca va ? ». Ne pas savoir commander a manger est le plus grand handicap pour un etranger. Le systeme de commande a Taiwan varie selon le type d'etablissement. Stand de rue / marche de nuit : commande orale, on pointe du doigt, on paye en cash. Pas de menu parfois — regardez ce que les autres commandent. Restaurant avec menu : souvent un formulaire papier (菜單 càidān) ou vous cochez les plats et la quantite. Pas besoin de parler au serveur — donnez le papier. C'est le systeme ideal pour les debutants en chinois. Convenience store : les 7-Eleven et FamilyMart ont un micro-ondes. Achetez un bento (便當 biàndāng), on vous demandera 要加熱嗎？(yào jiārè ma? — voulez-vous rechauffer ?), repondez 好 (oui) ou 不用 (bùyòng, pas besoin). Restaurant de hot pot (火鍋 huǒguō) : vous choisissez une base de bouillon (麻辣 málà pour epice, 番茄 fānqié pour tomate, 藥膳 yàoshàn pour herbes chinoises), puis les ingredients au buffet. C'est la sortie sociale numero 1 des Taiwanais — entre amis, en couple, en famille, le hot pot est l'activite par defaut. Les plats que vous DEVEZ connaitre (ils sont partout) : 滷肉飯 (lǔ ròu fàn, riz au porc braise — LE plat national, 35-50 NT$, dans chaque restaurant), 牛肉麵 (niú ròu miàn, soupe de nouilles au boeuf — Taiwan en est obsede, il y a meme un festival annuel a Taipei), 小籠包 (xiǎo lóng bāo, raviolis vapeur — inventes a Shanghai, mais Taiwan pretend les avoir perfectionnes grace a 鼎泰豐 Dǐn Tài Fēng / Din Tai Fung), 珍珠奶茶 (zhēn zhū nǎi chá, bubble tea — invente a Taiwan a Taichung en 1983 par le salon de the 春水堂 Chūn Shuǐ Táng, fierte nationale absolue), 蚵仔煎 (ô-á-jiān en taiwanais, prononciation standard : é zǐ jiān, omelette aux huitres — le snack de marche de nuit emblematique), 臭豆腐 (chòu dòu fu, tofu puant — l'odeur est horrible, le gout est... un rite de passage. Si vous arrivez a en manger et a aimer, les Taiwanais vous respecteront enormement), 鳳梨酥 (fèng lí sū, gateau a l'ananas — le souvenir que TOUT le monde ramene de Taiwan, la marque 微熱山丘 Wēirè Shānqiū / SunnyHills est la reference).",
        },
        {
          type: "text",
          content:
            "Quelques mots utiles pour vos préférences : 素食 (sùshí) = végétarien, 辣 (là) = piquant, 不辣 (bú là) = pas piquant. La cuisine taiwanaise est généralement moins épicée que la cuisine du Sichuan, mais mieux vaut demander.",
        },
        {
          type: "example",
          chinese: "可以不要辣嗎？",
          pinyin: "kěyǐ bú yào là ma?",
          translation: "C'est possible sans piquant ?",
          content: "可以...嗎？ = est-ce possible de... ? Très utile au restaurant.",
        },
      ],
    },
    {
      title: "Les marchés de nuit",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Les marchés de nuit (夜市 yèshì) sont l'âme de Taiwan. Ce ne sont pas de simples marchés : ce sont des lieux de vie où les familles, les amis et les couples viennent manger, jouer et flâner. Les plus célèbres de Taipei sont 士林夜市 (Shìlín yèshì, marché de Shilin) et 饒河夜市 (Ráohé yèshì, marché de Raohe).",
        },
        {
          type: "text",
          content:
            "L'expression clé au marché de nuit : 好吃 (hǎochī) = délicieux. Vous l'entendrez partout et vous la direz vous-même après chaque bouchée. Pour demander à goûter : 可以試吃嗎？(kěyǐ shìchī ma?) = « On peut goûter ? ». Beaucoup de stands offrent des dégustations.",
        },
        {
          type: "example",
          chinese: "好吃！",
          pinyin: "hǎochī!",
          translation: "C'est délicieux !",
          content: "好 (bon) + 吃 (manger) = bon à manger. La logique chinoise est limpide.",
        },
        {
          type: "example",
          chinese: "可以試吃嗎？",
          pinyin: "kěyǐ shìchī ma?",
          translation: "On peut goûter ?",
          content: "試 (shì) = essayer. 試吃 = essayer de manger = goûter/déguster.",
        },
        {
          type: "text",
          content:
            "Détail culturel surprenant : à Taiwan, les reçus de caisse (統一發票 tǒngyī fāpiào) sont aussi des billets de loterie ! Tous les deux mois, un tirage au sort a lieu avec des prix allant de 200 NT$ à 10 millions NT$. Gardez vos tickets !",
        },
        {
          type: "tip",
          content:
            "Au marché de nuit, la plupart des stands ne prennent que du liquide. Prévoyez des petites coupures (100 NT$ et 50 NT$). Un plat coûte entre 60 et 120 NT$ (1,50 à 3,50 euros).",
        },
        {
          type: "tip",
          content:
            "Les marches de nuit (夜市 yèshì) sont une institution unique a Taiwan. Voici les regles non-ecrites : On goute avant d'acheter : pour les fruits, les stands proposent souvent des echantillons. Dites 可以試吃嗎？(kěyǐ shìchī ma? — puis-je gouter ?). On mange debout ou en marchant : les tables sont rares. Certains stands ont des chaises, mais la norme est de manger en deambulant. Les recus : GARDEZ TOUS VOS RECUS (統一發票 tǒngyī fāpiào). Ils participent a une loterie nationale bimestrielle. Le gros lot est de 10 millions NT$ (environ 285,000 euros). Les Taiwanais verifient religieusement leurs numeros sur l'app officielle 統一發票兌獎. Meme un recu de 35 NT$ pour un the peut gagner ! Les allergies : beaucoup de plats contiennent des cacahuetes (花生 huāshēng), du sesame (芝麻 zhīma), des fruits de mer (海鮮 hǎixiān). Si vous etes allergique, apprenez 我對...過敏 (wǒ duì...guòmǐn — je suis allergique a...). Le paiement : majoritairement en especes. Certains grands stands acceptent LINE Pay ou la EasyCard, mais ne comptez pas dessus — ayez toujours du cash. Les heures : la plupart ouvrent vers 17h-18h et ferment vers minuit-1h. Le pic de frequentation est entre 20h et 22h — c'est la que l'ambiance est la plus electrique mais aussi la plus bondee. Si vous voulez eviter la foule, allez vers 18h (debut) ou apres 22h30 (fin de soiree, certains stands bradent les restes). Le jour de la semaine compte aussi : les vendredis et samedis soir sont les plus charges.",
        },
        {
          type: "warning",
          content:
            "Si vous etes vegetarien (素食 sùshí), Taiwan est un PARADIS. Le bouddhisme a cree une culture vegetarienne riche — il y a des restaurants 素食 partout, reconnaissables au symbole 卍 (le svastika bouddhiste, qui n'a rien a voir avec le nazisme) ou au mot 素 en grand sur la devanture. MAIS attention : le vegetarisme taiwanais bouddhiste exclut souvent aussi l'ail (蒜 suàn), l'oignon (洋蔥 yángcōng), le poireau (韭菜 jiǔcài) et l'echalote (紅蔥頭 hóng cōngtóu) pour des raisons religieuses — ce sont les « cinq pungents » (五辛 wǔxīn) interdits dans le bouddhisme. Si vous dites juste 素食, on vous servira sans viande NI ail NI oignon. Si vous voulez du vegetarien « normal » (style occidental, avec ail et oignon), precisez : 我不吃肉，但是可以吃蒜和洋蔥 (wǒ bù chī ròu, dànshì kěyǐ chī suàn hé yángcōng — je ne mange pas de viande mais je mange de l'ail et de l'oignon). Il existe aussi le terme 蛋奶素 (dàn nǎi sù) pour ovo-lacto-vegetarien (oeufs et lait OK), et 全素 (quán sù) pour vegan strict. Taiwan est un des pays les plus faciles au monde pour etre vegetarien — les options sont partout et souvent delicieuses.",
        },
        {
          type: "text",
          content:
            "Les marchés de nuit (夜市 yèshì) sont l'ÂME de Taiwan. Il en existe plus de 300 à travers l'île. Les plus célèbres : 士林夜市 Shìlín yèshì (le plus grand de Taipei, un classique pour les touristes mais aussi les locaux), 饒河街夜市 Ráohé jiē yèshì (le plus ancien de Taipei, une longue rue couverte, célèbre pour son 胡椒餅 hújiāobǐng à l'entrée), 通化街夜市 Tōnghuà jiē yèshì (aussi appelé Linjiang, plus petit et plus local, fréquenté par les habitants du quartier de Da'an), 寧夏夜市 Níngxià yèshì (spécialisé dans la nourriture traditionnelle taiwanaise, souvent classé « meilleur marché de nuit pour la bouffe »), et en dehors de Taipei : 逢甲夜市 Féngjiǎ yèshì à Taichung (le plus grand de tout Taiwan, un labyrinthe de stands et de ruelles). Ils ouvrent vers 17h-18h et ferment vers minuit-1h. Ce n'est pas juste de la nourriture — il y a aussi des jeux (夾娃娃機 jiá wáwa jī, machines à griffes que les Taiwanais adorent, 套圈圈 tào quānquān, lancer d'anneaux, 打彈珠 dǎ tánzhū, flipper), des vêtements, des accessoires, des coques de téléphone, des massages de pieds. Protocole de base : on fait la queue sans couper (les Taiwanais sont très disciplinés pour ça), on paie avant de manger pour les stands à emporter, on mange debout ou en marchant (sauf les restaurants assis dans le marché). Certains marchés de nuit ont une zone de tables communes (座位區 zuòwèi qū) — cherchez-la si vous voulez vous asseoir.",
        },
        {
          type: "text",
          content:
            "Les 10 plats de marché de nuit à connaître ABSOLUMENT (et comment les prononcer) : 1) 臭豆腐 chòudòufu (tofu puant — ça sent horrible mais c'est délicieux, le test ultime pour les étrangers. Il existe en version frite, croustillante dehors et moelleuse dedans, servi avec du chou mariné), 2) 滷肉飯 lǔròufàn (riz au porc braisé — le comfort food national, un bol de riz blanc nappé de porc émincé mijoté dans la sauce soja sucrée, souvent à moins de 50 NT$), 3) 蚵仔煎 ézǐjiān (omelette aux huîtres — spécialité 100% taiwanaise, une crêpe épaisse avec des petites huîtres, des œufs et une sauce sucrée-épicée), 4) 大腸包小腸 dàchángbāoxiǎocháng (littéralement « gros intestin enveloppe petit intestin » — une saucisse de porc grillée dans un pain de riz gluant, garnie de légumes marinés et d'ail), 5) 鹽酥雞 yánsūjī (poulet frit taiwanais aux épices — l'en-cas #1 des marches de nuit, vous choisissez vos morceaux et accompagnements dans une vitrine, c'est frit à la commande et assaisonné de sel, poivre et feuilles de basilic), 6) 珍珠奶茶 zhēnzhūnǎichá (bubble tea — inventé à Taiwan à Taichung dans les années 1980, les perles de tapioca sont faites maison dans les bons stands), 7) 芒果冰 mángguǒbīng (glace pilée à la mangue fraîche — surtout en été, de mai à septembre, quand les mangues d'Aiwen sont à leur meilleur), 8) 蔥油餅 cōngyóubǐng (crêpe feuilletée à la ciboule — croustillante, huileuse, parfois servie avec un œuf au plat dessus), 9) 胡椒餅 hújiāobǐng (pain au poivre et porc — cuit dans un four tandoori, la pâte est croustillante et la farce juteuse et poivrée), 10) 豆花 dòuhuā (dessert au tofu soyeux — servi dans un sirop sucré avec des toppings au choix : cacahuètes, haricots rouges, taro, perles de tapioca).",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous êtes au marché de nuit de Shilin (士林夜市) et vous commandez à un stand de street food.",
    lines: [
      {
        speaker: "Vendeur",
        chinese: "你好！要吃什麼？",
        pinyin: "nǐ hǎo! yào chī shénme?",
        french: "Bonjour ! Qu'est-ce que vous voulez manger ?",
      },
      {
        speaker: "Vous",
        chinese: "我要一碗滷肉飯，還有一杯珍珠奶茶。",
        pinyin: "wǒ yào yì wǎn lǔròu fàn, háiyǒu yì bēi zhēnzhū nǎichá.",
        french: "Je voudrais un bol de riz au porc braisé et un bubble tea.",
        note: "還有 (háiyǒu) = et aussi / en plus.",
      },
      {
        speaker: "Vendeur",
        chinese: "要辣嗎？",
        pinyin: "yào là ma?",
        french: "Vous voulez piquant ?",
      },
      {
        speaker: "Vous",
        chinese: "不要辣，謝謝。",
        pinyin: "bú yào là, xièxiè.",
        french: "Pas piquant, merci.",
      },
      {
        speaker: "Vendeur",
        chinese: "好，一共八十五塊。",
        pinyin: "hǎo, yígòng bāshíwǔ kuài.",
        french: "D'accord, 85 dollars en tout.",
        note: "一共 (yígòng) = en tout. 塊 (kuài) est le mot courant pour NT$ (dollars taiwanais).",
      },
      {
        speaker: "Vous",
        chinese: "好吃！謝謝！",
        pinyin: "hǎochī! xièxiè!",
        french: "C'est délicieux ! Merci !",
      },
    ],
  },

  keyPoints: [
    "我要 + plat pour commander. 請給我 est la version polie.",
    "內用 = sur place, 外帶 = à emporter. On vous posera cette question partout.",
    "Les marchés de nuit (夜市) sont incontournables : nourriture pas chère, ambiance unique, et reçus = billets de loterie.",
    "好吃 = délicieux. 素食 = végétarien. 辣/不辣 = piquant/pas piquant.",
  ],

  vocabulary: [
    {
      character: "我要",
      pinyin: "wǒ yào",
      zhuyin: "ㄨㄛˇ ㄧㄠˋ",
      french: "Je veux / je voudrais",
      english: "I want",
      example: {
        sentence: "我要一碗麵。",
        pinyin: "wǒ yào yì wǎn miàn.",
        translation: "Je voudrais un bol de nouilles.",
      },
    },
    {
      character: "給我",
      pinyin: "gěi wǒ",
      zhuyin: "ㄍㄟˇ ㄨㄛˇ",
      french: "Donnez-moi",
      english: "Give me",
      example: {
        sentence: "請給我一杯水。",
        pinyin: "qǐng gěi wǒ yì bēi shuǐ.",
        translation: "Donnez-moi un verre d'eau, s'il vous plaît.",
      },
    },
    {
      character: "內用",
      pinyin: "nèiyòng",
      zhuyin: "ㄋㄟˋ ㄩㄥˋ",
      french: "Sur place",
      english: "Dine in",
      example: {
        sentence: "我要內用。",
        pinyin: "wǒ yào nèiyòng.",
        translation: "Je mange sur place.",
      },
    },
    {
      character: "外帶",
      pinyin: "wàidài",
      zhuyin: "ㄨㄞˋ ㄉㄞˋ",
      french: "À emporter",
      english: "Takeout",
      example: {
        sentence: "外帶，謝謝。",
        pinyin: "wàidài, xièxiè.",
        translation: "À emporter, merci.",
      },
    },
    {
      character: "好吃",
      pinyin: "hǎochī",
      zhuyin: "ㄏㄠˇ ㄔ",
      french: "Délicieux",
      english: "Delicious",
      example: {
        sentence: "這個很好吃！",
        pinyin: "zhège hěn hǎochī!",
        translation: "C'est très bon !",
      },
    },
    {
      character: "滷肉飯",
      pinyin: "lǔròu fàn",
      zhuyin: "ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ",
      french: "Riz au porc braisé",
      english: "Braised pork rice",
      example: {
        sentence: "台灣的滷肉飯很好吃。",
        pinyin: "Táiwān de lǔròu fàn hěn hǎochī.",
        translation: "Le riz au porc braisé taiwanais est délicieux.",
      },
    },
    {
      character: "珍珠奶茶",
      pinyin: "zhēnzhū nǎichá",
      zhuyin: "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ",
      french: "Bubble tea",
      english: "Bubble milk tea",
      example: {
        sentence: "我每天喝珍珠奶茶。",
        pinyin: "wǒ měitiān hē zhēnzhū nǎichá.",
        translation: "Je bois du bubble tea tous les jours.",
      },
    },
    {
      character: "水",
      pinyin: "shuǐ",
      zhuyin: "ㄕㄨㄟˇ",
      french: "Eau",
      english: "Water",
      example: {
        sentence: "請給我一杯水。",
        pinyin: "qǐng gěi wǒ yì bēi shuǐ.",
        translation: "Un verre d'eau, s'il vous plaît.",
      },
    },
    {
      character: "飯",
      pinyin: "fàn",
      zhuyin: "ㄈㄢˋ",
      french: "Riz (cuit) / repas",
      english: "Rice / meal",
      example: {
        sentence: "你吃飯了嗎？",
        pinyin: "nǐ chīfàn le ma?",
        translation: "Tu as mangé ? (salutation courante)",
      },
    },
    {
      character: "麵",
      pinyin: "miàn",
      zhuyin: "ㄇㄧㄢˋ",
      french: "Nouilles",
      english: "Noodles",
      example: {
        sentence: "牛肉麵很好吃。",
        pinyin: "niúròu miàn hěn hǎochī.",
        translation: "La soupe de nouilles au bœuf est délicieuse.",
      },
    },
    {
      character: "辣",
      pinyin: "là",
      zhuyin: "ㄌㄚˋ",
      french: "Piquant / épicé",
      english: "Spicy",
      example: {
        sentence: "這個太辣了！",
        pinyin: "zhège tài là le!",
        translation: "C'est trop piquant !",
      },
    },
    {
      character: "素食",
      pinyin: "sùshí",
      zhuyin: "ㄙㄨˋ ㄕˊ",
      french: "Végétarien",
      english: "Vegetarian",
      example: {
        sentence: "有素食的嗎？",
        pinyin: "yǒu sùshí de ma?",
        translation: "Vous avez des plats végétariens ?",
      },
    },
    {
      character: "買單",
      pinyin: "mǎidān",
      zhuyin: "ㄇㄞˇ ㄉㄢ",
      french: "L'addition",
      english: "The bill / check",
      example: {
        sentence: "我要買單。",
        pinyin: "wǒ yào mǎidān.",
        translation: "Je voudrais l'addition.",
      },
    },
    {
      character: "碗",
      pinyin: "wǎn",
      zhuyin: "ㄨㄢˇ",
      french: "Bol (classificateur)",
      english: "Bowl (measure word)",
      example: {
        sentence: "一碗滷肉飯。",
        pinyin: "yì wǎn lǔròu fàn.",
        translation: "Un bol de riz au porc braisé.",
      },
    },
    {
      character: "喝",
      pinyin: "hē",
      zhuyin: "ㄏㄜ",
      french: "Boire",
      english: "To drink",
      example: {
        sentence: "你要喝什麼？",
        pinyin: "nǐ yào hē shénme?",
        translation: "Qu'est-ce que tu veux boire ?",
      },
    },
    {
      character: "飽",
      pinyin: "bǎo",
      zhuyin: "ㄅㄠˇ",
      french: "Rassasié",
      english: "Full (after eating)",
      example: {
        sentence: "我吃飽了。",
        pinyin: "wǒ chī bǎo le.",
        translation: "J'ai assez mangé.",
      },
    },
  ],

  exercises: [
    {
      id: "u7-ex1",
      type: "translate",
      question: "Comment dit-on « Je voudrais un bol de nouilles au bœuf » ?",
      correctAnswer: "我要一碗牛肉麵",
      options: [
        "我要一碗牛肉麵",
        "給我一碗滷肉飯",
        "我吃牛肉麵",
        "我要一杯牛肉麵",
      ],
    },
    {
      id: "u7-ex2",
      type: "comprehension",
      question: "Que signifie 內用還是外帶 ?",
      correctAnswer: "Sur place ou à emporter ?",
      options: [
        "Sur place ou à emporter ?",
        "Piquant ou pas piquant ?",
        "Grand ou petit ?",
        "Chaud ou froid ?",
      ],
    },
    {
      id: "u7-ex3",
      type: "fill-blank",
      question: "這個很___！(C'est délicieux !)",
      correctAnswer: "好吃",
      options: ["好吃", "好喝", "好看", "好玩"],
      hint: "好 + quel verbe pour « manger » ?",
    },
    {
      id: "u7-ex4",
      type: "translate",
      question: "Que signifie 可以試吃嗎 ?",
      correctAnswer: "On peut goûter ?",
      options: [
        "On peut goûter ?",
        "C'est bon à manger ?",
        "On peut payer ?",
        "C'est combien ?",
      ],
    },
    {
      id: "u7-ex5",
      type: "comprehension",
      question: "Quel plat est considéré comme le plat national de Taiwan ?",
      correctAnswer: "滷肉飯 (riz au porc braisé)",
      options: [
        "滷肉飯 (riz au porc braisé)",
        "小籠包 (raviolis vapeur)",
        "牛肉麵 (nouilles au bœuf)",
        "珍珠奶茶 (bubble tea)",
      ],
    },
    {
      id: "u7-ex6",
      type: "fill-blank",
      question: "不要___，謝謝。(Pas piquant, merci.)",
      correctAnswer: "辣",
      options: ["辣", "甜", "鹹", "酸"],
      hint: "Quel caractère signifie « piquant » ?",
    },
    {
      id: "u07-listen",
      type: "listen",
      question: "我要一碗滷肉飯，外帶。",
      correctAnswer: "Je voudrais un bol de lu rou fan, à emporter.",
      options: [
        "Je voudrais un bol de lu rou fan, à emporter.",
        "Je voudrais du bubble tea.",
        "L'addition s'il vous plaît.",
        "C'est délicieux !",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-08"],
};
