//start game
//create variables: array, computerChoice, playerChoice, 
const gameArray=["rock", "paper", "scissors"];
let playerChoice="";
let roundCount=0;
let computerWins=0;
let playerWins=0;
let winner="";
//Computer's turn
function computerPlay() {
let computerChoice="";
//randomly choose "rock","paper", or "scissors"
computerChoice= gameArray[Math.floor(Math.random() * 3)];
//display choice
console.log(computerChoice)
return computerChoice;
}
computerPlay();
//player's turn
//functionName
//display options

//Take input

//Display choice

//Compare to computer's choice

//increment win count of computer or player

//display wins and losses

//loop 5 times

//display match winner

//end game