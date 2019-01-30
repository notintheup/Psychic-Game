
    //Array that lists out the options to choose
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //Declared variables to display the results
    var wins = 0;
    var losses = 0;
    var guessesLeft = 8;
    var ties = 0;

    //Declared variables that reference the game HTML
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-text");
    var tiesText = document.getElementById("ties-text");

    document.onkeyup = function (event) {

        var userChoice = event.key;

        var computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];

        function updateguessesRemaining() {
          document.querySelector(' # ' + guessesLeft).innerHTML = "Guesses left: " + guessesLeft;
        }
      }