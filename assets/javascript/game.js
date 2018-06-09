//Create random letter generator for computer's choice
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"]



// Creating variables to hold the number of wins & losses (They start at 0).
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [""];
var userGuess = "";

//this function runs whenever the user presses a key
document.onkeyup = function(event) {
    var userGuess = event.key;
    //this generates a random letter to be the computer's guess
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    //create logic determining game's outcome
    //if the user guesses correctly, wins increase by 1 
    //guesses left decrease by 1
    //Find the div with the ID of Wins + update it with the value of the losses variable
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft--;
        var winDiv = getElementById("wins");
        winDiv.textContent(wins);
    }
    //Else
    //Increase losses by 1
    //  Find the div with an id of losses; update it with the value of the losses variable.
    else  {
        losses++;
        guessesLeft--;
       var lossesDiv= getElementById("losses");
       lossesDiv.textContent(losses);
    }
   
 
};
// Set the inner HTML contents of the #GuessesSoFar div to our html string
document.querySelector("GuessesSoFar").textContent = userGuess++;

//Reset the page after 10 userGuesses
