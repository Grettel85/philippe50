/* ==========================================================================
   VERSION: PHILIPPE 50 - TOTAL ENGINE (V3.0 - Time Travel Edition)
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
            "label-setting": "Waar en/of wanneer is Philippe beland?",
            "label-obstacle": "Welk probleem heeft hij daar?",
            "label-soundtrack": "Welk liedje hoort bij dit avontuur?",
            "label-memory": "Beschrijf je leukste herinnering met Philippe:",
            "label-email": "Jouw E-mailadres:",
            "label-band": "Welk woord doet je aan Philippe denken:",
            "band-note": "(Dit is je wachtwoord voor later)",
            "submit-btn": "Verstuur naar de Legende",
            "view-chapter": "Bekijk jouw hoofdstuk",
            "story-title": "De Legende van Philippe",
            "loading-story": "De nevels trekken op...",
            "lookup-title": "Ontgrendel jouw hoofdstuk",
            "lookup-desc": "Voer je nickname en het geheime woord in.",
            "show-story-btn": "Toon mijn verhaal",
            "back-link": "← Terug naar de start",
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
            "label-setting": "Où et/ou quand Philippe a-t-il atterri ?",
            "label-obstacle": "Quel problème rencontre-t-il ?",
            "label-soundtrack": "Quelle chanson accompagne cette aventure ?",
            "label-memory": "Décrivez votre meilleur souvenir avec Philippe :",
            "label-email": "Votre E-mail :",
            "label-band": "Quel mot vous fait penser à Philippe :",
            "band-note": "(Ce sera votre mot de passe plus tard)",
            "submit-btn": "Envoyer à la Légende",
            "view-chapter": "Consultez votre chapitre",
            "story-title": "La Légende de Philippe",
            "loading-story": "Les brumes se lèvent...",
            "lookup-title": "Débloquez votre chapitre",
            "lookup-desc": "Entrez votre nickname et le mot secret.",
            "show-story-btn": "Afficher mon histoire",
            "back-link": "← Retour au début",
            "loader-phrases": ["Le saphir cherche le bon sillon...", "Stabilisation du glitch...", "La légende s'écrit..."],
            "wait-longer": "C'est un peu long... rafraîchissez la page."
        }
    }
};

const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8NcRn-YMmbVuxKlYx_WT9_QZEB5eaFbiygWphB86Ya2mzMswKVwVlqFpBDe5ewM6f1uFh2wi8nIDk/pub?output=csv';
const makeWebhookURL = "JOUW_MAKE_WEBHOOK_LINK_HIER"; // VERGEET DEZE NIET IN TE VULLEN!

/* =========================================
   CORE LOGIC & NAVIGATION
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
   FORM SUBMISSION (The Engine)
   ========================================= */

async function submitForm() {
    const data = {
        nickname: document.getElementById('deelnemer_naam').value,
        setting: document.getElementById('input-setting').value,
        obstacle: document.getElementById('input-obstacle').value,
        soundtrack: document.getElementById('input-soundtrack').value,
        memory: document.getElementById('philippe_herinnering').value,
        email: document.getElementById('deelnemer_email').value,
        band: document.getElementById('deelnemer_ww').value,
        language: config.currentLang
    };

    try {
        const response = await fetch(makeWebhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert(config.currentLang === 'nl' ? "Je hoofdstuk wordt geschreven!" : "Votre chapitre est en cours d'écriture !");
            window.location.href = "mijn-verhaal.html";
        } else {
            alert("Error sending data.");
        }
    } catch (error) {
        console.error("Submission error:", error);
        alert("Server error.");
    }
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
                            <h3 style="color:#00f2ff;">HOOFDSTUK ${index + 1}: ${cleanCSVValue(cols[2])}</h3>
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
        
        let nlHTML = ""; 
        let frHTML = "";

        rows.forEach((row, index) => {
            const cols = splitCSVRow(row);
            const name = cleanCSVValue(cols[2]);
            const textRaw = cleanCSVValue(cols[1]);
            
            nlHTML += `<div class="scroll-entry"><h3>HOOFDSTUK ${index + 1}: ${name}</h3><p>${getLanguageSpecificText(textRaw, 'nl')}</p></div>`;
            frHTML += `<div class="scroll-entry"><h3>CHAPITRE ${index + 1}: ${name}</h3><p>${getLanguageSpecificText(textRaw, 'fr')}</p></div>`;
        });

        nlCol.innerHTML = nlHTML;
        frCol.innerHTML = frHTML;

        const speed = 15; 
        const height = Math.max(nlCol.scrollHeight, frCol.scrollHeight);
        const duration = (height + window.innerHeight) / speed;

        [nlCol, frCol].forEach(col => {
            col.style.transition = `transform ${duration}s linear`;
            col.style.transform = `translateY(-${height + 100}px)`;
        });

    } catch (e) { console.error("Scroll error:", e); }
}

/* Zoekfunctie voor mijn-verhaal.html */
async function findPersonalStory() {
    const nameInput = document.getElementById('lookup-name').value.trim().toLowerCase();
    const pwInput = document.getElementById('lookup-pw').value.trim().toLowerCase();
    const container = document.getElementById('personal-story-content');
    
    if (!nameInput || !pwInput) {
        alert("Vul aub beide velden in / Veuillez remplir les deux champs.");
        return;
    }

    container.innerHTML = "<p>De legende wordt doorzocht...</p>";

    try {
        const res = await fetch(sheetURL + '&cb=' + Date.now());
        const rows = getCSVRows(await res.text()).slice(1); 
        
        let found = false;

        rows.forEach((row, index) => {
            const cols = splitCSVRow(row);
            const sheetName = cleanCSVValue(cols[2]).toLowerCase(); // Kolom C
            const sheetPW = cleanCSVValue(cols[4]).toLowerCase();   // Kolom E
            
            if (sheetName === nameInput && sheetPW === pwInput) {
                const text = getLanguageSpecificText(cleanCSVValue(cols[1]), config.currentLang);
                container.innerHTML = `
                    <div class="story-entry glass-card" style="padding:20px; background:rgba(0,242,255,0.1); border: 1px solid #00f2ff;">
                        <h3 style="color:#00f2ff; margin-top:0;">HOOFDSTUK ${index + 1}: ${cleanCSVValue(cols[2])}</h3>
                        <div style="white-space:pre-wrap; color: white; line-height:1.6;">${text}</div>
                    </div>`;
                found = true;
            }
        });

        if (!found) {
            container.innerHTML = "<p style='color: #ff4d4d;'>Geen match gevonden. Controleer je nickname en geheime woord.</p>";
        }

    } catch (e) {
        console.error("Lookup error:", e);
        container.innerHTML = "<p>Er liep iets mis bij het ophalen van de data.</p>";
    }
}

/* INITIALIZATION */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('password-input')) setLanguage('nl');
    if (document.getElementById('story-content')) fetchStory();
    if (document.getElementById('scroll-nl')) startLiveScroll();
});

/* UTILS */
function copyPassword() {
    const passwordField = document.getElementById("deelnemer_ww");
    if (passwordField && passwordField.value) {
        navigator.clipboard.writeText(passwordField.value).then(() => {
            const btn = document.querySelector('.copy-btn');
            const originalIcon = btn.innerText;
            btn.innerText = "✅";
            setTimeout(() => { btn.innerText = originalIcon; }, 2000);
        });
    }
}

let wakeLock = null;
const requestWakeLock = async () => {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (err) {}
};
document.addEventListener('click', requestWakeLock);
