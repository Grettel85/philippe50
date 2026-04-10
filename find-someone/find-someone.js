// DE LINK NAAR JOUW SPECIFIEKE BINGO-TABBLAD (CSV)
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5D9KFGXhWV3gpCccVGzsNJAJi-rrqjtkxxJjNvJcI6TTJbXvm8bN--WCNE9LbDob1ZOo4vdNOE1NV/pub?gid=0&single=true&output=csv';

let tasks = [];

/**
 * Laadt de data in bij het openen van de pagina
 */
async function loadData() {
    try {
        const statusMsg = document.getElementById('status-msg');
        
        // Cachebust voorkomt dat de browser een oude versie van je spreadsheet laat zien
        const response = await fetch(csvUrl + '&cachebust=' + Date.now());
        const data = await response.text();
        
        // Splits de rijen
        const rows = data.split(/\r?\n/).slice(1); 

        tasks = rows.map(row => {
            // Regex om CSV correct te splitsen, zelfs als er komma's tussen aanhalingstekens staan
            const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            return {
                text: cols[0] ? cols[0].replace(/"/g, '').trim() : '',
                level: parseInt(cols[1]) || 1
            };
        }).filter(t => t.text !== '');

        if (statusMsg) statusMsg.innerText = "Data succesvol geladen. Kies een mix!";
        
        // Eerste keer laden: standaard mix
        generateGrid('mix');
    } catch (error) {
        console.error("Fout bij het laden van de spreadsheet:", error);
        const statusMsg = document.getElementById('status-msg');
        if (statusMsg) statusMsg.innerText = "Fout bij laden van data.";
    }
}

/**
 * Selecteert 12 opdrachten en bouwt het rooster
 * @param {string} mode - 'mix' voor volwassenen (1,2,3) of 'kids' voor kinderen (1,2)
 */
function generateGrid(mode = 'mix') {
    const grid = document.getElementById('bingo-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    let finalSelection = [];

    if (mode === 'kids') {
        // Kindermix: We nemen 8 items van niveau 1 en 4 items van niveau 2 (Totaal 12)
        // We skippen niveau 3 volledig
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
        
        // Splitsen van NL en FR voor gelijke waardigheid
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

        // We voegen de 'task-wrapper' toe zodat de CSS de naamlijn mooi onderaan kan pinnen
        cell.innerHTML = `
            <div class="task-wrapper">
                ${contentHtml}
            </div>
            <div class="name-line"></div>
        `;
        grid.appendChild(cell);
    });
}

// Start het proces zodra de pagina geladen is
window.onload = loadData;
