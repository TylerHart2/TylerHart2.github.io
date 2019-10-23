// PSEUDOCODE

// User needs a random word.
// User should be able to guess a letter from a bank of letters.
// User needs to know if the letter they chose is in the random word.
// User needs to see their progress
// Win if all the letters are guessed 
// Lose if all hangman body parts show up




$ (() => {



    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    const $makeKeyboard = $('<div>').addClass('keyboard');
    const makeLetterRows = (() => {
        $('body').append($makeKeyboard);
        for (let i = 0; i < 26; i++) {
            const $div = $('<div>').text(letters[i]);
            $div.addClass('tile').attr('id','keyboard');
            $makeKeyboard.append($div);
        }
    });

    makeLetterRows();

// ===============>>>>>> MAKE ARRAY OF WORDS <<<<<<==================

    let wordBank = [
        "pumpkin",
        "witch",
        "goblins",
        "halloween",
        "wizard",
        "clown",
        "ghost",
    ];

// =================>>>>>> RANDOM WORD <<<<<<==================

    let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];


// ===>>>>> MAKE AND EMPTY ARRAY TO HOLD THE HIDDEN WORD <<<<<======

    let hiddenArray = [];
    for (let i = 0; i < randomWord.length; i++) {
        hiddenArray[i] = "_"; // Display "_" for missing letters
    }

    let remainingLetters = randomWord.length;

    while (remainingLetters > 0) {
        // alert(hiddenArray.join(" "));
        // let guess = prompt("Guess a letter");
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            // alert ("Please enter 1 single Letter");
        } else {
            for (let j = 0; j < randomWord.length; j++) {
                if (randomWord[j] === guess) {
                    hiddenArray[j] = guess;
                    remainingLetters --;
                }
            }
        }
    }

//     // >>>>>>>>>> End Game Win 
//     alert(hiddenArray.join(" "));
//     alert("Good job! The answer was " + randomWord);



});