import type { CourseUnit } from "@/types/course";

export const unit02: CourseUnit = {
  id: "unit-02",
  number: 2,
  title: "Les tons — L'arme secrète",
  titleZh: "聲調——秘密武器",
  chapter: 1,
  description:
    "Maîtrisez les quatre tons du mandarin et le ton neutre. Les tons changent le sens des mots : sans eux, vous parlez une autre langue.",
  icon: "🎵",

  sections: [
    {
      title: "Pourquoi les tons changent tout",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le mandarin est une langue tonale : la hauteur et la direction de la voix changent le sens du mot. Un même son peut signifier quatre choses totalement différentes selon le ton utilisé. Ce n'est pas de l'intonation émotionnelle comme en français — c'est du vocabulaire pur. Si vous ne retenez qu'une seule chose de tout ce cours, que ce soit ceci : les tons ne sont pas un « bonus » ni une « amélioration » de votre prononciation — ils font partie intégrante de chaque mot. Un mot prononcé avec le mauvais ton n'est pas un mot mal prononcé, c'est un AUTRE mot. C'est comme si vous disiez « poisson » au lieu de « poison » en français : ce ne sont pas des variantes du même mot, ce sont des mots différents.",
        },
        {
          type: "text",
          content:
            "Il y a quatre tons principaux et un ton neutre (léger). Chaque ton est représenté par un accent sur la voyelle en pinyin, et par un symbole spécifique en zhuyin (bopomofo, le système phonétique taiwanais). Le premier ton (ˉ) est haut et plat, comme quand vous chantez une note tenue. Le deuxième ton (ˊ) monte, comme quand vous dites « Hein ? » avec surprise. Le troisième ton (ˇ) descend puis remonte, comme quand vous hésitez « Hmm... ». Le quatrième ton (ˋ) descend brusquement, comme un ordre sec « Non ! ». En linguistique, on représente souvent les tons sur une échelle de 1 (le plus bas) à 5 (le plus haut). Le ton 1 se note 55 (haut-haut), le ton 2 se note 35 (milieu vers haut), le ton 3 se note 214 (bas, très bas, puis milieu), et le ton 4 se note 51 (haut vers très bas). Cette notation peut sembler abstraite, mais elle aide à comprendre que les tons ne sont pas des « accents » vagues — ce sont des trajectoires vocales très précises.",
        },
        {
          type: "example",
          chinese: "媽 麻 馬 罵",
          pinyin: "mā má mǎ mà",
          translation:
            "maman / chanvre / cheval / insulter — Quatre sens pour un même son !",
          content:
            "L'exemple classique : mā (ton 1) = maman, má (ton 2) = chanvre, mǎ (ton 3) = cheval, mà (ton 4) = insulter. En ajoutant le ton neutre, on obtient 嗎 (ma, particule interrogative). Cela donne la phrase célèbre utilisée par tous les professeurs de chinois : 媽媽罵馬的麻嗎？(māma mà mǎ de má ma? — Est-ce que maman insulte le chanvre du cheval ?). Absurde, mais mémorable.",
        },
        {
          type: "tip",
          content:
            "Astuce gestuelle : accompagnez chaque ton d'un geste de la main. Ton 1 : main à plat devant vous. Ton 2 : main qui monte. Ton 3 : main qui plonge et remonte (en V). Ton 4 : main qui tranche vers le bas. Votre corps mémorise plus vite que votre cerveau.",
        },
        {
          type: "text",
          content:
            "Les tons et le zhuyin (bopomofo) — la particularité taiwanaise :\n\nA Taiwan, on n'utilise pas le pinyin dans la vie quotidienne mais le zhuyin (注音符號), aussi appelé bopomofo. Les marques tonales en zhuyin sont placées à droite du symbole phonétique : le ton 2 est marqué par ˊ, le ton 3 par ˇ, le ton 4 par ˋ. Le ton 1 n'a AUCUNE marque — c'est le ton par défaut. Le ton neutre est marqué par un point en haut : ˙. Ce système est enseigné à tous les enfants taiwanais dès la première année d'école et reste utilisé partout : claviers de téléphone, dictionnaires, sous-titres pour enfants. En tant qu'apprenant, vous n'êtes pas obligé de maîtriser le zhuyin immédiatement, mais vous le rencontrerez constamment à Taiwan — sur les menus, dans les livres pour enfants, et surtout sur les claviers. Beaucoup d'apprenants sérieux finissent par l'apprendre car il a un avantage sur le pinyin : il ne crée pas d'interférences avec la prononciation française ou anglaise. Quand vous voyez « shi » en pinyin, votre cerveau français veut prononcer « chi ». Avec le zhuyin ㄕ, il n'y a pas d'ambiguïté.",
        },
        {
          type: "text",
          content:
            "Le rythme et la prosodie — au-delà des tons individuels :\n\nLes tons ne fonctionnent pas en isolation. Dans une phrase, ils créent une mélodie globale — c'est la prosodie. Le mandarin a un rythme naturel basé sur des groupes de 2 à 4 syllabes. Chaque groupe forme une « unité rythmique » avec ses propres tensions tonales. C'est pour ça qu'un mot peut sonner différent seul et dans une phrase. Par exemple, 謝謝 (xièxiè, merci) prononcé seul a deux tons 4 très nets. Mais dans une phrase rapide comme 好的謝謝 (hǎo de xièxiè, « OK merci »), le deuxième 謝 s'allège presque en ton neutre. C'est naturel et correct — pas une erreur. L'oreille s'entraîne en écoutant des locuteurs natifs dans des situations réelles : podcasts taiwanais, dramas, conversations au marché. Ne vous contentez pas des enregistrements de manuel qui sont artificiellement lents et clairs.",
        },
        {
          type: "text",
          content:
            "Le ton neutre (ton 5 ou ton léger) est court et sans accent particulier. Il apparaît souvent sur la deuxième syllabe de certains mots courants : 媽媽 (māma, maman), 爸爸 (bàba, papa). La deuxième syllabe est prononcée légèrement, sans insister.",
        },
        {
          type: "text",
          content:
            "Comment produire PHYSIQUEMENT chaque ton :\n\n**Ton 1 (ˉ) — Haut et plat** : Imaginez que vous chantez une note haute et que vous la tenez. Votre voix ne monte ni ne descend. C'est comme quand un médecin vous demande de dire « aaaa » — une note stable. En français, on utilise naturellement cette hauteur quand on dit « mais oui ! » sur un ton affirmatif. Le piège : les Français ont tendance à laisser la voix descendre en fin de syllabe. En ton 1, il faut MAINTENIR la hauteur jusqu'au bout.\n\n**Ton 2 (ˊ) — Montant** : C'est le ton le plus naturel pour un Français car il ressemble à l'intonation interrogative. Quand vous dites « Hein ?! » avec surprise, votre voix monte exactement comme un ton 2. Ou quand vous dites « Quoi ? » — cette montée de la voix, c'est le ton 2. Partez du milieu et montez franchement vers le haut.\n\n**Ton 3 (ˇ) — Descend puis remonte** : C'est le ton le plus difficile. Imaginez le son que vous faites quand vous réfléchissez : « mmmh... » avec une voix qui descend dans les graves puis remonte légèrement. IMPORTANT : en conversation rapide, le ton 3 ne remonte presque jamais complètement — on prononce souvent juste la partie basse (« half third tone » ou 半三聲). C'est la norme à Taiwan, pas une erreur.\n\n**Ton 4 (ˋ) — Descendant brusque** : C'est le ton de l'autorité. Comme quand vous dites « NON ! » catégoriquement, ou « STOP ! » — une chute brutale de la voix du haut vers le bas. Ne le prononcez pas doucement : le ton 4 doit être net et tranchant. Les Français ont tendance à l'adoucir, ce qui le rend méconnaissable.\n\n**Ton neutre (輕聲)** : Pas vraiment un ton, plutôt une absence de ton. Court, léger, sans accent. On le trouve dans les suffixes (嗎, 的, 了, 吧) et la deuxième syllabe des mots redoublés (媽媽 māma). Il prend sa hauteur du ton précédent.",
        },
        {
          type: "warning",
          content:
            "Les 5 erreurs tonales que TOUS les francophones font :\n\n1. **Confondre ton 2 et ton 3** : En français, on n'a pas de distinction entre un son montant et un son qui descend-remonte. Pour votre oreille française, les deux sonnent « montant ». Astuce : le ton 2 part du milieu et va vers le HAUT (comme « Quoi ? »). Le ton 3 part du milieu, descend dans les GRAVES, puis remonte à peine.\n\n2. **Adoucir le ton 4** : Les Français parlent avec une intonation relativement plate. Le ton 4 demande une chute BRUTALE que nous n'utilisons jamais naturellement. Exagérez-le au début — même si vous avez l'impression de crier.\n\n3. **Laisser tomber le ton 1** : Au lieu de maintenir la note haute, les Français laissent la voix descendre naturellement en fin de syllabe. Résultat : ça sonne comme un ton 4 raté.\n\n4. **Ignorer les tons dans les phrases** : Beaucoup de débutants prononcent correctement les tons des mots isolés mais les oublient dans les phrases. C'est normal au début, mais il faut en être conscient.\n\n5. **Ne pas pratiquer les tons assez tôt** : « Je ferai les tons plus tard » est la phrase qui garantit l'échec. Les tons sont du vocabulaire, pas de la décoration.",
        },
        {
          type: "tip",
          content:
            "Méthode des 5 minutes par jour pour les tons :\n\n1. Choisissez 5 mots du vocabulaire du jour\n2. Prononcez chaque mot 5 fois en exagérant le ton (comme un acteur)\n3. Enregistrez-vous avec votre téléphone\n4. Écoutez et comparez avec l'audio du cours\n5. Recommencez jusqu'à ce que ça colle\n\nFaites ça TOUS LES JOURS pendant les 4 premières semaines. Après, les tons deviennent automatiques.",
        },
        {
          type: "tip",
          content:
            "Astuce mnémotechnique pour les 4 tons : Ton 1 = une ambulance au loin (sirène constante et haute). Ton 2 = un enfant surpris « Ah bon ?! ». Ton 3 = un ado blasé « mouais... ». Ton 4 = un père qui dit « Non ! » à son enfant. Associez chaque ton à cette image et la mémorisation sera instantanée.",
        },
        {
          type: "text",
          content:
            "Voici 10 paires de mots où seul le ton change. C'est la preuve que les tons ne sont pas optionnels — ils SONT le mot :\n\n• 買 mǎi (acheter, ton 3) vs 賣 mài (vendre, ton 4) — un caractère d'écart, un monde de différence\n• 問 wèn (demander, ton 4) vs 吻 wěn (embrasser, ton 3) — attention en demandant votre chemin\n• 湯 tāng (soupe, ton 1) vs 糖 táng (sucre, ton 2) — au restaurant, la confusion classique\n• 睡覺 shuìjiào (dormir) vs 水餃 shuǐjiǎo (raviolis) — classique au marché de nuit taiwanais\n• 杯 bēi (verre, ton 1) vs 北 běi (nord, ton 3) — au café ou en donnant des directions\n• 書 shū (livre, ton 1) vs 熟 shú (mûr/familier, ton 2) — en librairie ou au marché\n• 四 sì (quatre, ton 4) vs 十 shí (dix, ton 2) — le cauchemar des débutants quand on paie\n• 是 shì (être, ton 4) vs 師 shī (professeur, ton 1) — dans les présentations\n• 飛 fēi (voler, ton 1) vs 肥 féi (gras, ton 2) — ne confondez pas à table\n• 吃 chī (manger, ton 1) vs 遲 chí (en retard, ton 2) — « je mange » vs « je suis en retard »",
        },
        {
          type: "comparison",
          content:
            "Le français n'est pas une langue tonale mais utilise l'intonation pour exprimer des émotions ou marquer les questions. En chinois, l'intonation change le SENS du mot, pas l'émotion. C'est comme si en français, dire « pain » en montant la voix voulait dire « vin » et en la descendant voulait dire « bain ». Imaginez la confusion si vous demandiez du « vin » au boulanger ! C'est exactement ce que vivent les Chinois quand un étranger ne fait pas les tons. En français, « Tu viens » avec une voix montante est une question et avec une voix descendante une affirmation — mais le mot « viens » garde le même sens. En mandarin, changer la direction de la voix sur une syllabe change le mot lui-même. Cette différence fondamentale explique pourquoi les tons sont si difficiles à intégrer pour un francophone : notre cerveau traite la hauteur de la voix comme de l'émotion, pas comme du vocabulaire. Il faut littéralement reprogrammer cette habitude.",
        },
        {
          type: "text",
          content:
            "Les tons à Taiwan — particularités locales :\n\nLe mandarin parlé à Taiwan (國語, guóyǔ) a quelques particularités tonales par rapport au mandarin de Chine continentale (普通話, pǔtōnghuà). La différence la plus notable : le ton 3 est souvent prononcé comme un ton bas sans remontée (le « half third tone » mentionné plus haut). C'est tellement courant à Taiwan que c'est la norme, pas l'exception. Quand un Taiwanais dit 你好, le nǐ sonne presque comme un ton bas et plat, pas comme une descente-remontée complète.\n\nAutre particularité : le ton neutre est moins fréquent dans le mandarin taiwanais que dans le mandarin continental. Là où un Pékinois dira 東西 (dōngxi, avec xi en ton neutre léger), un Taiwanais dira souvent dōngxī avec un ton 1 plus marqué sur le deuxième caractère.\n\nEnfin, l'intonation générale du mandarin taiwanais est souvent décrite comme plus « douce » ou plus « chantante » que le mandarin pékinois. Les tons sont légèrement moins exagérés, le débit est parfois plus lent, et l'influence du taïwanais (閩南語, mǐnnányǔ) se ressent dans certaines intonations. Ne soyez pas surpris si les tons que vous entendez dans la rue à Taipei ne correspondent pas exactement aux enregistrements de manuel : c'est le mandarin vivant, celui que vous apprendrez à parler naturellement.",
        },
      ],
    },
    {
      title: "Le sandhi tonal",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En pratique, les tons ne sont pas toujours prononcés tels quels. Certaines combinaisons provoquent un changement automatique appelé « sandhi tonal » (變調, biàndiào en chinois). C'est une règle de prononciation, pas d'écriture : le pinyin garde le ton original, mais vous prononcez différemment. Le mot « sandhi » vient du sanskrit et signifie « jonction » — c'est ce qui se passe quand deux tons se rencontrent et que l'un s'adapte à l'autre. Il y a trois règles principales à connaître, et elles s'appliquent systématiquement. Une fois que vous les aurez intégrées, elles deviendront aussi naturelles que la liaison en français (« les amis » → « lézami »).",
        },
        {
          type: "warning",
          content:
            "Règle n°1 : Quand deux tons 3 se suivent, le premier devient un ton 2. C'est pour ça que 你好 s'écrit nǐ hǎo mais se prononce « ní hǎo ». Le pinyin ne change pas, mais votre bouche dit ton 2 + ton 3.",
        },
        {
          type: "example",
          chinese: "你好",
          pinyin: "nǐ hǎo → (prononcé) ní hǎo",
          translation: "Bonjour — Le premier ton 3 devient ton 2 à l'oral.",
          content: "Sandhi tonal : deux tons 3 consécutifs → le premier passe en ton 2.",
        },
        {
          type: "text",
          content:
            "Autres exemples courants du sandhi ton 3 + ton 3 que vous entendrez tous les jours à Taiwan :\n\n• 可以 kěyǐ → kéyǐ (pouvoir, OK) — l'un des mots les plus fréquents\n• 很好 hěn hǎo → hén hǎo (très bien)\n• 所以 suǒyǐ → suóyǐ (donc, alors)\n• 老闆 lǎobǎn → láobǎn (patron, boss) — indispensable au restaurant\n• 洗澡 xǐzǎo → xízǎo (prendre une douche)\n• 水果 shuǐguǒ → shuíguǒ (fruit)\n• 小姐 xiǎojiě → xiáojiě (mademoiselle — attention, dans certains contextes à Taiwan ce terme peut être mal interprété, préférez 小姐 au restaurant pour appeler la serveuse)\n\nQuand trois tons 3 ou plus se suivent, la règle s'applique en cascade. Par exemple 我也好 (wǒ yě hǎo, « moi aussi ça va ») : les deux premiers deviennent ton 2 → wó yé hǎo. En pratique, votre oreille s'habituera naturellement à ces changements en écoutant des Taiwanais parler.",
        },
        {
          type: "text",
          content:
            "Règle n°2 : 不 (bù, ton 4) change de ton devant un autre ton 4. Devant un ton 4, 不 se prononce bú (ton 2). Par exemple : 不是 (bú shì, pas être), 不對 (bú duì, pas correct). Devant les tons 1, 2 et 3, il reste bù.",
        },
        {
          type: "example",
          chinese: "不是",
          pinyin: "bù shì → (prononcé) bú shì",
          translation: "Ne pas être — 不 passe en ton 2 devant un ton 4.",
          content: "不 (ton 4) + ton 4 → 不 se prononce en ton 2.",
        },
        {
          type: "text",
          content:
            "Règle n°3 : 一 (yī, ton 1) change aussi. Devant un ton 4, il se prononce yí (ton 2) : 一個 (yí gè). Devant les tons 1, 2 et 3, il se prononce yì (ton 4) : 一杯 (yì bēi), 一年 (yì nián). Seul, ou en comptant, il reste yī.",
        },
        {
          type: "warning",
          content:
            "Les règles complètes de 一 (yī) : Devant un **ton 4**, 一 se prononce au **ton 2** (yí) : 一個 = yí gè. Devant un **ton 1, 2 ou 3**, 一 se prononce au **ton 4** (yì) : 一杯 = yì bēi, 一年 = yì nián, 一起 = yì qǐ. Seul ou en comptant, 一 garde son **ton 1** : 一二三 = yī èr sān.",
        },
        {
          type: "text",
          content:
            "Pourquoi le sandhi tonal existe-t-il ? Ce n'est pas une règle arbitraire inventée pour compliquer la vie des apprenants — c'est de la phonétique naturelle. Essayez de dire deux tons 3 de suite : votre voix doit descendre dans les graves, remonter, puis redescendre et remonter à nouveau. C'est physiquement épuisant et lent. Votre appareil vocal résiste naturellement à cette gymnastique. Donc les locuteurs natifs ont spontanément « simplifié » le premier ton 3 en ton 2 (montant) pour faciliter la transition. Le même phénomène existe pour 不 et 一 : quand deux tons 4 se suivent (不是 bù shì), la chute-chute rapide est inconfortable, alors le premier ton 4 s'allège en ton 2. C'est de l'ergonomie vocale, et ça se retrouve dans toutes les langues tonales du monde. La bonne nouvelle : à force de pratiquer, le sandhi devient automatique. Vous n'aurez plus besoin d'y réfléchir — votre bouche fera le changement toute seule, exactement comme les natifs.",
        },
      ],
    },
    {
      title: "Pratiquer les tons",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "La clé pour maîtriser les tons, c'est la répétition par paires. Entraînez-vous avec des « tone pairs » : ton 1 + ton 1, ton 1 + ton 2, ton 1 + ton 3... jusqu'à couvrir les 20 combinaisons possibles (4 × 5). Commencez par les plus courantes. Voici les combinaisons les plus fréquentes avec des mots réels pour pratiquer :\n\n• Ton 1 + Ton 1 : 今天 jīntiān (aujourd'hui), 飛機 fēijī (avion)\n• Ton 1 + Ton 2 : 中文 zhōngwén (chinois), 喝茶 hē chá (boire du thé)\n• Ton 1 + Ton 3 : 咖啡 kāfēi (café — le 啡 est ton 1, pas ton 3 ! Piège classique)\n• Ton 1 + Ton 4 : 工作 gōngzuò (travailler), 吃飯 chī fàn (manger/repas)\n• Ton 2 + Ton 1 : 明天 míngtiān (demain), 學生 xuéshēng (étudiant)\n• Ton 2 + Ton 2 : 人民 rénmín (peuple), 牛肉 niúròu (boeuf — attention, 肉 est ton 4 !)\n• Ton 2 + Ton 4 : 朋友 péngyǒu (ami — attention, 友 est ton 3 !)\n• Ton 3 + Ton 3 : 你好 nǐ hǎo → ní hǎo (bonjour, sandhi !)\n• Ton 4 + Ton 1 : 電腦 diànnǎo (ordinateur — attention, 腦 est ton 3)\n• Ton 4 + Ton 4 : 再見 zàijiàn (au revoir), 漂亮 piàoliang (joli)\n\nEntraînez-vous avec 2-3 paires par jour. En un mois, vous aurez couvert toutes les combinaisons et vos tons seront beaucoup plus stables.",
        },
        {
          type: "tip",
          content:
            "Ne cherchez pas la perfection dès le début. Les Taiwanais sont très patients et habitués aux étrangers qui apprennent. Même avec des tons approximatifs, le contexte aide énormément. L'important est de savoir que les tons existent et de s'y entraîner un peu chaque jour. Rappelez-vous : un enfant taiwanais met environ 3 ans à maîtriser tous les tons parfaitement. Vous n'allez pas y arriver en une semaine, et c'est normal. L'objectif des premières semaines n'est pas la perfection mais la conscience tonale — savoir que chaque syllabe a un ton et essayer de le produire.",
        },
        {
          type: "text",
          content:
            "Exercice quotidien : prenez 5 mots du vocabulaire et répétez chacun 10 fois en exagérant le ton. Enregistrez-vous et comparez. Faites ça 5 minutes par jour et en deux semaines, vos tons seront naturels.",
        },
        {
          type: "text",
          content:
            "Techniques avancées de pratique des tons :\n\n**La méthode de l'exagération** : Pendant les 2 premières semaines, exagérez VOLONTAIREMENT chaque ton. Le ton 1, rendez-le très haut et très long. Le ton 2, montez comme si vous étiez outré. Le ton 3, plongez dans les graves comme un grognement. Le ton 4, tranchez comme un coup de karaté vocal. Vous aurez l'air ridicule — c'est le but. L'exagération crée une empreinte musculaire forte dans votre appareil vocal. Ensuite, quand vous « relâchez » vers une prononciation normale, les tons restent en place.\n\n**La méthode du shadowing** : Trouvez un podcast taiwanais ou un drama (推薦 : 台灣好湯 podcast, ou n'importe quel variety show taiwanais). Écoutez une phrase, puis répétez-la immédiatement en imitant EXACTEMENT l'intonation. Ne pensez pas aux tons individuels — imitez la mélodie globale. C'est comme apprendre une chanson : vous ne pensez pas note par note, vous reproduisez la mélodie. 10 minutes par jour de shadowing vaut mieux qu'une heure de grammaire.\n\n**La méthode du contraste** : Prenez une paire minimale (ex: 買 mǎi / 賣 mài) et alternez rapidement entre les deux. mǎi-mài-mǎi-mài-mǎi-mài. Cela force votre cerveau à percevoir la différence et votre bouche à la produire. Commencez lentement puis accélérez.",
        },
        {
          type: "example",
          chinese: "湯 糖 躺 燙",
          pinyin: "tāng táng tǎng tàng",
          translation: "soupe / sucre / s'allonger / brûlant",
          content:
            "Un autre quadruplet tonal pour s'entraîner. Celui-ci est particulièrement utile car les mots 湯 (soupe) et 糖 (sucre) sont très courants au restaurant. Au marché de nuit, vous entendrez constamment ces sons. Essayez de dire les quatre à la suite, lentement, puis de plus en plus vite. Quand vous arriverez à les enchaîner sans hésiter, vos tons seront solides.",
        },
        {
          type: "example",
          chinese: "書 熟 鼠 樹",
          pinyin: "shū shú shǔ shù",
          translation: "livre / familier (mûr) / souris (rat) / arbre",
          content:
            "Encore un quadruplet tonal avec le son « shu ». 書 (livre, ton 1) et 樹 (arbre, ton 4) sont parmi les mots les plus courants. Notez que 熟 (ton 2) signifie à la fois « mûr » (pour un fruit) et « familier » (pour une personne ou un lieu) — un mot polyvalent. 鼠 (ton 3) veut dire souris ou rat, comme dans 老鼠 (lǎoshǔ). Pratiquez ce quadruplet après celui en « tang ».",
        },
        {
          type: "tip",
          content:
            "Astuce musicale : si vous jouez d'un instrument ou chantez, vous avez un avantage. Les tons sont des intervalles musicaux. Ton 1 = note haute tenue (sol). Ton 2 = glissando montant (do→sol). Ton 3 = descente et remontée (sol→do→mi). Ton 4 = chute rapide (sol→do).",
        },
        {
          type: "tip",
          content:
            "Pour les musiciens (et ceux qui veulent essayer) : les tons peuvent littéralement se CHANTER. Si vous jouez de la musique, vous avez un avantage ÉNORME car votre oreille est déjà entraînée aux intervalles.\n\n• Ton 1 = Sol tenu (note haute stable, comme une blanche sur la portée)\n• Ton 2 = Do → Sol (quinte montante, un saut ascendant net)\n• Ton 3 = Sol → Do → Mi (descente d'une quinte puis remontée d'une tierce)\n• Ton 4 = Sol → Do (quinte descendante rapide, comme un accent sforzando)\n\nSi vous ne jouez pas de musique, essayez quand même de CHANTER les tons. Littéralement. Chantez 媽麻馬罵 sur une mélodie : note tenue, montée, descente-remontée, chute. C'est beaucoup plus efficace que de simplement « parler » car le chant active les zones cérébrales du traitement mélodique, exactement celles dont vous avez besoin pour les tons. Certaines études montrent que les personnes qui chantent les tons pendant l'apprentissage les maîtrisent 40% plus vite.",
        },
        {
          type: "text",
          content:
            "Comment les Taiwanais perçoivent les erreurs de tons :\n\nLes Taiwanais sont TRÈS habitués aux étrangers qui font des erreurs de tons. Ils sont généralement patients, encourageants, et devinent souvent le mot correct grâce au contexte. Mais certaines confusions sont sources de vrais malentendus — ou de fous rires :\n\n• Dire 睡覺 shuìjiào (dormir) au lieu de 水餃 shuǐjiǎo (raviolis) au marché de nuit : « Je voudrais dormir » au lieu de « Je voudrais des raviolis » — le vendeur aura un moment de perplexité.\n\n• Dire 我要問你 wǒ yào wèn nǐ (je veux te demander) au lieu de 我要吻你 wǒ yào wěn nǐ (je veux t'embrasser) — la différence entre un ton 4 et un ton 3 peut créer une situation très gênante avec un inconnu.\n\n• Dire 四十 sìshí (quarante) au lieu de 十四 shísì (quatorze) — ou l'inverse. Au marché, ça peut tripler votre addition. Les Taiwanais eux-mêmes confirment parfois en montrant les chiffres avec les doigts.\n\n• Dire 請問 qǐng wèn (excusez-moi / puis-je demander) avec les mauvais tons peut donner quelque chose d'incompréhensible.\n\nNe vous découragez pas — ces erreurs font partie du voyage et deviennent des anecdotes amusantes à raconter. Les Taiwanais apprécient énormément l'effort d'apprendre leur langue, même imparfaitement. Un sourire et un 不好意思 (bù hǎo yìsi, « pardon ») suffisent à dédramatiser n'importe quelle confusion tonale.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Au 7-Eleven à Taipei. Vous essayez de commander, mais les tons vous jouent des tours.",
    lines: [
      {
        speaker: "Vous",
        chinese: "我要四杯水。",
        pinyin: "wǒ yào sì bēi shuǐ.",
        french: "Je veux quatre verres d'eau.",
      },
      {
        speaker: "Employé",
        chinese: "四杯？四個人嗎？",
        pinyin: "sì bēi? sì ge rén ma?",
        french: "Quatre verres ? Vous êtes quatre ?",
      },
      {
        speaker: "Vous",
        chinese: "不是，一杯！一杯水。",
        pinyin: "bú shì, yì bēi! yì bēi shuǐ.",
        french: "Non, un verre ! Un verre d'eau.",
        note: "四 (sì, quatre) et 十 (shí, dix) sont souvent confondus par les débutants à cause des tons.",
      },
      {
        speaker: "Employé",
        chinese: "好，一杯水。大杯還是小杯？",
        pinyin: "hǎo, yì bēi shuǐ. dà bēi háishì xiǎo bēi?",
        french: "D'accord, un verre d'eau. Grand ou petit ?",
      },
      {
        speaker: "Vous",
        chinese: "小杯，謝謝！",
        pinyin: "xiǎo bēi, xièxiè!",
        french: "Petit, merci !",
      },
    ],
  },

  keyPoints: [
    "Le mandarin a 4 tons + 1 ton neutre. Chaque ton change le sens du mot.",
    "Sandhi tonal : deux tons 3 consécutifs → le premier se prononce ton 2 (你好 = ní hǎo).",
    "不 (bù) se prononce bú devant un ton 4. 一 (yī) change aussi selon le ton suivant.",
    "Les tons s'apprennent par la pratique des « tone pairs » et la répétition quotidienne.",
  ],

  vocabulary: [
    {
      character: "媽媽",
      pinyin: "māma",
      zhuyin: "ㄇㄚ ˙ㄇㄚ",
      french: "Maman",
      english: "Mom",
      example: {
        sentence: "我的媽媽是老師。",
        pinyin: "wǒ de māma shì lǎoshī.",
        translation: "Ma maman est professeur.",
      },
    },
    {
      character: "馬",
      pinyin: "mǎ",
      zhuyin: "ㄇㄚˇ",
      french: "Cheval",
      english: "Horse",
      example: {
        sentence: "台灣有很多馬。",
        pinyin: "Táiwān yǒu hěn duō mǎ.",
        translation: "Taiwan a beaucoup de chevaux.",
      },
    },
    {
      character: "買",
      pinyin: "mǎi",
      zhuyin: "ㄇㄞˇ",
      french: "Acheter",
      english: "To buy",
      example: {
        sentence: "我要買水。",
        pinyin: "wǒ yào mǎi shuǐ.",
        translation: "Je veux acheter de l'eau.",
      },
    },
    {
      character: "賣",
      pinyin: "mài",
      zhuyin: "ㄇㄞˋ",
      french: "Vendre",
      english: "To sell",
      example: {
        sentence: "他賣水果。",
        pinyin: "tā mài shuǐguǒ.",
        translation: "Il vend des fruits.",
      },
    },
    {
      character: "水",
      pinyin: "shuǐ",
      zhuyin: "ㄕㄨㄟˇ",
      french: "Eau",
      english: "Water",
      example: {
        sentence: "我要一杯水。",
        pinyin: "wǒ yào yì bēi shuǐ.",
        translation: "Je veux un verre d'eau.",
      },
    },
    {
      character: "四",
      pinyin: "sì",
      zhuyin: "ㄙˋ",
      french: "Quatre",
      english: "Four",
      example: {
        sentence: "四個人。",
        pinyin: "sì ge rén.",
        translation: "Quatre personnes.",
      },
    },
    {
      character: "十",
      pinyin: "shí",
      zhuyin: "ㄕˊ",
      french: "Dix",
      english: "Ten",
      example: {
        sentence: "十塊錢。",
        pinyin: "shí kuài qián.",
        translation: "Dix dollars.",
      },
    },
    {
      character: "湯",
      pinyin: "tāng",
      zhuyin: "ㄊㄤ",
      french: "Soupe",
      english: "Soup",
      example: {
        sentence: "這個湯很好喝。",
        pinyin: "zhège tāng hěn hǎo hē.",
        translation: "Cette soupe est très bonne.",
      },
    },
    {
      character: "糖",
      pinyin: "táng",
      zhuyin: "ㄊㄤˊ",
      french: "Sucre / bonbon",
      english: "Sugar / candy",
      example: {
        sentence: "你要加糖嗎？",
        pinyin: "nǐ yào jiā táng ma?",
        translation: "Tu veux ajouter du sucre ?",
      },
    },
    {
      character: "大",
      pinyin: "dà",
      zhuyin: "ㄉㄚˋ",
      french: "Grand",
      english: "Big",
      example: {
        sentence: "大杯還是小杯？",
        pinyin: "dà bēi háishì xiǎo bēi?",
        translation: "Grand verre ou petit verre ?",
      },
    },
    {
      character: "聽",
      pinyin: "tīng",
      zhuyin: "ㄊㄧㄥ",
      french: "Écouter",
      english: "To listen",
      example: {
        sentence: "你聽得懂嗎？",
        pinyin: "nǐ tīng de dǒng ma?",
        translation: "Tu comprends (en écoutant) ?",
      },
    },
    {
      character: "說",
      pinyin: "shuō",
      zhuyin: "ㄕㄨㄛ",
      french: "Parler, dire",
      english: "To speak, to say",
      example: {
        sentence: "你會說中文嗎？",
        pinyin: "nǐ huì shuō zhōngwén ma?",
        translation: "Tu sais parler chinois ?",
      },
    },
    {
      character: "讀",
      pinyin: "dú",
      zhuyin: "ㄉㄨˊ",
      french: "Lire",
      english: "To read",
      example: {
        sentence: "我喜歡讀書。",
        pinyin: "wǒ xǐhuān dú shū.",
        translation: "J'aime lire.",
      },
    },
  ],

  exercises: [
    {
      id: "u2-ex1",
      type: "comprehension",
      question: "Combien de tons principaux a le mandarin ?",
      correctAnswer: "4 tons principaux + 1 ton neutre",
      options: [
        "4 tons principaux + 1 ton neutre",
        "3 tons",
        "5 tons égaux",
        "6 tons comme le cantonais",
      ],
    },
    {
      id: "u2-ex2",
      type: "comprehension",
      question: "Que signifie mǎ (ton 3) ?",
      correctAnswer: "Cheval",
      options: ["Cheval", "Maman", "Chanvre", "Insulter"],
    },
    {
      id: "u2-ex3",
      type: "comprehension",
      question:
        "Comment se prononce réellement 你好 (nǐ hǎo) à cause du sandhi tonal ?",
      correctAnswer: "ní hǎo (le premier ton 3 devient ton 2)",
      options: [
        "ní hǎo (le premier ton 3 devient ton 2)",
        "nǐ háo (le deuxième change)",
        "nì hǎo (le premier devient ton 4)",
        "nǐ hǎo (rien ne change)",
      ],
    },
    {
      id: "u2-ex4",
      type: "comprehension",
      question: "Comment se prononce 不 devant un ton 4 (comme dans 不是) ?",
      correctAnswer: "bú (ton 2)",
      options: ["bú (ton 2)", "bù (ton 4)", "bū (ton 1)", "bǔ (ton 3)"],
    },
    {
      id: "u2-ex5",
      type: "translate",
      question: "Quelle est la différence entre 買 (mǎi) et 賣 (mài) ?",
      correctAnswer: "買 = acheter (ton 3), 賣 = vendre (ton 4)",
      options: [
        "買 = acheter (ton 3), 賣 = vendre (ton 4)",
        "買 = vendre, 賣 = acheter",
        "Ils signifient la même chose",
        "買 = cher, 賣 = pas cher",
      ],
    },
    {
      id: "u2-ex6",
      type: "fill-blank",
      question:
        "我要___杯水。(Je veux un verre d'eau.) — Comment se prononce 一 ici ?",
      correctAnswer: "yì (ton 4, car suivi de 杯 ton 1)",
      options: [
        "yì (ton 4, car suivi de 杯 ton 1)",
        "yī (ton 1, pas de changement)",
        "yí (ton 2)",
        "yǐ (ton 3)",
      ],
      hint: "一 devant les tons 1, 2 et 3 se prononce en ton 4.",
      hintZhuyin: "一 devant les tons 1, 2 et 3 se prononce en ton 4.",
    },
    {
      id: "u2-listen-1",
      type: "listen",
      question: "買 — Quel ton entendez-vous ?",
      correctAnswer: "Ton 3 (descendant puis remontant)",
      options: [
        "Ton 1 (haut et plat)",
        "Ton 2 (montant)",
        "Ton 3 (descendant puis remontant)",
        "Ton 4 (descendant brusque)",
      ],
      hint: "mǎi",
    },
    {
      id: "u2-listen-2",
      type: "listen",
      question: "湯 — Quel ton entendez-vous ?",
      correctAnswer: "Ton 1 (haut et plat)",
      options: [
        "Ton 1 (haut et plat)",
        "Ton 2 (montant)",
        "Ton 3 (descendant puis remontant)",
        "Ton 4 (descendant brusque)",
      ],
      hint: "tāng",
    },
    {
      id: "u2-comp-1",
      type: "comprehension",
      question: "Quelle phrase est correcte pour dire « acheter » ?",
      correctAnswer: "買 mǎi (ton 3)",
      options: [
        "買 mǎi (ton 3)",
        "賣 mài (ton 4)",
        "嗎 ma (ton neutre)",
        "媽 mā (ton 1)",
      ],
      hint: "Attention a ne pas confondre acheter et vendre — seul le ton change.",
    },
    {
      id: "u2-comp-2",
      type: "comprehension",
      question: "Vous entendez « shuìjiào ». Que signifie ce mot ?",
      correctAnswer: "Dormir (睡覺, tons 4-4)",
      options: [
        "Dormir (睡覺, tons 4-4)",
        "Raviolis (水餃, tons 3-3)",
        "Eau chaude (水澆, tons 3-1)",
        "Faire la cuisine (燒教, tons 1-4)",
      ],
      hint: "睡覺 (tons 4-4) = dormir. 水餃 (tons 3-3) = raviolis. Ne pas confondre !",
      hintZhuyin: "睡覺 (tons 4-4) = dormir. 水餃 (tons 3-3) = raviolis. Ne pas confondre !",
    },
    {
      id: "u2-fill-1",
      type: "fill-blank",
      question: "Je veux ___ (acheter) un cafe. Quel est le bon ton ?",
      correctAnswer: "買 mǎi (ton 3)",
      options: [
        "買 mǎi (ton 3)",
        "賣 mài (ton 4)",
        "罵 mà (ton 4)",
        "麻 má (ton 2)",
      ],
      hint: "Acheter = ton 3. Vendre = ton 4.",
    },
    {
      id: "u2-fill-2",
      type: "fill-blank",
      question: "Je voudrais une ___ (soupe). Quel est le bon ton ?",
      correctAnswer: "湯 tāng (ton 1)",
      options: [
        "湯 tāng (ton 1)",
        "糖 táng (ton 2)",
        "躺 tǎng (ton 3)",
        "燙 tàng (ton 4)",
      ],
      hint: "Soupe = ton 1 (haut et plat). Sucre = ton 2 (montant).",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-01"],
};
