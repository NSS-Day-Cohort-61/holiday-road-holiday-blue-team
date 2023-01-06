import { getParks } from "../data/provider.js";


export const Parks = () => {
    const parks = getParks()
    let html = ""
    for (const park of parks) {
        html += `<option class="park" value="${park.id}">${park.fullName}</option>`
    }
    return html
}

document.addEventListener(
    "change",
    (event) => {
        const parks = getParks()
        for (const park of parks) {
            if (event.target.value === park.id) {
                document.querySelector(".chosenPark").innerHTML = `${park.fullName}`
            }
        }

    }
)

