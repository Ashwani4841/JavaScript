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