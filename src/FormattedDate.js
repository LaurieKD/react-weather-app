import React from "react";

export default function formattedDate(props) {
	console.log(props.date);
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let date = props.date.getDate();
	let month = props.date.getMonth();
	let day = props.date.getDay();
	let hour = props.date.getHours();
	if (hour < 10) {
		hour = `0${hour}`;
	}
	let minutes = props.date.getHours();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	return (
		<div>
			{days[day]}, {months[month]} {date} at {hour}:{minutes}
		</div>
	);
}
