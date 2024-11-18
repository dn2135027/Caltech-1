let names = 'John, Jennie, Jim, Jack, Joe';
console.log("names: "+names+" data type: "+typeof names);
console.log(names.length);

let result = names.toUpperCase()
console.log("Names in Uppercase: "+names);
console.log("Result is: "+result);

result = names.replace('J', 'K');
console.log("Result is: "+result);

let contactNames = [
    "John",
    "George",
    "Kia",
    "Ana",
    "Shawn",
    "Sia",
];

let  searchKeyword = 'ia'

for(let idx=0;idx<contactNames.length;idx++){
    if(contactNames[idx].endsWith(searchKeyword)){
        console.log(contactNames[idx]);

    }
}

result = names.substring(0, 7); // less than 7 i.e. till 6
console.log(result);


let splittedNames = names.split(",")
console.log(splittedNames);

for(let idx=0;idx<splittedNames.length;idx++){
    console.log(splittedNames[idx].trim());
}


























































