import { getAttractions, getEateries, getItineraries, getParks } from "./provider.js";

export const displayItineraries = () => {
    const itineraries = getItineraries()
    const parks = getParks()
    const attractions = getAttractions()
    const eatery = getEateries()

  
  let html =  itineraries.map(
        item => {
            return `<div class="itinDisplay"> 
                    ${
                        parks.map(
                            park => {
                                if( item.parkId === park.id) {
                                    return park.name
                                }
                            }
                        ).join("")
                    }
                    <br>
                    ${
                        attractions.map(
                            attraction => {
                                if( item.attractionId === attraction.id) {
                                    return attraction.name
                                }
                            }
                        ).join("")
                    }
                    <br>
                    ${
                        eatery.map(
                            eat => {
                                if( item.eateryId === eat.id) {
                                    return eat.businessName
                                }
                            }
                        ).join("")
                    }
                    <button style="width:100px" id="directions-${item.id}" class="directionsButton">Get Directions</button>
                    </div>`

        }
    ).join("")
    
    return html
        
}