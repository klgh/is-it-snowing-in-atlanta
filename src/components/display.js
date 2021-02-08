import React, { useEffect, useState } from "react"
import Weather from "./Weather"
import Loading from "./Loading"
import axios from "axios"

function Display() {
  const WeatherLoading = Loading(Weather)
  const [appState, setAppState] = useState({
    loading: false,
    weather: null,
  })

  useEffect(() => {
    setAppState({ loading: true })
    // TODO Hide API KEY
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=eedea857757c1fc226a3ec6cc3b917b1"
    axios.get(apiUrl).then(weatherAPI => {
      const allweatherAPI = weatherAPI.data
      setAppState({ loading: false, weatherAPI: allweatherAPI })
    })
  }, [setAppState])

  return (
    <div className="App">
      <div className="container"></div>
      <div className="Weather">
        <WeatherLoading
          isLoading={appState.loading}
          weatherAPI={appState.weatherAPI}
        />
      </div>
    </div>
  )
}

export default Display
