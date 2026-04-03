/* ==========================================================================
   VERSION: PHILIPPE 50 - TOTAL ENGINE (V2.6 - Everything Integrated)
   ========================================================================== */

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
            "label-personage": "Wie is volgens jou een echte superheld?",
            "label-power": "Wat is de superkracht van Philippe?",
            "label-kryptonite": "Waar kan Philippe nog beter in worden?",
            "label-memory": "Omschrijf je leukste herinnering met Philippe in enkele zinnen:",
            "submit-btn": "Verstuur naar de Legende",
            "view-chapter": "Bekijk jouw hoofdstuk",
            "story-title": "De Legende van Philippe",
            "loading-story": "De nevels trekken op...",
            "lookup-title": "Ontgrendel jouw hoofdstuk",
            "lookup-desc": "Voer je nickname en het geheime woord in.",
            "show-story-btn": "Toon mijn verhaal",
            "back-link": "← Terug naar de start",
            "prologue-title": "Hoofdstuk 1: De Tijdsglitch",
            "prologue-text": "Philippe zat op een ochtend in de veranda rustig van een tasje koffie te genieten, met zijn Spotify-playlist op de achtergrond. De kamer begon te draaien... 50 jaar terug in de tijd. Hoe geraakt hij terug naar de toekomst?",
            "loader-phrases": ["De naald zoekt de juiste groef...", "Tijdsglitch stabiliseren...", "De legende wordt geschreven..."],
            "wait-longer": "Het duurt iets langer... ververs de pagina even."
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
            "prologue-title": "Chapitre 1 : Le Glitch Temporel",
            "prologue-text": "Philippe était assis dans sa véranda... Cinquante ans en arrière. Comment allait-il retourner vers le futur ?",
            "loader-phrases": ["Le saphir cherche le bon sillon...", "Stabilisation du glitch...", "La légende s'écrit..."],
            "wait-longer": "C'est un peu long... rafraîchissez la page."
        }
    }
};

const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8NcRn-YMmbVuxKlYx_WT9_QZEB5eaFbiygWphB86Ya2mzMswKVwVlqFpBDe5ewM6f1uFh2wi8nIDk/pub?output=csv';

/* =========================================
    CORE LOGIC
   ========================================= */

function setLanguage(lang) {
    config.currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = config.translations[lang][key];
        if (translation) el.innerText = translation;
    });
    updateLangButtons(lang);
}

function updateLangButtons(lang) {
    const btnNl = document.getElementById('btn-nl');
    const btnFr = document.getElementById('btn-fr');
    if (btnNl && btnFr) {
        btnNl.classList.toggle('active-lang', lang === 'nl');
        btnFr.classList.toggle('active-lang', lang === 'fr');
    }
}

function checkPassword() {
    const input = document.getElementById('password-input').value.trim().toLowerCase();
    if (input === "admin50") { window.location.href = "legende.html"; return; }
    if (input === config.password.toLowerCase()) {
        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('form-section').style.display = 'block';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

function openSecureScroll() {
    const pw = prompt("Geheime code / Code secret:");
    if (pw && pw.toLowerCase() === "admin50") window.location.href = "scroll.html";
}

/* =========================================
    CSV & DATA HANDLING
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

function getLanguageSpecificText(fullText, lang) {
    if (!fullText || !fullText.includes('***')) return fullText;
    const parts = fullText.split('***');
    return (lang === 'fr') ? (parts[1] ? parts[1].trim() : parts[0].trim()) : parts[0].trim();
}

/* Voor legende.html */
async function fetchStory() {
    const container = document.getElementById('story-content');
    if (!container) return;
    try {
        const res = await fetch(sheetURL + '&cb=' + Date.now());
        const rows = getCSVRows(await res.text()).slice(1);
        let html = "";
        rows.forEach((row, index) => {
            const cols = splitCSVRow(row);
            const text = getLanguageSpecificText(cleanCSVValue(cols[1]), config.currentLang);
            if (text) {
                html += `<div class="story-entry glass-card" style="margin-bottom:20px; padding:20px; background:rgba(255,255,255,0.05); border-radius:15px;">
                            <h3 style="color:#00f2ff;">HOOFDSTUK ${index + 2}: ${cleanCSVValue(cols[2])}</h3>
                            <div style="white-space:pre-wrap;">${text}</div>
                         </div>`;
            }
        });
        container.innerHTML = html || "Nog geen verhalen.";
    } catch (e) { container.innerHTML = "Fout bij laden."; }
}

/* Voor scroll.html */
async function startLiveScroll() {
    const nlCol = document.getElementById('scroll-nl');
    const frCol = document.getElementById('scroll-fr');
    if (!nlCol || !frCol) return;

    try {
        const res = await fetch(sheetURL + '&cb=' + Date.now());
        const rows = getCSVRows(await res.text()).slice(1);
        
        let nlHTML = `<div class="scroll-entry"><h3>HOOFDSTUK 1</h3><p>${config.translations.nl["prologue-text"]}</p></div>`;
        let frHTML = `<div class="scroll-entry"><h3>CHAPITRE 1</h3><p>${config.translations.fr["prologue-text"]}</p></div>`;

        rows.forEach((row, index) => {
            const cols = splitCSVRow(row);
            const name = cleanCSVValue(cols[2]);
            nlHTML += `<div class="scroll-entry"><h3>HOOFDSTUK ${index+2}: ${name}</h3><p>${getLanguageSpecificText(cleanCSVValue(cols[1]), 'nl')}</p></div>`;
            frHTML += `<div class="scroll-entry"><h3>CHAPITRE ${index+2}: ${name}</h3><p>${getLanguageSpecificText(cleanCSVValue(cols[1]), 'fr')}</p></div>`;
        });

        nlCol.innerHTML = nlHTML;
        frCol.innerHTML = frHTML;

        // De animatie starten
        const speed = 40; // Pixels per seconde
        const height = Math.max(nlCol.scrollHeight, frCol.scrollHeight);
        const duration = (height + window.innerHeight) / speed;

        [nlCol, frCol].forEach(col => {
            col.style.transition = `transform ${duration}s linear`;
            col.style.transform = `translateY(-${height + 100}px)`;
        });

    } catch (e) { console.error("Scroll error:", e); }
}

/* INITIALIZATION */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('password-input')) setLanguage('nl');
    if (document.getElementById('story-content')) fetchStory();
    // startLiveScroll wordt aangeroepen door de inline script in scroll.html
});
