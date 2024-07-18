let gameTable = [];
startGame();

function checkValidInput(number) {
    return !(number < 0 || number > 10 || gameTable[number] != null);
}

function isWinner() {
    if ((gameTable[0] === gameTable[1] && gameTable[1] === gameTable[2] && gameTable[0] != null) || //Win lies in top line
        (gameTable[3] === gameTable[4] && gameTable[4] === gameTable[5] && gameTable[3] != null) || //Win lies in middle line
        (gameTable[6] === gameTable[7] && gameTable[7] === gameTable[8] && gameTable[6] != null) || //Win lies in bottom line
        (gameTable[0] === gameTable[4] && gameTable[4] === gameTable[8] && gameTable[0] != null) || //Win lies in left-to-right diagonal line
        (gameTable[2] === gameTable[4] && gameTable[4] === gameTable[6] && gameTable[2] != null)     //Win lies in right-to-left diagonal line
    ) return true;
}

function startGame() {
    gameTable = Array(9).fill(null);
    const playMoves = 0;
    while (!isWinner() && playMoves < 10) {
        let number = parseInt(prompt("Type in your field (0 - 8)"));
        while (number < 0 || number > 8 || gameTable[number] != null) {
            number = parseInt(prompt("Make sure the number hasn't been chosen and lies in the range (0 - 8)"));
        }
        if (number === 0 || number % 2 === 0) {
            gameTable[number] = "x";
            console.log("field " + number + " belongs to x");
        } else {
            gameTable[number] = "o";
            console.log("field " + number + " belongs to o");
        }
    }
    if (isWinner()) {
        console.log("There is a winner!");
    } else {
        console.log("There is NO winner this time..");
    }
}
function gameMachine() {
    startGame();
    resetGame();
}

function resetGame() {
    gameTable = [];
}