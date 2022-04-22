// method for computer to randomly select rock paper or scissors
function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * moves.length);
    let randomChoice = moves[randomIndex];
    return randomChoice;
}

// method that takes user move, randomly selects computer move, 
// and returns 1 for a user win, -1 for a user loss, and 0 for a draw/tie
function playRound(userSelection) {

    let computerSelection = computerPlay();
    updateRoundPlay(userSelection, computerSelection);

    const winningMoves = new Map([
        ["rock", "scissors"],
        ["scissors", "paper"],
        ["paper", "rock"]
    ]);

    if (userSelection == computerSelection) {
        return 0;
    } else if (winningMoves.get(userSelection) == computerSelection) {
        return 1;
    } else {
        return -1;
    }
}

// method to update text displaying userSelection and computerSelection
function updateRoundPlay(userSelection, computerSelection){
    let userChoice = document.querySelector(".userMove");
    userChoice.textContent = `You: ${userSelection}`;

    let computerChoice = document.querySelector(".computerMove");
    computerChoice.textContent = `Computer: ${computerSelection}`;
}

// method to update userScore and computerScore given result of round
function updateScore(result){
    if (result == 1){
        userScore++;
    } else if (result == -1){
        computerScore++;
    }
}

// gets the value of user move, plays the round, displays
// the round play and round result, displays and updates 
// game score
function playGame(e) {
    let userMove = this.getAttribute("data-value");
    let roundResult = playRound(userMove);
    displayRoundResult(roundResult);
    updateScore(roundResult);
    updateGameResult();
}

let userScore = 0;
let computerScore = 0;

let playButtons = document.querySelectorAll(".playMoveBtn");
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
function updateGameResult(score) {
    let userScoreText = document.querySelector(".userScore");
    userScoreText.textContent = userScore;

    let computerScoreText = document.querySelector(".computerScore");
    computerScoreText.textContent = computerScore;
}