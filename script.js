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
//if playerSelection=rock and computerSelection = rock return "Tie!"
if (playerSelection=="rock" && computerSelection=="rock") {
    return "Tie!";
    }
//if playerSelection=paper and computerSelection = paper return "Tie!"

//if playerSelection=scissors and computerSelection = scissors return "Tie!"

//if playerSelection=rock and computerSelection = scissors return "Rock smashes scissors. Player wins!"
if (playerSelection=="rock" && computerSelection=="scissors") {
return "Rock smashes scissors. Player wins!";
}
//if playerSelection=scissors and computerSelection = rock return "Rock smashes scissors. Computer wins!"

//if playerSelection=rock and computerSelection = paper return "Paper covers rock. Computer wins!"
if (playerSelection=="rock" && computerSelection=="paper") {
    return "computer wins!";
    }
//if playerSelection=paper and computerSelection = rock return "Paper covers rock. Player wins!"

//if playerSelection=paper and computerSelection = scissors return "Scissors cut paper. Computer wins!"

//if playerSelection=scissors and computerSelection = paper return "Scissors cut paper. Player wins!"

}
//increment win count of computer or player

//display wins and losses

//loop 5 times

//display match winner

//end game