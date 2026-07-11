// Spread Operator (...)
// The Spread Operator expands (spreads) an array, object, or iterable into individual elements.

let studentMarks = [80, 90, 70];
let addStudent = studentMarks
addStudent.push(40)
console.log(studentMarks)
console.log(addStudent)
//using this ond method the original array will be changed but using spread the original array
//will not changed thats why we use spread operator.

// With Spread operator

let students = ["Ashwani","Shivam","Ankit"];
let anotherStudent = students;
anotherStudent = [...students,"Shefaali"]
console.log(students)//original array will be not changed
console.log(anotherStudent)

// With Object
let record = {
    name: "Kundan",
    age: 24
}
let newRecord={
    ...record,
    city: "Varanasi"
}
console.log(record)
console.log(newRecord)

/************************************Rest Operator******************************************/
// The Rest Operator collects multiple values into one array or object.

let data = {
    name:"Himanshu",
    age:23,
    city:"Varanasi",
    cource:"MERN"
}
const {name,...restData} = data
console.log(name)
console.log(restData)

function addToCard(...number){
    let addNumbers = 0;

    for (let sum of number) {
        addNumbers = sum + addNumbers
    }
    return addNumbers;
}

console.log(addToCard(10,20,30))
console.log(addToCard(10,20,30,40))

/*Spread (...) expands arrays, objects, or other iterables into individual values. 
It's commonly used for copying, merging, and updating data.
Rest (...) collects multiple values into a single array or object. 
It's used in function parameters and destructuring.
The syntax is the same (...), but the context determines whether it's Spread or Rest:
Right side to expand → Spread
Left side or function parameter to collect → Rest*/