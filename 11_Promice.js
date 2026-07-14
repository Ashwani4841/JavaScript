let promice = new Promise((resolve, reject)=>{
    let isloggedIn = false
    if(isloggedIn){
        resolve("Welcome back")
    }else{
        reject("loggin first")
    }
    
})

promice.then((msg)=>{
    console.log("logging succesfull")
}).catch((err)=>{
    console.log("Something went wrong..")
})