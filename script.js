const body = document.querySelector('body');
const buttons = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const roundResult = document.createElement('h1');
const scoreCard = document.createElement('h1');

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';

body.style.textAlign = 'center';
body.style.padding = '80px';
scoreCard.style.fontSize = '2.5em';

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
  
  if(computerChoice == "rock"){
      if (humanChoice == "rock"){
          roundResult.innerHTML = `It's a draw: Both chose Rock.<br>`;
      } 
      else if (humanChoice == "paper"){
          humanScore += 1;
          roundResult.innerHTML = `You win! Paper covers Rock.<br>`;
      }
      else{
          computerScore += 1;
          roundResult.innerHTML = `AI wins! Rock smashes Scissors.<br>`;
      }
  }

  else if(computerChoice == "paper"){
      if (humanChoice == "rock"){
          computerScore += 1;
          roundResult.innerHTML = `AI wins! Paper covers Rock.<br>`;
      }
      else if (humanChoice == "paper"){ 
        roundResult.innerHTML = `It's a draw: Both chose Paper.<br>`;
      }
      else{ 
          humanScore += 1;
          roundResult.innerHTML = `You win! Scissors beat Paper.<br>`;
      }
  }

  else { 
      if (humanChoice == "rock"){ 
          humanScore += 1;
          roundResult.innerHTML = `You win! Rock smashes Scissors.<br>`;
      }
      else if (humanChoice == "paper"){ 
          computerScore += 1;
          roundResult.innerHTML = `AI wins! Scissors shred Paper.<br>`;
      }
      else{ 
          roundResult.innerHTML = `It's a draw: Both chose Scissors.<br>`;
      }
  }

  scoreCard.innerHTML = `Score: You ${humanScore} - AI ${computerScore}`;

  if (computerScore >= 5 || humanScore >= 5){
    roundResult.innerHTML = humanScore >= 5 ? `Congratulations! You Won!<br>`:`GAME OVER. AI Wins!<br>`;
    scoreCard.innerHTML = `Final Score: You ${humanScore} - AI ${computerScore}`;
      humanScore = 0;
      computerScore = 0;
  }
}

rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));

body.appendChild(buttons);
buttons.appendChild(rockBtn);
buttons.appendChild(paperBtn);
buttons.appendChild(scissorsBtn);
body.appendChild(roundResult);
body.appendChild(scoreCard);
