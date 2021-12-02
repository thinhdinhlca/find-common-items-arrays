window.function = function (location, gender, price, type) {

//var arrays = [['apple', 'orange', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'],['taco', 'fish', 'apple', 'pizza'],['banana', 'pizza', 'fish', 'apple']];

location = location.value ?? "";
gender = gender.value ?? "";
price = price.value ?? "";
type = type.value ?? "";
  
var arrays = [[$location],[$gender],[$price],[$type]];
  
var res1 = arrays.shift().filter(function(v) {
    return arrays.every(function(a) {
        return a.indexOf(v) !== -1;
    });
});

var res2 = res1.join(', ');

return res2

}
