import type { Lesson } from "@/types";
import type { CourseSection } from "@/types/course";

const sections: CourseSection[] = [
  {
    title: "Le MRT de Taipei — Votre meilleur ami",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Le MRT de Taipei (捷運 jiéyùn) est le systeme de transport le plus pratique, fiable et propre que vous utiliserez a Taiwan. Inaugure en 1996, il transporte aujourd'hui plus de 2 millions de passagers par jour. C'est le premier reflexe de tout resident : pour aller au travail, retrouver des amis, faire du shopping ou explorer la ville, le MRT est la colonne vertebrale de la mobilite a Taipei. Contrairement a beaucoup de metros dans le monde, celui de Taipei est remarquablement silencieux, climatise, et les trains arrivent avec une ponctualite quasi-suisse. Les stations sont propres, bien eclairees, et la signalisation est bilingue (chinois et anglais). Pour un francophone fraichement debarque, c'est un soulagement immense : vous pouvez vous reperer facilement grace aux noms en anglais et aux codes couleur des lignes.",
      },
      {
        type: "text",
        content:
          "Le reseau compte 6 lignes principales, chacune identifiee par une couleur. Comprendre ces lignes est essentiel pour naviguer efficacement dans Taipei et sa banlieue. Chaque ligne a ses particularites, ses stations emblematiques, et ses correspondances strategiques. Prenez le temps de telecharger l'app officielle 'Taipei Metro' ou de sauvegarder la carte du reseau sur votre telephone — vous la consulterez quotidiennement pendant vos premieres semaines.",
      },
      {
        type: "text",
        content:
          "La ligne rouge (淡水信義線 Danshuǐ Xìnyì Xiàn) est probablement celle que vous emprunterez le plus souvent. Elle traverse Taipei du nord au sud, de Tamsui (淡水), le quartier cotier celebre pour ses couchers de soleil et sa promenade, jusqu'a Xiangshan (象山) au sud, la station la plus proche de Taipei 101. En chemin, elle passe par des stations incontournables : Shilin (士林) pour le marche de nuit le plus celebre de Taipei, Jiantan (劍潭) juste a cote, Yuanshan (圓山) pour le Grand Hotel et le temple de Confucius, Zhongshan (中山) le quartier branche avec ses cafes et boutiques, et bien sur Taipei Main Station (台北車站), le hub central ou se croisent plusieurs lignes.",
      },
      {
        type: "example",
        content: "Ligne rouge : 淡水信義線",
        chinese: "我要坐紅線到淡水。",
        pinyin: "Wǒ yào zuò hóng xiàn dào Dànshuǐ.",
        translation: "Je vais prendre la ligne rouge jusqu'a Tamsui.",
      },
      {
        type: "text",
        content:
          "La ligne bleue (板南線 Bǎnnán Xiàn) est la ligne est-ouest par excellence. Elle relie Yongning (永寧) a l'ouest jusqu'a Nangang Exhibition Center (南港展覽館) a l'est, en passant par Banqiao (板橋), un quartier residentiel tres vivant de New Taipei City, Taipei Main Station, Zhongxiao Fuxing (忠孝復興) — le coeur du quartier commercial de l'est —, et Sun Yat-sen Memorial Hall (國父紀念館). C'est la ligne ideale pour le shopping : les stations Zhongxiao Dunhua et Zhongxiao Fuxing sont entourees de centres commerciaux, boutiques et restaurants.",
      },
      {
        type: "text",
        content:
          "La ligne verte (松山新店線 Sōngshān Xīndiàn Xiàn) va de Songshan (松山) au nord-est, ou se trouve le celebre temple de Ciyou et le marche de nuit de Raohe, jusqu'a Xindian (新店) au sud, porte d'entree vers les sentiers de randonnee et les rivieres de la banlieue sud. Elle passe par Xiaonanmen (小南門), Chiang Kai-shek Memorial Hall (中正紀念堂) — un arret incontournable pour tout visiteur —, et Guting (古亭), un quartier universitaire anime.",
      },
      {
        type: "example",
        content: "Ligne verte : 松山新店線",
        chinese: "松山站可以逛饒河夜市。",
        pinyin: "Sōngshān zhàn kěyǐ guàng Ráohé yèshì.",
        translation:
          "A la station Songshan, on peut visiter le marche de nuit de Raohe.",
      },
      {
        type: "text",
        content:
          "La ligne orange (中和新蘆線 Zhōnghé Xīnlú Xiàn) forme une boucle dans la partie ouest du reseau. Elle dessert des quartiers residentiels importants comme Zhonghe (中和) et Xinzhuang (新莊), ou vivent beaucoup d'expatries grace aux loyers plus abordables. Si vous cherchez un logement economique tout en restant connecte au centre de Taipei, les stations de la ligne orange meritent votre attention.",
      },
      {
        type: "text",
        content:
          "La ligne jaune (環狀線 Huánzhuàng Xiàn), la circulaire, est la plus recente du reseau. Mise en service en 2020, elle ne couvre pour l'instant qu'une portion ouest (de Xinbeitou a Zhonghe), mais son extension est en cours. Elle est surtout utile pour les correspondances entre lignes sans repasser par le centre-ville, ce qui fait gagner un temps precieux aux residents des quartiers peripheriques.",
      },
      {
        type: "text",
        content:
          "La ligne marron (文湖線 Wénhú Xiàn) est unique : c'est une ligne aerienne automatisee (sans conducteur) qui offre des vues imprenables sur la ville. Elle dessert le quartier de Neihu (內湖), le pole technologique de Taipei ou se concentrent les entreprises du secteur tech, ainsi que l'aeroport domestique de Songshan (松山機場). Si vous travaillez dans la tech a Taipei, vous la prendrez probablement tous les jours. Attention, les rames sont plus petites que sur les autres lignes, et elle peut etre bondee aux heures de pointe.",
      },
      {
        type: "example",
        content: "Correspondances principales",
        chinese: "在台北車站可以轉紅線、藍線和台鐵。",
        pinyin:
          "Zài Táiběi chēzhàn kěyǐ zhuǎn hóng xiàn, lán xiàn hé Táitiě.",
        translation:
          "A Taipei Main Station, on peut prendre la ligne rouge, la ligne bleue et le train TRA.",
      },
      {
        type: "warning",
        content:
          "Il est STRICTEMENT INTERDIT de manger, boire ou macher du chewing-gum dans le MRT, y compris sur les quais et dans les couloirs de correspondance. L'amende va de 1,500 a 7,500 NT$ (environ 45 a 225 euros). Les controleurs en civil sont reguliers et sans pitie. Meme une bouteille d'eau ouverte peut vous valoir une amende. Attendez d'etre sorti de la station pour boire.",
      },
      {
        type: "warning",
        content:
          "Les places reservees 博愛座 (bó'ài zuò) sont les sieges de couleur differente (generalement bleu fonce ou rose) situes pres des portes. Ils sont destines aux personnes agees, femmes enceintes, personnes handicapees et voyageurs avec de jeunes enfants. A Taiwan, la pression sociale est TRES forte sur ce sujet : meme si le wagon est vide, s'asseoir sur un siege 博愛座 quand on est jeune et en bonne sante peut provoquer des regards desapprobateurs, voire des remarques directes. Preferez toujours les sieges normaux.",
      },
      {
        type: "warning",
        content:
          "Les sorties de station sont numerotees (出口1, 出口2, etc.) et chaque sortie debouche a un endroit different, parfois a plusieurs centaines de metres de distance. TOUJOURS verifier le numero de sortie avant de monter les escaliers. L'app Google Maps vous indiquera generalement quelle sortie prendre. Les panneaux dans la station listent les lieux accessibles depuis chaque sortie.",
      },
      {
        type: "tip",
        content:
          "Le MRT fonctionne d'environ 6h00 du matin a minuit. La frequence est de 2 a 3 minutes en heure de pointe (7h-9h et 17h-19h), et de 5 a 8 minutes en heures creuses. Le dernier train varie selon la ligne et la direction — verifiez l'horaire du dernier train si vous sortez tard. Un bon reflexe : l'app Taipei Metro affiche les horaires en temps reel.",
      },
      {
        type: "tip",
        content:
          "Le tarif du MRT est calcule a la distance : de 20 a 65 NT$ environ (0,60 a 2 euros). Avec la EasyCard, vous beneficiez d'une reduction de 20% par rapport au jeton. De plus, si vous prenez le MRT puis un bus dans l'heure, vous obtenez un transfert gratuit ou a prix reduit. Cumuler MRT + bus est la strategie la plus economique pour se deplacer.",
      },
      {
        type: "example",
        content: "Acheter un jeton au distributeur",
        chinese: "請問，單程票多少錢？",
        pinyin: "Qǐngwèn, dānchéng piào duōshǎo qián?",
        translation: "Excusez-moi, combien coute un aller simple ?",
      },
      {
        type: "example",
        content: "Demander son chemin dans la station",
        chinese: "請問，往淡水方向在哪邊？",
        pinyin: "Qǐngwèn, wǎng Dànshuǐ fāngxiàng zài nǎ biān?",
        translation:
          "Excusez-moi, la direction Tamsui, c'est de quel cote ?",
      },
    ],
  },
  {
    title: "Bus, taxi et HSR",
    type: "theory",
    content: [
      {
        type: "text",
        content:
          "Le bus (公車 gōngchē) est le complement indispensable du MRT. La ou le metro ne va pas, le bus prend le relais. Taipei et New Taipei City disposent d'un reseau de bus extremement dense avec des centaines de lignes. Le probleme pour un debutant : le systeme de paiement est deroutant. Contrairement au MRT ou vous bipez en entrant et en sortant, les bus ont deux systemes differents selon la ligne. Certains fonctionnent en 上車付費 (shàngchē fùfèi, paiement en montant), d'autres en 下車付費 (xiàchē fùfèi, paiement en descendant), et certains en les deux ! Un panneau lumineux a l'avant du bus indique lequel s'applique. La regle d'or : bipez votre EasyCard en montant ET en descendant, comme ca vous ne vous tromperez jamais. Le systeme calculera automatiquement le bon montant.",
      },
      {
        type: "example",
        content: "Monter dans le bus",
        chinese: "上車請刷卡。",
        pinyin: "Shàngchē qǐng shuā kǎ.",
        translation: "En montant, veuillez scanner votre carte.",
      },
      {
        type: "text",
        content:
          "Pour arreter un bus, il faut lever la main quand vous le voyez arriver a votre arret. Ce n'est pas comme en France ou le bus s'arrete automatiquement s'il y a quelqu'un a l'arret — ici, si vous ne faites pas signe, le chauffeur peut passer sans s'arreter. Pour descendre, appuyez sur le bouton de sonnette (下車鈴 xiàchē líng) AVANT votre arret. L'annonce en chinois et parfois en anglais vous previent du prochain arret, mais l'app '台北等公車' (Bus Tracker Taipei) est votre meilleure alliee : elle affiche la position des bus en temps reel, les temps d'attente estimees, et les itineraires detailles.",
      },
      {
        type: "tip",
        content:
          "L'app '台北等公車' (Taipei Bus Tracker) est indispensable. Elle fonctionne en chinois mais l'interface est intuitive. Elle montre en temps reel ou se trouvent les bus, combien de temps il reste avant le prochain passage, et meme le nombre de places disponibles sur certaines lignes. Google Maps integre aussi les horaires de bus taiwanais et fonctionne tres bien pour planifier des trajets multi-modaux.",
      },
      {
        type: "text",
        content:
          "Le taxi (計程車 jìchéngchē) a Taiwan est facilement reconnaissable : ils sont tous jaunes. Le compteur (跳表 tiàobiǎo) demarre a 70 NT$ (environ 2 euros) pour les 1.25 premiers kilometres, puis augmente de 5 NT$ tous les 200 metres ou toutes les 80 secondes d'attente. La nuit (23h-6h), un supplement de 20 NT$ s'applique au tarif de depart. Le pourboire n'existe PAS a Taiwan — ne laissez jamais de pourboire au chauffeur de taxi, cela pourrait meme le mettre mal a l'aise. La grande majorite des chauffeurs ne parlent pas anglais. L'astuce numero un : ayez l'adresse de votre destination ecrite en caracteres chinois sur votre telephone et montrez-la au chauffeur. N'essayez pas de prononcer l'adresse, meme si votre chinois progresse — les noms de rues et de quartiers ont des prononciations subtiles que les chauffeurs ne comprendront pas avec un accent etranger.",
      },
      {
        type: "example",
        content: "Prendre un taxi",
        chinese: "師傅，我要到這個地方。",
        pinyin: "Shīfù, wǒ yào dào zhè ge dìfāng.",
        translation: "Chauffeur, je veux aller a cet endroit.",
      },
      {
        type: "example",
        content: "Demander le prix de la course",
        chinese: "到台北101大概多少錢？",
        pinyin: "Dào Táiběi yī líng yī dàgài duōshǎo qián?",
        translation: "Combien ca coute environ pour aller a Taipei 101 ?",
      },
      {
        type: "text",
        content:
          "Pour les taxis, vous pouvez aussi utiliser des apps. LINE TAXI est tres populaire (integre a l'app LINE que tout le monde utilise a Taiwan), et Uber fonctionne aussi, bien que les voitures soient en realite des taxis affilies. L'avantage des apps : le prix est calcule a l'avance, vous n'avez pas besoin de communiquer l'adresse oralement, et vous pouvez payer par carte. Appelez le chauffeur 師傅 (shīfù, litteralement 'maitre') — c'est le terme respectueux standard.",
      },
      {
        type: "text",
        content:
          "Le HSR (高鐵 gāotiě, abrege de 高速鐵路 gāosù tiělù) est le TGV taiwanais. Mis en service en 2007 avec la technologie du Shinkansen japonais, il relie Taipei (南港 Nangang) a Zuoying (左營, Kaohsiung) en seulement 1 heure et 30 minutes, a une vitesse maximale de 300 km/h. Le trajet couvre 345 kilometres et dessert 12 gares le long de la cote ouest. C'est le moyen le plus rapide et le plus confortable pour voyager entre les grandes villes de l'ouest : Taipei, Taoyuan (pour l'aeroport international), Hsinchu (la 'Silicon Valley' de Taiwan), Taichung, Tainan, et Kaohsiung.",
      },
      {
        type: "example",
        content: "Reserver un billet de HSR",
        chinese: "我要買一張到高雄的高鐵票。",
        pinyin: "Wǒ yào mǎi yì zhāng dào Gāoxióng de gāotiě piào.",
        translation: "Je voudrais un billet de HSR pour Kaohsiung.",
      },
      {
        type: "tip",
        content:
          "Le HSR propose des reductions 'early bird' (早鳥票 zǎoniǎo piào) allant de 10% a 35% si vous reservez 5 a 28 jours a l'avance. Reservez sur l'app officielle 'THSR' ou le site web (en anglais disponible). Les billets sont aussi disponibles aux distributeurs automatiques dans les gares ou aux guichets. Un billet Taipei-Kaohsiung coute environ 1,490 NT$ en tarif plein (classe standard), soit environ 45 euros.",
      },
      {
        type: "text",
        content:
          "Le train regional (台鐵 Táitiě, abrege de 台灣鐵路 Táiwān Tiělù) est le reseau ferroviaire classique qui fait le tour complet de l'ile. Plus lent que le HSR mais beaucoup moins cher, il est surtout indispensable pour la cote est — Yilan (宜蘭), Hualien (花蓮), Taitung (台東) — ou le HSR ne passe pas. Il existe plusieurs types de trains avec des vitesses et des prix differents : le Tze-Chiang Express (自強號) est le plus rapide et confortable, le Chu-Kuang Express (莒光號) est intermediaire, et le Local Train (區間車) s'arrete a toutes les gares. Pour visiter les gorges de Taroko depuis Taipei, c'est le Tze-Chiang Express vers Hualien qu'il vous faut — environ 2h30 de trajet pour un paysage magnifique le long de la cote.",
      },
      {
        type: "example",
        content: "Train pour la cote est",
        chinese: "請問，到花蓮的自強號幾點發車？",
        pinyin: "Qǐngwèn, dào Huālián de zìqiáng hào jǐ diǎn fāchē?",
        translation:
          "Excusez-moi, a quelle heure part le Tze-Chiang pour Hualien ?",
      },
    ],
  },
  {
    title: "La EasyCard et YouBike",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "La 悠遊卡 (yōuyóu kǎ, EasyCard) est bien plus qu'une simple carte de transport — c'est un veritable portefeuille electronique qui vous accompagnera partout a Taiwan. Lancee en 2002 initialement pour le MRT, elle a progressivement etendu ses usages jusqu'a devenir un outil quasi-indispensable de la vie quotidienne. Avec votre EasyCard, vous pouvez prendre le MRT, le bus, le YouBike, le train regional (台鐵), payer dans les convenience stores (7-Eleven, FamilyMart, Hi-Life, OK Mart), utiliser des distributeurs automatiques, payer le parking, et meme regler certains achats dans les grandes chaines de restauration rapide et les supermarches.",
      },
      {
        type: "text",
        content:
          "Ou acheter votre EasyCard ? Plusieurs options s'offrent a vous. La plus simple : dans n'importe quelle station de MRT, aux distributeurs automatiques ou au guichet de service. Le cout est de 100 NT$ non remboursables pour la carte standard (ce n'est pas un depot, c'est le prix de la carte elle-meme). Vous pouvez aussi l'acheter dans n'importe quel 7-Eleven ou FamilyMart — ils ont souvent des editions limitees avec des designs mignons (personnages de dessins animes, collaborations speciales) qui sont de vrais objets de collection. A l'aeroport de Taoyuan, des stands de vente de EasyCard vous attendent a la sortie des douanes. Conseil : achetez votre EasyCard des votre arrivee a l'aeroport et chargez-la immediatement avec au moins 500 NT$.",
      },
      {
        type: "example",
        content: "Acheter une EasyCard",
        chinese: "我要買一張悠遊卡，然後加值五百塊。",
        pinyin: "Wǒ yào mǎi yì zhāng yōuyóu kǎ, ránhòu jiāzhí wǔbǎi kuài.",
        translation:
          "Je voudrais acheter une EasyCard et la recharger de 500 dollars.",
      },
      {
        type: "text",
        content:
          "Recharger (加值 jiāzhí) votre EasyCard est facile et peut se faire a de nombreux endroits : les machines de recharge dans les stations de MRT (elles acceptent les billets de 100 a 1000 NT$), les caisses des convenience stores (dites simplement '加值' suivi du montant), et certains distributeurs automatiques dans les gares. Le montant minimum de recharge est generalement de 100 NT$, et le solde maximum est de 10,000 NT$. Petite astuce : quand vous passez votre carte au portique du MRT, le solde restant s'affiche a l'ecran. Si vous voyez un solde bas, rechargez avant votre prochain trajet pour eviter d'etre bloque au portique de sortie.",
      },
      {
        type: "example",
        content: "Recharger au convenience store",
        chinese: "我要加值三百。",
        pinyin: "Wǒ yào jiāzhí sānbǎi.",
        translation: "Je voudrais recharger de 300 (dollars).",
      },
      {
        type: "tip",
        content:
          "Il existe aussi la iPASS (一卡通 yīkǎtōng), une carte concurrente surtout populaire dans le sud de Taiwan (Kaohsiung). Elle fonctionne aussi dans le MRT de Taipei et les bus. Si vous passez du temps a Kaohsiung, avoir une iPASS peut etre pratique, mais la EasyCard reste la carte universelle recommandee.",
      },
      {
        type: "text",
        content:
          "YouBike (微笑單車 wēixiào dānchē, litteralement 'velo sourire') est le systeme de velo en libre-service de Taipei, et c'est l'un des mieux concus au monde. Avec plus de 13,000 velos repartis dans plus de 1,200 stations a travers Taipei et New Taipei City, vous trouverez une station YouBike pratiquement a chaque coin de rue. Le systeme est passe a la version YouBike 2.0 en 2020, avec des stations plus compactes et un systeme de deverrouillage par QR code. Pour vous inscrire, vous avez besoin de votre EasyCard et d'un numero de telephone taiwanais. L'inscription se fait sur le site web ou l'app YouBike, ou directement a une borne de station.",
      },
      {
        type: "example",
        content: "Utiliser YouBike",
        chinese: "這裡附近有YouBike的站嗎？",
        pinyin: "Zhèlǐ fùjìn yǒu YouBike de zhàn ma?",
        translation: "Y a-t-il une station YouBike a proximite ?",
      },
      {
        type: "text",
        content:
          "Les tarifs de YouBike sont extremement competitifs : les 30 premieres minutes coutent 5 NT$ (environ 0,15 euro), puis 10 NT$ par tranche de 30 minutes supplementaires. Pour les trajets courts en ville — aller au marche, rejoindre une station de MRT eloignee, se balader le long de la riviere — c'est imbattable. Beaucoup de Taipeiens combinent MRT + YouBike pour leur trajet quotidien : MRT pour la partie longue, YouBike pour le 'dernier kilometre' entre la station et la destination. Attention : remettez toujours le velo a une station officielle, sinon des frais supplementaires s'appliquent.",
      },
      {
        type: "example",
        content: "Rendre un YouBike",
        chinese: "附近的YouBike站滿了，怎麼辦？",
        pinyin: "Fùjìn de YouBike zhàn mǎn le, zěnme bàn?",
        translation:
          "La station YouBike a proximite est pleine, comment faire ?",
      },
      {
        type: "tip",
        content:
          "L'app 'YouBike 微笑單車' montre en temps reel le nombre de velos disponibles et de places vides a chaque station. Indispensable pour eviter de marcher jusqu'a une station vide ou de ne pas pouvoir rendre votre velo a une station pleine. Telecharger cette app est un des premiers reflexes a avoir en arrivant a Taipei.",
      },
      {
        type: "tip",
        content:
          "Google Maps fonctionne parfaitement a Taiwan et affiche les noms des lieux en chinois. C'est votre outil numero un pour la navigation. Cependant, pour les bus, l'app locale '台北等公車' est plus precise sur les horaires en temps reel. Pour le MRT, l'app officielle 'Taipei Metro' inclut un calculateur de trajet et les horaires du premier/dernier train. Prenez l'habitude de sauvegarder vos adresses frequentes en chinois dans Google Maps (domicile, travail, ecole de langue) — cela facilitera enormement vos deplacements en taxi.",
      },
    ],
  },
  {
    title: "Le scooter — Le roi de Taiwan",
    type: "culture",
    content: [
      {
        type: "text",
        content:
          "Si vous n'avez jamais ete a Taiwan, preparez-vous a un choc visuel : les scooters sont PARTOUT. Avec environ 14 millions de scooters enregistres pour 23 millions d'habitants, Taiwan a l'une des densites de deux-roues motorises les plus elevees au monde. A Taipei, aux heures de pointe, les intersections se transforment en veritables marees de scooters qui demarrent en peloton au feu vert. C'est impressionnant, un peu effrayant au debut, et finalement fascinant. Le scooter n'est pas juste un moyen de transport a Taiwan — c'est un mode de vie. Les Taiwanais font tout en scooter : aller au travail, faire les courses (avec des sacs accroches partout), transporter des objets improbables (meubles, caisses de fruits, animaux de compagnie), et meme emmener toute la famille (oui, vous verrez regulierement un couple avec un enfant a l'avant et un autre a l'arriere).",
      },
      {
        type: "text",
        content:
          "Pour conduire un scooter a Taiwan en tant qu'etranger, la situation est un peu complexe. Le permis international (Convention de Geneve ou de Vienne) n'est PAS directement valable pour les scooters a Taiwan. Vous avez besoin soit d'un permis taiwanais (ce qui necessite de passer l'examen), soit d'une traduction assermentee de votre permis francais validee par le bureau de representation de France a Taiwan (Institut Francais de Taipei). Cette traduction est ensuite presentee a l'office des transports (監理站 jiānlǐ zhàn) pour obtenir un permis local temporaire. Le processus prend quelques jours et coute environ 500-600 NT$. Attention : le permis B francais (voiture) ne donne droit qu'aux scooters de moins de 50cc a Taiwan. Pour un scooter de 125cc (le standard taiwanais), il faut le permis moto.",
      },
      {
        type: "text",
        content:
          "Si vous ne souhaitez pas passer par ces demarches administratives, ou si vous etes la pour une courte periode, les scooters en libre-service sont une excellente alternative. GoShare (by Gogoro) et iRent proposent des scooters electriques en libre-service dans les grandes villes. L'inscription se fait via l'app avec un permis valide (international accepte pour GoShare). Le prix est d'environ 2,5 NT$ par minute, soit environ 150 NT$ pour une heure. Pour une location a plus long terme, des boutiques de location privees proposent des scooters 125cc a partir de 2,000-3,000 NT$ par mois. Elles se trouvent facilement autour des gares et dans les quartiers etudiants.",
      },
      {
        type: "example",
        content: "Louer un scooter",
        chinese: "我想租一台機車，一個月多少錢？",
        pinyin: "Wǒ xiǎng zū yì tái jīchē, yí ge yuè duōshǎo qián?",
        translation:
          "Je voudrais louer un scooter, combien ca coute par mois ?",
      },
      {
        type: "text",
        content:
          "Les regles de circulation pour les scooters a Taiwan ont leurs particularites. Le casque est OBLIGATOIRE (amende de 500 NT$). Mais la regle la plus deroutante pour un Europeen est le virage a gauche en deux temps, appele 兩段式左轉 (liǎng duàn shì zuǒ zhuǎn) ou 'hook turn'. Sur les grands boulevards (routes a plus de 3 voies), les scooters n'ont PAS le droit de tourner a gauche directement. Ils doivent : 1) Rester dans la voie de droite et avancer jusqu'au coin de l'intersection, 2) S'arreter, pivoter de 90 degres vers la gauche, 3) Attendre le feu vert de la perpendiculaire, et 4) Repartir tout droit. C'est contre-intuitif mais cela evite que les scooters traversent plusieurs voies de circulation dense. Des panneaux et des marquages au sol indiquent les intersections ou ce systeme s'applique.",
      },
      {
        type: "example",
        content: "Le hook turn explique",
        chinese: "這個路口要兩段式左轉。",
        pinyin: "Zhè ge lùkǒu yào liǎng duàn shì zuǒ zhuǎn.",
        translation:
          "A cette intersection, il faut faire un virage a gauche en deux temps.",
      },
      {
        type: "warning",
        content:
          "La conduite a Taiwan peut sembler chaotique pour un Europeen. Les scooters se faufilent entre les voitures, les pietons traversent parfois sans regarder, et les taxis changent de voie brusquement. Le plus grand danger : les angles morts. Les camions et les bus ne voient pas les scooters a cote d'eux. Regle d'or : ne restez JAMAIS a cote d'un gros vehicule, surtout dans un virage. Restez derriere ou passez vite devant.",
      },
      {
        type: "warning",
        content:
          "La pluie a Taiwan (surtout pendant la saison des pluies de mai a juin et pendant les typhons) rend la conduite en scooter extremement dangereuse. Les marquages au sol, les plaques d'egout et les rails de tramway deviennent des patinoires. Beaucoup de residents taiwanais portent des ponchos impermeables (雨衣 yǔyī) en conduisant — vous en trouverez dans tous les convenience stores pour 100-200 NT$. Si la pluie est forte, prenez le MRT.",
      },
      {
        type: "example",
        content: "Acheter un poncho impermeble",
        chinese: "請問有沒有雨衣？",
        pinyin: "Qǐngwèn yǒu méiyǒu yǔyī?",
        translation: "Excusez-moi, avez-vous des ponchos impermeables ?",
      },
      {
        type: "warning",
        content:
          "Les scooters electriques (Gogoro et autres) sont de plus en plus frequents et ils sont quasi-silencieux. Ne comptez pas sur votre ouie pour detecter un scooter qui approche — regardez toujours des deux cotes avant de traverser une rue, meme dans une petite ruelle. Les scooters a Taiwan roulent aussi dans les ruelles (巷子 xiàngzi) ou il n'y a souvent pas de trottoir.",
      },
      {
        type: "tip",
        content:
          "Si vous n'etes pas a l'aise avec le scooter, ne forcez pas. Le MRT + bus + YouBike + taxi couvre 95% des besoins de deplacement a Taipei et dans les grandes villes. Le scooter est surtout indispensable dans les zones rurales et les petites villes de province ou les transports en commun sont rares. Pour explorer la cote est (Hualien, Taitung), louer un scooter est presque une necessite.",
      },
    ],
  },
];

const transportLesson: Lesson = {
  id: "lesson-04",
  slug: "transport",
  title: "Se déplacer",
  titleZh: "交通",
  description:
    "Maîtrisez le vocabulaire du MRT, bus, taxi et train pour vous déplacer facilement à Taiwan.",
  icon: "🚇",
  category: "daily",
  order: 4,
  sections,
  vocabulary: [
    {
      character: "捷運",
      pinyin: "jiéyùn",
      zhuyin: "ㄐㄧㄝˊ ㄩㄣˋ",
      french: "MRT / Métro",
      english: "MRT / Metro",
      example: {
        sentence: "我要坐捷運去台北101。",
        pinyin: "Wǒ yào zuò jiéyùn qù Táiběi yī líng yī.",
        translation: "Je vais prendre le MRT pour aller à Taipei 101.",
      },
    },
    {
      character: "公車",
      pinyin: "gōngchē",
      zhuyin: "ㄍㄨㄥ ㄔㄜ",
      french: "Bus",
      english: "Bus",
    },
    {
      character: "計程車",
      pinyin: "jìchéngchē",
      zhuyin: "ㄐㄧˋ ㄔㄥˊ ㄔㄜ",
      french: "Taxi",
      english: "Taxi",
      example: {
        sentence: "請幫我叫一台計程車。",
        pinyin: "Qǐng bāng wǒ jiào yì tái jìchéngchē.",
        translation: "Appelez-moi un taxi, s'il vous plaît.",
      },
    },
    {
      character: "火車站",
      pinyin: "huǒchē zhàn",
      zhuyin: "ㄏㄨㄛˇ ㄔㄜ ㄓㄢˋ",
      french: "Gare ferroviaire",
      english: "Train station",
    },
    {
      character: "高鐵",
      pinyin: "gāotiě",
      zhuyin: "ㄍㄠ ㄊㄧㄝˇ",
      french: "TGV / Train à grande vitesse",
      english: "High-speed rail (HSR)",
    },
    {
      character: "車票",
      pinyin: "chēpiào",
      zhuyin: "ㄔㄜ ㄆㄧㄠˋ",
      french: "Billet",
      english: "Ticket",
    },
    {
      character: "悠遊卡",
      pinyin: "yōuyóu kǎ",
      zhuyin: "ㄧㄡ ㄧㄡˊ ㄎㄚˇ",
      french: "Carte EasyCard",
      english: "EasyCard",
      example: {
        sentence: "我要買一張悠遊卡。",
        pinyin: "Wǒ yào mǎi yì zhāng yōuyóu kǎ.",
        translation: "Je voudrais acheter une EasyCard.",
      },
    },
    {
      character: "站",
      pinyin: "zhàn",
      zhuyin: "ㄓㄢˋ",
      french: "Station / Arrêt",
      english: "Station / Stop",
    },
    {
      character: "出口",
      pinyin: "chūkǒu",
      zhuyin: "ㄔㄨ ㄎㄡˇ",
      french: "Sortie",
      english: "Exit",
    },
    {
      character: "入口",
      pinyin: "rùkǒu",
      zhuyin: "ㄖㄨˋ ㄎㄡˇ",
      french: "Entrée",
      english: "Entrance",
    },
    {
      character: "轉車",
      pinyin: "zhuǎnchē",
      zhuyin: "ㄓㄨㄢˇ ㄔㄜ",
      french: "Correspondance",
      english: "Transfer",
    },
    {
      character: "到",
      pinyin: "dào",
      zhuyin: "ㄉㄠˋ",
      french: "Arriver à",
      english: "To arrive at",
      example: {
        sentence: "到了嗎？",
        pinyin: "Dào le ma?",
        translation: "On est arrivé ?",
      },
    },
  ],
  phrases: [
    {
      chinese: "請問，到台北車站怎麼走？",
      pinyin: "Qǐngwèn, dào Táiběi chēzhàn zěnme zǒu?",
      zhuyin:
        "ㄑㄧㄥˇ ㄨㄣˋ ㄉㄠˋ ㄊㄞˊ ㄅㄟˇ ㄔㄜ ㄓㄢˋ ㄗㄣˇ ㄇㄜ˙ ㄗㄡˇ",
      french: "Comment aller à la gare de Taipei ?",
      english: "How do I get to Taipei Main Station?",
      context: "台北車站 est le hub de transport principal de Taipei.",
    },
    {
      chinese: "我要買一張悠遊卡。",
      pinyin: "Wǒ yào mǎi yì zhāng yōuyóu kǎ.",
      zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄇㄞˇ ㄧˋ ㄓㄤ ㄧㄡ ㄧㄡˊ ㄎㄚˇ",
      french: "Je voudrais acheter une EasyCard.",
      english: "I'd like to buy an EasyCard.",
      context:
        "La 悠遊卡 fonctionne pour le MRT, les bus, le YouBike et même certains magasins.",
    },
    {
      chinese: "請問這班車到九份嗎？",
      pinyin: "Qǐngwèn zhè bān chē dào Jiǔfèn ma?",
      zhuyin:
        "ㄑㄧㄥˇ ㄨㄣˋ ㄓㄜˋ ㄅㄢ ㄔㄜ ㄉㄠˋ ㄐㄧㄡˇ ㄈㄣˋ ㄇㄚ˙",
      french: "Ce bus va-t-il à Jiufen ?",
      english: "Does this bus go to Jiufen?",
    },
    {
      chinese: "我要到這個地址。",
      pinyin: "Wǒ yào dào zhè ge dìzhǐ.",
      zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄉㄠˋ ㄓㄜˋ ㄍㄜˋ ㄉㄧˋ ㄓˇ",
      french: "Je veux aller à cette adresse.",
      english: "I want to go to this address.",
      context:
        "Montrez l'adresse sur votre téléphone au chauffeur de taxi.",
    },
    {
      chinese: "下一站是哪裡？",
      pinyin: "Xià yí zhàn shì nǎlǐ?",
      zhuyin: "ㄒㄧㄚˋ ㄧˊ ㄓㄢˋ ㄕˋ ㄋㄚˇ ㄌㄧˇ",
      french: "Quel est le prochain arrêt ?",
      english: "What's the next stop?",
    },
    {
      chinese: "我要在這裡下車。",
      pinyin: "Wǒ yào zài zhèlǐ xiàchē.",
      zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄗㄞˋ ㄓㄜˋ ㄌㄧˇ ㄒㄧㄚˋ ㄔㄜ",
      french: "Je veux descendre ici.",
      english: "I want to get off here.",
    },
    {
      chinese: "悠遊卡可以加值嗎？",
      pinyin: "Yōuyóu kǎ kěyǐ jiāzhí ma?",
      zhuyin: "ㄧㄡ ㄧㄡˊ ㄎㄚˇ ㄎㄜˇ ㄧˇ ㄐㄧㄚ ㄓˊ ㄇㄚ˙",
      french: "Puis-je recharger la EasyCard ?",
      english: "Can I top up the EasyCard?",
      context:
        "On peut recharger aux bornes du MRT ou dans les convenience stores (7-Eleven, FamilyMart).",
    },
    {
      chinese: "請問出口幾號？",
      pinyin: "Qǐngwèn chūkǒu jǐ hào?",
      zhuyin: "ㄑㄧㄥˇ ㄨㄣˋ ㄔㄨ ㄎㄡˇ ㄐㄧˇ ㄏㄠˋ",
      french: "Quelle est la sortie numéro... ?",
      english: "Which exit number?",
      context:
        "Les stations de MRT ont plusieurs sorties numérotées.",
    },
  ],
  culturalNotes: [
    "Le MRT de Taipei (捷運) est l'un des systèmes de métro les plus propres au monde. Il est interdit de manger, boire ou mâcher du chewing-gum dans le MRT (amende de 1500 à 7500 NT$).",
    "La 悠遊卡 (EasyCard) est indispensable : elle fonctionne dans le MRT, les bus, les YouBike, les trains locaux, et même dans les 7-Eleven et FamilyMart pour payer.",
    "Le 高鐵 (Taiwan High Speed Rail) relie Taipei à Kaohsiung en seulement 1h30. Réservez à l'avance pour obtenir des réductions (early bird).",
    "Les taxis à Taiwan sont jaunes. Ils utilisent le compteur (跳表 tiàobiǎo). On peut aussi utiliser des apps comme LINE TAXI ou Uber.",
  ],
  quiz: [
    {
      id: "transport-q1",
      type: "character-to-french",
      question: "捷運",
      correctAnswer: "MRT / Métro",
      options: ["Bus", "MRT / Métro", "Taxi", "Train"],
    },
    {
      id: "transport-q2",
      type: "french-to-character",
      question: "Carte EasyCard",
      correctAnswer: "悠遊卡",
      options: ["信用卡", "悠遊卡", "車票", "身分證"],
    },
    {
      id: "transport-q3",
      type: "pinyin-to-character",
      question: "chūkǒu",
      correctAnswer: "出口",
      options: ["入口", "出口", "門口", "路口"],
    },
    {
      id: "transport-q4",
      type: "character-to-french",
      question: "高鐵",
      correctAnswer: "TGV / Train à grande vitesse",
      options: [
        "Bus express",
        "TGV / Train à grande vitesse",
        "Avion",
        "Ferry",
      ],
    },
    {
      id: "transport-q5",
      type: "french-to-character",
      question: "Billet",
      correctAnswer: "車票",
      options: ["車票", "車站", "車門", "車廂"],
    },
    {
      id: "transport-q6",
      type: "character-to-french",
      question: "計程車",
      correctAnswer: "Taxi",
      options: ["Bus", "Ambulance", "Taxi", "Camion"],
    },
  ],
};

export default transportLesson;
