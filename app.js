 // method for computer to randomly select rock paper or scissors
 function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * moves.length);
    let randomChoice = moves[randomIndex];
    return randomChoice;
}

// method that takes click event and player move, randomly selects computer move, and returns 1 for a user win, -1 for
// a user loss, and 0 for a draw/tie
function playRound(playerSelection){
    let computerSelection = computerPlay();

    console.log(`You: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    const winningMoves = new Map([
        ["rock", "scissors"],
        ["scissors", "paper"],
        ["paper", "rock"]
    ]);

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return 0;
    } else if (winningMoves.get(playerSelection) == computerSelection){
        return 1;
    } else {
        return -1;
    }
}

function playGame(e){
    let playerMove = this.getAttribute("data-value");
    let roundResult = playRound(playerMove);
    displayRoundResult(roundResult);
}

let playButtons = document.querySelectorAll(".playerMove");
playButtons.forEach(button => button.addEventListener('click', playGame));

// method that takes in integer result and if 0, displays draw,
// if 1 displays win, and if -1 displays loss
function displayRoundResult(result){
    switch(result){
        case -1:
            console.log("You Lose");
            break;
        case 0: 
            console.log("Draw");
            break;
        case 1:
            console.log("You Win");
    }
}

// method that reads in user input until valid input or until user
//cancels game
function readAndValidateInput(){
    let options = ["rock", "paper", "scissors"];

    let userInput = prompt("Rock, Paper, or Scissors. Press escape to cancel.", "");
    if (userInput == null){
        alert("game cancelled.");
        return null;
    } else if (userInput == ""){
        alert("empty input. please make a selection.");
        return readAndValidateInput();
    } else {
        userInput = userInput.toLowerCase();
        if (!options.includes(userInput)){
            alert("input not a valid option. please make a selection.");
            return readAndValidateInput();
        } else {
            return userInput;
        }
    }
    console.log(userInput);
}


// method that plays 5 rounds between player and computer
// and displays results of each round and winner at the end
function game(){
    let score = 0;
    for (let i = 0; i < 5; i++){
        let playerMove = readAndValidateInput();
        if (playerMove == null){
            console.log("Game Cancelled.");
            return;
        }
        let result = playRound(playerMove);
        displayRoundResult(result);
        if (result == 1){
            score++;
        }
        console.log("");
    }
    displayGameResult(score);
}

// method to read int score and if score >= 3, displays win
// else displays loss
function displayGameResult(score){
    console.log(`Game Score: ${score}/5`);
    let gameResult = (score >= 3) ? "win" : "lose";
    console.log(`Game Result: You ${gameResult}!`);
}
