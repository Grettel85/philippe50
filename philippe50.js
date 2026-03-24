const config = {
    currentLang: 'nl',
    translations: {
        nl: {
            "lookup-title": "Ontgrendel jouw hoofdstuk",
            "lookup-desc": "Voer je nickname en het geheime woord in.",
            "show-story-btn": "Toon mijn verhaal",
            "loading-story": "De nevels trekken op...",
            "back-link": "← Terug naar de start",
            "not-found": "Geen match gevonden. Controleer je gegevens."
        },
        fr: {
            "lookup-title": "Débloquez votre chapitre",
            "lookup-desc": "Entrez votre nickname et le mot secret.",
            "show-story-btn": "Afficher mon histoire",
            "loading-story": "Les brumes se lèvent...",
            "back-link": "← Retour au début",
            "not-found": "Aucune correspondance trouvée."
        }
    }
};

const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8NcRn-YMmbVuxKlYx_WT9_QZEB5eaFbiygWphB86Ya2mzMswKVwVlqFpBDe5ewM6f1uFh2wi8nIDk/pub?output=csv';

function setLanguage(lang) {
    config.currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (config.translations[lang][key]) el.innerText = config.translations[lang][key];
    });

    document.getElementById('btn-nl').className = lang === 'nl' ? 'lang-active' : '';
    document.getElementById('btn-fr').className = lang === 'fr' ? 'lang-active' : '';
    
    document.getElementById('lookup-name').placeholder = lang === 'nl' ? "Jouw Nickname..." : "Ton Nickname...";
}

async function findPersonalStory() {
    const name = document.getElementById('lookup-name').value.toLowerCase().trim();
    const pw = document.getElementById('lookup-pw').value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');

    if (!name || !pw) return;

    container.innerHTML = `<p style="color:#00f2ff; margin-top:20px;">${config.translations[config.currentLang]["loading-story"]}</p>`;

    try {
        const response = await fetch(sheetURL + '&cache=' + Date.now());
        const data = await response.text();
        const rows = data.split('\n').slice(1);
        let found = false;

        rows.forEach(row => {
            const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const sheetStory = cols[1]?.replace(/^"|"$/g, '').trim();
            const sheetName = cols[2]?.replace(/^"|"$/g, '').toLowerCase().trim();
            const sheetPw = cols[4]?.replace(/^"|"$/g, '').toLowerCase().trim();

            if (sheetName === name && sheetPw === pw) {
                found = true;
                container.innerHTML = `<div class="story-text">${sheetStory}</div>`;
            }
        });

        if (!found) {
            container.innerHTML = `<p style="color:#ff00de; margin-top:20px;">${config.translations[config.currentLang]["not-found"]}</p>`;
        }
    } catch (err) {
        container.innerHTML = "<p style='color:#ff00de;'>Error verbinding.</p>";
    }
}

// Start in NL
document.addEventListener('DOMContentLoaded', () => setLanguage('nl'));
