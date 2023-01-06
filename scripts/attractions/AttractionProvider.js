import { getAttractions } from "../data/provider.js";


export const attractionList = () => {

const attractions = getAttractions()
   return  `
        ${
            attractions.map(
                biz => {
                    return `
                    <option value="biz__${biz.id}">${biz.name}</option>
                    `
                }
            ).join("")
        }
    `

}



document.addEventListener("change", (event) => {
    const biz = getAttractions()
    biz.map(
        attract => {
            if (event.target.value === `biz__${attract.id}`) {
                document.querySelector(".chosenBizarre").innerHTML = ` ${attract.name} \t<button style="width:100px" class="bizDetails__${attract.id}">Details</button> </div>
                <br> ${attract.city}, ${attract.state} 
                `
                document.querySelector(".detailsDisplay").innerHTML = ""
                
            }
        }).join("")
    
})

document.addEventListener("click", (event) => {
    const biz = getAttractions()
    biz.map(
        attract => {
            if (event.target.className === `bizDetails__${attract.id}`) {
                document.querySelector(".detailsDisplay").innerHTML = ` ${attract.description}  `
                
            }
        }).join("")
    
})