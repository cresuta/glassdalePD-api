import { deleteNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js";
import {NoteEditForm} from "./NoteEditForm.js"

// Click listener for delete button
document.querySelector('.current-list').addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteNote") || clickEvent.target.id.startsWith("deleteBtn")) {
        const idToDelete = clickEvent.target.id.split("-")[1];
        deleteNote(idToDelete)
        .then(NoteList)
    }
})

// Click listener for edit button
document.querySelector('.current-list').addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("editNote") || clickEvent.target.id.startsWith("editBtn")) {
        const idToEdit = +clickEvent.target.id.split("-")[1];
        NoteEditForm(idToEdit)
    }
})

export const Note = (note,criminal) => {
    return `
        <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 20rem">
        <div class="card-body">
            <h5 class="card-title">${new Date(note.date).toLocaleDateString('en-US')}</h5>
            <p class="card-text card-criminalName">${criminal.name}</p>
            <p class="card-text card-noteText">${note.text}</p>
        </div>
        <div class="card-btns">
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="deleteNote-${note.id}">
                <i class="bi bi-trash" id="deleteBtn-${note.id}"></i></button>
            
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="editNote-${note.id}">
                <i class="bi bi-pencil-square" id="editBtn-${note.id}"></i></button>
        </div>
        </div>
    `
}