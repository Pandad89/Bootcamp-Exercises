const arr = [1,7,3,0,-5,7,3,9];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }

function arrayLength(arr) {
    let length = 0;
    for (let j = 0; arr[j] !== undefined; j++) {
        length++;
    } return length;
}
function arraySum(arr) {
    let sum = 0;
    for ( let k = 0; k < arr.length; k++) {
        sum += arr[k];
    } return sum;

}
function arrayMulti(arr) {
    let multi = 1;
    for (let l = 0; l < arr.length; l++) {
        multi *= arr[l];
    } return multi;
}

console.log(arrayLength(arr));
console.log(arraySum(arr));
console.log(arrayMulti(arr));