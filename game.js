function getComputerChoise()
{
    let randomNumber = Math.floor(Math.random() * 3);

    return randomNumber;
}

function showChoiseInString(choise)
{
    switch (choise)
    {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const rock = document.querySelector('.btn-rock');
const paper =document.querySelector('.btn-paper');
const scissors = document.querySelector('.btn-scissors');
const playAgain = document.querySelector('.btn-again');

const compare = document.querySelector('.compare-choise');
const playerResult = document.querySelector('.player-result');
const computerResult = document.querySelector('.computer-result');
const roundResult = document.querySelector('.round-result');
const finalResult = document.querySelector('.final-result');

let playerScore = 0;
let computerScore = 0;

playerResult.textContent = `Player Score = ${playerScore}`;
computerResult.textContent = `Computer Score = ${computerScore}`;

function playRound()
{
    let computerChoise = showChoiseInString(getComputerChoise());

    // player win scenario
    if (playerScore < 5 && computerScore < 5)
    {

        if (this === rock && computerChoise === 'scissors')
        {
        ++playerScore;
        compare.textContent = 'Rock beats Scissors';
        roundResult.textContent = 'Player win this round';
        }
        else if (this === paper && computerChoise === 'rock')
        {
        ++playerScore;
        compare.textContent = 'Paper beats Rock';
        roundResult.textContent = 'Player win this round';
        }
        else if (this === scissors && computerChoise === 'paper')
        {
        ++playerScore;
        compare.textContent = 'Scissors beats Paper';
        roundResult.textContent = 'Player win this round';
        }

        // computer win scenario
        if (this === scissors && computerChoise === 'rock')
        {
        ++computerScore;
        compare.textContent = 'Rock beats Scissors';
        roundResult.textContent = 'Computer win this round';
        
        }
        else if (this === paper && computerChoise === 'scissors')
        {
        ++computerScore;
        compare.textContent = 'Scissors beats Paper';
        roundResult.textContent = 'Computer win this round';
        }
        else if (this === rock && computerChoise === 'paper')
        {
        ++computerScore;
        compare.textContent = 'Paper beats Rock';
        roundResult.textContent = 'Computer win this round';
        }

        // tie scenario
        if ((this === rock && computerChoise === 'rock') ||
            (this === paper && computerChoise === 'paper') ||
            (this === scissors && computerChoise === 'scissors') &&
            (playerScore < 5 && computerScore < 5))
        {
            compare.textContent = 'Tie';
        }
    }

    playerResult.textContent = `Player Score = ${playerScore}`;
    computerResult.textContent = `Computer Score = ${computerScore}`;

    if (playerScore === 5)
    {
        finalResult.textContent = 'Player win!';
        playAgain.classList.remove('hide');
    }
    else if (computerScore === 5)
    {
        finalResult.textContent = 'Computer win!';
        playAgain.classList.remove('hide');
    }
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

playAgain.addEventListener('click', () => location.reload());