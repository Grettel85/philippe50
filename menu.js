/* ==========================================================================
   PHILIPPE 50 - MENU LOADER (Haalt menu.html op)
   ========================================================================== */

function loadMenu() {
    const placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;

    // We halen het centrale menu.html bestand op
    // Let op: ../menu.html werkt als je in een submap zit (zoals /verhaal/)
    // Als dit niet werkt voor index.html, gebruik dan 'menu.html'
    fetch('https://grettel85.github.io/philippe50/menu.html')
        .then(response => {
            if (!response.ok) throw new Error('Menu niet gevonden');
            return response.text();
        })
        .then(data => {
            placeholder.innerHTML = data;
            
            // Nadat het menu geladen is, kijken we of we de taal moeten instellen
            if (typeof setLanguage === 'function') {
                const currentLang = (typeof config !== 'undefined' && config.currentLang) ? config.currentLang : 'nl';
                setLanguage(currentLang);
            }

            // CRUCIAAL: Als we op de soundtrack pagina zijn, tekenen we nu de tracks
            // Dit lost het flikkeren/verdwijnen op!
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
