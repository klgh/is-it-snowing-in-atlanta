import axios from "axios"
import React, { useEffect, useState } from "react"
import Weather from "./Weather"
import loading from "./loading"

function Display() {
  const WeatherLoading = loading(Weather)
  const [appState, setAppState] = useState({
    loading: false,
    weatherAPI: null,
  })

  useEffect(() => {
    setAppState({ loading: true })
    
    // Call your Netlify function instead of the direct API URL
    const functionUrl = "/.netlify/functions/get-weather"
    
    axios.get(functionUrl)
      .then((response) => {
        setAppState({ loading: false, weatherAPI: response.data })
      })
      .catch((error) => {
        console.error("Error fetching weather:", error)
        setAppState({ loading: false, weatherAPI: null })
      })
  }, [setAppState])

  return (
    <div className="App">
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