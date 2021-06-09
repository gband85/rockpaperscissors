//start game
//create variables
const gameArray=["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;

//Computer's turn
function computerPlay() {
//randomly choose "rock","paper", or "scissors"
return gameArray[Math.floor(Math.random() * 3)];
}
computerSelection= computerPlay();
console.log(`computerSelection: ${computerSelection}`)
//player's turn

//Take input
playerSelection=prompt("Make your selection!");
console.log(`playerSelection: ${playerSelection}`)
//Compare to computer's choice
function playRound(playerSelection,computerSelection) {
//if playerSelection=rock and computerSelection = rock return "Tie!"
if (playerSelection=="rock" && computerSelection=="rock") {
    // console.log("Tie");
    return "Tie!";
    }
//if playerSelection=paper and computerSelection = paper return "Tie!"
if (playerSelection=="paper" && computerSelection=="paper") {
    return "Tie!";
    }
//if playerSelection=scissors and computerSelection = scissors return "Tie!"
if (playerSelection=="scissors" && computerSelection=="scissors") {
    return "Tie!";
    }
//if playerSelection=rock and computerSelection = scissors return "Rock smashes scissors. Player wins!"
if (playerSelection=="rock" && computerSelection=="scissors") {
return "Rock smashes scissors. Player wins!";
}
//if playerSelection=scissors and computerSelection = rock return "Rock smashes scissors. Computer wins!"
if (playerSelection=="rock" && computerSelection=="scissors") {
    return "Rock smashes scissors. Computer wins!";
    }
//if playerSelection=rock and computerSelection = paper return "Paper covers rock. Computer wins!"
if (playerSelection=="rock" && computerSelection=="paper") {
    return "Paper covers rock. Computer wins!";
    }
//if playerSelection=paper and computerSelection = rock return "Paper covers rock. Player wins!"
if (playerSelection=="paper" && computerSelection=="rock") {
    return "Paper covers rock. Computer wins!";
    }
//if playerSelection=paper and computerSelection = scissors return "Scissors cut paper. Computer wins!"
if (playerSelection=="paper" && computerSelection=="scissors") {
    return "Scissors cut paper. Computer wins!";
    }
//if playerSelection=scissors and computerSelection = paper return "Scissors cut paper. Player wins!"
if (playerSelection=="scissors" && computerSelection=="paper") {
    return "Scissors cut paper. Computer wins!";
    }
}
console.log(playRound(playerSelection,computerSelection))
//increment win count of computer or player

//display wins and losses

//loop 5 times

//display match winner

//end game