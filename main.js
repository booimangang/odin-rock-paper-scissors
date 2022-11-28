const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const resultDiv = document.querySelector(".result");

const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");

let initialComputerScore = 0;
let initialPlayerScore = 0;


const comment = document.querySelector(".comment")
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
    commentGenerate(initialComputerScore, initialPlayerScore)

}

function setScore(CS, PS) {
    computerScore.innerText = CS;
    playerScore.innerText = PS;
}

function resetScore() {
    initialComputerScore = 0;
    initialPlayerScore = 0;
    computerScore.innerText = 0;
    playerScore.innerText = 0;
}

document.addEventListener("click", (e) => {
    let playerSelection = e.target.dataset.key;
    if (e.target.getAttribute("class") != "choice") return;
    game(playerSelection)
})


// Comment generator

function commentGenerate(CS, PS) {
    if (CS > PS) {
        if (CS - PS > 2) comment.innerText = "Boy! You suck."
        else if (CS - PS > 3) comment.innerText = "You suck big time!"
        else if (CS - PS > 5) comment.innerText = "You are terrible at this game!"


    } else if (PS > CS) {
        if (PS - CS > 2) comment.innerText = "You are good"
        else if (PS - CS > 3) comment.innerText = "You are doing great"
        else if (PS - CS > 5) comment.innerText = "You are awesome"
    }
}