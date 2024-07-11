'using strict'

console.log('START');

// const fs = require('fs');

// fs.readFile()
const apiURL = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC';
const apiKey = '';

const requestOptions = {
	method: 'GET',
	headers: {
		'X-CMC_PRO_API_KEY:': apiKey,
		// 'Authorization': `Bearer ${apiKey}`,
		'Accept': 'application/json'
	},
};

fetch(apiURL, requestOptions)
	.then(response => {
		if (!response.ok) {
			throw new Error('Response error!');
		}
		return (response.json());
	})
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.error('Error: ', error);
});
