import { fetchWeather, getParks } from "../data/provider.js";
import { displayWeather } from "../weather/WeatherProvider.js";



export const Parks = () => {
    const parks = getParks()
    let html = ""
    for (const park of parks) {
        html += `<option class="park" value="${park.id}">${park.fullName} </option>
        `
    }
    return html
}

document.addEventListener(
    "change",
    (event) => {
        const parks = getParks()
        for (const park of parks) {
            if (event.target.value === park.id) {
                document.querySelector(".chosenPark").innerHTML = `${park.fullName} 
                 <br> ${park.addresses[0].city}, ${park.addresses[0].stateCode}
                 <br><button style="width:100px" class="parkDetailsButton__${park.id}">Details</button>`
            
                document.querySelector(".detailsDisplay").innerHTML = ""
                document.querySelector(".trueWeatherDisplay").innerHTML = ""
                
                fetchWeather(park)
            }
        }
        
    }
    )
    
document.addEventListener(
    "click",
    clickEvent => {
        const parks = getParks()
        for (const park of parks) {
            if (clickEvent.target.className === `parkDetailsButton__${park.id}`) {
                document.querySelector(".detailsDisplay").innerHTML = `${park.description}`
            }
        }
        
    }
    )   

