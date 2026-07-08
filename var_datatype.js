/*Key Takeaways
A variable is a named container for storing data.
Prefer const by default. Use let only when the value needs to change. Avoid var in modern JavaScript.
JavaScript has 7 primitive data types and several non-primitive types like objects, arrays, and functions.
Use typeof to inspect a value's type, remembering the special case: typeof null returns "object" due to a historical quirk.
Understanding variables and data types is the foundation for learning functions, objects, arrays, DOM manipulation, and React.*/

let name = "Ashwani";
let age = 24;
let city = "Varansi";
let isStudent = true

console.log(name);
console.log(age)
console.log(city)

console.log(typeof name);
console.log(typeof age)
console.log(typeof city)
console.log(typeof isStudent)

const student = {
    name : "Shivam",
    age : 24,
    cource : "Full stack"
}

const technology = ["js","ts","node","express","mongodb"]
let data;

console.log(student)
console.log(technology)
console.log(data)

/*
    1. Difference between var, let, and const?
var: function-scoped, can be redeclared and reassigned.
let: block-scoped, can be reassigned but not redeclared in the same scope.
const: block-scoped, cannot be reassigned.

2. Difference between null and undefined?
undefined: no value assigned yet.
null: intentionally empty.

3. How many primitive data types are there?

Seven:

String
Number
Boolean
Undefined
Null
BigInt
Symbol
4. Why does typeof null return "object"?

Because of a historical bug in JavaScript that has been kept for backward compatibility.
*/