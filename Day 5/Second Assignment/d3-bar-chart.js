var data = [32, 287, 14, 105, 175, 333];

d3.select(".chart")
.selectAll("div")
.data(data)
.enter()
.append("div")
.style("width", function(d) { return d * 2 + "px"; })
.text(function(d) { return '$ ' + d; });