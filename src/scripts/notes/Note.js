import { deleteNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js";

document.querySelector('.current-list').addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteNote")) {
        const idToDelete = clickEvent.target.id.split("-")[1];
        deleteNote(idToDelete)
        .then(NoteList)
    }
})

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
            <button type="submit" class="btn btn-light btn-outline-dark" id="deleteNote-${note.id}">
                <i class="bi bi-trash"></i>Delete Note</button>
            </div>
        </div>
    `
}