import { getLocations, useLocations } from "./locationDataProvider.js";
import { Location } from "./Location.js";

const locationContainer = document.querySelector('.location-list');
const locationNavLink = document.querySelector('#facilitiesnav-link');

const locationList = () => {

    getLocations()
    .then(() => {
        let locationArray = useLocations();
        let locationListHTMLRepresentation = "";
        locationArray.forEach(singleLocation => {
            locationListHTMLRepresentation += Location(singleLocation);
        })

        locationContainer.innerHTML = locationListHTMLRepresentation;
    })
}

export const displayLocations = () => {
    locationNavLink.addEventListener("click", function () {
        locationList();
    })
}