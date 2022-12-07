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
const result = document.querySelector('.result');
const computerResult = document.querySelector('.computer-result');
const roundResult = document.querySelector('.round-result');

const win = document.querySelector('.win');
const lose = document.querySelector('.lose');

const playerNumber = document.querySelector('.player-number');
const computerNumber = document.querySelector('.computer-number');

const playerStyle = document.querySelector('.player');
const computerStyle = document.querySelector('.computer');

const roundCounter = document.querySelector('.round-counter');
const roundNumber = document.querySelector('.round-number');

function game()
{
let playerScore = 0;
let computerScore = 0;
let round = 0;

playerNumber.textContent = `${playerScore}`;
computerNumber.textContent = `${computerScore}`;
roundNumber.textContent = `${round}`;

function playRound()
{
    result.removeAttribute('id');
    let computerChoise = showChoiseInString(getComputerChoise());
    
    if (playerScore < 5 && computerScore < 5)
    {
        ++round;
        roundNumber.textContent = `${round}`;

        // player win scenario
        if (this === rock && computerChoise === 'scissors')
        {
        ++playerScore;
        compare.textContent = 'Rock beats Scissors';
        compare.style.color = 'blue';
        roundResult.textContent = 'You win this round';
        roundResult.style.color = 'green';
        }
        else if (this === paper && computerChoise === 'rock')
        {
        ++playerScore;
        compare.textContent = 'Paper beats Rock';
        compare.style.color = 'blue';
        roundResult.textContent = 'You win this round';
        roundResult.style.color = 'green';
        }
        else if (this === scissors && computerChoise === 'paper')
        {
        ++playerScore;
        compare.textContent = 'Scissors beats Paper';
        compare.style.color = 'blue';
        roundResult.textContent = 'You win this round';
        roundResult.style.color = 'green';
        }

        // computer win scenario
        if (this === scissors && computerChoise === 'rock')
        {
        ++computerScore;
        compare.textContent = 'Rock beats Scissors';
        compare.style.color = 'crimson';
        roundResult.textContent = 'Computer win this round';
        roundResult.style.color = 'red';
        
        }
        else if (this === paper && computerChoise === 'scissors')
        {
        ++computerScore;
        compare.textContent = 'Scissors beats Paper';
        compare.style.color = 'crimson';
        roundResult.textContent = 'Computer win this round';
        roundResult.style.color = 'red';
        }
        else if (this === rock && computerChoise === 'paper')
        {
        ++computerScore;
        compare.textContent = 'Paper beats Rock';
        compare.style.color = 'crimson';
        roundResult.textContent = 'Computer win this round';
        roundResult.style.color = 'red';
        }

        // tie scenario
        if ((this === rock && computerChoise === 'rock') ||
            (this === paper && computerChoise === 'paper') ||
            (this === scissors && computerChoise === 'scissors') &&
            (playerScore < 5 && computerScore < 5))
        {
            compare.textContent = 'Tie';
            compare.style.color = 'gray';
            roundResult.textContent = '';
        }
    }

    playerNumber.textContent = `${playerScore}`;
    computerNumber.textContent = `${computerScore}`;

    if (roundResult.textContent.includes('You'))
    {
        playerStyle.style.backgroundColor = 'green';
        computerStyle.style.backgroundColor = 'red';
    }
    else if (roundResult.textContent.includes('Computer'))
    {
        playerStyle.style.backgroundColor = 'red';
        computerStyle.style.backgroundColor = 'green';
    }
    else if (compare.textContent.includes('Tie'))
    {
        playerStyle.style.backgroundColor = 'gray';
        computerStyle.style.backgroundColor = 'gray';
    }

    if (playerScore === 5)
    {
        win.removeAttribute('id');
        playAgain.classList.remove('hide');
        playAgain.removeAttribute('id');
    }
    else if (computerScore === 5)
    {
        lose.removeAttribute('id');
        playAgain.removeAttribute('id');
    }
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

playAgain.addEventListener('click', () => location.reload());
}

game();