/* =========================================
   CONFIG & VERTALINGEN
   ========================================= */
const config = {
    password: "Philippe50", 
    currentLang: 'nl',
    translations: {
        nl: {
            "welcome": "Welkom bij Philippe 50",
            "enter-code": "Voer de geheime code in om deel te nemen:",
            "login-btn": "Log in",
            "wrong-pwd": "Onjuiste code, probeer het opnieuw.",
            "form-title": "Het verhaal van Philippe",
            "label-name": "Jouw Nickname (voor in de legende):",
            "label-email": "Jouw E-mailadres:",
            "label-band": "Schrijf hier het geheime woord dat je band met Philippe duidt:",
            "band-note": "(Dit is je wachtwoord voor later)",
            "label-personage": "Met welk personage uit de jaren 80 ben jij het beste te vergelijken?",
            "label-power": "Waar is Philippe heel erg goed in volgens jou?",
            "label-kryptonite": "Waar kan Philippe nog beter in worden volgens jou?",
            "label-memory": "Omschrijf je leukste herinnering met Philippe hier in enkele zinnen:",
            "submit-btn": "Verstuur naar de Legende",
            "view-chapter": "Bekijk jouw hoofdstuk",
            "story-title": "De Legende van Philippe",
            "loading-story": "De nevels trekken op...",
            "lookup-title": "Ontgrendel jouw hoofdstuk",
            "lookup-desc": "Voer je nickname en het geheime woord in.",
            "show-story-btn": "Toon mijn verhaal",
            "back-link": "← Terug naar de start",
            "prologue-title": "Hoofdstuk 0: De Glitch",
            "prologue-text": "Philippe zit thuis in de veranda op een ochtend rustig van een tasje koffie te genieten, met zijn Spotify-playlist op de achtergrond. Met gesloten ogen geniet hij van de zon op zijn gezicht. De oude videospeler rolt met zijn ogen en de oude grammofoonspeler onder de televisie kreunt; alweer die 'moderne' muziek. Dan komt er plots een tijdsglitch langs en de grammofoonspeler schrikt op. Door de schok verplaatst de naald op een oude grammofoonplaat en komt bovenop een van de ribbels terecht. De speler probeert de naald terug in de juiste groef te schudden, maar de tijdsglitch keert onverwacht terug en de kamer begint plots te draaien. Philippe merkt niets van wat er rond hem gebeurt. Het licht wordt weggezogen in een spiraal van duisternis en de kamer lijkt weg te ebben. Hij hoort de muziek van Spotify niet meer, maar de klanken van de ABBA-hit 'Fernando' klinken door de kamer. Vreemd, dacht Philippe, dat stond toch niet in mijn playlist? Hij opent zijn ogen en ziet dat hij nog steeds in de zetel zit. Maar de kamer rondom hem is niet meer zijn huis in Kessel-Lo. Hij wandelt door het huis en herkent de dingen, maar toch ook niet. Op tafel ligt een krant: de geboorteaankondigingen. Er is een kindje geboren met dezelfde naam als hij. Hij slaat de krant dicht en ziet een artikel over de fusies van gemeenten en de viering van 25 jaar Koning Boudewijn. Dan valt zijn Belgische frank: hij staat in de woonkamer van zijn eerste levensjaren. De datum op de krant: 14 april 1976 om exact 13:30. 50 jaar terug in de tijd. Hoe geraakt hij terug naar de toekomst?"
        },
        fr: {
            "welcome": "Bienvenue chez Philippe 50",
            "enter-code": "Entrez le code secret pour participer :",
            "login-btn": "Se connecter",
            "wrong-pwd": "Code incorrect, réessayez.",
            "form-title": "L'histoire de Philippe",
            "label-name": "Votre Nickname (pour la légende) :",
            "label-email": "Votre E-mail :",
            "label-band": "Écrivez ici le mot secret qui définit votre lien avec Philippe :",
            "band-note": "(Ce sera votre mot de passe plus tard)",
            "label-personage": "À quel personnage des années 80 ressemblez-vous le plus ?",
            "label-power": "Selon vous, en quoi Philippe est-il très doué ?",
            "label-kryptonite": "Selon vous, en quoi Philippe pourrait-il s'améliorer ?",
            "label-memory": "Décrivez votre meilleur souvenir avec Philippe en quelques phrases :",
            "submit-btn": "Envoyer à la Légende",
            "view-chapter": "Consultez votre chapitre",
            "story-title": "La Légende de Philippe",
            "loading-story": "Les brumes se lèvent...",
            "lookup-title": "Débloquez votre chapitre",
            "lookup-desc": "Entrez votre nickname et le mot secret.",
            "show-story-btn": "Afficher mon histoire",
            "back-link": "← Retour au début",
            "prologue-title": "Chapitre 0: Le Glitch",
            "prologue-text": "Philippe est assis dans sa véranda un matin, savourant tranquillement une tasse de café avec sa playlist Spotify en arrière-plan. Les yeux fermés, il profite du soleil sur son visage. Le vieux magnétoscope lève les yeux au ciel et le vieux tourne-disque sous le téléviseur gémit; encore cette musique 'moderne'. Soudain, un glitch temporel survient et le tourne-disque sursaute. Sous le choc, le saphir se déplace sur un vieux disque et se retrouve au sommet d'un sillon. L'appareil tente de remettre l'aiguille à sa place, maar le glitch revient de manière inattendue et la pièce commence à tourner. Philippe ne remarque rien de ce qui se passe autour de lui. La lumière est aspirée dans une spirale d'obscurité et la pièce semble s'effacer. Il n'entend plus Spotify, maar les notes du tube 'Fernando' d'ABBA résonnent. Étrange, pense Philippe, ce n'était pas dans ma playlist? Il ouvre les yeux et voit qu'il est toujours dans son fauteuil. Maar la pièce n'est plus sa maison à Kessel-Lo. Il marche dans la maison et reconnaît les objets, maar sans les reconnaître tout à fait. Sur la table traîne un journal: les annonces de naissance. Un enfant est né avec le même nom que lui. Il ferme le journal et voit un article sur la fusion des communes et les 25 ans du Roi Baudouin. C'est alors que le franc tombe: il se tient dans le salon de ses deux premières années de vie. La date sur le journal: 14 avril 1976 à 13h30 précises. 50 ans en arrière. Comment reviendra-t-il vers le futur?"
        }
    }
};

const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8NcRn-YMmbVuxKlYx_WT9_QZEB5eaFbiygWphB86Ya2mzMswKVwVlqFpBDe5ewM6f1uFh2wi8nIDk/pub?output=csv';

/* =========================================
   CORE LOGIC (Language & Auth)
   ========================================= */

function setLanguage(lang) {
    config.currentLang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = config.translations[lang][key];
        if (translation) el.innerText = translation;
    });

    const pwdInput = document.getElementById('password-input');
    if (pwdInput) pwdInput.placeholder = lang === 'nl' ? "Wachtwoord..." : "Mot de passe...";

    const prologueTitle = document.getElementById('prologue-title');
    const prologueText = document.getElementById('prologue-text');
    if (prologueTitle && prologueText) {
        prologueTitle.innerText = config.translations[lang]["prologue-title"];
        prologueText.innerText = config.translations[lang]["prologue-text"];
    }

    if (document.getElementById('story-content')) fetchStory();
    updateLangButtons(lang);
}

function updateLangButtons(lang) {
    const btnNl = document.getElementById('btn-nl');
    const btnFr = document.getElementById('btn-fr');
    if (!btnNl || !btnFr) return;
    [btnNl, btnFr].forEach(btn => btn.classList.remove('active-lang'));
    const activeBtn = lang === 'nl' ? btnNl : btnFr;
    activeBtn.classList.add('active-lang');
}

// DE GEFIXTE WACHTWOORD CHECK
function checkPassword() {
    const inputField = document.getElementById('password-input');
    const errorMsg = document.getElementById('error-msg');
    if (!inputField) return;

    const input = inputField.value.trim().toLowerCase();
    
    // Check voor de admin/feest-pagina
    if (input === "admin50") {
        window.location.href = "legende.html";
        return;
    }

    // Check voor de normale toegang (formulier)
    if (input === config.password.toLowerCase()) {
        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('form-section').style.display = 'block';
    } else {
        if (errorMsg) errorMsg.style.display = 'block';
    }
}

function getLanguageSpecificText(fullText, lang) {
    if (!fullText.includes('***')) return fullText;
    const parts = fullText.split('***');
    const nlText = parts[0].trim();
    const frText = parts[1] ? parts[1].trim() : nlText;
    return (lang === 'fr') ? frText : nlText;
}

/* =========================================
   CSV & DATABASE LOGIC
   ========================================= */

function getCSVRows(csvData) {
    const rows = csvData.split(/\r?\n(?=(?:[^"]*"[^"]*")*[^"]*$)/);
    return rows.filter(row => row.trim() !== "");
}

function splitCSVRow(row) {
    return row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
}

function cleanCSVValue(val) {
    if (!val) return "";
    return val.replace(/^"|"$/g, '').replace(/""/g, '"').trim();
}

async function findPersonalStory() {
    const inputName = document.getElementById('lookup-name')?.value.toLowerCase().trim();
    const inputPw = document.getElementById('lookup-pw')?.value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');
    if (!inputName || !inputPw || !container) return;

    try {
        container.innerHTML = config.translations[config.currentLang]["loading-story"];
        const response = await fetch(sheetURL + '&cb=' + Date.now());
        const csvData = await response.text();
        const rows = getCSVRows(csvData).slice(1);
        let found = false;

        for (let row of rows) {
            const cols = splitCSVRow(row);
            const rawStory = cleanCSVValue(cols[1]);
            const nameInSheet = cleanCSVValue(cols[2]).toLowerCase();
            const pwInSheet = cleanCSVValue(cols[4]).toLowerCase();

            if (nameInSheet === inputName && pwInSheet === inputPw) {
                found = true;
                const storyText = getLanguageSpecificText(rawStory, config.currentLang);
                container.innerHTML = `
                    <p style="color:#00f2ff; font-weight:bold; margin-bottom:15px;">Dag ${cleanCSVValue(cols[2])}, jouw legende:</p>
                    <div style="border-left: 3px solid #ff00de; padding-left: 15px; text-align: left; color: #e0e0e0; line-height: 1.6; white-space: pre-wrap;">${storyText}</div>`;
                break;
            }
        }
        if (!found) { 
            container.innerHTML = `<p style='color:#ff00de;'>${config.currentLang === 'nl' ? "Geen match gevonden." : "Aucune correspondance."}</p>`; 
        }
    } catch (e) { container.innerHTML = "Error."; }
}

async function fetchStory() {
    const container = document.getElementById('story-content');
    if (!container) return;

    try {
        const response = await fetch(sheetURL + '&cb=' + Date.now());
        const csvData = await response.text();
        const rows = getCSVRows(csvData).slice(1);
        let fullHTML = "";

        rows.forEach((row, index) => {
            const cols = splitCSVRow(row);
            const rawStory = cleanCSVValue(cols[1]);
            const nickname = cleanCSVValue(cols[2]) || "Anoniem";
            const storyText = getLanguageSpecificText(rawStory, config.currentLang);

            if (storyText) {
                fullHTML += `
                    <div class="story-entry" style="margin-bottom: 40px; border-bottom: 1px dashed rgba(0, 242, 255, 0.2); padding-bottom: 20px;">
                        <h3 style="color: #00f2ff; margin-bottom: 10px;">Hoofdstuk ${index + 1}: ${nickname}</h3>
                        <div style="white-space: pre-wrap; line-height: 1.6;">${storyText}</div>
                    </div>`;
            }
        });
        container.innerHTML = fullHTML || "<p>Nog geen verhalen.</p>";
    } catch (error) { container.innerHTML = "Error."; }
}

/* =========================================
   INITIALIZATION & ROUTING
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('nl');

    const form = document.getElementById("dragon-form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const chosenPw = document.getElementById('deelnemer_ww').value.toLowerCase().trim();
            btn.disabled = true;
            btn.innerText = "...";

            try {
                const res = await fetch(sheetURL + '&cb=' + Date.now());
                const data = await res.text();
                const rows = getCSVRows(data).slice(1);
                const isUnique = !rows.some(row => cleanCSVValue(splitCSVRow(row)[4]).toLowerCase() === chosenPw);

                if (!isUnique) {
                    alert("Dit geheime woord bestaat al!");
                    btn.disabled = false;
                    btn.innerText = config.translations[config.currentLang]["submit-btn"];
                    return;
                }

                const formData = new FormData(form);
                const postRes = await fetch("https://hook.eu1.make.com/ywmy2xr3wy53a3f4zadrdws3hiex3h3f", {
                    method: "POST",
                    body: JSON.stringify(Object.fromEntries(formData)),
                    headers: { 'Content-Type': 'application/json' }
                });

                if (postRes.ok) {
                    alert("Verzonden!");
                    window.location.href = "mijn-verhaal.html";
                } else { throw new Error(); }
            } catch (err) { 
                btn.disabled = false; 
                btn.innerText = "Error - Probeer opnieuw";
            }
        });
    }
});
