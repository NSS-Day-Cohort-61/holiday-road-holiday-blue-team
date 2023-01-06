import { attractionList } from "./attractions/AttractionProvider.js"
import { Parks } from "./parks/ParkProvider.js"
import { Eateries } from "./eateries/EateryProvider.js"


export const HolidayRoad = () => {
    return `
      <h2>Holiday Road</h2>
    
      <div class="dropdownBoxes">
        <div class="parkDropdown dropdown">
          <select>
            <option> Select National Park </option> 
            ${Parks()} 
          </select>
        </div>
  
        <div class="bizarreDropdown dropdown">
          <select>
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
          <div class="optionsDisplay">
            <h3>Your Itinerary</h3>
            
            <div class="chosenPark chosen">Park</div>
            <div class="chosenBizarre chosen"> Selected  Attraction </div>
            <div class="chosenEatery chosen">Selected Eatery</div>
              
        <div class="detailsDisplay" id="changeDisplay"></div>
  
          <button style="width:100px" class="saveButton">Save Itinerary</button>
          </div>
  
          <div class="weatherDisplay">
          <h3>Weather</h3>
          </div>
        </div>
  
        <div class="savedOptions">
          <h3>Saved Itinerary List</h3>
          
        </div>
  
  
      </div>
      `
  }