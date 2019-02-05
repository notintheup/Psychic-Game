//Global variables for Psychic game
//---------------------------------- 
var alphaChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//State variables
var numberWins = 0;
var numberLosses = 0;
var userSelect = "";
var macLetter = "";
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
    userSelect = ""; numberLosses = 0; numberWins = 0;
    // macSelect();
    }
  //Declared variable for Mac
  var macSelect = () => {
    macLetter = alphaChar[Math.floor(Math.random() * alphaChar.length)];
  }
  //Invoke Mac function
  macSelect();

  //Two men enter...one man leaves
  if (userSelect === macLetter) {
    numberWins = numberWins + 1;
  }
  if (userSelect != macLetter) {
    numberLosses = numberLosses + 1;
  }
  if (turns === 0) {
    alert("You lose!");
    restart();
  }

  winsText.textContent = "wins: " + numberWins;
  lossesText.textContent = "losses: " + numberLosses;
  guessesText.textContent = "You guess: " + userSelect;
  leftText.textContent = "Guesses remaining: " + turns;
}