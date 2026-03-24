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
    CORE LOGIC (Taal & Login)
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

    const activeBtn = (lang === 'nl') ? btnNl : btnFr;
    activeBtn.classList.add('lang-active');
}

function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');
    
    if (input === "admin50") { 
        window.location.href = "legende.html";
        return;
    }
    
    if (input === config.password) {
        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('form-section').style.display = 'block';
    } else {
        errorMsg.style.display = 'block';
    }
}

/* =========================================
    DATABASE & FORM LOGIC
   ========================================= */

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

async function findPersonalStory() {
    const inputName = document.getElementById('lookup-name')?.value.toLowerCase().trim();
    const inputPw = document.getElementById('lookup-pw')?.value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');
    if (!inputName || !inputPw || !container) return;

    try {
        container.innerHTML = `<p class="loading">${config.translations[config.currentLang]["loading-story"]}</p>`;
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
                
                // HIER IS DE AANPASSING: Titeltje + Google Knop + Verhaal
                container.innerHTML = `
                    <p style="color:#00f2ff; font-weight:bold; margin-bottom:10px; text-transform: uppercase; letter-spacing:1px;">
                        ${config.currentLang === 'nl' ? 'Gevonden!' : 'Trouvé!'}
                    </p>
                    
                    <div id="google_translate_element" style="margin-bottom: 20px;"></div>

                    <div class="story-text" style="border-left: 3px solid #ff00de; padding-left: 15px; text-align: left;">
                        ${storyText}
                    </div>
                `;

                // De Google Translate widget activeren die in de HTML head staat
                if (typeof googleTranslateElementInit === 'function') {
                    googleTranslateElementInit();
                }
            }
        });
        if (!found) {
            container.innerHTML = `<p style='color:#ff00de;'>${config.currentLang === 'nl' ? "Nickname of geheim woord onjuist." : "Nickname of mot secret incorrect."}</p>`;
        }
    } catch (e) { 
        container.innerHTML = "<p style='color:#ff00de;'>Error verbinding.</p>"; 
    }
}

/* =========================================
    INITIALISATIE
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('nl');

    const form = document.getElementById("dragon-form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const chosenPw = document.getElementById('deelnemer_ww').value;
            
            btn.disabled = true;
            btn.innerText = config.currentLang === 'nl' ? "Checken..." : "Vérification...";

            const unique = await isPasswordUnique(chosenPw);
            if (!unique) {
                alert(config.currentLang === 'nl' ? "Dit geheime woord is al gekozen!" : "Ce mot secret est déjà utilisé !");
                btn.disabled = false;
                btn.innerText = config.translations[config.currentLang]["submit-btn"];
                return;
            }

            btn.innerText = config.currentLang === 'nl' ? "Verzenden..." : "Envoi...";
            const formData = new FormData(form);
            const makeWebhookURL = "https://hook.eu1.make.com/ywmy2xr3wy53a3f4zadrdws3hiex3h3f"; 

            fetch(makeWebhookURL, {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => {
                if (res.ok) {
                    alert(config.currentLang === 'nl' ? "Gelukt!" : "Réussi !");
                    window.location.href = "mijn-verhaal.html"; 
                } else { throw new Error(); }
            })
            .catch(() => {
                alert("Error.");
                btn.disabled = false;
                btn.innerText = config.translations[config.currentLang]["submit-btn"];
            });
        });
    }
});
