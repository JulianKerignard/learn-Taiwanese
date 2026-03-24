import type { CourseUnit } from "@/types/course";

export const unit27: CourseUnit = {
  id: "unit-27",
  number: 27,
  title: "Raconter sa journée",
  titleZh: "說說你的一天",
  chapter: 5,
  description:
    "Apprenez à raconter une séquence d'événements en combinant les particules d'aspect (了, 過, 會) et les connecteurs temporels. Découvrez la salutation culturelle 你吃了嗎？ et maîtrisez l'aspect progressif avec 正在.",
  icon: "📅",

  sections: [
    {
      title: "Enchaîner les événements — 先...然後...最後",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour raconter sa journée, il ne suffit pas de lister des actions — il faut les enchaîner de manière fluide. Le chinois utilise des marqueurs temporels et des connecteurs de séquence pour structurer un récit. Comme vu dans les unités précédentes, 了 marque l'accomplissement d'une action (unité 15), 過 l'expérience (unité 16), et 了₂ le changement de situation (unité 21). Cette unité se concentre sur COMMENT les combiner dans un récit cohérent.",
        },
        {
          type: "text",
          content:
            "La structure de base pour raconter une séquence est : 先 (xiān, d'abord) + action₁，然後 (ránhòu, ensuite) + action₂，最後 (zuìhòu, enfin) + action₃. C'est l'ossature de tout récit chronologique.",
        },
        {
          type: "example",
          chinese: "我先去了市場，然後回家做飯，最後看了電視。",
          pinyin: "wǒ xiān qù le shìchǎng, ránhòu huíjiā zuòfàn, zuìhòu kàn le diànshì.",
          translation: "D'abord je suis allé au marché, ensuite je suis rentré cuisiner, enfin j'ai regardé la télé.",
          content: "Structure 先...然後...最後 avec 了 sur les actions accomplies spécifiques.",
        },
        {
          type: "text",
          content:
            "Les marqueurs de temps de la journée structurent le récit par moments : 早上 (zǎoshang, le matin), 中午 (zhōngwǔ, midi), 下午 (xiàwǔ, l'après-midi), 晚上 (wǎnshang, le soir). En chinois, ces marqueurs se placent AVANT le verbe, souvent en tête de phrase ou juste après le sujet.",
        },
        {
          type: "example",
          chinese: "早上我去了學校，中午跟同學吃了飯，下午上了三堂課，晚上回家休息。",
          pinyin: "zǎoshang wǒ qù le xuéxiào, zhōngwǔ gēn tóngxué chī le fàn, xiàwǔ shàng le sān táng kè, wǎnshang huíjiā xiūxi.",
          translation: "Le matin je suis allé à l'école, à midi j'ai mangé avec des camarades, l'après-midi j'ai eu trois cours, le soir je me suis reposé à la maison.",
          content: "Les marqueurs temporels (早上, 中午, 下午, 晚上) rythment le récit de la journée.",
        },
        {
          type: "example",
          chinese: "我昨天先去了銀行，然後買了東西，最後去朋友家吃晚餐。",
          pinyin: "wǒ zuótiān xiān qù le yínháng, ránhòu mǎi le dōngxi, zuìhòu qù péngyǒu jiā chī wǎncān.",
          translation: "Hier, d'abord je suis allé à la banque, ensuite j'ai fait des courses, enfin je suis allé dîner chez un ami.",
          content: "Combinaison de 昨天 (marqueur de jour) avec 先...然後...最後 (séquence).",
        },
        {
          type: "tip",
          content:
            "Quand vous racontez votre journée, n'oubliez pas que 了 n'est pas obligatoire sur chaque verbe. Seules les actions spécifiques et accomplies qui méritent d'être soulignées prennent 了. Les verbes dans une séquence fluide peuvent parfois s'en passer si le contexte temporel est déjà clair (comme après 昨天).",
        },
      ],
    },
    {
      title: "正在 — En train de",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour dire qu'une action est en cours au moment où l'on parle, on utilise 正在 (zhèngzài) ou simplement 在 (zài) devant le verbe. C'est l'aspect progressif du chinois, l'équivalent de « être en train de » en français. On peut aussi ajouter 呢 (ne) en fin de phrase pour renforcer le caractère en cours.",
        },
        {
          type: "example",
          chinese: "我正在吃飯。",
          pinyin: "wǒ zhèngzài chīfàn.",
          translation: "Je suis en train de manger.",
          content: "正在 + verbe = action en cours. C'est le présent progressif.",
        },
        {
          type: "example",
          chinese: "她在看書呢。",
          pinyin: "tā zài kànshū ne.",
          translation: "Elle est en train de lire.",
          content: "在 + verbe + 呢 : forme plus décontractée avec 呢 pour insister sur « en ce moment ».",
        },
        {
          type: "example",
          chinese: "你在做什麼？我正在寫功課。",
          pinyin: "nǐ zài zuò shénme? wǒ zhèngzài xiě gōngkè.",
          translation: "Tu fais quoi ? Je suis en train de faire mes devoirs.",
          content: "Question-réponse classique avec l'aspect progressif.",
        },
        {
          type: "comparison",
          content:
            "Ne confondez pas 在 (progressif) et 了 (accompli). 我在吃飯 = je suis en train de manger (en cours). 我吃了飯 = j'ai mangé (terminé). 在 décrit une action non terminée, 了 décrit une action bouclée. Ce sont deux perspectives opposées sur l'action.",
        },
        {
          type: "warning",
          content:
            "正在 / 在 ne s'utilise PAS avec les verbes d'état comme 是, 喜歡, 知道. On ne dit pas *我正在喜歡. Comme pour 了, seules les actions dynamiques acceptent l'aspect progressif.",
        },
      ],
    },
    {
      title: "Les compléments résultatifs — 看到, 聽懂, 做完",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "En chinois, on peut coller un « résultat » directement après le verbe pour indiquer le résultat obtenu par l'action. C'est le complément résultatif (結果補語). Au lieu de dire « j'ai cherché et j'ai trouvé », le chinois dit simplement 找到 — « chercher-trouver ». Le résultat est intégré au verbe.",
        },
        {
          type: "text",
          content:
            "Les quatre compléments résultatifs les plus courants pour un débutant sont : 到 (dào, atteindre le résultat), 懂 (dǒng, comprendre comme résultat), 完 (wán, finir/terminer), 好 (hǎo, bien fait/prêt).",
        },
        {
          type: "example",
          chinese: "我看到他了！",
          pinyin: "wǒ kàn dào tā le!",
          translation: "Je l'ai vu ! (regarder → l'avoir repéré)",
          content: "看到 = regarder + atteindre le résultat = avoir vu / apercevoir.",
        },
        {
          type: "example",
          chinese: "你聽懂了嗎？",
          pinyin: "nǐ tīng dǒng le ma?",
          translation: "Tu as compris ? (écouter → comprendre)",
          content: "聽懂 = écouter + comprendre = avoir compris ce qu'on a entendu.",
        },
        {
          type: "example",
          chinese: "我做完功課了。",
          pinyin: "wǒ zuò wán gōngkè le.",
          translation: "J'ai fini mes devoirs. (faire → terminer)",
          content: "做完 = faire + terminer = avoir fini de faire.",
        },
        {
          type: "example",
          chinese: "我找到了！",
          pinyin: "wǒ zhǎo dào le!",
          translation: "J'ai trouvé ! (chercher → trouver)",
          content: "找到 = chercher + atteindre = avoir trouvé.",
        },
        {
          type: "tip",
          content:
            "Les compléments résultatifs sont partout en chinois quotidien. La bonne nouvelle : ils sont logiques. Le premier caractère dit QUELLE action, le second dit QUEL résultat. 看到 (voir+atteindre), 聽懂 (écouter+comprendre), 做完 (faire+finir), 找到 (chercher+atteindre). Vous les reconnaîtrez vite dans les conversations.",
        },
      ],
    },
    {
      title: "你吃了嗎？ — La salutation secrète",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "你吃了嗎？ (nǐ chī le ma?) signifie littéralement « Tu as mangé ? ». Mais a Taiwan (et en Chine), ce n'est pas vraiment une question sur la nourriture. C'est une salutation, l'equivalent de « Ca va ? ». Ne soyez pas surpris si quelqu'un vous demande si vous avez mange : il ne vous invite pas a diner, il prend de vos nouvelles.",
        },
        {
          type: "example",
          chinese: "嘿，你吃了嗎？",
          pinyin: "hēi, nǐ chī le ma?",
          translation: "Hey, tu as mange ? (= Ca va ?)",
          content: "Salutation quotidienne, pas une vraie question sur le repas.",
        },
        {
          type: "text",
          content:
            "Cette habitude vient de l'importance de la nourriture dans la culture chinoise. Historiquement, demander si quelqu'un a mange etait une facon de s'assurer de son bien-etre. Aujourd'hui, c'est devenu une formule de politesse automatique.",
        },
        {
          type: "text",
          content:
            "Raconter sa journee est un geste social important a Taiwan. Les amis et collegues partagent volontiers les details de leur quotidien. Ne soyez pas surpris si on vous demande en detail ce que vous avez fait, mange, et ou vous etes alle.",
        },
        {
          type: "text",
          content:
            "La journee typique d'un Taiwanais commence souvent au 早餐店 (zǎocāndiàn), le petit magasin de petit-dejeuner, omnipresent a chaque coin de rue. On y achete un 蛋餅 (dàn bǐng, crepe aux oeufs) ou un 三明治 (sānmíngzhì, sandwich) avec un 豆漿 (doujiāng, lait de soja). Le dejeuner, c'est souvent un 便當 (biàndāng, bento/boite repas) achete dans un des innombrables petits restaurants.",
        },
        {
          type: "example",
          chinese: "我早上去早餐店買了蛋餅，然後去上班。",
          pinyin: "wǒ zǎoshang qù zǎocāndiàn mǎi le dàn bǐng, ránhòu qù shàngbān.",
          translation: "Ce matin je suis alle au petit-dej acheter une crepe aux oeufs, puis je suis alle travailler.",
          content: "Structure typique pour raconter sa matinee.",
        },
        {
          type: "tip",
          content:
            "Quand on vous dit 你吃了嗎？, repondez simplement 吃了 (oui, j'ai mange) ou 還沒 (pas encore). Si vous repondez 還沒, il est possible que la personne vous propose d'aller manger ensemble.",
        },
        {
          type: "text",
          content:
            "Pour raconter une histoire fluide en chinois, vous avez besoin de connecteurs qui structurent le temps. Voici les essentiels au-dela de 先...然後...最後 :\n\nSimultaneite : 一邊...一邊 (yìbiān...yìbiān, en meme temps)\n我一邊吃飯一邊看電視。(wǒ yìbiān chīfàn yìbiān kàn diànshì, je mange tout en regardant la tele.)\nCette structure est tres utile pour decrire le multitache quotidien. 一邊走路一邊聽音樂 (marcher en ecoutant de la musique), 一邊工作一邊喝咖啡 (travailler en buvant du cafe). Les deux actions doivent etre simultanees et compatibles — on ne peut pas dire 一邊睡覺一邊跑步 (dormir en courant).\n\nDes que : 一...就 (yī...jiù, des que)\n我一回家就洗澡。(wǒ yī huíjiā jiù xǐzǎo, des que je rentre, je prends une douche.)\n下雨的時候，我就不出門。(xiàyǔ de shíhòu, wǒ jiù bù chūmén, quand il pleut, je ne sors pas.)\nCette structure exprime une reaction automatique. Le 一 se place juste avant le premier verbe, le 就 avant le second. C'est tres courant pour decrire les habitudes : 我一起床就喝咖啡 (des que je me leve, je bois du cafe).\n\nDuree continue : 了...了 (le...le, depuis... et ca continue)\n我學中文學了三個月了。(wǒ xué zhōngwén xué le sān ge yuè le, j'apprends le chinois depuis 3 mois — et je continue.)\n他在台灣住了兩年了。(tā zài Táiwān zhù le liǎng nián le, il habite a Taiwan depuis 2 ans — et il y habite encore.)\nLe premier 了 est le 了 d'accomplissement (apres le verbe), le second 了 est le 了 de changement de situation (en fin de phrase). Ensemble, ils creent le sens de « depuis... et ca continue encore ».\n\nFrequence : 每天/每次/每年 + 都 (měitiān/měicì/měinián + dōu, chaque jour/fois/an, toujours)\n我每天都喝珍珠奶茶。(wǒ měitiān dōu hē zhēnzhū nǎichá, je bois du bubble tea tous les jours.)\n她每次來台灣都去夜市。(tā měicì lái Táiwān dōu qù yèshì, a chaque fois qu'elle vient a Taiwan, elle va au marche de nuit.)\nLe 都 (dōu) renforce l'idee de « sans exception ». Sans 都, la phrase est moins forte : 我每天喝珍珠奶茶 = je bois du bubble tea tous les jours (en general). Avec 都 : tous les jours SANS EXCEPTION.",
        },
        {
          type: "example",
          chinese: "我一邊走路一邊聽音樂",
          pinyin: "wǒ yìbiān zǒulù yìbiān tīng yīnyuè",
          translation: "Je marche en ecoutant de la musique",
          content: "一邊...一邊 pour deux actions simultanees. Tres courant dans la vie quotidienne.",
        },
        {
          type: "example",
          chinese: "我一到台灣就愛上了這裡的食物",
          pinyin: "wǒ yī dào Táiwān jiù ài shàng le zhèlǐ de shíwù",
          translation: "Des que je suis arrive a Taiwan, je suis tombe amoureux de la nourriture d'ici",
          content: "一...就 exprime une reaction immediate. 愛上 = tomber amoureux de (complement resultatif).",
        },
        {
          type: "example",
          chinese: "我在台北住了半年了",
          pinyin: "wǒ zài Táiběi zhù le bàn nián le",
          translation: "J'habite a Taipei depuis six mois (et j'y habite encore)",
          content: "了...了 exprime une duree qui continue. 半年 = six mois.",
        },
        {
          type: "text",
          content:
            "La salutation 你吃了嗎？ (nǐ chī le ma?, tu as mange ?) est l'une des particularites les plus connues de la culture chinoise. Ce n'est PAS une vraie question sur la nourriture — c'est l'equivalent de « ca va ? ». Elle vient d'une epoque ou les famines etaient courantes et manger etait un privilege. Demander si quelqu'un avait mange, c'etait s'assurer qu'il allait bien, qu'il avait de quoi survivre.\n\nAujourd'hui c'est reste comme salutation, surtout entre voisins, collegues et personnes agees. Les jeunes Taiwanais l'utilisent moins, mais vous l'entendrez quand meme regulierement. Si on vous le demande, la reponse standard est 吃了 (chī le, j'ai mange) meme si ce n'est pas vrai. Ne repondez pas par un expose detaille de votre menu — souriez et dites 吃了，你呢？(chī le, nǐ ne?, j'ai mange, et toi ?).\n\nCette salutation revele quelque chose de profond sur la culture taiwanaise : l'importance de la nourriture comme lien social. A Taiwan, manger ensemble est l'activite sociale par excellence. On ne dit pas « on se voit ? » mais 要不要一起吃飯？(yào bú yào yìqǐ chīfàn?, on mange ensemble ?). Les relations se construisent et se maintiennent autour de la table. Un collegue qui vous invite a dejeuner vous fait un honneur. Un ami qui partage son plat vous montre son affection.\n\nAutres salutations courantes qui ne sont pas de vraies questions :\n- 去哪裡？(qù nǎlǐ?, tu vas ou ?) — ne detaillez pas votre itineraire, dites juste 出去走走 (chūqù zǒuzǒu, je sors faire un tour).\n- 下班了？(xiàbān le?, tu as fini le travail ?) — repondez simplement 對啊 (duì a, oui).\n- 最近怎麼樣？(zuìjìn zěnmeyàng?, comment ca va ces derniers temps ?) — repondez 還不錯 (hái búcuò, pas mal).",
        },
        {
          type: "example",
          chinese: "去哪裡？出去走走。",
          pinyin: "qù nǎlǐ? chūqù zǒuzǒu.",
          translation: "Tu vas ou ? Je sors faire un tour.",
          content: "Salutation quotidienne entre voisins. 走走 (redoublement du verbe) = se balader un peu.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous racontez votre premiere semaine a Taiwan a votre ami 小華 (Xiǎo Hua) par message LINE.",
    lines: [
      {
        speaker: "小華",
        chinese: "你來台灣一個星期了！怎麼樣？",
        pinyin: "nǐ lái Táiwān yí ge xīngqī le! zěnmeyàng?",
        french: "Ca fait une semaine que tu es a Taiwan ! C'est comment ?",
      },
      {
        speaker: "你",
        chinese: "很好！我先去了台北101，然後去了夜市，最後還去了九份。",
        pinyin: "hěn hǎo! wǒ xiān qù le Táiběi yī-líng-yī, ránhòu qù le yèshì, zuìhòu hái qù le Jiǔfèn.",
        french: "Super ! D'abord je suis alle a Taipei 101, puis au marche de nuit, et enfin j'ai meme ete a Jiufen.",
      },
      {
        speaker: "小華",
        chinese: "你吃過臭豆腐嗎？",
        pinyin: "nǐ chī guò chòudòufu ma?",
        french: "Tu as deja goute le tofu puant ?",
      },
      {
        speaker: "你",
        chinese: "吃過了！因為很特別，所以我很喜歡。我正在學怎麼用筷子夾它。",
        pinyin: "chī guò le! yīnwèi hěn tèbié, suǒyǐ wǒ hěn xǐhuān. wǒ zhèngzài xué zěnme yòng kuàizi jiā tā.",
        french: "Oui ! Comme c'est tres special, j'aime beaucoup. Je suis en train d'apprendre a le prendre avec des baguettes.",
        note: "正在 exprime l'action en cours (aspect progressif).",
      },
      {
        speaker: "小華",
        chinese: "太好了！你聽懂台灣人說的中文嗎？",
        pinyin: "tài hǎo le! nǐ tīng dǒng Táiwānrén shuō de Zhōngwén ma?",
        french: "Super ! Tu comprends le chinois que parlent les Taiwanais ?",
        note: "聽懂 est un complement resultatif : ecouter + comprendre.",
      },
      {
        speaker: "你",
        chinese: "有時候聽懂，有時候聽不懂。可是我每天都在學！",
        pinyin: "yǒu shíhòu tīng dǒng, yǒu shíhòu tīng bù dǒng. kěshì wǒ měitiān dōu zài xué!",
        french: "Parfois je comprends, parfois non. Mais j'apprends tous les jours !",
        note: "聽不懂 est la forme negative du complement resultatif. 在學 = en train d'apprendre.",
      },
      {
        speaker: "小華",
        chinese: "這個週末我會帶你去吃早餐店，先吃蛋餅，然後喝豆漿。",
        pinyin: "zhège zhōumò wǒ huì dài nǐ qù chī zǎocāndiàn, xiān chī dàn bǐng, ránhòu hē dòujiāng.",
        french: "Ce week-end je t'emmenerai manger dans un petit-dej, d'abord des crepes aux oeufs, puis du lait de soja.",
      },
    ],
  },

  keyPoints: [
    "先...然後...最後 pour structurer un recit chronologique. Les marqueurs temporels (早上, 中午, 下午, 晚上) rythment la journee.",
    "正在 / 在 + verbe (+ 呢) = etre en train de. Aspect progressif pour une action en cours. Ne s'utilise pas avec les verbes d'etat.",
    "Complements resultatifs : 看到 (voir), 聽懂 (comprendre en ecoutant), 做完 (finir de faire), 找到 (trouver). Le premier caractere = action, le second = resultat.",
    "你吃了嗎？ (Tu as mange ?) est une salutation courante a Taiwan, pas une vraie question sur le repas. Repondez 吃了 ou 還沒.",
    "Pour raconter sa journee, combinez les particules d'aspect deja apprises (了 pour l'accompli, 過 pour l'experience, 會 pour le futur) avec les connecteurs de sequence.",
  ],

  vocabulary: [
    {
      character: "先",
      pinyin: "xiān",
      zhuyin: "ㄒㄧㄢ",
      french: "D'abord, en premier",
      english: "First",
      example: {
        sentence: "先洗手，然後吃飯。",
        pinyin: "xiān xǐ shǒu, ránhòu chīfàn.",
        translation: "D'abord se laver les mains, ensuite manger.",
      },
    },
    {
      character: "然後",
      pinyin: "ránhòu",
      zhuyin: "ㄖㄢˊ ㄏㄡˋ",
      french: "Ensuite, apres",
      english: "Then, after that",
      example: {
        sentence: "先吃飯，然後去看電影。",
        pinyin: "xiān chīfàn, ránhòu qù kàn diànyǐng.",
        translation: "D'abord on mange, ensuite on va voir un film.",
      },
    },
    {
      character: "最後",
      pinyin: "zuìhòu",
      zhuyin: "ㄗㄨㄟˋ ㄏㄡˋ",
      french: "Enfin, finalement",
      english: "Finally, at last",
      example: {
        sentence: "最後我們回家了。",
        pinyin: "zuìhòu wǒmen huíjiā le.",
        translation: "Enfin, nous sommes rentres.",
      },
    },
    {
      character: "所以",
      pinyin: "suǒyǐ",
      zhuyin: "ㄙㄨㄛˇ ㄧˇ",
      french: "Donc, par consequent",
      english: "So, therefore",
      example: {
        sentence: "太晚了，所以我回家了。",
        pinyin: "tài wǎn le, suǒyǐ wǒ huí jiā le.",
        translation: "Il est trop tard, donc je suis rentre.",
      },
    },
    {
      character: "因為",
      pinyin: "yīnwèi",
      zhuyin: "ㄧㄣ ㄨㄟˋ",
      french: "Parce que",
      english: "Because",
      example: {
        sentence: "因為很累，所以我想休息。",
        pinyin: "yīnwèi hěn lèi, suǒyǐ wǒ xiǎng xiūxi.",
        translation: "Parce que je suis fatigue, je veux me reposer.",
      },
    },
    {
      character: "可是",
      pinyin: "kěshì",
      zhuyin: "ㄎㄜˇ ㄕˋ",
      french: "Mais",
      english: "But, however",
      example: {
        sentence: "好吃，可是太辣了。",
        pinyin: "hǎochī, kěshì tài là le.",
        translation: "C'est bon, mais trop epice.",
      },
    },
    {
      character: "早上",
      pinyin: "zǎoshang",
      zhuyin: "ㄗㄠˇ ㄕㄤˋ",
      french: "Le matin",
      english: "Morning",
      example: {
        sentence: "我早上七點起床。",
        pinyin: "wǒ zǎoshang qī diǎn qǐchuáng.",
        translation: "Je me leve a 7h le matin.",
      },
    },
    {
      character: "下午",
      pinyin: "xiàwǔ",
      zhuyin: "ㄒㄧㄚˋ ㄨˇ",
      french: "L'apres-midi",
      english: "Afternoon",
      example: {
        sentence: "下午我去圖書館。",
        pinyin: "xiàwǔ wǒ qù túshūguǎn.",
        translation: "L'apres-midi je vais a la bibliotheque.",
      },
    },
    {
      character: "晚上",
      pinyin: "wǎnshang",
      zhuyin: "ㄨㄢˇ ㄕㄤˋ",
      french: "Le soir",
      english: "Evening, night",
      example: {
        sentence: "晚上我們去夜市。",
        pinyin: "wǎnshang wǒmen qù yèshì.",
        translation: "Ce soir on va au marche de nuit.",
      },
    },
    {
      character: "吃飯",
      pinyin: "chīfàn",
      zhuyin: "ㄔ ㄈㄢˋ",
      french: "Manger (un repas)",
      english: "To eat (a meal)",
      example: {
        sentence: "你吃飯了嗎？",
        pinyin: "nǐ chīfàn le ma?",
        translation: "Tu as mange ?",
      },
    },
    {
      character: "回家",
      pinyin: "huíjiā",
      zhuyin: "ㄏㄨㄟˊ ㄐㄧㄚ",
      french: "Rentrer a la maison",
      english: "To go home",
      example: {
        sentence: "我五點回家。",
        pinyin: "wǒ wǔ diǎn huíjiā.",
        translation: "Je rentre a 5h.",
      },
    },
    {
      character: "睡覺",
      pinyin: "shuìjiào",
      zhuyin: "ㄕㄨㄟˋ ㄐㄧㄠˋ",
      french: "Dormir",
      english: "To sleep",
      example: {
        sentence: "我十一點睡覺。",
        pinyin: "wǒ shíyī diǎn shuìjiào.",
        translation: "Je dors a 23h.",
      },
    },
    {
      character: "起床",
      pinyin: "qǐchuáng",
      zhuyin: "ㄑㄧˇ ㄔㄨㄤˊ",
      french: "Se lever",
      english: "To get up",
      example: {
        sentence: "我每天六點起床。",
        pinyin: "wǒ měitiān liù diǎn qǐchuáng.",
        translation: "Je me leve a 6h tous les jours.",
      },
    },
    {
      character: "出門",
      pinyin: "chūmén",
      zhuyin: "ㄔㄨ ㄇㄣˊ",
      french: "Sortir (de chez soi)",
      english: "To go out",
      example: {
        sentence: "下雨了，我不想出門。",
        pinyin: "xiàyǔ le, wǒ bù xiǎng chūmén.",
        translation: "Il pleut, je ne veux pas sortir.",
      },
    },
    {
      character: "正在",
      pinyin: "zhèngzài",
      zhuyin: "ㄓㄥˋ ㄗㄞˋ",
      french: "En train de",
      english: "In the process of, currently doing",
      example: {
        sentence: "我正在吃飯，等一下。",
        pinyin: "wǒ zhèngzài chīfàn, děng yīxià.",
        translation: "Je suis en train de manger, attends un peu.",
      },
    },
    {
      character: "看到",
      pinyin: "kàn dào",
      zhuyin: "ㄎㄢˋ ㄉㄠˋ",
      french: "Voir, apercevoir (resultat)",
      english: "To see (resultative: look + reach)",
      example: {
        sentence: "我看到他了。",
        pinyin: "wǒ kàn dào tā le.",
        translation: "Je l'ai vu.",
      },
    },
    {
      character: "聽懂",
      pinyin: "tīng dǒng",
      zhuyin: "ㄊㄧㄥ ㄉㄨㄥˇ",
      french: "Comprendre (en ecoutant)",
      english: "To understand (by listening)",
      example: {
        sentence: "你聽懂了嗎？",
        pinyin: "nǐ tīng dǒng le ma?",
        translation: "Tu as compris ?",
      },
    },
    {
      character: "做完",
      pinyin: "zuò wán",
      zhuyin: "ㄗㄨㄛˋ ㄨㄢˊ",
      french: "Finir de faire",
      english: "To finish doing",
      example: {
        sentence: "我做完功課了。",
        pinyin: "wǒ zuò wán gōngkè le.",
        translation: "J'ai fini mes devoirs.",
      },
    },
    {
      character: "洗",
      pinyin: "xǐ",
      zhuyin: "ㄒㄧˇ",
      french: "Laver",
      english: "To wash",
      example: {
        sentence: "我先洗了臉，然後吃早餐。",
        pinyin: "wǒ xiān xǐ le liǎn, ránhòu chī zǎocān.",
        translation: "D'abord je me suis lavé le visage, ensuite j'ai pris le petit déjeuner.",
      },
    },
    {
      character: "穿",
      pinyin: "chuān",
      zhuyin: "ㄔㄨㄢ",
      french: "Porter (vêtement)",
      english: "To wear",
      example: {
        sentence: "今天很熱，穿短褲吧。",
        pinyin: "jīntiān hěn rè, chuān duǎnkù ba.",
        translation: "Il fait chaud aujourd'hui, mets un short.",
      },
    },
    {
      character: "換",
      pinyin: "huàn",
      zhuyin: "ㄏㄨㄢˋ",
      french: "Changer",
      english: "To change, exchange",
      example: {
        sentence: "我要換衣服。",
        pinyin: "wǒ yào huàn yīfu.",
        translation: "Je vais me changer.",
      },
    },
    {
      character: "送",
      pinyin: "sòng",
      zhuyin: "ㄙㄨㄥˋ",
      french: "Envoyer, offrir",
      english: "To send, to give (gift)",
      example: {
        sentence: "他送了我一個禮物。",
        pinyin: "tā sòng le wǒ yí ge lǐwù.",
        translation: "Il m'a offert un cadeau.",
      },
    },
  ],

  exercises: [
    {
      id: "u27-ex1",
      type: "fill-blank",
      question: "我吃___小籠包。(J'ai deja mange des xiaolongbao dans ma vie.)",
      correctAnswer: "過",
      options: ["過", "了", "會", "很"],
      hint: "Quelle particule indique une experience de vie ?",
    },
    {
      id: "u27-ex2",
      type: "translate",
      question: "Comment dit-on « Demain j'irai au marche de nuit » ?",
      correctAnswer: "明天我會去夜市",
      options: ["明天我會去夜市", "明天我去了夜市", "明天我去過夜市", "明天我想了夜市"],
    },
    {
      id: "u27-ex3",
      type: "fill-blank",
      question: "___下雨，___我不想出門。(Parce qu'il pleut, je ne veux pas sortir.)",
      correctAnswer: "因為...所以",
      options: ["因為...所以", "可是...然後", "然後...所以", "還是...可是"],
      hint: "Quelle paire de connecteurs exprime cause et consequence ?",
    },
    {
      id: "u27-ex4",
      type: "translate",
      question: "Que signifie 你吃了嗎？ dans la vie quotidienne a Taiwan ?",
      correctAnswer: "C'est une salutation (= Ca va ?), pas une vraie question sur le repas",
      options: [
        "C'est une salutation (= Ca va ?), pas une vraie question sur le repas",
        "C'est une invitation a diner ensemble",
        "C'est une question medicale sur l'appetit",
        "C'est une facon de demander l'heure du repas",
      ],
    },
    {
      id: "u27-ex5",
      type: "fill-blank",
      question: "我___吃飯，等一下。(Je suis en train de manger, attends un peu.)",
      correctAnswer: "正在",
      options: ["正在", "已經", "快要", "剛才"],
      hint: "Quelle expression signifie « etre en train de » ?",
    },
    {
      id: "u27-ex6",
      type: "comprehension",
      question: "Que signifie le complement resultatif 聽懂 ?",
      correctAnswer: "Ecouter et comprendre (le resultat de l'ecoute est la comprehension)",
      options: [
        "Ecouter et comprendre (le resultat de l'ecoute est la comprehension)",
        "Ecouter attentivement",
        "Entendre un bruit",
        "Ecouter sans comprendre",
      ],
    },
    {
      id: "u27-reorder-1",
      type: "reorder",
      question: "Remettez dans l'ordre : 然後 / 先 / 吃飯 / 去 / 看電影",
      correctAnswer: "先吃飯然後去看電影",
      options: ["先", "吃飯", "然後", "去", "看電影"],
      hint: "Structure : 先 + action1，然後 + action2",
    },
    {
      id: "u27-reorder-2",
      type: "reorder",
      question: "Remettez dans l'ordre : 正在 / 我 / 呢 / 看書",
      correctAnswer: "我正在看書呢",
      options: ["我", "正在", "看書", "呢"],
      hint: "Structure : Sujet + 正在 + Verbe + 呢",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-26"],
};
