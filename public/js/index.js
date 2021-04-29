import getGuildmates from "./getGuildmates.js"
import handleFormSubmit from "./handleFormSubmit.js"
import displayGuildmates from "./displayGuildmates.js"

const form = document.querySelector("#form")
form.addEventListener("submit", handleFormSubmit)

const guildMates = await getGuildmates()
// Display guild mates
guildMates.forEach(guildMate => {
    displayGuildmates(guildMate)
})










