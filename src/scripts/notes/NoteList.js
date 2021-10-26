import { Note } from "./Note.js";
import { getNotes,useNotes } from "./NoteDataProvider.js";
import { NoteForm } from "./NoteForm.js";

const notesNavLink = document.querySelector('#notes-nav-link');
const contentTarget = document.querySelector(".noteFormContainer");

// Retrieve all officers and create a HTML rendered list
export const NoteList = () => {
    getNotes()
    .then(() => {
    let notesArray = useNotes();
    let noteListHTML = "";
    notesArray.forEach((singleNote) => {
        noteListHTML += Note(singleNote);
    })
    
    contentTarget.innerHTML = `
        <h2 class="heading">Notes</h2>
        ${noteListHTML}
    `
})
}

// Display all officers when its navbar link is clicked
notesNavLink.addEventListener("click", function () {
    NoteForm();
    NoteList();
 })
