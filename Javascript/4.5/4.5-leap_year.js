let year = 2012;

function isLeap(year) {
    if ((year % 4) === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            console.log("This is not a leap year.");
        } else {
            console.log("It is indeed a leap year.");
        }
    } else {
        console.log("This is not a leap year.");
    }
}

isLeap(year);