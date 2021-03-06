function setup() {
	$("#fetch-button").click(function(){
		var root = 'http://jsonplaceholder.typicode.com';

		$.ajax({
			url: root + '/users/',
			method: 'GET'
		}).then(function(data) {
			$("#table-id").DataTable( {
				data:data,
				columns:
				[
				{data:"id"},
				{data:"name"},
				{data:"username"},
				{data:"email"},
				{data:"address.street"},
				{data:"address.suite"},
				{data:"address.city"},
				{data:"address.zipcode"},
				{data:"address.geo.lat"},
				{data:"address.geo.lng"},
				{data:"phone"},
				{data:"website"},
				{data:"company.name"},
				{data:"company.catchPhrase"},
				{data:"company.bs"}
				]
			})
			$("#table-id").show();
		} );
	});
};

$(document).ready(setup);
