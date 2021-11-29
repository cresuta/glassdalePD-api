let family = [];

export const useFamily = () => {
    return family.slice();
}

export const getFamily = () => {
    return fetch("http://localhost:8088/familyMembers")
    .then(res => res.json())
    .then(data => family = data)
}