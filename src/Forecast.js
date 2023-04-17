import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastBlock from "./ForecastBlock";

export default function Forecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecastData, setForecastData] = useState(null);

	function showForecast(response) {
		setLoaded(true);
		setForecastData(response.data.daily);
	}

	if (loaded) {
		return (
			<div>
				<h3>Next five days:</h3>
				<div className="row">
					{forecastData.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div
									className="col Forecast"
									key={index}
								>
									<ForecastBlock forecastData={dailyForecast} />
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	} else {
		let apiKey = "2335b3c82b10f0343t05f9bo28bfaca3";
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
		axios.get(apiUrl).then(showForecast);

		return "Loading";
	}
}
