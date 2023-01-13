import { fetchWeather, getParks, getWeather, getEvents } from "../data/provider.js";


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
                 <div class="parkButtons">
                 <button style="width:100px" class="parkDetailsButton__${park.id}">Details</button>   <button style="width:100px" id="parkEventButton--${park.fullName}">Events</button>
                 </div>
                 `
                 // reset html
                 document.querySelector(".detailsDisplay").innerHTML = ""
                 document.querySelector(".trueWeatherDisplay").innerHTML = ""
                 
                 //styles
                //document.getElementById("optionOption").style.backgroundImage =  `url(${park.images[0].url})`


                document.getElementById("bizBiz").style.backgroundColor = '#d3eaf2'
                document.getElementById("eatEat").style.backgroundColor = '#d3eaf2'
                document.getElementById("parkPark").style.backgroundColor = '#d3eaf2'
                document.getElementById("displayDisplay").style.backgroundColor = '#d3eaf2'
                


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


                document.getElementById("bizBiz").style.backgroundColor = '#d3eaf2'
                document.getElementById("eatEat").style.backgroundColor = '#d3eaf2'
                document.getElementById("parkPark").style.backgroundColor = '#d3eaf2'
                document.getElementById("displayDisplay").style.backgroundColor = '#d3eaf2'
                


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
                document.getElementById("bizBiz").style.backgroundColor = '#d3eaf2'
                document.getElementById("eatEat").style.backgroundColor = '#d3eaf2'
                document.getElementById("parkPark").style.backgroundColor = '#a8d5e5'
                document.getElementById("displayDisplay").style.backgroundColor = '#a8d5e5'

                let eatchildren = document.querySelector(".chosenEatery").children;
                
                for (const eatchild of eatchildren) {
                    eatchild.style.backgroundColor = '#d3eaf2'
                }

                let bizchildren = document.querySelector(".chosenBizarre").children;
                
                for (const bizchild of bizchildren) {
                    bizchild.style.backgroundColor = '#d3eaf2'
                }
            }
        }
        
    }
    )   

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("parkEventButton")) {
            const [, parkFullName] = itemClicked.id.split("--")
            const events = getEvents()
          
            const parkEvents = events.filter(event => event.parkfullname === parkFullName)

             
                if (parkEvents.length === 0) {
                    window.alert(`No events scheduled at this time.`)
                } else 
                    {
                    for (const parkEvent of parkEvents) {
                        window.alert(`The following events will take place at ${parkFullName}:
Title: ${parkEvent.title}
Start Date: ${parkEvent.datestart}
Times: ${parkEvent.timestart} - ${parkEvent.timeend}
Description: ${parkEvent.description.replaceAll(/<p>/g, ``).replace(/<\/p>/g, ``).replace(/<ul>/g,``).replace(/<\/ul>/g, ``).replace(/<li>/g, ``).replace(/<\/li>/g,``).replace(/<strong>/g, ``).replace(/<\/strong>/g, ``).replace(/<br \/>/g,``).replace(/<a href=/g, ``).replace(/<\/a>/g, ``).replace(/target=“_blank”/g, ``).replace(/rel=“noopener noreferrer”>/g)}
Fee Info: ${parkEvent.feeinfo}`)                                        
                    }
            }
        
        }
    }
            
)
        
        //             for (const event of events) {
        //                 if (event.parkfullname === parkFullName) {
        //                     const eventInfo = `
        // Title: ${event.title}
        // Start Date: ${event.datestart}
        // Times: ${event.timestart} - ${event.timeend}
        // Description: ${event.description}
        // Fee Info: ${event.feeinfo}`
        //                     window.alert(`The following events will take place at ${parkFullName}:
        //                                 ${eventInfo}`)
                            
        //                 //} else {
        //                     //document.querySelector(".parksButtons").innerHTML = `<button style="width:100px" class="parkDetailsButton__${park.id}">Details</button>`
        //                 }
        //                 
        //             }