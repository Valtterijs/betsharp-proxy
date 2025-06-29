const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/api/odds', async (req, res) => {
  try {
    const response = await fetch('https://pinnacle-odds.p.rapidapi.com/kit/v1/meta-periods?sport_id=1', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'pinnacle-odds.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'API call failed', details: error.toString() });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Proxy server running on port', port));
