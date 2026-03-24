/* =========================================
    CONFIGURATIE & VERTALINGEN
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
            "label-name": "Jouw Nickname:",
            "label-email": "Jouw E-mailadres:",
            "label-band": "Jouw Geheim Woord:",
            "band-note": "(Dit is je wachtwoord voor later)",
            "label-personage": "Welk 80s personage ben jij?",
            "label-power": "Waar is Philippe goed in?",
            "label-kryptonite": "Verbeterpunt voor Philippe?",
            "label-memory": "Leukste herinnering:",
            "submit-btn": "Verstuur naar de Legende",
            "view-chapter": "Bekijk jouw hoofdstuk",
            "story-title": "De Legende van Philippe",
            "loading-story": "De nevels trekken op...",
            "lookup-title": "Ontgrendel jouw hoofdstuk",
            "lookup-desc": "Voer je nickname en het geheime woord in.",
            "show-story-btn": "Toon mijn verhaal",
            "back-link": "← Terug naar de start"
        },
        fr: {
            "welcome": "Bienvenue chez Philippe 50",
            "enter-code": "Entrez le code secret :",
            "login-btn": "Se connecter",
            "wrong-pwd": "Code incorrect.",
            "form-title": "L'histoire de Philippe",
            "label-name": "Ton Nickname :",
            "label-email": "Ton E-mail :",
            "label-band": "Ton Mot Secret :",
            "band-note": "(C'est ton mot de passe)",
            "label-personage": "Quel personnage des années 80 ?",
            "label-power": "Points forts de Philippe ?",
            "label-kryptonite": "Amélioration pour Philippe ?",
            "label-memory": "Ton meilleur souvenir :",
            "submit-btn": "Envoyer à la Légende",
            "view-chapter": "Consulter ton chapitre",
            "story-title": "La Légende de Philippe",
            "loading-story": "Les brumes se lèvent...",
            "lookup-title": "Débloquez votre chapitre",
            "lookup-desc": "Entrez votre nickname et le mot secret.",
            "show-story-btn": "Afficher mon histoire",
            "back-link": "← Retour au début"
        }
    }
};

const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8NcRn-YMmbVuxKlYx_WT9_QZEB5eaFbiygWphB86Ya2mzMswKVwVlqFpBDe5ewM6f1uFh2wi8nIDk/pub?output=csv';

/* =========================================
    CORE LOGIC (Taal & Login)
   ========================================= */

function setLanguage(lang) {
    config.currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = config.translations[lang][key];
        if (translation) el.innerText = translation;
    });

    const lookupName = document.getElementById('lookup-name');
    if (lookupName) lookupName.placeholder = lang === 'nl' ? "Jouw Nickname..." : "Ton Nickname...";
    
    updateLangButtons(lang);
}

function updateLangButtons(lang) {
    const btnNl = document.getElementById('btn-nl');
    const btnFr = document.getElementById('btn-fr');
    if (!btnNl || !btnFr) return;
    btnNl.classList.remove('lang-active');
    btnFr.classList.remove('lang-active');
    (lang === 'nl' ? btnNl : btnFr).classList.add('lang-active');
}

/* =========================================
    DATABASE & STORY LOGIC
   ========================================= */

async function findPersonalStory() {
    const inputName = document.getElementById('lookup-name')?.value.toLowerCase().trim();
    const inputPw = document.getElementById('lookup-pw')?.value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');
    
    if (!inputName || !inputPw || !container) return;

    try {
        container.innerHTML = `<p style="color:#00f2ff;">${config.translations[config.currentLang]["loading-story"]}</p>`;
        
        const response = await fetch(sheetURL + '&cachebuster=' + Date.now());
        const csvData = await response.text();
        const rows = csvData.split(/\r?\n/).slice(1);
        let found = false;

        rows.forEach(row => {
            const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const storyText = columns[1] ? columns[1].replace(/^"|"$/g, '').trim() : "";
            const nameInSheet = columns[2] ? columns[2].replace(/^"|"$/g, '').toLowerCase().trim() : "";
            const pwInSheet = columns[4] ? columns[4].replace(/^"|"$/g, '').toLowerCase().trim() : "";

            if (nameInSheet === inputName && pwInSheet === inputPw) {
                found = true;
                
                // HTML injecteren
                container.innerHTML = `
                    <p style="color:#00f2ff; font-weight:bold; margin-bottom:10px; text-transform: uppercase;">
                        ${config.currentLang === 'nl' ? 'Gevonden!' : 'Trouvé!'}
                    </p>
                    <div id="google_translate_element"></div>
                    <div class="story-text" style="border-left: 3px solid #ff00de; padding-left: 15px; text-align: left; color: #fff;">
                        ${storyText}
                    </div>
                `;

                // GEFORCEERDE HERSTART VAN GOOGLE TRANSLATE
                setTimeout(() => {
                    if (window.google && google.translate && google.translate.TranslateElement) {
                        new google.translate.TranslateElement({
                            pageLanguage: 'nl',
                            includedLanguages: 'nl,fr,en,de',
                            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                        }, 'google_translate_element');
                    }
                }, 200);
            }
        });

        if (!found) {
            container.innerHTML = `<p style='color:#ff00de;'>${config.currentLang === 'nl' ? "Nickname of geheim woord onjuist." : "Invalide."}</p>`;
        }
    } catch (e) { 
        container.innerHTML = "<p style='color:#ff00de;'>Error verbinding.</p>"; 
    }
}

// Initialisatie bij laden
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('nl');
    
    // Enter-toets op de inputs
    const inputs = [document.getElementById('lookup-name'), document.getElementById('lookup-pw')];
    inputs.forEach(input => {
        input?.addEventListener('keypress', (e) => { if (e.key === 'Enter') findPersonalStory(); });
    });
});
