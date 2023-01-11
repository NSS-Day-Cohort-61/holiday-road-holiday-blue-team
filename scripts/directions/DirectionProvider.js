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
        let startingCoordinates = {}
        let parkCoordinates = {}
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
        
        const directions = () => {
            return fetchDirections(startingCoordinates, parkCoordinates)
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

        fetchNashvilleCoordinates()
        .then(() => nashCoordinates())
        .then(() => directions())
        .then(() => htmlDirections())
    }}
    // if (clickEvent.target.className === "directionsButton") {
    //     const itineraries = getItineraries()
    //     const parks = getParks()
    //     const attractions = getAttractions()
    //     const eateries = getEateries()
    //     let parkCoordinates = {}
    //     let attractionCoordinates = {}
    //     let eateryCoordinates = {}
    //     for (const itinerary of itineraries) {
    //         for (const park of parks) {
    //             for (const attraction of attractions) {
    //                 for (const eatery of eateries) {
    //                     if (itinerary.parkId === park.id) {
    //                         parkCoordinates.latitude = park.latitude
    //                         parkCoordinates.longitude = park.longitude
    //                     }
    //                     if (itinerary.attractionId === attraction.id) {
    //                         const attractionFullState = stateAbbrToName(attraction.state)
    //                         const pushAttractionCoordinates = () => {
    //                             const attractionCoords = getAttractionCoordinates()
    //                             attractionCoords.map(attractionCoord => {
    //                                 if (attractionCoord.osm_value === "city") {
    //                                     attractionCoordinates.latitude = attractionCoord.point.lat
    //                                     attractionCoordinates.longitude = attractionCoord.point.lng
    //                                 }
    //                             })    
    //                         }
    //                         fetchAttractionCoordinates(attraction, attractionFullState)
    //                         .then(() => pushAttractionCoordinates())
    //                     }
    //                     if (itinerary.eateryId === eatery.id) {
    //                         const eateryFullState = stateAbbrToName(eatery.state)
    //                         const pushEateryCoordinates = () => {
    //                             const eateryCoords = getEateryCoordinates()
    //                             eateryCoords.map(eateryCoord => {
    //                                 if (eateryCoord.osm_value === "city") {
    //                                     eateryCoordinates.latitude = eateryCoord.point.lat
    //                                     eateryCoordinates.longitude = eateryCoord.point.lng
    //                                 }
    //                             })
    //                         }
    //                         fetchEateryCoordinates(eatery, eateryFullState)
    //                         .then(() => pushEateryCoordinates())
    //                     }
    //                 }    
    //             }
    //         }
    //     }  
    // }
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