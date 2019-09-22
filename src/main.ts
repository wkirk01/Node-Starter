export function get(url: string) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    });
}

