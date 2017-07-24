function takeOrder(topping, crustType) {
	orderCount++;
	console.log("Order:", crustType, "pizza topped with", topping);
}
function getSubTotal(itemCount) {
	return itemCount * 7.5;
}
function getTax() {
		return subtotal * 0.06;
}
function getTotal() {
	return subtotal + tax;
}