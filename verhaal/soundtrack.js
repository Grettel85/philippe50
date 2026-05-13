/* ==========================================================================
   PHILIPPE 50 - SOUNDTRACK ENGINE (FINAL COMBINED VERSION)
   ========================================================================== */

// 1. DE DATABASE - Alle 27 hoofdstukken
const soundtrackData = [
    {
        id: 1,
        titel: "De Grammofoonspeler",
        videoA: "qaqIeK0jHSQ",
        videoB: "8R_cRtpbzCQ", 
        driveA: "https://drive.google.com/file/d/13ZUXXTrSHUe6lqgh40vw0MoICrxanlyv/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1va3RzQA-P54tQDffsl6Ka5fyZJm0rm7W/view?usp=drive_link",
        tekst: `I. 
[Verse 1]
Philippe zit in de zon, met een kopje koffie in zijn hand. 
Spotify klinkt zacht, In dit vertrouwde land. De naald die verschuift, Een glitch in de tijd. 
De kamer draait rond, Hij raakt zijn wereld kwijt.

[Verse 2] 
Les notes de Fernando, Résonnent dans le salon. Le journal sur la table, Parle d'une autre saison.
1976, une house de son passé. L'enfant porte son nom, La réalité est effacée.

[Chorus] 
Er is geen weg terug, Le temps a basculé. Philippe kijkt rond, In deze vreemde realité.
Een sprong in het duister, Een leven dat begint. Comment retourner, Pour se retrouver ?

[Outro] 
De radio kraakt... Hoe keert hij terug?`
    },

{
        id: 2,
        titel: "De Grote Mand van de Verwarring",
        videoA: "DEVv_LFmnzI",
        videoB: "", 
        driveB: "https://drive.google.com/file/d/169YDs4fVib5h-qXJnkCtSK92rUOAl2m-/view?usp=drive_link", 
        driveA: "https://drive.google.com/file/d/1nBW4AnLOFMXuMBMdqlsSUmdgbC3u0boB/view?usp=drive_link",
        tekst: `II.
[Verse 1]
Philippe wankelt door de deur,
De vloer is nu van riet.
Een hondenmand vol kussens,
Wat hij in de keuken ziet.
Agatha zoekt haar Gertje weer,
Haar trainingspak is paars.
De saxofoon rolt door de kamer,
Alles lijkt onbedaarlijk dwaars.

[Verse 2]
Le panier sent le biscuit,
La basse fait vibrer l'osier.
Philippe veut s'échapper,
Mais Agatha veut le garder.
Sa maman parlait d'horizon,
Pour retrouver son foyer.
Regarder loin devant soi,
Sans jamais se noyer.

[Chorus]
You can leave your hat on,
Philippe is de weg kwijt.
Kessel-Lo s'éloigne,
Dans cette étrange réalité.
Vijftig jaar van nu vandaan,
Een sprong in het duister.
Comment retourner,
Pour se retrouver ?

[Outro]
De wereld kantelt nu...
Hoe keert hij terug?`
    },

{
        id: 3,
        titel: "De Tuinman van de Nieuwe Wereld",
        videoA: "ncZsbZckZhQ",
        videoB: "", 
        driveA: "", 
        driveB: "",
        tekst: `III.
[Verse 1]
Lichtgevend mos vangt hem op,
De geur van ozon en jasmijn.
Louis Neefs zingt uit de bloemen,
Het moet een teken zijn.
Laat ons een bloem en wat gras,
De natuur zingt mee.
Philippe leidt de mensen,
Door de blauwe bloemenzee.

[Verse 2]
Juno attend dans le vent,
Sa robe respire le temps.
Les arbres de cristal,
S'élèvent vers les firmaments.
La forêt de Champlon,
Une force pure et guérie.
Toucher la terre with respect,
Au coeur de cette vie.

[Chorus]
Laat ons een bloem en gras,
Un peu de soleil nécessaire.
Neuf cents ans du futur,
Quelle étrange réalité.
De robots dansen in het rond,
Philippe vindt de vrede.
Comment retourner,
Pour se retrouver ?

[Outro]
De plaat begint te draaien...
Hoe keert hij terug?`
    },

{
        id: 4,
        titel: "De Zoete Smaak van Silex",
        videoA: "SXQZ8BIzcyQ",
        videoB: "xDjSAIXkvO4", 
        driveB: "https://drive.google.com/file/d/1jClRzkJ5GjjdnfWnSF9mbWsle22TyhTh/view?usp=drive_link", 
        driveA: "https://drive.google.com/file/d/1RW_lbtM6c2EBYu-yqUfms-1aY4rtum8C/view?usp=drive_link",
        tekst: `IV.
[Verse 1]
Mieke op een blok graniet,
Gekleed in ruw en leder.
De lucht ruikt naar zwavel,
De zon wordt almaar heter.
Geen suikerbakker te bekennen,
Alleen maar honing en steen.
Philippe bakt een oer-pannenkoek,
Voor hen twee alleen.

[Verse 2]
Le miel et les fruits des bois,
Une crêpe sur la pierre brûlante.
Elle rit dans la cuisine,
Une mémoire si touchante.
La montagne de vaisselle,
Un bonheur au quotidien.
Le goût du passé,
Pour retrouver son propre chemin.

[Chorus]
Yabba-dabba-doo oerkracht,
Le sol commence à se fendre.
Douze mille ans en arrière,
Quelle réalité.
Philippe grijpt de diepte,
Terwijl de grond hem verslindt.
Comment retourner,
Pour se retrouver ?

[Outro]
Vulkanische beving...
Hoe keert hij terug?`
    },

   {
        id: 5,
        titel: "Een Goudgele Terugkeer",
        videoA: "SGcdCG-qyt0",
        videoB: "aKYhTEA8eZs", 
        driveB: "https://drive.google.com/file/d/19JC4hkGiRCdXDz7eReAJT_L2t2fsdXHu/view?usp=drive_link", 
        driveA: "https://drive.google.com/file/d/1x3urzq3ok-_oQFbAiE_FpBIgiZ8MTJXG/view?usp=drive_link",
        tekst: `V.
[Verse 1]
Asfalt en felle neon,
McGyver prutst aan een motor.
Met een paperclip en kauwgom,
Maakt hij de hoop weer groter.
Velden van goud klinken zacht,
In de nevel van de stad.
Philippe zoekt de juiste trilling,
Die hij vroeger al eens had.

[Verse 2]
Champs d'or de Wezembeek,
Un lever de soleil doré.
La fréquence de la musique,
Pour enfin tout réparer.
Le ruban noir et l'antenne,
Pour briser toutes les chaînes.
Un adieu dans le parking,
Pour apaiser ses peines.

[Chorus]
Fields of gold klinken luid,
La bande magnétique tourne.
Trente-six ans du futur,
Quelle réalité.
Een blauwe lichtflits tilt hem op,
Door de ruit van de tijd.
Comment retourner,
Pour se retrouver ?

[Outro]
Succes Philippe...
Hoe keert hij terug?`
    },
   
{
        id: 6,
        titel: "De Vloek van de Farao",
        videoA: "JNGnXhM2OTA",
        videoB: "sBI-SoOX-Gw", 
        driveB: "https://drive.google.com/file/d/1sNOtMhiWgz8TDWvLG7B3ZNBHi0PLZxoR/view?usp=drive_link", 
        driveA: "https://drive.google.com/file/d/1JI_7RP0BkiuOoaK--JkpsKxj252UPBat/view?usp=drive_link",
        tekst: `VI.
[Verse 1]
Woestijnzand onder zijn voeten,
De geur van mirre en wierook.
Annette grijpt zijn arm nu vast,
Door de offer-vuur-rook.
De hogepriesters roepen luid,
Anubis toont zijn toorn.
Philippe ziet een gouden masker,
In dit land verloren en herboren.

[Verse 2]
Le pharaon sur son trône,
Une vision de frites dorées.
Le sel et les pommes de terre,
Pour la paix retrouvée.
La magie du ruban noir,
Danse sur le mur du temple.
Une bouffée de lucidité,
Dont le futur est l'exemple.

[Chorus]
L'Orient résonne de loin,
Le couteau brille dans l'air.
Trois mille ans en arrière,
Quelle réalité.
Philippe springt in het duister,
Weg van de mystieke chaos.
Comment retourner,
Pour se retrouver?

[Outro]
De hitte aan zijn hielen...
Hoe keert hij terug?`
    },
   
{
        id: 7,
        titel: "Het Dansende Slagveld",
        videoA: "pY2xsL9iCxs",
        videoB: "iAClgME823E", 
        driveA: "https://drive.google.com/file/d/1pRTmLTRz7x1aZFIJ-Zb8DEaLDWZCb-fo/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/19GIcz9ErVLsdmIQdFKxLVfV3sxATDX-G/view?usp=drive_link",
        tekst: `VII.
[Verse 1]
Modder en maliënkolders,
Ridders scherpen hun zwaard.
Camelot Song klinkt absurd,
Is dit een gevecht wel waard?
Philippe zingt uit volle borst,
Gooi de kaas en gooi het brood.
Een picknick tussen de pijlen,
Stopt de oorlog en de nood.

[Verse 2]
Mamy-Dany sur la nappe,
Un pique-nique dans le parc.
Le bonheur de sa maman,
Brise les flèches et les arcs.
L'absurdité collective,
Fait danser tous les soldats.
L'ardeur au combat s'évapore,
Dans ce joyeux fracas.

[Chorus]
Dans op de maat Philippe,
L'absurdité nous sauve.
Huit cents ans en arrière,
Quelle réalité.
Acht eeuwen van de toekomst,
In een blauwe lichtflits.
Comment retourner,
Pour se retrouver ?

[Outro]
De kar vat vlam...
Hoe keert hij terug?`
    },
   
 {
        id: 8,
        titel: "De Dubbele Echo van Vrijheid",
        videoA: "faLMliGnf54",
        videoB: "t6IQJXNkT5o", 
        driveA: "https://drive.google.com/file/d/1T800aCNoeXMHGNfiUPdvKxYff8l43pQU/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1PuNAsIWXVkxtyib7lhFri512QpWMxFyJ/view?usp=drive_link",
        tekst: `VIII.
[Verse 1]
Philippe valt door de rook,
Op een vloer van boenwas en hout.
Oranje bloemen op de muur,
Een wereld die hij nog herkent en vertrouwt.
Ti Mousse staat te wachten,
De ketenen zijn eindelijk door.
Een plaat op de inductie,
Maar een oude stem klinkt in zijn oor.

[Verse 2]
La brume remplace les murs,
Les poignées s'effacent.
Philippe bondit comme une gazelle,
Défiant l'océan.
Sur le pont du Sea You,
Il capture les émotions.
Son chronomètre devient caméra,
Figeant les époques.

[Chorus]
Don't stop me now,
De vrijheid roept zijn naam.
Une étoile filante,
Dans deze vreemde realité.
Philippe houdt Ti Mousse stevig vast,
Terwijl de kamer flikkert.
Comment retourner,
Pour se retrouver ?

[Outro]
De kamer draait rond...
Philippe bevriest de tijd...
Hoe keert hij terug?`
    },
   
 {
        id: 9,
        titel: "De Mexicaanse Dribbel van het Lot",
        videoA: "NjRXvVB76eo",
        videoB: "XrcAy1IodmU", 
        driveA: "https://drive.google.com/file/d/1AtfLTauwg-JxdTOkXA6S1dcxgL2dFHoA/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1jaIMwgYlSkw_gMqUcygtbfvePO7DoXk-/view?usp=drive_link",
        tekst: `IX.
[Verse 1]
Philippe landt in het stof,
De geur van chili en gras.
Rode en blauwe shirts,
Mexico viert feest met veel tamtam en pas.
Takamatsu grijpt zijn arm,
Sombrero groot en een brede lach.
Maar het ticket is weg,
Paniek op deze grote dag.

[Verse 2]
La chaleur humide de Mexico,
Walk This Way dans les oreilles.
Une vision de Louvain,
Un disque volant onder de zon.
La courbe du frisbee,
Le billet caché dans la casquette.
Philippe sort le papier froissé,
Juste avant la grande fête.

[Chorus]
Dribbel van het lot,
De baslijn pompt door de stad.
Le stade Aztèque vibre,
Dans deze vreemde realité.
Een blauwe flits verschijnt,
Die hem plotseling verblindt.
Comment retourner,
Pour se retrouver ?

[Outro]
Maradona aan de bal...
Philippe wordt weer weggezogen...
Hoe keert hij terug?`
    },
   
{
        id: 10,
        titel: "De Dans van de Klaprozen",
        videoA: "bX_6PugRcVY",
        videoB: "DLREKOEhWXA", 
        driveB: "https://drive.google.com/file/d/1QyrAstRbc2IWO52EuPq_D4sh-INPOIDr/view?usp=drive_link", 
        driveA: "https://drive.google.com/file/d/1YeJo7GpXyofg2wOqyqfofMp6q13WCV3_/view?usp=drive_link",
        tekst: `X.
[Verse 1]
Philippe opent zijn ogen,
Een rode gloed die zachtjes wiegt.
Geen beton maar klaprozen,
Waar de zomerbries door vliegt.
Babs staart naar de horizon,
Haar wilde krullen in de wind.
Een melodie die alles kleurt,
Die elke bloem aan elkaar bindt.

[Verse 2]
L'air est lourd de parfums,
Le vent murmure ses ordres secrets.
Philippe erre dans le rouge,
S'enfonçant dans ce champ sacré.
Soudain la vision d'un homme,
Un éclair de waarheid pure.
Il brise enfin l'enchantement,
Pour quitter cette aventure.

[Chorus]
Kijk hoe mooi de dag begint,
De wereld rimpelt als water.
La mer de fleurs rouges,
Dans deze vreemde realité.
Philippe grijpt de hand van Babs,
Voor het licht hen verslindt.
Comment retourner,
Pour se retrouver ?

[Outro]
De horizon valt weg...
De bloemenzee verdwijnt...
Hoe keert hij terug?`
    },

   {
        id: 11,
        titel: "De Kracht van de Kalk",
        videoA: "WrrhrYaORp0",
        videoB: "O4PIqPzORXk", 
        driveB: "https://drive.google.com/file/d/1LL_Pl7EevR_ovK4xGfreCF8A2ia9ySoW/view?usp=drive_link", 
        driveA: "https://drive.google.com/file/d/1YwV_Y8NSpnVvWEfWFuWYE2JN5RDMUlV8/view?usp=drive_link",
        tekst: `XI.
[Verse 1]
Philippe landt op kasseien,
In de mist en de rook.
Kolenas in de lucht,
De ochtend is grauw en koud ook.
Han zit op een krat,
Zijn knie doet hem pijn.
Een souvenir van de oorlog,
Hij mag hier niet zijn.

[Verse 2]
La mandoline vibre,
Un écho du futur lointain.
L'odeur de la chaux,
Le poids du sac dans sa main.
Philippe saisit le marteau,
Avec la force de sa mémoire.
Il aide son ami Han,
À changer le cours de l'histoire.

[Chorus]
Losing my religion,
Tussen de muren van steen.
Une vie de travail,
Dans deze vreemde realité.
Philippe grijpt de hand van Han,
Terwijl de grond weer beeft.
Comment retourner,
Pour se retrouver ?

[Outro]
Kalk op de schoenen...
De mist lost op...
Hoe keert hij terug?`
    },
   
{
        id: 12,
        titel: "Het Ritmische Robot-Relaas",
        videoA: "elS414g4TuY",
        videoB: "c42KEB8UOhQ", 
        driveA: "https://drive.google.com/file/d/1G3RJrXIuf185zzN92qscZ_L9XlMuieQd/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1ZgRohSJTAoUhWppct8eBaGahcYhJoxAU/view?usp=drive_link",
        tekst: `XII.
[Verse 1]
Philippe zingt de woorden,
Een magisch kabaal.
Supercalifragilistic,
Een robot-verhaal.
Chroom en neon,
Een ijzeren macht.
Poppins fluistert zacht,
In de nacht.

[Verse 2]
Le rythme van de garage,
De pingpongbal.
Les machines s'arrêtent,
Le calcul est long.
Des étincelles bleues,
Un chaos digital.
Philippe saute dans le vide,
Un saut final.

[Chorus]
Supercalifragilisticexpialidocious,
De robots zijn verward.
Les circuits surchauffent,
Dans deze vreemde realité.
Een blauw licht in de schacht,
Een sprong in het diepe.
Comment retourner,
Pour se retrouver ?

[Outro]
De wereld kraakt...
Philippe zingt door...
Hoe keert hij terug?`
    },

   
  {
        id: 13,
        titel: "De Graal van het Geduld",
        videoA: "3AhvNiQyrgE",
        videoB: "qzyUiKXovQI", 
        driveA: "https://drive.google.com/file/d/1Hr9oDZH5dhhp3F0wY8ikLxNLDolKBin9/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1k4Guj2id66Ee1wLVCJ2Mx2PRrGoo5Kgl/view?usp=drive_link",
        tekst: `XIII.
[Verse 1]
Arthur eist de Graal,
In de stenen hal.
Merlijn kijkt toe,
Voor de grote val.
Herman Van Veen zingt,
Van toveren en rust.
Philippe wacht geduldig,
Van zijn kracht bewust.

[Verse 2]
La cave de sa jeunesse,
Le Commodore 64.
Le code se charge,
Sur le vieux théâtre.
Charger la lumière,
Au milieu de la salle.
Le sacré n'est pas cherché,
C'est digital.

[Chorus]
Als ik kon toveren,
De pixels worden goud.
Le Graal de la patience,
Dans deze vreemde realité.
De kelderherinnering trekt hem,
Door het zwarte gat.
Comment retourner,
Pour se retrouver ?

[Outro]
Het beeld wordt ruis...
De vloer lost op...
Hoe keert hij terug?`
    },

{
        id: 14,
        titel: "De Digitale Kelk van Camelot",
videoA: "RyO3V9Fe92c",
        videoB: "IF2uYxNAwcg",
        driveB: "https://drive.google.com/file/d/1Q2m0GTdBMRgME6I2TeZ91T3vS1I6YMvD/view?usp=drive_link", 
        driveA: "https://drive.google.com/file/d/1WMMVoWnjeEVuz6b6VbPPLfYsbkLVGy4t/view?usp=drive_link",
        tekst: `XIV.
[Verse 1]
Camelot smelt weg,
In een purperen lucht.
Merlijn bij de put,
Philippe is op de vlucht.
De ridders hameren,
Arthur wacht op pracht.
De Graal is een glitch,
Verborgen in de nacht.

[Verse 2]
Charger le futur,
Dans le bruit statique.
Les couleurs reviennent,
Un moment magique.
Load Error verschijnt,
In letters van vuur.
De magneet trekt hem mee,
Voorbij de kasteelmuur.

[Chorus]
Load Error in Camelot,
De pixels spatten uiteen.
La mer de bruit numérique,
Dans deze vreemde realité.
Philippe vliegt door de muur,
Van vloeibaar glas.
Comment retourner,
Pour se retrouver ?

[Outro]
Neonlicht flitst...
Camelot verdwijnt...
Hoe keert hij terug?`
    },
   
{
        id: 15,
        titel: "De Plank van de Profeet",
        videoA: "O4AAG0Sa6r8",
        videoB: "CMjXqQJcmb0", 
        driveA: "https://drive.google.com/file/d/1ggkOcoW6udBTEzF46tcxWwjmCVSk3KJD/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1WL_vHr_fxUDzClhiaPt8z833GUrAsbkx/view?usp=drive_link",
        tekst: `XV.
[Verse 1]
Oranje linoleum,
De geur van tabak en brood.
Mary en Claude kijken,
Philippe is in nood.
Geen wielen onder de voeten,
Het skateboard nog een droom.
Hij timmert aan een plank,
Aan de rand van de stroom.

[Verse 2]
Money money money,
Résonne dans la rue.
Bon-Papa danse de joie,
La nouvelle est connue.
Un petit Philippe est né,
La joie analogique.
Il s'élance sur l'asphalte,
Un moment héroïque.

[Chorus]
Money money money,
De plank wiebelt over de weg.
Le monde s'effiloche,
Dans deze vreemde realité.
Kleurrijke slierten trekken hem,
Weg van de stoep.
Comment retourner,
Pour se retrouver ?

[Outro]
De naald krast...
De cassetteband rafelt...
Hoe keert hij terug?`
    },

   {
        id: 16,
        titel: "Het Dilemma van de Discowolken",
videoA: "DHhzgXhaMZo", 
        videoB: "F3Ixk8SnG_0", 
        driveA: "https://drive.google.com/file/d/1BpbCAlpuh9Af0E_yu_CW6Ll6fNOAZqjp/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/10OI5JnUGnD6Is7JnXROAUveFPYk655Hg/view?usp=drive_link",
        tekst: `XVI.
[Verse 1]
Parelmoeren wolken,
Een lounge in de lucht.
Choisy in het wit,
Een hemelse vlucht.
Kies je reïncarnatie,
De kristallen bol wacht.
Maar Philippe wilt terug,
Naar de eigen tijdmacht.

[Verse 2]
Paradis de Santa,
La guitare espagnole.
La mousse au chocolat,
Comme une parabole.
Battre les blancs en neige,
Avec légèreté.
Il tournoie comme un fouet,
Pour sa liberté.

[Chorus]
Paradis de Santa,
Philippe draait in het rond.
Un cocon de soie,
Dans deze vreemde realité.
Hij trapt tegen de zuil,
Het paradijs trilt.
Comment retourner,
Pour se retrouver ?

[Outro]
De beat dooft uit...
Het gat in de wolken...
Hoe keert hij terug?`
    },
   
 {
        id: 17,
        titel: "De Meetfout van de Meesterklusser",
videoA: "fm3szde9gEo", 
        videoB: "YCQgEFqMsQ8", 
        driveA: "https://drive.google.com/file/d/1LCceEZ5RgXvjAmG-q09SKA6pzn6PLK1x/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1LkCJ9gAmMlXd2umOJskLcFQkXs-3B5GF/view?usp=drive_link",
        tekst: `XVII.
[Verse 1]
Philippe valt door het glas,
In het schaafsel en het hout.
In een schuur in Haillot,
Waar Bobo aan de toekomst bouwt.
Een trap die wiebelt,
Balken uit het lood.
Claude François zingt van een hamer,
In de strijd tegen de nood.

[Verse 2]
Si j'avais un marteau,
Les mesures seraient perfectas.
Une vision du futur,
Une rénovation honnête.
Philippe lève la masse,
Il connaît enfin le secret.
Un coup sur le pivot,
Pour réparer tous les regrets.

[Chorus]
Si j'avais un marteau,
Philippe slaat de splinters rond.
Le bois tremble de peur,
Dans deze vreemde realité.
Blauwe vonken spatten op,
De vloer wordt rood en heet.
Comment retourner,
Pour se retrouver ?

[Outro]
Een gat onder de bank...
Philippe valt opnieuw...
Hoe keert hij terug?`
    },
{
        id: 18,
        titel: "De Zwevende Bevrijder van Normandië",
videoA: "XIRe9tX_R3Y",
        videoB: "99e0WcbjqOE",
        driveA: "https://drive.google.com/file/d/1HD2cra62Q4Pb0beuJzsE26Av7dqvWd-H/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1oa6x0AQxb5uZHE2bcfdmDh34eXo5xGO2/view?usp=drive_link",
        tekst: `XVIII.
[Verse 1]
Philippe bungelt aan de riemen,
In een eik aan de Franse kust.
Zout water en verbrand rubber,
De nacht biedt hem geen rust.
Jenny vecht tegen de koorden,
De lucht trilt van het geweld.
Een klaaglijk lied over eenzaamheid,
Wordt door de wind verteld.

[Verse 2]
I am so lonely,
Chante la voix dans le noir.
Le poids du corps bascule,
Au creux du désespoir.
Un mouvement de skate,
Le secret de l'équilibre.
Philippe coupe les liens de soie,
Pour redevenir libre.

[Chorus]
I am so lonely,
Ze vallen in de modder neer.
La lueur d'un projecteur,
Dans deze vreemde realité.
Philippe sleurt Jenny mee,
In het gat bij de wortels.
Comment retourner,
Pour se retrouver ?

[Outro]
Een cirkel die gloeit...
De geur van benzine...
Hoe keert hij terug?`
    },
   
{
        id: 19,
        titel: "De Dolgedraaide Versnelling",
        videoA: "KAeGK8gICgw",
        videoB: "1l-Dl3ZjRMI", 
        driveA: "https://drive.google.com/file/d/1DMxpGtZHUcYg85Ki4lPOKzRCMGyjBjnl/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1KllehQ78KOhkRvnfIxVK5CZ9yevDN1ly/view?usp=drive_link",
        tekst: `XIX.
[Verse 1]
Philippe landt op oranje rib,
In een roes van muskus en rook.
Tempus schreeuwt met grote snor,
Maar zijn stem versnelt nu ook.
Lichten flitsen als stroboscopen,
De wereld draait op topsnelheid.
Freddie zingt zijn profetie,
Niemand stopt deze hectische tijd.

[Verse 2]
Arrête de respirer,
Murmure l'écho du passé.
Le prédateur s'éloigne,
Quand le souffle est glacé.
Le rythme s'apaise enfin,
De muziek wordt diep en traag.
Philippe zoekt de jukebox hendel,
Voor de vloer hem weer verzwelgt.

[Chorus]
Don't stop me now,
De tijd raast door de kamer.
Le monde s'accélère,
Dans deze vreemde realité.
Philippe trekt de jukebox hendel,
Voor de vloer hem weer verzwelgt.
Comment retourner,
Pour se retrouver ?

[Outro]
Een witte flits...
De hendel klikt...
Hoe keert hij terug?`
    },

{
        id: 20,
        titel: "Het Gezang van het Ijzer",
videoA: "vKtoJA66XeY", 
        videoB: "2lbMxpERA3U", 
        driveA: "https://drive.google.com/file/d/1W9-RmThxS3Y6W5y9NdtkwTXDNzpjjBSv/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1ntaHc4zw5R_isKoRTAb7vFFpjoshfBSy/view?usp=drive_link",
        tekst: `XX.
[Verse 1]
Philippe landt in mos en slijk,
De mist hangt kil en zwaar.
Leyrah trekt hem overeind,
Gevaar loert hier en daar.
Ameno, dore,
Het gezang weerklinkt door elk blad.
Ridders met hun ijzeren vuist,
Blokkeren nu het pad.

[Verse 2]
Un briquet dans la main,
Comme une flamme sacrée.
Il prêche un faux dialecte,
Pour les déconcerter.
Le souvenir des oncles,
Dans le fracas des jours.
Détourner leur attention,
Pour trouver le secours.

[Chorus]
Ameno dore,
Het ijzer zingt zijn lied.
La magie du briquet,
Dans deze vreemde realité.
Philippe springt op het altaar,
Een blauwe vlam die brandt.
Comment retourner,
Pour se retrouver ?

[Outro]
Het zwaard schampt de stof... L'épée frôle la veste...
Het altaar gloeit op... L'autel s'embrase...
Hoe keert hij terug? Comment retourner ?`
    },   

{
        id: 21,
        titel: "De Dans van het Heilige Licht",
videoA: "TtNPs7IEpNc", 
        videoB: "G-TtsfZbkJg", 
        driveA: "https://drive.google.com/file/d/114gij8af0ftifH2Z08_Qe7nZSjB0eXG3/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1QEm8FJ-Uzept20tChDkb1HX4gvoFDMTB/view?usp=drive_link",
        tekst: `XXI.
[Verse 1]
Philippe landt in het natte loof,
De geur van wierook en van leer.
De nevel spuwt zijn ridders uit,
Hun zwaarden kletteren telkens weer.
Ameno dore weerklinkt luid,
Een koor van schimmen in het bos.
De leider brult zijn vonnis uit:
"Geen van de twee komt hier nog los!"

[Verse 2]
Le souvenir des cris d'enfants,
Des oncles dans le brouhaha.
Philippe sort ses feux d'argent,
Pour stopper ce combat.
Un flash de lumière électrique,
Un briquet dans l'air froid.
Le latin inventé résonne,
Les guerriers perdent leur foi.

[Chorus]
Ameno dore,
Het licht verblindt hun ogen.
La faille bleue brille,
Dans deze vreemde realité.
Philippe grijpt de hand van Leyrah,
Voor de speer hem doorboort.
Comment retourner,
Pour se retrouver ?

[Outro]
De blauwe leegte roept... Le vide bleu l'appelle...
De speerpunt snijdt de stof... La lance déchire le tissu...
Hoe keert hij terug? Comment retourner ?`
    },

   {
        id: 22,
        titel: "Het Grote Kat-en-Muis Spel",
        videoA: "",
        videoB: "", 
        driveA: "https://drive.google.com/file/d/1hICcP1wEjIHnKp-Mv6G4R1fGHzCqRCqd/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1Cv3tq07D0viytQGp8nft1jmiRGAdYIus/view?usp=drive_link",
        tekst: `XXII.
[Verse 1]
Philippe landt op fluweel,
In een wereld van melk en vis.
Miaoustouflante roept hem,
Waar niets meer normaal nu is.
Tygroo met zijn litteken,
Droomt van een menselijk maal.
Gouden harnassen glanzen,
In dit vreemde kattenverhaal.

[Verse 2]
Tout le monde veut devenir un Cat,
La trompette résonne.
Philippe danse comme un fauve,
Pour sauver sa personage.
Un flash du futur lointain,
Un petit garçon de neufs ans.
Le ronronnement d'un frigo,
Pour charmer les méchants.

[Chorus]
Tout le monde veut devenir un Cat,
De staarten slaan de maat.
La reine a faim,
Dans deze vreemde realité.
Philippe duikt in de zilveren brij,
Voor de klauw hem echt raakt.
Comment retourner,
Pour se retrouver ?

[Outro]
De klauwen zijn gescherpt... Les griffes sont acérées...
De zilveren glinstering lokt... Le reflet d'argent attire...
Hoe keert hij terug? Comment retourner ?`
    },

   {
        id: 23,
        titel: "De Toverkracht van het Varkenssnuitje",
        videoA: "",
        videoB: "", 
        driveA: "https://drive.google.com/file/d/1B8jLPZ_iAa-338tuxgBMm5iMRknZsMPI/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1DxvvOhBfvBRxd_S1nINAnwgu4_GQPyRo/view?usp=drive_link",
        tekst: `XXIII.
[Verse 1]
De voerbak verdwijnt,
Philippe valt door de steen.
In een toren vol mos,
Met Astrid alleen.
De heks roert de ketel,
Een paarse gloed schijnt.
Salagadoola,
Tot je mensheid verdwijnt.

[Verse 2]
Des oreilles de cochon,
Un groin qui se dessine.
Mais le flash de familie,
Le sauve de la cuisine.
Une poignée d'herbes,
Jetée dans le feu.
Des paillettes roses,
Sous un ciel de dieu.

[Chorus]
Bibbidi-Bobbidi-Boo,
De toverkracht ontploft.
La magie s'effondre,
Dans deze vreemde realité.
Philippe grijpt de hand van Astrid,
In de barst van de tijd.
Comment retourner,
Pour se retrouver ?

[Outro]
Het varkenssnuitje krimpt... Le groin rétrécit...
De blauwe draaikolk trekt... Le tourbillon bleu les emporte...
Hoe keert hij terug? Comment retourner ?`
    },

   {
        id: 24,
        titel: "De Onvolmaakte Muze",
        videoA: "JDGwBNj7SIg",
        videoB: "JDGwBNj7SIg", 
        driveB: "https://drive.google.com/file/d/1WP1N_-92WmEYV4fsdB12tTERXFTSTAuZ/view?usp=drive_link", 
        driveA: "https://drive.google.com/file/d/1E8HWa3w8Kip5e7NW4377psbe3DuftV83/view?usp=drive_link",
        tekst: `XXIV.
[Verse 1]
Linnen en verf,
in een kamer vol licht
De maestro zoekt schoonheid,
een goddelijk gezicht
Philippe houdt zijn trui aan,
de wol als een schild
Terwijl de jetset van vroeger,
naar feesten toe hilt

[Verse 2]
Run, run, run,
ils courent après le vent
Philippe reste assis,
un simple figurant
Un corps parfait,
une âme sans défaut ?
Il préfère la glace,
et le trajet au chaud

[Chorus]
What the hell am I doing here?
Ik hoor hier niet thuis
Je ne suis pas spécial,
in dit gouden gedruis
De naald schiet uit de groef,
een snerpend geluid
Comment retourner
pour se retrouver ?

[Outro]
De gouden flits verblindt... l'éclat doré aveugle...
De trui blijft aan... le pull reste en place...
Hoe keert hij terug? Comment retourner ?`
    },

{
        id: 25,
        titel: "De Gejaagde Toekomst",
        videoA: "RKzqNF6r6iE",
        videoB: "IucMWc3XapQ", 
        driveB: "https://drive.google.com/file/d/1nc8CFm5q9T2jythkGf2y0Ntg3doMycUz/view?usp=drive_link", 
        driveA: "https://drive.google.com/file/d/1duSZkQOl-zx0w0Xb0iX84aQ9Za2qluyf/view?usp=drive_link",
        tekst: `XXV.
[Verse 1]
Opzij, opzij, opzij,
de klok tikt naar de nul
Neonlichten flitsen,
door al dit tijdsgebrul
Sielou trekt aan zijn arm,
de sjaal wordt nu een lijn
Vissen naar de sleutel,
zoals het op de kermis kon zijn

[Verse 2]
Pousse-toi, pousse-toi,
pousse-toi, le futur est pressé
Philippe cherche le calme,
dans son coeur angoissé
La clé remonte du puits,
comme un lot de la foire
La porte s'ouvre enfin,
pour changer leur histoire

[Chorus]
We hebben een ongelooflijke haast,
le temps nous poursuit
Une cérémonie de lumière,
dans deze vreemde realité
De naald slaat op hol,
in het magnetische vuur
Comment retourner
pour se retrouver ?

[Outro]
De vortex vlamt op... le vortex s'enflamme...
De toekomst lost op... le futur se dissout...
Hoe keert hij terug? Comment retourner ?`
    },   

   {
        id: 26,
        titel: "De Bitterzoete Slok",
        videoA: "UShQ6n_ihOo",
        videoB: "omb2Hpz9p6Q", 
        driveB: "https://drive.google.com/file/d/1EL5if1c8vCqERGrSdv0yEGjdi5Dp11VL/view?usp=drive_link", 
        driveA: "https://drive.google.com/file/d/1JpYNH7WaxLVRiE_wHN6uR2mOBaTcVTBd/view?usp=drive_link",
        tekst: `XXVI.
[Verse 1]
Havermelk en neon,
Sophia lacht hem toe
Drink de thee van sterrenstof,
want de naald is moe
Pommelien zingt luid
dat ze nu echt moet gaan
Terwijl de dampen van de beker
om zijn oren slaan

[Verse 2]
Un souvenir de Bruxelles,
une tasse de magie
Philippe boit le liquide,
pour sauver sa vie
La force monte en lui,
des doigts jusqu'au coeur
Le gramophone bourdonne,
apaisant sa peur

[Chorus]
Ik moet gaan, echt nu gaan,
de tijd staat niet stil
Le monde tourbillonne,
tegen Philippe zijn wil
Eén jaar van de toekomst,
de laatste barst verschijnt
Comment retourner
pour se retrouver ?

[Outro]
De stoel valt weg... la chaise s'effondre...
Tijd wordt vloeibaar... le temps devient liquide...
Hoe keert hij terug? Comment retourner ?`
    },
   
{
        id: 27,
        titel: "Het Sterrenstof voorbij",
        videoA: "-VFyfoqkN38",
        videoB: "nrTwZX2hTPE", 
        driveA: "https://drive.google.com/file/d/1mj_gaRaUqiMQy-ZxSfQ9nl5uViW5_TJ3/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1TIBoz2Diu5vcSCxN8SCIuF8WoZ2ictNz/view?usp=drive_link",
        tekst: `XXVII.
[Verse 1]
De naald sloeg toe, een klap in de nacht
Gevallen in de leegte, waar geen ster meer op me wacht
Geen ticket in m'n zakken, geen weg meer uit dit dal
Ik roep maar niemand antwoordt, in dit zwarte gat van stal
De eenzaamheid is zwaarder dan elk avontuur voorheen
Zonder hen rondom mij, voel ik me zo alleen

[Verse 2]
Le froid s'installe, le silence est si lourd
Plus de rires, plus de cris, plus de secours
Mais dans le noir, un souvenir vient briller
Un thé magique, un rire, pour ne pas m'oublier
Les visages aimés deviennent des étincelles
La nuit s'illumine, la vie redevient belle

[Pre-Chorus]
Een bries langs m'n wang, een licht aan de horizon
Un souffle de vent, là où tout a commencé
De cirkel wordt groter, ik ren nu voor m'n leven
La porte est ouverte, je n'ai plus d'hésitation !

[Chorus]
Ik spring over het ijzer, door de poort van de tijd
Je franchis la frontière, loin de l'obscurité
Geen droom meer, geen chaos, maar warmte en licht
Un nouveau départ, un sourire sur mon visage
Eindelijk thuis, le voyage est fini !

[Bridge]
Hoofdpijn verdwijnt in de geur van brood en kaas
Le parfum des fleurs, la fin de l'angoisse
De deurbel klinkt luid, ik gooi de kamer open
Une explosion de couleurs, ce qu'on n'osait plus espérer !

[Outro]
Gelukkige verjaardag! Joyeux anniversaire !
Een hamer in m'n zak, een snuitje in de tuin
Des regards complices, un mystère souverain
Adem diep in, de kaarsjes wachten nu...
Respire fort, souffle tout ce que tu as...
Hieperdepiep... HOERA!`
    },

{
        id: "bonus", // Of een ander ID naar keuze voor het themanummer
        titel: "Philippe50",
        videoA: "TYupwx7faqQ",
        videoB: "", 
        driveA: "https://drive.google.com/file/d/1CWogamVSqTUfFiPDDU4--tFEd1IV--s2/view?usp=drive_link", 
        driveB: "",
        tekst: `[Verse 1]
Je dacht dat je gewoon een jaartje ouder werd vandaag
Maar je vloog door de decennia, dat was de grote vraag
Van disco-beats in de zon naar ridders in het slijk
Je bouwde met een hamer aan een heel bijzonder rijk
Je skipte door de tijd met een naald in de groef
Soms was je een muze, soms een dapper boef!

[Verse 2]
Tu as couru partout, défiant tous les dangers
Un voyageur de l'ombre, un héros étranger
Des plateformes du futur aux ateliers d'antan
Tu as gardé ton âme, défiant le fil du temps
Le pull en laine aux épaules, tu n'as jamais cédé
Contre les vents du sort, tu as su résister !

[Chorus]
Dus zing opzij, opzij, de tijd die staat nu stil
Vandaag gebeurt er alles wat de jarige maar wil!
Pousse-toi, le futur peut bien nous attendre
Aujourd'hui c'est ta fête, il n'y a rien à craindre !
Gelukkige verjaardag, de cirkel is nu rond
Joyeux anniversaire, le coeur vagabond !

[Verse 3]
Je dronk een kopje thee dat naar sterrenstof rook
Je ontsnapte aan de heks en de paarse toverrook
Je dribbelde als een meester op een veld van gras
En ontdekte dat de vrijheid in je eigen zakken was
Van skateboard op de weg tot een schip op de oceaan
Je bent door alle barsten van de tijd gegaan!

[Verse 4]
La clé montait du puits comme un lot de la foire
Tu as ouvert la porte pour changer ton histoire
Tu as dansé avec les chats au milieu du bal
Fuyant la boue d'argent, ce piège de métal
De l'écume des vagues jusqu'au ciel étoilé
C'est ici, dans ton jardin, que tu t'es retrouvé !

[Bridge]
En ook al was het donker, ook al was je even kwijt
Même dans le noir total, loin de la réalité
Er brandde altijd ergens een lichtje in de tijd
Une flamme pour te ramener, vers cette belle journée.

[Outro]
Blaas de kaarsjes uit, de reis is nu gedaan
Souffle les bougies, tu peux enfin t'arrêter
Hieperdepiep... HOURRA!`
    },
   
];

// 2. TOEGANGSCONTROLE
function checkAccess() {
    const access = sessionStorage.getItem('soundtrack_access');
    if (access === 'granted') {
        renderSoundtracks();
    } else {
        const password = prompt("Voer het wachtwoord in om de muziek te beluisteren:", "");
        if (password && password.toLowerCase() === "philippe50") {
            sessionStorage.setItem('soundtrack_access', 'granted');
            renderSoundtracks();
        } else if (password !== null) {
            alert("Onjuist wachtwoord. Je wordt teruggeleid.");
            window.location.href = "../index.html";
        }
    }
}

// 3. DE GENERATOR
function renderSoundtracks() {
    const container = document.getElementById('soundtrack-list');
    if (!container) return;

    let htmlGerecht = ""; 
    soundtrackData.forEach(item => {
        // IF-CHECK: Voor de bonustrack
        const displayTitel = (item.id === 'bonus') ? item.titel : `Hoofdstuk ${item.id}: ${item.titel}`;

        // Hulpmiddel om de Lite Embed te genereren
        const createVideoHTML = (videoId, driveLink, label) => {
    if (!videoId) return '';
    return `
        <div>
            <div class="video-container" 
                 style="background-image: url('https://img.youtube.com/vi/${videoId}/hqdefault.jpg'); cursor: pointer;"
                 onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/${videoId}?autoplay=1\' allowfullscreen style=\'position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;\'></iframe>'">
                
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.2); pointer-events: none;">
                    <div style="font-size: 50px; color: white; background: rgba(255, 0, 222, 0.8); border-radius: 50%; width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(255, 0, 222, 0.5);">
                        ▶
                    </div>
                </div>
            </div>
            ${driveLink ? `<a href="${driveLink}" target="_blank" class="download-link">💾 Download track (${label})</a>` : ''}
        </div>`;
};

        const videoA_html = createVideoHTML(item.videoA, item.driveA, "A-Kant");
        const videoB_html = createVideoHTML(item.videoB, item.driveB, "B-Kant");

        htmlGerecht += `
            <section class="story-soundtrack">
                <h2 style="text-transform: uppercase;">${displayTitel}</h2>
                <div class="soundtrack-grid">
                    ${videoA_html}
                    ${videoB_html}
                </div>
                <button onclick="toggleLyrics('lyrics-h${item.id}')" class="submit-btn-alt" style="margin-top: 20px; width: auto; padding: 8px 20px;">
                    📜 Toon Liedjestekst
                </button>
                <div id="lyrics-h${item.id}" class="lyrics-section">
                    <p style="white-space: pre-wrap;">${item.tekst}</p>
                </div>
            </section>
        `;
    });
    container.innerHTML = htmlGerecht;
}
// 4. INTERACTIE (Met scroll-fix van jouw origineel)
function toggleLyrics(id) {
    const el = document.getElementById(id);
    if (el) {
        const isOpen = el.style.display === "block";
        el.style.display = isOpen ? "none" : "block";
        
        if (!isOpen) {
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

// 5. START
document.addEventListener('DOMContentLoaded', checkAccess);
