const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function foodCompare(arr1, arr2) {
    const same = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                same.push(arr1[i]);
            } 
        }
    }
    if (same.length > 0) {
        return same;
    } else {
        return false;
    }
}

console.log(foodCompare(food, food1));