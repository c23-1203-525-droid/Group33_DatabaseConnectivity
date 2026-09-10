// Handles saving and loading player data using localStorage

function saveGame() {

    const playerData = {
        playerName: document.getElementById("playerName").value,
        score: Number(document.getElementById("score").value),
        level: Number(document.getElementById("level").value)
    };

    localStorage.setItem(
        "calorunPlayer",
        JSON.stringify(playerData)
    );

    alert("Game progress saved!");
}


function loadGame() {

    const savedData = localStorage.getItem("calorunPlayer");

    if (savedData) {

        const playerData = JSON.parse(savedData);

        document.getElementById("displayName").textContent =
            playerData.playerName;

        document.getElementById("displayScore").textContent =
            playerData.score;

        document.getElementById("displayLevel").textContent =
            playerData.level;

    } else {

        alert("No saved data found.");

    }
}
