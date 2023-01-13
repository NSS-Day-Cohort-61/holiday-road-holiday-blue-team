import { getEateries } from "../data/provider.js"

document.addEventListener("change", changeEvent => {
    const eateries = getEateries()
    eateries.map(eatery => {
        if (changeEvent.target.value === `eatery__${eatery.id}`) {
            document.querySelector(".chosenEatery").innerHTML += `<div class="bigEats" id="bigEats-${eatery.id}">${eatery.businessName}
            <br> ${eatery.city}, ${eatery.state}
            <br><button style="width:100px" class="eateryDetails-${eatery.id}">Details</button>
            <button style="width:100px" class="eateryRemove-${eatery.id}">Remove</button>
            </div>
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

document.addEventListener("click", changeEvent => {
    const eateries = getEateries()
    eateries.map(eatery => {
        if (changeEvent.target.id === `search-eat-${eatery.id}`) {
            document.querySelector(".chosenEatery").innerHTML += `<div class="bigEats" id="bigEats-${eatery.id}">${eatery.businessName}
            <br> ${eatery.city}, ${eatery.state}
            <br><button style="width:100px" class="eateryDetails-${eatery.id}">Details</button>
            <button style="width:100px" class="eateryRemove-${eatery.id}">Remove</button>
            </div>
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



document.addEventListener("click", clickEvent => {
    const eateries = getEateries()
    eateries.map(eatery => {
        if (clickEvent.target.className === `eateryRemove-${eatery.id}`) {
            
            
            document.getElementById(`bigEats-${eatery.id}`).remove()
            
            if (document.querySelector(".detailsDisplay").innerHTML === `<div id="eat-${eatery.id}">${eatery.description}</div>`){
                document.querySelector(".detailsDisplay").innerHTML = ''
                document.getElementById(`displayDisplay`).style.backgroundColor = '#d3eaf2'
                document.getElementById(`bigEats-${eatery.id}`).style.backgroundColor = '#d3eaf2'
            }
        }
        
    })
})
document.addEventListener("click", clickEvent => {
    const eateries = getEateries()
    eateries.map(eatery => {
        if (clickEvent.target.className === `eateryDetails-${eatery.id}`) {
            document.querySelector(".detailsDisplay").innerHTML = `<div id="eat-${eatery.id}">${eatery.description}</div>`
            document.getElementById("bizBiz").style.backgroundColor = '#d3eaf2'
            document.getElementById("parkPark").style.backgroundColor = '#d3eaf2'
           
            
                let eatchildren = document.querySelector(".chosenEatery").children;
                
                for (const eatchild of eatchildren) {
                    eatchild.style.backgroundColor = '#d3eaf2'
                }

                let bizchildren = document.querySelector(".chosenBizarre").children;
                
                for (const bizchild of bizchildren) {
                    bizchild.style.backgroundColor = '#d3eaf2'
                }
               
            
            
            document.getElementById(`bigEats-${eatery.id}`).style.backgroundColor = '#a8d5e5'
            document.getElementById("displayDisplay").style.backgroundColor = '#a8d5e5'
            
        }
    })
})
export const Eateries = () => {
    const eateries = getEateries()
    let html = `
            <select id="eatery" name="eatery">
            <option value="0">Choose Eatery</option>
            `
    const arrayOfEateries = eateries.map(eatery => {
        return `<option value="eatery__${eatery.id}">${eatery.businessName}</option>`
    })
    html += arrayOfEateries.join("")
    
    html += "</select>"
    return html
}


