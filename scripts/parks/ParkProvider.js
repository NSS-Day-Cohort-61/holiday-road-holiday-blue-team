import { fetchWeather, getParks, getWeather } from "../data/provider.js";


export const Parks = () => {
    const parks = getParks()
    let html = ""
    for (const park of parks) {
        html += `<option value="${park.id}">${park.fullName} </option>
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

                document.querySelector(".chosenPark").innerHTML = `
                 ${park.fullName} 
                 <br> ${park.addresses[0].city}, ${park.addresses[0].stateCode}
                 <br>
                 <button style="width:100px" class="parkDetailsButton__${park.id}">Details</button>
                 `
                 // reset html
                 document.querySelector(".detailsDisplay").innerHTML = ""
                 document.querySelector(".trueWeatherDisplay").innerHTML = ""
                 
                 //styles
                //document.getElementById("optionOption").style.backgroundImage =  `url(${park.images[0].url})`


                document.getElementById("bizBiz").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("eatEat").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("parkPark").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("displayDisplay").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                


                fetchWeather(park)
                .then(() => getWeather())
            }
        }
        
    }
    )
    
document.addEventListener(
    "click",
    (event) => {
        const parks = getParks()
        for (const park of parks) {
            if (event.target.id === `search-park-${park.id}`) {

                document.querySelector(".chosenPark").innerHTML = `
                 ${park.fullName} 
                 <br> ${park.addresses[0].city}, ${park.addresses[0].stateCode}
                 <br>
                 <button style="width:100px" class="parkDetailsButton__${park.id}">Details</button>
                 `
                 // reset html
                 document.querySelector(".detailsDisplay").innerHTML = ""
                 document.querySelector(".trueWeatherDisplay").innerHTML = ""
                 
                 //styles
                //document.getElementById("optionOption").style.backgroundImage =  `url(${park.images[0].url})`


                document.getElementById("bizBiz").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("eatEat").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("parkPark").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("displayDisplay").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                


                fetchWeather(park)
                .then(() => getWeather())
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
                document.getElementById("bizBiz").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("eatEat").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("parkPark").style.backgroundColor = 'rgba(236, 111, 76, 0.486)'
                document.getElementById("displayDisplay").style.backgroundColor = 'rgba(236, 111, 76, 0.486)'

                let eatchildren = document.querySelector(".chosenEatery").children;
                
                for (const eatchild of eatchildren) {
                    eatchild.style.backgroundColor = 'rgba(236, 111, 76, 0.0)'
                }

                let bizchildren = document.querySelector(".chosenBizarre").children;
                
                for (const bizchild of bizchildren) {
                    bizchild.style.backgroundColor = 'rgba(236, 111, 76, 0.0)'
                }
            }
        }
        
    }
    )   

