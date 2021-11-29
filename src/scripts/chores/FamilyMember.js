export const FamilyMember = (person,chores) => {
    return `
    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem">
    <div class="card-body">
    <img src="" class="card-img-top" alt="" />
      <h5 class="card-title">${person.name}</h5>
      <div class="card-text">
        <ol>
            ${
                chores.map(chore => `<li>${chore.task}</li>`).join("")
            }
        </ol>
      </div>
    </div>
    </div>
    `
}