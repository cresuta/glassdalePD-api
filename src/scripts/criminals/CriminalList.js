import { useCriminals, getCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";
import { ConvictionSelect } from "../convictions/ConvictionSelect.js";
import { OfficerSelect } from "../officers/OfficerSelect.js";

const contentTarget = document.querySelector(".current-list");
const criminalNavLink = document.querySelector("#criminals-nav-link");


// Retrieve all criminals and create a HTML rendered list
export const CriminalList = (targetID,selectFilter) => {

    contentTarget.innerHTML = "";
    
    getCriminals()
    .then(() => {
        let criminalArray = useCriminals();

    // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
    if (targetID === "crimeSelect") {
        criminalArray = criminalArray.filter((singleCriminal) => {
           return singleCriminal ? singleCriminal.conviction === selectFilter : false;
        })
    } else if (targetID === "officerSelect") {
        criminalArray = criminalArray.filter((singleCriminal) => {
            return singleCriminal ? singleCriminal.arrestingOfficer === selectFilter : false;
         })
    }

    criminalArray.forEach((singleCriminal) => {
        contentTarget.innerHTML += Criminal(singleCriminal);
    });
    })
    
}

// Display all criminals when its navbar link is clicked
criminalNavLink.addEventListener("click", function () {
    document.querySelector('.noteFormContainer').innerHTML = "";
    ConvictionSelect();
    OfficerSelect();
    CriminalList();
})

