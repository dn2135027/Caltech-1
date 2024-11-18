let uploadFile = async () => "File Uploaded Successfully";

let updateUserProfile = async () => {
    let result = await uploadFile();
    console.log("Result is: "+result);

    /*console.log("Result is: "+result);

    result.then(
        (value) => console.log("Value is: "+value)
    ); */
}

updateUserProfile();

let myPromise = new Promise(
    function(resolve, reject){
        // Algo goes here

        let isDataFetched = false;

        if(isDataFetched){
            resolve(); // resolves to then
        }else{
            reject();  // rejects to catch
        }
    }
);

myPromise.then(
    () => console.log("Data Fetched Successfully")

).catch(
    () => console.log("Data Fetch Operation Failed")

);