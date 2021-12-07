const myCountry = {
    country: "USA",
    capital: "Washington D.C.",
    language: "American English",
    population: 331,
    neighbors: 3,
    describe() {
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbors} neighboring countries and a capital named ${this.capital}`);
    },
    checkIsland() {
        this.neighbors > 0 ? console.log(`Since it has neighboring countries, ${this.country} is not an island`) : console.log(`The lack of neighboring countries makes ${this.country} an island`);
    }
}

myCountry.describe();
myCountry.checkIsland()