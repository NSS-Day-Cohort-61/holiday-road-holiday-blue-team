import { fetchAttractions, fetchEateries, fetchParks, fetchWeather } from "./data/provider.js"
import { HolidayRoad } from "./HolidayRoad.js"


const applicationElement = document.querySelector("#holidayRoad")

export const renderApp = () => {
    fetchAttractions()
    .then(() => fetchEateries())
    .then(() => fetchParks())
    .then(() => fetchWeather())
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