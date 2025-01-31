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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  document.body.style.backgroundColor = 'white';
  display.style.color = 'black';
  if(computerChoice == "rock"){
      if (humanChoice == "rock"){
          display.textContent = "It's a draw: Both chose Rock. \n Scores: You " + humanScore + " : AI " + computerScore;
      } 
      else if (humanChoice == "paper"){
          humanScore += 1;
          display.textContent = "You win! Paper covers Rock. \n Scores: You " + humanScore + " : AI " + computerScore;
      }
      else{
          computerScore += 1;
          display.textContent = "AI wins! Rock smashes Scissors. \n Scores: You " + humanScore + " : AI " + computerScore;
      }
  }

  else if(computerChoice == "paper"){
      if (humanChoice == "rock"){
          computerScore += 1;
          display.textContent = "AI wins! Paper covers Rock. \n Scores: You " + humanScore + " : AI " + computerScore;
      }
      else if (humanChoice == "paper"){ 
          display.textContent = "It's a draw: Both chose Paper. \n Scores: You " + humanScore + " : AI " + computerScore;
      }
      else{ 
          humanScore += 1;
          display.textContent = "You win! Scissors beat Paper. \n Scores: You " + humanScore + " : AI " + computerScore;
      }
  }

  else { 
      if (humanChoice == "rock"){ 
          humanScore += 1;
          display.textContent = "You win! Rock smashes Scissors. \n Scores: You " + humanScore + " : AI " + computerScore;
      }
      else if (humanChoice == "paper"){ 
          computerScore += 1;
          display.textContent = "AI wins! Scissors shred Paper. \n Scores: You " + humanScore + " : AI " + computerScore;
      }
      else{ 
          display.textContent = "It's a draw: Both chose Scissors. \n Scores: You " + humanScore + " : AI " + computerScore;
      }
  }
  if (computerScore >= 5){
      document.body.style.backgroundColor = 'red';
      display.style.color = 'white';
      display.textContent = "GAME OVER. AI Wins! \n Scores: You " + humanScore + " : AI " + computerScore;
      humanScore = 0;
      computerScore = 0;
  }
  else if(humanScore >= 5){
      document.body.style.backgroundColor = 'green';
      display.style.color = 'white';
      display.textContent = "Congratulations! You Won! \n Scores: You " + humanScore + " : AI " + computerScore;
      humanScore = 0;
      computerScore = 0;
  }
}

const buttons = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';

document.body.style.textAlign = 'center';
document.body.style.padding = '80px';
buttons.style.margin = '24px';


const display = document.createElement('div');

rockBtn.addEventListener('click', () => {
  const humanSelection = 'rock';
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
})

paperBtn.addEventListener('click', () => {
  const humanSelection = 'paper';
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
})

scissorsBtn.addEventListener('click', () => {
  const humanSelection = 'scissors';
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
})

const body = document.querySelector('body');

body.appendChild(buttons);

buttons.appendChild(rockBtn);
buttons.appendChild(paperBtn);
buttons.appendChild(scissorsBtn);

body.appendChild(display);
