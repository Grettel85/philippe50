/* =========================================
    CORE LOGIC & STORY LOGIC
   ========================================= */
// ... (Houd je config en setLanguage functies hetzelfde)

async function findPersonalStory() {
    const inputName = document.getElementById('lookup-name')?.value.toLowerCase().trim();
    const inputPw = document.getElementById('lookup-pw')?.value.toLowerCase().trim();
    const container = document.getElementById('personal-story-content');
    
    if (!inputName || !inputPw || !container) return;

    try {
        container.innerHTML = `<p style="color:#00f2ff;">${config.translations[config.currentLang]["loading-story"]}</p>`;
        
        const response = await fetch(sheetURL + '&cachebuster=' + Date.now());
        const csvData = await response.text();
        const rows = csvData.split(/\r?\n/).slice(1);
        let found = false;

        rows.forEach(row => {
            const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const storyText = columns[1] ? columns[1].replace(/^"|"$/g, '').trim() : "";
            const nameInSheet = columns[2] ? columns[2].replace(/^"|"$/g, '').toLowerCase().trim() : "";
            const pwInSheet = columns[4] ? columns[4].replace(/^"|"$/g, '').toLowerCase().trim() : "";

            if (nameInSheet === inputName && pwInSheet === inputPw) {
                found = true;
                
                container.innerHTML = `
                    <p style="color:#00f2ff; font-weight:bold; margin-bottom:10px; text-transform: uppercase;">
                        ${config.currentLang === 'nl' ? 'Gevonden!' : 'Trouvé!'}
                    </p>
                    <div id="google_translate_element"></div>
                    <div class="story-text" style="border-left: 3px solid #ff00de; padding-left: 15px; text-align: left; color: #fff;">
                        ${storyText}
                    </div>
                `;

                setTimeout(() => {
                    const el = document.getElementById('google_translate_element');
                    if (el && el.innerHTML === "" && window.google && google.translate) {
                        new google.translate.TranslateElement({
                            pageLanguage: 'nl',
                            includedLanguages: 'nl,fr,en,de,it,es',
                            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                            autoDisplay: false // CRUCIAAL: Voorkomt dat Google de hele pagina overneemt
                        }, 'google_translate_element');
                    }
                }, 500);
            }
        });

        if (!found) {
            container.innerHTML = `<p style='color:#ff00de;'>${config.currentLang === 'nl' ? "Nickname of geheim woord onjuist." : "Invalide."}</p>`;
        }
    } catch (e) { 
        container.innerHTML = "<p style='color:#ff00de;'>Error verbinding.</p>"; 
    }
}
