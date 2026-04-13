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
 * @param {string} mode - 'mix' of 'kids'
 */
function generateGrid(mode = 'mix') {
    const grid = document.getElementById('bingo-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    fillGridWithTasks(grid, mode);
}

/**
 * Hulpfunctie om een specifieke grid-container te vullen met taken
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
            <div class="task-wrapper">
                ${contentHtml}
            </div>
            <div class="name-line"></div>
        `;
        targetGrid.appendChild(cell);
    });

    // Pas tekstgrootte aan na vullen
    setTimeout(fitTextInCells, 50);
}

/**
 * Past de lettergrootte van de tekst aan zodat deze altijd in de cel past.
 */
function fitTextInCells() {
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach(cell => {
        const wrapper = cell.querySelector('.task-wrapper');
        const taskText = cell.querySelector('.task-text');
        
        if (!wrapper || !taskText) return;

        let fontSize = 13; 
        const minFontSize = 8; 

        taskText.style.fontSize = fontSize + "px";

        while (taskText.scrollHeight > wrapper.clientHeight && fontSize > minFontSize) {
            fontSize -= 0.5;
            taskText.style.fontSize = fontSize + "px";
        }
    });
}

/**
 * Genereert meerdere boekjes en opent daarna het printvenster
 */
async function prepareAndPrint(mode) {
    const count = parseInt(document.getElementById('print-count').value) || 1;
    const container = document.querySelector('.book-container');
    const statusMsg = document.getElementById('status-msg');
    
    // Bewaar de huidige pagina 3 inhoud om deze te dupliceren
    const page3Content = document.querySelector('.page-3').innerHTML;
    
    container.innerHTML = ''; 
    statusMsg.innerText = `Bezig met genereren van ${count} unieke boekjes...`;

    for (let i = 0; i < count; i++) {
        const bookSet = document.createElement('div');
        bookSet.className = 'book-set'; 
        
        bookSet.innerHTML = `
            <div class="a4-page page-1"></div>
            <div class="a4-page page-2">
                <div class="grid-container"></div>
            </div>
            <div class="a4-page page-3">
                ${page3Content}
            </div>
            <div class="a4-page page-4"></div>
        `;

        container.appendChild(bookSet);
        const currentGrid = bookSet.querySelector('.grid-container');
        fillGridWithTasks(currentGrid, mode); 
    }

    statusMsg.innerText = "Klaar! Printer opent nu...";
    
    setTimeout(() => {
        window.print();
    }, 1000);
}

// Initialiseer het script
window.onload = loadData;
