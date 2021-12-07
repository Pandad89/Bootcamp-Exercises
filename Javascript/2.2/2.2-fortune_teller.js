let jobTitle = 'Fullstack developer';
let location = 'Tel Aviv';
let partnerName = 'Chani';
let numberOfChildren = Math.floor(Math.random() * 10) + 1;


function tellFortune() {
    console.log(`You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children`);
}

tellFortune();