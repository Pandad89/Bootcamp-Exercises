function greaterThanTen(num) {
    let p = new Promise((resolve, reject) => {
        if (num > 10) {
            resolve("The chosen number is greater than 10!");
        } else {
            reject("The chosen number is not greater than 10!");
        }
    })
    p.then((message) => {
        console.log(message)
    }).catch((message) => {
        console.log(message)
    })
}

greaterThanTen(1);