let students = ["Ashwani","Kundan","Arpit"]
students.push("Shivam")//Add value in last of the endex
students.pop()//remove value in last of the index
students.shift()//remove value in start of the array
students.unshift("Arpit")//add value start of the array
// console.log(students)



/*************slice()*************/
let data = ["Munni","Ankit","Ashish","Shivam","Chandan"]
let finalData = data.slice(2,4)//array.slice(start, end);
// start → Starting index (included)
// end → Ending index (not included)
// console.log(data)
// console.log(finalData)


/*************splice**************/
// splice() changes the original array.
// array.splice(start, deleteCount, item1, item2...)
let data1 = ["Munni","Ankit","Ashish","Shivam","Chandan"]
let finalData2 = data1.splice(2,3)
// console.log(data1)
// console.log(finalData2)

//**********Map************/
const studentMarks = [80,49,59,39,85,73]
let finalResult = studentMarks.map((sum)=>sum+10)
// console.log(finalResult)

// ************filter********
const classStudent = [20,40,53,72,74,19]
let allClassStudent = classStudent.filter((findStudent)=>findStudent>50)
let allClassStudent1 = classStudent.filter((findStudent)=>findStudent<30)
console.log(allClassStudent) 
console.log(allClassStudent1) 

// **************Reduce***********
const addToCart  = [10,40,45,5]
const priceToPay = addToCart.reduce((acc,carval)=>{ return acc+carval},0);
console.log(priceToPay)
// map() → Changes every element and returns a new array of the same length.
// filter() → Keeps only matching elements and returns a new array that may be shorter.
// find() → Returns only the first matching element (or undefined if no match is found).