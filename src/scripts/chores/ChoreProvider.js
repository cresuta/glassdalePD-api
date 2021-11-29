let chores = [];

export const useChores = () => {
    return chores.slice();
}

export const getChores = () => {
    return fetch("http://localhost:8088/chores")
    .then(res => res.json())
    .then(data => chores = data)
}