const Rockbtn = document.querySelector("#rock");
const Paperbtn = document.querySelector("#paper");
const Scissorsbtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const para = document.createElement("p");
const playerCounter = document.querySelector("#pc")
const computerCounter = document.querySelector("#cc")

result.appendChild(para);
//we need to create two counters
let player = 0;
let comp = 0;
//we need a function that can make the computer choice using Math.random
function compChoice()
{
    let random = Math.random();
    if(random >= 0.6 && random <= 1)
    {
        return "scissors";
    }
    else if (random < 0.6 && random >= 0.3)
    {
        return "rock";
    }
    else{
        return "paper";
    }
}
//we need a function that declears the winner and increse the counter for the winner
function winner(player1, computer)
{
    if(player1 === "rock" && computer ==="scissors")
    {
        result.textContent = "you Win";
        para.textContent = "computer chose scissors!";
        return player++;
    }
    else if(player1 === "rock" && computer ==="rock")
        {
            result.textContent = "Draw";
            para.textContent = "computer chose Rock!";
        }
    else  if(player1 === "rock" && computer ==="paper")
        {
            result.textContent = "you Lost";
            para.textContent = "computer chose Paper!";
            return comp++;
        }
    else if(player1 === "scissors" && computer ==="scissors")
            {
                result.textContent = "Draw"
                para.textContent = "computer chose scissors!";
            }
    else  if(player1 === "scissors" && computer ==="rock")
        {
            result.textContent = "you lost";
            para.textContent = "computer chose Rock!";
            return comp++;
        }
    else  if(player1 === "scissors" && computer ==="paper")
            {
                result.textContent = "you Win"
                para.textContent = "computer chose Paper!";
                return player++;
            } 
    else  if(player1 === "paper" && computer ==="rock")
            {
            result.textContent = "you Win";
            para.textContent = "computer chose Rock!";
            return player++;
            }
    else  if(player1 === "paper" && computer ==="scissors")
            {
            result.textContent = "you lost"
            para.textContent = "computer chose scissors!";
            return comp++;
            }
    else  if(player1 === "paper" && computer ==="paper")
            {
             result.textContent = "draw";
             para.textContent = "computer chose Paper!";
            }
}

    Rockbtn.addEventListener('click', ()=> {
        const computerChoice = compChoice();
        const playerChoice = 'rock';
        winner(playerChoice, computerChoice);
        if((player + comp) < 5){
         playerCounter.textContent = `Player: ${player}`;
         computerCounter.textContent = `CPU : ${comp}`;
        }
        else{
            if (player > comp){
            result.textContent = "Game Over you won";
            player = 0;
            comp = 0;
            playerCounter.textContent = `Player: ${player}`;
            computerCounter.textContent = `CPU : ${comp}`;
            }
            else{
            result.textContent = "Game Over computer won";
            player = 0;
            comp = 0;
            playerCounter.textContent = `Player: ${player}`;
            computerCounter.textContent = `CPU : ${comp}`;
            }
            }
            

        
    })

    Paperbtn.addEventListener('click', ()=> {
        const computerChoice = compChoice();
        const playerChoice = 'paper';
        winner(playerChoice, computerChoice);
        if((player + comp) < 5){
            playerCounter.textContent = `Player: ${player}`;
            computerCounter.textContent = `CPU : ${comp}`;
           }
           else{
               if (player > comp){
               result.textContent = "Game Over you won";
               player = 0;
               comp = 0;
               playerCounter.textContent = `Player: ${player}`;
               computerCounter.textContent = `CPU : ${comp}`;
               }
               else{
               result.textContent = "Game Over computer won";
               player = 0;
               comp = 0;
               playerCounter.textContent = `Player: ${player}`;
               computerCounter.textContent = `CPU : ${comp}`;
               }
               }

    })

    Scissorsbtn.addEventListener('click', ()=> {
        const computerChoice = compChoice();
        const playerChoice = 'scissors';
        winner(playerChoice, computerChoice);
        if((player + comp) < 5){
            playerCounter.textContent = `Player: ${player}`;
            computerCounter.textContent = `CPU : ${comp}`;
           }
           else{
               if (player > comp){
               result.textContent = "Game Over you won";
               player = 0;
               comp = 0;
               playerCounter.textContent = `Player: ${player}`;
               computerCounter.textContent = `CPU : ${comp}`;
               }
               else{
               result.textContent = "Game Over computer won";
               player = 0;
               comp = 0;
               playerCounter.textContent = `Player: ${player}`;
               computerCounter.textContent = `CPU : ${comp}`;
               }
               }
    })






