export const Location = (location) => {
    return `
    <section>
        <h3>${location.facilityName}</h3>
        <p>Security Level: ${location.securityLEvel}</p>
        <p>Capacity: ${location.capacity}</p>
    </section>
    `
}