import type { Lesson } from "@/types";
import type { CourseSection } from "@/types/course";

const sections: CourseSection[] = [
  {
    title: "Le système de commande à Taiwan",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Commander à manger à Taiwan ne fonctionne pas comme en France. Il n'y a pas un système unique — il y en a au moins quatre, et les connaître tous est essentiel pour ne pas se retrouver planté devant un comptoir sans savoir quoi faire. Chaque type d'établissement a ses propres codes, et les maîtriser fait la différence entre un repas agréable et une situation gênante où vous bloquez la file d'attente.",
      },
      {
        type: "text",
        content:
          "SYSTÈME 1 : STAND DE RUE / MARCHÉ DE NUIT — C'est le mode le plus instinctif et le plus déstabilisant pour un Français. Pas de menu affiché (ou alors en chinois uniquement), pas de serveur, pas de table. Vous arrivez devant un stand, il y a une file d'attente, et quand c'est votre tour, vous devez savoir ce que vous voulez. La commande est orale : vous pointez du doigt ce que vous voulez et vous dites 我要這個 (wǒ yào zhè ge — je veux celui-ci). Si vous ne savez pas quoi choisir, regardez ce que les autres commandent ou pointez le plat d'un voisin : 我要跟他一樣的 (wǒ yào gēn tā yíyàng de — je veux la même chose que lui). Paiement en cash uniquement dans la plupart des stands. Préparez votre monnaie.",
      },
      {
        type: "example",
        content: "Commander au stand de rue",
        chinese: "老闆，我要這個，一份。",
        pinyin: "Lǎobǎn, wǒ yào zhè ge, yí fèn.",
        translation: "Patron, je veux celui-ci, une portion.",
      },
      {
        type: "text",
        content:
          "SYSTÈME 2 : RESTAURANT AVEC FORMULAIRE — C'est le système le plus courant dans les restaurants de taille moyenne à Taiwan, et le plus déroutant pour les étrangers qui ne le connaissent pas. En entrant, on vous donne un papier (菜單 càidān ou 點菜單 diǎn càidān) avec la liste des plats et une colonne pour écrire la quantité. Vous cochez ou écrivez le nombre de portions souhaitées à côté de chaque plat, puis vous apportez le formulaire au comptoir ou le donnez au serveur. Pas besoin de parler — tout passe par le papier. C'est un système incroyablement efficace. Le problème : le formulaire est presque toujours en chinois uniquement. Astuce : prenez une photo du formulaire, utilisez Google Translate en mode caméra pour déchiffrer les plats.",
      },
      {
        type: "example",
        content: "Au restaurant avec formulaire",
        chinese: "請問，有英文菜單嗎？",
        pinyin: "Qǐngwèn, yǒu yīngwén càidān ma?",
        translation: "Excusez-moi, avez-vous un menu en anglais ?",
      },
      {
        type: "text",
        content:
          "SYSTÈME 3 : CONVENIENCE STORE — Les 7-Eleven et FamilyMart sont partout à Taiwan (il y en a plus de 13 000 sur l'île). On y achète des bentos (便當 biàndāng) frais, des onigiri, des sandwichs, et bien plus. Quand vous achetez de la nourriture chauffable, le caissier vous posera LA question : 要加熱嗎？(yào jiārè ma? — voulez-vous qu'on réchauffe ?). Répondez simplement 好 (hǎo — oui) ou 不用，謝謝 (bú yòng, xiè xiè — non merci). Les convenience stores taiwanais sont un univers en soi : on peut y payer ses factures, retirer de l'argent, imprimer des documents, acheter des billets de concert, et même poster des colis.",
      },
      {
        type: "example",
        content: "Au convenience store",
        chinese: "要加熱嗎？— 好，謝謝。",
        pinyin: "Yào jiārè ma? — Hǎo, xiè xiè.",
        translation: "Voulez-vous réchauffer ? — Oui, merci.",
      },
      {
        type: "text",
        content:
          "SYSTÈME 4 : HOT POT (火鍋 huǒguō) — Le hot pot est LA sortie sociale numéro un des Taiwanais. C'est une fondue chinoise : un bouillon qui mijote au centre de la table, et vous y plongez les ingrédients de votre choix. Première étape : choisir la base de bouillon. Les options classiques : 麻辣 (málà — épicé au poivre du Sichuan), 番茄 (fānqié — tomate), 藥膳 (yàoshàn — herbes médicinales chinoises), 昆布 (kūnbù — algue kombu, léger). Beaucoup de restaurants proposent un pot divisé en deux (鴛鴦鍋 yuānyāng guō — « pot mandarin duck ») pour avoir deux bouillons différents. Ensuite, vous vous servez au buffet d'ingrédients : viandes tranchées fin, légumes, tofu, fruits de mer, nouilles, boulettes. Le hot pot est convivial, interactif, et addictif.",
      },
      {
        type: "example",
        content: "Commander un hot pot",
        chinese: "我們要鴛鴦鍋，一個麻辣，一個番茄。",
        pinyin: "Wǒmen yào yuānyāng guō, yí ge málà, yí ge fānqié.",
        translation:
          "Nous voudrions un pot double, un côté épicé et un côté tomate.",
      },
      {
        type: "tip",
        content:
          "La question universelle que vous entendrez PARTOUT : 內用還是外帶？(nèiyòng háishì wàidài? — sur place ou à emporter ?). Répondez simplement 內用 (nèiyòng — sur place) ou 外帶 (wàidài — à emporter). Pas besoin de phrase complète. C'est la première chose qu'on vous demandera dans n'importe quel établissement à Taiwan.",
      },
    ],
  },
  {
    title: "La cuisine taiwanaise — Un patrimoine national",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "La cuisine taiwanaise n'est pas un simple « sous-genre » de la cuisine chinoise — c'est un univers gastronomique à part entière, forgé par des siècles d'influences autochtones, japonaises, continentales et sud-est asiatiques. La nourriture est au centre de la vie sociale taiwanaise. On ne dit pas « comment vas-tu ? » mais 你吃飯了嗎？(tu as mangé ?). Refuser de la nourriture est presque un affront. Et le prix moyen d'un repas complet dans un petit restaurant local tourne autour de 80-150 NT$ (2,50-4,50€). Voici les plats que vous DEVEZ connaître — et goûter.",
      },
      {
        type: "text",
        content:
          "滷肉飯 (lǔ ròu fàn) — LE plat national. Un bol de riz blanc recouvert de porc émincé braisé dans un mélange de sauce soja, cinq-épices et oignon frit. C'est simple, c'est pas cher (40-60 NT$, environ 1,20-1,80€), et c'est dans CHAQUE restaurant. Il n'existe pas de « meilleur 滷肉飯 » — c'est un débat infini et passionné chez les Taiwanais. Chaque famille, chaque restaurant a sa propre recette. Le Sud le fait souvent plus sucré que le Nord. Certains restaurants ajoutent un œuf braisé (滷蛋 lǔ dàn) ou du tofu braisé (滷豆腐 lǔ dòufu) à côté.",
      },
      {
        type: "example",
        content: "Commander un 滷肉飯",
        chinese: "老闆，一碗滷肉飯，加一個滷蛋。",
        pinyin: "Lǎobǎn, yì wǎn lǔ ròu fàn, jiā yí ge lǔ dàn.",
        translation: "Patron, un bol de riz au porc braisé, avec un œuf braisé.",
      },
      {
        type: "text",
        content:
          "牛肉麵 (niú ròu miàn) — La soupe de nouilles au bœuf. Taiwan est OBSÉDÉ par ce plat. Il y a littéralement un festival annuel du 牛肉麵 à Taipei (台北牛肉麵節) où les restaurants s'affrontent pour le titre du meilleur bol. Le bouillon mijote pendant des heures (parfois des jours) avec des épices, du bœuf tendre et de grosses nouilles épaisses. Les deux grandes catégories : 紅燒 (hóngshāo — bouillon rouge à la sauce soja, plus riche) et 清燉 (qīngdùn — bouillon clair, plus délicat). Un bon bol coûte entre 150-250 NT$ (4,50-7,50€).",
      },
      {
        type: "example",
        content: "Commander des nouilles au bœuf",
        chinese: "我要一碗紅燒牛肉麵，大碗的。",
        pinyin: "Wǒ yào yì wǎn hóngshāo niú ròu miàn, dà wǎn de.",
        translation:
          "Je voudrais un grand bol de soupe de nouilles au bœuf (bouillon rouge).",
      },
      {
        type: "text",
        content:
          "小籠包 (xiǎo lóng bāo) — Les raviolis vapeur au bouillon. 鼎泰豐 (Dǐng Tài Fēng, Din Tai Fung) les a rendus célèbres dans le monde entier depuis son restaurant originel de Taipei. Le secret : le bouillon À L'INTÉRIEUR. On les mange avec du vinaigre noir et des lamelles de gingembre. La technique : percez délicatement la peau avec les baguettes, aspirez le bouillon, puis mangez le ravioli. Attention, c'est BRÛLANT — se brûler avec le bouillon d'un 小籠包 est un rite de passage pour tout étranger à Taiwan.",
      },
      {
        type: "example",
        content: "Commander des xiaolongbao",
        chinese: "我要一籠小籠包，十個的。",
        pinyin: "Wǒ yào yì lóng xiǎo lóng bāo, shí ge de.",
        translation:
          "Je voudrais un panier de xiaolongbao, celui de dix pièces.",
      },
      {
        type: "text",
        content:
          "珍珠奶茶 (zhēn zhū nǎi chá) — Le bubble tea, inventé à Taichung en 1983, fierté nationale absolue. Les chaînes les plus populaires : 50嵐 (Wǔshí Lán), 清心福全 (Qīngxīn Fúquán), CoCo都可. Quand vous commandez, on vous pose DEUX questions essentielles. Niveau de sucre : 全糖 (quán táng — 100%), 半糖 (bàn táng — 50%), 微糖 (wēi táng — 30%), 無糖 (wú táng — 0%). Niveau de glace : 正常冰 (zhèngcháng bīng — normal), 少冰 (shǎo bīng — peu de glace), 去冰 (qù bīng — sans glace). Les Taiwanais commandent souvent 半糖少冰 ou 微糖去冰.",
      },
      {
        type: "example",
        content: "Commander un bubble tea",
        chinese: "我要一杯珍珠奶茶，半糖少冰。",
        pinyin: "Wǒ yào yì bēi zhēn zhū nǎi chá, bàn táng shǎo bīng.",
        translation:
          "Je voudrais un bubble tea, 50% de sucre et peu de glace.",
      },
      {
        type: "text",
        content:
          "蚵仔煎 (ô-á-jiān) — L'omelette aux huîtres. Attention : le nom se prononce en TAIWANAIS (hokkien), pas en mandarin. C'est le snack de marché de nuit emblématique : des petites huîtres mélangées à une pâte de patate douce, cuites sur une plaque avec un œuf, servies avec une sauce sucrée rouge-orange. La texture est unique — moelleuse et légèrement gluante. C'est un goût auquel il faut s'habituer, mais une fois adopté, c'est addictif.",
      },
      {
        type: "text",
        content:
          "臭豆腐 (chòu dòu fu) — Le tofu puant. Son odeur est légendaire — vous le sentirez à 50 mètres sur un marché de nuit. C'est du tofu fermenté, soit frit (炸臭豆腐 zhà chòu dòu fu, le plus courant, servi avec du chou mariné), soit cuit dans un bouillon (臭豆腐湯 chòu dòu fu tāng), soit grillé. L'odeur est horrible, le goût est... un rite de passage. Si vous survivez à votre première bouchée et que vous aimez, vous êtes adopté par Taiwan. Conseil : commencez par la version frite, elle est la plus accessible.",
      },
      {
        type: "text",
        content:
          "鳳梨酥 (fèng lí sū) — Le gâteau à l'ananas. C'est LE souvenir que tout le monde ramène de Taiwan. Un petit gâteau sablé fourré d'une pâte d'ananas (ou de mélange ananas-melon d'hiver pour les versions traditionnelles). La marque 佳德 (Jiā Dé, Chia Te) est la plus célèbre : il y a souvent des files d'attente de 30 minutes devant leur boutique à Taipei. Autres marques réputées : 微熱山丘 (Wēirè Shānqiū, Sunny Hills) pour le 100% ananas, et 小潘 (Xiǎo Pān) pour le rapport qualité-prix.",
      },
      {
        type: "tip",
        content:
          "Le pourboire N'EXISTE PAS à Taiwan. Le service est inclus et laisser un pourboire peut même être perçu comme condescendant ou déroutant pour le personnel. Si vous voulez montrer votre satisfaction, un simple 很好吃！(hěn hǎochī — c'est délicieux !) avec un sourire fera bien plus plaisir qu'un billet supplémentaire.",
      },
    ],
  },
  {
    title: "Les marchés de nuit — Guide complet",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "Les marchés de nuit (夜市 yèshì) sont l'institution culturelle la plus emblématique de Taiwan. Ce ne sont pas de simples marchés alimentaires — ce sont des lieux de vie sociale, de divertissement, de shopping, et de gastronomie populaire. Ils ouvrent généralement vers 17h-18h et ferment vers minuit ou 1h du matin. Chaque ville, chaque quartier a le sien. À Taipei seul, il y en a plus d'une vingtaine. Voici les cinq plus célèbres — et ce qu'il faut y manger.",
      },
      {
        type: "text",
        content:
          "士林夜市 (Shìlín Yèshì — Shilin Night Market) — Le plus grand et le plus touristique de Taipei. Impossible de le rater, c'est celui que tout le monde mentionne en premier. Au sous-sol : un food court immense avec des dizaines de stands. Les spécialités incontournables : 大雞排 (dà jī pái — poulet frit géant, littéralement plus grand que votre visage), 蚵仔煎 (omelette aux huîtres), et les fruits frais coupés. Point négatif : les prix sont parfois gonflés pour les touristes et la foule peut être étouffante le week-end. Conseil : allez-y en semaine si possible.",
      },
      {
        type: "example",
        content: "Demander le prix au marché de nuit",
        chinese: "老闆，大雞排一份多少錢？",
        pinyin: "Lǎobǎn, dà jī pái yí fèn duōshǎo qián?",
        translation: "Patron, combien coûte une portion de poulet frit géant ?",
      },
      {
        type: "text",
        content:
          "饒河夜市 (Ráohé Yèshì — Raohe Night Market) — Plus petit, plus authentique, plus gérable. C'est une longue rue rectiligne, donc impossible de se perdre. L'entrée est marquée par un magnifique temple (松山慈祐宮). LA spécialité à ne pas manquer : 胡椒餅 (hújiāo bǐng — pain au poivre noir et porc), le stand juste à l'entrée a TOUJOURS une file d'attente de 20 minutes — ça vaut le coup. Aussi réputé pour ses 藥燉排骨 (yào dùn páigǔ — côtes de porc au bouillon d'herbes médicinales).",
      },
      {
        type: "text",
        content:
          "寧夏夜市 (Níngxià Yèshì — Ningxia Night Market) — Le préféré des Taiwanais pour la qualité de la nourriture. Plus petit et plus calme que Shilin, c'est ici que les locaux viennent manger. Spécialités : 蚵仔煎 (la meilleure de Taipei selon beaucoup), 滷肉飯, et les soupes de riz (粥 zhōu). L'ambiance est plus détendue, les prix sont honnêtes, et la qualité est constante. Si vous ne devez aller qu'à un seul marché de nuit, beaucoup de Taiwanais vous conseilleront celui-ci.",
      },
      {
        type: "text",
        content:
          "通化夜市 (Tōnghuà Yèshì — Tonghua Night Market, aussi appelé 臨江街夜市 Línjiāng jiē) — Situé près de Taipei 101, c'est le marché de nuit « local » du quartier de Daan. Pas touristique du tout. Bon rapport qualité-prix. Idéal si vous habitez dans le coin et que vous voulez manger vite et bien sans la foule.",
      },
      {
        type: "text",
        content:
          "逢甲夜市 (Féngjiǎ Yèshì — Fengjia Night Market) — À Taichung, c'est le plus grand marché de nuit de tout Taiwan. Situé à côté de l'université Feng Chia, il est connu pour ses innovations culinaires folles : c'est ici que naissent les nouvelles tendances de street food. Crêpes au fromage, frites en spirale, glaces aux formes impossibles — Fengjia est le laboratoire culinaire de Taiwan.",
      },
      {
        type: "text",
        content:
          "Les règles non-écrites des marchés de nuit — 1) Faites la queue. Les Taiwanais font la queue pour tout, et resquiller est un tabou social absolu. Si un stand a une longue file d'attente, c'est bon signe — ça signifie que c'est bon. 2) Préparez votre monnaie. La plupart des stands n'acceptent que le cash, et les transactions doivent être rapides. 3) Ne bloquez pas le passage. Les allées sont étroites et bondées — mangez en marchant ou trouvez un coin pour vous poser. 4) Essayez ce que vous ne connaissez pas. C'est le meilleur endroit pour être aventureux — les portions sont petites et pas chères. 5) Amenez votre sac réutilisable — les sacs en plastique sont payants à Taiwan depuis 2023.",
      },
      {
        type: "example",
        content: "Commander au marché de nuit",
        chinese: "我要兩份，謝謝。不要辣。",
        pinyin: "Wǒ yào liǎng fèn, xiè xiè. Bú yào là.",
        translation: "J'en voudrais deux portions, merci. Pas épicé.",
      },
      {
        type: "tip",
        content:
          "GARDEZ VOS REÇUS. À Taiwan, les reçus de caisse (統一發票 tǒngyī fāpiào) participent à une loterie nationale bimestrielle. Le gros lot : 10 millions NT$ (~280 000€). Les Taiwanais vérifient religieusement leurs numéros tous les deux mois. De nombreuses apps (comme 發票存摺) permettent de scanner et vérifier automatiquement. Même les petits reçus de 50 NT$ peuvent gagner le jackpot.",
      },
    ],
  },
  {
    title: "Allergies, régimes et végétarisme",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Taiwan est un PARADIS pour les végétariens — et c'est une surprise pour beaucoup d'Occidentaux. Le végétarisme bouddhiste (素食 sùshí) est profondément ancré dans la culture taiwanaise. Environ 13% de la population est végétarienne, soit l'un des taux les plus élevés au monde. Résultat : il y a des restaurants 素食 PARTOUT. Chaque quartier a le sien, et même les convenience stores proposent des bentos végétariens marqués d'un symbole vert. Les buffets végétariens (素食自助餐 sùshí zìzhù cān) sont particulièrement populaires — vous vous servez au poids, et c'est délicieux et pas cher.",
      },
      {
        type: "text",
        content:
          "MAIS attention : le végétarisme bouddhiste est plus strict que le végétarisme occidental. Il exclut évidemment toute viande, poisson et fruits de mer. Mais il exclut AUSSI les « cinq pungents » (五辛 wǔ xīn) : l'ail (蒜 suàn), l'oignon (洋蔥 yángcōng), le poireau (韭菜 jiǔcài), la ciboulette (蔥 cōng), et l'échalote. Pourquoi ? Dans la tradition bouddhiste, ces aliments sont considérés comme stimulant les passions et perturbant la méditation. Si vous dites simplement 素食, on vous servira sans viande NI ail NI oignon. Si vous êtes végétarien occidental et que vous voulez de l'ail, précisez 我吃蛋奶素但可以吃蔥蒜 (wǒ chī dàn nǎi sù dàn kěyǐ chī cōng suàn — je suis lacto-ovo-végétarien mais je mange oignon et ail).",
      },
      {
        type: "example",
        content: "Dire qu'on est végétarien",
        chinese: "我吃素。請問有素食的菜嗎？",
        pinyin: "Wǒ chī sù. Qǐngwèn yǒu sùshí de cài ma?",
        translation:
          "Je suis végétarien. Avez-vous des plats végétariens ?",
      },
      {
        type: "text",
        content:
          "Les différents niveaux de végétarisme à Taiwan sont officiellement classifiés par le gouvernement. 全素 (quán sù) ou 純素 (chún sù) : végétalien strict, aucun produit animal, pas de cinq pungents. 蛋素 (dàn sù) : avec œufs. 奶素 (nǎi sù) : avec produits laitiers. 蛋奶素 (dàn nǎi sù) : lacto-ovo-végétarien. 鍋邊素 (guō biān sù) : cuit séparément mais dans la même cuisine que la viande. Ces classifications sont légalement obligatoires sur les emballages alimentaires à Taiwan — cherchez le symbole et le texte correspondant.",
      },
      {
        type: "warning",
        content:
          "Les allergènes les plus courants dans la cuisine taiwanaise : cacahuètes (花生 huāshēng) — dans BEAUCOUP de plats et sauces, souvent cachées dans les sauces satay, les garnitures de nouilles et les desserts. Sésame (芝麻 zhīma) — huile et graines partout. Fruits de mer (海鮮 hǎixiān) — les crevettes séchées sont un condiment très courant, même dans des plats qui ne semblent pas contenir de fruits de mer. Soja (黃豆 huángdòu) — la sauce soja est omniprésente. Gluten (麩質 fúzhì) — difficile à éviter car la sauce soja contient du blé. Apprenez 我對...過敏 (wǒ duì...guòmǐn — je suis allergique à...) — cette phrase peut vous sauver la vie.",
      },
      {
        type: "example",
        content: "Signaler une allergie aux cacahuètes",
        chinese: "我對花生過敏，這個有花生嗎？",
        pinyin: "Wǒ duì huāshēng guòmǐn, zhège yǒu huāshēng ma?",
        translation:
          "Je suis allergique aux cacahuètes, est-ce qu'il y a des cacahuètes dedans ?",
      },
      {
        type: "example",
        content: "Signaler une allergie aux fruits de mer",
        chinese: "我對海鮮過敏，請問這道菜有海鮮嗎？",
        pinyin: "Wǒ duì hǎixiān guòmǐn, qǐngwèn zhè dào cài yǒu hǎixiān ma?",
        translation:
          "Je suis allergique aux fruits de mer, est-ce que ce plat contient des fruits de mer ?",
      },
      {
        type: "text",
        content:
          "Pour les intolérances alimentaires moins sévères, voici les phrases utiles : 我不能吃辣 (wǒ bù néng chī là — je ne peux pas manger épicé). 我不吃牛肉 (wǒ bù chī niúròu — je ne mange pas de bœuf — une restriction courante chez certains bouddhistes et taoïstes taiwanais, donc bien comprise). 不要放味精 (bú yào fàng wèijīng — ne mettez pas de glutamate — demande commune et respectée dans la plupart des restaurants). 我不能喝酒 (wǒ bù néng hē jiǔ — je ne peux pas boire d'alcool).",
      },
      {
        type: "example",
        content: "Demander un plat sans épice",
        chinese: "這個辣嗎？我不能吃辣的。",
        pinyin: "Zhè ge là ma? Wǒ bù néng chī là de.",
        translation: "Est-ce que c'est épicé ? Je ne peux pas manger épicé.",
      },
      {
        type: "tip",
        content:
          "L'eau du robinet n'est PAS potable à Taiwan. Ne buvez jamais l'eau du robinet directement. Les restaurants fournissent généralement de l'eau bouillie (開水 kāishuǐ) ou du thé gratuitement. Dans la rue, les fontaines d'eau potable (飲水機 yǐnshuǐ jī) sont courantes dans les parcs, les stations de MRT et les bâtiments publics — elles distribuent de l'eau filtrée et chauffée. Apportez toujours une gourde réutilisable.",
      },
    ],
  },
];

const restaurantLesson: Lesson = {
  id: "lesson-03",
  slug: "restaurant",
  title: "Au restaurant",
  titleZh: "在餐廳",
  description:
    "Apprenez à commander, lire un menu et payer dans les restaurants et marchés de nuit taiwanais.",
  icon: "🍜",
  category: "daily",
  order: 3,
  sections,
  vocabulary: [
    {
      character: "菜單",
      pinyin: "càidān",
      zhuyin: "ㄘㄞˋ ㄉㄢ",
      french: "Menu",
      english: "Menu",
      example: {
        sentence: "請給我菜單。",
        pinyin: "Qǐng gěi wǒ càidān.",
        translation: "Le menu, s'il vous plaît.",
      },
    },
    {
      character: "水",
      pinyin: "shuǐ",
      zhuyin: "ㄕㄨㄟˇ",
      french: "Eau",
      english: "Water",
    },
    {
      character: "飯",
      pinyin: "fàn",
      zhuyin: "ㄈㄢˋ",
      french: "Riz (cuit)",
      english: "Rice (cooked)",
    },
    {
      character: "麵",
      pinyin: "miàn",
      zhuyin: "ㄇㄧㄢˋ",
      french: "Nouilles",
      english: "Noodles",
    },
    {
      character: "雞肉",
      pinyin: "jīròu",
      zhuyin: "ㄐㄧ ㄖㄡˋ",
      french: "Poulet",
      english: "Chicken",
    },
    {
      character: "豬肉",
      pinyin: "zhūròu",
      zhuyin: "ㄓㄨ ㄖㄡˋ",
      french: "Porc",
      english: "Pork",
    },
    {
      character: "牛肉",
      pinyin: "niúròu",
      zhuyin: "ㄋㄧㄡˊ ㄖㄡˋ",
      french: "Boeuf",
      english: "Beef",
    },
    {
      character: "素食",
      pinyin: "sùshí",
      zhuyin: "ㄙㄨˋ ㄕˊ",
      french: "Végétarien",
      english: "Vegetarian",
      example: {
        sentence: "我吃素，有素食嗎？",
        pinyin: "Wǒ chī sù, yǒu sùshí ma?",
        translation: "Je suis végétarien, avez-vous des plats végétariens ?",
      },
    },
    {
      character: "買單",
      pinyin: "mǎidān",
      zhuyin: "ㄇㄞˇ ㄉㄢ",
      french: "L'addition",
      english: "The bill",
    },
    {
      character: "內用",
      pinyin: "nèiyòng",
      zhuyin: "ㄋㄟˋ ㄩㄥˋ",
      french: "Manger sur place",
      english: "Dine in",
    },
    {
      character: "外帶",
      pinyin: "wàidài",
      zhuyin: "ㄨㄞˋ ㄉㄞˋ",
      french: "À emporter",
      english: "Takeout",
      example: {
        sentence: "內用還是外帶？",
        pinyin: "Nèiyòng háishì wàidài?",
        translation: "Sur place ou à emporter ?",
      },
    },
    {
      character: "好吃",
      pinyin: "hǎochī",
      zhuyin: "ㄏㄠˇ ㄔ",
      french: "Délicieux",
      english: "Delicious",
    },
    {
      character: "辣",
      pinyin: "là",
      zhuyin: "ㄌㄚˋ",
      french: "Épicé / Piquant",
      english: "Spicy",
    },
    {
      character: "不要",
      pinyin: "bú yào",
      zhuyin: "ㄅㄨˊ ㄧㄠˋ",
      french: "Ne pas vouloir / Sans",
      english: "Don't want / Without",
    },
    {
      character: "啤酒",
      pinyin: "píjiǔ",
      zhuyin: "ㄆㄧˊ ㄐㄧㄡˇ",
      french: "Bière",
      english: "Beer",
    },
  ],
  phrases: [
    {
      chinese: "我要一碗牛肉麵。",
      pinyin: "Wǒ yào yì wǎn niúròu miàn.",
      zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄧˋ ㄨㄢˇ ㄋㄧㄡˊ ㄖㄡˋ ㄇㄧㄢˋ",
      french: "Je voudrais un bol de nouilles au boeuf.",
      english: "I'd like a bowl of beef noodles.",
      context: "牛肉麵 (niúròu miàn) est LE plat emblématique de Taiwan.",
    },
    {
      chinese: "請問，有素食的嗎？",
      pinyin: "Qǐngwèn, yǒu sùshí de ma?",
      zhuyin: "ㄑㄧㄥˇ ㄨㄣˋ ㄧㄡˇ ㄙㄨˋ ㄕˊ ㄉㄜ˙ ㄇㄚ˙",
      french: "Avez-vous des plats végétariens ?",
      english: "Do you have vegetarian options?",
      context:
        "Taiwan est très accommodant pour les végétariens grâce à la culture bouddhiste.",
    },
    {
      chinese: "不要辣，謝謝。",
      pinyin: "Bú yào là, xiè xiè.",
      zhuyin: "ㄅㄨˊ ㄧㄠˋ ㄌㄚˋ ㄒㄧㄝˋ ㄒㄧㄝˋ",
      french: "Pas épicé, merci.",
      english: "Not spicy, thank you.",
    },
    {
      chinese: "買單，謝謝。",
      pinyin: "Mǎidān, xiè xiè.",
      zhuyin: "ㄇㄞˇ ㄉㄢ ㄒㄧㄝˋ ㄒㄧㄝˋ",
      french: "L'addition, s'il vous plaît.",
      english: "The bill, please.",
    },
    {
      chinese: "很好吃！",
      pinyin: "Hěn hǎochī!",
      zhuyin: "ㄏㄣˇ ㄏㄠˇ ㄔ",
      french: "C'est délicieux !",
      english: "It's delicious!",
      context: "Complimenter la nourriture est toujours apprécié !",
    },
    {
      chinese: "我要外帶。",
      pinyin: "Wǒ yào wàidài.",
      zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄨㄞˋ ㄉㄞˋ",
      french: "Je voudrais à emporter.",
      english: "I'd like it to go.",
    },
    {
      chinese: "再來一杯，謝謝。",
      pinyin: "Zài lái yì bēi, xiè xiè.",
      zhuyin: "ㄗㄞˋ ㄌㄞˊ ㄧˋ ㄅㄟ ㄒㄧㄝˋ ㄒㄧㄝˋ",
      french: "Encore un verre, merci.",
      english: "One more glass, please.",
    },
    {
      chinese: "可以用信用卡嗎？",
      pinyin: "Kěyǐ yòng xìnyòngkǎ ma?",
      zhuyin: "ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄒㄧㄣˋ ㄩㄥˋ ㄎㄚˇ ㄇㄚ˙",
      french: "Puis-je payer par carte de crédit ?",
      english: "Can I pay by credit card?",
      context:
        "Beaucoup de petits restos et stands de nuit n'acceptent que le cash.",
    },
  ],
  culturalNotes: [
    "Les marchés de nuit (夜市 yèshì) sont une institution à Taiwan. Les plus célèbres sont Shilin (士林夜市), Raohe (饒河夜市) et Ningxia (寧夏夜市) à Taipei.",
    "À Taiwan, on ne laisse PAS de pourboire. Le service est inclus et laisser un pourboire peut même être perçu comme impoli.",
    "La question 內用還是外帶？(Sur place ou à emporter ?) est la première chose qu'on vous demandera dans la plupart des restaurants et stands.",
    "Le 滷肉飯 (lǔròu fàn, riz au porc braisé) est considéré comme le plat national taiwanais. Il coûte souvent moins de 50 NT$ (environ 1,50 EUR).",
    "L'eau du robinet n'est pas potable à Taiwan. Les restaurants fournissent généralement de l'eau bouillie ou du thé gratuitement.",
  ],
  quiz: [
    {
      id: "restaurant-q1",
      type: "character-to-french",
      question: "好吃",
      correctAnswer: "Délicieux",
      options: ["Épicé", "Délicieux", "Cher", "Sucré"],
    },
    {
      id: "restaurant-q2",
      type: "french-to-character",
      question: "Nouilles",
      correctAnswer: "麵",
      options: ["飯", "麵", "肉", "菜"],
    },
    {
      id: "restaurant-q3",
      type: "pinyin-to-character",
      question: "sùshí",
      correctAnswer: "素食",
      options: ["素食", "食物", "美食", "飲食"],
    },
    {
      id: "restaurant-q4",
      type: "character-to-french",
      question: "外帶",
      correctAnswer: "À emporter",
      options: ["Sur place", "À emporter", "Livraison", "Réservation"],
    },
    {
      id: "restaurant-q5",
      type: "french-to-character",
      question: "L'addition",
      correctAnswer: "買單",
      options: ["菜單", "買單", "點單", "訂單"],
    },
    {
      id: "restaurant-q6",
      type: "character-to-french",
      question: "辣",
      correctAnswer: "Épicé / Piquant",
      options: ["Sucré", "Salé", "Épicé / Piquant", "Amer"],
    },
  ],
};

export default restaurantLesson;
