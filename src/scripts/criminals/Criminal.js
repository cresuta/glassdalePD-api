export const Criminal = (criminal) => {
  return `
        <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem">
        <div class="card-body">
        <img src="imgs/criminal.png" class="card-img-top" alt="Cartoon Criminal" />
          <h5 class="card-title">${criminal.name}</h5>
          <p class="card-text">
          Age: ${criminal.age}
          </p>
          <p>Crime: ${criminal.conviction}</p>
          <p>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
          <p>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
        </div>
  `
}