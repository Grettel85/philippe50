// VERVANG DEZE URL door je eigen Google Sheets CSV Link
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSbgWdp6pG7lbbrWC35FvNLwH756-cr1JvGf8LIau3DuLXlk8ninpYwa6tA8eLapPaK1KmvsZcYervP/pub?gid=209829391&single=true&output=csv';

let allData = [];

async function init() {
    try {
        const response = await fetch(csvUrl);
        const text = await response.text();
        const rows = text.split('\n').map(row => row.split(','));
        allData = rows.slice(1).filter(r => r.length > 2);
        renderCards('front');
    } catch (err) {
        document.getElementById('status-msg').innerHTML = "❌ Fout bij laden: " + err;
    }
}

// Verbeterde fitText met padding-correctie
function fitText(card) {
    const area = card.querySelector('.tips-area');
    if (!area) return;

    let fontSize = 11; 
    const minFontSize = 6; 

    area.style.fontSize = fontSize + "px";
    area.style.lineHeight = "1.1";

    // We meten de scrollHeight tegenover de clientHeight.
    // Omdat padding de tekst kan blokkeren, trekken we een veiligheidsmarge van 4px af.
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
            const categorie = rowData[2] ? rowData[2].trim() : "WAT";
            const oplossing = rowData[3] ? rowData[3].trim() : "";
            const tips = rowData[4] ? rowData[4].split('|') : [];

            let tipsHtml = tips.map((t, idx) => `
                <div class="tip-row">
                    <span class="tip-num">${idx + 1}</span>
                    <span class="tip-text">${t.trim()}</span>
                </div>
            `).join('');

            card.innerHTML = `
                <div class="cat-header cat-${categorie.toLowerCase()}">${categorie}</div>
                <div class="tips-area">${tipsHtml}</div>
                <div class="solution-area">${oplossing}</div>
            `;
            
            page.appendChild(card);
            
            // Directe uitvoering én een kleine vertraging voor de zekerheid
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
    // We wachten 800ms zodat alle 'requestAnimationFrames' zeker klaar zijn
    setTimeout(() => {
        window.print();
    }, 800); 
}

init();
