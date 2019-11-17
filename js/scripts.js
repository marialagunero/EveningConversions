var liters = function(gallons) {
  return gallons * 3.785 ;
};

var gallons = parseFloat(prompt("How much in gallons?"));
var result = liters(gallons);
  alert("liters" + "=" + result + ".");

var cups = function(ounces) {
  return ounces / 8;
}

var cups = parseFloat(prompt("How much in cups?"));
var result = cups(ounces);
  alert("cups" + "=" + result + ".");
