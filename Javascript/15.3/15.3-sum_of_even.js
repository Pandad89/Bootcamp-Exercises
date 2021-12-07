//Original code
function getSumOfEven(arr){
    return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

//1
// The line that contained the problem was line 2.

//2
// I used breakpoints to debug the problem.

//3
// The bug was caused because of faulty index numbering, indexing the values
// from one rather than from zero, which caused the function to add an
// undefined value to the number, creating a NaN value.

//4 Fixed code 

function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));