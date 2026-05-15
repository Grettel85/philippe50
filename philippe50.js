/* ==========================================================================
   VERSION: PHILIPPE 50 - STABLE MASTER
   RESTORING: Volledige functionaliteit, Spreadsheet Sync & Navigatie
   ========================================================================== */

const config = {
    password: "Philippe50", 
    currentLang: localStorage.getItem('preferred_lang') || 'nl',
    translations: {
        nl: {
            "nav-verhaal": "Het Verhaal",
            "nav-someone": "Find Someone Who",
            "nav-mysterie": "Bestemming50",
            "desc-verhaal": "Ontdek de legende, deel een herinnering of bekijk jouw eigen hoofdstuk.",
            "btn-read-legend": "Lees De Legende",
            "btn-write": "Schrijf mee",
            "desc-someone": "De ultieme ijsbreker. Wie van de gasten matcht met de stelling?",
            "btn-play": "Speel het Spel 🔒",
            "desc-mysterie": "15 tips, één doel. Ontrafel jij de coördinaten van Philippe?",
            "btn-play-online": "Speel Online",
            "btn-input": "Tips Invoeren 🔑",
            "btn-gen": "Kaarten Generator 🔒",
            "welcome": "Welkom bij Philippe 50",
            "enter-code": "Voer de geheime code in om deel te nemen:",
            "login-btn": "Log in",
            "wrong-pwd": "Onjuiste code, probeer het opnieuw.",
            "form-title": "Het verhaal van Philippe",
            "label-name": "Jouw Nickname:",
            "label-setting": "Waar en/of wanneer is Philippe beland?",
            "label-obstacle": "Welk probleem heeft hij daar?",
            "label-soundtrack": "Welk liedje hoort bij dit avontuur?",
            "label-memory": "Beschrijf je leukste herinnering met Philippe:",
            "label-email": "Jouw E-mailadres:",
            "label-band": "Welk woord doet je aan Philippe denken:",
            "band-note": "(Dit is je wachtwoord voor later)",
            "submit-btn": "Verstuur naar de Legende",
            "view-chapter": "Bekijk jouw hoofdstuk",
            "placeholder-pw-code": "Wachtwoord...",
            "placeholder-name": "Nickname...",
            "placeholder-setting": "bijv. 1984, de toekomst, disco-tijd...",
            "placeholder-obstacle": "bijv. De wifi is weg, wiel van waveboard stuk...",
            "placeholder-soundtrack": "Artiest - Titel",
            "success-alert": "Je hoofdstuk wordt geschreven!",
            "error-alert": "Fout bij verzenden van data.",
            "pdf-title": "Downloads & PDF's",
            "btn-download": "Download PDF"
        },
        fr: {
            "nav-verhaal": "L'Histoire",
            "nav-someone": "Find Someone Who",
            "nav-mysterie": "Destination50",
            "desc-verhaal": "Découvrez la légende, partagez un souvenir ou consultez votre propre chapitre.",
            "btn-read-legend": "Lire La Légende",
            "btn-write": "Contribuez",
            "desc-someone": "Le brise-glace ultime. Quel invité correspond à l'affirmation ?",
            "btn-play": "Jouez au Jeu 🔒",
            "desc-mysterie": "15 indices, un seul doel. Arriverez-vous à déchiffrer les coordonnées ?",
            "btn-play-online": "Jouez en Ligne",
            "btn-input": "Entrer les Indices 🔑",
            "btn-gen": "Générateur de Cartes 🔒",
            "welcome": "Bienvenue chez Philippe 50",
            "enter-code": "Entrez le code secret pour participer :",
            "login-btn": "Se connecter",
            "wrong-pwd": "Code incorrect, réessayez.",
            "form-title": "L'histoire de Philippe",
            "label-name": "Votre Nickname :",
            "label-setting": "Où et/ou quand Philippe a-t-il atterri ?",
            "label-obstacle": "Quel problème rencontre-t-il ?",
            "label-soundtrack": "Quelle chanson accompagne cette aventure ?",
            "label-memory": "Décrivez votre meilleur souvenir avec Philippe :",
            "label-email": "Votre E-mail :",
            "label-band": "Quel mot vous fait penser à Philippe :",
            "band-note": "(Ce sera votre mot de passe plus tard)",
            "submit-btn": "Envoyer à la Légende",
            "view-chapter": "Consultez votre chapitre",
            "placeholder-pw-code": "Mot de passe...",
            "placeholder-name": "Nickname...",
            "placeholder-setting": "ex: 1984, le futur, l'époque disco...",
            "placeholder-obstacle": "ex: Le wifi est coupé, une roue du waveboard est cassée...",
            "placeholder-soundtrack": "Artiste - Titel",
            "success-alert": "Votre chapitre est en cours d'écriture !",
            "error-alert": "Erreur lors de l'envoi des données.",
            "pdf-title": "Téléchargements & PDF",
            "btn-download": "Télécharger PDF"
        }
    }
};

const makeWebhookURL = "https://hook.eu1.make.com/ywmy2xr3wy53a3f4zadrdws3hiex3h3f"; 
const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8NcRn-YMmbVuxKlYx_WT9_QZEB5eaFbiygWphB86Ya2mzMswKVwVlqFpBDe5ewM6f1uFh2wi8nIDk/pub?output=csv';

let pendingAction = null;

/* --- TOEGANG & LINKS --- */
function handleAccess(action) {
    pendingAction = action;
    const gate = document.getElementById('password-gate');
    if (gate) {
        gate.style.display = 'block';
        gate.scrollIntoView({ behavior: 'smooth' });
    }
}

function checkAccess() {
    const input = document.getElementById('password-input').value;
    if (input === config.password) {
        closeGate();
        executeAction(pendingAction);
    } else {
        document.getElementById('error-container').style.display = 'block';
    }
}

function executeAction(action) {
    if (action === 'verhaal-admin') {
        document.getElementById('form-section').style.display = 'block';
        document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'admin-someone') {
        window.location.href = "someone-admin.html";
    } else if (action === 'mysterie-tips') {
        window.location.href = "tips-admin.html";
    } else if (action === 'admin-mysterie') {
        window.location.href = "mysterie-admin.html";
    }
}

function openMysteriePlay() { window.location.href = "quiztit/quiztitspel.html"; }
function openSecureScroll() { window.location.href = "scroll.html"; }
function closeGate() { document.getElementById('password-gate').style.display = 'none'; }
function closeForm() { document.getElementById('form-section').style.display = 'none'; }

/* --- TAAL & UI --- */
function setLanguage(lang) {
    config.currentLang = lang;
    localStorage.setItem('preferred_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const trans = config.translations[lang][key];
        if (trans) el.innerHTML = trans;
    });
    updateLangButtons(lang);
}

function updateLangButtons(lang) {
    document.querySelectorAll('#btn-nl, #btn-fr').forEach(btn => {
        btn.classList.toggle('active-lang', btn.id.includes(lang));
    });
}

/* --- FORMULIER --- */
async function submitForm() {
    const submitBtn = document.querySelector('#dragon-form .submit-btn');
    submitBtn.disabled = true;
    const formData = {
        naam: document.getElementById('deelnemer_naam').value,
        setting: document.getElementById('input-setting').value,
        obstacle: document.getElementById('input-obstacle').value,
        soundtrack: document.getElementById('input-soundtrack').value,
        herinnering: document.getElementById('philippe_herinnering').value,
        email: document.getElementById('deelnemer_email').value,
        wachtwoord: document.getElementById('deelnemer_ww').value,
        timestamp: new Date().toISOString(),
        taal: config.currentLang
    };
    try {
        const res = await fetch(makeWebhookURL, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(formData)});
        if (res.ok) { alert(config.translations[config.currentLang]["success-alert"]); closeForm(); }
    } catch (e) { alert("Error!"); }
    finally { submitBtn.disabled = false; }
}

function copyPassword() {
    const el = document.getElementById("deelnemer_ww");
    el.type = "text"; el.select(); document.execCommand("copy"); el.type = "password";
}

/* --- INITIALISATIE --- */
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav-placeholder');
    if (nav) {
        fetch('menu.html').then(res => res.text()).then(data => {
            nav.innerHTML = data;
            setLanguage(config.currentLang);
        });
    } else {
        setLanguage(config.currentLang);
    }
});
