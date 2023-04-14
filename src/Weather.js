import React, { useState } from "react";
import axios from "axios";
import cloudy from "./cloudy.png";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			city: response.data.city,
			temperature: response.data.temperature.current,
			update: "now",
			condition: response.data.condition.description,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			icon: response.data.condition.icon_url,
			description: response.data.condition.icon,
			ready: true,
		});
	}

	let header = (
		<div>
			<div className="Block Block-1">
				<h1>Weather app</h1>
			</div>
			<div className="Block Block-2">
				<form
					id="search-form"
					class="mb-4 form"
				>
					<div class="row">
						<div class="col-9">
							<input
								type="search"
								placeholder="Search for a city"
								class="form-control"
								id="city-input"
								autocomplete="off"
							/>
						</div>
						<div class="col-3">
							<input
								type="submit"
								value="Check!"
								class="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);

	if (weatherData.ready) {
		return (
			<div className="Weather">
				{header}
				<div className="Block Block-3">
					<div className="row">
						<div className="col-7">
							<h2 id="city">{weatherData.city}</h2>
							<ul className="info-block">
								<li>Last update: {weatherData.update}</li>
								<li>Condition: {weatherData.condition}</li>
								<li>Humidity: {weatherData.humidity}%</li>
								<li>Wind: {weatherData.wind}km/h</li>
							</ul>
						</div>
						<div className="col-5">
							<div className="d-flex weather-temperature">
								<img
									src={weatherData.icon}
									alt={weatherData.description}
									id="icon"
									class="top-icon"
								/>
								<div className="right-block">
									<span
										id="temperature"
										className="current-temperature"
									>
										{Math.round(weatherData.temperature)}
									</span>
									<span className="units">°C</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="Block Block-4">
					<div class="weather-forecast">
						<h3>Forecast</h3>
						<div id="forecast"></div>
					</div>
				</div>
				<div className="footer">
					<footer>
						<a
							href="https://github.com/LaurieKD/react-weather-app"
							title="Link to my code on Github"
							target="_blank"
						>
							Open-source code
						</a>{" "}
						by Laurie Kranendonk
					</footer>
				</div>
			</div>
		);
	} else {
		const apiKey = "2335b3c82b10f0343t05f9bo28bfaca3";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return <div>{header}</div>;
	}
}
