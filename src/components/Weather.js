import React from "react"
import Snow from "./snow"



/**
 * Gets the severity color based on NWS severity level
 * @param {string} severity - Severity level from NWS
 * @returns {string} Color code
 */
const getSeverityColor = (severity) => {
  const severityMap = {
    "Extreme": "#8B0000", // Dark red
    "Severe": "#FF4500", // Orange red
    "Moderate": "#FFA500", // Orange
    "Minor": "#FFD700", // Gold
    "Unknown": "#808080", // Gray
  }
  return severityMap[severity] || "#808080"
}

const Weather = (props) => {
  const { weatherAPI, alerts = [] } = props
  if (!weatherAPI) return <p>Checking the clouds...</p>

  const isSnowing = weatherAPI.weather[0].main === "Snow"

  return (
    <div className="weather">
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

      {alerts.length > 0 && (
        <div className="nws-alerts" >
          <h2>
            ⚠️ National Weather Service Alerts
          </h2>
          <div className="alerts" aria-hidden="true">
            {alerts.map((alert, index) => {
              const properties = alert.properties || {}
              const severity = properties.severity || "Unknown"
              const severityColor = getSeverityColor(severity)
              return (
                <div className="alert" key={alert.id || index} >
                  <h3 ><span style={{ color: severityColor, fontWeight: "bold" }}>{severity} </span>
                    {properties.event || "Weather Alert"}
                  </h3>
                  {properties.headline && (
                    <p>
                      {properties.headline}
                    </p>
                  )}
                </div>
              )
            })}
          </div></div>
      )}
    </div>
  )
}
export default Weather
