import React from "react";
import cloudy from "./cloudy.png";
import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather">
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
			<div className="Block Block-3">
				<div className="row">
					<div className="col-7">
						<h2 id="city">The Hague</h2>
						<ul className="info-block">
							<li>Last update:</li>
							<li>Current condition:</li>
							<li>Humidity:</li>
							<li>Wind:</li>
						</ul>
					</div>
					<div className="col-5">
						<div className="d-flex weather-temperature">
							<img
								src={cloudy}
								alt="sunny"
								id="icon"
								class="top-icon"
							/>
							<div className="right-block">
								<span
									id="temperature"
									className="current-temperature"
								>
									20
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
						title="Link to the code on Github"
						target="_blank"
					>
						Open-source code
					</a>{" "}
					by Laurie Kranendonk
				</footer>
			</div>
		</div>
	);
}
