//Create computerPlay function

function computerPlay() {
    let rockPaperScissors = ["rock", "paper", "scissors"]; // Create rock, paper and scissors
    return rockPaperScissors[(Math.floor(Math.random() * rockPaperScissors.length))]; //Returns random option from options array
}

//console.log(computerPlay());
//function that plays the first round of the game

const userprompt=prompt('Please enter any string value: '); //This variable is required to get an input from the user to start the game
playerSelection=userprompt.toLowerCase(); // changing user input not be case sentsitive depending on how string is entered
let PlayRound= (playerSelection, computerPlay)=> {
    let playerwin= 0
    let computerwin=0

    if (playerSelection===computerPlay){
        // console.log(`Playerselection: ${playerSelection} and computerPlayState: ${computerPlay} =Draw`);
        return (`Playerselection: ${playerSelection} and computerPlayState: ${computerPlay}= Draw`);
    }
    else if(playerSelection==='rock' && computerPlay==='paper'){
        let computerwins= computerwin+1;
        return (`Playerselection: ${playerSelection} and, computerPlay:${computerPlay}= Computerwin`);
    }

    else if(playerSelection==='paper' && computerPlay==='rock'){
        let playerwins= playerwin+1;
        return (`Playerselection: ${playerSelection} and, computerPlay:${computerPlay}= Playerwin`);
    }

    else if(playerSelection==='paper' && computerPlay==='scissors'){
        let computerwins= computerwin+1;
        return(`Playerselection: ${playerSelection} and, computerPlay:${computerPlay}= Computerwin`)
    }

    else if(playerSelection==='scissors' && computerPlay==='paper'){
       let playerwins= playerwin+1;
        return(`Playerselection: ${playerSelection} and, computerPlay:${computerPlay}= Playerwin`)
    }

    else if(playerSelection==='scissors' && computerPlay==='rock'){
       addComputerWin();
       console.log(computerwins)
        return(`Playerselection: ${playerSelection} and, computerPlay:${computerPlay}= Computerwin`)
    }
    else if(playerSelection==='rock' && computerPlay==='scissors'){
        let playerwins= playerwin+1;
        return(`Playerselection: ${playerSelection} and, computerPlay:${computerPlay} =Playerwin`)
    }
    else{
        alert('please choose between rock, paper and scissors');
    };
};

results = PlayRound(playerSelection, computerPlay());
console.log(results);