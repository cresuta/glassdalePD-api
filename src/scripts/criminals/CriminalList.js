import { useCriminals, getCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";
import { ConvictionSelect } from "../convictions/ConvictionSelect.js";
import { OfficerSelect } from "../officers/OfficerSelect.js";
import { getLocations, useLocations } from "../locations/locationDataProvider.js";
import { getCriminalFacilities, useCriminalFacilties } from "../locations/CriminalFacilityProvider.js";

const contentTarget = document.querySelector(".current-list");
const criminalNavLink = document.querySelector("#criminals-nav-link");


// Retrieve all criminals and create a HTML rendered list
export const CriminalList = (targetID,selectFilter) => {
    getLocations()
    .then(getCriminals)
    .then(getCriminalFacilities)
    .then(() => {

    contentTarget.innerHTML = "";

    const criminals = useCriminals();
    const facilities = useLocations();
    const criminalFacilities = useCriminalFacilties();

    // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
    if (targetID === "crimeSelect") {
        criminals = criminals.filter((singleCriminal) => {
           return singleCriminal ? singleCriminal.conviction === selectFilter : false;
        })
    } else if (targetID === "officerSelect") {
        criminals = criminals.filter((singleCriminal) => {
            return singleCriminal ? singleCriminal.arrestingOfficer === selectFilter : false;
         })
    }

    criminals.forEach((singleCriminal) => {
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

