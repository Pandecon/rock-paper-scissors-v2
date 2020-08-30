const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const playerResult = document.getElementById("player-text-result");
const computerResult = document.getElementById("computer-text-result");

const resultText = document.querySelector('#result-text');

paperBtn.addEventListener("click", ()=> game("paper"));
rockBtn.addEventListener("click", ()=> game("rock"));
scissorsBtn.addEventListener("click", ()=> game("scissors"));

let playerScore = 0;
let computerScore = 0;

let pScore = document.getElementById("player-text").textContent = playerScore;
let cScore = document.getElementById("computer-text").textContent = computerScore;


function game(choice){
    let computerChoice = computerSelection();
    computerResult.textContent = computerChoice;
    switch(choice){

        case "rock":
            playerResult.textContent = "Rock";
            if(computerChoice === "rock"){
                resultText.textContent = "Tie!";
            }
            else if(computerChoice === "paper"){
                resultText.textContent = "You lose!";
                computerScore++;
            }
            else if(computerChoice === "scissors"){
                resultText.textContent = "You win!";
                playerScore++;
            }
            document.getElementById("computer-text").textContent = computerScore;
            document.getElementById("player-text").textContent = playerScore;
            break;
            
        case "paper":
            playerResult.textContent = "Paper";

            if(computerChoice === "paper"){
                resultText.textContent = "Tie!";
            }
            else if(computerChoice === "scissors"){
                resultText.textContent = "You lose!";
                computerScore++;

            }
            else if(computerChoice === "rock"){
                resultText.textContent = "You win!";
                playerScore++;

            }
            document.getElementById("computer-text").textContent = computerScore;
            document.getElementById("player-text").textContent = playerScore;
            break;
        case "scissors":
            playerResult.textContent = "Scissors";

            if(computerChoice === "rock"){
                resultText.textContent = "You lose!";
                computerScore++;

            }
            else if(computerChoice === "paper"){
                resultText.textContent = "You win!";
                playerScore++;

            }
            else if(computerChoice === "scissors"){
                resultText.textContent = "Tie!";
            }
            document.getElementById("computer-text").textContent = computerScore;
            document.getElementById("player-text").textContent = playerScore;
            break;

        default:
            return;
    }
    waitingForWinner();

}

function computerSelection(){
    let num = getRandomInt(0,3);
    let choice = ["rock", "paper", "scissors"];
    return choice[num];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function waitingForWinner(){
    if(playerScore >= 5){
        alert("You win the Game!");
        playerScore = 0;
        computerScore = 0;
        document.getElementById("computer-text").textContent = computerScore;
        document.getElementById("player-text").textContent = playerScore;

    }
    else if(computerScore >= 5){
        alert("You lose the Game!");
        playerScore = 0;
        computerScore = 0;
        document.getElementById("computer-text").textContent = computerScore;
        document.getElementById("player-text").textContent = playerScore;

    }
}



