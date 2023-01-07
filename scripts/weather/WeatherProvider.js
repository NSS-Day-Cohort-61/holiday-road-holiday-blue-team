import { getWeather } from "../data/provider.js";

export const displayWeather = (data) => {
   
    const forecast = getWeather()
    console.log(forecast)
    return `Your Weather Forecast Here When I can figure out promises`
       
    
    }