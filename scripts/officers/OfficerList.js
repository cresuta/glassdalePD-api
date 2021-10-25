import { getOfficers, useOfficers } from "./OfficerDataProvider.js";
import { Officer } from "./Officer.js";

const officerListContainer = document.querySelector('.officer-list');
const officerNavLink = document.querySelector('#officers-nav-link');

// Retrieve all officers and create a HTML rendered list
const OfficerList = () => {
    getOfficers()
    .then(() => {
    let officersArray = useOfficers();
    let officerListHTML = ""
    officersArray.forEach(singleOfficer => {
        officerListHTML += Officer(singleOfficer);
    })
    
    officerListContainer.innerHTML = officerListHTML
})
}

// Display all officers when its navbar link is clicked
export const displayOfficers = () => {
    officerNavLink.addEventListener("click", function () {
        OfficerList();
    })
}