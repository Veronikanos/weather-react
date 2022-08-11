import React, {useState} from "react";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function showForecast(response){
		console.log(response);
		setLoaded(true);
		setForecast(response.data.daily);

	}

	if (loaded){
			console.log(forecast);
		return (
			<div className="weather_forecast Forecast row">
					<div className="col-2 current_info forecast_week_day pt-2 pb-2">
						<WeatherForecastDay data={forecast[0]}/>
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
