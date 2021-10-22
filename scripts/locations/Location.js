export const Location = (location) => {
    return `
    <section class="location">
        <h3>${location.facilityName}</h3>
        <p>Security Level: ${location.securityLEvel}</p>
        <p>Capacity: ${location.capacity}</p>
    </section>
    `
}