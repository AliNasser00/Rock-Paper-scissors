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
//we need a function that take the user input and make it spell insensative 
function userChoice()
{
    let user = prompt("your turn: ").toLowerCase();
    return user;
}
//we need a function that declears the winner and increse the counter for the winner
function winner(player1, computer)
{
    if(player1 === "rock" && computer ==="scissors")
    {
        console.log("you Win!");
        return player++;
    }
    else if(player1 === "rock" && computer ==="rock")
        {
             console.log("draw");
        }
    else  if(player1 === "rock" && computer ==="paper")
        {
            console.log("you lost!");
            return comp++;
        }
    else if(player1 === "scissors" && computer ==="scissors")
            {
                console.log("draw");
            }
    else  if(player1 === "scissors" && computer ==="rock")
        {
            console.log("you lost!");
            return comp++;
        }
    else  if(player1 === "scissors" && computer ==="paper")
            {
                 console.log("you Win!");
                return player++;
            } 
    else  if(player1 === "paper" && computer ==="rock")
            {
         console.log("you Win!");
        return player++;
            }
    else  if(player1 === "paper" && computer ==="scissors")
            {
             console.log("you lost!");
            return comp++;
            }
    else  if(player1 === "paper" && computer ==="paper")
            {
                 console.log("draw"); 
            }
}
do {
let comp_choice = compChoice();
let user_choice = userChoice();
console.log(winner(comp_choice, user_choice));
console.log(`player:  ${player}`);
console.log(`computer: ${comp}`);
}
while ((player + comp) < 5)