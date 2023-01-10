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

//selected
document.addEventListener("change", (event) => {
    const biz = getAttractions()
    biz.map(
        attract => {
            if (event.target.value === `biz__${attract.id}`) {
                document.querySelector(".chosenBizarre").innerHTML += `<div id='biz__${attract.id}'>${attract.name} 
                <br> ${attract.city}, ${attract.state} 
                <div> <button style="width:100px" class="bizDetails__${attract.id}">Details</button> <button style="width:100px" class="removeBiz__${attract.id}">Remove</button> </div></div>
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

//details
document.addEventListener("click", (event) => {
    const biz = getAttractions()
    biz.map(
        attract => {
            if (event.target.className === `bizDetails__${attract.id}`) {
                document.querySelector(".detailsDisplay").innerHTML = `<div class='bizDetails__${attract.id}'>${attract.description}</div>`
                document.getElementById(`biz__${attract.id}`).style.backgroundColor = 'rgba(236, 111, 76, 0.486)'
                document.getElementById("displayDisplay").style.backgroundColor = 'rgba(236, 111, 76, 0.486)'
              
                document.getElementById("bizBiz").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
            }
        }).join("")
    
})

//remove
document.addEventListener("click", (event) => {
    const biz = getAttractions()
    biz.map(
        attract => {
            if (event.target.className === `removeBiz__${attract.id}`) {
                document.querySelector(`#biz__${attract.id}`).innerHTML = ""
                document.querySelector(`.bizDetails__${attract.id}`).innerHTML = ""
                document.getElementById("displayDisplay").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'
                document.getElementById("bizBiz").style.backgroundColor = 'rgba(236, 111, 76, 0.286)'              
                
            }
        }).join("")
    
})