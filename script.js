function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    const computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection,computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return `You Win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return `You Lose! Paper covers Rock. Score: ${playerScore} to ${computerScore}`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return `You Win! Paper covers Rock. Score: ${playerScore} to ${computerScore}`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return `You Lose! Scissors cut paper. Score: ${playerScore} to ${computerScore}`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return `You Win! Scissors cut paper. Score: ${playerScore} to ${computerScore}`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return `You Lose! Rock beats scissors. Score: ${playerScore} to ${computerScore}`;
    }
    else return `It's a Draw! Try again. Score: ${playerScore} to ${computerScore}`;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Type: Rock, Paper, or Scissors');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay()
        console.log(playRound(playerSelection,computerSelection))
    }
    if (playerScore > computerScore) {
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    }
    else if (computerScore > playerScore) {
        console.log(`Sorry, you lose. Final Score: ${playerScore} to ${computerScore}`);
    }
    else console.log(`It's a tie! Final Score: ${playerScore} to ${computerScore}`);
}

game();