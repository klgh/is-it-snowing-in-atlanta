import React, { useState } from "react";
import "../styles/searchWeather.css";

const Weather = () => {
  let [responseObj, setResponseObj] = useState({});
  function searchWeather() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=eedea857757c1fc226a3ec6cc3b917b1",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      });
  }
  return (
    <div>
      <h2>Atlanta Weather</h2>
      <button onClick={searchWeather}>Get Forecast</button>
      <div className="weather-display">
        <div>
          <h4>{JSON.stringify(responseObj.name)}, GA</h4>
          <p>Wednesday 1:00 PM</p>
          <p>Cloudy</p>
        </div>
        <div className="weather-data">
          {/* <img alt="temp-data"/> */}
          53
        </div>
      </div>
      <div className="weatherJSON">{JSON.stringify(responseObj)}</div>
    </div>
  );
};

export default Weather;
