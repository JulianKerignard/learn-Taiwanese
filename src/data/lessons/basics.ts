import type { Lesson } from "@/types";
import type { CourseSection } from "@/types/course";

const sections: CourseSection[] = [
  {
    title: "Le chinois, une langue pas si compliquée",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Si vous êtes francophone et que vous envisagez d'apprendre le chinois mandarin, vous avez probablement entendu toutes sortes de mises en garde : « C'est la langue la plus difficile du monde », « Il faut des années avant de pouvoir lire un journal », « Les tons sont impossibles à maîtriser ». Oubliez tout cela. Le chinois est différent du français, certes, mais « différent » ne veut pas dire « plus difficile ». En réalité, le mandarin possède une grammaire d'une simplicité déconcertante comparée au français, à l'allemand ou même à l'anglais. Pas de conjugaison. Pas de genre grammatical. Pas de pluriel à marquer. Pas de déclinaisons. Le verbe ne change jamais de forme, quel que soit le sujet, le temps ou le mode. Là où le français vous impose « je mange, tu manges, il mange, nous mangeons, vous mangez, ils mangent », le chinois vous offre un seul et unique mot : 吃 (chī). Hier, aujourd'hui, demain — c'est toujours 吃. Le contexte et quelques particules temporelles font le reste.",
      },
      {
        type: "text",
        content:
          "L'ordre des mots en chinois est fondamentalement le même qu'en français : Sujet - Verbe - Objet (SVO). « Je mange du riz » se dit 我吃飯 (wǒ chī fàn), littéralement « je mange riz ». Pas besoin de réapprendre une structure de phrase complètement étrangère. Si vous parlez français, vous avez déjà l'intuition de la syntaxe chinoise de base. C'est un avantage considérable que les francophones sous-estiment souvent.",
      },
      {
        type: "example",
        content: "L'ordre SVO est identique en français et en chinois",
        chinese: "我喝水",
        pinyin: "wǒ hē shuǐ",
        translation: "Je bois de l'eau (mot à mot : je / boire / eau)",
      },
      {
        type: "text",
        content:
          "Chaque caractère chinois représente une syllabe et porte un sens. Le mot 電腦 (diànnǎo, ordinateur) se décompose en 電 (diàn, électricité) et 腦 (nǎo, cerveau). Un ordinateur, c'est littéralement un « cerveau électrique ». Cette logique compositionnelle est omniprésente : 火車 (huǒchē, train) = 火 (feu) + 車 (véhicule) — un « véhicule à feu ». Une fois que vous comprenez cette mécanique, apprendre de nouveaux mots devient un jeu de construction logique plutôt qu'un exercice de mémorisation arbitraire.",
      },
      {
        type: "example",
        content: "La logique des mots composés",
        chinese: "手機",
        pinyin: "shǒujī",
        translation:
          "Téléphone portable (手 main + 機 machine = « machine de main »)",
      },
      {
        type: "example",
        content: "Encore un exemple de composition logique",
        chinese: "大學",
        pinyin: "dàxué",
        translation:
          "Université (大 grand + 學 étude = « grande étude »)",
      },
      {
        type: "text",
        content:
          "Comparaison honnête entre le français et le chinois — ce qui est PLUS SIMPLE en chinois : la grammaire (pas de conjugaison, pas de genre, pas d'articles), la formation des mots (logique compositionnelle), la syntaxe de base (SVO comme en français), les questions (il suffit d'ajouter 嗎 à la fin d'une phrase). Ce qui est PLUS COMPLEXE en chinois : l'écriture (des milliers de caractères à mémoriser), la prononciation (les 4 tons), certains sons inexistants en français (zh, ch, sh, r, ü), et les classificateurs (des petits mots qu'on place entre un nombre et un nom).",
      },
      {
        type: "tip",
        content:
          "Première bonne nouvelle : la grammaire chinoise est si simple qu'un débutant peut former des phrases correctes dès le premier jour. Il suffit de mettre les mots dans le bon ordre — pas besoin de conjuguer quoi que ce soit.",
      },
      {
        type: "tip",
        content:
          "Deuxième bonne nouvelle : les caractères suivent une logique. Ce ne sont pas des dessins aléatoires. Les radicaux (composants récurrents) vous donnent des indices sur le sens, et les composants phonétiques sur la prononciation. Plus vous en apprenez, plus les suivants deviennent faciles.",
      },
      {
        type: "text",
        content:
          "Troisième bonne nouvelle — et elle est de taille si vous venez à Taiwan : les Taiwanais sont d'une patience et d'une bienveillance remarquables avec les étrangers qui tentent de parler mandarin. Même si votre prononciation est approximative, même si vos tons sont bancals, les gens feront l'effort de vous comprendre, vous encourageront, et se montreront souvent émus que vous fassiez l'effort d'apprendre leur langue. Ce n'est pas partout le cas dans le monde, et c'est un atout immense pour votre apprentissage. À Taiwan, vous n'avez pas peur de vous tromper — on vous félicite d'essayer.",
      },
      {
        type: "warning",
        content:
          "Ne vous laissez pas décourager par les personnes qui vous répondent en anglais quand vous essayez de parler chinois. Ce n'est pas parce que votre chinois est mauvais — c'est souvent parce que les Taiwanais veulent pratiquer leur anglais ou vous faciliter la vie. Insistez poliment en chinois : c'est la meilleure façon de progresser.",
      },
    ],
  },
  {
    title: "Les caractères traditionnels — L'art d'écrire",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Taiwan est l'un des rares endroits au monde où l'on utilise encore les caractères traditionnels (繁體字, fántǐzì). La Chine continentale a adopté les caractères simplifiés (簡體字, jiǎntǐzì) dans les années 1950-1960 sous Mao Zedong, dans le but de lutter contre l'analphabétisme en rendant l'écriture plus accessible. Taiwan, Hongkong et Macao ont conservé la forme originale des caractères — celle qui existe depuis des siècles. Pour les Taiwanais, les caractères traditionnels ne sont pas une relique du passé : ils sont un héritage culturel vivant, une source de fierté nationale, et un lien direct avec des millénaires de littérature, de philosophie et d'histoire chinoise.",
      },
      {
        type: "comparison",
        content:
          "Traditionnels vs Simplifiés : 學 vs 学 (apprendre), 國 vs 国 (pays), 書 vs 书 (livre), 龍 vs 龙 (dragon), 醫 vs 医 (médecine), 聽 vs 听 (écouter). Les caractères traditionnels contiennent plus de traits mais sont souvent plus logiques dans leur structure — chaque composant a un sens.",
      },
      {
        type: "text",
        content:
          "Les radicaux sont la clé pour comprendre les caractères chinois. Un radical est un composant récurrent qui donne un indice sur la catégorie sémantique du caractère. Il en existe environ 214 dans le système classique, mais en pratique une trentaine suffisent pour déchiffrer la majorité des caractères courants. Prenons le radical 水 (shuǐ, eau). Quand il apparaît dans un caractère, il prend souvent la forme abrégée 氵 (trois petits traits à gauche). Tous les caractères qui contiennent ce radical ont un rapport avec l'eau ou les liquides.",
      },
      {
        type: "example",
        content: "Le radical de l'eau 水/氵 dans différents caractères",
        chinese: "河 海 湖 洗 游 泳 淚 漢",
        pinyin: "hé hǎi hú xǐ yóu yǒng lèi hàn",
        translation:
          "rivière, mer, lac, laver, nager, nager, larmes, Han (chinois) — tous contiennent le radical de l'eau",
      },
      {
        type: "example",
        content: "Le radical de la bouche 口 dans différents caractères",
        chinese: "吃 喝 叫 吹 唱 嗎 呢 吧",
        pinyin: "chī hē jiào chuī chàng ma ne ba",
        translation:
          "manger, boire, crier, souffler, chanter, particule interrogative, particule, particule — tous impliquent la bouche",
      },
      {
        type: "text",
        content:
          "Un caractère chinois n'est pas un dessin aléatoire. Il est construit selon des règles précises, généralement avec un radical sémantique (qui donne un indice sur le sens) et un composant phonétique (qui donne un indice sur la prononciation). Par exemple, le caractère 媽 (mā, maman) se compose du radical 女 (nǚ, femme) — qui indique que le sens est lié à une femme — et du composant 馬 (mǎ, cheval) qui n'a rien à voir avec le sens mais indique la prononciation approximative « ma ». Cette structure radical + phonétique s'applique à environ 80% des caractères chinois.",
      },
      {
        type: "example",
        content: "Structure radical + composant phonétique",
        chinese: "清 晴 請 情",
        pinyin: "qīng qíng qǐng qíng",
        translation:
          "clair/pur, ensoleillé, s'il vous plaît, sentiment — tous partagent le composant phonétique 青 (qīng) mais ont des radicaux différents : 氵(eau), 日(soleil), 言(parole), 忄(coeur)",
      },
      {
        type: "text",
        content:
          "Les 10 caractères les plus simples à apprendre sont aussi parmi les plus anciens et les plus fréquents. Ils sont issus de pictogrammes — des dessins stylisés d'objets réels. Commençons par les nombres : 一 (yī, un) est un simple trait horizontal, 二 (èr, deux) deux traits, 三 (sān, trois) trois traits. La logique est limpide. Ensuite : 人 (rén, personne) représente une silhouette humaine vue de côté, avec deux jambes. 大 (dà, grand) est un humain qui écarte les bras pour montrer « grand ». 小 (xiǎo, petit) montre quelque chose de divisé en petites parties. 日 (rì, soleil) était à l'origine un cercle avec un point au centre — le soleil. 月 (yuè, lune) représentait un croissant de lune. 山 (shān, montagne) dessine trois sommets. 水 (shuǐ, eau) évoque des gouttes et un courant.",
      },
      {
        type: "example",
        content: "Les 10 caractères les plus simples — pictogrammes ancestraux",
        chinese: "一 二 三 人 大 小 日 月 山 水",
        pinyin: "yī èr sān rén dà xiǎo rì yuè shān shuǐ",
        translation:
          "un, deux, trois, personne, grand, petit, soleil, lune, montagne, eau",
      },
      {
        type: "text",
        content:
          "L'étymologie visuelle des caractères est fascinante et aide énormément à la mémorisation. Le caractère 木 (mù) représente un arbre, avec le tronc et les branches. Mettez deux arbres côte à côte : 林 (lín) signifie « forêt, bosquet ». Trois arbres ? 森 (sēn) signifie « forêt dense ». Le caractère 口 (kǒu) dessine une bouche ouverte. Placez-le sous un toit 宀 et vous obtenez... non, pas « parler à la maison » mais quelque chose de plus subtil. La femme 女 (nǚ) sous un toit 宀 donne 安 (ān, paix, sécurité) — une femme à la maison symbolisait la stabilité dans la Chine ancienne. Deux femmes 女女 ensemble formaient jadis le caractère pour « dispute » (historiquement un stéréotype sexiste, certes, mais mémorable). Ces histoires, même quand elles sont simplifiées ou romancées, sont des outils mnémotechniques puissants.",
      },
      {
        type: "comparison",
        content:
          "Évolution des pictogrammes : le caractère 馬 (mǎ, cheval) était à l'origine un dessin d'un cheval avec quatre pattes, une crinière et une queue. Au fil des millénaires, il s'est stylisé jusqu'à sa forme actuelle. De même, 魚 (yú, poisson) montrait clairement un poisson avec sa tête, son corps et sa queue. Connaître ces origines transforme l'apprentissage des caractères : au lieu de mémoriser des traits abstraits, vous voyez des images.",
      },
    ],
  },
  {
    title: "Le système de tons — Ne le négligez pas",
    type: "grammar",
    content: [
      {
        type: "text",
        content:
          "Le mandarin est une langue tonale. Cela signifie que la hauteur et la direction de votre voix quand vous prononcez une syllabe changent le sens du mot. Le français utilise aussi l'intonation — vous montez la voix pour poser une question, par exemple — mais cette intonation n'est jamais distinctive : « table » reste « table » que vous le disiez sur un ton montant ou descendant. En mandarin, la même syllabe « ma » prononcée avec quatre hauteurs de voix différentes donne quatre mots complètement différents. Ce concept est déroutant au début, mais il est absolument fondamental. Ne faites pas l'erreur de négliger les tons en vous disant « on me comprendra quand même grâce au contexte ». Les Taiwanais sont patients, mais si vous dites mǎ (cheval) au lieu de mā (maman), la confusion peut être réelle — et parfois comique.",
      },
      {
        type: "text",
        content:
          "Le premier ton (陰平, yīnpíng) est haut et plat. Imaginez que vous chantez une note et que vous la tenez, ni trop haute ni trop basse — juste soutenue et stable. En notation, il est marqué par un trait horizontal au-dessus de la voyelle : ā. Physiquement, votre voix reste à la même hauteur du début à la fin de la syllabe, comme si vous chantonniez « laaaa » sur une seule note. C'est le ton le plus « facile » à comprendre conceptuellement, mais les francophones ont tendance à le laisser descendre à la fin. Restez bien haut et stable.",
      },
      {
        type: "example",
        content: "Ton 1 — haut et plat (comme chanter une note soutenue)",
        chinese: "媽 (mā)",
        pinyin: "mā",
        translation: "maman — voix haute, stable, soutenue",
      },
      {
        type: "text",
        content:
          "Le deuxième ton (陽平, yángpíng) est montant. Votre voix part du milieu et monte vers le haut, comme quand vous dites « Hein ?! » avec surprise, ou « Quoi ?! » avec étonnement. En notation : á. C'est le ton de l'interrogation en français, sauf qu'ici il ne marque pas une question — il fait partie intégrante du mot. Si quelqu'un frappe à votre porte et que vous dites « Oui ? » avec cette intonation montante, vous avez le ton 2. Les francophones maîtrisent généralement ce ton assez vite car l'intonation interrogative leur est familière.",
      },
      {
        type: "example",
        content: "Ton 2 — montant (comme « Hein ?! » avec surprise)",
        chinese: "麻 (má)",
        pinyin: "má",
        translation: "chanvre / engourdissement — voix qui monte de moyen à haut",
      },
      {
        type: "text",
        content:
          "Le troisième ton (上聲, shǎngshēng) est le plus complexe. Théoriquement, il descend puis remonte, formant une sorte de cuvette. En pratique, quand il est suivi d'un autre ton, il ne remonte souvent pas — il reste bas et creux. La meilleure description : c'est le son « mmmh... » que vous faites quand vous réfléchissez en baissant la voix, avec cette vibration légèrement grinçante dans la gorge. En notation : ǎ. Votre voix descend vers le grave et traîne un peu. C'est le ton le plus difficile pour les francophones car il nécessite d'aller chercher dans les graves et d'ajouter cette qualité « creaky voice » (voix craquée) qui n'existe pas naturellement en français.",
      },
      {
        type: "example",
        content: "Ton 3 — descendant-montant (comme réfléchir « mmmh... »)",
        chinese: "馬 (mǎ)",
        pinyin: "mǎ",
        translation: "cheval — voix qui descend dans le grave puis remonte légèrement",
      },
      {
        type: "warning",
        content:
          "Quand deux tons 3 se suivent, le premier se transforme en ton 2. Ainsi 你好 (nǐ hǎo) se prononce en réalité « ní hǎo ». C'est une règle de sandhi tonal automatique. Vous n'avez pas besoin d'y penser consciemment — à force de pratique, cela deviendra naturel.",
      },
      {
        type: "text",
        content:
          "Le quatrième ton (去聲, qùshēng) est descendant et brusque. Votre voix part du haut et chute rapidement vers le bas, comme quand vous dites « NON ! » de manière catégorique, ou « Stop ! » avec autorité. En notation : à. C'est un ton court, net, décisif. Imaginez que vous grondez quelqu'un : « Ça suffit ! » — cette chute rapide de la voix, c'est le ton 4. Les francophones le maîtrisent bien car il correspond à l'intonation de l'affirmation catégorique ou de l'exclamation en français.",
      },
      {
        type: "example",
        content: "Ton 4 — descendant (comme un « NON ! » catégorique)",
        chinese: "罵 (mà)",
        pinyin: "mà",
        translation: "insulter / gronder — voix qui chute rapidement du haut vers le bas",
      },
      {
        type: "text",
        content:
          "Le cinquième ton, dit « ton neutre » ou « ton léger » (輕聲, qīngshēng), est court et atone. Il ne porte pas de marque en pinyin (ou parfois un point devant : ˙ma). Il se prononce légèrement et rapidement, sans accentuation particulière. On le retrouve dans les particules grammaticales comme 嗎 (ma, particule interrogative), 的 (de, particule possessive), 了 (le, particule de changement d'état). Sa hauteur dépend du ton qui le précède — il est donc relatif et non absolu.",
      },
      {
        type: "text",
        content:
          "Voici dix paires minimales — des mots identiques en tout point sauf le ton — qui illustrent à quel point les tons sont distinctifs. Le ton n'est pas un « accent » optionnel, c'est une composante essentielle du mot, au même titre que les consonnes et les voyelles. Confondre un ton, c'est prononcer un mot différent.",
      },
      {
        type: "example",
        content: "Paire 1 : mā vs mǎ",
        chinese: "媽 vs 馬",
        pinyin: "mā vs mǎ",
        translation: "maman vs cheval — ne confondez pas votre mère avec un cheval !",
      },
      {
        type: "example",
        content: "Paire 2 : wèn vs wěn",
        chinese: "問 vs 吻",
        pinyin: "wèn vs wěn",
        translation:
          "demander/poser une question vs embrasser — mauvais ton = situation gênante",
      },
      {
        type: "warning",
        content:
          "Autres paires piégeuses pour les francophones : 買 mǎi (acheter) vs 賣 mài (vendre) — une lettre de ton change toute la transaction. 睡 shuì (dormir) vs 水 shuǐ (eau). 是 shì (être) vs 十 shí (dix). 四 sì (quatre) vs 死 sǐ (mourir) — attention en donnant votre étage dans un ascenseur !",
      },
      {
        type: "warning",
        content:
          "Les erreurs typiques des francophones avec les tons : (1) transformer le ton 1 en ton 4 car en français l'intonation descend naturellement en fin de phrase ; (2) ne pas descendre assez bas pour le ton 3 — il faut vraiment aller chercher dans le grave ; (3) prononcer le ton 2 comme une simple question sans monter assez haut ; (4) négliger complètement les tons dans les phrases longues car on se concentre sur les mots. La solution : pratiquez les tons isolément d'abord, puis par paires, puis dans des phrases courtes. Enregistrez-vous et comparez avec des locuteurs natifs.",
      },
      {
        type: "tip",
        content:
          "Astuce mnémotechnique pour les 4 tons : Ton 1 = une ambulance au loin (sirène constante et haute). Ton 2 = un enfant surpris « Ah bon ?! ». Ton 3 = un ado blasé « mouais... ». Ton 4 = un père qui dit « Non ! » à son enfant. Associez chaque ton à cette image et la mémorisation sera instantanée.",
      },
      {
        type: "tip",
        content:
          "Ne cherchez pas la perfection tonale dès le premier jour. Les Taiwanais comprennent le contexte et sont habitués aux accents étrangers. Mais ne renoncez jamais à travailler vos tons — plus ils seront précis, plus on vous comprendra sans effort, et plus vous comprendrez les autres. C'est un investissement qui rapporte de façon exponentielle.",
      },
    ],
  },
  {
    title: "Pinyin et Zhuyin — Vos deux alliés",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Le pinyin (拼音, pīnyīn, littéralement « épeler les sons ») est le système de romanisation officiel du mandarin. Il utilise l'alphabet latin pour transcrire les sons chinois, ce qui le rend immédiatement accessible aux francophones. Mais attention : le pinyin n'est PAS du français, ni de l'anglais, ni de l'espagnol. Chaque lettre a une prononciation spécifique en pinyin, et certaines sont de véritables pièges pour les francophones habitués à leurs propres correspondances lettre-son.",
      },
      {
        type: "text",
        content:
          "Les pièges majeurs du pinyin pour un francophone : la lettre « c » ne se prononce pas « k » mais « ts » (comme « tsé-tsé »). Ainsi 菜 (cài, légume) se prononce « tsaï » et non « kaï ». La lettre « q » ne se prononce pas « k » mais approximativement « tch » avec la langue en position haute. 七 (qī, sept) se prononce « tchi » et non « ki ». La lettre « x » ne se prononce pas « ks » mais « ss/sh » avec la langue en position haute — un son entre le « s » et le « ch » qui n'existe pas en français. 小 (xiǎo, petit) se prononce « ssiao » et non « ksiao ». Le « zh » se prononce comme le « dj » anglais (presque « dr »), le « ch » comme le « tch » anglais, et le « sh » comme le « ch » français. Et le « r » initial se prononce comme un « j » français mouillé (comme dans « je » mais avec la langue rétroflexe).",
      },
      {
        type: "comparison",
        content:
          "Les consonnes piégeuses — Pinyin vs prononciation réelle pour un francophone : c = ts (pas « k »), q = tch (pas « k »), x = entre s et ch (pas « ks »), zh = dj rétroflexe (pas « z »), ch = tch rétroflexe (pas « ch »), sh = ch français (pas « ss »), r = entre « j » et « r » anglais, z = dz (pas « z » français), j = dj palatal (pas « j » français).",
      },
      {
        type: "text",
        content:
          "Le Zhuyin (注音, zhùyīn), aussi appelé Bopomofo (ㄅㄆㄇㄈ, d'après les quatre premiers symboles), est le système phonétique utilisé à Taiwan. Créé en 1913 et officiellement adopté en 1918, il utilise 37 symboles (plus 4 marques tonales) pour représenter tous les sons du mandarin. Les enfants taiwanais apprennent le Zhuyin en première année d'école primaire, avant de lire les caractères. À Taiwan, les claviers de téléphone et d'ordinateur proposent le Zhuyin comme méthode de saisie principale. Vous le verrez partout : dans les livres pour enfants (annoté à côté des caractères), sur les claviers, dans les dictionnaires taiwanais.",
      },
      {
        type: "comparison",
        content:
          "Pourquoi les Taiwanais préfèrent le Zhuyin au Pinyin : (1) il évite les confusions avec la prononciation anglaise ou française — chaque symbole a un son unique et non ambigu ; (2) il force à penser en termes de sons chinois plutôt qu'en termes de correspondances latines ; (3) c'est un marqueur culturel identitaire qui distingue Taiwan de la Chine continentale ; (4) les études montrent que les enfants qui apprennent le Zhuyin développent une meilleure conscience phonétique du mandarin que ceux qui utilisent le Pinyin.",
      },
      {
        type: "text",
        content:
          "Les sons les plus difficiles pour un francophone : (1) Les rétroflexes zh, ch, sh, r — en français, la langue est toujours plate dans la bouche. Pour ces sons, il faut recourber la pointe de la langue vers le palais. Commencez par dire « ch » français puis reculez la langue : vous vous approchez de « sh » en pinyin. (2) Le « ü » (comme dans 女 nǚ) — ce son existe en français (le « u » de « lune ») mais disparaît en pinyin après j, q, x où il s'écrit juste « u ». Donc 去 (qù, aller) se prononce « tchü » et non « tchou ». (3) Les finales « -eng » et « -ang » — les francophones confondent souvent ces deux nasales. « -ang » est un « an » ouvert, « -eng » est un « ong » fermé. (4) La distinction entre « -in » et « -ing » — les deux existent mais le « -ing » a un prolongement nasal postérieur que le « -in » n'a pas.",
      },
      {
        type: "tip",
        content:
          "Conseil stratégique : commencez par le Pinyin, c'est plus rapide pour un francophone et vous pourrez chercher des mots, taper sur votre téléphone et lire les panneaux romanisés à Taiwan dès le premier jour. Mais apprenez le Zhuyin en parallèle, progressivement. Quand vous chercherez un mot dans un dictionnaire taiwanais, quand vous utiliserez des applications locales, ou quand un Taiwanais essaiera de vous montrer la prononciation d'un caractère, le Zhuyin sera omniprésent.",
      },
      {
        type: "tip",
        content:
          "Un outil précieux : sur votre téléphone, activez le clavier Zhuyin en plus du Pinyin. Même si vous tapez en Pinyin au début, avoir le clavier Zhuyin vous exposera aux symboles et vous permettra de les apprendre passivement. Beaucoup d'expatriés à Taiwan finissent par passer au clavier Zhuyin après quelques mois car il est plus rapide une fois maîtrisé.",
      },
    ],
  },
  {
    title: "Votre première conversation",
    type: "practice",
    content: [
      {
        type: "text",
        content:
          "Vous êtes à Taiwan depuis quelques heures. Vous êtes dans un café, au marché, ou dans une librairie. Quelqu'un vous regarde avec curiosité — vous êtes visiblement étranger. Comment engager une conversation de base ? Voici le script pas à pas de votre toute première interaction en mandarin, expliquée mot par mot. L'objectif n'est pas la perfection — c'est d'oser, de communiquer, et de poser les premières briques. Chaque phrase est décomposée pour que vous compreniez non seulement QUOI dire, mais POURQUOI on le dit ainsi.",
      },
      {
        type: "text",
        content:
          "Étape 1 — Saluer. La salutation la plus connue est 你好 (nǐ hǎo), littéralement « tu bien ». C'est un salut neutre, assez formel, qui fonctionne dans toutes les situations. Mais voici une information que la plupart des manuels ne vous donnent pas : les Taiwanais n'utilisent presque jamais 你好 entre eux dans la vie quotidienne. Entre amis et collègues, on dit plutôt 嗨 (hāi, emprunté à l'anglais « hi »), ou simplement un sourire et un hochement de tête. 你好 est réservé aux situations formelles (rencontrer le patron de son conjoint, parler au téléphone à un inconnu, etc.) ou aux premières rencontres. En tant qu'étranger débutant, utilisez-le — c'est toujours correct et poli. Mais sachez que quand vous progresserez, vous l'utiliserez de moins en moins.",
      },
      {
        type: "example",
        content: "Saluer — formel vs informel",
        chinese: "你好！",
        pinyin: "Nǐ hǎo!",
        translation:
          "Bonjour ! (formel, premières rencontres, situations officielles)",
      },
      {
        type: "example",
        content: "Saluer — version décontractée",
        chinese: "嗨！",
        pinyin: "Hāi!",
        translation:
          "Salut ! (informel, entre amis, emprunté à l'anglais « hi »)",
      },
      {
        type: "text",
        content:
          "Étape 2 — Se présenter. Pour dire votre nom : 我叫 (wǒ jiào) + votre nom. 我 = je, 叫 = s'appeler. C'est aussi simple que « je m'appelle ». Si votre nom est Julian : 我叫朱利安 (Wǒ jiào Zhūlì'ān). Pour dire votre nationalité : 我是法國人 (Wǒ shì Fǎguó rén). 我 = je, 是 = être, 法國 = France, 人 = personne. Littéralement : « je suis France personne ». Cette structure PAYS + 人 fonctionne pour toutes les nationalités : 美國人 (Měiguó rén, Américain), 日本人 (Rìběn rén, Japonais), 台灣人 (Táiwān rén, Taiwanais).",
      },
      {
        type: "example",
        content: "Se présenter — nom et nationalité",
        chinese: "我叫朱利安，我是法國人。",
        pinyin: "Wǒ jiào Zhūlì'ān, wǒ shì Fǎguó rén.",
        translation: "Je m'appelle Julian, je suis français.",
      },
      {
        type: "text",
        content:
          "Étape 3 — Demander. Après vous être présenté, retournez la question avec 你呢？(nǐ ne?), qui signifie « et toi ? ». Le mot 呢 (ne) est une particule magique qui renvoie la question précédente à l'interlocuteur sans avoir à la reformuler. Si quelqu'un vous demande 你叫什麼名字？(Nǐ jiào shénme míngzì? — Comment t'appelles-tu ?) et que vous répondez puis ajoutez 你呢？, cela équivaut à « et toi, comment t'appelles-tu ? ». C'est un raccourci conversationnel extrêmement pratique que vous utiliserez constamment.",
      },
      {
        type: "example",
        content: "Relancer la conversation",
        chinese: "你呢？你是台灣人嗎？",
        pinyin: "Nǐ ne? Nǐ shì Táiwān rén ma?",
        translation: "Et toi ? Tu es Taiwanais(e) ?",
      },
      {
        type: "example",
        content: "Remercier et conclure",
        chinese: "謝謝！很高興認識你。",
        pinyin: "Xiè xiè! Hěn gāoxìng rènshi nǐ.",
        translation: "Merci ! Enchanté(e) de te connaître.",
      },
      {
        type: "example",
        content: "La phrase complète — votre première conversation",
        chinese:
          "你好！我叫朱利安，我是法國人。我在學中文。你呢？",
        pinyin:
          "Nǐ hǎo! Wǒ jiào Zhūlì'ān, wǒ shì Fǎguó rén. Wǒ zài xué zhōngwén. Nǐ ne?",
        translation:
          "Bonjour ! Je m'appelle Julian, je suis français. J'apprends le chinois. Et toi ?",
      },
      {
        type: "warning",
        content:
          "你好嗎？(Nǐ hǎo ma? — Comment vas-tu ?) est la phrase que TOUS les manuels de chinois enseignent en premier, mais elle n'est quasiment JAMAIS utilisée dans la conversation courante à Taiwan. Les Taiwanais ne se demandent pas « comment vas-tu ? » comme salutation automatique. Si quelqu'un vous dit 你好嗎？, c'est généralement parce qu'il sait que vous avez été malade ou que vous traversez une période difficile. En tant que salutation de base, préférez simplement 你好 ou même 嗨.",
      },
      {
        type: "tip",
        content:
          "À Taiwan, la façon la plus courante de « saluer » quelqu'un de familier est de commenter ce qu'il fait : 你要去哪裡？(Nǐ yào qù nǎlǐ? — Tu vas où ?) ou 吃飽了嗎？(Chī bǎo le ma? — Tu as mangé ?). Ces questions ne demandent pas une réponse précise — ce sont des formules sociales, l'équivalent de « ça va ? » en français. Répondez vaguement et souriez.",
      },
      {
        type: "tip",
        content:
          "N'ayez pas peur de mélanger chinois et anglais au début. Les Taiwanais le font eux-mêmes constamment. Dire 我要一個 coffee 是可以的 n'est pas une honte — c'est de la communication pragmatique. Vous affinerez avec le temps.",
      },
    ],
  },
];

const basicsLesson: Lesson = {
  id: "lesson-01",
  slug: "basics",
  title: "Les bases",
  titleZh: "基礎",
  description:
    "Apprenez les salutations essentielles, les pronoms et les nombres en chinois mandarin taiwanais.",
  icon: "👋",
  category: "basics",
  order: 1,
  sections,
  vocabulary: [
    {
      character: "你好",
      pinyin: "nǐ hǎo",
      zhuyin: "ㄋㄧˇ ㄏㄠˇ",
      french: "Bonjour",
      english: "Hello",
      example: {
        sentence: "你好，我是法國人。",
        pinyin: "Nǐ hǎo, wǒ shì Fǎguó rén.",
        translation: "Bonjour, je suis français.",
      },
    },
    {
      character: "謝謝",
      pinyin: "xiè xiè",
      zhuyin: "ㄒㄧㄝˋ ㄒㄧㄝˋ",
      french: "Merci",
      english: "Thank you",
      example: {
        sentence: "謝謝你的幫忙。",
        pinyin: "Xiè xiè nǐ de bāngmáng.",
        translation: "Merci pour ton aide.",
      },
    },
    {
      character: "是",
      pinyin: "shì",
      zhuyin: "ㄕˋ",
      french: "Être / Oui",
      english: "To be / Yes",
      example: {
        sentence: "我是學生。",
        pinyin: "Wǒ shì xuéshēng.",
        translation: "Je suis étudiant.",
      },
    },
    {
      character: "不是",
      pinyin: "bú shì",
      zhuyin: "ㄅㄨˊ ㄕˋ",
      french: "Ne pas être / Non",
      english: "Not to be / No",
      example: {
        sentence: "他不是老師。",
        pinyin: "Tā bú shì lǎoshī.",
        translation: "Il n'est pas professeur.",
      },
    },
    {
      character: "我",
      pinyin: "wǒ",
      zhuyin: "ㄨㄛˇ",
      french: "Je / Moi",
      english: "I / Me",
    },
    {
      character: "你",
      pinyin: "nǐ",
      zhuyin: "ㄋㄧˇ",
      french: "Tu / Toi",
      english: "You",
    },
    {
      character: "他",
      pinyin: "tā",
      zhuyin: "ㄊㄚ",
      french: "Il / Lui",
      english: "He / Him",
    },
    {
      character: "她",
      pinyin: "tā",
      zhuyin: "ㄊㄚ",
      french: "Elle",
      english: "She / Her",
    },
    {
      character: "這個",
      pinyin: "zhè ge",
      zhuyin: "ㄓㄜˋ ㄍㄜˋ",
      french: "Celui-ci / Ceci",
      english: "This one",
      example: {
        sentence: "我要這個。",
        pinyin: "Wǒ yào zhè ge.",
        translation: "Je veux celui-ci.",
      },
    },
    {
      character: "那個",
      pinyin: "nà ge",
      zhuyin: "ㄋㄚˋ ㄍㄜˋ",
      french: "Celui-là / Cela",
      english: "That one",
      example: {
        sentence: "那個多少錢？",
        pinyin: "Nà ge duōshǎo qián?",
        translation: "Combien coûte celui-là ?",
      },
    },
    {
      character: "多少錢",
      pinyin: "duōshǎo qián",
      zhuyin: "ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ",
      french: "Combien ça coûte ?",
      english: "How much?",
    },
    {
      character: "一",
      pinyin: "yī",
      zhuyin: "ㄧ",
      french: "Un (1)",
      english: "One",
    },
    {
      character: "二",
      pinyin: "èr",
      zhuyin: "ㄦˋ",
      french: "Deux (2)",
      english: "Two",
    },
    {
      character: "三",
      pinyin: "sān",
      zhuyin: "ㄙㄢ",
      french: "Trois (3)",
      english: "Three",
    },
    {
      character: "四",
      pinyin: "sì",
      zhuyin: "ㄙˋ",
      french: "Quatre (4)",
      english: "Four",
    },
    {
      character: "五",
      pinyin: "wǔ",
      zhuyin: "ㄨˇ",
      french: "Cinq (5)",
      english: "Five",
    },
    {
      character: "六",
      pinyin: "liù",
      zhuyin: "ㄌㄧㄡˋ",
      french: "Six (6)",
      english: "Six",
    },
    {
      character: "七",
      pinyin: "qī",
      zhuyin: "ㄑㄧ",
      french: "Sept (7)",
      english: "Seven",
    },
    {
      character: "八",
      pinyin: "bā",
      zhuyin: "ㄅㄚ",
      french: "Huit (8)",
      english: "Eight",
    },
    {
      character: "九",
      pinyin: "jiǔ",
      zhuyin: "ㄐㄧㄡˇ",
      french: "Neuf (9)",
      english: "Nine",
    },
    {
      character: "十",
      pinyin: "shí",
      zhuyin: "ㄕˊ",
      french: "Dix (10)",
      english: "Ten",
    },
  ],
  phrases: [
    {
      chinese: "你好嗎？",
      pinyin: "Nǐ hǎo ma?",
      zhuyin: "ㄋㄧˇ ㄏㄠˇ ㄇㄚ˙",
      french: "Comment vas-tu ?",
      english: "How are you?",
      context:
        "Salutation courante, mais moins utilisée entre amis à Taiwan qu'en Occident.",
    },
    {
      chinese: "很好，謝謝！",
      pinyin: "Hěn hǎo, xiè xiè!",
      zhuyin: "ㄏㄣˇ ㄏㄠˇ ㄒㄧㄝˋ ㄒㄧㄝˋ",
      french: "Très bien, merci !",
      english: "Very good, thank you!",
    },
    {
      chinese: "對不起。",
      pinyin: "Duì bù qǐ.",
      zhuyin: "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ",
      french: "Excusez-moi / Pardon.",
      english: "I'm sorry / Excuse me.",
    },
    {
      chinese: "沒關係。",
      pinyin: "Méi guānxì.",
      zhuyin: "ㄇㄟˊ ㄍㄨㄢ ㄒㄧˋ",
      french: "Ce n'est pas grave.",
      english: "It's okay / No problem.",
    },
    {
      chinese: "請問，這個多少錢？",
      pinyin: "Qǐngwèn, zhè ge duōshǎo qián?",
      zhuyin: "ㄑㄧㄥˇ ㄨㄣˋ ㄓㄜˋ ㄍㄜˋ ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ",
      french: "Excusez-moi, combien coûte ceci ?",
      english: "Excuse me, how much is this?",
      context: "請問 est une formule de politesse pour poser une question.",
    },
    {
      chinese: "再見！",
      pinyin: "Zàijiàn!",
      zhuyin: "ㄗㄞˋ ㄐㄧㄢˋ",
      french: "Au revoir !",
      english: "Goodbye!",
    },
    {
      chinese: "不客氣。",
      pinyin: "Bú kèqì.",
      zhuyin: "ㄅㄨˊ ㄎㄜˋ ㄑㄧˋ",
      french: "De rien.",
      english: "You're welcome.",
    },
    {
      chinese: "我聽不懂。",
      pinyin: "Wǒ tīng bù dǒng.",
      zhuyin: "ㄨㄛˇ ㄊㄧㄥ ㄅㄨˋ ㄉㄨㄥˇ",
      french: "Je ne comprends pas.",
      english: "I don't understand.",
      context: "Phrase indispensable pour les débutants !",
    },
  ],
  culturalNotes: [
    "Le mandarin a 4 tons plus un ton neutre. Confondre les tons peut changer complètement le sens d'un mot : mā (媽 maman), má (麻 chanvre), mǎ (馬 cheval), mà (罵 insulter).",
    "À Taiwan, on utilise le zhuyin (bopomofo ㄅㄆㄇㄈ) plutôt que le pinyin pour apprendre la prononciation. Le zhuyin est enseigné dès l'école primaire.",
    "Les Taiwanais se saluent souvent par 吃飽了嗎？(Chī bǎo le ma? - Tu as mangé ?) plutôt que 你好嗎？. C'est une marque d'attention, pas une vraie question sur votre repas.",
    "À Taiwan, on utilise les caractères traditionnels (繁體字) et non les caractères simplifiés (簡體字) utilisés en Chine continentale.",
    "Le chiffre 4 (四 sì) est considéré comme malchanceux car il se prononce comme 死 (sǐ, mourir). Le chiffre 8 (八 bā) est considéré comme chanceux.",
  ],
  quiz: [
    {
      id: "basics-q1",
      type: "character-to-french",
      question: "謝謝",
      correctAnswer: "Merci",
      options: ["Bonjour", "Merci", "Au revoir", "Pardon"],
    },
    {
      id: "basics-q2",
      type: "french-to-character",
      question: "Bonjour",
      correctAnswer: "你好",
      options: ["你好", "謝謝", "再見", "對不起"],
    },
    {
      id: "basics-q3",
      type: "pinyin-to-character",
      question: "duōshǎo qián",
      correctAnswer: "多少錢",
      options: ["多少錢", "不客氣", "沒關係", "對不起"],
    },
    {
      id: "basics-q4",
      type: "character-to-french",
      question: "五",
      correctAnswer: "Cinq (5)",
      options: ["Trois (3)", "Cinq (5)", "Sept (7)", "Neuf (9)"],
    },
    {
      id: "basics-q5",
      type: "french-to-character",
      question: "Celui-ci / Ceci",
      correctAnswer: "這個",
      options: ["那個", "這個", "哪個", "每個"],
    },
    {
      id: "basics-q6",
      type: "character-to-french",
      question: "她",
      correctAnswer: "Elle",
      options: ["Il / Lui", "Elle", "Tu / Toi", "Je / Moi"],
    },
  ],
};

export default basicsLesson;
