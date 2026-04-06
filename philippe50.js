/* ==========================================================================
   VERSION: PHILIPPE 50 - TOTAL ENGINE (V3.5 - Bilingual Time Traveler)
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
            // Placeholders
            "placeholder-pw-code": "Wachtwoord...",
            "placeholder-name": "Nickname...",
            "placeholder-pw": "Geheim woord...",
            "placeholder-setting": "bijv. 1984, de toekomst, disco-tijd...",
            "placeholder-obstacle": "bijv. De wifi is weg, wiel van waveboard stuk...",
            "placeholder-soundtrack": "Artiest - Titel",
            // Hoofdstuk 1
            "chapter1-title": "Hoofdstuk 1: De Grammofoonspeler",
            "chapter1-text": "Philippe zat op een ochtend thuis in de veranda rustig van een tasje koffie te genieten, met zijn spotify playlist op de achtergrond. Zijn ogen gesloten genoot hij van de zon op zijn gezicht.\n\nDe combi video en DVD-speler rolde met zijn ogen en de oude grammofoonspeler onder de televisie kreunde, weeral die 'moderne' muziek. Toen kwam er plots een tijdsglitch langs en de grammofoonspeler schrikte op. Door de schok verplaatste de naald die nog op een oude grammofoonplaat lag, en kwam bovenop een van de ribbels terecht. De grammofoonspeler probeerde de naald terug in de juiste groef te schudden, maar de tijdsglitch keerde onverwacht terug en de kamer begon plots te draaien.\n\nPhilippe hoorde de muziek van Spotify niet meer, maar er klonken langzaamaan vanuit de verte de klanken van de bekende ABBA hit 'Fernando' door de kamer. Hij opende zijn ogen en zag dat hij nog steeds in de zetel zat. Maar de kamer rondom hem, was niet meer de kamer van zijn huis in Kessel-Lo. De datum op de krant vertelde hem dat hij beland was in 14 april 1976 om exact 13:30.\n\n50j terug in de tijd. Hoe geraakt hij terug naar de toekomst?",
            // Loader & Feedback
            "loader-phrases": ["De naald zoekt de juiste groef...", "Tijdsglitch stabiliseren...", "De legende wordt geschreven..."],
            "sync-msg": "De chronometer synchroniseert met 1976... De tijdlijn stabiliseert bijna.",
            "no-match": "Geen match gevonden. Controleer je nickname en geheim woord.",
            "success-alert": "Je hoofdstuk wordt geschreven!",
            "error-alert": "Fout bij verzenden van data.",
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
            // Placeholders
            "placeholder-pw-code": "Mot de passe...",
            "placeholder-name": "Nickname...",
            "placeholder-pw": "Mot secret...",
            "placeholder-setting": "ex: 1984, le futur, l'époque disco...",
            "placeholder-obstacle": "ex: Le wifi est coupé, une roue du waveboard est cassée...",
            "placeholder-soundtrack": "Artiste - Titre",
            // Hoofdstuk 1
            "chapter1-title": "Chapitre 1: Le Gramophone",
            "chapter1-text": "Un matin, Philippe dégustait tranquillement son café dans la véranda, sa playlist Spotify en fond sonore. Les yeux fermés, il profitait du soleil sur son visage.\n\nLe combiné vidéo-DVD leva les yeux au ciel et le vieux gramophone sous le téléviseur grogna : encore cette musique 'moderne'. Soudain, un glitch temporel survint et le gramophone sursauta. Sous le choc, le saphir se déplaça sur un vieux disque et atterrit sur un sillon. Le glitch revint de plus belle et la pièce commença à tourner.\n\nAu lieu de Spotify, les notes du tube 'Fernando' d'ABBA résonnèrent au loin. Il ouvrit les yeux. Il était toujours dans son fauteuil, mais la pièce n'était plus celle de sa maison à Kessel-Lo. Le journal sur la table affichait une date surprenante : 14 avril 1976, 13h30 précises.\n\nPropulsé 50 ans en arrière. Comment reviendra-t-il vers le futur ?",
            // Loader & Feedback
            "loader-phrases": ["Le saphir cherche le bon sillon...", "Stabilisation du glitch...", "La légende s'écrit..."],
            "sync-msg": "Le chronomètre se synchronise avec 1976... La chronologie se stabilise.",
            "no-match": "Aucune correspondance trouvée. Vérifiez votre nickname et mot secret.",
            "success-alert": "Votre chapitre est en cours d'écriture !",
            "error-alert": "Erreur lors de l'envoi des données.",
            "wait-longer": "C'est un peu long... rafraîchissez la page."
        }
    }
};

const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8NcRn-YMmbVuxKlYx_WT9_QZEB5eaFbiygWphB86Ya2mzMswKVwVlqFpBDe5ewM6f1uFh2wi8nIDk/pub?output=csv';
const makeWebhookURL = "https://hook.eu1.make.com/ywmy2xr3wy53a3f4zadrdws3hiex3h3f"; 

/* =========================================
   CORE LOGIC & NAVIGATION
   ========================================= */

function setLanguage(lang) {
    config.currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = config.translations[lang][key];
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.innerText = translation;
            }
        }
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
   FORM SUBMISSION
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
            alert(config.translations[config.currentLang]["success-alert"]);
            window.location.href = "mijn-verhaal.html";
        } else {
            alert(config.translations[config.currentLang]["error-alert"]);
        }
    } catch (error) {
        alert(config.translations[config.currentLang]["error-alert"]);
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
        const chapLabel = config.currentLang === 'nl' ? 'HOOFDSTUK' : 'CHAPITRE';
        
        rows.forEach((row, index) => {
            const cols = splitCSVRow(row);
            const text = getLanguageSpecificText(cleanCSVValue(cols[1]), config.currentLang);
            if (text) {
                html += `<div class="story-entry glass-card" style="margin-bottom:20px; padding:20px; background:rgba(255,255,255,0.05); border-radius:15px;">
                            <h3 style="color:#00f2ff;">${chapLabel} ${index + 1}: ${cleanCSVValue(cols[2])}</h3>
                            <div style="white-space:pre-wrap;">${text}</div>
                         </div>`;
            }
        });
        container.innerHTML = html || (config.currentLang === 'nl' ? "Nog geen verhalen." : "Pas encore d'histoires.");
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
    const typewriterOutput = document.getElementById('typewriter-output');
    const hoofdstukVast = document.getElementById('hoofdstuk-vast');
    
    if (!nameInput || !pwInput) {
        alert(config.currentLang === 'nl' ? "Vul beide velden in." : "Veuillez remplir les deux champs.");
        return;
    }

    if (typewriterOutput) {
        typewriterOutput.innerHTML = `<p><em>${config.translations[config.currentLang]["sync-msg"]}</em></p>`;
    }

    try {
        const res = await fetch(sheetURL + '&cb=' + Date.now());
        const rows = getCSVRows(await res.text()).slice(1); 
        let foundRow = null;
        let foundIndex = -1;

        rows.forEach((row, index) => {
            const cols = splitCSVRow(row);
            if (cleanCSVValue(cols[2]).toLowerCase() === nameInput && cleanCSVValue(cols[4]).toLowerCase() === pwInput) {
                foundRow = cols;
                foundIndex = index;
            }
        });

        if (foundRow) {
            if (hoofdstukVast) hoofdstukVast.style.display = 'block';
            const text = getLanguageSpecificText(cleanCSVValue(foundRow[1]), config.currentLang);
            const chapterTitle = cleanCSVValue(foundRow[2]);
            const chapLabel = config.currentLang === 'nl' ? 'HOOFDSTUK' : 'CHAPITRE';

            setTimeout(() => {
                const fullOutput = `<h3 style="color:#00f2ff; margin-top:20px;">${chapLabel} ${foundIndex + 2}: ${chapterTitle}</h3><div id="typing-area" style="white-space:pre-wrap; color: white; line-height:1.6;"></div>`;
                if (typewriterOutput) {
                    typewriterOutput.innerHTML = fullOutput;
                    typeWriter(text, "typing-area", 30);
                }
            }, 1000);
        } else {
            if (typewriterOutput) typewriterOutput.innerHTML = `<p style='color: #ff4d4d;'>${config.translations[config.currentLang]["no-match"]}</p>`;
        }
    } catch (e) {
        console.error(e);
    }
}

/* INITIALIZATION */
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('nl'); 
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

function typeWriter(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) return;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }
    type();
}
