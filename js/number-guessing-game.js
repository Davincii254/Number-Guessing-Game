function runGame() {
    // Initialize variables to store user input, game status, and number of tries
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    // Generate a random number between 1 and 100 (inclusive)
    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;

    // Loop until the user guesses the correct number
    do {
        // Prompt the user to guess the number
        guessString = prompt('I am thinking of a number in the range of 1 to 100.\n\nWhat is the number?');
        
        // Return if the user cancels the prompt
        if (guessString === null) {
            return;
        }
        
        // Convert the guess to a number and increment the number of tries
        guessNumber = +guessString;
        numTries += 1;
        
        // Check if the guess is correct
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    // Alert the user about the correct guess and the number of tries
    alert('You got it! The number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly.');
}

function checkGuess(guessNumber, target) {
    // Initialize a variable to track whether the guess is correct
    let correct = false;

    // Check if the guess is a number
    if (isNaN(guessNumber)) {
        alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range.');
    } 
    // Check if the guess is within the valid range
    else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('Please enter an integer in the 1-100 range.');
    } 
    // Check if the guess is too large
    else if (guessNumber > target) {
        alert('Your number is too large!');
    } 
    // Check if the guess is too small
    else if (guessNumber < target) {
        alert('Your number is too small!');
    } 
    // If none of the above conditions are met, the guess is correct
    else {
        correct = true;
    }
    // Return whether the guess is correct
    return correct;
}
