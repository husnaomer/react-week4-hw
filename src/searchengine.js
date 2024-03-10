import React, { useState } from "react";
import axios from "axios";
import "./Searchengine.css";
export default function SearchEngine(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
        className="search-input"
      />
      <input type="submit" value={"Search"} className="search" />
    </form>
  );

  function searchCity() {
    let apiKey = "8944afa6845bd7c413a687258d3211ef";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  if (weather) {
    return (
      <div className="Searchengine">
        {form}
        <ul>
          <li className="city">{city}</li>
          <li className="description"> Sunday 19:20 </li>
          <li className="description"> {weather.description}</li>
          <li>
            <img src={weather.icon} alt="icon" />
          </li>
          <li className="temp">
            {Math.round(weather.temperature)} <span className="degree">°C</span>
          </li>
          <div className="detail">
            <li>Humidity : {weather.humidity}%</li>
          </div>

          <div className="detail">
            <li>Wind : {weather.wind}km/h</li>
          </div>
        </ul>
        <div className="forecast">
          <div>
            <div>Mon</div>
            <div className="forecast-img">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQqIcg4XE2_6xd9stdWX-zUWp1_jFpWoo2kb8V6pQQ&s"
                width="30px"
                alt="icon"
              />
            </div>
            <div className="forecast-temp"> 10° </div>
          </div>
          <div>
            <div>Mon</div>
            <div className="forecast-img">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQqIcg4XE2_6xd9stdWX-zUWp1_jFpWoo2kb8V6pQQ&s"
                width="30px"
                alt="icon"
              />
            </div>
            <div className="forecast-temp"> 10° </div>
          </div>
          <div>
            <div>Mon</div>
            <div className="forecast-img">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQqIcg4XE2_6xd9stdWX-zUWp1_jFpWoo2kb8V6pQQ&s"
                width="30px"
                alt="icon"
              />
            </div>
            <div className="forecast-temp"> 10° </div>
          </div>
          <div>
            <div>Mon</div>
            <div className="forecast-img">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQqIcg4XE2_6xd9stdWX-zUWp1_jFpWoo2kb8V6pQQ&s"
                width="30px"
                alt="icon"
              />
            </div>
            <div className="forecast-temp"> 10° </div>
          </div>
          <div>
            <div>Mon</div>
            <div className="forecast-img">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQqIcg4XE2_6xd9stdWX-zUWp1_jFpWoo2kb8V6pQQ&s"
                width="30px"
                alt="icon"
              />
            </div>
            <div className="forecast-temp"> 10° </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Searchengine">
        {form}
        <ul>
          <li className="city">Kabul</li>
          <li className="description"> Sunday 19:20 </li>
          <li className="description">Sunny</li>
          <img
            src="https://cdn-icons-png.freepik.com/512/106/106061.png"
            alt="icon"
            width="50"
          />
          <li className="temp">
            5
            <span
              className="degree
            "
            >
              °C
            </span>{" "}
          </li>

          <li></li>
          <div className="detail">
            <li>Humidity : 55%</li>
          </div>
          <div className="detail">
            <li>Wind : 3 km/h</li>
          </div>
        </ul>
        <div className="forecast">
          <div>
            <div>Mon</div>
            <div className="forecast-img">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQqIcg4XE2_6xd9stdWX-zUWp1_jFpWoo2kb8V6pQQ&s"
                width="30px"
                alt="icon"
              />
            </div>
            <div className="forecast-temp"> 10° </div>
          </div>
          <div>
            <div>Mon</div>
            <div className="forecast-img">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQqIcg4XE2_6xd9stdWX-zUWp1_jFpWoo2kb8V6pQQ&s"
                width="30px"
                alt="icon"
              />
            </div>
            <div className="forecast-temp"> 10° </div>
          </div>
          <div>
            <div>Mon</div>
            <div className="forecast-img">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQqIcg4XE2_6xd9stdWX-zUWp1_jFpWoo2kb8V6pQQ&s"
                width="30px"
                alt="icon"
              />
            </div>
            <div className="forecast-temp"> 10° </div>
          </div>
          <div>
            <div>Mon</div>
            <div className="forecast-img">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQqIcg4XE2_6xd9stdWX-zUWp1_jFpWoo2kb8V6pQQ&s"
                width="30px"
                alt="icon"
              />
            </div>
            <div className="forecast-temp"> 10° </div>
          </div>
          <div>
            <div>Mon</div>
            <div className="forecast-img">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQqIcg4XE2_6xd9stdWX-zUWp1_jFpWoo2kb8V6pQQ&s"
                width="30px"
                alt="icon"
              />
            </div>
            <div className="forecast-temp"> 10° </div>
          </div>
        </div>
      </div>
    );
  }
}
