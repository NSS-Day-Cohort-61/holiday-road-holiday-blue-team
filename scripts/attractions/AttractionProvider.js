import { getAttractions } from "../data/provider.js";


export const attractionList = () => {

const attractions = getAttractions()
   return  `
        ${
            attractions.map(
                biz => {
                    return `
                    <option value="${biz.id}">${biz.name}</option>`
                }
            ).join("")
        }
    `

}