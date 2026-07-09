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

//Block Scope
//A block is anything inside { }.

{
    let age = 24;
    console.log(age);
}

console.log(age);

if (true) {
    let city = "Varanasi";
    console.log(city);
}

console.log(city);


//Example

let country = "India";

function outer() {

    let state = "Uttar Pradesh";

    function inner() {

        let city = "Varanasi";

        console.log(country);
        console.log(state);
        console.log(city);
    }

    inner();
}

outer();