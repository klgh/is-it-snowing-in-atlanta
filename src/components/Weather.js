import React from "react"

const Weather = props => {
  const { weatherAPI } = props
  if (!weatherAPI || weatherAPI.length === 0) return <p>no weather info</p>

  return (
    <div className="weather">
      <h1>
        {/* if main = snow print YES */}
        {weatherAPI.weather[0].main === "Snow" ? "YES!" : ""}
      </h1>
      <p> There is currently {weatherAPI.weather[0].description} in {weatherAPI.name} <br />
        {/* convert temp from kelvin to fahrenheit */}
        It is {Math.round((weatherAPI.main.temp - 273.15) * 9 / 5 + 32)}°F</p>
    </div>
  )
}
export default Weather
