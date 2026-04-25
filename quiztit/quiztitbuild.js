/* =========================================
   QUIZTIT BUILDER - UPDATED WITH LANGUAGE & COLOR MAPPING
   ========================================= */

const baseSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbgWdp6pG7lbbrWC35FvNLwH756-cr1JvGf8LIau3DuLXlk8ninpYwa6tA8eLapPaK1KmvsZcYervP/pub?output=csv";

const gids = {
    nl: "209829391",
    fr: "243220785"
};

let allData = [];
let currentLang = 'nl'; // Standaard op NL

async function init() {
    // URL wordt nu dynamisch opgebouwd op basis van taal
    const url = `${baseSheetURL}&gid=${gids[currentLang]}&single=true`;
    
    try {
        const response = await fetch(url + '&cb=' + Date.now());
        const text = await response.text();
        
        // VEILIGERE SPLIT: Eerst regels splitsen, dan kolommen
        const lines = text.split(/\r?\n/);
        allData = lines.slice(1)
            .map(row => row.split(','))
            .filter(r => r.length > 2);

        renderCards('front');
        console.log(`Generator geladen voor: ${currentLang}`);
    } catch (err) {
        document.getElementById('status-msg').innerHTML = "❌ Fout bij laden: " + err;
    }
}

// Functie om van taal te wisselen via de knoppen
window.switchLanguage = function(lang) {
    currentLang = lang;
    init();
};

// Verbeterde fitText met padding-correctie
function fitText(card) {
    const area = card.querySelector('.tips-area');
    if (!area) return;

    let fontSize = 11; 
    const minFontSize = 6; 

    area.style.fontSize = fontSize + "px";
    area.style.lineHeight = "1.1";

    const maxHeight = area.clientHeight - 4; 

    let safetyCounter = 0;
    while (area.scrollHeight > maxHeight && fontSize > minFontSize && safetyCounter < 40) {
        fontSize -= 0.2;
        area.style.fontSize = fontSize + "px";
        safetyCounter++;
    }
}

function createPage(batch, view) {
    const page = document.createElement('div');
    page.className = 'a4-page';
    
    let currentBatch = [...batch];

    if (view === 'back') {
        let mirroredBatch = [];
        if (currentBatch[1]) mirroredBatch[0] = currentBatch[1];
        if (currentBatch[0]) mirroredBatch[1] = currentBatch[0];
        if (currentBatch[3]) mirroredBatch[2] = currentBatch[3];
        if (currentBatch[2]) mirroredBatch[3] = currentBatch[2];
        currentBatch = mirroredBatch;
    }

    currentBatch.forEach(rowData => {
        if (!rowData) return;
        const card = document.createElement('div');
        card.className = (view === 'front') ? 'card card-front' : 'card card-back';

        if (view === 'front') {
            const rawCat = rowData[2] ? rowData[2].trim() : "WAT";
            const oplossing = rowData[3] ? rowData[3].trim() : "";
            const tips = rowData[4] ? rowData[4].split('|') : [];

            // Mapping van Franse termen naar de juiste CSS neon-kleuren
            const colorMap = {
                'QUI': 'wie',
                'QUOI': 'wat',
                'OU': 'waar',
                'QUAND': 'wanneer',
                'ENIGME': 'raadsel'
            };
            
            // Zoek de kleur op, anders gebruik de tekst zelf (voor NL)
            const colorClass = colorMap[rawCat.toUpperCase()] || rawCat.toLowerCase();

            let tipsHtml = tips.map((t, idx) => `
                <div class="tip-row">
                    <span class="tip-num">${idx + 1}</span>
                    <span class="tip-text">${t.trim()}</span>
                </div>
            `).join('');

            card.innerHTML = `
                <div class="cat-header cat-${colorClass}">${rawCat}</div>
                <div class="tips-area">${tipsHtml}</div>
                <div class="solution-area">${oplossing}</div>
            `;
            
            page.appendChild(card);
            
            requestAnimationFrame(() => {
                fitText(card);
            });

        } else {
            page.appendChild(card);
        }
    });
    return page;
}

function renderCards(view) {
    const container = document.getElementById('print-container');
    container.innerHTML = '';
    const status = document.getElementById('status-msg');
    if (status) status.innerHTML = ""; 

    if (view === 'print-all') {
        for (let i = 0; i < allData.length; i += 4) {
            const batch = allData.slice(i, i + 4);
            container.appendChild(createPage(batch, 'front'));
            container.appendChild(createPage(batch, 'back'));
        }
    } else {
        for (let i = 0; i < allData.length; i += 4) {
            const batch = allData.slice(i, i + 4);
            container.appendChild(createPage(batch, view));
        }
    }
}

function combinePrint() {
    renderCards('print-all');
    setTimeout(() => {
        window.print();
    }, 800); 
}

init();
