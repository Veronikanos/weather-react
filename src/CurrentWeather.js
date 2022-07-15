import React from "react";

export default function CurrentWeather() {
  let weatherData = {
    city: "Kyiv",
    country: "Ukraine",
    date: "Wednesday 10:00",
    description: "Cloudy",
    icon: "icons/03d.svg",
    humidity: 30,
    wind: 18,
    max: 30,
    min: 15,
    precipitation: 70
  };
  return (
    <div className="current_info shadow">
      <div className="current_day">
        <h1 className="header1 text-center fw-normal">
          {weatherData.city}, {weatherData.country}
        </h1>
        <h6 className="text-center last_updated">
          Last updated: {weatherData.date}
        </h6>
        <div className="row padding_block_top">
          <div className="col-6 left_padding">
            <ul className="list list-unstyled">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Precipitation: {weatherData.precipitation}%</li>
            </ul>
          </div>
          <div className="col-6 temperature_block flex-column left_padding">
            <div className="temperature display-4 fw-normal d-flex">
              10
              <span className="active change_units">°C</span>
            </div>
            <div className="max_min">
              <div>Max: {weatherData.max}°</div>
              <div>Min: {weatherData.min}°</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex align-items-center left_padding">
            <img src={weatherData.icon} alt="" id="icon" />
          </div>
          <div className="col-6 d-flex align-items-center status_weather left_padding">
            <h4 className="header3">{weatherData.description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
