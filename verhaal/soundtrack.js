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
        videoB: "aYGEfj6YZNg", 
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
        videoB: "ncZsbZckZhQ", 
        driveA: "https://drive.google.com/file/d/1lb4H6Y0Jy5pNthuuhe6Uprrzgv0320mX/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/14FimBWngP8kErw03dotgX-TugEXOEuWH/view?usp=drive_link",
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
        driveA: "https://drive.google.com/file/d/1sNOtMhiWgz8TDWvLG7B3ZNBHi0PLZxoR/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1JI_7RP0BkiuOoaK--JkpsKxj252UPBat/view?usp=drive_link",
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
        driveA: "https://drive.google.com/file/d/1QyrAstRbc2IWO52EuPq_D4sh-INPOIDr/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/1YeJo7GpXyofg2wOqyqfofMp6q13WCV3_/view?usp=drive_link",
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

   
    { id: 11, titel: "Hoofdstuk 11", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 12, titel: "Hoofdstuk 12", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 13, titel: "Hoofdstuk 13", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 14, titel: "Hoofdstuk 14", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 15, titel: "Hoofdstuk 15", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 16, titel: "Hoofdstuk 16", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 17, titel: "Hoofdstuk 17", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 18, titel: "Hoofdstuk 18", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 19, titel: "Hoofdstuk 19", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 20, titel: "Hoofdstuk 20", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 21, titel: "Hoofdstuk 21", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 22, titel: "Hoofdstuk 22", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 23, titel: "Hoofdstuk 23", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 24, titel: "Hoofdstuk 24", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 25, titel: "Hoofdstuk 25", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 26, titel: "Hoofdstuk 26", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 27, titel: "Hoofdstuk 27", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." }
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
        htmlGerecht += `
            <section class="story-soundtrack">
                <h2 style="text-transform: uppercase;">Hoofdstuk ${item.id}: ${item.titel}</h2>
                <div class="soundtrack-grid">
                    <div>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/${item.videoA}" allowfullscreen></iframe>
                        </div>
                        <a href="${item.driveA}" target="_blank" class="download-link">💾 Download MP3 (Versie A)</a>
                    </div>
                    <div>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/${item.videoB}" allowfullscreen></iframe>
                        </div>
                        <a href="${item.driveB}" target="_blank" class="download-link">💾 Download MP3 (Versie B)</a>
                    </div>
                </div>
                <button onclick="toggleLyrics('lyrics-h${item.id}')" class="submit-btn-alt" style="margin-top: 20px; width: auto; padding: 8px 20px;">
                    📜 Toon Liedtekst
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
