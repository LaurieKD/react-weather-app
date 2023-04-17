import React from "react";
import Forecast from "./Forecast";

export default function ForecastBlock(props) {
	function day() {
		let date = new Date(props.forecastData.time * 1000);
		let day = date.getDay();
		console.log(date);

		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}

	return (
		<div>
			<div className="Forecast-day">{day()}</div>
			<div className="Forecast-icon">
				<img src={props.forecastData.condition.icon_url} />
			</div>
			<div className="Forecast-temp">
				<span className="Forecast-max">{Math.round(props.forecastData.temperature.minimum)}° </span>
				<span className="Forecast-min">{Math.round(props.forecastData.temperature.maximum)}°</span>
			</div>
		</div>
	);
}
