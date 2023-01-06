import apiKeys from "../Settings.js"



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
            // document.dispatchEvent(new CustomEvent("stateChanged"))
        
        }
    ) 
    
}

// export const getWeather = () => {
//     return applicationState.weather.map(forecast => ({...forecast}))
// }

export const saveItinerary = (input) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
    }


    return fetch(`http://localhost:8088/itineraries`, fetchOptions)
        .then(response => response.json())
        .then((data) => {
          applicationState.itineraries = data
        })
}