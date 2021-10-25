import { getLocations, useLocations } from "./locationDataProvider.js";
import { Location } from "./Location.js";

export const locationListContainer = document.querySelector('.location-list');
const locationNavLink = document.querySelector('#facilitiesnav-link');

// Retrieve all locations and create a HTML rendered list
const locationList = () => {

    getLocations()
    .then(() => {
        let locationArray = useLocations();
        let locationListHTML = "";
        locationArray.forEach(singleLocation => {
            locationListHTML += Location(singleLocation);
        })

        locationListContainer.innerHTML = locationListHTML;
    })
}

// Display all locations when its navbar link is clicked
export const displayLocations = () => {
    locationNavLink.addEventListener("click", function () {
        locationList();
    })
}