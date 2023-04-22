
// Get Computer choice as a random number
function getComputerChoice() {
    // Define three possible choices
    let choice = ["Rock", "Paper", "Scissors"];

    // Return and integer between 0 and 2 both inclusive randomly selected
    // Math.random gets random float between 0 and 1 exclusive
    // Making * 3 makes the coice between 0 and 3 exclusive [0.0 - 2.99]
    // Math.floor makes that choices between 0, 1 or 2
    return choice[Math.floor(Math.random() * 3)];
}

// Function of a round that takes two selections and return the winner
// 1- Check every solution and return message of win or loss
//  player = paper ; computer = paper -> it's a tie
//  player = paper ; computer = scissors -> you loss
//  player = paper ; computer = rock -> you win
//  player = scissors ; computer = scissors -> it's a tie
//  player = scissors ; computer = paper -> you win
//  player = scissors ; computer = rock -> you loss
//  player = rock ; computer = rock -> it's a tie
//  player = rock ; computer = paper -> you loss
//  player = rock ; computer = scissors -> you win
// 2- Check it for lowercased choices

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case 'paper':
            if (computerSelection.toLowerCase() == 'rock') {
                return ["You Win! Paper beats Rock", 1, 0];
            } 
            else if (computerSelection.toLowerCase() == 'scissors') {
                return ["You Lose! Scissors beats Paper", 0, 1];
            }
            else {
                return ["It's a tie!", 0, 0];
            }
        case 'scissors':
            if (computerSelection.toLowerCase() == 'paper') {
                return ["You Win! Scissors beats Paper", 1, 0];
            }
            else if (computerSelection.toLowerCase() == 'rock') {
                return ["You Lose! Rock beats Scissors", 0, 1];
            }
            else {
                return ["It's a tie!", 0 , 0];
            }
        case 'rock':
            if (computerSelection.toLowerCase() == 'paper') {
                return ["You Lose! Paper beats Rock", 0, 1];
            }
            else if (computerSelection.toLowerCase() == 'scissors') {
                return ["You Win! Rock beats Scissors", 1, 0];
            }
            else {
                return ["It's a tie!", 0, 0];
            }
        default:
            return "";
    }
}

// Prompt for a choice between rock, paper or scissors 
// choice made will be playerSelection
// Get computerSelection by calling getComputerChoice
// Iterate 5 times and call playRound
// Playround should return an array of [message, playerPoint, computerPoint]
// Save the return of playRound in an array
// console.log(array[0]) to get the message
// create two integers to add each time arr[1] and arr[2]
// Finally, if array of playerPoints is grreater than array of computerPoints, player Win
function game() {
    const NUM_ROUNDS = 5;
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < NUM_ROUNDS; i++) {
        console.log(`----------Round ${i+1} of ${NUM_ROUNDS}-------------`);
        let playerSelection = prompt("Rock, Paper or Scissors? ");
        let computerSelection = getComputerChoice();

        console.log(`Player choice: ${playerSelection}`);
        console.log(`Computer choice: ${computerSelection}`);

        let round_results = playRound(playerSelection, computerSelection);
        console.log(round_results[0]);

        playerPoints += round_results[1];
        computerPoints += round_results[2];
    }

    if (playerPoints > computerPoints) {
        return `You won the game ${playerPoints} to ${computerPoints}`;
    } else if (playerPoints < computerPoints) {
        return `You lost the game ${playerPoints} to ${computerPoints}`;
    } else {
        return "It's a tie";
    }

}

console.log(game());


