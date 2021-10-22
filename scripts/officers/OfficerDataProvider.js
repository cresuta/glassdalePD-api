let officers = [];

export const userOfficers = () => {
    return officers.slice();
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
    .then(response => response.json())
    .then(response => {
        console.table(response);
        officers = response
    })
}