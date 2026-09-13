import type { CourseUnit } from "@/types/course";

export const unit43: CourseUnit = {
  id: "unit-43",
  number: 43,
  chapter: 8,
  title: "Presse et documents officiels",
  titleNative: "新聞と公文書を読む",
  description:
    "Lire ce qui n'a pas été écrit pour vous : la grammaire tronquée des gros titres, les blocs de kanji sino-japonais et le style figé de l'administration. L'objectif n'est pas de tout comprendre, c'est d'extraire l'information.",
  icon: "報",

  sections: [
    {
      title: "Le gros titre : une langue à part entière",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "Un titre de journal japonais n'est pas une phrase raccourcie, c'est un système d'écriture autonome. La colonne fait douze à quinze signes : le rédacteur supprime donc tout ce que le lecteur peut reconstituer seul, c'est-à-dire le verbe conjugué, les particules は et を, et les marques de temps. Il ne reste que des noms sino-japonais empilés et deux ou trois signes de service : la virgule 、, la particule へ, la particule か. Le francophone cherche un verbe, n'en trouve pas et conclut qu'il ne comprend rien — alors qu'il n'y a simplement rien à trouver.",
        },
        {
          type: "example",
          native: "政府、来年度予算案を決定",
          romanization: "seifu, rainendo yosan-an o kettei",
          translation: "Le gouvernement arrête le projet de budget pour l'exercice à venir.",
          content:
            "La virgule qui suit 政府 fait le travail de は : elle pose le sujet et annonce que le reste le concerne. 決定 termine le titre sans する : un nom verbal placé en fin de titre vaut une action accomplie. Ici を survit parce que sans lui on lirait 予算案決定 comme un seul bloc de kanji, ce qui reste possible dans un titre plus court.",
        },
        {
          type: "example",
          native: "首相、来月訪米へ",
          romanization: "shushou, raigetsu houbei e",
          translation: "Le Premier ministre se rendra aux États-Unis le mois prochain.",
          content:
            "Ce へ n'indique pas une direction, il indique un projet. En fin de titre, 〜へ équivaut à 〜する予定だ ou 〜する方針だ : l'action est décidée mais n'a pas eu lieu. C'est le seul moyen que le japonais des titres possède pour marquer le futur, puisque la langue n'a pas de temps futur.",
        },
        {
          type: "example",
          native: "値上げ、来春か",
          romanization: "neage, raishun ka",
          translation: "Hausse des prix au printemps prochain ?",
          content:
            "Le か final n'interroge personne : il signale que le journal avance une hypothèse qu'il ne peut pas confirmer. On le traduit par un conditionnel ou un point d'interrogation, jamais par une vraie question. Sa présence est une information juridique autant que linguistique : le journal se protège en n'affirmant pas.",
        },
        {
          type: "comparison",
          content:
            "Trois titres, trois statuts de la même information. 首相、訪米 : c'est fait. 首相、訪米へ : c'est prévu. 首相、訪米か : ce n'est qu'une rumeur ou une déduction. Un lecteur japonais décode cet écart en une seconde, sans y penser. C'est ce réflexe-là qu'il faut installer.",
        },
        {
          type: "warning",
          content:
            "Deux autres signes de service reviennent sans cesse. 〜も marque le franchissement d'un seuil ou l'ajout d'un élément aggravant : 死者、100人も. Et 〜との／〜と marque la parole rapportée : 首相、辞任の意向と — « le Premier ministre aurait l'intention de démissionner, selon nos informations ». Ne lisez jamais ces particules avec leur valeur ordinaire.",
        },
        {
          type: "tip",
          content:
            "Prenez l'habitude mécanique de relire tout titre en le reconstruisant à voix haute en japonais complet : 政府、来年度予算案を決定 devient 政府は来年度予算案を決定した. Trois semaines de cet exercice et vous ne verrez plus la forme tronquée comme un obstacle.",
        },
      ],
    },
    {
      title: "Les blocs sino-japonais",
      type: "theory",
      content: [
        {
          type: "text",
          content:
            "La deuxième difficulté n'est pas grammaticale mais lexicale. La presse et l'administration fabriquent leurs mots en empilant des kanji lus en on'yomi, sans aucun okurigana : rien dans les kana ne vient vous aider. Ces composés se lisent selon une règle stable — le dernier bloc porte le sens principal, tout ce qui précède le modifie. On les décompose donc de droite à gauche, par paquets de deux kanji.",
        },
        {
          type: "example",
          native: "感染拡大防止対策",
          romanization: "kansen kakudai boushi taisaku",
          translation: "Mesures de prévention de la propagation de l'infection.",
          content:
            "Huit kanji, un seul mot, aucune particule. Découpez : 感染 ｜ 拡大 ｜ 防止 ｜ 対策. Le noyau est 対策 (les mesures) ; elles portent sur 防止 (la prévention) ; de quoi ? de 拡大 (la propagation) ; de quoi ? de 感染 (l'infection). Le français remonte la chaîne avec des « de » successifs, le japonais la descend sans rien dire.",
        },
        {
          type: "example",
          native: "経済成長率",
          romanization: "keizai seichouritsu",
          translation: "Le taux de croissance économique.",
          content:
            "Même mécanique avec un suffixe. 率 (le taux) ferme le mot ; 成長 (la croissance) le précise ; 経済 (l'économie) précise encore. Une poignée de suffixes couvrent l'essentiel de la presse : 〜率 le taux, 〜化 la transformation en, 〜性 le caractère, 〜的 l'adjectivisation, 〜案 le projet de, 〜策 la mesure, 〜制 le régime, 〜中 en cours de.",
        },
        {
          type: "example",
          native: "記録的大雨",
          romanization: "kirokuteki ooame",
          translation: "Des pluies d'une intensité sans précédent.",
          content:
            "Le suffixe 〜的 transforme n'importe quel nom en modificateur. 記録 c'est le record, 記録的 c'est « qui relève du record ». Notez que 大雨 se lit ici en kun'yomi (おおあめ) : les composés de la météo mélangent volontiers les deux lectures, il faut les apprendre comme des blocs.",
        },
        {
          type: "tip",
          content:
            "Devant une chaîne de six kanji ou plus, ne cherchez pas le mot au dictionnaire : il n'y est probablement pas, parce qu'il a été fabriqué pour l'occasion. Découpez en paires, traduisez chaque paire, remontez. C'est exactement ce que fait un lecteur japonais qui rencontre le composé pour la première fois.",
        },
        {
          type: "warning",
          content:
            "Ne traduisez jamais un composé kanji par kanji vers le français. 対策 n'est pas « politique contre », 見込み n'est pas « vue dedans ». Le sens du bloc de deux kanji est lexicalisé : il s'apprend comme un mot, pas comme une addition. Le calque produit des contresens qui ont l'air plausibles, ce qui est le pire des cas.",
        },
      ],
    },
    {
      title: "Le style administratif",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les formulaires, règlements, contrats et avis affichés relèvent d'un registre appelé 公文書. Il obéit à trois règles simples : pas de です／ます, forme neutre partout ; pas de sujet exprimé quand il est évident ; et des tournures figées qui ont chacune une valeur juridique précise. Ce style n'est pas plus poli que le vôtre, il est impersonnel — personne ne parle, c'est le texte qui dispose.",
        },
        {
          type: "example",
          native: "紛失した場合は、直ちに窓口に届け出ること。",
          romanization: "funshitsu shita baai wa, tadachi ni madoguchi ni todokederu koto.",
          translation: "En cas de perte, prévenir immédiatement le guichet.",
          content:
            "Deux tournures dans une seule phrase. 〜場合(は) pose une condition envisagée par le texte, plus abstraite que 〜たら : elle décrit un cas de figure prévu par le règlement, pas une éventualité de conversation. Et le こと final n'est pas le mot « chose » : placé en fin de phrase neutre, il transforme le verbe en consigne obligatoire.",
        },
        {
          type: "warning",
          content:
            "C'est le point qui piège tout le monde. 提出すること ne veut pas dire « le fait de remettre », mais « à remettre, obligatoirement ». On rencontre aussi la variante nominale 提出のこと, strictement équivalente. Un avis qui se termine par こと est un ordre : si vous le lisez comme une description, vous manquez une échéance.",
        },
        {
          type: "example",
          native: "申込みは、一人一回に限る。",
          romanization: "moushikomi wa, hitori ikkai ni kagiru.",
          translation: "Les candidatures sont limitées à une par personne.",
          content:
            "〜に限る exprime une restriction stricte : rien au-delà. Sa forme adverbiale 〜に限り s'emploie en tête de phrase pour désigner le seul public concerné — 学生に限り、入館は無料とする (l'entrée est gratuite pour les étudiants uniquement). Ne le confondez pas avec 〜に限らず, qui dit exactement l'inverse : « sans se limiter à ».",
        },
        {
          type: "example",
          native: "利用料金は、毎月末日までに支払うものとする。",
          romanization: "riyou ryoukin wa, maitsuki matsujitsu made ni shiharau mono to suru.",
          translation: "Les frais d'utilisation sont payables au plus tard le dernier jour de chaque mois.",
          content:
            "〜ものとする est la formule des contrats. Elle ne décrit pas ce qui se passe, elle institue ce qui vaudra entre les parties : « il est convenu que », « sera réputé ». Vous ne l'emploierez presque jamais vous-même, mais vous la lirez dans chaque bail, chaque contrat de travail et chaque conditions générales d'utilisation.",
        },
        {
          type: "comparison",
          content:
            "Le même ordre monte en impersonnalité : 提出してください s'adresse à vous et reste une demande ; 提出しなければならない énonce une obligation dont vous êtes le sujet ; 提出すること est une consigne sans destinataire nommé, valable pour quiconque lit l'avis. C'est ce dernier degré, et lui seul, que vous verrez affiché sur un mur.",
        },
        {
          type: "tip",
          content:
            "Apprenez les mots-outils du registre, ils reviennent partout : および (et), または (ou), ただし (toutefois — introduit systématiquement l'exception qui vous concerne), なお (par ailleurs), 直ちに (immédiatement), 速やかに (sans délai), 当該 (ledit). Lire le ただし d'un règlement avant tout le reste est un excellent réflexe.",
        },
      ],
    },
    {
      title: "Extraire l'information, pas la traduire",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "Voici la compétence réellement évaluée au N2, et réellement utile au travail : sortir cinq informations d'un article sans en comprendre chaque mot. Qui ? quoi ? quand ? où ? quelle ampleur ? Un article de presse japonais est construit pour cela. Le 見出し donne le fait, le chapeau (リード, une à deux phrases) répond aux cinq questions, le corps ajoute les détails et les citations. Si vous décrochez au troisième paragraphe, vous avez déjà l'essentiel.",
        },
        {
          type: "example",
          native: "記録的大雨、九州で6万人に避難指示",
          romanization: "kirokuteki ooame, kyuushuu de rokuman-nin ni hinan shiji",
          translation: "Pluies sans précédent : ordre d'évacuation pour 60 000 personnes à Kyūshū.",
          content:
            "Le titre seul répond déjà à trois questions. Quoi : 大雨 et 避難指示. Où : 九州, grâce au で qui a survécu à la coupe parce qu'il est indispensable. Ampleur : 6万人. Manque le quand — c'est justement ce que le chapeau va donner.",
        },
        {
          type: "example",
          native: "気象庁は12日未明、九州北部に大雨特別警報を発表した。自治体は約6万人に避難指示を出した。",
          romanization:
            "kishouchou wa juuni-nichi mimei, kyuushuu hokubu ni ooame tokubetsu keihou o happyou shita. jichitai wa yaku rokuman-nin ni hinan shiji o dashita.",
          translation:
            "L'Agence météorologique a émis dans la nuit du 12 une alerte spéciale aux fortes pluies pour le nord de Kyūshū. Les municipalités ont ordonné l'évacuation d'environ 60 000 personnes.",
          content:
            "Le chapeau restitue la grammaire complète que le titre avait supprimée : は revient, 発表 redevient 発表した, la date apparaît. Deux phrases, deux acteurs : 気象庁 qui alerte, 自治体 qui décide. Repérer les acteurs avant de chercher les mots inconnus est ce qui fait gagner le plus de temps.",
        },
        {
          type: "text",
          content:
            "Quatre domaines produisent l'écrasante majorité des articles, et chacun a son lexique fermé. Politique : 政府、首相、国会、法案、可決. Économie : 景気、株価、増税、値上げ、失業率. Catastrophes naturelles : 台風、地震、被害、避難、警報. Santé publique : 感染、拡大、対策、医療. Deux cents mots bien choisis couvrent presque tout — c'est un investissement bien plus rentable qu'une liste de kanji rares.",
        },
        {
          type: "warning",
          content:
            "Le piège du dictionnaire : chercher chaque mot inconnu détruit la lecture. Vous perdez le fil, vous oubliez le début, et vous n'avez au bout du compte extrait aucune information. Lisez l'article entier une fois sans rien chercher, formulez à voix haute ce que vous avez compris, et seulement ensuite vérifiez trois mots — pas plus.",
        },
        {
          type: "tip",
          content:
            "Routine efficace : trois titres par jour sur NHK NEWS WEB, chronomètre à trente secondes par titre. Passez à l'article complet seulement quand les titres ne vous résistent plus. NHK NEWS WEB EASY, avec ses furigana et sa syntaxe simplifiée, est une bonne rampe d'accès mais ne remplace pas le texte réel : sa langue n'est pas celle de la presse.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Lundi matin, dans un bureau de Tokyo. Dubois, employé français, lit le journal avec Nakamura avant la réunion, puis bute sur une note interne des ressources humaines.",
    lines: [
      {
        speaker: "中村",
        native: "今日の一面、見ましたか。「首相、来月訪米へ」ですよ。",
        romanization: "kyou no ichimen, mimashita ka. \"shushou, raigetsu houbei e\" desu yo.",
        french: "Vous avez vu la une d'aujourd'hui ? « Le Premier ministre aux États-Unis le mois prochain ».",
        note: "一面 (いちめん) désigne la première page. Un titre se cite tel quel dans la conversation, sans le reconstruire.",
      },
      {
        speaker: "デュボワ",
        native: "その「へ」は何ですか。動詞がありませんが。",
        romanization: "sono \"e\" wa nan desu ka. doushi ga arimasen ga.",
        french: "Ce « へ », c'est quoi ? Il n'y a pas de verbe.",
        note: "Le が final laisse la phrase ouverte : c'est une manière atténuée de demander une explication.",
      },
      {
        speaker: "中村",
        native: "見出しでは動詞を落とすんです。「訪米へ」で「訪米する予定だ」という意味になります。",
        romanization: "midashi de wa doushi o otosu n desu. \"houbei e\" de \"houbei suru yotei da\" to iu imi ni narimasu.",
        french: "Dans les titres on supprime le verbe. 訪米へ signifie « doit se rendre aux États-Unis ».",
        note: "落とす s'emploie couramment pour « omettre, laisser tomber » un élément de langue.",
      },
      {
        speaker: "デュボワ",
        native: "下の記事には「増税か」とあります。これも予定ですか。",
        romanization: "shita no kiji ni wa \"zouzei ka\" to arimasu. kore mo yotei desu ka.",
        french: "L'article du dessous dit 増税か. C'est aussi un projet ?",
        note: "〜とあります = « il y a écrit ». C'est la formule pour citer un texte, à l'oral comme à l'écrit.",
      },
      {
        speaker: "中村",
        native: "いいえ、「か」は推測です。まだ決まっていません。新聞が可能性を示しているだけです。",
        romanization: "iie, \"ka\" wa suisoku desu. mada kimatte imasen. shinbun ga kanousei o shimeshite iru dake desu.",
        french: "Non, か marque une supposition. Rien n'est décidé : le journal signale seulement une possibilité.",
        note: "推測 (すいそく) = la conjecture. C'est le mot que les journalistes eux-mêmes emploient pour ce か.",
      },
      {
        speaker: "デュボワ",
        native: "なるほど。ところで、人事から来たこの紙に「提出のこと」と書いてありますが、これは命令ですか。",
        romanization:
          "naruhodo. tokorode, jinji kara kita kono kami ni \"teishutsu no koto\" to kaite arimasu ga, kore wa meirei desu ka.",
        french: "Je vois. Au fait, ce papier des RH dit 提出のこと. C'est un ordre ?",
        note: "ところで change de sujet net. 人事 (じんじ) désigne le service des ressources humaines.",
      },
      {
        speaker: "中村",
        native: "事務的な指示です。「必ず提出してください」と同じ意味ですが、書き言葉ではこう書きます。",
        romanization: "jimuteki na shiji desu. \"kanarazu teishutsu shite kudasai\" to onaji imi desu ga, kakikotoba de wa kou kakimasu.",
        french: "C'est une consigne administrative. Cela équivaut à « veuillez impérativement remettre », mais à l'écrit on écrit comme ça.",
        note: "書き言葉 (かきことば), la langue écrite, s'oppose à 話し言葉 (はなしことば), la langue parlée.",
      },
      {
        speaker: "デュボワ",
        native: "「社員に限る」ともありました。対象の限定ですね。",
        romanization: "\"shain ni kagiru\" to mo arimashita. taishou no gentei desu ne.",
        french: "Il y avait aussi 社員に限る. C'est bien une restriction du public concerné ?",
        note: "対象 (たいしょう) = le public visé, les personnes concernées. Mot indispensable pour lire un avis.",
      },
    ],
  },

  keyPoints: [
    "Un gros titre supprime le verbe, は et を : la virgule 、 tient lieu de は, et un nom verbal en fin de titre (発表、決定) vaut une action accomplie.",
    "Trois signes de service portent tout le sens temporel du titre : 〜へ annonce un projet, 〜か signale une hypothèse non confirmée, 〜と introduit une parole rapportée.",
    "Les composés sino-japonais se décomposent de droite à gauche par paquets de deux kanji : dans 感染拡大防止対策, le noyau est 対策 et tout ce qui précède le modifie.",
    "Le style administratif se reconnaît à quatre tournures : 〜こと (consigne obligatoire), 〜場合 (cas prévu par le texte), 〜に限る (restriction stricte), 〜ものとする (clause contractuelle).",
    "La compétence attendue au N2 est d'extraire qui, quoi, quand, où et quelle ampleur du titre et du chapeau — pas de traduire l'article mot à mot.",
  ],

  vocabulary: [
    {
      term: "見出し",
      reading: "みだし",
      romanization: "midashi",
      segments: [
        { text: "見", reading: "み" },
        { text: "出", reading: "だ" },
        { text: "し" },
      ],
      pitch: 0,
      french: "Le titre, le gros titre",
      english: "Headline",
      example: {
        sentence: "見出しだけ読めば、内容がだいたい分かります。",
        romanization: "midashi dake yomeba, naiyou ga daitai wakarimasu.",
        translation: "Rien qu'en lisant les titres, on saisit à peu près le contenu.",
      },
    },
    {
      term: "記事",
      reading: "きじ",
      romanization: "kiji",
      segments: [
        { text: "記", reading: "き" },
        { text: "事", reading: "じ" },
      ],
      pitch: 1,
      french: "L'article (de presse)",
      english: "Article",
    },
    {
      term: "報道",
      reading: "ほうどう",
      romanization: "houdou",
      segments: [
        { text: "報", reading: "ほう" },
        { text: "道", reading: "どう" },
      ],
      pitch: 0,
      french: "L'information, la couverture médiatique",
      english: "News coverage, reporting",
    },
    {
      term: "政府",
      reading: "せいふ",
      romanization: "seifu",
      segments: [
        { text: "政", reading: "せい" },
        { text: "府", reading: "ふ" },
      ],
      pitch: 1,
      french: "Le gouvernement",
      english: "Government",
    },
    {
      term: "首相",
      reading: "しゅしょう",
      romanization: "shushou",
      segments: [
        { text: "首", reading: "しゅ" },
        { text: "相", reading: "しょう" },
      ],
      pitch: 0,
      french: "Le Premier ministre",
      english: "Prime minister",
    },
    {
      term: "発表",
      reading: "はっぴょう",
      romanization: "happyou",
      segments: [
        { text: "発", reading: "はっ" },
        { text: "表", reading: "ぴょう" },
      ],
      pitch: 0,
      french: "L'annonce, la publication (officielle)",
      english: "Announcement",
      example: {
        sentence: "政府は新しい対策を発表した。",
        romanization: "seifu wa atarashii taisaku o happyou shita.",
        translation: "Le gouvernement a annoncé de nouvelles mesures.",
      },
    },
    {
      term: "景気",
      reading: "けいき",
      romanization: "keiki",
      segments: [
        { text: "景", reading: "けい" },
        { text: "気", reading: "き" },
      ],
      pitch: 0,
      french: "La conjoncture économique",
      english: "Economic conditions",
    },
    {
      term: "増税",
      reading: "ぞうぜい",
      romanization: "zouzei",
      segments: [
        { text: "増", reading: "ぞう" },
        { text: "税", reading: "ぜい" },
      ],
      pitch: 0,
      french: "La hausse des impôts",
      english: "Tax increase",
    },
    {
      term: "被害",
      reading: "ひがい",
      romanization: "higai",
      segments: [
        { text: "被", reading: "ひ" },
        { text: "害", reading: "がい" },
      ],
      pitch: 1,
      french: "Les dégâts, le préjudice",
      english: "Damage",
    },
    {
      term: "避難",
      reading: "ひなん",
      romanization: "hinan",
      segments: [
        { text: "避", reading: "ひ" },
        { text: "難", reading: "なん" },
      ],
      pitch: 1,
      french: "L'évacuation, la mise à l'abri",
      english: "Evacuation",
      example: {
        sentence: "市は約6万人に避難指示を出した。",
        romanization: "shi wa yaku rokuman-nin ni hinan shiji o dashita.",
        translation: "La ville a ordonné l'évacuation d'environ 60 000 personnes.",
      },
    },
    {
      term: "感染",
      reading: "かんせん",
      romanization: "kansen",
      segments: [
        { text: "感", reading: "かん" },
        { text: "染", reading: "せん" },
      ],
      pitch: 0,
      french: "La contagion, l'infection",
      english: "Infection",
    },
    {
      term: "対策",
      reading: "たいさく",
      romanization: "taisaku",
      segments: [
        { text: "対", reading: "たい" },
        { text: "策", reading: "さく" },
      ],
      pitch: 0,
      french: "Les mesures, le plan d'action",
      english: "Countermeasure, policy response",
    },
    {
      term: "見込み",
      reading: "みこみ",
      romanization: "mikomi",
      segments: [
        { text: "見", reading: "み" },
        { text: "込", reading: "こ" },
        { text: "み" },
      ],
      pitch: 0,
      french: "La prévision, la perspective",
      english: "Outlook, prospect",
      example: {
        sentence: "来週から気温が上がる見込みです。",
        romanization: "raishuu kara kion ga agaru mikomi desu.",
        translation: "Les températures devraient remonter à partir de la semaine prochaine.",
      },
    },
    {
      term: "場合",
      reading: "ばあい",
      romanization: "baai",
      segments: [
        { text: "場", reading: "ば" },
        { text: "合", reading: "あい" },
      ],
      pitch: 0,
      french: "Le cas, la situation (envisagée)",
      english: "Case, situation",
    },
    {
      term: "手続き",
      reading: "てつづき",
      romanization: "tetsuzuki",
      segments: [
        { text: "手", reading: "て" },
        { text: "続", reading: "つづ" },
        { text: "き" },
      ],
      pitch: 2,
      french: "Les démarches, la procédure",
      english: "Procedure, formalities",
    },
    {
      term: "申請",
      reading: "しんせい",
      romanization: "shinsei",
      segments: [
        { text: "申", reading: "しん" },
        { text: "請", reading: "せい" },
      ],
      pitch: 0,
      french: "La demande officielle, le dépôt de dossier",
      english: "Application (official)",
    },
    {
      term: "提出",
      reading: "ていしゅつ",
      romanization: "teishutsu",
      segments: [
        { text: "提", reading: "てい" },
        { text: "出", reading: "しゅつ" },
      ],
      pitch: 0,
      french: "La remise, le dépôt (d'un document)",
      english: "Submission",
    },
    {
      term: "紛失",
      reading: "ふんしつ",
      romanization: "funshitsu",
      segments: [
        { text: "紛", reading: "ふん" },
        { text: "失", reading: "しつ" },
      ],
      pitch: 0,
      french: "La perte (d'un objet, d'un document)",
      english: "Loss, mislaying",
    },
  ],

  exercises: [
    {
      id: "unit-43-ex1",
      type: "comprehension",
      question: "Dans le titre 「首相、来月訪米へ」, que signale le へ final ?",
      correctAnswer: "Un projet annoncé : le déplacement n'a pas encore eu lieu",
      options: [
        "Un projet annoncé : le déplacement n'a pas encore eu lieu",
        "Un fait accompli : le déplacement a eu lieu le mois dernier",
        "Une information incertaine que le journal ne confirme pas",
        "Une citation : ce sont les mots exacts du Premier ministre",
      ],
      hint: "En fin de titre, 〜へ équivaut à 〜する予定だ.",
    },
    {
      id: "unit-43-ex2",
      type: "comprehension",
      question: "Dans le titre 「値上げ、来春か」, quelle est la valeur du か final ?",
      correctAnswer: "Une hypothèse : le journal avance une possibilité non confirmée",
      options: [
        "Une hypothèse : le journal avance une possibilité non confirmée",
        "Une question directement adressée au lecteur",
        "Une décision officielle déjà entérinée par le gouvernement",
        "Une alternative entre deux dates, comme le « ou » français",
      ],
      hint: "Les journalistes appellent ce か un 推測.",
    },
    {
      id: "unit-43-ex3",
      type: "fill-blank",
      question: "「申込みは、一人一回___。」 « Les candidatures sont limitées à une par personne. »",
      correctAnswer: "に限る",
      options: ["に限る", "に限らない", "にわたる", "にかかわる"],
      optionsHint: ["ni kagiru", "ni kagiranai", "ni wataru", "ni kakawaru"],
      optionsReading: ["にかぎる", "にかぎらない", "にわたる", "にかかわる"],
      hint: "La tournure administrative qui pose une restriction stricte.",
    },
    {
      id: "unit-43-ex4",
      type: "fill-blank",
      question: "「必要な書類は、期日までに提出する___。」 « Les documents nécessaires doivent être remis avant la date limite. »",
      correctAnswer: "こと",
      options: ["こと", "もの", "ところ", "つもり"],
      optionsHint: ["koto", "mono", "tokoro", "tsumori"],
      optionsReading: ["こと", "もの", "ところ", "つもり"],
      hint: "En fin de phrase neutre, ce mot transforme le verbe en consigne obligatoire.",
    },
    {
      id: "unit-43-ex5",
      type: "listen",
      question: "政府は、来月から新しい制度を導入すると発表しました。",
      correctAnswer: "Le gouvernement a annoncé l'introduction d'un nouveau dispositif à partir du mois prochain.",
      options: [
        "Le gouvernement a annoncé l'introduction d'un nouveau dispositif à partir du mois prochain.",
        "Le gouvernement envisage de repousser le nouveau dispositif au mois prochain.",
        "Le nouveau dispositif du gouvernement a été suspendu le mois dernier.",
        "Le gouvernement a demandé au public son avis sur un nouveau dispositif.",
      ],
      hint: "Repérez l'acteur, le repère temporel, puis le verbe final.",
    },
    {
      id: "unit-43-ex6",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Le gouvernement a annoncé de nouvelles mesures. »",
      correctAnswer: "政府は新しい対策を発表した。",
      options: ["政府", "は", "新しい", "対策", "を", "発表した"],
      hint: "C'est la version complète du titre 政府、新対策を発表.",
    },
    {
      id: "unit-43-ex7",
      type: "comprehension",
      question: "Que dit exactement le titre 「大雨、九州で被害拡大」 ?",
      correctAnswer: "De fortes pluies provoquent des dégâts qui s'étendent à Kyūshū",
      options: [
        "De fortes pluies provoquent des dégâts qui s'étendent à Kyūshū",
        "Kyūshū a été épargné par les fortes pluies annoncées",
        "Kyūshū se prépare à de fortes pluies attendues dans les prochains jours",
        "Les dégâts causés par les pluies ont été réparés à Kyūshū",
      ],
      hint: "拡大 signifie l'extension, l'aggravation. Le で marque le lieu.",
    },
    {
      id: "unit-43-ex8",
      type: "translate",
      question: "Traduisez dans le style administratif : « En cas de perte, prévenir immédiatement le guichet. »",
      correctAnswer: "紛失した場合は、直ちに窓口に届け出ること。",
      options: [
        "紛失した場合は、直ちに窓口に届け出ること。",
        "紛失する前に、窓口に届け出ること。",
        "紛失した場合は、窓口に届け出なくてもよい。",
        "紛失しない場合は、直ちに窓口に届け出ること。",
      ],
      optionsHint: [
        "funshitsu shita baai wa, tadachi ni madoguchi ni todokederu koto.",
        "funshitsu suru mae ni, madoguchi ni todokederu koto.",
        "funshitsu shita baai wa, madoguchi ni todokedenakute mo yoi.",
        "funshitsu shinai baai wa, tadachi ni madoguchi ni todokederu koto.",
      ],
      optionsReading: [
        "ふんしつしたばあいは、ただちにまどぐちにとどけでること。",
        "ふんしつするまえに、まどぐちにとどけでること。",
        "ふんしつしたばあいは、まどぐちにとどけでなくてもよい。",
        "ふんしつしないばあいは、ただちにまどぐちにとどけでること。",
      ],
      hint: "Vérifiez la condition, puis la valeur de こと.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-42"],
};
