/*
    PromoCode1: JUMBO
    30%off on amount greater than 150

    PromoCode: BINGO
    50% off on amount greater than 300 but upto 200
*/

let amount = 360;
let promoCode = "BINGO";

/*
if(promoCode == "JUMBO" && amount > 150){
    amount -= 0.30*amount;
    console.log("Amount ot Pay is: "+amount);
}else{
    console.log("Invalid PromoCode or Amount Insufficient");
}*/

if(promoCode == "JUMBO" && amount > 150){
    amount -= 0.30*amount;
    console.log("Amount to Pay is: "+amount);
}else if(promoCode == "BINGO" && amount > 300){
    let discount = 0.50*amount;
    if(discount<200){
        amount -= discount;
    }else{
        amount -= 200;
    }
    console.log("Amount to Pay is: "+amount);
}else{
    console.log("Invalid PromoCode or Amount Insufficient");
}