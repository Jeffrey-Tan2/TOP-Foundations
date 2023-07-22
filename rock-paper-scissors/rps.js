function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let computerScore = 0;
let playerScore = 0;

document.getElementById("player-score").innerHTML = playerScore;
document.getElementById("computer-score").innerHTML = computerScore;

function playgame(choice1, choice2) {
    document.getElementById("player-choice").innerHTML = choice1;
    document.getElementById("computer-choice").innerHTML = choice2;
    if (choice1 == choice2) {
        document.getElementById("game-result").innerHTML = "tie";
    } else if ((choice1 == "rock" && choice2 == "paper") || (choice1 == "paper" && choice2 == "scissors") || (choice1 == "scissors" && choice2 == "paper")) {
        document.getElementById("game-result").innerHTML = "computer wins";
        computerScore++;
        document.getElementById("computer-score").innerHTML = computerScore;
    } else if ((choice1 == "paper" && choice2 == "rock") || (choice1 == "scissors" && choice2 == "paper") || (choice1 == "rock" && choice2 == "scissors")) {
        document.getElementById("game-result").innerHTML = "player wins";
        playerScore++;
        document.getElementById("player-score").innerHTML = playerScore;
    }
}

function checkWinner(p, c) {
    if (p == 5) {
        alert("player won!");
        return
    } else if (c == 5) {
        alert("computer won!");
        return
    }
}


const rock = document.getElementById("rock");
rock.addEventListener('click', () => {
    playerChoice = "rock";
    playgame(playerChoice, getComputerChoice());
    checkWinner(playerScore, computerScore);
});

const paper = document.getElementById("paper");
paper.addEventListener('click', () => {
    playerChoice = "paper";
    playgame(playerChoice, getComputerChoice());
    checkWinner(playerScore, computerScore);
});

const scissors = document.getElementById("scissors");
scissors.addEventListener('click', () => {
    playerChoice = "scissors"
    playgame(playerChoice, getComputerChoice());
    checkWinner(playerScore, computerScore);
});

