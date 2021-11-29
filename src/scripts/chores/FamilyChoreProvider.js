let familyChores = [];

export const useFamilyChores = () => {
    return familyChores.slice();
}

export const getFamilyChores = () => {
    return fetch("http://localhost:8088/familyChores")
    .then(res => res.json())
    .then(data => familyChores = data)
}

