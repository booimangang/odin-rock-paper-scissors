const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const resultDiv = document.querySelector(".result");

const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");

let initialComputerScore = 0;
let initialPlayerScore = 0;

const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", resetScore)

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3);
    return computerChoice[randomNumber];
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

function game(playerSelection) {

    let computerSelection = getComputerChoice();
    playerChoice.innerText = playerSelection;
    computerChoice.innerText = computerSelection;

    let result = playRound(playerSelection, computerSelection)

    if (result == "win") {
        resultDiv.innerText = "YOU WIN"
        initialPlayerScore++
    } else if (result == "lose") {
        resultDiv.innerText = "YOU LOSE"
        initialComputerScore++
    } else if (result == "draw") {
        resultDiv.innerText = "DRAW"
    }

    setScore(initialComputerScore, initialPlayerScore)

}

function setScore(CS, PS) {
    computerScore.innerText = CS;
    playerScore.innerText = PS;
}


function resetScore() {
    computerScore.innerText = 0;
    playerScore.innerText = 0;
}

document.addEventListener("click", (e) => {
    let playerSelection = e.target.dataset.key;
    if (e.target.getAttribute("class") != "choice") return;
    game(playerSelection)
})



