import { useOfficers, getOfficers } from "./OfficerDataProvider.js";

const contentTarget = document.querySelector(".filters-officers");
const eventHub = document.querySelector("body");

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
        const officers = useOfficers();
        render(officers);
    })
}

const render = (officersCollection) => {
    contentTarget.innerHTML = `
        <select class="form-select dropdown" id="officerSelect">
            <option value="0">Filter by officer...</option>
            ${
                officersCollection.map((officer) => {
                    const officerName = officer.name;
                    return `<option>${officerName}</option>`
                })
            }
        </select>
    `
}