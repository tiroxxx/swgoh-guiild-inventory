import updateGuildmate from "./updateGuildmates.js"
import getGuildmates from "./getGuildmates.js"
import displayGuildmates from "./displayGuildmates.js"

// Modal elements
const modalForm = document.querySelector("#modal-form")
const modal = document.querySelector("#modal");
const modalName = document.querySelector("#modal-name")
const modalStartingGP = document.querySelector("#modal-starting-gp")
const modalTwDefense = document.querySelector("#modal-tw-defense")
const modalTwOffense = document.querySelector("#modal-tw-offense")

modalForm.addEventListener("submit", async e => {
    e.preventDefault()
    const guildMateId = document.querySelector("#modal-form-submit").dataset.id
    const updatedGuildMate = {
        name: modalName.value,
        staringGP: modalStartingGP.value,
        twDefense: modalTwDefense.value,
        twOffense: modalTwOffense.value
    }
    // Hide modal
    modal.style.display = "none"

    const tr = document.querySelectorAll("table > tr")
    tr.forEach(ele => {
        ele.remove()
    })
    await updateGuildmate(updatedGuildMate, guildMateId)
    const guildMates = await getGuildmates()
    guildMates.forEach(guildMate => {
        displayGuildmates(guildMate)
    })
})

export default function handleEdit() {
    const guildMateId = this.dataset.id
    const modalBtn = document.querySelector("#modal-form-submit").setAttribute("data-id", guildMateId)
    // Guild mates' info from table
    const guildMateInfo = document.querySelector(`[data-id="${guildMateId}"]`)
    const guildMate = {
        _id: guildMateId,
        name: guildMateInfo.childNodes[0].textContent,
        staringGP: guildMateInfo.childNodes[1].textContent,
        twDefense: guildMateInfo.childNodes[2].textContent,
        twOffense: guildMateInfo.childNodes[3].textContent
    }
    // Add exixting info as placeholder
    modalName.setAttribute("value", guildMate.name)
    modalStartingGP.setAttribute("value", guildMate.staringGP)
    modalTwDefense.setAttribute("value", guildMate.twDefense)
    modalTwOffense.setAttribute("value", guildMate.twOffense)
    // Show modal
    modal.style.display = "block"
}