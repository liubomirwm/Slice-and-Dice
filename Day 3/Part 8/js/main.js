function main() {
	$(".skillset").hide();
	$(".projects").hide();
	$(".skillset").fadeIn(1000);
	$(".projects-button").on("click", function () {
		//$(this).next().toggle();
		$(this).next().slideToggle();
		$(this).toggleClass("active");
		$(this).text("Project viewed");
	})
}
$(document).ready(main);