import React from "react";

export default function ForecastBlock(props) {
	function day() {
		let date = new Date(props.forecastData.time * 1000);
		let day = date.getDay();

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
				<span className="Forecast-max">{Math.round(props.forecastData.temperature.maximum)}° </span>
				<span className="Forecast-min">{Math.round(props.forecastData.temperature.minimum)}°</span>
			</div>
		</div>
	);
}
