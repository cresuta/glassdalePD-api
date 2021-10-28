import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"

const contentTarget = document.querySelector(".noteFormContainer");
// const contentTarget = document.querySelector(".current-list");

// Handle browser-generated click event in component
document.querySelector('body').addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
      if (!document.querySelector('#note-date').value || !document.querySelector('#note-suspect').value || !document.querySelector('#note-text').value) {
        alert('Please fill out the entire form.')
      } else {
        // Make a new object representation of a note
        const newNote = {
          date: document.querySelector('#note-date').value,
          suspect: document.querySelector('#note-suspect').value,
          text: document.querySelector('#note-text').value
        }

        // Clearing form values
        document.querySelector('#note-date').value = "";
        document.querySelector('#note-suspect').value = "";
        document.querySelector('#note-text').value = "";

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
      }
    }
})

export const NoteForm = () => {
//   contentTarget.innerHTML = `
    
//     <label for="noteDate">Date:</label>
//     <input type="date" name="noteDate" id="note-date" />
  
//     <label for="noteSuspect">Suspect In Question:</label>
//     <input type="text" name="noteSuspect" id="note-suspect" />

//     <label for="noteText">Notes:</label>
//     <textarea name="noteText" id="note-text" cols="30" rows="2"></textarea>

// <button
//   type="button"
//   class="btn btn-light btn-outline-dark"
//   id="saveNote"
// >
//   <i class="bi bi-journal-check"></i>
//   Save Note
// </button>
//   `

  contentTarget.innerHTML = `
    
  <form class="row g-3">
  <div class="col-md-12">
    <label for="noteDate" class="form-label">Date</label>
    <input type="date" name="noteDate" class="form-control" id="note-date">
  </div>
  <div class="col-md-12">
    <label for="noteSuspect" class="form-label">Suspect In Question:</label>
    <input type="text" name="noteSuspect" class="form-control" id="note-suspect" placeholder="Full Name">
  </div>
  <div class="col-12">
    <label for="noteText" class="form-label">Notes:</label>
    <input type="text" name="noteText" class="form-control" id="note-text" placeholder="...">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-light btn-outline-dark" id="saveNote">
    <i class="bi bi-journal-check"></i>Save Note</button>
  </div>
</form>
  `
}





