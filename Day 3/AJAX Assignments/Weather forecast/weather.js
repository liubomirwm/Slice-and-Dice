$(document).ready(function() {
	$("#fetch-button").on("click", fetchWeather);
});
function fetchWeather() {
	var cityId = "725993";
	var apiKey = "af055b08b5245e0fd5e1f48f3d4c8df6";
	var units = "metric";
	var lang = "bg";
	var requestUrl = "http://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&units=" + units + "&lang=" + lang + "&APPID=" + apiKey;

	$.ajax({
		url: requestUrl,
		method: "GET"
	}).then(function(data) {
		$("#weather-city-name").append("<b>Current weather in " + data.name + ", " + data.sys.country + "</b>");
		$("#weather-temperature").append("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Weather icon' width='75' height='75'/>");
		$("#weather-temperature").append(data.main.temp + "°C");
		$("#weather-main").append(data.weather[0].description);
		var weatherDateTime = new Date();
		var seconds = data.dt;
		var milliseconds = seconds * 1000;
		weatherDateTime.setTime(milliseconds);
		var sunrise = new Date();
		var seconds = data.sys.sunrise;
		var milliseconds = seconds * 1000;
		sunrise.setTime(milliseconds);
		var sunset = new Date();
		var seconds = data.sys.sunset;
		var milliseconds = seconds * 1000;
		sunset.setTime(milliseconds);

		$("#weather-fetch-time").append("Data receiving time: " + weatherDateTime);
		$("#weather-widget").show();
		var $table = $("table").first();
		$table.append("<tr>");
		$table.append("<th>Wind</th>");
		$table.append("<td>" + data.wind.speed + " m/s</td>");
		$table.append("</tr>");
		$table.append("<tr>");
		$table.append("<th>Pressure</th>");
		$table.append("<td>" + data.main.pressure + " hpa</td>");
		$table.append("</tr>");
		$table.append("<tr>");
		$table.append("<th>Humidity</th>");
		$table.append("<td>" + data.main.humidity + " %</td>");
		$table.append("</tr>");
		$table.append("<tr>");
		$table.append("<th>Sunrise</th>");
		$table.append("<td>" + sunrise.toTimeString() + "</td>");
		$table.append("</tr>");
		$table.append("<tr>");
		$table.append("<th>Sunset</th>");
		$table.append("<td>" + sunset.toTimeString() + "</td>");
		$table.append("</tr>");

	}
	);
}