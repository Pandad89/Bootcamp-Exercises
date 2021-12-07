//original

function getSum(arr1, arr2){
    const sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
}
getSum([1,2,3][5,66,23]);


//1
// The lines that caused problems were lines 2 and 10.

//2
// In order to debug these problems, I used brakpoints.

//3
// The bug consisted of two problems: a. in line 2 the variable was a const
// rather than a let, making it impossible for the function to add numbers
// to it and b. the arrays in line 10 were not separated by a comma, so the
// arrays were unreadable.

//4 fixed code

function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
}
getSum([1,2,3], [5,66,23]);