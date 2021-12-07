let password = "Fishbobs";
//if/else conditional expression
function passLengthOne(password) {
    if (password.length > 7) {
        return "Strong";
    } else {
        return "Weak";
    }
}
//Ternatry conditional expression
function passLengthTwo(password) {
    return (password.length > 7 ?  "Strong" :  "Weak");
}
//&& logical operator
function passLengthThree(password) {
    if (password.length > 7 && password.length < 1000000) {
        return "Strong";
    } else {
        return "Weak";
    }
}

console.log(passLengthOne(password));
console.log(passLengthTwo(password));
console.log(passLengthThree(password));

//Advanced password validation

function advPassLength(password) {
        return ((password.length > 7 && (/[A-Z]/.test(password))) ?  "Very Strong" : password.length >= 7 ? "Strong" : "Weak");
}


console.log(advPassLength(password));