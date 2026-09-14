import type { CourseUnit } from "@/types/course";

export const unit10: CourseUnit = {
  id: "unit-10",
  number: 10,
  title: "Faire du shopping",
  titleZh: "買東西",
  chapter: 2,
  description:
    "Négociez les prix, payez de différentes manières et découvrez pourquoi les convenience stores sont le centre de la vie taiwanaise.",
  icon: "🛒",

  sections: [
    {
      title: "Parler des prix",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "Pour demander le prix de quelque chose, une seule phrase suffit : 多少錢？(duōshǎo qián?) = « Combien ça coûte ? ». C'est la question que vous utiliserez le plus souvent à Taiwan.",
        },
        {
          type: "example",
          chinese: "這個多少錢？",
          pinyin: "zhège duōshǎo qián?",
          translation: "Combien coûte ceci ?",
          content: "這個 (zhège) = ceci. 這個 + 多少錢 est la formule complète.",
        },
        {
          type: "text",
          content:
            "L'unité monétaire officielle est le 元 (yuán), mais dans la vie courante tout le monde dit 塊 (kuài). C'est comme dire « balles » au lieu de « euros » en français. Les deux sont parfaitement compris.",
        },
        {
          type: "example",
          chinese: "一百塊",
          pinyin: "yì bǎi kuài",
          translation: "100 dollars (NT$)",
          content: "塊 est le mot familier pour l'unité monétaire. 100 NT$ ≈ 3 euros.",
        },
        {
          type: "text",
          content:
            "Pour négocier (surtout aux marchés), voici les expressions clés : 太貴了 (tài guì le) = « trop cher ! », 便宜一點 (piányí yìdiǎn) = « un peu moins cher ».",
        },
        {
          type: "example",
          chinese: "太貴了！可以便宜一點嗎？",
          pinyin: "tài guì le! kěyǐ piányí yìdiǎn ma?",
          translation: "Trop cher ! Vous pouvez faire un peu moins cher ?",
          content: "Formule de négociation classique au marché. Avec le sourire, ça marche souvent.",
        },
        {
          type: "tip",
          content:
            "**一點** (yìdiǎn) signifie « un peu ». On l'utilise pour adoucir une demande : 便宜一點 = un peu moins cher (plus poli que 便宜！). 快一點 = un peu plus vite. On peut aussi dire 一點點 pour « un tout petit peu ».",
        },
        {
          type: "example",
          chinese: "打折",
          pinyin: "dǎzhé",
          translation: "Promotion / réduction",
          content: "打八折 = 20% de réduction (on paie 80%). Attention, la logique est inversée par rapport au français !",
        },
        {
          type: "example",
          chinese: "買一送一",
          pinyin: "mǎi yī sòng yī",
          translation: "Un acheté, un offert",
          content: "買 = acheter, 送 = offrir. Très courant dans les convenience stores.",
        },
        {
          type: "tip",
          content:
            "On ne négocie PAS dans les magasins avec prix affichés, ni dans les convenience stores. La négociation est acceptable aux marchés traditionnels, marchés de nuit (pour les vêtements/accessoires, pas la nourriture) et dans certaines petites boutiques.",
        },
        {
          type: "text",
          content:
            "Le système monétaire taiwanais : la monnaie est le New Taiwan Dollar (新台幣 xīntáibì), symbole NT$ ou TWD. 1 euro equivaut à environ 35 NT$ (approximation 2026). Les prix courants pour vous repérer : un repas simple dans un petit restaurant = 80-120 NT$ (2-3 euros), un bubble tea = 50-70 NT$ (1.5-2 euros), un trajet en MRT = 20-65 NT$ (0.5-2 euros), un café dans un coffee shop = 80-150 NT$ (2-4 euros), un mois de loyer pour un studio à Taipei = 8,000-15,000 NT$ (230-430 euros), une nuit en auberge de jeunesse = 500-800 NT$ (15-23 euros). Les Taiwanais disent souvent juste le nombre sans le classificateur monétaire : 這個一百二 (ça fait 120) au lieu de 這個一百二十塊. Attention au piège : 一百二 peut signifier 120 (raccourci courant, le 十 est omis) et non 102. C'est un usage oral très fréquent. Les pièces en circulation : 1, 5, 10 et 50 NT$. Les billets : 100 (rouge), 200 (vert, rare), 500 (marron), 1000 (bleu) et 2000 (violet, très rare). Le billet de 1000 NT$ est le plus courant pour les gros achats.",
        },
        {
          type: "text",
          content:
            "Ordres de grandeur pour la vie quotidienne a Taiwan (2026) : un repas dans un stand de rue = 60-120 NT$ (1.5-3 euros), un bubble tea = 40-70 NT$, un trajet MRT = 20-65 NT$, un cafe au 星巴克 Starbucks = 120-180 NT$, un loyer studio a Taipei centre (Da'an, Zhongshan) = 10,000-18,000 NT$/mois, un loyer studio en peripherie (Banqiao, Zhonghe) = 7,000-12,000 NT$/mois, le SMIC taiwanais (基本工資 jīběn gōngzī) = environ 27,470 NT$/mois en 2026, un billet de 高鐵 (gāotiě, TGV taiwanais) Taipei vers Kaohsiung = environ 1,490 NT$, un aller simple en bus longue distance Taipei-Taichung = 250-300 NT$, une consultation medicale de base = 150-300 NT$ (la sante est tres abordable a Taiwan grace au systeme NHI 健保 jiànbǎo). Les billets et pieces en detail : billets de 100 (rouge, le plus courant pour les achats quotidiens), 200 (vert, assez rare — certains commercants le regardent a deux fois), 500 (marron, courant), 1000 (bleu, c'est ce que les distributeurs ATM donnent le plus souvent — pensez a faire de la monnaie car les petits commerces n'aiment pas rendre sur 1000), 2000 (violet, tres rare — certains vendeurs le refusent par meconnaissance). Pieces : 1 NT$ (petite, aluminium), 5 NT$ (bronze, bord lisse), 10 NT$ (argent, la plus commune), 50 NT$ (bicolore or et argent, ressemble a la piece de 2 euros). Astuce : les distributeurs de billets des convenience stores (7-Eleven surtout) acceptent les cartes Visa et Mastercard internationales et donnent des billets de 1000 NT$.",
        },
        {
          type: "tip",
          content:
            "Où et quand négocier à Taiwan : OUI aux marchés de nuit (vêtements, accessoires, coques de téléphone — PAS la nourriture dont le prix est fixe), aux marchés traditionnels du matin (菜市場), aux marchés aux fleurs de Jianguo (建國花市), aux marchés aux puces et aux boutiques de jade au marché de Jianguo le week-end. NON dans les magasins avec prix affichés, les convenience stores, les chaînes (Uniqlo, MUJI...), les restaurants, les supermarchés. La technique de négociation polie en 4 étapes : 1) Demandez le prix : 多少錢？ 2) Faites une petite moue et dites 有點貴耶 (yǒudiǎn guì ye — c'est un peu cher...) avec un ton hésitant, pas agressif. 3) Demandez : 可以算便宜一點嗎？(kěyǐ suàn piányí yìdiǎn ma? — vous pouvez faire un prix ?). Le verbe 算 (suàn, calculer) est la clé — il sous-entend « refaites le calcul en ma faveur ». 4) Si le vendeur refuse, acceptez ou posez doucement l'article et partez lentement — souvent il vous rappellera avec une contre-offre. Ne négociez jamais agressivement — la politesse est la clé. Un sourire et un ton amical valent toutes les techniques de négociation.",
        },
        {
          type: "text",
          content:
            "Le marchandage a Taiwan suit des regles precises qui meritent d'etre approfondies. OU marchander : marches de nuit (pour les vetements, accessoires, coques de telephone — PAS pour la nourriture dont le prix est fixe), marches traditionnels du matin (菜市場 càishìchǎng — parfaits pour les fruits et legumes frais), marches aux fleurs de Jianguo (建國花市 Jiànguó huāshì, le week-end), Wufenpu (五分埔 Wǔfēnpǔ, le quartier textile de Taipei pres de la gare de Songshan — des ruelles entieres de vetements en gros et au detail), et les marches aux puces. JAMAIS dans les magasins avec des prix affiches (7-Eleven, Uniqlo, MUJI, restaurants, supermarches Carrefour/PX Mart). COMMENT marchander : commencez par 太貴了 (tài guì le, trop cher), puis demandez 可以便宜一點嗎？(kěyǐ piányí yìdiǎn ma? — un peu moins cher ?). Le vendeur propose un prix, vous contre-proposez. L'objectif n'est pas de « gagner » mais de trouver un prix acceptable pour les deux — c'est un rituel social, pas un combat. COMBIEN reduire : en general, on obtient 10-20% de reduction maximum. Ne demandez JAMAIS la moitie du prix — c'est insultant et montre que vous ne connaissez pas la culture. QUAND abandonner : si le vendeur dit 不行 (bùxíng, impossible) ou 已經很便宜了 (yǐjīng hěn piányí le, c'est deja tres bon marche), arretez de negocier. Insister est mal vu et vous perdrez la face (丟臉 diūliǎn). L'astuce du lot : 買多一點可以便宜嗎？(mǎi duō yìdiǎn kěyǐ piányí ma? — si j'en achete plusieurs, c'est moins cher ?) fonctionne souvent. Acheter 3 coques de telephone au lieu d'une peut vous faire passer de 150 a 100 NT$ piece.",
        },
      ],
    },
    {
      title: "Payer",
      type: "grammar",
      content: [
        {
          type: "text",
          content:
            "À Taiwan, on vous demandera souvent le mode de paiement. Les deux options de base : 現金 (xiànjīn) = espèces et 刷卡 (shuākǎ) = carte bancaire.",
        },
        {
          type: "example",
          chinese: "現金還是刷卡？",
          pinyin: "xiànjīn háishì shuākǎ?",
          translation: "Espèces ou carte ?",
          content: "還是 (háishì) = ou bien (dans une question à choix). Même structure que 內用還是外帶.",
        },
        {
          type: "text",
          content:
            "La 悠遊卡 (Yōuyóu kǎ, EasyCard) est une carte rechargeable qui sert à tout : MRT, bus, convenience stores, YouBike, certains restaurants. C'est l'outil indispensable du quotidien à Taiwan.",
        },
        {
          type: "example",
          chinese: "可以用悠遊卡嗎？",
          pinyin: "kěyǐ yòng Yōuyóu kǎ ma?",
          translation: "On peut payer avec la EasyCard ?",
          content: "用 (yòng) = utiliser. 可以用...嗎？ = peut-on utiliser... ?",
        },
        {
          type: "text",
          content:
            "Le paiement mobile est très répandu : LINE Pay et 街口支付 (JKoPay) sont les plus utilisés. Beaucoup de Taiwanais ne portent même plus de portefeuille.",
        },
        {
          type: "text",
          content:
            "Quand vous payez, on vous donnera un reçu : 發票 (fāpiào). Rappelez-vous : c'est aussi un billet de loterie ! Le vendeur peut aussi demander : 要袋子嗎？(yào dàizi ma?) = « Vous voulez un sac ? ». Les sacs plastiques sont payants (1 à 2 NT$).",
        },
        {
          type: "example",
          chinese: "不用袋子，謝謝",
          pinyin: "bùyòng dàizi, xièxiè",
          translation: "Pas besoin de sac, merci",
          content: "不用 (bùyòng) = pas besoin. Plus poli que 不要 (bú yào) dans ce contexte.",
        },
      ],
    },
    {
      title: "Les convenience stores",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Taiwan a la plus haute densité de convenience stores au monde. Il y a plus de 13 000 7-Eleven et FamilyMart sur une île de 23 millions d'habitants. Un 7-Eleven tous les 200 mètres en ville. Ce ne sont pas de simples épiceries : ce sont des centres de services essentiels.",
        },
        {
          type: "text",
          content:
            "Ce que vous pouvez faire dans un convenience store taiwanais : acheter à manger (repas chauds, bentos, boissons), payer vos factures (eau, électricité, téléphone), envoyer et recevoir des colis, imprimer des documents, acheter des billets de concert, recharger votre EasyCard, et même payer vos impôts.",
        },
        {
          type: "example",
          chinese: "可以幫我加熱嗎？",
          pinyin: "kěyǐ bāng wǒ jiārè ma?",
          translation: "Vous pouvez me réchauffer ça ?",
          content: "加熱 (jiārè) = réchauffer. Le micro-ondes du conbini est votre meilleur ami.",
        },
        {
          type: "example",
          chinese: "我要寄包裹",
          pinyin: "wǒ yào jì bāoguǒ",
          translation: "Je veux envoyer un colis",
          content: "Les convenience stores sont aussi des points relais pour les colis.",
        },
        {
          type: "tip",
          content:
            "Astuce de survie : les bentos (便當 biàndāng) des convenience stores sont de bonne qualité et coûtent entre 60 et 90 NT$ (2 à 3 euros). Parfait quand vous ne savez pas quoi manger. Demandez à les réchauffer (加熱) au comptoir.",
        },
        {
          type: "warning",
          content:
            "Attention : beaucoup de petits commerces et stands de marché ne prennent QUE du liquide. Les convenience stores acceptent tout (cash, carte, EasyCard, LINE Pay), mais gardez toujours des billets sur vous pour les petits stands.",
        },
        {
          type: "text",
          content:
            "Au comptoir du convenience store, les caissiers vous poseront systématiquement une série de questions rapides. Les connaître à l'avance vous évitera la panique du débutant : 要加熱嗎？(yào jiārè ma — vous voulez qu'on le réchauffe ?), 要集點嗎？(yào jídiǎn ma — vous voulez les points fidélité ?), 要袋子嗎？(yào dàizi ma — vous voulez un sac ? — payant, 1-2 NT$), 要統編嗎？(yào tǒngbiān ma — numéro fiscal d'entreprise ? — répondez 不用 bùyòng si vous êtes un particulier). Pour toutes ces questions : 好 (hǎo — oui) ou 不用 (bùyòng — non merci). Avec ces deux mots, vous survivrez à n'importe quel passage en caisse.",
        },
        {
          type: "example",
          chinese: "好，幫我加熱。不用袋子，謝謝。",
          pinyin: "Hǎo, bāng wǒ jiārè. Bùyòng dàizi, xièxiè.",
          translation: "Oui, réchauffez-le. Pas besoin de sac, merci.",
          content: "Le duo 好/不用 est votre kit de survie au comptoir du conbini.",
        },
        {
          type: "text",
          content:
            "Le café des convenience stores est une bonne surprise : City Café chez 7-Eleven et Let's Café chez FamilyMart proposent du café fraîchement moulu pour 45-65 NT$ (un americano medium). Les promotions café sont PARTOUT — deuxième tasse à moitié prix (第二杯半價 dì èr bēi bànjià), ou collectionnez des autocollants pour un café gratuit.",
        },
        {
          type: "example",
          chinese: "我要一杯中杯拿鐵。",
          pinyin: "Wǒ yào yì bēi zhōng bēi ná tiě.",
          translation: "Je voudrais un latte taille moyenne.",
          content: "Les tailles : 小杯 (petit), 中杯 (moyen), 大杯 (grand).",
        },
        {
          type: "text",
          content:
            "Les convenience stores (便利商店 biànlì shāngdiàn) sont le VRAI centre de la vie taiwanaise. Taiwan a la plus haute densité de convenience stores au monde : plus de 13,000 pour 23 millions d'habitants, soit 1 pour environ 1,700 personnes. Les deux géants : 7-Eleven (統一超商 Tǒngyī chāoshāng, environ 6,600 magasins) et FamilyMart (全家 Quánjiā, environ 4,000 magasins). On trouve aussi Hi-Life (萊爾富) et OK Mart en moindre nombre. Ce qu'on peut y faire (et cette liste n'est PAS exhaustive) : acheter à manger (bento 便當 biàndāng, onigiri 飯糰 fàntuán, sandwichs, salades, boissons chaudes et froides), réchauffer sa nourriture gratuitement au micro-ondes du comptoir, payer ses factures d'eau, d'électricité, de gaz et de téléphone, retirer de l'argent aux distributeurs ATM (qui acceptent les cartes internationales), envoyer et recevoir des colis (寄件 jìjiàn / 取件 qǔjiàn — le système de livraison de colis aux convenience stores est omniprésent à Taiwan), imprimer et scanner des documents sur la borne ibon (7-Eleven) ou FamiPort (FamilyMart), acheter des tickets de concert, de train ou de spectacle, recharger sa EasyCard (悠遊卡 Yōuyóu kǎ) au comptoir ou à la borne, payer des amendes de stationnement ou de circulation, acheter des timbres et envoyer du courrier, commander des billets de bus longue distance (客運 kèyùn), et même réserver certains services. Le 7-Eleven est ouvert 24h/24, 7j/7, 365 jours par an. C'est littéralement le couteau suisse de la vie quotidienne taiwanaise. Pour un étranger qui vient d'arriver, c'est le premier endroit à maîtriser.",
        },
        {
          type: "text",
          content:
            "Les convenience stores meritent un approfondissement car ils sont le coeur battant du quotidien taiwanais. Le cafe : City Cafe chez 7-Eleven et Let's Cafe chez FamilyMart proposent du cafe fraichement moulu de qualite correcte pour 45-65 NT$ (un americano medium). C'est moins cher qu'un Starbucks (120-180 NT$) et souvent meilleur que ce qu'on attend. Les promotions cafe (咖啡優惠 kāfēi yōuhuì) sont PARTOUT — achetez-en deux et le deuxieme est a moitie prix (第二杯半價 dì èr bēi bànjià), ou collectionnez des autocollants pour un cafe gratuit. Les colis : le systeme de livraison a Taiwan passe massivement par les convenience stores. Quand vous commandez en ligne (sur Shopee 蝦皮, PChome, ou Momo), vous pouvez choisir la livraison en convenience store (超商取貨 chāoshāng qǔhuò). Vous recevez un SMS quand le colis arrive, puis vous allez le chercher au comptoir en montrant le code barre. C'est gratuit ou presque (souvent 60 NT$ de frais de livraison). Vous pouvez aussi ENVOYER des colis (寄件 jìjiàn) depuis un convenience store — pratique pour envoyer des souvenirs en France. La borne multifonction : la borne ibon (chez 7-Eleven) ou FamiPort (chez FamilyMart) est un ordinateur public qui permet d'imprimer des documents (depuis une cle USB, un email, ou le cloud), d'acheter des billets de concert, de train (TRA 台鐵 ou HSR 高鐵), de spectacle, de cinema, et de payer toutes sortes de factures et amendes. La collecte de points : quand le caissier vous demande 要集點嗎？(yào jídiǎn ma? — voulez-vous accumuler les points ?), repondez 好 si vous avez l'app Open Point (7-Eleven) ou FamilyMart App, ou 不用 (bùyòng, pas besoin) sinon. Les points permettent d'obtenir des cadeaux gratuits (peluches, ustensiles de cuisine, etc.) que les Taiwanais collectionnent avec passion.",
        },
        {
          type: "warning",
          content:
            "Les pièges du shopping à Taiwan pour les étrangers : 1) Les étiquettes de prix incluent TOUJOURS les taxes — pas de mauvaise surprise à la caisse, contrairement aux États-Unis ou au Canada. Le prix affiché est le prix payé. 2) La loterie des reçus (統一發票 tǒngyī fāpiào) : GARDEZ tous vos reçus ! Chaque facture a un numéro unique à 8 chiffres qui participe à un tirage au sort bimestriel organisé par le gouvernement. Le gros lot : 10 millions NT$ (environ 286,000 euros). Les prix intermédiaires : 2 millions, 200,000, 40,000, 10,000, 4,000, 1,000, et 200 NT$. Vérifiez vos numéros sur l'app 發票存摺 (fāpiào cúnzhé) ou sur le site officiel du Ministère des Finances. Beaucoup de Taiwanais stockent leurs factures numériquement via l'EasyCard ou l'app. 3) Les sacs plastiques sont payants dans toutes les enseignes : 1 à 5 NT$ selon la taille — amenez votre propre sac (環保袋 huánbǎo dài). 4) Le retour et l'échange sont généralement faciles dans les chaînes (7 jours avec le reçu, article non ouvert) mais impossibles dans les marchés et les stands de rue — vérifiez avant d'acheter.",
        },
      ],
    },
    {
      title: "Shopping en ligne et loterie des reçus",
      type: "culture",
      content: [
        {
          type: "text",
          content:
            "Le e-commerce est extrêmement développé à Taiwan. La plateforme dominante est 蝦皮 (xiāpí — Shopee), qui combine marketplace et réseau social — on y trouve absolument tout. La spécificité taiwanaise : la livraison au convenience store (超商取貨 chāoshāng qǔhuò) est le mode favori. Vous commandez en ligne, choisissez le 7-Eleven ou FamilyMart le plus proche, et récupérez votre colis quand ça vous arrange (les conbini sont ouverts 24h/24). Pas besoin d'être chez soi.",
        },
        {
          type: "text",
          content:
            "Les autres plateformes importantes : PChome 24h est le « Amazon taiwanais » — livraison en 24 heures dans toute l'île. momo (富邦購物 Fùbāng gòuwù) offre un catalogue gigantesque avec des promotions agressives. Pour la livraison de repas : Foodpanda (熊貓 xióngmāo) et UberEats se partagent le marché. Les livreurs en scooter rose (Foodpanda) ou vert (UberEats) font partie du paysage urbain.",
        },
        {
          type: "example",
          chinese: "我在蝦皮下單了，選超商取貨。",
          pinyin: "Wǒ zài xiāpí xiàdān le, xuǎn chāoshāng qǔhuò.",
          translation: "J'ai commandé sur Shopee, avec retrait au convenience store.",
          content: "下單 = passer commande, 超商取貨 = retrait au conbini.",
        },
        {
          type: "text",
          content:
            "Le vocabulaire du shopping en ligne : 下單 (xiàdān — passer commande), 付款 (fùkuǎn — payer), 運費 (yùnfèi — frais de livraison), 免運 (miǎn yùn — livraison gratuite, le graal de tout acheteur), 超商取貨 (chāoshāng qǔhuò — retrait au conbini), 貨到付款 (huò dào fùkuǎn — paiement à la livraison). Sur Shopee, guettez les événements « double jour » (雙11, 雙12) pour des réductions massives. Les vendeurs offrent souvent la livraison gratuite au-dessus d'un certain montant — 免運 est le mot magique à chercher.",
        },
        {
          type: "text",
          content:
            "Le système de reçus-loterie (統一發票 tǒngyī fāpiào) est unique au monde. Chaque reçu officiel est automatiquement un billet de loterie — système mis en place en 1951 pour lutter contre l'évasion fiscale. Le tirage a lieu tous les deux mois (les 25 des mois impairs). Chaque reçu porte un numéro à 8 chiffres. Les gains : 3 derniers chiffres = 200 NT$, les 8 chiffres complets pour les gros lots (10 millions NT$ ≈ 280,000 euros, et un prix spécial de 2 millions NT$). L'app indispensable : 發票存摺 (fāpiào cúnzhé — « carnet de reçus »), qui scanne vos reçus papier, stocke vos reçus électroniques, et vérifie automatiquement les numéros gagnants à chaque tirage.",
        },
        {
          type: "example",
          chinese: "你有沒有對發票？這期有中獎嗎？",
          pinyin: "Nǐ yǒu méiyǒu duì fāpiào? Zhè qī yǒu zhòngjiǎng ma?",
          translation: "Tu as vérifié tes reçus ? Tu as gagné cette fois ?",
          content: "對發票 = vérifier ses reçus. 中獎 = gagner un prix.",
        },
        {
          type: "tip",
          content:
            "Pour éviter d'accumuler des montagnes de reçus papier : téléchargez l'app 發票存摺 et configurez les reçus électroniques (電子發票 diànzǐ fāpiào) — vous pouvez enregistrer votre EasyCard ou votre numéro de téléphone comme support. Ou donnez vos reçus papier aux boîtes de collecte (發票捐贈箱) dans les convenience stores — ils sont reversés à des associations caritatives.",
        },
      ],
    },
  ],

  dialogue: {
    context:
      "Vous achetez un souvenir au marché puis vous passez au 7-Eleven.",
    lines: [
      {
        speaker: "Vous",
        chinese: "這個多少錢？",
        pinyin: "zhège duōshǎo qián?",
        french: "Combien coûte ceci ?",
      },
      {
        speaker: "Vendeur",
        chinese: "三百五十塊。",
        pinyin: "sān bǎi wǔshí kuài.",
        french: "350 dollars.",
      },
      {
        speaker: "Vous",
        chinese: "太貴了！便宜一點可以嗎？",
        pinyin: "tài guì le! piányí yìdiǎn kěyǐ ma?",
        french: "Trop cher ! Un peu moins cher, c'est possible ?",
      },
      {
        speaker: "Vendeur",
        chinese: "好吧，三百塊。",
        pinyin: "hǎo ba, sān bǎi kuài.",
        french: "Bon, 300 dollars.",
        note: "好吧 (hǎo ba) = bon, d'accord (avec une légère concession).",
      },
      {
        speaker: "Vous",
        chinese: "好，可以刷卡嗎？",
        pinyin: "hǎo, kěyǐ shuākǎ ma?",
        french: "D'accord, je peux payer par carte ?",
      },
      {
        speaker: "Vendeur",
        chinese: "不好意思，只收現金。",
        pinyin: "bù hǎoyìsi, zhǐ shōu xiànjīn.",
        french: "Désolé, on n'accepte que le liquide.",
        note: "只 (zhǐ) = seulement. 收 (shōu) = accepter/recevoir.",
      },
    ],
  },

  keyPoints: [
    "多少錢？ pour demander le prix. L'unité courante est 塊 (kuài), l'officielle est 元 (yuán).",
    "太貴了 = trop cher, 便宜一點 = un peu moins cher. On négocie aux marchés, jamais en magasin.",
    "Modes de paiement : 現金 (espèces), 刷卡 (carte), 悠遊卡 (EasyCard), LINE Pay.",
    "Les convenience stores (7-Eleven, FamilyMart) sont des centres de services où l'on peut tout faire : manger, payer ses factures, envoyer des colis.",
  ],

  vocabulary: [
    {
      character: "多少錢",
      pinyin: "duōshǎo qián",
      zhuyin: "ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ",
      french: "Combien (ça coûte) ?",
      english: "How much?",
      example: {
        sentence: "這個多少錢？",
        pinyin: "zhège duōshǎo qián?",
        translation: "Combien coûte ceci ?",
      },
    },
    {
      character: "塊",
      pinyin: "kuài",
      zhuyin: "ㄎㄨㄞˋ",
      french: "Dollar (familier) / yuan",
      english: "Dollar (colloquial)",
      example: {
        sentence: "一百塊。",
        pinyin: "yì bǎi kuài.",
        translation: "100 dollars.",
      },
    },
    {
      character: "太貴了",
      pinyin: "tài guì le",
      zhuyin: "ㄊㄞˋ ㄍㄨㄟˋ ㄌㄜ˙",
      french: "Trop cher",
      english: "Too expensive",
      example: {
        sentence: "這個太貴了！",
        pinyin: "zhège tài guì le!",
        translation: "C'est trop cher !",
      },
    },
    {
      character: "便宜",
      pinyin: "piányí",
      zhuyin: "ㄆㄧㄢˊ ㄧˊ",
      french: "Pas cher / bon marché",
      english: "Cheap / inexpensive",
      example: {
        sentence: "夜市的東西很便宜。",
        pinyin: "yèshì de dōngxi hěn piányí.",
        translation: "Les choses au marché de nuit sont pas chères.",
      },
    },
    {
      character: "現金",
      pinyin: "xiànjīn",
      zhuyin: "ㄒㄧㄢˋ ㄐㄧㄣ",
      french: "Espèces / liquide",
      english: "Cash",
      example: {
        sentence: "只收現金。",
        pinyin: "zhǐ shōu xiànjīn.",
        translation: "On n'accepte que le liquide.",
      },
    },
    {
      character: "刷卡",
      pinyin: "shuākǎ",
      zhuyin: "ㄕㄨㄚ ㄎㄚˇ",
      french: "Payer par carte",
      english: "Pay by card",
      example: {
        sentence: "可以刷卡嗎？",
        pinyin: "kěyǐ shuākǎ ma?",
        translation: "On peut payer par carte ?",
      },
    },
    {
      character: "發票",
      pinyin: "fāpiào",
      zhuyin: "ㄈㄚ ㄆㄧㄠˋ",
      french: "Reçu / facture (loterie)",
      english: "Receipt / invoice",
      example: {
        sentence: "發票給你。",
        pinyin: "fāpiào gěi nǐ.",
        translation: "Voici votre reçu.",
      },
    },
    {
      character: "袋子",
      pinyin: "dàizi",
      zhuyin: "ㄉㄞˋ ㄗ˙",
      french: "Sac",
      english: "Bag",
      example: {
        sentence: "要袋子嗎？",
        pinyin: "yào dàizi ma?",
        translation: "Vous voulez un sac ?",
      },
    },
    {
      character: "大",
      pinyin: "dà",
      zhuyin: "ㄉㄚˋ",
      french: "Grand",
      english: "Big / large",
      example: {
        sentence: "要大的還是小的？",
        pinyin: "yào dà de háishì xiǎo de?",
        translation: "Vous voulez le grand ou le petit ?",
      },
    },
    {
      character: "小",
      pinyin: "xiǎo",
      zhuyin: "ㄒㄧㄠˇ",
      french: "Petit",
      english: "Small",
      example: {
        sentence: "小的就好。",
        pinyin: "xiǎo de jiù hǎo.",
        translation: "Le petit ça va.",
      },
    },
    {
      character: "要",
      pinyin: "yào",
      zhuyin: "ㄧㄠˋ",
      french: "Vouloir / avoir besoin",
      english: "To want / to need",
      example: {
        sentence: "你要什麼？",
        pinyin: "nǐ yào shénme?",
        translation: "Qu'est-ce que tu veux ?",
      },
    },
    {
      character: "不要",
      pinyin: "bú yào",
      zhuyin: "ㄅㄨˊ ㄧㄠˋ",
      french: "Ne pas vouloir / non merci",
      english: "Don't want / no thanks",
      example: {
        sentence: "不要袋子，謝謝。",
        pinyin: "bú yào dàizi, xièxiè.",
        translation: "Pas de sac, merci.",
      },
    },
    {
      character: "一點",
      pinyin: "yìdiǎn",
      zhuyin: "ㄧˋ ㄉㄧㄢˇ",
      french: "Un peu",
      english: "A little",
      example: {
        sentence: "便宜一點可以嗎？",
        pinyin: "piányí yìdiǎn kěyǐ ma?",
        translation: "Un peu moins cher, c'est possible ?",
      },
    },
    {
      character: "可以",
      pinyin: "kěyǐ",
      zhuyin: "ㄎㄜˇ ㄧˇ",
      french: "Pouvoir, est-ce que",
      english: "Can / may",
      example: {
        sentence: "可以刷卡嗎？",
        pinyin: "kěyǐ shuākǎ ma?",
        translation: "On peut payer par carte ?",
      },
    },
    {
      character: "還是",
      pinyin: "háishì",
      zhuyin: "ㄏㄞˊ ㄕˋ",
      french: "Ou bien (dans une question)",
      english: "Or (in a question)",
      example: {
        sentence: "要大的還是小的？",
        pinyin: "yào dà de háishì xiǎo de?",
        translation: "Vous voulez le grand ou le petit ?",
      },
    },
  ],

  exercises: [
    {
      id: "u8-ex1",
      type: "translate",
      question: "Comment demande-t-on le prix de quelque chose ?",
      correctAnswer: "多少錢？",
      options: ["多少錢？", "怎麼賣？", "太貴了？", "幾塊錢？"],
      optionsHint: ["duōshǎo qián?", "zěnme mài?", "tài guì le?", "jǐ kuài qián?"],
      optionsZhuyin: ["ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ?", "ㄗㄣˇ ㄇㄜ ㄇㄞˋ?", "ㄊㄞˋ ㄍㄨㄟˋ ㄌㄜ?", "ㄐㄧˇ ㄎㄨㄞˋ ㄑㄧㄢˊ?"],
    },
    {
      id: "u8-ex2",
      type: "comprehension",
      question: "Que signifie 買一送一 ?",
      correctAnswer: "Un acheté, un offert",
      options: [
        "Un acheté, un offert",
        "Acheter et envoyer",
        "Deux pour le prix de trois",
        "Soldes de fin de saison",
      ],
      hint: "mǎi yī sòng yī",
    },
    {
      id: "u8-ex3",
      type: "fill-blank",
      question: "太___了！(Trop cher !)",
      correctAnswer: "貴",
      options: ["貴", "便宜", "大", "好"],
      optionsHint: ["guì", "piányi", "dà", "hǎo"],
      optionsZhuyin: ["ㄍㄨㄟˋ", "ㄆㄧㄢˊ ㄧ", "ㄉㄚˋ", "ㄏㄠˇ"],
      hint: "Quel caractère signifie « cher » ?",
    },
    {
      id: "u8-ex4",
      type: "translate",
      question: "Que signifie 現金還是刷卡 ?",
      correctAnswer: "Espèces ou carte ?",
      options: [
        "Espèces ou carte ?",
        "Grand ou petit ?",
        "Sur place ou à emporter ?",
        "Piquant ou pas piquant ?",
      ],
      hint: "xiànjīn háishì shuākǎ",
    },
    {
      id: "u8-ex5",
      type: "comprehension",
      question: "Que peut-on faire dans un convenience store taiwanais ?",
      correctAnswer: "Tout : manger, payer des factures, envoyer des colis, recharger sa carte",
      options: [
        "Tout : manger, payer des factures, envoyer des colis, recharger sa carte",
        "Seulement acheter à manger et des boissons",
        "Uniquement acheter des produits de première nécessité",
        "Seulement retirer de l'argent",
      ],
    },
    {
      id: "u8-ex6",
      type: "fill-blank",
      question: "可以___一點嗎？(Vous pouvez faire un peu moins cher ?)",
      correctAnswer: "便宜",
      options: ["便宜", "貴", "大", "好"],
      optionsHint: ["piányi", "guì", "dà", "hǎo"],
      optionsZhuyin: ["ㄆㄧㄢˊ ㄧ", "ㄍㄨㄟˋ", "ㄉㄚˋ", "ㄏㄠˇ"],
      hint: "Quel mot signifie « pas cher » ?",
    },
    {
      id: "u08-listen",
      type: "listen",
      question: "這個多少錢？太貴了，可以便宜一點嗎？",
      correctAnswer: "Combien ça coûte ? C'est trop cher, un peu moins cher ?",
      options: [
        "Combien ça coûte ? C'est trop cher, un peu moins cher ?",
        "Je veux acheter ce sac.",
        "Vous acceptez la carte ?",
        "Où est le 7-Eleven ?",
      ],
      hint: "zhège duōshǎo qián? tài guì le, kěyǐ piányí yìdiǎn ma?",
    },
  ],

  requiredScore: 0.6,
  prerequisites: ["unit-09"],
};
