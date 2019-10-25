// PSEUDOCODE

// User needs a random word.
// User should be able to guess a letter from a bank of letters.
// User needs to know if the letter they chose is in the random word.
// User needs to see their progress
// Win if all the letters are guessed 
// Lose if all hangman body parts show up




$ (() => {

// ===============>>>>>> GAME PLAY <<<<<<================== 






// ===============>>>>>> GENERATE KEYBOARD OF LETTERS <<<<<<==================   

    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    const $makeKeyboard = $('<div>').addClass('keyboard');
    const makeLetterRows = (() => {
        $('.thekeyboard').append($makeKeyboard);
        for (let i = 0; i < 26; i++) {
            const $div = $('<div>').text(letters[i]);
            $div.addClass('tile').attr('id','keyboard');
            $makeKeyboard.append($div);
        }
    });

    makeLetterRows();

// ============== >>>>  KEYBOARD FUNCTIONALITY  <<<<< ===============

    $('.tile').on('click', (event) => {
        let letter = $(event.target).text();
        let remainingLetters = randomWord.length;
        
        if (letter === remainingLetters) {
            return letter;
        }

    
    
    while (remainingLetters > 0) {
        // alert(hiddenArray.join(" "));
        // let guess = prompt("Guess a letter");
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            // alert("Please enter 1 single Letter");
        } else {
            for (let j = 0; j < randomWord.length; j++) {
                if (randomWord[j] === guess) {
                    hiddenArray[j] = guess;
                    remainingLetters --;
                }
            }
        }
    }

        console.log(letter);
    });

    


// ===============>>>>>> MAKE ARRAY OF WORDS <<<<<<==================

    let wordBank = [
        // "pumpkin"
        "witch"
        // "goblins",
        // "halloween",
        // "wizard",
        // "clown",
        // "ghost",
    ];

// =================>>>>>> RANDOM WORD <<<<<<==================

    let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];


// ===>>>>> MAKE AND EMPTY ARRAY TO HOLD THE HIDDEN WORD <<<<<======

    let hiddenArray = [];
    for (let i = 0; i < randomWord.length; i++) {
        hiddenArray[i] = "_"; // Display "_" for missing letters
        $('.word').append(`<div>_</div>`); // appends "_" to the class of word in html
        
    }

    // for (let i = 0; i < randomWord.length; i++){
    //     $('.word').append(`<div class ='letter ' + i + ' '>_</div>`);
    //     $('.word').find(':nth-child(" + (i + 1) + ")').text(wordBank[i])
    //     $('.letter').css('color', "red");
    // }
    

// ======================>>>>>> ROUGH DRAFT <<<<<<<< ==========================

    // let remainingLetters = randomWord.length;
    

    // while (remainingLetters > 0) {
    //     // alert(hiddenArray.join(" "));
    //     // let guess = prompt("Guess a letter");
    //     if (guess === null) {
    //         break;
    //     } else if (guess.length !== 1) {
    //         // alert("Please enter 1 single Letter");
    //     } else {
    //         for (let j = 0; j < randomWord.length; j++) {
    //             if (randomWord[j] === guess) {
    //                 hiddenArray[j] = guess;
    //                 remainingLetters --;
    //             }
    //         }
    //     }
    // }


//     // >>>>>>>>>> End Game Win 
    // alert(hiddenArray.join(" "));
    // alert("Good job! The answer was " + randomWord);


// ==========>>>>> LOGIC FOR IS GUESS CORRECT <<<<<<<<<=============






// =========>>>>> LOGIC FOR AN INCORRECT GUESS <<<<<<<<<===========

    const guessWrong = 0;
    $('.tile').on('click', () => {
        $(this).addClass('used');
        $(this).prop('disabled', 'true');
        let matchfound = false; 
    })


    if (matchfound === false) {
        guessWrong += 1;
        $('.image').attr('src', 'Images/' + guessWrong + ".jpg");
    }

});