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
buttons.style.margin = '25px 0px';

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
  
    if(computerChoice === humanChoice){
        roundResult.innerHTML = `It's a Draw! Both chose ${humanChoice}.<br>`;
    }

    else if((computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "rock")){
        roundResult.innerHTML = `You Win! ${humanChoice} Beats ${computerChoice}.<br>`;
        humanScore++;
    }

    else{
        roundResult.innerHTML = `AI Wins! ${computerChoice} Beats ${humanChoice}.<br>`;
        computerScore++;
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
