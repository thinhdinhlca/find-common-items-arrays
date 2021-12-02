window.function = function (location, gender, price, htype) {

//var arrays = [['apple', 'orange', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'],['taco', 'fish', 'apple', 'pizza'],['banana', 'pizza', 'fish', 'apple']];

location = location.value ?? "";
gender = gender.value ?? "";
price = price.value ?? "";
htype = htype.value ?? "";

loc_arr = location.split(",");
gen_arr = gender.split(",");
prc_arr = price.split(",");
htype_arr = htype.split(",");
  
var arrays = [loc_arr,gen_arr,prc_arr,htype_arr];
  
var res1 = arrays.shift().filter(function(v) {
    return arrays.every(function(a) {
        return a.indexOf(v) !== -1;
    });
});

var res2 = res1.join(', ');

return res2

}
