import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {

	// console.log(props.coordinates);

	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function showForecast(response){
		// console.log(forecast);
		setForecast(response.data.daily);

		setLoaded(true);
		// console.log(forecast);
	}

	if (loaded){
		const icon = `icons/${forecast[0].weather[0].icon}.svg`;
		return (
			<div className="weather_forecast Forecast" id="forecast">
				<div className="col-2 current_info forecast_week_day pt-2 pb-2">
					{forecast[0].dt}
					<img src={icon} alt="cloudy" />
					<div className="forecast_temperature row">
						<span>&#9650; {Math.round(forecast[0].temp.max)}°</span>
						<span>&#9660; {Math.round(forecast[0].temp.min)}°</span>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "0f146129869d8f01315497362c4058ae";
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;

		axios.get(apiUrl).then(showForecast);
		return null;
	}

}
