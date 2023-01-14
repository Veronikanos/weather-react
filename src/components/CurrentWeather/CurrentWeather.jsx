import React from 'react';
import './CurrentWeather.css';
import DateTime from './DateTime';
import ConvertTemperature from '../ConvertTemperature/ConvertTemperature';

export default function CurrentWeather({objData}) {
  <ConvertTemperature data={objData} />;
  const {
    city,
    country,
    humidity,
    wind,
    icon,
    description,
    date,
    temperature,
    max,
    min,
  } = objData;
  // console.log(date);
  return (
    <div className="current_info shadow CurrentWeather">
      <div className="current_day">
        <h1 className="header1 text-center fw-normal">
          {city}, {country}
        </h1>
        <DateTime data={date} />
        <div className="row padding_block_top">
          <div className="col-6 left_padding align-content-center">
            <ul className="list list-unstyled">
              <li>Humidity: {humidity}%</li>
              <li>Wind: {wind} km/h</li>
              {/* <li>Precipitation: {precipitation}%</li> */}
            </ul>
          </div>
          <ConvertTemperature
            temperature={temperature}
            max={max}
            min={min}
          />
        </div>
        <div className="row">
          <div className="col-6 d-flex align-items-center left_padding">
            <img src={icon} alt={description} className="icon" />
          </div>
          <div className="col-6 d-flex align-items-center status_weather left_padding">
            <h4 className="header3">{description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
