import { attractionList } from "./attractions/AttractionProvider.js"
import { Parks } from "./parks/ParkProvider.js"
import { Eateries } from "./eateries/EateryProvider.js"
import { getAttractions, getEateries, getParks, saveItinerary } from "./data/provider.js"
import { displayItineraries } from "./data/SavedItinerary.js"

const mainContainer = document.querySelector("#holidayRoad")

mainContainer.addEventListener("click", clickEvent => {
  if (clickEvent.target.className === "saveButton") {
      const selectedPark = document.querySelector("select[class='park']").value
      const userAttraction = document.querySelector("select[name='attraction']").value
      const [, selectedAttraction] = userAttraction.split("__")
      const userEatery = document.querySelector("select[name='eatery']").value
      const [, selectedEatery] = userEatery.split("__")
      
      
      const sendToApi = {
          parkId: selectedPark,
          attractionId: parseInt(selectedAttraction),
          eateryId: parseInt(selectedEatery)
      }
      if (!sendToApi.parkId || selectedPark === "Select National Park") {
        document.querySelector(".chosenPark").innerHTML = "Please select a park"
      }
      else if (!sendToApi.attractionId) {
        document.querySelector(".chosenBizarre").innerHTML = "Please select an attraction"
      }
      else if (!sendToApi.eateryId) {
        document.querySelector(".chosenEatery").innerHTML = "Please select an eatery"
      }
      else {
        saveItinerary(sendToApi)
      }
      
      
  }
})

const searchBar = () => {
  const attractions = getAttractions()
  const eateries = getEateries()
  const parks = getParks()

  let html = ""

  html += attractions.map(
    biz => {
      return `<a href="#">
      <div class='search-ticket' id="search-biz-${biz.id}"> ${biz.name} </div>
      </a>`
    }
  ).join("")
   
  html += eateries.map(
    eat => {
      return `<a href="#">
      <div class='search-ticket' id="search-eat-${eat.id}"> ${eat.businessName} </div>
      </a>`
    }
  ).join("")

  html += parks.map(
    park => {
      return ` <a href="#">
      <div class='search-ticket' id="search-park-${park.id}"> ${park.fullName} </div>
      </a>`
    }
  ).join("")

  
  return html
  
}









export const HolidayRoad = () => {
    return `

      <div class="dropdownBoxes">
         
        <div class="parkDropdown dropdown">
          <select class="park">
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
        <div class="search" id='search-container'>
          <input type="search" id="search" placeholder="Search" >
          <div class="search-box" id='search-box-2'>
          ${searchBar()}
           
          </div>
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
          ${displayItineraries()}
        </div>
  
  
      </div>
      `
  }

  mainContainer.addEventListener("click", clickEvent => {
    // if (clickEvent.target.id === "search") {

      document.getElementById('search-box-2').style.visibility = 'hidden'
      document.getElementById('search-box-2').style.opacity = 0
    
    // }
  })



  document.addEventListener('keyup', () => {
    let filter = document.getElementById('search').value.toUpperCase();
    let a = document.getElementById('search-box-2').getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
      let b = a[i].getElementsByClassName('search-ticket')[0];
     
      
      let TextValue = b.textContent || b.innerText;
      if (TextValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = ''
        document.getElementById('search-box-2').style.visibility = 'visible'
        document.getElementById('search-box-2').style.opacity = 1
      } else {
        a[i].style.display = 'none'
      }
      if (document.getElementById('search').value == 0) {
        document.getElementById('search-box-2').style.visibility = 'hidden'
        document.getElementById('search-box-2').style.opacity = 0
      }
    }
    
  })
  
