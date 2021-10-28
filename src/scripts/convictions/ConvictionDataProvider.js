
let convictions = [];

export const useConvictions = () => {
    return convictions.slice();
}

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
    .then(res => res.json())
    .then(resParsed => {
        convictions = resParsed
    })
}