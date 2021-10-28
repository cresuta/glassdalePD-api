import { useConvictions, getConvictions } from "./ConvictionDataProvider.js";
import { CriminalList } from "../criminals/CriminalList.js";
import { Criminal } from "../criminals/Criminal.js";

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
    console.log("Element you clicked on: ", eventObj.target)

    if(eventObj.target.id === "crimeSelect"){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObj.target.value)
        CriminalList(eventObj.target.value)
    }
})

const render = (convictionsCollection) => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map((conviction) => {
                    const convictionName = conviction.name;
                    return `<option>${convictionName}</option>`
                })
            }
        </select>
    `
}