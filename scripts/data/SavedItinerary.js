import { getAttractions, getEateries, getItineraries, getItineraryAttractions, getItineraryEateries, getParks } from "./provider.js";



export const displayItineraries = () => {
    const itineraries = getItineraries()
    const parks = getParks()
    const attractions = getAttractions()
    const itineraryAttractions = getItineraryAttractions()
    const eatery = getEateries()
    const itineraryEateries = getItineraryEateries()

    let html = `

        ${
            itineraries.map(
                (item) =>{
                    return `
                    <div class="itinDisplay">

                        ${
                            parks.map(
                                (park) => {
                                    if (item.parkId === park.id){
                                            return `Park: ${park.name}`
                                    }
                            }).join("")
                        } 

                        <br>
                         
                        ${
                            itineraryAttractions.map(
                                (iA) => {
                                    if (item.id === iA.postId){
                                         return `
                                                ${
                                                    attractions.map(
                                                        (biz) => {
                                                            if (biz.id === iA.attractionId){
                                                                    return `Attraction: ${biz.name}<br>`
                                                            }
                                                        }).join("")
                                                }
                                                `
                                    }
                                }).join("")
                        }


                        ${
                            itineraryEateries.map(
                                (iE) => {
                                    if (item.id === iE.postId){
                                         return `
                                                ${
                                                    eatery.map(
                                                        (eat) => {
                                                            if (eat.id === iE.eateryId){
                                                                    return `Eatery: ${eat.businessName}<br>`
                                                            }
                                                        }).join("")
                                                }
                                                `
                                    }
                                }).join("")
                        }
                        
                    <button style="width:100px" id="directions-{item.id}" class="directionsButton">Get Directions</button>   
                        
                    </div>
                    `
            
            }).join("")
        }

    `
    return html
}