let israel = 9;
let us = 331;
let russia = 146;
let countries = [israel, us, russia]

function precentageOfWorld1() {
    let israelPopulation = ((israel / 7900) * 100).toFixed(2);
    let usPopulation = ((331 / 7900) * 100).toFixed(2);
    let russiaPopulation = ((146 / 7900) *100).toFixed(2);
    console.log(israelPopulation);
    console.log(usPopulation);
    console.log(russiaPopulation);
}

precentageOfWorld1();

const precentageOfWorld2 = () => {
        console.log((israel / 7900 * 100).toFixed(2));
        console.log((us / 7900 * 100).toFixed(2));
        console.log((russia / 7900 * 100).toFixed(2));
}

precentageOfWorld2();