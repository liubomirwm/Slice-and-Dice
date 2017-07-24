var myPlaces = ["Ibiza", "Slanchev Bryag", "Albena"];
var friendPlaces = ["Ibiza", "Manchester", "Madrid"];
var hasCommonPlace = false;
for (var i = 0; i < myPlaces.length; i++) {
	for (var j = 0; j < friendPlaces.length; j++) {
		if (myPlaces[i] === friendPlaces[j]) {
			console.log("Common place: " + friendPlaces[j]);
			hasCommonPlace = true;
		}
	}
}
if (hasCommonPlace === false) {console.log("No common places");}