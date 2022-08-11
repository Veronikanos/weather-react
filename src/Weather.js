import React, { useState } from "react";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(props) {
	const [city, setCity] = useState(props.defaultCity);
	const [weatherData, setWeatherData] = useState({ready: false});

	function showCurrentWeather(response){
		console.log(response);
		setWeatherData({
			ready: true,
			city: response.data.name,
			coords: response.data.coord,
			country: new Intl.DisplayNames(['en'], {type: 'region'}).of(response.data.sys.country),
			temperature: Math.round(response.data.main.temp),
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

	function search(){
		const apiKey = "0f146129869d8f01315497362c4058ae";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(showCurrentWeather);
	}

	function handleSubmit(event){
		event.preventDefault();
		search();
	}

	function handleCity(event){
		event.preventDefault();
		setCity(event.target.value);
	}

		if (weatherData.ready){
			return (
				<div>
				<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row form_text">
						<div className="col-2">
							<button
								className="col-12 btn shadow button_input"
								data-bs-toggle="tooltip"
								data-bs-placement="bottom"
								data-bs-custom-classname="custom-tooltip"
								title="Current location weather"
								type="button"
							>
								<i className="fa-solid fa-house-user" />
							</button>
						</div>
						<div className="col-7">
							<input
								onChange={handleCity}
								type="search"
								autoFocus="on"
								autoComplete="off"
								className="col-12 form-control shadow form_input"
								placeholder="Type city..."
							/>
						</div>
						<div className="col-3">
							<input
								className="col-12 btn shadow button_input"
								type="submit"
								value="Search"
							/>
						</div>
					</div>
				</form>
				</div>
				<CurrentWeather objData={weatherData}/>
				<Forecast coordinates={weatherData.coords}/>
				</div>
			);
		} else {
			search();
			return "Loading...";
		}
	}

