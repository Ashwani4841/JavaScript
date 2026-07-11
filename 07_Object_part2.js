/***************Object.keys()*************
What does it do?
It returns an array of all the keys (property names) in an object.*/
const user={
    name:"Ashwani",
    age:24
}
console.log(Object.keys(user))


/***********Object.values()*********
What does it do?
Returns an array of all values.*/
const user2={
    name:"Chandan",
    age:25,
    city:"Varanasi"
}
console.log(Object.values(user2))

/**********Object.entries()*************
What does it do?
Returns an array of key-value pairs.*/
const user3={
    name:"Shivam",
    age:24,
    city:"london"
}
console.log(Object.entries(user3))

/************hasOwnProperty()************
What does it do?
Checks if a property exists directly on the object.*/
const user4={
    name:"Arpit",
    age:15,
    city:"Mumbai"
}
console.log(user4.hasOwnProperty("name"))
console.log(user4.hasOwnProperty("city"))

/***********Object.assign()************
What does it do?
Copies properties from one or more objects into another object.*/
const firstUser={
    name:"Saurabh"
}
const firstUser2={
    age:24
}
let result = Object.assign({},firstUser,firstUser2)
console.log(result)


/**************Object.freeze()*************
What does it do?
Makes an object completely read-only.*/
const obj1={
    name:"Janvi"
}
Object.freeze(obj1)
obj1.name = "Ashwani"
obj1.age = 24
console.log(obj1)


/************Object.seal()***********
What does it do?
A sealed object:
✅ Can update existing properties.
❌ Cannot add new properties.
❌ Cannot delete properties.*/
const data={
    name:"Rahul"
}
Object.seal(data)
data.name = "Rahul Gandhi";
data.age = 25
delete data.name;
console.log(data)


/************Object.hasOwn()**************
 A newer alternative to hasOwnProperty().*/
const student = {
    name: "Ashwani"
};
console.log(Object.hasOwn(student, "name"));
console.log(Object.hasOwn(student, "city"));

