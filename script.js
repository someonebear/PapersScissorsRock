const moveArray = ["Paper", "Scissors", "Rock"];

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randInt = Math.floor(Math.random() * (max - min + 1) + min);
  return randInt;
}

function computerPlay() {
  let move = randInt(0, 2);
  // return moveArray[move];
  return "hi";
}
