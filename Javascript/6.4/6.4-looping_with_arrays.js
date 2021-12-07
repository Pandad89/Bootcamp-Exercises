const populations = ["51", "72", "5", "27"];

function populationPrecentages(populations) {
    let precentages = [];
    for (let i = 0; i <= 3; i++) {
        precentages.push((populations[i] / 7900 * 100).toFixed(2));
} console.log(precentages);
}

populationPrecentages(populations);