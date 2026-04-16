// VERVANG DEZE URL door je eigen Google Sheets CSV Link
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSbgWdp6pG7lbbrWC35FvNLwH756-cr1JvGf8LIau3DuLXlk8ninpYwa6tA8eLapPaK1KmvsZcYervP/pub?gid=209829391&single=true&output=csv';

let allData = [];

async function init() {
    try {
        const response = await fetch(csvUrl);
        const text = await response.text();
        const rows = text.split('\n').map(row => row.split(','));
        // We slaan de header (rij 1) over
        allData = rows.slice(1).filter(r => r.length > 2);
        renderCards('front');
    } catch (err) {
        document.getElementById('status-msg').innerHTML = "❌ Fout bij laden: " + err;
    }
}

// Nieuwe hulpfunctie om tekst passend te maken
function fitText(card) {
    const area = card.querySelector('.tips-area');
    if (!area) return;

    let fontSize = 11; // Startgrootte conform je CSS
    const minFontSize = 7; // Minimale leesbare grootte

    area.style.fontSize = fontSize + "px";

    // Verklein font-size zolang de inhoud groter is dan de beschikbare hoogte
    while (area.scrollHeight > area.clientHeight && fontSize > minFontSize) {
        fontSize -= 0.5;
        area.style.fontSize = fontSize + "px";
    }
}

// Hulpfunctie om een pagina te maken
function createPage(batch, view) {
    const page = document.createElement('div');
    page.className = 'a4-page';
    
    let currentBatch = [...batch];

    if (view === 'back') {
        // SPIEGELEN VOOR DUBBELZIJDIG PRINTEN:
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
                    <span>${t.trim()}</span>
                </div>
            `).join('');

            card.innerHTML = `
                <div class="cat-header cat-${categorie.toLowerCase()}">${categorie}</div>
                <div class="tips-area">${tipsHtml}</div>
                <div class="solution-area">${oplossing}</div>
            `;
            
            // Voeg de kaart eerst toe zodat clientHeight/scrollHeight gemeten kunnen worden
            page.appendChild(card);
            // Maak de tekst passend voor deze specifieke kaart
            fitText(card);
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
    }, 250); // Iets ruimer genomen voor de fitText berekeningen
}

init();
