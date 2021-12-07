// <!-- JS -->
// <!--Event listener on window: e = event
//     const isValid = isValid();
//     if (isValid) {
//         if(guessedCheck){
//             redErr();
//         }else {
//             if()
//         }
//     } else {
//         redErr()
//     }
// -->
// <!--string variable containing all letters from a-z-->
// <!--function that picks a random letter from the string variable.
//     function will be invoked via event listener on play again button-->
//     <!--string variable that holds the random letter. must be global variable!-->
//     <!--function isValid(): function that checks if the player guessed a valid character (a letter)
//     function isValid(){
//         input === letter ? true : false;
//     }-->
// <!--function that returns if the character is valid-->
// <!--function redErr(): function that returns a red error message as innerText in p-->
// <!--function guessedCheck(key): function that checks if the guessed letter was already guessed-->
// <!--global object that contains the guessed letters for reference-->
// <!--function that adds incorrect the guesses to the object and add the
//     letters to a grid element-->
// <!--function grnMsg(): function that returns a green congratulations message on correct guess
//     and chages the question mark into the correct letter-->
// <!--function that resets the random letter and picks a new one, clears the object key values, returns the question mark to 
//     the box, resets the value of p to the original value and clears the grid element contents and hides the reset button-->
// <!---->

const letters = 'abcdefghijklmnopqrstuvwxyz';
const randomLetter = Math.floor(Math.random() * 26);

window.addEventListener('keyPress', function(e){
    alert('key')
})

const div = document.querySelector('div');

function random (){
    alert(`Your letter is ${randomLetter}`)
};

