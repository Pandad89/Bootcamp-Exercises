let arr = [6,8,-100,8124,25,86,31];

let result = arr.map((number) => {
    return number % 2 === 0 ? number : number +1
}).filter ((num) => {
    return num > 0;
}).reduce ((x , y) => {
    return x+y;
}, 0)

console.log(result)