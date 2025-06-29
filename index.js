const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api", async (req, res) => {
  try {
    const response = await axios.get("https://pinnacle-odds.p.rapidapi.com/kit/v1/periods?sport_id=1", {
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "pinnacle-odds.p.rapidapi.com"
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error?.response?.data || error.message);
    res.status(500).json({ error: "Proxy error" });
  }
});

module.exports = app;