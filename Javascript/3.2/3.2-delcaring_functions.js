/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

//My explicit return function
const welcome = () => {
    return 'Welcome to Appleseeds Bootcamp!';
}
//My implicit return function
const welcome = () => (
    'Welcome to Appleseeds Bootcamp!'
)

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

//My explicit return function
const power = (a) => {
    return Math.pow(a, 2);    
}
//My implicit return function
const power = (a) => (
    Math.pow(a, 2)
)

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

//My IIFE function
(function squareRoot (a) {
    let myNumber = a;
    let result = Math.sqrt(myNumber);
    return result;
})();

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

//My IIFE function
(function randomNumbers (a, b) {
    let random = Math.random();
    let myNumberOne = a;
    let myNumberTwo = b;
    let result = random * (myNumberOne - myNumberTwo) + myNumberTwo;
    return result;
})();
