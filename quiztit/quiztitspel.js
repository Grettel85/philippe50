/* =========================================
   QUIZTITSPEL ENGINE
   ========================================= */

// --- LIVE KOPPELING ---
const sheetCSVUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbgWdp6pG7lbbrWC35FvNLwH756-cr1JvGf8LIau3DuLXlk8ninpYwa6tA8eLapPaK1KmvsZcYervP/pub?gid=209829391&single=true&output=csv";
let realGameData = []; 

let currentData = null; 
let availableTips = []; 
let openedTipsCount = 0;
let solution = "";

// Functie om de data uit Google Sheets te laden
async function loadSheetData() {
    try {
        const response = await fetch(sheetCSVUrl);
        const csvText = await response.text();
        
        // CSV omzetten naar bruikbare objecten
        const rows = csvText.split('\n').slice(1); 
        
        realGameData = rows.map(row => {
            // Split kolommen en verwijder aanhalingstekens van Google Sheets
            const columns = row.split(',').map(col => col.replace(/^"(.*)"$/, '$1').trim()); 
            return {
                categorie: columns[2], // Kolom C
                oplossing: columns[3], // Kolom D
                tips: columns[4]       // Kolom E
            };
        }).filter(item => item.oplossing && item.tips); 

        console.log("Data succesvol geladen");
        document.getElementById('start-btn').innerText = "START HET SPEL";
    } catch (error) {
        console.error("Fout bij laden Sheet:", error);
    }
}

// Start direct met laden bij openen pagina
loadSheetData();

document.getElementById('start-btn').addEventListener('click', startNewGame);

function startNewGame() {
    // Gebruik de data uit de sheet. Als die er niet is, doe niets.
    if (realGameData.length === 0) {
        alert("Momentje, de raadsels worden nog geladen...");
        return;
    }
    
    const randomGame = realGameData[Math.floor(Math.random() * realGameData.length)];
    
    // Reset popup titels voor het geval er vorige keer gepast is
    const winTitle = document.querySelector('.win-title');
    if (winTitle) {
        winTitle.innerText = "GEVONDEN!";
        winTitle.style.color = "#00ff00";
    }
    
    // Verberg pass-knop bij start nieuwe kaart
    const passBtn = document.getElementById('pass-btn');
    if (passBtn) passBtn.style.display = 'none';

    setupGame(randomGame);
}

function setupGame(data) {
    currentData = data;
    solution = data.oplossing.toLowerCase().trim();
    availableTips = data.tips.split('|'); 
    openedTipsCount = 0;

    // Reset UI & Schoonmaak van oude hints
    document.getElementById('setup-area').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('display-categorie').innerText = data.categorie;
    document.getElementById('display-score').innerText = `Punten: 15`;
    
    // Herstel de hints-box naar de beginstaat (grid layout)
    document.getElementById('hints-display').innerHTML = '<p id="hint-text">Klik op een nummer om een tip te onthullen...</p>';
    
    document.getElementById('message-box').innerText = "";
    document.getElementById('guess-input').value = "";
    document.getElementById('guess-input').disabled = true;
    document.getElementById('guess-btn').disabled = true;
    
    createGrid();
}

function createGrid() {
    const grid = document.getElementById('numbers-grid');
    grid.innerHTML = "";
    for (let i = 1; i <= 15; i++) {
        const btn = document.createElement('button');
        btn.className = 'num-btn';
        btn.innerText = i;
        btn.onclick = () => revealTip(btn);
        grid.appendChild(btn);
    }
}

function revealTip(btn) {
    if (availableTips.length === 0) return;

    // Maak de foutmelding leeg zodra een nieuwe tip wordt gevraagd
    document.getElementById('message-box').innerText = "";

    const randomIndex = Math.floor(Math.random() * availableTips.length);
    const tip = availableTips.splice(randomIndex, 1)[0];

    const hintDisplay = document.getElementById('hints-display');
    
    // Verberg placeholder tekst bij de eerste tip
    if (openedTipsCount === 0) {
        document.getElementById('hint-text').style.display = 'none';
    }

    // Maak een DIV voor het 3-kolommen grid
    const newTipDiv = document.createElement('div');
    newTipDiv.className = 'revealed-tip fade-in';
    newTipDiv.innerText = tip;
    
    hintDisplay.appendChild(newTipDiv);
    
    openedTipsCount++;
    btn.disabled = true;
    btn.classList.add('used');
    
    document.getElementById('display-score').innerText = `Punten: ${15 - openedTipsCount + 1}`;

    document.getElementById('guess-input').disabled = false;
    document.getElementById('guess-btn').disabled = false;
    document.getElementById('guess-input').focus();

    // --- FOCUS-FIX TOEGEVOEGD ---
    hintDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    hintDisplay.classList.add('highlight-hint');
    setTimeout(() => hintDisplay.classList.remove('highlight-hint'), 500);
    // ----------------------------

    // Toon de pass-knop als alle 15 tips open zijn
    if (openedTipsCount === 15) {
        const passBtn = document.getElementById('pass-btn');
        if (passBtn) passBtn.style.display = 'block';
    }
}

document.getElementById('guess-btn').addEventListener('click', checkAnswer);

function checkAnswer() {
    const input = document.getElementById('guess-input').value.trim().toLowerCase();
    const msg = document.getElementById('message-box');

    if (input === solution) {
        const eindScore = 15 - openedTipsCount + 1;
        
        document.getElementById('popup-antwoord').innerText = currentData.oplossing;
        document.getElementById('popup-score').innerText = eindScore;
        
        const winTitle = document.querySelector('.win-title');
        winTitle.innerText = "GEVONDEN!";
        winTitle.style.color = "#00ff00";

        // Reset naar winst-uitstraling
        const confettiElement = document.querySelector('.confetti');
        confettiElement.innerHTML = "🎉🏆🎉";
        confettiElement.classList.remove('no-animation');
        document.querySelector('.modal-content').classList.remove('is-failure');
        document.querySelector('.score-label').innerText = "GEWONNEN PUNTEN";

        const popup = document.getElementById('win-popup');
        popup.style.display = 'flex'; 
        
        document.getElementById('guess-input').disabled = true;
        document.getElementById('guess-btn').disabled = true;
        document.querySelectorAll('.num-btn').forEach(b => b.disabled = true);
        
        msg.innerText = "";
    } else {
        msg.innerHTML = `<span style="color: #ff00de; font-weight: bold; text-shadow: 0 0 10px rgba(255,0,222,0.5);">Niet juist... Kies een nieuwe tip!</span>`;
        document.getElementById('guess-input').disabled = true;
        document.getElementById('guess-btn').disabled = true;
        document.getElementById('guess-input').value = "";
    }
}

document.getElementById('play-again-btn').addEventListener('click', () => {
    document.getElementById('win-popup').style.display = 'none';
    startNewGame();
});

// Event listener voor de pass-knop
const passBtnElement = document.getElementById('pass-btn');
if (passBtnElement) {
    passBtnElement.addEventListener('click', () => {
        document.getElementById('popup-antwoord').innerText = currentData.oplossing;
        document.getElementById('popup-score').innerText = "0";
        
        const winTitle = document.querySelector('.win-title');
        if (winTitle) {
            winTitle.innerText = "HELAAS!";
            winTitle.style.color = "#ff00de";
        }
        
        // Helaas-uitstraling aanpassen
        const confettiElement = document.querySelector('.confetti');
        confettiElement.innerHTML = "💥😓💥"; 
        confettiElement.classList.add('no-animation');
        document.querySelector('.modal-content').classList.add('is-failure');
        document.querySelector('.score-label').innerText = "EIND-SCORE";

        const popup = document.getElementById('win-popup');
        popup.style.display = 'flex';
        
        document.getElementById('pass-btn').style.display = 'none';

        document.getElementById('guess-input').disabled = true;
        document.getElementById('guess-btn').disabled = true;
        document.querySelectorAll('.num-btn').forEach(b => b.disabled = true);
    });
}
