import { useCriminals, getCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";

const criminalContainer = document.querySelector('.criminal-list');
const criminalNavLink = document.querySelector("#criminals-nav-link");

const criminalList = () => {

    getCriminals()
    .then(() => {
        let criminalArray = useCriminals();
        let criminalListHTMLRepresentation = "";

    criminalArray.forEach(singleCriminal => {
        criminalListHTMLRepresentation += Criminal(singleCriminal);
    });

    criminalContainer.innerHTML += `
        ${criminalListHTMLRepresentation}
    `
    })
    
}

export const displayCriminals = () => {
    criminalNavLink.addEventListener("click", function () {
        criminalList();
    })
}
