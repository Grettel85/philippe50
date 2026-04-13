const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5D9KFGXhWV3gpCccVGzsNJAJi-rrqjtkxxJjNvJcI6TTJbXvm8bN--WCNE9LbDob1ZOo4vdNOE1NV/pub?gid=0&single=true&output=csv';

let tasks = [];

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
        console.error("Fout bij het laden:", error);
        document.getElementById('status-msg').innerText = "Fout bij laden van data.";
    }
}

function generateGrid(mode = 'mix') {
    const grid = document.getElementById('bingo-grid');
    if (!grid) return;
    grid.innerHTML = '';
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

        cell.innerHTML = `<div class="task-wrapper">${contentHtml}</div><div class="name-line"></div>`;
        grid.appendChild(cell);
    });
}

window.onload = loadData;
