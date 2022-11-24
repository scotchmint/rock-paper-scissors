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
        alert("Canceled");
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

function playRound(playerSelection, computerSelection)
{
    let player = showChoise(playerSelection);
    let computer = showChoise(computerSelection);

    console.log(`You choose ${player}`);
    console.log(`Computer choose ${computer}`);

    if ((player === "Rock" && computer === "Rock")
     || (player === "Paper" && computer === "Paper")
     || (player === "Scissors" && computer === "Scissors"))
    {
        return "Tie";
    }
    else if ((player === "Rock" && computer === "Paper")
          || (player === "Paper" && computer === "Scissors")
          || (player === "Scissors" && computer === "Rock"))
    {
        return "Lose";
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