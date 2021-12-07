//1
function isString (func, str) {
    if (typeof str === 'string') {
        func(str);
    }
}
function logString(str) {
    console.log(str);
}

isString(logString, "hello");
//2
function firstWordUpperCase (str, func) {
    str[0].toUpperCase();
    func(str);
}
function dashing(str) {
    str.replace(' ', '-');
    console.log(str)
}
firstWordUpperCase("hello I love you won't you tell me your name", dashing);

