// get computer Choice 
// get player choice 
// compare the choices 
// if CC == rock && PC == scissor 
//     - CC wins 
// if CC == paper && P == rock 
//     - CC wins 
// if CC == scissors && PC == paper 
//     - CC wins 
// else, P wins.

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(choice[randomNumber]);
    return choice[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Result: you win")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Result: you win")
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Result: you win")
    } else if (playerSelection == computerSelection) {
        console.log("Result: it's a draw")
    }

    else {

        console.log(`Result: YOU LOSE`)
    }
}

function game() {
    let playerScore;
    let compuerScore;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt(`What's your ${i} choice?`, ' ')
        const computerSelection = getComputerChoice();
        console.log(`Player's Choice - ${playerSelection}`)
        console.log(`Computer's C - ${computerSelection}`)
        playRound(playerSelection, computerSelection)
    }

}

game()