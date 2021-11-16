export const Officer = (officer) => {
    return `
        <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem">
        <div class="card-body">
        <img src="imgs/officer.jpeg" class="card-img-top" alt="Cartoon Officer" />
          <h5 class="card-title">Officer ${officer.name}</h5>
          <p class="card-text">
          Badge ID: ${officer.id}
          </p>
        </div>
        </div>
    `
}