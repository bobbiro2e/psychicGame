window.onload = function () {
    chooseGoalLetter();
};

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var goalLetter = null;
var guessedLetters = [];
var wins = 0;
var losses = 0;
var lives = 9;

function chooseGoalLetter() {
    this.goalLetter = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    console.log(goalLetter)
};

function refreshLettersGuessed() {
    document.querySelector('#guesses').innerHTML = "It's not: " + guessedLetters;
};

function refreshLives() {
    document.querySelector('#lives').innerHTML = "Lives: " + lives;
};

function playAgain() {
    lives = 9;
    guessedLetters = [];
    chooseGoalLetter();
    refreshLives();
    refreshLettersGuessed();
}

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var letterMatch = computerChoices.includes(userGuess);

    if (letterMatch === true) {
        lives--;
        guessedLetters.push(userGuess);
        refreshLives();
        refreshLettersGuessed();
    } else if (letterMatch === false) {
        document.querySelector('#message').innerHTML = "Please choose a letter key.";
        playAgain()
    }

    if (userGuess == goalLetter) {
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        document.querySelector('#message').innerHTML = "YOU WIN! My Letter was, " + goalLetter + "! Keep Playing!";
        playAgain();

    } else if (lives <= 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        document.querySelector('#message').innerHTML = "YOU LOSE! My Letter was, " + goalLetter + ". It's okay... try again!";
        playAgain();
    }
};