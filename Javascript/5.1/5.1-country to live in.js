const lang = 'English';
const isIsland = false;
const pop = 48;
const country = 'Imagination land';

function countryToLiveIn(lang, isIsland, pop) {
    if (lang === 'English' && isIsland === false && pop < 50) {
        console.log(`You should live in ${country}.`);
    } else {
        console.log(`${country} does not meet your criteria.`)
    }
}

countryToLiveIn(lang, isIsland, pop);