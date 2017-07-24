$(document).ready(function() {
	$("#fetch-button").on("click", fetchUsers);
});
function fetchUsers() {
	var root = 'https://jsonplaceholder.typicode.com';

	$.ajax({
		url: root + "/users",
		method: "GET"
	}).then(function(data) {
		var table = $("table").first();
		$(table)
		.append("<tr><th>Id</th><th>Name</th><th>Username</th><th>Email</th><th>Website</th><th>Company name</th><th>Business</th>" + 
			"<th>Catch phrase</th><th>City</th><th>Street</th><th>Suite</th><th>Zip code</th></tr>");
		for (var i = 0; i < data.length; i++) {
			$(table).append("<tr>");
			$(table).append("<td>" + data[i].id + "</td>");
			$(table).append("<td>" + data[i].name + "</td>");
			$(table).append("<td>" + data[i].username + "</td>");
			$(table).append("<td>" + data[i].email + "</td>");
			$(table).append("<td>" + data[i].website + "</td>");
			$(table).append("<td>" + data[i].company.name + "</td>");
			$(table).append("<td>" + data[i].company.bs + "</td>");
			$(table).append("<td>" + data[i].company.catchPhrase + "</td>");
			$(table).append("<td>" + data[i].address.city + "</td>");
			$(table).append("<td>" + data[i].address.street + "</td>");
			$(table).append("<td>" + data[i].address.suite + "</td>");
			$(table).append("<td>" + data[i].address.zipcode + "</td>");
			$(table).append("</tr>");
		}
	});
}