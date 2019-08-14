import { filter } from "lodash"
import axios from "axios"

axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
        let filteredResults = filter(response.data, { userId: 1 })
        console.log(filteredResults)
    })
    .catch(function (error) {
        console.log(error);
    })