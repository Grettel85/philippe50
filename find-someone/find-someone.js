const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5D9KFGXhWV3gpCccVGzsNJAJi-rrqjtkxxJjNvJcI6TTJbXvm8bN--WCNE9LbDob1ZOo4vdNOE1NV/pub?gid=0&single=true&output=csv';

let tasks = [];

/**
 * Laadt de data in bij het openen van de pagina
 */
async function loadData() {
    try {
        const statusMsg = document.getElementById('status-msg');
        
        // Fetch de data met een cachebust om de meest recente spreadsheet-versie te krijgen
        const response = await fetch(csvUrl + '&cachebust=' + Date.now());
        const data = await response.text();
        
        // Splits de rijen (header overslaan)
        const rows = data.split(/\r?\n/).slice(1); 

        tasks = rows.map(row => {
            // Regex om CSV correct te splitsen, rekening houdend met komma's binnen aanhalingstekens
            const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            return {
                text: cols[0] ? cols[0].replace(/"/g, '').trim() : '',
                level: parseInt(cols[1]) || 1
            };
        }).filter(t => t.text !== '');

        if (statusMsg) statusMsg.innerText = "Data succesvol geladen. Kies een mix!";
        
        // Standaard de volwassenen mix genereren bij het laden
        generateGrid('mix');
    } catch (error) {
        console.error("Fout bij het laden van de spreadsheet:", error);
        const statusMsg = document.getElementById('status-msg');
        if (statusMsg) statusMsg.innerText = "Fout bij laden van data.";
    }
}

/**
 * Selecteert 12 opdrachten en bouwt het rooster op Pagina 2
 * @param {string} mode - 'mix' (volwassenen 1,2,3) of 'kids' (kinderen 1,2)
 */
function generateGrid(mode = 'mix') {
    const grid = document.getElementById('bingo-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    let finalSelection = [];

    if (mode === 'kids') {
        // Kindermix: 8 items van niveau 1 en 4 items van niveau 2
        const n1_kids = tasks.filter(t => t.level === 1).sort(() => 0.5 - Math.random()).slice(0, 8);
        const n2_kids = tasks.filter(t => t.level === 2).sort(() => 0.5 - Math.random()).slice(0, 4);
        finalSelection = [...n1_kids, ...n2_kids].sort(() => 0.5 - Math.random());
    } else {
        // Volwassenen Mix: 4 items per niveau (1, 2 en 3)
        const n1 = tasks.filter(t => t.level === 1).sort(() => 0.5 - Math.random()).slice(0, 4);
        const n2 = tasks.filter(t => t.level === 2).sort(() => 0.5 - Math.random()).slice(0, 4);
        const n3 = tasks.filter(t => t.level === 3).sort(() => 0.5 - Math.random()).slice(0, 4);
        finalSelection = [...n1, ...n2, ...n3].sort(() => 0.5 - Math.random());
    }

    finalSelection.forEach(task => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        
        let contentHtml = "";
        
        // Als de tekst een "/" bevat, splitsen we deze op voor NL en FR
        if (task.text.includes('/')) {
            const parts = task.text.split('/');
            const nlText = parts[0].trim();
            const frText = parts[1].trim();
            contentHtml = `
                <div class="task-text">
                    ${nlText}
                    <span class="lang-fr">${frText}</span>
                </div>`;
        } else {
            contentHtml = `<div class="task-text">${task.text}</div>`;
        }

        // De cel opbouwen volgens de styling-structuur
        cell.innerHTML = `
            <div class="task-wrapper">
                ${contentHtml}
            </div>
            <div class="name-line"></div>
        `;
        grid.appendChild(cell);
    });
}

// Initialiseer het script
window.onload = loadData;
