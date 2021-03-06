import { useConvictions, getConvictions } from "./ConvictionDataProvider.js";
import { CriminalList } from "../criminals/CriminalList.js";

const contentTarget = document.querySelector(".filters-crime");
const eventHub = document.querySelector("body");

export const ConvictionSelect = () => {
    getConvictions()
    .then(() => {
        const convictions = useConvictions();
        render(convictions);
    })
}

eventHub.addEventListener("change", (eventObj) => {
    if(eventObj.target.id === "crimeSelect"){
        CriminalList("crimeSelect",eventObj.target.value)
    } else if (eventObj.target.id === "officerSelect") {
        CriminalList("officerSelect",eventObj.target.value)
    }
})

const render = (convictionsCollection) => {
    contentTarget.innerHTML = `
        <h2 class="heading">Criminals</h2>
        <select class="form-select dropdown" id="crimeSelect">
            <option value="0">Filter by crime...</option>
            ${
                convictionsCollection.map((conviction) => {
                    const convictionName = conviction.name;
                    return `<option>${convictionName}</option>`
                })
            }
        </select>
    `
}