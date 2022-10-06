"use strict"

function getSuffix(day) {
	let suffix = day % 10;

	if (suffix == 1 && suffix != 11) return "st";
	else if (suffix == 2 && suffix != 12) return "nd";
	else if (suffix == 3 && suffix != 13) return "rd";
	else return "th";
}

function clock() {
	let currentDate = new Date();
	let hour = currentDate.getHours();
	let minute = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
	let day = currentDate.getDay();
	let month = currentDate.getMonth();
	let dayOfMonth = currentDate.getDate();

	let suffix = getSuffix(dayOfMonth);

	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]



	if (hour < 10) hour = `0${hour}`;
	if (minute < 10) minute = `0${minute}`;
	if (seconds < 10) seconds = `0${seconds}`;


	let currentTime = `${daysOfWeek[day]}, ${months[month]} ${dayOfMonth}${suffix} ${hour}:${minute}:${seconds}`

	document.getElementById("clock").textContent = currentTime;

	setTimeout(function () {
		clock();
	}, 1000);
}

function webSearch() {
	const selectedOption = document.getElementById("search-options").value;
	const query = document.getElementById("web-search").value;

	if (selectedOption === "brave")
		window.location.href = (`https://search.brave.com/search?q=${query}`);
	else if (selectedOption === "duckduckgo")
		window.location.href = (`https://www.duckduckgo.com/search?q=${query}`);
	else if (selectedOption === "google")
		window.location.href = (`https://www.google.com/search?q=${query}`);

}

clock();

const searchButton = document.getElementById("search-button").addEventListener("click", webSearch);

const inputBox = document.getElementById("web-search");
inputBox.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		document.getElementById("search-button").click();
	}
});

























