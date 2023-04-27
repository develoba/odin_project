let computerScore = 0;
let playerScore = 0;
let round = 0;
let result = 'Make a choice!'

const round_result = document.querySelector('#roundResult');
const restart_btn = document.querySelector('#restart');
const player_score_text = document.querySelector('#playerScore');
const computer_score_text = document.querySelector('#computerScore');
const btns = document.querySelectorAll(".btn");
const imgPlayer = document.querySelector('#imgPlayer');
const gameOver = document.querySelector('#gameOver');
const titleGameOver = document.querySelector('#titleGameOver');
const imgGameOver = document.querySelector('#imgGameOver');
const restartGame = document.querySelector('#startNew');
const rulesBtn = document.querySelector('#linkRules');
const continueBtn = document.querySelector('#continueBtn');
const rulesWindow = document.querySelector('#rules');

const rules = {'rock': ['scissors', 'lizard'],
            'paper': ['rock', 'spock'],
            'scissors': ['paper', 'lizard'],
            'lizard': ['spock', 'paper'],
            'spock': ['rock', 'scissors']};
const phrases = {'rock': ['(as it always has) crushes', 'crushes'],
            'paper': ['covers', 'disproves'],
            'scissors': ['cuts', 'decapitates'],
            'lizard': ['poisons', 'eats'],
            'spock': ['vaporizes', 'smashes']};
const phrases_lost = {'rock': ['is crushed by', 'is crushed by'],
                    'paper': ['is covered by', 'is disproved by'],
                    'scissors': ['is cut by', 'is decapitated by'],
                    'lizard': ['is poisoned by', 'is eaten by'],
                    'spock': ['is vaporized by', 'is smashed by']};

game();

restart_btn.addEventListener('click', () => {
    restart_game();
    //game();
});

restartGame.addEventListener('click', () => {
    restart_game();
    gameOver.classList.remove('active');
});

rulesBtn.addEventListener('click', () => {
    rulesWindow.classList.add('active-window');
})
continueBtn.addEventListener('click', () => {
    rulesWindow.classList.remove('active-window');
})

function restart_game() {
    result = 'Make a choice!';
    computerScore = 0;
    playerScore = 0;
    imgPlayer.setAttribute('src', '');
    imgComputer.setAttribute('src', '');
    set_scores();
}
function set_scores() {
    round_result.textContent = result;
    player_score_text.textContent = `points: ${playerScore}`;
    computer_score_text.textContent = `points: ${computerScore}`;
}

// Get Computer choice as a random number
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors", "lizard", "spock"];
    return choice[Math.floor(Math.random() * 5)];
}

// Function of a round that takes two selections and return the winner and update global scores
let phrase = '';
function playRound(playerSelection, computerSelection) {
    if (playerSelection != computerSelection) {
        if (computerSelection == rules[playerSelection][0] || computerSelection == rules[playerSelection][1]) {
            playerScore++;
            phrase = (rules[playerSelection][0] == computerSelection) ? phrases[playerSelection][0] : phrases[playerSelection][1];
            return `${playerSelection.toUpperCase()} ${phrase} ${computerSelection.toUpperCase()}!`;
        }
        computerScore++;
        phrase = (rules[computerSelection][0] == playerSelection) ? phrases_lost[computerSelection][0] : phrases_lost[computerSelection][1];
        return `${playerSelection.toUpperCase()} ${phrase} ${computerSelection.toUpperCase()} :(`;
    }
    return "It's a tie!"
}

function endGame() {
    gameOver.classList.add('active');
    if (playerScore > computerScore) {
        titleGameOver.innerHTML = `Congrats! <br> <span>You won ${playerScore} to ${computerScore}</span>`;
        imgGameOver.setAttribute('src', './assets/sheldon-win.png');
    } else {
        titleGameOver.innerHTML = `Sorry! <br> <span>You lost ${playerScore} to ${computerScore}</span>`;
        imgGameOver.setAttribute('src', './assets/sheldon-lose.png');
    } 
    restartGame();

}



function setPlayerSelection(selection) {
    imgPlayer.setAttribute('src', `./assets/${selection}.jpg`);
}
function setComputerChoice(selection) {
    imgComputer.setAttribute('src', `./assets/${selection}-reverse.jpg`);
}

function game() {
    
    let computerSelection = '';
    
    let playerSelection = '';
 
    btns.forEach(btn => btn.addEventListener('click', () => {
        playerSelection = btn.getAttribute('id');
        computerSelection = getComputerChoice();

        console.log(playerScore + ':' + computerScore);

        // Set choices in UI
        setPlayerSelection(playerSelection);
        setComputerChoice(computerSelection);


        result = playRound(playerSelection, computerSelection);
        
        console.log(playerScore + ':' + computerScore);

        set_scores();
        console.log(playerScore + ':' + computerScore);
        if (playerScore === 5 || computerScore === 5)
        {
            endGame();
        }


    }));
    
}



