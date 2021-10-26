import { saveNote } from "./NoteDataProvider"
import { NoteList } from "./NoteList"

const contentTarget = document.querySelector(".noteFormContainer")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {

      // Make a new object representation of a note
      const newNote = {
          date: document.querySelector('#note-date').value,
          suspect: document.querySelector('#note-suspect').value,
          text: document.querySelector('#note-text').value
      }

      // Change API state and application state
      saveNote(newNote)
      .then(NoteList) // Refresh your list of notes once you've saved your new one
  }
})

export const NoteForm = () => {
    contentTarget.innerHTML = `
    <form action="">
    <fieldset class=""> 
      <label for="noteDate">Date:</label>
      <input type="date" name="noteDate" id="note-date" />
    </fieldset>
    <fieldset class="">
      <label for="noteSuspect">Suspect In Question:</label>
      <input type="text" name="noteSuspect" id="note-suspect" />
    </fieldset>
    <fieldset class="noteText">
      <label for="noteText">Notes:</label>
      <textarea name="noteText" id="note-text" cols="30" rows="2"></textarea>
    </fieldset>
  </form>
  <button
    type="button"
    class="btn btn-light btn-outline-dark"
    id="saveNote"
  >
    <i class="bi bi-journal-check"></i>
    Save Note
  </button>
    `
}

