import {useNotes} from "./NoteDataProvider.js"

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".noteFormContainer")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("saveNote")) {
        const editedNote = {
            id: 1,
            date: document.querySelector('#note-date').value,
            suspect: document.querySelector('#note-suspect').value,
            text: document.querySelector('#note-text').value
        }
    }
})

export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = useNotes();

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
    <div class="edit-form"> 
        <h2 class="editNote-heading">Edit Note</h2>     
  <div class="col-md-12">
    <label for="noteDate" class="form-label">Date</label>
    <input type="date" name="noteDate" class="form-control" id="note-date" value="${(noteWeWantToEdit.date)}">
  </div>
  <div class="col-md-12">
    <label for="noteSuspect" class="form-label">Suspect In Question:</label>
    <input type="text" name="noteSuspect" class="form-control" id="note-suspect" placeholder="Full Name" value="${noteWeWantToEdit.suspect}">
  </div>
  <div class="col-12">
    <label for="noteText" class="form-label">Notes:</label>
    <input type="text" class="form-control" name="noteText" value="${noteWeWantToEdit.text}" id="note-suspect" />
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-light btn-outline-dark" id="saveNote-${noteId}">
    <i class="bi bi-journal-check"></i>Save Note</button>
  </div>
    </div>
    `
}
