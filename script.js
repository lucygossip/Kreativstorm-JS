let rockPaperScissors = ["rock", "paper", "scissors"];
let playerwin = 0;
let computerwin = 0;

function computerPlay() {
    return rockPaperScissors[(Math.floor(Math.random() * rockPaperScissors.length))];
}

let playRound = (playerSelection, computerPlay) => {
    if (playerSelection === null) {
        return "exit";
    }
    playerSelection = playerSelection.toLowerCase();
    computerPlay = computerPlay.toLowerCase();
    console.log(`Player has chosen ${playerSelection} and computer has chosen ${computerPlay}`);

    let result;
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
    } else {
        alert('Please choose between rock, paper, and scissors');
        return false;
    }
    alert(result);
    return result;
};

const game = () => {
    for (let i = 0; i < 5; ) { // Removed incrementation from here
        const result = playRound(prompt('Please enter rock, paper or scissors. (or cancel to quit)'), computerPlay());
        if (result === "exit") {
            alert("Thanks for playing! Hope to see you again.");
            return;
        } else if (result === "Draw") {
            alert("It's a draw! Let's replay the round.");
        } else if (result) {
            console.log(`${result} | Current score: Player - ${playerwin}, Computer - ${computerwin}`);
            i++; // Increment only if the round was not a draw
        }
        if (playerwin == 3 || computerwin == 3) {
            alert(playerwin == 3 ? "You Won the GAME!" : "You Lost the GAME!");
            resetGame(); // Reset the game
            return;
        }
    }
}

const resetGame = () => {
    playerwin = 0;
    computerwin = 0;
    alert("The game has been reset. Type game() to play again!");
}

alert("Welcome to Rock, Paper, Scissors! To begin the game, please open the console and type game()");

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
