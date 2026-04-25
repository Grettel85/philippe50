/* =========================================
   QUIZTITSPEL ENGINE - FIXED VERSION
   ========================================= */

const baseSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbgWdp6pG7lbbrWC35FvNLwH756-cr1JvGf8LIau3DuLXlk8ninpYwa6tA8eLapPaK1KmvsZcYervP/pub?output=csv";

const gids = {
    nl: "209829391",
    fr: "209829391" 
};

let realGameData = []; 
let currentData = null; 
let availableTips = []; 
let openedTipsCount = 0;
let solution = "";
let currentLang = localStorage.getItem('preferred_lang') || 'nl';

async function loadSheetData() {
    const url = `${baseSheetURL}&gid=${gids[currentLang]}&single=true`;
    try {
        const response = await fetch(url + '&cb=' + Date.now());
        const csvText = await response.text();
        
        // VEILIGERE SPLIT: Eerst regels splitsen, dan kolommen
        const lines = csvText.split(/\r?\n/);
        const rows = lines.slice(1); // Koptekst eraf
        
        realGameData = rows.map(row => {
            // Simpele split op komma (werkt zolang er geen komma's IN je tekstvakken staan)
            const columns = row.split(',').map(col => col.replace(/^"(.*)"$/, '$1').trim()); 
            return {
                categorie: columns[2], 
                oplossing: columns[3], 
                tips: columns[4]       
            };
        }).filter(item => item.oplossing && item.tips); 

        console.log("Data succesvol geladen");
        const startBtn = document.getElementById('start-btn');
        if(startBtn) startBtn.innerText = currentLang === 'nl' ? "START HET SPEL" : "COMMENCER LE JEU";
        updateLanguageUI();
    } catch (error) {
        console.error("Fout bij laden Sheet:", error);
    }
}

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
}

window.onload = () => {
    loadSheetData();
    const high = localStorage.getItem('quiz_high_score') || 0;
    const highScoreEl = document.getElementById('high-score');
    if(highScoreEl) highScoreEl.innerText = high;
};

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startNewGame);
document.getElementById('guess-btn').addEventListener('click', checkAnswer);
document.getElementById('guess-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !document.getElementById('guess-btn').disabled) {
        checkAnswer();
    }
});

function startNewGame() {
    if (realGameData.length === 0) return;
    
    const randomGame = realGameData[Math.floor(Math.random() * realGameData.length)];
    
    if (document.getElementById('pass-btn')) document.getElementById('pass-btn').style.display = 'none';
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
    document.getElementById('hints-display').innerHTML = `<p id="hint-text">Klik op een nummer...</p>`;
    
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

function cleanInput(text) {
    const stopWords = /\b(un|une|le|la|les|des|de|du|d'|l'|het|de|een)\b/gi;
    return text.toLowerCase()
               .normalize("NFD")
               .replace(/[\u0300-\u036f]/g, "") 
               .replace(stopWords, '')
               .replace(/['’]/g, '')
               .replace(/\s+/g, '') 
               .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
               .trim();
}

function revealTip(btn) {
    if (availableTips.length === 0) return;
    document.getElementById('message-box').innerText = "";

    const randomIndex = Math.floor(Math.random() * availableTips.length);
    const tip = availableTips.splice(randomIndex, 1)[0];

    const placeholder = document.getElementById('hint-text');
    if (placeholder) placeholder.style.display = 'none';

    const newTipDiv = document.createElement('div');
    newTipDiv.className = 'revealed-tip fade-in';
    newTipDiv.innerText = tip;
    document.getElementById('hints-display').appendChild(newTipDiv);
    
    openedTipsCount++;
    btn.disabled = true;
    btn.classList.add('used');
    
    // SCORE ANIMATIE TRIGGER
    const scoreBadge = document.getElementById('display-score');
    scoreBadge.innerText = `Punten: ${15 - openedTipsCount + 1}`;
    scoreBadge.classList.remove('score-pop');
    void scoreBadge.offsetWidth; 
    scoreBadge.classList.add('score-pop');

    const input = document.getElementById('guess-input');
    input.disabled = false;
    document.getElementById('guess-btn').disabled = false;
    input.focus();

    if (openedTipsCount === 15) {
        if (document.getElementById('pass-btn')) document.getElementById('pass-btn').style.display = 'block';
    }
}

function checkAnswer() {
    const userInput = document.getElementById('guess-input').value.trim();
    if (!userInput) return;

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
    } else {
        // FOUT ANTWOORD: SCHUD-ANIMATIE TRIGGER
        const gameCard = document.querySelector('.glass-card');
        gameCard.classList.remove('shake');
        void gameCard.offsetWidth; 
        gameCard.classList.add('shake');

        const li = document.createElement('li');
        li.innerText = `❌ ${userInput}`;
        document.getElementById('answer-history').prepend(li);
        document.getElementById('guess-input').value = "";
    }
}

document.getElementById('play-again-btn').addEventListener('click', () => {
    document.getElementById('win-popup').style.display = 'none';
    startNewGame();
});
