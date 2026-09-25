import type { CourseUnit } from "@/types/course";

export const unit48: CourseUnit = {
  id: "unit-48",
  number: 36,
  chapter: 5,
  title: "Le but et la raison : ために, ように, ので",
  titleNative: "目的と理由：〜ために・〜ように・〜ので",
  description:
    "Le français a « pour » et « parce que » ; le japonais en a deux de chaque, et chaque paire se partage le terrain selon une règle précise. ために pour un but qu'on atteint soi-même, ように pour un résultat qu'on ne peut que favoriser, から pour une raison qu'on assume, ので pour une explication qui ménage l'autre.",
  icon: "的",

  sections: [
    {
      title: "〜ために : dans le but de",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Forme dictionnaire + ために, ou nom + のために : « pour », « afin de ». La proposition en ために exprime un but que la personne vise par sa propre action. Le verbe devant ために est donc un verbe de volonté — une action qu'on décide de faire : 買う、行く、勉強する、貯金する.",
        },
        {
          type: "example",
          native: "日本の会社で働くために、日本語を勉強しています。",
          romanization: "Nihon no kaisha de hataraku tame ni, nihongo o benkyou shite imasu.",
          translation: "J'étudie le japonais pour travailler dans une entreprise japonaise.",
          content:
            "Le but (働く) et l'action (勉強する) ont le même sujet, moi. C'est la condition d'emploi de ために : celui qui agit est celui qui vise le but.",
        },
        {
          type: "example",
          native: "家族のために、毎日遅くまで働いています。",
          romanization: "kazoku no tame ni, mainichi osoku made hataraite imasu.",
          translation: "Je travaille tard tous les jours pour ma famille.",
          content:
            "Nom + のために : « pour », au sens de « au bénéfice de ». Cet emploi est très fréquent et ne pose aucune difficulté : 健康のために、子どものために、将来のために.",
        },
        {
          type: "warning",
          content:
            "Devant ために, jamais de forme potentielle ni de verbe qui échappe à la volonté : 「日本語が話せるために」 est faux. Si ce qui suit « pour » est une capacité, un état ou une chose qui arrive d'elle-même, il faut ように (section suivante).",
        },
      ],
    },
    {
      title: "〜ように : pour que, de façon à",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "〜ように exprime aussi un but, mais un but qu'on ne contrôle pas directement : on fait quelque chose pour qu'un résultat se produise. Il se place après la forme potentielle (話せるように), après un verbe qui échappe à la volonté (見える、聞こえる、分かる、治る), ou après une forme en ない (忘れないように).",
        },
        {
          type: "example",
          native: "後ろの人にも聞こえるように、大きい声で話してください。",
          romanization: "ushiro no hito ni mo kikoeru you ni, ookii koe de hanashite kudasai.",
          translation: "Parlez fort, pour que les gens du fond entendent aussi.",
          content:
            "聞こえる (« être audible ») n'est pas une action qu'on décide : ce sont les gens du fond qui entendent, pas vous. Vous ne pouvez que parler fort pour le favoriser. D'où ように.",
        },
        {
          type: "example",
          native: "忘れないように、手帳に書いておきます。",
          romanization: "wasurenai you ni, techou ni kaite okimasu.",
          translation: "Je le note dans mon agenda pour ne pas oublier.",
          content:
            "La forme en ない + ように est la manière standard de dire « pour ne pas ». Oublier n'est pas une action qu'on décide ; ne pas oublier non plus. 〜ておく (« faire à l'avance ») sera étudié au niveau suivant ; ici, retenez simplement la tournure.",
        },
        {
          type: "comparison",
          content:
            "Même idée de « pour », deux verbes différents : 日本語を話すために、日本に来ました (« je suis venu au Japon pour parler japonais », action choisie) ; 日本語が話せるように、毎日練習しています (« je m'entraîne tous les jours pour arriver à parler japonais », capacité visée). Le test : le verbe du but est-il une action que je décide (ために), ou un résultat que j'espère (ように) ?",
        },
        {
          type: "tip",
          content:
            "Vous retrouverez ce ように à la fin des vœux et des souhaits : 合格しますように (« pourvu que je réussisse ! »), écrit sur les tablettes votives des sanctuaires, les 絵馬. Le locuteur ne contrôle pas le résultat et s'en remet aux dieux : c'est exactement le sens de ように.",
        },
      ],
    },
    {
      title: "から et ので : deux façons de donner une raison",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Vous avez déjà croisé から, placé à la fin de la proposition qui donne la cause : 暑いから、窓を開けます. ので dit presque la même chose, mais sur un autre ton. から met en avant la raison du locuteur : c'est son avis, son choix, sa justification. ので présente la cause comme un fait objectif, une suite logique que l'autre peut constater lui-même. Il en résulte que ので est plus doux, et préféré pour s'excuser ou demander quelque chose.",
        },
        {
          type: "example",
          native: "電車が遅れたので、授業に間に合いませんでした。",
          romanization: "densha ga okureta node, jugyou ni ma ni aimasen deshita.",
          translation: "Le train a eu du retard, je n'ai pas pu arriver à l'heure au cours.",
          content:
            "Une excuse : ので présente le retard du train comme un fait que chacun peut vérifier. Avec から, la même phrase sonnerait comme une justification un peu défensive, presque « ce n'est pas ma faute ».",
        },
        {
          type: "text",
          content:
            "Côté formation, ので suit la forme neutre du verbe et de l'adjectif en い (行くので、高いので). Après un adjectif en な ou un nom, だ devient な : 静かなので、学生なので. C'est le seul piège : 「学生だので」 n'existe pas.",
        },
        {
          type: "example",
          native: "明日は試験なので、今晩は早く寝ます。",
          romanization: "ashita wa shiken na node, konban wa hayaku nemasu.",
          translation: "Demain, j'ai un examen, alors je me couche tôt ce soir.",
          content:
            "試験 + な + ので. Le même schéma vaut pour les adjectifs en な : 部屋が静かなので、よく眠れます.",
        },
        {
          type: "warning",
          content:
            "Quand la seconde partie est un ordre, une interdiction ou un avis tranché, から est plus naturel : 危ないから、触らないで！ (« c'est dangereux, n'y touche pas ! »). ので peut précéder une demande polie (〜ので、〜てください), mais il paraît trop neutre pour un ordre direct.",
        },
      ],
    },
    {
      title: "Donner la raison, et laisser la demande en suspens",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "En japonais, une demande ou un refus commence presque toujours par la raison, et il arrive que la phrase s'arrête là. 「すみません、明日はちょっと用事があるので…」 suffit à refuser une invitation : l'interlocuteur comprend la suite, et personne n'a eu à prononcer le mot « non ».",
        },
        {
          type: "example",
          native: "すみません、ちょっと熱があるので、今日は早く帰ってもいいですか。",
          romanization: "sumimasen, chotto netsu ga aru node, kyou wa hayaku kaette mo ii desu ka.",
          translation: "Excusez-moi, j'ai un peu de fièvre, est-ce que je peux rentrer plus tôt aujourd'hui ?",
          content:
            "Ordre japonais : excuse, raison avec ので, puis demande. Le français aurait tendance à commencer par la demande. Si vous inversez, la demande paraît brusque, même avec des formes polies.",
        },
        {
          type: "tip",
          content:
            "Dans une lettre ou un courriel formel, vous verrez aussi ですので et ましたので : 資料をお送りしましたので、ご確認ください. C'est le registre le plus soutenu de ので, courant en entreprise.",
        },
        {
          type: "warning",
          content:
            "Ne vous étonnez pas qu'on ne vous demande pas de précisions sur votre 用事 (« un empêchement »). La politesse veut qu'on ne demande pas de quoi il s'agit. Et symétriquement, si quelqu'un refuse par 用事があるので, ne cherchez pas à savoir lequel.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "À la bibliothèque municipale, Lucas prépare son examen. Il croise Mme Mori, sa professeure de japonais, qui s'étonne de le voir là un samedi.",
    lines: [
      {
        speaker: "森先生",
        native: "あら、ルカさん。土曜日も勉強ですか。",
        romanization: "ara, Ruka-san. doyoubi mo benkyou desu ka.",
        french: "Tiens, Lucas. Vous travaillez même le samedi ?",
      },
      {
        speaker: "ルカ",
        native: "はい。七月の試験に合格するために、毎週ここに来ています。",
        romanization: "hai. shichigatsu no shiken ni goukaku suru tame ni, maishuu koko ni kite imasu.",
        french: "Oui. Je viens ici toutes les semaines pour réussir l'examen de juillet.",
        note: "合格する + ために : le but visé par sa propre action, venir travailler.",
      },
      {
        speaker: "森先生",
        native: "えらいですね。どうして図書館で勉強するんですか。",
        romanization: "erai desu ne. doushite toshokan de benkyou suru n desu ka.",
        french: "C'est bien. Pourquoi travaillez-vous à la bibliothèque ?",
      },
      {
        speaker: "ルカ",
        native: "家は駅の近くでうるさいので、集中できないんです。",
        romanization: "ie wa eki no chikaku de urusai node, shuuchuu dekinai n desu.",
        french: "Chez moi, c'est près de la gare et c'est bruyant, alors je n'arrive pas à me concentrer.",
        note: "ので présente le bruit comme un fait objectif. Lucas explique, il ne se justifie pas.",
      },
      {
        speaker: "森先生",
        native: "そうですか。聞く練習もしていますか。",
        romanization: "sou desu ka. kiku renshuu mo shite imasu ka.",
        french: "Je vois. Vous vous entraînez aussi à l'écoute ?",
      },
      {
        speaker: "ルカ",
        native: "はい。ニュースが分かるように、毎晩ラジオを聞いています。",
        romanization: "hai. nyuusu ga wakaru you ni, maiban rajio o kiite imasu.",
        french: "Oui. J'écoute la radio tous les soirs pour arriver à comprendre les informations.",
        note: "分かる n'est pas une action qu'on décide : on ne peut que la favoriser, donc ように.",
      },
      {
        speaker: "森先生",
        native: "いいですね。あ、試験の日は、遅れないように早めに出てくださいね。",
        romanization: "ii desu ne. a, shiken no hi wa, okurenai you ni hayame ni dete kudasai ne.",
        french: "Très bien. Ah, le jour de l'examen, partez de bonne heure pour ne pas être en retard.",
        note: "Forme en ない + ように : « pour ne pas ».",
      },
      {
        speaker: "ルカ",
        native: "はい、気をつけます。先生、ありがとうございます。",
        romanization: "hai, ki o tsukemasu. sensei, arigatou gozaimasu.",
        french: "Oui, je ferai attention. Merci, madame.",
      },
    ],
  },

  keyPoints: [
    "〜ために (nom + のために) : un but atteint par sa propre action, avec un verbe de volonté et le même sujet des deux côtés. 働くために、日本語を勉強しています.",
    "〜ように : un résultat qu'on favorise sans le contrôler, après une forme potentielle, un verbe non volontaire (聞こえる、分かる) ou une forme en ない. 聞こえるように、忘れないように.",
    "Test : si le verbe du but est une action que je décide, ために ; si c'est une capacité ou un résultat espéré, ように.",
    "から met en avant la raison du locuteur ; ので présente la cause comme un fait objectif, plus doux, préféré pour s'excuser et demander. Après un nom ou un adjectif en な : 〜なので.",
    "Ordre japonais d'une demande ou d'un refus : la raison d'abord, en ので, puis la demande — ou rien du tout : 用事があるので… suffit à refuser.",
  ],

  vocabulary: [
    {
      term: "目的",
      reading: "もくてき",
      romanization: "mokuteki",
      segments: [{ text: "目", reading: "もく" }, { text: "的", reading: "てき" }],
      french: "Le but, l'objectif",
      english: "Purpose, aim",
      example: {
        sentence: "旅行の目的は何ですか。",
        romanization: "ryokou no mokuteki wa nan desu ka.",
        translation: "Quel est le but de votre voyage ?",
      },
    },
    {
      term: "理由",
      reading: "りゆう",
      romanization: "riyuu",
      segments: [{ text: "理", reading: "り" }, { text: "由", reading: "ゆう" }],
      french: "La raison, le motif",
      english: "Reason",
    },
    {
      term: "将来",
      reading: "しょうらい",
      romanization: "shourai",
      segments: [{ text: "将", reading: "しょう" }, { text: "来", reading: "らい" }],
      french: "L'avenir, le futur",
      english: "Future",
      example: {
        sentence: "将来のために、貯金しています。",
        romanization: "shourai no tame ni, chokin shite imasu.",
        translation: "J'économise pour l'avenir.",
      },
    },
    {
      term: "貯金する",
      reading: "ちょきんする",
      romanization: "chokin suru",
      segments: [{ text: "貯", reading: "ちょ" }, { text: "金", reading: "きん" }, { text: "する" }],
      french: "Économiser, mettre de l'argent de côté",
      english: "To save money",
    },
    {
      term: "合格する",
      reading: "ごうかくする",
      romanization: "goukaku suru",
      segments: [{ text: "合", reading: "ごう" }, { text: "格", reading: "かく" }, { text: "する" }],
      french: "Réussir (un examen), être reçu",
      english: "To pass (an exam)",
      example: {
        sentence: "試験に合格しますように。",
        romanization: "shiken ni goukaku shimasu you ni.",
        translation: "Pourvu que je réussisse l'examen !",
      },
    },
    {
      term: "聞こえる",
      reading: "きこえる",
      romanization: "kikoeru",
      segments: [{ text: "聞", reading: "き" }, { text: "こえる" }],
      french: "S'entendre, être audible",
      english: "To be audible, can be heard",
      example: {
        sentence: "すみません、よく聞こえません。",
        romanization: "sumimasen, yoku kikoemasen.",
        translation: "Excusez-moi, je n'entends pas bien.",
      },
    },
    {
      term: "見える",
      reading: "みえる",
      romanization: "mieru",
      segments: [{ text: "見", reading: "み" }, { text: "える" }],
      french: "Se voir, être visible",
      english: "To be visible, can be seen",
      example: {
        sentence: "天気がいい日は、ここから富士山が見えます。",
        romanization: "tenki ga ii hi wa, koko kara Fujisan ga miemasu.",
        translation: "Par beau temps, on voit le mont Fuji d'ici.",
      },
    },
    {
      term: "声",
      reading: "こえ",
      romanization: "koe",
      segments: [{ text: "声", reading: "こえ" }],
      french: "La voix",
      english: "Voice",
    },
    {
      term: "手帳",
      reading: "てちょう",
      romanization: "techou",
      segments: [{ text: "手", reading: "て" }, { text: "帳", reading: "ちょう" }],
      french: "L'agenda, le carnet",
      english: "Planner, notebook",
    },
    {
      term: "間に合う",
      reading: "まにあう",
      romanization: "ma ni au",
      segments: [{ text: "間", reading: "ま" }, { text: "に" }, { text: "合", reading: "あ" }, { text: "う" }],
      french: "Arriver à temps, être à l'heure",
      english: "To be in time",
      example: {
        sentence: "急げば、最終電車に間に合います。",
        romanization: "isogeba, saishuu densha ni ma ni aimasu.",
        translation: "Si on se dépêche, on aura le dernier train.",
      },
    },
    {
      term: "授業",
      reading: "じゅぎょう",
      romanization: "jugyou",
      segments: [{ text: "授", reading: "じゅ" }, { text: "業", reading: "ぎょう" }],
      french: "Le cours, la classe",
      english: "Class, lesson",
    },
    {
      term: "用事",
      reading: "ようじ",
      romanization: "youji",
      segments: [{ text: "用", reading: "よう" }, { text: "事", reading: "じ" }],
      french: "Une affaire à régler, un empêchement",
      english: "Errand, something to do",
      example: {
        sentence: "すみません、明日はちょっと用事があるので…",
        romanization: "sumimasen, ashita wa chotto youji ga aru node...",
        translation: "Désolé, demain j'ai un petit empêchement, alors…",
      },
    },
    {
      term: "集中する",
      reading: "しゅうちゅうする",
      romanization: "shuuchuu suru",
      segments: [{ text: "集", reading: "しゅう" }, { text: "中", reading: "ちゅう" }, { text: "する" }],
      french: "Se concentrer",
      english: "To concentrate",
    },
    {
      term: "うるさい",
      reading: "うるさい",
      romanization: "urusai",
      french: "Bruyant ; agaçant",
      english: "Noisy; annoying",
    },
    {
      term: "図書館",
      reading: "としょかん",
      romanization: "toshokan",
      segments: [{ text: "図", reading: "と" }, { text: "書", reading: "しょ" }, { text: "館", reading: "かん" }],
      french: "La bibliothèque",
      english: "Library",
    },
    {
      term: "早めに",
      reading: "はやめに",
      romanization: "hayame ni",
      segments: [{ text: "早", reading: "はや" }, { text: "めに" }],
      french: "Un peu en avance, de bonne heure",
      english: "Early, ahead of time",
    },
    {
      term: "危ない",
      reading: "あぶない",
      romanization: "abunai",
      segments: [{ text: "危", reading: "あぶ" }, { text: "ない" }],
      french: "Dangereux ; attention !",
      english: "Dangerous; watch out!",
      example: {
        sentence: "危ないから、道で遊ばないで。",
        romanization: "abunai kara, michi de asobanai de.",
        translation: "C'est dangereux, ne joue pas dans la rue.",
      },
    },
    {
      term: "家族",
      reading: "かぞく",
      romanization: "kazoku",
      segments: [{ text: "家", reading: "か" }, { text: "族", reading: "ぞく" }],
      french: "La famille",
      english: "Family",
    },
  ],

  exercises: [
    {
      id: "unit-48-ex1",
      type: "fill-blank",
      question: "日本の会社で働く ___ 、日本語を勉強しています。 (« J'étudie le japonais pour travailler dans une entreprise japonaise. »)",
      correctAnswer: "ために",
      options: ["ために", "ように", "ので", "のに"],
      optionsHint: ["tame ni", "you ni", "node", "noni"],
      hint: "働く est une action que vous décidez, et c'est vous qui la visez.",
    },
    {
      id: "unit-48-ex2",
      type: "fill-blank",
      question: "後ろの人にも聞こえる ___ 、大きい声で話してください。 (« Parlez fort, pour que les gens du fond entendent aussi. »)",
      correctAnswer: "ように",
      options: ["ように", "ために", "から", "のに"],
      optionsHint: ["you ni", "tame ni", "kara", "noni"],
      hint: "聞こえる n'est pas une action qu'on décide.",
    },
    {
      id: "unit-48-ex3",
      type: "comprehension",
      question: "Pourquoi 「日本語が話せるために、毎日練習します」 est-il incorrect ?",
      correctAnswer: "Parce que ために ne se place pas après une forme potentielle : il faut ように.",
      options: [
        "Parce que ために ne se place pas après une forme potentielle : il faut ように.",
        "Parce que ために exige un nom devant lui.",
        "Parce que 練習する ne peut pas avoir de but.",
        "Parce que ために s'emploie seulement au passé.",
      ],
      hint: "話せる exprime une capacité, pas une action qu'on décide.",
    },
    {
      id: "unit-48-ex4",
      type: "fill-blank",
      question: "明日は試験 ___ 、今晩は早く寝ます。 (« Demain j'ai un examen, alors je me couche tôt ce soir. »)",
      correctAnswer: "なので",
      options: ["なので", "だので", "ので", "のので"],
      optionsHint: ["na node", "da node", "node", "no node"],
      hint: "Après un nom, だ devient な devant ので.",
    },
    {
      id: "unit-48-ex5",
      type: "comprehension",
      question: "Vous êtes en retard au travail à cause du train. Quelle excuse est la plus appropriée ?",
      correctAnswer: "すみません、電車が遅れたので、遅くなりました。",
      options: [
        "すみません、電車が遅れたので、遅くなりました。",
        "電車が遅れたから、遅くなりましたよ。",
        "電車が遅れたために、遅くなってください。",
        "電車が遅れるように、遅くなりました。",
      ],
      optionsHint: [
        "sumimasen, densha ga okureta node, osoku narimashita.",
        "densha ga okureta kara, osoku narimashita yo.",
        "densha ga okureta tame ni, osoku natte kudasai.",
        "densha ga okureru you ni, osoku narimashita.",
      ],
      hint: "ので présente la cause comme un fait ; から ressemble à une justification.",
    },
    {
      id: "unit-48-ex6",
      type: "listen",
      question: "忘れないように、手帳に書きます。",
      correctAnswer: "Je l'écris dans mon agenda pour ne pas oublier.",
      options: [
        "Je l'écris dans mon agenda pour ne pas oublier.",
        "J'ai oublié d'écrire dans mon agenda.",
        "Je n'écris pas dans mon agenda, car je n'oublie jamais.",
        "N'oubliez pas d'apporter votre agenda.",
      ],
      hint: "Forme en ない + ように : « pour ne pas ».",
    },
    {
      id: "unit-48-ex7",
      type: "reorder",
      question: "Remettez les éléments dans l'ordre : « Je travaille tard pour ma famille. »",
      correctAnswer: "家族のために、遅くまで働いています。",
      options: ["家族の", "ために", "遅くまで", "働いています"],
      hint: "Nom + のために, puis l'action.",
    },
    {
      id: "unit-48-ex8",
      type: "translate",
      question: "Traduisez : « Pourvu que je réussisse l'examen ! »",
      correctAnswer: "試験に合格しますように。",
      options: ["試験に合格しますように。", "試験に合格するために。", "試験に合格したので。", "試験に合格しましょう。"],
      optionsHint: [
        "shiken ni goukaku shimasu you ni.",
        "shiken ni goukaku suru tame ni.",
        "shiken ni goukaku shita node.",
        "shiken ni goukaku shimashou.",
      ],
      hint: "Le vœu qu'on écrit sur un 絵馬 : un résultat qu'on ne contrôle pas.",
    },
    {
      id: "unit-48-ex9",
      type: "comprehension",
      question: "Un collègue vous invite ; vous répondez 「すみません、明日はちょっと用事があるので…」. Qu'avez-vous fait ?",
      correctAnswer: "J'ai poliment refusé l'invitation.",
      options: [
        "J'ai poliment refusé l'invitation.",
        "J'ai accepté, mais j'arriverai en retard.",
        "J'ai demandé de quel rendez-vous il s'agissait.",
        "J'ai proposé de venir un autre jour.",
      ],
      hint: "La raison suffit : la suite est sous-entendue.",
    },
    {
      id: "unit-48-ex10",
      type: "fill-blank",
      question: "危ない ___ 、触らないで！ (« C'est dangereux, n'y touche pas ! »)",
      correctAnswer: "から",
      options: ["から", "のに", "ように", "ために"],
      optionsHint: ["kara", "noni", "you ni", "tame ni"],
      hint: "Un ordre direct suit : la raison assumée du locuteur passe mieux.",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-47"],
};
