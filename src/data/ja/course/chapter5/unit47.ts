import type { CourseUnit } from "@/types/course";

export const unit47: CourseUnit = {
  id: "unit-47",
  number: 35,
  chapter: 5,
  title: "Changer et décider : ようになる, ようにする, ことにする",
  titleNative: "変化と決定：〜ようになる・〜ようにする・〜ことにする",
  description:
    "Quatre tournures bâties sur deux verbes, なる et する, et une seule question : le changement arrive-t-il de lui-même, ou quelqu'un l'a-t-il voulu ? 〜ようになる pour ce qui devient possible ou habituel, 〜ようにする pour l'effort qu'on s'impose, 〜ことにする pour la décision prise, 〜ことになる pour celle qui vous tombe dessus.",
  icon: "変",

  sections: [
    {
      title: "〜ようになる : un changement qui s'installe",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Vous savez dire qu'une chose devient autre avec なる : 上手になる, 暖かくなる. Pour qu'une action devienne possible ou habituelle, le japonais ajoute ようになる à la forme dictionnaire du verbe. Le cas le plus fréquent est la forme potentielle (unité 24) : 話せるようになる, « devenir capable de parler » ; 読めるようになる, « arriver à lire ».",
        },
        {
          type: "example",
          native: "三か月勉強して、ひらがなとカタカナが全部読めるようになりました。",
          romanization: "sankagetsu benkyou shite, hiragana to katakana ga zenbu yomeru you ni narimashita.",
          translation: "Après trois mois d'étude, j'arrive à lire tous les hiragana et les katakana.",
          content:
            "読める (potentiel de 読む) + ようになりました : c'est le résultat d'un long processus. Le français dit « j'arrive à lire », le japonais dit « c'est devenu l'état où je peux lire ». Comme avec tout potentiel, l'objet prend が plutôt que を.",
        },
        {
          type: "example",
          native: "日本に来てから、毎朝早く起きるようになりました。",
          romanization: "Nihon ni kite kara, maiasa hayaku okiru you ni narimashita.",
          translation: "Depuis que je suis au Japon, j'ai pris l'habitude de me lever tôt tous les matins.",
          content:
            "Avec un verbe ordinaire, ようになる décrit une nouvelle habitude. Personne ne vous y a obligé : la vie au Japon a fini par l'installer. C'est la construction idéale pour raconter comment on a changé.",
        },
        {
          type: "warning",
          content:
            "Au négatif, on dit 〜なくなる plutôt que 〜ないようになる : 野菜が食べられなくなりました (« je n'arrive plus à manger de légumes »), 最近、テレビを見なくなりました (« je ne regarde plus la télévision »). La forme 〜ないようになる existe, mais elle sonne lourde dans la conversation.",
        },
        {
          type: "comparison",
          content:
            "Avec un nom ou un adjectif, pas de よう : 日本語が上手になりました (« mon japonais s'est amélioré »). ようになる ne s'accroche qu'à un verbe. 日本語が話せるようになりました dit la même idée, mais du côté de l'action : « je sais maintenant le parler ».",
        },
      ],
    },
    {
      title: "〜ようにする : faire en sorte, s'efforcer de",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Remplacez なる par する et vous passez du changement subi à l'effort volontaire. Forme dictionnaire ou forme en ない + ようにする : « faire en sorte de », « s'efforcer de ». Au présent progressif, 〜ようにしています décrit une règle de vie qu'on s'applique depuis un moment.",
        },
        {
          type: "example",
          native: "健康のために、毎日野菜を食べるようにしています。",
          romanization: "kenkou no tame ni, mainichi yasai o taberu you ni shite imasu.",
          translation: "Pour ma santé, je m'efforce de manger des légumes tous les jours.",
          content:
            "La nuance d'effort est essentielle : vous n'y arrivez peut-être pas toujours, mais vous y veillez. 毎日野菜を食べています affirmerait un fait ; ようにしています avoue qu'il faut s'y tenir.",
        },
        {
          type: "example",
          native: "明日は遅れないようにしてください。",
          romanization: "ashita wa okurenai you ni shite kudasai.",
          translation: "Demain, faites en sorte de ne pas être en retard.",
          content:
            "〜ないようにしてください est une consigne polie mais ferme, très fréquente au travail et à l'école. Elle est plus douce que 遅れないでください, parce qu'elle vise l'attention de l'autre plutôt que son comportement.",
        },
        {
          type: "comparison",
          content:
            "La paire se retient en une phrase : 早く起きるようになりました (c'est arrivé, c'est devenu une habitude) ; 早く起きるようにしています (je m'y efforce). なる raconte un résultat, する un effort. Le français ne distingue pas toujours les deux, d'où les confusions.",
        },
      ],
    },
    {
      title: "ことにする et ことになる : qui a décidé ?",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Même opposition, appliquée à une décision. Forme dictionnaire (ou en ない) + ことにする : « décider de », la décision est la mienne. Forme dictionnaire + ことになる : « il a été décidé que », la décision vient d'ailleurs — l'entreprise, l'école, les circonstances.",
        },
        {
          type: "example",
          native: "来年、日本の大学に留学することにしました。",
          romanization: "rainen, Nihon no daigaku ni ryuugaku suru koto ni shimashita.",
          translation: "J'ai décidé de partir étudier dans une université japonaise l'an prochain.",
          content:
            "ことにしました annonce une décision que vous venez de prendre, et que vous assumez. Elle est plus ferme que 〜ようと思います (unité 25) : là, vous pensez le faire ; ici, c'est décidé.",
        },
        {
          type: "example",
          native: "来月から大阪の支店で働くことになりました。",
          romanization: "raigetsu kara Oosaka no shiten de hataraku koto ni narimashita.",
          translation: "À partir du mois prochain, je vais travailler à l'agence d'Osaka.",
          content:
            "Une mutation : c'est l'entreprise qui a décidé. Le salarié ne dit pas s'il est content ou non, et la phrase lui permet justement de ne pas le dire. On entend cette tournure dans toutes les annonces de changement de poste.",
        },
        {
          type: "text",
          content:
            "Aux formes en ている, les deux expressions deviennent des règles. 〜ことにしている : une règle personnelle (寝る前にスマホを見ないことにしています, « je me suis fixé de ne pas regarder mon téléphone avant de dormir »). 〜ことになっている : une règle imposée de l'extérieur (この寮では、夜十時までに帰ることになっています, « dans ce foyer, on doit être rentré avant dix heures »).",
        },
        {
          type: "tip",
          content:
            "Pour ne pas le confondre avec つもり (unité 25) : つもり est une intention, qui peut encore changer ; ことにした est une décision arrêtée, souvent annoncée à d'autres. 行くつもりです = « je compte y aller » ; 行くことにしました = « c'est décidé, j'y vais ».",
        },
      ],
    },
    {
      title: "Annoncer une nouvelle sans se mettre en avant",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Les Japonais emploient souvent ことになりました même pour des décisions qu'ils ont prises eux-mêmes. 結婚することになりました (« il se trouve que je vais me marier ») est la façon standard d'annoncer un mariage, alors que personne d'autre n'a décidé à votre place. La tournure présente la nouvelle comme un fait accompli par les circonstances : on ne se met pas en avant, on informe.",
        },
        {
          type: "example",
          native: "実は、今月で会社を辞めることになりました。",
          romanization: "jitsu wa, kongetsu de kaisha o yameru koto ni narimashita.",
          translation: "En fait, je quitte l'entreprise à la fin de ce mois.",
          content:
            "Annonce de départ au bureau. 辞めることにしました serait correct, mais mettrait en avant « c'est moi qui ai choisi de partir », ce qui peut sonner abrupt envers l'équipe. ことになりました adoucit tout, et c'est la version que les collègues attendent.",
        },
        {
          type: "tip",
          content:
            "Pour les bonnes résolutions, en revanche, ことにする est de mise : 今年から毎日日本語の日記を書くことにしました. Vous prenez un engagement, et vous le revendiquez. Les résolutions du Nouvel An, 新年の目標, se disent volontiers ainsi.",
        },
        {
          type: "warning",
          content:
            "Face à une annonce en ことになりました, ne demandez pas « pourquoi avez-vous décidé ça ? ». La tournure signale justement que la personne ne veut pas entrer dans les raisons. Félicitez (おめでとうございます) ou exprimez un regret (寂しくなりますね, « vous allez nous manquer »), sans creuser.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Dans un café, Lucas retrouve son amie Aoki, qu'il n'a pas vue depuis six mois. Tous deux ont des nouvelles.",
    lines: [
      {
        speaker: "青木",
        native: "ルカさん、久しぶり！日本語、すごく上手になりましたね。",
        romanization: "Ruka-san, hisashiburi! nihongo, sugoku jouzu ni narimashita ne.",
        french: "Lucas, ça fait longtemps ! Ton japonais s'est vraiment amélioré.",
        note: "上手になる : nom ou adjectif + になる, sans よう.",
      },
      {
        speaker: "ルカ",
        native: "ありがとうございます。最近、漢字も少し読めるようになりました。",
        romanization: "arigatou gozaimasu. saikin, kanji mo sukoshi yomeru you ni narimashita.",
        french: "Merci. Ces derniers temps, j'arrive aussi à lire quelques kanji.",
        note: "読める + ようになる : une capacité acquise au terme d'un processus.",
      },
      {
        speaker: "青木",
        native: "毎日勉強していますか。",
        romanization: "mainichi benkyou shite imasu ka.",
        french: "Tu étudies tous les jours ?",
      },
      {
        speaker: "ルカ",
        native: "はい、寝る前に三十分、日本語のニュースを聞くようにしています。",
        romanization: "hai, neru mae ni sanjuppun, nihongo no nyuusu o kiku you ni shite imasu.",
        french: "Oui, je m'efforce d'écouter les infos en japonais une demi-heure avant de dormir.",
        note: "ようにしています : une règle qu'il s'impose, avec l'effort que cela suppose.",
      },
      {
        speaker: "青木",
        native: "えらいですね。実は、私、来月から福岡で働くことになりました。",
        romanization: "erai desu ne. jitsu wa, watashi, raigetsu kara Fukuoka de hataraku koto ni narimashita.",
        french: "Bravo. En fait, moi, je vais travailler à Fukuoka à partir du mois prochain.",
        note: "ことになりました : la mutation vient de l'entreprise. Aoki ne dit pas si elle est contente.",
      },
      {
        speaker: "ルカ",
        native: "えっ、そうなんですか。寂しくなりますね。",
        romanization: "e, sou nan desu ka. sabishiku narimasu ne.",
        french: "Ah bon ? Tu vas nous manquer.",
        note: "La réponse attendue à une annonce en ことになりました : un regret, pas une question sur les raisons.",
      },
      {
        speaker: "青木",
        native: "ルカさんは、これからどうしますか。",
        romanization: "Ruka-san wa, korekara dou shimasu ka.",
        french: "Et toi, Lucas, qu'est-ce que tu vas faire maintenant ?",
      },
      {
        speaker: "ルカ",
        native: "来年の七月に、日本語能力試験を受けることにしました。",
        romanization: "rainen no shichigatsu ni, nihongo nouryoku shiken o ukeru koto ni shimashita.",
        french: "J'ai décidé de passer le JLPT en juillet prochain.",
        note: "ことにしました : sa décision à lui, qu'il revendique.",
      },
      {
        speaker: "青木",
        native: "いいですね。福岡から応援しています！",
        romanization: "ii desu ne. Fukuoka kara ouen shite imasu!",
        french: "Super. Je te soutiens depuis Fukuoka !",
      },
    ],
  },

  keyPoints: [
    "Forme dictionnaire (souvent potentielle) + ようになる : une capacité ou une habitude qui s'installe peu à peu. 読めるようになりました (« j'arrive à lire »). Au négatif : 〜なくなる (食べられなくなりました).",
    "Forme dictionnaire ou en ない + ようにする : l'effort qu'on s'impose. 野菜を食べるようにしています, 遅れないようにしてください.",
    "〜ことにする : décider soi-même (留学することにしました). 〜ことになる : une décision venue d'ailleurs (大阪で働くことになりました).",
    "À la forme en ている, les deux deviennent des règles : ことにしている (règle personnelle), ことになっている (règle imposée).",
    "ことになりました sert aussi à annoncer modestement ses propres nouvelles (結婚することになりました) : on y répond par des félicitations ou un regret, sans demander pourquoi.",
  ],

  vocabulary: [
    {
      term: "上手",
      reading: "じょうず",
      romanization: "jouzu",
      segments: [{ text: "上", reading: "じょう" }, { text: "手", reading: "ず" }],
      french: "Habile, doué (en quelque chose)",
      english: "Skilful, good at",
      example: {
        sentence: "料理が上手になりました。",
        romanization: "ryouri ga jouzu ni narimashita.",
        translation: "Je suis devenu bon en cuisine.",
      },
    },
    {
      term: "全部",
      reading: "ぜんぶ",
      romanization: "zenbu",
      segments: [{ text: "全", reading: "ぜん" }, { text: "部", reading: "ぶ" }],
      french: "Tout, la totalité",
      english: "All, everything",
    },
    {
      term: "健康",
      reading: "けんこう",
      romanization: "kenkou",
      segments: [{ text: "健", reading: "けん" }, { text: "康", reading: "こう" }],
      french: "La santé",
      english: "Health",
      example: {
        sentence: "健康のために、よく歩くようにしています。",
        romanization: "kenkou no tame ni, yoku aruku you ni shite imasu.",
        translation: "Pour ma santé, je m'efforce de marcher beaucoup.",
      },
    },
    {
      term: "遅れる",
      reading: "おくれる",
      romanization: "okureru",
      segments: [{ text: "遅", reading: "おく" }, { text: "れる" }],
      french: "Être en retard, prendre du retard",
      english: "To be late",
      example: {
        sentence: "約束の時間に遅れないようにしてください。",
        romanization: "yakusoku no jikan ni okurenai you ni shite kudasai.",
        translation: "Faites en sorte de ne pas être en retard au rendez-vous.",
      },
    },
    {
      term: "忘れる",
      reading: "わすれる",
      romanization: "wasureru",
      segments: [{ text: "忘", reading: "わす" }, { text: "れる" }],
      french: "Oublier",
      english: "To forget",
      example: {
        sentence: "鍵を忘れないようにしています。",
        romanization: "kagi o wasurenai you ni shite imasu.",
        translation: "Je fais attention à ne pas oublier mes clés.",
      },
    },
    {
      term: "留学する",
      reading: "りゅうがくする",
      romanization: "ryuugaku suru",
      segments: [{ text: "留", reading: "りゅう" }, { text: "学", reading: "がく" }, { text: "する" }],
      french: "Partir étudier à l'étranger",
      english: "To study abroad",
    },
    {
      term: "支店",
      reading: "してん",
      romanization: "shiten",
      segments: [{ text: "支", reading: "し" }, { text: "店", reading: "てん" }],
      french: "L'agence, la succursale",
      english: "Branch office",
    },
    {
      term: "転勤",
      reading: "てんきん",
      romanization: "tenkin",
      segments: [{ text: "転", reading: "てん" }, { text: "勤", reading: "きん" }],
      french: "La mutation (professionnelle)",
      english: "Job transfer",
      example: {
        sentence: "夫が福岡に転勤することになりました。",
        romanization: "otto ga Fukuoka ni tenkin suru koto ni narimashita.",
        translation: "Mon mari va être muté à Fukuoka.",
      },
    },
    {
      term: "辞める",
      reading: "やめる",
      romanization: "yameru",
      segments: [{ text: "辞", reading: "や" }, { text: "める" }],
      french: "Quitter (un emploi, une école), démissionner",
      english: "To quit, to resign",
    },
    {
      term: "結婚する",
      reading: "けっこんする",
      romanization: "kekkon suru",
      segments: [{ text: "結", reading: "けっ" }, { text: "婚", reading: "こん" }, { text: "する" }],
      french: "Se marier",
      english: "To get married",
      example: {
        sentence: "六月に結婚することになりました。",
        romanization: "rokugatsu ni kekkon suru koto ni narimashita.",
        translation: "Je vais me marier en juin.",
      },
    },
    {
      term: "目標",
      reading: "もくひょう",
      romanization: "mokuhyou",
      segments: [{ text: "目", reading: "もく" }, { text: "標", reading: "ひょう" }],
      french: "L'objectif, le but",
      english: "Goal, target",
      example: {
        sentence: "今年の目標は、N4に合格することです。",
        romanization: "kotoshi no mokuhyou wa, N4 ni goukaku suru koto desu.",
        translation: "Mon objectif de l'année, c'est de réussir le N4.",
      },
    },
    {
      term: "日記",
      reading: "にっき",
      romanization: "nikki",
      segments: [{ text: "日", reading: "にっ" }, { text: "記", reading: "き" }],
      french: "Le journal intime",
      english: "Diary",
    },
    {
      term: "寮",
      reading: "りょう",
      romanization: "ryou",
      segments: [{ text: "寮", reading: "りょう" }],
      french: "Le foyer, la résidence (d'étudiants, d'entreprise)",
      english: "Dormitory",
    },
    {
      term: "規則",
      reading: "きそく",
      romanization: "kisoku",
      segments: [{ text: "規", reading: "き" }, { text: "則", reading: "そく" }],
      french: "Le règlement, la règle",
      english: "Rule, regulation",
    },
    {
      term: "受ける",
      reading: "うける",
      romanization: "ukeru",
      segments: [{ text: "受", reading: "う" }, { text: "ける" }],
      french: "Passer (un examen) ; recevoir",
      english: "To take (an exam); to receive",
      example: {
        sentence: "十二月に試験を受けることにしました。",
        romanization: "juunigatsu ni shiken o ukeru koto ni shimashita.",
        translation: "J'ai décidé de passer l'examen en décembre.",
      },
    },
    {
      term: "寂しい",
      reading: "さびしい",
      romanization: "sabishii",
      segments: [{ text: "寂", reading: "さび" }, { text: "しい" }],
      french: "Triste d'être seul, qui se sent seul",
      english: "Lonely",
    },
    {
      term: "久しぶり",
      reading: "ひさしぶり",
      romanization: "hisashiburi",
      segments: [{ text: "久", reading: "ひさ" }, { text: "しぶり" }],
      french: "Ça fait longtemps ; après une longue absence",
      english: "Long time no see",
    },
    {
      term: "実は",
      reading: "じつは",
      romanization: "jitsu wa",
      segments: [{ text: "実", reading: "じつ" }, { text: "は" }],
      french: "En fait, à vrai dire",
      english: "Actually, to tell the truth",
    },
  ],

  exercises: [
    {
      id: "unit-47-ex1",
      type: "fill-blank",
      question: "一年勉強して、漢字が読める ___ 。 (« Après un an d'étude, j'arrive à lire les kanji. »)",
      correctAnswer: "ようになりました",
      options: ["ようになりました", "ようにしました", "ことにしました", "ことになりました"],
      optionsHint: ["you ni narimashita", "you ni shimashita", "koto ni shimashita", "koto ni narimashita"],
      hint: "Une capacité qui s'est installée au terme d'un processus.",
    },
    {
      id: "unit-47-ex2",
      type: "fill-blank",
      question: "健康のために、毎日歩く ___ 。 (« Pour ma santé, je m'efforce de marcher tous les jours. »)",
      correctAnswer: "ようにしています",
      options: ["ようにしています", "ようになっています", "ことになっています", "ようにいます"],
      optionsHint: ["you ni shite imasu", "you ni natte imasu", "koto ni natte imasu", "you ni imasu"],
      hint: "Un effort volontaire, qu'on s'impose depuis un moment.",
    },
    {
      id: "unit-47-ex3",
      type: "comprehension",
      question: "Votre entreprise vous mute à Osaka. Quelle phrase convient ?",
      correctAnswer: "大阪で働くことになりました。",
      options: ["大阪で働くことになりました。", "大阪で働くことにしました。", "大阪で働けるようにしました。", "大阪で働くようにしています。"],
      optionsHint: [
        "Oosaka de hataraku koto ni narimashita.",
        "Oosaka de hataraku koto ni shimashita.",
        "Oosaka de hatarakeru you ni shimashita.",
        "Oosaka de hataraku you ni shite imasu.",
      ],
      hint: "Ce n'est pas vous qui avez décidé.",
    },
    {
      id: "unit-47-ex4",
      type: "comprehension",
      question: "Quelle est la différence entre 「早く起きるようになりました」 et 「早く起きるようにしています」 ?",
      correctAnswer: "La première dit que c'est devenu une habitude ; la seconde, que je m'y efforce.",
      options: [
        "La première dit que c'est devenu une habitude ; la seconde, que je m'y efforce.",
        "La première est au passé, la seconde au futur ; le sens est identique.",
        "La première est polie, la seconde familière.",
        "La première exprime une obligation, la seconde une permission.",
      ],
      hint: "なる raconte un résultat, する un effort.",
    },
    {
      id: "unit-47-ex5",
      type: "fill-blank",
      question: "最近、テレビを見 ___ 。 (« Ces derniers temps, je ne regarde plus la télévision. »)",
      correctAnswer: "なくなりました",
      options: ["なくなりました", "ないになりました", "なくしました", "ないことにしました"],
      optionsHint: ["nakunarimashita", "nai ni narimashita", "nakushimashita", "nai koto ni shimashita"],
      hint: "Au négatif, le changement se dit avec 〜なくなる.",
    },
    {
      id: "unit-47-ex6",
      type: "listen",
      question: "来年、日本の大学に留学することにしました。",
      correctAnswer: "J'ai décidé de partir étudier dans une université japonaise l'an prochain.",
      options: [
        "J'ai décidé de partir étudier dans une université japonaise l'an prochain.",
        "L'université m'a envoyé étudier au Japon l'an prochain.",
        "J'aimerais peut-être étudier au Japon un jour.",
        "L'an dernier, j'ai étudié dans une université japonaise.",
      ],
      hint: "ことにしました : une décision prise par celui qui parle.",
    },
    {
      id: "unit-47-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Faites en sorte de ne pas oublier vos devoirs. »",
      correctAnswer: "宿題を忘れないようにしてください。",
      options: ["宿題を", "忘れない", "ように", "してください"],
      hint: "Forme en ない + ようにする, puis la demande en てください.",
    },
    {
      id: "unit-47-ex8",
      type: "translate",
      question: "Traduisez : « Mon japonais s'est amélioré. »",
      correctAnswer: "日本語が上手になりました。",
      options: ["日本語が上手になりました。", "日本語が上手ようになりました。", "日本語を上手にしました。", "日本語が上手ことになりました。"],
      optionsHint: [
        "nihongo ga jouzu ni narimashita.",
        "nihongo ga jouzu you ni narimashita.",
        "nihongo o jouzu ni shimashita.",
        "nihongo ga jouzu koto ni narimashita.",
      ],
      hint: "上手 n'est pas un verbe : pas de よう.",
    },
    {
      id: "unit-47-ex9",
      type: "comprehension",
      question: "Une collègue vous annonce : 「実は、今月で会社を辞めることになりました。」 Que répondez-vous ?",
      correctAnswer: "寂しくなりますね。",
      options: ["寂しくなりますね。", "どうして辞めることにしたんですか。", "辞めないようにしてください。", "よく辞めるようになりましたね。"],
      optionsHint: [
        "sabishiku narimasu ne.",
        "doushite yameru koto ni shita n desu ka.",
        "yamenai you ni shite kudasai.",
        "yoku yameru you ni narimashita ne.",
      ],
      hint: "ことになりました invite à ne pas demander les raisons.",
    },
    {
      id: "unit-47-ex10",
      type: "fill-blank",
      question: "この寮では、夜十時までに帰る ___ 。 (« Dans ce foyer, on doit être rentré avant dix heures. »)",
      correctAnswer: "ことになっています",
      options: ["ことになっています", "ことにしています", "ようになりました", "ようにしましょう"],
      optionsHint: ["koto ni natte imasu", "koto ni shite imasu", "you ni narimashita", "you ni shimashou"],
      hint: "Une règle imposée de l'extérieur, qui vaut pour tout le monde.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-46"],
};
