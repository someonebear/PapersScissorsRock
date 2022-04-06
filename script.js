const moveArray = ["paper", "scissors", "rock"];

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randInt = Math.floor(Math.random() * (max - min + 1) + min);
  return randInt;
}

function computerPlay() {
  let move = randInt(0, 2);
  return moveArray[move];
}

function oneRoundGame(playerMove, computerMove) {
  if (playerMove === moveArray[0]) {
    if (computerMove === moveArray[1]) {
      return `You lose! ${moveArray[1]} beats ${moveArray[0]}.`;
    } else {
      return "You win!";
    }
  } else if (playerMove === moveArray[1]) {
    if (computerMove === moveArray[2]) {
      return `You lose! ${moveArray[2]} beats ${moveArray[1]}.`;
    } else {
      return "You win!";
    }
  } else{
    if (computerMove === moveArray[0]) {
      return `You lose! ${moveArray[0]} beats ${moveArray[2]}.`;
    } else {
      return "You win!";
    }
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerMove = prompt("What is your move? Leave blank to quit.", "No move.");
    let computerMove = computerPlay();
    if (moveArray.includes(playerMove.toLowerCase())) {
      let result  = oneRoundGame(playerMove, computerMove);
      if (result === "You win!") {
        playerScore++;
      } else {
        computerScore++;
      }
      console.log(`You: ${playerScore}, Comp: ${computerScore}`);
    } else if (playerMove === "No move.") {
      console.log("Thanks for playing.");
    } else {
      console.log("Check ya spellin mate.")
    }
  }
  if (computerScore > playerScore) {
    console.log("You lost!")
  } else {
    console.log("Congratulations!")
  }
}