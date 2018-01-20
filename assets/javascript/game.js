var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    // var guessSoFar = 

     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log(computerGuess)


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
     

      if(userGuess === computerGuess){
        wins++;
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++
    }
      
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guessSoFar').innerHTML = "Your Guesses so far: " + userGuess;

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        // var html =
          
          // "<p>The computer chose: " + computerGuess + "</p>" +
          // "<p>Wins: " + wins + "</p>" +

          // "<p>Guesses Left: " + guesses "</p>" +
          // "<p>Losses: " + losses + "</p>" +

          // "<p>You chose: " + userGuess + "</p>" +;

        // Set the inner HTML contents of the #game div to our html string
        // document.querySelector("#game").innerHTML = html;
      }
      // else {
        // document.querySelector("#game").innerHTML = "<p> Please only press R, P or S. Thank you!</p>"
      
    