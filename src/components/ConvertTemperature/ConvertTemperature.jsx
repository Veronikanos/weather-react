import React, {useState} from 'react';
import './ConvertTemperature.css';

export default function ConvertTemperature({temperature, max, min}) {
  const [fahrenheit, setFahrenheit] = useState(false);

  function convertToFahrenheit() {
    setFahrenheit(true);
  }

  function convertToCelsius() {
    setFahrenheit(false);
  }
  if (!fahrenheit) {
    return (
      <div className="col-6 temperature_block flex-column left_padding ConvertTemperature">
        <div className="temperature fw-normal">
          <span className="dergees align-top">{temperature}</span>
          <span className="change_units align-top">
            °C |{' '}
            <a href="/#" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </div>
        <div className="max_min">
          <div>Max: {Math.round(max)}°</div>
          <div className="ms-2">Min: {Math.round(min)}°</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-6 temperature_block flex-column left_padding ConvertTemperature">
        <div className="temperature fw-normal">
          <span className="dergees align-top">
            {Math.round((temperature * 9) / 5 + 32)}
          </span>
          <span className="change_units align-top">
            <a href="/#" onClick={convertToCelsius}>
              °C
            </a>{' '}
            | °F
          </span>
        </div>
        <div className="max_min">
          <div>Max: {Math.round((max * 9) / 5 + 32)}°</div>
          <div className="ms-2">
            Min: {Math.round((min * 9) / 5 + 32)}°
          </div>
        </div>
      </div>
    );
  }
}
