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
    
    
    // ==============>>>>> END ROUGH DRAFT <<<<<<<<<===============
    

    $ (() => {
  

        // ===============>>>>>> MAKE ARRAY OF WORDS <<<<<<==================
        
            let wordBank = [
                // "pumpkin",
                // "witch",
                // "goblins",
                // "wizard",
                // "clown",
                "ghost",
                "spider",
            ];
        
        // =================>>>>>> RANDOM WORD <<<<<<==================
        
            let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        
            // helper variables
            let randomWordLength = randomWord.length;
    
        // ===>>>>> MAKE AND EMPTY ARRAY TO HOLD THE HIDDEN WORD <<<<<======
        
            let hiddenArray = [];
            for (let i = 0; i < randomWord.length; i++) {
                hiddenArray[i] = 0; // Display "_" for missing letters
            }
    
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
            const makeResetButton = (() => {
                const $div = $('<div>').text("Reset");
                $div.addClass('tile').attr('id','keyboard-reset').css({width: "100px"});
                $makeKeyboard.append($div);
            });
            const makeWordBox = (() => {
                for (var i = 0; i < randomWord.length; i++) {
                    const $div = $('<div>').text("");
                    $div.addClass('tile').attr('id','guessbox-'+i);
                    $(".word").append($div);
                }
            });
        
            makeLetterRows();
            makeResetButton();
        
        // ============== >>>>  KEYBOARD FUNCTIONALITY  <<<<< ===============
            // position variable is used to keep track of current entering right word position

            let position = 0;
            // array to input current right letters
            let currentWord = [];
            // used to keep track of wrong guess count
            let wrongGuessCount = 0;
    
    
    
        
            $('.tile').on('click', (event) => {
                let letter = $(event.target).text().toLowerCase();
                if (letter == "reset") location.href="index.html"
    
                // if current letter equals to randomWord position
                let locationOfLetter = randomWord.indexOf(letter);
                if (locationOfLetter >= 0) {
                    
                    // logs the letter location of the hidden word.
                    console.log(locationOfLetter);
    
                    hiddenArray[locationOfLetter] = 1;
                    $("#guessbox-"+locationOfLetter).text(letter.toUpperCase());
    
    
                    if (hiddenArray.reduce((t, e) => t + e) == randomWordLength) {
                      Swal.fire("WooHoo You Won!!!");
                      return false;
                    }
        
                }else{
                  // logic for wrong guess count
                  wrongGuessCount+=1;
                  console.log("wrongGuessCount",wrongGuessCount);
                  if (wrongGuessCount >randomWord.length+1){
                    Swal.fire({
                        title: " SORRY! You Lost!",
                        showCancelButton: true,
                          confirmButtonText: 'REPLAY',
                          cancelButtonText: 'OK',
                          reverseButtons: true
                        }).then((result) => {
                          if (result.value) {
                            location.href="index.html";
                          } else if (
                            result.dismiss === Swal.DismissReason.cancel
                          ) {
                          }
                        });
    
                    return false;
                  }
                  if(wrongGuessCount <= randomWord.length+1){
                    $("img").attr("src","images/"+wrongGuessCount+".jpg");
                  }
                }
            });
    
            makeWordBox();
    
        });  