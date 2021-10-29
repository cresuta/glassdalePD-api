import { useCriminals, getCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";
import { ConvictionSelect } from "../convictions/ConvictionSelect.js";
import { getOfficers, useOfficers } from "../officers/OfficerDataProvider.js";
import { OfficersSelect } from "../officers/OfficerSelect.js";

const contentTarget = document.querySelector(".current-list");
const criminalNavLink = document.querySelector("#criminals-nav-link");


// Retrieve all criminals and create a HTML rendered list
export const CriminalList = (convictionFilter, officerFilter) => {

    contentTarget.innerHTML = "";

    getCriminals()
    .then(() => {
        let criminalArray = useCriminals();

    // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
    if (convictionFilter) {
        criminalArray = criminalArray.filter((singleCriminal) => {
           return singleCriminal ? singleCriminal.conviction === convictionFilter : false;
        })
    }

    criminalArray.forEach((singleCriminal) => {
        contentTarget.innerHTML += Criminal(singleCriminal);
    });
    })

    getOfficers()
    .then(() => {
        let officerArray = useOfficers();
    
        if (officerFilter) {
            officerArray = officerArray.filter((singleOfficer) => {
                return singleOfficer ? singleOfficer.name === singleCriminal.arrestingOfficer : false;
            })
        }
    })
    
}

// Display all criminals when its navbar link is clicked
criminalNavLink.addEventListener("click", function () {
    document.querySelector('.noteFormContainer').innerHTML = "";
    ConvictionSelect();
    OfficersSelect();
    CriminalList();
})

