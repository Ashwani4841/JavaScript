let promise = new Promise((resolve, reject)=>{
    let isloggedIn = false
    if(isloggedIn){
        resolve("Welcome back")
    }else{
        reject("loggin first")
    }
    
})

promise.then((msg)=>{
    console.log("logging succesfull")
}).catch((err)=>{
    console.log("Something went wrong..")
}).finally(()=>{
    console.log("All state is settled")
})

// settimeout
function makePayment() {

    return new Promise((resolve) => {

        console.log("Processing Payment...");

        setTimeout(() => {
            resolve("Payment Successful 💳");
        }, 3000);

    });

}

makePayment()
.then((message) => {
    console.log(message);
});

// example 2
function downloadFile() {

    return new Promise((resolve) => {

        console.log("Downloading...");

        setTimeout(() => {
            resolve("Download Completed ✅");
        }, 5000);

    });

}

downloadFile()
.then((data) => {
    console.log(data);
});