function getComputerChoice(){
    x = Math.floor(Math.random() * 3);
    if (x == 0){
        return "rock";
    }
    else if(x == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Rock Paper Scissors");
    return humanChoice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if(computerChoice == "rock"){
            if (humanChoice == "rock") return console.log("“It's a Tie! You both chose Rock”");

            else if (humanChoice == "paper") return console.log("You Won! Paper beats Rock”");

            else if (humanChoice == "scissors") return console.log("“You lose! Rock beats Scissors”");

            else return console.log("Invalid choice! Please choose Rock, Paper, or Scissors.");
    }

    else if(computerChoice == "paper"){
            if (humanChoice == "rock") return console.log("“You lose! Paper beats Rock”");

            else if (humanChoice == "paper") return console.log("“It's a Tie! You both chose Paper”");

            else if (humanChoice == "scissors") return console.log("“You Won! Scissors beats Paper”");

            else return console.log("Invalid choice! Please choose Rock, Paper, or Scissors.");
    }

    else { 
        if (humanChoice == "rock") return console.log("“You Won! Rock beats Scissors”");

        else if (humanChoice == "paper") return console.log("“You lose! Scissors beats Paper”");

        else if (humanChoice == "scissors") return console.log("“It's a Tie! You both chose Scissors”"); 
        
        else return console.log("Invalid choice! Please choose Rock, Paper, or Scissors.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);