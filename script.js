let rockPaperScissors = ["rock", "paper", "scissors"];
let playerwin = 0;
let computerwin = 0;

function computerPlay() {
    return rockPaperScissors[(Math.floor(Math.random() * rockPaperScissors.length))];
}

function userPlay() {
    let  userChoice = prompt("Please enter rock, paper or scissors.");
    userChoice = userChoice.toLowerCase();
    userChoice = userChoice.trim();
    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        alert ("Error - Please check for typos and type only rock, paper or scissors.");
        return false;
    } else {
        return userChoice;
    }
}

let playRound = (playerSelection, computerPlay) => {
    if (playerSelection === null) { // User cancelled the prompt
        return "exit";
    }
    console.log(`Player has chosen ${playerSelection} and computer has chosen ${computerPlay}`);

    if (playerSelection === computerPlay) {
        result = "Draw";
    } else if (
        (playerSelection === 'rock' && computerPlay === 'scissors') ||
        (playerSelection === 'scissors' && computerPlay === 'paper') ||
        (playerSelection === 'paper' && computerPlay === 'rock')
    ) {
        playerwin++;
        result = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerPlay)}`;
    } else if (
        playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'
    ) {
        computerwin++;
        result = `You Lose! ${capitalize(computerPlay)} beats ${capitalize(playerSelection)}`;
    }
    return result;
};

const game = () => {
    for (let i = 0; i < 5; ) {
        const result = playRound(userPlay(), computerPlay());
        if (result === "exit") {
            alert("Thanks for playing! Hope to see you again.");
            return;
        } else if (result === "Draw") {
            alert("It's a draw! Let's replay the round.");
            continue; // Continue to the next iteration without incrementing
        } else if (result) {
            alert(result);
            console.log(`${result} | Current score: Player - ${playerwin}, Computer - ${computerwin}`);
            i++;
        }
        if (playerwin == 3 || computerwin == 3) {
            alert(playerwin == 3 ? "You Won the GAME!" : "You Lost the GAME!");
            return;
        }
    }
}

const resetGame = () => {
    playerwin = 0;
    computerwin = 0;
    alert("The game has been reset. To play again, please press ok to continue.");
    game();
}
alert("Welcome to Rock, Paper, Scissors! You will be playing against the computer. To beat the computer, you will need to win the best of 5 rounds. Draws will be replayed. To begin the game, please press ok to continue");

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

game()