import type { CourseUnit } from "@/types/course";

export const unit37: CourseUnit = {
  id: "unit-37",
  number: 37,
  chapter: 6,
  title: "Langue écrite, langue parlée",
  titleNative: "書き言葉と話し言葉",
  description:
    "Le style である des rapports et des mémoires, les connecteurs propres à l'écrit, et le lexique sino-japonais qui remplace le verbe courant. À la fin de l'unité vous lisez un texte informatif par sa structure avant d'en comprendre chaque mot.",
  icon: "書",

  sections: [
    {
      title: "Le style である",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Le japonais écrit formel n'est pas du japonais oral transcrit : c'est un autre système, avec ses formes verbales, ses conjonctions et son vocabulaire. Le japonais distingue deux styles, et un texte en choisit un seul. Le 敬体 (keitai), c'est です・ます : lettres, courriels, manuels scolaires, brochures adressées à un lecteur identifié. Le 常体 (joutai), c'est だ・である : articles de presse, mémoires universitaires, rapports d'entreprise, comptes rendus — tous les textes où l'auteur expose des faits sans s'adresser à quelqu'un en particulier.",
        },
        {
          type: "example",
          native: "日本の人口は減少している。",
          romanization: "nihon no jinkou wa genshou shite iru.",
          translation: "La population du Japon diminue.",
          content:
            "Le verbe reste à la forme neutre : 減少している, et non 減少しています. Ce n'est pas de la familiarité — c'est la neutralité. Notez aussi que l'écrit n'abrège jamais ている en てる : 「減少してる」 appartient exclusivement à l'oral.",
        },
        {
          type: "example",
          native: "これは重要な問題である。",
          romanization: "kore wa juuyou na mondai de aru.",
          translation: "C'est un problème important.",
          content:
            "Devant un nom ou un adjectif en な, la copule だ est remplacée par である. Personne ne dit である en parlant : la forme est purement graphique, et c'est justement ce qui signale au lecteur qu'il a affaire à un texte argumenté et non à une conversation mise par écrit.",
        },
        {
          type: "comparison",
          content:
            "だ体 et である体 sont deux variantes du même style neutre. だ est plus léger : blogs, romans, notes personnelles. である est plus dense et plus impersonnel : c'est celui des travaux universitaires. Les formes à connaître : である (est), であった (était), ではない (n'est pas), ではないだろうか (ne serait-ce pas… ?). Le verbe, lui, ne change pas d'un style à l'autre : 増加した、増加していない、増加するだろう.",
        },
        {
          type: "warning",
          content:
            "Ne mélangez jamais les deux styles dans un même texte. Un paragraphe en です・ます suivi d'un paragraphe en である est l'erreur la plus visible dans les devoirs d'étudiants étrangers, et elle est sanctionnée avant même le contenu. Décidez du style à la première phrase et tenez-le jusqu'au point final.",
        },
        {
          type: "comparison",
          content:
            "Tout ce qui contracte relève de l'oral et disparaît à l'écrit : 〜てる redevient 〜ている, 〜ちゃう redevient 〜てしまう, じゃない redevient ではない, けど redevient が, から (cause) devient souvent ため. 「安いけど、質は悪くないです」 s'écrira 「安いが、質は悪くない」.",
        },
        {
          type: "tip",
          content:
            "Test rapide avant de rendre un texte : lisez-le à voix haute. Si une phrase sonne comme quelque chose que vous diriez à un ami, elle est probablement trop orale. Si elle sonne comme un présentateur du journal télévisé, vous êtes dans le bon registre.",
        },
      ],
    },
    {
      title: "Les connecteurs de l'écrit",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Un texte japonais formel articule ses idées avec un jeu de conjonctions fermé, six mots pour l'essentiel. Chacune a un double oral que vous connaissez déjà, et l'employer à l'écrit trahit immédiatement le niveau. Ces mots ouvrent la phrase et sont suivis d'une virgule 、 — jamais placés au milieu comme le « mais » français.",
        },
        {
          type: "example",
          native: "調査を行った。しかし、原因は分からなかった。",
          romanization: "chousa o okonatta. shikashi, gen'in wa wakaranakatta.",
          translation: "Une enquête a été menée. Cependant, la cause n'a pas été identifiée.",
          content:
            "しかし est le でも de l'écrit. Il annonce presque toujours ce qui compte vraiment pour l'auteur : dans un texte long, la thèse se trouve neuf fois sur dix juste après un しかし. Repérez-les avant même de lire le reste.",
        },
        {
          type: "example",
          native: "料金が高い。また、手続きも複雑である。さらに、時間もかかる。",
          romanization: "ryoukin ga takai. mata, tetsuzuki mo fukuzatsu de aru. sara ni, jikan mo kakaru.",
          translation:
            "Le tarif est élevé. Par ailleurs, les démarches sont compliquées. Qui plus est, cela prend du temps.",
          content:
            "また ajoute un élément de même rang, à plat, comme un deuxième point d'une liste : c'est le それに de l'oral. さらに ajoute en renchérissant — l'argument suivant pèse plus lourd que le précédent. Les confondre n'est pas une faute de grammaire, mais fait perdre la hiérarchie que vous vouliez donner.",
        },
        {
          type: "example",
          native: "参加者が減少している。したがって、来年の開催は難しいだろう。",
          romanization: "sankasha ga genshou shite iru. shitagatte, rainen no kaisai wa muzukashii darou.",
          translation:
            "Le nombre de participants diminue. Par conséquent, une édition l'an prochain paraît difficile.",
          content:
            "したがって est le だから de l'écrit, mais plus contraignant : il annonce une conséquence logique tirée de ce qui précède, pas une simple suite d'événements. Ne l'employez que si la phrase d'avant sert vraiment de prémisse.",
        },
        {
          type: "example",
          native: "都市部の人口は増加している。一方、地方では減少が続いている。",
          romanization: "toshibu no jinkou wa zouka shite iru. ippou, chihou de wa genshou ga tsuzuite iru.",
          translation:
            "La population des zones urbaines augmente. À l'inverse, elle continue de baisser en province.",
          content:
            "一方 met deux éléments de même nature en balance : deux régions, deux périodes, deux groupes. Ce n'est pas しかし, qui corrige ou nuance ce qui vient d'être dit ; 一方 ne corrige rien, il compare. S'il n'y a pas deux termes parallèles, c'est しかし qu'il faut.",
        },
        {
          type: "tip",
          content:
            "なお sert à ajouter une remarque secondaire, en marge du propos principal, et se place le plus souvent à la fin d'un texte ou d'une section : 「なお、会場は変更になった」 (« à noter que le lieu a changé »). Vous le verrez en bas des annonces officielles et des courriels administratifs.",
        },
        {
          type: "comparison",
          content:
            "La table de conversion à retenir : でも → しかし ; だから → したがって ; それに → また ; あと → なお. Et dans l'autre sens, lire 一方 ou さらに dans un message oral serait aussi étrange que dire « nonobstant » à la boulangerie.",
        },
      ],
    },
    {
      title: "Le verbe sino-japonais contre le verbe courant",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "La deuxième différence entre les deux registres est lexicale, et elle est massive. Le japonais dispose souvent de deux mots pour une même idée : un mot natif (和語), court, en hiragana ou avec un kanji suivi d'okurigana, et un composé sino-japonais (漢語), en deux kanji, auquel on ajoute する pour en faire un verbe. Le natif domine l'oral, le sino-japonais domine l'écrit formel. Ce n'est pas une question de politesse : c'est une question de densité et de précision.",
        },
        {
          type: "example",
          native: "調査を開始する。／ 調査を始める。",
          romanization: "chousa o kaishi suru. / chousa o hajimeru.",
          translation: "Lancer l'enquête. / Commencer l'enquête.",
          content:
            "Même action, deux registres. 開始する dans un compte rendu, 始める dans une conversation. Un francophone sent la différence s'il compare « procéder au lancement » et « commencer » : le sens est le même, le contexte d'emploi ne l'est pas.",
        },
        {
          type: "example",
          native: "電車は九時に到着する。／ 電車は九時に着く。",
          romanization: "densha wa kuji ni touchaku suru. / densha wa kuji ni tsuku.",
          translation: "Le train arrive à neuf heures. / Le train arrive à neuf heures.",
          content:
            "Vous entendrez 到着 dans les annonces de gare et le lirez sur les panneaux, mais un ami vous dira 着く. Écouter les annonces des transports est d'ailleurs le meilleur entraînement gratuit à ce lexique : il y est concentré et répété.",
        },
        {
          type: "text",
          content:
            "Les paires les plus rentables : 増加する / 増える, 減少する / 減る, 使用する / 使う, 購入する / 買う, 変化する / 変わる, 移動する / 動く, 確認する / 確かめる. Les adverbes suivent la même logique : 非常に à l'écrit contre とても à l'oral, 約 contre だいたい, 現在 contre 今, 本日 contre 今日.",
        },
        {
          type: "warning",
          content:
            "L'excès inverse existe et s'entend tout de suite. Un apprenant qui a lu beaucoup et parlé peu se met à dire 「本日、当店を使用しました」 au lieu de 「今日、この店を使いました」 : c'est compréhensible, mais raide et administratif, et cela met l'interlocuteur à distance. Le registre écrit se lit et s'écrit ; il ne se parle pas.",
        },
        {
          type: "tip",
          content:
            "Apprenez ces mots par paires, jamais isolément, et notez pour chacun le contexte où vous l'avez rencontré. La fiche 「増加する（新聞）／増える（会話）」 vaut dix fois la fiche 「増加する = augmenter」, parce qu'elle enregistre l'information qui vous manquera au moment de choisir.",
        },
      ],
    },
    {
      title: "Lire vite : la structure avant les mots",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Face à un texte informatif, le réflexe du débutant est de partir du premier mot et d'avancer en butant sur chaque inconnu. C'est la méthode la plus lente et la plus décourageante. Procédez en trois passes : d'abord repérer les connecteurs et les entourer, ensuite lire la première et la dernière phrase de chaque 段落, enfin seulement lire en continu. Après la première passe vous savez déjà si le texte oppose, énumère ou conclut.",
        },
        {
          type: "example",
          native:
            "近年、地方の人口は減少している。一方、東京の人口は増加を続けている。したがって、地域の差はさらに大きくなると考えられる。",
          romanization:
            "kinnen, chihou no jinkou wa genshou shite iru. ippou, toukyou no jinkou wa zouka o tsuzukete iru. shitagatte, chiiki no sa wa sara ni ookiku naru to kangaerareru.",
          translation:
            "Ces dernières années, la population des régions diminue. À l'inverse, celle de Tokyo continue d'augmenter. Par conséquent, on estime que l'écart entre les territoires va encore se creuser.",
          content:
            "Trois phrases, deux connecteurs, et la structure est donnée : constat, contraste, conclusion. Un lecteur qui n'aurait reconnu que 一方 et したがって saurait déjà que le texte oppose deux zones et en tire une conséquence — sans avoir lu 地域 ni 考えられる.",
        },
        {
          type: "text",
          content:
            "Cette lecture par la structure fonctionne parce que le japonais écrit place le verbe en fin de phrase et la conclusion en fin de paragraphe. La position d'un mot vous renseigne donc autant que le mot lui-même. と考えられる、と思われる、〜だろう en fin de phrase signalent une hypothèse de l'auteur ; une phrase sans ces marques est présentée comme un fait.",
        },
        {
          type: "tip",
          content:
            "Entraînement concret et gratuit : NHK NEWS WEB EASY publie des articles réécrits avec des kanji annotés, et le site principal de NHK publie les mêmes informations en japonais normal. Lisez la version facile d'abord, puis la version normale : vous verrez apparaître, article après article, les mêmes connecteurs et les mêmes verbes en 〜する.",
        },
        {
          type: "warning",
          content:
            "Ne cherchez pas chaque mot inconnu dans le dictionnaire à la première lecture : vous perdez le fil et la mémorisation est mauvaise. Devinez d'abord par les kanji et par la position dans la phrase, terminez le paragraphe, puis vérifiez trois mots au maximum. Ce que vous avez tenté de deviner se retient bien mieux que ce qu'on vous a donné.",
        },
        {
          type: "text",
          content:
            "Exercice de production, à faire une fois par semaine : prenez un message que vous avez écrit à un ami japonais et réécrivez-le en style である. Vous devrez remplacer les contractions, changer でも en しかし, transformer les verbes courants en composés sino-japonais et supprimer les particules finales ね et よ. Le texte obtenu sera plus court que l'original — c'est le signe que vous avez réussi.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Bureau d'un enseignant à l'université. Lucas, étudiant en échange, vient récupérer le premier jet de son mémoire de fin de semestre.",
    lines: [
      {
        speaker: "先生",
        native: "レポート、読みました。内容はいいですが、文体が混ざっていますね。",
        romanization: "repooto, yomimashita. naiyou wa ii desu ga, buntai ga mazatte imasu ne.",
        french: "J'ai lu votre devoir. Le contenu est bon, mais les styles sont mélangés.",
        note: "文体 = le style d'écriture. C'est le premier reproche qu'un enseignant japonais formule sur un travail écrit, avant même le contenu.",
      },
      {
        speaker: "リュカ",
        native: "文体、ですか。",
        romanization: "buntai, desu ka.",
        french: "Le style ?",
      },
      {
        speaker: "先生",
        native: "ここは「です・ます」、次の段落は「である」になっています。どちらか一つに決めてください。",
        romanization: "koko wa 'desu-masu', tsugi no danraku wa 'de aru' ni natte imasu. dochira ka hitotsu ni kimete kudasai.",
        french: "Ici c'est です・ます, et le paragraphe suivant est en である. Choisissez-en un seul.",
        note: "どちらか一つ = « l'un ou l'autre, un seul des deux ». La tournure sert à imposer un choix binaire sans indiquer de préférence.",
      },
      {
        speaker: "リュカ",
        native: "レポートなら、どちらがいいですか。",
        romanization: "repooto nara, dochira ga ii desu ka.",
        french: "Pour un devoir, lequel vaut-il mieux ?",
        note: "なら pose une condition à partir de ce que l'autre vient de dire : « s'il s'agit d'un devoir ».",
      },
      {
        speaker: "先生",
        native: "大学のレポートは「である体」が基本です。それに、「でも」は話し言葉ですよ。書くときは「しかし」です。",
        romanization: "daigaku no repooto wa 'de aru tai' ga kihon desu. sore ni, 'demo' wa hanashikotoba desu yo. kaku toki wa 'shikashi' desu.",
        french:
          "À l'université, le devoir s'écrit en である par défaut. Et puis でも relève de la langue parlée : à l'écrit, c'est しかし.",
        note: "Notez que l'enseignant, lui, parle en です・ます : le style である s'écrit, il ne se parle pas, même pour en parler.",
      },
      {
        speaker: "リュカ",
        native: "なるほど。「だから」も直したほうがいいですか。",
        romanization: "naruhodo. 'dakara' mo naoshita hou ga ii desu ka.",
        french: "Je vois. Faut-il corriger だから aussi ?",
      },
      {
        speaker: "先生",
        native: "はい、「したがって」ですね。文法は正しいのに、話し言葉が混ざると評価が下がります。もったいないですよ。",
        romanization: "hai, 'shitagatte' desu ne. bunpou wa tadashii noni, hanashikotoba ga mazaru to hyouka ga sagarimasu. mottainai desu yo.",
        french:
          "Oui, したがって. La grammaire est juste, mais dès que de l'oral se glisse dedans la note baisse. C'est dommage.",
        note: "もったいない = « quel gâchis », dit d'un potentiel gâché pour peu de chose. Un enseignant l'emploie comme un encouragement, pas comme un reproche.",
      },
    ],
  },

  keyPoints: [
    "Un texte formel — mémoire, rapport, article de presse — s'écrit en である体 : 減少している、問題である、ではない. です・ます est réservé aux textes adressés à un lecteur (lettre, courriel, brochure).",
    "On ne mélange jamais les deux styles dans un même texte : le style se décide à la première phrase et se tient jusqu'au point final.",
    "Six connecteurs suffisent à l'écrit, chacun avec son double oral : しかし (でも), したがって (だから), また (それに), さらに qui renchérit, 一方 qui met deux éléments en balance, なお qui ajoute une remarque secondaire.",
    "À l'écrit, le composé sino-japonais en 〜する remplace le verbe courant : 増加する pour 増える, 到着する pour 着く, 購入する pour 買う. Employé à l'oral, il rend le propos raide et administratif.",
    "Pour lire vite, repérez d'abord les connecteurs : ils donnent le squelette du texte — constat, contraste, conclusion — avant que vous ayez compris chaque mot.",
  ],

  vocabulary: [
    {
      term: "文章",
      reading: "ぶんしょう",
      romanization: "bunshou",
      segments: [
        { text: "文", reading: "ぶん" },
        { text: "章", reading: "しょう" },
      ],
      pitch: 1,
      french: "Un texte, un écrit",
      english: "Text, writing, prose",
      example: {
        sentence: "この文章は分かりやすい。",
        romanization: "kono bunshou wa wakariyasui.",
        translation: "Ce texte est facile à comprendre.",
      },
    },
    {
      term: "書き言葉",
      reading: "かきことば",
      romanization: "kakikotoba",
      segments: [
        { text: "書", reading: "か" },
        { text: "き" },
        { text: "言葉", reading: "ことば" },
      ],
      french: "La langue écrite",
      english: "Written language",
    },
    {
      term: "話し言葉",
      reading: "はなしことば",
      romanization: "hanashikotoba",
      segments: [
        { text: "話", reading: "はな" },
        { text: "し" },
        { text: "言葉", reading: "ことば" },
      ],
      french: "La langue parlée",
      english: "Spoken language",
    },
    {
      term: "論文",
      reading: "ろんぶん",
      romanization: "ronbun",
      segments: [
        { text: "論", reading: "ろん" },
        { text: "文", reading: "ぶん" },
      ],
      pitch: 0,
      french: "Un article scientifique, un mémoire",
      english: "Paper, thesis",
    },
    {
      term: "報告書",
      reading: "ほうこくしょ",
      romanization: "houkokusho",
      segments: [
        { text: "報", reading: "ほう" },
        { text: "告", reading: "こく" },
        { text: "書", reading: "しょ" },
      ],
      french: "Un rapport (document)",
      english: "Report",
      example: {
        sentence: "報告書は金曜日までに出してください。",
        romanization: "houkokusho wa kinyoubi made ni dashite kudasai.",
        translation: "Remettez le rapport d'ici vendredi.",
      },
    },
    {
      term: "筆者",
      reading: "ひっしゃ",
      romanization: "hissha",
      segments: [
        { text: "筆", reading: "ひっ" },
        { text: "者", reading: "しゃ" },
      ],
      pitch: 1,
      french: "L'auteur (d'un texte)",
      english: "The author, the writer",
    },
    {
      term: "段落",
      reading: "だんらく",
      romanization: "danraku",
      segments: [
        { text: "段", reading: "だん" },
        { text: "落", reading: "らく" },
      ],
      french: "Un paragraphe",
      english: "Paragraph",
    },
    {
      term: "結論",
      reading: "けつろん",
      romanization: "ketsuron",
      segments: [
        { text: "結", reading: "けつ" },
        { text: "論", reading: "ろん" },
      ],
      pitch: 0,
      french: "La conclusion",
      english: "Conclusion",
    },
    {
      term: "述べる",
      reading: "のべる",
      romanization: "noberu",
      segments: [
        { text: "述", reading: "の" },
        { text: "べる" },
      ],
      pitch: 2,
      french: "Exposer, énoncer (à l'écrit ou en public)",
      english: "To state, to express",
    },
    {
      term: "示す",
      reading: "しめす",
      romanization: "shimesu",
      segments: [
        { text: "示", reading: "しめ" },
        { text: "す" },
      ],
      french: "Indiquer, montrer (des données, un résultat)",
      english: "To show, to indicate",
      example: {
        sentence: "この図はデータの変化を示している。",
        romanization: "kono zu wa deeta no henka o shimeshite iru.",
        translation: "Ce graphique montre l'évolution des données.",
      },
    },
    {
      term: "調査",
      reading: "ちょうさ",
      romanization: "chousa",
      segments: [
        { text: "調", reading: "ちょう" },
        { text: "査", reading: "さ" },
      ],
      pitch: 1,
      french: "Une enquête, une étude",
      english: "Survey, investigation",
    },
    {
      term: "傾向",
      reading: "けいこう",
      romanization: "keikou",
      segments: [
        { text: "傾", reading: "けい" },
        { text: "向", reading: "こう" },
      ],
      pitch: 0,
      french: "Une tendance",
      english: "Tendency, trend",
      example: {
        sentence: "この傾向は今後も続くだろう。",
        romanization: "kono keikou wa kongo mo tsuzuku darou.",
        translation: "Cette tendance se poursuivra sans doute.",
      },
    },
    {
      term: "増加",
      reading: "ぞうか",
      romanization: "zouka",
      segments: [
        { text: "増", reading: "ぞう" },
        { text: "加", reading: "か" },
      ],
      french: "Une augmentation ; augmenter (増加する)",
      english: "Increase",
    },
    {
      term: "減少",
      reading: "げんしょう",
      romanization: "genshou",
      segments: [
        { text: "減", reading: "げん" },
        { text: "少", reading: "しょう" },
      ],
      french: "Une baisse ; diminuer (減少する)",
      english: "Decrease",
    },
    {
      term: "しかし",
      reading: "しかし",
      romanization: "shikashi",
      french: "Cependant, toutefois (écrit)",
      english: "However",
    },
    {
      term: "したがって",
      reading: "したがって",
      romanization: "shitagatte",
      french: "Par conséquent (écrit)",
      english: "Therefore, consequently",
    },
    {
      term: "一方",
      reading: "いっぽう",
      romanization: "ippou",
      segments: [{ text: "一方", reading: "いっぽう" }],
      french: "À l'inverse, d'un autre côté",
      english: "On the other hand",
    },
    {
      term: "なお",
      reading: "なお",
      romanization: "nao",
      french: "À noter que, par ailleurs (remarque secondaire)",
      english: "Note that, incidentally",
    },
  ],

  exercises: [
    {
      id: "unit-37-ex1",
      type: "comprehension",
      question: "Quelle copule le corps d'un mémoire universitaire (論文) emploie-t-il ?",
      correctAnswer: "である",
      options: ["である", "です", "でございます", "じゃない"],
      optionsHint: ["de aru", "desu", "de gozaimasu", "ja nai"],
      hint: "Cette forme s'écrit mais ne se prononce jamais en conversation.",
    },
    {
      id: "unit-37-ex2",
      type: "fill-blank",
      question: "「調査の結果を示した。___ 、原因は明らかになっていない。」 (« cependant », registre écrit)",
      correctAnswer: "しかし",
      options: ["しかし", "でも", "だから", "それに"],
      optionsHint: ["shikashi", "demo", "dakara", "sore ni"],
      hint: "Le mot juste veut dire « cependant » — et il doit appartenir à la langue écrite.",
    },
    {
      id: "unit-37-ex3",
      type: "comprehension",
      question: "Dans un rapport, par quoi remplace-t-on le だから de l'oral ?",
      correctAnswer: "したがって",
      options: ["したがって", "しかし", "また", "なお"],
      optionsHint: ["shitagatte", "shikashi", "mata", "nao"],
      hint: "Cherchez celui qui annonce une conséquence logique, pas une opposition ni un ajout.",
    },
    {
      id: "unit-37-ex4",
      type: "fill-blank",
      question: "Dans un rapport : 「人口が ___ した。」 (« la population a augmenté »)",
      correctAnswer: "増加",
      options: ["増加", "減少", "変化", "増える"],
      optionsHint: ["zouka", "genshou", "henka", "fueru"],
      optionsReading: ["ぞうか", "げんしょう", "へんか", "ふえる"],
      hint: "Il faut un composé sino-japonais qui se combine avec する, et qui dit « augmenter ».",
    },
    {
      id: "unit-37-ex5",
      type: "listen",
      question: "この傾向は今後も続くと考えられる。",
      correctAnswer: "On estime que cette tendance se poursuivra.",
      options: [
        "On estime que cette tendance se poursuivra.",
        "Cette tendance a déjà disparu.",
        "Il faudrait mettre fin à cette tendance.",
        "Cette tendance est difficile à expliquer.",
      ],
      hint: "と考えられる en fin de phrase signale une hypothèse de l'auteur, pas un fait établi.",
    },
    {
      id: "unit-37-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Cependant, la cause n'est toujours pas connue. »",
      correctAnswer: "しかし、原因はまだ分かっていない。",
      options: ["しかし", "原因", "は", "まだ", "分かって", "いない"],
      hint: "Le connecteur ouvre la phrase, le verbe la ferme — et l'écrit n'abrège pas ていない.",
    },
    {
      id: "unit-37-ex7",
      type: "comprehension",
      question: "À quoi sert 一方 dans un texte écrit ?",
      correctAnswer: "À mettre en balance deux éléments parallèles",
      options: [
        "À mettre en balance deux éléments parallèles",
        "À annoncer la conséquence de ce qui précède",
        "À ajouter une remarque secondaire en fin de texte",
        "À introduire un exemple",
      ],
      hint: "Les trois autres descriptions correspondent à したがって, なお et たとえば.",
    },
    {
      id: "unit-37-ex8",
      type: "translate",
      question: "Écrivez en style である : « Cependant, ce résultat n'est pas suffisant. »",
      correctAnswer: "しかし、この結果は十分ではない。",
      options: [
        "しかし、この結果は十分ではない。",
        "でも、この結果は十分じゃないです。",
        "しかし、この結果は十分じゃない。",
        "だから、この結果は十分ではない。",
      ],
      optionsHint: [
        "shikashi, kono kekka wa juubun de wa nai.",
        "demo, kono kekka wa juubun ja nai desu.",
        "shikashi, kono kekka wa juubun ja nai.",
        "dakara, kono kekka wa juubun de wa nai.",
      ],
      optionsReading: [
        "しかし、このけっかはじゅうぶんではない。",
        "でも、このけっかはじゅうぶんじゃないです。",
        "しかし、このけっかはじゅうぶんじゃない。",
        "だから、このけっかはじゅうぶんではない。",
      ],
      hint: "Le connecteur et la négation doivent relever du même registre.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-36"],
};
