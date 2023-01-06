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


document.addEventListener("change", (event) => {
    const biz = getAttractions()
    biz.map(
        attract => {
            if (parseInt(event.target.value) === attract.id) {
                document.querySelector(".chosenBizarre").innerHTML = ` ${attract.name} `
                
            }
        }).join("")
    
})