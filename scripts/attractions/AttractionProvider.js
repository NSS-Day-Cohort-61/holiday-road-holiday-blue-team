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
                document.querySelector(".chosenBizarre").innerHTML = ` ${attract.name} 
                <br> ${attract.city}, ${attract.state} 
                <div> <button style="width:100px" class="bizDetails__${attract.id}">Details</button> </div>
                `
                document.querySelector(".detailsDisplay").innerHTML = ""

                let children = document.querySelector(".chosenEatery").children;
                
            for (const child of children) {
                child.style.backgroundColor = 'rgba(236, 111, 76, 0.0)'
            }

                document.getElementById("bizBiz").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("eatEat").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("parkPark").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("displayDisplay").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                
            }
        }).join("")
    
})

document.addEventListener("click", (event) => {
    const biz = getAttractions()
    biz.map(
        attract => {
            if (event.target.className === `bizDetails__${attract.id}`) {
                document.querySelector(".detailsDisplay").innerHTML = ` ${attract.description}  `

                let children = document.querySelector(".chosenEatery").children;
                
            for (const child of children) {
                child.style.backgroundColor = 'rgba(236, 111, 76, 0.0)'
            }

                document.getElementById("parkPark").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("bizBiz").style.backgroundColor = 'rgba(236, 111, 76, 0.486)'
                document.getElementById("eatEat").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("displayDisplay").style.backgroundColor = 'rgba(236, 111, 76, 0.486)'
                
                
            }
        }).join("")
    
})