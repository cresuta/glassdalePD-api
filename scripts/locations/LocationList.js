import { getLocations, useLocations } from "./locationDataProvider.js";
import { Location } from "./Location.js";

const contentTarget = document.querySelector(".current-list");
const locationNavLink = document.querySelector('#facilitiesnav-link');

// Retrieve all locations and create a HTML rendered list
export const LocationList = () => {

    getLocations()
    .then(() => {
        let locationArray = useLocations();
        let locationListHTML = "";
        locationArray.forEach(singleLocation => {
            locationListHTML += Location(singleLocation);
        })

        contentTarget.innerHTML = `
            <h2 class="heading">Locations</h2>
            ${locationListHTML}
        `
    })
}

// Display all locations when its navbar link is clicked
locationNavLink.addEventListener("click", function () {
    LocationList();
})
