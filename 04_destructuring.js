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