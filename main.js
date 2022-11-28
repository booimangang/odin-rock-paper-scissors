let playerScore = 0;
let compuerScore = 0;

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3);
    return computerChoice[randomNumber];
}

function getPlayerChoice(i) {
    let playerChoice = prompt(`[GAME ${i}] Choose:- ROCK, PAPER, SCISSORS`, '').toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "win";
    } else if (playerSelection == computerSelection) {
        return "draw";
    }
    else {
        return "lose";
    }
}

function game() {

    for (let i = 1; i <= 5; i++) {
        console.log(`%c[ GAME:- ${i} ]`, "color:yellow")
        let playerSelection = getPlayerChoice(i);
        let computerSelection = getComputerChoice();
        console.log(`Player's Choice:- ${playerSelection}`)
        console.log(`Computer's Choice:- ${computerSelection}`)
        let result = playRound(playerSelection, computerSelection)

        if (result == "win") {
            console.log("%c-- YOU WIN THIS ROUND --", "color:limegreen")
            playerScore++
        } else if (result == "lose") {
            console.log(`%c-- YOU LOSE THIS ROUND --`, "color:red")
            compuerScore++
        } else if (result == "draw") {
            console.log("%c-- It's a DRAW THIS ROUND --", "color:pink")
        }

        console.log(`SCORE:: Player:- ${playerScore}:${compuerScore} -:Computer:`)
    }
}

game()

if (playerScore > compuerScore) {
    console.log(`%cYOU WIN THE GAME`, "color:orange; font-size: 24px")
} else if (playerScore < compuerScore) {
    console.log(`%cYOU LOSE THE GAME`, "color: orange; font-size: 24px")
} else if (playerScore == compuerScore) {
    console.log(`%cIT'S A TIE GAME`, "color:orange; font-size: 24px")
}


