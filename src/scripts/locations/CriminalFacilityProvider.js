// Relationship data between criminals and locations (facilities)
let criminalFacilities = [];

export const useCriminalFacilties = () => {
    return criminalFacilities.slice();
}

export const getCriminalFacilities = () => {
    return fetch("https://criminals.glassdale.us/facilities")
    .then(res => res.json())
    .then(data => {
        criminalFacilities = data
    })
}