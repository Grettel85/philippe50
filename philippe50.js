/* =========================================
    CORE LOGIC (Language & Auth)
   ========================================= */

function setLanguage(lang) {
    config.currentLang = lang;
    
    // 1. Update alle vaste labels (zoals placeholders en knoppen)
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

    // 2. Als er al een verhaal op het scherm staat, update de tekst direct naar de nieuwe taal
    const target = document.getElementById('final-story-target');
    if (target && target.innerHTML !== "") {
        // We triggeren de zoekfunctie opnieuw met de nieuwe taalinstelling
        findPersonalStory();
    }
    
    if (document.getElementById('story-content')) {
        fetchStory();
    }
}

async function findPersonalStory() {
    const inputName = document.getElementById('lookup-name')?.value.toLowerCase().trim();
    const inputPw = document.getElementById('lookup-pw')?.value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');
    if (!inputName || !inputPw || !container) return;

    const lang = config.currentLang;

    // Bouw de container op ZONDER inline styles
    if (!document.getElementById('final-story-target')) {
        container.innerHTML = `
            <div id="fixed-prologue" class="fade-in">
                <h2 id="prologue-display-title">${config.translations[lang]["prologue-title"]}</h2>
                <p class="story-text">${config.translations[lang]["prologue-text"]}</p>
            </div>
            <div id="story-divider">
                <p id="loader-text">${config.translations[lang]["loader-phrases"][0]}</p>
            </div>
            <div id="final-story-target" class="fade-in"></div>
        `;
    } else {
        // Update proloog teksten bij taalswitch
        document.getElementById('prologue-display-title').innerText = config.translations[lang]["prologue-title"];
        document.querySelector('#fixed-prologue .story-text').innerText = config.translations[lang]["prologue-text"];
    }

    // ... (fetch logica blijft hetzelfde) ...

    if (match) {
        const cols = splitCSVRow(match);
        const storyText = getLanguageSpecificText(cleanCSVValue(cols[1]), config.currentLang);
        const name = cleanCSVValue(cols[2]);
        
        const target = document.getElementById('final-story-target');
        // Gebruik klassen in plaats van style="..."
        target.innerHTML = `
            <div class="personal-chapter">
                <h2 class="chapter-title">De Legende van ${name}</h2>
                <div class="typewriter-text">${storyText}</div>
            </div>
        `;
        if(document.getElementById('story-divider')) document.getElementById('story-divider').style.display = 'none';
    }
}
