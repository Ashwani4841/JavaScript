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

const addTwo =(a,b)=>{
    console.log(a+b)
}

const addTwo2 =(a,b)=>{
    return a+b;
}
addTwo(5,9)
console.log(addTwo2(1,1))

/*
1. What is a function?

A reusable block of code that performs a specific task.

2. What is the difference between parameters and arguments?
Parameters are variables in the function definition.
Arguments are the actual values passed when calling the function.
3. What is the difference between return and console.log()?
return sends a value back to the caller.
console.log() only prints to the console.
4. What is an arrow function?

A shorter syntax for writing functions introduced in ES6.

5. When should you use arrow functions?

They're ideal for:

Array methods (map, filter, reduce)
Callbacks
Short utility functions

Use regular functions when you need their own this, such as many object methods or constructors.
*/
