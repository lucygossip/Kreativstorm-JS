//Create computerPlay function

function computerPlay() {
    let rockPaperScissors = ["rock", "paper", "scissors"]; // Create rock, paper and scissors
    return rockPaperScissors[(Math.floor(Math.random() * rockPaperScissors.length))]; //Returns random option from options array
}

//console.log(computerPlay());
//function that plays the first round of the game

//make variables globle to use it on game function
let playerwin = 0;
let computerwin = 0;
let faildprompt = false;

let PlayRound = (playerSelection, computerPlay)=> {
    // changing user input not be case sentsitive depending on how string is entered
    playerSelection.toLowerCase();
    if (playerSelection===computerPlay){
        // console.log(`Playerselection: ${playerSelection} and computerPlayState: ${computerPlay} =Draw`);
        return (`Playerselection: ${playerSelection} and computerPlayState: ${computerPlay}= Draw`);
    }
    else if(playerSelection==='rock' && computerPlay==='paper'){
        computerwin++;
        return (`Playerselection: ${playerSelection} and, computerPlay:${computerPlay} =  Computer win`);
    }

    else if(playerSelection==='paper' && computerPlay==='rock'){
        playerwin++;
        return (`Playerselection: ${playerSelection} and, computerPlay:${computerPlay} =  Player win`);
    }

    else if(playerSelection==='paper' && computerPlay==='scissors'){
        computerwin++;
        return(`Playerselection: ${playerSelection} and, computerPlay:${computerPlay} =  Computer win`)
    }

    else if(playerSelection==='scissors' && computerPlay==='paper'){
        playerwin++;
        return(`Playerselection: ${playerSelection} and, computerPlay:${computerPlay} =  Player win`)
    }

    else if(playerSelection==='scissors' && computerPlay==='rock'){
        computerwin++;
        return(`Playerselection: ${playerSelection} and, computerPlay:${computerPlay} =  Computer win`)
    }
    else if(playerSelection==='rock' && computerPlay==='scissors'){
        playerwin++;
        return(`Playerselection: ${playerSelection} and, computerPlay:${computerPlay} = Player win`)
    }
    else{
        faildprompt = true;
        alert('please choose between rock, paper and scissors');
    };
};

let game = () =>{
    //loop to count 5 rounds 
    for(let i = 0;i < 5;i++) {
       //get input from user and call playround function
       let result = PlayRound(prompt('Please enter any string value: '),computerPlay());
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
game();
