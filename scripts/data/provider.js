import apiKeys from "../Settings.js"
//json-server db.json -p 8088 -w

const applicationState = {
  itineraries: [],
  parks: [],
  attractions: [],
  eateries:[],
  weather: []
}

export const fetchParks = () => {
    return fetch (`https://developer.nps.gov/api/v1/parks?api_key=${apiKeys.npsKey}`)
    .then(response => response.json())
    .then(
        (servicePosts) => {
          
            applicationState.parks = servicePosts
        }
        )
}

export const getParks = () => {
    return applicationState.parks.data.map(park => ({...park}))
}

export const fetchAttractions = () => {
    return fetch (`http://holidayroad.nss.team/bizarreries`)
    .then(response => response.json())
    .then(
        (servicePosts) => {
            
            applicationState.attractions = servicePosts
        }
        )
}

export const getAttractions = () => {
    return applicationState.attractions.map(biz => ({...biz}))
}

export const fetchEateries = () => {
    return fetch (`http://holidayroad.nss.team/eateries`)
    .then(response => response.json())
    .then(
        (servicePosts) => {
           
            applicationState.eateries = servicePosts
        }
        )
}

export const getEateries = () => {
    return applicationState.eateries.map(eat => ({...eat}))
}

export const fetchWeather = (parkObj) => {
    
    return fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${parkObj.latitude}&lon=${parkObj.longitude}&appid=${apiKeys.weatherKey}`)
    .then(res => res.json())
    .then(
        (data) => {
            applicationState.weather = data
                const fiveDayIndex = [data.list[1],data.list[9], data.list[17],data.list[25], data.list[33]]
                for (const forecast of fiveDayIndex){
                    document.querySelector(".trueWeatherDisplay").innerHTML += `
                        
                        <div class="dayDisplay">
                            <div class="weatherText">
                            ${
                            new Date(forecast.dt_txt).toDateString()
                            }
                            <br>
                            high temp of
                            ${
                            Math.floor(1.8 * (forecast.main.temp - 273.15) + 32)
                            } F
                            <br>
                            ${forecast.weather[0].description}
                            <br>
                        </div>
                        <div class="weatherIcon"><img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png">
                        </div>
                        </div>
                        `
                }
             
})}


export const getWeather = () => {
    return applicationState.weather.map(forecast => ({...forecast}))
}

export const saveItinerary = (input) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
    }
    const mainContainer = document.querySelector("#holidayRoad")
    return fetch(`http://localhost:8088/itineraries`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const fetchItinerary = () => {
    return fetch(`http://localhost:8088/itineraries`)
        .then(response => response.json())
        .then(
            (userItinerary) => {
                applicationState.itineraries = userItinerary
            }
        )
}

export const getItineraries = () => {
    return applicationState.itineraries.map(it => ({...it}))
}