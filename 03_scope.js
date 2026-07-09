//Global Scope
//A variable declared outside any function or block is in the global scope.
let name = "Ashwani";

function greet(){
    console.log(name)
}

greet()
console.log(name)

//Function (Local) Scope
//Variables declared inside a function can only be used inside that function.

function greet() {
    let message = "Hello";
    console.log(message);
}

greet();

console.log(message);