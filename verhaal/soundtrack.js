/* ==========================================================================
   PHILIPPE 50 - SOUNDTRACK ENGINE (FINAL COMBINED VERSION)
   ========================================================================== */

// 1. DE DATABASE - Alle 27 hoofdstukken
const soundtrackData = [
    {
        id: 1,
        titel: "De Grammofoonspeler",
        videoA: "qaqIeK0jHSQ",
        videoB: "8R_cRtpbzCQ", 
        driveA: "https://drive.google.com/file/d/1va3RzQA-P54tQDffsl6Ka5fyZJm0rm7W/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/13ZUXXTrSHUe6lqgh40vw0MoICrxanlyv/view?usp=drive_link",
        tekst: `I. 
[Verse 1]
Philippe zit in de zon, met een kopje koffie in zijn hand. 
Spotify klinkt zacht, In dit vertrouwde land. De naald die verschuift, Een glitch in de tijd. 
De kamer draait rond, Hij raakt zijn wereld kwijt.

[Verse 2] 
Les notes de Fernando, Résonnent dans le salon. Le journal sur la table, Parle d'une autre saison.
1976, une house de son passé. L'enfant porte son nom, La réalité est effacée.

[Chorus] 
Er is geen weg terug, Le temps a basculé. Philippe kijkt rond, In deze vreemde realité.
Een sprong in het duister, Een leven dat begint. Comment retourner, Pour se retrouver ?

[Outro] 
De radio kraakt... Hoe keert hij terug?`
    },
    { id: 2, titel: "Het Tweede Hoofdstuk", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 3, titel: "Hoofdstuk 3", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 4, titel: "Hoofdstuk 4", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 5, titel: "Hoofdstuk 5", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 6, titel: "Hoofdstuk 6", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 7, titel: "Hoofdstuk 7", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 8, titel: "Hoofdstuk 8", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 9, titel: "Hoofdstuk 9", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 10, titel: "Hoofdstuk 10", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 11, titel: "Hoofdstuk 11", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 12, titel: "Hoofdstuk 12", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 13, titel: "Hoofdstuk 13", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 14, titel: "Hoofdstuk 14", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 15, titel: "Hoofdstuk 15", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 16, titel: "Hoofdstuk 16", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 17, titel: "Hoofdstuk 17", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 18, titel: "Hoofdstuk 18", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 19, titel: "Hoofdstuk 19", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 20, titel: "Hoofdstuk 20", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 21, titel: "Hoofdstuk 21", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 22, titel: "Hoofdstuk 22", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 23, titel: "Hoofdstuk 23", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 24, titel: "Hoofdstuk 24", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 25, titel: "Hoofdstuk 25", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 26, titel: "Hoofdstuk 26", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." },
    { id: 27, titel: "Hoofdstuk 27", videoA: "ID", videoB: "ID", driveA: "URL", driveB: "URL", tekst: "Tekst..." }
];

// 2. TOEGANGSCONTROLE
function checkAccess() {
    const access = sessionStorage.getItem('soundtrack_access');
    if (access === 'granted') {
        renderSoundtracks();
    } else {
        const password = prompt("Voer het wachtwoord in om de muziek te beluisteren:", "");
        if (password && password.toLowerCase() === "philippe50") {
            sessionStorage.setItem('soundtrack_access', 'granted');
            renderSoundtracks();
        } else if (password !== null) {
            alert("Onjuist wachtwoord. Je wordt teruggeleid.");
            window.location.href = "../index.html";
        }
    }
}

// 3. DE GENERATOR
function renderSoundtracks() {
    const container = document.getElementById('soundtrack-list');
    if (!container) return;

    let htmlGerecht = ""; 
    soundtrackData.forEach(item => {
        htmlGerecht += `
            <section class="story-soundtrack">
                <h2 style="text-transform: uppercase;">Hoofdstuk ${item.id}: ${item.titel}</h2>
                <div class="soundtrack-grid">
                    <div>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/${item.videoA}" allowfullscreen></iframe>
                        </div>
                        <a href="${item.driveA}" target="_blank" class="download-link">💾 Download MP3 (Versie A)</a>
                    </div>
                    <div>
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/${item.videoB}" allowfullscreen></iframe>
                        </div>
                        <a href="${item.driveB}" target="_blank" class="download-link">💾 Download MP3 (Versie B)</a>
                    </div>
                </div>
                <button onclick="toggleLyrics('lyrics-h${item.id}')" class="submit-btn-alt" style="margin-top: 20px; width: auto; padding: 8px 20px;">
                    📜 Toon Liedtekst
                </button>
                <div id="lyrics-h${item.id}" class="lyrics-section">
                    <p style="white-space: pre-wrap;">${item.tekst}</p>
                </div>
            </section>
        `;
    });
    container.innerHTML = htmlGerecht;
}

// 4. INTERACTIE (Met scroll-fix van jouw origineel)
function toggleLyrics(id) {
    const el = document.getElementById(id);
    if (el) {
        const isOpen = el.style.display === "block";
        el.style.display = isOpen ? "none" : "block";
        
        if (!isOpen) {
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

// 5. START
document.addEventListener('DOMContentLoaded', checkAccess);
