console.log("Cashback App Started");


function getCashBack(luckyNumber){
    let cashBacks = [20, 34, 12, 44, 56, 67, 89, 90, 88]
    if(cashBacks[luckyNumber]){
        return cashBacks[luckyNumber];
    }else{
        //return 0;
        let error = Error("Invalid Lucky Number");
        throw error;
    }  
}

try{
    let cashBackEarned = getCashBack("thirteen");
    console.log("cashBackEarned: "+cashBackEarned);
}catch(e){
    console.log("Something Went Wrong "+e);

}


console.log("Cashback App Finished");
