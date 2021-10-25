const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    contentTarget.innerHTML = `
    <form action="">
    <fieldset class=""> 
      <label for="noteDate">Date</label>
      <input type="date" name="noteDate" id="" />
    </fieldset>
    <fieldset class="">
      <label for="noteSuspect">Suspect In Question</label>
      <input type="text" name="noteSuspect" id="" />
    </fieldset>
    <fieldset class="noteText">
      <label for="noteText">Notes</label>
      <textarea name="noteText" id="" cols="30" rows="2"></textarea>
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

