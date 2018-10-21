var numberOfRemainingGuesses = 12;
var computerGuessWord = "";
var wrongGuessWord = "";
var rightGuessWord = [];

var inputKeypressed = ""; // Where key press will be stored; 

var randomWord = ["Skeleton", "Spooky", "Ghoul", "Zombie", "Candy"];

//wordGame object = property values and methods
var wordGame = {
    wins: 0,
    losses: 0,

    initializeUnderlinePlaceholderForRightGuessWord: function () {
        for(var i = 0; i < computerGuessWord.length; i++) {
            rightGuessWord[i] = " _ ";
        }
    },

    checkForWins: function() {
        var strConvertType = "";
        for(var i = 0; i < computerGuessWord.length; i++) {
            strConvertType += rightGuessWord[i];
        }

        if(strConvertType === computerGuessWord) {
            alert("Congratulations! You've won :)");
            this.wins++;
            this.resetGame(); //to be declared later
        }
    },

    checkForLosses: function() {
        if(numberOfRemainingGuesses === 0) {
            alert("You've lost! So sorry :(");
            this.losses++;
            this.resetGame(); //to be declared later
        }
    },

    checkComputerGuessWordwithKeypressedLetter: function() {
        var isFound = false;
        for(var i = 0; i < computerGuessWord.length; i++) {
            if(computerGuessWord[i].indexOf(inputKeypressed) > -1) {
                rightGuessWord[i] = inputKeypressed;
                isFound = true;
            }
            if (isFound == false && wrongGuessWord.indexOf(inputKeypressed) === -1) {
                wrongGuessWord += inputKeypressed + " ";
                numberOfRemainingGuesses--; // not too confident about this, check to see if it works!
            }
        }
    },

    allLetter: function(inputtxt) {
        var letters = /^[A-Za-z]+$/;
        if(inputtxt.match(letters)) {
            return true;
        }
        else {
            return false;
        }
    },

    resetGame: function() {

        // Global variables get reset
        numberOfRemainingGuesses = 12;
        computerGuessWord = "";
        wrongGuessWord = "";
        rightGuessWord = [];
        inputKeypressed = "";

        computerGuessWord = randomWord[Math.floor(Math.random()*5)].toLowerCase();
        this.initializeUnderlinePlaceholderForRightGuessWord();
        this.display(); //tbd?
    },

    display: function() {

        // Right letter guesses display here.
        document.getElementById("random-word").textContent = rightGuessWord.join(" ");

        // Remaining guesses will display here.
        document.getElementById("number-guesses").textContent = numberOfRemainingGuesses;

        // Wrong letter guesses display here.
        document.getElementById("wrong-letters-guessed").textContent = wrongGuessWord;

        // When letter is pressed and checks for wins, showing in div:
        this.checkForWins();
        document.getElementById("win-score").textContent = this.wins;

        // When letter is pressed and checks for losses, showing in div:
        this.checkForLosses();
        document.getElementById("loss-score").textContent = this.losses;
    },

    playGame: function() {
        this.checkComputerGuessWordwithKeypressedLetter();
        this.display();
    },
};



function initialize_Game() {

    // Random word generator
    computerGuessWord = randomWord[Math.floor(Math.random()*5)].toLowerCase();

    // Call function for initalizing "_" placeholder
    wordGame.initializeUnderlinePlaceholderForRightGuessWord();

};



document.onkeyup = function(event) {

    // Captures the key-press, converts to lowercase, then saves answer to variable
    var letter = event.key.toLowerCase();

    if(wordGame.allLetter(letter)) {
        inputKeypressed = letter;
        wordGame.playGame();
    }
    
    else {
        alert("Invalid Entry!! Letters Only");
    }


};

function initialize_Game() {

    // Random word generator
    computerGuessWord = randomWord[Math.floor(Math.random()*5)].toLowerCase();
    
    // Call function for initalizing "_" placeholder
    wordGame.initializeUnderlinePlaceholderForRightGuessWord();


};



document.onkeyup = function(event) {

    // Captures the key-press, converts to lowercase, then saves answer to variable
    var letter = event.key.toLowerCase();

    if(wordGame.allLetter(letter)) {
        inputKeypressed = letter;
        wordGame.playGame();
    }
    
    else {
        alert("Invalid Entry!! Letters Only");
    }


};
