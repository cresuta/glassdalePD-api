import { getOfficers, useOfficers } from "./OfficerDataProvider.js";
import { Officer } from "./Officer.js";

const officerContainer = document.querySelector('.officer-list');
const officerNavLink = document.querySelector('#officers-nav-link');

const OfficerList = () => {
    getOfficers()
    .then(() => {
    let officersArray = useOfficers();
    let officerHTML = ""
    officersArray.forEach(singleOfficer => {
        officerHTML += Officer(singleOfficer);
    })
    
    officerContainer.innerHTML = officerHTML
})
}

export const displayOfficers = () => {
    officerNavLink.addEventListener("click", function () {
        OfficerList();
    })
}