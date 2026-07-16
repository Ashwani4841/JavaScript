/* Promise callbacks (.then, .catch, .finally) go into the Microtask Queue, 
and the Microtask Queue has higher priority than the Callback Queue.*/

/*Remember this rule:

Synchronous code → Microtasks (Promises) → Macrotasks (setTimeout, setInterval)*/

/*Microtask Queue (Promise Queue)

There are two queues that can contain tasks waiting to run:

Callback Queue (Macrotask Queue)
setTimeout()
setInterval()
DOM events
Microtask Queue
Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()

The Microtask Queue has higher priority than the Callback Queue.


Synchronous Code
        ↓
Microtask Queue (Promises)
        ↓
Callback Queue (setTimeout, setInterval)
********************
VIP Lane (Microtasks)
        ↑
Normal Lane (Callbacks)

*/

// console.log("1")

setTimeout(()=>{
    // console.log("2")
},2000)

Promise.resolve().then(()=>{
    // console.log("3")
})
// console.log("4");
// 1,4,3,2
/*Rule to Remember ⭐

Whenever both are waiting:

Promise (.then/.catch/.finally)
        ⬇
Runs First

setTimeout / setInterval
        ⬇
Runs Later

A simple memory trick:

Promise = Priority*/

console.log("A");           // Synchronous

Promise.resolve().then(() => {
  console.log("B");         // Microtask
});

Promise.resolve().then(() => {
  console.log("C");         // Microtask
});

setTimeout(() => {
  console.log("D");         // Callback Queue (Macrotask)
}, 0);

console.log("E");           // Synchronous