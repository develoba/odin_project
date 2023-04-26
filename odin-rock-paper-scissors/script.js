


let computerScore = 0;
let playerScore = 0;
let round = 0;
let result = 'Make a choice!'

const round_result = document.querySelector('#round_result');
const start_btn = document.querySelector('#start');
const player_score_text = document.querySelector('#playerScore');
const computer_score_text = document.querySelector('#computerScore');
const btns = document.querySelectorAll(".btn");

start_btn.addEventListener('click', () => {

    restart_game();
    game();
});

function restart_game() {
    round_result.textContent = 'Make a choice!';
    computerScore = 0;
    playerScore = 0;
    set_scores();
}
function set_scores() {
    round_result.textContent = result;
    player_score_text.textContent = `Your score: ${playerScore}`;
    computer_score_text.textContent = `Computer score: ${computerScore}`;
}

// Get Computer choice as a random number
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

// Function of a round that takes two selections and return the winner and update global scores
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) 
    {
        return "It's a tie!";
    } 
    else if (playerSelection == 'rock' && computerSelection == 'scissors' || 
    playerSelection == 'paper' && computerSelection == 'rock' || 
    playerSelection == 'scissors' && computerSelection == 'paper') 
    {
        playerScore += 1;
        return 'You win!';
    }
    else {
        computerScore += 1;
        return 'You lose :(';
    }
}

function endGame() {
    if (playerScore > computerScore) {
        round_result.textContent = `You won the game ${playerScore} to ${computerScore}`;
    } else if (playerScore < computerScore) {
        round_result.textContent = `You lost the game ${playerScore} to ${computerScore}`;
    } else {
        round_result.textContent = "It's a tie";
    }
    playerScore = 0;
    computerScore = 0;
    player_score_text.textContent = `Your score: ${playerScore}`;
    computer_score_text.textContent = `Computer score: ${computerScore}`;

}


function game() {
    
    let computerSelection = getComputerChoice();
    let playerSelection = '';
 
    btns.forEach(btn => btn.addEventListener('click', () => {
        playerSelection = btn.getAttribute('id');

        result = playRound(playerSelection, computerSelection);
        
        set_scores();
    
        if (playerScore === 5 || computerScore === 5)
        {
            endGame();
        }

    }));
    

    

}



