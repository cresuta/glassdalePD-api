let locations = []

export const useLocations = () => {
    return locations.slice()
}

export const getLocations = () => {
    return fetch("https://criminals.glassdale.us/facilities")
    .then(res => res.json())
    .then(resParsed => {
        locations = resParsed
    })
}