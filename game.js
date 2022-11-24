function getComputerChoise()
{
    let randomNumber = Math.floor(Math.random() * 3);

    return randomNumber;
}

function getPlayerChoise()
{
    return prompt("Choose: Rock / Paper / Scissors ?");
}

function showComputerChoise(computerSelection)
{
    switch (computerSelection)
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function showPlayerChoise(playerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection)
    {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
        default:
            alert("Wrong input");
    }
}