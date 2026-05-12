/* ==========================================================================
   PHILIPPE 50 - MENU ENGINE (Injected via menu.js)
   ========================================================================== */

function loadMenu() {
    const placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;

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
                <a href="${baseUrl}find-someone/find-someone.html" class="nav-link" data-i18n="nav-someone">Find Someone</a>
                <a href="${baseUrl}quiztit/quiztitspel.html" class="nav-link" data-i18n="nav-mysterie">Bestemming50</a>
                <a href="${baseUrl}soundtrack/soundtrack.html" class="nav-link" data-i18n="nav-soundtrack">De Soundtrack</a>
            </div>

            <div class="language-switch-nav">
                <button onclick="setLanguage('nl')" id="btn-nl-nav">NL</button>
                <button onclick="setLanguage('fr')" id="btn-fr-nav">FR</button>
            </div>
        </div>
    </nav>`;

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

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
        const menu = document.getElementById('nav-menu');
        if (menu && menu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
});

document.addEventListener('DOMContentLoaded', loadMenu);
