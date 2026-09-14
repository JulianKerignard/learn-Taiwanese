import type { CourseUnit } from "@/types/course";

export const unit42: CourseUnit = {
  id: "unit-42",
  number: 42,
  chapter: 8,
  title: "Lire un texte argumenté : les connecteurs de l'écrit",
  titleNative: "書きことば：論の骨組みを読む",
  description:
    "Les six formes en に que tout le monde confond (において、に関して、に対して、によって、として、にとって), puis les marqueurs de concession et de gradation (つつ、ながらも、にもかかわらず、どころか、ばかりか). Objectif : reconstruire la thèse, les concessions et la conclusion avant même de comprendre le lexique.",
  icon: "論",

  sections: [
    {
      title: "Trois formes en に : cadre, thème, cible",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Six expressions bâties sur に structurent presque tout l'écrit argumenté japonais, et elles se confondent parce que le français les traduit toutes par « dans », « concernant », « pour » ou « par ». La traduction est donc une impasse. Ce qui les départage est une question à poser à la phrase : dans quel cadre ? sur quel thème ? vers quelle cible ? par quel agent ? à quel titre ? du point de vue de qui ? Six questions, six formes. Tant que vous traduisez, vous confondez ; dès que vous posez la question, l'hésitation disparaît.",
        },
        {
          type: "example",
          native: "現代社会において、情報の量は増加しつつある。",
          romanization: "gendai shakai ni oite, jouhou no ryou wa zouka shitsutsu aru.",
          translation: "Dans la société contemporaine, le volume d'information ne cesse de croître.",
          content:
            "において répond à « dans quel cadre ? » — un lieu, une époque, un domaine. C'est le で formel : à l'oral on dirait 現代社会では. Devant un nom, la forme devient における : 「日本における教育制度」. Retenez que において n'introduit jamais un moyen ni un agent, seulement une scène à l'intérieur de laquelle le fait se produit.",
        },
        {
          type: "example",
          native: "この問題に関して、専門家の意見を聞いた。",
          romanization: "kono mondai ni kanshite, senmonka no iken o kiita.",
          translation: "Concernant ce problème, nous avons recueilli l'avis d'experts.",
          content:
            "に関して répond à « sur quel thème ? » : il délimite le sujet dont on parle, sans que rien ne soit dirigé vers lui. C'est la version écrite de について, et le test est immédiat — si について passe sans que la phrase perde quoi que ce soit, c'est bien に関して. Devant un nom : に関する, comme dans 「環境に関する研究」.",
        },
        {
          type: "example",
          native: "政府はこの問題に対して、新しい対策を取った。",
          romanization: "seifu wa kono mondai ni taishite, atarashii taisaku o totta.",
          translation: "Face à ce problème, le gouvernement a pris de nouvelles mesures.",
          content:
            "に対して répond à « vers quelle cible ? ». Quelque chose est dirigé vers le terme qu'il introduit : une action, une mesure, une attitude. D'où 「学生に対して厳しい」 — la sévérité vise les étudiants. Remplacez ici に対して par に関して et la phrase devient étrange : on ne prend pas des mesures « au sujet de », on les prend « contre ».",
        },
        {
          type: "comparison",
          content:
            "La paire décisive : 「その事故に関して調査する」 (on enquête sur l'accident — c'est le thème de l'enquête) contre 「その事故に対して責任を取る」 (on assume face à l'accident — la responsabilité est dirigée vers lui). Le verbe tranche presque toujours. Un verbe de discours ou d'étude (述べる、調査する、質問する) appelle に関して ; un verbe d'action ou d'attitude (対策を取る、反対する、厳しい) appelle に対して.",
        },
        {
          type: "text",
          content:
            "に対して a un second emploi, purement contrastif, qui sert de charpente aux textes argumentés : A に対して B met deux termes en regard, comme le français « alors que ». Après un verbe ou un adjectif, la forme s'allonge en のに対して : 「都市部では人口が増えているのに対して、地方では減少している。」 Repérer ce のに対して dans un paragraphe vous donne d'un coup les deux pôles de la comparaison, avant même d'avoir lu le détail des chiffres.",
        },
      ],
    },
    {
      title: "Trois formes en に : agent, rôle, point de vue",
      type: "grammar",
      content: [
        {
          type: "example",
          native: "この報告書は専門家によって作成された。",
          romanization: "kono houkokusho wa senmonka ni yotte sakusei sareta.",
          translation: "Ce rapport a été rédigé par des experts.",
          content:
            "によって répond à « par quel agent ? ». C'est le complément d'agent du passif dans un texte formel, là où la conversation se contente de に. La règle d'usage est nette : avec un verbe de création ou de production (作る、書く、発見する、建てる), le japonais écrit exige によって et non に.",
        },
        {
          type: "text",
          content:
            "によって porte en réalité quatre valeurs distinctes, et c'est ce qui le rend difficile. Agent du passif, comme ci-dessus. Moyen ou méthode : 「話し合いによって解決する」. Cause : 「地震によって多くの家が倒れた」. Enfin variation, au sens de « selon » : 「人によって考え方が違う」. Ce n'est pas la forme qui vous renseigne mais le verbe : un verbe de différence (違う、異なる、変わる) impose la lecture « selon », un passif impose l'agent, un verbe de destruction impose la cause.",
        },
        {
          type: "example",
          native: "考え方は人によって異なる。",
          romanization: "kangaekata wa hito ni yotte kotonaru.",
          translation: "Les façons de penser diffèrent selon les personnes.",
          content:
            "Ici によって ne peut être remplacé ni par で ni par について : la valeur de variation lui appartient en propre, et 異なる la déclenche à lui seul. Devant un nom, によって devient による : 「地震による被害」, « les dégâts dus au séisme ». Cette forme en による est très fréquente dans les titres de presse, où elle condense une relation de cause en trois mores.",
        },
        {
          type: "example",
          native: "彼は研究者として日本に来た。",
          romanization: "kare wa kenkyuusha to shite Nihon ni kita.",
          translation: "Il est venu au Japon en tant que chercheur.",
          content:
            "として répond à « à quel titre ? » : le rôle, le statut, la qualité sous laquelle quelqu'un ou quelque chose intervient. Le sujet occupe réellement cette position. Le même として sert aussi à introduire un exemple ou une fonction dans un texte : 「一例として」、「参考として」、「証拠として」.",
        },
        {
          type: "example",
          native: "留学生にとって、この制度は分かりにくい。",
          romanization: "ryuugakusei ni totte, kono seido wa wakarinikui.",
          translation: "Pour les étudiants étrangers, ce système est difficile à comprendre.",
          content:
            "にとって répond à « du point de vue de qui ? » : il installe l'instance qui évalue. Il appelle donc obligatoirement un jugement — 難しい、大切だ、必要だ、有利だ — et jamais une action. Dès que le prédicat décrit un comportement plutôt qu'une appréciation, にとって devient impossible.",
        },
        {
          type: "warning",
          content:
            "L'erreur la plus tenace du niveau N2 consiste à écrire にとって là où il faut に対して. 「私にとって厳しい」 signifie « c'est dur pour moi, de mon point de vue » ; 「私に対して厳しい」 signifie « il est sévère envers moi ». Les deux sont grammaticales, elles ne disent pas la même chose, et un correcteur ne vous accordera aucune indulgence. Test unique : regardez le prédicat. Jugement porté sur une situation, にとって. Comportement dirigé vers quelqu'un, に対して.",
        },
        {
          type: "comparison",
          content:
            "Dernière paire à fixer : として contre にとって. 「教師として、この教科書は使いにくい」 signifie que je suis moi-même enseignant et que je l'utilise mal. 「教師にとって、この教科書は使いにくい」 signifie que, du point de vue des enseignants en général, ce manuel est peu commode — et rien ne dit que je sois enseignant. として engage le locuteur dans le rôle ; にとって se contente d'emprunter son regard.",
        },
      ],
    },
    {
      title: "Concéder, retourner, renchérir",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Les formes précédentes reliaient des éléments entre eux. Celles qui suivent font tout autre chose : elles signalent l'attitude de l'auteur envers son propre propos. Elles disent où il cède du terrain, où il retourne l'objection, où il pousse son argument plus loin. Ce sont donc les mots à repérer en premier dans un texte argumenté, avant tout travail sur le lexique — ils portent le raisonnement, pas l'information.",
        },
        {
          type: "example",
          native: "体に悪いと知りつつ、つい飲んでしまう。",
          romanization: "karada ni warui to shiritsutsu, tsui nonde shimau.",
          translation: "Tout en sachant que c'est mauvais pour la santé, je finis par boire.",
          content:
            "つつ se rattache à la base en ます (知る → 知り) et possède deux emplois : la simultanéité formelle, équivalente à ながら, et surtout la concession, renforcée par も dans つつも. Un troisième emploi est à part et très fréquent dans la presse : 〜つつある marque un processus en cours, comme dans 「状況は改善しつつある」, « la situation est en train de s'améliorer ».",
        },
        {
          type: "example",
          native: "収入は少ないながらも、生活は安定している。",
          romanization: "shuunyuu wa sukunai nagara mo, seikatsu wa antei shite iru.",
          translation: "Bien que les revenus soient faibles, la vie reste stable.",
          content:
            "ながらも concède une propriété que l'auteur ne conteste pas, puis affirme le contraire de ce qu'on en attendrait. Il se rattache à un adjectif en い, à un nom, à un radical d'adjectif en な ou à une base en ます — d'où la formule figée 「残念ながら」. La différence avec le ながら de simultanéité tient au も : sans も, la lecture temporelle reprend le dessus.",
        },
        {
          type: "example",
          native: "悪天候にもかかわらず、大勢の観客が集まった。",
          romanization: "akutenkou ni mo kakawarazu, oozei no kankyaku ga atsumatta.",
          translation: "Malgré le mauvais temps, un public nombreux s'est rassemblé.",
          content:
            "にもかかわらず est la concession la plus forte et la plus nettement écrite. Il se place après un nom ou après une forme neutre. Attention à ne pas le confondre avec 〜にかかわらず, sans も, qui signifie « indépendamment de » : 「年齢にかかわらず参加できる」 ne concède rien, il déclare le critère hors sujet. Une more d'écart, deux mouvements de pensée opposés.",
        },
        {
          type: "example",
          native: "彼は謝るどころか、こちらのせいだと言い出した。",
          romanization: "kare wa ayamaru dokoro ka, kochira no sei da to iidashita.",
          translation: "Loin de s'excuser, il s'est mis à dire que c'était notre faute.",
          content:
            "どころか rejette purement et simplement le premier terme et lui substitue quelque chose qui va dans le sens opposé, ou beaucoup plus loin. La seconde proposition porte fréquemment も : 「休むどころか、前より忙しくなった」. Le premier terme n'est donc pas nuancé, il est nié — c'est ce qui le distingue de toutes les formes de concession.",
        },
        {
          type: "example",
          native: "この制度は複雑なばかりか、費用も高い。",
          romanization: "kono seido wa fukuzatsu na bakari ka, hiyou mo takai.",
          translation: "Non seulement ce système est compliqué, mais il coûte cher.",
          content:
            "ばかりか conserve le premier terme et lui en ajoute un second, qui va dans le même sens et l'aggrave. La seconde proposition porte presque toujours も ou さえ. Par rapport à だけでなく, plus neutre et plus oral, ばかりか est nettement écrit et suppose que le second élément est le plus marquant des deux : on ne l'emploie donc pas pour une simple addition.",
        },
        {
          type: "comparison",
          content:
            "どころか et ばかりか escaladent tous les deux, mais dans des directions opposées, et les confondre inverse le sens d'un paragraphe entier. 「安いどころか、かなり高い」 nie le premier terme : ce n'est pas bon marché du tout. 「安いばかりか、味もいい」 le garde et renchérit : non seulement c'est bon marché, mais c'est bon. Devant l'un de ces deux mots, demandez-vous toujours si l'auteur détruit son premier terme ou s'il s'appuie dessus.",
        },
      ],
    },
    {
      title: "Méthode : lire la structure avant le sens",
      type: "practice",
      content: [
        {
          type: "text",
          content:
            "La compréhension écrite du N2 ne récompense pas celui qui connaît le plus de mots, mais celui qui reconstruit le plus vite l'architecture du raisonnement. Adoptez donc deux passages. Premier passage : dictionnaire fermé, vous ne cherchez que les connecteurs, et vous répondez à trois questions — où est la thèse, où sont les concessions, où est la conclusion. Second passage seulement : le lexique, qui se laisse alors deviner parce que vous savez déjà quelle fonction chaque phrase occupe.",
        },
        {
          type: "text",
          content:
            "Le paragraphe argumenté japonais suit un squelette remarquablement stable. 確かに ouvre une concession que l'auteur accorde à l'adversaire. しかし ou だが la retourne. Une seconde concession peut venir se greffer avec 〜ながらも、〜つつも ou 〜にもかかわらず. Puis したがって、以上のように、つまり ou 要するに annoncent la conclusion, qui est presque toujours la dernière phrase. Cette régularité est une chance : elle rend le plan prévisible avant la lecture.",
        },
        {
          type: "example",
          native:
            "確かに、この制度には利点がある。しかし、利用者にとっては手続きが複雑であり、改善されつつあるとはいえ、依然として負担が大きい。したがって、制度の見直しが必要である。",
          romanization:
            "tashika ni, kono seido ni wa riten ga aru. shikashi, riyousha ni totte wa tetsuzuki ga fukuzatsu de ari, kaizen saretsutsu aru to wa ie, izen to shite futan ga ookii. shitagatte, seido no minaoshi ga hitsuyou de aru.",
          translation:
            "Certes, ce système a des avantages. Mais pour les usagers les démarches sont complexes et, même si elles s'améliorent, la charge reste lourde. Il faut donc revoir le dispositif.",
          content:
            "Quatre marqueurs suffisent à donner tout le plan : 確かに annonce une concession, しかし la retourne, 〜つつある + とはいえ concèdent une seconde fois sans céder sur le fond, したがって conclut. Notez にとって, qui installe le point de vue depuis lequel la difficulté est évaluée. Vous connaissez la structure du paragraphe sans avoir eu besoin de savoir ce que signifient 手続き ni 負担.",
        },
        {
          type: "warning",
          content:
            "Le piège central des questions du type 「筆者の考えに合うものはどれか」 se joue presque toujours sur une concession. Une phrase ouverte par 確かに, 〜ながらも ou 〜にもかかわらず n'exprime jamais l'opinion de l'auteur : elle prépare son objection. Choisir la réponse qui reprend cette phrase, c'est attribuer à l'auteur exactement la thèse qu'il combat — l'erreur la plus coûteuse de l'épreuve, et la plus facile à éviter une fois qu'on la connaît.",
        },
        {
          type: "tip",
          content:
            "Entraînement quotidien de dix minutes : prenez un éditorial de quotidien, surlignez uniquement les connecteurs et ne lisez rien d'autre, puis écrivez le plan en français en trois lignes. Relisez ensuite le texte en entier pour vérifier votre plan. Vous verrez que le nombre de connecteurs réellement employés est très limité, et que ce sont toujours les mêmes qui reviennent.",
        },
        {
          type: "text",
          content:
            "Côté production, la règle est exactement l'inverse de celle du japonais parlé. Aucune contraction, aucune particule finale, aucun んだ. On choisit une fois pour toutes son style — である pour un devoir ou un rapport, です/ます pour une lettre — et on le tient jusqu'à la dernière phrase. Mélanger les deux au sein d'un même texte est, à l'écrit, une faute aussi visible qu'un ため口 adressé à un supérieur.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "En séminaire, une enseignante commente le plan d'un exposé écrit. L'échange reste oral et poli, mais dès qu'il porte sur le texte, ce sont les connecteurs de l'écrit qui sont en jeu.",
    lines: [
      {
        speaker: "先生",
        native: "レポートの構成について、少しコメントしますね。",
        romanization: "repooto no kousei ni tsuite, sukoshi komento shimasu ne.",
        french: "Je vais faire quelques remarques sur la structure de votre rapport.",
        note: "À l'oral, について. Dans le rapport lui-même, ce même lien s'écrirait に関して : le sens est identique, le registre ne l'est pas.",
      },
      {
        speaker: "学生",
        native: "はい、お願いします。第二段落の主張が弱いでしょうか。",
        romanization: "hai, onegai shimasu. daini danraku no shuchou ga yowai deshou ka.",
        french: "Oui, je vous en prie. Est-ce que ma thèse du deuxième paragraphe est faible ?",
      },
      {
        speaker: "先生",
        native: "弱いというより、譲歩と主張の区別がつきにくいですね。「確かに」で始めた文が、そのまま結論のように読めてしまいます。",
        romanization: "yowai to iu yori, jouho to shuchou no kubetsu ga tsukinikui desu ne. tashika ni de hajimeta bun ga, sono mama ketsuron no you ni yomete shimaimasu.",
        french: "Plutôt que faible, on distingue mal la concession de la thèse. La phrase que vous ouvrez par 確かに se lit comme votre conclusion.",
        note: "確かに engage obligatoirement un retournement. Si rien ne le retourne, le lecteur prend l'objection concédée pour l'opinion de l'auteur.",
      },
      {
        speaker: "学生",
        native: "なるほど。「にもかかわらず」を使えばいいでしょうか。",
        romanization: "naruhodo. ni mo kakawarazu o tsukaeba ii deshou ka.",
        french: "Je vois. Est-ce que je peux utiliser にもかかわらず ?",
      },
      {
        speaker: "先生",
        native: "いいですね。ただ、「にかかわらず」と書かないように。「も」が入るかどうかで意味が変わりますから。",
        romanization: "ii desu ne. tada, ni kakawarazu to kakanai you ni. mo ga hairu ka dou ka de imi ga kawarimasu kara.",
        french: "Bonne idée. Mais n'écrivez pas にかかわらず : la présence de も change le sens.",
        note: "にもかかわらず concède (« malgré ») ; にかかわらず déclare le critère hors sujet (« indépendamment de »). Une seule more sépare les deux.",
      },
      {
        speaker: "学生",
        native: "もう一つ。「学生にとって」と「学生に対して」、どちらが正しいですか。",
        romanization: "mou hitotsu. gakusei ni totte to gakusei ni taishite, dochira ga tadashii desu ka.",
        french: "Encore une chose : faut-il écrire 学生にとって ou 学生に対して ?",
      },
      {
        speaker: "先生",
        native: "後ろに来るものを見てください。「負担が大きい」なら判断ですから「にとって」です。「説明する」のように行為なら「に対して」になります。",
        romanization: "ushiro ni kuru mono o mite kudasai. futan ga ookii nara handan desu kara ni totte desu. setsumei suru no you ni koui nara ni taishite ni narimasu.",
        french: "Regardez ce qui suit. Si c'est un jugement comme « la charge est lourde », c'est にとって. Si c'est une action comme « expliquer », c'est に対して.",
        note: "Le critère décisif n'est jamais le nom placé devant, mais le prédicat qui suit : jugement pour にとって, comportement dirigé pour に対して.",
      },
    ],
  },

  keyPoints: [
    "Les six formes en に se départagent par une question, jamais par une traduction : において = dans quel cadre, に関して = sur quel thème, に対して = vers quelle cible, によって = par quel agent ou selon quoi, として = à quel titre, にとって = du point de vue de qui.",
    "にとって appelle un jugement (難しい、大切だ、必要だ) ; に対して appelle une action ou une attitude dirigée (厳しい、説明する、反対する). C'est le prédicat qui décide, pas le nom qui précède.",
    "にもかかわらず = « malgré », c'est une concession ; にかかわらず = « indépendamment de », le critère est déclaré hors sujet. Une more d'écart, deux sens opposés.",
    "どころか nie le premier terme et le retourne ; ばかりか le conserve et renchérit. つつも, ながらも et にもかかわらず concèdent avant de retourner l'argument.",
    "Méthode de lecture au N2 : premier passage sur les seuls connecteurs pour situer thèse, concessions et conclusion, lexique ensuite. Une phrase ouverte par 確かに ou 〜ながらも n'exprime jamais l'opinion de l'auteur.",
  ],

  vocabulary: [
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
      term: "論文",
      reading: "ろんぶん",
      romanization: "ronbun",
      segments: [
        { text: "論", reading: "ろん" },
        { text: "文", reading: "ぶん" },
      ],
      pitch: 0,
      french: "L'article scientifique, le mémoire",
      english: "Academic paper, thesis",
    },
    {
      term: "主張",
      reading: "しゅちょう",
      romanization: "shuchou",
      segments: [
        { text: "主", reading: "しゅ" },
        { text: "張", reading: "ちょう" },
      ],
      pitch: 0,
      french: "La thèse, l'affirmation défendue",
      english: "Claim, assertion",
      example: {
        sentence: "筆者の主張は最後の段落にある。",
        romanization: "hissha no shuchou wa saigo no danraku ni aru.",
        translation: "La thèse de l'auteur se trouve dans le dernier paragraphe.",
      },
    },
    {
      term: "根拠",
      reading: "こんきょ",
      romanization: "konkyo",
      segments: [
        { text: "根", reading: "こん" },
        { text: "拠", reading: "きょ" },
      ],
      french: "Le fondement, la justification",
      english: "Grounds, basis",
    },
    {
      term: "譲歩",
      reading: "じょうほ",
      romanization: "jouho",
      segments: [
        { text: "譲", reading: "じょう" },
        { text: "歩", reading: "ほ" },
      ],
      french: "La concession",
      english: "Concession",
      example: {
        sentence: "「確かに」は譲歩の合図である。",
        romanization: "tashika ni wa jouho no aizu de aru.",
        translation: "確かに est le signal d'une concession.",
      },
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
      term: "前提",
      reading: "ぜんてい",
      romanization: "zentei",
      segments: [
        { text: "前", reading: "ぜん" },
        { text: "提", reading: "てい" },
      ],
      french: "La prémisse, le présupposé",
      english: "Premise, assumption",
    },
    {
      term: "対象",
      reading: "たいしょう",
      romanization: "taishou",
      segments: [
        { text: "対", reading: "たい" },
        { text: "象", reading: "しょう" },
      ],
      french: "L'objet d'étude, le public visé",
      english: "Object, target",
    },
    {
      term: "観点",
      reading: "かんてん",
      romanization: "kanten",
      segments: [
        { text: "観", reading: "かん" },
        { text: "点", reading: "てん" },
      ],
      french: "Le point de vue, l'angle d'analyse",
      english: "Viewpoint, perspective",
    },
    {
      term: "立場",
      reading: "たちば",
      romanization: "tachiba",
      segments: [
        { text: "立", reading: "たち" },
        { text: "場", reading: "ば" },
      ],
      french: "La position (que l'on occupe ou que l'on défend)",
      english: "Standpoint, position",
    },
    {
      term: "分野",
      reading: "ぶんや",
      romanization: "bun'ya",
      segments: [
        { text: "分", reading: "ぶん" },
        { text: "野", reading: "や" },
      ],
      french: "Le domaine, la discipline",
      english: "Field, domain",
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
      french: "La tendance",
      english: "Tendency, trend",
      example: {
        sentence: "若い世代にはその傾向が強い。",
        romanization: "wakai sedai ni wa sono keikou ga tsuyoi.",
        translation: "Cette tendance est marquée chez les jeunes générations.",
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
      french: "L'augmentation",
      english: "Increase",
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
      french: "Exposer, énoncer (par écrit ou oralement)",
      english: "To state, to set out",
    },
    {
      term: "指摘",
      reading: "してき",
      romanization: "shiteki",
      segments: [
        { text: "指", reading: "し" },
        { text: "摘", reading: "てき" },
      ],
      french: "Le fait de relever, de souligner un point",
      english: "Pointing out, remark",
    },
    {
      term: "検討",
      reading: "けんとう",
      romanization: "kentou",
      segments: [
        { text: "検", reading: "けん" },
        { text: "討", reading: "とう" },
      ],
      french: "L'examen, l'étude approfondie",
      english: "Examination, consideration",
    },
    {
      term: "従って",
      reading: "したがって",
      romanization: "shitagatte",
      segments: [
        { text: "従", reading: "したが" },
        { text: "って" },
      ],
      french: "Par conséquent, donc",
      english: "Therefore, consequently",
      example: {
        sentence: "したがって、制度の見直しが必要である。",
        romanization: "shitagatte, seido no minaoshi ga hitsuyou de aru.",
        translation: "Par conséquent, une révision du dispositif est nécessaire.",
      },
    },
    {
      term: "要するに",
      reading: "ようするに",
      romanization: "you suru ni",
      segments: [
        { text: "要", reading: "よう" },
        { text: "するに" },
      ],
      french: "En somme, autrement dit",
      english: "In short, in essence",
    },
  ],

  exercises: [
    {
      id: "unit-42-ex1",
      type: "fill-blank",
      question: "「留学生___、この制度は分かりにくい。」 « Pour les étudiants étrangers, ce système est difficile à comprendre. »",
      correctAnswer: "にとって",
      options: ["にとって", "に対して", "に関して", "によって"],
      optionsHint: ["ni totte", "ni taishite", "ni kanshite", "ni yotte"],
      hint: "分かりにくい est un jugement, pas une action dirigée vers quelqu'un.",
    },
    {
      id: "unit-42-ex2",
      type: "comprehension",
      question: "Quelle est la différence entre 「学生に対して厳しい」 et 「学生にとって厳しい」 ?",
      correctAnswer: "Le premier dit qu'on est sévère envers les étudiants, le second que la situation est dure pour eux",
      options: [
        "Le premier dit qu'on est sévère envers les étudiants, le second que la situation est dure pour eux",
        "Les deux sont équivalents, に対して est simplement plus formel",
        "Le premier appartient à l'écrit, le second à l'oral",
        "Le premier vise un groupe entier, le second une seule personne",
      ],
      hint: "Dans un cas la sévérité est dirigée vers eux, dans l'autre ils sont ceux qui la subissent comme un jugement.",
    },
    {
      id: "unit-42-ex3",
      type: "fill-blank",
      question: "「この報告書は専門家___作成された。」 « Ce rapport a été rédigé par des experts. »",
      correctAnswer: "によって",
      options: ["によって", "において", "にとって", "に関して"],
      optionsHint: ["ni yotte", "ni oite", "ni totte", "ni kanshite"],
      hint: "Verbe au passif, verbe de création : le japonais écrit exige une forme précise pour l'agent.",
    },
    {
      id: "unit-42-ex4",
      type: "fill-blank",
      question: "「現代社会___、情報の量は増加しつつある。」 « Dans la société contemporaine, le volume d'information ne cesse de croître. »",
      correctAnswer: "において",
      options: ["において", "によって", "にとって", "として"],
      optionsHint: ["ni oite", "ni yotte", "ni totte", "to shite"],
      hint: "Il s'agit du cadre — époque et domaine — à l'intérieur duquel le fait se produit.",
    },
    {
      id: "unit-42-ex5",
      type: "comprehension",
      question: "〜にもかかわらず et 〜にかかわらず : que change la présence de も ?",
      correctAnswer: "にもかかわらず signifie « malgré », にかかわらず signifie « indépendamment de »",
      options: [
        "にもかかわらず signifie « malgré », にかかわらず signifie « indépendamment de »",
        "Rien : ce sont deux graphies de la même expression",
        "にもかかわらず appartient à l'écrit, にかかわらず à l'oral",
        "にもかかわらず se place après un nom, にかかわらず après un verbe",
      ],
      hint: "L'un concède un obstacle, l'autre déclare le critère hors sujet.",
    },
    {
      id: "unit-42-ex6",
      type: "comprehension",
      question: "「彼は謝るどころか、こちらのせいだと言い出した。」 Que signifie どころか ici ?",
      correctAnswer: "Il n'a pas du tout présenté d'excuses, et il a fait l'inverse",
      options: [
        "Il n'a pas du tout présenté d'excuses, et il a fait l'inverse",
        "Il s'est excusé, et il a en plus accusé l'autre",
        "Il a failli s'excuser, puis s'est ravisé",
        "Il s'est excusé tout en pensant le contraire",
      ],
      hint: "どころか ne nuance pas le premier terme : il le nie.",
    },
    {
      id: "unit-42-ex7",
      type: "listen",
      question: "悪天候にもかかわらず、大勢の観客が集まった。",
      correctAnswer: "Malgré le mauvais temps, un public nombreux s'est rassemblé.",
      options: [
        "Malgré le mauvais temps, un public nombreux s'est rassemblé.",
        "À cause du mauvais temps, peu de spectateurs sont venus.",
        "Comme il faisait beau, beaucoup de monde est venu.",
        "Indépendamment de la météo, le nombre de spectateurs reste stable.",
      ],
      hint: "Écoutez le も : il fait toute la différence entre concession et absence de pertinence.",
    },
    {
      id: "unit-42-ex8",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Concernant ce problème, nous avons recueilli l'avis d'experts. »",
      correctAnswer: "この問題に関して、専門家の意見を聞いた。",
      options: ["この問題", "に関して", "専門家の意見", "を", "聞いた"],
      hint: "Le thème et son connecteur ouvrent la phrase ; le verbe la ferme.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-41"],
};
