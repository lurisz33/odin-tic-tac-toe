let gameTable = [];
startGame();

function isValidInput(number) {
    return !(number < 0 || number > 10 || gameTable[number] != null);
}

function isWinner() {
    if ((gameTable[0] === gameTable[1] && gameTable[1] === gameTable[2] && gameTable[0] != null) || //Win lies in top line
        (gameTable[3] === gameTable[4] && gameTable[4] === gameTable[5] && gameTable[3] != null) || //Win lies in middle line
        (gameTable[6] === gameTable[7] && gameTable[7] === gameTable[8] && gameTable[6] != null) || //Win lies in bottom line
        (gameTable[0] === gameTable[4] && gameTable[4] === gameTable[8] && gameTable[0] != null) || //Win lies in left-to-right diagonal line
        (gameTable[2] === gameTable[4] && gameTable[4] === gameTable[6] && gameTable[2] != null)    //Win lies in right-to-left diagonal line
    ) return true;
}

function startGame() {
    gameTable = Array(9).fill(null);
    let playMoves = 0;
    let currentPlayer = "x";
    while (!isWinner() && playMoves < 10) {
        let number = parseInt(prompt("Type in your field (0 - 8)"));
        while (!isValidInput(number)) {
            number = parseInt(prompt("Make sure the field hasn't been chosen and lies in the range (0 - 8)"));
        }
        gameTable[number] = currentPlayer;

        const playerSymbol = document.createElement("img");
        playerSymbol.src = currentPlayer === "x" ? "assets/cross.svg" : "assets/heart.svg";
        document.getElementById(number.toString()).appendChild(playerSymbol);

        currentPlayer === "x" ? currentPlayer = "o" : currentPlayer = "x";
        ++playMoves;
    }
    if (isWinner()) {
        currentPlayer === "x" ? currentPlayer = "o" : currentPlayer = "x";
        console.log(currentPlayer + " has won the battle!");
    } else {
        console.log("There is NO winner this time..");
    }
}
function gameMachine() {
    startGame();
}

function resetGame() {
    startGame();
}
