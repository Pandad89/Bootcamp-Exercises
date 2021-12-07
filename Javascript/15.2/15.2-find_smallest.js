//Original code

function findSmallest(a, b, c){
    if (a > b > c){
        return c;
    } elseif (a > c > b) {
        return a;
    } else {
        return b;
    }
}
findSmalest(52,66, 2);

//1
// The lines that contained the problems were lines 4 and 10.

//2
// I placed breakpoints to debug the problem, but it did not run at all, so
// using my eyes to find the problem was inevitable.

//3
// The function did not work because of the following problems:
// a. In line 4, there was no space between else and if, making javascript to
// misread the statement.
// b. In line 10, the invoked function was spelled incorrectly.

//4 fixed code

function findSmallest(a, b, c){
    if (a > b > c){
        return c;
    } else if (a > c > b) {
        return a;
    } else {
        return b;
    }
}
findSmallest(52,66, 2);
