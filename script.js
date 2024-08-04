
//---HTML elements---//
const btnDisplay = document.getElementById('btn-display-data');
const inputCoinName = document.getElementById('input-box');
const displayContainer = document.getElementById('dataDisplay')


//---SEND REQUEST---//
async function fetchData(coinName) {
    try {
        const response = await fetch(`http://localhost:3000/api/crypto?slug=${coinName}`);
        // const response = await fetch(`http://localhost:3000/api/crypto`);
        const dataJson = await response.json();
		console.log(dataJson);
        // displayData(data);
		price = dataJson.data[1].quote.USD.price.toFixed(2); 
		console.log(price);
		displayContainer.textContent = `Price: ${price} $`;
	} catch (error) {
        console.error('EROR FETCHING DATA:', error);
    }
}

fetchData('bitcoin');

//$
//---DISPLAY DATA---//
btnDisplay.addEventListener('click', function () {
	const coinName = inputCoinName.value;
	//console.log(coinName);
	fetchData(coinName);
})	


// function displayData(data) {
//     const container = document.getElementById('data-container');
//     container.innerHTML = JSON.stringify(data, null, 2); // Pretty print JSON
// }

// document.getElementById('fetch-button').addEventListener('click', fetchData);


// function displayData(data) {
//     const container = document.getElementById('data-container');
//     container.innerHTML = JSON.stringify(data, null, 2); // Pretty print JSON
// }


// async function fetchData() {
//     try {
// 		const response = await fetch('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC', {
//             method: 'GET',
//             headers: {
//                 'X-CMC_PRO_API_KEY': '',
//             }
//         });
// 		if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         // Process and display data
//         console.log(data);
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         document.getElementById('data-container').textContent = 'Failed to load data.';
//     }
// }

// fetchData();

// const axios = require('axios');

// let response = null;
// new Promise(async (resolve, reject) => {
//   try {
//     response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC', {
//       headers: {
//         'X-CMC_PRO_API_KEY': '',
//       },
//     });
//   } catch(ex) {
//     response = null;
//     // error
//     console.log(ex);
//     reject(ex);
//   }
//   if (response) {
//     // success
//     const json = response.data;
//     console.log(JSON.stringify(json, null, 2)); // Print the entire JSON object with indentation
//     resolve(json);
//   }
// });
