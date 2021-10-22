import { useCriminals, getCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";

export const criminalList = () => {
    const criminalContainer = document.querySelector('.criminal-list');

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