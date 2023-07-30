# Kreativstorm Week 3 Assignment

## Link

Link Here

## Assignment Objectives

- Create a game of Rock, Paper Scissors
- Game must have 5 rounds
- Game must not break

## Task List

- Create computerPlay function
    - Randomly return 'Rock', 'Paper', or 'Scissors'
- Write playRound function to play a single round of rock, paper scissors
    - Include 2 parameters - **playerSelection** and **computerSelection**
    - Return a string that declares the winner of the round
    - Make the playerSelection parameter case-insensitive
        [Case sensitivity](https://gomakethings.com/converting-strings-to-uppercase-and-lowercase-with-vanilla-javascript/#:~:text=JavaScript%20provides%20two%20helpful%20functions,converts%20a%20string%20to%20uppercase.)
    - Return the results
    
- Create game() function
    - Call playRound() inside this function
    - Use loop to make 5 round game
    - Use console.log() to declare winner at the end
    
- Use prompt() to get input from the user
    - [prompt() info](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)