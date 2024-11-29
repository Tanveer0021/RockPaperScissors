function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
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
    let humanChoice = prompt("Choose your weapon, Neo: Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(computerChoice == "rock"){
        if (humanChoice == "rock"){
            return "🟩 The Matrix calculates a stalemate: Both chose Rock. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
        } 
        else if (humanChoice == "paper"){
            humanScore += 1;
            return "🟢 Neo outsmarts the Matrix! Paper wraps Rock. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
        }
        else if (humanChoice == "scissors"){
            computerScore += 1;
            return "🟥 The Matrix strikes back! Rock smashes Scissors. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
        }
        else return "🟨 Glitch in the Matrix! Choose Rock, Paper, or Scissors. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
    }

    else if(computerChoice == "paper"){
        if (humanChoice == "rock"){
            computerScore += 1;
            return "🟥 The Matrix dominates! Paper covers Rock. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
        }
        else if (humanChoice == "paper"){ 
            return "🟩 The Matrix holds steady: Both chose Paper. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
        }
        else if (humanChoice == "scissors"){ 
            humanScore += 1;
            return "🟢 Neo cuts through the Matrix! Scissors beat Paper. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
        }
        else return "🟨 Glitch in the Matrix! Choose Rock, Paper, or Scissors. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
    }

    else { 
        if (humanChoice == "rock"){ 
            humanScore += 1;
            return "🟢 Neo crushes the Matrix! Rock smashes Scissors. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
        }
        else if (humanChoice == "paper"){ 
            computerScore += 1;
            return "🟥 The Matrix retaliates! Scissors shred Paper. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
        }
        else if (humanChoice == "scissors"){ 
            return "🟩 Balance maintained in the Matrix: Both chose Scissors. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
        }
        else return "🟨 Glitch in the Matrix! Choose Rock, Paper, or Scissors. \n 🟢 Scores: Neo " + humanScore + " : AI " + computerScore;
    }
}

while(humanScore < 3 && computerScore < 3){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
} 

function playGame(humanScore, computerScore){
    if (computerScore > humanScore){
        return "🟥 GAME OVER. The Matrix has you, Neo. AI Wins!";
    }
    else{
        return "🟢 Victory! Neo defies the Matrix. You Won!";
    }
}

console.log(playGame(humanScore,computerScore));