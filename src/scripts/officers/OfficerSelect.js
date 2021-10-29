import { useOfficers, getOfficers } from "./OfficerDataProvider.js";
import { OfficerList } from "./OfficerList.js";

const contentTarget = document.querySelector(".filters-officers");
const eventHub = document.querySelector("body");

export const OfficersSelect = () => {
    getOfficers()
    .then(() => {
        const officers = useOfficers();
        render(officers);
    })
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value
        OfficerList(selectedOfficer);
    }
})

const render = (officersCollection) => {
    contentTarget.innerHTML = `
        <h2 class="heading">Criminals</h2>
        <select class="form-select dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
        </select>
        <select class="form-select dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map((officer) => {
                    const officerName = officer.name;
                    return `<option>${convictionName}</option>`
                })
            }
        </select>
    `
}