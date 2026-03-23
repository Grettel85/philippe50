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
    } catch (e) { return true; }
}

function checkPassword() {
    const input = document.getElementById('password-input').value;
    if (input === "admin50") { 
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

async function findPersonalStory() {
    const inputName = document.getElementById('lookup-name').value.toLowerCase().trim();
    const inputPw = document.getElementById('lookup-pw').value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');
    if (!inputName || !inputPw) return;

    try {
        container.innerHTML = "De sterren staan gunstig...";
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
                container.innerHTML = `<p style="color:#00f2ff; font-weight:bold; margin-bottom:15px;">Dag ${columns[2]}, jouw legende:</p>
                                       <div style="border-left: 3px solid #ff00de; padding-left: 15px; text-align: left;">${storyText}</div>`;
            }
        });
        if (!found) container.innerHTML = "<p style='color:#ff00de;'>Niet gevonden.</p>";
    } catch (e) { container.innerHTML = "Fout bij laden."; }
}

async function fetchStory() {
    const container = document.getElementById('story-content');
    if (!container) return;
    try {
        const response = await fetch(sheetURL + '&cachebuster=' + Date.now());
        const csvData = await response.text();
        const rows = csvData.split(/\r?\n/).slice(1).filter(row => row.trim() !== ""); 
        container.innerHTML = ''; 
        rows.forEach(row => {
            const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^**"]*$)/);
            const text = columns[1] ? columns[1].replace(/^"|"$/g, '').trim() : ""; 
            const author = columns[2] ? columns[2].replace(/^"|"$/g, '').trim() : "Held"; 
            if (text.length > 5) {
                const div = document.createElement('div');
                div.className = "chapter-box";
                div.innerHTML = `<small>— ${author} —</small><p>${text}</p>`;
                container.appendChild(div);
            }
        });
    } catch (e) { console.error(e); }
}

function setLanguage(lang) {
    config.currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = config.translations[lang][key];
        if (translation) el.innerText = translation;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('story-content')) fetchStory();
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
                alert("Dit geheime woord is al gekozen!");
                btn.disabled = false;
                btn.innerText = "Verstuur";
                return;
            }

            btn.innerText = "Verzenden...";
            const formData = new FormData(form);
            const makeWebhookURL = "https://hook.eu1.make.com/r98w97iapvhvcsl6jm2w42o4q5fhzufs"; 

            fetch(makeWebhookURL, {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => {
                if (res.ok || res.status === 200 || res.status === 202) {
                    alert("Gelukt!");
                    window.location.href = "mijn-verhaal.html"; 
                } else { throw new Error(); }
            })
            .catch(() => {
                alert("Er ging iets mis.");
                btn.disabled = false;
            });
        });
    }
});