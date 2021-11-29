let family = [];

export const useFamily = () => {
    return family.slice();
}

export const getFamily = () => {
    fetch("http://localhost:8088/familymembers")
    .then(res => res.json())
    .then(data => family = data)
}