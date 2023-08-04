let rockPaperScissors = ["rock", "paper", "scissors"]; // Create rock, paper and scissors

//make variables globle to use it on game function
let playerwin = 0;
let computerwin = 0;

//Create computerPlay function
function computerPlay() {
    return rockPaperScissors[(Math.floor(Math.random() * rockPaperScissors.length))]; //Returns random option from options array
}

//console.log(computerPlay());

//function that plays the first round of the game

let playRound = (playerSelection, computerPlay)=> {
    if(!playerSelection) {
        alert("Please don't leave, I wanna play!");
        return false;
    }
    // changing user input not be case sentsitive depending on how string is entered
   playerSelection =  playerSelection.toLowerCase();
    console.log(`Player has chosen ${playerSelection} and computer has chosen ${computerPlay}`);
    if (playerSelection===computerPlay){
        return "Draw"
    }
    else if(playerSelection==='rock' && computerPlay==='paper'){
        return "Computer wins"
    }

    else if(playerSelection==='paper' && computerPlay==='rock'){
        return "Player wins"
    }

    else if(playerSelection==='paper' && computerPlay==='scissors'){
        return "Computer wins"
    }

    else if(playerSelection==='scissors' && computerPlay==='paper'){
        return "Player wins"
    }
    else if(playerSelection==='scissors' && computerPlay==='rock'){
        return "Computer wins"
    }
    else if(playerSelection==='rock' && computerPlay==='scissors'){
        return "Player wins"
    }
    else{
        return false;
        alert('please choose between rock, paper and scissors');
    };
};

//const playerSelection = "paper";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

const game = () => {
    for(let i = 0; i < 5; i++) {
        const result = playRound(prompt('Please enter rock, paper or scissors.'), computerPlay());
        if(result){
            console.log(`${result} | Current score: Player - ${playerwin}, Computer - ${computerwin}`);
            if(result == "Player wins") {
                alert("You win!");
                playerwin++
            } else {
                alert("You lose!");
                computerwin++;
            }
        } else i--;
        if(playerwin == 3){alert("You Won the GAME!"); return;}
        if(computerwin == 3){alert("You Lost the GAME!"); return;}
    }
}

alert("Welcome to Rock, Paper, Scissors! To begin the game, please open the console and type game()")

/*
let game = () =>{
    //loop to count 5 rounds 
    for(let i = 0;i < 5;i++) {
       //get input from user and call playRound function
       const result = playRound(prompt('Please enter any string value: '),computerPlay());
       //if no typo the round will count
       if(!faildprompt){
        console.log(result);
        // if it's the last round the score will display
        if(i === 4){
         if(playerwin > computerwin){
             console.log(`the winner is the player score: player ${playerwin} : computer ${computerwin}`);
         } else {
             console.log(`ops you lose score: player ${playerwin} : computer ${computerwin}`);
         }
        }
        // if there is typo the count will decrease by 1
       }else{
        i--;
        faildprompt = false;
       }
    }
}
// call the game function

*/