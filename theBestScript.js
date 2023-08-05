const choices = [`rock`, `paper`, `scissor`]

const ExitCode = () =>{
    return confirm(`Are you sure you want to leave the game?`)
}

const ComputerPlay = () =>{
    return  choices[Math.floor(Math.random() * 3)];
}

const CheckInput = (input) =>{
    if(input == null){if(ExitCode()){return `exit`} else return false};
    input = input.trim()
    input = input.toLowerCase()
    if(!choices.includes(input)){alert("Invalid input, please use rock, paper or scissor");return false;}
    return input;
}

const UserPlay = () => {
    let userInput = false
    while(userInput == false){
        userInput = CheckInput(prompt(`Choose between rock, paper and scissor.`))
    }

    return userInput;
}

const Round = (userInput, computerInput) => {
    if(userInput == `exit`) return userInput;
    if(userInput == computerInput) return `draw`;
    switch(userInput){
        case `rock`: if(computerInput == `scissor`){return `playerWin`} else{return `compWin`}
        case `paper`: if(computerInput == `rock`){return `playerWin`} else{return `compWin`}
        case `scissor`: if(computerInput == `paper`){return `playerWin`} else{return `compWin`}
    }
}

const Game = () =>{
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 0; i < 5; i++){
        alert(`Round ${i + 1}, Player: ${playerWins} |--| Computer: ${computerWins}`)
        let userInput = UserPlay()
        let computerInput = ComputerPlay()
        let result = Round(userInput, computerInput)

        switch(result){
            case `exit`: {alert(`Thank you for playing our game! If you want to replay it, just type Game() on the console!`); return}
            case `draw`: {alert(`Draw! Please, play this round again`); i--; break;}
            case `playerWin`: {alert(`You Won! ${userInput} beats ${computerInput}`); playerWins++; break;}
            case `compWin`: {alert(`You Lost! ${computerInput} beats ${userInput}`); computerWins++; break;}
        }

        if(playerWins == 3 || computerInput == 3){
            alert(`You ${playerWins > computerInput ? `win` : `lost`}! To play the game again, please, type Game() into the console.`);
            return;
        }
    }
}

Game()