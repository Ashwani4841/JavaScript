async function todo() {
    let responce = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await responce.json()
    console.log(data)
}

todo()

// like chat application 

async function getMessages(userId) {
  const response = await fetch(`/api/messages/${userId}`);
  const messages = await response.json();

  console.log(messages);
}

getMessages(5);

// example 3

async function newData(){}
async function userMessage(){}
async (params) => {
    
}

async function fetchData() {
  try {
    // 1. Send the request
    const response = await fetch('https://typicode.com');
    
    // 2. Check if the HTTP status code is successful (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // 3. Parse the data as JSON
    const data = await response.json();
    console.log('Success:', data);
    
  } catch (error) {
    // 4. Handle any network or parsing errors
    console.error('Error fetching data:', error);
  }
}

// Call the function
fetchData();


fetch('https://typicode.com')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parses JSON data
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
