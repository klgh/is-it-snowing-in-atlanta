import axios from "axios"
import React, { useEffect, useState } from "react"
import Weather from "./Weather"
import loading from "./loading"

function Display() {
  const WeatherLoading = loading(Weather)
  const [appState, setAppState] = useState({
    loading: false,
    weather: null,
    alerts: [],
  })

  useEffect(() => {
    setAppState({ loading: true })
    // TODO Hide API KEY
    const weatherApiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=eedea857757c1fc226a3ec6cc3b917b1"
    
    // NWS API for alerts (free, no API key required)
    // Atlanta coordinates: lat=33.7490, lon=-84.3880
    const alertsApiUrl =
      "https://api.weather.gov/alerts/active?point=33.7490,-84.3880"
    
    // Fetch weather data and alerts in parallel
    // User-Agent cannot be set in browser (forbidden header); NWS requests work without it
    Promise.all([
      axios.get(weatherApiUrl),
      axios.get(alertsApiUrl).catch(() => ({ data: { features: [] } }))
    ]).then(([weatherResponse, alertsResponse]) => {
      const allweatherAPI = weatherResponse.data
      const alerts = alertsResponse.data.features || []
      setAppState({ loading: false, weatherAPI: allweatherAPI, alerts: alerts })
    }).catch((error) => {
      // If weather API fails, still try to show something
      console.error("Error fetching weather data:", error)
      setAppState({ loading: false, weatherAPI: null, alerts: [] })
    })
  }, [setAppState])

  return (
    <div className="App">
      <div className="container"></div>
      <div className="Weather">
        <WeatherLoading
          isLoading={appState.loading}
          weatherAPI={appState.weatherAPI}
          alerts={appState.alerts}
        />
      </div>
    </div>
  )
}

export default Display
