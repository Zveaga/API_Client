'using strict'

console.log('START');

// const fs = require('fs');

// fs.readFile()
const apiURL = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC';
const apiKey = '';

const requestOptions = {
	method: 'GET',
	headers: {
		'Authorizarion': `Bearer ${apiKey}`,
	},
};

fetch(apiURL, requestOptions)
	.then(function response() {
		if (!response.ok) {
			throw new Error('Response error!');
		}
		return (response.json());
	})
	.then(function data() {
		console.log(data);
	})
	.catch(function error() {
		console.error('Error: ', error);
	});
