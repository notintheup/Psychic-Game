//Global variables for Psychic game
//---------------------------------- 
var alphaChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberWins = 0;
var numberLosses = 0;
var guesses = 8;
var remaining = 8;
var userSelect = "";
var macLetter = "";

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remaining = document.getElementById("remaining-text");
var guessesText = document.getElementById("guesses-text");
var choicesText = document.getElementById("choices-text");
//Create event handler 
document.onkeyup = (event) => {
  userSelect = event.key.toLowerCase();
  remaining--;

  //Declared variable for Mac
  var macSelect = () => {
    macLetter = alphaChar[Math.floor(Math.random() * alphaChar.length)];
  }
  // Declared variable for guesses
  var guessesLeft = function () {
    document.getElementById("remaining-text").innerHTML = "Guesses Left: " + left;
  }
  //Invoke Mic function
  macSelect();

  //Two men enter...one man leaves
  if (userSelect === macLetter) {
    numberWins++;
    remaining--;
  }
  if (userSelect != macLetter) {
    numberLosses++;
    remaining--;
  } 
  else if (remaining === 0) {
    alert("You lose");
  }


  winsText.textContent = "wins: " + numberWins;
  lossesText.textContent = "losses: " + numberLosses;
  guessesText.textContent = "You guess: " + userSelect;
  remaining.textContent = remaining;
  choicesText.textContent = "The computer chose: " + macLetter;
}