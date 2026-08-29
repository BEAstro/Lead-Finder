let leads = [];

function findLeads() {

    const businessType = document
        .getElementById("businessType")
        .value
        .trim();

    const location = document
        .getElementById("location")
        .value
        .trim();

    if (!businessType || !location) {
        alert("Please enter a business type and location.");
        return;
    }

    leads = [
        {
            name: "Example Business",
            type: businessType,
            location: location,
            website: "https://example.com"
        },
        {
            name: "Local Business",
            type: businessType,
            location: location,
            website: "https://example.com"
        },
        {
            name: "Potential Customer",
            type: businessType,
            location: location,
            website: "https://example.com"
        }
    ];

    displayLeads();
}


function displayLeads() {

    const container =
        document.getElementById("leadsContainer");

    container.innerHTML = "";

    leads.forEach((lead, index) => {

        const card = document.createElement("div");

        card.className = "lead-card";

        card.innerHTML = `
            <h3>${lead.name}</h3>

            <p>🏢 ${lead.type}</p>

            <p>📍 ${lead.location}</p>

            <div class="lead-actions">

                <button onclick="openWebsite(${index})">
                    🌐 Website
                </button>

                <button
                    class="save"
                    onclick="saveLead(${index})">
                    ⭐ Save
                </button>

            </div>
        `;

        container.appendChild(card);
    });

    document.getElementById("leadCount").textContent =
        leads.length;
}


function openWebsite(index) {

    window.open(
        leads[index].website,
        "_blank"
    );
}


function saveLead(index) {

    let saved =
        JSON.parse(localStorage.getItem("savedLeads")) || [];

    saved.push(leads[index]);

    localStorage.setItem(
        "savedLeads",
        JSON.stringify(saved)
    );

    document.getElementById("savedCount").textContent =
        saved.length;

    alert("Lead saved ⭐");
}


function clearLeads() {

    leads = [];

    document.getElementById("leadsContainer").innerHTML = `
        <div class="empty-state">

            <div class="empty-icon">
                🔎
            </div>

            <h3>No leads yet</h3>

            <p>
                Search for a business type and location
                to find potential leads.
            </p>

        </div>
    `;

    document.getElementById("leadCount").textContent = "0";
}


window.addEventListener("load", function () {

    const saved =
        JSON.parse(localStorage.getItem("savedLeads")) || [];

    document.getElementById("savedCount").textContent =
        saved.length;
});
