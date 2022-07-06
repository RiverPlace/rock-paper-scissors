const choices = ['rock', 'paper', 'scissors'];
const buttons = document.getElementsByClassName('button');
const alert = document.getElementById('alert');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
let playerScore = 0;
let computerScore = 0;

function computerSelection() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert.textContent = `Tie! Play again.`;
        alert.style.color = '#444';
        return;
    }
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            alert.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
            alert.style.color = '#63B882';
            playerScore += 1;
            playerScoreEl.textContent = playerScore;
            determineWinner();
            return;
    }
    
    alert.textContent = `Computer wins... ${computerSelection} beats ${playerSelection}.`;
    alert.style.color = '#F2525D';
    computerScore += 1;
    computerScoreEl.textContent = computerScore;
    determineWinner();
}

function determineWinner() {
    if (playerScore === 5) {
        alert.textContent = `You won - ${playerScore} to ${computerScore}! Click above to start a new game.`;
        resetGame();
    }
    else if (computerScore === 5) {
        alert.textContent = `Computer wins... ${computerScore} to ${playerScore}. Click above to start a new game.`; 
        resetGame();
    };
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}

for (const button of buttons) {
    button.addEventListener('click', (e) => {
        playRound(e.target.id, computerSelection());
    });
}