import type { CourseUnit } from "@/types/course";

export const unit08: CourseUnit = {
  id: "unit-08",
  number: 8,
  title: "Demander son chemin",
  titleZh: "問路",
  chapter: 2,
  description:
    "Apprenez les directions, demandez où se trouvent les choses et naviguez dans le MRT de Taipei comme un local.",
  icon: "🧭",

  sections: [
    {
      title: "Les directions",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les directions de base en chinois fonctionnent par paires d'opposés : gauche/droite, devant/derrière, haut/bas. Ces mots sont les briques essentielles pour comprendre et donner des indications.",
        },
        {
          type: "example",
          chinese: "左",
          pinyin: "zuǒ",
          translation: "Gauche",
          content: "左 (gauche) et 右 (droite) sont la première paire à retenir.",
        },
        {
          type: "example",
          chinese: "右",
          pinyin: "yòu",
          translation: "Droite",
          content: "右 ressemble à une main qui pointe vers la droite.",
        },
        {
          type: "example",
          chinese: "前面",
          pinyin: "qiánmiàn",
          translation: "Devant",
          content: "面 (miàn) signifie « côté » et s'ajoute pour préciser la direction comme zone.",
        },
        {
          type: "example",
          chinese: "後面",
          pinyin: "hòumiàn",
          translation: "Derrière",
          content: "後 est le caractère traditionnel ; en simplifié c'est 后.",
        },
        {
          type: "text",
          content:
            "Le chinois utilise un systeme de directions d'une logique parfaite. Chaque direction est un caractere simple : 左 (gauche) et 右 (droite) forment une paire, 前 (devant) et 後 (derriere) une autre, 上 (dessus/monter) et 下 (dessous/descendre) la troisieme. Pour dire « aller vers », on utilise 往 (wǎng) suivi de la direction : 往左走 (aller vers la gauche), 往前走 (aller tout droit). C'est comme un GPS en 3 mots : direction + verbe. POURQUOI 上 et 下 sont essentiels au quotidien a Taiwan : on dit 上車 (shàng chē, monter dans un vehicule) et 下車 (xià chē, descendre), 上班 (shàng bān, aller au travail, litteralement « monter au travail ») et 下班 (xià bān, finir le travail). 上樓 (shàng lóu, monter a l'etage) et 下樓 (xià lóu, descendre). 上網 (shàng wǎng, aller sur internet, litteralement « monter sur le reseau ») et 下載 (xià zài, telecharger, litteralement « descendre et charger »). Ces combinaisons sont PARTOUT dans le chinois du quotidien. En fait, 上 et 下 sont probablement les deux caracteres les plus polyvalents de toute la langue. Ils expriment le mouvement vertical (monter/descendre), le debut et la fin d'une activite (上班/下班, 上課/下課 pour commencer/finir un cours), et meme la hierarchie (上司 shàng sī = superieur hierarchique, 下屬 xiàshǔ = subordonne). Quand vous voyez 上 ou 下 dans un mot, demandez-vous : est-ce un mouvement physique ? Un debut/une fin ? Ou une notion de hierarchie ? Cette reflexion vous aidera a deviner le sens de mots que vous n'avez jamais appris.",
        },
        {
          type: "text",
          content:
            "Pour donner une direction de mouvement, on utilise 往 (wǎng) + direction + 走 (zǒu, marcher). C'est la structure standard pour indiquer un chemin.",
        },
        {
          type: "example",
          chinese: "往左走",
          pinyin: "wǎng zuǒ zǒu",
          translation: "Tournez à gauche (allez vers la gauche)",
          content: "往 indique la direction du mouvement, 走 signifie marcher.",
        },
        {
          type: "example",
          chinese: "直走",
          pinyin: "zhí zǒu",
          translation: "Allez tout droit",
          content: "直 signifie « droit ». Pas besoin de 往 ici car « tout droit » n'est pas un côté.",
        },
        {
          type: "text",
          content:
            "Pour situer quelque chose, on utilise la structure 在 (zài) + position. 在 est un verbe qui signifie « se trouver à » ou « être à ».",
        },
        {
          type: "example",
          chinese: "銀行在左邊",
          pinyin: "yínháng zài zuǒbiān",
          translation: "La banque est à gauche",
          content: "邊 (biān) signifie « côté » et s'ajoute aux directions : 左邊, 右邊, 前邊, 後邊.",
        },
        {
          type: "tip",
          content:
            "À Taiwan, les gens utilisent souvent les gestes en même temps que les mots. Ne soyez pas surpris si quelqu'un vous prend par le bras pour vous montrer la direction !",
        },
        {
          type: "text",
          content:
            "Le chinois utilise un système spatial basé sur des PAIRES D'OPPOSÉS. Chaque concept de direction a son contraire : 左/右 (gauche/droite), 前/後 (devant/derrière), 上/下 (dessus/dessous), 裡/外 (intérieur/extérieur). Cette structure en paires est fondamentale — elle revient dans le vocabulaire, la grammaire (la question A不A, par exemple 好不好), et même la philosophie chinoise (yin/yang). Quand vous apprenez un mot de direction, apprenez TOUJOURS son opposé en même temps. Si vous retenez 左 (gauche), forcez-vous à retenir 右 (droite) dans la même session. Si vous apprenez 上面 (dessus), apprenez immédiatement 下面 (dessous). Cette habitude doublera votre vocabulaire spatial en moitié moins de temps. Notez aussi que ces paires se combinent avec des suffixes pour créer des variantes : 邊 (biān, côté) donne 左邊/右邊, 面 (miàn, surface/côté) donne 前面/後面, et 裡 (lǐ, intérieur) donne 這裡/那裡. Maîtriser ces suffixes vous permet de former des dizaines de mots de localisation à partir de quelques caractères de base.",
        },
        {
          type: "warning",
          content:
            "Attention aux homonymes directionnels ! 左 (zuǒ, gauche) et 走 (zǒu, marcher) ont des prononciations proches pour un francophone — la difference est dans l'initiale (z vs zh) et le ton (3e ton pour les deux, mais le son est different). 往左走 (wǎng zuǒ zǒu) contient les deux — entrainez-vous a bien les distinguer en les repetant lentement. Autre piege : 東 (dōng, est) et 動 (dòng, bouger) — quand quelqu'un dit 往東走 (wǎng dōng zǒu), il dit « allez vers l'est », pas « bougez ». Les quatre points cardinaux sont aussi utilises a Taiwan, surtout pour les noms de rues : 東 (dōng, est), 西 (xī, ouest), 南 (nán, sud), 北 (běi, nord). Beaucoup de rues a Taipei portent ces noms : 忠孝東路 (Zhōngxiào dōnglù, la route Zhongxiao Est), 忠孝西路 (Zhōngxiào xīlù, la route Zhongxiao Ouest). Comprendre 東西南北 vous aidera enormement a lire les panneaux de rues. Fun fact : le mot 東西 (dōngxi) signifie aussi « chose, truc » en chinois — un des mots les plus utilises de la langue, totalement deconnecte de son sens directionnel. Quand quelqu'un dit 買東西 (mǎi dōngxi), il dit « acheter des choses », pas « acheter l'est et l'ouest ».",
        },
        {
          type: "tip",
          content:
            "Comment donner et recevoir des indications à Taiwan : les Taiwanais utilisent beaucoup les POINTS DE REPÈRE plutôt que les directions abstraites. Au lieu de « tournez à gauche après 200 mètres », ils diront 到7-Eleven左轉 (au 7-Eleven tournez à gauche) ou 在麥當勞對面 (en face du McDonald's). Les convenience stores, les stations de MRT et les grands magasins sont les repères universels. Astuce : si vous êtes perdu, cherchez un 7-Eleven — il y en a un tous les 200 mètres en ville. Autre repère fiable : les stations YouBike (vélos en libre-service, reconnaissables à leur couleur jaune et orange). Quand quelqu'un vous dit 在那邊 (c'est par là-bas) avec un geste vague, insistez poliment en demandant un repère : 附近有什麼？(fùjìn yǒu shénme? — qu'est-ce qu'il y a à proximité ?). Vous obtiendrez presque toujours un nom de convenience store ou de station de MRT.",
        },
        {
          type: "warning",
          content:
            "Les Taiwanais sont EXTRÊMEMENT serviables quand vous demandez votre chemin — parfois TROP. Si quelqu'un ne connaît pas la réponse, il ne dira souvent pas « je ne sais pas » (pour ne pas perdre la face, 面子 miànzi). Il vous donnera une direction approximative ou vous accompagnera physiquement. Si les indications semblent vagues, demandez à une deuxième personne pour confirmer. Ce n'est pas de la mauvaise foi — c'est culturel. La notion de 面子 (face) est centrale dans la culture chinoise : refuser d'aider ou admettre son ignorance peut être perçu comme une perte de face. Vous pouvez aussi utiliser Google Maps en chinois — tapez votre destination en caractères et montrez l'écran à votre interlocuteur. Phrase utile : 我想去這裡 (wǒ xiǎng qù zhèlǐ — je veux aller ici) en pointant votre téléphone.",
        },
      ],
    },
    {
      title: "在哪裡？",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "La question la plus utile quand on est perdu : ...在哪裡？(zài nǎlǐ) = « ...est où ? ». Placez le lieu ou l'objet cherché devant 在哪裡 et vous avez votre question.",
        },
        {
          type: "example",
          chinese: "捷運站在哪裡？",
          pinyin: "jiéyùn zhàn zài nǎlǐ?",
          translation: "Où est la station de MRT ?",
          content: "Sujet + 在哪裡 : la structure de question de lieu la plus courante.",
        },
        {
          type: "example",
          chinese: "廁所在哪裡？",
          pinyin: "cèsuǒ zài nǎlǐ?",
          translation: "Où sont les toilettes ?",
          content: "Probablement la phrase la plus utile de toute cette unité.",
        },
        {
          type: "text",
          content:
            "Pour répondre, on utilise 在 suivi du lieu précis. 這裡 (zhèlǐ) signifie « ici » et 那裡 (nàlǐ) signifie « là-bas ».",
        },
        {
          type: "example",
          chinese: "在這裡",
          pinyin: "zài zhèlǐ",
          translation: "C'est ici",
          content: "Réponse courte et directe pour indiquer un endroit proche.",
        },
        {
          type: "example",
          chinese: "在那裡",
          pinyin: "zài nàlǐ",
          translation: "C'est là-bas",
          content: "Souvent accompagné d'un geste de la main pour pointer.",
        },
        {
          type: "example",
          chinese: "捷運站在前面",
          pinyin: "jiéyùn zhàn zài qiánmiàn",
          translation: "La station de MRT est devant",
          content: "在 + lieu/direction : la structure de réponse standard.",
        },
        {
          type: "tip",
          content:
            "哪裡 (nǎlǐ) = « où ? », 這裡 (zhèlǐ) = « ici », 那裡 (nàlǐ) = « là-bas ». Les trois partagent le suffixe 裡 (lǐ) qui indique un endroit. Facile à retenir !",
        },
        {
          type: "text",
          content:
            "La structure 在 est une des plus polyvalentes du chinois. Elle signifie à la fois « être à (un endroit) » et « à (un endroit, en train de faire quelque chose) ». Exemples : 我在台北 (je suis à Taipei), 餐廳在哪裡？(où est le restaurant ?), 我在吃飯 (je suis en train de manger). Le même mot 在 couvre 3 usages que le français sépare (être / à / en train de). C'est un mot que vous utiliserez dans CHAQUE conversation. Pour la localisation, 在 fonctionne comme un verbe : Sujet + 在 + Lieu. Pour l'action en cours, 在 fonctionne comme un marqueur progressif (équivalent de « be + -ing » en anglais) : Sujet + 在 + Verbe. Ne confondez pas les deux : le contexte suffit toujours à distinguer. Quand 在 est suivi d'un nom de lieu, c'est la localisation. Quand 在 est suivi d'un verbe d'action, c'est le progressif. Exemples supplémentaires : 我在家 (je suis à la maison) vs 我在看書 (je suis en train de lire). La question 你在哪裡？(nǐ zài nǎlǐ?) signifie « tu es où ? » — c'est la phrase que vos amis taiwanais vous enverront par LINE quand ils vous attendent quelque part.",
        },
      ],
    },
    {
      title: "Le MRT de Taipei",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le MRT de Taipei (捷運 jiéyùn) est l'un des meilleurs métros d'Asie : propre, ponctuel, climatisé et très facile à utiliser. Les lignes sont identifiées par couleur : rouge (淡水信義線), bleue (板南線), verte (松山新店線), orange (中和新蘆線) et jaune (環狀線).",
        },
        {
          type: "text",
          content:
            "Chaque station (捷運站 jiéyùn zhàn) a plusieurs sorties numérotées (出口 chūkǒu). Quand un Taiwanais vous donne rendez-vous, il précisera toujours le numéro de sortie : « 忠孝復興站，出口二 » (station Zhongxiao Fuxing, sortie 2).",
        },
        {
          type: "example",
          chinese: "請問，出口三在哪裡？",
          pinyin: "qǐngwèn, chūkǒu sān zài nǎlǐ?",
          translation: "Excusez-moi, où est la sortie 3 ?",
          content: "請問 (qǐngwèn) est la formule polie pour aborder quelqu'un.",
        },
        {
          type: "warning",
          content:
            "Interdit de manger et de boire dans le MRT ! C'est une règle stricte à Taiwan. L'amende peut aller jusqu'à 7 500 NT$. Même un chewing-gum ou une gorgée d'eau sont interdits une fois passé les portiques.",
        },
        {
          type: "example",
          chinese: "我要在下一站下車",
          pinyin: "wǒ yào zài xià yí zhàn xià chē",
          translation: "Je veux descendre à la prochaine station",
          content: "下車 (xià chē) = descendre d'un véhicule. 上車 (shàng chē) = monter.",
        },
        {
          type: "tip",
          content:
            "Le MRT est un excellent point de repère pour se situer dans Taipei. Apprenez les noms des stations de votre quartier en caractères : vous les verrez partout sur les panneaux.",
        },
        {
          type: "text",
          content:
            "Le MRT (Mass Rapid Transit) de Taipei, appele 捷運 (jiéyùn) a Taiwan, est le meilleur ami de l'etranger. Voici tout ce qu'il faut savoir en detail. LES LIGNES : chaque ligne a une couleur ET un numero. Ligne rouge (淡水信義線 Dànshuǐ Xìnyì xiàn) : traverse Taipei du nord au sud, de Tamsui (淡水, le vieux port avec son coucher de soleil celebre) a Xiangshan (象山, la randonnee avec vue panoramique sur Taipei 101). C'est la ligne que vous prendrez le plus souvent. Ligne bleue (板南線 Bǎnnán xiàn) : est-ouest, de Taipei Main Station (台北車站) vers Banqiao (板橋, dans New Taipei City) d'un cote, et vers Nangang (南港) de l'autre. Passe par Zhongxiao Dunhua (忠孝敦化), LE quartier du shopping. Ligne verte (松山新店線 Sōngshān Xīndiàn xiàn) : nord-est au sud-ouest, de Songshan (松山, pres du marche de nuit Raohe) a Xindian (新店, au bord de la riviere, parfait pour le velo). Ligne orange (中和新蘆線 Zhōnghé Xīnlú xiàn) : dessert l'ouest de Taipei et New Taipei City. Ligne jaune/circulaire (環狀線 Huánzhuàng xiàn) : la plus recente, elle fait un arc dans New Taipei City. Ligne marron (文湖線 Wénhú xiàn) : automatique (sans conducteur), sureleve, dessert l'est de Taipei dont le quartier de Neihu (內湖) ou se trouvent beaucoup d'entreprises tech. LES REGLES STRICTES (amendes de 1,500 a 7,500 NT$) : INTERDIT de manger ou boire dans les stations ET dans les rames (meme de l'eau — c'est la regle la plus surprenante pour les etrangers), INTERDIT de fumer (evidemment), INTERDIT d'emporter des animaux sans cage de transport (sauf chiens guides). Les places reservees (博愛座 bó'ài zuò, litteralement « sieges de l'amour bienveillant ») : pour les personnes agees, enceintes, handicapees ou avec de jeunes enfants. Ne vous y asseyez PAS meme si elles sont vides — c'est tres mal vu et peut provoquer des reactions virulentes sur les reseaux sociaux taiwanais. Ce sujet est un debat permanent a Taiwan. LES SORTIES : chaque station a plusieurs sorties numerotees (出口1, 出口2...). Quand quelqu'un vous dit 出口三 (chūkǒu sān), il parle de la sortie numero 3. Regardez les panneaux avant de sortir — se tromper de sortie peut vous mettre a 500m du bon endroit dans un quartier completement different. Google Maps indique toujours le numero de sortie le plus proche de votre destination. LA CARTE EASYCARD (悠遊卡 Yōuyóu kǎ) : bipez en entrant ET en sortant. Le prix depend de la distance parcourue (20-65 NT$). Si vous oubliez de bipper en sortant, allez au guichet (詢問處 xúnwèn chù) avec votre carte — ils regulariseront. Vous pouvez acheter et recharger votre EasyCard dans toutes les stations et dans les convenience stores. Elle fonctionne aussi dans les bus, les YouBike, et beaucoup de commerces.",
        },
        {
          type: "text",
          content:
            "Le MRT de Taipei (台北捷運 Táiběi jiéyùn) est un des systèmes de métro les plus propres et efficaces au monde. Il couvre Taipei et New Taipei City avec 6 lignes principales identifiées par couleur : 紅線 hóngxiàn (rouge, Tamsui-Xinyi), 藍線 lánxiàn (bleu, Bannan), 綠線 lǜxiàn (vert, Songshan-Xindian), 棕線 zōngxiàn (marron, Wenhu), 橘線 júxiàn (orange, Zhonghe-Xinlu), 黃線 huángxiàn (jaune, Circular). Chaque station a un code alphanumérique (ex: R10 = ligne rouge station 10, BL12 = ligne bleue station 12). Les annonces sont faites en quatre langues : mandarin, taiwanais (閩南語), hakka (客家話) et anglais. Les trains passent toutes les 2 à 5 minutes aux heures de pointe, et toutes les 7 à 10 minutes en heures creuses. Le premier train part vers 6h du matin. Le dernier train part vers minuit. RÈGLES STRICTES : il est interdit de manger, boire, ou chiquer du chewing-gum dans l'ensemble du réseau (quais et rames). L'amende va de 1,500 à 7,500 NT$ (environ 45 à 215€). Les Taiwanais respectent cette règle religieusement — vous ne verrez jamais personne grignoter dans le MRT. Autre règle de savoir-vivre : on se tient à droite sur les escalators et on laisse le côté gauche libre pour ceux qui marchent. Les places prioritaires (博愛座 bó'ài zuò) sont en bleu foncé — ne vous y asseyez pas si le métro est bondé, même si elles sont vides. La pression sociale est forte.",
        },
        {
          type: "tip",
          content:
            "Les sorties (出口 chūkǒu) du MRT sont numérotées et chacune mène à un endroit précis. Avant de sortir, regardez le plan des sorties (qui est affiché sur le quai et dans chaque rame). Google Maps vous dira « Sortie 3 » — c'est beaucoup plus utile qu'une adresse à Taiwan. Dites au taxi : 捷運台北車站三號出口 (jiéyùn Táiběi chēzhàn sānhào chūkǒu — MRT Taipei Main Station sortie 3) et il saura exactement où aller. Les numéros de sortie sont aussi le point de rendez-vous universel : quand un ami vous dit « on se retrouve à la sortie 2 de Zhongxiao Dunhua », c'est aussi précis qu'une adresse GPS. Conseil pratique : téléchargez l'app « 台北捷運 Go » (Taipei Metro Go) pour les horaires en temps réel et la carte interactive.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous êtes perdu près de la gare de Taipei (台北車站). Vous demandez votre chemin à un passant.",
    lines: [
      {
        speaker: "A",
        chinese: "請問，台北車站在哪裡？",
        pinyin: "qǐngwèn, Táiběi chēzhàn zài nǎlǐ?",
        french: "Excusez-moi, où est la gare de Taipei ?",
      },
      {
        speaker: "B",
        chinese: "台北車站在前面，直走大概五分鐘。",
        pinyin: "Táiběi chēzhàn zài qiánmiàn, zhí zǒu dàgài wǔ fēnzhōng.",
        french: "La gare de Taipei est devant, tout droit environ 5 minutes.",
        note: "大概 (dàgài) = environ. Les Taiwanais donnent souvent le temps de marche plutôt que la distance.",
      },
      {
        speaker: "A",
        chinese: "捷運站也在那裡嗎？",
        pinyin: "jiéyùn zhàn yě zài nàlǐ ma?",
        french: "La station de MRT est aussi là-bas ?",
      },
      {
        speaker: "B",
        chinese: "對，在車站的下面。你從出口一進去。",
        pinyin: "duì, zài chēzhàn de xiàmiàn. nǐ cóng chūkǒu yī jìnqù.",
        french: "Oui, en dessous de la gare. Tu entres par la sortie 1.",
      },
      {
        speaker: "A",
        chinese: "好的，往前走，出口一，謝謝！",
        pinyin: "hǎo de, wǎng qián zǒu, chūkǒu yī, xièxiè!",
        french: "D'accord, tout droit, sortie 1, merci !",
      },
      {
        speaker: "B",
        chinese: "不客氣！直走就到了。",
        pinyin: "bú kèqì! zhí zǒu jiù dào le.",
        french: "De rien ! Tout droit et tu y es.",
        note: "就到了 (jiù dào le) = vous y serez, c'est juste là.",
      },
    ],
  },

  keyPoints: [
    "Les directions fonctionnent par paires : 左/右 (gauche/droite), 前/後 (devant/derrière), 上/下 (haut/bas).",
    "Pour demander un lieu : Sujet + 在哪裡？Pour répondre : 在 + lieu/direction.",
    "往 + direction + 走 pour indiquer un mouvement. 直走 pour « tout droit ».",
    "Le MRT de Taipei (捷運) est identifié par couleurs, avec des sorties numérotées (出口). Interdit d'y manger ou boire.",
  ],

  vocabulary: [
    {
      character: "左",
      pinyin: "zuǒ",
      zhuyin: "ㄗㄨㄛˇ",
      french: "Gauche",
      english: "Left",
      example: {
        sentence: "往左走。",
        pinyin: "wǎng zuǒ zǒu.",
        translation: "Tournez à gauche.",
      },
    },
    {
      character: "右",
      pinyin: "yòu",
      zhuyin: "ㄧㄡˋ",
      french: "Droite",
      english: "Right",
      example: {
        sentence: "往右走。",
        pinyin: "wǎng yòu zǒu.",
        translation: "Tournez à droite.",
      },
    },
    {
      character: "前面",
      pinyin: "qiánmiàn",
      zhuyin: "ㄑㄧㄢˊ ㄇㄧㄢˋ",
      french: "Devant",
      english: "In front / ahead",
      example: {
        sentence: "車站在前面。",
        pinyin: "chēzhàn zài qiánmiàn.",
        translation: "La gare est devant.",
      },
    },
    {
      character: "後面",
      pinyin: "hòumiàn",
      zhuyin: "ㄏㄡˋ ㄇㄧㄢˋ",
      french: "Derrière",
      english: "Behind / back",
      example: {
        sentence: "廁所在後面。",
        pinyin: "cèsuǒ zài hòumiàn.",
        translation: "Les toilettes sont derrière.",
      },
    },
    {
      character: "直走",
      pinyin: "zhí zǒu",
      zhuyin: "ㄓˊ ㄗㄡˇ",
      french: "Aller tout droit",
      english: "Go straight",
      example: {
        sentence: "直走五分鐘就到了。",
        pinyin: "zhí zǒu wǔ fēnzhōng jiù dào le.",
        translation: "Tout droit 5 minutes et tu y es.",
      },
    },
    {
      character: "轉",
      pinyin: "zhuǎn",
      zhuyin: "ㄓㄨㄢˇ",
      french: "Tourner",
      english: "To turn",
      example: {
        sentence: "往右轉。",
        pinyin: "wǎng yòu zhuǎn.",
        translation: "Tournez à droite.",
      },
    },
    {
      character: "在哪裡",
      pinyin: "zài nǎlǐ",
      zhuyin: "ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ",
      french: "Où est... ?",
      english: "Where is...?",
      example: {
        sentence: "你家在哪裡？",
        pinyin: "nǐ jiā zài nǎlǐ?",
        translation: "Où est ta maison ?",
      },
    },
    {
      character: "這裡",
      pinyin: "zhèlǐ",
      zhuyin: "ㄓㄜˋ ㄌㄧˇ",
      french: "Ici",
      english: "Here",
      example: {
        sentence: "我在這裡。",
        pinyin: "wǒ zài zhèlǐ.",
        translation: "Je suis ici.",
      },
    },
    {
      character: "那裡",
      pinyin: "nàlǐ",
      zhuyin: "ㄋㄚˋ ㄌㄧˇ",
      french: "Là-bas",
      english: "There",
      example: {
        sentence: "捷運站在那裡。",
        pinyin: "jiéyùn zhàn zài nàlǐ.",
        translation: "La station de MRT est là-bas.",
      },
    },
    {
      character: "出口",
      pinyin: "chūkǒu",
      zhuyin: "ㄔㄨ ㄎㄡˇ",
      french: "Sortie",
      english: "Exit",
      example: {
        sentence: "出口在左邊。",
        pinyin: "chūkǒu zài zuǒbiān.",
        translation: "La sortie est à gauche.",
      },
    },
    {
      character: "站",
      pinyin: "zhàn",
      zhuyin: "ㄓㄢˋ",
      french: "Station / gare",
      english: "Station / stop",
      example: {
        sentence: "下一站是台北車站。",
        pinyin: "xià yí zhàn shì Táiběi chēzhàn.",
        translation: "La prochaine station est Taipei Main Station.",
      },
    },
    {
      character: "走",
      pinyin: "zǒu",
      zhuyin: "ㄗㄡˇ",
      french: "Marcher / aller",
      english: "To walk / to go",
      example: {
        sentence: "我們走吧！",
        pinyin: "wǒmen zǒu ba!",
        translation: "Allons-y !",
      },
    },
    {
      character: "請問",
      pinyin: "qǐngwèn",
      zhuyin: "ㄑㄧㄥˇ ㄨㄣˋ",
      french: "Excusez-moi (pour demander)",
      english: "Excuse me (to ask)",
      example: {
        sentence: "請問，捷運站在哪裡？",
        pinyin: "qǐngwèn, jiéyùn zhàn zài nǎlǐ?",
        translation: "Excusez-moi, où est la station de MRT ?",
      },
    },
    {
      character: "對面",
      pinyin: "duìmiàn",
      zhuyin: "ㄉㄨㄟˋ ㄇㄧㄢˋ",
      french: "En face",
      english: "Opposite / across",
      example: {
        sentence: "銀行在對面。",
        pinyin: "yínháng zài duìmiàn.",
        translation: "La banque est en face.",
      },
    },
    {
      character: "旁邊",
      pinyin: "pángbiān",
      zhuyin: "ㄆㄤˊ ㄅㄧㄢ",
      french: "À côté",
      english: "Next to / beside",
      example: {
        sentence: "廁所在旁邊。",
        pinyin: "cèsuǒ zài pángbiān.",
        translation: "Les toilettes sont à côté.",
      },
    },
    {
      character: "遠",
      pinyin: "yuǎn",
      zhuyin: "ㄩㄢˇ",
      french: "Loin",
      english: "Far",
      example: {
        sentence: "捷運站很遠嗎？",
        pinyin: "jiéyùn zhàn hěn yuǎn ma?",
        translation: "La station de MRT est loin ?",
      },
    },
    {
      character: "近",
      pinyin: "jìn",
      zhuyin: "ㄐㄧㄣˋ",
      french: "Proche",
      english: "Near, close",
      example: {
        sentence: "超市很近，走路五分鐘。",
        pinyin: "chāoshì hěn jìn, zǒulù wǔ fēnzhōng.",
        translation: "Le supermarché est tout près, cinq minutes à pied.",
      },
    },
    {
      character: "找",
      pinyin: "zhǎo",
      zhuyin: "ㄓㄠˇ",
      french: "Chercher",
      english: "To look for",
      example: {
        sentence: "我在找捷運站。",
        pinyin: "wǒ zài zhǎo jiéyùn zhàn.",
        translation: "Je cherche la station de MRT.",
      },
    },
    {
      character: "等",
      pinyin: "děng",
      zhuyin: "ㄉㄥˇ",
      french: "Attendre",
      english: "To wait",
      example: {
        sentence: "請等一下。",
        pinyin: "qǐng děng yíxià.",
        translation: "Attendez un instant, s'il vous plaît.",
      },
    },
  ],

  exercises: [
    {
      id: "u6-ex1",
      type: "translate",
      question: "Comment dit-on « Où est la station de MRT ? » en chinois ?",
      correctAnswer: "捷運站在哪裡？",
      options: [
        "捷運站在哪裡？",
        "哪裡在捷運站？",
        "捷運站去哪裡？",
        "在捷運站哪裡？",
      ],
    },
    {
      id: "u6-ex2",
      type: "fill-blank",
      question: "往___走。(Tournez à gauche.)",
      correctAnswer: "左",
      options: ["左", "右", "前", "後"],
      hint: "Quel caractère signifie « gauche » ?",
    },
    {
      id: "u6-ex3",
      type: "comprehension",
      question: "Que signifie 直走 ?",
      correctAnswer: "Aller tout droit",
      options: [
        "Aller tout droit",
        "Tourner à droite",
        "Faire demi-tour",
        "S'arrêter",
      ],
    },
    {
      id: "u6-ex4",
      type: "translate",
      question: "Que signifie 出口在右邊 ?",
      correctAnswer: "La sortie est à droite",
      options: [
        "La sortie est à droite",
        "La sortie est à gauche",
        "L'entrée est à droite",
        "La sortie est devant",
      ],
    },
    {
      id: "u6-ex5",
      type: "comprehension",
      question:
        "Qu'est-ce qui est strictement interdit dans le MRT de Taipei ?",
      correctAnswer: "Manger et boire",
      options: [
        "Manger et boire",
        "Parler au téléphone",
        "Prendre des photos",
        "S'asseoir par terre",
      ],
    },
    {
      id: "u6-ex6",
      type: "fill-blank",
      question: "車站在___面。(La gare est devant.)",
      correctAnswer: "前",
      options: ["前", "後", "左", "上"],
      hint: "Quel caractère signifie « devant » ?",
    },
    {
      id: "u06-listen",
      type: "listen",
      question: "請問捷運站在哪裡？",
      correctAnswer: "Excusez-moi, où est la station de MRT ?",
      options: [
        "Excusez-moi, où est la station de MRT ?",
        "Je veux aller à la gare.",
        "Où sont les toilettes ?",
        "Comment aller au marché ?",
      ],
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-07"],
};
