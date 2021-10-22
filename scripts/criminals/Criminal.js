export const Criminal = (criminal) => {
    return `
    <div class="criminal">
        <h3>${criminal.name}</h3>
        <p>Age: ${criminal.age}</p>
        <p>Crime: ${criminal.conviction}</p>
        <p>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
    `
}