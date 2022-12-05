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
const reset = document.querySelector('.btn-reset');

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
    console.log(`comp choise: ${computerChoise}`);

    // player win scenario
    // if (this === rock && computerChoise === 'scissors' && playerScore < 5 && computerScore < 5)
    // {
    //     ++playerScore;
    //     compare.textContent = 'Rock beats Scissors';
    //     roundResult.textContent = 'Player win this round';
    // }
    // else if (this === paper && computerChoise === 'rock' && playerScore < 5 && computerScore < 5)
    // {
    //     ++playerScore;
    //     compare.textContent = 'Paper beats Rock';
    //     roundResult.textContent = 'Player win this round';
    // }
    // else if (this === scissors && computerChoise === 'paper' && playerScore < 5 && computerScore < 5)
    // {
    //     ++playerScore;
    //     compare.textContent = 'Scissors beats Paper';
    //     roundResult.textContent = 'Player win this round';
    // }

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
    }

    // computer win scenario
    if (this === scissors && computerChoise === 'rock' && playerScore < 5 && computerScore < 5)
    {
        ++computerScore;
        compare.textContent = 'Rock beats Scissors';
        roundResult.textContent = 'Computer win this round';
        
    }
    else if (this === paper && computerChoise === 'scissors' && playerScore < 5 && computerScore < 5)
    {
        ++computerScore;
        compare.textContent = 'Scissors beats Paper';
        roundResult.textContent = 'Computer win this round';
    }
    else if (this === rock && computerChoise === 'paper' && playerScore < 5 && computerScore < 5)
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

    if (playerScore === 5)
    {
        finalResult.textContent = 'Player win!';
        reset.classList.remove('hide');
    }
    else if (computerScore === 5)
    {
        finalResult.textContent = 'Computer win!';
        reset.classList.remove('hide');
    }

    playerResult.textContent = `Player Score = ${playerScore}`;
    computerResult.textContent = `Computer Score = ${computerScore}`;
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

reset.addEventListener('click', () => location.reload());