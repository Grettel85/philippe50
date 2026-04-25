/* =========================================
   QUIZTITSPEL ENGINE - VOLLEDIGE VERSIE
   ========================================= */

// --- CONFIGURATIE & KOPPELING ---
const baseSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbgWdp6pG7lbbrWC35FvNLwH756-cr1JvGf8LIau3DuLXlk8ninpYwa6tA8eLapPaK1KmvsZcYervP/pub?output=csv";

// GID codes voor NL en FR (Vul de FR GID in zodra je die hebt)
const gids = {
    nl: "209829391",
    fr: "209829391" // Voorlopig even dezelfde als NL om fouten te voorkomen
};

let realGameData = []; 
let currentData = null; 
let availableTips = []; 
let openedTipsCount = 0;
let solution = "";
let currentLang = localStorage.getItem('preferred_lang') || 'nl';

// Functie om de data uit Google Sheets te laden op basis van taal
async function loadSheetData() {
    const url = `${baseSheetURL}&gid=${gids[currentLang]}&single=true`;
    try {
        const response = await fetch(url + '&cb=' + Date.now());
        const csvText = await response.text();
        
        // Slimme CSV split die rekening houdt met komma's binnen aanhalingstekens
        const rows = csvText.split(/\r?\n(?=(?:[^"]*"){2})*[^"]*$)/).slice(1);
        
        realGameData = rows.map(row => {
            const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(col => col.replace(/^"(.*)"$/, '$1').trim()); 
            return {
                categorie: columns[2], // Kolom C
                oplossing: columns[3], // Kolom D
                tips: columns[4]       // Kolom E
            };
        }).filter(item => item.oplossing && item.tips); 

        console.log(`Data (${currentLang}) succesvol geladen`);
        const startBtn = document.getElementById('start-btn');
        if(startBtn) startBtn.innerText = currentLang === 'nl' ? "START HET SPEL" : "COMMENCER LE JEU";
        updateLanguageUI();
    } catch (error) {
        console.error("Fout bij laden Sheet:", error);
    }
}

// Taal wisselen en onthouden
window.setLanguage = function(lang) {
    currentLang = lang;
    localStorage.setItem('preferred_lang', lang);
    updateLanguageUI();
    loadSheetData(); 
};

function updateLanguageUI() {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${currentLang}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    const bestLabel = document.querySelector('.badge-best');
    if (bestLabel) bestLabel.childNodes[0].textContent = currentLang === 'nl' ? "Beste: " : "Meilleur: ";
}

// --- HET SPEL MECHANISME ---

window.onload = () => {
    loadSheetData();
    const high = localStorage.getItem('quiz_high_score') || 0;
    const highScoreEl = document.getElementById('high-score');
    if(highScoreEl) highScoreEl.innerText = high;
};

// Enter-toets in het invoerveld
const guessInput = document.getElementById('guess-input');
if(guessInput) {
    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !document.getElementById('guess-btn').disabled) {
            checkAnswer();
        }
    });
}

document.getElementById('start-btn').addEventListener('click', startNewGame);
document.getElementById('guess-btn').addEventListener('click', checkAnswer);

function startNewGame() {
    if (realGameData.length === 0) {
        alert(currentLang === 'nl' ? "Momentje, laden..." : "Attendez, chargement...");
        return;
    }
    
    const randomGame = realGameData[Math.floor(Math.random() * realGameData.length)];
    
    const winTitle = document.querySelector('.win-title');
    if (winTitle) {
        winTitle.innerText = currentLang === 'nl' ? "GEVONDEN!" : "TROUVÉ !";
        winTitle.style.color = "#00ff00";
    }
    
    const passBtn = document.getElementById('pass-btn');
    if (passBtn) passBtn.style.display = 'none';

    document.getElementById('answer-history').innerHTML = "";
    setupGame(randomGame);
}

function setupGame(data) {
    currentData = data;
    solution = data.oplossing;
    availableTips = data.tips.split('|'); 
    openedTipsCount = 0;

    document.getElementById('setup-area').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('display-categorie').innerText = data.categorie;
    document.getElementById('display-score').innerText = `Punten: 15`;
    
    document.getElementById('hints-display').innerHTML = `<p id="hint-text">${currentLang === 'nl' ? 'Klik op een nummer...' : 'Cliquez sur un numéro...'}</p>`;
    
    document.getElementById('message-box').innerText = "";
    const input = document.getElementById('guess-input');
    input.value = "";
    input.disabled = true;
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

// DE "LIDWOORD- & ACCENT-WASMACHINE"
function cleanInput(text) {
    const stopWords = /\b(un|une|le|la|les|des|de|du|d'|l'|het|de|een)\b/gi;
    return text.toLowerCase()
               .normalize("NFD") // Accenten decomponeren
               .replace(/[\u0300-\u036f]/g, "") // Accenten verwijderen
               .replace(stopWords, '')
               .replace(/['’]/g, '')
               .replace(/\s+/g, '') 
               .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
               .trim();
}

function revealTip(btn) {
    if (availableTips.length === 0) return;

    document.getElementById('answer-history').innerHTML = "";
    document.getElementById('message-box').innerText = "";

    const randomIndex = Math.floor(Math.random() * availableTips.length);
    const tip = availableTips.splice(randomIndex, 1)[0];

    const hintDisplay = document.getElementById('hints-display');
    const placeholder = document.getElementById('hint-text');
    if (placeholder) placeholder.style.display = 'none';

    const newTipDiv = document.createElement('div');
    newTipDiv.className = 'revealed-tip fade-in';
    newTipDiv.innerText = tip;
    
    hintDisplay.appendChild(newTipDiv);
    
    openedTipsCount++;
    btn.disabled = true;
    btn.classList.add('used');
    
    document.getElementById('display-score').innerText = `Punten: ${15 - openedTipsCount + 1}`;
    const input = document.getElementById('guess-input');
    input.disabled = false;
    document.getElementById('guess-btn').disabled = false;
    input.focus();

    hintDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (openedTipsCount === 15) {
        const passBtn = document.getElementById('pass-btn');
        if (passBtn) passBtn.style.display = 'block';
    }
}

function checkAnswer() {
    const userInput = document.getElementById('guess-input').value.trim();
    if (!userInput) return;

    const msg = document.getElementById('message-box');

    if (cleanInput(userInput) === cleanInput(solution)) {
        const eindScore = 15 - openedTipsCount + 1;
        
        document.getElementById('popup-antwoord').innerText = currentData.oplossing;
        document.getElementById('popup-score').innerText = eindScore;
        
        const currentHigh = localStorage.getItem('quiz_high_score') || 0;
        if (parseInt(eindScore) > parseInt(currentHigh)) {
            localStorage.setItem('quiz_high_score', eindScore);
            document.getElementById('high-score').innerText = eindScore;
        }

        document.getElementById('win-popup').style.display = 'flex'; 
        trackGameEvent("win", eindScore);
    } else {
        const li = document.createElement('li');
        li.innerText = `❌ ${userInput}`;
        document.getElementById('answer-history').prepend(li);
        
        msg.innerHTML = `<span style="color: #ff00de; font-weight: bold;">Niet juist...</span>`;
        document.getElementById('guess-input').value = "";
    }
}

document.getElementById('play-again-btn').addEventListener('click', () => {
    document.getElementById('win-popup').style.display = 'none';
    startNewGame();
});

const passBtn = document.getElementById('pass-btn');
if (passBtn) {
    passBtn.addEventListener('click', () => {
        document.getElementById('popup-antwoord').innerText = currentData.oplossing;
        document.getElementById('popup-score').innerText = "0";
        document.getElementById('win-popup').style.display = 'flex';
        trackGameEvent("pass", 0);
    });
}

function trackGameEvent(type, val) {
    const webhookURL = "https://hook.eu1.make.com/ywmy2xr3wy53a3f4zadrdws3hiex3h3f";
    fetch(webhookURL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ event: type, score: val, lang: currentLang, timestamp: new Date().toISOString() })
    });
}
