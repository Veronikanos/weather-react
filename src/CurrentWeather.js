import React, {useState} from "react";
import "./CurrentWeather.css";
import DateTime from "./DateTime";
import axios from "axios";

export default function CurrentWeather() {
	const [weatherData, setWeatherData] = useState({ready: false});

	function showCurrentWeather(response){

		// console.log(response);
		setWeatherData({
			ready: true,
			city: response.data.name,
			country: response.data.sys.country,
			temperature: Math.round(response.data.main.temp),
			// date: "Wednesday 10:00", 
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			icon: `icons/${response.data.weather[0].icon}.svg`,
			humidity: response.data.main.humidity,
			wind: Math.round(Number(response.data.wind.speed) * 3.6),
			precipitation: 70,
			max: 30,
			min: 15,
		});
	}

	if (weatherData.ready){
		return (
			<div className="current_info shadow CurrentWeather">
				<div className="current_day">
					<h1 className="header1 text-center fw-normal">
						{weatherData.city}, {weatherData.country}
					</h1>
					<DateTime data={weatherData.date}/>
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
								{weatherData.temperature}
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
	} else {
		const apiKey = "0f146129869d8f01315497362c4058ae";
		const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(showCurrentWeather);
		return ("Loading...");
	}
}

