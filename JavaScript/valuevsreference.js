let johnsAge = 10
let fionnasAge = johnsAge //Copy Operation-> By Value

console.log("johnsAge "+johnsAge);
console.log("fionnasAge "+fionnasAge);

johnsAge = 12;

console.log("johnsAge now is "+johnsAge);
console.log("fionnasAge now is "+fionnasAge);

let ages = [10, 20, 30, 40, 50]
let groupAges = ages;  // Copy Operation -> By Reference

groupAges[1] = 22
groupAges[3] = 45

console.log("Ages: "+ages);

