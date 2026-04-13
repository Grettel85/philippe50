const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5D9KFGXhWV3gpCccVGzsNJAJi-rrqjtkxxJjNvJcI6TTJbXvm8bN--WCNE9LbDob1ZOo4vdNOE1NV/pub?gid=0&single=true&output=csv';

let tasks = [];

/**
 * Laadt de data in bij het openen van de pagina
 */
async function loadData() {
    try {
        const statusMsg = document.getElementById('status-msg');
        const response = await fetch(csvUrl + '&cachebust=' + Date.now());
        const data = await response.text();
        const rows = data.split(/\r?\n/).slice(1); 

        tasks = rows.map(row => {
            const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            return {
                text: cols[0] ? cols[0].replace(/"/g, '').trim() : '',
                level: parseInt(cols[1]) || 1
            };
        }).filter(t => t.text !== '');

        if (statusMsg) statusMsg.innerText = "Data succesvol geladen. Kies een mix!";
        generateGrid('mix');
    } catch (error) {
        console.error("Fout bij het laden van de spreadsheet:", error);
        const statusMsg = document.getElementById('status-msg');
        if (statusMsg) statusMsg.innerText = "Fout bij laden van data.";
    }
}

/**
 * Toont een preview op het scherm (enkel voor de interface)
 */
function generateGrid(mode = 'mix') {
    const container = document.getElementById('main-container');
    if (!container) return;
    
    container.innerHTML = '';
    // Voor de preview op het scherm genereren we gewoon 1 boekje in boek-volgorde
    createBooklet(container, mode);
}

/**
 * De kern-functie die een boekje opbouwt in PDF-volgorde (impositie)
 */
function createBooklet(targetContainer, mode) {
    // VEL 1: Buitenkant (Links: Pagina 4 | Rechts: Pagina 1)
    const sheet1 = document.createElement('div');
    sheet1.className = 'a4-page';
    sheet1.innerHTML = `
        <div class="a5-side side-4"></div>
        <div class="a5-side side-1"></div>
    `;
    targetContainer.appendChild(sheet1);

    // VEL 2: Binnenkant (Links: Pagina 2 | Rechts: Pagina 3)
    const sheet2 = document.createElement('div');
    sheet2.className = 'a4-page';
    
    // We halen de regels uit het template in de HTML
    const rulesTemplate = document.getElementById('rules-template').innerHTML;

    sheet2.innerHTML = `
        <div class="a5-side side-2">
            <div class="grid-container"></div>
        </div>
        <div class="a5-side side-3">
            ${rulesTemplate}
        </div>
    `;
    targetContainer.appendChild(sheet2);

    // Vul het rooster op pagina 2 (linkerhelft van vel 2)
    const currentGrid = sheet2.querySelector('.grid-container');
    fillGridWithTasks(currentGrid, mode);
}

/**
 * Vult een grid met taken op basis van de gekozen moeilijkheidsgraad
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

    setTimeout(fitTextInCells, 50);
}

/**
 * Past tekstgrootte aan
 */
function fitTextInCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const taskText = cell.querySelector('.task-text');
        if (!taskText) return;

        let fontSize = 11; // Iets kleiner starten omdat A5 kleiner is
        const minFontSize = 7; 
        taskText.style.fontSize = fontSize + "px";

        // De cel is ongeveer 75-80px hoog op A5
        while (taskText.scrollHeight > 80 && fontSize > minFontSize) {
            fontSize -= 0.5;
            taskText.style.fontSize = fontSize + "px";
        }
    });
}

/**
 * Genereert de batch en print
 */
async function prepareAndPrint(mode) {
    const count = parseInt(document.getElementById('print-count').value) || 1;
    const container = document.getElementById('main-container');
    const statusMsg = document.getElementById('status-msg');
    
    container.innerHTML = ''; 
    statusMsg.innerText = `Bezig met genereren van ${count} unieke boekjes voor PDF...`;

    for (let i = 0; i < count; i++) {
        createBooklet(container, mode);
    }

    statusMsg.innerText = "Klaar! Let op: Print dubbelzijdig over de KORTE zijde.";
    
    setTimeout(() => {
        window.print();
    }, 1000);
}

window.onload = loadData;
