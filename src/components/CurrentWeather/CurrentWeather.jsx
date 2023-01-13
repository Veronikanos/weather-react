import React from 'react';
import './CurrentWeather.css';
import DateTime from './DateTime';
import ConvertTemperature from '../ConvertTemperature/ConvertTemperature';

export default function CurrentWeather(props) {
  return (
    <div className="current_info shadow CurrentWeather">
      <div className="current_day">
        <h1 className="header1 text-center fw-normal">
          {props.objData.city}, {props.objData.country}
        </h1>
        <DateTime data={props.objData.date} />
        <div className="row padding_block_top">
          <div className="col-6 left_padding align-content-center">
            <ul className="list list-unstyled">
              <li>Humidity: {props.objData.humidity}%</li>
              <li>Wind: {props.objData.wind} km/h</li>
              {/* <li>Precipitation: {props.objData.precipitation}%</li> */}
            </ul>
          </div>
          <ConvertTemperature data={props.objData} />
        </div>
        <div className="row">
          <div className="col-6 d-flex align-items-center left_padding">
            <img
              src={props.objData.icon}
              alt={props.objData.description}
              className="icon"
            />
          </div>
          <div className="col-6 d-flex align-items-center status_weather left_padding">
            <h4 className="header3">{props.objData.description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
