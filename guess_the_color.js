var target_index;
var target;
var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "teal", "yellow"];
var guess_input;
var finished = false;
var guesses = 0;

function do_game() {
    var random_number = Math.random() * 9;
    var random_number_rounded = Math.floor(random_number);
    target_index = random_number_rounded;
    target = colors[random_number_rounded];

    while (!finished) {
        guess_input = prompt("I am thinking of one of these colors: \n\nblue, cyan, gold, gray, green, magenta, orange, teal, yellow\n\n What color am I thinking of?\n");
        guesses += 1;
        finished = check_guess();

    }
}
function check_guess() {
    if (colors.indexOf(guess_input) === -1) {
        alert("Sorry, I do not recognize that color.\n\nPlease try again.");
        return false;
    }  
    else if (guess_input > target) {
        alert("Sorry, your guess is incorrect.\n\nHint: Your chosen color is alphabetically higher than mine.\n\nPlease try again.");
        return false;
    }  
    else if (guess_input < target) {
        alert("Sorry, your guess is incorrect.\n\nHint: Your chosen color is alphabetically lower than mine.\n\nPlease try again.");
        return false;
    }
    else if (guess_input === target) {
        document.body.style.backgroundColor = target;
        setTimeout(function(){alert("Congratulations! You have guessed my color!\n\nIt took you " + guesses + " guesses to finish the game!\n\n You can see the color displayed in the background."); }, 150);
        return true;
    }
    
}
