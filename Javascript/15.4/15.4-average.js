//Original code

function calcAverage (arr){
    var sum;
    for (   var i     =  0  ;    i     <  arr .length;  i     ++ ){
        sum += arr [     i     ];
    }
    return sum;
}
calcAverage ([    85 ,     90 ,     92 ]);

//1
// The line that contained the problem were line 4 and 8.

//2
// I used breakpoints to debug the problem.

//3
// The function's problems were as such:
// a. The variable sum was not assigned a value, as well as being a var rather
// than a let type variable. This made sum undefined and turned it's value into
// Nan.
// b. The function was instructed to return the sum of all numbers in the array
// and did not divide the sum by the length of the array, missing the purpose
// of the function entirely.

//4 Fixed code
function calcAverage (arr){
    let sum = 0;
    for (   var i     =  0  ;    i     <  arr .length;  i     ++ ){
        sum += arr [     i     ];
    }
    return sum / arr.length;
}
calcAverage ([    85 ,     90 ,     92 ]);
