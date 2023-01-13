import { fetchAttractionCoordinates, getItineraryAttractions, getItineraryEateries, fetchDirections, fetchEateryCoordinates, fetchNashvilleCoordinates, getAttractionCoordinates, getAttractions, getDirections, getEateries, getEateryCoordinates, getItineraries, getNashvilleCoordinates, getParks } from "../data/provider.js";
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
            const itineraryEatery = getItineraryEateries()
            const itineraryAttractions = getItineraryAttractions()
            let startingCoordinates = {}
            let parkCoordinates = {}
            let attractionCoordinates = ""
            let eateryCoordinates = ""
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
            for (const iE of itineraryEatery){
                if (iE.postId === itinerary.id){
            for (const eatery of eateries) {
                if (iE.eateryId === eatery.id) {
                    eateryFullState.city = eatery.city
                    eateryFullState.state = stateAbbrToName(eatery.state)
                }}
            }}
            for (const iA of itineraryAttractions){
                if (iA.postId === itinerary.id){
            for (const attraction of attractions) {
                if (iA.attractionId === attraction.id) {
                    const attractionFullState = stateAbbrToName(attraction.state)
                    fetchAttractionCoordinates(attraction, attractionFullState)
                    .then(() => {
                        const attractionLocations = getAttractionCoordinates()
                        attractionLocations.map(attractionLocation => {
                            if (attractionLocation.osm_value === "city" || attractionLocation.osm_value === "town" || attractionLocation.osm_value === "village") {
                                attractionCoordinates += `&point=${attractionLocation.point.lat},`
                                attractionCoordinates += `${attractionLocation.point.lng}`
                            }
                        })
                    })
                    .then(() => fetchEateryCoordinates(eateryFullState))
                    .then(() => {
                        const eateryLocations = getEateryCoordinates()
                        eateryLocations.map(eateryLocation => {
                            if (eateryLocation.osm_value === "city" || eateryLocation.osm_value === "town" || eateryLocation.osm_value === "village") {
                                eateryCoordinates += `&point=${eateryLocation.point.lat},`
                                eateryCoordinates += `${eateryLocation.point.lng}`
                            }
                        })
                    })
                    .then(() => fetchNashvilleCoordinates())
                    .then(() => nashCoordinates())
                    .then(() => fetchDirections(startingCoordinates, attractionCoordinates, eateryCoordinates, parkCoordinates))
                    .then(() => htmlDirections())

                                
                }}
            }}
                    
        }
    }

            const htmlDirections = () => {
                const directions = getDirections()
                let html = "<h2>Directions</h2>"
                let htmlInfo = "<h2>Info</h2>"
                directions.map(direction => {
                    htmlInfo += `<div>Total Distance: ${(direction.distance*0.000621371192).toFixed(2)} Miles</div>`
                    htmlInfo += `<div>Total Time: ${(direction.time/3600000).toFixed(2)} Hours</div>`                
                    
                    html += `<div class="instructions">`
                    html += `<div class="start">`
                    html += "<ol>"
                    direction.instructions.map(instruction => {                        
                        if (Math.abs(instruction.distance*0.000621371192) === 0) { ///assigns class to waypoint 1, waypoint 2, and national park
                            html += `</ol>
                                    </div>
                                    <div class="points">
                                    <ol>
                                    <li class="wayPoints">${instruction.text}</li>
                                    `
                        }
                        else if (Math.abs(instruction.distance*0.000621371192) <= 0.25) {
                            html += `<li>${instruction.text} for ${Math.round(instruction.distance*3.2808)} feet</li>` 
                        }
                        else { 
                            html += `<li>${instruction.text} for ${Math.abs(instruction.distance*0.000621371192).toFixed(2)} miles</li>`
                        }
                    }).join("")
                    html += "</ol>"     
                    html += "</div>"
                    html += "</div>"
                    html += `<div class="info"></div>`
                })
                    
                document.querySelector(".routeDirections").innerHTML = html
                document.querySelector(".info").innerHTML = htmlInfo
            }
    
})


export const Directions = () => {

    let html = "<div>Please select an itinerary to display directions</div>"
    
    return html
}