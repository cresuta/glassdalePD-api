import { Note } from "./Note.js";
import { getNotes,useNotes } from "./NoteDataProvider.js";
import { NoteForm } from "./NoteForm.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"

const notesNavLink = document.querySelector('#notes-nav-link');
// const contentTarget = document.querySelector(".noteFormContainer");
const contentTarget = document.querySelector(".current-list");

const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <div class="card" style="width: 20rem">
        <div class="card-body">
            <i class="bi bi-journal-text"></i>
            <h5 class="card-title">${new Date(relatedCriminal.date).toLocaleDateString('en-US')}</h5>
            <p class="card-text">Suspect In Question - ${relatedCriminal.suspect}</p>
            <p class="card-text">${relatedCriminal.text}</p>
        </div>
        <div class="card-btns">
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="deleteNote-${note.id}">
                <i class="bi bi-trash"></i>Delete Note</button>
            
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="editNote-${note.id}">
                <i class="bi bi-pencil-square"></i>Edit Note</button>
        </div>
        </div>
        `
    })
}

// Retrieve all officers and create a HTML rendered list
export const NoteList = () => {
    getNotes()
    .then(getCriminals())
    .then(() => {
        const notesArray = useNotes();
        const criminalsArray = useCriminals();
        render(notesArray, criminalsArray)
    })

}

// Display all officers when its navbar link is clicked
notesNavLink.addEventListener("click", function () {
    document.querySelector('.filters-crime').innerHTML = "";
    NoteForm();
    NoteList();
 })
