const moveArray = ["paper", "scissors", "rock"];
let playerScore = 0;
let compScore = 0;

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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", game)
  // The second argument should not have brackets.
  // ie. game not game()
});

function displayScore() {
  const div = document.querySelector(".results");
  div.textContent = `You: ${playerScore}, Computer: ${compScore}`;
}

function game() {
  let result = oneRoundGame(this.id, computerPlay());
    if (result === "You win!") {
      playerScore++;
    } else {
      compScore++;
    }
    console.log(result);
    displayScore();
    
}