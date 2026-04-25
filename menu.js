/* ==========================================================================
   PHILIPPE 50 - MENU ENGINE (Injected via menu.js)
   ========================================================================== */

function loadMenu() {
    const placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;

    // We stellen de basis-URL vast in op jouw specifieke GitHub adres
    // Dit voorkomt dat submappen de weg kwijtraken
    const baseUrl = window.location.origin + '/philippe50/';

    placeholder.innerHTML = `
    <nav class="top-nav">
        <div class="nav-container">
            <a href="${baseUrl}index.html" class="nav-logo">PHILIPPE <span class="accent">50</span></a>
            
            <button class="mobile-nav-toggle" onclick="toggleMobileMenu()" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="nav-menu" id="nav-menu">
                <a href="${baseUrl}index.html#section-verhaal" class="nav-link" data-i18n="nav-verhaal">Het Verhaal</a>
                <a href="${baseUrl}index.html#section-someone" class="nav-link" data-i18n="nav-someone">Find Someone</a>
                <a href="${baseUrl}index.html#section-mysterie" class="nav-link" data-i18n="nav-mysterie">Bestemming50</a>
            </div>

            <div class="language-switch-nav">
                <button onclick="setLanguage('nl')" id="btn-nl-nav">NL</button>
                <button onclick="setLanguage('fr')" id="btn-fr-nav">FR</button>
            </div>
        </div>
    </nav>`;

    // Direct de taal synchroniseren nadat het menu is opgebouwd
    if (typeof setLanguage === 'function') {
        const currentLang = (typeof config !== 'undefined' && config.currentLang) ? config.currentLang : 'nl';
        setLanguage(currentLang);
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('nav-menu');
    const toggle = document.querySelector('.mobile-nav-toggle');
    if (menu) {
        menu.classList.toggle('active');
        if (toggle) toggle.classList.toggle('open');
    }
}

// Zorg dat het menu sluit als je op een link klikt
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
        const menu = document.getElementById('nav-menu');
        if (menu && menu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
});

// Start de injectie
document.addEventListener('DOMContentLoaded', loadMenu);
