// Create rock, paper and scissors

let rockPaperScissors = ["rock", "paper", "scissors"]

//Create computerPlay function

function computerPlay() {
    return rockPaperScissors[(Math.floor(Math.random() * rockPaperScissors.length))]; //Returns random option from options array
}

//console.log(computerPlay());

//Create playRound function, with playerSelection and computerSelection as parameters

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        //console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
        addDraw();
        return `Player - ${playerSelection} | Computer - ${computerSelection} | Draw.`;
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        //console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
        addComputerWin();
        return "Player - Rock | Computer - Paper | Computer wins."
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        //console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
        addPlayerWin();
        return "Player - Rock | Computer - Scissors | Player wins."
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        //console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
        addPlayerWin();
        return "Player - Paper | Computer - Rock | Player wins."
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        //console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
        addComputerWin();
        return "Player - Paper | Computer - Scissors | Computer wins."
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        //console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
        addComputerWin();
        return "Player - Scissors | Computer - Rock | Computer wins."
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        //console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
        addPlayerWin();
        return "Player - Scissors | Computer - Paper | Player wins."
    }
}
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

//Player and computer wins and draws

let playerWins = 0;
let computerWins = 0;
let draws = 0;

function addPlayerWin() {
    playerWins = playerWins + 1; //Add player win
}
function addComputerWin() {
    computerWins = computerWins + 1; //Add computer win
}
function addDraw() {
    draws = draws + 1; //Add draw
}

//Create game function

function game() {
    alert ('Welcome to Rock, Paper, Scissors! In this game, you will play against the computer for 5 rounds. At the end of the 5 rounds, whoever has the highest score is the winner!')
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Round ${i + 1}/5. Choose rock, paper or scissors.`); //Prompt player to give input
        playerSelection = playerSelection.toLowerCase(); //Change player's input to lowercase
        if(playerSelection === "branko") {
            alert("Hello Branko, thanks for trying to break my game!"); //Special message for Branko
            i = i - 1; //Reset round
            continue; //Continue loop
           } else if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            alert("Error. Please ensure you have input either rock, paper or scissors."); //Error message if not rock, paper or scissors
            i = i - 1; //Reset round
            continue; //Continue loop
        }
        //Result of round
        let result = playRound(playerSelection, computerPlay());
        alert(result);
        console.log(`Round ${i + 1} | ${result}`);
    }
    //Final results
    if(playerWins > computerWins) {
        console.log(`FINAL RESULTS | Player: ${playerWins} | Computer: ${computerWins} | Draws: ${draws} | Player wins!`);
        alert(`FINAL RESULTS | Player: ${playerWins} | Computer: ${computerWins} | Draws: ${draws} | Player wins!`);
    } else if(computerWins > playerWins) {
        console.log(`FINAL RESULTS | Player: ${playerWins} | Computer: ${computerWins} | Draws: ${draws} | Computer wins!`);
        alert(`FINAL RESULTS | Player: ${playerWins} | Computer: ${computerWins} | Draws: ${draws} | Computer wins!`);
    } else if(playerWins == computerWins) {
        console.log(`FINAL RESULTS | Player: ${playerWins} | Computer: ${computerWins} | Draws: ${draws} | It's a draw!`);
        alert(`FINAL RESULTS | Player: ${playerWins} | Computer: ${computerWins} | Draws: ${draws} | It's a draw!`);
    }
    playerWins = 0; //Reset player wins
    computerWins = 0; //Reset computer wins
    draws = 0; //Reset draws
}