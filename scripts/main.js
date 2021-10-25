import { displayCriminals } from "./criminals/CriminalList.js";
import { displayOfficers } from "./officers/OfficerList.js"
import {displayLocations} from "./locations/LocationList.js"

displayCriminals();
displayOfficers();
displayLocations();

const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
    const bodyElement = document.querySelector('body');
    bodyElement.classList.toggle("dark-background");
  })
  