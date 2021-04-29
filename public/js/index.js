import getGuildmates from "./getGuildmates.js"
import handleFormSubmit from "./handleFormSubmit.js"
import displayGuildmates from "./displayGuildmates.js"

const form = document.querySelector("#form")
form.addEventListener("submit", handleFormSubmit)

async function start() {
    // Display guild mates
    const tr = document.querySelectorAll("table > tr")
    tr.forEach(ele => {
        ele.remove()
    })
    const guildMates = await getGuildmates()
    displayGuildmates(guildMates)

}

start()











