export const Location = (location) => {
  return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
        <img src="imgs/jail-house.png" class="card-img-top" alt="Cartoon Jail House" />
          <h5 class="card-title">${location.facilityName}</h5>
          <p class="card-text">
          Security Level: ${location.securityLEvel}
          </p>
          <p>Capacity: ${location.capacity}</p>
        </div>
        </div>
    `  
}