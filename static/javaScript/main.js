const choices = ["rock", "paper", "scissors"];
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const resultDisplay = document.getElementById("result");

function playGame (playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice){
        result = "It is a Tie!"
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;

        }
    }

    user.textContent = `User: ${playerChoice}`;
    computer.textContent = `User: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            break;
        case "It is a Tie!":
            resultDisplay.classList.add("blueText");
            break;
    }
}