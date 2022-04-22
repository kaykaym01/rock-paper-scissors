// method for computer to randomly select rock paper or scissors
function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * moves.length);
    let randomChoice = moves[randomIndex];
    return randomChoice;
}

// method that takes click event and player move, randomly selects computer move, and returns 1 for a user win, -1 for
// a user loss, and 0 for a draw/tie
function playRound(playerSelection) {

    let computerSelection = computerPlay();
    updateRoundPlay(playerSelection, computerSelection);

    const winningMoves = new Map([
        ["rock", "scissors"],
        ["scissors", "paper"],
        ["paper", "rock"]
    ]);

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return 0;
    } else if (winningMoves.get(playerSelection) == computerSelection) {
        return 1;
    } else {
        return -1;
    }
}

function updateRoundPlay(playerSelection, computerSelection){
    let playerChoice = document.querySelector(".playerMove");
    playerChoice.textContent = `You: ${playerSelection}`;

    let computerChoice = document.querySelector(".computerMove");
    computerChoice.textContent = `Computer: ${computerSelection}`;
}

function playGame(e) {
    let playerMove = this.getAttribute("data-value");
    let roundResult = playRound(playerMove);
    displayRoundResult(roundResult);
}

let playButtons = document.querySelectorAll(".playerButton");
playButtons.forEach(button => button.addEventListener('click', playGame));

// method that takes in integer result and if 0, displays draw,
// if 1 displays win, and if -1 displays loss
function displayRoundResult(result) {
    let resultText;
    switch (result) {
        case -1:
            resultText = "You Lose";
            break;
        case 0:
            resultText = "Draw";
            break;
        case 1:
            resultText = "You Win";
    }

    let resultP = document.querySelector(".roundResult");
    resultP.textContent = resultText;
}

// method to read int score and if score >= 3, displays win
// else displays loss
function displayGameResult(score) {
    console.log(`Game Score: ${score}/5`);
    let gameResult = (score >= 3) ? "win" : "lose";
    console.log(`Game Result: You ${gameResult}!`);
}
