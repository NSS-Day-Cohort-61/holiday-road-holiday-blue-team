import { getEateries } from "../data/provider.js"


export const Eateries = () => {
    const eateries = getEateries()

    let html = `
            <select id="eatery" name="eatery">
            <option value="0">Choose Eatery</option>
            `

    const arrayOfEateries = eateries.map(eatery => {
        return `<option value="${eatery.id}">${eatery.businessName}</option>`
    })

    html += arrayOfEateries.join("")
    
    html += "</select>"

    return html
}