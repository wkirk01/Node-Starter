import Axios from "axios"

export function get<T>(url: string) {
    return new Promise<T>((resolve, reject) => {
        Axios.get<T>(url)
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    });
}

(async () => {
    try {
        const todo = await get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(todo)
    } catch (error) {
        console.error(error)
    }
})();


