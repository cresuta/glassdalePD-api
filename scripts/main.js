import { displayCriminals } from "./criminals/CriminalList.js";
import { criminalListContainer } from "./criminals/CriminalList.js";
import { displayOfficers } from "./officers/OfficerList.js";
import { officerListContainer } from "./officers/OfficerList.js";
import {displayLocations} from "./locations/LocationList.js";
import { locationListContainer } from "./locations/LocationList.js";

const clearContent = () => {
    const home = document.querySelector('#home-nav-link');
    home.addEventListener("click", function () {
      officerListContainer.innerHTML = "";
      criminalListContainer.innerHTML = "";
      locationListContainer.innerHTML = "";
    })
} 

displayCriminals();
displayOfficers();
displayLocations();
clearContent();



  