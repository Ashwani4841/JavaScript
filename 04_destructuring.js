//What is Destructuring?
//Destructuring is a way to extract values from arrays or objects and store them in variables.

const student = {
    name: "Ashwani",
    age:24,
    city:"Varanasi"
}
const{name,age,city} = student;

console.log(name)
console.log(age)
console.log(city)

//Array
const fruits = ["banana","apple","orange"];
const[first,second,third] = fruits
console.log(first)
console.log(second)
console.log(third)

//nested
const response = {
    success: true,
    data: {
        name: "Ashwani",
        email: "ashwani@gmail.com"
    }
};