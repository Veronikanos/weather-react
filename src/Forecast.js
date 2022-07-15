import React from "react";

export default function Forecast() {
  return (
    <div className="weather_forecast Forecast" id="forecast">
      <div className="col-2 current_info forecast_week_day pt-2 pb-2">
        {"Mon"}
        <img src="icons/01d.svg" alt="cloudy" />
        <div className="forecast_temperature row">
          <span>&#9650; {15}°</span>
          <span>&#9660; {20}°</span>
        </div>
      </div>
    </div>
  );
}
