// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//     // Creating variables to hold the number of wins, losses. They start at 0.
//     var wins = 0;
//     var losses = 0;
//     var guesses = 9;
//     // var guessSoFar = 

//      // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//       console.log(computerGuess)


//     // This function is run whenever the user presses a key.
//     document.onkeyup = function(event) {

//       // Determines which key was pressed.
//       var userGuess = event.key;


     

//       if(userGuess === computerGuess){
//         wins++;
//     }else{
//         guesses--;
//     }

//     if(guesses === 0){
//         losses++
//         guesses = 9;
//     }
      
//     document.getElementById('wins').innerHTML = "Wins: " + wins;
//     document.getElementById('losses').innerHTML = "losses: " + losses;
//     document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
//     document.getElementById('guessSoFar').innerHTML = "Your Guesses so far: " + userGuess;

        
//       }
      
     var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;



    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {


      // Determines which key was pressed.
      var userGuess = event.key;
      guessSoFar.push(userGuess);


      // Randomly chooses a choice from the options array. This is the Computer's guess.


    if(userGuess === computerGuess) {
        wins++;
        resetGame();
    }
    else {
        guesses--;
    }

    if(guesses === 0) {
        losses++;
        resetGame();
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guessSoFar').innerHTML = "Your Guesses so far: " + guessSoFar;



    }
  function resetGame(){
      guesses = 9;
      guessSoFar = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  }

  resetGame();