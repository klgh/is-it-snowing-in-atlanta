import React from "react"
import Snow from "./snow"

const Weather = (props) => {
  const { weatherAPI } = props
  if (!weatherAPI || weatherAPI.length === 0) return <p>no weather info</p>

  return (
    <div className="weather ">
      {/* if main = snow, show the snow component */}
      {weatherAPI.weather[0].main === "Snow" ? <Snow /> : ""}
      <h1>
        {/* if main = snow print YES */}
        {weatherAPI.weather[0].main === "Snow" ? "YES!" : ""}
      </h1>
      {/* if its not snowing, print no in italics and a sad face emoji */}
      {weatherAPI.weather[0].main !== "Snow" ? <p>Nope 😭</p> : ""}
      <p>
        {" "}
        There is currently {weatherAPI.weather[0].description} in{" "}
        {weatherAPI.name} <br />
        {/* convert temp from kelvin to fahrenheit */}
        It is {Math.round(((weatherAPI.main.temp - 273.15) * 9) / 5 + 32)}°F
      </p>
    </div>
  )
}
export default Weather
