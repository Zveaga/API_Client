/* Example in Node.js */
// import axios from 'axios';

const axios = require('axios');

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?symbol=BTC', {
      headers: {
        'X-CMC_PRO_API_KEY': '17921b1a-07b1-4264-8260-3547e4d9af36',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});