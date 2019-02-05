//Global variables for computer choices
//---------------------------------- 
var alphaChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//State variables to start the game
var wins = 0;
var losses = 0;
var userSelect = "";
var turns = 9;
//Variables by id
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var leftText = document.getElementById("left-text");
//Create event handler 
document.onkeyup = (event) => {
  turns--;
  userSelect = event.key.toLowerCase();
  //Restart game
  var restart = function () {
    userSelect = "";
    losses = 0;
    wins = 0;
  }
  //Declared variable for Mac
  var macSelect = () => {
    macLetter = alphaChar[Math.floor(Math.random() * alphaChar.length)];
  }
  //Invoke Mac function
  macSelect();

  //Two men enter...one man leaves
  if (userSelect === macLetter) {
    wins++;
  }
  if (userSelect != macLetter) {
    losses++;
  }
  if (turns === 0) {
    alert("You lose!");
    restart();
  }
  // Display in document
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesText.textContent = "You guess: " + userSelect;
  leftText.textContent = "Guesses remaining: " + turns;
}