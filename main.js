
let initialComputerScore = 0;
let initialPlayerScore = 0;


const comment = document.querySelector(".comment")
const resetBtn = document.querySelector(".reset-btn");

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

const resultDiv = document.querySelector(".result");

function updateResult(result) {
    resultDiv.innerText = result
    resultDiv.classList.add("zoom")
}

function game(playerSelection) {

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection)

    if (result == "win") {
        updateResult("YOU WIN")
        initialPlayerScore++
    } else if (result == "lose") {
        updateResult("YOU LOSE")
        initialComputerScore++
    } else if (result == "draw") {
        updateResult("DRAW")
    }
    setScore(initialComputerScore, initialPlayerScore)
    commentGenerate(initialComputerScore, initialPlayerScore)
}


const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");

function setScore(CS, PS) {
    computerScore.innerText = CS;
    playerScore.innerText = PS;
}

function resetScore() {
    initialComputerScore = 0;
    initialPlayerScore = 0;
    computerScore.innerText = 0;
    playerScore.innerText = 0;
    activeChoice("remove")
    computerActiveChoice("remove")
    commentGenerate(0, 0)

}

function activeChoice(e) {
    const choices = document.querySelectorAll(`img[choice="true"]`);
    choices.forEach(key => {
        if (key.getAttribute("data-key") === e) {
            key.classList.add("clicked")
        } else if (e === "remove") {
            key.classList.remove("clicked")
        } else {
            key.classList.remove("clicked")

        }
    })
}

function computerActiveChoice(e) {
    const computerChoices = document.querySelectorAll(`img[computer-choice="true"]`);
    computerChoices.forEach(key => {
        if (key.getAttribute("data-key") === e) {
            key.classList.add("choosen")
        } else if (e === "remove") {
            key.classList.remove("choosen")
        } else {
            key.classList.remove("choosen")
        }
    })
}

// Comment generator

function commentGenerate(CS, PS) {
    if (CS == PS) {
        comment.innerText = `"Good Luck"`
    } else if (CS > PS) {
        let diff = CS - PS;
        if (diff >= 2 && diff < 3) comment.innerText = `"Boy! You suck."`
        else if (diff >= 3 && diff < 5) comment.innerText = `"You suck big time!"`
        else if (diff > 5) comment.innerText = `"You are terrible at this game!"`

    } else if (PS > CS) {
        let diff = PS - CS;
        if (diff >= 2 && diff < 3) comment.innerText = `"You are good!"`
        else if (diff >= 3 && diff < 5) comment.innerText = `"You are doing great!"`
        else if (diff > 5) comment.innerText = `"You are awesome"`
    }
}


function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3);
    computerActiveChoice(computerChoice[randomNumber]);
    return computerChoice[randomNumber];
}

function getClayerChoice(e) {
    let playerSelection = e.target.dataset.key;
    if (e.target.getAttribute("choice") != "true") return;
    activeChoice(e.target.dataset.key)
    game(playerSelection)
}

resetBtn.addEventListener("click", resetScore)

document.addEventListener("click", getClayerChoice)
