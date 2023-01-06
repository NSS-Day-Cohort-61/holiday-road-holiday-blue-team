import { getParks } from "../data/provider.js";


export const Parks = () => {
    const parks = getParks()
    let html = ""
    for (const park of parks) {
        html += `<option value="${park.id}">${park.fullName}</option>`
    }
    return html
}