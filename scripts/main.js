import { fetchAttractions, fetchEateries, fetchEvents, fetchItinerary, fetchParks, } from "./data/provider.js"
import { HolidayRoad } from "./HolidayRoad.js"


const applicationElement = document.querySelector("#holidayRoad")

export const renderApp = () => {
    fetchAttractions()
    .then(() => fetchEateries())
    .then(() => fetchParks())
    .then(() => fetchItinerary())
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


