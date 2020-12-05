let correctNumber = getRandomNumber();// Variable for store the correct random number 
let guesses = [];// to store the list of guesses 

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);

}

/**
 * Functionality for playing the whole game
 */
function playGame() {

    let numberGuess = document.getElementById("number-guess").value;
    console.log(correctNumber);

    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 */


function displayResult(numberGuess) {
    if (numberGuess < correctNumber) {

        showNumberBelow();
    }
    else if (numberGuess > correctNumber) {

        showNumberAbove();
    }
    else if (numberGuess == correctNumber) {

        showYouWon();
    }
}

/**
 * Initialize a new game by resetting all values and content on the page
 */
function initGame() {
    // *CODE GOES BELOW HERE *
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";

    guesses = [];
    displayHistory();

}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
    document.getElementById("result").innerHTML = "";
}

/**
 * Returns a random number between 1 and 100
 */
function getRandomNumber() {

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    return randomNumber;
}

/**
 * Save guess history 
 * Appending new values into the array
 */
function saveGuessHistory(guess) {

    guesses.push(guess);

}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li>
 * </ul>
 */
function displayHistory() {
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>";
    while (index >= 0) {
        list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>";
        index--;
    }
    list += '</ul>'

    document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showYouWon() {
    const text = "Awesome job, you got it!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog 
     */

    let dialog = getDialog('won', text);
    console.log(dialog);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog 
     */

    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     */

    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}
