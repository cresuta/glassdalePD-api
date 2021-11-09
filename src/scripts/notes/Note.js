import { deleteNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js";
import {NoteEditForm} from "./NoteEditForm.js"

// Click listener for delete button
document.querySelector('.current-list').addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteNote")) {
        const idToDelete = clickEvent.target.id.split("-")[1];
        deleteNote(idToDelete)
        .then(NoteList)
    }
})

// Click listener for edit button
document.querySelector('.current-list').addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("editNote")) {
        const idToEdit = +clickEvent.target.id.split("-")[1];
        NoteEditForm(idToEdit)
    }
})

export const Note = (note) => {
    return `
        <div class="card" style="width: 20rem">
        <div class="card-body">
            <i class="bi bi-journal-text"></i>
            <h5 class="card-title">${new Date(note.date).toLocaleDateString('en-US')}</h5>
            <p class="card-text">Suspect In Question - ${note.suspect}</p>
            <p class="card-text">${note.text}</p>
        </div>
        <div class="card-btns">
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="deleteNote-${note.id}">
                <i class="bi bi-trash"></i>Delete Note</button>
            
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="editNote-${note.id}">
                <i class="bi bi-pencil-square"></i>Edit Note</button>
        </div>
        </div>
    `
}