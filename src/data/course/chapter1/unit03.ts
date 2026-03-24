import type { CourseUnit } from "@/types/course";

export const unit03: CourseUnit = {
  id: "unit-03",
  number: 3,
  title: "Les tons — Sandhi et tone pairs",
  titleZh: "聲調——變調與聲調組合",
  chapter: 1,
  description:
    "Pratique intensive des tone pairs et des règles de sandhi tonal. En mandarin, les tons isolés sont faciles — le vrai défi, c'est de les enchaîner.",
  icon: "🔊",

  sections: [
    {
      title: "Les 20 combinaisons de tone pairs",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "En mandarin, la plupart des mots ont deux syllabes ou plus. Prononcer un ton isolé est relativement simple, mais les enchaîner dans un mot de deux syllabes change la donne. Votre bouche et votre gorge doivent passer d'une hauteur à une autre de manière fluide. C'est pourquoi les « tone pairs » (combinaisons de deux tons) sont l'unité fondamentale de la pratique des tons.",
        },
        {
          type: "text",
          content:
            "Il y a 4 tons × 5 possibilités (tons 1-4 + neutre) = 20 combinaisons. Nous allons passer en revue les 16 principales (sans le ton neutre) avec des mots réels. Conseil : ne les travaillez pas toutes d'un coup. Prenez 2-3 combinaisons par jour pendant une semaine.",
        },
        {
          type: "text",
          content:
            "Ton 1 + Ton 1 : La voix reste haute et plate sur les deux syllabes. C'est la combinaison la plus facile — deux notes identiques.",
        },
        {
          type: "example",
          chinese: "今天 / 飛機 / 星期",
          pinyin: "jīntiān / fēijī / xīngqī",
          translation: "aujourd'hui / avion / semaine",
          content: "Ton 1+1 : deux notes hautes et plates enchaînées.",
        },
        {
          type: "text",
          content:
            "Ton 1 + Ton 2 : La voix commence haute et plate, puis monte sur la deuxième syllabe. Imaginez un plongeoir : vous êtes en haut, puis vous remontez encore plus haut.",
        },
        {
          type: "example",
          chinese: "中國 / 咖啡 / 生活",
          pinyin: "zhōngguó / kāfēi / shēnghuó",
          translation: "Chine / café / vie",
          content: "Ton 1+2 : haut plat puis montée.",
        },
        {
          type: "text",
          content:
            "Ton 1 + Ton 3 : La voix part haute, puis descend et remonte sur la deuxième syllabe. Le contraste est marqué.",
        },
        {
          type: "example",
          chinese: "工廠 / 開始 / 香港",
          pinyin: "gōngchǎng / kāishǐ / xiānggǎng",
          translation: "usine / commencer / Hong Kong",
          content: "Ton 1+3 : haut plat puis descente-remontée.",
        },
        {
          type: "text",
          content:
            "Ton 1 + Ton 4 : La voix commence haute et plate, puis chute brusquement. C'est un enchaînement très courant et naturel.",
        },
        {
          type: "example",
          chinese: "天氣 / 工作 / 開會",
          pinyin: "tiānqì / gōngzuò / kāihuì",
          translation: "météo / travail / réunion",
          content: "Ton 1+4 : haut plat puis chute nette.",
        },
        {
          type: "text",
          content:
            "Ton 2 + Ton 1 : La voix monte d'abord, puis se stabilise en haut. Comme poser une question puis affirmer.",
        },
        {
          type: "example",
          chinese: "台灣 / 明天 / 國家",
          pinyin: "táiwān / míngtiān / guójiā",
          translation: "Taiwan / demain / pays",
          content: "Ton 2+1 : montée puis haut plat.",
        },
        {
          type: "text",
          content:
            "Ton 2 + Ton 2 : Deux montées successives. C'est un peu comme poser deux questions. La voix ne redescend pas entre les deux.",
        },
        {
          type: "example",
          chinese: "人民 / 時間 / 銀行",
          pinyin: "rénmín / shíjiān / yínháng",
          translation: "peuple / temps / banque",
          content: "Ton 2+2 : deux montées successives.",
        },
        {
          type: "text",
          content:
            "Ton 2 + Ton 3 : La voix monte puis plonge et remonte. C'est une combinaison qui demande de l'énergie vocale.",
        },
        {
          type: "example",
          chinese: "蘋果 / 遊泳 / 男友",
          pinyin: "píngguǒ / yóuyǒng / nányǒu",
          translation: "pomme / nager / petit ami",
          content: "Ton 2+3 : montée puis descente-remontée.",
        },
        {
          type: "text",
          content:
            "Ton 2 + Ton 4 : La voix monte puis chute immédiatement. C'est un enchaînement dynamique et contrasté.",
        },
        {
          type: "example",
          chinese: "學校 / 牛肉 / 足夠",
          pinyin: "xuéxiào / niúròu / zúgòu",
          translation: "école / boeuf / suffisant",
          content: "Ton 2+4 : montée puis chute.",
        },
        {
          type: "text",
          content:
            "Ton 3 + Ton 1 : Attention, le ton 3 ici est un « half third » — la voix descend mais ne remonte pas vraiment avant d'enchaîner sur la note haute du ton 1. C'est la prononciation naturelle à Taiwan.",
        },
        {
          type: "example",
          chinese: "北京 / 手機 / 美金",
          pinyin: "běijīng / shǒujī / měijīn",
          translation: "Pékin / téléphone / dollar US",
          content: "Ton 3+1 : demi-troisième ton puis haut plat.",
        },
        {
          type: "text",
          content:
            "Ton 3 + Ton 2 : Même principe — le ton 3 est tronqué (half third), puis la voix monte.",
        },
        {
          type: "example",
          chinese: "法國 / 旅行 / 語言",
          pinyin: "fǎguó / lǚxíng / yǔyán",
          translation: "France / voyage / langue",
          content: "Ton 3+2 : demi-troisième ton puis montée.",
        },
        {
          type: "text",
          content:
            "Ton 3 + Ton 3 : C'est la fameuse règle du sandhi ! Le premier ton 3 se prononce ton 2. On traite cette combinaison en détail dans la section suivante.",
        },
        {
          type: "example",
          chinese: "你好 / 可以 / 洗澡",
          pinyin: "nǐhǎo / kěyǐ / xǐzǎo",
          translation: "bonjour / pouvoir / se doucher",
          content:
            "Ton 3+3 (sandhi) : prononcé comme ton 2+3 → ní hǎo, ké yǐ, xí zǎo.",
        },
        {
          type: "text",
          content:
            "Ton 3 + Ton 4 : Demi-troisième ton puis chute. Le contraste est fort entre la descente du 3 et la chute du 4.",
        },
        {
          type: "example",
          chinese: "請問 / 小姐 / 美麗",
          pinyin: "qǐngwèn / xiǎojiě / měilì",
          translation: "excusez-moi / mademoiselle / beau",
          content: "Ton 3+4 : demi-troisième ton puis chute brusque.",
        },
        {
          type: "text",
          content:
            "Ton 4 + Ton 1 : La voix chute puis remonte brusquement en haut pour se stabiliser. C'est un enchaînement rapide.",
        },
        {
          type: "example",
          chinese: "上班 / 客廳 / 電梯",
          pinyin: "shàngbān / kètīng / diàntī",
          translation: "aller au travail / salon / ascenseur",
          content: "Ton 4+1 : chute puis haut plat.",
        },
        {
          type: "text",
          content:
            "Ton 4 + Ton 2 : La voix chute puis monte. C'est comme dire « Non ? » — une négation suivie d'une question.",
        },
        {
          type: "example",
          chinese: "大學 / 問題 / 地球",
          pinyin: "dàxué / wèntí / dìqiú",
          translation: "université / question / terre (planète)",
          content: "Ton 4+2 : chute puis montée.",
        },
        {
          type: "text",
          content:
            "Ton 4 + Ton 3 : La voix chute puis descend encore et remonte. C'est une combinaison qui sonne « fatiguée » ou « résignée ».",
        },
        {
          type: "example",
          chinese: "日本 / 下雨 / 漢語",
          pinyin: "rìběn / xiàyǔ / hànyǔ",
          translation: "Japon / pleuvoir / langue chinoise",
          content: "Ton 4+3 : chute puis descente-remontée.",
        },
        {
          type: "text",
          content:
            "Ton 4 + Ton 4 : Deux chutes successives. Ça sonne très direct, presque brusque. Beaucoup de mots courants ont cette combinaison.",
        },
        {
          type: "example",
          chinese: "再見 / 電視 / 記住",
          pinyin: "zàijiàn / diànshì / jìzhù",
          translation: "au revoir / télévision / retenir",
          content: "Ton 4+4 : deux chutes successives, son direct et net.",
        },
        {
          type: "tip",
          content:
            "Méthode de pratique : choisissez 3 combinaisons par jour. Pour chacune, prenez les 2-3 mots exemples ci-dessus et répétez-les 10 fois chacun. En une semaine, vous aurez couvert les 16 combinaisons principales. La deuxième semaine, mélangez-les aléatoirement.",
        },
      ],
    },
    {
      title: "Le sandhi tonal en détail",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le sandhi tonal est un phénomène phonétique où un ton change en fonction du ton qui le suit. Ce n'est pas une règle qu'on « décide » d'appliquer — c'est un ajustement naturel que font tous les locuteurs natifs sans y penser. Votre objectif : comprendre les règles pour que ça devienne automatique.",
        },
        {
          type: "text",
          content:
            "Règle 1 — Ton 3 + Ton 3 : Le premier ton 3 se prononce ton 2. Pourquoi ? Parce que deux baisses de voix consécutives sont physiquement difficiles et peu naturelles pour les cordes vocales. Le cerveau simplifie automatiquement en transformant la première descente-remontée en simple montée.",
        },
        {
          type: "example",
          chinese: "你好",
          pinyin: "nǐ hǎo → prononcé ní hǎo",
          translation: "Bonjour — Le premier ton 3 devient ton 2.",
          content: "Le sandhi 3+3 le plus connu. Le pinyin écrit garde nǐ, mais on prononce ní.",
        },
        {
          type: "example",
          chinese: "可以",
          pinyin: "kě yǐ → prononcé ké yǐ",
          translation: "Pouvoir, d'accord",
          content: "Autre cas de sandhi 3+3. Le premier 可 monte comme un ton 2.",
        },
        {
          type: "example",
          chinese: "總統",
          pinyin: "zǒng tǒng → prononcé zóng tǒng",
          translation: "Président — très courant dans les nouvelles à Taiwan.",
          content: "Le sandhi s'applique de la même façon dans tous les registres.",
        },
        {
          type: "text",
          content:
            "Cas spécial : trois tons 3 (ou plus) consécutifs. Quand trois syllabes de ton 3 se suivent, le découpage dépend de la structure grammaticale. Par exemple, 我也想買 (wǒ yě xiǎng mǎi) se découpe en [我也] + [想買]. Le premier groupe 我也 : 我 → ton 2 (sandhi). Le deuxième groupe 想買 : pas de sandhi car 買 est ton 3 et 想 est ton 3, donc 想 → ton 2. Résultat : wó yě / xióng mǎi. En pratique, la règle s'applique par paires de gauche à droite selon les groupes de sens.",
        },
        {
          type: "example",
          chinese: "我也好",
          pinyin: "wǒ yě hǎo → prononcé wó yé hǎo",
          translation: "Moi aussi ça va — Trois tons 3 : les deux premiers passent en ton 2.",
          content:
            "Avec trois tons 3, le découpage est [我也] + [好]. Les deux premiers deviennent ton 2.",
        },
        {
          type: "text",
          content:
            "Règle 2 — 不 (bù) : Le caractère 不 est normalement au ton 4 (bù). Mais quand il est suivi d'un autre ton 4, il se prononce au ton 2 (bú). La raison est la même : deux chutes consécutives sont difficiles à articuler rapidement.",
        },
        {
          type: "example",
          chinese: "不是 / 不要 / 不對",
          pinyin: "búshì / búyào / búduì",
          translation: "ne pas être / ne pas vouloir / incorrect",
          content:
            "不 + ton 4 → 不 se prononce au ton 2. Ces trois mots sont parmi les plus fréquents du mandarin.",
        },
        {
          type: "example",
          chinese: "不好 / 不能 / 不多",
          pinyin: "bùhǎo / bùnéng / bùduō",
          translation: "pas bon / ne pas pouvoir / pas beaucoup",
          content:
            "不 + tons 1, 2 ou 3 → 不 reste au ton 4 (bù). Pas de changement.",
        },
        {
          type: "text",
          content:
            "Règle 3 — 一 (yī) : C'est le caractère qui change le plus. Seul ou en comptant (一、二、三), il se prononce yī (ton 1). Devant un ton 4, il se prononce yí (ton 2). Devant un ton 1, 2 ou 3, il se prononce yì (ton 4).",
        },
        {
          type: "example",
          chinese: "一個",
          pinyin: "yī gè → prononcé yí gè",
          translation: "un (+ classificateur)",
          content: "一 + ton 4 (個) → 一 se prononce au ton 2.",
        },
        {
          type: "example",
          chinese: "一杯 / 一年 / 一起",
          pinyin: "yì bēi / yì nián / yì qǐ",
          translation: "un verre / un an / ensemble",
          content:
            "一 + ton 1, 2 ou 3 → 一 se prononce au ton 4.",
        },
        {
          type: "example",
          chinese: "一二三四五",
          pinyin: "yī èr sān sì wǔ",
          translation: "un deux trois quatre cinq",
          content: "一 en comptant → garde son ton 1 original.",
        },
        {
          type: "warning",
          content:
            "Ne cherchez pas à « penser » ces changements de ton en parlant. Les règles de sandhi doivent devenir des réflexes musculaires, pas des calculs conscients. Quand vous entendez un natif dire 不是, votre cerveau enregistre automatiquement bú shì. Écoutez beaucoup, répétez beaucoup, et le sandhi viendra naturellement. Le jour où vous l'appliquerez sans y penser, c'est que vous avez atteint le bon niveau.",
        },
      ],
    },
    {
      title: "Pourquoi les tons sont si importants à Taiwan",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "La bonne nouvelle : les Taiwanais sont extrêmement patients avec les apprenants étrangers et ils devinent beaucoup par le contexte. Si vous dites mǎi (acheter) au lieu de mài (vendre), dans un magasin, le contexte rend l'erreur évidente. Cependant, certaines confusions de tons créent de vrais malentendus — ou des situations hilarantes.",
        },
        {
          type: "example",
          chinese: "問 vs 吻",
          pinyin: "wèn vs wěn",
          translation: "demander vs embrasser",
          content:
            "Vous vouliez dire « Je veux vous demander quelque chose » (問) mais avec le mauvais ton, ça devient « Je veux vous embrasser » (吻). Un classique des cours de mandarin.",
        },
        {
          type: "example",
          chinese: "睡覺 vs 水餃",
          pinyin: "shuìjiào vs shuǐjiǎo",
          translation: "dormir vs raviolis (bouillis)",
          content:
            "« Tu veux des raviolis ? » ou « Tu veux dormir ? » — La confusion est fréquente chez les débutants et fait rire tout le monde au restaurant.",
        },
        {
          type: "example",
          chinese: "杯子 vs 被子",
          pinyin: "bēizi vs bèizi",
          translation: "verre / tasse vs couverture",
          content:
            "Au magasin : « Je cherche une couverture » (被子) au lieu de « Je cherche un verre » (杯子). Le vendeur vous emmène au mauvais rayon.",
        },
        {
          type: "text",
          content:
            "Le ton 3 taiwanais est souvent un « half third » (半三聲) : la voix descend bas mais ne remonte pas vraiment. C'est une prononciation plus détendue que le ton 3 « complet » enseigné dans les manuels, où la voix fait un V complet (descente puis remontée). À Taiwan, le ton 3 sonne plus comme un ton bas plat. C'est parfaitement correct et c'est même la norme conversationnelle.",
        },
        {
          type: "text",
          content:
            "Quelques différences de prononciation Taiwan vs Chine continentale qui touchent les tons : à Taiwan, certains mots ont un ton différent de la norme du dictionnaire. Par exemple, 研究 se prononce souvent yánjiū (2+1) à Taiwan au lieu de yánjiū (2+1) — en réalité la différence est surtout sur des mots comme 垃圾 : lèsè à Taiwan vs lājī en Chine continentale. Le mot 和 se prononce souvent hàn à Taiwan au lieu de hé. Ces différences sont mineures mais il est bon de les connaître.",
        },
        {
          type: "tip",
          content:
            "Conseil pratique : regardez des émissions taiwanaises (dramas, variétés) pour vous habituer aux tons taiwanais. Le mandarin de Taiwan est légèrement plus « doux » et « chantant » que celui de Pékin. Les YouTubers taiwanais sont une excellente ressource gratuite pour entraîner votre oreille.",
        },
      ],
    },
    {
      title: "Exercices de reconnaissance",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "L'exercice le plus efficace pour les tons est le travail sur les « minimal pairs » : des mots qui ne diffèrent que par le ton. Si vous pouvez distinguer et produire ces paires, vos tons sont bons.",
        },
        {
          type: "example",
          chinese: "買 / 賣",
          pinyin: "mǎi / mài",
          translation: "acheter (ton 3) / vendre (ton 4)",
          content: "Minimal pair classique. La seule différence est le ton : 3 vs 4.",
        },
        {
          type: "example",
          chinese: "湯 / 糖 / 躺 / 燙",
          pinyin: "tāng / táng / tǎng / tàng",
          translation: "soupe / sucre / s'allonger / brûlant",
          content: "Un quadruplet tonal — le même son avec les 4 tons.",
        },
        {
          type: "example",
          chinese: "書 / 熟 / 鼠 / 樹",
          pinyin: "shū / shú / shǔ / shù",
          translation: "livre / mûr (cuit) / souris / arbre",
          content: "Autre quadruplet tonal pour s'entraîner.",
        },
        {
          type: "text",
          content:
            "Méthode d'entraînement : 1) Écoutez un mot et identifiez le ton de chaque syllabe. 2) Répétez le mot en exagérant les tons. 3) Enregistrez-vous et comparez avec l'original. 4) Pratiquez les minimal pairs en alternance rapide : mǎi-mài-mǎi-mài.",
        },
        {
          type: "tip",
          content:
            "Application concrète : quand vous apprenez un nouveau mot, ne mémorisez JAMAIS le son sans le ton. Le mot et son ton forment un tout indissociable. 明天 n'est pas « ming tian » mais « míngtiān » — le ton fait partie intégrante du mot, comme les lettres d'un mot français.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Au marché de nuit de Shilin (士林夜市). Un malentendu de tons crée une situation comique.",
    lines: [
      {
        speaker: "Vous",
        chinese: "老闆，我要十個水餃。",
        pinyin: "lǎobǎn, wǒ yào shí ge shuǐjiǎo.",
        french: "Patron, je veux dix raviolis.",
        note: "Vous prononcez 水餃 (shuǐjiǎo) correctement.",
      },
      {
        speaker: "Vendeur",
        chinese: "好，十個水餃。還要別的嗎？",
        pinyin: "hǎo, shí ge shuǐjiǎo. hái yào biéde ma?",
        french: "OK, dix raviolis. Autre chose ?",
      },
      {
        speaker: "Vous",
        chinese: "我也要一碗湯。",
        pinyin: "wǒ yě yào yì wǎn tāng.",
        french: "Je veux aussi un bol de soupe.",
        note: "Vous dites accidentellement táng (sucre) au lieu de tāng (soupe).",
      },
      {
        speaker: "Vendeur",
        chinese: "一碗……糖？你要糖水嗎？",
        pinyin: "yì wǎn... táng? nǐ yào tángshuǐ ma?",
        french: "Un bol de... sucre ? Tu veux de l'eau sucrée ?",
      },
      {
        speaker: "Vous",
        chinese: "不是不是！湯！喝的湯！",
        pinyin: "búshì búshì! tāng! hē de tāng!",
        french: "Non non ! De la soupe ! De la soupe à boire !",
      },
      {
        speaker: "Vendeur",
        chinese: "哈哈，好好好，一碗湯！聲調很重要喔！",
        pinyin: "hāhā, hǎo hǎo hǎo, yì wǎn tāng! shēngdiào hěn zhòngyào o!",
        french: "Haha, d'accord d'accord, un bol de soupe ! Les tons c'est important hein !",
      },
    ],
  },

  keyPoints: [
    "Les tone pairs (combinaisons de deux tons) sont l'unité fondamentale de pratique — travaillez-les 2-3 par jour.",
    "Sandhi 3+3 : le premier ton 3 se prononce ton 2 (你好 → ní hǎo). C'est automatique chez les natifs.",
    "不 (bù) → bú devant un ton 4. 一 (yī) → yí devant un ton 4, yì devant un ton 1/2/3.",
    "Le ton 3 taiwanais est souvent un « half third » (la voix descend sans remonter), c'est normal et correct.",
    "Ne mémorisez jamais un mot sans son ton — le ton fait partie intégrante du mot comme les lettres en français.",
  ],

  vocabulary: [
    {
      character: "今天",
      pinyin: "jīntiān",
      zhuyin: "ㄐㄧㄣ ㄊㄧㄢ",
      french: "Aujourd'hui",
      english: "Today",
      example: {
        sentence: "今天天氣很好。",
        pinyin: "jīntiān tiānqì hěn hǎo.",
        translation: "Aujourd'hui il fait beau.",
      },
    },
    {
      character: "中文",
      pinyin: "zhōngwén",
      zhuyin: "ㄓㄨㄥ ㄨㄣˊ",
      french: "Chinois (langue)",
      english: "Chinese (language)",
      example: {
        sentence: "我在學中文。",
        pinyin: "wǒ zài xué zhōngwén.",
        translation: "J'apprends le chinois.",
      },
    },
    {
      character: "老師",
      pinyin: "lǎoshī",
      zhuyin: "ㄌㄠˇ ㄕ",
      french: "Professeur",
      english: "Teacher",
      example: {
        sentence: "老師說得很清楚。",
        pinyin: "lǎoshī shuō de hěn qīngchǔ.",
        translation: "Le professeur parle très clairement.",
      },
    },
    {
      character: "學生",
      pinyin: "xuéshēng",
      zhuyin: "ㄒㄩㄝˊ ㄕㄥ",
      french: "Étudiant",
      english: "Student",
      example: {
        sentence: "我是學生。",
        pinyin: "wǒ shì xuéshēng.",
        translation: "Je suis étudiant.",
      },
    },
    {
      character: "可以",
      pinyin: "kěyǐ",
      zhuyin: "ㄎㄜˇ ㄧˇ",
      french: "Pouvoir, d'accord",
      english: "Can, may, OK",
      example: {
        sentence: "可以便宜一點嗎？",
        pinyin: "kěyǐ piányí yìdiǎn ma?",
        translation: "Vous pouvez faire un peu moins cher ?",
      },
    },
    {
      character: "一起",
      pinyin: "yìqǐ",
      zhuyin: "ㄧˋ ㄑㄧˇ",
      french: "Ensemble",
      english: "Together",
      example: {
        sentence: "我們一起去吧！",
        pinyin: "wǒmen yìqǐ qù ba!",
        translation: "Allons-y ensemble !",
      },
    },
    {
      character: "不要",
      pinyin: "búyào",
      zhuyin: "ㄅㄨˊ ㄧㄠˋ",
      french: "Ne pas vouloir",
      english: "Don't want",
      example: {
        sentence: "不要太辣。",
        pinyin: "búyào tài là.",
        translation: "Pas trop pimenté.",
      },
    },
    {
      character: "沒有",
      pinyin: "méiyǒu",
      zhuyin: "ㄇㄟˊ ㄧㄡˇ",
      french: "Ne pas avoir",
      english: "Don't have",
      example: {
        sentence: "我沒有現金。",
        pinyin: "wǒ méiyǒu xiànjīn.",
        translation: "Je n'ai pas de liquide.",
      },
    },
    {
      character: "漂亮",
      pinyin: "piàoliang",
      zhuyin: "ㄆㄧㄠˋ ˙ㄌㄧㄤ",
      french: "Joli, beau",
      english: "Beautiful, pretty",
      example: {
        sentence: "台北很漂亮。",
        pinyin: "táiběi hěn piàoliang.",
        translation: "Taipei est très joli.",
      },
    },
    {
      character: "喜歡",
      pinyin: "xǐhuān",
      zhuyin: "ㄒㄧˇ ㄏㄨㄢ",
      french: "Aimer",
      english: "To like",
      example: {
        sentence: "我喜歡台灣的食物。",
        pinyin: "wǒ xǐhuān táiwān de shíwù.",
        translation: "J'aime la nourriture de Taiwan.",
      },
    },
    {
      character: "準備",
      pinyin: "zhǔnbèi",
      zhuyin: "ㄓㄨㄣˇ ㄅㄟˋ",
      french: "Préparer",
      english: "To prepare",
      example: {
        sentence: "你準備好了嗎？",
        pinyin: "nǐ zhǔnbèi hǎo le ma?",
        translation: "Tu es prêt ?",
      },
    },
    {
      character: "重要",
      pinyin: "zhòngyào",
      zhuyin: "ㄓㄨㄥˋ ㄧㄠˋ",
      french: "Important",
      english: "Important",
      example: {
        sentence: "聲調很重要。",
        pinyin: "shēngdiào hěn zhòngyào.",
        translation: "Les tons sont très importants.",
      },
    },
  ],

  exercises: [
    {
      id: "u3-ex1",
      type: "comprehension",
      question:
        "Pourquoi deux tons 3 consécutifs déclenchent un sandhi tonal ?",
      correctAnswer:
        "Deux baisses de voix consécutives sont physiquement difficiles, le premier ton 3 devient ton 2",
      options: [
        "Deux baisses de voix consécutives sont physiquement difficiles, le premier ton 3 devient ton 2",
        "C'est une règle arbitraire sans explication",
        "Le deuxième ton 3 devient ton 2",
        "Les deux tons 3 deviennent ton 1",
      ],
    },
    {
      id: "u3-ex2",
      type: "comprehension",
      question:
        "Comment se prononce 一 (yī) dans 一杯 (un verre) ?",
      correctAnswer: "yì (ton 4), car 杯 est au ton 1",
      options: [
        "yì (ton 4), car 杯 est au ton 1",
        "yí (ton 2), car 杯 est au ton 1",
        "yī (ton 1), pas de changement",
        "yǐ (ton 3)",
      ],
    },
    {
      id: "u3-ex3",
      type: "comprehension",
      question:
        "Quelle est la combinaison de tons de 台灣 (táiwān) ?",
      correctAnswer: "Ton 2 + Ton 1",
      options: [
        "Ton 2 + Ton 1",
        "Ton 1 + Ton 2",
        "Ton 2 + Ton 2",
        "Ton 4 + Ton 1",
      ],
    },
    {
      id: "u3-ex4",
      type: "fill-blank",
      question:
        "不___ (bù + 是 shì) : Comment se prononce 不 ici ?",
      correctAnswer: "bú (ton 2), car 是 est au ton 4",
      options: [
        "bú (ton 2), car 是 est au ton 4",
        "bù (ton 4), pas de changement",
        "bū (ton 1)",
        "bǔ (ton 3)",
      ],
      hint: "不 change de ton devant un autre ton 4.",
    },
    {
      id: "u3-ex5",
      type: "translate",
      question:
        "Quelle est la différence entre 湯 (tāng) et 糖 (táng) ?",
      correctAnswer: "湯 = soupe (ton 1), 糖 = sucre (ton 2)",
      options: [
        "湯 = soupe (ton 1), 糖 = sucre (ton 2)",
        "湯 = sucre, 糖 = soupe",
        "Ils ont le même sens",
        "湯 = chaud, 糖 = froid",
      ],
    },
    {
      id: "u3-ex6",
      type: "comprehension",
      question:
        "Comment prononce-t-on 你好 en réalité à cause du sandhi ?",
      correctAnswer: "ní hǎo — le premier ton 3 (你) devient ton 2",
      options: [
        "ní hǎo — le premier ton 3 (你) devient ton 2",
        "nǐ háo — le deuxième ton 3 (好) devient ton 2",
        "nǐ hǎo — aucun changement",
        "ní háo — les deux deviennent ton 2",
      ],
    },
    {
      id: "u3-ex7",
      type: "comprehension",
      question: "Qu'est-ce que le « half third » (半三聲) taiwanais ?",
      correctAnswer:
        "Le ton 3 descend mais ne remonte pas vraiment — c'est la norme conversationnelle à Taiwan",
      options: [
        "Le ton 3 descend mais ne remonte pas vraiment — c'est la norme conversationnelle à Taiwan",
        "Un ton spécial qui n'existe qu'en taiwanais (閩南語)",
        "Un ton 3 prononcé très fort",
        "Un ton 3 prononcé comme un ton 1",
      ],
    },
    {
      id: "u3-ex8",
      type: "fill-blank",
      question:
        "Identifiez les tons : 學生 (xuéshēng) = ton ___ + ton ___",
      correctAnswer: "Ton 2 + Ton 1",
      options: [
        "Ton 2 + Ton 1",
        "Ton 1 + Ton 2",
        "Ton 2 + Ton 2",
        "Ton 4 + Ton 1",
      ],
      hint: "xué porte un accent montant (ton 2) et shēng un accent plat haut (ton 1).",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-02"],
};
