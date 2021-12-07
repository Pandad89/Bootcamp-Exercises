//1.1
const words = ["one", "two", "three", "four", "five"];

words.forEach(function (index, Element) {
    console.log(Element + ":" + index)
});
//1.2
const result = [];
words.forEach (function toNumber (Element, index){
    result.push(index + 1);
    return result;
});
console.log(result);
//1.3
const fruits= ["mango", "papaya", "pineapple", "apple"];

fruits.forEach (function (el){
    if (el === "apple") {
        console.log(`I am eating an ${el}`);
    } else {
        console.log(`I am eating a ${el}`);
    }
});
//1.4
const numbers= [1, 2, 3, 4, 5];
const doubles = [];

numbers.forEach(function (num){
   doubles.push(num * 2);
   return doubles;
});
console.log(doubles);