$(document).ready(function() {
	$("#fetch-button").on("click", fetchUsers);
});
function fetchUsers() {
	var root = 'https://jsonplaceholder.typicode.com';
	$.ajax({
		url: root + "/users",
		method: "GET"
	}).then(function(data) {
		var thead = $("thead").first();
		var tbody = $("tbody").first();
		$(thead)
		.append("<tr><th>Id</th><th>Name</th><th>Username</th><th>Email</th><th>Website</th><th>Company name</th><th>Business</th>" +
			"<th>Catch phrase</th><th>City</th><th>Street</th><th>Suite</th><th>Zip code</th></tr>");
		for (var i = 0; i < data.length; i++) {
			$(tbody).append("<tr>");
			$(tbody).append("<td>" + data[i].id + "</td>");
			$(tbody).append("<td>" + data[i].name + "</td>");
			$(tbody).append("<td>" + data[i].username + "</td>");
			$(tbody).append("<td>" + data[i].email + "</td>");
			$(tbody).append("<td>" + data[i].website + "</td>");
			$(tbody).append("<td>" + data[i].company.name + "</td>");
			$(tbody).append("<td>" + data[i].company.bs + "</td>");
			$(tbody).append("<td>" + data[i].company.catchPhrase + "</td>");
			$(tbody).append("<td>" + data[i].address.city + "</td>");
			$(tbody).append("<td>" + data[i].address.street + "</td>");
			$(tbody).append("<td>" + data[i].address.suite + "</td>");
			$(tbody).append("<td>" + data[i].address.zipcode + "</td>");
			$(tbody).append("</tr>");
		}
	});
}
