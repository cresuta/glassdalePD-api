export const Note = (note) => {
    return `
        <div class="card" style="width: 18rem">
        <div class="card-body">
            <i class="bi bi-journal-text"></i>
            <h5 class="card-title">${new Date(note.date).toLocaleDateString('en-US')}</h5>
            <p class="card-text">Suspect In Question - ${note.suspect}</p>
            <p class="card-text">${note.text}</p>
        </div>
        <div class="card-delete">
            <button type="submit" class="btn btn-light btn-outline-dark" id="deleteNote">
                <i class="bi bi-trash"></i>Delete Note</button>
            </div>
        </div>
    `
}