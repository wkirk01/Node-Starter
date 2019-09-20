import axios from "axios"

async function getData() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data)
}

getData()