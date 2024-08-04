//----------PROXY SERVER----------//

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
// Endpoint to proxy API requests
app.get('/api/cryptocurrency/quotes/latest', async (req, res) => {
    const url = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=bitcoin';
    try {
        const response = await axios.get(url, {
            headers: {
                'X-CMC_PRO_API_KEY': '17921b1a-07b1-4264-8260-3547e4d9af36'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from API' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
