// 1. De "Database" met al je liedjes
const soundtrackData = [
    {
        id: 1,
        titel: "De Grammofoonspeler",
        videoA: "dQw4w9WgXcQ", // De code na v= in de YouTube link
        videoB: "dQw4w9WgXcQ", 
        driveA: "https://drive.google.com/...", // Je MP3 link
        driveB: "https://drive.google.com/...",
        tekst: "Hier plak je de tekst uit je spreadsheet\n\nMet extra witregels."
    },
    // Kopieer dit blokje voor elk hoofdstuk (2, 3, 4...)
];

// 2. De functie die de HTML bouwt
function renderSoundtracks() {
    const container = document.getElementById('soundtrack-list');
    if (!container) return;

    let htmlGerecht = ""; // Hier verzamelen we alle stukjes HTML

    soundtrackData.forEach(item => {
        htmlGerecht += `
            <section class="story-soundtrack">
                <h2>Hoofdstuk ${item.id}: ${item.titel}</h2>
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
                
                <button onclick="toggleLyrics('lyrics-h${item.id}')" class="submit-btn-alt" style="margin-top: 20px; width: auto;">
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

// 3. Zorg dat de tekst open/dicht klapt
function toggleLyrics(id) {
    const el = document.getElementById(id);
    if (el) {
        const isOpen = el.style.display === "block";
        el.style.display = isOpen ? "none" : "block";
    }
}

// 4. Start alles op als de pagina klaar is
document.addEventListener('DOMContentLoaded', renderSoundtracks);
