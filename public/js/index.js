import getGuildmates from "./getGuildmates.js"
import handleFormSubmit from "./handleFormSubmit.js"
import displayGuildmates from "./displayGuildmates.js"

const container = document.querySelector("#container")
const table = document.querySelector("#table")
const form = document.querySelector("#form")

const guildMates = await getGuildmates()
// Display guild mates
guildMates.forEach(guildMate => {
    displayGuildmates(guildMate)
})

form.addEventListener("submit", handleFormSubmit)








