import React, { useState } from "react";

export default function (props) {
	const [unit, setUnit] = useState("celsius");

	function toFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function toCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}

	if (unit === "celsius") {
		return (
			<div className="WeatherTemperature">
				<span
					id="temperature"
					className="current-temperature"
				>
					{Math.round(props.celsius)}
				</span>
				<span className="units">
					°C|
					<a
						href="/"
						onClick={toFahrenheit}
					>
						°F
					</a>
				</span>
			</div>
		);
	} else {
		let fahrenheitTemp = (props.celsius * 9) / 5 + 32;

		return (
			<div className="WeatherTemperature">
				<span
					id="temperature"
					className="current-temperature"
				>
					{Math.round(fahrenheitTemp)}
				</span>
				<span className="units">
					°F|
					<a
						href="/"
						onClick={toCelsius}
					>
						°C
					</a>
				</span>
			</div>
		);
	}
}
