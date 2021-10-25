export const Location = (location) => {
    return `
        <img src="imgs/jail-house.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${location.facilityName}</h5>
          <p class="card-text">
          Security Level: ${location.securityLEvel}
          </p>
          <p>Capacity: ${location.capacity}</p>
        </div>
    `
}