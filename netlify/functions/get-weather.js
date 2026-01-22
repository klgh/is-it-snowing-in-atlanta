const axios = require("axios");

// netlify/functions/get-weather.js

exports.handler = async function (event, context) {
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=${API_KEY}`;

  try {
    // Use native fetch (available in Node 18+)
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Weather API responded with status: ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching weather data" }),
    };
  }
};