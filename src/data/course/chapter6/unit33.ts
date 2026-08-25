import type { CourseUnit } from "@/types/course";

export const unit33: CourseUnit = {
  id: "unit-33",
  number: 33,
  title: "Le keigo : rehausser l'autre, s'abaisser soi-même",
  titleJa: "敬語：尊敬語と謙譲語",
  chapter: 6,
  description:
    "Les trois branches du 敬語, les verbes irréguliers qu'on ne devine pas, les schémas お〜になる et お〜する, et le principe qui commande tout : la frontière ウチ／ソト, celle que les étrangers franchissent de travers.",
  icon: "敬",

  sections: [
    {
      title: "Trois branches, une seule question à se poser",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Le 敬語 n'est pas « du japonais plus poli ». C'est un système qui inscrit dans le verbe la position relative des personnes dont on parle. Il se divise en trois branches. Le 丁寧語 est celui que vous pratiquez depuis le début : です et ます, qui polissent la phrase entière sans dire qui est au-dessus de qui. Le 尊敬語 rehausse le sujet de l'action quand ce sujet est votre interlocuteur ou quelqu'un qu'il faut honorer. Le 謙譲語 abaisse le sujet quand ce sujet, c'est vous — ou votre camp.",
        },
        {
          type: "text",
          content:
            "La conséquence est décisive : 尊敬語 et 謙譲語 ne sont pas deux degrés d'une même échelle, entre lesquels on choisirait selon le respect qu'on veut montrer. Ils dépendent de l'identité du sujet grammatical. Avant de choisir une forme, posez-vous une seule question : qui fait l'action ? Si c'est l'autre, vous montez. Si c'est vous, vous descendez. Il n'y a pas de troisième option.",
        },
        {
          type: "example",
          japanese: "部長はコーヒーを召し上がりました。",
          romaji: "buchou wa koohii o meshiagarimashita.",
          translation: "Le chef de service a bu un café.",
          content:
            "Le verbe de base est 飲む, mais le sujet est un supérieur : on emploie 召し上がる, le 尊敬語 de 飲む et de 食べる. Le respect ne se glisse pas dans un adverbe ni dans un ton de voix, il remplace le verbe lui-même.",
        },
        {
          type: "example",
          japanese: "私がコーヒーをいただきました。",
          romaji: "watashi ga koohii o itadakimashita.",
          translation: "C'est moi qui ai bu le café.",
          content:
            "Même action, même boisson, verbe opposé : le sujet est le locuteur, donc いただく, le 謙譲語. Les deux phrases s'adressent à un interlocuteur de même niveau de politesse — seule l'identité de celui qui boit a changé.",
        },
        {
          type: "warning",
          content:
            "Dire 「社長がいただきました」 pour annoncer que votre président a mangé revient à l'abaisser devant tout le monde. C'est l'erreur symétrique de 「私が召し上がりました」, où vous vous décernez les honneurs. Ces deux fautes sonnent beaucoup plus mal qu'un simple ます oublié.",
        },
        {
          type: "text",
          content:
            "Le 丁寧語, lui, se superpose aux deux autres sans conflit : 召し上がります et いただきます portent tous deux la terminaison ます. Il comprend aussi ございます et でございます, versions très formelles de あります et です, qu'on entend dans les commerces, les hôtels et au téléphone professionnel.",
        },
        {
          type: "tip",
          content:
            "Entraînez le réflexe sur des paires : lui mange / je mange, lui dit / je dis, lui vient / je viens. Tant que vous cherchez « la forme polie de manger », vous vous tromperez une fois sur deux. Dès que vous cherchez « qui mange », le bon verbe vient tout seul.",
        },
      ],
    },
    {
      title: "Les irréguliers : la liste courte à savoir par cœur",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les verbes les plus fréquents ont des formes honorifiques irrégulières, qu'aucune règle ne permet de deviner. Bonne nouvelle : ils sont peu nombreux et ils couvrent la majorité de ce que vous entendrez. Côté respect : いらっしゃる (いる、行く、来る), なさる (する), おっしゃる (言う), 召し上がる (食べる、飲む), ご覧になる (見る). Côté modestie : 参る (行く、来る), いたす (する), 申す (言う), いただく (もらう、食べる、飲む), 拝見する (見る), 伺う (聞く、訪ねる).",
        },
        {
          type: "example",
          japanese: "先生は教室にいらっしゃいます。",
          romaji: "sensei wa kyoushitsu ni irasshaimasu.",
          translation: "Le professeur est dans la salle de classe.",
          content:
            "いらっしゃる recouvre à lui seul trois verbes : être quelque part, aller, venir. Le contexte tranche. Notez la forme polie : いらっしゃいます, et non 「いらっしゃります」. Cinq verbes en 〜さる／〜ざる suivent cette irrégularité — いらっしゃる、なさる、おっしゃる、くださる、ござる — et donnent tous 〜います.",
        },
        {
          type: "example",
          japanese: "何になさいますか。",
          romaji: "nani ni nasaimasu ka.",
          translation: "Que prendrez-vous ?",
          content:
            "なさる est le 尊敬語 de する ; la phrase se rencontre partout où l'on vous demande de choisir, au café comme au guichet. Réponse côté client : 「コーヒーにします」 — vous, vous n'avez aucune raison de vous rehausser.",
        },
        {
          type: "example",
          japanese: "お名前は何とおっしゃいますか。",
          romaji: "onamae wa nan to osshaimasu ka.",
          translation: "Comment vous appelez-vous ?",
          content:
            "おっしゃる est le 尊敬語 de 言う. C'est la question standard pour demander un nom à quelqu'un qu'on doit ménager ; 「お名前は何ですか」 n'est pas fautif mais reste plat dans un cadre professionnel.",
        },
        {
          type: "example",
          japanese: "山田と申します。フランスから参りました。",
          romaji: "Yamada to moushimasu. Furansu kara mairimashita.",
          translation: "Je m'appelle Yamada. Je viens de France.",
          content:
            "Le versant modeste de la paire précédente : 申す pour 言う, 参る pour 来る. 「〜と申します」 est la formule de présentation attendue dès qu'il y a un enjeu professionnel — plus adéquate que 「〜と言います」 devant un client.",
        },
        {
          type: "example",
          japanese: "資料を拝見しました。",
          romaji: "shiryou o haiken shimashita.",
          translation: "J'ai consulté les documents.",
          content:
            "拝見する ne s'emploie que pour ce que vous regardez, vous. Pour dire que votre supérieur a lu le dossier, il faut ご覧になりました. Le sens du verbe est identique dans les deux cas ; c'est la direction du respect qui diffère.",
        },
        {
          type: "warning",
          content:
            "Les inversions sont immédiatement audibles : 「お客様が申しました」 abaisse le client, 「私がおっしゃいました」 vous met sur un piédestal. Une forme honorifique mal orientée est plus grave qu'une absence totale de 敬語, qui passe pour de la maladresse d'étranger.",
        },
      ],
    },
    {
      title: "Les schémas réguliers : お〜になる et お〜する",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour tous les verbes sans forme irrégulière, deux moules productifs suffisent. Le respect : お ＋ base en ます ＋ になる. La modestie : お ＋ base en ます ＋ する, ou いたす pour monter d'un cran. On prend la base en ます du verbe, c'est-à-dire ce qui reste quand on retire ます : 帰ります donne 帰り, 待ちます donne 待ち, 送ります donne 送り.",
        },
        {
          type: "example",
          japanese: "部長はもうお帰りになりました。",
          romaji: "buchou wa mou okaeri ni narimashita.",
          translation: "Le chef de service est déjà rentré.",
          content:
            "帰ります → お帰りになる. Le sujet est le supérieur, donc le moule respectueux. Une variante plus légère existe et s'entend beaucoup en entreprise : 帰られました, où la marque du passif れる／られる sert de 尊敬語 discret.",
        },
        {
          type: "example",
          japanese: "私がご説明いたします。",
          romaji: "watashi ga gosetsumei itashimasu.",
          translation: "C'est moi qui vais vous l'expliquer.",
          content:
            "Le préfixe se choisit selon l'origine du mot : お devant les mots japonais (お待ち、お送り), ご devant les mots sino-japonais, presque toujours des verbes en する — ご説明、ご案内、ご連絡、ご確認. Quelques mots sino-japonais très usés prennent お par exception — お電話、お食事、お返事 — mais la règle vous fera juste dans l'immense majorité des cas.",
        },
        {
          type: "warning",
          content:
            "Ne retournez jamais les moules : 「お帰りになります」 pour parler de votre propre départ est aussi choquant que 「先生をお待ちしてください」. Et お〜する suppose un bénéficiaire : 「お待ちします」 signifie « je vous attends, vous ». Si vous attendez le bus, c'est 待ちます, rien de plus.",
        },
        {
          type: "comparison",
          content:
            "Comparez trois formes construites sur 待つ. お待ちください = « veuillez patienter », adressé à l'autre, donc 尊敬語. お待ちします = « je vous attends », donc 謙譲語. お待たせしました = « je vous ai fait attendre », excuse standard qu'on entend chaque fois qu'un serveur pose une assiette. Un seul verbe, trois orientations.",
        },
        {
          type: "warning",
          content:
            "Le 二重敬語 — empiler deux marques de respect sur un même verbe — est considéré comme fautif : 「お召し上がりになられる」 cumule 召し上がる, お〜になる et られる. 召し上がります suffit. Le sur-respect ne rassure personne ; il signale au contraire qu'on ne maîtrise pas le système.",
        },
        {
          type: "tip",
          content:
            "Si vous bloquez en pleine phrase, repliez-vous sur le 丁寧語 : です／ます reste correct partout. Une phrase simple et juste vaut mieux qu'une construction honorifique tordue, que votre interlocuteur devra décoder.",
        },
      ],
    },
    {
      title: "ウチ et ソト : pourquoi on abaisse son propre patron",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Voici le principe qui gouverne tout le reste, et celui que les étrangers ratent le plus systématiquement. Le 敬語 ne classe pas les individus selon un rang absolu : il les répartit entre ウチ, le dedans, et ソト, le dehors. Votre ウチ, c'est vous, votre famille, vos collègues et votre entreprise — votre président compris. Le ソト, c'est le client, le visiteur, l'entreprise d'en face. Face à quelqu'un du ソト, tout ce qui est ウチ descend en bloc.",
        },
        {
          type: "example",
          japanese: "社長の田中はただいま外出しております。",
          romaji: "shachou no Tanaka wa tadaima gaishutsu shite orimasu.",
          translation: "Monsieur Tanaka, notre président, est actuellement à l'extérieur.",
          content:
            "Trois marques dans une seule phrase : pas de さん, pas de 尊敬語, et おる à la place de いる. Le titre 社長 passe même devant le nom comme une simple apposition, exactement comme on dirait 「弟の田中」. Devant un client, le président de votre société n'est qu'un membre de votre camp.",
        },
        {
          type: "warning",
          content:
            "「社長さんはいらっしゃいません」 dit à un client cumule deux fautes : le さん sur un membre de votre maison, et un 尊敬語 qui le rehausse au-dessus de celui à qui vous parlez. Le message reçu n'est pas « il est absent », c'est « ma hiérarchie compte plus que vous ».",
        },
        {
          type: "text",
          content:
            "La frontière est mobile, et c'est ce qui la rend délicate. À l'intérieur de l'entreprise, entre collègues, votre chef redevient quelqu'un qu'on honore : 「部長はいらっしゃいますか」 est parfaitement normal auprès d'un camarade de bureau. C'est l'arrivée d'un interlocuteur extérieur qui déplace la ligne et fait basculer tout votre camp du côté modeste.",
        },
        {
          type: "comparison",
          content:
            "La famille obéit à la même mécanique et fournit le meilleur exercice de repérage : 父、母、兄 pour les vôtres, お父さん、お母さん、お兄さん pour ceux de l'autre. Personne ne trouve étrange de dire 「父は今おりません」 : on n'y voit aucun manque de respect envers son père, seulement le respect dû à celui qui écoute.",
        },
        {
          type: "tip",
          content:
            "Avant de décrocher le téléphone ou d'ouvrir la bouche en réunion, faites le partage en une seconde : qui est dedans, qui est dehors. Ce tri décide de tout le reste — le titre, le さん, le verbe. Il vaut mieux le faire avant de parler qu'au milieu d'une phrase.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Réception d'une PME japonaise. Satō, d'une entreprise cliente, arrive pour un rendez-vous avec Yamada, chef de service. Toute la scène tourne autour d'une seule ligne : celle qui sépare la maison de l'extérieur.",
    lines: [
      {
        speaker: "佐藤",
        japanese: "恐れ入ります。三時にお約束をいただいております、みどり商事の佐藤と申します。",
        romaji: "osore irimasu. sanji ni oyakusoku o itadaite orimasu, Midori-shouji no Satou to moushimasu.",
        french: "Excusez-moi de vous déranger. J'ai rendez-vous à quinze heures ; je suis Satō, de la société Midori.",
        note: "Le client aussi s'abaisse : いただいております pour le rendez-vous qu'on lui a accordé, 申します pour son propre nom. La modestie n'est pas réservée aux subalternes, elle vient avec la position de celui qui parle.",
      },
      {
        speaker: "受付",
        japanese: "佐藤様、いつもお世話になっております。少々お待ちくださいませ。",
        romaji: "Satou-sama, itsumo osewa ni natte orimasu. shoushou omachi kudasaimase.",
        french: "Monsieur Satō, merci de votre confiance. Veuillez patienter un instant, je vous prie.",
        note: "様 et non さん pour un client. お待ちください est le moule お〜ください ; le ませ final l'adoucit encore et appartient au registre de l'accueil.",
      },
      {
        speaker: "受付",
        japanese: "山田部長、佐藤様がお見えになりました。",
        romaji: "Yamada-buchou, Satou-sama ga omie ni narimashita.",
        french: "Monsieur Yamada, M. Satō est arrivé.",
        note: "En interne, le chef reste quelqu'un qu'on honore : お見えになる est le 尊敬語 de 来る. Le titre 部長 s'emploie seul après le nom — 「山田部長さん」 n'existe pas.",
      },
      {
        speaker: "受付",
        japanese: "お待たせいたしました。山田はただいま参ります。",
        romaji: "omatase itashimashita. Yamada wa tadaima mairimasu.",
        french: "Merci d'avoir patienté. M. Yamada arrive tout de suite.",
        note: "Le pivot de l'unité. La même personne, dans la même minute, redevient 山田 tout court dès qu'on s'adresse au client, et son déplacement se dit 参ります.",
      },
      {
        speaker: "山田",
        japanese: "お待たせして申し訳ございません。山田でございます。どうぞこちらへ。",
        romaji: "omatase shite moushiwake gozaimasen. Yamada de gozaimasu. douzo kochira e.",
        french: "Toutes mes excuses pour l'attente. Je suis Yamada. Par ici, je vous prie.",
        note: "でございます est du 丁寧語 pur : il n'abaisse ni ne rehausse personne, il élève le niveau de la phrase. C'est pour cela qu'on peut l'employer sur son propre nom.",
      },
      {
        speaker: "山田",
        japanese: "コーヒーを召し上がりますか。",
        romaji: "koohii o meshiagarimasu ka.",
        french: "Prendrez-vous un café ?",
        note: "Le sujet est le client, donc 尊敬語. Si Yamada parlait de lui-même dans la même pièce : 「私もいただきます」.",
      },
    ],
  },

  keyPoints: [
    "Trois branches : le 丁寧語 (です／ます、でございます) polit la phrase, le 尊敬語 rehausse le sujet quand c'est l'autre, le 謙譲語 abaisse le sujet quand c'est vous.",
    "Le choix ne dépend pas du respect qu'on veut montrer mais de l'identité du sujet : 召し上がる si c'est lui qui boit, いただく si c'est vous.",
    "Irréguliers à connaître : いらっしゃる、なさる、おっしゃる、召し上がる、ご覧になる côté respect ; 参る、いたす、申す、いただく、拝見する、伺う côté modestie. Les verbes en 〜さる font 〜います, jamais 〜ります.",
    "Moules réguliers : お ＋ base en ます ＋ になる pour le respect, お／ご ＋ base ＋ する／いたす pour la modestie. ご devant les mots sino-japonais, お devant les mots japonais, et jamais deux marques empilées.",
    "ウチ／ソト commande tout : devant un client, votre entreprise et votre patron basculent en modeste — 「山田はただいま参ります」, sans さん et sans titre. La frontière se redéplace dès que l'extérieur quitte la pièce.",
  ],

  vocabulary: [
    {
      term: "敬語",
      kana: "けいご",
      romaji: "keigo",
      segments: [
        { text: "敬", reading: "けい" },
        { text: "語", reading: "ご" },
      ],
      french: "Le langage de politesse (l'ensemble du système honorifique)",
      english: "Honorific language",
    },
    {
      term: "尊敬語",
      kana: "そんけいご",
      romaji: "sonkeigo",
      segments: [
        { text: "尊", reading: "そん" },
        { text: "敬", reading: "けい" },
        { text: "語", reading: "ご" },
      ],
      french: "Le langage respectueux (qui rehausse l'autre)",
      english: "Respectful language",
    },
    {
      term: "謙譲語",
      kana: "けんじょうご",
      romaji: "kenjougo",
      segments: [
        { text: "謙", reading: "けん" },
        { text: "譲", reading: "じょう" },
        { text: "語", reading: "ご" },
      ],
      french: "Le langage d'humilité (qui abaisse le locuteur)",
      english: "Humble language",
    },
    {
      term: "丁寧語",
      kana: "ていねいご",
      romaji: "teineigo",
      segments: [
        { text: "丁", reading: "てい" },
        { text: "寧", reading: "ねい" },
        { text: "語", reading: "ご" },
      ],
      french: "Le langage poli (です／ます)",
      english: "Polite language",
    },
    {
      term: "いらっしゃる",
      kana: "いらっしゃる",
      romaji: "irassharu",
      pitch: 4,
      french: "Être là, aller, venir (respectueux)",
      english: "To be, to go, to come (honorific)",
      example: {
        sentence: "先生は教室にいらっしゃいます。",
        romaji: "sensei wa kyoushitsu ni irasshaimasu.",
        translation: "Le professeur est dans la salle de classe.",
      },
    },
    {
      term: "なさる",
      kana: "なさる",
      romaji: "nasaru",
      french: "Faire (respectueux)",
      english: "To do (honorific)",
      example: {
        sentence: "何になさいますか。",
        romaji: "nani ni nasaimasu ka.",
        translation: "Que prendrez-vous ?",
      },
    },
    {
      term: "おっしゃる",
      kana: "おっしゃる",
      romaji: "ossharu",
      french: "Dire (respectueux)",
      english: "To say (honorific)",
      example: {
        sentence: "お名前は何とおっしゃいますか。",
        romaji: "onamae wa nan to osshaimasu ka.",
        translation: "Comment vous appelez-vous ?",
      },
    },
    {
      term: "召し上がる",
      kana: "めしあがる",
      romaji: "meshiagaru",
      segments: [
        { text: "召", reading: "め" },
        { text: "し" },
        { text: "上", reading: "あ" },
        { text: "がる" },
      ],
      french: "Manger, boire (respectueux)",
      english: "To eat, to drink (honorific)",
      example: {
        sentence: "どうぞ召し上がってください。",
        romaji: "douzo meshiagatte kudasai.",
        translation: "Servez-vous, je vous en prie.",
      },
    },
    {
      term: "参る",
      kana: "まいる",
      romaji: "mairu",
      segments: [
        { text: "参", reading: "まい" },
        { text: "る" },
      ],
      pitch: 1,
      french: "Aller, venir (modeste)",
      english: "To go, to come (humble)",
      example: {
        sentence: "すぐに参ります。",
        romaji: "sugu ni mairimasu.",
        translation: "J'arrive tout de suite.",
      },
    },
    {
      term: "申す",
      kana: "もうす",
      romaji: "mousu",
      segments: [
        { text: "申", reading: "もう" },
        { text: "す" },
      ],
      pitch: 1,
      french: "Dire, se nommer (modeste)",
      english: "To say, to be called (humble)",
      example: {
        sentence: "みどり商事の山田と申します。",
        romaji: "Midori-shouji no Yamada to moushimasu.",
        translation: "Je suis Yamada, de la société Midori.",
      },
    },
    {
      term: "いたす",
      kana: "いたす",
      romaji: "itasu",
      french: "Faire (modeste)",
      english: "To do (humble)",
      example: {
        sentence: "私がご案内いたします。",
        romaji: "watashi ga goannai itashimasu.",
        translation: "C'est moi qui vais vous accompagner.",
      },
    },
    {
      term: "いただく",
      kana: "いただく",
      romaji: "itadaku",
      french: "Recevoir ; manger, boire (modeste)",
      english: "To receive; to eat, to drink (humble)",
      example: {
        sentence: "お茶をいただきました。",
        romaji: "ocha o itadakimashita.",
        translation: "J'ai bu un thé.",
      },
    },
    {
      term: "拝見する",
      kana: "はいけんする",
      romaji: "haiken suru",
      segments: [
        { text: "拝", reading: "はい" },
        { text: "見", reading: "けん" },
        { text: "する" },
      ],
      french: "Regarder, consulter (modeste)",
      english: "To look at, to examine (humble)",
      example: {
        sentence: "資料を拝見しました。",
        romaji: "shiryou o haiken shimashita.",
        translation: "J'ai consulté les documents.",
      },
    },
    {
      term: "伺う",
      kana: "うかがう",
      romaji: "ukagau",
      segments: [
        { text: "伺", reading: "うかが" },
        { text: "う" },
      ],
      french: "Demander ; rendre visite (modeste)",
      english: "To ask; to visit (humble)",
      example: {
        sentence: "一つ伺ってもよろしいでしょうか。",
        romaji: "hitotsu ukagatte mo yoroshii deshou ka.",
        translation: "Puis-je vous poser une question ?",
      },
    },
    {
      term: "お客様",
      kana: "おきゃくさま",
      romaji: "okyakusama",
      segments: [
        { text: "お" },
        { text: "客", reading: "きゃく" },
        { text: "様", reading: "さま" },
      ],
      french: "Le client, l'invité (forme respectueuse)",
      english: "Customer, guest (honorific)",
    },
    {
      term: "上司",
      kana: "じょうし",
      romaji: "joushi",
      segments: [
        { text: "上", reading: "じょう" },
        { text: "司", reading: "し" },
      ],
      french: "Le supérieur hiérarchique",
      english: "Superior, boss",
    },
    {
      term: "取引先",
      kana: "とりひきさき",
      romaji: "torihikisaki",
      segments: [
        { text: "取引", reading: "とりひき" },
        { text: "先", reading: "さき" },
      ],
      french: "Le partenaire commercial, l'entreprise cliente",
      english: "Business partner, client company",
    },
  ],

  exercises: [
    {
      id: "unit-33-ex1",
      type: "comprehension",
      question:
        "Votre président vient de boire un café. Vous le racontez à un collègue de votre entreprise. Quel verbe employez-vous ?",
      correctAnswer: "召し上がりました",
      options: ["召し上がりました", "いただきました", "拝見しました", "参りました"],
      optionsKana: ["めしあがりました", "いただきました", "はいけんしました", "まいりました"],
      hint: "Le sujet de l'action est votre supérieur, et vous parlez à quelqu'un de la maison.",
    },
    {
      id: "unit-33-ex2",
      type: "comprehension",
      question: "Pourquoi 「社長さんはいらっしゃいません」 est-il fautif quand on répond à un client ?",
      correctAnswer:
        "Devant un client, on ne met ni さん ni 尊敬語 sur un membre de sa propre entreprise",
      options: [
        "Devant un client, on ne met ni さん ni 尊敬語 sur un membre de sa propre entreprise",
        "いらっしゃる ne s'emploie jamais à la forme négative",
        "Un titre comme 社長 doit obligatoirement être suivi de 様 et non de さん",
        "Il faudrait いただきません, qui est le vrai respectueux de いる",
      ],
      hint: "Pensez à la frontière ウチ／ソト et à ce qu'elle fait basculer.",
    },
    {
      id: "unit-33-ex3",
      type: "fill-blank",
      question: "Vous vous présentez chez un client : 「みどり商事の佐藤と ___ 。」",
      correctAnswer: "申します",
      options: ["申します", "おっしゃいます", "なさいます", "いらっしゃいます"],
      optionsKana: ["もうします", "おっしゃいます", "なさいます", "いらっしゃいます"],
      hint: "C'est vous qui vous nommez : le sujet est vous.",
    },
    {
      id: "unit-33-ex4",
      type: "fill-blank",
      question: "Vous rendez compte à votre chef : 「資料を ___ 。」 « J'ai consulté les documents. »",
      correctAnswer: "拝見しました",
      options: ["拝見しました", "ご覧になりました", "お見せしました", "見られました"],
      optionsKana: ["はいけんしました", "ごらんになりました", "おみせしました", "みられました"],
      hint: "Le 謙譲語 de 見る, et non son 尊敬語.",
    },
    {
      id: "unit-33-ex5",
      type: "comprehension",
      question: "Quel est le moule régulier du 謙譲語, celui de 「ご説明いたします」 ?",
      correctAnswer: "お／ご ＋ base en ます ＋ する（いたす）",
      options: [
        "お／ご ＋ base en ます ＋ する（いたす）",
        "お／ご ＋ base en ます ＋ になる",
        "base en ます ＋ れる／られる",
        "お／ご ＋ forme en て ＋ ください",
      ],
      hint: "Celui qui abaisse le locuteur, et qui suppose un bénéficiaire.",
    },
    {
      id: "unit-33-ex6",
      type: "listen",
      question: "山田はただいま参ります。",
      correctAnswer: "M. Yamada arrive tout de suite.",
      options: [
        "M. Yamada arrive tout de suite.",
        "M. Yamada vient de partir.",
        "M. Yamada vous recevra demain.",
        "Je vais aller chercher M. Yamada.",
      ],
      hint: "参る est le 謙譲語 de 来る : celui qui se déplace appartient à votre entreprise.",
    },
    {
      id: "unit-33-ex7",
      type: "reorder",
      question:
        "Remettez les éléments dans l'ordre : « Monsieur Tanaka, notre président, est actuellement à l'extérieur. » (vous parlez à un client)",
      correctAnswer: "社長の田中はただいま外出しております。",
      options: ["社長の", "田中", "は", "ただいま", "外出して", "おります"],
      hint: "Le titre passe devant le nom comme une apposition, et いる devient おる.",
    },
    {
      id: "unit-33-ex8",
      type: "translate",
      question: "Traduisez : « Prendrez-vous un café ? » (vous vous adressez à un client)",
      correctAnswer: "コーヒーを召し上がりますか。",
      options: [
        "コーヒーを召し上がりますか。",
        "コーヒーをいただきますか。",
        "コーヒーをお飲みしますか。",
        "コーヒーを拝見しますか。",
      ],
      optionsKana: [
        "コーヒーをめしあがりますか。",
        "コーヒーをいただきますか。",
        "コーヒーをおのみしますか。",
        "コーヒーをはいけんしますか。",
      ],
      hint: "C'est le client qui boira : le sujet de l'action, c'est lui.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-32"],
};
