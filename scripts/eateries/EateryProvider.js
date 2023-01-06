import { getEateries } from "../data/provider.js"



document.addEventListener("change", changeEvent => {
    const eateries = getEateries()

    eateries.map(eatery => {
        if (changeEvent.target.value === `eatery__${eatery.id}`) {
            document.querySelector(".chosenEatery").innerHTML = `${eatery.businessName}
            <button style="width:100px" class="eateryDetails-${eatery.id}">Details</button>`
            document.querySelector(".detailsDisplay").innerHTML = ""
        }
    }).join("")
})
document.addEventListener("click", clickEvent => {
    const eateries = getEateries()

    eateries.map(eatery => {
        if (clickEvent.target.className === `eateryDetails-${eatery.id}`) {
            document.querySelector(".detailsDisplay").innerHTML = `${eatery.description}`
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


