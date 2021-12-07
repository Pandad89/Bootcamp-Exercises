const foods = [
    "falafel",
    "sabich",
    "hummus",
    "pizza with extra pineapple"
];

//a
const ascending = foods.sort();
console.log(ascending);

const descending = foods.reverse();
console.log(descending)
//b
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple"
];

const ascendingWithCaps = foodsWithUpperCase.sort(function(a,b){
    return a.localeCompare(b);
});
console.log(ascendingWithCaps);
const descendingWithCaps = foodsWithUpperCase.sort(function(a,b){
    return b.localeCompare(a);
});
console.log(descendingWithCaps);
//c
const words = [
    "apple",
    "supercalifragilisticexpialidocious",
    "hi",
    "zoo"
];

const longestFirst = words.sort((a,b) => b.length - a.length);
console.log(longestFirst);