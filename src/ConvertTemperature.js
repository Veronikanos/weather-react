import React, {useState} from "react";
import "./ConvertTemperature.css";

export default function ConvertTemperature(props){
	const [fahrenheit, setFahrenheit] = useState(false);

	function convertToFahrenheit(){
		setFahrenheit(true);
	}

	function convertToCelsius(){
		setFahrenheit(false);
	}
	if (!fahrenheit){
		return (
			<div className="col-6 temperature_block flex-column left_padding ConvertTemperature">
			<div className="temperature fw-normal">
				<span className="dergees align-top">{props.data.temperature}</span>
				<span className="change_units align-top">°C | <a href="/#" onClick={convertToFahrenheit}>°F</a></span>
			</div>
			<div className="max_min">
				<div>Max: {props.data.max}°</div>
				<div class="ms-2">Min: {props.data.min}°</div>
			</div>
		</div>
		);
	} else {
		return (
		<div className="col-6 temperature_block flex-column left_padding ConvertTemperature">
			<div className="temperature fw-normal">
				<span className="dergees align-top">{Math.round(props.data.temperature * 9/5 + 32)}</span>
				<span className="change_units align-top"><a href="/#" onClick={convertToCelsius}>°C</a> | °F</span>
			</div>
			<div className="max_min">
				<div>Max: {Math.round(props.data.max * 9/5 + 32)}°</div>
				<div class="ms-2">Min: {Math.round(props.data.min * 9/5 + 32)}°</div>
			</div>
		</div>
		)
	}
}

// TODO: Something wrong with api response with min and max temperature, it shows same for different cities