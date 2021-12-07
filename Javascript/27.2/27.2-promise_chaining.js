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
makeAllCaps(['hello', 'goodbye', 'why', 'whereabouts', 'window', 'enjoy', 'little', 'eighty', 'nine']).then((capsArr) => {
    console.log(capsArr);
}).catch((errMessage) => {
    console.log(errMessage)
})

// makeAllCaps(['hello', 'goodbye', 'why', 'whereabouts', 1, 'enjoy', 'nineteen', 'eighty', 'nine']);


// function sortWords (arr) {

// }