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

function renderCards(view) {
    const container = document.getElementById('print-container');
    container.innerHTML = '';
    document.getElementById('status-msg').innerHTML = view === 'front' ? "Aan het laden: VOORKANTEN" : "Aan het laden: ACHTERKANTEN";

    // Verdeel data in blokken van 4 (voor 1 A4)
    for (let i = 0; i < allData.length; i += 4) {
        const page = document.createElement('div');
        page.className = 'a4-page';
        
        let batch = allData.slice(i, i + 4);

        if (view === 'back') {
            // SPIEGELEN VOOR DUBBELZIJDIG PRINTEN:
            // Voorkant: [1, 2]  -> Achterkant: [2, 1]
            //           [3, 4]                 [4, 3]
            let mirroredBatch = [];
            if (batch[1]) mirroredBatch[0] = batch[1];
            if (batch[0]) mirroredBatch[1] = batch[0];
            if (batch[3]) mirroredBatch[2] = batch[3];
            if (batch[2]) mirroredBatch[3] = batch[2];
            batch = mirroredBatch;
        }

        batch.forEach(rowData => {
            const card = document.createElement('div');
            card.className = (view === 'front') ? 'card' : 'card card-back';

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
            }
            page.appendChild(card);
        });
        container.appendChild(page);
    }
}

init();
