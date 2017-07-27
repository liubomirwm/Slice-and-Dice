$(document).ready(function() {
	$("#myForm").validate({
		rules:{
			name:{
				required:true,
				minlength:3
			},
			username:{
				required:true,
				minlength:3
			},
			email:{
				required:true,
				minlength:8
			},
			street:{
				required:true,
				minlength:5
			},
			suite:{
				required:true,
				minlength:5
			},
			city:{
				required:true,
				minlength:3
			},
			zipcode:{
				required:true,
				minlength:3
			},
			"geo-latitude":{
				required:true,
			},
			"geo-longitude":{
				required:true,
			},
			phone:{
				required:true,
				minlength:5
			},
			website:{
				required:true,
			},
			"company-name":{
				required:true,
				minlength:2
			},
			"company-catch-phrase":{
				required:true,
				minlength:2
			},
			"company-business":{
				required:true,
				minlength:2
			},
		},
		messages: {
			name:{
				required:"Name field is required",
				minlength:jQuery.validator.format("Your name must be at least {0} characters")
			},
			username:{
				required:"Username field is required",
				minlength:jQuery.validator.format("Your username must be at least {0} characters")
			},
			email:{
				required:"Email field is required",
				minlength:jQuery.validator.format("Your email must be at least {0} characters")
			},
			street:{
				required:"Street field is required",
				minlength:jQuery.validator.format("Your street must be at least {0} characters")
			},
			suite:{
				required:"Suite field is required",
				minlength:jQuery.validator.format("Your suite must be at least {0} characters")
			},
			city:{
				required:"City field is required",
				minlength:jQuery.validator.format("Your city must be at least {0} characters")
			},
			zipcode:{
				required:"Zipcode field is required",
				minlength:jQuery.validator.format("Your zipcode must be at least {0} characters")
			},
			"geo-latitude":{
				required:"Geo latitude field is required"
			},
			"geo-longitude":{
				required:"Geo longitude field is required"
			},
			phone:{
				required:"Phone field is required",
				minlength:jQuery.validator.format("Your phone must be at least {0} characters")
			},
			website:{
				required:"Website field is required",
			},
			"company-name":{
				required:"Company name field is required",
				minlength:jQuery.validator.format("Your company name must be at least {0} characters")
			},
			"company-catch-phrase":{
				required:"Company catch phrase field is required",
				minlength:jQuery.validator.format("Your company catch phrase must be at least {0} characters")
			},
			"company-business":{
				required:"Company business field is required",
				minlength:jQuery.validator.format("Your company business must be at least {0} characters")
			}
		},
		submitHandler: function (form) {    
			$.ajax({ 
				type: "POST", 
				data: $(form).serialize(),
				url: "https://jsonplaceholder.typicode.com/users", 
				success: function (data) {
					show_stack_bottomright("success");
					console.log(data);
				},
				error: function (data) {
					show_stack_bottomright("error");
					console.log(data);
				}                        
			});
		}
	}
	);
})

function show_stack_bottomright(type) {
	var opts = {
		title: " ",
		text: " ",
		addclass: "stack-bottomright"
	};
	switch (type) {
		case "error":
		opts.title = "Oh No";
		opts.text = "Something went wrong and your data wasn't saved!";
		opts.type = "error";
		break;
		case "success":
		opts.title = "Success";
		opts.text = "Information saved successfully!";
		opts.type = "success";
		break;
	}
	new PNotify(opts);
}