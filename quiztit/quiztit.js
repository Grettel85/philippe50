/* =========================================
   QUIZTIT MAKER ENGINE
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const tipsContainer = document.getElementById('tips-fields');
    // VERGEET NIET: Plak hier je nieuwe Make.com Webhook URL
    const webhookURL = "https://hook.eu1.make.com/dt1nh8ty3ocscahv7fsymv4djww9aog3"; 

    // De lijst met 15 unieke voorbeelden
    const placeholders = [
        "vb. Ik ben geboren in de 19e eeuw.",
        "vb. Ik sta bekend om mijn iconische hoofddeksel.",
        "vb. Men associeert mij vaak met een specifiek dier.",
        "vb. Er is een wereldberoemd pretpark naar mij vernoemd.",
        "vb. Ik besta al duizenden jaren.",
        "vb. Ik word over de hele wereld geconsumeerd.",
        "vb. Mijn hoofdbestanddeel is een graansoort.",
        "vb. In België word ik vaak met een dikke schuimkraag geserveerd.",
        "vb. Ik bevind me in Europa.",
        "vb. Ik ben gebouwd voor een wereldtentoonstelling.",
        "vb. Ik ben gemaakt van ijzer en staal.",
        "vb. Ik ben het symbool van de stad van de liefde.",
        "vb. Ik ben een uitvinding uit de 20e eeuw die de wereld veranderde.",
        "vb. Vroeger was ik een log apparaat, maar tegenwoordig ben ik plat en hang ik vaak aan de muur.",
        "vb. Je gebruikt een afstandsbediening om naar mijn verschillende zenders te kijken."
    ];

    // Genereer de 15 invoervelden automatisch met unieke placeholders
    for (let i = 1; i <= 15; i++) {
        const div = document.createElement('div');
        div.className = 'input-group tip-input fade-in';
        div.style.animationDelay = `${i * 0.05}s`;
        
        // Pak de bijbehorende zin uit de lijst (i-1 omdat een lijst bij 0 begint)
        const placeholderText = placeholders[i - 1];

        div.innerHTML = `
            <label>Tip ${i}:</label>
            <input type="text" id="tip_${i}" required placeholder="${placeholderText}">
        `;
        tipsContainer.appendChild(div);
    }

    // Formulier afhandelen
    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Bezig met verzenden...";
        submitBtn.disabled = true;

        // Verzamel de 15 tips en voeg ze samen met een scheidingsteken |
        const tipsArray = [];
        for (let i = 1; i <= 15; i++) {
            const val = document.getElementById(`tip_${i}`).value.trim();
            tipsArray.push(val);
        }

        const data = {
            maker: document.getElementById('maker_naam').value.trim(),
            categorie: document.getElementById('categorie').value,
            oplossing: document.getElementById('oplossing').value.trim(),
            tips: tipsArray.join('|') // Hierdoor komen ze in 1 cel in Excel
        };

        try {
            const response = await fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert("Super! Je raadsel is toegevoegd aan de database.");
                form.reset();
                window.location.href = "index.html"; 
            } else {
                throw new Error("Server fout");
            }
        } catch (error) {
            alert("Oeps! Er ging iets mis met de tijdlijn. Probeer het later opnieuw.");
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    });
});
