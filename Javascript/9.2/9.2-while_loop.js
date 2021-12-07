const populations = ['420', '69', '42', '911'];

function populationPrecentages(arr) {
    let precentages = [];
    let i = 0;
    while (i < arr.length) {
        let percent = (arr[i] / 7900*100).toFixed(2);
        precentages.push(percent);
        i++;
    } return precentages;
}


console.log(populationPrecentages(populations));