import React from "react"
import Snow from "./snow"
const Weather = (props) => {
  const { weatherAPI } = props
  if (!weatherAPI) return <p>Checking the clouds...</p>

  const isSnowing = weatherAPI.weather[0].main === "Snow"

  return (
    <main className="weather">
      {/* aria-live="polite" triggers a screen reader announcement on update */}
      <div aria-live="polite" aria-atomic="true">
        <h1>
          {isSnowing ? "❄️ YES! 🎉" : "Nope 😭"}
        </h1>
      </div>

      {isSnowing && <Snow />}

      <p>
        Currently {weatherAPI.weather[0].description} in {weatherAPI.name} <br />
        It is {Math.round(((weatherAPI.main.temp - 273.15) * 9) / 5 + 32)}°F
      </p>
    </main>
  )
}
export default Weather
