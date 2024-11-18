let isInternetEnabled = true 
let isGpsEnabled = false

// Logical  And
console.log("Can i Navigate using Google Maps: "+(isInternetEnabled && isGpsEnabled));

// Logical Or 
let eWallet = 200;
let isCreditCardLinked = false;

console.log("Can i Book Cab: "+(eWallet > 0) || isCreditCardLinked);

// Logical Not 
console.log("Is Internet Not enabled: "+!isInternetEnabled);

