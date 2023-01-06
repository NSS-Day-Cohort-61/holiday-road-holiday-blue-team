import { HolidayRoad } from "./HolidayRoad.js"
import { fetchEateries, fetchAttractions, fetchWeather, fetchParks } from "./data/provider.js"

const applicationElement = document.querySelector("#holidayRoad")

export const renderApp = () => {
  fetchAttractions()
  .then(() => fetchEateries())
  .then(() => fetchParks())
  .then(
      () => {
          applicationElement.innerHTML = HolidayRoad()
      }
  )

}

renderApp()