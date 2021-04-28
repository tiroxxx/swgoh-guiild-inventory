import getGuildmates from "./getGuildmates.js"
import handleFormSubmit from "./handleFormSubmit.js"

const button = document.querySelector("#button")
button.textContent = "refresh"
const container = document.querySelector("#container")
const table = document.querySelector("#table")
const form = document.querySelector("#form")

button.addEventListener("click", getGuildmates)
form.addEventListener("submit", handleFormSubmit)








