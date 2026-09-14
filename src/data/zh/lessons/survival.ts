import type { Lesson } from "@/types";
import type { CourseSection } from "@/types/course";

const sections: CourseSection[] = [
  {
    title: "Les 30 phrases de survie",
    type: "practice",
    content: [
      {
        type: "text",
        content:
          "Quand vous arrivez à Taiwan sans parler chinois, il y a un moment de vertige. Les panneaux sont en caractères, les gens parlent vite, et votre anglais ne fonctionne pas aussi bien que vous l'espériez. La bonne nouvelle : avec une trentaine de phrases bien choisies, vous pouvez survivre à 90% des situations quotidiennes. Ces phrases ne sont pas classées par thème grammatical mais par situation réelle — parce que dans la vraie vie, vous n'avez pas besoin de savoir conjuguer, vous avez besoin de trouver les toilettes, acheter à manger, et rentrer chez vous.",
      },
      {
        type: "text",
        content:
          "DEMANDER — Toute question à un inconnu doit commencer par 請問 (qǐngwèn). Ce n'est pas simplement « excusez-moi » — c'est une formule qui signifie littéralement « je demande poliment » et qui indique à votre interlocuteur que vous allez lui poser une question. Sans ce préambule, aborder quelqu'un directement avec votre question peut sembler brusque. C'est l'équivalent de lever la main avant de parler. En France, on peut interpeller quelqu'un avec « pardon, vous savez où est... ? ». À Taiwan, 請問 remplit exactement cette fonction — mais elle est quasi obligatoire. Utilisez-la systématiquement.",
      },
      {
        type: "example",
        content: "Demander un lieu",
        native: "請問，捷運站在哪裡？",
        romanization: "Qǐngwèn, jiéyùn zhàn zài nǎlǐ?",
        translation: "Excusez-moi, où est la station de MRT ?",
      },
      {
        type: "example",
        content: "Demander un prix",
        native: "請問，這個多少錢？",
        romanization: "Qǐngwèn, zhè ge duōshǎo qián?",
        translation: "Excusez-moi, combien coûte ceci ?",
      },
      {
        type: "text",
        content:
          "REMERCIER — 謝謝 (xiè xiè) est universel et fonctionne partout. Mais à Taiwan, les gens ajoutent souvent un geste : un petit hochement de tête, ou les deux mains jointes en signe de gratitude. Pour dire « merci beaucoup », dites 非常感謝 (fēicháng gǎnxiè) — c'est plus formel et plus intense. Dans un contexte décontracté, 3Q (prononcé « sān kyù », transcription taiwanaise de « thank you ») est courant chez les jeunes. Et quand quelqu'un vous remercie, répondez 不客氣 (bú kèqì, « de rien », littéralement « ne sois pas poli ») ou 不會 (bú huì, « c'est rien », version très taiwanaise et décontractée).",
      },
      {
        type: "example",
        content: "Remercier — version standard",
        native: "謝謝你！",
        romanization: "Xiè xiè nǐ!",
        translation: "Merci (à toi) !",
      },
      {
        type: "example",
        content: "Remercier — version formelle",
        native: "非常感謝您的幫忙！",
        romanization: "Fēicháng gǎnxiè nín de bāngmáng!",
        translation: "Merci infiniment pour votre aide !",
      },
      {
        type: "text",
        content:
          "S'EXCUSER — C'est ici que les nuances taiwanaises sont cruciales. Il existe trois niveaux d'excuse, et les confondre peut créer des malentendus. Le premier niveau est 不好意思 (bù hǎo yìsi), l'expression la plus utilisée à Taiwan. Littéralement « embarrassé », elle s'emploie pour attirer l'attention de quelqu'un, pour une gêne mineure (bousculer quelqu'un dans le métro, arriver 2 minutes en retard), ou même comme préambule poli (« excusez-moi de vous déranger... »). C'est l'huile sociale de Taiwan — vous l'entendrez des dizaines de fois par jour. Le deuxième niveau est 對不起 (duìbùqǐ), qui est une vraie excuse, chargée d'un sentiment de faute. Littéralement « je ne peux pas faire face » (sous-entendu : à la honte de ce que j'ai fait). C'est pour les erreurs sérieuses : avoir cassé quelque chose, avoir blessé quelqu'un, avoir manqué un engagement important. Le troisième niveau est 抱歉 (bàoqiàn), qui est l'excuse la plus formelle et la plus grave, utilisée dans les contextes professionnels ou officiels. Si un magasin est en rupture de stock, l'employé dira 很抱歉 (hěn bàoqiàn, « je suis sincèrement désolé »).",
      },
      {
        type: "example",
        content: "Excuse légère — usage quotidien (le plus fréquent à Taiwan)",
        native: "不好意思，請問一下...",
        romanization: "Bù hǎo yìsi, qǐngwèn yíxià...",
        translation: "Excusez-moi, je voudrais vous demander...",
      },
      {
        type: "example",
        content: "Excuse sincère — vous avez fait une erreur",
        native: "對不起，是我的錯。",
        romanization: "Duìbùqǐ, shì wǒ de cuò.",
        translation: "Pardon, c'est ma faute.",
      },
      {
        type: "example",
        content: "Excuse formelle — contexte professionnel",
        native: "很抱歉給您添麻煩了。",
        romanization: "Hěn bàoqiàn gěi nín tiān máfan le.",
        translation: "Je suis sincèrement désolé de vous avoir causé des ennuis.",
      },
      {
        type: "text",
        content:
          "ACHETER — Au marché ou dans un convenience store, les échanges sont rapides et formulaiques. Pour dire « je veux ceci » en pointant du doigt : 我要這個 (wǒ yào zhè ge). Pour demander le prix : 多少錢？(duōshǎo qián?). Pour demander un sac : 有袋子嗎？(yǒu dàizi ma?). Pour dire « c'est trop cher » (utile au marché, jamais dans un magasin avec prix fixes) : 太貴了 (tài guì le). Pour négocier gentiment : 可以便宜一點嗎？(kěyǐ piányi yìdiǎn ma? — peut-on avoir un petit rabais ?). Et pour conclure : 好，我要 (hǎo, wǒ yào — ok, je le prends).",
      },
      {
        type: "example",
        content: "Acheter — la transaction complète",
        native: "我要這個。多少錢？",
        romanization: "Wǒ yào zhè ge. Duōshǎo qián?",
        translation: "Je voudrais celui-ci. Combien ça coûte ?",
      },
      {
        type: "text",
        content:
          "SE DÉPLACER — Les phrases de direction sont simples à Taiwan grâce à la structure logique du chinois. 左邊 (zuǒbiān, à gauche), 右邊 (yòubiān, à droite), 直走 (zhí zǒu, tout droit), 前面 (qiánmiàn, devant), 後面 (hòumiàn, derrière). Pour demander son chemin : ...在哪裡？(...zài nǎlǐ? — où est... ?). Pour prendre un taxi : 我要去... (wǒ yào qù... — je veux aller à...) suivi de l'adresse ou du nom du lieu. Le chauffeur de taxi comprendra même si votre prononciation est approximative — montrez l'adresse sur votre téléphone en dernier recours.",
      },
      {
        type: "example",
        content: "Prendre un taxi",
        native: "你好，我要去台北車站。",
        romanization: "Nǐ hǎo, wǒ yào qù Táiběi chēzhàn.",
        translation: "Bonjour, je voudrais aller à la gare de Taipei.",
      },
      {
        type: "text",
        content:
          "URGENCE — Certaines phrases doivent être prêtes dans votre tête pour les moments critiques. 救命！(jiùmìng! — Au secours !) est le cri d'alarme universel. 請幫幫我 (qǐng bāng bāng wǒ — aidez-moi s'il vous plaît) est plus calme mais tout aussi efficace. 我需要看醫生 (wǒ xūyào kàn yīshēng — j'ai besoin de voir un médecin). 請叫警察 (qǐng jiào jǐngchá — appelez la police). 請叫救護車 (qǐng jiào jiùhùchē — appelez une ambulance). En cas d'urgence médicale à Taiwan, composez le 119. Pour la police, composez le 110. Ces numéros sont l'INVERSE de ceux de la Chine continentale — ne les confondez pas.",
      },
      {
        type: "example",
        content: "Urgence médicale",
        native: "請幫我叫救護車！我朋友受傷了。",
        romanization: "Qǐng bāng wǒ jiào jiùhùchē! Wǒ péngyǒu shòushāng le.",
        translation: "Appelez une ambulance s'il vous plaît ! Mon ami est blessé.",
      },
      {
        type: "tip",
        content:
          "La phrase MAGIQUE à Taiwan : 不好意思 (bù hǎo yìsi). Ce n'est pas vraiment une excuse — c'est un passe-partout social. On l'utilise pour attirer l'attention de quelqu'un, pour passer devant quelqu'un, pour demander quelque chose, pour s'excuser d'un retard léger. Les Taiwanais le disent probablement 20 fois par jour. Si vous ne deviez retenir qu'une seule expression de cette liste, ce serait celle-ci.",
      },
    ],
  },
  {
    title: "Lire les panneaux à Taiwan",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "Vous ne pouvez pas encore lire le chinois couramment, mais il existe une cinquantaine de caractères qu'on voit absolument partout à Taiwan — sur les panneaux, dans le métro, sur les devantures de magasins, dans les ascenseurs. Connaître ces caractères, c'est passer de « je suis complètement perdu » à « je comprends l'essentiel de mon environnement ». Ce ne sont pas des mots de vocabulaire abstraits — ce sont des informations pratiques de survie urbaine.",
      },
      {
        type: "text",
        content:
          "Les panneaux de base — ENTRÉE et SORTIE. Deux caractères que vous verrez dans chaque bâtiment, chaque station de métro, chaque parking : 出口 (chūkǒu, sortie) et 入口 (rùkǒu, entrée). 出 signifie « sortir » et 口 signifie « bouche, ouverture ». Une sortie est littéralement une « bouche de sortie ». 入 signifie « entrer ». Ces caractères sont souvent accompagnés de flèches, mais pas toujours. Dans le MRT de Taipei, les sorties sont numérotées : 出口1, 出口2, etc. Apprenez-les — c'est votre GPS de base.",
      },
      {
        type: "example",
        content: "Panneaux de navigation essentiels",
        native: "出口 / 入口 / 緊急出口",
        romanization: "chūkǒu / rùkǒu / jǐnjí chūkǒu",
        translation: "sortie / entrée / sortie de secours",
      },
      {
        type: "example",
        content: "Panneaux de toilettes",
        native: "男 / 女 / 廁所 / 洗手間",
        romanization: "nán / nǚ / cèsuǒ / xǐshǒujiān",
        translation:
          "homme / femme / toilettes / lavabo (terme poli pour toilettes)",
      },
      {
        type: "text",
        content:
          "Les panneaux de sécurité et d'interdiction : 禁止 (jìnzhǐ, interdit) apparaît partout : 禁止吸煙 (jìnzhǐ xīyān, interdiction de fumer), 禁止拍照 (jìnzhǐ pāizhào, interdiction de photographier), 禁止飲食 (jìnzhǐ yǐnshí, interdiction de manger et boire — dans le MRT !). 小心 (xiǎoxīn, attention/prudence) : 小心地滑 (xiǎoxīn dì huá, attention sol glissant), 小心階梯 (xiǎoxīn jiētī, attention marches). 危險 (wēixiǎn, danger) est le panneau le plus sérieux — quand vous le voyez, ne passez pas.",
      },
      {
        type: "example",
        content: "Panneaux de sécurité",
        native: "禁止 / 小心 / 危險 / 請勿",
        romanization: "jìnzhǐ / xiǎoxīn / wēixiǎn / qǐng wù",
        translation:
          "interdit / attention / danger / veuillez ne pas (formule polie d'interdiction)",
      },
      {
        type: "text",
        content:
          "Les panneaux du MRT de Taipei sont un cours de chinois à eux seuls. 月台 (yuètái, quai) — littéralement « terrasse de la lune », un terme hérité du vocabulaire ferroviaire classique. 轉乘 (zhuǎnchéng, correspondance) — quand vous devez changer de ligne. 悠遊卡 (yōuyóu kǎ, carte EasyCard) — la carte prépayée rechargeable qui fonctionne dans le métro, les bus, les convenience stores, et même certains taxis. 儲值 (chǔzhí, recharger) — vous verrez ce mot sur les bornes de rechargement. 加值 (jiāzhí) est un synonyme aussi courant. 票 (piào, billet) et 售票 (shòupiào, vente de billets). Le MRT de Taipei est l'un des meilleurs du monde : propre, ponctuel, climatisé, bon marché. Maîtrisez son vocabulaire et vous maîtrisez la ville.",
      },
      {
        type: "example",
        content: "Panneaux du MRT",
        native: "月台 / 轉乘 / 悠遊卡 / 儲值 / 售票機",
        romanization: "yuètái / zhuǎnchéng / yōuyóu kǎ / chǔzhí / shòupiào jī",
        translation:
          "quai / correspondance / carte EasyCard / recharger / distributeur de billets",
      },
      {
        type: "text",
        content:
          "Les panneaux des magasins et restaurants : 營業中 (yíngyè zhōng, ouvert — littéralement « en cours d'activité commerciale »), 休息中 (xiūxí zhōng, fermé/en pause — littéralement « en repos »). 打折 (dǎzhé, soldes/réduction) et 特價 (tèjià, prix spécial) sont les mots magiques pour les bonnes affaires. 買一送一 (mǎi yī sòng yī, « achetez-en un, recevez-en un gratuit ») — une promotion très courante dans les convenience stores taiwanais. 7-11 (prononcé « seven-eleven ») et 全家 (Quánjiā, FamilyMart) sont les deux principales chaînes de convenience stores — il y en a littéralement à chaque coin de rue.",
      },
      {
        type: "example",
        content: "Panneaux de magasins",
        native: "營業中 / 休息中 / 打折 / 特價 / 買一送一",
        romanization:
          "yíngyè zhōng / xiūxí zhōng / dǎzhé / tèjià / mǎi yī sòng yī",
        translation:
          "ouvert / fermé (en pause) / soldes / prix spécial / achetez 1, 1 offert",
      },
      {
        type: "example",
        content: "Chiffres sur les panneaux de prix",
        native: "元 / 塊 / 免費 / 半價",
        romanization: "yuán / kuài / miǎnfèi / bànjià",
        translation:
          "dollar NT (formel) / dollar NT (courant) / gratuit / moitié prix",
      },
      {
        type: "example",
        content: "Panneaux dans les immeubles",
        native: "電梯 / 樓梯 / 停車場 / 接待處",
        romanization: "diàntī / lóutī / tíngchēchǎng / jiēdài chù",
        translation: "ascenseur / escaliers / parking / réception",
      },
      {
        type: "warning",
        content:
          "Le panneau le plus important à ne PAS ignorer : 禁止飲食 (jìnzhǐ yǐnshí — interdit de manger et boire) dans le MRT. Amende de 1 500 à 7 500 NT$ (environ 45 à 225€). Oui, même l'eau. Même un chewing-gum. Les agents de sécurité patrouillent et les amendes sont réelles. C'est l'une des règles les plus strictement appliquées à Taiwan.",
      },
    ],
  },
  {
    title: "Le langage du corps à Taiwan",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "La communication non-verbale à Taiwan est un monde en soi, et ignorer ses codes peut mener à des malentendus ou à des situations gênantes. Les gestes, la distance physique, le contact visuel, la façon de donner et recevoir — tout cela suit des règles différentes de la France. Comprendre ces codes est aussi important que de connaître les mots, car le langage du corps parle avant vous.",
      },
      {
        type: "text",
        content:
          "POINTER — En France, on pointe du doigt sans y penser. À Taiwan, pointer quelqu'un ou quelque chose avec l'index est considéré comme impoli, voire agressif. Pour indiquer une direction ou une personne, utilisez la main ouverte, paume vers le haut, dans un geste d'invitation. Pour montrer un objet dans un magasin, pointez avec la main ouverte plutôt qu'avec un seul doigt. Pour compter sur ses doigts, la méthode est aussi différente : les Taiwanais peuvent compter jusqu'à 10 sur une seule main grâce à un système de gestes spécifique. Le chiffre 6 se fait avec le pouce et le petit doigt tendus (comme le « hang loose » américain), le 7 en joignant le bout de tous les doigts, le 8 en tendant le pouce et l'index en L, le 9 en repliant l'index, le 10 en croisant les index ou en serrant le poing.",
      },
      {
        type: "text",
        content:
          "LA TÊTE — Toucher la tête de quelqu'un, même d'un enfant, est un geste à éviter absolument à Taiwan. L'influence bouddhiste considère la tête comme la partie la plus sacrée du corps — c'est le siège de l'âme. Même ébouriffer les cheveux d'un enfant en signe d'affection, geste courant en France, peut choquer certains Taiwanais. Si vous voulez montrer de l'affection à un enfant, tapotez-lui l'épaule ou le dos. Cette sensibilité s'étend aux statues et représentations religieuses : ne touchez jamais la tête d'une statue dans un temple.",
      },
      {
        type: "tip",
        content:
          "Au temple : retirez votre chapeau, ne pointez pas les statues, ne touchez pas les offrandes, et si vous voulez prendre des photos, demandez d'abord si c'est autorisé. La plupart des temples le permettent, mais il est poli de demander.",
      },
      {
        type: "text",
        content:
          "DONNER ET RECEVOIR — À Taiwan, donner ou recevoir un objet (carte de visite, argent, cadeau, document) se fait idéalement avec les deux mains. Ce geste exprime le respect et l'attention. Quand quelqu'un vous tend sa carte de visite à deux mains, prenez-la à deux mains, regardez-la brièvement (c'est une marque de considération), puis rangez-la soigneusement — jamais dans la poche arrière de votre pantalon, ce qui serait perçu comme un manque de respect. Pour l'argent, la même règle s'applique : quand vous payez au marché ou dans un petit restaurant, tendre le billet à deux mains est plus poli. Dans les magasins modernes, vous pouvez simplement poser l'argent dans le petit plateau prévu à cet effet sur le comptoir.",
      },
      {
        type: "tip",
        content:
          "Quand on vous offre un cadeau à Taiwan, ne l'ouvrez pas immédiatement devant la personne (sauf si elle vous y invite). C'est l'opposé de la culture française où on ouvre le cadeau devant le donneur. À Taiwan, ouvrir le cadeau en privé est considéré comme plus délicat — cela évite au donneur un potentiel embarras si le cadeau ne vous plaît pas.",
      },
      {
        type: "text",
        content:
          "LA SALUTATION PHYSIQUE — Oubliez la bise. Oubliez les accolades. À Taiwan, on se salue d'un hochement de tête, parfois accompagné d'un léger sourire. Une poignée de main est acceptable dans un contexte professionnel, surtout avec des interlocuteurs habitués aux échanges internationaux, mais ce n'est pas le réflexe local. Si quelqu'un vous tend la main, serrez-la — mais ne soyez pas surpris si elle est plus molle qu'en France : une poignée de main ferme « à la française » ou « à l'américaine » peut être perçue comme agressive. La distance physique est plus proche qu'en France dans la foule (métro, marchés de nuit), mais plus grande dans les conversations en tête-à-tête. Ne soyez pas surpris si un Taiwanais vous parle à 80 cm de distance là où un Français se tiendrait à 50 cm.",
      },
      {
        type: "warning",
        content:
          "Le contact physique entre personnes du même sexe est beaucoup plus décontracté à Taiwan qu'en France. Deux amies se tiennent par le bras, deux amis se tapotent l'épaule — cela ne porte aucune connotation romantique. Inversement, le contact physique entre personnes de sexes différents est plus réservé en public. Les couples taiwanais se tiennent la main mais s'embrassent rarement en public.",
      },
      {
        type: "warning",
        content:
          "Évitez de parler fort en public, surtout dans le MRT (métro). Les Taiwanais sont discrets et considèrent les conversations bruyantes comme une nuisance. Les wagons du MRT sont souvent silencieux — même les téléphones sont en mode vibreur. Les Français ont la réputation d'être bruyants à l'étranger — ne confirmez pas le stéréotype.",
      },
      {
        type: "tip",
        content:
          "Le sourire est votre meilleur outil de communication à Taiwan. Quand vous ne comprenez pas, souriez. Quand vous êtes perdu, souriez et demandez de l'aide. Quand vous faites une gaffe, souriez et dites 不好意思. Le sourire taiwanais n'est pas qu'une politesse — c'est un lubrifiant social qui ouvre toutes les portes.",
      },
    ],
  },
  {
    title: "Les expressions réflexes",
    type: "practice",
    content: [
      {
        type: "text",
        content:
          "Il existe en mandarin taiwanais un ensemble d'expressions courtes, presque des réflexes verbaux, que les Taiwanais utilisent constamment dans la conversation. Ce ne sont pas des phrases complètes — ce sont des interjections, des confirmations, des marqueurs d'écoute, des petites réactions qui montrent que vous participez activement à l'échange. Les maîtriser ne vous rendra pas « fluent », mais elles vous rendront naturel. Un étranger qui répond 好的 (hǎo de) au lieu de « OK » ou qui lâche un 真的嗎 (zhēn de ma) au bon moment sera immédiatement perçu comme quelqu'un qui s'intègre.",
      },
      {
        type: "text",
        content:
          "等一下 (děng yíxià) — « Attends une seconde ». Expression extrêmement fréquente. Vous l'entendrez dans les restaurants (le serveur qui vous demande de patienter), dans la rue (quelqu'un qui cherche dans son sac), au téléphone (quelqu'un qui vous met en attente). Utilisez-la quand quelqu'un vous parle trop vite et que vous avez besoin de temps pour comprendre : 等一下，我想一下 (děng yíxià, wǒ xiǎng yíxià — « une seconde, laissez-moi réfléchir »). Sa version plus courte et plus décontractée est 等等 (děng děng).",
      },
      {
        type: "example",
        content: "等一下 — Attends une seconde",
        native: "等一下，我馬上來！",
        romanization: "Děng yíxià, wǒ mǎshàng lái!",
        translation: "Une seconde, j'arrive tout de suite !",
      },
      {
        type: "text",
        content:
          "好的 (hǎo de) — « D'accord / OK ». C'est le « OK » taiwanais, prononcé doucement, souvent avec un hochement de tête. Il indique l'accord, la compréhension, l'acceptation. Quelqu'un vous donne une instruction ? 好的. Le serveur annonce que votre plat sera prêt dans 5 minutes ? 好的. C'est la réponse par défaut quand vous comprenez et acceptez ce qu'on vous dit. Ses variantes : 好 (hǎo, plus court et plus décontracté), 好啊 (hǎo a, plus enthousiaste), 好好好 (hǎo hǎo hǎo, « oui oui oui » — marque d'empressement ou d'acquiescement rapide).",
      },
      {
        type: "example",
        content: "好的 — D'accord",
        native: "好的，我知道了。",
        romanization: "Hǎo de, wǒ zhīdào le.",
        translation: "D'accord, j'ai compris.",
      },
      {
        type: "text",
        content:
          "對啊 (duì a) — « C'est vrai / Exactement / Tout à fait ». Expression de confirmation et d'accord. Quand quelqu'un dit quelque chose et que vous voulez montrer que vous êtes d'accord ou que vous confirmez : 對啊. C'est plus fort que 好的 — ce n'est pas juste « ok » mais « oui, c'est exactement ça ». Variantes : 對 (duì, plus neutre), 對對對 (duì duì duì, « oui oui oui, exactement »), 沒錯 (méi cuò, « c'est correct, pas d'erreur »).",
      },
      {
        type: "example",
        content: "對啊 — Exactement",
        native: "A：台灣的食物很好吃。B：對啊！真的很好吃。",
        romanization: "A: Táiwān de shíwù hěn hǎochī. B: Duì a! Zhēn de hěn hǎochī.",
        translation:
          "A : La nourriture taiwanaise est délicieuse. B : Exactement ! Vraiment délicieuse.",
      },
      {
        type: "text",
        content:
          "真的嗎 (zhēn de ma) — « Vraiment ?! / C'est vrai ? ». Expression de surprise, d'incrédulité, ou simplement de politesse conversationnelle pour montrer que vous écoutez activement. Quelqu'un vous raconte quelque chose d'intéressant ? 真的嗎？ — vous montrez que vous êtes engagé dans la conversation. C'est l'équivalent du « Ah bon ?! » français. Variantes : 真的假的 (zhēn de jiǎ de, « vrai ou faux ? » — plus exclamatif et jeune), 是嗎 (shì ma, « ah oui ? » — plus neutre).",
      },
      {
        type: "example",
        content: "真的嗎 — Vraiment ?!",
        native: "A：我去過法國三次。B：真的嗎？太棒了！",
        romanization: "A: Wǒ qùguò Fǎguó sān cì. B: Zhēn de ma? Tài bàng le!",
        translation:
          "A : Je suis allé en France trois fois. B : Vraiment ?! C'est génial !",
      },
      {
        type: "text",
        content:
          "沒問題 (méi wèntí) — « Pas de problème ». L'expression rassurante par excellence. Quelqu'un vous demande un service ? 沒問題. Un commerçant peut-il vous livrer demain ? 沒問題. Vous vous excusez d'un petit retard ? L'autre répond 沒問題. C'est aussi l'expression qu'utilisent les chauffeurs de taxi quand vous montrez l'adresse sur votre téléphone : 沒問題！ signifie « j'ai compris, on y va ».",
      },
      {
        type: "example",
        content: "沒問題 — Pas de problème",
        native: "A：可以幫我拍照嗎？B：沒問題！",
        romanization: "A: Kěyǐ bāng wǒ pāizhào ma? B: Méi wèntí!",
        translation: "A : Pouvez-vous me prendre en photo ? B : Pas de problème !",
      },
      {
        type: "text",
        content:
          "差不多 (chàbuduō) — « À peu près / Plus ou moins / Presque pareil ». Cette expression est un pilier de la mentalité taiwanaise (et chinoise en général). Elle exprime l'approximation, le « c'est assez bien comme ça ». Quelqu'un vous demande si vous parlez chinois ? 差不多 (« un peu, plus ou moins »). Un plat est similaire à un autre ? 差不多. C'est aussi une philosophie de vie — ne pas chercher la perfection absolue, accepter que « suffisamment bon » est souvent suffisant. Cette expression a même donné naissance à un essai satirique célèbre de Hu Shi (胡適) en 1919 : « Monsieur À-Peu-Près » (差不多先生), critiquant ce trait culturel.",
      },
      {
        type: "example",
        content: "差不多 — À peu près",
        native: "A：你的中文好不好？B：差不多啦。",
        romanization: "A: Nǐ de zhōngwén hǎo bù hǎo? B: Chàbuduō la.",
        translation: "A : Ton chinois est bon ? B : Plus ou moins, quoi.",
      },
      {
        type: "text",
        content:
          "算了 (suàn le) — « Laisse tomber / Tant pis ». Expression de résignation ou de lâcher-prise. Vous vouliez acheter quelque chose mais c'est trop cher ? 算了. Quelqu'un essaie de vous expliquer quelque chose mais n'y arrive pas ? 算了算了 (suàn le suàn le). Ce n'est pas négatif — c'est pragmatique. C'est l'art de ne pas insister, de passer à autre chose. C'est aussi parfois une façon polie de décliner : « 要不要再來一杯？» (tu veux un autre verre ?) — « 算了，我喝夠了 » (non, ça va, j'ai assez bu).",
      },
      {
        type: "example",
        content: "算了 — Laisse tomber",
        native: "太貴了，算了吧。",
        romanization: "Tài guì le, suàn le ba.",
        translation: "C'est trop cher, laisse tomber.",
      },
      {
        type: "text",
        content:
          "慢慢來 (màn man lái) — « Prends ton temps / Pas de presse ». C'est peut-être l'expression qui résume le mieux l'ambiance taiwanaise. Quand vous vous excusez de ne pas comprendre assez vite : 慢慢來. Quand un ami vous attend mais que vous n'êtes pas prêt : 慢慢來. Quand vous apprenez le chinois et que vous vous sentez nul : 慢慢來 — « prends ton temps, ça viendra ». C'est une expression de patience, de bienveillance, et d'absence de jugement. Les Taiwanais l'utilisent constamment et sincèrement. Si vous ne devez retenir qu'une seule expression de cette leçon, retenez celle-ci : 慢慢來. C'est un mantra.",
      },
      {
        type: "example",
        content: "慢慢來 — Prends ton temps",
        native: "不用急，慢慢來。",
        romanization: "Bú yòng jí, màn man lái.",
        translation: "Pas besoin de se presser, prends ton temps.",
      },
      {
        type: "tip",
        content:
          "慢慢來 (mànmàn lái) est l'expression qui résume le mieux l'attitude taiwanaise. Littéralement « viens lentement ». On vous la dira quand vous cherchez vos mots en chinois, quand vous apprenez quelque chose de nouveau, quand vous êtes stressé. C'est une invitation à la détente, pas une critique de votre vitesse. Si vous ne devez retenir qu'une expression de cette leçon pour vous sentir chez vous à Taiwan, c'est celle-ci.",
      },
      {
        type: "text",
        content:
          "聽不懂 (tīng bù dǒng) — « Je ne comprends pas (ce que j'entends) ». C'est l'expression de survie ultime pour un débutant. Quand quelqu'un vous parle en chinois et que vous ne comprenez rien : 聽不懂 (tīng bù dǒng). Littéralement « écouter - ne pas - comprendre ». La plupart des Taiwanais ralentiront immédiatement, simplifieront leur phrase, ou passeront à l'anglais. Variante écrite : 看不懂 (kàn bù dǒng — « je ne comprends pas ce que je lis »), utile quand quelqu'un vous montre un texte.",
      },
      {
        type: "example",
        content: "聽不懂 — Je ne comprends pas",
        native: "不好意思，我聽不懂。可以說慢一點嗎？",
        romanization: "Bù hǎo yìsi, wǒ tīng bù dǒng. Kěyǐ shuō màn yìdiǎn ma?",
        translation:
          "Excusez-moi, je ne comprends pas. Pouvez-vous parler plus lentement ?",
      },
      {
        type: "text",
        content:
          "沒關係 (méi guānxì) — « Ce n'est pas grave / Pas de souci ». C'est la réponse bienveillante par excellence. Quelqu'un s'excuse auprès de vous ? 沒關係. Vous faites tomber quelque chose dans un magasin ? Le commerçant dira 沒關係. Un ami annule un rendez-vous ? 沒關係. C'est l'expression de la tolérance et de la compréhension — deux valeurs centrales dans la culture taiwanaise.",
      },
      {
        type: "example",
        content: "沒關係 — Ce n'est pas grave",
        native: "A：不好意思，我遲到了。B：沒關係，沒關係。",
        romanization: "A: Bù hǎo yìsi, wǒ chídào le. B: Méi guānxì, méi guānxì.",
        translation:
          "A : Excuse-moi, je suis en retard. B : Ce n'est pas grave, ce n'est pas grave.",
      },
    ],
  },
];

const survivalLesson: Lesson = {
  id: "lesson-02",
  slug: "survival",
  title: "Survie quotidienne",
  titleNative: "日常生存",
  description:
    "Apprenez à vous présenter, demander votre chemin et gérer les situations d'urgence à Taiwan.",
  icon: "🆘",
  category: "survival",
  order: 2,
  sections,
  vocabulary: [
    {
      term: "我叫",
      romanization: "wǒ jiào",
      reading: "ㄨㄛˇ ㄐㄧㄠˋ",
      french: "Je m'appelle",
      english: "My name is",
      example: {
        sentence: "我叫朱利安。",
        romanization: "Wǒ jiào Zhūlì'ān.",
        translation: "Je m'appelle Julian.",
      },
    },
    {
      term: "你從哪裡來？",
      romanization: "nǐ cóng nǎlǐ lái?",
      reading: "ㄋㄧˇ ㄘㄨㄥˊ ㄋㄚˇ ㄌㄧˇ ㄌㄞˊ",
      french: "D'où viens-tu ?",
      english: "Where are you from?",
    },
    {
      term: "法國",
      romanization: "Fǎguó",
      reading: "ㄈㄚˇ ㄍㄨㄛˊ",
      french: "France",
      english: "France",
    },
    {
      term: "左邊",
      romanization: "zuǒbiān",
      reading: "ㄗㄨㄛˇ ㄅㄧㄢ",
      french: "À gauche",
      english: "Left",
    },
    {
      term: "右邊",
      romanization: "yòubiān",
      reading: "ㄧㄡˋ ㄅㄧㄢ",
      french: "À droite",
      english: "Right",
    },
    {
      term: "直走",
      romanization: "zhí zǒu",
      reading: "ㄓˊ ㄗㄡˇ",
      french: "Tout droit",
      english: "Go straight",
    },
    {
      term: "廁所",
      romanization: "cèsuǒ",
      reading: "ㄘㄜˋ ㄙㄨㄛˇ",
      french: "Toilettes",
      english: "Toilet / Restroom",
      example: {
        sentence: "請問廁所在哪裡？",
        romanization: "Qǐngwèn cèsuǒ zài nǎlǐ?",
        translation: "Excusez-moi, où sont les toilettes ?",
      },
    },
    {
      term: "救命",
      romanization: "jiùmìng",
      reading: "ㄐㄧㄡˋ ㄇㄧㄥˋ",
      french: "Au secours !",
      english: "Help!",
    },
    {
      term: "醫院",
      romanization: "yīyuàn",
      reading: "ㄧ ㄩㄢˋ",
      french: "Hôpital",
      english: "Hospital",
    },
    {
      term: "警察",
      romanization: "jǐngchá",
      reading: "ㄐㄧㄥˇ ㄔㄚˊ",
      french: "Police",
      english: "Police",
    },
    {
      term: "在哪裡",
      romanization: "zài nǎlǐ",
      reading: "ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ",
      french: "Où est... ?",
      english: "Where is...?",
    },
    {
      term: "幫忙",
      romanization: "bāngmáng",
      reading: "ㄅㄤ ㄇㄤˊ",
      french: "Aider / Aide",
      english: "Help / To help",
      example: {
        sentence: "你可以幫忙嗎？",
        romanization: "Nǐ kěyǐ bāngmáng ma?",
        translation: "Peux-tu m'aider ?",
      },
    },
    {
      term: "不好意思",
      romanization: "bù hǎo yìsi",
      reading: "ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ˙",
      french: "Excusez-moi (poli)",
      english: "Excuse me (polite)",
    },
    {
      term: "我不會說中文",
      romanization: "wǒ bú huì shuō zhōngwén",
      reading: "ㄨㄛˇ ㄅㄨˊ ㄏㄨㄟˋ ㄕㄨㄛ ㄓㄨㄥ ㄨㄣˊ",
      french: "Je ne parle pas chinois",
      english: "I don't speak Chinese",
    },
  ],
  phrases: [
    {
      native: "我叫朱利安，我從法國來。",
      romanization: "Wǒ jiào Zhūlì'ān, wǒ cóng Fǎguó lái.",
      reading:
        "ㄨㄛˇ ㄐㄧㄠˋ ㄓㄨ ㄌㄧˋ ㄢ ㄨㄛˇ ㄘㄨㄥˊ ㄈㄚˇ ㄍㄨㄛˊ ㄌㄞˊ",
      french: "Je m'appelle Julian, je viens de France.",
      english: "My name is Julian, I come from France.",
      context:
        "Présentation de base. Remplacez le nom et le pays par les vôtres.",
    },
    {
      native: "請問，捷運站在哪裡？",
      romanization: "Qǐngwèn, jiéyùn zhàn zài nǎlǐ?",
      reading: "ㄑㄧㄥˇ ㄨㄣˋ ㄐㄧㄝˊ ㄩㄣˋ ㄓㄢˋ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ",
      french: "Excusez-moi, où est la station de MRT ?",
      english: "Excuse me, where is the MRT station?",
      context: "捷運 (jiéyùn) est le mot taiwanais pour le métro (MRT).",
    },
    {
      native: "請幫我叫救護車。",
      romanization: "Qǐng bāng wǒ jiào jiùhùchē.",
      reading: "ㄑㄧㄥˇ ㄅㄤ ㄨㄛˇ ㄐㄧㄠˋ ㄐㄧㄡˋ ㄏㄨˋ ㄔㄜ",
      french: "Appelez une ambulance, s'il vous plaît.",
      english: "Please call an ambulance.",
    },
    {
      native: "我迷路了。",
      romanization: "Wǒ mílù le.",
      reading: "ㄨㄛˇ ㄇㄧˊ ㄌㄨˋ ㄌㄜ˙",
      french: "Je suis perdu(e).",
      english: "I'm lost.",
    },
    {
      native: "你會說英文嗎？",
      romanization: "Nǐ huì shuō yīngwén ma?",
      reading: "ㄋㄧˇ ㄏㄨㄟˋ ㄕㄨㄛ ㄧㄥ ㄨㄣˊ ㄇㄚ˙",
      french: "Parlez-vous anglais ?",
      english: "Do you speak English?",
      context:
        "Utile quand vous êtes bloqué et avez besoin d'aide en anglais.",
    },
    {
      native: "請問廁所在哪裡？",
      romanization: "Qǐngwèn cèsuǒ zài nǎlǐ?",
      reading: "ㄑㄧㄥˇ ㄨㄣˋ ㄘㄜˋ ㄙㄨㄛˇ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ",
      french: "Où sont les toilettes, s'il vous plaît ?",
      english: "Where is the restroom, please?",
    },
    {
      native: "我需要看醫生。",
      romanization: "Wǒ xūyào kàn yīshēng.",
      reading: "ㄨㄛˇ ㄒㄩ ㄧㄠˋ ㄎㄢˋ ㄧ ㄕㄥ",
      french: "J'ai besoin de voir un médecin.",
      english: "I need to see a doctor.",
    },
    {
      native: "可以幫我拍照嗎？",
      romanization: "Kěyǐ bāng wǒ pāizhào ma?",
      reading: "ㄎㄜˇ ㄧˇ ㄅㄤ ㄨㄛˇ ㄆㄞ ㄓㄠˋ ㄇㄚ˙",
      french: "Pouvez-vous me prendre en photo ?",
      english: "Can you take a photo for me?",
      context: "Phrase très utile dans les lieux touristiques.",
    },
  ],
  culturalNotes: [
    "Le numéro d'urgence à Taiwan est le 110 pour la police et le 119 pour les pompiers/ambulances (l'inverse de la Chine continentale).",
    "Les Taiwanais sont réputés pour leur gentillesse envers les étrangers. N'hésitez pas à demander de l'aide, beaucoup de jeunes Taiwanais parlent un peu anglais.",
    "À Taiwan, on vous demandera souvent 你吃飯了嗎？(Tu as mangé ?) comme salutation. Répondez simplement 吃了 (Oui, j'ai mangé) ou 還沒 (Pas encore).",
    "L'expression 不好意思 (bù hǎo yìsi) est plus courante que 對不起 à Taiwan. Elle s'utilise pour s'excuser poliment ou attirer l'attention de quelqu'un.",
  ],
  quiz: [
    {
      id: "survival-q1",
      type: "term-to-french",
      question: "廁所",
      correctAnswer: "Toilettes",
      options: ["Hôpital", "Toilettes", "Police", "Restaurant"],
    },
    {
      id: "survival-q2",
      type: "french-to-term",
      question: "À gauche",
      correctAnswer: "左邊",
      options: ["右邊", "左邊", "直走", "前面"],
    },
    {
      id: "survival-q3",
      type: "reading-to-term",
      question: "jǐngchá",
      correctAnswer: "警察",
      options: ["醫院", "警察", "救命", "幫忙"],
    },
    {
      id: "survival-q4",
      type: "term-to-french",
      question: "醫院",
      correctAnswer: "Hôpital",
      options: ["École", "Hôpital", "Gare", "Aéroport"],
    },
    {
      id: "survival-q5",
      type: "french-to-term",
      question: "Je m'appelle",
      correctAnswer: "我叫",
      options: ["我是", "我叫", "我要", "我有"],
    },
    {
      id: "survival-q6",
      type: "term-to-french",
      question: "救命",
      correctAnswer: "Au secours !",
      options: ["Merci !", "Au secours !", "Bonjour !", "Pardon !"],
    },
  ],
};

export default survivalLesson;
