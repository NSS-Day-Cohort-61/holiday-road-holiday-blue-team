import { fetchAttractionCoordinates, fetchDirections, fetchEateryCoordinates, fetchNashvilleCoordinates, getAttractionCoordinates, getAttractions, getDirections, getEateries, getEateryCoordinates, getItineraries, getNashvilleCoordinates, getParks } from "../data/provider.js";
import { stateAbbrToName } from "./DirectionsSupport.js";

//need to define an event listener to get coordinates from directions button from SavedItinerary
//need to get the coordinates of all four locations
//take those coordinates and feed them into the route api


document.addEventListener("click", clickEvent => {
    const itineraries = getItineraries()
    for (const itinerary of itineraries) {
        if (clickEvent.target.id === `directions-${itinerary.id}`) {
            const parks = getParks()
            const attractions = getAttractions()
            const eateries = getEateries()
            let startingCoordinates = {}
            let parkCoordinates = {}
            let attractionCoordinates = {}
            let eateryCoordinates = {}
            let eateryFullState = {}
            const nashCoordinates = () => {
                const cords = getNashvilleCoordinates()
                startingCoordinates.latitude = cords[0].point.lat
                startingCoordinates.longitude = cords[0].point.lng
            }
            for (const park of parks) {
                if (itinerary.parkId === park.id) {
                    parkCoordinates.latitude = park.latitude
                    parkCoordinates.longitude = park.longitude
                }
            }
            for (const eatery of eateries) {
                if (itinerary.eateryId === eatery.id) {
                    eateryFullState.city = eatery.city
                    eateryFullState.state = stateAbbrToName(eatery.state)
                }
            }
            for (const attraction of attractions) {
                if (itinerary.attractionId === attraction.id) {
                    const attractionFullState = stateAbbrToName(attraction.state)
                    fetchAttractionCoordinates(attraction, attractionFullState)
                    .then(() => {
                        const attractionLocations = getAttractionCoordinates()
                        attractionLocations.map(attractionLocation => {
                            if (attractionLocation.osm_value === "city" || attractionLocation.osm_value === "town" || attractionLocation.osm_value === "village") {
                                attractionCoordinates.latitude = attractionLocation.point.lat
                                attractionCoordinates.longitude = attractionLocation.point.lng
                            }
                        })
                    })
                    .then(() => fetchEateryCoordinates(eateryFullState))
                    .then(() => {
                        const eateryLocations = getEateryCoordinates()
                        eateryLocations.map(eateryLocation => {
                            if (eateryLocation.osm_value === "city" || eateryLocation.osm_value === "town" || eateryLocation.osm_value === "village") {
                                eateryCoordinates.latitude = eateryLocation.point.lat
                                eateryCoordinates.longitude = eateryLocation.point.lng
                            }
                        })
                    })
                    .then(() => fetchNashvilleCoordinates())
                    .then(() => nashCoordinates())
                    .then(() => fetchDirections(startingCoordinates, attractionCoordinates, eateryCoordinates, parkCoordinates))
                    .then(() => htmlDirections())

                                
                }
            }
                    
        }
    }

            const htmlDirections = () => {
                const directions = getDirections()
                let html = "<ol>"
                    directions.map(direction => {
                        direction.instructions.map(instruction => {
                            if (Math.abs(instruction.distance*0.000621371192) === 0 ) {
                                html += `<li>${instruction.text}</li>` 
                            }
                            else if (Math.abs(instruction.distance*0.000621371192) <= 0.25) {
                                html += `<li>${instruction.text} for ${Math.round(instruction.distance*3.2808)} feet</li>` 
                            }
                            else { 
                                html += `<li>${instruction.text} for ${Math.abs(instruction.distance*0.000621371192).toFixed(2)} miles</li>`
                            }    
                        }).join("")
                    })
                    
                html += "</ol>"     
                document.querySelector(".routeDirections").innerHTML = html
            }
    
})

//need to define a function that feeds into grasshopper and displays directions
export const Directions = () => {
    const parks = getParks()
    const itineraries = getItineraries()

    let html = "<ul>"
    
    itineraries.map(itinerary => {
        parks.map(park => {
                if (park.id === itinerary.parkId) {
                    html += `
                    <li>
                    ${park.fullName}
                    </li>
                    `
                }
        })
    })

    html += "</ul>"
    return html
}