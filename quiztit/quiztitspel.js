/* =========================================
   QUIZTITSPEL ENGINE - UPGRADED
   ========================================= */

// --- CONFIGURATIE & KOPPELING ---
const baseSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbgWdp6pG7lbbrWC35FvNLwH756-cr1JvGf8LIau3DuLXlk8ninpYwa6tA8eLapPaK1KmvsZcYervP/pub?output=csv";

// GID codes voor NL en FR (vul hier de juiste GID voor FR in)
const gids = {
    nl: "209829391",
    fr: "HIER_DE_FRANSE_GID" 
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
        document.getElementById('start-btn').innerText = currentLang === 'nl' ? "START HET SPEL" : "COMMENCER LE JEU";
        updateLanguageUI();
    } catch (error) {
        console.error("Fout bij laden Sheet:", error);
    }
}

// Taal wisselen en onthouden
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred_lang', lang);
    updateLanguageUI();
    loadSheetData(); // Herlaad de data voor de nieuwe taal
}

function updateLanguageUI() {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${currentLang}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // Update labels indien nodig
    const bestLabel = document.querySelector('.badge-best');
    if (bestLabel) bestLabel.childNodes[0].textContent = currentLang === 'nl' ? "Beste: " : "Meilleur: ";
}

// --- HET SPEL ---

// Direct laden en High Score tonen
window.onload = () => {
    loadSheetData();
    const high = localStorage.getItem('quiz_high_score') || 0;
    document.getElementById('high-score').innerText = high;
};

// Enter-toets koppelen aan invoerveld
document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !document.getElementById('guess-btn').disabled) {
        checkAnswer();
    }
});

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
    
    if (document.getElementById('pass-btn')) document.getElementById('pass-btn').style.display = 'none';

    // WIS GESCHIEDENIS BIJ NIEUWE KAART
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
    
    document.getElementById('hints-display').innerHTML = `<p id="hint-text">${currentLang === 'nl' ? 'Klik op een nummer...' : 'Cliquez op un numéro...'}</p>`;
    
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

// De "Lidwoord-Wasmachine"
function cleanInput(text) {
    const stopWords = /\b(un|une|le|la|les|des|de|du|d'|l'|het|de|een)\b/gi;
    return text.toLowerCase()
               .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Verwijder accenten
               .replace(stopWords, '')
               .replace(/['’]/g, '')
               .replace(/\s+/g, '') 
               .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
               .trim();
}

function revealTip(btn) {
    if (availableTips.length === 0) return;

    // WIS GESCHIEDENIS BIJ ELKE NIEUWE TIP (Optioneel, maar maakt het scherm clean)
    document.getElementById('answer-history').innerHTML = "";
    document.getElementById('message-box').innerText = "";

    const randomIndex = Math.floor(Math.random() * availableTips.length);
    const tip = availableTips.splice(randomIndex, 1)[0];

    const hintDisplay = document.getElementById('hints-display');
    if (openedTipsCount === 0) document.getElementById('hint-text').style.display = 'none';

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

    hintDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (openedTipsCount === 15) {
        if (document.getElementById('pass-btn')) document.getElementById('pass-btn').style.display = 'block';
    }
}

function checkAnswer() {
    const userInput = document.getElementById('guess-input').value.trim();
    if (!userInput) return;

    const msg = document.getElementById('message-box');

    // Vergelijk de "schone" versies
    if (cleanInput(userInput) === cleanInput(solution)) {
        const eindScore = 15 - openedTipsCount + 1;
        
        document.getElementById('popup-antwoord').innerText = currentData.oplossing;
        document.getElementById('popup-score').innerText = eindScore;
        
        // High Score check
        const currentHigh = localStorage.getItem('quiz_high_score') || 0;
        if (eindScore > currentHigh) {
            localStorage.setItem('quiz_high_score', eindScore);
            document.getElementById('high-score').innerText = eindScore;
        }

        const popup = document.getElementById('win-popup');
        popup.style.display = 'flex'; 
        
        // Tracking (optioneel voor Make)
        trackGameEvent("win", eindScore);
    } else {
        // Toevoegen aan geschiedenis
        const li = document.createElement('li');
        li.innerText = `❌ ${userInput}`;
        document.getElementById('answer-history').prepend(li);
        
        msg.innerHTML = `<span style="color: #ff00de; font-weight: bold;">Niet juist...</span>`;
        document.getElementById('guess-input').value = "";
    }
}

// Pass-functie en herstart knoppen behouden...
document.getElementById('play-again-btn').addEventListener('click', () => {
    document.getElementById('win-popup').style.display = 'none';
    startNewGame();
});

const passBtnElement = document.getElementById('pass-btn');
if (passBtnElement) {
    passBtnElement.addEventListener('click', () => {
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
