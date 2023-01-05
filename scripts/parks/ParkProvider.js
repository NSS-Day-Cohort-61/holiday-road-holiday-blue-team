import { getParks } from "../data/provider.js";

const parks = getParks()

export const Parks = () => {
    let html = `<opiton value="0">Select a National Park:</option>`

    for (const park of parks) {
        html += `<option value="${park.id}">${park.fullName}</option>`
    }
    html += `</select>`
    return html
}