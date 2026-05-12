/* ==========================================================================
   PHILIPPE 50 - SOUNDTRACK ENGINE
   ========================================================================== */

// 1. DE DATABASE (Hier vul je alle 27 hoofdstukken aan)
const soundtrackData = [
    {
        id: 1,
        titel: "De Grammofoonspeler",
        videoA: "https://youtu.be/qaqIeK0jHSQ", 
        videoB: "https://youtu.be/8R_cRtpbzCQ", 
        driveA: "https://drive.google.com/file/d/1va3RzQA-P54tQDffsl6Ka5fyZJm0rm7W/view?usp=drive_link", 
        driveB: "https://drive.google.com/file/d/13ZUXXTrSHUe6lqgh40vw0MoICrxanlyv/view?usp=drive_link",
        tekst: "Hier plak je de tekst uit je spreadsheet\n\nMet extra witregels."
    },
    {
        id: 2,
        titel: "Het Tweede Hoofdstuk",
        videoA: "VIDEO_ID_HIER", 
        videoB: "VIDEO_ID_HIER", 
        driveA: "LINK_HIER", 
        driveB: "LINK_HIER",
        tekst: "Tekst voor hoofdstuk 2..."
    }
    // Kopieer het blokje hierboven telkens voor hoofdstuk 3, 4, etc.
];

// 2. TOEGANGSCONTROLE (Beveiliging)
function checkAccess() {
    const access = sessionStorage.getItem('soundtrack_access');
    
    if (access === 'granted') {
        renderSoundtracks();
    } else {
        const password = prompt("Voer het wachtwoord in om de muziek te beluisteren:", "");
        if (password === "Philippe50") {
            sessionStorage.setItem('soundtrack_access', 'granted');
            renderSoundtracks();
        } else {
            alert("Onjuist wachtwoord. Je wordt teruggeleid naar de startpagina.");
            window.location.href = "../index.html";
        }
    }
}

// 3. DE GENERATOR (Bouwt de HTML op het scherm)
function renderSoundtracks() {
    const container = document.getElementById('soundtrack-list');
    if (!container) return;

    let htmlGerecht = ""; 

    soundtrackData.forEach(item => {
        htmlGerecht += `
            <section class="story-soundtrack">
                <h2 style="text-transform: uppercase; letter-spacing: 1px;">Hoofdstuk ${item.id}: ${item.titel}</h2>
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

// 4. INTERACTIE (Open/dicht klappen van tekst)
function toggleLyrics(id) {
    const el = document.getElementById(id);
    if (el) {
        const isOpen = el.style.display === "block";
        el.style.display = isOpen ? "none" : "block";
        
        // Scroll automatisch naar de tekst als deze geopend wordt
        if (!isOpen) {
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

// 5. STARTPUNT
// In plaats van direct renderSoundtracks, starten we nu met de checkAccess
document.addEventListener('DOMContentLoaded', checkAccess);
