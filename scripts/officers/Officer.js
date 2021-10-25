
export const Officer = (officer) => {
    return `
        <img src="imgs/officer.jpeg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Officer ${officer.name}</h5>
          <p class="card-text">
          Badge ID: ${officer.id}
          </p>
        </div>
    `
}