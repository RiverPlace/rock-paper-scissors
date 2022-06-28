const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerPlay) {
    if (!choices.includes(playerSelection)) {
        console.log('Incorrect choice. Please try again.')
        // Fix this so 
    }

    if ((playerSelection == 'rock' && computerPlay == 'scissors') || 
        (playerSelection == 'paper' && computerPlay == 'rock') || 
        (playerSelection == 'scissors' && computerPlay == 'paper')) {
            console.log(`Player wins! ${playerSelection} beats ${computerPlay}`);
            return 'player';
    }
    
    console.log(`Computer wins! ${computerPlay} beats ${playerSelection}`);
    return 'computer';
}

function game() {
    playerWins = 0;
    computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let player = '';
        while (!choices.includes(player)) {
            player = prompt("Please choose 'rock', 'paper', or 'scissors'.");
        }
        const computer = computerPlay();
        
        let winner = playRound(player, computer); 
        if (winner == 'player') {
            playerWins++;
        } else {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log(`Player wins the game! ${playerWins} to ${computerWins}`);
        return;
    }

    console.log(`Computer wins! ${computerWins} to ${playerWins}`);
}

game();

// SCRUM: framework for getting work done. New features / products are released through sprints:
//  - All about continuous learning, adapting to market conditions and user requirements
//  - Our sprints are about a month...
//  - We do: planning, reviews, and retros sometimes (we don't currenty do daily standup - devs in different countries... )

/* Notes
- 
*/