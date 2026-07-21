async function FechData(){
    try {
        let responce = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        let finalValue = await responce.json()
        console.log(finalValue)
    } catch (error) {
        console.log(error, "Somethink went wrong...")
    }
    finally{
        console.log("Data fetched successfully..."); 
    }
}

FechData()

// **************************
console.log("Program Started");

try {
    console.log(userName);
} catch (error) {
    console.log("Something went wrong");
}

console.log("Program End");

// ************************************
try {
    let user = {
        name: "Ashwani"
    };

    console.log(user.age.toUpperCase());

}
catch(error) {
    console.log("Error:", error.message);
}

// **********************************
let age = 15;

try {

    if(age < 18){
        throw new Error("You are not eligible to vote.");
    }

    console.log("You can vote.");

}
catch(error){
    console.log(error.message);
}

// ***********************************
try {
    console.log("Withdraw Money");
}
catch(error){
    console.log(error);
}
finally{
    console.log("Take your ATM card");
}

// ************************************

async function getData() {

    try {

        const result = await Promise.reject("Server Error");

        console.log(result);

    } catch(error){

        console.log(error);

    }

}

getData();
console.log("Start");

try {
    let user = JSON.parse("invalid json");
    console.log(user);
} catch (error) {
    console.log("Something went wrong!");
}

console.log("End");
try {
    console.log("A");

    let x = JSON.parse("wrong");

    console.log("B");
} catch (error) {
    console.log("C");
}

console.log("D");

try {
  // Code that might cause an error
  const user = null;
  console.log(user.name); // Throws a TypeError
} catch (error) {
  // Executed only if an error occurs
  console.error("An error occurred:", error.message);
} finally {
  // Always executed, useful for cleanup actions
  console.log("Cleanup operations complete.");
}

function checkAge(age) {
  if (age < 18) {
    throw new Error("Access denied: You must be at least 18 years old.");
  }
  return "Access granted.";
}

try {
  const status = checkAge(15); 
  console.log(status);
} catch (error) {
  console.error("Validation Failed:", error.message);
}

