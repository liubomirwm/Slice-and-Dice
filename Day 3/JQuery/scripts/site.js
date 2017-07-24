var makeChange = (function() {
	var imagesArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
	var counter = 0;
	var marginTop = 50;
	return function(action) {
		switch (action) {
			case "show":
				$("#main-content img").show();
				break;
			case "hide":
				$("#main-content img").hide();
				break;
			case "roundCorners":
				$("#main-content img").css("border-radius", "50px");
				break;
			case "straightCorners":
				$("#main-content img").css("border-radius", "0px");
				break;
			case "addBorder":
				$("#main-content img").css("border", "2px solid red");
				break;
			case "removeBorder":
				$("#main-content img").css("border", "0px solid red");
				break;
			case "moveUp":
				marginTop -= 10;
				$("#main-content img").css("margin-top", marginTop + "px");
				break;
			case "moveDown":
				marginTop += 10;
				$("#main-content img").css("margin-top", marginTop + "px");
				break;
			case 'nextImage':
				if (counter == (imagesArray.length - 1)) {
					counter = 0;
				} else {
					counter++;
				}
				$("#main-content img").attr("src", "images/" + imagesArray[counter]);
				break;
			case "previousImage":
				if (counter == 0) {
					counter = imagesArray.length - 1;
				} else {
					counter--;
				}
				$("#main-content img").attr("src", "images/" + imagesArray[counter]);
			default:


		}
	}
})()
$(document).ready(showImage);
