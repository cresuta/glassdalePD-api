import { getOfficers, userOfficers } from "./OfficerDataProvider.js";
import { Officer } from "./Officer.js";

const contentTarget = document.querySelector('#container');

export const OfficerList = () => {
    getOfficers()
    .then(() => {
    let officersArray = userOfficers();
    let officerHTML = ""
    officersArray.forEach(singleOfficer => {
        officerHTML += Officer(singleOfficer);
    })
    
    contentTarget.innerHTML = officerHTML
})
}