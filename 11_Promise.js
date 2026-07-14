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