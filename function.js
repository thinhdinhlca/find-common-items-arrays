window.function = function (location, gender, price, htype, all) {

//var arrays = [['apple', 'orange', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'],['taco', 'fish', 'apple', 'pizza'],['banana', 'pizza', 'fish', 'apple']];

location = location.value ?? "";
gender = gender.value ?? "";
price = price.value ?? "";
htype = htype.value ?? "";
all = all.value ?? "";

loc_arr = location.split(",");
gen_arr = gender.split(",");
prc_arr = price.split(",");
htype_arr = htype.split(",");
all_arr = all.split(",");
  
let res_arr = [];
  
for(let i of all_arr){
  if(loc_arr.includes(i) && gen_arr.includes(i) && prc_arr.includes(i) && htype_arr.includes(i)){
    res_arr.push(i)
  }
}
return res_arr.join(", ");

}
