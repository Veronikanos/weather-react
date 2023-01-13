import React from "react";

export default function WeatherForecastDay(props){

	function date(){
		const data = new Date(props.data.dt * 1000);
		const day = data.getDay();
		const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return week[day];
	}
	const icon = `icons/${props.data.weather[0].icon}.svg`;
	return (
		<div>
			<div>{date()}</div>
			<img src={icon} alt={props.data.weather[0].description} />
			<div className="forecast_temperature row">
				<span>&#9650; {Math.round(props.data.temp.max)}°</span>
				<span>&#9660; {Math.round(props.data.temp.min)}°</span>
			</div>
		</div>
	);
}