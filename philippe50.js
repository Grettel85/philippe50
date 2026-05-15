/* ==========================================================================
   VERSION: PHILIPPE 50 - TOTAL ENGINE (V7.7 - FINAL STABLE)
   DESCRIPTION: Volledige integratie van Meertaligheid, Wachtwoord-systeem, 
                Formulier-verzending naar Make.com en PDF Hub Sync.
   ========================================================================== */

const config = {
    password: "Philippe50", 
    currentLang: localStorage.getItem('preferred_lang') || 'nl',
    translations: {
        nl: {
            "nav-verhaal": "Het Verhaal",
            "nav-someone": "Find Someone",
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
            "nav-someone": "Trouver quelqu'un",
            "nav-mysterie": "Destination50",
            "desc-verhaal": "Découvrez la légende, partagez un souvenir ou consultez votre propre chapitre.",
            "btn-read-legend": "Lire La Légende",
            "btn-write": "Contribuez",
            "desc-someone": "Le brise-glace ultime. Quel invité correspond à l'affirmation ?",
            "btn-play": "Jouez au Jeu 🔒",
            "desc-mysterie": "15 indices, un seul objectif. Arriverez-vous à déchiffrer les coordonnées ?",
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
let pendingAction = null;

/* =========================================
   1. TOEGANGSBEHEER & NAVIGATIE
   ========================================= */

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
    const errorMsg = document.getElementById('error-container');

    if (input === config.password) {
        closeGate();
        executeAction(pendingAction);
    } else {
        if (errorMsg) errorMsg.style.display = 'block';
    }
}

function executeAction(action) {
    switch (action) {
        case 'verhaal-admin':
            const form = document.getElementById('form-section');
            if (form) {
                form.style.display = 'block';
                form.scrollIntoView({ behavior: 'smooth' });
            }
            break;
        case 'admin-someone':
            window.location.href = "someone-admin.html";
            break;
        case 'mysterie-tips':
            window.location.href = "tips-admin.html";
            break;
        case 'admin-mysterie':
            window.location.href = "mysterie-admin.html";
            break;
    }
}

function openMysteriePlay() {
    window.location.href = "quiztit/quiztitspel.html";
}

function openSecureScroll() {
    window.location.href = "scroll.html";
}

function closeGate() {
    const gate = document.getElementById('password-gate');
    if (gate) gate.style.display = 'none';
    const input = document.getElementById('password-input');
    if (input) input.value = "";
    const error = document.getElementById('error-container');
    if (error) error.style.display = 'none';
}

function closeForm() {
    const form = document.getElementById('form-section');
    if (form) form.style.display = 'none';
}

/* =========================================
   2. TAAL ENGINE & UI UPDATES
   ========================================= */

function setLanguage(lang) {
    config.currentLang = lang;
    localStorage.setItem('preferred_lang', lang);

    // Update alle teksten met data-i18n attribuut
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = config.translations[lang][key];
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.innerHTML = translation;
            }
        }
    });

    // Update specifieke UI onderdelen
    updateLangButtons(lang);
    updatePDFHub(lang);
    
    // Refresh spreadsheet data als we op de legende pagina zijn
    if (typeof fetchStory === 'function') fetchStory();
    if (typeof fetchLegendeData === 'function') fetchLegendeData();
}

function updateLangButtons(lang) {
    const btns = document.querySelectorAll('#btn-nl, #btn-fr, .language-switch-nav button, .pdf-lang-btn');
    btns.forEach(btn => {
        const btnId = btn.id || btn.getAttribute('onclick') || "";
        const isNL = btnId.includes('nl') || btnId.includes("'nl'");
        const isFR = btnId.includes('fr') || btnId.includes("'fr'");
        
        if (isNL) btn.classList.toggle('active-lang', lang === 'nl');
        if (isFR) btn.classList.toggle('active-lang', lang === 'fr');
    });
}

function updatePDFHub(lang) {
    document.querySelectorAll('.pdf-item').forEach(item => {
        const titleEl = item.querySelector('h4');
        const btnEl = item.querySelector('.download-btn span');
        
        if (titleEl) {
            const translation = titleEl.getAttribute(`data-${lang}`);
            if (translation) titleEl.innerText = translation;
        }
        
        if (btnEl) {
            btnEl.innerText = config.translations[lang]["btn-download"];
        }
    });
}

/* =========================================
   3. FORMULIER VERZENDING (MAKE.COM)
   ========================================= */

async function submitForm() {
    const submitBtn = document.querySelector('#dragon-form .submit-btn');
    if (!submitBtn) return;

    const originalText = submitBtn.innerText;
    submitBtn.disabled = true;
    submitBtn.innerText = "...";

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
        const response = await fetch(makeWebhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert(config.translations[config.currentLang]["success-alert"]);
            document.getElementById('dragon-form').reset();
            closeForm();
        } else {
            throw new Error();
        }
    } catch (error) {
        alert(config.translations[config.currentLang]["error-alert"]);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
    }
}

/* =========================================
   4. HELPERS & INITIALISATIE
   ========================================= */

function copyPassword() {
    const copyText = document.getElementById("deelnemer_ww");
    if (!copyText) return;

    copyText.type = "text"; 
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyText.type = "password"; 
    
    const btn = document.querySelector('.copy-btn');
    if (btn) {
        const originalIcon = btn.innerText;
        btn.innerText = "✅";
        setTimeout(() => { btn.innerText = originalIcon; }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Menu laden
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        fetch('menu.html')
            .then(res => res.text())
            .then(data => {
                navPlaceholder.innerHTML = data;
                setLanguage(config.currentLang);
            })
            .catch(() => setLanguage(config.currentLang));
    } else {
        setLanguage(config.currentLang);
    }

    // Enter toets op password gate
    const pwInput = document.getElementById('password-input');
    if (pwInput) {
        pwInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkAccess();
        });
    }
});
