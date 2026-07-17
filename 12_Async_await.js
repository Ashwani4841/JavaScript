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

// *************************************************************

/*What is async?

The async keyword makes a function always return a Promise.

async function
        ↓
Always returns a Promise

.then()
        ↓
Runs as a Microtask*/

// await means "wait until the work is finished, then continue."

function orderPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🍕 Pizza Delivered");
        }, 3000);
    });
}

orderPizza()
    .then((result) => {
        console.log(result);
    });

console.log("Watching TV...");

// ********
function orderPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🍕 Pizza Delivered");
        }, 3000);
    });
}

async function dinner() {

    const pizza = await orderPizza();

    console.log(pizza);

    console.log("Let's eat!");
}

dinner();

// *******
login()
.then((user)=>{
    return getProfile(user);
})
.then((profile)=>{
    console.log(profile);
});

// with async

async function start() {

    const user = await login();

    const profile = await getProfile(user);

    console.log(profile);

}

start();

async function fetchData() {
  try {
    // Simulated API response (mock data)
    const response = await Promise.resolve({
      json: async () => ({
        userId: 1,
        id: 1,
        title: "Sample Post",
        body: "This is mock data for async/await demonstration"
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

const getData = async () => {
    let data = "Hello World";
    return data;
}

getData().then(data => console.log(data));

const getData = async () => {
    let y = await Promise.resolve("Hello World");
    console.log(y);
}

console.log(1);
getData();
console.log(2);

async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}