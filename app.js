// PSEUDOCODE

// User needs a random word.
// User should be able to guess a letter from a bank of letters.
// User needs to know if the letter they chose is in the random word.
// User needs to see their progress
// Win if all the letters are guessed
// Lose if all hangman body parts show up

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

        // ==================>>>>>> END ROUGH DRAFT <<<<<<<< =====================



$ (() => {
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
        // position variable is used to keep track of current entering right word position
        var position = 0;
        // array to input current right letters
        var currentWord = [];
        // used to keep track of wrong guess count
        var wrongGuessCount = 1;
    
        $('.tile').on('click', (event) => {
            let letter = $(event.target).text().toLowerCase();
            let remainingLetters = randomWord.length;
            console.log("position",position);
            console.log("randomWord",randomWord[position]);
            console.log("letter",letter);
    
            // if current letter equals to randomWord position
            if (letter === randomWord[position]) {
                currentWord.push(letter);
                console.log("currentWord",currentWord);
                // convert back to string
                currentWordStr = currentWord.join("");
                // update html
                $(".word").html(currentWordStr);
    
                // count of right number of dashes
                dashCount = randomWordLength-currentWord.length;
                position+=1;
    
                console.log("dashCount",dashCount);
                for (var i = 0; i < dashCount; i++) {
                  $(".word").append("-");
                }
                // append right number of dashes
                if (position == randomWord.length){
                  alert("Wooohhhh You Won!!!");
                  return false;
                }
    
            }else{
              // logic for wrong guess count
              wrongGuessCount+=1;
              console.log("wrongGuessCount",wrongGuessCount);
              if (wrongGuessCount > randomWord.length+1){
                alert("You Lost !!");
                return false;
              }
              if(wrongGuessCount <= randomWord.length+1){
                $("img").attr("src","images/"+wrongGuessCount+".jpg");
              }
            }
        });
    
    
    
    
    // ===============>>>>>> MAKE ARRAY OF WORDS <<<<<<==================
    
        let wordBank = [
            // "pumpkin",
            // "witch",
            // "goblins",
            // "halloween",
            // "wizard",
            // "clown",
            "ghost",
            "spider"
        ];
    
    // =================>>>>>> RANDOM WORD <<<<<<==================
    
        let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    
        // helper variables
    
    
        var randomWordLength = randomWord.length;
    
    
    // ===>>>>> MAKE AND EMPTY ARRAY TO HOLD THE HIDDEN WORD <<<<<======
    
        let hiddenArray = [];
        for (let i = 0; i < randomWord.length; i++) {
            hiddenArray[i] = "_"; // Display "_" for missing letters
             $('.word').append(`_`);  // appends "_" to the class of word in html
        }  
    });
    