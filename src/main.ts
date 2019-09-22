export function get<T>(url: string) {
    return new Promise<T>((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    });
}

