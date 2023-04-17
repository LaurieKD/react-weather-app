import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";
import axios from "axios";
import cloudy from "./cloudy.png";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			city: response.data.city,
			temperature: response.data.temperature.current,
			update: new Date(1000 * response.data.time),
			condition: response.data.condition.description,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			icon: response.data.condition.icon_url,
			description: response.data.condition.icon,
			ready: true,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		setWeatherData({ ready: false });
		// search for a city
	}

	function handleCityChange(event) {
		event.preventDefault();
		setCity(event.target.value);
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
					onSubmit={handleSubmit}
				>
					<div class="row">
						<div class="col-9">
							<input
								type="search"
								placeholder="Search for a city"
								class="form-control"
								id="city-input"
								autocomplete="off"
								onChange={handleCityChange}
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
					<WeatherInfo data={weatherData} />
					<div className="row">
						<div className="col-6">
							<h2 id="city">{weatherData.city}</h2>
							<ul className="info-block">
								<li>
									Last update: <FormattedDate date={weatherData.update} />
								</li>
								<li>Condition: {weatherData.condition}</li>
								<li>Humidity: {weatherData.humidity}%</li>
								<li>Wind: {weatherData.wind}km/h</li>
							</ul>
						</div>
						<div className="col-6">
							<div className="d-flex weather-temperature">
								<img
									src={weatherData.icon}
									alt={weatherData.description}
									id="icon"
									class="top-icon"
								/>
								<div className="right-block">
									<WeatherTemperature celsius={weatherData.temperature} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="Block Block-4">
					<div class="weather-forecast">
						<Forecast city={weatherData.city} />
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
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return <div>{header}</div>;
	}
}
