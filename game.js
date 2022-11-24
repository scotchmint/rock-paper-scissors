function getComputerChoise()
{
    let randomNumber = Math.floor(Math.random() * 3);

    return randomNumber;
}

function getPlayerChoise()
{
    let input = prompt("Choose: Rock / Paper / Scissors ?");

    if((input === null) || (showChoise(input) === "wrong input"))
    {
        alert("Input is not right.");
    }

    return input;
}

function showChoise(choise)
{
    if (typeof choise === 'string')
    {
        choise = choise.toLowerCase();
    }

    switch (choise)
    {
        case "rock":
        case 0:
            return "Rock";
        case "paper":
        case 1:
            return "Paper";
        case "scissors":
        case 2:
            return "Scissors";
        default:
            return "wrong input";
    }
}

function playRound(player, computer)
{
    console.log(`You choose ${player}`);
    console.log(`Computer choose ${computer}`);

    if ((player === "Rock" && computer === "Rock")
     || (player === "Paper" && computer === "Paper")
     || (player === "Scissors" && computer === "Scissors"))
    {
        return "tie";
    }
    else if ((player === "Rock" && computer === "Paper")
          || (player === "Paper" && computer === "Scissors")
          || (player === "Scissors" && computer === "Rock"))
    {
        return "lose";
    }
    else if (player === "wrong input")
    {
        return "Try again!";
    }
    else
    {
        return "win";
    }
}

function game()
{
    let player;
    let computer;
    let playerScore = 0;
    let computerScore = 0;
    let result;
    
    for (let i = 0; i < 5; ++i)
    {
        player = showChoise(getPlayerChoise());
        computer = showChoise(getComputerChoise());
        result = playRound(player, computer);

        if (result === "win")
        {
            ++playerScore;
        }
        else if (result === "lose")
        {
            ++computerScore;
        }

        console.log(`Round ${i + 1}: Your score = ${playerScore}, Computer score = ${computerScore}`);
    }

    if (playerScore === computerScore)
    {
        console.log("Tie");
    }
    else if (playerScore > computerScore)
    {
        console.log("Player win!");
    }
    else
    {
        console.log("Computer win!");
    }
}

console.log(game());