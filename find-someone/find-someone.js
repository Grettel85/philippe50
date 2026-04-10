// DE LINK NAAR JOUW SPECIFIEKE BINGO-TABBLAD (CSV)
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5D9KFGXhWV3gpCccVGzsNJAJi-rrqjtkxxJjNvJcI6TTJbXvm8bN--WCNE9LbDob1ZOo4vdNOE1NV/pub?gid=0&single=true&output=csv';

let tasks = [];

/**
 * Laadt de data in bij het openen van de pagina
 */
async function loadData() {
    try {
        // Cachebust voorkomt dat de browser een oude versie van je spreadsheet laat zien
        const response = await fetch(csvUrl + '&cachebust=' + Date.now());
        const data = await response.text();
        
        // Splits de rijen (werkt voor zowel Windows als Mac/Linux enters)
        const rows = data.split(/\r?\n/).slice(1); 

        tasks = rows.map(row => {
            // Regex om CSV correct te splitsen, zelfs als er komma's tussen aanhalingstekens staan
            const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            return {
                text: cols[0] ? cols[0].replace(/"/g, '').trim() : '',
                level: parseInt(cols[1]) || 1
            };
        }).filter(t => t.text !== '');

        generateGrid();
    } catch (error) {
        console.error("Fout bij het laden van de spreadsheet:", error);
    }
}

/**
 * Selecteert 12 opdrachten en bouwt het rooster
 */
function generateGrid() {
    const grid = document.getElementById('bingo-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    // We selecteren 4 willekeurige opdrachten per niveau
    const n1 = tasks.filter(t => t.level === 1).sort(() => 0.5 - Math.random()).slice(0, 4);
    const n2 = tasks.filter(t => t.level === 2).sort(() => 0.5 - Math.random()).slice(0, 4);
    const n3 = tasks.filter(t => t.level === 3).sort(() => 0.5 - Math.random()).slice(0, 4);

    // Combineer en hussel de uiteindelijke 12 items
    const finalSelection = [...n1, ...n2, ...n3].sort(() => 0.5 - Math.random());

    finalSelection.forEach(task => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        
        let contentHtml = "";
        
        // Als er een '/' in de tekst staat, splitsen we NL en FR
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

        cell.innerHTML = `
            ${contentHtml}
            <div class="name-line"></div>
        `;
        grid.appendChild(cell);
    });
}

// Start het proces zodra de pagina geladen is
window.onload = loadData;
