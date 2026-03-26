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
            "back-link": "← Terug naar de start"
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
            "back-link": "← Retour au début"
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
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');
    if (input === "admin50") { window.location.href = "legende.html"; return; }
    if (input === config.password) {
        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('form-section').style.display = 'block';
    } else { errorMsg.style.display = 'block'; }
}

/* =========================================
   CSV HELPER FUNCTION
   ========================================= */

// Splitst de CSV correct op rijen, zelfs als er enters IN een cel staan
function getCSVRows(csvData) {
    // Deze regex splitst alleen op nieuwe regels die NIET tussen quotes staan
    const rows = csvData.split(/\r?\n(?=(?:[^"]*"[^"]*")*[^"]*$)/);
    return rows.filter(row => row.trim() !== "");
}

// Splitst een rij op komma's, maar negeert komma's tussen quotes
function splitCSVRow(row) {
    return row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
}

// Maakt de tekst schoon (haalt quotes weg en herstelt dubbele quotes)
function cleanCSVValue(val) {
    if (!val) return "";
    return val.replace(/^"|"$/g, '').replace(/""/g, '"').trim();
}

/* =========================================
   DATABASE & STORY LOOKUP
   ========================================= */

async function findPersonalStory() {
    const inputName = document.getElementById('lookup-name')?.value.toLowerCase().trim();
    const inputPw = document.getElementById('lookup-pw')?.value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');
    if (!inputName || !inputPw || !container) return;

    try {
        container.innerHTML = config.translations[config.currentLang]["loading-story"];
        const response = await fetch(sheetURL + '&cb=' + Date.now());
        const csvData = await response.text();
        
        const rows = getCSVRows(csvData).slice(1); // Skip header
        let found = false;

        for (let row of rows) {
            const cols = splitCSVRow(row);
            const storyText = cleanCSVValue(cols[1]);
            const nameInSheet = cleanCSVValue(cols[2]).toLowerCase();
            const pwInSheet = cleanCSVValue(cols[4]).toLowerCase();

            if (nameInSheet === inputName && pwInSheet === inputPw) {
                found = true;
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

        rows.forEach((row) => {
            const cols = splitCSVRow(row);
            const storyText = cleanCSVValue(cols[1]);
            const nickname = cleanCSVValue(cols[2]) || "Anoniem";

            if (storyText) {
                fullHTML += `
                    <div class="story-entry" style="margin-bottom: 40px; border-bottom: 1px dashed rgba(0, 242, 255, 0.2); padding-bottom: 20px;">
                        <h3 style="color: #00f2ff; margin-bottom: 10px;">Hoofdstuk: ${nickname}</h3>
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

    // Automatische start voor de legende-pagina
    if (document.getElementById('story-content')) {
        fetchStory();
    }

    // Formulier afhandeling
    const form = document.getElementById("dragon-form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const chosenPw = document.getElementById('deelnemer_ww').value.toLowerCase().trim();
            btn.disabled = true;
            btn.innerText = "...";

            try {
                // Check uniekheid met de nieuwe CSV logica
                const res = await fetch(sheetURL + '&cb=' + Date.now());
                const data = await res.text();
                const rows = getCSVRows(data).slice(1);
                
                const isUnique = !rows.some(row => {
                    const cols = splitCSVRow(row);
                    return cleanCSVValue(cols[4]).toLowerCase() === chosenPw;
                });

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
