import {useNotes, updateNote, getNotes} from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".noteFormContainer")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("saveNote")) {
        
      const editedNote = {
            id: parseInt(clickEvent.target.id.split("-")[1]),
            date: document.querySelector('#note-date').value,
            criminalId: parseInt(document.querySelector('#note-suspect').value),
            text: document.querySelector('#note-text').value
        }

        updateNote(editedNote)
        .then(NoteList)
    }
})

export const NoteEditForm = (noteId) => {
  getCriminals()
  .then(getNotes)
    .then(() => {
        const notesArray = useNotes();
        const criminalsArray = useCriminals();
      
        const noteWeWantToEdit = notesArray.find(singleNote => singleNote.id === noteId)
        const criminalWeWantToEdit = criminalsArray.find(criminal => criminal.id === noteWeWantToEdit.criminalId)
      
            contentTarget.innerHTML = `
            <div class="edit-form row g-3 text-white bg-secondary"> 
            <h2>Edit Note</h2>     
      <div class="col-md-12">
        <label for="noteDate" class="form-label">Date</label>
        <input type="date" name="noteDate" class="form-control" id="note-date" value="${noteWeWantToEdit.date}">
      </div>
      <div class="col-md-12">
        <label for="noteSuspect" class="form-label">Suspect In Question:</label>
        <select name="noteSuspect" class="criminalSelect form-control" id="note-suspect">
        <option value="${noteWeWantToEdit.criminalId}">${criminalWeWantToEdit.name}</option>
        ${
          criminalsArray.map((criminal) => {
              return `<option value="${criminal.id}">${criminal.name}</option>`
          })
        }
        </select> 
      </div>
      <div class="col-12">
        <label for="noteText" class="form-label">Notes:</label>
        <input type="text" class="form-control" name="noteText" value="${noteWeWantToEdit.text}" id="note-text">
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-light btn-outline-dark" id="saveNote-${noteWeWantToEdit.id}">
        <i class="bi bi-journal-check"></i>Save Note</button>
      </div>
        </div>
          `
    })
}
