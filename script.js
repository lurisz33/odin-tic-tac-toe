let gameTable = [];
let currentPlayer = "x";
const gameConsole = document.querySelector("#game-console");
const resetButton = document.querySelector("#reset-button");
const dialog = document.querySelector("dialog");
const startButton = document.querySelector("#start-game");
let player1;
let player2;

window.onload = function () {
    dialog.showModal();
    startButton.addEventListener("click", function (event) {
        event.preventDefault();
        player1 = document.getElementById("player1").value;
        player2 = document.getElementById("player2").value;
        dialog.close();
        startGame();
    })
}

function isValidInput(number) {
    return (number >= 0 || number < 9 || gameTable[number] === null);
}

function isWinner() {
    if ((gameTable[0] === gameTable[1] && gameTable[1] === gameTable[2] && gameTable[0] != null) || //Win lies in 1 row
        (gameTable[3] === gameTable[4] && gameTable[4] === gameTable[5] && gameTable[3] != null) || //Win lies in 2 row
        (gameTable[6] === gameTable[7] && gameTable[7] === gameTable[8] && gameTable[6] != null) || //Win lies in 3 row
        (gameTable[0] === gameTable[3] && gameTable[3] === gameTable[6] && gameTable[0] != null) || //Win lies in 1 column
        (gameTable[1] === gameTable[4] && gameTable[4] === gameTable[7] && gameTable[1] != null) || //Win lies in 2 column
        (gameTable[2] === gameTable[5] && gameTable[5] === gameTable[8] && gameTable[2] != null) || //Win lies in 3 column
        (gameTable[0] === gameTable[4] && gameTable[4] === gameTable[8] && gameTable[0] != null) || //Win lies in left-to-right diagonal line
        (gameTable[2] === gameTable[4] && gameTable[4] === gameTable[6] && gameTable[2] != null)    //Win lies in right-to-left diagonal line
    ) return true;
}

function handleInput(event) {
    const number = parseInt(event.target.id);
    if (isValidInput(number)) {
        gameTable[number] = currentPlayer;
        const playerSymbol = document.createElement("img");
        playerSymbol.src = currentPlayer === "x" ? "assets/cross.svg" : "assets/heart.svg";
        document.getElementById(number.toString()).appendChild(playerSymbol);
        if (isWinner()) {
            const winner = currentPlayer === "x" ? player1 : player2;
            deactivateFields();
            gameConsole.innerHTML = `<b>${winner}</b> has won the battle, congrats!`
        } else if (isFullBoard()) {
            deactivateFields();
            gameConsole.innerHTML = `It's a draw!`;
        } else {
            currentPlayer === "x" ? currentPlayer = "o" : currentPlayer = "x";
            gameConsole.innerHTML = `It's <b>${currentPlayer === "x" ? player1 : player2}</b>'s turn`;
        }
    }
}

function startGame() {
    gameTable = Array(9).fill(null);
    const allFields = document.querySelectorAll(".game-field");
    allFields.forEach(field => {
        field.innerHTML = "";
        field.addEventListener("click", handleInput);
    })
    gameConsole.innerHTML = `<b>${player1}</b> beginns`;
}

function isFullBoard() {
    return gameTable.every(field => field !== null);
}


function deactivateFields() {
    const allFields = document.querySelectorAll(".game-field");
    allFields.forEach(field => field.removeEventListener("click", handleInput));
}

resetButton.addEventListener("click", function () {
    gameConsole.innerHTML = "";
    startGame();
})