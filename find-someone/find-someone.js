const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5D9KFGXhWV3gpCccVGzsNJAJi-rrqjtkxxJjNvJcI6TTJbXvm8bN--WCNE9LbDob1ZOo4vdNOE1NV/pub?gid=0&single=true&output=csv';

let tasks = [];

/**
 * Laadt de data in bij het openen van de pagina
 */
async function loadData() {
    try {
        const statusMsg = document.getElementById('status-msg');
        
        // Fetch de data met een cachebust
        const response = await fetch(csvUrl + '&cachebust=' + Date.now());
        const data = await response.text();
        
        // Splits de rijen (header overslaan)
        const rows = data.split(/\r?\n/).slice(1); 

        tasks = rows.map(row => {
            const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            return {
                text: cols[0] ? cols[0].replace(/"/g, '').trim() : '',
                level: parseInt(cols[1]) || 1
            };
        }).filter(t => t.text !== '');

        if (statusMsg) statusMsg.innerText = "Data succesvol geladen. Kies een mix!";
        
        // Initial preview
        generateGrid('mix');
    } catch (error) {
        console.error("Fout bij het laden van de spreadsheet:", error);
        const statusMsg = document.getElementById('status-msg');
        if (statusMsg) statusMsg.innerText = "Fout bij laden van data.";
    }
}

/**
 * Maakt één enkel boekje aan voor de preview op het scherm
 */
function generateGrid(mode = 'mix') {
    const container = document.getElementById('main-container');
    if (!container) return;
    
    container.innerHTML = '';
    createBooklet(container, mode);
}

/**
 * De kernfunctie die de pagina's in de juiste "spread" volgorde zet
 */
function createBooklet(targetContainer, mode) {
    const rulesTemplate = document.getElementById('rules-template').innerHTML;

    // SPREAD 1 (VOOR- & ACHTERKANT): Links Pagina 4, Rechts Pagina 1
    const sheet1 = document.createElement('div');
    sheet1.className = 'a4-page';
    sheet1.innerHTML = `
        <div class="a5-side side-4"></div>
        <div class="a5-side side-1"></div>
    `;
    targetContainer.appendChild(sheet1);

    // SPREAD 2 (BINNENKANT): Links Pagina 2, Rechts Pagina 3
    const sheet2 = document.createElement('div');
    sheet2.className = 'a4-page';
    sheet2.innerHTML = `
        <div class="a5-side side-2">
            <div class="grid-container"></div>
        </div>
        <div class="a5-side side-3">
            ${rulesTemplate}
        </div>
    `;
    targetContainer.appendChild(sheet2);

    // Vul het rooster op de linkerhelft van de tweede spread (Pagina 2)
    const grid = sheet2.querySelector('.grid-container');
    fillGridWithTasks(grid, mode);
}

/**
 * Selecteert taken en vult de grid
 */
function fillGridWithTasks(targetGrid, mode) {
    let finalSelection = [];

    if (mode === 'kids') {
        const n1_kids = tasks.filter(t => t.level === 1).sort(() => 0.5 - Math.random()).slice(0, 8);
        const n2_kids = tasks.filter(t => t.level === 2).sort(() => 0.5 - Math.random()).slice(0, 4);
        finalSelection = [...n1_kids, ...n2_kids].sort(() => 0.5 - Math.random());
    } else {
        const n1 = tasks.filter(t => t.level === 1).sort(() => 0.5 - Math.random()).slice(0, 4);
        const n2 = tasks.filter(t => t.level === 2).sort(() => 0.5 - Math.random()).slice(0, 4);
        const n3 = tasks.filter(t => t.level === 3).sort(() => 0.5 - Math.random()).slice(0, 4);
        finalSelection = [...n1, ...n2, ...n3].sort(() => 0.5 - Math.random());
    }

    finalSelection.forEach(task => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        
        let contentHtml = "";
        if (task.text.includes('/')) {
            const parts = task.text.split('/');
            contentHtml = `<div class="task-text">${parts[0].trim()}<span class="lang-fr">${parts[1].trim()}</span></div>`;
        } else {
            contentHtml = `<div class="task-text">${task.text}</div>`;
        }

        cell.innerHTML = `
            ${contentHtml}
            <div class="name-line"></div>
        `;
        targetGrid.appendChild(cell);
    });

    // Pas lettergrootte aan
    setTimeout(() => fitTextInCells(targetGrid), 50);
}

/**
 * Past tekstgrootte aan per grid om overloop te voorkomen
 */
function fitTextInCells(grid) {
    const cells = grid.querySelectorAll('.cell');
    
    cells.forEach(cell => {
        const taskText = cell.querySelector('.task-text');
        if (!taskText) return;

        let fontSize = 11; 
        const minFontSize = 7; 
        taskText.style.fontSize = fontSize + "px";

        // Controleer of tekst buiten de cel (box-sizing) komt
        // We gebruiken een harde grens omdat scrollHeight soms lastig is op A5
        while (taskText.offsetHeight > (cell.clientHeight - 25) && fontSize > minFontSize) {
            fontSize -= 0.5;
            taskText.style.fontSize = fontSize + "px";
        }
    });
}

/**
 * Genereert de volledige batch en opent printmenu
 */
async function prepareAndPrint(mode) {
    const count = parseInt(document.getElementById('print-count').value) || 1;
    const container = document.getElementById('main-container');
    const statusMsg = document.getElementById('status-msg');
    
    container.innerHTML = ''; 
    statusMsg.innerText = `Bezig met genereren van ${count} unieke boekjes...`;

    // Genereer het gevraagde aantal boekjes
    for (let i = 0; i < count; i++) {
        createBooklet(container, mode);
    }

    statusMsg.innerText = "Klaar! Let op: Print de PDF dubbelzijdig over de KORTE zijde.";
    
    setTimeout(() => {
        window.print();
    }, 1000);
}

// Start het laden
window.onload = loadData;
