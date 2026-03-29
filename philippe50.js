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
            "band-note": "(Ce sera votre mot de passe later)",
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
            "prologue-text": "Philippe est assis dans sa véranda un matin, savourant tranquillement une tasse de café avec sa playlist Spotify en arrière-plan..."
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
    const pTitle = document.getElementById('prologue-display-title');
    const pText = document.getElementById('prologue-display-text');
    if(pTitle) pTitle.innerText = config.translations[lang]["prologue-title"];
    if(pText) pText.innerText = config.translations[lang]["prologue-text"];
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

function checkPassword() {
    const inputField = document.getElementById('password-input');
    const errorMsg = document.getElementById('error-msg');
    if (!inputField) return;
    const input = inputField.value.trim().toLowerCase();
    if (input === "admin50") { window.location.href = "legende.html"; return; }
    if (input === config.password.toLowerCase()) {
        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('form-section').style.display = 'block';
    } else { if (errorMsg) errorMsg.style.display = 'block'; }
}

function getLanguageSpecificText(fullText, lang) {
    if (!fullText || !fullText.includes('***')) return fullText;
    const parts = fullText.split('***');
    return (lang === 'fr') ? (parts[1] ? parts[1].trim() : parts[0].trim()) : parts[0].trim();
}

/* =========================================
   CSV & DATABASE LOGIC (Schoongemaakt)
   ========================================= */

function getCSVRows(csvData) {
    return csvData.split(/\r?\n(?=(?:[^"]*"[^"]*")*[^"]*$)/).filter(row => row.trim() !== "");
}

function splitCSVRow(row) {
    return row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
}

function cleanCSVValue(val) {
    return val ? val.replace(/^"|"$/g, '').replace(/""/g, '"').trim() : "";
}

async function findPersonalStory() {
    const inputName = document.getElementById('lookup-name')?.value.toLowerCase().trim();
    const inputPw = document.getElementById('lookup-pw')?.value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');
    if (!inputName || !inputPw || !container) return;

    const lang = config.currentLang;
    // Harde 'style' attributes verwijderd, classes toegevoegd
    container.innerHTML = `
        <div id="fixed-prologue" class="fade-in">
            <h2 id="prologue-display-title">${config.translations[lang]["prologue-title"]}</h2>
            <p id="prologue-display-text" class="story-text">${config.translations[lang]["prologue-text"]}</p>
        </div>
        <div id="story-divider">
            <div class="loader-spinner"></div>
            <p id="loader-text">${lang === 'nl' ? "De naald zoekt de juiste groef..." : "Le saphir cherche le bon sillon..."}</p>
        </div>
        <div id="final-story-target" class="fade-in"></div>
    `;

    let attempts = 0;
    const checkSheet = async () => {
        try {
            const res = await fetch(sheetURL + '&cb=' + Date.now());
            const rows = getCSVRows(await res.text()).slice(1);
            const match = rows.find(row => {
                const cols = splitCSVRow(row);
                return cleanCSVValue(cols[2]).toLowerCase() === inputName && cleanCSVValue(cols[4]).toLowerCase() === inputPw;
            });

            if (match) {
                const cols = splitCSVRow(match);
                let storyText = getLanguageSpecificText(cleanCSVValue(cols[1]), lang);
                
                let finalTitle = "HOOFDSTUK: " + cleanCSVValue(cols[2]).toUpperCase(); 
                let finalContent = storyText;
                const lines = storyText.split(/\r?\n/).filter(l => l.trim() !== "");
                
                if (lines.length > 0 && (lines[0].toLowerCase().includes("hoofdstuk") || lines[0].toLowerCase().includes("chapitre"))) {
                    finalTitle = lines[0];
                    finalContent = lines.slice(1).join("\n").trim();
                }

                document.getElementById('story-divider').style.display = 'none';
                document.getElementById('final-story-target').innerHTML = `
                    <h2>${finalTitle}</h2>
                    <div class="final-content">${finalContent}</div>
                `;
            } else if (attempts < 24) { attempts++; setTimeout(checkSheet, 5000); }
        } catch (e) { console.error(e); }
    };
    checkSheet();
}

async function fetchStory() {
    const container = document.getElementById('story-content');
    if (!container) return;
    try {
        const res = await fetch(sheetURL + '&cb=' + Date.now());
        const rows = getCSVRows(await res.text()).slice(1);
        let fullHTML = "";
        rows.forEach((row, index) => {
            const cols = splitCSVRow(row);
            const storyText = getLanguageSpecificText(cleanCSVValue(cols[1]), config.currentLang);
            if (storyText) {
                let finalTitle = `HOOFDSTUK ${index + 1}: ${cleanCSVValue(cols[2])}`;
                let finalContent = storyText;
                const lines = storyText.split(/\r?\n/).filter(l => l.trim() !== "");
                if (lines.length > 0 && (lines[0].toLowerCase().includes("hoofdstuk") || lines[0].toLowerCase().includes("chapitre"))) {
                    finalTitle = lines[0];
                    finalContent = lines.slice(1).join("\n").trim();
                }
                fullHTML += `
                    <div class="story-entry">
                        <h3>${finalTitle}</h3>
                        <div class="final-content">${finalContent}</div>
                    </div>`;
            }
        });
        container.innerHTML = fullHTML || "<p>Nog geen verhalen.</p>";
    } catch (e) { container.innerHTML = "Error."; }
}

/* =========================================
   INITIALIZATION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('nl');
    const loginBtn = document.querySelector('button[data-i18n="login-btn"]');
    if (loginBtn) loginBtn.addEventListener('click', (e) => { e.preventDefault(); checkPassword(); });

    const form = document.getElementById("dragon-form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const chosenPw = document.getElementById('deelnemer_ww').value.toLowerCase().trim();
            btn.disabled = true; btn.innerText = "...";
            try {
                const res = await fetch(sheetURL + '&cb=' + Date.now());
                const rows = getCSVRows(await res.text()).slice(1);
                if (rows.some(row => cleanCSVValue(splitCSVRow(row)[4]).toLowerCase() === chosenPw)) {
                    alert(config.currentLang === 'nl' ? "Dit geheime woord bestaat al!" : "Ce mot secret existe déjà !");
                    btn.disabled = false; btn.innerText = config.translations[config.currentLang]["submit-btn"];
                    return;
                }
                const postRes = await fetch("https://hook.eu1.make.com/ywmy2xr3wy53a3f4zadrdws3hiex3h3f", {
                    method: "POST",
                    body: JSON.stringify(Object.fromEntries(new FormData(form))),
                    headers: { 'Content-Type': 'application/json' }
                });
                if (postRes.ok) { window.location.href = "mijn-verhaal.html"; } else { throw new Error(); }
            } catch (err) { btn.disabled = false; btn.innerText = "Error - Probeer opnieuw"; }
        });
    }
});
