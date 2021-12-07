/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

//My function Expression
const welcome = function() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

//My function Expression
const power = (a) => {
    return Math.pow(a, 2);
}

function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}

//My function Expression
const add = function(a, b = 5) {
    return a + b;
}

// From function expressions to function declarations
const hello = () => "Hello!";

//My function declaration
function hello() {
    let hello = "Hello!";
    return hello;
}

const squareRoot = a => Math.sqrt(a);

//My function declaration
function squareRoot(a) {
    let myNumber = a;
    return myNumber / myNumber;
}

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

//My function declaration
function randomNumbers(a, b) {
    let randomNumber = Math.random();
    let numberOne = a;
    let numberTwo = b;
    return randomNumber * (numberOne - numberTwo) + numberTwo;
}


