// Task: 1

const students = [
  { name: "Rahul", marks: 80 },
  { name: "Ankit", marks: 45 },
  { name: "Priya", marks: 90 },
  { name: "Neha", marks: 30 },
  { name: "Rohan", marks: 75 }
];
// 1
const passedStudends = students.filter((student)=>student.marks>=50)
console.log(passedStudends)

// 2
const studentsName = students.map((value)=>value.name)
console.log(studentsName)

// 3
const SumpassedStudends = students.
    filter((student)=>student.marks>=50)
    .reduce((acc,student)=>acc+student.marks,0)
console.log(SumpassedStudends)

// 4
const everyPassedStudents = students.every((student)=>student.marks>=50)
console.log(everyPassedStudents)

// 5
const everyPassedStudents1 = students.some((student)=>student.marks>=85)
console.log(everyPassedStudents1)

// Do I need to remove some items? → Use filter().
// Do I need to change each item? → Use map().
// Do I need one final value (sum, total, etc.)? → Use reduce().
// Do I need to know if all items pass? → Use every().
// Do I need to know if at least one item passes? → Use some().