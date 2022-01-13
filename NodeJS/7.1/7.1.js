const axios = require('axios');
const request = require('request');

const url = 'https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0';

// Axios

const apiRequest = axios.get(url, {
}).then(res => {
    console.log('Axios');
    console.log('');
    console.log(`Game Name: ${res.data[0].external}`);
    console.log(`Cheapest price: $${res.data[0].cheapest}`);
    console.log('');
})

// request method

request({ url: url, json: true }, (err, res) => {
    console.log('Request Method');
    console.log('');
    console.log(`Game Name: ${res.body[0].external}`);
    console.log(`Cheapest price: $${res.body[0].cheapest}`);
    console.log('');
})

