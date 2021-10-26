import { useCriminals, getCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";

const contentTarget = document.querySelector(".current-list");
const criminalNavLink = document.querySelector("#criminals-nav-link");

// Retrieve all criminals and create a HTML rendered list
export const CriminalList = () => {

    getCriminals()
    .then(() => {
        let criminalArray = useCriminals();
        let criminalListHTML = "";

    criminalArray.forEach(singleCriminal => {
        criminalListHTML += Criminal(singleCriminal);
    });

    contentTarget.innerHTML = `
        <h2>Criminals</h2>
        ${criminalListHTML}
    `
    })
    
}

// Display all criminals when its navbar link is clicked
criminalNavLink.addEventListener("click", function () {
    CriminalList();
})

