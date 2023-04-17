import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import Weather from "./Weather";
import ForecastBlock from "./ForecastBlock";

export default function Forecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecastData, setForecastData] = useState(null);

	function showForecast(response) {
		setLoaded(true);
		setForecastData(response.data.daily);
		console.log(response.data);
	}

	if (loaded) {
		console.log(forecastData);
		return (
			<div>
				<h3>Forecast</h3>
				<div className="row">
					<div className="col Forecast">
						<ForecastBlock forecastData={forecastData[0]} />
					</div>
				</div>
			</div>
		);
	} else {
		let apiKey = "2335b3c82b10f0343t05f9bo28bfaca3";
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
		console.log(apiUrl);
		axios.get(apiUrl).then(showForecast);

		return "Loading";
	}
}
