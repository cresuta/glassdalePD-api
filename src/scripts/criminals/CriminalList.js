import { useCriminals, getCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";

const contentTarget = document.querySelector(".current-list");
const criminalNavLink = document.querySelector("#criminals-nav-link");


// Retrieve all criminals and create a HTML rendered list
export const CriminalList = (convictionFilter) => {

    contentTarget.innerHTML = "";

    getCriminals()
    .then(() => {
        let criminalArray = useCriminals();
        // let criminalListHTML = "";
    
    // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
    if (convictionFilter) {
        criminalArray = criminalArray.filter((singleCriminal) => {
            if (singleCriminal.conviction === convictionFilter) {
                return true
            } else {
                return false
            }
            // return singleCriminal ? singleCriminal.conviction === convictionFilter : false;
        })
    }

    criminalArray.forEach((singleCriminal) => {
        contentTarget.innerHTML += Criminal(singleCriminal);
    });

    // contentTarget.innerHTML = `
    //     <h2>Criminals</h2>
    //     ${criminalListHTML}
    // `
    })
    
}

// Display all criminals when its navbar link is clicked
criminalNavLink.addEventListener("click", function () {
    CriminalList();
})

