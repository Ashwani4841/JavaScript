/*
    What is a Function?

        A function is a reusable block of code that performs a specific task.
        Instead of writing the same code multiple times, you write it once and call it whenever you need it.
*/

function greet(name){
    console.log(name)
}

greet("Ashwani")

function calculator(a,b){
    return a+b;
}
let add = calculator(10,20);
console.log(add)

function userLoggedin(user){
    console.log(`${user}, just logged in`)
}
userLoggedin("Shifaali")

//Arrow function

const data =(name)=>{
    console.log(name)
}
data("shivam_bhske")
