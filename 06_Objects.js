const User = {
    name:"Aniket",
    age:24,
    course:"MERN",
    address:{
        state:"UP",
        city:"Varanasi"
    }
}
// We can access onject in two type.
console.log(User.name)//first way to add
console.log(User["course"])//second way to add
console.log(User.address.city)
User.country= "India"//we can add new property
delete User.course;//We can also delete the property
console.log(User)


// Object inside Array
const student=[
    {
        name:"Shivam",
        age:24
    },
    {
        name:"Chandan",
        age:25
    },
    {
        name:"Himanshu",
        age:23
    }
]
console.log(student[1].name)

// Object can contain also function.

const userInfo ={
    user:"Rishu",
    age:23,
    greet:function(){
        console.log(`Welcome, ${this.user}`)
    }
}
userInfo.greet()

// We can use object destructuring
const{user,age}= userInfo
console.log(user)
console.log(age)

/*
An object stores related information as key-value pairs.
Use dot notation (obj.name) for known property names and bracket notation (obj[key]) for dynamic property names.
You can add, update, and delete properties at any time.
Objects can contain arrays, other objects, and functions (methods).
Object destructuring makes it easy to extract values, and the spread operator helps copy or update objects without modifying the original—both are heavily used in React.
*/