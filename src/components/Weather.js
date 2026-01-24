import React from "react"
import Snow from "./snow"

/**
 * Formats a date string to a readable format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

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

      {alerts.length > 0 && (
        <div className="alerts" style={{ marginTop: "1.45rem", padding: "1.45rem", backgroundColor: "hsla(0, 0%, 0%, 0.02)", borderLeft: "4px solid #338099", marginBottom: "1.45rem" }}>
          <h2 style={{ marginTop: 0, marginBottom: "1.45rem", color: "inherit", fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" }}>
            ⚠️ National Weather Service Alerts
          </h2>
          {alerts.map((alert, index) => {
            const properties = alert.properties || {}
            const severity = properties.severity || "Unknown"
            const severityColor = getSeverityColor(severity)
            
            return (
              <div key={alert.id || index} style={{ marginBottom: index < alerts.length - 1 ? "1.45rem" : 0, paddingBottom: index < alerts.length - 1 ? "1.45rem" : 0, borderBottom: index < alerts.length - 1 ? "1px solid hsla(0, 0%, 0%, 0.12)" : "none" }}>
                <h3 style={{ marginTop: 0, marginBottom: "0.725rem", color: severityColor, fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif" }}>
                  {properties.event || "Weather Alert"}
                </h3>
                <p style={{ margin: "0.725rem 0", color: "hsla(0, 0%, 0%, 0.8)", fontFamily: "georgia, serif" }}>
                  <strong>Severity:</strong> <span style={{ color: severityColor, fontWeight: "bold" }}>{severity}</span>
                  {properties.certainty && (
                    <> | <strong>Certainty:</strong> {properties.certainty}</>
                  )}
                </p>
                {properties.senderName && (
                  <p style={{ margin: "0.725rem 0", color: "hsla(0, 0%, 0%, 0.8)", fontFamily: "georgia, serif" }}>
                    <strong>Source:</strong> {properties.senderName}
                  </p>
                )}
                {properties.effective && properties.expires && (
                  <p style={{ margin: "0.725rem 0", color: "hsla(0, 0%, 0%, 0.8)", fontFamily: "georgia, serif" }}>
                    <strong>From:</strong> {formatDate(properties.effective)} <strong>To:</strong> {formatDate(properties.expires)}
                  </p>
                )}
                {properties.headline && (
                  <p style={{ margin: "0.725rem 0", fontWeight: "bold", color: "hsla(0, 0%, 0%, 0.8)", fontFamily: "georgia, serif" }}>
                    {properties.headline}
                  </p>
                )}
                {properties.description && (
                  <p style={{ margin: "0.725rem 0 0 0", whiteSpace: "pre-wrap", color: "hsla(0, 0%, 0%, 0.8)", fontFamily: "georgia, serif" }}>
                    {properties.description}
                  </p>
                )}
                {properties.instruction && (
                  <p style={{ margin: "0.725rem 0 0 0", whiteSpace: "pre-wrap", fontStyle: "italic", color: "hsla(0, 0%, 0%, 0.7)", fontFamily: "georgia, serif" }}>
                    <strong>Instructions:</strong> {properties.instruction}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      )}
    </main>
  )
}
export default Weather
