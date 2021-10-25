import { useCriminals, getCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";

const criminalListContainer = document.querySelector('.criminal-list');
const criminalNavLink = document.querySelector("#criminals-nav-link");

// Retrieve all criminals and create a HTML rendered list
const criminalList = () => {

    getCriminals()
    .then(() => {
        let criminalArray = useCriminals();
        let criminalListHTML = "";

    criminalArray.forEach(singleCriminal => {
        criminalListHTML += Criminal(singleCriminal);
    });

    criminalListContainer.innerHTML = criminalListHTML;
    })
    
}

// Display all criminals when its navbar link is clicked
export const displayCriminals = () => {
    criminalNavLink.addEventListener("click", function () {
        criminalList();
    })
}
