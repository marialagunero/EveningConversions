var liters = function(gallons) {
  return gallons * 3.785 ;
};

var gallons = parseFloat(prompt("How much in gallons?"));
var result = liters(gallons);
  alert("liters" + "=" result + ".");

};
