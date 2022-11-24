function getComputerChoise()
{
    let randomNumber = Math.floor(Math.random() * 3);

    return randomNumber;
}

function getPlayerChoise()
{
    let input = prompt("Choose: Rock / Paper / Scissors ?");

    if((input === null) || (showChoise(input) === "Wrong input!"))
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
            return "Wrong input!";
    }
}