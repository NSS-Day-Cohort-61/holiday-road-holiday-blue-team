import { getAttractions } from "../data/provider.js";

export const AllSelectedAttractions = []

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
    let bizchildren = document.querySelector(".chosenBizarre").children;
    biz.map(
        attract => {
            if (event.target.value === `biz__${attract.id}` && !bizchildren.namedItem(`biz__${attract.id}`)) {
            AllSelectedAttractions.push(attract.id)
            
                document.querySelector(".chosenBizarre").innerHTML += `<div id='biz__${attract.id}'>${attract.name} 
                <br> ${attract.city}, ${attract.state} 
                <div> <button style="width:100px" class="bizDetails__${attract.id}">Details</button> <button style="width:100px" class="removeBiz__${attract.id}">Remove</button> </div></div>
                `
                document.querySelector(".detailsDisplay").innerHTML = ""

                let eatchildren = document.querySelector(".chosenEatery").children;
                
                for (const eatchild of eatchildren) {
                    eatchild.style.backgroundColor = '#d3eaf2'
                }

                let bizchildren = document.querySelector(".chosenBizarre").children;
                
                for (const bizchild of bizchildren) {
                    bizchild.style.backgroundColor = '#d3eaf2'
                }

                document.getElementById("bizBiz").style.backgroundColor = '#d3eaf2'
                document.getElementById("eatEat").style.backgroundColor = '#d3eaf2'
                document.getElementById("parkPark").style.backgroundColor = '#d3eaf2'
                document.getElementById("displayDisplay").style.backgroundColor = '#d3eaf2'
                
            }
        }).join("")
    
})

document.addEventListener("click", (event) => {
    const biz = getAttractions()
    let bizchildren = document.querySelector(".chosenBizarre").children;
    biz.map(
        attract => {
            if (event.target.id === `search-biz-${attract.id}` && !bizchildren.namedItem(`biz__${attract.id}`)) {
            AllSelectedAttractions.push(attract.id)
            
                document.querySelector(".chosenBizarre").innerHTML += `<div id='biz__${attract.id}'>${attract.name} 
                <br> ${attract.city}, ${attract.state} 
                <div> <button style="width:100px" class="bizDetails__${attract.id}">Details</button> <button style="width:100px" class="removeBiz__${attract.id}">Remove</button> </div></div>
                `
                document.querySelector(".detailsDisplay").innerHTML = ""

                let eatchildren = document.querySelector(".chosenEatery").children;
                
                for (const eatchild of eatchildren) {
                    eatchild.style.backgroundColor = '#d3eaf2'
                }

                let bizchildren = document.querySelector(".chosenBizarre").children;
                
                for (const bizchild of bizchildren) {
                    bizchild.style.backgroundColor = '#d3eaf2'
                }

                document.getElementById("bizBiz").style.backgroundColor = '#d3eaf2'
                document.getElementById("eatEat").style.backgroundColor = '#d3eaf2'
                document.getElementById("parkPark").style.backgroundColor = '#d3eaf2'
                document.getElementById("displayDisplay").style.backgroundColor = '#d3eaf2'
                
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
                
                document.getElementById("eatEat").style.backgroundColor = '#d3eaf2'
                document.getElementById("parkPark").style.backgroundColor = '#d3eaf2'

                
                let eatchildren = document.querySelector(".chosenEatery").children;
                
                for (const eatchild of eatchildren) {
                    eatchild.style.backgroundColor = '#d3eaf2'
                }

                let bizchildren = document.querySelector(".chosenBizarre").children;
                
                for (const bizchild of bizchildren) {
                    bizchild.style.backgroundColor = '#d3eaf2'
                }               
                
                document.getElementById(`biz__${attract.id}`).style.backgroundColor = '#a8d5e5'
                document.getElementById("displayDisplay").style.backgroundColor = '#a8d5e5'
              
            }
        })
    
})

//remove
document.addEventListener("click", (event) => {
    const biz = getAttractions()
    biz.map(
        attract => {
            if (event.target.className === `removeBiz__${attract.id}`) {
                
              AllSelectedAttractions.splice(AllSelectedAttractions.indexOf(attract.id), 1)
              

                document.querySelector(`#biz__${attract.id}`).innerHTML = ""
                document.querySelector(`.bizDetails__${attract.id}`).innerHTML = ""
                document.getElementById("displayDisplay").style.backgroundColor = '#d3eaf2'
                document.getElementById("bizBiz").style.backgroundColor = '#d3eaf2'              
                
            }
        }).join("")
    
})