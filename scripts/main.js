import { HolidayRoad } from "./HolidayRoad.js"

const applicationElement = document.querySelector("#holidayRoad")
export const renderApp = () => {
  applicationElement.innerHTML = HolidayRoad()
}

renderApp()