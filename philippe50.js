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
            "label-band": "Omschrijf je band met Philippe in 1 woord:",
            "band-note": "(Let op! Dit is je wachtwoord later op deze website)",
            "label-personage": "Welk 80's personage?",
            "label-memory": "Leukste herinnering?",
            "label-power": "Superkracht?",
            "label-kryptonite": "Kryptonite?",
            "submit-btn": "Verstuur naar de Legende",
            "story-title": "De Legende van Philippe",
            "loading-story": "De nevels trekken op...",
            "lookup-title": "Ontgrendel jouw hoofdstuk",
            "lookup-desc": "Voer je nickname en het geheime woord (je band met Philippe) in.",
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
            "label-band": "Votre lien avec Philippe (en 1 mot) :",
            "band-note": "(Attention ! Ce mot sera votre mot de passe plus tard)",
            "label-personage": "Quel personnage?",
            "label-memory": "Meilleur souvenir?",
            "label-power": "Super-pouvoir?",
            "label-kryptonite": "Kryptonite?",
            "submit-btn": "Envoyer à la Légende",
            "story-title": "La Légende de Philippe",
            "loading-story": "Les brumes se lèvent...",
            "lookup-title": "Débloquez votre chapitre",
            "lookup-desc": "Entrez votre nickname et le mot secret (votre lien avec Philippe).",
            "show-story-btn": "Afficher mon histoire",
            "back-link": "← Retour au début"
        }
    }
};

const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8NcRn-YMmbVuxKlYx_WT9_QZEB5eaFbiygWphB86Ya2mzMswKVwVlqFpBDe5ewM6f1uFh2wi8nIDk/pub?output=csv';

// --- 1. CHECK OF GEHEIM WOORD UNIEK IS ---
async function isPasswordUnique(newPw) {
    try {
        const response = await fetch(sheetURL + '&cachebuster=' + Date.now());
        const csvData = await response.text();
        const rows = csvData.split(/\r?\n/).slice(1);
        
        return !rows.some(row => {
            const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const existingPw = columns[4] ? columns[4].replace(/^"|"$/g, '').trim() : "";
            return existingPw.toLowerCase() === newPw.toLowerCase().trim();
        });
    } catch (e) {
        console.error("Fout bij uniekheidscontrole:", e);
        return true; 
    }
}

// --- 2. DEURWACHTER (Inlogscherm) ---
function checkPassword() {
    const input = document.getElementById('password-input').value;
    if (input === "wijhoudenvanvakantie") {
        window.location.href = "legende.html";
        return;
    }
    if (input === config.password) {
        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('form-section').style.display = 'block';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// --- 3. PERSOONLIJK VERHAAL ZOEKEN (mijn-verhaal.html) ---
async function findPersonalStory() {
    const inputName = document.getElementById('lookup-name').value.toLowerCase().trim();
    const inputPw = document.getElementById('lookup-pw').value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');
    
    if (!inputName || !inputPw) {
        container.innerHTML = "<p style='color:#ff00de;'>Vul a.u.b. beide velden in.</p>";
        return;
    }

    try {
        container.innerHTML = "De sterren staan gunstig... even geduld...";
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
                container.innerHTML = `
                    <p style="color:#00f2ff; font-weight:bold; margin-bottom:15px;">Dag ${columns[2]}, jouw legende is geschreven:</p>
                    <div style="border-left: 3px solid #ff00de; padding-left: 15px; font-style: italic; text-align: left;">
                        ${storyText}
                    </div>
                `;
            }
        });

        if (!found) {
            container.innerHTML = "<p style='color:#ff00de;'>Helaas, deze combinatie is niet gevonden.</p>";
        }
    } catch (e) { 
        container.innerHTML = "<p style='color:#ff00de;'>Er liep iets mis bij het raadplegen.</p>"; 
    }
}

// --- 4. ALLE VERHALEN LADEN (legende.html) ---
async function fetchStory() {
    const container = document.getElementById('story-content');
    if (!container) return;

    try {
        const response = await fetch(sheetURL + '&cachebuster=' + Date.now());
        const csvData = await response.text();
        const rows = csvData.split(/\r?\n/).slice(1).filter(row => row.trim() !== ""); 
        
        container.innerHTML = ''; 

        rows.forEach(row => {
            const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const text = columns[1] ? columns[1].replace(/^"|"$/g, '').trim() : ""; 
            const author = columns[2] ? columns[2].replace(/^"|"$/g, '').trim() : "Onbekende held"; 

            if (text.length > 5) {
                const chapterDiv = document.createElement('div');
                chapterDiv.className = "chapter-box";
                chapterDiv.innerHTML = `<small>— ${author} —</small><p>${text}</p>`;
                container.appendChild(chapterDiv);
            }
        });
    } catch (e) { console.error("Fout bij laden legende:", e); }
}

// --- 5. TAAL WISSELEN ---
function setLanguage(lang) {
    config.currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = config.translations[lang][key];
        if (translation) el.innerText = translation;
    });
}

// --- 6. INITIALISATIE ---
document.addEventListener('DOMContentLoaded', () => {
    // Check welke pagina we laden
    if (document.getElementById('story-content')) {
        fetchStory();
    }

    const form = document.getElementById("dragon-form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const chosenPw = document.getElementById('deelnemer_ww').value;

            btn.disabled = true;
            btn.innerText = "Checken...";

            const unique = await isPasswordUnique(chosenPw);

            if (!unique) {
                alert("Dit geheime woord is al gekozen! Kies een ander woord.");
                btn.disabled = false;
                btn.innerText = "Verstuur naar de Legende";
                return;
            }

            btn.innerText = "Verzenden...";
            const formData = new FormData(form);
            
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
            .then(res => {
                if (res.ok) {
                    alert("Gelukt! Je wordt nu doorgeleid naar jouw verhaal.");
                    window.location.href = "mijn-verhaal.html"; 
                } else { throw new Error(); }
            })
            .catch(() => {
                alert("Er ging iets mis.");
                btn.disabled = false;
                btn.innerText = "Verstuur naar de Legende";
            });
        });
    }
});