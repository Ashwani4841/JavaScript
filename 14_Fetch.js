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