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
