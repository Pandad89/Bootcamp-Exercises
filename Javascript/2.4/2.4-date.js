let time = new Date();
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = time.getFullYear();


let currentDay = day[time.getDay()];
let currentDate = date[time.getDate()];
let currentMonth = month[time.getMonth()];

console.log(`Today is ${currentDay} the ${currentDate} of ${currentMonth}, ${year}`);