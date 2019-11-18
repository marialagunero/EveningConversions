var liters = function(gallons) {
  return gallons * 3.785 ;
};

var gallons = parseFloat(prompt("How much in gallons?"));
var result = liters(gallons);
  alert("liters" + "=" + result + ".");

var cups = function(ounces) {
  return ounces / 8;
};

var ounces = parseFloat(prompt("How much in ounces?"));
var result = cups(ounces);
  alert("cups" + "=" + result + ".");

  var ounces = function(tablespoons) {
    return tablespoons / 2;
  };

  var tablespoons = parseFloat(prompt("How much in tablespoons?"));
  var result = ounces(tablespoons);
    alert("ounces" + "=" + result + ".");
