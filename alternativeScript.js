const choices = [`rock`, `paper`, `scissor`]

const ComputerSelect = () =>{
    return  choices[Math.floor(Math.random() * 3)];
}

const PlayRoud = (playerSelection, computerSelection)=>{
    playerSelection = playerSelection.toLocaleLowerCase()
    if(!choices.includes(playerSelection)) {alert("Invalid Input, please, use rock, paper or scissor!"); return false;}
    if(playerSelection == computerSelection) {alert("Draw! Play again!"); return false;}
    alert(`Computer selected ${computerSelection}!`)
    switch(playerSelection){
        case `rock`:
            if(computerSelection == `paper`){return `comp`} else {return `player`}
        case `paper`:
            if(computerSelection == `scissor`){return `comp`} else {return `player`}
        case `scissor`:
            if(computerSelection == `rock`){return `comp`} else {return `player`}
    }
}

const Game = () =>{
    let playerCount = 0;
    let compCount = 0;

    for(i = 0; i < 5; i++){
        const result = PlayRoud(prompt("Rock, paper or scissor!"), ComputerSelect());
        if(result){if(result == `player`){alert("You win!"); playerCount++ }else{alert("You Lose!"); compCount++ }} else i--;
        if(playerCount == 3){alert("You Won the GAME!"); return;}
        if(compCount == 3){alert("You Lost the GAME!"); return;}
    }
}

Game()