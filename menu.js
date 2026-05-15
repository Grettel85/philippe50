/* ==========================================================================
   PHILIPPE 50 - MENU LOADER & TRANSLATOR (Haalt menu.html op)
   ========================================================================== */

/**
 * Haalt de vertalingen op uit het JSON-bestand en past deze toe op elementen met data-i18n
 */
async function applyTranslations(lang) {
    try {
        // We halen het JSON bestand op uit de map /taal/ op GitHub
        const response = await fetch('https://grettel85.github.io/philippe50/taal/translations.json');
        if (!response.ok) throw new Error('Vertaalbestand niet gevonden');
        const translations = await response.json();

        // We zoeken alle elementen die een 'data-i18n' attribuut hebben
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    } catch (error) {
        console.error('Fout bij het laden van vertalingen:', error);
    }
}

function loadMenu() {
    const placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;

    // We halen het centrale menu.html bestand op
    fetch('https://grettel85.github.io/philippe50/menu.html')
        .then(response => {
            if (!response.ok) throw new Error('Menu niet gevonden');
            return response.text();
        })
        .then(data => {
            placeholder.innerHTML = data;
            
            // Bepaal de huidige taal
            const currentLang = (typeof config !== 'undefined' && config.currentLang) ? config.currentLang : 'nl';

            // VOER VERTALING UIT VOOR HET MENU
            applyTranslations(currentLang);

            // Nadat het menu geladen is, kijken we of we de taal moeten instellen (vlaggetjes highlighten etc)
            if (typeof setLanguage === 'function') {
                setLanguage(currentLang);
            }

            // CRUCIAAL: Als we op de soundtrack pagina zijn, tekenen we nu de tracks
            if (window.location.pathname.includes('soundtrack') && typeof renderSoundtracks === 'function') {
                renderSoundtracks();
            }
        })
        .catch(error => console.error('Fout bij laden menu:', error));
}

// Deze functies blijven nodig voor de werking van de knoppen in het menu
function toggleMobileMenu() {
    const menu = document.getElementById('nav-menu');
    const toggle = document.querySelector('.mobile-nav-toggle');
    if (menu) {
        menu.classList.toggle('active');
        if (toggle) toggle.classList.toggle('open');
    }
}

// Zorg dat de mobiele knop werkt, ook al is het menu later geladen
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
        const menu = document.getElementById('nav-menu');
        if (menu && menu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
});

// Start de lader
document.addEventListener('DOMContentLoaded', loadMenu);
