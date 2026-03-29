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
            "back-link": "← Terug naar de start",
            "prologue-title": "Hoofdstuk 0: De Glitch",
            "prologue-text": "Philippe zit thuis in de veranda op een ochtend rustig van een tasje koffie te genieten, met zijn Spotify-playlist op de achtergrond. Met gesloten ogen geniet hij van de zon op zijn gezicht. De oude videospeler rolt met zijn ogen en de oude grammofoonspeler onder de televisie kreunt; alweer die 'moderne' muziek. Dan komt er plots een tijdsglitch langs en de grammofoonspeler schrikt op. Door de schok verplaatst de naald op een oude grammofoonplaat en komt bovenop een van de ribbels terecht. De speler probeert de naald terug in de juiste groef te schudden, maar de tijdsglitch keert onverwacht terug en de kamer begint plots te draaien. Philippe merkt niets van wat er rond hem gebeurt. Het licht wordt weggezogen in een spiraal van duisternis en de kamer lijkt weg te ebben. Hij hoort de muziek van Spotify niet meer, maar de klanken van de ABBA-hit 'Fernando' klinken door de kamer. Vreemd, dacht Philippe, dat stond toch niet in mijn playlist? Hij opent zijn ogen en ziet dat hij nog steeds in de zetel zit. Maar de kamer rondom hem is niet meer zijn huis in Kessel-Lo. Hij wandelt door het huis en herkent de dingen, maar toch ook niet. Op tafel ligt een krant: de geboorteaankondigingen. Er is een kindje geboren met dezelfde naam als hij. Hij slaat de krant dicht en ziet een artikel over de fusies van gemeenten en de viering van 25 jaar Koning Boudewijn. Dan valt zijn Belgische frank: hij staat in de woonkamer van zijn eerste levensjaren. De datum op de krant: 14 april 1976 om exact 13:30. 50 jaar terug in de tijd. Hoe geraakt hij terug naar de toekomst?"
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
            "prologue-title": "Chapitre 0: Le Glitch",
            "prologue-text": "Philippe est assis dans sa véranda un matin, savourant tranquillement une tasse de café avec sa playlist Spotify en arrière-plan. Les yeux fermés, il profite du soleil sur son visage. Le vieux magnétoscope lève les yeux au ciel et le vieux tourne-disque sous le téléviseur gémit; encore cette musique 'moderne'. Soudain, un glitch temporel survient et le tourne-disque sursaute. Sous le choc, le saphir se déplace sur un vieux disque et se retrouve au sommet d'un sillon. L'appareil tente de remettre l'aiguille à sa place, maar le glitch revient de manière inattendue et la pièce commence à tourner. Philippe ne remarque rien de ce qui se passe autour de lui. La lumière est aspirée dans une spirale d'obscurité et la pièce semble s'effacer. Il n'entend plus Spotify, maar les notes du tube 'Fernando' d'ABBA résonnent. Étrange, pense Philippe, ce n'était pas dans ma playlist? Il ouvre les yeux et voit qu'il est toujours dans son fauteuil. Maar la pièce n'est plus sa maison à Kessel-Lo. Il marche dans la maison et reconnaît les objets, maar sans les reconnaître tout à fait. Sur la table traîne un journal: les annonces de naissance. Un enfant est né avec le même nom que lui. Il ferme le journal et voit un artikel sur la fusion des communes et les 25 ans du Roi Baudouin. C'est alors que le franc tombe: il se tient dans le salon de ses deux premières années de vie. La date sur le journal: 14 avril 1976 à 13h30 précises. 50 ans en arrière. Comment reviendra-t-il vers le futur?"
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

    // Update Proloog teksten direct als ze aanwezig zijn
    const pTitle = document.getElementById('prologue-display-title');
    const pText = document.getElementById('prologue-display-text');
    if(pTitle) pTitle.innerText = config.translations[lang]["prologue-title"];
    if(pText) pText.innerText = config.translations[lang]["prologue-text"];

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
    const inputField = document.getElementById('password-input');
    const errorMsg = document.getElementById('error-msg');
    if (!inputField) return;

    const input = inputField.value.trim().toLowerCase();
    
    if (input === "admin50") {
        window.location.href = "legende.html";
        return;
    }

    if (input === config.password.toLowerCase()) {
        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('form-section').style.display = 'block';
    } else {
        if (errorMsg) errorMsg.style.display = 'block';
    }
}

function getLanguageSpecificText(fullText, lang) {
    if (!fullText || !fullText.includes('***')) return fullText;
    const parts = fullText.split('***');
    const nlText = parts[0].trim();
    const frText = parts[1] ? parts[1].trim() : nlText;
    return (lang === 'fr') ? frText : nlText;
}

/* =========================================
   CSV & DATABASE LOGIC
   ========================================= */

function getCSVRows(csvData) {
    const rows = csvData.split(/\r?\n(?=(?:[^"]*"[^"]*")*[^"]*$)/);
    return rows.filter(row => row.trim() !== "");
}

function splitCSVRow(row) {
    return row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
}

function cleanCSVValue(val) {
    if (!val) return "";
    return val.replace(/^"|"$/g, '').replace(/""/g, '"').trim();
}

async function findPersonalStory() {
    const inputName = document.getElementById('lookup-name')?.value.toLowerCase().trim();
    const inputPw = document.getElementById('lookup-pw')?.value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');
    
    if (!inputName || !inputPw || !container) return;

    const lang = config.currentLang;
    const prologueTitle = config.translations[lang]["prologue-title"];
    const prologueText = config.translations[lang]["prologue-text"];
    
    container.innerHTML = `
        <div id="fixed-prologue" class="fade-in" style="margin-bottom: 40px;">
            <h2 id="prologue-display-title" style="color: #ff00de; border-bottom: 1px solid rgba(255, 0, 222, 0.3); padding-bottom: 10px;">${prologueTitle}</h2>
            <p id="prologue-display-text" style="line-height: 1.6; color: #fff; font-size: 1.1em;">${prologueText}</p>
        </div>
        
        <div id="story-divider" style="text-align: center; margin: 50px 0; border-top: 1px dashed #00f2ff; padding-top: 30px;">
            <div class="loader-spinner" style="margin-bottom: 15px;"></div>
            <p id="loader-text" style="color: #00f2ff; font-style: italic; font-family: 'Courier New', monospace; letter-spacing: 1px;">
                ${lang === 'nl' ? "De naald zoekt de juiste groef..." : "Le saphir cherche le bon sillon..."}
            </p>
        </div>

        <div id="final-story-target" class="fade-in"></div>
    `;

    const phrases = lang === 'nl' 
        ? ["Tijdsglitch stabiliseren...", "Herinneringen scannen...", "De legende wordt geschreven...", "Bijna daar..."]
        : ["Stabilisation du glitch...", "Récupération des souvenirs...", "La légende s'écrit...", "Presque là..."];
    
    let phraseIdx = 0;
    const loaderInterval = setInterval(() => {
        const el = document.getElementById('loader-text');
        if (el) {
            el.innerText = phrases[phraseIdx % phrases.length];
            phraseIdx++;
        }
    }, 4500);

    let attempts = 0;
    const maxAttempts = 24; 

    const checkSheet = async () => {
        try {
            const response = await fetch(sheetURL + '&cb=' + Date.now());
            const csvData = await response.text();
            const rows = getCSVRows(csvData).slice(1);
            
            const match = rows.find(row => {
                const cols = splitCSVRow(row);
                return cleanCSVValue(cols[2]).toLowerCase() === inputName && 
                       cleanCSVValue(cols[4]).toLowerCase() === inputPw;
            });

            if (match) {
                const cols = splitCSVRow(match);
                const rawStory = cleanCSVValue(cols[1]);
                const storyText = getLanguageSpecificText(rawStory, lang);
                const realNickname = cleanCSVValue(cols[2]);
                
                clearInterval(loaderInterval);
                const divider = document.getElementById('story-divider');
                if (divider) divider.style.display = 'none';
                
                // Slimme titel check: als de AI al start met "Hoofdstuk", zet de nickname er alleen boven.
                const hasChapterTitle = storyText.trim().toLowerCase().startsWith("hoofdstuk") || storyText.trim().toLowerCase().startsWith("chapitre");
                const displayTitle = hasChapterTitle ? `De Legende van ${realNickname}` : `Hoofdstuk 1: De Legende van ${realNickname}`;

                const target = document.getElementById('final-story-target');
                if (target) {
                    target.innerHTML = `
                        <h2 style="color: #00f2ff; border-bottom: 1px solid rgba(0, 242, 255, 0.3); padding-bottom: 10px;">
                            ${displayTitle}
                        </h2>
                        <div style="border-left: 3px solid #ff00de; padding-left: 20px; margin-top: 20px; color: #e0e0e0; line-height: 1.8; white-space: pre-wrap; font-size: 1.05em;">${storyText}</div>
                    `;
                }
            } else if (attempts < maxAttempts) {
                attempts++;
                setTimeout(checkSheet, 5000); 
            } else {
                clearInterval(loaderInterval);
                const el = document.getElementById('loader-text');
                if (el) el.innerHTML = lang === 'nl' ? "Sessie verlopen. Ververs de pagina." : "Session expirée. Rafraîchir.";
            }
        } catch (e) { console.error(e); }
    };
    checkSheet();
}

async function fetchStory() {
    const container = document.getElementById('story-content');
    if (!container) return;

    try {
        const response = await fetch(sheetURL + '&cb=' + Date.now());
        const csvData = await response.text();
        const rows = getCSVRows(csvData).slice(1);
        let fullHTML = "";

        rows.forEach((row, index) => {
            const cols = splitCSVRow(row);
            const rawStory = cleanCSVValue(cols[1]);
            const nickname = cleanCSVValue(cols[2]) || "Anoniem";
            const storyText = getLanguageSpecificText(rawStory, config.currentLang);

            if (storyText) {
                // Hier ook de slimme check voor de algemene legende pagina
                const hasChapterTitle = storyText.trim().toLowerCase().startsWith("hoofdstuk") || storyText.trim().toLowerCase().startsWith("chapitre");
                const entryTitle = hasChapterTitle ? nickname : `Hoofdstuk ${index + 1}: ${nickname}`;

                fullHTML += `
                    <div class="story-entry" style="margin-bottom: 40px; border-bottom: 1px dashed rgba(0, 242, 255, 0.2); padding-bottom: 20px;">
                        <h3 style="color: #00f2ff; margin-bottom: 10px;">${entryTitle}</h3>
                        <div style="white-space: pre-wrap; line-height: 1.6;">${storyText}</div>
                    </div>`;
            }
        });
        container.innerHTML = fullHTML || "<p>Nog geen verhalen.</p>";
    } catch (error) { container.innerHTML = "Error."; }
}

/* =========================================
   INITIALIZATION
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('nl');

    const loginBtn = document.querySelector('button[data-i18n="login-btn"]');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            checkPassword();
        });
    }

    const form = document.getElementById("dragon-form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const chosenPw = document.getElementById('deelnemer_ww').value.toLowerCase().trim();
            btn.disabled = true;
            btn.innerText = "...";

            try {
                const res = await fetch(sheetURL + '&cb=' + Date.now());
                const data = await res.text();
                const rows = getCSVRows(data).slice(1);
                const isUnique = !rows.some(row => cleanCSVValue(splitCSVRow(row)[4]).toLowerCase() === chosenPw);

                if (!isUnique) {
                    alert(config.currentLang === 'nl' ? "Dit geheime woord bestaat al!" : "Ce mot secret existe déjà !");
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
                    window.location.href = "mijn-verhaal.html";
                } else { throw new Error(); }
            } catch (err) { 
                btn.disabled = false; 
                btn.innerText = "Error - Probeer opnieuw";
            }
        });
    }
});
