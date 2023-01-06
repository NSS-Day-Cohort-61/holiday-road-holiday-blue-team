import { getAttractions } from "../data/provider.js";

const attractions = getAttractions()

export const attractionList = () => {
   let html =  `
        ${
            attractions.map(
                (biz) => {
                    return `
                    <option value="${biz.id}">${biz.name}</option>`
                }
            ).join("")
        }
    `
    return html
}