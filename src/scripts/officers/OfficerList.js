import { getOfficers, useOfficers } from "./OfficerDataProvider.js";
import { Officer } from "./Officer.js";
import { OfficerSelect } from "./OfficerSelect.js";

const contentTarget = document.querySelector(".current-list");
const officersNavLink = document.querySelector('#officers-nav-link');

// Retrieve all officers and create a HTML rendered list
export const OfficerList = (officerFilter) => {
    getOfficers()
    .then(() => {
    let officersArray = useOfficers();
    let officerListHTML = "";
    officersArray.forEach((singleOfficer) => {
        officerListHTML += Officer(singleOfficer);
    })
    
    contentTarget.innerHTML = `
        <h2 class="heading">Officers</h2>
        ${officerListHTML}
    `
})
}

// Display all officers when its navbar link is clicked
officersNavLink.addEventListener("click", function () {
    document.querySelector('.filters-crime').innerHTML = "";
    document.querySelector('.noteFormContainer').innerHTML = "";
    OfficerList();
 })

