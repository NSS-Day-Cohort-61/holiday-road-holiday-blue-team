import { getAttractions, getEateries, getItineraries, getParks } from "../data/provider.js";


export const Directions = () => {
    const parks = getParks()
    const itineraries = getItineraries()
    const attractions = getAttractions()
    const eateries = getEateries()
    
    html = "<ul>"
    
    itineraries.map(itinerary => {
        parks.map(park => {
            if (park.id === itinerary.parkId) {
                html += `${park.fullName}`
            }
            if ()
        })
    })
}