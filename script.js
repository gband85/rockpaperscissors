//start game
//create variables
const gameArray=["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let roundCount=0;
let computerWins=0;
let playerWins=0;
let winner="";
//Computer's turn
function computerPlay() {
//randomly choose "rock","paper", or "scissors"
return gameArray[Math.floor(Math.random() * 3)];
}
computerSelection= computerPlay();
//player's turn

//Take input
playerSelection=prompt("Make your selection!");
//Compare to computer's choice
function playRound(playerSelection,computerSelection) {
//if playerSelection=rock and computerSelection = rock return "tie!"
if (playerSelection=="rock" && computerSelection=="rock") {
    return "tie!";
    }
//if playerSelection=paper and computerSelection = paper return "tie!"

//if playerSelection=scissors and computerSelection = scissors return "tie!"

//if playerSelection=rock and computerSelection = scissors return "player wins!"
if (playerSelection=="rock" && computerSelection=="scissors") {
return "player wins!";
}
//if playerSelection=scissors and computerSelection = rock return "computer wins!"

//if playerSelection=rock and computerSelection = paper return "computer wins!"
if (playerSelection=="rock" && computerSelection=="paper") {
    return "computer wins!";
    }
//if playerSelection=paper and computerSelection = rock return "player wins!"

//if playerSelection=paper and computerSelection = scissors return "computer wins!"

//if playerSelection=scissors and computerSelection = paper return "player wins!"

}
//increment win count of computer or player

//display wins and losses

//loop 5 times

//display match winner

//end game