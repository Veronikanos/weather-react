import React from "react";

export default function DateTime(props){
	function getZero(num){
		if (num < 10){
			return (`0${num}`);
		} 
		return num;
	}
	
	const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const day = props.data.getDay();
	const hours = getZero(props.data.getHours());
	const minutes = getZero(props.data.getMinutes());

	return (
	<h6 className="text-center last_updated">
		Last updated: {weekDays[day]} {hours}:{minutes}
	</h6>);


}