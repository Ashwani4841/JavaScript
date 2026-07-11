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
