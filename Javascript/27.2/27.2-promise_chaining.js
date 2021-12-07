function makeAllCaps(arr) {
    let newArrOne = [];
    return promiseOne = new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            if (typeof (arr[i]) === 'string') {
                newArrOne.push(arr[i].toUpperCase());
            }
        } if (newArrOne.length === arr.length) {
            resolve(newArrOne);
        } else {
            reject("Rejected!");
        }
    })
}
function sortWords(arr) {
    return arr.sort();
}
const arrOne = ['hello', 'goodbye', 'why', 'whereabouts', 'window', 'enjoy', 'little', 'eighty', 'nine'];
const arrTwo = ['hello', 'goodbye', 'why', 'whereabouts', 'window', 'enjoy', 'little', 'eighty', true];

makeAllCaps(arrTwo).then((capsArr) => {
    return sortWords(capsArr);
}).then((sortedCapsArr) => {
    console.log(sortedCapsArr);
}).catch((errMessage) => {
    console.log(errMessage)
})