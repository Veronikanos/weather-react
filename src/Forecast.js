import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import UvIndex from "./UvIndex";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);
	const [uvi, setUvi] = useState(null);

	function showForecast(response){
		setLoaded(true);
		setForecast(response.data.daily);
		setUvi(response.data);
	}

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	if (loaded){
		return (
			<div>
				<UvIndex uvindex={uvi}/>
				<div className="weather_forecast WeatherForecast row">
					{forecast.map(function (dailyforecast, index) {
						if (index > 0 && index < 6){
							return (
							<div className="col-2 current_info forecast_week_day pt-2 pb-2" key={index}>
								<WeatherForecastDay data={dailyforecast}/>
							</div>
							);
						}
					})}
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
