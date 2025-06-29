const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await fetch('https://pinnacle-odds.p.rapidapi.com/kit/v1/meta-periods?sport_id=1', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'pinnacle-odds.p.rapidapi.com'
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};