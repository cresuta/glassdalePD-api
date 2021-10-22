import { getLocations, useLocations } from "./locationDataProvider.js";
import { Location } from "./Location.js";

export const locationList = () => {
    const locationContainer = document.querySelector('.location-list');

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