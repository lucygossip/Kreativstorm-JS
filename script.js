//Create computerPlay function

function computerPlay() {
    let rockPaperScissors = ["rock", "paper", "scissors"]; // Create rock, paper and scissors
    return rockPaperScissors[(Math.floor(Math.random() * rockPaperScissors.length))]; //Returns random option from options array
}

//console.log(computerPlay());