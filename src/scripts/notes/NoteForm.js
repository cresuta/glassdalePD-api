import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";

const contentTarget = document.querySelector(".noteFormContainer");

document.querySelector('body').addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
      if (!document.querySelector('#note-date').value || !document.querySelector('#note-suspect').value || !document.querySelector('#note-text').value) {
        alert('Please fill out the entire form.')
      } else {
        
        const newNote = {
          date: document.querySelector('#note-date').value,
          criminalId: parseInt(document.querySelector('#note-suspect').value),
          text: document.querySelector('#note-text').value
        }

        // Clearing form values
        document.querySelector('#note-date').value = "";
        document.querySelector('#note-suspect').value = "";
        document.querySelector('#note-text').value = "";

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList)
      }
    }
})

export const NoteForm = () => {
  getCriminals()
  .then(() => {
    const criminalsCollection = useCriminals();
    contentTarget.innerHTML = `
  <form class="row g-3 note-form text-white bg-secondary">
  <h2>Note Form</h2>
  <div class="col-md-12">
    <label for="noteDate" class="form-label">Date</label>
    <input type="date" name="noteDate" class="form-control" id="note-date">
  </div>
  <div class="col-md-12">
    <label for="noteSuspect" class="form-label">Suspect In Question:</label>
    <select name="noteSuspect" class="criminalSelect form-control" id="note-suspect">
      <option value="0">Select a criminal...</option>
            ${
                criminalsCollection.map((criminal) => {
                    return `<option value="${criminal.id}">${criminal.name}</option>`
                })
            }
    </select> 
  </div>
  <div class="col-12">
    <label for="noteText" class="form-label">Notes:</label>
    <input type="text" name="noteText" class="form-control" id="note-text" />
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-light btn-outline-dark" id="saveNote">
    <i class="bi bi-journal-check"></i>Save Note</button>
  </div>
</form>
  `
  })
  
}





