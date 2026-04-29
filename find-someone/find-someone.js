/* ==========================================================================
   MODULE: FIND SOMEONE WHO - ENGINE
   INTEGRATION: Compatible with Philippe50.js (Language Sync & Event Safety)
   ========================================================================== */

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5D9KFGXhWV3gpCccVGzsNJAJi-rrqjtkxxJjNvJcI6TTJbXvm8bN--WCNE9LbDob1ZOo4vdNOE1NV/pub?gid=0&single=true&output=csv';

let tasks = [];

/**
 * Laadt de data in bij het openen van de pagina.
 * Gesynchroniseerd met de taalvoorkeur van Philippe50.
 */
async function loadData() {
    const statusMsg = document.getElementById('status-msg');
    const mainContainer = document.getElementById('main-container');

    // Alleen uitvoeren als de bingo-container aanwezig is op deze pagina
    if (!mainContainer) return;

    try {
        // Fetch de data met een cachebust om spreadsheet-updates direct te zien
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

        if (statusMsg) {
            // Check taalvoorkeur uit Philippe50 systeem
            const currentLang = localStorage.getItem('preferred_lang') || 'nl';
            statusMsg.innerText = (currentLang === 'fr') ? "Données chargées. Choisissez un mix!" : "Data succesvol geladen. Kies een mix!";
        }
        
        // Genereer de eerste preview
        generateGrid('mix');
    } catch (error) {
        console.error("Fout bij het laden van de spreadsheet:", error);
        if (statusMsg) statusMsg.innerText = "Fout bij laden van data.";
    }
}

/**
 * Maakt de preview zichtbaar op het scherm
 */
function generateGrid(mode = 'mix') {
    const container = document.getElementById('main-container');
    if (!container) return;
    
    container.innerHTML = '';
    createBooklet(container, mode);
}

/**
 * Creëert de A4 spreads (Pagina 4/1 en 2/3)
 */
function createBooklet(targetContainer, mode) {
    const rulesTemplateElem = document.getElementById('rules-template');
    if (!rulesTemplateElem) return;

    const rulesTemplate = rulesTemplateElem.innerHTML;

    // SPREAD 1 (VOOR- & ACHTERKANT)
    const sheet1 = document.createElement('div');
    sheet1.className = 'a4-page';
    sheet1.innerHTML = `
        <div class="a5-side side-4"></div>
        <div class="a5-side side-1"></div>
    `;
    targetContainer.appendChild(sheet1);

    // SPREAD 2 (BINNENKANT: ROOSTER & LOGBOEK)
    const sheet2 = document.createElement('div');
    sheet2.className = 'a4-page';
    sheet2.innerHTML = `
        <div class="a5-side side-2">
            <div class="grid-container"></div>
        </div>
        <div class="a5-side side-3">
            <div class="rules-container">
                ${rulesTemplate}
            </div>
        </div>
    `;
    targetContainer.appendChild(sheet2);

    const grid = sheet2.querySelector('.grid-container');
    fillGridWithTasks(grid, mode);
}

/**
 * Filtert taken op basis van niveau en vult de cellen
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
        // Split NL/FR indien aanwezig met een '/'
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

    setTimeout(() => fitTextInCells(targetGrid), 50);
}

/**
 * Voorkomt dat tekst uit de vakjes loopt
 */
function fitTextInCells(grid) {
    const cells = grid.querySelectorAll('.cell');
    cells.forEach(cell => {
        const taskText = cell.querySelector('.task-text');
        if (!taskText) return;

        let fontSize = 11; 
        const minFontSize = 7; 
        taskText.style.fontSize = fontSize + "px";

        while (taskText.offsetHeight > (cell.clientHeight - 25) && fontSize > minFontSize) {
            fontSize -= 0.5;
            taskText.style.fontSize = fontSize + "px";
        }
    });
}

/**
 * Genereert de batch voor de printer
 */
async function prepareAndPrint(mode) {
    const countInput = document.getElementById('print-count');
    const count = countInput ? parseInt(countInput.value) : 1;
    const container = document.getElementById('main-container');
    const statusMsg = document.getElementById('status-msg');
    
    if (!container) return;

    container.innerHTML = ''; 
    const currentLang = localStorage.getItem('preferred_lang') || 'nl';
    const waitMsg = (currentLang === 'fr') ? `Génération de ${count} livrets uniques...` : `Bezig met genereren van ${count} unieke boekjes...`;
    
    if (statusMsg) statusMsg.innerText = waitMsg;

    for (let i = 0; i < count; i++) {
        createBooklet(container, mode);
    }

    const readyMsg = (currentLang === 'fr') ? "Prêt! Note: Imprimez en recto-verso sur le bord COURT." : "Klaar! Let op: Print de PDF dubbelzijdig over de KORTE zijde.";
    if (statusMsg) statusMsg.innerText = readyMsg;
    
    setTimeout(() => {
        window.print();
    }, 1000);
}

// VEILIGE INITIALISATIE: Werkt samen met Philippe50.js
window.addEventListener('load', loadData);
