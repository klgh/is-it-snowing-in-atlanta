import React from "react"

const Weather = props => {
  const { weatherAPI } = props
  if (!weatherAPI || weatherAPI.length === 0) return <p>no weather info</p>

  return (
    <div className="weather">
      <p>
        It's currently {weatherAPI.weather[0].main} in {weatherAPI.name}
      </p>
    </div>
  )
}
export default Weather
