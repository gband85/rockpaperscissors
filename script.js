
//create variables
const gameArray=["rock", "paper", "scissors"];
// let playerSelection;
// let computerSelection;


function computerPlay() {
//randomly choose "rock","paper", or "scissors"
return gameArray[Math.floor(Math.random() * 3)];
}

function resetGame() {
    computerWins=0;
    playerWins=0;
    score.textContent=`Player: ${playerWins} Computer: ${computerWins}`;
    outcome.textContent="Click a button to start!";
    rock.removeAttribute("disabled");
    paper.removeAttribute("disabled");
    scissors.removeAttribute("disabled");
    //return;
}

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
if (playerSelection=="scissors" && computerSelection=="rock") {
    return "Rock smashes scissors. Computer wins!";
    }
//if playerSelection=rock and computerSelection = paper return "Paper covers rock. Computer wins!"
if (playerSelection=="rock" && computerSelection=="paper") {
    return "Paper covers rock. Computer wins!";
    }
//if playerSelection=paper and computerSelection = rock return "Paper covers rock. Player wins!"
if (playerSelection=="paper" && computerSelection=="rock") {
    return "Paper covers rock. Player wins!";
    }
//if playerSelection=paper and computerSelection = scissors return "Scissors cut paper. Computer wins!"
if (playerSelection=="paper" && computerSelection=="scissors") {
    return "Scissors cut paper. Computer wins!";
    }
//if playerSelection=scissors and computerSelection = paper return "Scissors cut paper. Player wins!"
if (playerSelection=="scissors" && computerSelection=="paper") {
    return "Scissors cut paper. Player wins!";
    }
}

function updateScore(result) {
    //if either score reaches 5, determine match winner
if (computerWins===5||playerWins===5) {
    if (computerWins>playerWins) {
        console.log("Computer wins the game!");
        outcome.textContent="Computer wins the game!"
    }
    else if (computerWins<playerWins) {
        console.log("Player wins the game!");
        outcome.textContent="Player wins the game!"
    }
    else {
        console.log("Tie!")
        outcome.textContent="Tie!"
    }
    rock.setAttribute("disabled","true");
    paper.setAttribute("disabled","true");
    scissors.setAttribute("disabled","true");
} 
else {
//if computer wins, add to computer score
if (result.includes("Computer")) {
    computerWins++;
    console.log(`computerWins: ${computerWins}`);
    }
    //if player wins, add to player score
    else if (result.includes("Player")) {
    playerWins++;
    console.log(`playerWins: ${playerWins}`);
    }

    
    score.textContent=`Player: ${playerWins} Computer: ${computerWins}`
    
}
}

//grab elements
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let reset = document.querySelector("#reset")
//grab display
let display = document.querySelector(".display");
//create display sub-elements
let outcome = document.createElement("h1");
let score = document.createElement('h1');
//add to page
display.appendChild(outcome);
display.appendChild(score);
let computerWins;
let playerWins;
//reset game
resetGame();


rock.addEventListener('click', function() {
  let playerSelection="rock";
  let computerSelection=computerPlay();
  let result=  playRound(playerSelection,computerSelection);
  console.log(result);
  outcome.textContent=result;
  //update score
  updateScore(result)
})

paper.addEventListener('click', function() {
  let  playerSelection="paper";
 let   computerSelection=computerPlay();
  let result=  playRound(playerSelection,computerSelection);
  console.log(result);
  outcome.textContent=result;
  //update score
  updateScore(result)
})

scissors.addEventListener('click', function() {
  let  playerSelection="scissors";
  let  computerSelection=computerPlay();
  let result=  playRound(playerSelection,computerSelection);
  console.log(result);
  outcome.textContent=result;
  //update score
  updateScore(result)
})

reset.addEventListener('click', function() {
    resetGame();
})




//increment win count of computer or player

/*function game() {
  
//define game count
let gameCount=5;
//use loop to play multiple games
for (let i=1; i<=gameCount; i++) {
console.log(`Game ${i}`)  
//Computer's turn
computerSelection= computerPlay();
//log computer choice
console.log(`computerSelection: ${computerSelection}`)
//player's turn

//Take input
playerSelection=prompt("Make your selection!").toLowerCase();
//log choice
console.log(`playerSelection: ${playerSelection}`)
//play a round
let result=playRound(playerSelection,computerSelection)
console.log(result);
//if computer wins, add to computer score
if (result.includes("Computer")) {
computerWins++;
}
//if player wins, add to player score
else if (result.includes("Player")) {
playerWins++
}
//otherwise, no wins
//display score
console.log(`Computer: ${computerWins}  Player: ${playerWins}`)
}
//display final score
console.log(`Final Score:\nComputer: ${computerWins}\nPlayer: ${playerWins}`)
//declare winner
if (computerWins>playerWins) {
    console.log("Computer wins the game!");
}
else if (computerWins<playerWins) {
    console.log("Player wins the game!");
}
else {
    console.log("Tie!")
}
}*/
