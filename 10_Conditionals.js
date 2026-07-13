// if-else
let age = 19;
if(age<18){
    console.log("You are not aligible for vote")
}else{
    console.log("Aligible for vote")
}

// else-if
let marks = 56;
if(marks>=80){
    console.log("Grade A")
}else if(marks>=60){
    console.log("Grade B")
}else if(marks>=35){
    console.log("Grade C")
}else{
    console.log("Fail")
}

// nested if
let isLoggedin = true;
// let isAdmin = true

// if(isLoggedin){
//     if(!isAdmin){
//         console.log("Welcome Admin")
//     }else{
//         console.log("login first")
//     }
// }

let isAdmin = false;

if (!isAdmin) {
    console.log("Access Denied");
}

let hasMoney = false;

if (!hasMoney) {
    console.log("You cannot buy this product.");
}

let isStudent = true;

if (!isStudent) {
    console.log("Not a student");
} else {
    console.log("Student");
}

let isOnline = false;

console.log(!isOnline);

let isStudent = true;

if (!isStudent) {
    console.log("Not a student");
} else {
    console.log("Student");
}

// for of loop
const fruits = ["Apple", "Mango", "Banana"];

for (const fruit of fruits) {
    console.log(fruit);
}

// for in loops
const user = {
    name: "Ashwani",
    age: 24,
    city: "Varanasi"
};

for (const key in user) {
    console.log(key, user[key]);
}

// break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}