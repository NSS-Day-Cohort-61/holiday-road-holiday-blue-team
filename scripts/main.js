import { fetchAttractions, fetchEateries, fetchEvents, fetchItinerary, fetchItineraryAttractions, fetchItineraryEateries, fetchParks, } from "./data/provider.js"
import { HolidayRoad } from "./HolidayRoad.js"


const applicationElement = document.querySelector("#holidayRoad")

export const renderApp = () => {
    fetchAttractions()
    .then(() => fetchItineraryAttractions())
    .then(() => fetchEateries())
    .then(() => fetchItineraryEateries())
    .then(() => fetchItinerary())
    .then(() => fetchParks())
    .then(() => fetchEvents())
    .then(
        () => {
            applicationElement.innerHTML = HolidayRoad()
        }
    )

}

renderApp()

applicationElement.addEventListener(
    "stateChanged",
    customEvent => {
        renderApp()
    }
)


