const numbers = [18,5,12,9,1,13,19,15,16,7,4,11,17,10,20,8,3,6,14,2];
//1
const highestNum = numbers.reduce((max, currentVal) => {
    if (max < currentVal) {
        return currentVal;
    } else {
        return max;
    }
});
console.log(highestNum);
//2
const sumOfEven = numbers.reduce((total, currentVal) => {
    if (total % 2 === 0) {
        if (currentVal % 2 !== 0) {
            return total;
        } else if (currentVal % 2 === 0) {
            return total + currentVal
        }
    }
});
console.log(sumOfEven);
//3
const average = numbers.reduce((total, currentVal) => {
    return total + currentVal; 
},0) / numbers.length;

console.log(average);