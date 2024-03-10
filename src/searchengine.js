import React, { useState } from "react";
import axios from "axios";
export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("null");

  function handleSubmit(event) {
    event.preventDefault();

  }
  function updateCity(event) {
    setCity(event.target.value);
    
  }
  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    
    return (
      <div>
        {form}
        <ul>
          <li>Temperature :{Math.round(weather.temperature)}C</li>
        </ul>
      </div>
    );
    
  } else {
      
        let apiKey = "8944afa6845bd7c413a687258d3211ef";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);
      
    return (form
      , { city });
  }
}
