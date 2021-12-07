const count = {};
const arr = ["Hello", "Good Day", "Your Welcome", "Hotdog", "Hamburgers"];

function letterCount(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            const char = array[i][j].toLowerCase();
            if (char !== ' ') {
                if (count[char] !== undefined) {
                    count[char]++;
                } else {
                    count[char] = 1;
                }
            }
        } 
        
    } return count;
}

console.log(letterCount(arr));