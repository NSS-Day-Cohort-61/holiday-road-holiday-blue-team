import { attractionList } from "./attractions/AttractionProvider.js"
import { Parks } from "./parks/ParkProvider.js"
import { Eateries } from "./eateries/EateryProvider.js"
import { saveItinerary } from "./data/provider.js"

const mainContainer = document.querySelector("#holidayRoad")

mainContainer.addEventListener("click", clickEvent => {
  if (clickEvent.target.className === "saveButton") {
      const selectedPark = document.querySelector("option[class='park']").value
      const userAttraction = document.querySelector("select[name='attraction']").value
      const [, selectedAttraction] = userAttraction.split("__")
      const userEatery = document.querySelector("select[name='eatery']").value
      const [, selectedEatery] = userEatery.split("__")
      
      
      const sendToApi = {
          parkId: selectedPark,
          attractionId: parseInt(selectedAttraction),
          eateryId: parseInt(selectedEatery)
      }

      saveItinerary(sendToApi)
  }
})

export const HolidayRoad = () => {
    return `

      <div class="dropdownBoxes">
        <div class="parkDropdown dropdown">
          <select>
            <option> Select National Park </option> 
            ${Parks()} 
          </select>
        </div>
  
        <div class="bizarreDropdown dropdown">
          <select  name="attraction">
            <option> Select Attraction </option>
            ${attractionList()}
          </select> 
        </div>
  
        <div class="eateryDropdown dropdown">
          ${Eateries()}
        </div>
      </div>
      
      <div class="mainContent">
        <div class="chosenOptions">
          <div class="optionsDisplay" id="optionOption">
            <h2>Your Itinerary</h2>
            
            <div class="chosenPark chosen" id="parkPark">Selected Park</div>
            <div class="chosenBizarre chosen" id=bizBiz> Selected  Attraction </div>
            <div class="chosenEatery chosen" id="eatEat">Selected Eatery</div>
            
            <div class="detailsDisplay" id="displayDisplay"></div>
  
              <button style="width:100px" class="saveButton">Save Itinerary</button>
          </div>
          
          <div class="weatherDisplay">
          <h2>Weather</h2>
          <div class="trueWeatherDisplay">
          </div>
          </div>
          
          </div>
  
        <div class="savedOptions">
          <h2>Saved Itinerary List</h2>
          
        </div>
  
  
      </div>
      `
  }