
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
// 1- If player = "Rock" and computer = "Paper" 
function playRound(playerSelection, computerSelection) {

}

console.log(getComputerChoice());

