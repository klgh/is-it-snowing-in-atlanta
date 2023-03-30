import React from "react";
import "./App.css";
import SearchWeather from "./components/searchWeather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchWeather />
      </header>
    </div>
  );
}

export default App;
